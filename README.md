# Outlaw Appliance Repair

Marketing site for [Outlaw Appliance Repair](https://outlawappliancerepair.com), San Diego's factory-trained appliance repair crew.

**Live preview:** TBD (Vercel auto-deploys on push to `dev` and `main`)

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript strict
- Tailwind CSS v4 (CSS-based `@theme` config in `app/globals.css`)
- next/font: **Alfa Slab One** (display) + **Fraunces** (body)
- Node 22 LTS · pnpm
- Vercel hosting (team: `kunzncos-projects`)
- Doppler for secrets (project: `outlaw-appliance-repair`)

## Visual identity

Aesthetic: vintage Americana / outlaw western. Palette and type are defined as Tailwind v4 tokens in `app/globals.css`:

| Token | Hex | Use |
| --- | --- | --- |
| `cream` | `#F4EDDF` | Page bg, light cards |
| `paper` | `#FBF6E9` | Service cards, wanted poster |
| `ink` | `#1A1814` | Text, borders, dark strips |
| `rust` | `#A0432B` | Headlines accent, shield, CTAs |
| `plate` | `#E8B948` | License plates, accent type |
| `teal-disc` | `#2F5C6E` | Icon background (favicon variant) |

## Brand identity / Logo

The logo is built as inline SVG in `components/logo.tsx` with five variants (from the brand sheet):

- `primary` — Bull skull + sunburst over rust shield + license plate. Hero centerpiece.
- `shield` — Rust shield + plate, no skull. Footer brand block.
- `icon` — Bull skull on teal disc. Favicon + small marks.
- `wordmark` — Yellow type only on cream. Editorial accents.
- `horizontal` — Skull left, rust block + plate right. Nav lockup.

To upgrade any variant to a raster file, drop a PNG at `public/logo/{variant}.png` and update `Logo` in `components/logo.tsx` to render `<Image src=...>` for that variant.

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
NEXT_PUBLIC_SERVICE_CALL_PRICE=49
RESEND_API_KEY=             # for the contact form (V2)
RESEND_TO_EMAIL=jesse@outlawappliancerepair.com
AI_GATEWAY_API_KEY=         # for scripts/generate-images.ts (nano-banana 2)
```

## Project layout

```
outlaw-appliance-repair/
├── app/
│   ├── layout.tsx          # root layout, fonts, metadata
│   ├── page.tsx            # home page composition + JSON-LD
│   ├── globals.css         # Tailwind v4 + @theme tokens
│   ├── sitemap.ts          # /sitemap.xml
│   └── robots.ts           # /robots.txt
├── components/             # 1 component per file (kebab-case names)
│   ├── logo.tsx            # 5-variant SVG identity
│   ├── license-plate.tsx
│   ├── top-banner.tsx
│   ├── site-nav.tsx
│   ├── hero.tsx
│   ├── trust-strip.tsx
│   ├── service-icon.tsx    # inline SVG per appliance category
│   ├── services-grid.tsx
│   ├── wanted-poster.tsx   # $49 service-call hook
│   ├── about.tsx
│   ├── testimonials.tsx
│   ├── service-area.tsx
│   ├── final-cta.tsx
│   └── site-footer.tsx
├── lib/
│   ├── site.ts             # NAP + services + testimonials + areas (single source)
│   └── utils.ts
├── mockup/                 # static HTML mockup (V1 design reference)
├── assets/source/          # nano-banana reference images (gitignored)
└── public/                 # static assets, future /logo/*.png overrides
```

## Deploy

- Repo: `kunznco/outlaw-appliance-repair` on GitHub
- Vercel team: `kunzncos-projects`
- Branch strategy: all work on `dev`. `main` is production. Per workflow rules, Claude never pushes directly to `main` — Chris merges `dev → main` after review.

## Roadmap

- **V1 (now):** home page only, click-to-call + mailto, type-led hero, SVG logo
- **V2:** /services, /service-area/rancho-santa-fe, /contact with Resend form
- **V3:** brand pages (Sub-Zero, Wolf, Viking…), full neighborhood matrix, blog
- **Nano-banana 2:** offline image generation script (`scripts/generate-images.ts`) replaces SVG placeholders with vintage Americana hero/section imagery once Jesse's headshot lands at `assets/source/jesse-headshot.jpg`
