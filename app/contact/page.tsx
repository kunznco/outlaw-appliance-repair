import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Eyebrow } from "@/components/western";
import { site } from "@/lib/site";

const META_DESC = `Request appliance repair from ${site.name} — owner-operated, San Diego County. Book online or call ${site.phone}. Flat $${site.serviceCallPrice} diagnosis, waived with repair.`;

export const metadata: Metadata = {
  title: "Contact",
  description: META_DESC,
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: "Contact",
    description: META_DESC,
    url: `${site.url}/contact`,
    type: "website",
  },
  twitter: { title: "Contact", description: META_DESC },
};

// Jobber Work Request form embed URL. Set NEXT_PUBLIC_JOBBER_FORM_URL in
// Vercel (Production) to the iframe src from Jobber → Online booking /
// Work request → Embed. Until it's set, the page shows a call/email fallback.
const JOBBER_FORM_URL = process.env.NEXT_PUBLIC_JOBBER_FORM_URL;

export default function ContactPage() {
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
          <span className="text-ink">Contact</span>
        </nav>

        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-10 sm:py-14">
          <div className="max-w-[640px]">
            <Eyebrow className="mb-3">Request Service</Eyebrow>
            <h1 className="display text-ink" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
              Let&apos;s get your appliance working again.
            </h1>
            <p className="mt-5 text-ink-soft leading-relaxed" style={{ fontSize: "1.1rem" }}>
              Tell {site.owner} what&apos;s going on and he&apos;ll get back to
              you to schedule a visit — usually same week. Prefer to talk? Call
              or text anytime during business hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 lg:gap-12 mt-10 items-start">
            {/* Request form (Jobber) */}
            <div className="bg-paper border border-line rounded-2xl p-2 sm:p-3" style={{ boxShadow: "var(--shadow-soft)" }}>
              {JOBBER_FORM_URL ? (
                <iframe
                  src={JOBBER_FORM_URL}
                  title="Request appliance repair service"
                  className="w-full rounded-xl"
                  style={{ minHeight: "720px", border: "0" }}
                  loading="lazy"
                />
              ) : (
                <div className="p-7 sm:p-9 text-center">
                  <Eyebrow className="mb-3 justify-center">Book Your Repair</Eyebrow>
                  <h2 className="display text-ink mb-3" style={{ fontSize: "1.6rem" }}>
                    The fastest way to reach {site.owner}
                  </h2>
                  <p className="text-ink-soft mb-7 max-w-[42ch] mx-auto">
                    Call or text for same-week scheduling, or send a quick email
                    with your appliance and the problem and we&apos;ll follow up.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a href={`tel:${site.phoneRaw}`} className="btn-primary">Call {site.phone}</a>
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent("Appliance Repair Request")}`}
                      className="btn-ghost"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Contact details */}
            <aside className="flex flex-col gap-4">
              <DetailCard label="Call or text">
                <a href={`tel:${site.phoneRaw}`} className="text-rust hover:underline" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem" }}>
                  {site.phone}
                </a>
              </DetailCard>
              <DetailCard label="Email">
                <a href={`mailto:${site.email}`} className="text-ink hover:text-rust break-all">{site.email}</a>
              </DetailCard>
              <DetailCard label="Hours">
                <span className="text-ink">{site.hours}</span>
              </DetailCard>
              <DetailCard label="Service area">
                <span className="text-ink">{site.city} County, {site.state}</span>
                <Link href="/service-area" className="block mt-1 text-[0.85rem] text-rust hover:underline" style={{ fontWeight: 700 }}>
                  See all areas →
                </Link>
              </DetailCard>
              <DetailCard label="Licensed">
                <span className="text-ink">California Lic. {site.license}</span>
              </DetailCard>
              <p className="text-[0.85rem] text-ink-soft leading-relaxed px-1">
                Flat <span className="text-rust font-semibold">${site.serviceCallPrice}</span> diagnosis — waived when you book the repair. Every job backed by a {site.warranty} warranty.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function DetailCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-paper border border-line rounded-xl p-5">
      <div
        className="uppercase text-ink-soft mb-1.5"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.62rem", letterSpacing: "0.12em" }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}
