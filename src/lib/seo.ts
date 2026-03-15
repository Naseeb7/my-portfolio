import type { Metadata } from "next";

export const siteConfig = {
  name: "Pradosh Chand",
  siteName: "Pradosh Chand Portfolio",
  title: "Pradosh Chand | Full Stack Developer",
  description:
    "Full Stack Developer building scalable web and mobile products with Next.js, React Native, Node.js, and MongoDB.",
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
