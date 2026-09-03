import React from "react";
import { IProject } from "@/constants/types";
import { siteConfig } from "@/lib/seo";

const ProjectSchema = ({ projects }: { projects: IProject[] }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.overview,
        ...(project.previewLink ? { url: project.previewLink } : {}),
        image: `${siteConfig.url}${project.heroImage}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ProjectSchema;
