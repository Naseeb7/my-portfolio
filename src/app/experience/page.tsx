import Image from "next/image";
import Link from "next/link";
import React from "react";
import ExperiencesData from "@/data/experience.json";
import ContainerWrapper from "../../components/ContainerWrapper";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";
import { createPageMetadata, getAbsoluteUrl } from "@/lib/seo";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import { IExperience } from "@/constants/types";

const Experiences = ExperiencesData as IExperience[];

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "Explore my experience owning frontend architecture, production web and mobile applications, backend systems, and engineering delivery across fast-paced startup environments.",
  path: "/experience",
  keywords: [
    "Pradosh Chand",
    "Frontend Product Engineer",
    "React Developer",
    "Next.js Engineer",
    "Product Engineer",
    "Software Engineer Portfolio",
  ],
});

const ExperiencePage = () => {
  // Define breadcrumbs for experience page
  const breadcrumbs = [
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Experience", url: getAbsoluteUrl("/experience") },
  ];

  return (
    <section>
      {/* Structured Data */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <ContainerWrapper className="flex-col gap-8">
        <div className="flex w-full justify-between lg:items-center">
          <h1 className="text-[32px] font-extrabold">
            Engineering <span className="text-primary-100">Experience</span>
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
          <ExperienceTimeline experiences={Experiences} />
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default ExperiencePage;
