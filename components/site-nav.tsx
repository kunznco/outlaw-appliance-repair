import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-cream border-b border-ink"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 flex items-center justify-between gap-4 py-3">
        <a
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label={`${site.name} home`}
        >
          <Logo variant="icon" className="h-11 w-11" />
          <div className="hidden sm:block leading-tight">
            <div
              className="text-base sm:text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-rust">OUTLAW</span>{" "}
              <span className="text-ink">APPLIANCE</span>
            </div>
            <div
              className="text-[0.6rem] tracking-[0.18em] uppercase text-ink-soft mt-0.5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              San Diego · Lic. {site.license}
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {[
            { href: "#services", label: "Services" },
            { href: "#area", label: "Service Area" },
            { href: "#about", label: "About" },
            { href: "#reviews", label: "Reviews" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.1em] text-ink hover:text-rust transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`tel:${site.phoneRaw}`}
          className="btn-primary !py-2.5 !px-4 !text-sm sm:!text-base"
          aria-label={`Call ${site.name} at ${site.phone}`}
        >
          <span aria-hidden>☎</span>
          {site.phone}
        </a>
      </div>
    </nav>
  );
}
