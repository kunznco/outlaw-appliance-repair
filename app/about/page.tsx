import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Eyebrow } from "@/components/western";
import { site } from "@/lib/site";

const META_DESC = `Meet ${site.owner}, owner-operator of ${site.name}. Two decades of San Diego appliance repair — the person who answers your call is the one who shows up. Call ${site.phone}.`;

export const metadata: Metadata = {
  title: "About",
  description: META_DESC,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: "About",
    description: META_DESC,
    url: `${site.url}/about`,
    type: "website",
  },
  twitter: { title: "About", description: META_DESC },
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-[1240px] px-4 sm:px-6 pt-6 text-[0.8rem] text-ink-soft"
        >
          <Link href="/" className="hover:text-rust">Home</Link>
          <span className="mx-2" aria-hidden>/</span>
          <span className="text-ink">About</span>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[0.95fr_1.3fr] gap-14 lg:gap-16 items-center">
            <div className="relative max-w-[420px] w-full mx-auto">
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line"
                style={{ boxShadow: "var(--shadow-soft-lg)" }}
              >
                <Image
                  src="/images/jesse.webp"
                  alt={`${site.owner}, owner-operator of ${site.name}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-6 -right-3 w-40 sm:w-48 aspect-[4/3] rounded-xl overflow-hidden border-[3px] border-paper"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <Image
                  src="/images/outlaw-truck.webp"
                  alt={`${site.name} service truck in San Diego`}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute top-3 left-3 bg-paper/95 border border-line rounded-full px-3 py-1 text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.02em" }}
              >
                {site.owner} · {site.ownerRole}
              </div>
            </div>

            <div>
              <Eyebrow className="mb-3">Meet {site.owner}</Eyebrow>
              <h1 className="display text-ink" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
                Your San Diego repair neighbor.
              </h1>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-[56ch]" style={{ fontSize: "1.1rem" }}>
                {site.owner} is a {site.city} local who&apos;s spent two decades
                with his hands inside refrigerators, ovens, washers, and dryers
                across the county. Outlaw is his one-man shop — owner-operated,
                so the person who answers your call is the same person who shows
                up at your door and does the work.
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed max-w-[56ch]" style={{ fontSize: "1.1rem" }}>
                No call center, no rotating crew of subcontractors, no
                high-pressure upsells. Just straight answers, fair pricing, and
                a repair that holds — backed in writing.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-7">
                <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                  Call {site.owner} · {site.phone}
                </a>
                <Link href="/contact" className="btn-ghost">Request Service</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promise / what sets Outlaw apart */}
        <section className="bg-cream/40 border-y border-line py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Eyebrow className="mb-3">The Outlaw Promise</Eyebrow>
            <h2 className="display text-ink mb-8" style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.3rem)" }}>
              Why neighbors call Outlaw
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROMISES.map((p) => (
                <div key={p.title} className="bg-paper border border-line rounded-xl p-5">
                  <h3 className="text-ink mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem" }}>
                    {p.title}
                  </h3>
                  <p className="text-ink-soft leading-relaxed" style={{ fontSize: "0.92rem" }}>{p.body}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mt-10">
              <Stat label="CA License" value={site.license} />
              <Stat label="Warranty" value={site.warranty} />
              <Stat label="Training" value="Factory" />
            </div>
          </div>
        </section>

        {/* Links out */}
        <section className="py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <h2 className="display text-ink mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Ready when you are.
            </h2>
            <p className="text-ink-soft max-w-[48ch] mx-auto mb-7">
              Same-week service across San Diego County, a flat ${site.serviceCallPrice} diagnosis waived when you book the repair, and a {site.warranty} warranty on every job.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`tel:${site.phoneRaw}`} className="btn-primary">Call {site.phone}</a>
              <Link href="/services" className="btn-ghost">See what we fix</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

const PROMISES = [
  { title: "Owner-operated", body: "You deal with Jesse start to finish — the same person on the phone, at your door, and standing behind the work." },
  { title: "Honest, upfront pricing", body: `A flat $${site.serviceCallPrice} diagnosis, waived when you book the repair. You approve the price before any work begins.` },
  { title: "Factory-trained", body: "Trained on every major brand, from everyday units to premium built-ins like Sub-Zero, Wolf, Viking, and Thermador." },
  { title: "One-year warranty", body: "Every repair — parts and labor — is backed for a full year, in writing. If it doesn't hold, we make it right." },
  { title: "Same-week service", body: "Fast scheduling across San Diego County with a real arrival window, so you're not stuck waiting all day." },
  { title: "Licensed & local", body: `California-licensed (${site.license}) and based right here in San Diego — your neighbor, not a national chain.` },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper border border-line rounded-lg p-3 text-center">
      <div
        className="uppercase text-ink-soft mb-1"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.6rem", letterSpacing: "0.1em" }}
      >
        {label}
      </div>
      <div className="text-rust" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem" }}>
        {value}
      </div>
    </div>
  );
}
