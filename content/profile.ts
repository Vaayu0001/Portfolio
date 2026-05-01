import type { Profile, SkillGroup } from "./types";

export const profile: Profile = {
  fullName: "Adarsh Singh",
  headline: "{{HEADLINE}}",
  headlineFallback:
    "Software developer focused on practical web systems, algorithmic simulations, and database-backed products.",
  location: "{{LOCATION}}",
  email: "adarsh_singh@srmap.edu.in",
  about: "Computer Science student focused on Data Structures, full-stack development, and AI-driven systems. Experience includes building real-world projects and researching Agentic AI applications in agriculture.",
  aboutFallback:
    "I build projects that connect computer science fundamentals with usable products: traffic optimization simulations, collaborative drawing tools, and database systems with role-based workflows.",
  github: "https://github.com/Vaayu0001",
  linkedin: "www.linkedin.com/in/adarsh-singh-90a47132a",
  siteUrl: "https://adarsh-singh-portfolio.vercel.app",
  resumePath: "/resume.pdf",
  availability:
    "Open to internships, project collaborations, and software engineering opportunities.",
  highlights: [
    { label: "Flagship project", value: "Synthezyy" },
    { label: "Core focus", value: "Full-stack + algorithms" },
    { label: "GitHub", value: "Vaayu0001" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend and Data",
    skills: ["Node.js", "Express", "PHP", "MySQL", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    title: "Computer Science",
    skills: [
      "Data Structures",
      "Algorithms",
      "Greedy",
      "Dynamic Programming",
      "DBMS",
      "OOP",
    ],
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub", "Vercel", "XAMPP", "Responsive UI", "{{SKILLS}}"],
  },
];
