import { Link } from "@tanstack/react-router";

export function PrelaunchState({
  section,
  compact = false,
}: {
  section?: string;
  compact?: boolean;
}) {
  return (
    <div className={`border-y border-border bg-surface ${compact ? "px-4 py-8" : "px-5 py-12 sm:px-10 sm:py-16"}`}>
      <p className="kicker text-live">Pre-launch newsroom</p>
      <h2 className={`${compact ? "headline-md" : "headline-lg"} mt-3 max-w-3xl text-ink`}>
        {section ? `${section} coverage is in preparation.` : "Verified stories are in preparation."}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
        WorldScopeX will publish here only after reporting has been sourced, reviewed and verified. We will not fill this space with invented headlines or unverified claims.
      </p>
      <Link to="/editorial-policy" className="kicker mt-6 inline-block text-brand underline-offset-4 hover:underline">
        Read our editorial standards →
      </Link>
    </div>
  );
}
