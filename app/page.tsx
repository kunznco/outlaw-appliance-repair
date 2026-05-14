import { TopBanner } from "@/components/top-banner";
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
import { site, services, testimonials, serviceAreas } from "@/lib/site";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <TopBanner />
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
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: `${a.name}, CA`,
    })),
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
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
