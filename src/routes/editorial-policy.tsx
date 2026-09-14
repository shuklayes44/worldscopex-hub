import { createFileRoute } from "@tanstack/react-router";
import { StaticPage, staticHead } from "@/components/site/StaticPage";

export const Route = createFileRoute("/editorial-policy")({
  component: EditorialPolicyPage,
  head: () =>
    staticHead(
      "Editorial Policy",
      "WorldScopeX standards for sourcing, verification, corrections, independence and the use of automated research tools.",
      "/editorial-policy",
    ),
});

function EditorialPolicyPage() {
  return (
    <StaticPage
      kicker="Standards"
      title="Editorial Policy"
      intro="These are the rules our reporting is held to, including how automated research may and may not be used."
      sections={[
        {
          heading: "Sourcing",
          paragraphs: [
            "Every factual claim traces to a document, dataset or named source. Anonymity is granted only where a source faces real risk, and the reason is described in the article.",
          ],
        },
        {
          heading: "Verification",
          paragraphs: [
            "Claims are checked against at least one independent source before publication. Where verification is incomplete at publication time, the article says so plainly in its sources and context block.",
          ],
        },
        {
          heading: "Automated research tools",
          paragraphs: [
            "WorldScopeX may use automated systems to gather, translate and cross-check material. No automated system publishes on its own: a named human editor approves each story and is accountable for it.",
            "Machine-assisted drafting is disclosed where it materially shaped a piece.",
          ],
        },
        {
          heading: "Independence",
          paragraphs: [
            "Advertising and commercial partnerships never influence editorial judgement, and advertisers receive no advance sight of coverage. Sponsored material, if introduced, will be labelled distinctly from journalism.",
          ],
        },
        {
          heading: "Corrections",
          paragraphs: [
            "Errors are corrected on the article, with the date and a description of the change. Significant corrections are noted at the top of the piece.",
          ],
        },
      ]}
    />
  );
}
