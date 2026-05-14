/**
 * Site-wide content + NAP data.
 * Single source of truth — change here, every component picks it up.
 */

export const site = {
  name: "Outlaw Appliance Repair",
  shortName: "Outlaw",
  owner: "Jesse",
  ownerRole: "Proprietor",
  tagline: "Where Expertise Meets Reliability",
  description:
    "Licensed San Diego appliance repair. Nine appliance types, factory-certified parts, one-year warranty on every job. Call (619) 888-3136.",
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
  phone: "(619) 888-3136",
  phoneRaw: "+16198883136",
  email: "jesse@outlawappliancerepair.com",
  city: "San Diego",
  state: "CA",
  license: "A49881",
  warranty: "1 year",
  hours: "Mon–Sat · 7am–7pm",
  serviceCallPrice: process.env.NEXT_PUBLIC_SERVICE_CALL_PRICE ?? "49",
} as const;

export type ServiceSlug =
  | "refrigerator"
  | "dishwasher"
  | "range"
  | "washer"
  | "dryer"
  | "microwave"
  | "trash-compactor"
  | "garbage-disposal"
  | "wall-oven";

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
    slug: "trash-compactor",
    number: "07",
    title: "Trash Compactors",
    short: "Compact, jam, track",
    blurb:
      "Won't compact, jammed motor, drawer off-track — the one nobody else wants to touch, we do.",
  },
  {
    slug: "garbage-disposal",
    number: "08",
    title: "Garbage Disposals",
    short: "Hum, jam, replace",
    blurb:
      "Humming but not spinning, jammed, leaking, ready for replacement — we'll have it running before lunch.",
  },
  {
    slug: "wall-oven",
    number: "09",
    title: "Wall Ovens",
    short: "Preheat, broil, seal",
    blurb:
      "Won't preheat, broiler dead, door seal gone, control board fault — single, double, or steam ovens, all brands.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  where: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jesse showed up on time. Professional and personal. He was able to perform repairs without it costing a fortune.",
    name: "Josie C.",
    where: "San Diego, CA",
  },
  {
    quote:
      "Jesse showed up as promised. Professional, efficient, and even sympathetic.",
    name: "Eva T.",
    where: "San Diego, CA",
  },
  {
    quote:
      "Great experience. Work was done quickly and smoothly. Highly recommend for quality and timely service.",
    name: "Andrea M.",
    where: "San Diego, CA",
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

export const announcements = [
  `Licensed CA #${site.license}`,
  `${site.warranty} Warranty on Every Job`,
  "Factory-Trained Technician",
  "Family Owned, San Diego",
  "Same-Day Service Available",
  `$${site.serviceCallPrice} Service Call — Fully Waived If We Can't Fix It`,
];
