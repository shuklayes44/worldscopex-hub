import { createFileRoute } from "@tanstack/react-router";
import { StaticPage, staticHead } from "@/components/site/StaticPage";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    staticHead(
      "Terms of Use",
      "The terms governing access to WorldScopeX, permitted use of our content, and limits of liability.",
      "/terms",
    ),
});

function TermsPage() {
  return (
    <StaticPage
      kicker="Legal"
      title="Terms of Use"
      intro="By using WorldScopeX you agree to these terms. They are written to be readable rather than exhaustive, and will be reviewed by counsel before public launch."
      sections={[
        {
          heading: "Use of the site",
          paragraphs: [
            "You may read, link to and share our pages freely. You may not scrape the site at a scale that degrades it for other readers, misrepresent our content as your own, or republish full articles without written permission.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Text, layout, the WorldScopeX name and the WorldScopeX mark belong to the publisher. Published reporting will use original, licensed or appropriately credited imagery.",
            "Short quotation with clear attribution and a link back is always welcome.",
          ],
        },
        {
          heading: "Reader contributions",
          paragraphs: [
            "If you send us a tip, document or correction, you confirm you are entitled to share it. We may use it in reporting, subject to any confidentiality we agree with you in advance.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "The site is provided as is. To the extent permitted by law, we are not liable for losses arising from reliance on our content or from interruptions to the service.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are intended to be governed by Indian law, with jurisdiction in the courts of New Delhi, unless a different arrangement is stated at launch.",
          ],
        },
      ]}
    />
  );
}
