import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { site } from "@/lib/site";

export function SiteNav() {
  return (
    <nav
      className="relative sticky top-0 z-50 bg-bg/95 backdrop-blur border-b border-line"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 flex items-center justify-between gap-4 py-3">
        <a
          href="/"
          className="flex items-center shrink-0"
          aria-label={`${site.name} home`}
        >
          {/* Mobile: square skull icon. Desktop: full horizontal lockup. */}
          <Logo variant="icon" className="h-10 w-10 sm:hidden" priority />
          <Logo
            variant="horizontal"
            className="hidden sm:block h-11 w-auto md:h-12"
            priority
          />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {[
            { href: "/services", label: "Services" },
            { href: "/#area", label: "Service Area" },
            { href: "/#about", label: "About" },
            { href: "/#reviews", label: "Reviews" },
            { href: "/#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.82rem] text-ink-soft hover:text-rust transition-colors"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <MobileNav />
          <a
            href={`tel:${site.phoneRaw}`}
            className="btn-primary !py-2 !px-3.5 !text-sm"
            aria-label={`Call ${site.name} at ${site.phone}`}
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
