"use client";

import { useState } from "react";
import { navLinks } from "@/lib/site";

/**
 * Mobile disclosure menu (hidden on lg+). Closes on selection and on
 * backdrop tap. Client component because it needs toggle state.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

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
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-[calc(100%+0.6rem)] z-50 w-56 bg-paper border border-line rounded-xl p-2 flex flex-col shadow-[var(--shadow-soft-lg)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-ink hover:bg-cream hover:text-rust transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
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
