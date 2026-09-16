import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage, categoryHead } from "@/components/site/CategoryPage";
export const Route = createFileRoute("/world")({ component: () => <CategoryPage slug="world" />, head: () => categoryHead("world") });