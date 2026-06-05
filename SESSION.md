# SESSION STATE — Outlaw Appliance Repair

_Last updated: 2026-06-04_

## Where things stand

**Full site is LIVE in production** — home, 8 service pages + `/services` hub, 14 city service-area pages + `/service-area` hub, plus the new **Privacy**, **Terms**, and **Reviews** pages and schema enrichment. The custom domain is **cutover-ready on the Vercel side — still waiting on a GoDaddy DNS flip.**

- **Live (Vercel URL):** https://outlaw-appliance-repair.vercel.app
- **Target domain:** https://outlawappliancerepair.com (added to the Vercel project; DNS not yet pointed)
- **Repo:** https://github.com/kunznco/outlaw-appliance-repair (GitHub default branch `dev` = integration)
- **Vercel:** project `outlaw-appliance-repair`, team `kunzncos-projects`, GitHub-connected. **Production branch = `main`** (Vercel default). Ship flow is **feat → dev → main**; pushing `main` is what triggers a production deploy — a `dev` merge only builds a Preview. `main` had drifted way behind `dev`; resynced this session so production auto-deploys cleanly again (no more manual `vercel --prod`).
- **Lead capture:** **Jobber's integrated lead form** (embedded). Resend was dropped for the contact form.
- **Analytics:** none — Vercel Web Analytics was explicitly declined this session.

## Shipped this session (2026-06-04)

- **Privacy Policy page** (`/privacy`) — analytics & advertising disclosures (Google Analytics, Google Ads, Meta/Facebook Ads) + California CCPA/CPRA rights.
- **Terms & Conditions page** (`/terms`).
- **Reviews page** (`/reviews`) — highlights Google reviews with review + aggregate-rating schema. Shares a `legal-page.tsx`-style prose shell with the legal pages.
- **Schema enrichment** — geo coordinates + `sameAs` scaffolding in the JSON-LD, plus one centralized review-rating object reused across the site.
- **Nav + footer wiring** — footer now links to Privacy / Terms / Reviews; the nav "Reviews" link points to the dedicated `/reviews` page (was an on-page anchor). The three new pages added to the sitemap.
- **Docs + dead-code cleanup** — README brought current (single Hanken Grotesk font, PNG logo, env price 99, current page/component tree); removed the unused `top-banner` component and the unused `announcements` and `navLinks` arrays in `lib/site.ts`.
- **Reviews populated with real Google data** — rating **5.0 / 33 reviews** (the real Google total, decoupled from how many are displayed), **6 verbatim curated Google reviews** on `/reviews`, GBP read link + dedicated **write-a-review** link (`g.page/r/CXB5psVyCwUsEBM/review`), and real `sameAs` (Google listing + Instagram). Also fixed a missing-space typo in the reviews-page intro (`{site.owner} runs` → `{site.owner}{" "}runs`).
- **Production-branch cleanup** — found Vercel production branch is `main` (not `dev`), which is why `dev` merges were only building Previews; resynced `main` to current via the proper feat→dev→main flow.

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

- **Reviews — DONE:** GBP wired (CID `3171954100122581360`), real **5.0 / 33**, 6 curated verbatim Google reviews, write-a-review link, and `sameAs` (Google + Instagram). To add more reviews: append real ones to `testimonials` in `lib/site.ts`; bump `reviewsMeta.reviewCount` as the Google total grows.
- **Tier-3 SEO:** brand × neighborhood combo pages — the biggest remaining local-SEO lever (Mr. Appliance blueprint). The 14 city service-area pages already shipped.
- **Brand pages:** Sub-Zero / Wolf / Viking dedicated pages.
- **Nano-banana imagery:** still optional; Jesse's real photos cover the site now.

## Gotchas

- Tailwind v4 — palette is `@theme` tokens in `app/globals.css`, no `tailwind.config.ts`.
- `git config user.email` must be `chris@kunznco.com` before commits (verified this session).
- `NEXT_PUBLIC_SITE_URL` (Vercel Production) = `https://outlawappliancerepair.com`. Canonicals/sitemap/OG/schema all derive from it. Already set + deployed, so the apex serves correct URLs the moment DNS resolves.
- pnpm only, Node 22.
