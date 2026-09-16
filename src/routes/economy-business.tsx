import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/site/CategoryPage";
export const Route = createFileRoute("/economy-business")({ component: () => <CategoryPage slug="economy" />, head: () => categoryHead("economy") });