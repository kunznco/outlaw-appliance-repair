@AGENTS.md

# outlaw-appliance-repair

## Checks, verify & deploy (this repo)
Global ship flow applies (`feat/*`/`fix/*` → checks → `reviewer` → handoff → "ship it" → squash to `main`). Repo specifics:
- **Checks:** `pnpm build` (only `dev`/`build`/`start` scripts exist; no lint, test, or typecheck yet)
- **Verify (UI):** Vercel preview at `outlaw-appliance-repair-git-<branch>-kunzncos-projects.vercel.app`
- **Goes live:** merge to `main` → Vercel auto-deploys. GitHub `kunznco/outlaw-appliance-repair`, Vercel team `kunzncos-projects`.
