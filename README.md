# Marouane’s portfolio

A personal portfolio built with **Astro, React, and TypeScript**. Astro renders the page as static HTML; React powers the project filters, active navigation, and email copy button. The design draws on Axon’s technical visual language and mmalak.dev’s personal, editorial approach.

## Run locally

Use Node.js 22 LTS or newer supported by Astro.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. Changes to content, components, and styles update the preview automatically.

```sh
npm run build       # Production site in dist/
npm run preview     # Preview that production build
```

## Where to edit content

All content lives in **`src/data/`**, in plain TypeScript objects and arrays. You do not need to edit a component to add a project, job, degree, award, skill, or community role.

| File            | Edit this to change…                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| `site.ts`       | Your identity, email, location, social links, availability, CV, hero copy, navigation, and section visibility |
| `sections.ts`   | Section headings, numbers, labels, and introductions                                                          |
| `about.ts`      | Bio paragraphs, portrait caption, and interests                                                               |
| `projects.ts`   | Projects, screenshots, technologies, categories, and links                                                    |
| `experience.ts` | Professional roles and accomplishments                                                                        |
| `education.ts`  | Degrees, schools, dates, and academic highlights                                                              |
| `leadership.ts` | Leadership, extracurricular activities, and community roles                                                   |
| `awards.ts`     | Awards, competitions, photos, and supporting links                                                            |
| `skills.ts`     | Skill groups and tools                                                                                        |

`src/data/motion.ts` controls the entrance duration, scroll reveal duration, stagger, and interactive background. Set `enabled: false` to turn off animation. Reduced-motion preferences are respected automatically.

`src/data/index.ts` also exports all content as a central entry point. Content types are documented in `src/types/portfolio.ts`; your editor can flag a missing or misspelled field.

### Add a project

Copy an existing object in `src/data/projects.ts`, or use:

```ts
{
  id: "my-project", // A unique, stable ID
  title: "My project",
  category: "Applied AI", // Filter buttons are generated from categories
  summary: "The problem this project solves, in one sentence.",
  description: "The problem, your contribution, and the result.",
  technologies: ["Python", "React"],
  image: "/images/projects/my-project/desktop.webp", // Optional
  imageAlt: "Description of the screenshot",
  status: "In progress", // Optional
  featured: false, // true gives a project the wider layout
  links: [
    { label: "Source code", href: "https://github.com/your-name/project" },
    { label: "Live demo", href: "https://your-project.example" },
  ],
}
```

The first item in `links` is the destination for clicking anywhere on the project card. The “Behind the build” disclosure and individual links remain independently usable. Use `links: []` for a project without a public link; clicking that card expands its description instead. Screenshots are optional: a typography preview appears when there is no image. To show a small process diagram instead, add `preview: { label: "Workflow", steps: ["Input", "Process", "Output"], caption: "Optional caption" }`.

### Add education or a community role

`education.ts` and `experience.ts` use `JourneyEntry`. Each role can include a local organization logo:

```ts
{
  id: "my-role",
  title: "Your role or degree",
  organization: "Organization or school",
  logo: "/images/organizations/my-organization.webp", // Optional
  period: "2025 — 2026",
  location: "City, Country", // Optional
  type: "Leadership", // Optional
  description: "What you did and why it mattered.",
  highlights: ["A specific contribution or result."], // Optional
  technologies: ["Relevant skill"], // Optional
  link: { label: "Read more", href: "https://example.com" }, // Optional
}
```

Logos use `object-fit: contain` so rectangular and square marks both fit. Logos sit in the side column next to each experience or degree, including on phones. A two-letter fallback appears if you omit `logo`. The original Outlier, ONEE, and ENSAM logos are already connected to their entries.

### Add a leadership story with three photos

`leadership.ts` uses `LeadershipEntry`: the same role fields, plus exactly three photos. Two clearly marked **layout examples** are included, reusing existing portfolio event images to demonstrate the composition. They are illustrative roles, not claims about your experience. Replace their content and remove `example: true` when ready; the preview notice disappears once no example entries remain.

```ts
{
  id: "my-community-role",
  title: "Your role or story title",
  organization: "Your organization",
  logo: "/images/organizations/my-community.webp", // Optional
  period: "2025 — 2026",
  type: "Leadership",
  description: "The shared goal, your contribution, and the outcome.",
  highlights: ["A contribution you want to highlight."],
  photos: [
    { src: "/images/leadership/my-role/01.webp", alt: "Describe the first photo", caption: "The people", position: "50% 40%" },
    { src: "/images/leadership/my-role/02.webp", alt: "Describe the second photo", caption: "The work" },
    { src: "/images/leadership/my-role/03.webp", alt: "Describe the third photo", caption: "A shared moment" },
  ],
}
```

The first photo is the large image; the other two form a smaller pair. Stories alternate their text and photo positions on desktop and stack on phones. Use `position` to adjust the crop without editing the original photo. Clicking any photo opens its full view with previous/next controls; arrow keys and Escape work too. Without JavaScript, photo links open the original files. Set `leadership: []` to restore the community note.

The current experience and education content was carried over from the previous portfolio; update dates and add your newer experience when ready.

### Add your CV and assets

Put your PDF at `public/cv.pdf`, then set `cvUrl: "/cv.pdf"` in `src/data/site.ts`. The download link appears once the URL is set. Leave it empty to hide the link.

Place screenshots and photos under `public/images/`. Refer to them without the `public` prefix, for example `/images/projects/my-project/desktop.webp`. Prefer compressed WebP images. Update `site.portrait` to replace the photo in the hero and About section. The hero also uses `site.socials` and `site.bookingUrl`; its meeting label and portrait caption live in the `hero` object in `site.ts`.

### Hide or reorder sections

Set a flag to `false` in `visibleSections` in `site.ts` to hide a section. Main navigation automatically removes links to hidden sections. If you hide Work or Contact, also update the hero actions and any custom navigation links that point there.

To reorder sections, move their component lines inside `src/pages/index.astro`. Update the numbers in `sections.ts` and navigation in `site.ts` if needed.

## Where to edit the design

| Path                             | Purpose                                                        |
| -------------------------------- | -------------------------------------------------------------- |
| `src/pages/index.astro`          | Page composition and section order                             |
| `src/sections/`                  | One Astro component per section                                |
| `src/components/ui/`             | Reusable section headings, arrows, and tags                    |
| `src/components/JourneyList/`    | Shared layout for experience, education, and leadership        |
| `src/components/ProjectGallery/` | React filters and project cards                                |
| `src/components/NavBar/`         | React navigation with a native mobile menu                     |
| `src/components/CopyEmail/`      | React clipboard button with feedback                           |
| `src/components/NetworkField/`   | Decorative SVG network graphic                                 |
| `src/styles/index.css`           | Palette, fonts, spacing, and global typography                 |
| `src/styles/components.css`      | Navigation, buttons, cards, tags, and timeline styles          |
| `src/styles/sections.css`        | Hero, portrait, community, awards, skills, contact, and footer |
| `src/layouts/Layout.astro`       | HTML shell, fonts, metadata, and structured data               |

Organization marks live in `src/components/OrganizationMark/`. Leadership stories use `src/components/LeadershipStories/` and the reusable React `src/components/PhotoTriptych/` gallery; their styles live in `src/styles/leadership.css`.

Social button icons live in `src/components/ui/SocialIcon.astro`; GitHub, LinkedIn, and X are selected by the social link label. Project cards live in `src/components/ProjectCard/`, and each achievement row links to its configured `link`. The toolkit uses larger skill tiles styled in `src/styles/toolkit.css`.

Hero layout styles live in `src/styles/hero.css`, animation styles in `src/styles/motion.css`, and scroll/pointer behavior in `src/scripts/motion.ts`. Add `data-reveal` to a static Astro element to give it a one-time reveal as it enters view. Keep this attribute on a stable wrapper around React islands.

Change the CSS variables at the top of `index.css` to adjust the palette and font families. The layout adapts to small screens, supports keyboard navigation and reduced motion, and keeps content and project disclosures readable without JavaScript. External Google Fonts have local system-font fallbacks.

Contact uses direct email, social, and booking links. It needs no email service credentials. The existing Google Analytics and Vercel analytics integrations remain in place.

## Review and deployment

Keep redesign work on `portfolio-redesign`. Review locally, then use your repository’s Vercel Preview Deployment when you decide to push. Merge into the production branch only when you accept the result. No Sites hosting setup is needed for this repository.
