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
    "Explore engineering projects across web, mobile, backend systems, realtime applications, and end-to-end product development.",
  path: "/projects",
  image: "/projects/coverdev/hero-section.webp",
  keywords: [
    "Pradosh Chand",
    "Full-Stack Product Engineer",
    "Software Engineer",
    "Engineering Portfolio",
    "Next.js Projects",
    "React Projects",
    "React Native Projects",
    "Node.js Projects",
    "Realtime Systems",
    "System Design",
  ],
});

const ProjectsPage = () => {
  // Define breadcrumbs for projects page
  const breadcrumbs = [
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Projects", url: getAbsoluteUrl("/projects") },
  ];

  return (
    <section>
      {/* Structured Data */}
      <ProjectSchema projects={Projects} />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <ContainerWrapper className="gap-8 flex-col">
        <div className="flex w-full justify-between items-center">
          <p className="text-[32px] font-extrabold">
            Engineering <span className="text-primary-100">Projects</span>
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
        <p className="max-w-3xl leading-7 text-secondary-100">
          A selection of web, mobile, and backend projects focused on product
          engineering, realtime systems, and end-to-end technical ownership.
        </p>
        <Suspense fallback={<div>Loading engineering projects...</div>}>
          <ProjectsGrid projects={Projects} className="lg:grid-cols-2" />
        </Suspense>
      </ContainerWrapper>
    </section>
  );
};

export default ProjectsPage;
