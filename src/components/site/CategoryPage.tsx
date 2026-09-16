import { Link } from "@tanstack/react-router";
import { AdSlot } from "./AdSlot";
import { ArticleCard } from "./ArticleCard";
import { NewsletterCta } from "./NewsletterCta";
import { PageShell } from "./PageShell";
import { PrelaunchState } from "./PrelaunchState";
import { SectionHeading } from "./SectionHeading";
import { articlesByCategory, categories, type CategorySlug } from "@/data/articles";

export function CategoryPage({ slug }: { slug: CategorySlug }) {
  const category = categories.find((item) => item.slug === slug);
  if (!category) return null;
  const items = articlesByCategory(slug);
  const [lead, ...latest] = items;
  const relatedSections = categories.filter((item) => item.slug !== slug);

  return (
    <PageShell>
      <div className="container-edge">
        <nav aria-label="Breadcrumb" className="mt-6 text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{category.name}</li>
          </ol>
        </nav>

        <header className="mt-6 border-b-2 border-ink pb-5">
          <p className="kicker text-live">Section</p>
          <h1 className="headline-xl mt-2 text-ink">{category.name}</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">{category.description}</p>
        </header>

        <AdSlot className="mt-6" />

        <section aria-labelledby={`${slug}-featured`} className="mt-10">
          <SectionHeading title="Featured" as="h2" />
          {lead ? <ArticleCard article={lead} variant="lead" priority /> : <PrelaunchState section={category.name} />}
        </section>

        <section aria-labelledby={`${slug}-latest`} className="mt-14">
          <SectionHeading title="Latest stories" as="h2" description={`Verified ${category.name.toLocaleLowerCase("en-IN")} reporting will appear here in publication order.`} />
          {latest.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((article) => <ArticleCard key={article.slug} article={article} />)}
            </div>
          ) : (
            <div className="border-y border-border py-8 text-sm leading-relaxed text-ink-soft">
              No verified stories have been published in this section yet.
            </div>
          )}
          <div className="mt-6 flex items-center justify-between border-b border-border pb-4 text-sm text-muted-foreground" aria-label="Story pagination status">
            <span>Page 1</span><span>No additional stories</span>
          </div>
        </section>

        <AdSlot size="inline" className="mt-12" />

        <section aria-labelledby={`${slug}-related`} className="mt-14">
          <SectionHeading title="Explore more sections" as="h2" />
          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-5">
            {relatedSections.map((item) => (
              <Link key={item.slug} to={item.path} className="border-b border-border px-3 py-5 text-sm font-semibold text-ink hover:text-brand lg:border-r lg:last:border-r-0">
                {item.name} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <div id="newsletter" className="mt-16 scroll-mt-24"><NewsletterCta /></div>
      </div>
    </PageShell>
  );
}

export function categoryHead(slug: CategorySlug) {
  const category = categories.find((item) => item.slug === slug);
  const name = category?.name ?? "Section";
  const path = category?.path ?? "/";
  const title = `${name} News & Analysis — WorldScopeX`;
  const description = category?.description ?? "Verified reporting from WorldScopeX.";
  return {
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name, item: path },
      ] }),
    }],
  };
}