import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Eyebrow } from "@/components/western";
import { ServiceIcon } from "@/components/service-icon";
import { site } from "@/lib/site";
import { areas, getArea } from "@/lib/areas-content";
import { servicePages } from "@/lib/services-content";

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const area = getArea(city);
  if (!area) return {};
  const url = `${site.url}/service-area/${area.slug}`;
  return {
    title: { absolute: area.metaTitle },
    description: area.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url,
      type: "website",
    },
    twitter: { title: area.metaTitle, description: area.metaDescription },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = getArea(city);
  if (!area) notFound();

  const heroImg =
    area.type === "coastal" ? "/images/kitchen-scene.webp" : "/images/kitchen-bright.webp";
  const angleLabel = area.type === "coastal" ? "Coastal Note" : "Hard-Water Note";

  return (
    <>
      <AreaSchema area={area} />
      <SiteNav />
      <main>
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-[1240px] px-4 sm:px-6 pt-6 text-[0.8rem] text-ink-soft"
        >
          <Link href="/" className="hover:text-rust">Home</Link>
          <span className="mx-2" aria-hidden>/</span>
          <Link href="/service-area" className="hover:text-rust">Service Areas</Link>
          <span className="mx-2" aria-hidden>/</span>
          <span className="text-ink">{area.name}</span>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <Eyebrow className="mb-4">Serving {area.name} · {site.state}</Eyebrow>
              <h1 className="display text-ink" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
                Appliance Repair in {area.name}
              </h1>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-[54ch]" style={{ fontSize: "1.1rem" }}>
                {area.intro}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-7">
                <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                  Call {site.owner} · {site.phone}
                </a>
                <a href={`mailto:${site.email}?subject=${encodeURIComponent("Appliance Repair in " + area.name)}`} className="btn-ghost">
                  Get a Quote
                </a>
              </div>
              <p className="mt-4 text-[0.9rem] text-ink-soft">
                Flat <span className="text-rust font-semibold">${site.serviceCallPrice}</span> diagnosis — waived when you book the repair · {site.warranty} warranty
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-line" style={{ boxShadow: "var(--shadow-soft)" }}>
                <Image src={heroImg} alt={`Appliance repair in ${area.name}, ${site.state}`} fill sizes="40vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Local angle */}
        <section className="bg-cream/40 border-y border-line py-14 sm:py-16">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="bg-ink text-cream rounded-2xl p-7 sm:p-9 max-w-[820px]">
              <Eyebrow className="mb-3 !text-plate">{area.name} {angleLabel}</Eyebrow>
              <p className="leading-relaxed text-cream/90" style={{ fontSize: "1.05rem" }}>
                {area.localAngle}
              </p>
            </div>
          </div>
        </section>

        {/* Appliances we fix (cross-link to services) */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Eyebrow className="mb-3">What We Fix in {area.name}</Eyebrow>
            <h2 className="display text-ink mb-8" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.3rem)" }}>
              Every major appliance, every major brand
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {servicePages.map((s) => (
                <Link
                  key={s.urlSlug}
                  href={`/services/${s.urlSlug}`}
                  className="group flex items-center gap-3 bg-paper border border-line rounded-xl p-3 hover:border-rust transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-cream border border-line flex items-center justify-center shrink-0">
                    <ServiceIcon slug={s.slug} className="w-5 h-5" />
                  </span>
                  <span className="text-ink leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem" }}>
                    {s.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="bg-cream/40 border-y border-line py-14">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Eyebrow className="mb-3">Neighborhoods We Serve</Eyebrow>
            <p className="text-ink-soft mb-5 max-w-[60ch]">
              Proudly serving {area.name} and the surrounding communities, {area.landmark} and beyond — ZIP {area.zips.join(", ")}.
            </p>
            <ul className="flex flex-wrap gap-2">
              {area.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="bg-paper border border-line rounded-full px-3 py-1.5 text-[0.8rem] text-ink"
                  style={{ fontWeight: 500 }}
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[800px] px-4 sm:px-6">
            <div className="text-center mb-10">
              <Eyebrow className="mb-3 justify-center">{area.name} Questions</Eyebrow>
              <h2 className="display text-ink" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                Appliance repair in {area.name}, answered
              </h2>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {area.faqs.map((f, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-ink" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.02rem" }}>
                    {f.q}
                    <span className="ml-4 text-rust transition-transform group-open:rotate-45" aria-hidden style={{ fontSize: "1.4rem", lineHeight: 1 }}>+</span>
                  </summary>
                  <p className="mt-3 text-ink-soft leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream/40 border-t border-line py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <h2 className="display text-ink mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Broken appliance in {area.name}? Let&apos;s fix it.
            </h2>
            <p className="text-ink-soft max-w-[48ch] mx-auto mb-7">
              Same-week service in {area.name}, a flat ${site.serviceCallPrice} diagnosis waived when you book the repair, and a {site.warranty} warranty on every job.
            </p>
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

function AreaSchema({ area }: { area: NonNullable<ReturnType<typeof getArea>> }) {
  const url = `${site.url}/service-area/${area.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Appliance Repair",
        provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: site.phone },
        areaServed: { "@type": "City", name: `${area.name}, ${site.state}` },
        url,
        description: area.metaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: area.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${site.url}/service-area` },
          { "@type": "ListItem", position: 3, name: area.name, item: url },
        ],
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
