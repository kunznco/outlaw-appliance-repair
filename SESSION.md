# SESSION STATE — Outlaw Appliance Repair

_Last updated: 2026-06-02_

## Where things stand

**Full site is LIVE in production** (service pages + real imagery + SEO hardening), and the custom domain is **cutover-ready on the Vercel side — waiting on a GoDaddy DNS flip.**

- **Live (Vercel URL):** https://outlaw-appliance-repair.vercel.app
- **Target domain:** https://outlawappliancerepair.com (added to the Vercel project; DNS not yet pointed)
- **Repo:** https://github.com/kunznco/outlaw-appliance-repair (default branch `dev` = production)
- **Vercel:** project `outlaw-appliance-repair`, team `kunzncos-projects`, GitHub-connected (push to `dev` auto-deploys)

## Shipped this session (2026-06-02)

- **Branding tone-down** → clean Hanken Grotesk type, soft UI, rust as ~10% accent; western personality kept in the logo + subtle skull "tidbits" (eyebrows, sunburst, stitch divider). Ref: straightshooter.ac.
- **Service call price $49 → $99** (lib/site.ts + Vercel env).
- **NAP correction (was a real bug):** phone fixed to **(858) 757-8977** (live site had a wrong (619) number). License A49881 kept. Service list reconciled — dropped trash compactor + wall oven, added **ice maker** → 8 appliances.
- **8 service pages + `/services` hub** (`/services/[slug]`), FAQ + Service + Breadcrumb schema, San Diego local angles (salt air / hard water — no competitor uses this). Content in `lib/services-content.ts`.
- **Real imagery, all production-safe (Jesse's own + free-commercial stock):**
  - Jesse's site + House Calls: fridge, dishwasher, range, washer/dryer, ice maker, About collage (Jesse working + his service truck)
  - Pexels/Unsplash (commercial license, no branding): microwave, garbage disposal
- **Mobile nav** added (`components/mobile-nav.tsx`) — `dev` previously had none.
- **SEO launch fixes** (PR #5): OG image (`/og.png`) + OG/Twitter tags, home canonical, per-page Twitter cards, hub BreadcrumbList+ItemList, openingHours schema, favicon.ico.
- Merged via PR #4 + PR #5 (squash) to `dev`; deployed to production; verified live.

## ⛳ NEXT ACTION — Domain cutover (Chris's move at GoDaddy)

DNS is managed at **GoDaddy** (ns25/ns26.domaincontrol.com). Email is **Google Workspace** (MX → aspmx.l.google.com) — must NOT be touched.

**Change ONLY these two records at GoDaddy → DNS:**
1. **Apex A record:** delete the two existing `@` A records (15.197.212.204, 3.33.229.73) → add **`A  @  76.76.21.21`**
2. **www:** delete the existing `www` CNAME (→ domains.jobbersites.com) → add **`CNAME  www  cname.vercel-dns.com`** (or `A www 76.76.21.21`)

**DO NOT touch:** MX records, TXT records (SPF + google-site-verification), or nameservers. Leaving these alone keeps email + Search Console intact.

**Gate:** flipping DNS takes Jesse's current Jobber site down and serves this one — confirm Jesse is ready first.

**After Chris flips DNS, Claude finishes:**
- Vercel auto-issues SSL + verifies (Chris gets an email)
- Verify apex 200 + valid SSL, `www` 308-redirects to apex, canonical/OG/sitemap show the real domain
- Set apex as Primary Domain in Vercel so www redirects (dashboard)
- (Optional) Submit sitemap in Google Search Console; run Google Rich Results test

## Backlog / next build phases

- **Tier-3 SEO:** city/area pages (`/service-area/la-jolla`, Chula Vista, etc.) and brand×neighborhood combos — the biggest local-SEO lever (Mr. Appliance blueprint).
- **Resend contact form** (currently mailto only) — needs RESEND_API_KEY in Doppler.
- **Analytics:** none yet (intentional). Vercel Web Analytics is the no-cost first step when wanted.
- **Schema enrichment:** add geo coords + sameAs (GBP/social) once we have them.
- **Nano-banana imagery:** still optional; Jesse's real photos cover the site now.

## Gotchas

- Tailwind v4 — palette is `@theme` tokens in `app/globals.css`, no `tailwind.config.ts`.
- `git config user.email` must be `chris@kunznco.com` before commits (verified this session).
- `NEXT_PUBLIC_SITE_URL` (Vercel Production) = `https://outlawappliancerepair.com`. Canonicals/sitemap/OG/schema all derive from it. Already set + deployed, so the apex serves correct URLs the moment DNS resolves.
- pnpm only, Node 22.
