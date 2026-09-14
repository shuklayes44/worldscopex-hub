import { Link } from "@tanstack/react-router";
import { SITE, categories } from "@/data/articles";
import { Tagline, Wordmark } from "./Brand";

const infoLinks = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/editorial-policy", label: "Editorial Policy" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/terms", label: "Terms of Use" },
];

const socials = [
  { label: "X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "RSS", href: "/rss.xml" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t-2 border-ink bg-surface">
      <div className="container-edge grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Wordmark />
          <Tagline className="mt-2" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            {SITE.description} All stories currently shown are sample content
            used to demonstrate the publication's structure.
          </p>
        </div>

        <nav aria-label="Sections">
          <h2 className="kicker text-ink">Sections</h2>
          <ul className="mt-3 space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="text-sm text-ink-soft hover:text-brand"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <nav aria-label="Information">
            <h2 className="kicker text-ink">Information</h2>
            <ul className="mt-3 space-y-2">
              {infoLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-soft hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <h2 className="kicker mt-6 text-ink">Follow</h2>
          <ul className="mt-3 flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  rel="noopener noreferrer me"
                  target="_blank"
                  className="border border-border-strong px-2.5 py-1 text-xs text-ink-soft hover:text-brand"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edge flex flex-wrap items-center justify-between gap-2 py-5">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Sample editorial demo — not a record of real events.
          </p>
        </div>
      </div>
    </footer>
  );
}
