# me.mar1shell-Astro

> Migrating my portfolio from React to Astro. The original React version lives at https://github.com/mar1shell/me.mar1shell

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01.svg)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.x-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Responsive-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ About

Welcome to the Astro rewrite of my portfolio. Astro handles the overall site shell and routing, while React islands power interactive pieces.

## Quick Start

### Prerequisites

- **Node.js** v18+ (Astro 5 target)
- **npm**
- Email sending uses EmailJS; create keys and place them in a `.env` file as needed.

### Installation & Setup

```bash
git clone https://github.com/mar1shell/me.mar1shell-astro.git
cd me.mar1shell-astro
npm install
npm run dev
```

## Highlights

- **Astro + React islands** for hydration only where needed
- **Tailwind CSS** for styling with utility-first workflow
- **AOS and motion** animations for scroll and micro-interactions
- **EmailJS** integration for the contact form
- **SEO-aware** metadata and performant by default

## 📁 Project Structure

```bash
me.mar1shell-astro/
├── public/
│   ├── images/
│   └── site.webmanifest
├── src/
│   ├── assets/
│   ├── components/   # Astro + React islands
│   ├── pages/
│   ├── sections/
│   ├── hooks/
│   ├── data/
│   ├── styles/
│   ├── types/
│   └── utils/
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

## Live Demo

🔗 **[View Live Portfolio](https://mar1shell.me)**

## Contributing

Feedback and suggestions are welcome. Feel free to fork, branch, and open a PR.

## License

Licensed under the **MIT License** - see [LICENSE](LICENSE).

---

<div align="center">
    <p>Made with ❤️ by <a href="https://github.com/mar1shell" style="font-style: italic; font-weight: bold">mar1shell</a></p>
</div>
