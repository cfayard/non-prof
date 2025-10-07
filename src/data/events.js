// src/data/events.js
export const eventCategories = [
  "All",
  "Fundraising",
  "Community",
  "Education",
  "Volunteer",
];

export const upcomingEvents = [
  {
    id: "fall-gala-2025",
    title: "Fall Community Gala",
    category: "Fundraising",
    date: "2025-10-12",
    time: "18:00", // 24h local time
    endTime: "21:00",
    locationName: "Riverside Hall",
    address: "200 Riverside Dr, Nashville, TN 37214",
    description:
      "Celebrate our community and raise vital funds for youth mentorship, food security, and tech training.",
    rsvpUrl: "/donate", // placeholder; change to Eventbrite/RSVP later
    programTags: ["Mentorship", "Food Security", "Tech Training"],
  },
  {
    id: "market-day-oct",
    title: "Community Market Day",
    category: "Community",
    date: "2025-10-19",
    time: "10:00",
    endTime: "13:00",
    locationName: "East Side Pantry",
    address: "101 Market St, Nashville, TN 37206",
    description:
      "Fresh produce distribution, cooking demos, and nutrition education. Volunteers welcome!",
    rsvpUrl: "/get-involved#volunteer",
    programTags: ["Food Security"],
  },
  {
    id: "mentor-orientation-nov",
    title: "Mentor Orientation",
    category: "Education",
    date: "2025-11-05",
    time: "17:30",
    endTime: "19:00",
    locationName: "Downtown Learning Center",
    address: "55 5th Ave N, Nashville, TN 37219",
    description:
      "Intro session for new mentors covering expectations, training plan, and Q&A.",
    rsvpUrl: "/get-involved#volunteer",
    programTags: ["Mentorship"],
  },
];
