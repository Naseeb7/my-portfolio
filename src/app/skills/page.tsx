import React from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import ClientBackButton from "../../components/UI/ClientBackButton";
import Skills from "@/data/skills.json";
import SkillCard from "../../components/UI/SkillCard";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";
import { createPageMetadata, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description:
    "Review my technical skills across frontend, backend, mobile, database, and cloud development.",
  path: "/skills",
  keywords: [
    "Pradosh Chand skills",
    "Full Stack Developer skills",
    "Frontend Developer skills",
    "Backend Developer skills",
  ],
});

const SkillsPage = () => {
  // Define breadcrumbs for skills page
  const breadcrumbs = [
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Skills", url: getAbsoluteUrl("/skills") }
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
