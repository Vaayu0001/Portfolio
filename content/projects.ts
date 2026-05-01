import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "SignalIQ",
    subtitle: "Smart Traffic Signal Timer Optimizer",
    problem:
      "Fixed traffic signals waste green time on empty roads while congested lanes keep accumulating vehicles.",
    solution:
      "A browser-based simulator that uses a greedy scheduler for live signal choice and bitmask dynamic programming for full-cycle optimization across 12 roads.",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "Chart.js",
      "Greedy",
      "Dynamic Programming",
      "localStorage",
    ],
    impact:
      "Demonstrates adaptive signal timing, emergency preemption, analytics dashboards, CSV export, and before/after comparison against fixed timers.",
    role: "Built the simulation logic, optimization flow, dashboard interactions, analytics screens, and emergency vehicle preemption behavior.",
    repoUrl: "https://github.com/Vaayu0001/Traffic-signal-optimizer",
    featured: true,
    imageUrl:
      "https://opengraph.githubassets.com/adarsh-portfolio/Vaayu0001/Traffic-signal-optimizer",
    metrics: [
      { label: "Roads modeled", value: "12" },
      { label: "Algorithms", value: "Greedy + DP" },
      { label: "Backend", value: "None" },
    ],
  },
  {
    title: "Synthezyy",
    subtitle: "Collaborative Whiteboard and Diagramming Tool",
    problem:
      "Teams need a shared canvas for sketching ideas, diagrams, notes, and visual plans without losing real-time collaboration context.",
    solution:
      "A React and Vite drawing workspace with canvas tools, real-time collaboration concepts, board management, export flows, and AI-assisted diagram ideation.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Konva.js",
      "Express",
      "Socket.IO",
      "Supabase",
    ],
    impact:
      "Frames a whiteboard product with multi-user editing, live sync, access control, export options, and AI diagram generation paths.",
    role: "Maintained as a linked/forked project; present contribution scope transparently and update this line with exact ownership before publishing.",
    repoUrl: "https://github.com/Vaayu0001/synthezyy",
    demoUrl: "https://synthezyy.vercel.app",
    featured: true,
    imageUrl: "https://opengraph.githubassets.com/adarsh-portfolio/Vaayu0001/synthezyy",
    metrics: [
      { label: "Canvas tools", value: "6+" },
      { label: "Realtime layer", value: "Socket.IO" },
      { label: "AI path", value: "Diagram generation" },
    ],
  },
  {
    title: "EduReg",
    subtitle: "Course Registration Management System",
    problem:
      "Academic course registration needs reliable role-based workflows for admins, faculty, and students while preserving database integrity.",
    solution:
      "A PHP and MySQL mini-ERP with normalized tables, stored procedures, triggers, views, authentication, dashboards, registration, attendance, grades, reports, and notifications.",
    stack: [
      "PHP",
      "MySQL",
      "PDO",
      "HTML",
      "CSS",
      "Vanilla JavaScript",
      "Chart.js",
      "XAMPP",
    ],
    impact:
      "Implements DBMS concepts in a practical system: 13 normalized tables, role portals, admin CRUD, CSV reports, and student registration checks.",
    role: "Designed and implemented the DBMS-backed application structure, role workflows, database objects, and core registration modules.",
    repoUrl: "https://github.com/Vaayu0001/-DBMS-4.0",
    featured: true,
    imageUrl: "https://opengraph.githubassets.com/adarsh-portfolio/Vaayu0001/-DBMS-4.0",
    metrics: [
      { label: "Roles", value: "3" },
      { label: "Tables", value: "13" },
      { label: "DB features", value: "Views + triggers" },
    ],
  },
];
