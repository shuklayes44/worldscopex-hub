import { createFileRoute, notFound } from "@tanstack/react-router";
import { AdSlot } from "@/components/site/AdSlot";
import { ArticleCard } from "@/components/site/ArticleCard";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { PageShell } from "@/components/site/PageShell";
import { SITE, articlesByCategory, getCategory, trendingStories } from "@/data/articles";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  component: CategoryPage,
  head: ({ params, loaderData }) => {
    const name = loaderData?.category.name ?? "Section";
    const title = `${name} news and analysis — ${SITE.name}`;
    const description =
      loaderData?.category.description ??
      `${name} coverage from ${SITE.name}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/category/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/category/${params.slug}` }],
    };
  },
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = articlesByCategory(category.slug);
  const [lead, ...rest] = items;
  const trending = trendingStories(5).filter((a) => a.category !== category.slug);

  return (
    <PageShell>
      <div className="container-edge">
        <header className="mt-8 border-b-2 border-ink pb-5">
          <p className="kicker text-live">Section</p>
          <h1 className="headline-xl mt-2 text-ink">{category.name}</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">
            {category.description}
          </p>
        </header>

        <AdSlot className="mt-6" />

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {lead ? <ArticleCard article={lead} variant="lead" priority /> : null}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {rest.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="standard" />
              ))}
            </div>
            {items.length === 0 ? (
              <p className="text-base text-ink-soft">
                No stories published in this section yet.
              </p>
            ) : null}
          </div>

          <aside className="lg:col-span-4" aria-labelledby="elsewhere-heading">
            <div className="rule-top pt-3">
              <h2 id="elsewhere-heading" className="text-lg font-bold tracking-tight">
                Elsewhere on WorldScopeX
              </h2>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {trending.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="compact" />
              ))}
            </div>
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
