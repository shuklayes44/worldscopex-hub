import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/site/CategoryPage";
export const Route = createFileRoute("/geopolitics")({ component: () => <CategoryPage slug="geopolitics" />, head: () => categoryHead("geopolitics") });