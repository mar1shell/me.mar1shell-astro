import type { SectionMeta } from "../types/portfolio";

export const sections = {
  about: {
    id: "about",
    number: "01",
    label: "The person behind the code",
    title: "Curiosity is the\ncommon thread.",
  },
  projects: {
    id: "work",
    number: "02",
    label: "Selected work",
    title: "Ideas, made real.",
    description:
      "From a first principle to a working product. A selection of things I’ve built and the problems behind them.",
  },
  experience: {
    id: "experience",
    number: "03",
    label: "Professional journey",
    title: "Learning by building.",
    description:
      "Real teams. Real constraints. A little more perspective with every experience.",
  },
  education: {
    id: "education",
    number: "04",
    label: "Academic foundation",
    title: "The foundations\nbehind the work.",
  },
  leadership: {
    id: "community",
    number: "05",
    label: "Leadership & community",
    title: "Beyond the keyboard.",
    description:
      "The communities, shared ideas, and experiences that shape how I work with others.",
  },
  achievements: {
    id: "awards",
    number: "06",
    label: "Awards & competitions",
    title: "A competitive spirit.\nA collaborative mindset.",
  },
  skills: {
    id: "skills",
    number: "07",
    label: "The toolkit",
    title: "Tools for the problem.\nNot the other way around.",
  },
  contact: {
    id: "contact",
    number: "08",
    label: "Next chapter",
    title: "Let’s build\nsomething meaningful.",
  },
} satisfies Record<string, SectionMeta>;
