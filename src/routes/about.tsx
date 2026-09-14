import { createFileRoute } from "@tanstack/react-router";
import { StaticPage, staticHead } from "@/components/site/StaticPage";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    staticHead(
      "About",
      "Who publishes WorldScopeX, what we cover, and the standards our reporting on India, world affairs, geopolitics, economy and technology follows.",
      "/about",
    ),
});

function AboutPage() {
  return (
    <StaticPage
      kicker="About us"
      title="About WorldScopeX"
      intro="WorldScopeX is a global news publication covering India, world affairs, geopolitics, economy and technology, built on sourced reporting and plain explanation."
      sections={[
        {
          heading: "What we cover",
          paragraphs: [
            "Our sections are India, World, Geopolitics, Economy & Business, Technology and Explainers. Each story is written to answer three questions: what happened, how do we know, and why does it matter.",
            "Explainers exist for subjects that cannot be understood from a single day's news. They are updated as the underlying facts change.",
          ],
        },
        {
          heading: "Current status of this site",
          paragraphs: [
            "Every story currently published here is clearly-labelled sample content used to demonstrate the publication's structure and design. Nothing on the site should be read as a record of real events.",
            "Sample articles will be replaced with verified reporting before public launch.",
          ],
        },
        {
          heading: "How we verify",
          paragraphs: [
            "Each article carries a sources and context block naming the documents, data and interviews behind it. Claims we could not verify are labelled as unverified rather than omitted quietly.",
            "Where automated research tools assist reporting, a human editor remains responsible for every published claim and byline.",
          ],
        },
        {
          heading: "Corrections",
          paragraphs: [
            "We correct errors promptly and openly. Corrections are noted on the article with the date and nature of the change. Write to the editorial address on our contact page.",
          ],
        },
      ]}
    />
  );
}
