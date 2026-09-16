import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/site/CategoryPage";
export const Route = createFileRoute("/explainers")({ component: () => <CategoryPage slug="explainers" />, head: () => categoryHead("explainers") });