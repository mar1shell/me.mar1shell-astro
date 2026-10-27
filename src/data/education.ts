import type { JourneyEntry } from "../types/portfolio";

/** Add each degree separately, including the school, dates, and specialization. */
export const education: JourneyEntry[] = [
  {
    id: "ensam-aix",
    title: "MSc in Cyber-Physical Systems Engineering & AI",
    organization: "Arts et Métiers — Campus d'Aix-en-Provence",
    logo: "/images/education/ensam1.png",
    period: "2026 — Present",
    location: "Aix-en-Provence, France",
    type: "Dual-Degree Engineering",
    description:
      "Specializing in Cyber-Physical Systems, computer vision, and AI integration within smart industrial and robotic environments.",
    highlights: [
      "Currently pursuing dual-degree specialization in Aix-en-Provence.",
      "Developing an AI assembly inspection pipeline at the LISPEN research lab.",
    ],
    technologies: [
      "Cyber-Physical Systems",
      "Computer Vision",
      "YOLO",
      "Embedded AI",
      "Robotics",
    ],
    link: {
      label: "Arts et Métiers Aix-en-Provence",
      href: "https://artsetmetiers.fr/fr/campus/aix-en-provence",
    },
  },
  {
    id: "ensam",
    title: "Computer Science & Artificial Intelligence",
    organization: "Arts et Métiers — ENSAM Casablanca",
    logo: "/images/education/ensam2.webp",
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
