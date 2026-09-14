/**
 * WorldScopeX content layer.
 *
 * Presentation never hardcodes editorial content: every headline, dek, body
 * block and image reference lives here. A CMS or an AI publishing pipeline can
 * later replace `articles` with a fetched payload of the same shape without
 * touching any component.
 *
 * NOTE: all stories below are clearly-labelled SAMPLE content written to
 * demonstrate layout. They are not reports of real events.
 */

import indiaParliament from "@/assets/india-parliament.jpg";
import indiaStreet from "@/assets/india-street.jpg";
import worldSummit from "@/assets/world-summit.jpg";
import tradePort from "@/assets/trade-port.jpg";
import markets from "@/assets/markets.jpg";
import semiconductor from "@/assets/semiconductor.jpg";
import subseaCable from "@/assets/subsea-cable.jpg";
import dataCentre from "@/assets/data-centre.jpg";
import energy from "@/assets/energy.jpg";

export type CategorySlug =
  | "india"
  | "world"
  | "geopolitics"
  | "economy"
  | "technology"
  | "explainers";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
}

export interface Author {
  name: string;
  role: string;
}

export type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export interface SourceNote {
  label: string;
  detail: string;
}

export interface Article {
  slug: string;
  category: CategorySlug;
  headline: string;
  dek: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  imageCredit: string;
  location: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  body: BodyBlock[];
  sources: SourceNote[];
}

export const SITE = {
  name: "WorldScopeX",
  tagline: "INDIA • WORLD • GEOPOLITICS • ECONOMY • TECH",
  description:
    "WorldScopeX delivers clear, verified reporting and analysis on India, world affairs, geopolitics, economy and technology.",
  editorialEmail: "editor@worldscopex.example",
} as const;

export const categories: Category[] = [
  {
    slug: "india",
    name: "India",
    shortName: "India",
    description:
      "Policy, states, institutions and the daily forces reshaping Indian public life.",
  },
  {
    slug: "world",
    name: "World",
    shortName: "World",
    description:
      "Reporting from across regions, with context on how global events connect.",
  },
  {
    slug: "geopolitics",
    name: "Geopolitics",
    shortName: "Geopolitics",
    description:
      "Power, alliances, security and the contest for influence across regions.",
  },
  {
    slug: "economy",
    name: "Economy & Business",
    shortName: "Economy",
    description:
      "Markets, trade, industry and the economic decisions that move households.",
  },
  {
    slug: "technology",
    name: "Technology",
    shortName: "Technology",
    description:
      "Compute, connectivity, chips and the governance of emerging systems.",
  },
  {
    slug: "explainers",
    name: "Explainers",
    shortName: "Explainers",
    description:
      "Structured background on complex subjects, built for readers in a hurry.",
  },
];

export const breakingHeadlines: string[] = [
  "SAMPLE: Parliamentary committee opens review of national data-sharing rules",
  "SAMPLE: Ministers agree framework text at close of two-day regional summit",
  "SAMPLE: Container throughput at western ports hits quarterly record",
  "SAMPLE: Central bank keeps policy rate unchanged, flags food-price risk",
  "SAMPLE: Second phase of domestic chip packaging plant cleared for build",
];

const stdSources = (topic: string): SourceNote[] => [
  {
    label: "How we reported this",
    detail: `Sample article. In production this block lists the primary documents, filings and interviews used for the ${topic} story, each with a date and a verification status.`,
  },
  {
    label: "Context",
    detail:
      "Background paragraphs and prior WorldScopeX coverage are linked here so readers can trace how the story developed over time.",
  },
];

const p = (text: string): BodyBlock => ({ type: "paragraph", text });
const h = (text: string): BodyBlock => ({ type: "heading", text });

const sampleBody = (subject: string): BodyBlock[] => [
  p(
    `This is sample editorial copy used to demonstrate the WorldScopeX article template. It stands in for a reported opening on ${subject}, written to the same length and rhythm a finished story would use.`,
  ),
  p(
    "A second paragraph carries the essential detail: who acted, what changed, when it takes effect and which readers are affected first. Sentences stay short and the claim always sits close to its source.",
  ),
  h("What is actually new"),
  p(
    "Analysis sits below the news, never above it. This section separates confirmed fact from interpretation, and states plainly where the record is still incomplete.",
  ),
  { type: "list", items: [
    "The specific decision, filing or event that triggered coverage.",
    "The measurable figures behind it, with the period they cover.",
    "The parts that remain unverified at the time of publication.",
  ] },
  {
    type: "quote",
    text: "Placeholder quotation. Published quotes will be attributed to a named, on-the-record source with the date and setting of the remark.",
    attribution: "Sample source, sample designation",
  },
  h("Why it matters"),
  p(
    "The closing section connects the story to the wider picture: prices, security, jobs, or the rules that govern them. It ends with what to watch next and when the next verifiable data point arrives.",
  ),
  p(
    "Every WorldScopeX article carries a source and context block so a reader can check the reporting rather than take it on trust.",
  ),
];

export const articles: Article[] = [
  {
    slug: "parliament-panel-reviews-data-sharing-rules",
    category: "india",
    headline:
      "Parliamentary panel opens review of how public agencies share citizen data",
    dek: "A cross-party committee has begun hearings on consent, retention limits and audit duties for agencies that exchange records between departments.",
    author: { name: "Ananya Rao", role: "Senior Correspondent, Policy" },
    publishedAt: "2026-09-14T05:30:00Z",
    updatedAt: "2026-09-14T09:10:00Z",
    readingMinutes: 6,
    image: indiaParliament,
    imageAlt: "A large legislative building lit at dusk",
    imageCredit: "WorldScopeX sample image",
    location: "New Delhi",
    tags: ["Governance", "Privacy", "Parliament"],
    featured: true,
    trending: true,
    body: sampleBody("a review of public-sector data sharing"),
    sources: stdSources("data-sharing"),
  },
  {
    slug: "state-transit-funding-shifts-to-outcome-targets",
    category: "india",
    headline: "State transit grants to be tied to service outcomes, not fleet size",
    dek: "Draft guidelines would score cities on frequency, punctuality and coverage before releasing the next tranche of bus funding.",
    author: { name: "Vikram Sethi", role: "Correspondent, Urban Affairs" },
    publishedAt: "2026-09-14T04:05:00Z",
    readingMinutes: 5,
    image: indiaStreet,
    imageAlt: "A crowded city street market in warm evening light",
    imageCredit: "WorldScopeX sample image",
    location: "Mumbai",
    tags: ["Cities", "Transport"],
    trending: true,
    body: sampleBody("public transport funding rules"),
    sources: stdSources("transit funding"),
  },
  {
    slug: "regional-summit-closes-with-framework-text",
    category: "world",
    headline: "Regional summit closes with framework text on disaster response",
    dek: "Delegations agreed language on shared logistics and early-warning data, leaving financing to a later ministerial round.",
    author: { name: "Marta Lindqvist", role: "International Correspondent" },
    publishedAt: "2026-09-13T18:40:00Z",
    readingMinutes: 7,
    image: worldSummit,
    imageAlt: "Delegates seated at a round table in front of national flags",
    imageCredit: "WorldScopeX sample image",
    location: "Singapore",
    tags: ["Diplomacy", "Climate"],
    featured: true,
    trending: true,
    body: sampleBody("a multilateral disaster-response framework"),
    sources: stdSources("summit"),
  },
  {
    slug: "grid-operators-plan-cross-border-reserve-pool",
    category: "world",
    headline: "Grid operators sketch a cross-border reserve pool for peak demand",
    dek: "Four national operators are studying a shared balancing reserve that could cut the cost of covering evening demand peaks.",
    author: { name: "Daniel Okonjo", role: "Energy Correspondent" },
    publishedAt: "2026-09-13T12:15:00Z",
    readingMinutes: 6,
    image: energy,
    imageAlt: "Solar panel rows with wind turbines on dry hills behind",
    imageCredit: "WorldScopeX sample image",
    location: "Lisbon",
    tags: ["Energy", "Infrastructure"],
    body: sampleBody("shared electricity reserves"),
    sources: stdSources("grid reserves"),
  },
  {
    slug: "shipping-lane-insurance-costs-reshape-routes",
    category: "geopolitics",
    headline: "Insurance costs, not tariffs, are quietly redrawing shipping routes",
    dek: "Underwriters have widened risk premiums on two corridors, pushing carriers toward longer but cheaper-to-insure passages.",
    author: { name: "Rhea Kapoor", role: "Geopolitics Editor" },
    publishedAt: "2026-09-13T08:00:00Z",
    readingMinutes: 8,
    image: tradePort,
    imageAlt: "Aerial view of a container port at sunrise with cranes and a cargo ship",
    imageCredit: "WorldScopeX sample image",
    location: "Dubai",
    tags: ["Trade", "Security", "Shipping"],
    featured: true,
    trending: true,
    body: sampleBody("maritime risk premiums and trade routes"),
    sources: stdSources("shipping risk"),
  },
  {
    slug: "subsea-cable-repair-capacity-becomes-strategic",
    category: "geopolitics",
    headline: "Subsea cable repair capacity becomes a strategic bottleneck",
    dek: "A small global fleet of repair ships handles most faults, and waiting times are now a national-resilience question.",
    author: { name: "Rhea Kapoor", role: "Geopolitics Editor" },
    publishedAt: "2026-09-12T16:20:00Z",
    readingMinutes: 7,
    image: subseaCable,
    imageAlt: "A cable-laying ship at sea under overcast skies",
    imageCredit: "WorldScopeX sample image",
    location: "Marseille",
    tags: ["Connectivity", "Resilience"],
    body: sampleBody("subsea cable repair capacity"),
    sources: stdSources("subsea cables"),
  },
  {
    slug: "central-bank-holds-rate-flags-food-prices",
    category: "economy",
    headline: "Rate held steady as policymakers flag uneven food prices",
    dek: "The committee voted to keep the benchmark unchanged while signalling that a volatile food basket clouds the inflation path.",
    author: { name: "Neha Bansal", role: "Economics Correspondent" },
    publishedAt: "2026-09-12T11:00:00Z",
    updatedAt: "2026-09-12T14:30:00Z",
    readingMinutes: 5,
    image: markets,
    imageAlt: "A trading desk with market data screens in low light",
    imageCredit: "WorldScopeX sample image",
    location: "Mumbai",
    tags: ["Monetary Policy", "Inflation"],
    featured: true,
    trending: true,
    body: sampleBody("a monetary policy decision"),
    sources: stdSources("policy rate"),
  },
  {
    slug: "port-throughput-record-tests-inland-logistics",
    category: "economy",
    headline: "Record port throughput is now testing inland logistics",
    dek: "Quayside gains have outpaced rail and road evacuation, leaving dwell times higher than the headline volumes suggest.",
    author: { name: "Neha Bansal", role: "Economics Correspondent" },
    publishedAt: "2026-09-12T07:45:00Z",
    readingMinutes: 6,
    image: tradePort,
    imageAlt: "Containers stacked at a busy port terminal",
    imageCredit: "WorldScopeX sample image",
    location: "Mundra",
    tags: ["Logistics", "Trade"],
    body: sampleBody("port and inland logistics capacity"),
    sources: stdSources("port throughput"),
  },
  {
    slug: "chip-packaging-plant-clears-second-phase",
    category: "technology",
    headline: "Domestic chip packaging plant clears its second build phase",
    dek: "The approval covers advanced packaging lines, the step where finished wafers are turned into usable components.",
    author: { name: "Arjun Menon", role: "Technology Correspondent" },
    publishedAt: "2026-09-11T15:10:00Z",
    readingMinutes: 6,
    image: semiconductor,
    imageAlt: "An engineer in a cleanroom suit inspecting a silicon wafer",
    imageCredit: "WorldScopeX sample image",
    location: "Bengaluru",
    tags: ["Semiconductors", "Manufacturing"],
    trending: true,
    body: sampleBody("semiconductor packaging capacity"),
    sources: stdSources("chip packaging"),
  },
  {
    slug: "data-centre-power-contracts-move-to-hourly-matching",
    category: "technology",
    headline: "Data centre power contracts move toward hourly clean-energy matching",
    dek: "Operators are shifting from annual averages to hour-by-hour accounting, which changes where new capacity can be built.",
    author: { name: "Arjun Menon", role: "Technology Correspondent" },
    publishedAt: "2026-09-11T09:25:00Z",
    readingMinutes: 7,
    image: dataCentre,
    imageAlt: "A data centre aisle lined with server racks in blue light",
    imageCredit: "WorldScopeX sample image",
    location: "Hyderabad",
    tags: ["Cloud", "Energy"],
    body: sampleBody("data centre energy contracting"),
    sources: stdSources("data centre power"),
  },
  {
    slug: "explainer-how-a-policy-rate-reaches-your-loan",
    category: "explainers",
    headline: "Explainer: how a policy rate decision reaches your loan",
    dek: "From the committee vote to your monthly instalment, the transmission chain has four steps and several delays.",
    author: { name: "Neha Bansal", role: "Economics Correspondent" },
    publishedAt: "2026-09-10T10:00:00Z",
    readingMinutes: 5,
    image: markets,
    imageAlt: "Market data displayed on screens above a trading floor",
    imageCredit: "WorldScopeX sample image",
    location: "Mumbai",
    tags: ["Explainer", "Banking"],
    body: sampleBody("monetary policy transmission"),
    sources: stdSources("rate transmission"),
  },
  {
    slug: "explainer-what-a-trade-corridor-actually-is",
    category: "explainers",
    headline: "Explainer: what a trade corridor actually is",
    dek: "Corridors are less a line on a map than a bundle of ports, rail links, customs rules and financing agreements.",
    author: { name: "Rhea Kapoor", role: "Geopolitics Editor" },
    publishedAt: "2026-09-09T13:30:00Z",
    readingMinutes: 6,
    image: worldSummit,
    imageAlt: "Officials meeting in a conference hall with flags",
    imageCredit: "WorldScopeX sample image",
    location: "New Delhi",
    tags: ["Explainer", "Trade"],
    trending: true,
    body: sampleBody("trade corridors"),
    sources: stdSources("trade corridors"),
  },
];

/* ---------- selectors (pure, presentation-agnostic) ---------- */

const byNewest = (a: Article, b: Article) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

export const allArticles = (): Article[] => [...articles].sort(byNewest);

export const getCategory = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const getArticle = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

export const articlesByCategory = (slug: CategorySlug): Article[] =>
  allArticles().filter((a) => a.category === slug);

export const leadStory = (): Article => allArticles().find((a) => a.featured) ?? allArticles()[0];

export const featuredStories = (): Article[] => allArticles().filter((a) => a.featured);

export const trendingStories = (limit = 5): Article[] =>
  allArticles()
    .filter((a) => a.trending)
    .slice(0, limit);

export const relatedStories = (article: Article, limit = 3): Article[] => {
  const sameCategory = allArticles().filter(
    (a) => a.category === article.category && a.slug !== article.slug,
  );
  const rest = allArticles().filter(
    (a) => a.category !== article.category && a.slug !== article.slug,
  );
  return [...sameCategory, ...rest].slice(0, limit);
};

export const recommendedStories = (article: Article, limit = 4): Article[] =>
  allArticles()
    .filter((a) => a.slug !== article.slug)
    .filter((a) => !relatedStories(article).some((r) => r.slug === a.slug))
    .slice(0, limit);

export const categoryName = (slug: CategorySlug): string =>
  getCategory(slug)?.name ?? slug;

export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const formatDateTime = (iso: string): string =>
  new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  }) + " IST";
