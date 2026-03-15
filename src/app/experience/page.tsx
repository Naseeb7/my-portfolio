import Image from "next/image";
import Link from "next/link";
import React from "react";
import Experiences from "@/data/experience.json";
import ExperienceSection from "../../components/ExperienceSection";
import ContainerWrapper from "../../components/ContainerWrapper";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";
import { createPageMetadata, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Explore my work experience building web and mobile products, leading backend and app delivery, and shipping features used in production.",
  path: "/experience",
  keywords: [
    "Pradosh Chand experience",
    "Full Stack Developer experience",
    "Software Engineer portfolio",
    "Next.js Developer",
  ],
});

const ExperiencePage = () => {
  // Define breadcrumbs for experience page
  const breadcrumbs = [
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Experience", url: getAbsoluteUrl("/experience") }
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
