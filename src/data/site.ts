/** Start here: identity, links, SEO, navigation, and section visibility. */
export const site = {
  name: "Marouane El-Hamdaoui",
  firstName: "Marouane",
  lastName: "El-Hamdaoui",
  username: "mar1shell",
  role: "Software engineering & applied AI",
  email: "elhamdaouimar1@gmail.com",
  url: "https://www.marouane.net",
  location: "Casablanca, Morocco", // Update whenever you move.
  portrait: "/images/avatar.webp",
  description:
    "The portfolio of Marouane El-Hamdaoui. Software engineering, applied AI, selected projects, and the journey behind the work.",
  // Put your PDF in public/ and set this to e.g. "/cv.pdf". No button appears until then.
  cvUrl: "",
  bookingUrl: "https://cal.com/mar1shell",
  availability: "Open to conversations & collaborations",
  socials: [
    { label: "GitHub", href: "https://github.com/mar1shell" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/elhamdaouimarouane",
    },
    { label: "X", href: "https://x.com/mar1shell" },
  ],
};

export const navigation = [
  { label: "About", href: "#about", number: "01" },
  { label: "Work", href: "#work", number: "02" },
  { label: "Journey", href: "#experience", number: "03" },
  { label: "Community", href: "#community", number: "05" },
];

/** Hide a section here without deleting its content or component. */
export const visibleSections = {
  about: true,
  projects: true,
  experience: true,
  education: true,
  leadership: true,
  achievements: true,
  skills: true,
  contact: true,
};

export const hero = {
  eyebrow: "An engineer’s mindset. A builder’s curiosity.",
  introduction:
    "I turn complex problems into thoughtful software. Exploring the space between full-stack development, intelligent systems, and real-world impact.",
  primaryAction: { label: "Explore my work", href: "#work" },
  secondaryAction: { label: "Let’s talk", href: "#contact" },
  meetingLabel: "Book a meeting",
  portraitCaption: "Hey, I’m Marouane.",
  disciplines: ["Software engineering", "Applied AI", "Problem solving"],
};
