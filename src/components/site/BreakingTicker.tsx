import { breakingHeadlines } from "@/data/articles";

export function BreakingTicker() {
  const items = [...breakingHeadlines, ...breakingHeadlines];

  return (
    <section
      aria-label="Breaking news"
      className="border-y border-border bg-surface"
    >
      <div className="container-edge flex items-stretch gap-0 overflow-hidden">
        <p className="kicker flex shrink-0 items-center bg-live px-3 py-2.5 text-live-foreground">
          <span
            className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-live-foreground"
            aria-hidden="true"
          />
          Breaking
        </p>
        <div className="relative flex-1 overflow-hidden py-2.5">
          <div className="ticker-track">
            {items.map((headline, i) => (
              <span
                key={`${headline}-${i}`}
                className="mx-5 text-sm text-ink-soft"
              >
                {headline}
                <span className="ml-5 text-border-strong" aria-hidden="true">
                  |
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
