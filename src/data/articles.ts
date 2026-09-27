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
