import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";

// Components
import Providers from "@/src/app/providers";

// UI
import { Navbar } from "@/src/components/layout";

const barlowFont = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Dominaire — Operational Engineering Partner",
  description:
    "Dominaire eliminates operational inefficiencies with bespoke, data‑driven tools that help mid‑sized companies dominate their markets.",
  keywords: [
    "Dominaire",
    "Operational Engineering",
    "Automation",
    "Data‑Driven Solutions",
    "Predictive Models",
    "Web Applications",
    "Consultancy",
  ],
  authors: [{ name: "Dominaire" }],
  openGraph: {
    title: "Dominaire — Operational Engineering Partner",
    description:
      "We build bespoke digital systems that save time, reduce friction, and help companies dominate their markets.",
    url: "https://dominaire.io",
    siteName: "Dominaire",
    images: [
      {
        url: "/logos/icon.svg",
        width: 1200,
        height: 630,
        alt: "Dominaire Monolith D Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowFont.variable} antialiased`}>
      <body className="min-h-screen flex flex-col ">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
