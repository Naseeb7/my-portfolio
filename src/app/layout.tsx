import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AboutMe from "../components/AboutMe";
import AnimatedPageWrapper from "../components/AnimatedPageWrapper";
import AboutMeHeader from "../components/AboutMeHeader";
import { siteConfig } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Pradosh Chand",
  },
  description: siteConfig.description,
  keywords: [
    "Pradosh Chand",
    "Full Stack Developer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Portfolio",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased max-w-[1440px] mx-auto`}
      >
        <main className="flex flex-col-reverse lg:flex-row w-full gap-3 pb-3 lg:p-10">
          {/* Left Side - Scrollable */}
          <AnimatedPageWrapper>
            <div className="w-full overflow-y-auto px-3 lg:pl-0 lg:pr-2 max-w-md lg:max-w-full m-auto">
              {children}
            </div>
          </AnimatedPageWrapper>

          {/* Right Side - Stuck on screen for larger screens */}
          <section className="w-[48%] sticky top-10 self-start h-fit hidden lg:flex">
            <AboutMe />
          </section>

          <section className="flex lg:hidden w-full sticky top-0 ">
            <AboutMeHeader />
          </section>
        </main>
      </body>
    </html>
  );
}
