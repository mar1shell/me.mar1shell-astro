# Astro Portfolio Optimization TODO

This checklist guides you through finalizing the migration to Astro by adopting **Zero JavaScript By Default** and the **Islands Architecture** pattern.

---

## 🔴 High Impact (Performance)

### 1. Hydration Audit & Optimization

#### 1.1 Replace `client:load` with Lazy Hydration

**Current Issue:** Several components hydrate on page load, sending React bundle + component JS immediately even if not needed.

**Files to Update:**

- [ ] **[src/pages/index.astro](src/pages/index.astro#L20)** — `<AnimatedBackground client:load/>`
  - ✅ **Keep `client:load`** — Canvas animation requires immediate hydration
  - 💡 Consider: Move to a simpler CSS animation or WebGL for better performance

- [ ] **[src/pages/index.astro](src/pages/index.astro#L21)** — `<NavBar client:load/>`
  - ⚠️ **Change to `client:idle`** — Navigation isn't critical for First Contentful Paint
  - The navbar uses `useScrollTop()` hook and mouse tracking, but these can wait until browser is idle
  - ```astro
    <NavBar client:idle />
    ```

- [ ] **[src/sections/HeroSection/HeroSection.astro](src/sections/HeroSection/HeroSection.astro#L12)** — `<HeroSectionContent client:load />`
  - ⚠️ **Change to `client:idle`** — TypewriterText effect can delay slightly
  - The hero section is above the fold but the typewriter animation doesn't need immediate hydration
  - ```astro
    <HeroSectionContent client:idle />
    ```

- [ ] **[src/pages/index.astro](src/pages/index.astro#L27)** — `<ExperienceSection client:load />`
  - ⚠️ **Change to `client:visible`** — Experiences are further down the page
  - No interactive elements that require immediate hydration; AOS animations work with `data-aos` attributes
  - ```astro
    <ExperienceSection client:visible />
    ```

- [ ] **[src/pages/index.astro](src/pages/index.astro#L32)** — `<SmoothFollower client:load/>`
  - ✅ **Keep `client:load`** — Custom cursor needs immediate tracking
  - 💡 Consider: Add `@media (pointer: fine)` detection and only load on desktop devices
  - Potential optimization: lazy-load after initial paint with `client:idle`

#### 1.2 Components Already Using Lazy Hydration ✅

- [x] **[src/pages/index.astro](src/pages/index.astro#L28)** — `<ContactSection client:visible/>`
  - ✅ Already optimized — form only hydrates when user scrolls to it

---

### 2. Component Conversion to Native `.astro`

**Goal:** Remove React overhead entirely for static components.

#### 2.1 Convert Simple Display Components

- [ ] **[src/components/Avatar/Avatar.tsx](src/components/Avatar/Avatar.tsx)** → `Avatar.astro`
  - Pure presentational component with no interactivity
  - Only displays an `<img>` with gradient border
  - Remove React import, convert to Astro component syntax
  - **Impact:** ~5-10KB JS savings

- [ ] **[src/components/GlithText/GlitchText.tsx](src/components/GlithText/GlitchText.tsx)** → `GlitchText.astro`
  - Pure CSS animation via [GlitchText.css](src/components/GlithText/GlitchText.css)
  - No React state or hooks
  - Props can be passed as Astro component props
  - **Impact:** ~2-4KB JS savings

- [ ] **[src/components/SectionTitle/SectionTitle.tsx](src/components/SectionTitle/SectionTitle.tsx)** → `SectionTitle.astro`
  - Displays title with decorative elements
  - Uses `data-aos` attribute which works without React
  - **Impact:** ~3-5KB JS savings per section (used 5+ times)

- [ ] **[src/components/Footer/Footer.tsx](src/components/Footer/Footer.tsx)** → `Footer.astro`
  - Static content (copyright, social links, location)
  - `currentYear` can be computed in frontmatter: `const currentYear = new Date().getFullYear()`
  - Keep `<SocialMediaIcon2>` as React if it has hover state, or convert to CSS-only
  - **Impact:** ~8-12KB JS savings

- [ ] **[src/components/BookMeetingButton/BookMeetingButton.tsx](src/components/BookMeetingButton/BookMeetingButton.tsx)** → `BookMeetingButton.astro`
  - Simple anchor link, no state
  - **Impact:** ~1-2KB JS savings

- [ ] **[src/components/GetInTouchButton/GetInTouchButton.tsx](src/components/GetInTouchButton/GetInTouchButton.tsx)** → `GetInTouchButton.astro`
  - Simple anchor link, no state
  - **Impact:** ~1-2KB JS savings

- [ ] **[src/components/GithubProjectsButton/index.tsx](src/components/GithubProjectsButton/index.tsx)** → `GithubProjectsButton.astro`
  - Static button with external link
  - **Impact:** ~2-3KB JS savings

#### 2.2 Section-Level Components to Convert

- [ ] **[src/sections/AboutMeSection/AboutMeSection.tsx](src/sections/AboutMeSection/AboutMeSection.tsx)** → `AboutMeSection.astro`
  - Container only, delegates to `<SectionTitle>` and `<BentoGrid>`
  - **Impact:** ~1-2KB JS savings

- [ ] **[src/sections/ProjectsSection/ProjectsSection.tsx](src/sections/ProjectsSection/ProjectsSection.tsx)** → `ProjectsSection.astro`
  - Container with `.map()` — move to Astro's template syntax
  - ```astro
    {projects.map((project, index) => (
      <ProjectCard project={project} index={index} client:visible />
    ))}
    ```
  - **Impact:** ~2-3KB JS savings

- [ ] **[src/sections/AchievementsSection/AchievementsSection.tsx](src/sections/AchievementsSection/AchievementsSection.tsx)** → `AchievementsSection.astro`
  - Container with `.map()`
  - **Impact:** ~2-3KB JS savings

- [ ] **[src/sections/ExperienceSection/ExperienceSection.tsx](src/sections/ExperienceSection/ExperienceSection.tsx)** → `ExperienceSection.astro`
  - Container with `.map()`
  - Keep `<ExperienceCard>` as React if it has expand/collapse interactions
  - **Impact:** ~2-3KB JS savings

#### 2.3 Keep as React (Requires Interactivity)

- [x] `TypewriterText.tsx` — Uses `useState`, `useEffect` for animation
- [x] `DarkModeSwitch.tsx` — Uses `useDarkMode` hook, localStorage
- [x] `NavBar.tsx` — Uses scroll detection, mouse tracking
- [x] `ContactSection.tsx` — Form with validation, emailjs integration
- [x] `SmoothFollower.tsx` — Custom cursor with RAF animation
- [x] `ScrollToTop.tsx` — Scroll detection + smooth scroll
- [x] `AnimatedBackground.tsx` — Canvas animation
- [x] `ProjectCard.tsx` — May have hover interactions (check if CSS-only is possible)
- [x] `ExperienceCard.tsx` — May have expand/collapse (check implementation)
- [x] `AchievementCard.tsx` — May have modal/lightbox (check implementation)

---

### 3. Image Optimization

**Current Issue:** Using raw `<img>` tags instead of Astro's optimized `<Image>` component.

#### 3.1 Install Astro Image Integration

```bash
npm install @astrojs/image
```

**Update `astro.config.mjs`:**

```javascript
import image from "@astrojs/image";

export default defineConfig({
  integrations: [
    react({
      /* ... */
    }),
    image(),
  ],
  // ...
});
```

#### 3.2 Replace `<img>` with `<Image>`

- [ ] **[src/components/Avatar/Avatar.tsx](src/components/Avatar/Avatar.tsx#L10-L18)**
  - Current: `<img src={src} alt={alt} width="288" height="288" />`
  - Replace with:
    ```astro
    ---
    import { Image } from 'astro:assets';
    import avatarImage from '/public/images/avatar.webp';
    ---
    <Image src={avatarImage} alt={alt} width={288} height={288} loading="eager" />
    ```
  - **Impact:** Automatic format optimization (WebP/AVIF), responsive srcset

- [ ] **[src/components/ExperienceCard/ExperienceCard.tsx](src/components/ExperienceCard/ExperienceCard.tsx#L32-L37)**
  - Company logos: `<img src={experience.logo} alt={...} width="40" height="40" />`
  - If keeping as React, use `astro:assets` import pattern in parent `.astro` file and pass optimized URLs
  - **Impact:** Smaller file sizes for logo images

- [ ] **[src/components/ProjectCard/ProjectCard.tsx](src/components/ProjectCard/ProjectCard.tsx#L38-L43)** (desktop image)
- [ ] **[src/components/ProjectCard/ProjectCard.tsx](src/components/ProjectCard/ProjectCard.tsx#L56-L61)** (mobile image)
  - Project screenshots (desktop/mobile): `<img src={...imageDesktop} />`
  - **Impact:** Largest impact — project images are heavy, optimize with responsive srcset

- [ ] **[src/components/Achievements/AchievementCard.tsx](src/components/Achievements/AchievementCard.tsx#L13-L18)**
  - Achievement images: `<img src={achievement.image} />`
  - **Impact:** Moderate savings

#### 3.3 Preload Hero Image

Add to [src/layouts/Layout.astro](src/layouts/Layout.astro) `<head>`:

```astro
<link rel="preload" as="image" href="/images/avatar.webp" type="image/webp" />
```

---

## 🟡 Refactoring (Best Practices)

### 4. Content Collections Migration

**Current Issue:** Data lives in [src/data/index.tsx](src/data/index.tsx), mixed with TSX/JSX. No type safety or validation.

#### 4.1 Create Content Collections Structure

```bash
mkdir -p src/content/projects
mkdir -p src/content/experiences
mkdir -p src/content/achievements
```

#### 4.2 Define Collection Schema

Create **`src/content/config.ts`**:

```typescript
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    imageDesktop: z.string(),
    imageMobile: z.string().optional(),
    technologies: z.array(z.string()),
    liveDemo: z.string().url().optional(),
    sourceCode: z.string().url().optional(),
    featured: z.boolean(),
    unfinished: z.boolean(),
    hasMobileImage: z.boolean(),
  }),
});

const experiencesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    logo: z.string(),
    location: z.string(),
    period: z.string(),
    duration: z.string(),
    type: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
    skills: z.array(z.string()),
    current: z.boolean(),
    featured: z.boolean(),
    detailsLink: z.string().url(),
    connectLink: z.string().url().optional(),
  }),
});

const achievementsCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    rank: z.string(),
    team: z.string().optional(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    link: z.string().url(),
    featured: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
  experiences: experiencesCollection,
  achievements: achievementsCollection,
};
```

#### 4.3 Migrate Data to JSON/YAML Files

- [ ] Convert `projects` array to individual files:
  - `src/content/projects/monclavier.json`
  - `src/content/projects/mar1server.json`
  - `src/content/projects/portfolio.json`

- [ ] Convert `experiences` array to individual files:
  - `src/content/experiences/outlier-ai.json`
  - `src/content/experiences/onee.json`
  - `src/content/experiences/ensam.json`

- [ ] Convert `achievements` array to individual files:
  - `src/content/achievements/odc-champions.json`
  - `src/content/achievements/ecpc.json`
  - `src/content/achievements/ai-crafters.json`

#### 4.4 Update Component Imports

**Before:**

```tsx
import { projects } from "../../data";
```

**After:**

```astro
---
import { getCollection } from 'astro:content';
const projects = await getCollection('projects');
---
```

**Files to Update:**

- [ ] [src/sections/ProjectsSection/ProjectsSection.tsx](src/sections/ProjectsSection/ProjectsSection.tsx)
- [ ] [src/sections/ExperienceSection/ExperienceSection.tsx](src/sections/ExperienceSection/ExperienceSection.tsx)
- [ ] [src/sections/AchievementsSection/AchievementsSection.tsx](src/sections/AchievementsSection/AchievementsSection.tsx)

**Benefits:**

- Type-safe content with Zod validation
- Autocomplete in IDE
- Runtime validation prevents invalid data
- Easier to manage content as JSON/YAML/Markdown

---

### 5. Prefetching & Loading Strategies

#### 5.1 Enable Prefetch for Internal Links

**Update `astro.config.mjs`:**

```javascript
export default defineConfig({
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  // ...
});
```

#### 5.2 Add Prefetch to Navigation Links

If you add internal pages (blog, about, etc.), use:

```astro
<a href="/about" data-astro-prefetch>About</a>
```

#### 5.3 Defer Non-Critical JS

**Recommendations:**

- [ ] Load `AOS` library only after viewport is interactive:
  - Move `useAosEffect()` initialization to `client:idle` component
  - Or use Intersection Observer for scroll animations (lighter alternative)

- [ ] Lazy-load EmailJS SDK in `ContactSection`:
  ```typescript
  const emailjs = await import("@emailjs/browser");
  ```

#### 5.4 Font Optimization

Add to [src/layouts/Layout.astro](src/layouts/Layout.astro) `<head>`:

```astro
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="..." />
```

Or use `@fontsource` for self-hosted fonts (better privacy + performance).

---

### 6. React Compiler Optimization

✅ **Already Enabled** — `babel-plugin-react-compiler` in [astro.config.mjs](astro.config.mjs#L10-L13)

**No action needed** — React 19 compiler auto-optimizes remaining React components.

---

### 7. Remove AOS Library (Optional)

**Current Issue:** AOS adds ~15KB JS for scroll animations.

**Alternative:** Use CSS-only animations with Intersection Observer:

- Astro provides built-in `<ViewTransitions />` for page transitions
- Use `animation-timeline: view()` (modern CSS) for scroll-based animations
- Example:

  ```css
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-on-scroll {
    animation: fade-in linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }
  ```

**Files to Update:**

- [ ] Remove `data-aos` attributes from all components
- [ ] Remove [src/hooks/useAosEffect/useAosEffect.ts](src/hooks/useAosEffect/useAosEffect.ts)
- [ ] Uninstall: `npm uninstall aos`
- [ ] **Impact:** ~15KB JS reduction + better performance

---

## 📊 Estimated Performance Gains

| Optimization                     | JS Reduction   | LCP Improvement  |
| -------------------------------- | -------------- | ---------------- |
| Hydration Audit (idle/visible)   | ~30-50KB       | ~200-400ms       |
| Component Conversion to `.astro` | ~50-80KB       | ~300-500ms       |
| Image Optimization               | ~200-500KB     | ~500-1000ms      |
| Remove AOS Library               | ~15KB          | ~100-200ms       |
| **Total Estimated**              | **~295-645KB** | **~1100-2100ms** |

---

## 🎯 Priority Order

1. **Start with Image Optimization** — Biggest visual impact
2. **Convert Static Components** — Quick wins, reduces JS
3. **Adjust Hydration Directives** — Immediate perf boost
4. **Migrate to Content Collections** — Better DX, type safety
5. **Prefetching & Loading** — Polish and UX improvement
6. **Remove AOS (Optional)** — If willing to refactor animations

---

## ✅ Checklist Summary

- [ ] 4 hydration directive changes (`client:idle`, `client:visible`)
- [ ] 12 component conversions to `.astro`
- [ ] 5 `<img>` → `<Image>` replacements
- [ ] 3 content collections created
- [ ] 3 prefetch configurations added
- [ ] 1 optional AOS removal

**Total Tasks:** ~28 actionable items

---

## 📚 Resources

- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [Client Directives Reference](https://docs.astro.build/en/reference/directives-reference/#client-directives)
- [Astro Image Optimization](https://docs.astro.build/en/guides/images/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Astro Prefetch](https://docs.astro.build/en/guides/prefetch/)

---

**Good luck with the optimization! 🚀**  
Once complete, run `npm run build` and check the bundle size in the output. You should see significant JS reductions.
