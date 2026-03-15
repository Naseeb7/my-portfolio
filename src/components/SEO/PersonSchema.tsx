import React from "react";
import { siteConfig } from "@/lib/seo";

const PersonSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pradosh Chand",
    "url": siteConfig.url,
    "image": `${siteConfig.url}${siteConfig.ogImage}`,
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Hexadecimal Software Pvt Ltd"
    },
    "alumniOf": "", // Add your education if applicable
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
