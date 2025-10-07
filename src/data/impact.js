// src/data/impact.js

// Monthly people served (total across programs)
export const monthlyImpact = [
  { month: "Jan", people: 320 },
  { month: "Feb", people: 380 },
  { month: "Mar", people: 450 },
  { month: "Apr", people: 520 },
  { month: "May", people: 610 },
  { month: "Jun", people: 700 },
  { month: "Jul", people: 760 },
  { month: "Aug", people: 820 },
  { month: "Sep", people: 910 },
  { month: "Oct", people: 980 },
  { month: "Nov", people: 1050 },
  { month: "Dec", people: 1120 },
];

// Distribution by program (current YTD)
export const programBreakdown = [
  { name: "Youth Mentorship", value: 420 },
  { name: "Food Security", value: 850 },
  { name: "Tech Training", value: 240 },
];

// Volunteer & donations (quarterly)
export const quarterly = [
  { q: "Q1", volunteerHours: 420, donationsUSD: 18000 },
  { q: "Q2", volunteerHours: 560, donationsUSD: 24000 },
  { q: "Q3", volunteerHours: 610, donationsUSD: 28000 },
  { q: "Q4", volunteerHours: 720, donationsUSD: 33500 },
];

// Headline KPIs (auto-summed or static)
export const kpis = [
  { label: "People Served (YTD)", value: 1120 },
  { label: "Volunteer Hours (YTD)", value: 2310 },
  { label: "Job Placements", value: 58 },
  { label: "Graduation Lift", value: "12%" },
];
