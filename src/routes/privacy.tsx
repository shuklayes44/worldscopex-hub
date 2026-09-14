import { createFileRoute } from "@tanstack/react-router";
import { StaticPage, staticHead } from "@/components/site/StaticPage";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    staticHead(
      "Privacy Policy",
      "How WorldScopeX handles reader data, cookies, analytics and advertising identifiers, and the choices available to readers.",
      "/privacy",
    ),
});

function PrivacyPage() {
  return (
    <StaticPage
      kicker="Legal"
      title="Privacy Policy"
      intro="This policy explains what data WorldScopeX collects, why, and how readers can control it. It will be finalised with named processors before public launch."
      sections={[
        {
          heading: "Data we collect",
          paragraphs: [
            "In its current demonstration state, this site collects no personal data and stores no reader accounts. The newsletter form does not transmit or retain the address you type.",
            "At launch we expect to collect only what is needed to deliver the site and a newsletter: an email address you provide voluntarily, and standard technical request data such as browser type and approximate region.",
          ],
        },
        {
          heading: "Cookies and analytics",
          paragraphs: [
            "No tracking cookies are set in this demonstration build. When analytics are introduced, the categories used and the retention period will be listed here, and non-essential cookies will require consent where the law requires it.",
          ],
        },
        {
          heading: "Advertising",
          paragraphs: [
            "Advertising areas on this site are labelled placeholders and serve no ads or advertising identifiers. If third-party advertising is introduced, the vendors, their purposes and their own policies will be named in this section before any ad code is enabled.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You may request access to, correction of, or deletion of any personal data we hold about you, and you may unsubscribe from the newsletter at any time using the link in every email.",
            "Requests can be sent to the editorial address on our contact page.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "Material changes will be summarised at the top of this page with the date they took effect.",
          ],
        },
      ]}
    />
  );
}
