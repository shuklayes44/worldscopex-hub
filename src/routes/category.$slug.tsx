import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getCategory } from "@/data/articles";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    throw redirect({ href: category.path, statusCode: 301 });
  },
  component: () => null,
  head: ({ params, loaderData }) => {
    const name = loaderData?.category.name ?? "Section";
    const title = `${name} — WorldScopeX`;
    const description =
      loaderData?.category.description ??
       `${name} coverage from WorldScopeX.`;
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
