"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProjectCard from "./UI/ProjectCard";
import { IProject } from "../constants/types";
import ProjectModal from "./ProjectModal";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import useIsMobile from "../hooks/useIsMobile";

export default function ProjectsGrid({
  projects,
  className = "",
  showNames = true,
}: {
  projects: IProject[];
  className?: string;
  showNames?: boolean;
}) {
  const [selected, setSelected] = useState<IProject | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const isMobile = useIsMobile();

  useBodyScrollLock(!!selected);
  // Check for project_id in query params on mount
  useEffect(() => {
    const projectId = searchParams.get("project_id");
    if (projectId) {
      const foundProject = projects.find((p) => String(p.id) === projectId);
      if (foundProject) {
        setSelected(foundProject);
      }
    }
  }, [searchParams, projects]);

  const openProject = (project: IProject) => {
    setSelected(project);
    const params = new URLSearchParams(window.location.search);
    params.set("project_id", String(project.id));
    router.replace(`?${params.toString()}`);
  };

  const closeModal = () => {
    setSelected(null);
    const params = new URLSearchParams(window.location.search);
    params.delete("project_id");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className={`grid gap-x-3 gap-y-6 ${className}`}>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openProject(project)}
            className="cursor-pointer"
          >
            <ProjectCard {...project} showName={showNames || isMobile} />
          </div>
        ))}
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  );
}
