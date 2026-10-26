import type { LeadershipEntry } from "../types/portfolio";

/** Two illustrative entries for reviewing the layout.
 * Replace them with your roles, dates, organization logo, and three photos.
 * Set example: false (or remove it) once an entry contains your real content.
 * The reused event photos below demonstrate the composition, not these roles.
 */
export const leadership: LeadershipEntry[] = [
  {
    id: "community-example",
    title: "Bringing people & ideas together.",
    organization: "Community initiative",
    period: "Your dates",
    type: "Workshops & knowledge sharing",
    example: true,
    description:
      "A place for the workshops, meetups, and shared learning experiences you help bring to life. Tell the story of the people, the shared challenge, and your part in making it happen.",
    highlights: [
      "Your contribution to organizing, mentoring, or sharing knowledge.",
      "The outcome that made the experience meaningful.",
    ],
    photos: [
      {
        src: "/images/achievements/odc/odc.webp",
        alt: "Atlas Coders team at Orange Digital Center, reused as a layout sample",
        caption: "The people · sample event photo",
        position: "50% 40%",
      },
      {
        src: "/images/achievements/ai-crafters/ai-crafters.webp",
        alt: "Presentation at AI Crafters, reused as a layout sample",
        caption: "The conversation",
        position: "50% 53%",
      },
      {
        src: "/images/achievements/ecpc/ecpc.webp",
        alt: "ECPC award presentation, reused as a layout sample",
        caption: "A shared milestone",
        position: "50% 33%",
      },
    ],
  },
  {
    id: "volunteering-example",
    title: "Small actions. Shared impact.",
    organization: "Student association",
    period: "Your dates",
    type: "Volunteering & collective action",
    example: true,
    description:
      "A second example for an extracurricular or volunteering role. Connect the purpose of the initiative with what you contributed and the moments you want to remember.",
    highlights: [
      "The initiative you supported and the people you worked with.",
      "A concrete contribution or lesson from the experience.",
    ],
    photos: [
      {
        src: "/images/achievements/ai-crafters/ai-crafters.webp",
        alt: "AI Crafters presentation, reused to preview a second three-photo story",
        caption: "Sharing an idea · sample event photo",
        position: "50% 48%",
      },
      {
        src: "/images/achievements/ecpc/ecpc.webp",
        alt: "ECPC award presentation, reused to preview the story layout",
        caption: "A moment to remember",
        position: "50% 33%",
      },
      {
        src: "/images/achievements/odc/odc.webp",
        alt: "Atlas Coders team, reused to preview the story layout",
        caption: "Better together",
        position: "50% 35%",
      },
    ],
  },
];

export const leadershipExamplesNote =
  "Two illustrative entries, using event photos already in this portfolio. Replace the example roles and photos with your own stories.";

export const communityNote = {
  title: "Good things happen together.",
  description:
    "There’s more to the journey than the work on screen. Community, volunteering, and shared challenges are part of how I learn and grow.",
  caption: "More stories from this part of my journey, soon.",
};
