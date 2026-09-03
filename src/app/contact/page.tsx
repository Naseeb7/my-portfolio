import React from "react";
import ContactForm from "../../components/ContactForm";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";
import { createPageMetadata, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Pradosh Chand about freelance, contract, or full-time software engineering opportunities.",
  path: "/contact",
  keywords: [
    "Contact Pradosh Chand",
    "Hire Software Engineer",
    "Full-Stack Product Engineer",
    "React Developer",
    "React Native Developer",
  ],
});

const ContactPage = () => {
  // Define breadcrumbs for contact page
  const breadcrumbs = [
    { name: "Home", url: getAbsoluteUrl("/") },
    { name: "Contact", url: getAbsoluteUrl("/contact") },
  ];

  return (
    <section className="flex w-full h-full">
      {/* Structured Data */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <ContactForm />
    </section>
  );
};

export default ContactPage;
