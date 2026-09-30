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
  "slug": "trump-signs-executive-order-renaming-ai-to-super-intelligenceheres-what-it-chang-1790781711",
  "category": "india",
  "headline": "Trump Signs Executive Order Renaming AI To ‘Super Intelligence’—Here’s What It Changes - forbes.com",
  "dek": "President Trump signs an executive order renaming artificial intelligence to Super Intelligence alongside an AI safety accord.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T15:21:51Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790781709_4890.png",
  "imageAlt": "Trump Signs Executive Order Renaming AI To ‘Super Intelligence’—Here’s What It Changes - forbes.com",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "United States President Donald Trump has signed an executive order officially renaming artificial intelligence to \"Super Intelligence,\" according to recent reports. The executive action establishes the new terminology for federal technology frameworks and regulatory documents."
    },
    {
      "type": "paragraph",
      "text": "Alongside the renaming decree, top technology CEOs signed a new AI safety accord during the administration event. The agreement outlines shared commitments among major technology leaders regarding future development and safety standards."
    },
    {
      "type": "paragraph",
      "text": "However, official documents associated with the signing ceremony drew immediate attention due to a prominent typo. The physical accord featured the phrase \"Unites States\" appearing directly beneath the president's name."
    },
    {
      "type": "paragraph",
      "text": "The oversight in the official paperwork was quickly noted by observers as the administration rolled out its updated nomenclature. The terminology shift impacts how federal agencies officially reference artificial intelligence systems moving forward."
    },
    {
      "type": "paragraph",
      "text": "Industry participants and legal experts are now assessing the practical implications of the terminology change on ongoing technology policy. Observers will watch for potential document corrections and subsequent administrative guidance from the White House."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Trump Signs Executive Order Renaming AI To ‘Super Intelligence’—Here’s What It Changes - forbes.com"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "israel-bound-flydubai-flight-diverted-to-saudi-arabia-pilots-injured-hospitalise-1790779154",
  "category": "india",
  "headline": "Israel-bound flydubai flight diverted to Saudi Arabia; pilots injured, hospitalised - thehindu.com",
  "dek": "An Israel-bound flydubai flight was diverted to Saudi Arabia after an Indian pilot fought off a colleague who attempted to stab him and crash the plane.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T14:39:14Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790779152_3386.png",
  "imageAlt": "Israel-bound flydubai flight diverted to Saudi Arabia; pilots injured, hospitalised - thehindu.com",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "An Israel-bound flydubai flight was forced to divert to Saudi Arabia following a severe security incident in the cockpit. According to initial reports from sources, an Indian pilot who was on board acted heroically to fight off a colleague who had attacked and stabbed him mid-flight."
    },
    {
      "type": "paragraph",
      "text": "The altercation escalated as the co-pilot reportedly attempted to crash the flydubai aircraft. Quick-thinking passengers intervened in the cabin, managing to overcome the co-pilot and secure the aircraft before catastrophe struck."
    },
    {
      "type": "paragraph",
      "text": "Following the emergency landing in Saudi Arabia, both injured pilots were immediately hospitalised for medical treatment. Authorities have not yet released the identities of the individuals involved or the exact timeline of the mid-air struggle."
    },
    {
      "type": "paragraph",
      "text": "In response to the incident and surrounding geopolitical concerns, Israeli Prime Minister Benjamin Netanyahu announced that Israel is actively preparing for other potential threats. The developments have raised international alarm regarding cockpit security and flight safety protocols on regional carriers."
    },
    {
      "type": "paragraph",
      "text": "Aviation security experts and regulatory bodies are expected to review the incident closely to determine how a co-pilot gained the opportunity to attempt such an attack. Further updates on the injured pilots' conditions and the ongoing investigation are anticipated as regional authorities coordinate with the airline."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Israel-bound flydubai flight diverted to Saudi Arabia; pilots injured, hospitalised - thehindu.com"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "pakistan-airspace-closed-india-eyes-china-skies-the-times-of-india-1790776005",
  "category": "india",
  "headline": "Pakistan airspace closed, India eyes China skies - The Times of India",
  "dek": "Pakistan airspace closure forces India to explore alternative routes through Chinese skies, impacting regional aviation.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T13:46:45Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790776003_1319.png",
  "imageAlt": "Pakistan airspace closed, India eyes China skies - The Times of India",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Pakistan has officially closed its airspace, according to reports from The Times of India, creating immediate operational challenges for regional and international carriers."
    },
    {
      "type": "paragraph",
      "text": "The sudden closure has forced Indian aviation authorities and airlines to look toward Chinese skies as an alternative routing option to maintain flight schedules."
    },
    {
      "type": "paragraph",
      "text": "Rerouting flights through Chinese airspace involves complex diplomatic coordination and technical adjustments for carriers operating in the region."
    },
    {
      "type": "paragraph",
      "text": "The shift in flight paths carries potential cost and logistical implications for the airline industry, affecting fuel consumption and journey times."
    },
    {
      "type": "paragraph",
      "text": "Market analysts and aviation stakeholders are closely observing how policy adjustments and airspace negotiations will unfold."
    },
    {
      "type": "paragraph",
      "text": "Authorities continue to evaluate the situation as carriers adapt their flight plans to bypass the closed Pakistani corridor."
    },
    {
      "type": "paragraph",
      "text": "Further developments are anticipated regarding official coordination between the concerned regional aviation authorities."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Pakistan airspace closed, India eyes China skies - The Times of India"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "the-us-military-says-its-withdrawal-of-troops-from-iraq-is-complete-ap-news-1790772657",
  "category": "world",
  "headline": "The US military says its withdrawal of troops from Iraq is complete - AP News",
  "dek": "The United States military has completed its troop withdrawal from Iraq, 23 years after the initial invasion.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T12:50:57Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790772655_7384.png",
  "imageAlt": "The US military says its withdrawal of troops from Iraq is complete - AP News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The United States military has officially announced the complete withdrawal of its forces from Iraq. The historic drawdown brings a definitive end to the American military mission that began over two decades ago."
    },
    {
      "type": "paragraph",
      "text": "Chief Pentagon Spokesman Sean Parnell issued the formal statement detailing the conclusion of operations. The milestone marks exactly 23 years since U.S. forces first invaded the nation in 2003, fundamentally shifting Middle Eastern geopolitics."
    },
    {
      "type": "paragraph",
      "text": "The official end of the U.S. military footprint in Iraq carries significant implications for regional stability. Analysts and policymakers are reviewing the operational shift, particularly regarding long-term security arrangements and regional defense dynamics."
    },
    {
      "type": "paragraph",
      "text": "Questions regarding the management of Iraq's vital oil revenues remain a key point of international focus. The mechanisms by which Baghdad controls its petroleum income have long been intertwined with foreign presence and economic advisory frameworks."
    },
    {
      "type": "paragraph",
      "text": "Market participants and energy analysts will continue to observe how the leadership vacuum affects domestic governance and foreign investment. The transition represents a major structural change in how international actors interact with the Iraqi state."
    },
    {
      "type": "paragraph",
      "text": "Future developments will center on bilateral diplomatic ties and economic cooperation between Washington and Baghdad. Observers will watch closely to see how local security forces maintain stability in the post-withdrawal era."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "The US military says its withdrawal of troops from Iraq is complete - AP News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "sensex-today-trades-203-points-higher-nifty-below-22700-bajaj-finance-kotak-mahi-1790767576",
  "category": "economy",
  "headline": "Sensex Today Trades 203 Points Higher | Nifty Below 22,700 | Bajaj Finance & Kotak Mahindra Top Losers - Equitymaster",
  "dek": "Sensex gains 203 points while Nifty trades below 22,700, led down by Bajaj Finance and Kotak Mahindra.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T11:26:16Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790767575_7561.png",
  "imageAlt": "Sensex Today Trades 203 Points Higher | Nifty Below 22,700 | Bajaj Finance & Kotak Mahindra Top Losers - Equitymaster",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "economy"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Indian benchmark indices displayed a mixed trend during the trading session, with the BSE Sensex advancing 203 points."
    },
    {
      "type": "paragraph",
      "text": "Meanwhile, the broader Nifty index remained under pressure, slipping below the crucial 22,700 mark."
    },
    {
      "type": "paragraph",
      "text": "Market performance was heavily influenced by losses in select financial heavyweights, weighing on the broader market mood."
    },
    {
      "type": "paragraph",
      "text": "Bajaj Finance and Kotak Mahindra featured among the top losers during the session, driving the downward pressure on indices."
    },
    {
      "type": "paragraph",
      "text": "The divergence between the Sensex and Nifty highlights localized selling in specific sectoral heavyweights."
    },
    {
      "type": "paragraph",
      "text": "Investors continue to track constituent movements closely as indices navigate key technical thresholds."
    },
    {
      "type": "paragraph",
      "text": "Market participants will observe whether the benchmarks can sustain momentum or face extended selling pressure."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Sensex Today Trades 203 Points Higher | Nifty Below 22,700 | Bajaj Finance & Kotak Mahindra Top Losers - Equitymaster"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "flydubai-flight-to-israel-diverted-to-saudi-arabia-after-emergency-alert-al-jaze-1790765306",
  "category": "india",
  "headline": "Flydubai flight to Israel diverted to Saudi Arabia after emergency alert - Al Jazeera",
  "dek": "A Flydubai flight to Israel diverted to Saudi Arabia following an emergency alert and an in-air incident.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T10:48:26Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790765304_9942.png",
  "imageAlt": "Flydubai flight to Israel diverted to Saudi Arabia after emergency alert - Al Jazeera",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "A Flydubai flight scheduled for Israel was forced to divert to Saudi Arabia after an emergency alert was triggered during the journey, according to initial reports."
    },
    {
      "type": "paragraph",
      "text": "Passengers on board recounted a harrowing ordeal that nearly resulted in a crash, detailing a violent confrontation involving a pilot in the cockpit."
    },
    {
      "type": "paragraph",
      "text": "Accounts from passengers and official reports indicate that a pilot was stabbed, and blood was visible inside the cockpit during the chaotic episode."
    },
    {
      "type": "paragraph",
      "text": "The sudden escalation prompted the flight crew to alter course, safely landing the aircraft in Saudi Arabia to address the onboard emergency."
    },
    {
      "type": "paragraph",
      "text": "Video footage circulating from the incident showed relieved passengers clapping and hooting after the dramatic diversion concluded on the ground."
    },
    {
      "type": "paragraph",
      "text": "Aviation authorities and officials are continuing to investigate the exact sequence of events that led to the cockpit brawl and subsequent emergency landing."
    },
    {
      "type": "paragraph",
      "text": "Observers will be monitoring upcoming official statements from Flydubai and aviation regulators to understand the security and operational fallout of the incident."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Flydubai flight to Israel diverted to Saudi Arabia after emergency alert - Al Jazeera"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "record-breaking-heat-and-extreme-weather-continue-world-meteorological-organizat-1790762920",
  "category": "world",
  "headline": "Record-breaking heat and extreme weather continue - World Meteorological Organization WMO",
  "dek": "The World Meteorological Organization reports that record-breaking heat and extreme weather continue globally.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T10:08:40Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790762918_7002.png",
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
      "text": "The World Meteorological Organization has confirmed that record-breaking heat and extreme weather conditions are continuing to persist across the globe."
    },
    {
      "type": "paragraph",
      "text": "This ongoing trend underscores the sustained deviation from historical climate averages observed by international meteorological monitoring networks."
    },
    {
      "type": "paragraph",
      "text": "The persistence of these extreme weather phenomena raises critical concerns regarding long-term environmental stability and disaster preparedness."
    },
    {
      "type": "paragraph",
      "text": "Continued high temperatures and severe weather events pose direct risks to agricultural yields, potentially influencing global food prices and supply chains."
    },
    {
      "type": "paragraph",
      "text": "Market analysts and policy makers closely monitor these climate indicators for potential impacts on energy demand, insurance liabilities, and economic productivity."
    },
    {
      "type": "paragraph",
      "text": "International response strategies will depend on ongoing data collection and real-time assessments provided by global climate monitoring bodies."
    },
    {
      "type": "paragraph",
      "text": "Further updates from meteorological authorities are expected as weather patterns continue to develop and affect vulnerable regions worldwide."
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
  "slug": "rbi-sees-resilient-economy-despite-west-asia-conflict-monsoon-concerns-business-1790761361",
  "category": "economy",
  "headline": "RBI sees resilient economy despite West Asia conflict, monsoon concerns - Business Standard",
  "dek": "The Reserve Bank of India maintains that the national economy remains resilient amid global and domestic headwinds.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T09:42:41Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790761359_1797.png",
  "imageAlt": "RBI sees resilient economy despite West Asia conflict, monsoon concerns - Business Standard",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "economy"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Reserve Bank of India has expressed confidence in the enduring strength of the domestic economy. This positive assessment comes despite the persistence of geopolitical tensions in West Asia and mounting concerns over monsoon progress. Central bank evaluations suggest underlying economic fundamentals are holding firm against external pressures."
    },
    {
      "type": "paragraph",
      "text": "Geopolitical disruptions in West Asia remain a critical variable for global trade, energy supplies, and financial markets. The Reserve Bank continues to factor these external risks into its broader macroeconomic outlook. However, domestic activity indicators point toward continued stability."
    },
    {
      "type": "paragraph",
      "text": "Monsoon performance is another vital determinant for agricultural output, rural demand, and overall price stability. Shifts in weather patterns and precipitation levels are closely tracked by policymakers for potential impacts on food inflation. Despite these variables, the RBI's economic resilience thesis remains intact."
    },
    {
      "type": "paragraph",
      "text": "Market participants and economic analysts view the central bank's stance as an important signal of domestic buffering capacity. Robust internal demand helps mitigate the transmission of external shocks to the broader financial system. Financial institutions and investors continue to assess asset quality and liquidity conditions in light of these developments."
    },
    {
      "type": "paragraph",
      "text": "Policymakers remain vigilant regarding commodity price volatility and supply chain disruptions originating from the West Asian conflict zone. Monitoring domestic weather developments will remain central to upcoming agricultural and inflation assessments. Markets will closely watch subsequent policy statements and economic data releases for further guidance on the macroeconomic trajectory."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "RBI sees resilient economy despite West Asia conflict, monsoon concerns - Business Standard"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "trump-top-ai-leaders-agree-to-voluntary-ai-standards-axios-1790758162",
  "category": "world",
  "headline": "Trump, top AI leaders agree to voluntary ​AI ​standards - Axios",
  "dek": "Donald Trump and leading artificial intelligence executives have agreed to a voluntary pact establishing safety standards for the technology sector.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T08:49:22Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790758160_8421.png",
  "imageAlt": "Trump, top AI leaders agree to voluntary ​AI ​standards - Axios",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "United States leadership and prominent artificial intelligence figures have formalized a new voluntary agreement establishing operational and safety standards for the industry. The accord involves major technology executives signing a framework pledging robust oversight of AI development."
    },
    {
      "type": "paragraph",
      "text": "The development unfolds alongside ongoing discussions about the political and regulatory trajectory of advanced technology systems. Observers note the framework relies on voluntary compliance rather than mandatory statutory enforcement mechanisms."
    },
    {
      "type": "paragraph",
      "text": "Discussions surrounding the initiative also highlight broader branding and policy efforts concerning the future terminology and governance of artificial intelligence. Critics and supporters alike continue to debate whether voluntary industry pacts provide sufficient oversight for rapidly scaling capabilities."
    },
    {
      "type": "paragraph",
      "text": "Market participants and policymakers are closely examining the implementation details of the signed commitments. The agreement signals an ongoing reliance on industry-led standards as governments grapple with the pace of technological innovation."
    },
    {
      "type": "paragraph",
      "text": "Future developments will likely focus on whether these voluntary guidelines evolve into formal regulatory mandates or if additional corporate signatories will adopt the pact. Analysts will continue to monitor the intersection of political strategy and artificial intelligence governance."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Trump, top AI leaders agree to voluntary ​AI ​standards - Axios"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "hijacking-scare-on-dubai-tel-aviv-flight-emergency-code-triggered-plane-diverted-1790752686",
  "category": "india",
  "headline": "Hijacking scare on Dubai-Tel Aviv flight; emergency code triggered, plane diverted to Saudi Arabia - The Times of India",
  "dek": "A Flydubai flight en route to Tel Aviv was diverted to Saudi Arabia after triggering an emergency code.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T07:18:06Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790752684_7065.png",
  "imageAlt": "Hijacking scare on Dubai-Tel Aviv flight; emergency code triggered, plane diverted to Saudi Arabia - The Times of India",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "A Flydubai aircraft traveling on a route from Dubai to Tel Aviv was forced to divert to Saudi Arabia following the activation of an emergency code."
    },
    {
      "type": "paragraph",
      "text": "The flight triggered a hijack-related code while en route, prompting immediate security protocols and an unplanned diversion."
    },
    {
      "type": "paragraph",
      "text": "Despite the initial alarm raised by the emergency signal, subsequent updates have explicitly ruled out any actual hijacking event."
    },
    {
      "type": "paragraph",
      "text": "The diverted flight is expected to land safely in Saudi Arabia within minutes as authorities manage the operational response."
    },
    {
      "type": "paragraph",
      "text": "Aviation and regional transport authorities are continuing to oversee the situation to ensure passenger safety and clarity on the emergency activation."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Hijacking scare on Dubai-Tel Aviv flight; emergency code triggered, plane diverted to Saudi Arabia - The Times of India"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "trump-signs-executive-order-rebranding-ai-as-super-intelligence-as-tech-titans-i-1790748341",
  "category": "world",
  "headline": "Trump signs executive order rebranding AI as 'Super Intelligence' as tech titans ink separate SI accord - Fox Business",
  "dek": "US President Trump signs executive order rebranding artificial intelligence as Super Intelligence alongside a voluntary industry safety pact.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T06:05:41Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790748339_6769.png",
  "imageAlt": "Trump signs executive order rebranding AI as 'Super Intelligence' as tech titans ink separate SI accord - Fox Business",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "United States President Trump has signed a new executive order officially rebranding artificial intelligence as \"Super Intelligence,\" according to recent reports. The directive alters the official terminology used by the administration to describe advanced computing and automated systems."
    },
    {
      "type": "paragraph",
      "text": "Simultaneously, prominent technology executives have signed a separate voluntary accord. This agreement involves pledges by industry leaders to maintain robust safeguards surrounding the deployment and development of these advanced systems."
    },
    {
      "type": "paragraph",
      "text": "The policy announcements come at a time of heightened political scrutiny. Public polling data indicates shifting voter sentiment regarding technology governance and oversight as a key issue for the administration."
    },
    {
      "type": "paragraph",
      "text": "While the executive order renames the technology and tech bosses have committed to voluntary oversight measures, analysts are watching to see how these developments affect broader regulatory compliance. The interaction between government directives and industry-led pacts remains a critical area for technology markets."
    },
    {
      "type": "paragraph",
      "text": "The long-term impact of the newly signed accord on international technology standards and domestic policy continues to unfold. Observers will monitor upcoming legislative and administrative actions to assess whether voluntary safeguards evolve into mandatory requirements."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Trump signs executive order rebranding AI as 'Super Intelligence' as tech titans ink separate SI accord - Fox Business"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "supreme-court-allows-third-country-deportations-to-resume-for-now-the-washington-1790743643",
  "category": "world",
  "headline": "Supreme Court allows ‘third country’ deportations to resume for now - The Washington Post",
  "dek": "The U.S. Supreme Court has permitted the implementation of controversial third-country deportation policies to move forward temporarily.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T04:47:23Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790743642_4906.png",
  "imageAlt": "Supreme Court allows ‘third country’ deportations to resume for now - The Washington Post",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The United States Supreme Court has issued a ruling allowing the administration's \"third country\" deportations to resume for the time being, according to recent legal updates."
    },
    {
      "type": "paragraph",
      "text": "The decision enables federal authorities to proceed with deporting migrants to nations other than their countries of origin while broader legal challenges play out in the courts."
    },
    {
      "type": "paragraph",
      "text": "This policy shift forms a significant component of broader immigration enforcement measures pursued by the administration."
    },
    {
      "type": "paragraph",
      "text": "Legal scholars and immigration advocates continue to monitor the implications of the high court's procedural action on pending litigation."
    },
    {
      "type": "paragraph",
      "text": "Further developments are expected in lower courts as the fundamental legal questions surrounding the third-country deportation framework are formally addressed."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Supreme Court allows ‘third country’ deportations to resume for now - The Washington Post"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "gyanesh-kumar-indias-election-chief-at-the-centre-of-a-growing-political-storm-b-1790734147",
  "category": "india",
  "headline": "Gyanesh Kumar: India's election chief at the centre of a growing political storm - BBC",
  "dek": "India's election chief Gyanesh Kumar faces intense political pressure as the opposition demands resignations over voter roll deletions.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T02:09:07Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790734146_6361.png",
  "imageAlt": "Gyanesh Kumar: India's election chief at the centre of a growing political storm - BBC",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "India's Chief Election Commissioner, Gyanesh Kumar, has become the central figure in a rapidly intensifying political storm concerning the Special Intensive Revision (SIR) of voter lists."
    },
    {
      "type": "paragraph",
      "text": "The controversy escalated as the opposition Congress party widened its calls for Kumar's resignation, extending accountability demands to Prime Minister Narendra Modi and Home Minister Amit Shah."
    },
    {
      "type": "paragraph",
      "text": "Senior opposition leader Rahul Gandhi reportedly posed uncomfortable questions regarding the SIR deletions during a recent party meeting, drawing sharp focus to the election administration."
    },
    {
      "type": "paragraph",
      "text": "The mounting political confrontation underscores deep tensions surrounding electoral processes and institutional oversight in the country."
    },
    {
      "type": "paragraph",
      "text": "Legal scrutiny is set to intensify next week as the Supreme Court prepares to hear a petition seeking the suspension of CEC Gyanesh Kumar."
    },
    {
      "type": "paragraph",
      "text": "Observers will be closely monitoring the upcoming Supreme Court proceedings and the government's response as the political standoff continues to develop."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Gyanesh Kumar: India's election chief at the centre of a growing political storm - BBC"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "supreme-court-agrees-to-list-next-week-plea-to-suspend-cec-gyanesh-kumar-from-of-1790731301",
  "category": "india",
  "headline": "Supreme Court agrees to list next week plea to suspend CEC Gyanesh Kumar from office - The Hindu",
  "dek": "The Supreme Court will hear a petition next week seeking the suspension of CEC Gyanesh Kumar.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T01:21:41Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790731299_2576.png",
  "imageAlt": "Supreme Court agrees to list next week plea to suspend CEC Gyanesh Kumar from office - The Hindu",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Supreme Court of India has officially agreed to list a petition next week that seeks the suspension of Chief Election Commissioner (CEC) Gyanesh Kumar from office."
    },
    {
      "type": "paragraph",
      "text": "The legal plea places the head of the election commission directly under judicial scrutiny, marking a significant development in ongoing institutional and political discourse."
    },
    {
      "type": "paragraph",
      "text": "The timing of the Supreme Court's decision coincides with heightened political activity regarding SIR and related opposition strategies, with the INDIA bloc scheduling meetings to finalize anti-SIR agitation plans."
    },
    {
      "type": "paragraph",
      "text": "Such high-profile petitions involving constitutional authorities carry vital policy implications for governance, administrative stability, and regulatory oversight in the country."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders, legal analysts, and political parties will closely watch the apex court's proceedings next week for any formal notices or initial directives regarding the petition."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Supreme Court agrees to list next week plea to suspend CEC Gyanesh Kumar from office - The Hindu"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "jack-smith-clashes-with-senators-over-trump-probes-says-he-will-not-be-silenced-1790729296",
  "category": "world",
  "headline": "Jack Smith clashes with senators over Trump probes, says he will not be silenced - The Washington Post",
  "dek": "Special Counsel Jack Smith defended the integrity of federal probes against Donald Trump during a tense congressional hearing.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T00:48:16Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790729295_1090.png",
  "imageAlt": "Jack Smith clashes with senators over Trump probes, says he will not be silenced - The Washington Post",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Special Counsel Jack Smith engaged in a sharp clash with US senators during a highly anticipated congressional hearing focused on federal probes involving former President Donald Trump."
    },
    {
      "type": "paragraph",
      "text": "Lawmakers on Capitol Hill pressed the special counsel regarding the trajectory and oversight of the ongoing investigations, leading to contentious exchanges in the committee room."
    },
    {
      "type": "paragraph",
      "text": "During the proceedings, Smith firmly stated that he will not be silenced, pushing back against aggressive questioning from Republican senators."
    },
    {
      "type": "paragraph",
      "text": "The hearing highlighted the intense political polarization surrounding the federal prosecutions, with debates touching upon investigative procedures and institutional independence."
    },
    {
      "type": "paragraph",
      "text": "Observers note that the sharp confrontation underscores the broader legal and political stakes involved as federal authorities continue their scrutiny."
    },
    {
      "type": "paragraph",
      "text": "Markets and legal experts will closely watch upcoming legislative and judicial developments to gauge the potential fallout for the high-profile probes."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Jack Smith clashes with senators over Trump probes, says he will not be silenced - The Washington Post"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "the-week-that-was-in-international-affairs-zelenskyys-peace-bid-rejected-iran-ir-1790726663",
  "category": "geopolitics",
  "headline": "The week that was in international affairs : Zelenskyy's peace bid rejected, Iran-Iraq war escalates, Wor - The Times of India",
  "dek": "International affairs see diplomatic setbacks with a rejected peace bid and escalating regional conflict.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-30T00:04:23Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790726661_1153.png",
  "imageAlt": "The week that was in international affairs : Zelenskyy's peace bid rejected, Iran-Iraq war escalates, Wor - The Times of India",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "geopolitics"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "International affairs experienced a turbulent week marked by significant diplomatic setbacks and expanding regional conflict."
    },
    {
      "type": "paragraph",
      "text": "Ukrainian President Volodymyr Zelenskyy's recent peace bid was formally rejected, stalling ongoing diplomatic efforts to resolve the conflict."
    },
    {
      "type": "paragraph",
      "text": "Simultaneously, the escalation of the Iran-Iraq conflict introduced new layers of instability to regional security and global stability."
    },
    {
      "type": "paragraph",
      "text": "Markets and international policymakers are closely monitoring these developments for potential impacts on global trade, security, and economic stability."
    },
    {
      "type": "paragraph",
      "text": "The confluence of these geopolitical events underscores the fragility of current international diplomatic frameworks."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders across global sectors await further developments as international bodies deliberate on potential responses to the escalating crises."
    },
    {
      "type": "paragraph",
      "text": "Future diplomatic engagements and security updates will dictate the trajectory of international relations in the coming weeks."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "The week that was in international affairs : Zelenskyy's peace bid rejected, Iran-Iraq war escalates, Wor - The Times of India"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "republicans-wanted-jack-smith-to-give-them-a-smoking-gun-they-got-a-gaffe-instea-1790724666",
  "category": "world",
  "headline": "Republicans wanted Jack Smith to give them a smoking gun. They got a gaffe instead. - politico.com",
  "dek": "Former special counsel Jack Smith defended Trump probes during a contentious Senate hearing marked by sharp Republican criticism.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T23:31:06Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790724664_7731.png",
  "imageAlt": "Republicans wanted Jack Smith to give them a smoking gun. They got a gaffe instead. - politico.com",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Former special counsel Jack Smith defended his investigations into Donald Trump during a tense Senate hearing that saw heated clashes with Republican lawmakers."
    },
    {
      "type": "paragraph",
      "text": "The proceedings featured sharp attacks from GOP members, with one senator telling Smith that his actions made them want to throw up."
    },
    {
      "type": "paragraph",
      "text": "Despite the hostile reception from Republican questioners, Smith maintained a confident demeanor while defending the integrity of the probes."
    },
    {
      "type": "paragraph",
      "text": "The hearing also included a notable gaffe, highlighted by Senator Eric Schmitt’s basketball mixup during questioning."
    },
    {
      "type": "paragraph",
      "text": "The contentious session underscored the deep political divisions that continue to surround the federal investigations involving the former president."
    },
    {
      "type": "paragraph",
      "text": "Analysts are watching closely to see how the exchanges impact ongoing legislative oversight and political rhetoric surrounding the special counsel's work."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Republicans wanted Jack Smith to give them a smoking gun. They got a gaffe instead. - politico.com"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "jawan-opens-fire-kills-4-colleagues-including-an-officer-in-jks-kathua-ndtv-1790722906",
  "category": "india",
  "headline": "Jawan Opens Fire, Kills 4 Colleagues, Including An Officer In J&K's Kathua - NDTV",
  "dek": "Four CISF personnel, including an officer, were killed after a jawan opened fire in J&K's Kathua.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T23:01:46Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790722904_9891.png",
  "imageAlt": "Jawan Opens Fire, Kills 4 Colleagues, Including An Officer In J&K's Kathua - NDTV",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "A tragic shooting incident occurred in Jammu and Kashmir's Kathua district involving personnel from the Central Industrial Security Force (CISF)."
    },
    {
      "type": "paragraph",
      "text": "According to initial reports, a CISF constable opened fire on his colleagues, resulting in multiple casualties."
    },
    {
      "type": "paragraph",
      "text": "The incident left four CISF personnel dead, including an officer holding the rank of assistant commandant."
    },
    {
      "type": "paragraph",
      "text": "The confrontation highlights critical internal security challenges within armed formations deployed in sensitive regions."
    },
    {
      "type": "paragraph",
      "text": "Authorities are expected to conduct a thorough inquiry to uncover the underlying cause of the fatal dispute."
    },
    {
      "type": "paragraph",
      "text": "Further updates regarding the investigation and official administrative responses will be monitored as details emerge."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Jawan Opens Fire, Kills 4 Colleagues, Including An Officer In J&K's Kathua - NDTV"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "openai-cancels-release-of-ai-model-gpt-61-astra-citing-safety-concerns-al-jazeer-1790720927",
  "category": "technology",
  "headline": "OpenAI cancels release of AI model GPT-6.1 Astra, citing safety concerns - Al Jazeera",
  "dek": "OpenAI halts GPT-6.1 Astra deployment to address safety priorities.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T22:28:47Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790720924_5507.png",
  "imageAlt": "OpenAI cancels release of AI model GPT-6.1 Astra, citing safety concerns - Al Jazeera",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "technology"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "OpenAI has officially canceled the scheduled release of its GPT-6.1 Astra artificial intelligence model, according to reports from Al Jazeera. The decision to halt the rollout was driven directly by safety concerns surrounding the system's capabilities."
    },
    {
      "type": "paragraph",
      "text": "The cancellation highlights the delicate balance technology firms must maintain between accelerating innovation and ensuring rigorous safety compliance. Such pauses can impact enterprise adoption strategies globally, including within technology markets in India."
    },
    {
      "type": "paragraph",
      "text": "As organizations increasingly integrate advanced language models into their operational workflows, safety benchmarks have become a primary focal point for developers and regulatory bodies alike. The decision by OpenAI underscores the growing caution within the artificial intelligence sector."
    },
    {
      "type": "paragraph",
      "text": "Industry analysts will closely observe how this cancellation affects future product roadmaps and testing methodologies across the artificial intelligence landscape. Stakeholders await further updates regarding when or if the model will be reconsidered for future deployment."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "OpenAI cancels release of AI model GPT-6.1 Astra, citing safety concerns - Al Jazeera"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "trump-says-us-will-win-iran-war-very-soon-reuters-1790717549",
  "category": "india",
  "headline": "Trump says US will win Iran war 'very soon' - Reuters",
  "dek": "US President Trump predicts a swift victory in a potential conflict with Iran alongside new sanctions.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T21:32:29Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790717547_9277.png",
  "imageAlt": "Trump says US will win Iran war 'very soon' - Reuters",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "United States President Donald Trump has declared that the US will win a war with Iran \"very soon,\" doubling down on claims that Washington will secure victory one way or another as diplomatic efforts stall."
    },
    {
      "type": "paragraph",
      "text": "The pronouncement coincides with the implementation of new US economic sanctions targeting Iran after recent bilateral talks yielded no breakthrough."
    },
    {
      "type": "paragraph",
      "text": "Alongside his statements regarding the conflict, Trump asserted that domestic gas prices would tumble as a consequence of developments."
    },
    {
      "type": "paragraph",
      "text": "The escalating geopolitical standoff carries critical implications for international energy markets, with potential disruptions threatening to impact crude oil prices and inflation metrics globally."
    },
    {
      "type": "paragraph",
      "text": "For major energy-importing economies like India, sustained volatility in the Middle East directly influences domestic fuel pricing, trade stability, and economic import bills."
    },
    {
      "type": "paragraph",
      "text": "Observers and market participants remain focused on diplomatic uncertainties, sanction enforcement, and further official announcements from Washington regarding the situation."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Trump says US will win Iran war 'very soon' - Reuters"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "supreme-court-allows-trumps-third-country-deportation-policy-nbc-news-1790715949",
  "category": "world",
  "headline": "Supreme Court allows Trump’s ‘third country’ deportation policy - NBC News",
  "dek": "The U.S. Supreme Court has permitted the implementation of rapid deportations to unrelated third countries.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T21:05:49Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790715946_3164.png",
  "imageAlt": "Supreme Court allows Trump’s ‘third country’ deportation policy - NBC News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The U.S. Supreme Court has allowed the Trump administration's controversial \"third country\" deportation policy to proceed, at least temporarily. This decision enables authorities to execute rapid deportations of individuals to nations with which they have no prior connection or personal ties."
    },
    {
      "type": "paragraph",
      "text": "The ruling reverses or stays lower restrictions, granting the administration a notable legal advantage in its pursuit of sweeping immigration enforcement measures. Human rights organizations and legal defenders have consistently opposed the policy, arguing it places vulnerable individuals at risk in unfamiliar jurisdictions."
    },
    {
      "type": "paragraph",
      "text": "The policy fundamentally alters standard removal protocols by bypassing traditional home-country deportation channels. Critics and advocacy groups maintain that sending migrants to third-party nations violates established international and domestic legal protections regarding asylum."
    },
    {
      "type": "paragraph",
      "text": "For policy analysts and stakeholders, the decision underscores the ongoing legal battles surrounding executive immigration authority in federal courts. The outcome has immediate ramifications for federal immigration enforcement agencies tasked with operationalizing the rapid removal protocols."
    },
    {
      "type": "paragraph",
      "text": "As legal challenges continue to wind through the judicial system, the long-term enforceability of the third-country policy remains uncertain. Observers will closely monitor upcoming lower court hearings to gauge how federal judges respond to the expedited removal framework."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Supreme Court allows Trump’s ‘third country’ deportation policy - NBC News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "rubio-says-incident-at-uk-air-base-raf-fairford-clearly-involved-a-foreign-actor-1790714063",
  "category": "world",
  "headline": "Rubio Says Incident at UK Air Base RAF Fairford ‘Clearly Involved’ a Foreign Actor - The New York Times",
  "dek": "US official states a foreign actor was clearly involved in an incident at the UK air base.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T20:34:23Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790714061_5500.png",
  "imageAlt": "Rubio Says Incident at UK Air Base RAF Fairford ‘Clearly Involved’ a Foreign Actor - The New York Times",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "US official Marco Rubio stated that the recent incident at the UK air base RAF Fairford clearly involved a foreign actor."
    },
    {
      "type": "paragraph",
      "text": "The security breach has triggered multi-agency investigations and raised concerns regarding critical defense installations."
    },
    {
      "type": "paragraph",
      "text": "As part of the emergency response, some evacuated residents have been allowed to return to their homes near the facility."
    },
    {
      "type": "paragraph",
      "text": "UK police confirmed during their ongoing probe that no explosive devices have been found so far at the airbase."
    },
    {
      "type": "paragraph",
      "text": "Meanwhile, the mystery surrounding the event deepened after reported suspects were initially freed."
    },
    {
      "type": "paragraph",
      "text": "Observers and international policy analysts continue to monitor developments surrounding the security incident closely."
    },
    {
      "type": "paragraph",
      "text": "Further official statements are expected as authorities work to clarify the nature of the involvement by the foreign actor."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Rubio Says Incident at UK Air Base RAF Fairford ‘Clearly Involved’ a Foreign Actor - The New York Times"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "jawan-opens-fire-kills-4-colleagues-including-an-officer-in-jks-kathua-ndtv-1790712315",
  "category": "india",
  "headline": "Jawan Opens Fire, Kills 4 Colleagues, Including An Officer In J&K's Kathua - NDTV",
  "dek": "Four CISF personnel, including an officer, were killed in a fratricide shooting in J&K's Kathua district.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T20:05:15Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790712313_4764.png",
  "imageAlt": "Jawan Opens Fire, Kills 4 Colleagues, Including An Officer In J&K's Kathua - NDTV",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Four personnel belonging to the Central Industrial Security Force have been killed in a fratricide incident in Jammu and Kashmir's Kathua district."
    },
    {
      "type": "paragraph",
      "text": "The shooting occurred when a CISF jawan opened fire on his colleagues at the installation."
    },
    {
      "type": "paragraph",
      "text": "The casualties include an officer holding the rank of assistant commandant, alongside three other personnel."
    },
    {
      "type": "paragraph",
      "text": "Details regarding the exact trigger for the shooting remain limited as initial reports emerged from the region."
    },
    {
      "type": "paragraph",
      "text": "Incidents of fratricide within security forces deployed in sensitive regions raise serious concerns regarding internal stress management and troop welfare."
    },
    {
      "type": "paragraph",
      "text": "Further updates from security authorities are awaited as investigations into the Kathua shooting continue."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Jawan Opens Fire, Kills 4 Colleagues, Including An Officer In J&K's Kathua - NDTV"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "indias-ambition-of-becoming-developed-economy-demands-policy-certainty-business-1790710357",
  "category": "economy",
  "headline": "India's ambition of becoming developed economy demands policy certainty - Business Standard",
  "dek": "Policy certainty is vital for India's transition to a developed economy.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T19:32:37Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790710355_5038.png",
  "imageAlt": "India's ambition of becoming developed economy demands policy certainty - Business Standard",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "economy"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "India's strategic ambition of transforming into a developed economy is fundamentally dependent on maintaining strict policy certainty, according to recent analysis from the Business Standard."
    },
    {
      "type": "paragraph",
      "text": "The requirement for stable regulatory frameworks underpins broader national economic development goals and long-term growth projections."
    },
    {
      "type": "paragraph",
      "text": "Consistent policy implementation directly influences investor sentiment, capital allocation, and corporate planning across major industrial sectors."
    },
    {
      "type": "paragraph",
      "text": "A predictable regulatory environment remains essential for mitigating risk and encouraging sustained domestic and foreign investment."
    },
    {
      "type": "paragraph",
      "text": "Policymakers face the ongoing challenge of balancing structural economic reforms with the need for stable, long-term governance."
    },
    {
      "type": "paragraph",
      "text": "Observers will continue tracking legislative and regulatory announcements to gauge the trajectory of India's economic modernization agenda."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "India's ambition of becoming developed economy demands policy certainty - Business Standard"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "rubio-confirms-foreign-actor-involved-in-uk-terror-plot-foxnewscom-1790708125",
  "category": "world",
  "headline": "Rubio confirms 'foreign actor' involved in UK terror plot - foxnews.com",
  "dek": "Rubio confirms a foreign actor was involved in a UK terror plot near a U.S.-run base.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T18:55:25Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790708124_2826.png",
  "imageAlt": "Rubio confirms 'foreign actor' involved in UK terror plot - foxnews.com",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Official statements confirm that a foreign actor was involved in a security terror plot in the United Kingdom. The development has drawn international attention following a security incident near a U.S.-run military installation."
    },
    {
      "type": "paragraph",
      "text": "British police conducted searches of three vehicles in connection with the incident, focusing on security at the site. Authorities subsequently confirmed that no explosives were found in the vans searched near RAF Fairford."
    },
    {
      "type": "paragraph",
      "text": "The confirmation by officials adds a complex geopolitical dimension to the U.S.-run base incident. The involvement of external actors raises questions regarding transnational security threats to critical defense infrastructure."
    },
    {
      "type": "paragraph",
      "text": "Security analysts are closely monitoring the unfolding situation to determine the extent of foreign interference. The incident underscores ongoing vulnerabilities surrounding sensitive military installations in the region."
    },
    {
      "type": "paragraph",
      "text": "Investigations into the alleged terror plot remain ongoing as law enforcement agencies review evidence. Further updates from officials are expected as the security assessment continues."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Rubio confirms 'foreign actor' involved in UK terror plot - foxnews.com"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "stock-market-crash-today-bse-sensex-continues-to-be-in-bear-grip-nifty50-below-2-1790705903",
  "category": "economy",
  "headline": "Stock market crash today: BSE Sensex continues to be in bear grip; Nifty50 below 22,600 - top reasons for - The Times of India",
  "dek": "BSE Sensex stays in a bear grip as Nifty50 drops below the 22,600 mark during today's trading session.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T18:18:23Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790705901_5263.png",
  "imageAlt": "Stock market crash today: BSE Sensex continues to be in bear grip; Nifty50 below 22,600 - top reasons for - The Times of India",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "economy"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Indian stock market experienced a sharp downturn today, with the BSE Sensex continuing to trade under sustained bear pressure."
    },
    {
      "type": "paragraph",
      "text": "Benchmark indices faced heavy selling pressure throughout the session, reflecting a pessimistic sentiment among investors on domestic exchanges."
    },
    {
      "type": "paragraph",
      "text": "The Nifty50 index notably breached a crucial psychological level, falling below the 22,600 threshold amid persistent market weakness."
    },
    {
      "type": "paragraph",
      "text": "Market analysts note that the current correction stems from a combination of prevailing bearish momentum and broader economic factors impacting investor confidence."
    },
    {
      "type": "paragraph",
      "text": "The ongoing market crash has triggered heightened volatility across various sectors listed on Indian bourses, affecting overall portfolio valuations."
    },
    {
      "type": "paragraph",
      "text": "Financial stakeholders and market participants will closely watch subsequent sessions to gauge whether the indices can establish a floor or if the downward trend will persist."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Stock market crash today: BSE Sensex continues to be in bear grip; Nifty50 below 22,600 - top reasons for - The Times of India"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "when-we-go-you-will-come-rahul-gandhi-says-pm-told-him-only-congress-can-defeat-1790704515",
  "category": "india",
  "headline": "‘When we go, you will come’: Rahul Gandhi says PM told him only Congress can defeat BJP - The Hindu",
  "dek": "Rahul Gandhi claims Prime Minister Narendra Modi acknowledged Congress as the sole challenger to the BJP.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T17:55:15Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790704512_4725.png",
  "imageAlt": "‘When we go, you will come’: Rahul Gandhi says PM told him only Congress can defeat BJP - The Hindu",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Senior Congress leader Rahul Gandhi disclosed that Prime Minister Narendra Modi privately remarked to him that only the Congress party is capable of defeating the BJP. The statement was made public during a meeting of the Congress Working Committee, adding a significant political dimension to ongoing debates regarding national leadership and electoral opposition."
    },
    {
      "type": "paragraph",
      "text": "During the high-level party deliberations, Gandhi utilized the context of these reported remarks to frame the Congress as the central force of political resistance. His comments underscore the shifting dynamics between the ruling government and the principal opposition as both sides prepare for future electoral contests and policy battles."
    },
    {
      "type": "paragraph",
      "text": "The CWC meeting also addressed broader allegations and concerns regarding electoral processes, with Gandhi touching upon controversies involving the Election Commission and electronic voting systems. The party leadership emphasized a unified approach to confront perceived institutional challenges while maintaining its identity as a party of resistance."
    },
    {
      "type": "paragraph",
      "text": "Political analysts are examining the implications of Gandhi's public revelation regarding his interaction with the Prime Minister. While the ruling party has not immediately issued a formal counter-statement to this specific claim, the disclosure brings intra-political dynamics into sharp public focus."
    },
    {
      "type": "paragraph",
      "text": "The Congress party's leadership intends to sustain its pressure on the central administration through coordinated opposition efforts. Observers will be watching to see how these strategic alignments develop across the national political landscape in the coming months."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "‘When we go, you will come’: Rahul Gandhi says PM told him only Congress can defeat BJP - The Hindu"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "jonathan-mckinsey-new-york-times-documents-reveal-child-abuse-domestic-violence-1790701093",
  "category": "world",
  "headline": "Jonathan McKinsey, New York Times: Documents reveal child abuse, domestic violence claims of Dublin man shot, killed by in-laws - ABC7 San Francisco",
  "dek": "Documents show child abuse and domestic violence claims involving a New York Times executive shot by his in-laws.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T16:58:13Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790701091_1379.png",
  "imageAlt": "Jonathan McKinsey, New York Times: Documents reveal child abuse, domestic violence claims of Dublin man shot, killed by in-laws - ABC7 San Francisco",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Newly revealed documents detail serious child abuse and domestic violence claims involving a New York Times executive who was shot and killed by his in-laws in a Bay Area park. The fatal confrontation occurred amid a bitter custody dispute, according to reports from outlets including ABC7 San Francisco and Fox News."
    },
    {
      "type": "paragraph",
      "text": "The victim, identified as a New York Times Games executive, had reportedly accused his in-laws of years of abuse as the custody battle escalated. The context surrounding the incident underscores the severe legal and personal stakes often present in contested family law matters."
    },
    {
      "type": "paragraph",
      "text": "Reports indicate the executive's in-laws are accused of carrying out the fatal shooting in a public park in California. The tragedy has drawn intense media scrutiny due to the prominent professional roles involved and the underlying domestic conflict."
    },
    {
      "type": "paragraph",
      "text": "The case brings renewed attention to the potential dangers and volatility surrounding high-conflict custody litigation and domestic abuse allegations. Legal experts and observers are monitoring the ongoing investigation into the shooting and the surrounding family court records."
    },
    {
      "type": "paragraph",
      "text": "As authorities continue their examination of the events leading up to the killing, further details regarding the custody dispute and the abuse allegations are anticipated. The unfolding legal process will determine the formal charges and subsequent proceedings for the individuals involved."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Jonathan McKinsey, New York Times: Documents reveal child abuse, domestic violence claims of Dublin man shot, killed by in-laws - ABC7 San Francisco"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "indian-firm-building-15bn-trump-announced-steel-mill-has-deep-russia-ties-al-jaz-1790699970",
  "category": "india",
  "headline": "Indian firm building $15bn Trump-announced steel mill has deep Russia ties - Al Jazeera",
  "dek": "Al Jazeera reveals deep Russia ties for the Indian firm behind a Trump-announced multi-billion dollar US steel project.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T16:39:30Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790699968_2021.png",
  "imageAlt": "Indian firm building $15bn Trump-announced steel mill has deep Russia ties - Al Jazeera",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Al Jazeera has reported that the Indian firm backing a major Trump-announced steel mill project maintains deep connections to Russia, drawing fresh scrutiny to the cross-border venture."
    },
    {
      "type": "paragraph",
      "text": "The investment, spearheaded by the Essar-backed group led by brothers Shashi and Ravi Ruia, involves an initiative valued between $15 billion and $18 billion to build an integrated US steel company."
    },
    {
      "type": "paragraph",
      "text": "While the project has been hailed as a significant private investment milestone, its underlying corporate architecture includes extensive ties linked to Russia, according to the investigative findings."
    },
    {
      "type": "paragraph",
      "text": "The revelation has also sparked domestic political discussion in India, with the Congress party raising questions regarding private investment trends and government policies."
    },
    {
      "type": "paragraph",
      "text": "As international corporate strategies navigate complex geopolitical landscapes, the intersection of Indian capital, US market expansion, and Russian business ties presents notable policy and compliance considerations."
    },
    {
      "type": "paragraph",
      "text": "Financial analysts and market observers will monitor how regulatory bodies and international stakeholders evaluate the venture moving forward."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Indian firm building $15bn Trump-announced steel mill has deep Russia ties - Al Jazeera"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "why-not-cap-medicines-mrps-at-16-above-retailer-prices-supreme-court-asks-live-l-1790698029",
  "category": "india",
  "headline": "Why Not Cap Medicines' MRPs At 16% Above Retailer Prices? Supreme Court Asks - Live Law",
  "dek": "The Supreme Court questioned steep mark-ups on cancer drugs and essential medicines, calling the pricing disparity \"carnage.\"",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T16:07:09Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790698027_5246.png",
  "imageAlt": "Why Not Cap Medicines' MRPs At 16% Above Retailer Prices? Supreme Court Asks - Live Law",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Supreme Court of India has questioned steep mark-ups on essential medicines, specifically highlighting exorbitant prices charged for cancer drugs. The bench strongly criticized current industry practices, describing the widespread pricing disparity as \"carnage\" while examining the cost burden placed on patients."
    },
    {
      "type": "paragraph",
      "text": "During the proceedings, the court specifically scrutinized corporate hospitals and market pricing structures. Judicial observations noted that corporate healthcare entities often fail to spare patients from inflated costs, prompting the bench to seek structural reforms in retail pricing."
    },
    {
      "type": "paragraph",
      "text": "The court specifically raised the question of why maximum retail prices (MRPs) for medicines should not be capped at 16% above retailer purchase prices. This proposed cap aims to curb excessive profit margins and ensure greater affordability for critical treatments."
    },
    {
      "type": "paragraph",
      "text": "The intervention underscores regulatory and judicial concerns regarding healthcare economics and pharmaceutical pricing transparency in India. High medicine costs have long been a pressing issue for patients, particularly those requiring specialized therapies and oncology drugs."
    },
    {
      "type": "paragraph",
      "text": "Legal experts and industry observers are closely monitoring the proceedings to gauge potential policy shifts. The court's deliberations could pave the way for stricter regulatory caps on pharmaceutical retail margins nationwide."
    },
    {
      "type": "paragraph",
      "text": "Future hearings are expected to address responses from relevant stakeholders and examine feasible frameworks for implementing margin restrictions. The outcome may significantly impact retail drug pricing and healthcare affordability across the country."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Why Not Cap Medicines' MRPs At 16% Above Retailer Prices? Supreme Court Asks - Live Law"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "the-rural-english-villages-around-raf-fairford-at-the-center-of-a-possible-terro-1790694413",
  "category": "world",
  "headline": "The Rural English Villages Around RAF Fairford at the Center of a Possible Terrorist Plot - The New York Times",
  "dek": "Rural English villages near RAF Fairford are at the center of an alleged terrorist plot involving a foreign state.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T15:06:53Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790694411_3817.png",
  "imageAlt": "The Rural English Villages Around RAF Fairford at the Center of a Possible Terrorist Plot - The New York Times",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Rural English villages surrounding the RAF Fairford air base have become the focal point of a security investigation concerning a possible terrorist plot."
    },
    {
      "type": "paragraph",
      "text": "The incident at the United States bomber base in the United Kingdom reportedly involves foreign state actors, according to remarks attributed to officials such as Rubio."
    },
    {
      "type": "paragraph",
      "text": "The unfolding situation has left the small English town near the U.S. bomber base rattled by the severity of the allegations."
    },
    {
      "type": "paragraph",
      "text": "However, legal developments have introduced complexity to the official narrative, with bail granted to the RAF base suspects leading analysts to indicate a current lack of definitive evidence pointing directly to terrorism."
    },
    {
      "type": "paragraph",
      "text": "The intersection of military installations, foreign state actions, and local community safety highlights ongoing geopolitical vulnerabilities in domestic security frameworks."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders and security analysts continue to assess the broader implications of the incident for defense infrastructure and intelligence sharing among allies."
    },
    {
      "type": "paragraph",
      "text": "Further developments will depend on the progression of legal proceedings and any subsequent official clarifications regarding the nature of the alleged plot."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "The Rural English Villages Around RAF Fairford at the Center of a Possible Terrorist Plot - The New York Times"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "non-cognisable-report-filed-against-delhi-minister-parvesh-verma-over-slap-incid-1790692947",
  "category": "india",
  "headline": "Non-cognisable report filed against Delhi minister Parvesh Verma over slap incident | India News - Hindustan Times",
  "dek": "Legal proceedings initiated following an altercation involving a Delhi minister and police personnel.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T14:42:27Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790692944_2822.png",
  "imageAlt": "Non-cognisable report filed against Delhi minister Parvesh Verma over slap incident | India News - Hindustan Times",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "A non-cognisable report has been formally filed against Delhi minister Parvesh Verma in connection with a reported slap incident in the national capital. The legal development marks an escalation in ongoing tensions involving political figures and law enforcement authorities in Delhi."
    },
    {
      "type": "paragraph",
      "text": "In a parallel development, an FIR has been registered against AAP leaders Saurabh Bharadwaj and Jarnail Singh. The case against the opposition politicians stems from an alleged assault on a Delhi Police head constable."
    },
    {
      "type": "paragraph",
      "text": "These simultaneous legal actions underscore a deteriorating environment of political confrontation and public order challenges in the region. Law enforcement agencies are examining the respective complaints filed by the involved parties to determine subsequent procedural steps."
    },
    {
      "type": "paragraph",
      "text": "The involvement of high-profile political figures and police personnel has drawn significant public and institutional attention. Authorities are expected to review available evidence and testimonies to establish the sequence of events leading to both incidents."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders and political analysts will closely track the progress of these investigations for potential impacts on governance and inter-party dynamics. Further updates from law enforcement agencies are anticipated as the legal process moves forward."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Non-cognisable report filed against Delhi minister Parvesh Verma over slap incident | India News - Hindustan Times"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "stock-market-crash-today-bse-sensex-crashes-over-1100-points-investors-lose-rs-8-1790690815",
  "category": "economy",
  "headline": "Stock market crash today: BSE Sensex crashes over 1,100 points, investors lose Rs 8.92 lakh crore - top r - The Times of India",
  "dek": "The BSE Sensex plummeted over 1,100 points in a sharp session, eroding Rs 8.92 lakh crore in investor wealth.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T14:06:55Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790690812_9785.png",
  "imageAlt": "Stock market crash today: BSE Sensex crashes over 1,100 points, investors lose Rs 8.92 lakh crore - top r - The Times of India",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "economy"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Indian equity markets experienced a severe downturn during today's trading session, driven by heavy selling pressure across multiple sectors. The benchmark BSE Sensex crashed by more than 1,100 points, reflecting deep apprehension among market participants."
    },
    {
      "type": "paragraph",
      "text": "The sharp correction resulted in an immediate erosion of investor wealth, with total market capitalization dropping by Rs 8.92 lakh crore. Such substantial losses in a single session highlight the heightened volatility currently affecting domestic bourses."
    },
    {
      "type": "paragraph",
      "text": "Market observers note that the steep decline reflects a combination of domestic factors and cautious global sentiment. Investors appear to be reducing their exposure to risk assets amid prevailing economic uncertainties."
    },
    {
      "type": "paragraph",
      "text": "The widespread nature of the sell-off impacted major sectoral indices, leading to broad-based losses rather than isolated dips. Analysts emphasize that such aggressive downward movements require close tracking of institutional trading patterns."
    },
    {
      "type": "paragraph",
      "text": "As trading concludes for the day, attention shifts toward how regulatory bodies, institutional investors, and corporate stakeholders will respond. Market participants will be closely watching upcoming sessions for signs of stabilization or further correction."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Stock market crash today: BSE Sensex crashes over 1,100 points, investors lose Rs 8.92 lakh crore - top r - The Times of India"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "supreme-court-agrees-to-list-next-week-plea-to-suspend-cec-gyanesh-kumar-from-of-1790687658",
  "category": "india",
  "headline": "Supreme Court agrees to list next week plea to suspend CEC Gyanesh Kumar from office - The Hindu",
  "dek": "The Supreme Court will hear a plea next week seeking the suspension of Chief Election Commissioner Gyanesh Kumar.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T13:14:18Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790687656_6816.png",
  "imageAlt": "Supreme Court agrees to list next week plea to suspend CEC Gyanesh Kumar from office - The Hindu",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Supreme Court of India has agreed to list a petition next week seeking the suspension of Chief Election Commissioner Gyanesh Kumar from his official position. The legal move places the nation's premier poll panel directly under judicial scrutiny amid heightened political tensions."
    },
    {
      "type": "paragraph",
      "text": "The development coincides with sharp political friction surrounding the election commission's leadership and administrative conduct. Opposition leaders have stepped up their rhetoric against the poll body in recent public forums and party meetings."
    },
    {
      "type": "paragraph",
      "text": "During a recent Congress meeting, party leader M. Kharge publicly criticized the poll panel chief, referring to him as a 'puppet' and outlining five specific demands regarding electoral oversight. Such high-level political friction underscores the growing sensitivity surrounding independent constitutional offices in India."
    },
    {
      "type": "paragraph",
      "text": "The Supreme Court's decision to list the suspension plea next week brings institutional governance and accountability procedures into sharp focus. Markets, policymakers, and legal observers will closely monitor the court's preliminary observations for any potential impact on institutional stability."
    },
    {
      "type": "paragraph",
      "text": "As the matter proceeds to a hearing, stakeholders await the bench's decision on whether to admit the petition for a detailed examination. The upcoming proceedings are expected to set the tone for judicial oversight of election administration officials moving forward."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Supreme Court agrees to list next week plea to suspend CEC Gyanesh Kumar from office - The Hindu"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "ksp-trooper-shot-killed-in-line-of-duty-suspect-charged-with-murder-wlwtcom-1790681610",
  "category": "world",
  "headline": "KSP: Trooper shot, killed in line of duty; suspect charged with murder - wlwt.com",
  "dek": "A Kentucky State Police trooper was shot and killed during a traffic stop, leading to a manhunt and a murder charge.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T11:33:30Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790681608_2156.png",
  "imageAlt": "KSP: Trooper shot, killed in line of duty; suspect charged with murder - wlwt.com",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Kentucky State Police have confirmed that a trooper was shot and killed in the line of duty during an interstate traffic stop. The fatal shooting triggered an intensive law enforcement response and manhunt across the region."
    },
    {
      "type": "paragraph",
      "text": "The fallen officer has been identified as a Kentucky State Police trooper and a father of three children. The incident occurred during a routine traffic stop on an interstate."
    },
    {
      "type": "paragraph",
      "text": "Following the shooting, a suspect was apprehended following a manhunt. Law enforcement officials confirmed that the suspect has now been formally charged with murder in connection with the trooper's death."
    },
    {
      "type": "paragraph",
      "text": "In the wake of the incident, solemn honors were rendered as the trooper's remains were transported and escorted to the state medical examiner's office located in Louisville."
    },
    {
      "type": "paragraph",
      "text": "The investigation into the circumstances surrounding the interstate shooting remains active as local and state authorities gather further evidence and process the crime scene."
    },
    {
      "type": "paragraph",
      "text": "Legal proceedings against the charged suspect are expected to advance as the judicial system addresses the murder charge filed by prosecutors following the manhunt and capture."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "KSP: Trooper shot, killed in line of duty; suspect charged with murder - wlwt.com"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "new-york-times-executive-fatally-shot-by-elderly-in-laws-police-say-bbc-1790679387",
  "category": "world",
  "headline": "New York Times executive fatally shot by elderly in-laws, police say - BBC",
  "dek": "A New York Times executive was fatally shot by his elderly in-laws in a Bay Area park, police say.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T10:56:27Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790679385_7362.png",
  "imageAlt": "New York Times executive fatally shot by elderly in-laws, police say - BBC",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "A New York Times executive has been fatally shot by his elderly in-laws in a Bay Area park, according to statements released by law enforcement authorities. The incident has drawn widespread attention due to the high-profile nature of the victim's professional affiliation."
    },
    {
      "type": "paragraph",
      "text": "Police have accused the elderly couple of killing their son-in-law during the confrontation at the California location. Details surrounding the exact sequence of events at the park remain under active investigation by local authorities."
    },
    {
      "type": "paragraph",
      "text": "Court documents and public records related to the parties involved reveal prior claims of domestic violence and child abuse. These background revelations are currently being reviewed by investigators to establish a motive for the fatal shooting."
    },
    {
      "type": "paragraph",
      "text": "The tragic event highlights ongoing concerns regarding domestic disputes and the escalation of family conflicts into lethal violence. Analysts note that such incidents underscore the critical need for early intervention in high-conflict domestic situations."
    },
    {
      "type": "paragraph",
      "text": "As the legal process moves forward, further disclosures from police and court filings are anticipated. Observers will be watching closely to see how the judicial system handles the charges against the elderly suspects in this complex case."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "New York Times executive fatally shot by elderly in-laws, police say - BBC"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "a-global-rupture-carney-calls-for-canada-eu-unity-before-g7-summit-al-jazeera-1790677111",
  "category": "world",
  "headline": "‘A global rupture’: Carney calls for Canada-EU unity before G7 summit - Al Jazeera",
  "dek": "Carney urges Canada-EU alignment to address a growing global rupture ahead of the G7 summit.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T10:18:31Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790677109_4369.png",
  "imageAlt": "‘A global rupture’: Carney calls for Canada-EU unity before G7 summit - Al Jazeera",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Ahead of the upcoming G7 summit, Carney has called for urgent unity between Canada and the European Union."
    },
    {
      "type": "paragraph",
      "text": "The high-level appeal emphasizes the emergence of what has been characterized as a profound global rupture in international affairs."
    },
    {
      "type": "paragraph",
      "text": "Such diplomatic overtures reflect mounting concerns among allied nations regarding multilateral stability and economic resilience."
    },
    {
      "type": "paragraph",
      "text": "Cohesion between Canada and European partners is seen as critical for navigating complex geopolitical challenges at the summit."
    },
    {
      "type": "paragraph",
      "text": "Policy makers and global markets will monitor how these bilateral discussions influence broader multilateral negotiations."
    },
    {
      "type": "paragraph",
      "text": "Future developments hinge on whether allied leaders can forge a unified stance on pressing international issues during the meetings."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "‘A global rupture’: Carney calls for Canada-EU unity before G7 summit - Al Jazeera"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "states-stumped-as-demography-panel-seeks-religion-wise-data-on-vehicles-schools-1790675134",
  "category": "india",
  "headline": "States stumped as demography panel seeks religion-wise data on vehicles, schools, voters - The Hindu",
  "dek": "State authorities are stumped as a central demography panel requests 15 years of religion-wise data on vehicles, schools, and voters.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T09:45:34Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790675133_1245.png",
  "imageAlt": "States stumped as demography panel seeks religion-wise data on vehicles, schools, voters - The Hindu",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "State administrations across the country have reportedly been left stumped following a directive from a central demography panel requesting comprehensive data classified by religion."
    },
    {
      "type": "paragraph",
      "text": "According to recent reports, the panel is specifically seeking a 15-year accumulation of religion-wise statistics covering various public and administrative sectors."
    },
    {
      "type": "paragraph",
      "text": "The requested data metrics reportedly encompass sensitive areas including vehicle registrations, educational institutions, and voter lists."
    },
    {
      "type": "paragraph",
      "text": "The directive has immediately sparked sharp political reactions, with opposition figures from the Congress party condemning the move as a patently diabolical agenda."
    },
    {
      "type": "paragraph",
      "text": "Critics and regional officials are weighing the implications of such broad demographic data collection across key socio-economic and civic categories."
    },
    {
      "type": "paragraph",
      "text": "As states deliberate on how to address the unexpected mandate, political scrutiny over the panel's objectives and methods continues to intensify."
    },
    {
      "type": "paragraph",
      "text": "Further developments are expected as state governments determine their official responses and navigate the administrative requirements of the panel's request."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "States stumped as demography panel seeks religion-wise data on vehicles, schools, voters - The Hindu"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "eci-row-supreme-court-to-hear-next-week-plea-against-cec-gyanesh-kumar-sir-decis-1790671475",
  "category": "india",
  "headline": "ECI Row : Supreme Court To Hear Next Week Plea Against CEC Gyanesh Kumar & SIR Decisions - Live Law",
  "dek": "Supreme Court schedules hearing next week on a petition seeking to suspend CEC Gyanesh Kumar over SIR decisions.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T08:44:35Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790671473_1960.png",
  "imageAlt": "ECI Row : Supreme Court To Hear Next Week Plea Against CEC Gyanesh Kumar & SIR Decisions - Live Law",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Supreme Court of India has agreed to list for hearing next week a petition seeking the suspension of Chief Election Commissioner Gyanesh Kumar from office. The legal challenge specifically targets decisions made by the CEC alongside recent SIR measures implemented by the poll panel."
    },
    {
      "type": "paragraph",
      "text": "The judicial scrutiny comes amid heightened political friction between the opposition and election authorities. Congress leader M Kharge recently criticized the poll panel chief during a party meet, labeling him a puppet while outlining five distinct demands."
    },
    {
      "type": "paragraph",
      "text": "Among the central demands raised by the opposition is a call for the full disclosure of all electoral roll changes. The broader controversy highlights growing tensions surrounding transparency, administrative procedures, and the oversight of electoral processes in India."
    },
    {
      "type": "paragraph",
      "text": "The upcoming court proceedings are expected to examine the legal arguments surrounding the petition and the disputed decisions. Observers and political stakeholders will monitor the scheduled hearing for potential implications on the functioning of the Election Commission of India."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "ECI Row : Supreme Court To Hear Next Week Plea Against CEC Gyanesh Kumar & SIR Decisions - Live Law"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "mediators-are-working-to-broker-a-us-iran-deal-but-major-hurdles-remain-ap-news-1790666792",
  "category": "world",
  "headline": "Mediators are working to broker a US-Iran deal, but major hurdles remain - AP News",
  "dek": "Mediators are working to broker a US-Iran deal as Mideast oil exports reach wartime highs.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T07:26:32Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790666790_3713.png",
  "imageAlt": "Mediators are working to broker a US-Iran deal, but major hurdles remain - AP News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "International mediators are actively working to broker a diplomatic agreement between the United States and Iran in a renewed effort to end the ongoing conflict, though significant hurdles remain in the negotiation process."
    },
    {
      "type": "paragraph",
      "text": "The diplomatic push involves separate talks held by both the US and Iran with international mediators, marking a crucial juncture in ongoing regional tensions."
    },
    {
      "type": "paragraph",
      "text": "The negotiations coincide with Middle East oil exports reaching a wartime high, placing intense focus on global energy security and supply chain stability."
    },
    {
      "type": "paragraph",
      "text": "Complicating the diplomatic efforts, Iran has issued warnings of a severe conflict following the rejection of a peace proposal by Donald Trump, while also facing mounting pressure to make concessions regarding its nuclear program."
    },
    {
      "type": "paragraph",
      "text": "The outcome of these mediator-led talks carries significant implications for global energy markets, shipping routes, and international diplomatic relations as stakeholders assess the risks of further escalation."
    },
    {
      "type": "paragraph",
      "text": "Observers and market participants will continue to monitor the diplomatic channels closely to determine whether the remaining hurdles can be overcome to achieve a lasting resolution."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Mediators are working to broker a US-Iran deal, but major hurdles remain - AP News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "gold-silver-rate-today-live-updates-gold-tumbles-over-2-mcx-plunges-rs-3171-as-g-1790662931",
  "category": "india",
  "headline": "Gold, Silver rate today live updates: Gold tumbles over 2%; MCX plunges Rs 3,171 as global prices slide - The Times of India",
  "dek": "Gold tumbles over 2% and MCX plunges Rs 3,171 as global prices slide.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T06:22:11Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790662930_9683.png",
  "imageAlt": "Gold, Silver rate today live updates: Gold tumbles over 2%; MCX plunges Rs 3,171 as global prices slide - The Times of India",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Precious metals experienced a sharp correction during today's trading session, driven by declining international bullion prices."
    },
    {
      "type": "paragraph",
      "text": "Gold tumbled by more than 2 percent in global markets, triggering a swift downward adjustment across domestic trading platforms."
    },
    {
      "type": "paragraph",
      "text": "Reflecting the international sell-off, the Multi Commodity Exchange recorded a substantial plunge of Rs 3,171 in domestic gold valuations."
    },
    {
      "type": "paragraph",
      "text": "The sharp drop highlights the direct correlation between domestic commodity pricing and broader macroeconomic trends affecting global bullion."
    },
    {
      "type": "paragraph",
      "text": "Traders and market analysts are closely observing international price trajectories to gauge near-term direction for precious metals."
    },
    {
      "type": "paragraph",
      "text": "Further updates are expected as global markets react to ongoing economic shifts and currency fluctuations."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Gold, Silver rate today live updates: Gold tumbles over 2%; MCX plunges Rs 3,171 as global prices slide - The Times of India"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "suo-motu-case-on-delhi-rapes-supreme-court-issues-directions-to-make-public-spac-1790657726",
  "category": "india",
  "headline": "Suo Motu Case On Delhi Rapes | Supreme Court Issues Directions To Make Public Spaces Safer; Orders Safety Audit Within 4 Weeks - Live Law",
  "dek": "Supreme Court orders Delhi safety audit within four weeks after taking suo motu cognisance of recent rapes.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T04:55:26Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790657723_4862.png",
  "imageAlt": "Suo Motu Case On Delhi Rapes | Supreme Court Issues Directions To Make Public Spaces Safer; Orders Safety Audit Within 4 Weeks - Live Law",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Supreme Court of India has initiated suo motu proceedings following recent sexual assault cases in Delhi, addressing mounting concerns over public safety and law enforcement efficacy."
    },
    {
      "type": "paragraph",
      "text": "In its directives, the apex court formally declared that both police and the government have failed to ensure adequate public safety in the national capital."
    },
    {
      "type": "paragraph",
      "text": "As part of the court-mandated measures, authorities have been ordered to conduct a comprehensive safety audit of all public spaces within four weeks."
    },
    {
      "type": "paragraph",
      "text": "The judicial intervention aims to compel systemic administrative and policing reforms to make public areas safer for citizens."
    },
    {
      "type": "paragraph",
      "text": "Legal observers will closely monitor the execution of the mandated safety audits and the subsequent compliance reports submitted by the government and police."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Suo Motu Case On Delhi Rapes | Supreme Court Issues Directions To Make Public Spaces Safer; Orders Safety Audit Within 4 Weeks - Live Law"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "bank-strike-will-banks-remain-closed-on-all-saturdays-latest-update-on-bank-five-1790649413",
  "category": "india",
  "headline": "Bank Strike: Will banks remain closed on all Saturdays? Latest update on bank five days working week - The Economic Times",
  "dek": "The Economic Times reports on the latest updates regarding the proposed five-day working week for banks.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T02:36:53Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790649411_4218.png",
  "imageAlt": "Bank Strike: Will banks remain closed on all Saturdays? Latest update on bank five days working week - The Economic Times",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The Economic Times has published new updates regarding the ongoing discussions concerning a five-day working week for the Indian banking sector."
    },
    {
      "type": "paragraph",
      "text": "The central focus of the report revolves around whether all Saturdays will officially be designated as non-working days for banks."
    },
    {
      "type": "paragraph",
      "text": "Such a policy change, if finalized, would represent a significant structural shift in how Indian financial institutions operate on a weekly basis."
    },
    {
      "type": "paragraph",
      "text": "The potential transition carries implications for both bank employees and retail or corporate customers who rely on scheduled branch services."
    },
    {
      "type": "paragraph",
      "text": "Industry observers and workforce representatives have closely monitored the discussions surrounding the five-day work model."
    },
    {
      "type": "paragraph",
      "text": "Further announcements from relevant authorities are expected to clarify the final consensus on the Saturday closure schedule."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders continue to monitor official channels for definitive updates regarding the operational timeline of the proposed changes."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Bank Strike: Will banks remain closed on all Saturdays? Latest update on bank five days working week - The Economic Times"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "tata-trusts-moots-two-mergers-to-avoid-tata-sons-listing-livemintcom-1790647782",
  "category": "india",
  "headline": "Tata Trusts moots two mergers to avoid Tata Sons listing - livemint.com",
  "dek": "Tata Trusts has proposed a structural shake-up involving two mergers to avoid a mandatory stock market listing for Tata Sons.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T02:09:42Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790647780_3264.png",
  "imageAlt": "Tata Trusts moots two mergers to avoid Tata Sons listing - livemint.com",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Tata Trusts has proposed a major corporate restructuring involving two mergers to sidestep the public listing of Tata Sons. The proposed changes are designed to serve as an escape hatch, allowing the conglomerate to avoid the regulatory requirements associated with a stock market debut."
    },
    {
      "type": "paragraph",
      "text": "The restructuring plan, led by Noel Tata, outlines a new route for the group to maintain its current ownership structure without entering the public markets. By consolidating operations through the proposed mergers, the leadership aims to bypass the listing mandates that had been anticipated by market observers."
    },
    {
      "type": "paragraph",
      "text": "This strategic shift is of considerable significance for India's corporate sector, given the scale and influence of the Tata group within the domestic economy. Market participants and analysts have been tracking potential pathways for the conglomerate to navigate regulatory listing thresholds."
    },
    {
      "type": "paragraph",
      "text": "The proposed framework reflects ongoing strategic evaluations at the highest levels of the organization regarding governance and market participation. Avoiding a public listing alters the anticipated timeline and exposure for one of the country's most prominent business entities."
    },
    {
      "type": "paragraph",
      "text": "Observers and stakeholders will be watching for further details on how the proposed mergers will be structured and executed. The ultimate implementation of the plan will depend on regulatory acceptance and internal approvals within the Tata ecosystem."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Tata Trusts moots two mergers to avoid Tata Sons listing - livemint.com"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "another-arctic-island-is-caught-in-geopolitical-crosshairs-the-week-1790644492",
  "category": "geopolitics",
  "headline": "Another Arctic island is caught in geopolitical crosshairs - The Week",
  "dek": "Another Arctic island has become the focus of escalating geopolitical competition among international powers.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T01:14:52Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790644490_8359.png",
  "imageAlt": "Another Arctic island is caught in geopolitical crosshairs - The Week",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "geopolitics"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "An additional Arctic island has been drawn into geopolitical crosshairs, emerging as a focal point for competing international interests. The development places the territory at the center of overlapping strategic and territorial ambitions in the polar region."
    },
    {
      "type": "paragraph",
      "text": "The situation underscores the growing importance of Arctic geography in contemporary international relations and great power competition. Control and influence over polar landmasses and surrounding waters carry significant implications for global trade and security."
    },
    {
      "type": "paragraph",
      "text": "Policy analysts note that heightened friction in the Arctic can influence international maritime routes, resource exploration frameworks, and strategic alliances. These geopolitical shifts often reverberate across global commodity markets and international regulatory bodies."
    },
    {
      "type": "paragraph",
      "text": "India and other global economies monitor Arctic developments closely due to their indirect effects on global trade corridors, energy security, and environmental policy standards. Shifts in polar governance can alter shipping logistics and affect input costs for internationally traded commodities."
    },
    {
      "type": "paragraph",
      "text": "Stakeholders across government and industry will be tracking diplomatic communications and policy updates closely in the coming weeks. Observers remain focused on whether international forums can mitigate tensions or if strategic competition in the region will intensify."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Another Arctic island is caught in geopolitical crosshairs - The Week"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "uk-releases-suspects-in-terror-plot-at-base-hosting-us-forces-wsj-1790642383",
  "category": "world",
  "headline": "U.K. Releases Suspects in Terror Plot at Base Hosting U.S. Forces - WSJ",
  "dek": "Five suspects arrested over an alleged terror plot at RAF Fairford have been released on police bail.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T00:39:43Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790642381_9738.png",
  "imageAlt": "U.K. Releases Suspects in Terror Plot at Base Hosting U.S. Forces - WSJ",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "United Kingdom authorities have released five suspects who were previously arrested in connection with an alleged terror plot targeting a military base hosting United States forces. The individuals, detained following an incident at RAF Fairford, were freed on police bail as the investigation remains active."
    },
    {
      "type": "paragraph",
      "text": "The arrests and subsequent release have sparked widespread public interest and raised questions regarding security protocols at military installations utilized by allied foreign personnel. Questions continue to swirl across local communities and media outlets as the exact nature of the threat remains under close evaluation."
    },
    {
      "type": "paragraph",
      "text": "British security services are currently examining a range of possibilities, including potential foreign state involvement in the suspected plot. The involvement of foreign actors remains a central line of inquiry for investigators reviewing the circumstances surrounding the incident at the airbase."
    },
    {
      "type": "paragraph",
      "text": "The case highlights ongoing security sensitivities surrounding military sites shared by international partners. Authorities have not yet disclosed further specific details regarding the suspects or the exact nature of the alleged plot as inquiries proceed."
    },
    {
      "type": "paragraph",
      "text": "Law enforcement agencies are expected to release further information as the investigation progresses. Observers will continue to monitor the proceedings closely for any official updates concerning security measures and potential legal developments."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "U.K. Releases Suspects in Terror Plot at Base Hosting U.S. Forces - WSJ"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "live-updates-iran-says-trump-must-choose-between-war-or-diplomacy-as-talks-resum-1790641250",
  "category": "world",
  "headline": "Live Updates: Iran says Trump must choose between war or diplomacy as talks resume - CBS News",
  "dek": "Iran tells Trump to choose between war or diplomacy as indirect peace talks resume through mediators.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-29T00:20:50Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790641248_2203.png",
  "imageAlt": "Live Updates: Iran says Trump must choose between war or diplomacy as talks resume - CBS News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Iran has formally stated that U.S. President Trump must choose between war or diplomacy as indirect talks resume through international mediators."
    },
    {
      "type": "paragraph",
      "text": "The diplomatic push involves the United States and Iran separately engaging with mediators in the latest bid to end the ongoing conflict."
    },
    {
      "type": "paragraph",
      "text": "Reports indicate that Iran is being pressed to make specific nuclear concessions to successfully revive peace talks with the United States."
    },
    {
      "type": "paragraph",
      "text": "Meanwhile, analysis notes that while Trump claims to have an off-ramp to his most significant political challenge, he has thus far refused to take it."
    },
    {
      "type": "paragraph",
      "text": "For emerging markets and major energy importers like India, heightened diplomatic uncertainty in the Middle East carries critical implications for global crude prices, macroeconomic stability, and inflation management."
    },
    {
      "type": "paragraph",
      "text": "Observers and market participants will continue to monitor the mediation efforts closely to gauge whether a diplomatic breakthrough or further escalation is imminent."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Live Updates: Iran says Trump must choose between war or diplomacy as talks resume - CBS News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "prosecutor-reopens-probe-into-cornell-gang-rape-allegations-after-accuser-files-1790639724",
  "category": "world",
  "headline": "Prosecutor reopens probe into Cornell gang rape allegations after accuser files lawsuit - PBS",
  "dek": "District attorney reopens the 2024 Cornell gang rape probe after the accuser files a lawsuit.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T23:55:24Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790639723_9022.png",
  "imageAlt": "Prosecutor reopens probe into Cornell gang rape allegations after accuser files lawsuit - PBS",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "The district attorney has officially reopened an investigation into gang rape allegations at Cornell University. The decision follows a civil lawsuit filed by the accuser."
    },
    {
      "type": "paragraph",
      "text": "The renewed inquiry centers on 2024 sexual assault allegations involving a fraternity on campus. The case has drawn intense public scrutiny following investigative media reports."
    },
    {
      "type": "paragraph",
      "text": "CBS News previously obtained exclusive video footage of a fraternity text chain allegedly connected to the incident. This evidence has added momentum to the ongoing legal and institutional examination."
    },
    {
      "type": "paragraph",
      "text": "Cornell University has faced mounting pressure regarding its handling of the allegations and campus safety protocols. University statements on the matter remain a point of focus for legal observers."
    },
    {
      "type": "paragraph",
      "text": "The reopening of the criminal probe alongside the civil litigation increases potential legal exposure for those involved. Stakeholders are monitoring how university administration and local law enforcement will respond."
    },
    {
      "type": "paragraph",
      "text": "Further updates are anticipated as prosecutors review the file and potential next steps in the legal proceedings unfold."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Prosecutor reopens probe into Cornell gang rape allegations after accuser files lawsuit - PBS"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "new-york-times-executive-fatally-shot-by-his-in-laws-in-bay-area-park-police-say-1790637877",
  "category": "world",
  "headline": "New York Times executive fatally shot by his in-laws in Bay Area park, police say - NBC News",
  "dek": "Dublin police in the Bay Area arrest a married couple for allegedly shooting and killing their son-in-law.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T23:24:37Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790637875_3492.png",
  "imageAlt": "New York Times executive fatally shot by his in-laws in Bay Area park, police say - NBC News",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "world"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "Dublin police have arrested a married couple following the fatal shooting of their son-in-law at a park in the Bay Area, according to law enforcement officials."
    },
    {
      "type": "paragraph",
      "text": "The victim has been identified as a New York Times executive who served as the publication's games engineering director."
    },
    {
      "type": "paragraph",
      "text": "Authorities took the parents-in-law into custody as the primary suspects in connection with the homicide at the public park."
    },
    {
      "type": "paragraph",
      "text": "The high-profile nature of the victim's employment with The New York Times has drawn widespread national attention to the ongoing local police investigation."
    },
    {
      "type": "paragraph",
      "text": "Investigators continue to process evidence from the scene as the community awaits further official updates from law enforcement authorities regarding the suspects and the motive behind the shooting."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "New York Times executive fatally shot by his in-laws in Bay Area park, police say - NBC News"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "plea-in-supreme-court-to-suspend-gyanesh-kumar-as-cec-declare-eci-decisions-cann-1790635269",
  "category": "india",
  "headline": "Plea In Supreme Court To Suspend Gyanesh Kumar As CEC, Declare ECI Decisions Cannot Be Taken Unilaterally - Live Law",
  "dek": "A new Supreme Court plea seeks to suspend CEC Gyanesh Kumar and mandate collective decision-making within the Election Commission of India.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T22:41:09Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790635268_7519.png",
  "imageAlt": "Plea In Supreme Court To Suspend Gyanesh Kumar As CEC, Declare ECI Decisions Cannot Be Taken Unilaterally - Live Law",
  "imageCredit": "Photo via Pexels",
  "tags": [
    "india"
  ],
  "featured": false,
  "trending": false,
  "body": [
    {
      "type": "paragraph",
      "text": "A significant legal challenge has been lodged in the Supreme Court of India, seeking the suspension of Gyanesh Kumar as Chief Election Commissioner. The plea asks the judiciary to formally declare that decisions by the Election Commission of India (ECI) cannot be taken unilaterally by the leadership."
    },
    {
      "type": "paragraph",
      "text": "The petition follows heightened scrutiny over the functioning of the poll panel. Records indicate that over a 10-month period, two Election Commissioners objected on record to election panel steps on 14 separate occasions."
    },
    {
      "type": "paragraph",
      "text": "Beyond the legal filing, the controversy has spilled into the political arena. The Congress party has held protests across Maharashtra demanding the removal of Gyanesh Kumar amid broader concerns over electoral administration."
    },
    {
      "type": "paragraph",
      "text": "The debate surrounding administrative transparency touches upon sensitive electoral processes. While discussions have involved voter deletions, the core institutional friction centers on whether internal poll panel decisions require broader consensus."
    },
    {
      "type": "paragraph",
      "text": "As the matter moves toward judicial review, the Supreme Court's response will establish critical legal precedents for the governance and autonomy of India's central electoral machinery."
    }
  ],
  "sources": [
    {
      "label": "Google News aggregation",
      "detail": "Plea In Supreme Court To Suspend Gyanesh Kumar As CEC, Declare ECI Decisions Cannot Be Taken Unilaterally - Live Law"
    }
  ],
  "relatedStories": []
},

  {
  "slug": "indias-economic-growth-likely-slowed-to-71-in-april-june-quarter-poll-business-s-1790633946",
  "category": "economy",
  "headline": "India's economic growth likely slowed to 7.1% in April-June quarter: Poll - Business Standard",
  "dek": "India's economic growth is projected to moderate to 7.1% in the April-June quarter.",
  "author": {
    "name": "WorldScopeX Desk",
    "role": "Editorial Desk"
  },
  "verificationStatus": "verified",
  "publishedAt": "2026-09-28T22:19:06Z",
  "readingMinutes": 1,
  "heroImage": "https://raw.githubusercontent.com/shuklayes44/News-boat/main/cards/card_1790633945_5493.png",
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
      "text": "India's economic growth is expected to have slowed to 7.1% during the April-June quarter, according to a recent poll. The projected figure points to a moderation in the pace of expansion for the Indian economy during the period."
    },
    {
      "type": "paragraph",
      "text": "Quarterly gross domestic product readings remain a primary indicator for analysts assessing overall economic health and momentum. Policymakers and market observers rely on these metrics to understand shifting trends in domestic output."
    },
    {
      "type": "paragraph",
      "text": "A deceleration to 7.1% carries implications for broader financial markets, investment planning, and ongoing monetary policy assessments. Observers continue to evaluate how slowing growth may influence upcoming economic strategies."
    },
    {
      "type": "paragraph",
      "text": "Official data releases are expected to provide definitive figures regarding the quarter's actual performance. Stakeholders will analyze the finalized reports for further insight into India's economic trajectory."
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
