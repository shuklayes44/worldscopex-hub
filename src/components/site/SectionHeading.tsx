import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SectionHeading({
  title,
  description,
  href,
  linkLabel = "More",
  as: As = "h2",
  children,
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  as?: "h1" | "h2";
  children?: ReactNode;
}) {
  return (
    <div className="rule-top mb-5 flex flex-wrap items-end justify-between gap-3 pt-3">
      <div>
        <As className="text-xl font-bold tracking-tight sm:text-2xl">{title}</As>
        {description ? (
          <p className="mt-1 max-w-2xl text-sm text-ink-soft">{description}</p>
        ) : null}
        {children}
      </div>
      {href ? (
        <Link
          to={href}
          className="kicker text-brand underline-offset-4 hover:underline"
        >
          {linkLabel} →
        </Link>
      ) : null}
    </div>
  );
}
