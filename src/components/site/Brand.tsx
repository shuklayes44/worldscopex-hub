import { Link } from "@tanstack/react-router";
import mark from "@/assets/worldscopex-mark.png";
import { SITE } from "@/data/articles";

export function Wordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const text =
    size === "lg"
      ? "text-4xl sm:text-5xl"
      : size === "sm"
        ? "text-lg"
        : "text-2xl";
  const img = size === "lg" ? "h-11 w-11" : size === "sm" ? "h-6 w-6" : "h-8 w-8";

  return (
    <Link
      to="/"
      className="inline-flex min-w-0 items-center gap-2 text-ink no-underline"
      aria-label={`${SITE.name} home`}
    >
      <img
        src={mark}
        alt=""
        width={816}
        height={816}
        loading="eager"
        decoding="async"
        className={`${img} shrink-0 self-center object-contain`}
      />
      <span
        className={`${text} font-serif font-bold leading-none`}
      >
        World<span className="text-brand">Scope</span>
        <span className="text-live">X</span>
      </span>
    </Link>
  );
}

export function Tagline({ className = "" }: { className?: string }) {
  return (
    <p className={`kicker text-ink-soft ${className}`}>{SITE.tagline}</p>
  );
}
