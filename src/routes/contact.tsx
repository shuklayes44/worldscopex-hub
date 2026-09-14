import { createFileRoute } from "@tanstack/react-router";
import { StaticPage, staticHead } from "@/components/site/StaticPage";
import { SITE } from "@/data/articles";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    staticHead(
      "Contact",
      "How to reach the WorldScopeX newsroom for story tips, corrections, permissions and advertising enquiries.",
      "/contact",
    ),
});

function ContactPage() {
  return (
    <StaticPage
      kicker="Contact"
      title="Contact WorldScopeX"
      intro="Story tips, corrections, permissions and partnership enquiries all reach a human editor."
      sections={[
        {
          heading: "Newsroom",
          paragraphs: [
            `Editorial desk: ${SITE.editorialEmail}`,
            "For corrections, include the article headline and the specific claim in question. We reply to verifiable correction requests first.",
          ],
        },
        {
          heading: "Advertising and partnerships",
          paragraphs: [
            "Advertising slots on this site are currently reserved placeholders and no campaigns are being served. Commercial enquiries can be sent to the editorial address until a dedicated contact is published.",
          ],
        },
        {
          heading: "Secure tips",
          paragraphs: [
            "If a story carries risk for you, say so in your first message and we will agree a safer channel before you share documents. Do not send confidential material to an unverified address.",
          ],
        },
      ]}
    />
  );
}
