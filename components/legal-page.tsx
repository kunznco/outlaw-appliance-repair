import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Eyebrow } from "@/components/western";

/**
 * Shared shell + prose helpers for legal pages (Privacy, Terms).
 * Server component — renders nav, a Home / {title} breadcrumb, a header
 * block, a readable prose column, the page content, then the footer.
 * Keeps both legal pages visually consistent with the rest of the site.
 */

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <SiteNav />
      <main>
        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 py-12 sm:py-16">
          <nav
            aria-label="Breadcrumb"
            className="text-[0.8rem] text-ink-soft mb-6"
          >
            <Link href="/" className="hover:text-rust">
              Home
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-ink">{title}</span>
          </nav>

          <header className="max-w-[760px]">
            <Eyebrow className="mb-3">Legal</Eyebrow>
            <h1
              className="display text-ink"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}
            >
              {title}
            </h1>
            <p className="mt-4 text-ink-soft text-[0.92rem]">
              Last updated: {lastUpdated}
            </p>
          </header>

          {/* Readable prose column. Spacing between sections handled here. */}
          <div className="max-w-[760px] mt-10 flex flex-col gap-9">
            {children}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

/** A titled prose section: an h2 heading followed by its content. */
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="display text-ink" style={{ fontSize: "1.4rem" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Standard body paragraph. */
export function Prose({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <p className="text-ink-soft leading-relaxed" style={{ fontSize: "1.02rem" }}>
      {children}
    </p>
  );
}

/** Bulleted list with comfortable spacing and rust markers. */
export function List({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <ul
      className="list-disc pl-5 marker:text-rust flex flex-col gap-2 text-ink-soft leading-relaxed"
      style={{ fontSize: "1.02rem" }}
    >
      {children}
    </ul>
  );
}

/** A single list item. */
export function Item({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <li>{children}</li>;
}

/** Inline anchor styled as a rust link with hover. Opens external in a new tab. */
export function ProseLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.ReactElement {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className="text-rust underline underline-offset-2 hover:text-rust-deep transition-colors break-words"
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
