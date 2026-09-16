/**
 * Labelled advertising placeholder. Renders an empty, clearly-marked reserved
 * area — no network calls, no layout shift. A real ad tag can later be mounted
 * inside the inner container.
 */
export function AdSlot({
  size = "leaderboard",
  className = "",
}: {
  size?: "leaderboard" | "rectangle" | "inline";
  className?: string;
}) {
  const height =
    size === "leaderboard"
      ? "h-[90px] sm:h-[110px]"
      : size === "rectangle"
        ? "h-[250px]"
        : "h-[120px]";

  return (
    <aside
      aria-label="Advertisement"
      className={`border border-dashed border-border-strong bg-surface ${className}`}
    >
      <div className={`flex ${height} flex-col items-center justify-center gap-1`}>
        <span className="kicker text-muted-foreground">ADVERTISEMENT</span>
      </div>
    </aside>
  );
}
