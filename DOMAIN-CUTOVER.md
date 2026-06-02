# Domain Cutover Runbook — outlawappliancerepair.com → Vercel

Move `outlawappliancerepair.com` from the current Jobber site to this Vercel project.

## Before you start
- **Confirm Jesse is ready.** The moment DNS flips, the old Jobber site stops serving and this site takes over.
- DNS is managed at **GoDaddy** (nameservers `ns25/ns26.domaincontrol.com`).
- Email is **Google Workspace**. The DNS changes below do NOT touch email — but only if you change exactly the two records listed and nothing else.

## Vercel side — DONE
- Both `outlawappliancerepair.com` and `www.outlawappliancerepair.com` are added to the project.
- `NEXT_PUBLIC_SITE_URL` = `https://outlawappliancerepair.com` (Production); deployed. Canonicals/sitemap/OG/schema already emit the real domain, so the apex serves correct URLs the instant DNS resolves.

## GoDaddy DNS — change ONLY these two records

Log in to GoDaddy → **Domains → outlawappliancerepair.com → DNS / Manage DNS**.

### 1. Apex (`@`)
- **Delete** both existing A records on `@`:
  - `A  @  15.197.212.204`
  - `A  @  3.33.229.73`
- **Add:** `A  @  76.76.21.21`  (TTL: 600 / default)

### 2. `www`
- **Delete** the existing `www` record (CNAME → `domains.jobbersites.com`).
- **Add:** `CNAME  www  cname.vercel-dns.com`
  - (If GoDaddy rejects the CNAME, use `A  www  76.76.21.21` instead.)

## DO NOT TOUCH (leave exactly as-is)
- **MX records** (`aspmx.l.google.com`, etc.) — Google Workspace email.
- **TXT records** — SPF (`v=spf1 include:_spf.google.com ~all`) and `google-site-verification=…`.
- **Nameservers** — keep GoDaddy's `ns25/ns26.domaincontrol.com`. Do NOT switch to Vercel nameservers (that would move all DNS and risk email).

## After the flip
1. Wait for propagation (usually 10–60 min). Vercel auto-issues SSL and emails Chris when verified.
2. Tell Claude "DNS is flipped" → Claude verifies:
   - `https://outlawappliancerepair.com` returns 200 with valid SSL
   - `https://www.outlawappliancerepair.com` 308-redirects to the apex
   - canonical / OG / sitemap show the real domain
3. Claude sets the apex as **Primary Domain** in Vercel (so `www` redirects to it).
4. Optional: submit `https://outlawappliancerepair.com/sitemap.xml` in Google Search Console and run the Google Rich Results test.

## Rollback
If anything goes wrong, revert the two GoDaddy records to their original values (apex A → 15.197.212.204 + 3.33.229.73; www CNAME → domains.jobbersites.com) and the Jobber site is restored. Email is unaffected throughout.
