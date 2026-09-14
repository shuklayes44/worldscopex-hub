import type { BodyBlock, SourceNote } from "@/data/articles";

export function ArticleBody({ blocks }: { blocks: BodyBlock[] }) {
  return (
    <div className="prose-article text-ink">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2
              key={i}
              className="mt-9 mb-3 text-[1.4rem] font-bold leading-snug"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="my-5 list-disc space-y-2 pl-6">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="my-7 border-l-2 border-live pl-5 italic"
            >
              <p className="m-0">{block.text}</p>
              {block.attribution ? (
                <footer className="mt-2 font-sans text-sm not-italic text-muted-foreground">
                  {block.attribution}
                </footer>
              ) : null}
            </blockquote>
          );
        }
        return (
          <p key={i} className="mb-5">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export function SourceBlock({ sources }: { sources: SourceNote[] }) {
  return (
    <section
      aria-labelledby="sources-heading"
      className="mt-10 border border-border bg-surface p-5 sm:p-6"
    >
      <h2 id="sources-heading" className="kicker text-live">
        Sources & context
      </h2>
      <dl className="mt-4 space-y-4">
        {sources.map((s) => (
          <div key={s.label}>
            <dt className="text-sm font-semibold text-ink">{s.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
              {s.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
