# SESSION STATE — Outlaw Appliance Repair

_Last updated: 2026-05-15_

## Where things stand

**V1 home page is LIVE in production.**

- **Live:** https://outlaw-appliance-repair.vercel.app
- **Repo:** https://github.com/kunznco/outlaw-appliance-repair (default branch `dev`)
- **Vercel:** project `outlaw-appliance-repair` under team `kunzncos-projects`, GitHub-connected (push to `dev` auto-deploys)
- **Last commit on `dev`:** `2656da5` — "refactor(design): tone down branding, lead with service message"

## Project context (important for next session)

- **Client:** Jesse, owner of **Outlaw Appliance Repair** (San Diego, CA Lic. A49881, phone (619) 888-3136). This is a **Kunz & Co client project**.
- Jesse **also owns House Calls Appliance Repair** (Ramona, est. 1991, Lic. A780423) and is **consolidating House Calls under the Outlaw brand** (acquisition was "next week" as of 2026-05-13 — confirm status).
- House Calls content is Jesse's (he has the rights), but we chose to build Outlaw **fully original**, using House Calls only as structural reference. Do NOT lift House Calls copy/images verbatim.
- The House Calls hero "video" is licensed Wix stock (prefix `11062b_`), NOT original footage — not usable for Outlaw.
- Full client context: `~/Documents/Claude/knowledge/businesses/kunz-co/clients/outlaw-appliance-repair.md`

## Branch / deploy posture

- All work on `dev`. `main` is local-only (bare create-next-app commit). Per Chris's rule, Claude never pushes to `main` — Chris merges `dev → main` when he chooses (currently `dev` IS the GitHub default + Vercel production source, so production already tracks `dev`).

## Open / next steps

1. **Jesse's headshot** → drop at `assets/source/jesse-headshot.jpg`. Unlocks the nano-banana 2 image pipeline (architecture + 14 prompts already designed; script not yet written — `scripts/generate-images.ts`).
2. **Resend contact form (V2)** — currently `mailto:`. Needs `RESEND_API_KEY` in Doppler project `outlaw-appliance-repair`, then a form component + API route.
3. **Logo PNG fidelity** — current PNGs are JPEG-cropped from the 1024×1024 brand sheet. If Jesse has true source files (transparent PNG / vector), swap them into `public/logo/`.
4. **V2 pages** (planned, not built): `/services`, `/service-area/rancho-santa-fe`, `/contact`. SEO roadmap + content briefs were produced by agents earlier this session — re-derive from conversation or the searchfit content-strategist if needed.
5. **Acquisition framing** — once House Calls deal closes, consider adding heritage claim ("serving San Diego since 1991") + expanded North County service-area pages (Ramona/RB/Scripps Ranch/Fallbrook/Bonsall already in `lib/site.ts`).
6. **Custom domain** — when ready, point `outlawappliancerepair.com` at Vercel; set `NEXT_PUBLIC_SITE_URL` env accordingly.

## Design direction (locked)

- Aesthetic: vintage Americana / outlaw western, **toned down** so the service/community message leads. Brand is accent, not the lead.
- Palette ratio target: ~70% cream / 15% ink / 10% rust / 5% plate-yellow.
- Type: Alfa Slab One (display) + Fraunces (body) — 2 fonts only.
- Signature element: bull-skull primary badge (hero) + license-plate motif.
- Static HTML mockup at `mockup/index.html` is an early reference — the live Next.js site has since diverged (toned down). The site is now the source of truth, not the mockup.

## Gotchas

- Tailwind v4 — palette is `@theme` tokens in `app/globals.css`, no `tailwind.config.ts`.
- `git config user.email` must be `chris@kunznco.com` before any commit (verified clean this session).
- `pnpm` only, Node 22 (`.nvmrc`).
