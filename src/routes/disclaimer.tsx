import { createFileRoute } from "@tanstack/react-router";
import { StaticPage, staticHead } from "@/components/site/StaticPage";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
  head: () =>
    staticHead(
      "Disclaimer",
      "The limits of WorldScopeX content, including professional advice, accuracy and third-party links.",
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
          heading: "Pre-launch content notice",
          paragraphs: [
            "WorldScopeX has not yet published news articles. Empty news areas indicate that verified reporting is still in preparation and should not be interpreted as missing or withheld coverage.",
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
