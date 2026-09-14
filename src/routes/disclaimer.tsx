import { createFileRoute } from "@tanstack/react-router";
import { StaticPage, staticHead } from "@/components/site/StaticPage";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
  head: () =>
    staticHead(
      "Disclaimer",
      "The limits of WorldScopeX content: sample stories, no financial or legal advice, and how third-party links are treated.",
      "/disclaimer",
    ),
});

function DisclaimerPage() {
  return (
    <StaticPage
      kicker="Legal"
      title="Disclaimer"
      intro="Read this alongside our editorial policy. It sets out what our content is, and what it is not."
      sections={[
        {
          heading: "Sample content notice",
          paragraphs: [
            "All articles currently on this site are sample content created to demonstrate layout and structure. They describe no real events, decisions, organisations or individuals, and must not be cited as reporting.",
          ],
        },
        {
          heading: "No professional advice",
          paragraphs: [
            "Coverage of markets, economics, taxation, health, law or security is journalism, not advice. Do not act on it as a substitute for a qualified professional who knows your circumstances.",
          ],
        },
        {
          heading: "Accuracy and timeliness",
          paragraphs: [
            "News changes. An article reflects the best information available at the time and date shown on it. Where we learn more, we update the piece and note the change rather than silently editing it.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "We link to outside sources so readers can check our work. We do not control those sites and are not responsible for their content, accuracy or privacy practices.",
          ],
        },
      ]}
    />
  );
}
