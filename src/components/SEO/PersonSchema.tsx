import React from "react";

const PersonSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pradosh Chand",
    "url": "https://your-portfolio-url.com",
    "image": "https://your-portfolio-url.com/profile-image.webp",
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
    "description": "Experienced Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB. View my work, learn about my experience, and contact me for freelance or full-time opportunities."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default PersonSchema;