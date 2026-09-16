import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/site/AdSlot";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { PageShell } from "@/components/site/PageShell";
import { PrelaunchState } from "@/components/site/PrelaunchState";
import { SITE, categories, leadStory, trendingStories, allArticles, articlesByCategory } from "@/data/articles";

const title = "WorldScopeX — Verified Global News in Preparation";
const description = "WorldScopeX is preparing verified reporting on India, world affairs, geopolitics, economy and technology.";

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
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        name: SITE.name,
        description: SITE.description,
        url: "/",
      }),
    }],
  }),
});

function HomePage() {
  const lead = leadStory();
  const latest = allArticles().slice(0, 6);
  const trending = trendingStories();
  return (
    <PageShell>
      <div className="container-edge">
        <AdSlot className="mt-6" />

        <section aria-labelledby="publication-status" className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8"><p className="kicker text-live">Top story</p><h1 id="publication-status" className="headline-xl mt-3 max-w-4xl text-ink">Independent reporting, published only when verified.</h1><p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">WorldScopeX is building its newsroom and preparing coverage across India, world affairs, geopolitics, economy and technology.</p><div className="mt-8">{lead ? null : <PrelaunchState />}</div></div>
          <aside className="lg:col-span-4" aria-labelledby="trending-heading"><div className="rule-top pt-3"><h2 id="trending-heading" className="text-xl font-bold">Trending</h2></div>{trending.length ? null : <p className="mt-5 border-b border-border pb-6 text-sm leading-relaxed text-ink-soft">Trending stories will be ranked here after verified reporting is published.</p>}</aside>
        </section>

        <section aria-labelledby="latest-heading" className="mt-14"><div className="rule-top mb-5 pt-3"><h2 id="latest-heading" className="text-xl font-bold sm:text-2xl">Latest news</h2></div>{latest.length ? null : <p className="border-y border-border py-8 text-sm leading-relaxed text-ink-soft">The latest verified stories will appear here in publication order.</p>}</section>

        <AdSlot size="inline" className="mt-12" />

        <section aria-labelledby="sections-heading" className="mt-14">
          <div className="rule-top mb-5 pt-3">
            <h2 id="sections-heading" className="text-xl font-bold sm:text-2xl">Coverage sections</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-soft">Our editorial structure is ready for independently verified reporting.</p>
          </div>
          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={category.path}
                className="group border-b border-border px-1 py-6 no-underline sm:px-5 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
              >
                <p className="kicker text-live">Section</p>
                <h2 className="headline-md mt-2 text-ink group-hover:underline group-hover:underline-offset-4">{category.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{category.description}</p>
                <span className="kicker mt-4 inline-block text-brand">View section →</span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="newsrooms-heading" className="mt-14"><div className="rule-top mb-5 pt-3"><h2 id="newsrooms-heading" className="text-xl font-bold sm:text-2xl">Across the newsroom</h2></div><div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => <div key={category.slug}><div className="flex items-baseline justify-between border-b border-border pb-3"><h3 className="headline-md text-ink">{category.name}</h3><Link to={category.path} className="kicker text-brand">View →</Link></div><p className="mt-4 text-sm leading-relaxed text-ink-soft">{articlesByCategory(category.slug).length ? "Verified coverage is available." : "Verified stories are in preparation."}</p></div>)}</div></section>

        <div id="newsletter" className="mt-16 scroll-mt-24"><NewsletterCta /></div>
      </div>
    </PageShell>
  );
}
