import Home from "../components/Home";
import { Metadata } from "next";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.title,
    description:
      "Full Stack Developer building scalable web and mobile products with Next.js, React Native, Node.js, and MongoDB.",
    path: "/",
    keywords: [
      "Pradosh Chand",
      "Full Stack Developer",
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "Developer Portfolio",
    ],
  }),
  title: {
    absolute: siteConfig.title,
  },
};

export default function HomePage() {
  return <Home />;
}
