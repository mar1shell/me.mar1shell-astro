import type { PortfolioProject } from "../types/portfolio";

/** Add a project object here; filters and project numbering update automatically. */
export const projects: PortfolioProject[] = [
  {
    id: "lispen-assembly-vision",
    title: "AI Vision-based Assembly Quality Control",
    category: "AI & Computer Vision",
    summary: "Real-time non-conformity detection for industrial assembly.",
    description:
      "Capstone research project supervised by LISPEN lab professors at Arts et Métiers. Built an end-to-end computer vision pipeline using YOLO and OpenCV to detect assembly non-conformities and non-compliant parts in real time.",
    technologies: ["Python", "YOLO", "OpenCV", "PyTorch", "Computer Vision"],
    image: "/images/projects/lispen/lispen.png",
    imageAlt: "LISPEN lab",

    status: "In progress",
    featured: true,
    links: [],
  },
  {
    id: "medicore",
    title: "MediCore AI",
    category: "Healthcare AI & Voice",
    summary:
      "Clinical AI safety assistant reducing point-of-prescription errors.",
    description:
      "Top 10 Worldwide finish at the Mistral AI Hackathon. A multi-modal voice agent that ingests medical charts via Mistral OCR, tracks patient context, and performs deterministic real-time drug safety evaluations using Mistral Large and ElevenLabs WebSockets.",
    technologies: [
      "Python",
      "FastAPI",
      "Mistral AI",
      "ElevenLabs",
      "React",
      "TypeScript",
      "Vite",
    ],
    image: "/images/projects/medicore/medicore.webp",
    imageAlt: "MediCore AI project interface",
    status: "Hackathon project",
    featured: true,
    links: [
      {
        label: "Source code",
        href: "https://github.com/mar1shell/medicore-ai", // Replace with your repository link if different
      },
    ],
  },
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
    id: "onee-recruitment-platform",
    title: "Recruitment platform",
    category: "Full-stack",
    summary: "Making the application journey clearer.",
    description:
      "Developed during my ONEE internship: a full-stack platform where candidates can explore job offers, submit applications, and follow their application status.",
    technologies: ["React", "Express.js", "REST APIs"],
    image: "/images/projects/onee/onee.png",
    imageAlt: "ONEE Recruitment Platform",
    status: "Internship project",
    links: [],
    preview: {
      label: "Application journey",
      steps: ["Discover", "Apply", "Track"],
      caption: "Clear steps. Connected systems.",
    },
  },
];
