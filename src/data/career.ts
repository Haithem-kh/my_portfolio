import type { ExperienceItem, EducationItem, Certificate } from "../types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "e1",
    role: "AI Engineering Intern — Final Year Project",
    company: "KPIT Engineering",
    location: "Sfax, Tunisia",
    startDate: "Feb 2026",
    endDate: "Jun 2026",
    description:
      "Designed and implemented a Memory-Augmented Multi-Agent LLM Framework for automated automotive test case generation.",
    highlights: [
      "Developed 6 memory systems: Working, Semantic, Episodic, Procedural, Associative, and Knowledge-Base",
      "Integrated vector retrieval using FAISS embeddings and similarity search",
      "Enhanced a LangGraph-based agentic framework with CLI, REST API, UI, sync, async, and batch execution modes",
      "Built benchmarking and validation pipelines to evaluate memory-enabled agents against baseline systems",
    ],
    tech: ["Python", "LangGraph", "LangChain", "OpenAI", "FAISS", "Docker"],
  },
  {
    id: "e2",
    role: "AI Intern — SummerCamp",
    company: "Talan Tunisia",
    location: "Tunis, Tunisia",
    startDate: "Jul 2025",
    endDate: "Aug 2025",
    description:
      "Contributed to the development of RevMA, a full-stack AI-based market reverse-engineering platform.",
    highlights: [
      "Designed a Targeting Agent and multi-agent workflow using Python, FastAPI, and Google Gemini Pro",
      "Assisted in frontend development with Next.js and TypeScript",
      "Handled database integration using PostgreSQL and MongoDB",
      "Won Talan Challenge with the AI Corporate Intelligence Dashboard project",
    ],
    tech: ["Python", "FastAPI", "Google Gemini Pro", "Next.js", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    id: "e3",
    role: "Software Development Intern",
    company: "TFM — Tunisia Fleet Management",
    location: "Tunis, Tunisia",
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    description:
      "Developed an employee management web application and gained first hands-on enterprise software development experience.",
    highlights: [
      "Built a full employee management web application with Spring Boot and Angular",
      "Designed and integrated RESTful APIs for seamless frontend-backend interaction",
      "Learned enterprise software architecture and development best practices",
    ],
    tech: ["Spring Boot", "Angular", "Java", "PostgreSQL", "REST API"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "ed1",
    degree: "Engineering Cycle in Computer Science",
    institution: "ENSI — École Nationale des Sciences de l'Informatique",
    location: "Tunisia",
    startDate: "2023",
    endDate: "2026",
    achievements: [
      "Specialization in Artificial Intelligence & Intelligent Systems",
      "Final-year project: Memory-Augmented Multi-Agent LLM Framework at KPIT Engineering",
      "Winner — Talan Challenge 2025 (AI Corporate Intelligence Dashboard)",
    ],
  },
  {
    id: "ed2",
    degree: "Preparatory Cycle in Physics and Chemistry",
    institution: "IPEIS — Institut Préparatoire aux Études d'Ingénieurs de Sfax",
    location: "Sfax, Tunisia",
    startDate: "2021",
    endDate: "2023",
    achievements: [
      "Rigorous two-year preparatory program in mathematics, physics, and chemistry",
      "Qualified for engineering school competitive entrance examination",
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "c5",
    title: "Dataiku ML Practitioner",
    issuer: "Dataiku",
    date: "2026",
    image: "/images/certificates/dataiku-ml.png",
    skills: ["Machine Learning", "MLOps", "Data Science", "Dataiku DSS"],
  },
  {
    id: "c6",
    title: "Dataiku Core Designer",
    issuer: "Dataiku",
    date: "2026",
    image: "/images/certificates/dataiku-core.png",
    skills: ["Data Engineering", "Data Pipelines", "Dataiku DSS", "Analytics"],
  },
  {
    id: "c2",
    title: "IEEEXtreme 17.0 — 24-Hour Programming Competition",
    issuer: "IEEE",
    date: "2023",
    image: "/images/certificates/xtreme.png",
    skills: ["Competitive Programming", "Algorithms", "Data Structures", "Problem Solving"],
  },
  {
    id: "c3",
    title: "University Competitive Programming Contest",
    issuer: "ENSI",
    date: "2024",
    image: "/images/certificates/cp.png",
    skills: ["Algorithms", "Problem Solving", "C++", "Competitive Programming"],
  },
  {
    id: "c4",
    title: "DELF — Diplôme d'Études en Langue Française",
    issuer: "French Ministry of Education",
    date: "2013",
    image: "/images/certificates/delf.png",
    skills: ["French Language", "Communication"],
  },
];
