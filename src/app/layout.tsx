import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AboutMe from "../components/AboutMe";
import AnimatedPageWrapper from "../components/AnimatedPageWrapper";
import AboutMeHeader from "../components/AboutMeHeader";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Pradosh Chand - Full Stack Developer Portfolio",
    template: "%s | Pradosh Chand Portfolio",
  },
  description:
    "Experienced Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB. View my work, learn about my experience, and contact me for freelance or full-time opportunities",
  keywords: "Full Stack Developer, Next.js, React Native, Node.js, MongoDB, Portfolio, Web Development, Mobile Development",
  authors: [{ name: "Pradosh Chand" }],
  creator: "Pradosh Chand",
  publisher: "Pradosh Chand",
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
    canonical: "/", // Relative URL for now
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/", // Relative URL for now
    title: "Pradosh Chand - Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB. View my work, learn about my experience, and contact me for freelance or full-time opportunities",
    siteName: "Pradosh Chand Portfolio",
    images: [
      {
        url: "/profile-image.webp",
        width: 1200,
        height: 630,
        alt: "Pradosh Chand Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradosh Chand - Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB.",
    creator: "@pradoshchand", // Replace with your Twitter handle
    images: ["/profile-image.webp"],
  },
  verification: {
    google: "", // Add your Google Search Console verification code here when ready
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
