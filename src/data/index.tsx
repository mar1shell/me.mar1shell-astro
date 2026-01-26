import type {
  SocialLink,
  HeroCaption,
  TerminalData,
  Project,
  Experience,
  SocialMediaIconProps,
  Achievement,
} from "../types";
import {
  CodeIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  UsersIcon,
  ZapIcon,
} from "../icons";
import { Code2, Gamepad2, Music } from "lucide-react";

// General

const personalInfo = {
  name: "EL-HAMDAOUI MAROUANE ",
  username: "mar1shell",
  title: "Software Engineer",
  email: "elhamdaouimar1@gmail.com",
  location: "Casablanca, Morocco",
  website: "https://mar1shell.me",
  calcom: "https://cal.com/mar1shell",
  socialMedia: {
    twitter: "https://x.com/mar1shell",
    instagram: "https://www.instagram.com/el_hamdaouimarouane",
    linkedin: "https://www.linkedin.com/in/elhamdaouimarouane",
    github: "https://github.com/mar1shell",
  },
};

// Hero Section

const heroCaptions: HeroCaption[] = [
  {
    content: "🌍 Based in Casablanca, Morocco",
  },
  {
    content:
      "💻 Passionate about crafting impactful full-stack web applications",
  },
  {
    content: "💼 AI Trainer at Outlier AI and enthusiastic software builder",
  },
  {
    content:
      "📚 Exploring software engineering deeply through projects and study",
  },
];

export const typewriterText = [
  "a Software Engineer",
  "a Fullstack Developer",
  "an AI Enthusiast",
  "a Problem Solver",
];

export const glitchText = "Marouane";

const SocialMediaIcons: SocialMediaIconProps[] = [
  {
    link: personalInfo.socialMedia.twitter,
    title: "Follow me on X (formerly Twitter)",
    icon: (
      <svg
        viewBox="0 0 512 512"
        height="1.7em"
        xmlns="http://www.w3.org/2000/svg"
        className="svgIcon svgIcontwit"
        fill="white"
        aria-hidden="true"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
    hoveredIcon: (
      <svg
        viewBox="0 0 512 512"
        height="1.7em"
        xmlns="http://www.w3.org/2000/svg"
        className="svgIcontwit"
        fill="white"
        aria-hidden="true"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
    index: 1,
  },
  {
    link: personalInfo.socialMedia.instagram,
    title: "Follow me on Instagram",
    icon: (
      <svg
        fill="white"
        className="svgIcon"
        viewBox="0 0 448 512"
        height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
    hoveredIcon: (
      <svg
        fill="white"
        className="svgIcon"
        viewBox="0 0 448 512"
        height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    ),
    index: 2,
  },
  {
    link: personalInfo.socialMedia.github,
    title: "View my GitHub profile",
    icon: (
      <svg
        fill="white"
        viewBox="0 0 496 512"
        height="1.6em"
        className="svgIcon"
        aria-hidden="true"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    ),
    hoveredIcon: (
      <svg fill="white" viewBox="0 0 496 512" height="1.6em" aria-hidden="true">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    ),
    index: 4,
  },
  {
    link: personalInfo.socialMedia.linkedin,
    title: "Connect with me on LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="svgIcon"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    hoveredIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        stroke="currentColor"
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    index: 3,
  },
];

// About me section

const terminalData: TerminalData = {
  username: personalInfo.username,
  command: "cat aboutmar1.txt",
  bio: "Hey! I'm Marouane, a Computer Science & AI student at ENSAM Casablanca. I love solving LeetCode problems, building fullstack apps, and walking the streets of Casablanca with a playlist full of diverse music. I’m passionate about software engineering, currently diving into backend fundamentals and crafting clean, meaningful code. I also enjoy volunteering, reading the news, and dreaming big. Hire me before I join the Night’s Watch. 😉",
};

const aboutMeData = {
  description: (
    <>
      <p className="text-xl leading-relaxed font-light text-gray-800 md:text-2xl dark:text-gray-200">
        Hey! I'm{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-transparent dark:from-green-400 dark:to-emerald-400">
          Marouane
        </span>
        . A Computer Science & AI student obsessed with building clean software
        and solving complex problems.
      </p>
      <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
        Currently keeping busy with LeetCode, building Fullstack Apps, and
        diving deep into Backend Fundamentals. When I'm not coding, I'm probably
        volunteering or exploring Casablanca.
      </p>
    </>
  ),
  techStack: [
    "Express.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Tailwind",
    "React",
    "Spring Boot",
    "Java",
    "C++",
  ],
  interests: [
    {
      icon: <Gamepad2 className="h-5 w-5 text-purple-500" />,
      title: "Gaming",
    },
    {
      icon: <Music className="h-5 w-5 text-pink-500" />,
      title: "Music",
    },
    {
      icon: <Code2 className="h-5 w-5 text-blue-500" />,
      title: "DSA & Problem Solving",
    },
  ],
};

// Achievements Section

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "ODC Champions 2025",
    rank: "National Champions & 3rd Place International",
    team: "Atlas Coders",
    description:
      "Competed against top teams globally in 4 rounds of algorithm optimization, bot programming, coding escape, and competitive programming.",
    date: "2025",
    image: "/images/achievements/odc/odc.webp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7404958675808833538/", // Add your link here
    featured: true,
  },
  {
    id: 2,
    title: "ECPC - ENSAMC Programming Contest",
    rank: "3rd Prize",
    description:
      "Competed in a competitve programming contest organized in our school and won 3rd place two years in a row. ",
    date: "2024 & 2025",
    image: "/images/achievements/ecpc/ecpc.webp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7313216200597995520/",
    featured: true,
  },
  {
    id: 3,
    title: "AI Crafters VibeCoding Hackathon",
    rank: "Top 8 out of 100",
    description:
      'Pitched "7a9i – Know Your Right", a web platform designed to help Moroccans understand their legal rights and bridge the gap between citizens and the law.',
    date: "2025",
    image: "/images/achievements/ai-crafters/ai-crafters.webp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7348743331713105920/",
    featured: false,
  },
];

// Projects Section Data

const projects: Project[] = [
  {
    id: 0,
    title: "MonClavier - Moroccan Online Keyboard Store",
    description:
      "A modern e-commerce platform for selling laptop keyboards in Morocco. Built with React, TypeScript, and Express.js, featuring a responsive design and smooth user experience for browsing and purchasing keyboard products. Developed as a freelance project for a client.",
    imageDesktop: "/images/projects/monclavier/desktop.webp",
    imageMobile: "/images/projects/monclavier/mobile.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
    ],
    liveDemo: "https://monclavier.mar1shell.me",
    featured: true,
    unfinished: true,
    hasMobileImage: true,
  },
  {
    id: 1,
    title: "mar1server - a simple http server in C",
    description:
      "A simple HTTP server implementation from scratch in C that handles concurrent requests and serves static files.",
    imageDesktop: "/images/projects/mar1server/desktop.webp",
    technologies: ["C", "HTTP", "Sockets", "Linux"],
    sourceCode: "https://github.com/mar1shell/mar1server",
    featured: true,
    unfinished: false,
    hasMobileImage: false,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, Typescript and Tailwind CSS featuring dark mode and smooth animations.",
    imageDesktop: "/images/projects/portfolio/desktop.webp",
    imageMobile: "/images/projects/portfolio/mobile.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://mar1shell.me",
    sourceCode: "https://github.com/mar1shell",
    featured: true,
    unfinished: false,
    hasMobileImage: true,
  },
];

// Experience Section Data

const experiences: Experience[] = [
  {
    title: "Frontend Developer & AI Trainer",
    company: "Outlier AI",
    logo: "/images/experiences/outlier.webp",
    location: "Remote",
    period: "Dec 2024 - Present",
    duration: "2+ months",
    type: "Part-time",
    description:
      "Reviewing AI-generated frontend code and optimizing programs for machine learning pipelines while contributing to AI model training through data annotation and voice recordings.",
    achievements: [
      "Selected as a top contributor among 500+ applicants in a Frontend Project",
      "Selected as a reviewer for diffrent AI projects",
    ],
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "JavaScript",
      "C Programming",
      "Machine Learning",
      "Data Annotation",
      "LLM Training",
    ],
    current: true,
    featured: true,
    detailsLink: "https://outlier.ai",
    connectLink:
      "https://www.linkedin.com/company/try-outlier/posts/?feedView=all",
  },
  {
    title: "Software Engineering Intern",
    company:
      "ONEE - BE Casablanca (National Office of Electricity and Drinking Water)",
    logo: "/images/experiences/onee.webp",
    location: "Casablanca, Morocco",
    period: "Summer 2025",
    duration: "1 month",
    type: "Internship",
    description:
      "Developed a full-stack recruitment management platform for external use at ONEE where candidates can view job offers, submit applications, and track their application status throughout the hiring process.",
    achievements: [
      "Built a complete full-stack web application using React and Express.js",
      "Collaborated with the DSI – Commercial IS Division to gather functional requirements",
    ],
    skills: [
      "React",
      "Express.js",
      "RESTful APIs",
      "Full-Stack Development",
      "Software Engineering",
      "Team Collaboration",
      "System Architecture",
    ],
    current: true,
    featured: false,
    detailsLink: "https://www.one.org.ma",
    connectLink: "",
  },

  {
    title: "Computer Science & AI Student",
    company: "ENSAM Casablanca",
    logo: "/images/experiences/ensam.webp",
    location: "Casablanca, Morocco",
    period: "2022 - Present",
    duration: "2+ years",
    type: "Education",
    description:
      "Pursuing advanced degree in Computer Science with specialization in Artificial Intelligence. Active in academic projects and programming competitions.",
    achievements: [
      "Top 3 out of 300+ students in first two years",
      "Maintained strong academic performance in core CS subjects",
      "Actively participated in coding competitions and hackathons",
    ],
    skills: [
      "Algorithms",
      "Data Structures",
      "Machine Learning",
      "Mathematics",
      "Problem Solving",
      "Software Engineering",
    ],
    current: true,
    featured: false,
    detailsLink: "https://ensam-casa.ma",
    connectLink: "https://www.linkedin.com/company/ensam-casa-officielle",
  },
];

// Footer Section Data

const socialMediaIcons2: SocialLink[] = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: personalInfo.socialMedia.github,
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "hover:bg-gray-900/10 dark:hover:bg-white/10",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: personalInfo.socialMedia.linkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
    bgColor: "hover:bg-blue-600/10 dark:hover:bg-blue-400/10",
  },
  {
    icon: TwitterIcon,
    label: "X (Twitter)",
    href: personalInfo.socialMedia.twitter,
    color: "hover:text-blue-400 dark:hover:text-blue-300",
    bgColor: "hover:bg-blue-400/10 dark:hover:bg-blue-300/10",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: personalInfo.socialMedia.instagram,
    color: "hover:text-pink-500 dark:hover:text-pink-400",
    bgColor: "hover:bg-pink-500/10 dark:hover:bg-pink-400/10",
  },
];

const stats = [
  {
    icon: CodeIcon,
    label: "Lines of Code",
    value: "50K+",
    color: "text-blue-500 dark:text-green-400",
  },
  {
    icon: UsersIcon,
    label: "Happy Clients",
    value: "2+",
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    icon: ZapIcon,
    label: "Projects Built",
    value: "10+",
    color: "text-amber-500 dark:text-yellow-400",
  },
];

export {
  heroCaptions,
  terminalData,
  aboutMeData,
  projects,
  experiences,
  socialMediaIcons2,
  stats,
  SocialMediaIcons,
  personalInfo,
};
