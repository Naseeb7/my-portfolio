import React, { Suspense } from "react";
import ContainerWrapper from "./ContainerWrapper";
import Button from "./UI/Button";
import Image from "next/image";
import Projects from "@/data/projects.json";
import Link from "next/link";
import ProjectsGrid from "./ProjectsGrid";

const Home = () => {
  return (
    <section className="flex w-full flex-col gap-3">
      {/* Top Section */}
      <ContainerWrapper className="relative">
        <p className="text-[52px] font-extrabold">
          Full Stack Solutions for Your Real-World Challenges.
        </p>
        <Link href={"/contact"}>
          <Button
            className="absolute bottom-5 right-5"
            rounded="rounded-full"
            width="w-1/5"
          >
            Hire Me👋
          </Button>
        </Link>
      </ContainerWrapper>

      {/* Experience */}
      <Link href={"/experience"}>
        <ContainerWrapper className="flex-col gap-3">
          <div className="flex w-full justify-between items-start">
            <p className="text-[32px] font-extrabold">
              Experience on <span className="text-primary-100">Full Stack</span>
            </p>
            <Image
              src={"/icons/rightArrow.svg"}
              height={24}
              width={24}
              alt="Arrow"
            />
          </div>
          <p>
            As a Full Stack Developer with around 2 years of experience, I aim
            to enhance my skills in both frontend and backend technologies. I’m
            eager to take on challenging projects, collaborate with teams, and
            grow in a dynamic environment, ultimately progressing towards a
            senior development role.
          </p>
        </ContainerWrapper>
      </Link>

      {/* Projects Section */}
      <ContainerWrapper className="flex-col gap-3">
        <Link href={"/projects"}>
          <div className="flex w-full justify-between items-start">
            <p className="text-[32px] font-extrabold">
              My Best <span className="text-primary-100">Creations</span>
            </p>
            <Image
              src={"/icons/rightArrow.svg"}
              height={24}
              width={24}
              alt="Arrow"
            />
          </div>
        </Link>
        <Suspense fallback={<div>Loading projects...</div>}>
          <ProjectsGrid
            projects={Projects}
            className="grid-cols-3"
            showNames={false}
          />
        </Suspense>
      </ContainerWrapper>
    </section>
  );
};

export default Home;
