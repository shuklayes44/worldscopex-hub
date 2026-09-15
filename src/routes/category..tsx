import { createFileRoute, notFound } from "@tanstack/react-router";
import { AdSlot } from "@/components/site/AdSlot";
import { ArticleCard } from "@/components/site/ArticleCard";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { PageShell } from "@/components/site/PageShell";
import { PrelaunchState } from "@/components/site/PrelaunchState";
import { SITE, articlesByCategory, getCategory } from "@/data/articles";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  component: CategoryPage,
  head: ({ params, loaderData }) => {
    const name = loaderData?.category.name ?? "Section";
    const title = `${name} coverage in preparation — ${SITE.name}`;
    const description = loaderData?.category.description ?? `Verified ${name} coverage from ${SITE.name}.`;
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: `/category/${params.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ], links: [{ rel: "canonical", href: `/category/${params.slug}` }] };
  },
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = articlesByCategory(category.slug);
  return (
    <PageShell>
      <div className="container-edge">
        <header className="mt-8 border-b-2 border-ink pb-5">
          <p className="kicker text-live">Section</p>
          <h1 className="headline-xl mt-2 text-ink">{category.name}</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">{category.description}</p>
        </header>
        <AdSlot className="mt-6" />
        <section aria-label={`${category.name} stories`} className="mt-10">
          {items.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((article) => <ArticleCard key={article.slug} article={article} />)}
            </div>
          ) : <PrelaunchState section={category.name} />}
        </section>
        <div id="newsletter" className="mt-16 scroll-mt-24"><NewsletterCta /></div>
      </div>
    </PageShell>
  );
}
