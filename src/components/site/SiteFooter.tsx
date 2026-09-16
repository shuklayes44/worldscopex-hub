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


export function SiteFooter() {
  return (
    <footer className="mt-16 border-t-2 border-ink bg-surface">
      <div className="container-edge grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Wordmark />
          <Tagline className="mt-2" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            {SITE.description}
          </p>
        </div>

        <nav aria-label="Sections">
          <h2 className="kicker text-ink">Sections</h2>
          <ul className="mt-3 space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={c.path}
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
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edge flex flex-wrap items-center justify-between gap-2 py-5">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Pre-launch publication — verified stories are in preparation.
          </p>
        </div>
      </div>
    </footer>
  );
}
