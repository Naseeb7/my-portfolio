import Image from "next/image";
import Link from "next/link";
import React from "react";
import Experiences from "@/data/experience.json";
import ExperienceSection from "../../components/ExperienceSection";
import ContainerWrapper from "../../components/ContainerWrapper";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Work Experience - Pradosh Chand Portfolio",
  description: "Explore my professional journey as a Full Stack Developer. Learn about my roles at Hexadecimal Software Pvt Ltd and other experiences in web and mobile development.",
  keywords: "Work Experience, Professional Experience, Full Stack Developer, Career, Web Development, Mobile Development, Software Engineering",
  openGraph: {
    title: "Work Experience - Pradosh Chand Portfolio",
    description: "Explore my professional journey as a Full Stack Developer. Learn about my roles at Hexadecimal Software Pvt Ltd and other experiences in web and mobile development.",
    url: "https://your-portfolio-url.com/experience",
    siteName: "Pradosh Chand Portfolio",
    images: [
      {
        url: "/profile-image.webp",
        width: 1200,
        height: 630,
        alt: "Pradosh Chand Work Experience",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience - Pradosh Chand Portfolio",
    description: "Explore my professional journey as a Full Stack Developer. Learn about my roles at Hexadecimal Software Pvt Ltd and other experiences in web and mobile development.",
    creator: "@pradoshchand", // Replace with your Twitter handle
    images: ["/profile-image.webp"],
  },
};

const ExperiencePage = () => {
  // Define breadcrumbs for experience page
  const breadcrumbs = [
    { name: "Home", url: "https://your-portfolio-url.com/" },
    { name: "Experience", url: "https://your-portfolio-url.com/experience" }
  ];

  return (
    <section>
      {/* Structured Data */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      <ContainerWrapper className="flex-col gap-8">
        <div className="flex w-full justify-between lg:items-center">
          <h1 className="text-[32px] font-extrabold">
            Experience on <span className="text-primary-100">Full Stack</span>
          </h1>
          <Link href={"/"}>
            <Image
              src={"/icons/crossIcon.svg"}
              height={32}
              width={32}
              alt="Close icon to return to homepage"
            />
          </Link>
        </div>
        <div>
          {Experiences?.map((experience, index) => (
            <ExperienceSection
              key={`${experience.role}_${index}`}
              {...experience}
            />
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default ExperiencePage;
