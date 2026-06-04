# Changelog

All notable changes to this project will be documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased] — 2026-06-04 — Legal pages, reviews page, schema enrichment, cleanup

### Added
- **Privacy Policy page** (`/privacy`) — covers analytics & advertising disclosures (Google Analytics, Google Ads, Meta/Facebook Ads) and California CCPA/CPRA privacy rights.
- **Terms & Conditions page** (`/terms`).
- **Reviews page** (`/reviews`) — highlights Google reviews with review and aggregate-rating schema.
- **Schema enrichment** — geo coordinates and `sameAs` scaffolding added to the JSON-LD, plus a single centralized review-rating object reused across the site.
- **Footer links** to Privacy, Terms, and Reviews.
- The nav **"Reviews"** link now points to the dedicated `/reviews` page (was an on-page anchor).
- The three new pages added to the sitemap.

### Changed
- README brought current — single Hanken Grotesk font (was incorrectly listed as Alfa Slab One + Fraunces), PNG logo (was described as inline SVG), and the env service-call price documented as `99`.
- Contact / lead capture standardized on **Jobber's integrated lead form** (no in-app Resend contact form).

### Removed
- Dead code: the unused `top-banner` component and the unused `announcements` and `navLinks` arrays in `lib/site.ts`.

## [0.2.0] — 2026-06-02 — Service pages, real imagery, SEO hardening, domain prep

### Added
- 8 per-appliance service pages + `/services` hub (refrigerator, dishwasher, oven/range/cooktop, washer, dryer, microwave, garbage disposal, ice maker), each with symptoms, repair-vs-replace, brands, San Diego local angle, and an FAQ — content in `lib/services-content.ts`
- JSON-LD on service pages (Service + FAQPage + BreadcrumbList) and the hub (BreadcrumbList + ItemList); openingHours added to home LocalBusiness schema
- Real photography across all 8 service cards + hero/about (Jesse's own photos from his site + House Calls; microwave + garbage disposal from free-commercial Pexels/Unsplash, no branding)
- Mobile hamburger nav (`components/mobile-nav.tsx`)
- OG image (`/og.png`) + OpenGraph/Twitter image tags; favicon.ico; home canonical; per-page Twitter cards
- Custom domain `outlawappliancerepair.com` + `www` added to the Vercel project; `NEXT_PUBLIC_SITE_URL` set to the real domain. Cutover runbook in `DOMAIN-CUTOVER.md` (awaiting GoDaddy DNS flip)
- PR #6 shipped nav dropdowns, the 14 city service-area pages (`/service-area/[city]`) + the `/service-area` hub, a cleaner logo lockup, and pricing-clarity copy

### Changed
- Branding toned down: single clean grotesque (Hanken Grotesk), soft UI, rust as ~10% accent; western personality kept in the logo + subtle skull tidbits
- Service call price $49 → $99
- Service list reconciled to 8 appliances (dropped trash compactor + wall oven, added ice maker)

### Fixed
- **Phone corrected to (858) 757-8977** — the live site had a wrong (619) number
- Service-page `<title>` was doubling the brand name (now `title: { absolute }`)

## [0.1.0] — 2026-05-15 — V1 home page live

First public deployment. Home page only, click-to-call + mailto.
Live at https://outlaw-appliance-repair.vercel.app

### Added

- Next.js 16 App Router scaffold with TypeScript strict and Tailwind v4
- Design system tokens in `app/globals.css` — vintage Americana / outlaw western palette (cream, paper, ink, rust, plate yellow, teal)
- `lib/site.ts` as single source of truth for NAP, services, testimonials, service areas
- Home page composed of 11 section components (1 per file, kebab-case)
- JSON-LD `HomeAndConstructionBusiness` schema (NAP, services, area served, reviews, aggregate rating)
- `app/sitemap.ts` and `app/robots.ts`
- next/font wiring for Alfa Slab One (display) + Fraunces (body) — 2-font rule
- Real brand identity PNGs cropped from the supplied brand sheet into `public/logo/{primary,shield,icon,wordmark,horizontal}.png`
- Favicon generated from the skull-on-disc icon at `app/icon.png`
- GitHub repo `kunznco/outlaw-appliance-repair`, default branch `dev`, Vercel project under `kunzncos-projects`, GitHub-connected for auto-deploy

### Changed

- Logo component rewritten from inline SVG to `next/image` serving the real brand PNGs (nav = horizontal lockup on desktop / square skull icon on mobile; hero = primary badge; about + footer = shield mark)
- **Toned down branding so the service message leads** (per Chris's feedback that the brand felt "a little much" and didn't read enough like an appliance repair site):
  - Hero headline flipped to "We Fix Your / Appliances." with "Family-Owned · San Diego County" eyebrow and a neighbor-focused subhead
  - Top banner: scrolling marquee → static informational strip
  - Final CTA + Rancho Santa Fe block: full-rust backgrounds → cream/paper with rust accents only
  - Wanted poster: removed diagonal stripe borders + triple shadow, copy → "One Flat Diagnosis Fee"
  - Services grid: thinner borders, dropped default shadow, calmer corner marks
  - Testimonials: dark section → light paper section, removed card rotation
  - About: rewritten in community/service voice — "Your San Diego Repair Neighbor"
  - Color distribution shifted ~50/15/25/10 → ~70/15/10/5 (cream/ink/rust/yellow)

### Notes

- Contact form is `mailto:` — Resend integration deferred to V2
- Nano-banana 2 image script not yet implemented — `AI_GATEWAY_API_KEY` env + `assets/source/` reserved; awaiting Jesse's headshot at `assets/source/jesse-headshot.jpg`
- Static HTML mockup retained at `mockup/index.html` as a design reference
- Reference imagery (brand sheet, original logo) in gitignored `assets/source/`
- `main` branch is local-only with the bare create-next-app commit; all work is on `dev` (the GitHub default + Vercel production source) per the never-push-to-main rule
