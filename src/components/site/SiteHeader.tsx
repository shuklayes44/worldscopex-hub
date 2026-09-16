import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/articles";
import { Tagline, Wordmark } from "./Brand";


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

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
            <Link
              to="/search"
              className="text-[11px] font-semibold tracking-wide"
            >
              Search
            </Link>
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
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="rounded-none" aria-label="Search WorldScopeX">
              <Link to="/search"><Search aria-hidden="true" /></Link>
            </Button>
          <Button
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
            variant="outline"
            className="rounded-none px-3 text-ink lg:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}<span className="kicker">Sections</span>
          </Button>
          </div>
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
                  to={c.path}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === c.path ? "page" : undefined}
                  className="kicker block px-3 py-3 text-ink hover:text-brand aria-[current=page]:text-live"
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
