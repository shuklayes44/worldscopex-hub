export function BreakingTicker() {
  return (
    <section aria-label="Newsroom status" className="border-y border-border bg-surface">
      <div className="container-edge flex items-stretch overflow-hidden">
        <p className="kicker flex shrink-0 items-center bg-live px-3 py-2.5 text-live-foreground">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-live-foreground" aria-hidden="true" />
          Status
        </p>
        <p className="py-2.5 pl-5 text-sm text-ink-soft">
          WorldScopeX is preparing its first verified stories. No unverified news is published.
        </p>
      </div>
    </section>
  );
}
