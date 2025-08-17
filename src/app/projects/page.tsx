import React, { Suspense } from "react";
import ContainerWrapper from "../components/ContainerWrapper";
import Image from "next/image";
import Projects from "@/data/projects.json";
import Link from "next/link";
import ProjectsGrid from "../components/ProjectsGrid";

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
        <Suspense fallback={<div>Loading projects...</div>}>
          <ProjectsGrid projects={Projects} className="lg:grid-cols-2" />
        </Suspense>
      </ContainerWrapper>
    </section>
  );
};

export default ProjectsPage;
