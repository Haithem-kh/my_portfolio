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
      { src: "/images/projects/planforge.jpg", caption: "PlanForge-Agent pipeline overview" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────── */
  /*  Memory-Augmented Multi-Agent LLM Framework                    */
  /* ─────────────────────────────────────────────────────────────── */
  {
    projectSlug: "memory-augmented-multi-agent-llm",
    problem: [
      "Standard LLM agents are stateless — they lose all context between interactions, making them unreliable for complex, multi-step tasks like automated test case generation where historical context and learned patterns matter.",
      "Existing agentic frameworks treat memory as a simple conversation buffer, ignoring the rich, multi-dimensional memory structures that human cognition relies on for reasoning and pattern recognition.",
    ],
    objectives: [
      "Design and implement 6 distinct memory systems (Working, Semantic, Episodic, Procedural, Associative, Knowledge-Base) that mirror cognitive science models of human memory.",
      "Integrate these memory systems into a LangGraph-based multi-agent framework for automated automotive test case generation at KPIT Engineering.",
      "Expose the framework through CLI, REST API, and UI with sync, async, and batch execution modes.",
      "Build a benchmarking pipeline to quantitatively validate memory-enabled agents against stateless baselines.",
    ],
    architecture: [
      "The framework is built on LangGraph, orchestrating multiple specialised agents that share access to a unified memory layer. Each agent can read from and write to any of the 6 memory stores depending on the task context.",
      "Memory systems are modular — each implements a common interface but uses a different storage and retrieval strategy. FAISS powers vector similarity search for Semantic and Associative memory, while Episodic and Procedural memories use structured event logs.",
      "A central Memory Manager routes memory operations, handling conflict resolution when multiple agents attempt concurrent writes to the same memory store.",
    ],
    systemDesign: [
      "Working Memory acts as the agent's scratch pad — holding the current task state, intermediate results, and active constraints during a single execution run.",
      "Semantic Memory stores domain knowledge as FAISS-indexed vector embeddings, enabling retrieval of relevant automotive testing patterns via similarity search.",
      "Episodic Memory records timestamped interaction histories, allowing agents to recall past test generation sessions and their outcomes.",
      "Procedural Memory captures successful multi-step workflows as reusable templates that agents can instantiate for similar future tasks.",
      "Associative Memory builds a graph of concept relationships, enabling cross-domain reasoning by linking related test patterns, failure modes, and component specifications.",
      "Knowledge-Base Memory maintains structured, curated domain facts — automotive standards, component specs, and testing protocols — as a grounded reference layer.",
    ],
    technologies: [
      { label: "Python", detail: "Core language for framework logic, agent definitions, and memory system implementations" },
      { label: "LangGraph", detail: "Graph-based agent orchestration framework managing multi-agent workflows and state transitions" },
      { label: "LangChain", detail: "LLM abstraction layer for prompt management, chain composition, and tool integration" },
      { label: "OpenAI", detail: "LLM backbone for agent reasoning, test case generation, and natural language understanding" },
      { label: "FAISS", detail: "Vector similarity search engine powering Semantic and Associative memory retrieval" },
      { label: "Docker", detail: "Containerisation for reproducible deployment and isolated execution environments" },
      { label: "FastAPI", detail: "REST API layer exposing the framework for external integration and UI communication" },
    ],
    memoryFramework: [
      "This project IS the memory framework. It implements 6 cognitively-inspired memory systems, each addressing a different aspect of agent reasoning: short-term task state (Working), domain knowledge retrieval (Semantic), historical recall (Episodic), learned procedures (Procedural), concept linking (Associative), and grounded facts (Knowledge-Base).",
      "Memory systems are composable — agents can be configured with any subset of memories depending on the task requirements, enabling controlled experiments to measure each memory type's contribution.",
      "The benchmarking pipeline runs identical test generation tasks with different memory configurations, comparing output quality, consistency, and coverage metrics against fully stateless baseline agents.",
    ],
    multiAgentWorkflow: [
      { step: "01 — Input Parsing",      description: "User submits an automotive component specification or test requirement via CLI, API, or UI." },
      { step: "02 — Context Retrieval",   description: "Memory Manager queries relevant memories — past test cases (Episodic), domain patterns (Semantic), and component specs (Knowledge-Base)." },
      { step: "03 — Test Planning",       description: "Planning Agent uses retrieved context to structure a test strategy, checking Procedural Memory for reusable workflow templates." },
      { step: "04 — Test Generation",     description: "Generation Agent produces detailed test cases, leveraging Associative Memory to identify edge cases through concept linking." },
      { step: "05 — Validation",          description: "Validation Agent reviews generated tests against automotive standards and flags inconsistencies." },
      { step: "06 — Memory Update",       description: "Successful test generation sessions are persisted to Episodic and Procedural memory for future reuse." },
    ],
    challenges: [
      {
        challenge: "Balancing memory retrieval latency with agent response time — querying 6 memory systems per interaction risked unacceptable slowdowns.",
        solution: "Implemented a relevance-gated retrieval strategy: the Memory Manager pre-filters which memory systems to query based on task type, reducing unnecessary lookups by ~60%.",
      },
      {
        challenge: "Preventing memory pollution — agents writing low-quality or contradictory information to shared memory stores could degrade future performance.",
        solution: "Added a confidence-scored write gate: only outputs exceeding a quality threshold (validated by the Validation Agent) are persisted to long-term memory.",
      },
      {
        challenge: "Designing a fair benchmarking protocol — comparing memory-enabled agents against baselines required isolating memory's impact from other variables.",
        solution: "Built a controlled experiment pipeline with fixed prompts, seeds, and evaluation rubrics, running each configuration multiple times to ensure statistical significance.",
      },
    ],
    benchmarks: [
      { metric: "Memory systems implemented",   value: "6",     note: "Working, Semantic, Episodic, Procedural, Associative, Knowledge-Base" },
      { metric: "Execution modes",              value: "3",     note: "Sync, Async, and Batch" },
      { metric: "Interface options",             value: "3",     note: "CLI, REST API, and Web UI" },
      { metric: "Retrieval latency (avg)",       value: "<200ms", note: "Per memory query with FAISS indexing" },
    ],
    results: [
      "Memory-enabled agents produced more consistent and contextually relevant test cases compared to stateless baselines, with measurable improvements in coverage and edge-case detection.",
      "The modular memory architecture allowed controlled ablation studies — disabling individual memory systems to quantify each one's specific contribution to output quality.",
      "The framework was successfully deployed at KPIT Engineering for automotive test case generation, demonstrating real-world industrial applicability.",
      "Established a reusable, open architecture for memory-augmented LLM agents that can be adapted beyond automotive testing to any domain requiring persistent agent reasoning.",
    ],
    conclusion: [
      "This project demonstrates that equipping LLM agents with structured, multi-dimensional memory systems significantly improves their ability to handle complex, context-dependent tasks — moving beyond stateless prompt-response patterns toward agents that learn, remember, and reason over time.",
      "The cognitively-inspired memory taxonomy (Working, Semantic, Episodic, Procedural, Associative, Knowledge-Base) provides a principled framework for deciding what to remember, how to store it, and when to retrieve it — a design pattern applicable to any domain where agent persistence matters.",
    ],
    screenshots: [
      { src: "/images/projects/memory-framework.jpg", caption: "Memory-Augmented Multi-Agent LLM architecture overview" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────── */
  /*  AI Corporate Intelligence Dashboard                           */
  /* ─────────────────────────────────────────────────────────────── */
  {
    projectSlug: "corporate-intelligence-dashboard",
    problem: [
      "Corporate intelligence research is manual and fragmented — analysts spend hours gathering data across financials, operations, ESG, and competitive positioning from scattered sources, then manually compiling reports.",
      "Existing tools produce either raw data dumps or superficial summaries, failing to deliver structured, multi-dimensional analysis that decision-makers can act on immediately.",
    ],
    objectives: [
      "Build a multi-agent research system that autonomously investigates companies across 8 analysis dimensions in parallel.",
      "Stream structured results in real time to a React dashboard so users can monitor research progress as it happens.",
      "Win the Talan Challenge by delivering a production-quality solution within the competition timeframe.",
      "Design a modular agent architecture where each dimension agent can be independently improved or replaced.",
    ],
    architecture: [
      "The system uses a LangGraph/LangChain orchestration layer that spawns 8 specialised research agents — one per analysis dimension (Financials, Operations, Tech Stack, ESG, Competitive Landscape, Market Position, Leadership, and Risk Assessment).",
      "A central Orchestrator Agent manages the workflow: distributing tasks, collecting agent outputs, and handling failures with retry logic. Agents run concurrently for maximum throughput.",
      "A FastAPI backend serves as the bridge between the agent layer and the React frontend, streaming partial results via Server-Sent Events (SSE) so the dashboard updates in real time.",
    ],
    systemDesign: [
      "Each dimension agent follows a shared pattern: query refinement → web search → extraction → structured output. Google Gemini handles reasoning while search APIs provide real-time data.",
      "The Orchestrator maintains a progress map tracking which dimensions are complete, in-progress, or failed, enabling the frontend to show a live research status dashboard.",
      "Final reports are structured JSON documents with sections per dimension, each containing key findings, confidence scores, and source citations — exportable as formatted reports.",
    ],
    technologies: [
      { label: "Python", detail: "Core language for agent logic and backend services" },
      { label: "LangGraph", detail: "Graph-based multi-agent orchestration with state management" },
      { label: "LangChain", detail: "LLM integration, prompt templates, and tool abstraction" },
      { label: "FastAPI", detail: "High-performance async backend with SSE streaming endpoints" },
      { label: "React", detail: "Frontend dashboard with real-time updates and interactive report viewing" },
      { label: "Google Gemini", detail: "LLM backbone for research reasoning and structured extraction" },
    ],
    memoryFramework: [
      "Each agent maintains run-scoped working memory containing its current research focus, intermediate findings, and search state.",
      "The Orchestrator uses a shared state graph (LangGraph state) as the coordination memory — tracking dimension progress, collected results, and inter-agent dependencies.",
      "No persistent long-term memory is used; each research session starts fresh to ensure up-to-date results without stale cached data.",
    ],
    multiAgentWorkflow: [
      { step: "01 — Company Input",        description: "User enters a company name or identifier through the React dashboard." },
      { step: "02 — Query Planning",        description: "Orchestrator generates targeted search queries for each of the 8 analysis dimensions." },
      { step: "03 — Parallel Research",     description: "8 dimension agents execute concurrently, each researching their assigned area via search APIs and Gemini reasoning." },
      { step: "04 — Result Streaming",      description: "Completed dimension reports stream to the frontend via SSE, updating the dashboard in real time." },
      { step: "05 — Report Assembly",       description: "Orchestrator compiles all dimension outputs into a unified corporate intelligence report." },
      { step: "06 — Delivery",             description: "Final structured report is displayed in the dashboard and available for export." },
    ],
    challenges: [
      {
        challenge: "Coordinating 8 agents running in parallel while ensuring consistent output format and handling partial failures gracefully.",
        solution: "Used LangGraph's state management to enforce output schemas per dimension and implemented per-agent retry logic with timeout fallbacks.",
      },
      {
        challenge: "Delivering real-time research progress to the frontend without polling or WebSocket complexity.",
        solution: "Implemented Server-Sent Events (SSE) via FastAPI, pushing dimension completion events to the React dashboard as they arrive.",
      },
    ],
    benchmarks: [
      { metric: "Analysis dimensions",      value: "8",      note: "Financials, Operations, Tech, ESG, Competition, Market, Leadership, Risk" },
      { metric: "Parallel agent execution",  value: "8",      note: "All dimensions researched concurrently" },
      { metric: "Full report generation",    value: "<3min",  note: "Complete 8-dimension corporate report" },
    ],
    results: [
      "Won the Talan Challenge, selected as the best project among competing teams.",
      "Delivered structured, multi-dimensional corporate intelligence reports that would take analysts hours to compile manually.",
      "Real-time streaming dashboard gave users immediate visibility into research progress, creating a responsive and transparent user experience.",
      "Modular agent architecture allows easy extension — adding a 9th dimension requires only writing a new agent module without touching the orchestration logic.",
    ],
    conclusion: [
      "The AI Corporate Intelligence Dashboard demonstrates that multi-agent architectures excel at parallelisable research tasks — dividing a complex analysis into independent dimensions and executing them concurrently produces comprehensive results faster than any sequential approach.",
      "Winning the Talan Challenge validated the system's practical value and production readiness, proving that agentic AI can deliver actionable business intelligence at speed.",
    ],
    screenshots: [
      { src: "/images/projects/corporate-intel.jpg", caption: "Corporate Intelligence Dashboard — real-time research view" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────── */
  /*  RevMA — Market Reverse-Engineering Platform                   */
  /* ─────────────────────────────────────────────────────────────── */
  {
    projectSlug: "revma-platform",
    problem: [
      "Understanding a competitor's market strategy typically requires expensive market research firms or weeks of manual analysis — making it inaccessible to most teams and too slow for fast-moving markets.",
      "Available competitive intelligence tools provide surface-level data (traffic, keywords) but don't reverse-engineer the underlying strategic decisions — targeting, positioning, messaging, and channel selection.",
    ],
    objectives: [
      "Build a full-stack AI platform that can reverse-engineer a competitor's market strategy from publicly available data.",
      "Design a Targeting Agent and multi-agent workflow that decomposes market analysis into structured, actionable intelligence.",
      "Deliver a production-quality web application with a Next.js frontend, FastAPI backend, and dual-database architecture.",
      "Gain hands-on experience integrating AI agents into a full-stack production system during the Talan internship.",
    ],
    architecture: [
      "RevMA uses a multi-agent architecture where specialised agents handle different aspects of market reverse-engineering: targeting analysis, positioning extraction, messaging deconstruction, and channel identification.",
      "The backend is built on FastAPI with Google Gemini Pro powering agent reasoning. A dual-database layer uses PostgreSQL for structured data (user accounts, saved analyses) and MongoDB for flexible document storage (agent outputs, market reports).",
      "The frontend is a Next.js/TypeScript application providing an interactive dashboard where users can input competitors, trigger analyses, and explore structured results.",
    ],
    systemDesign: [
      "The Targeting Agent — designed as the core contribution — analyses competitor signals (content, pricing, messaging) to infer their target customer segments, personas, and positioning strategy.",
      "The multi-agent workflow chains specialised agents sequentially: data collection → targeting analysis → positioning extraction → strategy synthesis, with each agent's output feeding the next.",
      "The FastAPI backend exposes structured API endpoints for triggering analyses, retrieving results, and managing user sessions, with async processing for long-running agent tasks.",
    ],
    technologies: [
      { label: "Python", detail: "Backend logic, agent implementations, and API layer" },
      { label: "FastAPI", detail: "High-performance async backend with structured API endpoints" },
      { label: "Google Gemini Pro", detail: "LLM backbone for market analysis reasoning and strategy extraction" },
      { label: "Next.js", detail: "React-based frontend framework with server-side rendering" },
      { label: "TypeScript", detail: "Type-safe frontend development ensuring robust UI logic" },
      { label: "PostgreSQL", detail: "Relational database for user data and structured analysis metadata" },
      { label: "MongoDB", detail: "Document database for flexible storage of agent outputs and market reports" },
    ],
    memoryFramework: [
      "Agent memory is session-scoped — each analysis run maintains working context about the target competitor, accumulated findings, and intermediate reasoning.",
      "MongoDB acts as the persistent memory layer, storing completed analyses as retrievable documents that users can revisit and compare over time.",
      "No cross-session agent memory is implemented; each analysis starts fresh to avoid bias from previous competitor analyses contaminating new results.",
    ],
    multiAgentWorkflow: [
      { step: "01 — Competitor Input",     description: "User identifies a competitor through the Next.js dashboard." },
      { step: "02 — Data Collection",      description: "Collection agent gathers publicly available competitor signals — content, pricing, messaging, and presence." },
      { step: "03 — Targeting Analysis",   description: "Targeting Agent (core contribution) infers customer segments, personas, and market positioning from collected data." },
      { step: "04 — Strategy Synthesis",   description: "Synthesis agent compiles targeting, positioning, and channel findings into a structured market strategy report." },
      { step: "05 — Report Delivery",      description: "Results are persisted to MongoDB and rendered in the interactive Next.js dashboard." },
    ],
    challenges: [
      {
        challenge: "Designing a Targeting Agent that could reliably infer market segments from indirect signals rather than explicit competitor disclosures.",
        solution: "Used multi-signal triangulation — combining pricing tiers, content topics, messaging tone, and channel selection as converging evidence for target segment inference.",
      },
      {
        challenge: "Managing a dual-database architecture (PostgreSQL + MongoDB) without creating data consistency issues.",
        solution: "Established clear data ownership boundaries: PostgreSQL owns user/auth/metadata, MongoDB owns agent outputs/reports, with referential links via analysis IDs.",
      },
    ],
    benchmarks: [
      { metric: "Analysis dimensions",     value: "4",     note: "Targeting, Positioning, Messaging, Channel" },
      { metric: "Database engines",        value: "2",     note: "PostgreSQL + MongoDB dual-layer" },
      { metric: "Tech stack layers",       value: "3",     note: "Next.js frontend, FastAPI backend, AI agent layer" },
    ],
    results: [
      "Successfully delivered a functional AI-powered market reverse-engineering platform during the Talan SummerCamp internship.",
      "The Targeting Agent demonstrated the ability to infer plausible customer segments from public competitor signals, validated through manual comparison with known market strategies.",
      "Gained significant hands-on experience integrating AI agents into a production full-stack architecture with a real team.",
      "The platform architecture served as the foundation for further development at Talan after the internship concluded.",
    ],
    conclusion: [
      "RevMA demonstrates that AI agents can be effectively integrated into full-stack production platforms to automate complex analytical tasks that previously required human domain expertise.",
      "The internship experience reinforced that designing clear agent responsibilities (especially the Targeting Agent) and maintaining clean data boundaries between databases are critical for building maintainable AI-powered applications.",
    ],
    screenshots: [
      { src: "/images/projects/revma.jpg", caption: "RevMA platform — market reverse-engineering dashboard" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────── */
  /*  CleanGrid-AI                                                  */
  /* ─────────────────────────────────────────────────────────────── */
  {
    projectSlug: "cleangrid-ai",
    problem: [
      "Understanding how collective behaviour emerges from individual agent actions is a fundamental challenge in multi-agent systems — mathematical models alone can't capture the complex dynamics of agent-environment interactions.",
      "Most multi-agent simulations focus on cooperative or competitive tasks, but few study the emergent patterns that arise from simple probabilistic behaviours in shared environments like cleaning or resource management.",
    ],
    objectives: [
      "Build a grid-based multi-agent simulation environment where agents with probabilistic behaviours interact with a shared dirt-accumulating environment.",
      "Study emergent collective cleaning patterns — how individual agent rules lead to observable group-level behaviours without explicit coordination.",
      "Track and visualise dirt dynamics, agent movement patterns, and cleaning efficiency over simulation time.",
      "Provide statistical analysis tools to characterise emergent patterns across different agent population sizes and behaviour configurations.",
    ],
    architecture: [
      "The simulation uses a discrete 2D grid environment where each cell can accumulate dirt over time according to configurable probability distributions.",
      "Agents are autonomous entities with probabilistic decision rules — at each time step, they observe their local neighbourhood and choose between moving, cleaning, or idling based on configurable probability thresholds.",
      "A central Simulation Engine manages the tick cycle: environment dirt accumulation → agent observation → agent action → state update → metrics logging.",
    ],
    systemDesign: [
      "The environment model tracks dirt levels per cell, with configurable accumulation rates and spatial patterns (uniform, clustered, gradient) to study how environmental structure affects emergent cleaning behaviour.",
      "Agent behaviours are parameterised by probability vectors — each agent's cleaning threshold, movement bias, and exploration rate can be independently tuned to study heterogeneous populations.",
      "The metrics pipeline captures per-tick statistics: total dirt level, cleaning rate, agent coverage, spatial clustering, and efficiency metrics, feeding into Matplotlib visualisations for analysis.",
    ],
    technologies: [
      { label: "Python", detail: "Core simulation logic, agent definitions, and experiment orchestration" },
      { label: "NumPy", detail: "Efficient grid state management, probability calculations, and vectorised environment updates" },
      { label: "Matplotlib", detail: "Visualisation of simulation dynamics, agent trajectories, and statistical analysis plots" },
      { label: "Random", detail: "Probabilistic behaviour generation and stochastic environment modelling" },
    ],
    memoryFramework: [
      "Agents operate with minimal memory — each maintains only its current position and local observation window, making emergent patterns a product of collective interaction rather than individual planning.",
      "The Simulation Engine maintains the full grid state as shared environment memory that all agents can locally observe but no single agent can fully access.",
      "Experiment-level memory is captured in the metrics pipeline, recording the full time-series of simulation state for post-hoc analysis.",
    ],
    multiAgentWorkflow: [
      { step: "01 — Initialisation",     description: "Grid environment is created with configured size, dirt accumulation rates, and agent population." },
      { step: "02 — Dirt Accumulation",  description: "Environment accumulates dirt on cells according to spatial probability distributions." },
      { step: "03 — Agent Observation",  description: "Each agent observes its local neighbourhood (dirt levels, other agents, boundaries)." },
      { step: "04 — Action Selection",   description: "Agents probabilistically choose to clean, move, or idle based on observation and behaviour parameters." },
      { step: "05 — State Update",       description: "Environment updates dirt levels, agent positions are moved, and collision resolution is applied." },
      { step: "06 — Metrics Logging",    description: "Per-tick statistics are captured and accumulated for analysis and visualisation." },
    ],
    challenges: [
      {
        challenge: "Identifying meaningful emergent patterns in noisy simulation data — distinguishing genuine collective behaviour from random fluctuations.",
        solution: "Implemented statistical significance testing and ran multiple simulation repetitions per configuration to compute mean behaviours with confidence intervals.",
      },
      {
        challenge: "Simulation performance at scale — large grids with many agents caused tick rates to drop, limiting the ability to run long experiments.",
        solution: "Vectorised environment updates using NumPy array operations instead of per-cell Python loops, achieving ~10x speedup for grid state management.",
      },
    ],
    benchmarks: [
      { metric: "Agent behaviour parameters",  value: "3",       note: "Cleaning threshold, movement bias, exploration rate" },
      { metric: "Dirt distribution modes",      value: "3",       note: "Uniform, Clustered, Gradient" },
      { metric: "Metrics tracked per tick",     value: "5+",      note: "Dirt level, cleaning rate, coverage, clustering, efficiency" },
    ],
    results: [
      "Successfully demonstrated that simple probabilistic agent rules produce observable emergent cleaning patterns — high-dirt regions attracted agent clusters without explicit coordination signals.",
      "Population size experiments revealed non-linear efficiency scaling: doubling agents did not double cleaning rate due to spatial interference and redundant cleaning.",
      "Heterogeneous agent populations (mixed behaviour parameters) consistently outperformed homogeneous populations, suggesting diversity drives more effective emergent behaviour.",
      "Provided clear Matplotlib visualisations that made emergent patterns intuitive and accessible for analysis.",
    ],
    conclusion: [
      "CleanGrid-AI demonstrates that emergent collective behaviour arises naturally from simple probabilistic rules — agents don't need explicit coordination protocols to achieve effective group-level outcomes.",
      "The simulation provides a controlled testbed for studying multi-agent dynamics, with insights applicable to real-world swarm robotics, distributed resource management, and autonomous cleaning systems.",
    ],
    screenshots: [
      { src: "/images/projects/cleangrid.jpg", caption: "CleanGrid-AI — multi-agent grid simulation and dirt dynamics" },
    ],
  },

  /* ─────────────────────────────────────────────────────────────── */
  /*  Employee Management Web App                                   */
  /* ─────────────────────────────────────────────────────────────── */
  {
    projectSlug: "employee-management-app",
    problem: [
      "Managing employee records across departments using spreadsheets or legacy tools leads to data inconsistencies, access control issues, and manual overhead that doesn't scale with organisational growth.",
      "Small to mid-size companies often lack the budget for enterprise HR systems, but still need reliable, structured employee data management with proper CRUD operations and data integrity.",
    ],
    objectives: [
      "Build an enterprise-grade employee management web application with a clean separation between frontend and backend.",
      "Implement a RESTful API layer using Spring Boot that handles all employee CRUD operations with proper validation and error handling.",
      "Create a responsive Angular frontend that provides an intuitive interface for managing employee records.",
      "Gain first hands-on experience with enterprise software development practices during the TFM internship.",
    ],
    architecture: [
      "The application follows a classic client-server architecture: an Angular single-page application communicates with a Spring Boot REST API backend, backed by a PostgreSQL relational database.",
      "The backend is structured in layers: Controller (API endpoints) → Service (business logic) → Repository (data access via Spring Data JPA), enforcing separation of concerns.",
      "The frontend uses Angular's component-based architecture with services for API communication, reactive forms for data entry, and Angular Router for navigation.",
    ],
    systemDesign: [
      "The REST API follows standard conventions: resource-based URLs, proper HTTP method semantics (GET/POST/PUT/DELETE), consistent error responses, and input validation at the controller level.",
      "The PostgreSQL schema models employees with fields for personal info, department assignment, role, contact details, and timestamps — with foreign key constraints ensuring referential integrity.",
      "The Angular frontend implements table views with sorting and filtering, detail/edit forms with client-side validation, and confirmation dialogs for destructive actions like deletion.",
    ],
    technologies: [
      { label: "Spring Boot", detail: "Java-based backend framework for REST API development with auto-configuration" },
      { label: "Angular", detail: "TypeScript-based frontend framework for building the single-page management interface" },
      { label: "Java", detail: "Backend programming language for business logic and API implementation" },
      { label: "PostgreSQL", detail: "Relational database for structured employee data storage with integrity constraints" },
      { label: "REST API", detail: "Architectural style for clean client-server communication via HTTP" },
    ],
    memoryFramework: [
      "This project does not use AI or agent memory systems — it is a traditional web application.",
      "State persistence is handled by PostgreSQL as the single source of truth for all employee data.",
      "Frontend state management uses Angular's built-in services and RxJS observables for reactive data flow between components.",
    ],
    multiAgentWorkflow: [
      { step: "01 — User Action",       description: "User interacts with the Angular frontend — viewing, creating, editing, or deleting employee records." },
      { step: "02 — API Request",       description: "Angular service sends an HTTP request to the appropriate Spring Boot REST endpoint." },
      { step: "03 — Business Logic",    description: "Service layer validates the request, applies business rules, and delegates to the repository layer." },
      { step: "04 — Data Persistence",  description: "Spring Data JPA executes the database operation against PostgreSQL." },
      { step: "05 — Response",          description: "Backend returns a structured JSON response; Angular updates the UI reactively." },
    ],
    challenges: [
      {
        challenge: "First time working with enterprise architecture patterns — understanding the layered Spring Boot structure (Controller → Service → Repository) and when to put logic where.",
        solution: "Followed Spring Boot best practices documentation rigorously and implemented each layer incrementally, testing API endpoints with Postman before connecting the frontend.",
      },
      {
        challenge: "Connecting Angular's reactive form system with the REST API — handling async validation, error states, and optimistic UI updates.",
        solution: "Used Angular's HttpClient with RxJS operators (switchMap, catchError) to manage API calls, and implemented loading states and error feedback in the UI.",
      },
    ],
    benchmarks: [
      { metric: "API endpoints",           value: "5+",     note: "Full CRUD + search/filter operations" },
      { metric: "Architecture layers",     value: "3",      note: "Controller → Service → Repository" },
      { metric: "Development duration",    value: "1 month", note: "First enterprise internship at TFM" },
    ],
    results: [
      "Successfully delivered a functional employee management system that met TFM's requirements for structured data management.",
      "Gained foundational experience with enterprise software architecture that directly informed later work on more complex full-stack AI systems.",
      "Learned production practices: version control with Git, RESTful API design conventions, relational database modelling, and client-server debugging.",
      "The clean separation of concerns (Angular frontend ↔ Spring Boot API ↔ PostgreSQL) established a mental model for full-stack development carried into subsequent projects.",
    ],
    conclusion: [
      "The Employee Management Web App was a foundational project — not technically complex, but critically important for building enterprise software development instincts: layered architecture, API design, data modelling, and frontend-backend integration.",
      "The patterns learned here (RESTful APIs, component-based frontends, relational data modelling) directly transferred to later projects like RevMA and the Corporate Intelligence Dashboard, where the same architectural principles were applied at greater scale.",
    ],
    screenshots: [
      { src: "/images/projects/employee-mgmt.jpg", caption: "Employee Management App — Angular dashboard view" },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.projectSlug === slug);

