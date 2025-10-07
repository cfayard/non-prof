// src/data/caseStudies.js
export const caseStudyCategories = [
  "All",
  "Mentorship",
  "Food Security",
  "Tech Training",
  "Partnership",
];

export const caseStudies = [
  {
    id: "jaylen-mentorship-2025",
    title: "From Struggling to Soaring: Jaylen’s Mentorship Journey",
    category: "Mentorship",
    orgOrPerson: "Jaylen M.",
    date: "2025-08-01",
    summary:
      "Weekly mentoring, tutoring, and goal-setting helped Jaylen raise grades and confidence within one semester.",
    problem:
      "Inconsistent attendance and low GPA; limited access to study support outside school hours.",
    solution: [
      "Matched with a trained mentor for weekly sessions",
      "SMART goals with biweekly check-ins",
      "Family engagement and school counselor alignment",
    ],
    results: [
      { label: "GPA increase", value: "+0.8" },
      { label: "Attendance improvement", value: "+15%" },
      { label: "Graduation on track", value: "Yes" },
    ],
    quotes: [
      {
        who: "Jaylen",
        text: "My mentor believed in me until I believed in myself.",
      },
      { who: "Mentor", text: "Consistency + care = momentum." },
    ],
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop",
        alt: "Mentor & student studying",
      },
    ],
    pdf: null, // e.g., "/assets/case-studies/jaylen.pdf"
    tags: ["Youth", "Academic Support"],
  },
  {
    id: "market-growth-2024",
    title: "Scaling Access: Community Market Expansion",
    category: "Food Security",
    orgOrPerson: "East Side Pantry",
    date: "2024-11-01",
    summary:
      "How a pilot market grew to serve 800+ households with fresh produce and nutrition education.",
    problem:
      "High neighborhood food insecurity; limited affordable produce within walking distance.",
    solution: [
      "Partnership with local farms",
      "Volunteer logistics crew & cold storage",
      "Nutrition workshops and recipes",
    ],
    results: [
      { label: "Households served", value: "850+" },
      { label: "Pounds distributed", value: "112,000+" },
      { label: "Workshop attendance", value: "1,200+" },
    ],
    quotes: [
      {
        who: "Program Lead",
        text: "We built a dignified, community-first experience.",
      },
    ],
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop",
        alt: "Community market produce",
      },
    ],
    pdf: "/assets/case-studies/market-growth-2024.pdf",
    tags: ["Community", "Nutrition"],
  },
  {
    id: "tech-careers-2025",
    title: "First Roles in Tech: Career Pathways Cohort",
    category: "Tech Training",
    orgOrPerson: "Career Hub",
    date: "2025-05-10",
    summary:
      "Job-readiness, laptops, and employer partners led to 58 placements in entry-level tech roles.",
    problem:
      "Learners faced device gaps, credential barriers, and limited employer networks.",
    solution: [
      "Digital literacy → applied projects",
      "Interview prep + mock interviews",
      "Partner employers & internship tracks",
    ],
    results: [
      { label: "Job placements", value: "58" },
      { label: "Completion rate", value: "82%" },
      { label: "Laptop access", value: "100%" },
    ],
    quotes: [{ who: "Graduate", text: "This program changed my trajectory." }],
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        alt: "Learners in lab",
      },
    ],
    pdf: null,
    tags: ["Employment", "Digital Equity"],
  },
];
