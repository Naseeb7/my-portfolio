import React from "react";
import { IProject } from "@/constants/types";

const ProjectSchema = ({ projects }: { projects: IProject[] }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.name,
      "description": project.overview,
      "url": project.previewLink,
      "image": `https://your-portfolio-url.com${project.heroImage}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ProjectSchema;