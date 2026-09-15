# WorldScopeX content-integrity and Phase 1 plan

## Changes
- Replace all demo articles, breaking headlines, sources, dates, and invented bylines with an empty verified-content collection.
- Keep the existing editorial visual system while adding polished pre-launch states to the homepage and every category.
- Keep article URLs ready for future publishing, but show a clear unavailable state for slugs without a verified article.
- Make `WorldScopeX Desk` the only default author and expand the reusable article model with verification status, sources, timestamps, hero image, body, and related-story fields.
- Enforce a single publishing filter so only `verified` articles can reach homepage, ticker, trending, category, article, or sitemap output.
- Update About, Disclaimer, Contact, and policy language to describe the current pre-launch state without placeholder claims or fictional contact details.
- Add a sitemap endpoint and tighten robots/search metadata readiness while retaining route-specific titles, descriptions, Open Graph, Twitter cards, canonical links, accessible navigation, semantic headings, and advertisement labels.

## Verification
- Search the project for invented names, fake headlines, dates, and sample-news language.
- Check homepage, category, missing article, and information pages in desktop and mobile preview sizes.
- Confirm all navigation destinations work and review build, browser console, and runtime diagnostics.

## Technical details
- Article records remain separate from UI in the content module and can later be replaced by a verified feed or CMS.
- Unverified records remain excluded by exported selectors, including direct slug lookup.
- The sitemap will list only stable information/category pages and verified article URLs.
