import type { JourneyEntry } from "../types/portfolio";

// Content carried over from the original portfolio. Update periods as needed.
export const experiences: JourneyEntry[] = [
  {
    id: "capgemini",
    title: "Software Engineering Intern",
    organization: "Capgemini Engineering",
    logo: "/images/experiences/capgemini.png",
    period: "Sep 2026",
    location: "Morocco",
    type: "Internship",
    description:
      "Gained hands-on experience in engineering workflows, contributing to technical solutions and software/systems development within a multi-disciplinary engineering environment.",
    highlights: [
      "Collaborated with cross-functional engineering teams on technical deliverables.",
      "Applied modern engineering practices and software methods to real-world projects.",
    ],
    technologies: ["Software Engineering", "Python", "Project Management"],
    link: { label: "Capgemini Engineering", href: "https://www.capgemini.com" },
  },
  {
    id: "outlier",
    title: "Frontend Developer & AI Trainer",
    organization: "Outlier AI",
    logo: "/images/experiences/outlier.webp",
    period: "Dec 2024 — Present",
    location: "Remote",
    type: "Part-time",
    description:
      "Reviewing AI-generated frontend code and contributing to AI model training through code evaluation and data annotation.",
    highlights: [
      "Selected as a top contributor among 500+ applicants in a frontend project.",
      "Selected as a reviewer across multiple AI projects.",
    ],
    technologies: ["React", "TypeScript", "Python", "LLM training"],
    link: { label: "Outlier AI", href: "https://outlier.ai" },
  },
  {
    id: "onee",
    title: "Software Engineering Intern",
    organization: "ONEE — BE Casablanca",
    logo: "/images/experiences/onee.webp",
    period: "Summer 2025",
    location: "Casablanca, Morocco",
    type: "Internship",
    description:
      "Developed a recruitment management platform for candidates to find job offers, apply, and track their progress through the hiring process.",
    highlights: [
      "Built the full-stack application using React and Express.js.",
      "Worked with the DSI – Commercial IS Division to gather functional requirements.",
    ],
    technologies: ["React", "Express.js", "REST APIs", "System architecture"],
    link: { label: "ONEE", href: "https://www.one.org.ma" },
  },
];
