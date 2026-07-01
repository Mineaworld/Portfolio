import { CodeIcon, LayoutIcon, ServerIcon, WrenchIcon } from "lucide-react";

export type Skill = {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "databases"
    | "ai_automation"
    | "swe_tools"
    | "design_other";
  icon: string;
  isComponentIcon?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  iframeUrl?: string;
  demoUrl: string;
  repoUrl?: string;
  techStack: string[];
  problem: string;
  solution: string;
};

export type Experience = {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  achievements: string[];
};

export type HomeNavigationItem = {
  href: `#${string}`;
  label: string;
};

export type HomepageProfile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  availability: string;
  about: string[];
  contact: {
    email: string;
    location: string;
    responseWindow: string;
  };
};

export const homeNavigation: HomeNavigationItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const homepageProfile: HomepageProfile = {
  name: "Dy Minea",
  role: "Software Engineer",
  tagline:
    "I build clear web products with attention to usability, performance, and maintainable code.",
  summary:
    "I work mainly with TypeScript, React, Next.js, Laravel, and modern database tooling to build web products that are practical, easy to use, and ready to ship.",
  location: "Phnom Penh, Cambodia",
  availability: "Available for software engineering opportunities",
  about: [
    "I like building products that look polished without becoming hard to maintain. I usually start with structure and clarity, then refine the details around interaction and performance.",
    "A lot of my work sits between engineering and product thinking. I enjoy taking messy requirements and turning them into interfaces that feel simple, useful, and easy to navigate.",
    "Outside of project work, I keep learning through side projects, small technical experiments, and regular hands-on practice."
  ],
  contact: {
    email: "minea.dyy@gmail.com",
    location: "Remote-friendly across time zones",
    responseWindow: "Usually within 24 to 48 hours",
  },
};

export const portfolioStats = {
  projectsCompleted: "10",
  yearsOfExperience: "1-2 yrs hands-on",
  happyClients: 30,
  codingHours: 10000,
};

export const skills: Skill[] = [
  {
    name: "React",
    category: "frontend",
    icon: "/skills/react.svg",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "/skills/nextjs.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "/skills/Typescript.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "/skills/javascript.svg",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "/skills/Tailwind.svg",
  },
  {
    name: "HTML/CSS",
    category: "frontend",
    icon: "/skills/htmlcss.svg",
  },
  {
    name: "GSAP",
    category: "frontend",
    icon: "/skills/gsap.svg",
  },
  {
    name: "Laravel",
    category: "backend",
    icon: "/skills/laravel.svg",
  },
  {
    name: "PHP",
    category: "backend",
    icon: "/skills/php.svg",
  },
  {
    name: "Python",
    category: "backend",
    icon: "/skills/fallback.svg",
  },
  {
    name: "SQL",
    category: "databases",
    icon: "/skills/sql.svg",
  },
  {
    name: "MySQL",
    category: "databases",
    icon: "/skills/mysql.svg",
  },
  {
    name: "PostgreSQL",
    category: "databases",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Firebase",
    category: "databases",
    icon: "/skills/firebase.svg",
  },
  {
    name: "Supabase",
    category: "databases",
    icon: "/skills/supabase.svg",
  },
  {
    name: "SQL Server",
    category: "databases",
    icon: "/skills/sqlserver.svg",
  },
  {
    name: "Oracle",
    category: "databases",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Navicat",
    category: "databases",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Git/GitHub",
    category: "swe_tools",
    icon: "/skills/github.svg",
  },
  {
    name: "Postman",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Vercel",
    category: "swe_tools",
    icon: "/skills/vercel.svg",
  },
  {
    name: "VS Code",
    category: "swe_tools",
    icon: "/skills/vscode.svg",
  },
  {
    name: "Cursor",
    category: "swe_tools",
    icon: "/skills/Cursor.svg",
  },
  {
    name: "AWS",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Linux",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Trello",
    category: "swe_tools",
    icon: "/skills/trello.svg",
  },
  {
    name: "ClickUp",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Lucidchart",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Mermaid",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "n8n",
    category: "ai_automation",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Make",
    category: "ai_automation",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Codex",
    category: "ai_automation",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Claude Code",
    category: "ai_automation",
    icon: "/skills/fallback.svg",
  },
  {
    name: "WordPress",
    category: "design_other",
    icon: "/skills/wordpress.svg",
  },
  {
    name: "Joomla",
    category: "design_other",
    icon: "/skills/joomla.svg",
  },
  {
    name: "Canva",
    category: "design_other",
    icon: "/skills/canva.svg",
  },
  {
    name: "Adobe Creative Suite",
    category: "design_other",
    icon: "/skills/adobe.svg",
  },
  {
    name: "Microsoft Office",
    category: "design_other",
    icon: "/skills/office.svg",
  },
];

export const skillCategories = [
  { id: "frontend", name: "Frontend", icon: LayoutIcon },
  { id: "backend", name: "Backend", icon: ServerIcon },
  { id: "databases", name: "Databases", icon: ServerIcon },
  { id: "ai_automation", name: "AI / Automation", icon: CodeIcon },
  { id: "swe_tools", name: "SWE Tools", icon: WrenchIcon },
  { id: "design_other", name: "Design / Other", icon: CodeIcon },
] as const;

export const projects: Project[] = [
  {
    id: "mommy-kitchen",
    title: "Mommy-Kitchen",
    description:
      "A mobile-first Khmer recipe application built specifically for Moms, featuring visual, touch-friendly navigation and low-literacy accessibility.",
    // TODO: Replace with actual Mommy-Kitchen screenshot once available
    image: "/projects/Banking.png",
    demoUrl: "https://mommy-kitchen.vercel.app",
    repoUrl: "https://github.com/Mineaworld/Mommy-Kitchen",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    problem:
      "Traditional recipe apps rely heavily on text-dense layouts and complex navigation, making them difficult to use for older home cooks and non-technical family members.",
    solution:
      "Built a visually driven, touch-friendly interface structured around clear imagery, simplified step-by-step guides, and fast search powered by Supabase and Next.js.",
  },
  {
    id: "workouttok",
    title: "WorkoutTok",
    description:
      "A fitness organization workspace designed to save, program, and track workouts discovered on TikTok so they never get lost in saved videos.",
    // TODO: Replace with actual WorkoutTok screenshot once available
    image: "/projects/UniAssignment.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/WorkoutTok",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    problem:
      "People constantly save workout videos on social platforms like TikTok, but lack an organized way to extract exercises, build structured routines, and track progress over time.",
    solution:
      "Created a dedicated fitness dashboard that converts saved short-form workout content into organized exercise routines, weekly programs, and progress logs.",
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    description:
      "A robust library management application built with Object-Oriented Python and Pandas for handling book inventory and patron records.",
    // TODO: Replace with actual Library Management System screenshot once available
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/library-management-system",
    techStack: ["Python", "Pandas"],
    problem:
      "Small libraries and personal book collections often rely on disorganized spreadsheets or manual record-keeping to track book checkouts and inventory levels.",
    solution:
      "Developed a clean object-oriented Python application leveraging Pandas data structures to streamline book cataloging, checkout tracking, and inventory reporting.",
  },
  {
    id: "trading-signal-bot",
    title: "Trading Signal Bot",
    description:
      "An automated trading signal bot engineered in Python to analyze market movements and dispatch real-time trade alerts.",
    // TODO: Replace with actual Trading Signal Bot screenshot once available
    image: "/projects/TradeKaizen.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/trading-signal-bot",
    techStack: ["Python", "MetaTrader5", "Pandas", "requests", "Telegram"],
    problem:
      "Traders monitoring financial markets manually often miss critical entry and exit triggers due to rapid market volatility across time zones.",
    solution:
      "Engineered a reliable automated script in Python that evaluates market indicators and delivers instant algorithmic trading signals and notifications.",
  },
  {
    id: "bongmala",
    title: "BongMala",
    description:
      "A QR ordering system for a malatang restaurant where customers scan a table code, build their bowl, place an order, and follow the status.",
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/BongMala",
    techStack: [
      "Laravel 13",
      "React 19",
      "TypeScript",
      "MySQL",
      "Tailwind CSS 4",
      "Sanctum",
    ],
    problem:
      "Restaurant ordering can get slow when staff need to take every table order by hand and update customers one by one.",
    solution:
      "Built a mobile-first QR flow for customers and a protected admin dashboard for staff to manage menus, tables, orders, and demo payments.",
  },
  {
    id: "uni-assignment",
    title: "UniAssignment",
    description:
      "A modern academic workspace for university students to track assignments, manage subjects, and stay on top of deadlines.",
    image: "/projects/UniAssignment.png",
    demoUrl: "https://uni-assignment.vercel.app",
    repoUrl: "https://github.com/Mineaworld/UniAssignment",
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Cloud Functions",
    ],
    problem:
      "Students often manage coursework across scattered notes and reminders, which causes missed deadlines and poor planning.",
    solution:
      "Built a single workspace with assignment tracking, subject management, calendar views, notes, Pomodoro support, and Telegram reminders.",
  },
  {
    id: "idea-studio",
    title: "IdeaStudio",
    description:
      "An AI-powered product ideation workspace that turns rough inputs into structured project documentation and PRDs.",
    image: "/projects/UniAssignment.png",
    demoUrl: "https://ideastudio.vercel.app",
    repoUrl: "https://github.com/Mineaworld/IdeaStudio",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Telegram"],
    problem:
      "Early product ideas are often fragmented across notes and social links, which makes planning and execution slow.",
    solution:
      "Built an idea capture and expansion workflow that converts text, links, and voice inputs into organized build-ready documentation.",
  },
  {
    id: "tradekaizen",
    title: "TradeKaizen",
    description:
      "A trading-focused web app inspired by the Kaizen philosophy, combining journaling, analytics, and productivity workflows in one interface.",
    image: "/projects/TradeKaizen.png",
    demoUrl: "https://tradekaizen.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/TradeKaizen",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    problem:
      "Traders need one place to manage journals, strategy workflows, and performance insights without switching between tools.",
    solution:
      "Implemented a Next.js platform with Supabase auth/data, drag-and-drop interactions, and chart-based analytics for daily trading review.",
  },
  {
    id: "inventory-management",
    title: "Inventory-Management",
    description:
      "A full-stack stock management system for SMB workflows with bilingual support and role-based operations.",
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/Inventory-Management",
    techStack: ["Laravel", "React", "Inertia.js", "MySQL"],
    problem:
      "Small and mid-sized teams need structured product, supplier, and stock movement tracking with clear role permissions.",
    solution:
      "Built a role-aware platform with product/supplier CRUD, stock movement history, and English/Khmer UI support for practical day-to-day operations.",
  },
  {
    id: "zentry-clone",
    title: "Zentry-Clone",
    description:
      "A responsive frontend clone of Zentry, built as hands-on practice for GSAP animation workflows and advanced React UI implementation.",
    image: "/projects/Zentry.png",
    demoUrl: "https://zentry-clone-awwards.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/Zentry-Clone",
    techStack: ["React", "JavaScript", "Tailwind CSS", "GSAP"],
    problem:
      "The goal was to practice complex motion design and responsive interaction patterns on a visually rich interface.",
    solution:
      "Extended a tutorial baseline with mobile-first responsiveness, smoother transitions, and performance-minded UI behavior.",
  },
  {
    id: "city-weather-app",
    title: "CityWeatherApp",
    description:
      "A React weather application for searching cities and viewing real-time weather conditions from an external API.",
    image: "/projects/Banking.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/CityWeatherApp",
    techStack: ["React", "JavaScript", "Vite", "Weatherbit API"],
    problem:
      "Users need quick weather checks without navigating heavy weather platforms.",
    solution:
      "Implemented a focused city-search interface that fetches and displays temperature, humidity, and wind data in a clean layout.",
  },
  {
    id: "cafe-pos",
    title: "Cafe POS System",
    description:
      "A desktop point-of-sale and management system for cafe operations built with C# and SQL Server.",
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/Cafe-POS",
    techStack: ["C#", "WinForms", "SQL Server"],
    problem:
      "Cafe staff need reliable transaction handling, product management, and reporting in one operational system.",
    solution:
      "Developed a role-based POS workflow with billing, product controls, and reporting tools to improve day-to-day operational efficiency.",
  },
  {
    id: "skincare-pos",
    title: "Skincare POS System",
    description:
      "A desktop POS system tailored for skincare sellers, focused on product management and checkout workflows.",
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/Skincare_POS",
    techStack: ["C#", "WinForms"],
    problem:
      "Small skincare businesses need lightweight tooling to manage catalog data and streamline sales.",
    solution:
      "Built a practical desktop system for product CRUD and order flow foundations, designed for future customer and reporting expansion.",
  },
  {
    id: "banking-react-tailwind-ui",
    title: "Banking-React-Tailwind-UI",
    description:
      "A responsive banking interface project built with React and Tailwind CSS to practice modern dashboard composition and reusable UI sections.",
    image: "/projects/Banking.png",
    demoUrl: "https://banking-modern-ui.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/Banking-React-Tailwind-UI",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    problem:
      "Financial UI layouts require clear hierarchy and responsive behavior across screen sizes.",
    solution:
      "Delivered a clean, modern, and responsive banking UI with reusable components and consistent styling patterns.",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    position: "Full-Stack Project Development",
    company: "Personal and Academic Projects",
    location: "Remote and Phnom Penh",
    startDate: "2024",
    endDate: "Present",
    achievements: [
      "Built and shipped web applications with React, Next.js, Laravel, and Firebase.",
      "Worked on authentication, role-based flows, and CRUD-heavy features across different projects.",
      "Refined features from feedback and kept the codebase organized so the projects stayed easy to update.",
    ],
  },
  {
    id: "exp-2",
    position: "Frontend Engineering Practice",
    company: "Self-Led UI and Interaction Projects",
    location: "Remote",
    startDate: "2023",
    endDate: "2024",
    achievements: [
      "Built responsive interfaces through clone and dashboard projects that gave me real practice with layout and component structure.",
      "Used GSAP and React to make interactions feel smoother and more intentional.",
      "Started from tutorial foundations when useful, then pushed them further with my own features and usability improvements.",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/Mineaworld",
  linkedin: "https://linkedin.com/in/mineadev",
  twitter: "https://x.com/Minea_Dy",
  email: "minea.dyy@gmail.com",
  telegram: "https://t.me/ImMinea",
};
