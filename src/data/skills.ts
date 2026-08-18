import type { SkillCategory } from "../types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai",
    title: "Agentic AI & LLMs",
    icon: "BrainCircuit",
    skills: [
      "LangGraph", "LangChain", "OpenAI", "Google Gemini",
      "Multi-Agent Systems", "Memory-Augmented Agents",
      "RAG", "Prompt Engineering", "Vector Search",
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: "Cpu",
    skills: [
      "Scikit-learn", "Predictive Modeling",
      "Data Analysis", "Feature Engineering", "FAISS",
    ],
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "C++", "Java", "PHP", "JavaScript", "SQL"],
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    icon: "Server",
    skills: ["FastAPI", "Django", "Spring Boot"],
  },
  {
    id: "frontend",
    title: "Web Development",
    icon: "Layers",
    skills: ["React.js", "Angular", "Next.js", "TypeScript", "HTML", "CSS"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "SSMS"],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "Terminal",
    skills: ["Git", "GitHub", "Docker", "Streamlit", "VS Code", "IntelliJ IDEA"],
  },
  {
    id: "data",
    title: "Data & BI",
    icon: "BarChart2",
    skills: ["Power BI", "SSIS", "Hadoop"],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    icon: "Link",
    skills: ["Metamask", "Ganache", "Truffle"],
  },
];
