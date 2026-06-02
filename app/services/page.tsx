import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Eyebrow } from "@/components/western";
import { ServiceIcon } from "@/components/service-icon";
import { site } from "@/lib/site";
import { servicePages, serviceImages } from "@/lib/services-content";

const HUB_TITLE =
  "Appliance Repair Services in San Diego | Outlaw Appliance Repair";
const HUB_DESC =
  "Refrigerators, dishwashers, ovens, washers, dryers, microwaves, garbage disposals & ice makers — factory-trained repair across San Diego. 1-year warranty. Call (858) 757-8977.";

export const metadata: Metadata = {
  // absolute so the layout's "%s · {brand}" template doesn't double the brand
  title: { absolute: HUB_TITLE },
  description: HUB_DESC,
  alternates: { canonical: `${site.url}/services` },
  openGraph: {
    title: HUB_TITLE,
    description: HUB_DESC,
    url: `${site.url}/services`,
    type: "website",
  },
  twitter: { title: HUB_TITLE, description: HUB_DESC },
};

export default function ServicesHub() {
  return (
    <>
      <HubSchema />
      <SiteNav />
      <main>
        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-[0.8rem] text-ink-soft mb-6">
            <Link href="/" className="hover:text-rust">Home</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-ink">Services</span>
          </nav>

          <div className="max-w-[640px]">
            <Eyebrow className="mb-3">What We Fix</Eyebrow>
            <h1 className="display text-ink" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
              Every appliance in your home.
            </h1>
            <p className="mt-5 text-ink-soft leading-relaxed" style={{ fontSize: "1.1rem" }}>
              Factory-trained on every major brand, from everyday units to
              premium built-ins. Flat-rate diagnosis, same-day service across
              San Diego County, and a {site.warranty} warranty on every repair.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {servicePages.map((s) => (
              <Link
                key={s.urlSlug}
                href={`/services/${s.urlSlug}`}
                className="group bg-paper border border-line rounded-xl p-5 flex flex-col gap-3 transition-shadow hover:shadow-[var(--shadow-soft-lg)]"
              >
                <div className="relative aspect-[5/3] bg-cream rounded-lg border border-line overflow-hidden flex items-center justify-center">
                  {serviceImages[s.slug] ? (
                    <Image
                      src={serviceImages[s.slug]!}
                      alt={`${s.name} repair in San Diego`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <ServiceIcon slug={s.slug} className="w-1/2 h-1/2" />
                  )}
                </div>
                <h2
                  className="text-ink leading-tight"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {s.name}
                </h2>
                <p className="text-ink-soft leading-snug" style={{ fontSize: "0.9rem" }}>
                  {s.intro.split(". ")[0]}.
                </p>
                <span className="mt-auto text-rust text-[0.82rem]" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
                  {s.name} repair →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a href={`tel:${site.phoneRaw}`} className="btn-primary">
              Call {site.owner} · {site.phone}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function HubSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${site.url}/services`,
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: servicePages.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${s.name} Repair`,
          url: `${site.url}/services/${s.urlSlug}`,
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
