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
          className="flex items-center shrink-0"
          aria-label={`${site.name} home`}
        >
          {/* Mobile: square skull icon. Desktop: full horizontal lockup. */}
          <Logo
            variant="icon"
            className="h-11 w-11 sm:hidden"
            priority
          />
          <Logo
            variant="horizontal"
            className="hidden sm:block h-12 w-auto md:h-14"
            priority
          />
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
