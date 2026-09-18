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
      ? "min-h-[90px] sm:min-h-[110px]"
      : size === "rectangle"
        ? "min-h-[250px]"
        : "min-h-[110px] sm:min-h-[120px]";

  return (
    <aside
      aria-label="Advertisement"
      className={`w-full overflow-hidden border border-dashed border-border-strong bg-surface ${className}`}
    >
      <div className={`flex ${height} items-center justify-center px-4 py-3 text-center`}>
        <span className="kicker text-muted-foreground">ADVERTISEMENT</span>
      </div>
    </aside>
  );
}
