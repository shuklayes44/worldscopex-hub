import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/site/AdSlot";
import { ArticleCard } from "@/components/site/ArticleCard";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  SITE,
  allArticles,
  articlesByCategory,
  categories,
  featuredStories,
  leadStory,
  trendingStories,
} from "@/data/articles";

const title = "WorldScopeX — India, World, Geopolitics, Economy & Tech News";
const description =
  "Clear, sourced reporting and analysis on India, world affairs, geopolitics, economy and technology from WorldScopeX.";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsMediaOrganization",
          name: SITE.name,
          description: SITE.description,
          url: "/",
        }),
      },
    ],
  }),
});

function HomePage() {
  const lead = leadStory();
  const secondary = featuredStories().filter((a) => a.slug !== lead.slug).slice(0, 3);
  const latest = allArticles()
    .filter((a) => a.slug !== lead.slug)
    .slice(0, 6);
  const trending = trendingStories(5);

  return (
    <PageShell>
      <div className="container-edge">
        <AdSlot className="mt-6" />

        {/* Lead + rail */}
        <section aria-labelledby="lead-heading" className="mt-8">
          <h1 id="lead-heading" className="sr-only">
            Top stories from WorldScopeX
          </h1>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <ArticleCard article={lead} variant="lead" priority showDek />
              <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
                {secondary.map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="standard" />
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4" aria-labelledby="trending-heading">
              <div className="rule-top pt-3">
                <h2
                  id="trending-heading"
                  className="text-lg font-bold tracking-tight"
                >
                  Trending now
                </h2>
              </div>
              <ol className="mt-4 space-y-4">
                {trending.map((a, i) => (
                  <li key={a.slug} className="flex gap-3">
                    <span
                      className="kicker w-5 shrink-0 pt-0.5 text-live"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <ArticleCard article={a} variant="compact" />
                    </div>
                  </li>
                ))}
              </ol>
              <AdSlot size="rectangle" className="mt-6" />
            </aside>
          </div>
        </section>

        {/* Latest */}
        <section aria-labelledby="latest-heading" className="mt-14">
          <SectionHeading
            title="Latest news"
            description="The newest reporting across every WorldScopeX section."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="standard" />
            ))}
          </div>
        </section>

        <AdSlot className="mt-14" />

        {/* Category sections */}
        {categories.map((category) => {
          const items = articlesByCategory(category.slug);
          if (items.length === 0) return null;
          const [first, ...rest] = items;
          return (
            <section
              key={category.slug}
              aria-labelledby={`section-${category.slug}`}
              className="mt-14"
            >
              <div className="rule-top mb-5 flex flex-wrap items-end justify-between gap-3 pt-3">
                <div>
                  <h2
                    id={`section-${category.slug}`}
                    className="text-xl font-bold tracking-tight sm:text-2xl"
                  >
                    {category.name}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-ink-soft">
                    {category.description}
                  </p>
                </div>
                <Link
                  to="/category/$slug"
                  params={{ slug: category.slug }}
                  className="kicker text-brand underline-offset-4 hover:underline"
                >
                  All {category.shortName} →
                </Link>
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                <ArticleCard article={first} variant="standard" />
                <div className="flex flex-col">
                  {rest.slice(0, 3).map((a) => (
                    <ArticleCard key={a.slug} article={a} variant="list" />
                  ))}
                  {rest.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      More {category.shortName} reporting is on the way.
                    </p>
                  ) : null}
                </div>
              </div>
            </section>
          );
        })}

        <div id="newsletter" className="mt-16 scroll-mt-24">
          <NewsletterCta />
        </div>
      </div>
    </PageShell>
  );
}
