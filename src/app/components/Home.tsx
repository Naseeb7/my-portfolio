import React, { Suspense } from "react";
import ContainerWrapper from "./ContainerWrapper";
import Button from "./UI/Button";
import Image from "next/image";
import Projects from "@/data/projects.json";
import Link from "next/link";
import ProjectsGrid from "./ProjectsGrid";
import SocialLinks from "./About/SocialLinks";
import AboutSkillsSection from "./About/AboutSkillsSection";
import AboutContactSection from "./About/AboutContactSection";

const Home = () => {
  return (
    <section className="flex w-full flex-col gap-3">
      <div className="flex w-full lg:hidden">
        <SocialLinks />
      </div>
      {/* Top Section */}
      <ContainerWrapper className="relative flex-col gap-4">
        <h1 className="text-4xl lg:text-[52px] font-extrabold">
          Full Stack Solutions for Your Real-World Challenges.
        </h1>
        <Link href={"/contact"}>
          <Button
            className="lg:absolute bottom-5 right-5"
            rounded="rounded-full"
            width="w-full lg:w-1/5"
          >
            Hire Me👋
          </Button>
        </Link>
      </ContainerWrapper>

      {/* Experience */}
      <Link href={"/experience"}>
        <ContainerWrapper className="flex-col gap-3">
          <div className="flex w-full justify-between items-start">
            <p className="text-2xl lg:text-[32px] font-extrabold">
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
            <p className="text-2xl lg:text-[32px] font-extrabold">
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
            className="lg:grid-cols-3"
            showNames={false}
          />
        </Suspense>
      </ContainerWrapper>
      <div className="flex flex-col gap-3 w-full lg:hidden">
        <AboutSkillsSection />
        <AboutContactSection />
      </div>
    </section>
  );
};

export default Home;
