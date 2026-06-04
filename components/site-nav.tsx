import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { site } from "@/lib/site";
import { servicePages } from "@/lib/services-content";
import { areas } from "@/lib/areas-content";

export function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-bg/95 backdrop-blur border-b border-line"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 flex items-center justify-between gap-4 py-3">
        <a
          href="/"
          className="flex items-center shrink-0"
          aria-label={`${site.name} home`}
        >
          {/* Single full lockup at every breakpoint (skull + horns + wordmark + San Diego, CA) */}
          <Logo variant="horizontal" className="h-10 w-auto sm:h-11 md:h-12" priority />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {/* Services dropdown */}
          <Dropdown label="Services" href="/services" cols={1} width="w-64">
            {servicePages.map((s) => (
              <DropdownLink key={s.urlSlug} href={`/services/${s.urlSlug}`}>
                {s.name}
              </DropdownLink>
            ))}
            <AllLink href="/services">All services →</AllLink>
          </Dropdown>

          {/* Service Areas dropdown (2-col) */}
          <Dropdown label="Service Areas" href="/service-area" cols={2} width="w-[26rem]">
            {areas.map((a) => (
              <DropdownLink key={a.slug} href={`/service-area/${a.slug}`}>
                {a.name}
              </DropdownLink>
            ))}
            <AllLink href="/service-area" span2>
              All San Diego County →
            </AllLink>
          </Dropdown>

          <TopLink href="/#about">About</TopLink>
          <TopLink href="/reviews">Reviews</TopLink>
          <TopLink href="/#contact">Contact</TopLink>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneRaw}`}
            className="btn-primary !py-2 !px-3.5 !text-sm"
            aria-label={`Call ${site.name} at ${site.phone}`}
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

const linkStyle = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

function TopLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[0.82rem] text-ink-soft hover:text-rust transition-colors"
      style={linkStyle}
    >
      {children}
    </Link>
  );
}

/** CSS-only hover/focus dropdown. Trigger is a real link to the hub page. */
function Dropdown({
  label,
  href,
  children,
  cols,
  width,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
  cols: 1 | 2;
  width: string;
}) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-[0.82rem] text-ink-soft hover:text-rust transition-colors py-2"
        style={linkStyle}
        aria-haspopup="true"
      >
        {label}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5 transition-transform group-hover:rotate-180">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
        <div className={`${width} bg-paper border border-line rounded-xl shadow-[var(--shadow-soft-lg)] p-2 grid ${cols === 2 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-ink hover:bg-cream hover:text-rust transition-colors text-[0.85rem]"
      style={{ fontWeight: 500 }}
    >
      {children}
    </Link>
  );
}

function AllLink({ href, children, span2 }: { href: string; children: React.ReactNode; span2?: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 mt-1 rounded-lg text-rust hover:bg-cream transition-colors text-[0.85rem] border-t border-line ${span2 ? "col-span-2" : ""}`}
      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
    >
      {children}
    </Link>
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
