import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Eyebrow } from "@/components/western";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas-content";

const HUB_TITLE = "Service Areas Across San Diego County | Outlaw Appliance Repair";
const HUB_DESC =
  "Outlaw Appliance Repair serves La Jolla, Del Mar, Rancho Santa Fe, Poway, Chula Vista & more across San Diego County. Same-week service. Call (858) 757-8977.";

export const metadata: Metadata = {
  title: { absolute: HUB_TITLE },
  description: HUB_DESC,
  alternates: { canonical: `${site.url}/service-area` },
  openGraph: { title: HUB_TITLE, description: HUB_DESC, url: `${site.url}/service-area`, type: "website" },
  twitter: { title: HUB_TITLE, description: HUB_DESC },
};

export default function ServiceAreaHub() {
  const coastal = areas.filter((a) => a.type === "coastal");
  const inland = areas.filter((a) => a.type === "inland");

  return (
    <>
      <HubSchema />
      <SiteNav />
      <main>
        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-[0.8rem] text-ink-soft mb-6">
            <Link href="/" className="hover:text-rust">Home</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-ink">Service Areas</span>
          </nav>

          <div className="max-w-[640px]">
            <Eyebrow className="mb-3">Serving the Whole County</Eyebrow>
            <h1 className="display text-ink" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>
              San Diego, end to end.
            </h1>
            <p className="mt-5 text-ink-soft leading-relaxed" style={{ fontSize: "1.1rem" }}>
              From the coast to the back-country, Outlaw covers San Diego
              County with same-week service, a flat ${site.serviceCallPrice}{" "}
              diagnosis waived when you book the repair, and a {site.warranty}{" "}
              warranty on every job.
            </p>
          </div>

          <AreaColumn title="Coastal communities" note="We watch for salt-air corrosion on every visit." cities={coastal} />
          <AreaColumn title="Inland & back-country" note="We descale and check for hard-water buildup on every visit." cities={inland} />

          <div className="mt-12 text-center">
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

function AreaColumn({
  title,
  note,
  cities,
}: {
  title: string;
  note: string;
  cities: typeof areas;
}) {
  return (
    <div className="mt-12">
      <h2 className="display text-ink" style={{ fontSize: "1.4rem" }}>{title}</h2>
      <p className="text-ink-soft text-[0.92rem] mt-1 mb-5">{note}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cities.map((c) => (
          <Link
            key={c.slug}
            href={`/service-area/${c.slug}`}
            className="group bg-paper border border-line rounded-xl px-4 py-3 hover:border-rust transition-colors flex items-center justify-between"
          >
            <span className="text-ink" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
              {c.name}
            </span>
            <span className="text-rust opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>→</span>
          </Link>
        ))}
      </div>
    </div>
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
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${site.url}/service-area` },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: areas.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Appliance Repair in ${a.name}`,
          url: `${site.url}/service-area/${a.slug}`,
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
