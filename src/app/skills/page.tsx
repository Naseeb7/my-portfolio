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
    "Explore the technologies and engineering capabilities Pradosh Chand uses to build and ship production web, mobile, backend, and realtime systems.",
  path: "/skills",
  keywords: [
    "Pradosh Chand",
    "Full-Stack Product Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Product Engineering",
  ],
});

const SkillsPage = () => {
  // Define breadcrumbs for skills page
  const breadcrumbs = [
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Skills", url: getAbsoluteUrl("/skills") },
  ];

  return (
    <section>
      {/* Structured Data */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <ContainerWrapper className="flex flex-col gap-8">
        <header className="flex w-full justify-between items-start lg:items-center">
          <h1 className="text-[32px] font-extrabold">
            Engineering <span className="text-primary-100">Capabilities</span>
          </h1>
          <ClientBackButton />
        </header>

        <div className="flex flex-col gap-6">
          <p>
            A full-stack engineering toolkit spanning web, mobile, backend,
            realtime systems, infrastructure, and production delivery.
          </p>
          {Object.entries(Skills).map(([category, skillList]) => (
            <section key={category} className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-secondary-100">
                {category}
              </h2>
              <div className="grid gap-3 lg:grid-cols-2">
                {skillList.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
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
