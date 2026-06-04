# Outlaw Appliance Repair

Marketing site for [Outlaw Appliance Repair](https://outlawappliancerepair.com), San Diego's factory-trained appliance repair crew.

**Live preview:** TBD (Vercel auto-deploys on push to `dev` and `main`)

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 (CSS-based `@theme` config in `app/globals.css`)
- next/font: a single family — **Hanken Grotesk** (`next/font/google`)
- Node 22 LTS · pnpm
- Vercel hosting (team: `kunzncos-projects`)
- Doppler for secrets (project: `outlaw-appliance-repair`)

## Visual identity

Direction: a clean, trustworthy appliance-repair site with a bold western **logo** — the personality lives in the mark while the chrome stays professional. Palette and type are defined as Tailwind v4 tokens in `app/globals.css`.

**Type:** one clean grotesque for the entire site — **Hanken Grotesk**, loaded via `next/font/google` and wired in `app/layout.tsx` (the `--font-hanken` variable backs both `--font-display` and `--font-body`). No second font; the western type lives only inside the logo art.

**Palette** (tokens from `app/globals.css @theme`):

| Token | Hex | Use |
| --- | --- | --- |
| `bg` | `#F8F4EB` | Light warm page base |
| `cream` | `#F4EDDF` | Warm accent panel |
| `cream-soft` | `#EFE8D9` | Soft panel shade |
| `cream-deep` | `#E5D8BD` | Deeper panel shade |
| `paper` | `#FFFFFF` | Crisp card surface |
| `ink` | `#1F1B16` | Near-black text |
| `ink-soft` | `#5A5247` | Muted body / labels |
| `line` | `#E2D8C4` | Subtle hairline border |
| `rust` | `#A0432B` | Single accent (CTAs, links, eyebrows) |
| `rust-deep` | `#842F1A` | Accent hover / pressed |
| `plate` | `#E8B948` | License-plate nod (used sparingly) |
| `teal-disc` | `#2F5C6E` | Icon disc background |

## Brand identity / Logo

The logo renders real raster **PNG** files from `public/logo/*.png` via `next/image` in `components/logo.tsx`. Five variants (from the brand sheet):

- `primary` — Bull skull + sunburst over rust shield + license plate. Hero centerpiece. (`public/logo/primary.png`)
- `shield` — Rust shield + plate, no skull. Footer brand block / section accents. (`public/logo/shield.png`)
- `icon` — Bull skull on teal disc. Favicon + small marks / nav. (`public/logo/icon.png`)
- `wordmark` — Yellow type only on cream. Editorial / print accents. (`public/logo/wordmark.png`)
- `horizontal` — Skull left, rust block + plate right. Nav lockup / banner. (`public/logo/horizontal.png`)

The `Logo` component maps each variant to its PNG source and intrinsic dimensions, so swapping artwork is a matter of replacing the file in `public/logo/`.

## Local dev

```bash
nvm use            # picks up Node 22 from .nvmrc
pnpm install
pnpm dev           # http://localhost:3000
pnpm build         # production build
pnpm start         # serve the production build locally
```

## Environment

Copy `.env.example` → `.env.local` and fill in (or pull from Doppler once configured):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SERVICE_CALL_PRICE=99
RESEND_API_KEY=             # optional / unused — see lead-capture note below
RESEND_TO_EMAIL=jesse@outlawappliancerepair.com
AI_GATEWAY_API_KEY=         # for scripts/generate-images.ts (nano-banana 2)
```

**Lead capture:** the live contact / lead form is **Jobber's integrated lead form** (embedded), not an in-app Resend form. The `RESEND_*` vars are kept as optional scaffolding only — Resend is not wired into the contact flow.

## Project layout

```
outlaw-appliance-repair/
├── app/
│   ├── layout.tsx                    # root layout, Hanken Grotesk font, metadata
│   ├── page.tsx                      # home page composition + JSON-LD
│   ├── globals.css                   # Tailwind v4 + @theme tokens
│   ├── icon.png                      # app icon (skull-on-disc)
│   ├── favicon.ico                   # favicon
│   ├── sitemap.ts                    # /sitemap.xml
│   ├── robots.ts                     # /robots.txt
│   ├── services/
│   │   ├── page.tsx                  # /services hub
│   │   └── [slug]/page.tsx           # 8 per-appliance service pages
│   ├── service-area/
│   │   ├── page.tsx                  # /service-area hub
│   │   └── [city]/page.tsx           # 14 city service-area pages
│   ├── privacy/page.tsx              # /privacy — Privacy Policy
│   ├── terms/page.tsx                # /terms — Terms & Conditions
│   └── reviews/page.tsx              # /reviews — Google reviews + rating schema
├── components/                       # 1 component per file (kebab-case names)
│   ├── logo.tsx                      # 5-variant PNG identity (next/image)
│   ├── western.tsx                   # small western atoms (eyebrow, etc.)
│   ├── license-plate.tsx
│   ├── site-nav.tsx
│   ├── mobile-nav.tsx
│   ├── hero.tsx
│   ├── trust-strip.tsx
│   ├── service-icon.tsx              # inline SVG per appliance category
│   ├── services-grid.tsx
│   ├── wanted-poster.tsx             # flat service-call hook
│   ├── about.tsx
│   ├── testimonials.tsx
│   ├── service-area.tsx
│   ├── legal-page.tsx                # shared shell + prose for /privacy + /terms
│   ├── final-cta.tsx
│   └── site-footer.tsx
├── lib/
│   ├── site.ts                       # NAP + services + testimonials + areas (single source)
│   ├── services-content.ts           # per-appliance service-page content
│   ├── areas-content.ts              # per-city service-area content
│   └── utils.ts
├── mockup/                           # static HTML mockup (V1 design reference)
├── assets/source/                    # nano-banana reference images (gitignored)
└── public/
    └── logo/                         # primary/shield/icon/wordmark/horizontal.png
```

## Deploy

- Repo: `kunznco/outlaw-appliance-repair` on GitHub
- Vercel team: `kunzncos-projects`
- Branch strategy: all work on `dev`. `main` is production. Per workflow rules, Claude never pushes directly to `main` — Chris merges `dev → main` after review.

## Roadmap

- **V1 (shipped):** home page, click-to-call, type-led hero, real PNG logo, JSON-LD, sitemap/robots.
- **V2 (shipped):** `/services` hub + 8 per-appliance service pages; `/service-area` hub + 14 city service-area pages; SEO hardening (OG image, canonicals, Twitter cards, breadcrumb/FAQ/Service schema); `/privacy`, `/terms`, and `/reviews` pages; schema enrichment (geo coordinates + `sameAs` scaffold + centralized review rating).
- **Lead capture:** Jobber's integrated lead form (embedded) — no in-app Resend contact form.
- **Future:** brand pages (Sub-Zero, Wolf, Viking…), a broader brand × neighborhood matrix, and a blog.
- **Nano-banana 2 (optional):** offline image generation script (`scripts/generate-images.ts`) for vintage Americana hero/section imagery once Jesse's headshot lands at `assets/source/jesse-headshot.jpg`. Jesse's real photos already cover the live site.
