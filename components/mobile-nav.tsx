'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/#area', label: 'Service Area' },
  { href: '/#about', label: 'About' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#contact', label: 'Contact' },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  const close = useCallback(() => setIsOpen(false), [])

  // Esc closes, Tab is trapped between toggle button ↔ last link
  useEffect(() => {
    if (!isOpen) return
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        toggleRef.current?.focus()
        return
      }
      if (e.key === 'Tab') {
        const panel = document.getElementById('mobile-nav-panel')
        if (!panel) return
        const links = Array.from(panel.querySelectorAll<HTMLElement>('a[href]'))
        if (links.length === 0) return
        const lastLink = links[links.length - 1]
        const toggle = toggleRef.current
        if (e.shiftKey) {
          // Shift+Tab on toggle → wrap to last link
          if (document.activeElement === toggle) {
            e.preventDefault()
            lastLink.focus()
          }
        } else {
          // Tab on last link → wrap to toggle button
          if (document.activeElement === lastLink) {
            e.preventDefault()
            toggle?.focus()
          }
        }
      }
    }
    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
  }, [isOpen, close])

  // Move focus to the first link when the menu opens
  useEffect(() => {
    if (isOpen) firstLinkRef.current?.focus()
  }, [isOpen])

  // Prevent body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((v) => !v)}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md text-ink-soft hover:text-rust hover:bg-rust/10 transition-colors"
      >
        {isOpen ? <XIcon /> : <HamburgerIcon />}
      </button>

      {/* Backdrop — conditionally rendered; closes menu on tap */}
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={close}
        />
      )}

      {/*
        Panel — always in DOM so aria-controls always points to a valid element.
        hidden attribute (display:none) removes it from the tab order when closed.
        Uses div[role=navigation] rather than <nav> to avoid nested nav landmarks.
      */}
      <div
        id="mobile-nav-panel"
        role="navigation"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        className="absolute left-0 right-0 top-full z-50 bg-bg/95 backdrop-blur border-b border-line shadow-soft-lg lg:hidden"
      >
        <ul role="list" className="flex flex-col py-2">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={link.href}
                className="flex items-center px-6 py-3.5 text-[0.87rem] text-ink-soft hover:text-rust hover:bg-rust/5 transition-colors"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function HamburgerIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
