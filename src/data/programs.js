// src/data/programs.js
export const programs = [
  {
    id: "youth-mentorship",
    name: "Youth Mentorship",
    overview:
      "Pairing students with trained mentors for academic support and life skills.",
    goals: [
      "Increase graduation rates by 10% year-over-year",
      "Improve GPA by 0.5 on average across mentees",
      "Build long-term support networks for students",
    ],
    impact: {
      participants: 120,
      mentors: 65,
      graduationRateLiftPct: 12,
      avgGpaLift: 0.6,
    },
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1520975922284-7b68383876f4?q=80&w=1200&auto=format&fit=crop",
        alt: "Mentor and student working together",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=1200&auto=format&fit=crop",
        alt: "After-school study group",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Program overview video",
      },
    ],
  },
  {
    id: "food-security",
    name: "Food Security",
    overview: "Weekly community markets and pantry access for families.",
    goals: [
      "Reduce neighborhood food insecurity index by 15%",
      "Distribute 100,000+ pounds of produce annually",
      "Deliver nutrition workshops quarterly",
    ],
    impact: {
      householdsServed: 850,
      poundsDistributed: 112000,
      workshops: 12,
    },
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
        alt: "Fresh produce at the community market",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop",
        alt: "Volunteers packing boxes",
      },
    ],
  },
  {
    id: "tech-training",
    name: "Tech Training",
    overview: "No-cost digital literacy and job-readiness courses.",
    goals: [
      "Place 50+ grads in entry-level tech roles per year",
      "Achieve 80% course completion rate",
      "Provide laptops to 100% of learners in need",
    ],
    impact: {
      learners: 240,
      completionRatePct: 82,
      jobPlacements: 58,
    },
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        alt: "Learners in a computer lab",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
        alt: "Instructor guiding a class",
      },
    ],
  },
];
