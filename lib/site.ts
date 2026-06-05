/**
 * Site-wide content + NAP data.
 * Single source of truth — change here, every component picks it up.
 */

export const site = {
  name: "Outlaw Appliance Repair",
  shortName: "Outlaw",
  owner: "Jesse",
  ownerRole: "Owner",
  tagline: "Where Expertise Meets Reliability",
  description:
    "Licensed San Diego appliance repair. Refrigerators, ranges, washers, dryers, dishwashers and more — factory-certified parts, one-year warranty on every job. Call (858) 757-8977.",
  keywords: [
    "appliance repair San Diego",
    "refrigerator repair San Diego",
    "Sub-Zero repair San Diego",
    "Wolf range repair San Diego",
    "Viking repair San Diego",
    "Thermador repair San Diego",
    "dishwasher repair San Diego",
    "washing machine repair San Diego",
    "dryer repair San Diego",
    "oven repair San Diego",
    "Rancho Santa Fe appliance repair",
    "La Jolla appliance repair",
  ],
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://outlaw-appliance-repair.vercel.app",
  phone: "(858) 757-8977",
  phoneRaw: "+18587578977",
  email: "jesse@outlawappliancerepair.com",
  city: "San Diego",
  state: "CA",
  license: "A49881",
  warranty: "1 year",
  hours: "Mon–Sat · 7am–7pm",
  serviceCallPrice: process.env.NEXT_PUBLIC_SERVICE_CALL_PRICE ?? "99",
} as const;

export type ServiceSlug =
  | "refrigerator"
  | "dishwasher"
  | "range"
  | "washer"
  | "dryer"
  | "microwave"
  | "garbage-disposal"
  | "ice-maker";

export interface Service {
  slug: ServiceSlug;
  number: string;
  title: string;
  short: string;
  blurb: string;
}

export const services: Service[] = [
  {
    slug: "refrigerator",
    number: "01",
    title: "Refrigerators & Freezers",
    short: "Cooling, ice, leaks",
    blurb:
      "Not cooling, leaking, ice maker out, compressor trouble — we handle Sub-Zero, Viking, KitchenAid, GE, and every other badge on the door.",
  },
  {
    slug: "dishwasher",
    number: "02",
    title: "Dishwashers",
    short: "Drain, start, spot",
    blurb:
      "Won't drain, won't start, leaving spots, or pooling water in the basin — diagnosed and fixed with factory-certified parts.",
  },
  {
    slug: "range",
    number: "03",
    title: "Ovens, Ranges & Cooktops",
    short: "Heat, ignite, calibrate",
    blurb:
      "Igniter trouble, uneven heat, broken element, induction faults — gas, electric, or induction, we know the inside.",
  },
  {
    slug: "washer",
    number: "04",
    title: "Washing Machines",
    short: "Spin, drain, leak",
    blurb:
      "Won't spin, leaks, drain pump trouble, error codes you can't decode — front-load or top-load, we fix it on the first visit.",
  },
  {
    slug: "dryer",
    number: "05",
    title: "Clothes Dryers",
    short: "Heat, tumble, vent",
    blurb:
      "No heat, takes two cycles, won't tumble, blower issues, vent restrictions — gas or electric, residential or commercial.",
  },
  {
    slug: "microwave",
    number: "06",
    title: "Microwave Ovens",
    short: "Heat, spark, switch",
    blurb:
      "Won't heat, sparking, turntable won't turn, door switch out — over-the-range, built-in, or countertop.",
  },
  {
    slug: "garbage-disposal",
    number: "07",
    title: "Garbage Disposals",
    short: "Hum, jam, leak",
    blurb:
      "Humming but not spinning, jammed, leaking, or ready for replacement — we'll have it running again fast.",
  },
  {
    slug: "ice-maker",
    number: "08",
    title: "Ice Makers",
    short: "No ice, leaks, cubes",
    blurb:
      "Not making ice, leaking water, or turning out hollow or undersized cubes — stand-alone, built-in, and in-fridge ice makers.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  where: string;
  /** 1–5 stars; defaults to 5 where omitted. */
  rating?: number;
  /** Where the review came from, e.g. "Google". */
  source?: string;
  /** Optional ISO-ish date string, e.g. "2026-03". */
  date?: string;
}

// Real, verbatim Google reviews curated from the Outlaw Business Profile.
// Keep these word-for-word — they're real customers. Update the aggregate in
// `reviewsMeta` (not this list's length) when the Google total changes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Outlaw Appliance is ran by the most knowledgeable, hard working and caring man. He is excellent in all his work and goes out of his way to help and advise and repair. He is honest and straight forward and I'm grateful there are tradesman like him that know what they are doing and do it fairly.",
    name: "Shaunna J.",
    where: "San Diego, CA",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "I work as a property manager and I send Outlaw out any time I run into issues with appliances at my properties. They are always quick, honest, reasonably priced, and do great work! Highly recommend!!",
    name: "Christian B.",
    where: "San Diego, CA",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Jesse showed up on time and went to work diagnosing my mom's refrigerator problems. He was knowledgeable, professional and personal. He knew right what to do and was able to perform repairs without it costing a fortune right after Christmas. Thank you so much Jesse.",
    name: "Josie C.",
    where: "San Diego, CA",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Absolutely excellent customer service and attention to detail.",
    name: "Michael C.",
    where: "San Diego, CA",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Jesse showed up as promised. Professional, efficient, and even sympathetic.",
    name: "Eva T.",
    where: "San Diego, CA",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Great experience. Work was done quickly and smoothly. Highly recommend for quality and timely service.",
    name: "Andrea M.",
    where: "San Diego, CA",
    rating: 5,
    source: "Google",
  },
];

export const serviceAreas: { name: string; short: string }[] = [
  { name: "La Jolla", short: "La Jolla" },
  { name: "Del Mar", short: "Del Mar" },
  { name: "Carmel Valley", short: "Carmel Vly" },
  { name: "Rancho Santa Fe", short: "RSF" },
  { name: "Encinitas", short: "Encinitas" },
  { name: "Coronado", short: "Coronado" },
  { name: "Point Loma", short: "Point Loma" },
  { name: "Poway", short: "Poway" },
  { name: "Rancho Bernardo", short: "R. Bernardo" },
  { name: "Scripps Ranch", short: "Scripps Rch" },
  { name: "Ramona", short: "Ramona" },
  { name: "Fallbrook", short: "Fallbrook" },
  { name: "Bonsall", short: "Bonsall" },
  { name: "Chula Vista", short: "Chula Vista" },
];

export const trustBadges = [
  { label: "5.0 on Google", stars: true },
  { label: `${site.warranty} Warranty` },
  { label: "Factory-Certified Parts" },
  { label: `Licensed ${site.license}` },
  { label: "Same-Day Service" },
];

/**
 * Review aggregate + Google Business Profile links. ratingValue/reviewCount
 * feed the JSON-LD on the home + /reviews pages; the Google URLs drive the
 * /reviews CTAs (read all reviews + write a review). reviewCount is the real
 * Google total, intentionally decoupled from how many reviews we display.
 */
export const reviewsMeta = {
  ratingValue: "5.0",
  // The real Google total — verified on the Business Profile, intentionally
  // decoupled from how many reviews we display below. Bump as it grows.
  reviewCount: 33,
  // GBP listing (read all reviews) + the dedicated one-tap "write a review" link.
  googleProfileUrl: "https://www.google.com/maps?cid=3171954100122581360",
  googleReviewUrl: "https://g.page/r/CXB5psVyCwUsEBM/review",
} as const;

/** Approximate business center (San Diego) for LocalBusiness geo schema. */
export const geo = { latitude: 32.7157, longitude: -117.1611 } as const;

/** Official profile URLs for schema sameAs (Google Business Profile, Instagram). */
export const sameAs: string[] = [
  "https://www.google.com/maps?cid=3171954100122581360",
  "https://www.instagram.com/outlaw_appliance_repair/",
];

/**
 * Honest review JSON-LD fragment. Only asserts aggregateRating + reviews when
 * we actually have reviews to back them — an empty AggregateRating is invalid
 * and gets flagged by Google. Spread into the business node on BOTH the home
 * page and /reviews so the two can never drift.
 */
export function reviewSchemaFragment(): Record<string, unknown> {
  if (reviewsMeta.reviewCount <= 0) return {};
  return {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewsMeta.ratingValue,
      reviewCount: reviewsMeta.reviewCount,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating ?? 5),
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
  };
}
