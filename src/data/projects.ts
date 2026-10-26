import type { PortfolioProject } from "../types/portfolio";

/** Add a project object here; filters and project numbering update automatically. */
export const projects: PortfolioProject[] = [
  {
    id: "monclavier",
    title: "MonClavier",
    category: "Full-stack",
    summary: "A storefront built for a real business.",
    description:
      "A keyboard e-commerce platform for a client in Morocco. Built the browsing and purchasing experience with React, TypeScript, and an Express.js backend.",
    technologies: ["React", "TypeScript", "Express.js", "Tailwind CSS"],
    image: "/images/projects/monclavier/desktop.webp",
    imageAlt: "MonClavier keyboard store interface",
    status: "In development",
    featured: true,
    links: [
      { label: "Visit project", href: "https://monclavier.mar1shell.me" },
    ],
  },
  {
    id: "mar1server",
    title: "mar1server",
    category: "Systems",
    summary: "Back to the foundations of the web.",
    description:
      "An HTTP server written from scratch in C. Handles concurrent requests and serves static files, exploring what happens beneath the frameworks we use every day.",
    technologies: ["C", "HTTP", "Sockets", "Linux"],
    image: "/images/projects/mar1server/desktop.webp",
    imageAlt: "mar1server HTTP server project",
    links: [
      { label: "Source code", href: "https://github.com/mar1shell/mar1server" },
    ],
  },
  {
    id: "recruitment",
    title: "Recruitment platform",
    category: "Full-stack",
    summary: "Making the application journey clearer.",
    description:
      "Developed during my ONEE internship: a full-stack platform where candidates can explore job offers, submit applications, and follow their application status.",
    technologies: ["React", "Express.js", "REST APIs"],
    status: "Internship project",
    links: [],
    preview: {
      label: "Application journey",
      steps: ["Discover", "Apply", "Track"],
      caption: "Clear steps. Connected systems.",
    },
  },
];
