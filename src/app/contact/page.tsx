import React from "react";
import ContactForm from "../../components/ContactForm";
import { Metadata } from "next";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Me - Pradosh Chand Portfolio",
  description: "Get in touch with Pradosh Chand, a Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB. Available for freelance and full-time opportunities.",
  keywords: "Contact Developer, Hire Developer, Full Stack Developer, Next.js Developer, React Native Developer, Node.js Developer, MongoDB Developer",
  openGraph: {
    title: "Contact Me - Pradosh Chand Portfolio",
    description: "Get in touch with Pradosh Chand, a Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB. Available for freelance and full-time opportunities.",
    url: "https://your-portfolio-url.com/contact",
    siteName: "Pradosh Chand Portfolio",
    images: [
      {
        url: "/profile-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Pradosh Chand",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me - Pradosh Chand Portfolio",
    description: "Get in touch with Pradosh Chand, a Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB.",
    creator: "@pradoshchand", // Replace with your Twitter handle
    images: ["/profile-image.webp"],
  },
};

const ContactPage = () => {
  // Define breadcrumbs for contact page
  const breadcrumbs = [
    { name: "Home", url: "https://your-portfolio-url.com/" },
    { name: "Contact", url: "https://your-portfolio-url.com/contact" }
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
