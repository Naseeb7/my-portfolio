import type { Metadata } from "next";

export const siteConfig = {
  name: "Pradosh Chand",
  siteName: "Pradosh Chand Portfolio",
  title: "Pradosh Chand | Full-Stack Product Engineer",
  description:
    "Full-Stack Product Engineer building and shipping web, mobile, and backend products with React, Next.js, React Native, TypeScript, and Node.js.",
  url: "https://pradoshchand.dev",
  ogImage: "/profile-image.webp",
  locale: "en_US",
  twitterHandle: "@pradoshchand",
};

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = siteConfig.ogImage,
}: CreatePageMetadataInput): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [image],
    },
  };
}

export function getAbsoluteUrl(path = "/") {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}
