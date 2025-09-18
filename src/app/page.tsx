import Home from "../components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pradosh Chand - Full Stack Developer Portfolio",
  description: "Experienced Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB. View my work, learn about my experience, and contact me for freelance or full-time opportunities.",
  keywords: "Full Stack Developer, Next.js, React Native, Node.js, MongoDB, Portfolio, Web Development, Mobile Development",
  openGraph: {
    title: "Pradosh Chand - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB. View my work, learn about my experience, and contact me for freelance or full-time opportunities.",
    url: "https://your-portfolio-url.com",
    siteName: "Pradosh Chand Portfolio",
    images: [
      {
        url: "/profile-image.webp",
        width: 1200,
        height: 630,
        alt: "Pradosh Chand - Full Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradosh Chand - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB.",
    creator: "@pradoshchand", // Replace with your Twitter handle
    images: ["/profile-image.webp"],
  },
};

export default function HomePage() {
  return <Home />;
}
