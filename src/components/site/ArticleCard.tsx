import { Link } from "@tanstack/react-router";
import {
  categoryName,
  formatDate,
  type Article,
} from "@/data/articles";

type Variant = "lead" | "standard" | "compact" | "list";

export function ArticleCard({
  article,
  variant = "standard",
  priority = false,
  showDek = true,
}: {
  article: Article;
  variant?: Variant;
  priority?: boolean;
  showDek?: boolean;
}) {
  const to = "/article/$slug";
  const params = { slug: article.slug };

  const Meta = (
    <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
      <span>{article.author.name}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span>{article.readingMinutes} min read</span>
    </p>
  );

  const Kicker = (
    <span className="kicker text-live">{categoryName(article.category)}</span>
  );

  if (variant === "lead") {
    return (
      <article className="group">
        <Link to={to} params={params} className="block no-underline">
          <figure className="m-0 overflow-hidden bg-surface">
            <img
              src={article.heroImage}
              alt={article.imageAlt}
              width={1600}
              height={900}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              className="aspect-[16/9] w-full object-cover transition-opacity duration-200 group-hover:opacity-95"
            />
            <figcaption className="mt-1.5 text-[11px] text-muted-foreground">
              {article.imageCredit}
            </figcaption>
          </figure>
          <div className="mt-4">
            {Kicker}
            <h2 className="headline-xl mt-2 text-ink group-hover:underline group-hover:decoration-border-strong group-hover:underline-offset-4">
              {article.headline}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {article.dek}
            </p>
            {Meta}
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "list") {
    return (
      <article className="group border-b border-border py-4 last:border-b-0">
        <Link
          to={to}
          params={params}
          className="flex items-start gap-4 no-underline"
        >
          <div className="min-w-0 flex-1">
            {Kicker}
            <h3 className="headline-md mt-1.5 text-ink group-hover:underline group-hover:underline-offset-4">
              {article.headline}
            </h3>
            {showDek ? (
              <p className="mt-1.5 line-clamp-2 text-sm text-ink-soft">
                {article.dek}
              </p>
            ) : null}
            {Meta}
          </div>
          <img
            src={article.heroImage}
            alt={article.imageAlt}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-20 w-28 shrink-0 object-cover sm:h-24 sm:w-36"
          />
        </Link>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group border-b border-border pb-3 last:border-b-0">
        <Link to={to} params={params} className="block no-underline">
          {Kicker}
          <h3 className="headline-sm mt-1 text-ink group-hover:underline group-hover:underline-offset-4">
            {article.headline}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </p>
        </Link>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col">
      <Link to={to} params={params} className="flex h-full flex-col no-underline">
        <img
          src={article.heroImage}
          alt={article.imageAlt}
          width={1600}
          height={900}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="aspect-[16/9] w-full bg-surface object-cover"
        />
        <div className="mt-3 flex flex-1 flex-col">
          {Kicker}
          <h3 className="headline-md mt-1.5 text-ink group-hover:underline group-hover:underline-offset-4">
            {article.headline}
          </h3>
          {showDek ? (
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
              {article.dek}
            </p>
          ) : null}
          <div className="mt-auto">{Meta}</div>
        </div>
      </Link>
    </article>
  );
}
