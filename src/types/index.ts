export interface NavLink { label: string; href: string; }
export interface SocialLink { label: string; href: string; icon: "github" | "linkedin" | "mail" | "twitter"; }
export interface SkillCategory { id: string; title: string; icon: string; skills: string[]; }
export type ProjectCategory = "AI / Agentic Systems" | "Full-Stack" | "Machine Learning" | "Blockchain" | "Tools & Automation";
export interface Project {
  id: string; slug: string; title: string; tagline: string; description: string;
  image: string; category: ProjectCategory; tech: string[]; features: string[];
  githubUrl?: string; demoUrl?: string; featured?: boolean;
  status: "Production" | "In Progress" | "Archived" | "Prototype"; year: string;
}
export interface CaseStudy {
  projectSlug: string; problem: string[]; objectives: string[];
  architecture: string[]; systemDesign: string[];
  technologies: { label: string; detail: string }[];
  memoryFramework: string[];
  multiAgentWorkflow: { step: string; description: string }[];
  challenges: { challenge: string; solution: string }[];
  benchmarks: { metric: string; value: string; note?: string }[];
  results: string[]; conclusion: string[];
  screenshots: { src: string; caption: string }[];
  demoVideoUrl?: string;
}
export interface ExperienceItem {
  id: string; role: string; company: string; companyLogo?: string;
  location: string; startDate: string; endDate: string;
  description: string; highlights: string[]; tech: string[];
}
export interface EducationItem {
  id: string; degree: string; institution: string; location: string;
  startDate: string; endDate: string; achievements: string[];
}
export interface Certificate {
  id: string; title: string; issuer: string; date: string;
  credentialUrl?: string; image: string; skills: string[];
}
export interface Stat { label: string; value: number; suffix?: string; }
