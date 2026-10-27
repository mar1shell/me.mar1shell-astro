import type { LeadershipEntry } from "../types/portfolio";

/** Two illustrative entries for reviewing the layout.
 * Replace them with your roles, dates, organization logo, and three photos.
 * Set example: false (or remove it) once an entry contains your real content.
 * The reused event photos below demonstrate the composition, not these roles.
 */
export const leadership: LeadershipEntry[] = [
 {
    id: "mmp-2026",
    title: "Bridging EU-MENA Leaders for Responsible AI & Policy Dialogue",
    organization: "Swedish Dialogue Institute for Middle East & North Africa",
    period: "Feb 2026 – Dec 2026",
    type: "International Fellowship & Policy Leadership",
    description:
      "Selected as an international fellow for a cross-regional leadership initiative bringing together emerging leaders, researchers, and policy-makers across Europe and the MENA region. Participated in high-level working sessions in Stockholm and Amman to drive collaborative action around responsible AI deployment, youth inclusion, and policy innovation.",
    highlights: [
      "Engaged in high-level diplomatic audiences and policy dialogues in Stockholm and Amman on regional tech governance.",
      "Contributed technical perspectives on responsible AI implementation, ethics, and youth-led digital transformation.",
    ],
    photos: [
      {
        src: "/images/leadership/mmp/mmp-audience.webp",
        alt: "Marouane EL-HAMDAOUI shaking hands with HRH Prince El Hassan bin Talal during high-level audience",
        caption: "Diplomatic audience · High-level dialogue in Amman",
        position: "35% 30%",
      },
      {
        src: "/images/leadership/mmp/mmp-group-amman.webp",
        alt: "MMP 2026 cohort group photo in Amman with diplomats and organizers",
        caption: "EU-MENA Delegation · Official gathering in Jordan",
        position: "50% 50%",
      },
      {
        src: "/images/leadership/mmp/mmp-dialogue.webp",
        alt: "Marouane EL-HAMDAOUI engaging in cross-cultural workshop discussions",
        caption: "Working session · Peer mentorship & policy exchange",
        position: "50% 40%",
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
