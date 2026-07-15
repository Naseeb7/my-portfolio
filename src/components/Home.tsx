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
import PersonSchema from "./SEO/PersonSchema";
import ProjectSchema from "./SEO/ProjectSchema";

const Home = () => {
  return (
    <section className="flex w-full flex-col gap-3">
      {/* Structured Data */}
      <PersonSchema />
      <ProjectSchema projects={Projects} />

      {/* Top Section */}
      <ContainerWrapper className="relative flex-col gap-5">
        <h1 className="text-3xl lg:text-[52px] font-extrabold">
          Building production products through frontend engineering,
          architecture, and ownership.
        </h1>
        <Link href={"/contact"}>
          <Button
            className="lg:absolute bottom-5 right-5"
            rounded="rounded-full"
            width="w-full lg:w-1/4"
          >
            Work With Me👋
          </Button>
        </Link>
      </ContainerWrapper>

      <div className="flex w-full lg:hidden">
        <SocialLinks />
      </div>
      {/* Experience */}
      <Link href={"/experience"}>
        <ContainerWrapper className="flex-col gap-3">
          <div className="flex w-full justify-between items-start">
            <h2 className="text-2xl lg:text-[32px] font-extrabold">
              Engineering <span className="text-primary-100">Experience</span>
            </h2>
            <Image
              src={"/icons/rightArrow.svg"}
              height={24}
              width={24}
              alt="Right arrow icon to navigate to experience page"
            />
          </div>
          <p>
            Frontend Product Engineer with experience owning production web,
            mobile, and backend systems in startup environments. Designed
            frontend architecture, built scalable backend services, managed
            production deployments, mentored engineers, and collaborated across
            product, design, and leadership to deliver reliable software from
            concept to production.
          </p>
        </ContainerWrapper>
      </Link>

      {/* Projects Section */}
      <ContainerWrapper className="flex-col gap-3">
        <Link href={"/projects"}>
          <div className="flex w-full justify-between items-start">
            <h2 className="text-2xl lg:text-[32px] font-extrabold">
              Selected Engineering{" "}
              <span className="text-primary-100">Projects</span>
            </h2>
            <Image
              src={"/icons/rightArrow.svg"}
              height={24}
              width={24}
              alt="Right arrow icon to navigate to projects page"
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
