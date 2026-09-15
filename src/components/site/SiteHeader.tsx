import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { categories } from "@/data/articles";
import { Tagline, Wordmark } from "./Brand";


export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-paper">
      {/* utility bar */}
      <div className="border-b border-border bg-brand text-brand-foreground">
        <div className="container-edge flex flex-wrap items-center justify-between gap-2 py-1.5">
          <p className="text-[11px] tracking-wide opacity-90">
            Verified journalism in preparation
          </p>
          <nav aria-label="Utility" className="flex items-center gap-4">
            <Link
              to="/about"
              className="text-[11px] tracking-wide opacity-90 hover:opacity-100"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[11px] tracking-wide opacity-90 hover:opacity-100"
            >
              Contact
            </Link>
            <a
              href="#newsletter"
              className="text-[11px] font-semibold tracking-wide"
            >
              Newsletter
            </a>
          </nav>
        </div>
      </div>

      {/* masthead */}
      <div className="container-edge py-5 sm:py-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <Wordmark size="lg" />
            <Tagline />
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
            className="kicker border border-border-strong px-3 py-2 text-ink lg:hidden"
          >
            {open ? "Close" : "Sections"}
          </button>
        </div>
      </div>

      {/* primary navigation */}
      <nav
        id="primary-nav"
        aria-label="Sections"
        className="border-t border-ink/80 bg-paper"
      >
        <div className="container-edge">
          <ul
            className={`${open ? "flex" : "hidden"} flex-col py-2 lg:flex lg:flex-row lg:items-center lg:gap-1 lg:py-0`}
          >
            <li>
              <Link
                to="/"
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="kicker block px-3 py-3 text-ink hover:text-brand [&.active]:text-live"
              >
                Home
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpen(false)}
                  className="kicker block px-3 py-3 text-ink hover:text-brand [&.active]:text-live"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
