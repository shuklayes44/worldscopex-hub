import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { ArticleCard } from "@/components/site/ArticleCard";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchArticles } from "@/data/articles";

type SearchParams = { q?: string };

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    const query = search["q"];
    return typeof query === "string" ? { q: query.slice(0, 120) } : {};
  },
  component: SearchPage,
  head: () => ({ meta: [
    { title: "Search — WorldScopeX" }, { name: "description", content: "Search verified WorldScopeX reporting and analysis." },
    { property: "og:title", content: "Search — WorldScopeX" }, { property: "og:description", content: "Search verified WorldScopeX reporting and analysis." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/search" },
    { name: "twitter:card", content: "summary_large_image" }, { name: "robots", content: "noindex, follow" },
  ], links: [{ rel: "canonical", href: "/search" }] }),
});

function SearchPage() {
  const { q = "" } = Route.useSearch();
  const query = q.trim();
  const results = searchArticles(query);
  return (
    <PageShell ticker={false}>
      <div className="container-edge">
        <nav aria-label="Breadcrumb" className="mt-6 text-xs text-muted-foreground"><ol className="flex gap-2"><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Search</li></ol></nav>
        <header className="mt-6 border-b-2 border-ink pb-6"><p className="kicker text-live">Archive</p><h1 className="headline-xl mt-2 text-ink">Search WorldScopeX</h1></header>
        <form action="/search" method="get" role="search" className="mt-8 flex max-w-3xl gap-2">
          <label htmlFor="site-search" className="sr-only">Search verified stories</label>
          <Input id="site-search" name="q" type="search" defaultValue={q} placeholder="Search topics, sections or headlines" className="h-11 rounded-none bg-card" />
          <Button type="submit" className="h-11 rounded-none"><Search aria-hidden="true" /> Search</Button>
        </form>
        <section aria-live="polite" aria-labelledby="results-heading" className="mt-12 pb-10">
          <h2 id="results-heading" className="text-xl font-bold">{query ? `Results for “${query}”` : "Search the archive"}</h2>
          {results.length ? <div className="mt-5 divide-y divide-border">{results.map((article) => <ArticleCard key={article.slug} article={article} variant="list" />)}</div> : <div className="mt-5 border-y border-border bg-surface px-5 py-10"><p className="headline-md text-ink">{query ? "No verified stories match this search." : "The verified archive is in preparation."}</p><p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">Only reviewed and verified reporting is searchable. WorldScopeX will not populate results with draft or invented material.</p></div>}
        </section>
      </div>
    </PageShell>
  );
}