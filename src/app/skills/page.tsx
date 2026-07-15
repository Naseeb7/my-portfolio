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
    "Explore the technologies, tools, and engineering capabilities I use to design, build, and ship production-ready web, mobile, and backend systems.",
  path: "/skills",
  keywords: [
    "Pradosh Chand",
    "Frontend Product Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
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
            A production-focused engineering stack spanning frontend, mobile,
            backend, cloud, and realtime systems—selected to build scalable,
            maintainable products from architecture to production.
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
