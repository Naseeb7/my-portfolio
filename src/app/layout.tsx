import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AboutMe from "./components/AboutMe";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pradosh's portfolio",
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
        className={`${plusJakartaSans.variable} antialiased max-w-[1440px] mx-auto`}
      >
        <main className="flex w-full min-h-screen gap-3 p-10">
          <div className="flex w-1/2">{children}</div>
          <section className="flex w-1/2">
            <AboutMe />
          </section>
        </main>
      </body>
    </html>
  );
}
