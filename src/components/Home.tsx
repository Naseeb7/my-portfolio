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
          Turning Code into Scalable, User-Focused Digital Products
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
              Experience on <span className="text-primary-100">Full Stack</span>
            </h2>
            <Image
              src={"/icons/rightArrow.svg"}
              height={24}
              width={24}
              alt="Right arrow icon to navigate to experience page"
            />
          </div>
          <p>
            With 2 years of experience in the MERN stack, I’ve led teams,
            architected subscription pipelines, and delivered production-ready
            web and mobile apps. Explore my journey and the impact I’ve made.
          </p>
        </ContainerWrapper>
      </Link>

      {/* Projects Section */}
      <ContainerWrapper className="flex-col gap-3">
        <Link href={"/projects"}>
          <div className="flex w-full justify-between items-start">
            <h2 className="text-2xl lg:text-[32px] font-extrabold">
              Featured <span className="text-primary-100">Projects</span>
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
