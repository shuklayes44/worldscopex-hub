import { createFileRoute, Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/site/AdSlot";
import { NewsletterCta } from "@/components/site/NewsletterCta";
import { PageShell } from "@/components/site/PageShell";
import { PrelaunchState } from "@/components/site/PrelaunchState";
import { SITE, categories } from "@/data/articles";

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
  return (
    <PageShell>
      <div className="container-edge">
        <AdSlot className="mt-6" />

        <section aria-labelledby="publication-status" className="mt-8">
          <h1 id="publication-status" className="headline-xl max-w-4xl text-ink">
            Independent reporting, published only when verified.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
            WorldScopeX is building its newsroom and preparing coverage across India, world affairs, geopolitics, economy and technology.
          </p>
          <div className="mt-8">
            <PrelaunchState />
          </div>
        </section>

        <section aria-labelledby="sections-heading" className="mt-14">
          <div className="rule-top mb-5 pt-3">
            <h2 id="sections-heading" className="text-xl font-bold sm:text-2xl">Coverage sections</h2>
            <p className="mt-1 max-w-2xl text-sm text-ink-soft">Our editorial structure is ready for independently verified reporting.</p>
          </div>
          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to="/category/$slug"
                params={{ slug: category.slug }}
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

        <div id="newsletter" className="mt-16 scroll-mt-24"><NewsletterCta /></div>
      </div>
    </PageShell>
  );
}
