import Home from "../components/Home";
import { Metadata } from "next";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.title,
    description:
      "Full-Stack Product Engineer building and shipping web, mobile, and backend products with React, Next.js, React Native, TypeScript, and Node.js.",
    path: "/",
    keywords: [
      "Pradosh Chand",
      "Full-Stack Product Engineer",
      "Software Engineer",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Node.js",
    ],
  }),
  title: {
    absolute: siteConfig.title,
  },
};

export default function HomePage() {
  return <Home />;
}
