import type { ReactNode } from "react";
import { BreakingTicker } from "./BreakingTicker";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({
  children,
  ticker = true,
}: {
  children: ReactNode;
  ticker?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand focus:px-3 focus:py-2 focus:text-sm focus:text-brand-foreground"
      >
        Skip to main content
      </a>
      <SiteHeader />
      {ticker ? <BreakingTicker /> : null}
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
