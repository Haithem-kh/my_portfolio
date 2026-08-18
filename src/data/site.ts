import type { NavLink, SocialLink, Stat } from "../types";

export const PROFILE = {
  name: "Haithem Khachlouf",
  title: "AI Engineer",
  subtitle:
    "Computer Sciences Engineer (ENSI) specializing in Multi-Agent LLM Systems, Memory-Augmented AI Frameworks, and Full-Stack AI-driven platforms.",
  location: "Sfax, Tunisia",
  email: "haithamkhachlouf@gmail.com",
  phone: "+216 54124201",
  resumeUrl: "/documents/resume.pdf",
  heroHeading: "Building multi-agent LLM systems,",
  heroHeadingAccent: "memory-augmented AI frameworks, and full-stack AI-driven platforms.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home",         href: "home" },
  { label: "About",        href: "about" },
  { label: "Projects",     href: "projects" },
  { label: "Skills",       href: "skills" },
  { label: "Experience",   href: "experience" },
  { label: "Education",    href: "education" },
  { label: "Certificates", href: "certificates" },
  { label: "Resume",       href: "resume" },
  { label: "Contact",      href: "contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub",   href: "https://github.com/Haithem-kh",             icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/haithem-khachlouf", icon: "linkedin" },
  { label: "Email",    href: "mailto:haithamkhachlouf@gmail.com",          icon: "mail" },
];

export const STATS: Stat[] = [
  { label: "Years of Experience",    value: 3,  suffix: "+" },
  { label: "AI / LLM Projects",      value: 6,  suffix: "+" },
  { label: "Agent Memory Systems",   value: 6,  suffix: "" },
  { label: "Technologies Mastered",  value: 32, suffix: "+" },
];
