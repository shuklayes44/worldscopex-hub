# WorldScopeX production-readiness plan

## Build
- Preserve the current editorial visual system, spacing, masthead, restrained advertising rhythm, and verified-only publishing rule.
- Finalize the brand treatment across the masthead, mobile navigation, site icon, footer, and metadata; keep the exact approved tagline.
- Expand the homepage pre-launch presentation so the approved lead, latest, trending, category, newsletter, and footer structure remains visible without fabricated stories.
- Add clean category pages at `/india`, `/world`, `/geopolitics`, `/economy-business`, `/technology`, and `/explainers`, with featured/latest empty states, internal links, pagination readiness, and balanced ad reservations.
- Add a real search page and polished search access in desktop and mobile navigation. Search will query only verified public articles and show an honest empty state before launch.
- Refine the reusable article template, breadcrumbs, share controls, source/context handling, related/recommended states, and strategic ad placement without publishing sample articles.
- Replace the generic 404 with a WorldScopeX-branded recovery page and useful section links.
- Complete route-specific metadata, organization and breadcrumb structured data, clean internal URLs, and a sitemap endpoint that includes stable public pages plus verified articles only.
- Finalize trust and policy wording, explicitly documenting the source-to-human-approval publishing workflow and keeping contact details truthful.

## Verification
- Check every public route, all header/footer links, search behavior, missing articles, and unknown URLs.
- Inspect desktop and mobile layouts for overflow, navigation behavior, headings, images, advertising labels, and accessible controls.
- Review generated metadata, robots and sitemap responses, browser console/runtime signals, and the final build status.

## Technical details
- Category route configuration and article data remain separate from UI so a future verified feed can populate every page without redesign.
- Only records with `verificationStatus: "verified"` can appear in selectors, search, direct article lookup, related content, or sitemap output.
- Canonical and Open Graph URLs stay host-relative until the project has a real public domain; social images remain omitted until a valid absolute share image exists.
- The sitemap will use relative, host-resolved URLs so it remains deployment-ready without inventing a production domain.