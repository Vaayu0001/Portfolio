export type Metric = {
  label: string;
  value: string;
};

export type Profile = {
  fullName: string;
  headline: string;
  headlineFallback: string;
  location: string;
  email: string;
  about: string;
  aboutFallback: string;
  github: string;
  linkedin: string;
  siteUrl: string;
  resumePath: string;
  availability: string;
  highlights: Metric[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  role: string;
  repoUrl: string;
  demoUrl?: string;
  featured: boolean;
  imageUrl: string;
  metrics: Metric[];
};

export type ExperienceEntry = {
  title: string;
  organization: string;
  period: string;
  summary: string;
};

export type CertificationEntry = {
  title: string;
  issuer: string;
  status: string;
};
