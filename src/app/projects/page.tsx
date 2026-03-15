import React, { Suspense } from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import Image from "next/image";
import Projects from "@/data/projects.json";
import Link from "next/link";
import ProjectsGrid from "../../components/ProjectsGrid";
import { Metadata } from "next";
import ProjectSchema from "@/components/SEO/ProjectSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";
import { createPageMetadata, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Browse selected web and mobile projects, including production work built with Next.js, React Native, Node.js, and MongoDB.",
  path: "/projects",
  image: "/projects/coverdev/hero-section.webp",
  keywords: [
    "Pradosh Chand projects",
    "Full Stack Developer portfolio projects",
    "Next.js projects",
    "React Native projects",
  ],
});

const ProjectsPage = () => {
  // Define breadcrumbs for projects page
  const breadcrumbs = [
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Projects", url: getAbsoluteUrl("/projects") }
  ];

  return (
    <section>
      {/* Structured Data */}
      <ProjectSchema projects={Projects} />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      <ContainerWrapper className="gap-8 flex-col">
        <div className="flex w-full justify-between items-center">
          <p className="text-[32px] font-extrabold">
            Featured <span className="text-primary-100">Projects</span>
          </p>
          <Link href={"/"}>
            <Image
              src={"/icons/crossIcon.svg"}
              height={32}
              width={32}
              alt="Close icon to return to homepage"
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
