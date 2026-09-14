import type { ReactNode } from "react";
import { PageShell } from "./PageShell";

export interface StaticSection {
  heading: string;
  paragraphs: string[];
}

export function StaticPage({
  kicker,
  title,
  intro,
  sections,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  sections: StaticSection[];
  children?: ReactNode;
}) {
  return (
    <PageShell ticker={false}>
      <div className="container-edge">
        <header className="mt-10 border-b-2 border-ink pb-6">
          <p className="kicker text-live">{kicker}</p>
          <h1 className="headline-xl mt-2 text-ink">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        </header>

        <div className="mt-8 max-w-3xl pb-8">
          {sections.map((s) => (
            <section key={s.heading} className="mb-8">
              <h2 className="text-xl font-bold tracking-tight">{s.heading}</h2>
              <div className="prose-article mt-3 text-ink">
                {s.paragraphs.map((text, i) => (
                  <p key={i} className="mb-4 text-base leading-relaxed sm:text-[1.0625rem]">
                    {text}
                  </p>
                ))}
              </div>
            </section>
          ))}
          {children}
        </div>
      </div>
    </PageShell>
  );
}

export const staticHead = (
  title: string,
  description: string,
  path: string,
) => ({
  meta: [
    { title: `${title} — WorldScopeX` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — WorldScopeX` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: path }],
});
