import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/site/CategoryPage";
export const Route = createFileRoute("/india")({ component: () => <CategoryPage slug="india" />, head: () => categoryHead("india") });