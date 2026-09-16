import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/site/CategoryPage";
export const Route = createFileRoute("/technology")({ component: () => <CategoryPage slug="technology" />, head: () => categoryHead("technology") });