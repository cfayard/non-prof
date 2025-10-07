// src/data/advocacy.js
export const advocacyActions = [
  {
    id: "petition-school-meals",
    type: "Petition",
    title: "Sign: Free School Meals for All Students",
    description:
      "Urge local leaders to fund universal school meals so every child can learn without hunger.",
    link: "https://example.org/petitions/school-meals",
    tags: ["Food Security", "Youth"],
  },
  {
    id: "call-rep-market-funding",
    type: "Call",
    title: "Call Your Rep: Expand Community Market Funding",
    description:
      "Ask your representative to support bill HB-214 to grow neighborhood market access.",
    script:
      "Hi, my name is {{name}} and I live in ZIP {{zip}}. I'm calling to urge support for HB-214 to expand funding for community markets and reduce food insecurity. Thank you.",
    phoneLookup:
      "https://www.house.gov/representatives/find-your-representative",
    tags: ["Food Security", "Civic Action"],
  },
  {
    id: "share-impact-report",
    type: "Share",
    title: "Share Our Impact Report",
    description:
      "Spread the word: post our latest impact highlights to your social media.",
    link: "https://example.org/impact-2025",
    tags: ["Awareness"],
  },
  {
    id: "host-info-session",
    type: "Host",
    title: "Host a Neighborhood Info Session",
    description:
      "Invite friends to learn about mentorship, food access, and tech training opportunities.",
    guide: "https://example.org/host-kit.pdf",
    tags: ["Community", "Events"],
  },
  {
    id: "email-newsletter",
    type: "Subscribe",
    title: "Join the Advocacy Newsletter",
    description:
      "Get monthly action items, scripts, and updates in your inbox.",
    link: "https://example.org/newsletter",
    tags: ["Awareness"],
  },
];
