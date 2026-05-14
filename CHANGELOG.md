# Changelog

All notable changes to this project will be documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Next.js 16 App Router scaffold with TypeScript strict and Tailwind v4
- Custom design system tokens in `app/globals.css` — vintage Americana / outlaw western palette (cream, ink, rust, plate yellow, teal)
- Brand identity in `components/logo.tsx` with 5 inline-SVG variants (primary, shield, icon, wordmark, horizontal) per the supplied brand sheet
- Home page composition with all sections from the V1 mockup:
  - Top banner (marquee trust strip)
  - Sticky nav with skull-icon lockup + phone CTA
  - Hero with massive type + bull-skull badge + license plate + $49 service-call pill
  - Trust strip (5 signals on dark)
  - Services grid (9 appliance categories with inline SVG icons)
  - Wanted-poster pricing card (`$49 service call, fully waived if we can't fix it`)
  - Meet-Jesse about section with shield-mark portrait frame + credentials
  - Testimonials (Josie, Eva, Andrea) on dark with rotated note-cards
  - Service-area teaser with license-plate city pills + Rancho Santa Fe feature block
  - Final CTA with giant phone number
  - Footer with shield mark, license plate, NAP, link columns
- JSON-LD `HomeAndConstructionBusiness` schema on home page (NAP, services, area served, reviews, aggregate rating)
- `app/sitemap.ts` and `app/robots.ts`
- next/font wiring for Alfa Slab One (display) and Fraunces (body) per the 2-font rule
- `lib/site.ts` as single source of truth for NAP, services, testimonials, service areas, announcements

### Notes

- Logo variants render as inline SVG so the site ships without any external image assets. Drop raster PNGs at `public/logo/{variant}.png` later to upgrade fidelity per variant.
- Contact form is currently `mailto:` — Resend integration deferred to V2.
- Nano-banana 2 image generation script not yet implemented — scaffold reserves env var `AI_GATEWAY_API_KEY` and `assets/source/` directory for reference images.
- Static HTML mockup retained at `mockup/index.html` as a visual reference / design lock.
