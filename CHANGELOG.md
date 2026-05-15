# Changelog

All notable changes to this project will be documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
