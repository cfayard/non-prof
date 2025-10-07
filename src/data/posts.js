// src/data/posts.js
export const postCategories = ["All", "Updates", "Educational", "Guest"];

export const posts = [
  {
    id: "gala-kickoff-2025",
    slug: "gala-kickoff-2025",
    title: "Fall Gala Kickoff & Volunteer Roles",
    category: "Updates",
    author: "Team",
    date: "2025-10-01",
    excerpt:
      "We’re kicking off the Fall Gala with new volunteer shifts and early sponsor opportunities.",
    cover:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop",
    content: [
      { type: "p", text: "Our annual gala is around the corner!" },
      {
        type: "p",
        text: "Sign up for roles in registration, setup, and guest services.",
      },
      {
        type: "ul",
        items: [
          "Setup crew (2–4pm)",
          "Registration (5–7pm)",
          "Greeters (6–8pm)",
        ],
      },
      {
        type: "p",
        text: "Interested in sponsoring? See our Event Sponsorship page.",
      },
      {
        type: "a",
        href: "/event-sponsorship",
        text: "Event Sponsorship Info →",
      },
    ],
    tags: ["Events", "Volunteers", "Sponsors"],
  },
  {
    id: "how-to-be-a-great-mentor",
    slug: "how-to-be-a-great-mentor",
    title: "How to Be a Great Mentor (Starter Guide)",
    category: "Educational",
    author: "Program Team",
    date: "2025-09-18",
    excerpt:
      "Practical tips on building trust, setting SMART goals, and celebrating progress.",
    cover:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
    content: [
      { type: "h2", text: "Build Trust First" },
      {
        type: "p",
        text: "Start with listening. Learn interests, strengths, and goals.",
      },
      { type: "h2", text: "Use SMART Goals" },
      {
        type: "p",
        text: "Keep goals Specific, Measurable, Achievable, Relevant, and Time-bound.",
      },
      { type: "blockquote", text: "Small wins become big momentum." },
      { type: "h2", text: "Celebrate Progress" },
      {
        type: "p",
        text: "Shout out improvements and resilience—show it matters.",
      },
    ],
    tags: ["Mentorship", "Training"],
  },
  {
    id: "guest-post-chef-linda",
    slug: "guest-post-chef-linda",
    title: "Guest Post: Cooking Demos That Engage Families",
    category: "Guest",
    author: "Chef Linda",
    date: "2025-08-22",
    excerpt:
      "Three ways to make nutrition workshops welcoming, tasty, and fun.",
    cover:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1600&auto=format&fit=crop",
    content: [
      {
        type: "p",
        text: "Families love hands-on tastings and simple recipes.",
      },
      {
        type: "ol",
        items: [
          "Use seasonal ingredients",
          "Keep steps minimal",
          "Invite kids to help",
        ],
      },
      { type: "p", text: "Download the sample recipe pack to try at home." },
    ],
    tags: ["Food Security", "Workshops"],
  },
];
