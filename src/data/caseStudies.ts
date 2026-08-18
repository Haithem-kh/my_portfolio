import type { CaseStudy } from "../types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    projectSlug: "planforge-agent",
    problem: [
      "Entrepreneurs and startup founders spend weeks writing business plans and preparing pitch decks — tasks that are repetitive, time-consuming, and don't require deep creative insight at every step.",
      "Generic single-prompt LLM outputs produce shallow, unstructured plans that aren't usable by investors or accelerators without significant manual work.",
    ],
    objectives: [
      "Decompose business plan generation into 3 specialised agent roles that mirror a real founding team workflow.",
      "Orchestrate agents asynchronously so each stage (research → planning → deck) builds on the previous one without blocking.",
      "Produce a fully formatted, investor-ready 10-slide pitch deck as a PDF — not just a text outline.",
      "Use the a2a SDK to enable clean, typed agent-to-agent communication.",
    ],
    architecture: [
      "The system is a 3-node directed pipeline: Market Research Agent → Business Planning Agent → Pitch Deck Agent, orchestrated asynchronously via the a2a SDK.",
      "Each agent is a self-contained module with a narrow responsibility. They communicate through structured outputs passed downstream — the researcher's market analysis feeds the planner, and the planner's model feeds the deck generator.",
      "Google Gemini powers the reasoning at every node, with different prompt templates per agent role to enforce specialisation.",
    ],
    systemDesign: [
      "The orchestrator initialises all 3 agents, then fires the research agent with the user's business idea as input.",
      "Asyncio ensures that each stage awaits the upstream agent's output before starting, keeping the data flow sequential while remaining non-blocking.",
      "The final stage uses FPDF to programmatically layout a 10-slide PDF with structured sections: Market Overview, Problem/Solution, Business Model, Go-To-Market, Financials, Team, and Ask.",
    ],
    technologies: [
      { label: "Python", detail: "Core language for all agent logic and orchestration" },
      { label: "a2a SDK", detail: "Agent-to-agent communication framework for typed inter-agent messaging" },
      { label: "Google Gemini", detail: "LLM backbone powering reasoning at every agent node" },
      { label: "Asyncio", detail: "Asynchronous orchestration ensuring non-blocking agent pipeline" },
      { label: "FPDF", detail: "Programmatic PDF generation for the 10-slide pitch deck output" },
    ],
    memoryFramework: [
      "Each agent maintains short-term context within its own call, scoped to the current run.",
      "The pipeline passes structured JSON state objects between agents as the persistent memory layer — the downstream agent always has access to the full upstream output.",
      "No long-term memory store is needed for this pipeline: the structured passing of state between agents is sufficient for coherent end-to-end generation.",
    ],
    multiAgentWorkflow: [
      { step: "01 — Intake",          description: "User submits a business idea description as a natural language prompt." },
      { step: "02 — Market Research", description: "Research Agent gathers market size, trends, competitors, and opportunity framing via Gemini." },
      { step: "03 — Business Planning", description: "Planning Agent synthesises research into a structured business model, value proposition, and go-to-market strategy." },
      { step: "04 — Pitch Deck Gen",  description: "Deck Agent takes the plan and generates a formatted 10-slide investor pitch deck." },
      { step: "05 — PDF Export",      description: "FPDF renders the final structured deck as a downloadable PDF." },
    ],
    challenges: [
      {
        challenge: "Keeping agent outputs structurally compatible so downstream agents can parse and build on upstream work reliably.",
        solution: "Enforced strict JSON output schemas at every agent boundary, validated before passing to the next stage.",
      },
      {
        challenge: "Pitch deck formatting — FPDF layout required precise control over fonts, spacing, and page structure.",
        solution: "Built a reusable slide template layer that maps structured plan fields to fixed PDF layout positions per slide type.",
      },
    ],
    benchmarks: [
      { metric: "End-to-end generation time", value: "< 90s",    note: "From idea input to downloadable PDF" },
      { metric: "Pitch deck slides",           value: "10",       note: "Structured, investor-ready output" },
      { metric: "Agent pipeline stages",       value: "3",        note: "Research → Planning → Deck" },
    ],
    results: [
      "Reduced business plan + pitch deck creation from days of manual work to under 2 minutes of automated generation.",
      "Produced fully formatted, structured PDFs that users reported needing only light review before sharing with investors.",
      "Demonstrated clean agent-to-agent communication via the a2a SDK, establishing a reusable async pipeline pattern.",
    ],
    conclusion: [
      "PlanForge-Agent shows that decomposing a complex deliverable into a sequential multi-agent pipeline — with strict inter-agent data contracts — produces more coherent and usable output than a single large prompt.",
      "The async orchestration pattern via the a2a SDK is reusable across any staged AI workflow where each step depends on the previous one's structured output.",
    ],
    screenshots: [
      { src: "/images/projects/planforge.svg", caption: "PlanForge-Agent pipeline overview" },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.projectSlug === slug);
