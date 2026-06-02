import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Single clean grotesque for the whole site. The western personality lives
// in the bull-skull logo PNGs; the chrome stays professional and trustworthy.
const hanken = Hanken_Grotesk({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — San Diego appliance repair`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — San Diego's Factory-Trained Repair Crew`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hanken.variable}>
      <body>{children}</body>
    </html>
  );
}
