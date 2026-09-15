import { createFileRoute } from "@tanstack/react-router";
import { StaticPage, staticHead } from "@/components/site/StaticPage";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => staticHead(
    "Contact",
    "WorldScopeX contact information and channels, to be published after verification before newsroom launch.",
    "/contact",
  ),
});

function ContactPage() {
  return (
    <StaticPage
      kicker="Contact"
      title="Contact WorldScopeX"
      intro="Verified newsroom contact channels will appear here before publication begins."
      sections={[
        {
          heading: "Newsroom",
          paragraphs: [
            "WorldScopeX has not yet published an editorial email address. We will not display an invented or unverified contact address.",
            "Story tips and correction requests will open once a secure, monitored newsroom channel is confirmed.",
          ],
        },
        {
          heading: "Advertising and partnerships",
          paragraphs: [
            "Advertising areas are reserved placeholders and no campaigns are being served. A dedicated commercial contact will be published only after it is verified.",
          ],
        },
        {
          heading: "Secure tips",
          paragraphs: [
            "Do not send confidential material until WorldScopeX publishes and verifies a secure submission channel on this page.",
          ],
        },
      ]}
    />
  );
}
