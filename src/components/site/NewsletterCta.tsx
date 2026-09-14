import { useState } from "react";

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="border border-border bg-surface px-5 py-8 sm:px-10 sm:py-12"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="kicker text-live">The WorldScopeX Brief</p>
        <h2 id="newsletter-heading" className="headline-lg mt-3 text-ink">
          One email each morning. The stories that actually moved.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          India, world affairs, geopolitics, economy and technology — summarised
          with sources, in under five minutes of reading.
        </p>

        {done ? (
          <p
            role="status"
            className="mt-6 border border-border bg-card px-4 py-3 text-sm text-ink"
          >
            Thanks — this demo does not store addresses yet. Newsletter delivery
            will be connected before launch.
          </p>
        ) : (
          <form
            className="mt-6 flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 border border-input bg-card px-3 py-2.5 text-sm text-ink placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="kicker bg-brand px-5 py-3 text-brand-foreground transition-opacity hover:opacity-90"
            >
              Subscribe free
            </button>
          </form>
        )}
        <p className="mt-3 text-xs text-muted-foreground">
          No spam. Unsubscribe in one click.
        </p>
      </div>
    </section>
  );
}
