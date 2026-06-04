import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ServicesGrid } from "@/components/services-grid";
import { WantedPoster } from "@/components/wanted-poster";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { ServiceArea } from "@/components/service-area";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import {
  site,
  services,
  serviceAreas,
  geo,
  sameAs,
  reviewSchemaFragment,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <SiteNav />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesGrid />
        <WantedPoster />
        <About />
        <Testimonials />
        <ServiceArea />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}#business`,
    name: site.name,
    image: `${site.url}/og.png`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    // sameAs (GBP / Yelp / Facebook) only emitted once we have real profile URLs
    ...(sameAs.length > 0 ? { sameAs } : {}),
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: `${a.name}, CA`,
    })),
    // Mon–Sat 7am–7pm
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Appliance Repair Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.blurb,
        },
      })),
    },
    // aggregateRating + review, emitted only when we have real reviews
    ...reviewSchemaFragment(),
    identifier: site.license,
    priceRange: `$${site.serviceCallPrice}+`,
  };

  return (
    <script
      type="application/ld+json"
      // Stringified JSON-LD — safe, no user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
