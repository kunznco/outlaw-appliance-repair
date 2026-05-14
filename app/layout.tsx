import type { Metadata } from "next";
import { Alfa_Slab_One, Fraunces } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const alfaSlab = Alfa_Slab_One({
  weight: "400",
  variable: "--font-alfa-slab",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — San Diego's Factory-Trained Repair Crew`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords as unknown as string[],
  authors: [{ name: site.owner }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — San Diego's Factory-Trained Repair Crew`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — San Diego's Factory-Trained Repair Crew`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${alfaSlab.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
