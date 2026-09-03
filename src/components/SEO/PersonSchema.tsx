import React from "react";
import { siteConfig } from "@/lib/seo";

const PersonSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}#person`,
    "name": siteConfig.name,
    "url": siteConfig.url,
    "image": `${siteConfig.url}${siteConfig.ogImage}`,
    "jobTitle": "Full-Stack Product Engineer",
    "sameAs": [
      "https://www.linkedin.com/in/pradosh-chand-4b209027a/",
      "https://github.com/naseeb7"
    ],
    "description": siteConfig.description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default PersonSchema;
