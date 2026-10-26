import type { JourneyEntry } from "../types/portfolio";

/** Add each degree separately, including the school, dates, and specialization. */
export const education: JourneyEntry[] = [
  {
    id: "ensam",
    title: "Computer Science & Artificial Intelligence",
    organization: "Arts et Métiers — ENSAM Casablanca",
    logo: "/images/experiences/ensam.webp",
    period: "2022 — Present",
    location: "Casablanca, Morocco",
    type: "Engineering studies",
    description:
      "An engineering foundation in computer science, mathematics, and artificial intelligence, developed through academic projects and programming competitions.",
    highlights: ["Top 3 among 300+ students in the first two years."],
    technologies: [
      "Algorithms",
      "Data structures",
      "Machine learning",
      "Mathematics",
    ],
    link: { label: "ENSAM Casablanca", href: "https://ensam-casa.ma" },
  },
];
