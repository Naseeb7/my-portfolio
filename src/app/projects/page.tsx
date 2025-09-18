import React, { Suspense } from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import Image from "next/image";
import Projects from "@/data/projects.json";
import Link from "next/link";
import ProjectsGrid from "../../components/ProjectsGrid";
import { Metadata } from "next";
import ProjectSchema from "@/components/SEO/ProjectSchema";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Featured Projects - Pradosh Chand Portfolio",
  description: "Explore my featured projects including CoverDev, JustSocial, and iSee. Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB.",
  keywords: "Web Development Projects, Mobile App Projects, Full Stack Projects, Portfolio Projects, Next.js Projects, React Native Projects, Node.js Projects",
  openGraph: {
    title: "Featured Projects - Pradosh Chand Portfolio",
    description: "Explore my featured projects including CoverDev, JustSocial, and iSee. Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB.",
    url: "https://your-portfolio-url.com/projects",
    siteName: "Pradosh Chand Portfolio",
    images: [
      {
        url: "/projects/coverdev/hero-section.webp",
        width: 1200,
        height: 630,
        alt: "Pradosh Chand Portfolio Projects",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Projects - Pradosh Chand Portfolio",
    description: "Explore my featured projects including CoverDev, JustSocial, and iSee.",
    creator: "@pradoshchand", // Replace with your Twitter handle
    images: ["/projects/coverdev/hero-section.webp"],
  },
};

const ProjectsPage = () => {
  // Define breadcrumbs for projects page
  const breadcrumbs = [
    { name: "Home", url: "https://your-portfolio-url.com/" },
    { name: "Projects", url: "https://your-portfolio-url.com/projects" }
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
