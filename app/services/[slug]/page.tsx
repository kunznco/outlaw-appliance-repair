import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { jsonLdScript } from "@/lib/json-ld";
import { Eyebrow } from "@/components/western";
import { ServiceIcon } from "@/components/service-icon";
import { site } from "@/lib/site";
import { servicePages, serviceImages, getServicePage } from "@/lib/services-content";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.urlSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  const url = `${site.url}/services/${page.urlSlug}`;
  return {
    // absolute so the layout's "%s · {brand}" template doesn't double the
    // brand name (metaTitle already ends with "| Outlaw Appliance Repair")
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const others = servicePages.filter((s) => s.urlSlug !== page.urlSlug);
  const allBrands = [...page.brands.premium, ...page.brands.standard];

  return (
    <>
      <ServiceSchema page={page} />
      <SiteNav />
      <main>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-[1240px] px-4 sm:px-6 pt-6 text-[0.8rem] text-ink-soft"
        >
          <Link href="/" className="hover:text-rust">Home</Link>
          <span className="mx-2" aria-hidden>/</span>
          <Link href="/services" className="hover:text-rust">Services</Link>
          <span className="mx-2" aria-hidden>/</span>
          <span className="text-ink">{page.name}</span>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-10 items-center">
            <div>
              <Eyebrow className="mb-4">San Diego Appliance Repair</Eyebrow>
              <h1
                className="display text-ink"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
              >
                {page.h1}
              </h1>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-[54ch]" style={{ fontSize: "1.1rem" }}>
                {page.intro}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-7">
                <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                  Call {site.owner} · {site.phone}
                </a>
                <a href={`mailto:${site.email}?subject=${encodeURIComponent(page.name + " Repair Quote")}`} className="btn-ghost">
                  Get a Quote
                </a>
              </div>
              <p className="mt-4 text-[0.9rem] text-ink-soft">
                Flat <span className="text-rust font-semibold">${site.serviceCallPrice}</span> diagnosis · waived when we make the fix · {site.warranty} parts &amp; labor warranty
              </p>
            </div>
            <div className="hidden lg:block">
              {serviceImages[page.slug] ? (
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-line"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <Image
                    src={serviceImages[page.slug]!}
                    alt={page.h1}
                    fill
                    sizes="40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="w-56 h-56 mx-auto rounded-2xl bg-cream border border-line flex items-center justify-center">
                  <ServiceIcon slug={page.slug} className="w-2/5 h-2/5" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="bg-cream/40 border-y border-line py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Eyebrow className="mb-3">Common Problems We Fix</Eyebrow>
            <h2 className="display text-ink mb-8" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.3rem)" }}>
              Signs your {page.name.toLowerCase().replace(/s$/, "")} needs a look
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.symptoms.map((s, i) => (
                <div key={i} className="bg-paper border border-line rounded-xl p-5">
                  <h3 className="text-ink mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem" }}>
                    {s.symptom}
                  </h3>
                  <p className="text-ink-soft" style={{ fontSize: "0.9rem" }}>{s.cause}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repair vs replace + local angle */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
            <div className="bg-paper border border-line rounded-2xl p-7" style={{ boxShadow: "var(--shadow-soft)" }}>
              <Eyebrow className="mb-3">Repair or Replace?</Eyebrow>
              <p className="text-ink-soft leading-relaxed mb-4">{page.repairReplace}</p>
              <p className="text-[0.9rem] text-ink">
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Typical lifespan:</span>{" "}
                <span className="text-rust" style={{ fontWeight: 600 }}>{page.lifespan}</span>
              </p>
            </div>
            <div className="bg-ink text-cream rounded-2xl p-7">
              <Eyebrow className="mb-3 !text-plate">San Diego Note</Eyebrow>
              <p className="leading-relaxed text-cream/90">{page.localAngle}</p>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="bg-cream/40 border-y border-line py-14">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Eyebrow className="mb-3">Brands We Service</Eyebrow>
            <div className="flex flex-wrap gap-2 mt-2">
              {allBrands.map((b) => {
                const premium = page.brands.premium.includes(b);
                return (
                  <span
                    key={b}
                    className={`rounded-md px-3 py-1.5 text-[0.8rem] border ${premium ? "bg-rust text-white border-rust-deep" : "bg-paper text-ink border-line"}`}
                    style={{ fontWeight: 600 }}
                  >
                    {b}
                  </span>
                );
              })}
            </div>
            {page.brands.premium.length > 0 && (
              <p className="mt-3 text-[0.82rem] text-ink-soft">
                <span className="inline-block w-2.5 h-2.5 rounded-sm bg-rust align-middle mr-1.5" />
                Premium &amp; built-in brands — we&apos;re trained and equipped for these.
              </p>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[800px] px-4 sm:px-6">
            <div className="text-center mb-10">
              <Eyebrow className="mb-3 justify-center">Questions, Answered</Eyebrow>
              <h2 className="display text-ink" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                {page.name} repair FAQs
              </h2>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {page.faqs.map((f, i) => (
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

        {/* Cross-sell */}
        <section className="bg-cream/40 border-t border-line py-14">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Eyebrow className="mb-5">More Appliances We Fix</Eyebrow>
            <div className="flex flex-wrap gap-3">
              {others.map((o) => (
                <Link
                  key={o.urlSlug}
                  href={`/services/${o.urlSlug}`}
                  className="inline-flex items-center gap-2 bg-paper border border-line rounded-full pl-2 pr-4 py-1.5 text-[0.85rem] text-ink hover:border-rust transition-colors"
                >
                  <span className="w-7 h-7 rounded-full bg-cream border border-line flex items-center justify-center">
                    <ServiceIcon slug={o.slug} className="w-3.5 h-3.5" />
                  </span>
                  {o.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <h2 className="display text-ink mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              {page.name.replace(/s$/, "")} acting up? Let&apos;s fix it.
            </h2>
            <p className="text-ink-soft max-w-[48ch] mx-auto mb-7">
              Same-day service across San Diego County, flat-rate diagnosis, and a {site.warranty} warranty on every repair.
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

function ServiceSchema({ page }: { page: ReturnType<typeof getServicePage> }) {
  if (!page) return null;
  const url = `${site.url}/services/${page.urlSlug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: `${page.name} Repair`,
        provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: site.phone },
        areaServed: { "@type": "AdministrativeArea", name: "San Diego County, CA" },
        url,
        description: page.metaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          { "@type": "ListItem", position: 3, name: page.name, item: url },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }}
    />
  );
}
