/**
 * WorldScopeX editorial content contract.
 *
 * A verified news feed or CMS can replace `articleRecords` without changing
 * presentation code. Public selectors below are the only supported read path:
 * they exclude every record that has not completed editorial verification.
 */

export type CategorySlug =
  | "india"
  | "world"
  | "geopolitics"
  | "economy"
  | "technology"
  | "explainers";

export type VerificationStatus = "draft" | "review" | "verified" | "rejected";

export interface Category {
  slug: CategorySlug;
  path: string;
  name: string;
  shortName: string;
  description: string;
}

export interface Author {
  name: "WorldScopeX Desk";
  role: "Editorial Desk";
}

export type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export interface SourceNote {
  label: string;
  detail: string;
  url?: string;
  verifiedAt?: string;
}

export interface Article {
  slug: string;
  category: CategorySlug;
  headline: string;
  dek: string;
  author: Author;
  verificationStatus: VerificationStatus;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  heroImage: string;
  imageAlt: string;
  imageCredit: string;
  location?: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  body: BodyBlock[];
  sources: SourceNote[];
  relatedStories: string[];
}

export const DEFAULT_AUTHOR: Author = {
  name: "WorldScopeX Desk",
  role: "Editorial Desk",
};

export const SITE = {
  name: "WorldScopeX",
  tagline: "INDIA • WORLD • GEOPOLITICS • ECONOMY • TECH",
  description:
    "WorldScopeX is preparing verified reporting and analysis on India, world affairs, geopolitics, economy and technology.",
} as const;

export const categories: Category[] = [
  { slug: "india", path: "/india", name: "India", shortName: "India", description: "Policy, states, institutions and the forces shaping Indian public life." },
  { slug: "world", path: "/world", name: "World", shortName: "World", description: "Reporting across regions, with context on how global events connect." },
  { slug: "geopolitics", path: "/geopolitics", name: "Geopolitics", shortName: "Geopolitics", description: "Power, alliances, security and the contest for influence across regions." },
  { slug: "economy", path: "/economy-business", name: "Economy & Business", shortName: "Economy", description: "Markets, trade, industry and decisions that affect households and businesses." },
  { slug: "technology", path: "/technology", name: "Technology", shortName: "Technology", description: "Compute, connectivity, chips and the governance of emerging systems." },
  { slug: "explainers", path: "/explainers", name: "Explainers", shortName: "Explainers", description: "Structured background on complex subjects, designed for clarity." },
];

/**
 * Source records enter here. The collection intentionally starts empty.
 * Never add illustrative or invented stories. A record may be made public only
 * after its verificationStatus is set to `verified` by the editorial workflow.
 */
const articleRecords: Article[] = [
  {
  "slug": "trump-open-to-iran-sanctions-relief-for-concrete-progress-on-nuclear-issues-us-o-1790631788",
  "category": "india",
  "headline": "Trump open to Iran sanctions relief for ‘concrete progress’ on nuclear issues, US official says - cnn.com",
  "dek": "US officials confirm Trump is open to Iran sanctions relief for concrete nuclear progress.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T21:43:08Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790631786_3268.png",
  "imageAlt": "Trump open to Iran sanctions relief for ‘concrete progress’ on nuclear issues, US official says - cnn.com",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "United States officials have indicated that Donald Trump is open to providing Iran with economic sanctions relief in exchange for concrete progress on nuclear issues, according to recent reports. The potential diplomatic opening centers on offering economic relief to Iran specifically for concrete nuclear concessions."
    },
    {
      "type": "paragraph",
      "text": "Despite this openness from the US side, sources involved in the negotiations have cautioned that current gaps between the parties remain wide and the obstacles to a formal agreement are significant. The diplomatic landscape continues to present complex challenges for mediators attempting to bridge differing positions."
    },
    {
      "type": "paragraph",
      "text": "The possibility of sanctions relief holds substantial implications for global energy markets and geopolitical stability in the Middle East. Shifts in Iranian oil supply resulting from altered sanctions policies typically influence international crude prices and broader economic indicators."
    },
    {
      "type": "paragraph",
      "text": "Analysts and market watchers are closely tracking the diplomatic efforts to see if either side can overcome the significant obstacles identified by US sources. The trajectory of these talks will likely dictate the immediate future of US-Iran economic and diplomatic relations."
    },
    {
      "type": "paragraph",
      "text": "Further developments will depend on whether Tehran is willing to implement the concrete progress on nuclear issues demanded by Washington. Stakeholders across global markets remain vigilant as negotiations continue to navigate these wide policy gaps."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Trump open to Iran sanctions relief for ‘concrete progress’ on nuclear issues, US official says - cnn.com"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "stock-market-live-updates-today-bse-sensex-tumbles-over-1000-points-nse-nifty50-1790630212",
  "category": "economy",
  "headline": "Stock market live updates today: BSE Sensex tumbles over 1,000 points, NSE Nifty50 trades below 22,900 - The Times of India",
  "dek": "Indian benchmark indices tumbled sharply, with the BSE Sensex dropping over 1,000 points and the Nifty50 falling below 22,900.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T21:16:52Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790630210_7252.png",
  "imageAlt": "Stock market live updates today: BSE Sensex tumbles over 1,000 points, NSE Nifty50 trades below 22,900 - The Times of India",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "economy"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Indian financial markets faced significant downward pressure during the trading session, resulting in a steep correction across major benchmark indices."
    },
    {
      "type": "paragraph",
      "text": "The benchmark BSE Sensex tumbled by more than 1,000 points, driven by heavy selling across multiple heavy-weight sectors."
    },
    {
      "type": "paragraph",
      "text": "Concurrently, the broader NSE Nifty50 index breached key support levels, sliding below the 22,900 mark amid heightened market volatility."
    },
    {
      "type": "paragraph",
      "text": "The sharp market downturn reflects prevailing caution among investors as they reassess portfolio risk and market valuations."
    },
    {
      "type": "paragraph",
      "text": "Market analysts and participants are closely tracking ongoing developments, institutional flows, and broader macroeconomic indicators to gauge near-term market trajectory."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Stock market live updates today: BSE Sensex tumbles over 1,000 points, NSE Nifty50 trades below 22,900 - The Times of India"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "mexicos-pacific-coast-braces-for-hurricane-polo-bbccom-1790628231",
  "category": "world",
  "headline": "Mexico's Pacific coast braces for Hurricane Polo - bbc.com",
  "dek": "Mexico's Pacific coast prepares for Hurricane Polo as Baja California faces landfall and flood risks loom.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T20:43:51Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790628229_7366.png",
  "imageAlt": "Mexico's Pacific coast braces for Hurricane Polo - bbc.com",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Mexico's Pacific coastline is bracing for the impact of Hurricane Polo as the weather system advances toward the coast. Coastal communities and regional authorities are preparing for deteriorating conditions and heightened hazards associated with the approaching storm."
    },
    {
      "type": "paragraph",
      "text": "Forecast projections indicate that Hurricane Polo is on track to make landfall along Baja California near Scorpion Bay. The anticipated impact threatens the surrounding region with hazardous coastal conditions, heavy precipitation, and turbulent seas."
    },
    {
      "type": "paragraph",
      "text": "Beyond the initial strike zone in Mexico, the storm system is expected to have broader regional consequences. Weather reports project that the remnants of Hurricane Polo will track inland, bringing a serious flood threat to the southwestern and central United States as the broader Pacific weather pattern remains active."
    },
    {
      "type": "paragraph",
      "text": "Emergency services and meteorological tracking centers continue to observe the trajectory and forward movement of the storm. Coastal residents and municipal agencies in the projected path are maintaining a close watch on advisories as landfall approaches."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Mexico's Pacific coast braces for Hurricane Polo - bbc.com"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "india-remains-among-the-fastest-growing-economies-even-as-growth-slows-amid-midd-1790625193",
  "category": "economy",
  "headline": "India Remains Among the Fastest-Growing Economies Even As Growth Slows Amid Middle East Conflict; Outlook Vulnerable to Risks and Uncertainty - World Bank Group",
  "dek": "World Bank reports India remains among the fastest-growing economies despite a growth slowdown linked to Middle East conflicts.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T19:53:13Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790625191_3122.png",
  "imageAlt": "India Remains Among the Fastest-Growing Economies Even As Growth Slows Amid Middle East Conflict; Outlook Vulnerable to Risks and Uncertainty - World Bank Group",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "economy"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The World Bank Group has stated that India continues to rank among the fastest-growing major economies globally, according to its latest economic assessments."
    },
    {
      "type": "paragraph",
      "text": "This resilience persists despite a noticeable deceleration in growth momentum, which the institution links directly to the ongoing conflict in the Middle East."
    },
    {
      "type": "paragraph",
      "text": "Geopolitical instability and regional tensions are creating headwinds that affect trade, supply chains, and broader economic activity."
    },
    {
      "type": "paragraph",
      "text": "Even with these moderating growth figures, India's economic output continues to outperform many of its global peers in terms of expansion speed."
    },
    {
      "type": "paragraph",
      "text": "Nevertheless, the World Bank cautions that the country's overall economic outlook remains vulnerable to persistent external risks and heightened global uncertainty."
    },
    {
      "type": "paragraph",
      "text": "Analysts and market observers are closely tracking these geopolitical developments to gauge potential impacts on macroeconomic stability and trade flows moving forward."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "India Remains Among the Fastest-Growing Economies Even As Growth Slows Amid Middle East Conflict; Outlook Vulnerable to Risks and Uncertainty - World Bank Group"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "sensex-nifty50-plunge-nifty-bank-drops-over-1000-pts-5-factors-behind-mondays-ma-1790623935",
  "category": "india",
  "headline": "SENSEX, NIFTY50 plunge, NIFTY Bank drops over 1,000 pts; 5 factors behind Monday’s market crash - Upstox",
  "dek": "Indian benchmark indices Sensex and Nifty50 plunge to a six-month low amid mounting geopolitical tensions.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T19:32:15Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790623933_2275.png",
  "imageAlt": "SENSEX, NIFTY50 plunge, NIFTY Bank drops over 1,000 pts; 5 factors behind Monday’s market crash - Upstox",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Indian benchmark indices Sensex and Nifty50 experienced a sharp market crash on Monday, triggered by escalating West Asia worries and mounting investor anxiety."
    },
    {
      "type": "paragraph",
      "text": "The Sensex crashed 1,124.02 points, while the Nifty Bank index suffered a heavy blow by dropping over 1,000 points in the trading session."
    },
    {
      "type": "paragraph",
      "text": "This downturn marks the third 1% plunge recorded across the domestic benchmark indices over the last 10 trading sessions."
    },
    {
      "type": "paragraph",
      "text": "The broader market correction has pushed the Sensex down to a six-month low, with the index tanking 5% over the course of a single month."
    },
    {
      "type": "paragraph",
      "text": "As a result of the sharp depreciation across equities, investors have collectively lost approximately Rs 17 lakh crore."
    },
    {
      "type": "paragraph",
      "text": "Market analysts continue to evaluate the five key factors behind Monday's crash as global uncertainties weigh heavily on domestic sentiment."
    },
    {
      "type": "paragraph",
      "text": "Investors and stakeholders are now watching for further updates on geopolitical developments and upcoming macroeconomic cues to gauge market stability."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "SENSEX, NIFTY50 plunge, NIFTY Bank drops over 1,000 pts; 5 factors behind Monday’s market crash - Upstox"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "record-breaking-heat-and-extreme-weather-continue-world-meteorological-organizat-1790620614",
  "category": "world",
  "headline": "Record-breaking heat and extreme weather continue - World Meteorological Organization WMO",
  "dek": "The World Meteorological Organization reports that record-breaking heat and extreme weather are persisting worldwide.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T18:36:54Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790620612_9642.png",
  "imageAlt": "Record-breaking heat and extreme weather continue - World Meteorological Organization WMO",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The World Meteorological Organization has confirmed that record-breaking heat and extreme weather events are continuing across global regions."
    },
    {
      "type": "paragraph",
      "text": "This persistence of severe weather underscores ongoing shifts in long-term global climate patterns."
    },
    {
      "type": "paragraph",
      "text": "Continued high temperatures can exert significant pressure on agricultural yields, water reserves, and energy grids internationally."
    },
    {
      "type": "paragraph",
      "text": "Economists and policymakers closely analyze these weather trends for their potential disruptions to global markets and supply chains."
    },
    {
      "type": "paragraph",
      "text": "Such prolonged extremes also raise immediate concerns regarding public safety and infrastructure durability in vulnerable areas."
    },
    {
      "type": "paragraph",
      "text": "Global stakeholders will continue to observe meteorological updates and impact assessments as these weather conditions evolve."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Record-breaking heat and extreme weather continue - World Meteorological Organization WMO"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "trump-asked-xi-in-white-house-if-china-wants-to-buy-american-weapons-envoy-ndtv-1790619588",
  "category": "india",
  "headline": "Trump Asked Xi In White House If China Wants To Buy American Weapons: Envoy - NDTV",
  "dek": "Former US President Trump reportedly asked Chinese President Xi Jinping if Beijing wanted to buy American weapons during a White House meeting.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T18:19:48Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790619586_1798.png",
  "imageAlt": "Trump Asked Xi In White House If China Wants To Buy American Weapons: Envoy - NDTV",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Former US President Donald Trump reportedly asked Chinese President Xi Jinping during a White House meeting if Beijing wanted to buy American weapons, according to a recent envoy disclosure."
    },
    {
      "type": "paragraph",
      "text": "The reported overture represents an unusual policy pivot, shifting traditional strategic discourse from containment to potential commercial commerce involving defense technology."
    },
    {
      "type": "paragraph",
      "text": "The move to potentially sell arms to a geopolitical adversary has raised questions regarding long-standing US security frameworks and export policy guidelines."
    },
    {
      "type": "paragraph",
      "text": "Analysts are examining how such proposals align with broader diplomatic efforts and whether they indicate a fundamental change in bilateral defense strategy."
    },
    {
      "type": "paragraph",
      "text": "The reported exchange highlights the complex interplay between commercial interests and national security concerns in US-China relations."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders and policymakers will continue to monitor bilateral discussions for any further signals regarding defense trade or policy adjustments."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Trump Asked Xi In White House If China Wants To Buy American Weapons: Envoy - NDTV"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "here-is-how-supreme-court-plans-to-recover-unpaid-traffic-challans-bar-and-bench-1790617972",
  "category": "india",
  "headline": "Here is how Supreme Court plans to recover unpaid traffic challans - Bar and Bench",
  "dek": "The Supreme Court suggests recovering Rs 20,000 crore in unpaid traffic fines by linking challans to electricity bills.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T17:52:52Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790617970_6725.png",
  "imageAlt": "Here is how Supreme Court plans to recover unpaid traffic challans - Bar and Bench",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Supreme Court of India has proposed a novel recovery mechanism to address the accumulation of unpaid e-traffic challans across the country, according to reports from Bar and Bench, The Economic Times, and The Times of India."
    },
    {
      "type": "paragraph",
      "text": "Under the suggested framework, authorities would recover pending traffic fines by linking them directly to consumers' electricity bills."
    },
    {
      "type": "paragraph",
      "text": "Reports indicate that approximately Rs 20,000 crore in e-traffic challan dues currently remain pending and uncollected through conventional legal and administrative enforcement channels."
    },
    {
      "type": "paragraph",
      "text": "The proposed system aims to utilize essential household utility payments to compel the settlement of outstanding municipal and traffic penalties."
    },
    {
      "type": "paragraph",
      "text": "By integrating traffic fine collection with electricity billing systems, the judiciary intends to streamline revenue recovery and reduce administrative burdens on courts."
    },
    {
      "type": "paragraph",
      "text": "Legal analysts and policymakers are expected to assess the feasibility and regulatory implications of merging utility services with traffic enforcement mandates."
    },
    {
      "type": "paragraph",
      "text": "Further details regarding the implementation timeline and operational framework for the electricity bill linkage are anticipated as judicial proceedings continue."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Here is how Supreme Court plans to recover unpaid traffic challans - Bar and Bench"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "sen-kennedy-says-no-living-politicians-should-have-buildings-named-after-them-af-1790596711",
  "category": "world",
  "headline": "Sen Kennedy says no living politicians should have buildings named after them after Trump's moves - Fox News",
  "dek": "US Senator John Kennedy proposes banning public building names for living politicians amid broader scrutiny over executive branding.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T11:58:31Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790596709_8651.png",
  "imageAlt": "Sen Kennedy says no living politicians should have buildings named after them after Trump's moves - Fox News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "United States Senator John Kennedy has stated that no living politicians should have public buildings named after them following recent actions involving Donald Trump. The legislative stance arrives amid heightened political discussion concerning the naming conventions of public infrastructure and federal properties."
    },
    {
      "type": "paragraph",
      "text": "The policy debate intersects with broader scrutiny surrounding taxpayer-funded public service announcements and official media releases. Observers note that administrative communications continue to face rigorous review from lawmakers regarding their use of public funds ahead of upcoming midterms."
    },
    {
      "type": "paragraph",
      "text": "Federal transparency advocates have frequently raised concerns over the blending of official government communication with political messaging. The latest remarks from Capitol Hill underscore ongoing bipartisan sensitivities surrounding executive branch expenditures and visibility campaigns."
    },
    {
      "type": "paragraph",
      "text": "As congressional attention focuses on federal oversight, policymakers are weighing potential restrictions on administrative promotions. The discussions highlight systemic questions regarding the appropriate boundaries of state-funded media and public property designations."
    },
    {
      "type": "paragraph",
      "text": "Further parliamentary debate and committee reviews are anticipated as lawmakers assess potential legislative measures to regulate public building designations and executive communications."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Sen Kennedy says no living politicians should have buildings named after them after Trump's moves - Fox News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "breaking-rape-cases-in-delhi-ncr-show-systematic-failure-of-police-administratio-1790594471",
  "category": "india",
  "headline": "BREAKING | Rape Cases In Delhi-NCR Show Systematic Failure Of Police & Administration : Supreme Court... - Live Law",
  "dek": "Supreme Court takes suo motu cognisance of Delhi-NCR sexual assault cases, citing systemic administrative failures.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T11:21:11Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790594468_7881.png",
  "imageAlt": "BREAKING | Rape Cases In Delhi-NCR Show Systematic Failure Of Police & Administration : Supreme Court... - Live Law",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Supreme Court of India has initiated suo motu proceedings regarding recent sexual assault cases reported in the Delhi-NCR region, addressing critical systemic failures within local law enforcement and administrative bodies."
    },
    {
      "type": "paragraph",
      "text": "The apex court specifically flagged inadequate and lax patrolling by authorities, drawing sharp comparisons to the institutional lapses witnessed during the Nirbhaya case."
    },
    {
      "type": "paragraph",
      "text": "This intervention underscores mounting judicial scrutiny over public safety mechanisms and the accountability of law enforcement agencies in the national capital region."
    },
    {
      "type": "paragraph",
      "text": "Legal and policy analysts are closely watching the proceedings to assess potential directives aimed at reforming administrative protocols and police oversight."
    },
    {
      "type": "paragraph",
      "text": "Future developments will depend on the court's detailed observations and any mandated corrective measures for regional authorities."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "BREAKING | Rape Cases In Delhi-NCR Show Systematic Failure Of Police & Administration : Supreme Court... - Live Law"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "bill-gates-says-an-ai-kill-switch-isnt-enough-politico-1790590946",
  "category": "world",
  "headline": "Bill Gates says an AI ‘kill switch’ isn’t enough - Politico",
  "dek": "Bill Gates warns unchecked AI could cause a billion deaths and calls for immediate regulatory safeguards.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T10:22:26Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790590945_6068.png",
  "imageAlt": "Bill Gates says an AI ‘kill switch’ isn’t enough - Politico",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Microsoft co-founder Bill Gates has publicly stated that an artificial intelligence kill switch is insufficient to guarantee safety, warning that unchecked AI development could lead to extreme global consequences."
    },
    {
      "type": "paragraph",
      "text": "In a significant policy intervention, Gates asserted that the technology carries the potential to cause up to a billion deaths if left entirely unregulated."
    },
    {
      "type": "paragraph",
      "text": "The prominent technologist used his warnings to directly contradict Donald Trump, arguing that the former president is wrong to hold out against the implementation of formal AI safeguards."
    },
    {
      "type": "paragraph",
      "text": "Gates maintained that safety concerns surrounding advanced automation and machine intelligence are entirely legitimate rather than a hoax, signaling a sharp division among influential political and business figures."
    },
    {
      "type": "paragraph",
      "text": "The ongoing debate underscores the widening rift between industry pioneers over how strictly artificial intelligence should be monitored and controlled by governments worldwide."
    },
    {
      "type": "paragraph",
      "text": "As technology leaders and political figures clash over oversight policies, the focus turns to whether lawmakers will institute mandatory global safety frameworks for the sector."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Bill Gates says an AI ‘kill switch’ isn’t enough - Politico"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "white-house-expands-taxpayer-paid-ad-campaign-boosting-trump-the-washington-post-1790588718",
  "category": "world",
  "headline": "White House expands taxpayer-paid ad campaign boosting Trump - The Washington Post",
  "dek": "The White House expands a taxpayer-funded ad campaign to promote President Trump, raising legal and ethical questions.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T09:45:18Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790588717_5464.png",
  "imageAlt": "White House expands taxpayer-paid ad campaign boosting Trump - The Washington Post",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The White House has officially expanded a taxpayer-funded advertising campaign designed to boost President Trump, drawing immediate scrutiny from legal experts and political observers alike. The initiative utilizes public funds for promotional messaging that critics argue crosses ethical and legal lines regarding the use of government resources for political positioning."
    },
    {
      "type": "paragraph",
      "text": "The campaign's expansion comes on the heels of a taxpayer-funded video release that portrays the president in a strongman context, further fueling a political storm in Washington. Lawmakers and ethics watchdogs have raised significant questions regarding the legality of financing such promotional efforts with federal revenues."
    },
    {
      "type": "paragraph",
      "text": "The controversy has also prompted broader legislative reactions, with lawmakers expressing concern over the growing use of political figures in federally funded projects and public spaces. Discussions are now centering on whether existing statutes adequately prevent the partisan use of taxpayer dollars."
    },
    {
      "type": "paragraph",
      "text": "As the administration defends the initiative, legal scholars are examining potential challenges to the expenditure. The debate highlights ongoing tensions over the appropriate use of public funds for executive branch communications and self-promotion."
    },
    {
      "type": "paragraph",
      "text": "Monitoring groups and political opponents are expected to escalate their inquiries into the total cost and authorization process behind the ad campaign. Future oversight hearings may address the need for stricter guidelines on federal advertising and promotional budgets."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "White House expands taxpayer-paid ad campaign boosting Trump - The Washington Post"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "ai-bubble-fears-are-starting-to-spill-over-futurism-1790585302",
  "category": "technology",
  "headline": "AI Bubble Fears Are Starting to Spill Over - Futurism",
  "dek": "Growing financial concerns surrounding artificial intelligence valuations are beginning to impact broader technology markets and investor sentiment.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T08:48:22Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790585300_6087.png",
  "imageAlt": "AI Bubble Fears Are Starting to Spill Over - Futurism",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "technology"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Financial markets and technology sectors are closely monitoring rising anxiety over artificial intelligence valuations, as initial sector-specific concerns begin to spread into wider economic domains. The development marks a potential shift in how investors and institutions evaluate the sustainability of rapid capital deployment within the technology industry."
    },
    {
      "type": "paragraph",
      "text": "Market observers note that speculative enthusiasm, which has long driven substantial funding rounds and soaring stock valuations for AI-focused entities, is encountering increased scrutiny. Analysts are evaluating whether current spending levels on infrastructure and computational resources align with immediate revenue generation capabilities."
    },
    {
      "type": "paragraph",
      "text": "The broader impact of these valuation fears is expected to influence venture capital strategies, corporate research budgets, and broader technology sector performance. Stakeholders across the global digital economy are reassessing risk parameters amid shifting macroeconomic conditions and changing investor expectations."
    },
    {
      "type": "paragraph",
      "text": "For international technology markets, including hubs tied to global software and hardware supply chains, these valuation corrections could prompt a more conservative approach to funding innovation. Policymakers and industry leaders will likely scrutinize upcoming corporate disclosures and market indicators for further signs of adjustment."
    },
    {
      "type": "paragraph",
      "text": "As the technology sector navigates these emerging concerns, market participants remain focused on underlying fundamentals and the pace of commercial adoption. Observers will continue tracking financial reports and venture capital trends to gauge the long-term trajectory of artificial intelligence investments."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "AI Bubble Fears Are Starting to Spill Over - Futurism"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "tear-gas-lathi-charge-in-protesters-vs-cops-over-ujjain-mosque-removal-ndtv-1790580716",
  "category": "india",
  "headline": "Tear Gas, Lathi Charge In Protesters vs Cops Over Ujjain Mosque Removal - NDTV",
  "dek": "Police deploy tear gas and a lathi charge amid protests over a mosque removal in Ujjain.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T07:31:56Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790580714_2074.png",
  "imageAlt": "Tear Gas, Lathi Charge In Protesters vs Cops Over Ujjain Mosque Removal - NDTV",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Clashes broke out between protesters and police forces in Ujjain, prompting law enforcement to deploy tear gas and conduct a lathi charge to control the crowd."
    },
    {
      "type": "paragraph",
      "text": "The unrest is directly linked to ongoing tensions surrounding the removal of a mosque and a local road-widening project."
    },
    {
      "type": "paragraph",
      "text": "Reports indicate that stone pelting and security deployments marked a tense night for local residents who gathered ahead of a scheduled court hearing."
    },
    {
      "type": "paragraph",
      "text": "The Madhya Pradesh Chief Minister's involvement in the road-widening project has further heightened local attention on the development."
    },
    {
      "type": "paragraph",
      "text": "The incident highlights the sensitive intersection of urban infrastructure projects, heritage sites, and community relations in the region."
    },
    {
      "type": "paragraph",
      "text": "Authorities continue to maintain a heavy security presence in the area to manage public safety as the situation remains fluid."
    },
    {
      "type": "paragraph",
      "text": "Observers and residents await further legal developments and official updates regarding the court hearing and the contested project."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Tear Gas, Lathi Charge In Protesters vs Cops Over Ujjain Mosque Removal - NDTV"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "indias-economic-growth-likely-slowed-to-71-in-april-june-quarter-poll-business-s-1790575097",
  "category": "economy",
  "headline": "India's economic growth likely slowed to 7.1% in April-June quarter: Poll - Business Standard",
  "dek": "A recent poll indicates India's economic growth likely moderated to 7.1% during the April-June quarter.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T05:58:17Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790575095_6672.png",
  "imageAlt": "India's economic growth likely slowed to 7.1% in April-June quarter: Poll - Business Standard",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "economy"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "India's economic growth is projected to have slowed to 7.1% in the April-June quarter, according to recent polling data."
    },
    {
      "type": "paragraph",
      "text": "The estimate points toward a shifting pace of expansion for the broader Indian economy as policymakers monitor incoming indicators."
    },
    {
      "type": "paragraph",
      "text": "Quarterly gross domestic product figures serve as a critical yardstick for assessing the nation's macroeconomic performance and industrial output."
    },
    {
      "type": "paragraph",
      "text": "Financial markets and analysts track these updates closely to evaluate the trajectory of domestic demand and business investment."
    },
    {
      "type": "paragraph",
      "text": "Official reports and forthcoming data releases are expected to provide definitive figures on the quarterly economic performance."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "India's economic growth likely slowed to 7.1% in April-June quarter: Poll - Business Standard"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "un-ambassador-waltz-says-iran-was-not-negotiating-in-good-faith-to-end-war-the-g-1790559711",
  "category": "world",
  "headline": "UN ambassador Waltz says Iran was not negotiating ‘in good faith’ to end war - The Guardian",
  "dek": "US Ambassador Waltz accuses Iran of bad faith in war termination talks as truce proposals are rejected.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T01:41:51Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790559709_3593.png",
  "imageAlt": "UN ambassador Waltz says Iran was not negotiating ‘in good faith’ to end war - The Guardian",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "US Ambassador Waltz has publicly stated that Iran was not negotiating in good faith to bring an end to the ongoing military conflict. The assessment comes amid a broader diplomatic breakdown regarding proposals to halt hostilities in the region."
    },
    {
      "type": "paragraph",
      "text": "Alongside the ambassador's remarks, reports indicate that President Trump has officially rejected an Iranian ceasefire proposal. The rejected truce offer also encompassed provisions aimed at reopening the strategic Strait of Hormuz to international shipping."
    },
    {
      "type": "paragraph",
      "text": "Political analysts note that the administration now anticipates renewed military engagement and bombing following the midterm period. This rejection signals a hardening stance against the diplomatic overtures put forward by Tehran."
    },
    {
      "type": "paragraph",
      "text": "The impasse carries significant implications for regional security, global shipping lanes, and energy markets dependent on the Strait of Hormuz. Policymakers and market analysts are closely watching how the collapse of these negotiations will affect maritime stability and crude supplies."
    },
    {
      "type": "paragraph",
      "text": "As diplomatic channels appear increasingly constrained, attention turns to the timing and scale of potential military escalations. Stakeholders across international markets remain on high alert for further developments following the midterm elections."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "UN ambassador Waltz says Iran was not negotiating ‘in good faith’ to end war - The Guardian"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "top-world-leaders-to-attend-india-ai-impact-summit-in-new-delhi-next-week-newson-1790557116",
  "category": "world",
  "headline": "Top world leaders to attend India-AI Impact Summit in New Delhi next week - newsonair.gov.in",
  "dek": "Global leaders will convene in New Delhi next week for the upcoming India-AI Impact Summit.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T00:58:36Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790557115_4157.png",
  "imageAlt": "Top world leaders to attend India-AI Impact Summit in New Delhi next week - newsonair.gov.in",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Top world leaders are scheduled to arrive in New Delhi next week to participate in the India-AI Impact Summit, according to official reports."
    },
    {
      "type": "paragraph",
      "text": "The high-level international gathering will bring together prominent figures to address critical developments in the artificial intelligence sector."
    },
    {
      "type": "paragraph",
      "text": "Discussions at the summit are expected to center around the future trajectory of AI technologies and their broader socioeconomic implications."
    },
    {
      "type": "paragraph",
      "text": "As a major emerging economy, India's hosting of the summit underscores its increasing prominence in international technology policy discussions."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders and policymakers will be closely watching the proceedings for potential collaborative frameworks and strategic partnerships."
    },
    {
      "type": "paragraph",
      "text": "Future developments from the summit are anticipated to influence regulatory approaches to artificial intelligence across multiple jurisdictions."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Top world leaders to attend India-AI Impact Summit in New Delhi next week - newsonair.gov.in"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "five-arrested-as-counter-terror-police-investigate-major-incident-near-raf-fairf-1790553475",
  "category": "world",
  "headline": "Five arrested as counter-terror police investigate major incident near RAF Fairford - BBC",
  "dek": "Counter-terror police arrest five men and deploy bomb squads near RAF Fairford, a UK air base used by US forces.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-27T23:57:55Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790553473_4415.png",
  "imageAlt": "Five arrested as counter-terror police investigate major incident near RAF Fairford - BBC",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Counter-terrorism police in the United Kingdom have arrested five men following a major security incident near RAF Fairford. The arrests occurred during a specialized operation near the air base, which is frequently utilized by United States military forces."
    },
    {
      "type": "paragraph",
      "text": "Authorities deployed bomb disposal teams to search vans located in the immediate vicinity of the installation as the security operation unfolded. The presence of explosive ordnance disposal units underscored the severity of the threat being investigated by law enforcement."
    },
    {
      "type": "paragraph",
      "text": "The five suspects were detained on suspicion of terrorism offenses, according to initial reports from law enforcement and news agencies. Details regarding the exact nature of the suspected plot remain limited as the investigation proceeds."
    },
    {
      "type": "paragraph",
      "text": "A United States Republican representative has publicly expressed the belief that Iran may have been involved in the thwarted terrorist plan targeting the US air base in Britain. This diplomatic and political dimension adds heightened geopolitical scrutiny to the ongoing domestic security probe."
    },
    {
      "type": "paragraph",
      "text": "The incident has drawn international attention given the strategic importance of RAF Fairford and its role in joint UK-US military operations. Security officials and market observers are watching the situation for any broader implications regarding defense installations and regional stability."
    },
    {
      "type": "paragraph",
      "text": "Further updates are expected from British counter-terrorism authorities as forensic searches of the seized vehicles continue and the suspects undergo questioning. Investigators are working to determine the full scope of the plot and any potential wider network involved."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Five arrested as counter-terror police investigate major incident near RAF Fairford - BBC"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "powerful-noreaster-lashes-east-coast-with-rain-flooding-and-wind-cnn-1790551791",
  "category": "world",
  "headline": "Powerful nor’easter lashes East Coast with rain, flooding and wind - CNN",
  "dek": "A powerful nor'easter has struck the East Coast, bringing dangerous winds, heavy rain, and coastal flooding to the Northeast.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-27T23:29:51Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790551789_2235.png",
  "imageAlt": "Powerful nor’easter lashes East Coast with rain, flooding and wind - CNN",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "A powerful nor’easter has lashed the East Coast of the United States, bringing severe weather conditions marked by heavy rain, coastal flooding, and dangerous winds to the region."
    },
    {
      "type": "paragraph",
      "text": "Live updates and reports from the affected zones indicate that the deadly storm is significantly impacting the Northeast and the broader tri-state area."
    },
    {
      "type": "paragraph",
      "text": "The severe meteorological event has caused substantial coastal flooding, inundating low-lying areas and disrupting normal activity across the impacted corridor."
    },
    {
      "type": "paragraph",
      "text": "Emergency services and local authorities are responding to the hazards posed by the high winds and rising waters associated with the storm system."
    },
    {
      "type": "paragraph",
      "text": "Severe weather disruptions in major economic and logistical hubs can carry broader implications for insurance liabilities, regional supply chains, and travel networks."
    },
    {
      "type": "paragraph",
      "text": "Observers and safety officials will continue to track the storm's movement and assess the full extent of the property and infrastructure damage as conditions evolve."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Powerful nor’easter lashes East Coast with rain, flooding and wind - CNN"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "bomb-squad-searching-vans-near-us-air-base-in-britain-as-five-men-arrested-on-te-1790549783",
  "category": "world",
  "headline": "Bomb squad searching vans near U.S. air base in Britain as five men arrested on terror charge - NBC News",
  "dek": "Five men have been arrested on terrorism charges following a security operation and bomb squad searches near a UK air base used by U.S. bombers.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-27T22:56:23Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790549781_6598.png",
  "imageAlt": "Bomb squad searching vans near U.S. air base in Britain as five men arrested on terror charge - NBC News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "British law enforcement authorities have arrested five men on suspicion of terrorism following a major security operation near a United Kingdom air base utilized by United States forces."
    },
    {
      "type": "paragraph",
      "text": "Bomb disposal units were deployed to the area to conduct thorough searches of multiple vans stationed near the strategic military facility."
    },
    {
      "type": "paragraph",
      "text": "The targeted air base plays a key role in operations involving U.S. bombers, raising the international profile of the security incident."
    },
    {
      "type": "paragraph",
      "text": "A U.S. Republican representative publicly stated a belief that Iran may have been involved in the thwarted terrorist plan targeting the allied air base."
    },
    {
      "type": "paragraph",
      "text": "The convergence of international defense assets and suspected state-backed threats has heightened alert levels across Western military installations in the region."
    },
    {
      "type": "paragraph",
      "text": "Authorities have not yet released specific details regarding the identities of the five suspects or the exact timeline of the disrupted plot."
    },
    {
      "type": "paragraph",
      "text": "Security agencies and intelligence officials are expected to release further updates as the investigation into the terror charges and potential foreign involvement progresses."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Bomb squad searching vans near U.S. air base in Britain as five men arrested on terror charge - NBC News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "3-day-bank-strike-deferred-after-meeting-between-association-unions-ndtv-1790546937",
  "category": "india",
  "headline": "3-Day Bank Strike Deferred After Meeting Between Association, Unions - NDTV",
  "dek": "A planned three-day nationwide bank strike has been deferred following discussions between the banking association and labor unions.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-27T22:08:57Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790546935_6045.png",
  "imageAlt": "3-Day Bank Strike Deferred After Meeting Between Association, Unions - NDTV",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "A planned three-day nationwide bank strike has been officially deferred following discussions between the Indian bank association and labor unions, averting potential nationwide disruptions to the financial sector."
    },
    {
      "type": "paragraph",
      "text": "The proposed industrial action, which had been scheduled to begin on Monday, was put on hold after the latest round of talks between the bank body and employee representatives yielded a temporary resolution."
    },
    {
      "type": "paragraph",
      "text": "Had the nationwide strike proceeded as originally planned, essential financial services across India—including routine cash withdrawals, cash deposits, and interbank cheque clearing—would have suffered significant delays and operational disruptions."
    },
    {
      "type": "paragraph",
      "text": "The sudden suspension of the strike notice brings immediate relief to individual customers and commercial enterprises alike, who rely on uninterrupted access to banking infrastructure for daily transactions and liquidity management."
    },
    {
      "type": "paragraph",
      "text": "The development follows a complex backdrop of labor tensions and regional friction, highlighted by separate debates in areas like Mizoram, where local church bodies and civil society organizations had actively opposed any decisions to keep banks operational under disputed circumstances."
    },
    {
      "type": "paragraph",
      "text": "With the immediate threat of a three-day shutdown averted, attention now shifts back to the negotiating table as both the banking association and labor unions work toward addressing core employee grievances."
    },
    {
      "type": "paragraph",
      "text": "Financial markets, commercial stakeholders, and banking customers will closely monitor subsequent announcements from the organizing unions to see whether the strike has been permanently cancelled or merely postponed pending further talks."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "3-Day Bank Strike Deferred After Meeting Between Association, Unions - NDTV"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "is-eci-correct-in-saying-supreme-court-upheld-its-new-form-6-declaration-live-la-1790544503",
  "category": "india",
  "headline": "Is ECI Correct In Saying Supreme Court Upheld Its New Form 6 Declaration? - Live Law",
  "dek": "Legal questions arise over the Election Commission of India's claims regarding judicial backing for its new Form 6 declaration.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-27T21:28:23Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790544501_3009.png",
  "imageAlt": "Is ECI Correct In Saying Supreme Court Upheld Its New Form 6 Declaration? - Live Law",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Questions have been raised regarding whether the Election Commission of India (ECI) is correct in its assertion that the Supreme Court upheld its new Form 6 declaration. The development comes amid ongoing scrutiny of the poll body's administrative procedures and electoral roll revision processes."
    },
    {
      "type": "paragraph",
      "text": "The debate focuses on the interpretation of judicial pronouncements concerning the updated declaration forms utilized in voter registration. Observers and legal experts are closely examining the precise nature of the Supreme Court's observations regarding the ECI's recent press notes and policy updates."
    },
    {
      "type": "paragraph",
      "text": "In tandem with the declaration debate, related administrative updates indicate that election officials are scheduled to conduct targeted home visits for individuals who have been issued official notices. These procedural adjustments form part of the broader efforts surrounding electoral roll revisions managed by the commission."
    },
    {
      "type": "paragraph",
      "text": "The controversy underscores the sensitivity of administrative and legal processes governing voter enrollment in the country. Ensuring transparency and strict adherence to judicial guidelines remains a central concern for institutional stakeholders and the public alike."
    },
    {
      "type": "paragraph",
      "text": "Further clarity on the matter is expected as legal analysts and institutional representatives respond to the ongoing discussions. Stakeholders will continue to monitor official communications from both the judiciary and the election administration for definitive updates."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Is ECI Correct In Saying Supreme Court Upheld Its New Form 6 Declaration? - Live Law"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "ma-baby-meets-kejriwal-ahead-of-india-bloc-meeting-on-election-commission-the-hi-1790540819",
  "category": "india",
  "headline": "M.A. Baby meets Kejriwal ahead of INDIA bloc meeting on Election Commission - The Hindu",
  "dek": "M.A. Baby meets Arvind Kejriwal ahead of the INDIA bloc meeting addressing the Election Commission.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-27T20:26:59Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790540818_8422.png",
  "imageAlt": "M.A. Baby meets Kejriwal ahead of INDIA bloc meeting on Election Commission - The Hindu",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Communist Party of India (Marxist) leader M.A. Baby has held discussions with Arvind Kejriwal ahead of the scheduled INDIA bloc meeting. The high-level political interaction centers directly on the functioning and recent controversies surrounding the Election Commission of India."
    },
    {
      "type": "paragraph",
      "text": "The consultations occur as political pressure mounts significantly on the Chief Poll Officer. Opposition parties are currently formulating plans for concerted institutional and political action in response to ongoing concerns about poll panel transparency."
    },
    {
      "type": "paragraph",
      "text": "Public scrutiny over the poll panel has intensified following disclosures regarding internal dissent. Reports indicate that over a 10-month period, two Election Commissioners objected on record to poll panel steps on 14 separate occasions."
    },
    {
      "type": "paragraph",
      "text": "Legal and political analysts continue to examine the constitutional provisions governing the removal of the Chief Election Commissioner and other poll panel members. These debates form a critical backdrop to the ongoing opposition strategy sessions."
    },
    {
      "type": "paragraph",
      "text": "The unfolding developments carry substantial policy and governance implications for the world's largest democracy ahead of future electoral cycles. Market participants and political observers are weighing the potential fallout of institutional friction on policy stability."
    },
    {
      "type": "paragraph",
      "text": "As the INDIA bloc convenes, attention remains fixed on whether opposition parties will announce a unified course of action regarding the election authority. Observers are closely watching for any formal declarations emerging from the multi-party consultations."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "M.A. Baby meets Kejriwal ahead of INDIA bloc meeting on Election Commission - The Hindu"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "sadc-ministers-meet-amid-growing-global-geopolitical-pressures-sabc-news-1790530768",
  "category": "geopolitics",
  "headline": "SADC ministers meet amid growing global geopolitical pressures - SABC News",
  "dek": "Southern African Development Community ministers meet to address mounting international geopolitical and economic pressures.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-27T17:39:28Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790530767_4218.png",
  "imageAlt": "SADC ministers meet amid growing global geopolitical pressures - SABC News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "geopolitics"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Ministers from the Southern African Development Community have gathered for high-level discussions aimed at navigating increasing global geopolitical pressures. The regional bloc's assembly underscores growing international strategic complexities affecting developing economies and multilateral trade relationships."
    },
    {
      "type": "paragraph",
      "text": "The consultations center on formulating coordinated policy approaches to safeguard regional stability amidst shifting global alliances and external economic headwinds. Policymakers are evaluating strategic frameworks to enhance economic resilience and mitigate vulnerabilities linked to broader international market volatility."
    },
    {
      "type": "paragraph",
      "text": "For emerging markets and trade partners globally, regional diplomatic alignments carry significant implications for supply chain continuity and bilateral commerce. The deliberations reflect broader concerns among developing nations regarding the direct and indirect impacts of intensifying geopolitical realignments."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders across the region are assessing how these diplomatic engagements will translate into actionable economic and security measures. The outcomes of the ministerial meeting are expected to guide the bloc's collective negotiating stance on international platforms."
    },
    {
      "type": "paragraph",
      "text": "Market participants and policy analysts continue to monitor the proceedings for indications of strategic shifts in regional trade policy. Observers note that coordinated diplomatic efforts remain essential for managing external pressures and maintaining domestic economic stability."
    },
    {
      "type": "paragraph",
      "text": "Future updates will depend on official resolutions and policy directives issued by the SADC ministerial council following the conclusion of the talks."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "SADC ministers meet amid growing global geopolitical pressures - SABC News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "trump-revives-rare-budget-maneuver-to-rescind-810m-in-congressionally-approved-f-1790447779",
  "category": "world",
  "headline": "Trump revives rare budget maneuver to rescind $810M in congressionally approved funds - Fox News",
  "dek": "Trump administration revives a rare budget maneuver to rescind $810 million in congressionally approved funds.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-26T18:36:19Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790447778_2357.png",
  "imageAlt": "Trump revives rare budget maneuver to rescind $810M in congressionally approved funds - Fox News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The White House has ordered over $800 million in congressionally approved funds to be rescinded using a rare budget authority. Lawmakers have strongly criticized the maneuver, with Collins labeling the move a clear violation of law. The decision marks a significant escalation in tensions between the executive branch and lawmakers regarding spending authority. Observers will be closely watching how Congress responds to the clawback of nearly $1 billion in previously approved spending."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Trump revives rare budget maneuver to rescind $810M in congressionally approved funds - Fox News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "school-assembly-news-headlines-today-august-22-top-national-sports-and-world-new-1790445017",
  "category": "world",
  "headline": "School assembly news headlines today- August 22: Top national, sports and world news curated for you - bestcolleges.indiatoday.in",
  "dek": "Curated national, sports, and world news headlines for August 22 school assemblies are now available.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-26T17:50:17Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790445015_4324.png",
  "imageAlt": "School assembly news headlines today- August 22: Top national, sports and world news curated for you - bestcolleges.indiatoday.in",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Educators and students preparing for morning school assemblies on August 22 can access a fresh curation of top news updates. The daily briefing spans national developments, sports highlights, and major international stories."
    },
    {
      "type": "paragraph",
      "text": "These curated updates aim to keep school communities informed about current affairs efficiently. The collection serves as a ready-to-use resource for morning announcements and academic discussions."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "School assembly news headlines today- August 22: Top national, sports and world news curated for you - bestcolleges.indiatoday.in"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "trump-rejects-irans-seven-day-roadmap-to-reopen-strait-of-hormuz-al-jazeera-1790443891",
  "category": "india",
  "headline": "Trump rejects Iran’s seven-day roadmap to reopen Strait of Hormuz - Al Jazeera",
  "dek": "US President Donald Trump has rejected Iran's proposed seven-day roadmap to reopen the Strait of Hormuz.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-26T17:31:31Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790443889_2622.png",
  "imageAlt": "Trump rejects Iran’s seven-day roadmap to reopen Strait of Hormuz - Al Jazeera",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Washington has officially turned down a seven-day proposal from Iran aimed at reopening the strategic Strait of Hormuz. The diplomatic rejection highlights persistent geopolitical tensions surrounding the vital maritime trade route. Observers note that the breakdown in discussions could lead to renewed military and economic friction in the region. Markets and international stakeholders are closely monitoring the situation as diplomatic efforts face mounting hurdles."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Trump rejects Iran’s seven-day roadmap to reopen Strait of Hormuz - Al Jazeera"
    }
  ],
  "relatedStories": []
}
];

const byNewest = (a: Article, b: Article) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

const isPublishable = (article: Article): boolean =>
  article.verificationStatus === "verified";

export const allArticles = (): Article[] =>
  articleRecords.filter(isPublishable).sort(byNewest);

export const getCategory = (slug: string): Category | undefined =>
  categories.find((category) => category.slug === slug);

export const getArticle = (slug: string): Article | undefined =>
  allArticles().find((article) => article.slug === slug);

export const searchArticles = (query: string): Article[] => {
  const terms = query.trim().toLocaleLowerCase("en-IN").split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  return allArticles().filter((article) => {
    const searchable = [article.headline, article.dek, article.category, ...article.tags]
      .join(" ")
      .toLocaleLowerCase("en-IN");
    return terms.every((term) => searchable.includes(term));
  });
};

export const articlesByCategory = (slug: CategorySlug): Article[] =>
  allArticles().filter((article) => article.category === slug);

export const leadStory = (): Article | undefined =>
  allArticles().find((article) => article.featured) ?? allArticles()[0];

export const featuredStories = (): Article[] =>
  allArticles().filter((article) => article.featured);

export const trendingStories = (limit = 5): Article[] =>
  allArticles().filter((article) => article.trending).slice(0, limit);

export const relatedStories = (article: Article, limit = 3): Article[] => {
  const explicit = article.relatedStories
    .map((slug) => getArticle(slug))
    .filter((item): item is Article => Boolean(item));
  const sameCategory = allArticles().filter(
    (item) => item.category === article.category && item.slug !== article.slug,
  );
  return [...new Map([...explicit, ...sameCategory].map((item) => [item.slug, item])).values()].slice(0, limit);
};

export const recommendedStories = (article: Article, limit = 4): Article[] =>
  allArticles().filter((item) => item.slug !== article.slug).slice(0, limit);

export const categoryName = (slug: CategorySlug): string =>
  getCategory(slug)?.name ?? slug;

export const categoryPath = (slug: CategorySlug): string =>
  getCategory(slug)?.path ?? "/";

export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export const formatDateTime = (iso: string): string =>
  `${new Date(iso).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  })} IST`;
