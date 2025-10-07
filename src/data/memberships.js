// src/data/memberships.js
export const membershipTiers = [
  {
    id: "ally",
    name: "Ally",
    cadence: "Monthly",
    price: 10,
    blurb: "Great starter level for ongoing support.",
    benefits: ["Monthly impact email", "Sticker pack"],
  },
  {
    id: "advocate",
    name: "Advocate",
    cadence: "Monthly",
    price: 25,
    blurb: "Support programs every month.",
    benefits: [
      "All Ally benefits",
      "Early event access",
      "Member-only webinars",
    ],
  },
  {
    id: "champion",
    name: "Champion",
    cadence: "Monthly",
    price: 50,
    blurb: "Fuel multiple initiatives year-round.",
    benefits: [
      "All Advocate benefits",
      "Recognition on website",
      "Annual impact briefing",
    ],
  },
  // Annual tiers
  {
    id: "ally-annual",
    name: "Ally",
    cadence: "Annual",
    price: 100,
    blurb: "One-time yearly contribution.",
    benefits: ["Monthly impact email", "Sticker pack"],
  },
  {
    id: "advocate-annual",
    name: "Advocate",
    cadence: "Annual",
    price: 250,
    blurb: "Annual gift that makes a difference.",
    benefits: [
      "All Ally benefits",
      "Early event access",
      "Member-only webinars",
    ],
  },
  {
    id: "champion-annual",
    name: "Champion",
    cadence: "Annual",
    price: 500,
    blurb: "Sustain our programs for a full year.",
    benefits: [
      "All Advocate benefits",
      "Recognition on website",
      "Annual impact briefing",
    ],
  },
];
