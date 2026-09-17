import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getCategory } from "@/data/articles";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    throw redirect({ href: category.path, statusCode: 301 });
  },
  component: () => null,
});
