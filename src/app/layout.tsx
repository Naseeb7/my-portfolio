import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AboutMe from "./components/AboutMe";
import AnimatedPageWrapper from "./components/AnimatedPageWrapper";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pradosh Chand Portfolio",
  description:
    "Experienced Full Stack Developer skilled in Next.js, React Native, Node.js, and MongoDB. View my work, learn about my experience, and contact me for freelance or full-time opportunities",
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
        <main className="flex w-full gap-3 p-10">
          {/* Left Side - Scrollable */}
          <AnimatedPageWrapper>
            <div className="w-full overflow-y-auto pr-2">{children}</div>
          </AnimatedPageWrapper>

          {/* Right Side - Stuck on screen */}
          <section className="w-[48%] sticky top-10 self-start h-fit flex">
            <AboutMe />
          </section>
        </main>
      </body>
    </html>
  );
}
