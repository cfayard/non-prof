// src/data/pastEvents.js
export const pastEventCategories = [
  "All",
  "Fundraising",
  "Community",
  "Education",
  "Volunteer",
];

export const pastEvents = [
  {
    id: "spring-gala-2025",
    title: "Spring Gala 2025",
    category: "Fundraising",
    date: "2025-04-18",
    locationName: "Riverlight Ballroom",
    address: "450 River St, Nashville, TN",
    summary: "A night of community celebration with live music and awards.",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1200&auto=format&fit=crop",
        alt: "Guests enjoying the gala",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1515162305285-9c4110a9b36e?q=80&w=1200&auto=format&fit=crop",
        alt: "Stage and lighting",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/5qap5aO4i9A",
        title: "Highlights reel",
      },
    ],
  },
  {
    id: "market-day-2024",
    title: "Community Market Day 2024",
    category: "Community",
    date: "2024-10-22",
    locationName: "East Side Pantry",
    address: "101 Market St, Nashville, TN",
    summary: "Fresh produce distribution and cooking demos.",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
        alt: "Volunteers handing out produce",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop",
        alt: "Vegetables on display",
      },
    ],
  },
  {
    id: "mentor-grad-2024",
    title: "Mentorship Graduation 2024",
    category: "Education",
    date: "2024-05-30",
    locationName: "Downtown Learning Center",
    address: "55 5th Ave N, Nashville, TN",
    summary: "Celebrating mentees completing the program.",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
        alt: "Graduates with certificates",
      },
    ],
  },
];
