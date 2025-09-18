import React from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import ClientBackButton from "../../components/UI/ClientBackButton";
import Skills from "@/data/skills.json";
import SkillCard from "../../components/UI/SkillCard";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Technical Skills - Pradosh Chand Portfolio",
  description: "Discover my technical proficiencies across Frontend Development, Mobile Development, Backend Development, Databases, and Cloud technologies.",
  keywords: "Technical Skills, Developer Skills, Full Stack Developer, Web Development Skills, Mobile Development Skills, Programming Skills",
  openGraph: {
    title: "Technical Skills - Pradosh Chand Portfolio",
    description: "Discover my technical proficiencies across Frontend Development, Mobile Development, Backend Development, Databases, and Cloud technologies.",
    url: "https://your-portfolio-url.com/skills",
    siteName: "Pradosh Chand Portfolio",
    images: [
      {
        url: "/profile-image.webp",
        width: 1200,
        height: 630,
        alt: "Pradosh Chand Technical Skills",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills - Pradosh Chand Portfolio",
    description: "Discover my technical proficiencies across Frontend Development, Mobile Development, Backend Development, Databases, and Cloud technologies.",
    creator: "@pradoshchand", // Replace with your Twitter handle
    images: ["/profile-image.webp"],
  },
};

const SkillsPage = () => {
  // Define breadcrumbs for skills page
  const breadcrumbs = [
    { name: "Home", url: "https://your-portfolio-url.com/" },
    { name: "Skills", url: "https://your-portfolio-url.com/skills" }
  ];

  return (
    <section>
      {/* Structured Data */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />
      
      <ContainerWrapper className="flex flex-col gap-8">
        <header className="flex w-full justify-between items-start lg:items-center">
          <h1 className="text-[32px] font-extrabold">
            Technical <span className="text-primary-100">Proficiencies</span>
          </h1>
          <ClientBackButton />
        </header>

        <div className="flex flex-col gap-6">
          <p>
            Comprehensive expertise across web, mobile, and cloud technologies.
          </p>
          {Object.entries(Skills).map(([category, skillList]) => (
            <section key={category} className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-secondary-100">
                {category}
              </h2>
              <div className="grid gap-3 lg:grid-cols-2">
                {skillList.map((skill) => (
                  <SkillCard key={skill.id} {...skill} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default SkillsPage;
