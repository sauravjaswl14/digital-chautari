import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digital Chautari — Digital Marketing, Content & Health-Tech",
    template: "%s — Digital Chautari",
  },
  description:
    "Digital Chautari is a creative technology company in Kathmandu, Nepal, building digital marketing, content creation, and health-tech software.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/* Without JS, scroll-reveal content must not stay hidden. */}
        <noscript>
          <style>{`.reveal-hidden{opacity:1!important}`}</style>
        </noscript>

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
