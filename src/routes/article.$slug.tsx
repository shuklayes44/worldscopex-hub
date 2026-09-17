import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AdSlot } from "@/components/site/AdSlot";
import { ArticleBody, SourceBlock } from "@/components/site/ArticleBody";
import { ArticleCard } from "@/components/site/ArticleCard";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ShareControls } from "@/components/site/ShareControls";
import {
  SITE,
  categoryName,
  categoryPath,
  formatDateTime,
  getArticle,
  recommendedStories,
  relatedStories,
} from "@/data/articles";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  component: ArticlePage,
  head: ({ params, loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.headline} — ${SITE.name}` : SITE.name;
    const description = a?.dek ?? SITE.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: a?.headline ?? SITE.name },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/article/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        ...(a ? [{ name: "author", content: a.author.name }] : []),
      ],
      links: [{ rel: "canonical", href: `/article/${params.slug}` }],
      scripts: a
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "NewsArticle",
                  mainEntityOfPage: `/article/${a.slug}`,
                  headline: a.headline,
                  description: a.dek,
                  datePublished: a.publishedAt,
                  dateModified: a.updatedAt ?? a.publishedAt,
                  articleSection: categoryName(a.category),
                  author: { "@type": "Organization", name: a.author.name },
                  publisher: { "@type": "NewsMediaOrganization", name: SITE.name },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                    { "@type": "ListItem", position: 2, name: categoryName(a.category), item: categoryPath(a.category) },
                    { "@type": "ListItem", position: 3, name: a.headline, item: `/article/${a.slug}` },
                  ],
                },
              ],
            }),
          }]
        : [],
    };
  },
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = relatedStories(article, 3);
  const recommended = recommendedStories(article, 4);

  return (
    <PageShell>
      <div className="container-edge">
        <nav aria-label="Breadcrumb" className="mt-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to={categoryPath(article.category)} className="hover:text-brand">
                {categoryName(article.category)}
              </Link>
            </li>
          </ol>
        </nav>

        <div className="mt-6 grid gap-12 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <header>
              <p className="kicker text-live">
                {categoryName(article.category)}
              </p>
              <h1 className="headline-xl mt-3 text-ink">{article.headline}</h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {article.dek}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
                <div className="text-sm">
                  <p className="font-semibold text-ink">{article.author.name}</p>
                  <p className="text-muted-foreground">{article.author.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    <span>{article.location}</span> · Published{" "}
                    <time dateTime={article.publishedAt}>
                      {formatDateTime(article.publishedAt)}
                    </time>
                    {article.updatedAt ? (
                      <>
                        {" "}
                        · Updated{" "}
                        <time dateTime={article.updatedAt}>
                          {formatDateTime(article.updatedAt)}
                        </time>
                      </>
                    ) : null}
                    {" "}· {article.readingMinutes} min read
                  </p>
                </div>
                <ShareControls title={article.headline} />
              </div>
            </header>

            <figure className="m-0 mt-6">
              <img
                src={article.heroImage}
                alt={article.imageAlt}
                width={1600}
                height={900}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-[16/9] w-full bg-surface object-cover"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">
                {article.imageAlt}. {article.imageCredit}
              </figcaption>
            </figure>

            <div className="mt-8">
              <ArticleBody blocks={article.body} />
            </div>

            <SourceBlock sources={article.sources} />

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Topics">
              {article.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-border-strong px-2.5 py-1 text-xs text-ink-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <ShareControls title={article.headline} />
            </div>

            <AdSlot className="mt-10" />

            <section aria-labelledby="related-heading" className="mt-12">
              <SectionHeading title="Related stories" as="h2" />
              {related.length ? <div className="grid gap-8 sm:grid-cols-3">
                {related.map((a) => <ArticleCard key={a.slug} article={a} variant="standard" showDek={false} />)}
              </div> : <p className="border-b border-border pb-6 text-sm text-ink-soft">More verified reporting on this subject will appear here when available.</p>}
            </section>
          </article>

          <aside className="lg:col-span-4" aria-labelledby="recommended-heading">
            <div className="rule-top pt-3">
              <h2 id="recommended-heading" className="text-lg font-bold tracking-tight">
                Recommended for you
              </h2>
            </div>
            {recommended.length ? <div className="mt-4 flex flex-col gap-3">
              {recommended.map((a) => <ArticleCard key={a.slug} article={a} variant="compact" />)}
            </div> : <p className="mt-4 border-b border-border pb-5 text-sm leading-relaxed text-ink-soft">Recommendations will appear as the verified archive grows.</p>}
            <AdSlot size="rectangle" className="mt-6" />
          </aside>
        </div>

        <div id="newsletter" className="mt-16 scroll-mt-24">
          <NewsletterCta />
        </div>
      </div>
    </PageShell>
  );
}
