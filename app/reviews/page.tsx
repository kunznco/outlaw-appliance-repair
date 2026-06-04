import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Eyebrow } from "@/components/western";
import {
  site,
  testimonials,
  reviewsMeta,
  reviewSchemaFragment,
} from "@/lib/site";

const META_DESC = `Read reviews for ${site.name} — owner-operated appliance repair across San Diego County. Rated ${reviewsMeta.ratingValue} by local homeowners. Call ${site.phone}.`;

export const metadata: Metadata = {
  // Plain string → layout's "%s · {brand}" template appends the brand once.
  title: "Reviews",
  description: META_DESC,
  alternates: { canonical: `${site.url}/reviews` },
  openGraph: {
    title: "Reviews",
    description: META_DESC,
    url: `${site.url}/reviews`,
    type: "website",
  },
  twitter: { title: "Reviews", description: META_DESC },
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewsSchema />
      <SiteNav />
      <main>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-[1240px] px-4 sm:px-6 pt-6 text-[0.8rem] text-ink-soft"
        >
          <Link href="/" className="hover:text-rust">
            Home
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-ink">Reviews</span>
        </nav>

        {/* Hero + aggregate rating */}
        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-center">
            <div>
              <Eyebrow className="mb-4">Reviews</Eyebrow>
              <h1
                className="display text-ink"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
              >
                What San Diego homeowners say
              </h1>
              <p
                className="mt-5 text-ink-soft leading-relaxed max-w-[54ch]"
                style={{ fontSize: "1.1rem" }}
              >
                {site.owner} runs every job himself — no call center, no
                rotating crew. You get an on-time arrival, an honest diagnosis,
                and a fix that holds. Here&apos;s what your neighbors across San
                Diego County had to say after we showed up.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-7">
                <a href={`tel:${site.phoneRaw}`} className="btn-primary">
                  Call {site.owner} · {site.phone}
                </a>
                {reviewsMeta.googleProfileUrl ? (
                  <a
                    href={reviewsMeta.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Read our Google reviews
                  </a>
                ) : null}
              </div>
            </div>

            {/* Aggregate-rating callout */}
            <aside
              className="bg-paper border border-line rounded-2xl p-7 sm:p-8 text-center"
              style={{ boxShadow: "var(--shadow-soft-lg)" }}
            >
              <Stars rating={5} className="justify-center" size="lg" />
              <div
                className="display text-ink mt-4"
                style={{ fontSize: "clamp(3rem, 8vw, 4.2rem)", lineHeight: 1 }}
              >
                {reviewsMeta.ratingValue}
              </div>
              <p className="mt-3 text-ink leading-snug" style={{ fontWeight: 600 }}>
                Rated {reviewsMeta.ratingValue} by {reviewsMeta.reviewCount} San
                Diego customers
              </p>
              <p className="mt-1.5 text-[0.8rem] text-ink-soft">via Google</p>
            </aside>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="bg-cream/40 border-y border-line py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Eyebrow className="mb-3">In Their Words</Eyebrow>
            <h2
              className="display text-ink mb-8"
              style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.3rem)" }}
            >
              Real reviews from real San Diego homes
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <ReviewCard key={`${t.name}-${i}`} review={t} />
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-cream/40 py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <Eyebrow className="mb-3 justify-center">Spread the Word</Eyebrow>
            <h2
              className="display text-ink mb-3"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Had a great experience?
            </h2>
            <p className="text-ink-soft max-w-[48ch] mx-auto mb-7">
              A quick review helps your neighbors find honest, owner-operated
              appliance repair — and it means the world to a small San Diego
              business. Of course, if something&apos;s still acting up,{" "}
              {site.owner} is one call away.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {reviewsMeta.googleReviewUrl ? (
                <a
                  href={reviewsMeta.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Leave us a review on Google
                </a>
              ) : null}
              <a
                href={`tel:${site.phoneRaw}`}
                className={
                  reviewsMeta.googleReviewUrl ? "btn-ghost" : "btn-primary"
                }
              >
                Call {site.owner} · {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

/** A single review card: stars, quote, name + location, and a Google badge. */
function ReviewCard({
  review,
}: {
  review: (typeof testimonials)[number];
}) {
  return (
    <article
      className="bg-paper border border-line rounded-xl p-6 flex flex-col"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <Stars rating={review.rating ?? 5} />
      <blockquote
        className="mt-4 text-ink-soft leading-relaxed flex-1"
        style={{ fontSize: "1rem" }}
      >
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="mt-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-ink" style={{ fontWeight: 600 }}>
            {review.name}
          </p>
          <p className="text-[0.85rem] text-ink-soft">{review.where}</p>
        </div>
        {review.source === "Google" ? (
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-cream border border-line px-2.5 py-1 text-[0.72rem] text-ink-soft">
            <GoogleGlyph className="w-3 h-3" />
            via Google
          </span>
        ) : null}
      </footer>
    </article>
  );
}

/**
 * Accessible star rating. Renders `rating` filled stars (gold) out of 5,
 * the rest as empty outlines. The whole row is a single labeled image.
 */
function Stars({
  rating,
  className,
  size = "md",
}: {
  rating: number;
  className?: string;
  size?: "md" | "lg";
}) {
  const filled = Math.round(rating);
  const dim = size === "lg" ? "w-7 h-7" : "w-5 h-5";
  return (
    <div
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className={`flex items-center gap-0.5 ${className ?? ""}`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} filled={i < filled} className={dim} />
      ))}
    </div>
  );
}

/** Single star SVG — gold (plate) when filled, hairline outline when empty. */
function Star({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "var(--color-plate)" : "none"}
      stroke={filled ? "var(--color-plate-deep)" : "var(--color-line)"}
      strokeWidth={filled ? 0.75 : 1.5}
      aria-hidden
    >
      <path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.33l-5.8 3.04 1.1-6.46-4.69-4.58 6.49-.95L12 2.5z" />
    </svg>
  );
}

/** Small multi-color Google "G" glyph for the review badge. */
function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.55-5.17 3.55-8.87z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.27v3.09A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.27a12 12 0 0 0 0 10.76l4-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43A11.96 11.96 0 0 0 12 0 12 12 0 0 0 1.27 6.62l4 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

/** JSON-LD: breadcrumb + business node with aggregateRating and reviews. */
function ReviewsSchema() {
  const business: Record<string, unknown> = {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}#business`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
  };

  // Shared honest gate: asserts aggregateRating + reviews only when we have
  // real reviews (kept identical to the home page via lib/site.ts).
  Object.assign(business, reviewSchemaFragment());

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
            name: "Reviews",
            item: `${site.url}/reviews`,
          },
        ],
      },
      business,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Stringified JSON-LD — safe, no user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
