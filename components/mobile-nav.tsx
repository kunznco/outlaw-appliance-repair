"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { servicePages } from "@/lib/services-content";
import { areas } from "@/lib/areas-content";

/**
 * Mobile disclosure menu (hidden on lg+). Top-level links plus collapsible
 * Services and Service Areas sections. Closes on selection and backdrop tap.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="p-2 rounded-md border border-line text-ink hover:border-rust transition-colors flex items-center justify-center"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={close} aria-hidden />
          <div className="absolute right-0 top-[calc(100%+0.6rem)] z-50 w-[18rem] max-h-[80vh] overflow-y-auto bg-paper border border-line rounded-xl p-2 flex flex-col shadow-[var(--shadow-soft-lg)]">
            <Section label="Services" hubHref="/services" hubLabel="All services" onNavigate={close}
              items={servicePages.map((s) => ({ href: `/services/${s.urlSlug}`, label: s.name }))} />
            <Section label="Service Areas" hubHref="/service-area" hubLabel="All San Diego County" onNavigate={close}
              items={areas.map((a) => ({ href: `/service-area/${a.slug}`, label: a.name }))} />
            <TopItem href="/#about" onNavigate={close}>About</TopItem>
            <TopItem href="/reviews" onNavigate={close}>Reviews</TopItem>
            <TopItem href="/#contact" onNavigate={close}>Contact</TopItem>
            <a
              href={`tel:${site.phoneRaw}`}
              onClick={close}
              className="mt-2 text-center bg-rust text-white rounded-lg px-3 py-2.5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem" }}
            >
              Call {site.phone}
            </a>
          </div>
        </>
      )}
    </div>
  );
}

function Section({
  label,
  hubHref,
  hubLabel,
  items,
  onNavigate,
}: {
  label: string;
  hubHref: string;
  hubLabel: string;
  items: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <details className="group border-b border-line last:border-0">
      <summary
        className="flex items-center justify-between cursor-pointer list-none px-3 py-2.5 rounded-lg text-ink hover:bg-cream"
        style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.92rem" }}
      >
        {label}
        <span className="text-rust transition-transform group-open:rotate-45" aria-hidden style={{ fontSize: "1.2rem", lineHeight: 1 }}>+</span>
      </summary>
      <div className="flex flex-col pb-1">
        {items.map((it) => (
          <a key={it.href} href={it.href} onClick={onNavigate} className="px-5 py-2 rounded-lg text-ink-soft hover:text-rust hover:bg-cream transition-colors text-[0.85rem]">
            {it.label}
          </a>
        ))}
        <a href={hubHref} onClick={onNavigate} className="px-5 py-2 rounded-lg text-rust hover:bg-cream transition-colors text-[0.85rem]" style={{ fontWeight: 700 }}>
          {hubLabel} →
        </a>
      </div>
    </details>
  );
}

function TopItem({ href, children, onNavigate }: { href: string; children: React.ReactNode; onNavigate: () => void }) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className="px-3 py-2.5 rounded-lg text-ink hover:bg-cream hover:text-rust transition-colors border-b border-line last:border-0"
      style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.92rem" }}
    >
      {children}
    </a>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
