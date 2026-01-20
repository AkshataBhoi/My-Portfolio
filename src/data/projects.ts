import { type ProjectProps } from "../components/ui/ProjectCard";

export const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "Portfolio V2",
    year: "2025",
    status: "Complete",
    screenshotUrl: "/images/portfolio2.png",
    description:
      "Minimalist portfolio featuring advanced animations, dynamic theming, and a premium design system.",
    repoUrl: "https://github.com/AkshataBhoi/portfolio",
    liveUrl: "https://akshata-bhoi.vercel.app",
    tech: [
      {
        name: "React",
        colorHex: "#61dafb",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        colorHex: "#3178c6",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind",
        colorHex: "#38bdf8",
        logoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Travel Loop",
    year: "2024",
    status: "Complete",
    screenshotUrl: "/images/Traveloop.jpg",
    description:
      "Responsive travel booking platform with dynamic filters and personalized user experiences.",
    repoUrl: "https://github.com/AkshataBhoi/Traveloop.git",
    tech: [
      {
        name: "JavaScript",
        colorHex: "#f7df1e",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        colorHex: "#e34f26",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        colorHex: "#264de4",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    id: 3,
    title: "IMDB Clone",
    year: "2024",
    status: "Complete",
    screenshotUrl: "/images/IMDB-Clone.jpg",
    description:
      "Dynamic movie database app featuring real-time API integration and watchlist functionality.",
    repoUrl: "https://github.com/AkshataBhoi/imdb-clone.git",
    tech: [
      {
        name: "React",
        colorHex: "#61dafb",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "REST API",
        colorHex: "#009688",
        logoUrl:
          "data:image/png;base64,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",
      },
      {
        name: "CSS",
        colorHex: "#264de4",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Life in Frames",
  //   year: "2025",
  //   status:"Complete",
  //   screenshotUrl: "/images/LifeInFrames.png",
  //   description:
  //     "A personal memory-keeping and travel photography project that captures spontaneous moments and transforms them into lasting visual memories, designed to recreate the same emotions and energy when revisited.",
  //   repoUrl: "https://github.com/AkshataBhoi/life-in-frames",
  //   liveUrl: "https://life-in-frames.vercel.app",
  //   tech: [
  //     {
  //       name: "React",
  //       colorHex: "#61dafb",
  //       logoUrl:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       colorHex: "#38bdf8",
  //       logoUrl:
  //         "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  //     },
  //     {
  //       name: "JavaScript",
  //       colorHex: "#f7df1e",
  //       logoUrl:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "ResuStack–AI Resume Builder",
    year: "2025",
    status: "In Progress",
    screenshotUrl: "/images/ResuStack.png",
    description:
      "An AI-powered resume builder SaaS designed to help students and job seekers create ATS-optimized resumes. Built with a credit-based pricing model to keep costs minimal while providing intelligent resume generation and analysis.",
    repoUrl: "https://github.com/viveksonawale/ResuStack",
    liveUrl: "https://resustack.vercel.app",
    tech: [
      {
        name: "Next.js",
        colorHex: "#000000",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        colorHex: "#61dafb",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        colorHex: "#3c873a",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        colorHex: "#ffffff",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        colorHex: "#4db33d",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  {
    id: 6,
    title: "WorkNest",
    year: "2025",
    status: "Completed",
    screenshotUrl: "/images/WorkNest.png",
    description:
      "A collaborative workspace platform that helps individuals and teams manage tasks, shared responsibilities, and expenses efficiently across homes, offices, and project teams.",
    repoUrl: "https://github.com/AkshataBhoi/worknest",
    liveUrl: "https://worknest-collab.vercel.app",
    tech: [
      {
        name: "Next.js",
        colorHex: "#000000",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        colorHex: "#61dafb",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Firebase",
        colorHex: "#ffca28",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Portfolio V1",
    year: "2024",
    status: "Complete",
    screenshotUrl: "/images/portfolio1.png",
    description:
      "Dynamic movie database app featuring real-time API integration and watchlist functionality.",
    repoUrl: "https://github.com/AkshataBhoi/AkshataBhoi.github.io",
    liveUrl: "https://akshatabhoi.github.io",
    tech: [
      {
        name: "JavaScript",
        colorHex: "#f7df1e",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        colorHex: "#e34f26",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        colorHex: "#264de4",
        logoUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
];
