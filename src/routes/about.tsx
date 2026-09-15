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
      intro="WorldScopeX is an independent publication in preparation, focused on India, world affairs, geopolitics, economy and technology."
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
            "WorldScopeX has not yet published news coverage. The newsroom is preparing its first independently sourced and verified stories.",
            "Empty editorial spaces are intentional: WorldScopeX will not use fictional reports, invented sources or unverified claims as stand-ins for journalism.",
          ],
        },
        {
          heading: "How we verify",
          paragraphs: [
            "Each article carries a sources and context block naming the documents, data and interviews behind it. Claims we could not verify are labelled as unverified rather than omitted quietly.",
            "Where automated research tools assist reporting, the WorldScopeX Desk remains responsible for every published claim and source review.",
          ],
        },
        {
          heading: "Corrections",
          paragraphs: [
            "We correct errors promptly and openly. Corrections are noted on the article with the date and nature of the change. Use the verified newsroom channel that will be published on our contact page before launch.",
          ],
        },
      ]}
    />
  );
}
