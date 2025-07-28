import React from "react";
import ContainerWrapper from "../components/ContainerWrapper";
import Image from "next/image";
import Projects from "@/data/projects.json";
import ProjectCard from "../components/UI/ProjectCard";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <section>
      <ContainerWrapper className="gap-8 flex-col">
        <div className="flex w-full justify-between items-center">
          <p className="text-[32px] font-extrabold">
            My Best <span className="text-primary-100">Creations</span>
          </p>
          <Link href={"/"}>
            <Image
              src={"/icons/crossIcon.svg"}
              height={32}
              width={32}
              alt="Arrow"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-6">
          {Projects.map((project) => {
            return <ProjectCard {...project} key={project.name} />;
          })}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default ProjectsPage;
