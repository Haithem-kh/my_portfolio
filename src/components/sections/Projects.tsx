import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../../data/projects";
import { staggerContainer, viewportOnce } from "../../lib/motion";
import { cn } from "../../lib/cn";
import type { ProjectCategory } from "../../types";

const CATEGORIES: ("All" | ProjectCategory)[] = ["All", "AI / Agentic Systems", "Full-Stack", "Machine Learning", "Blockchain", "Tools & Automation"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesQuery = query.trim() === "" || p.title.toLowerCase().includes(query.toLowerCase()) || p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading eyebrow="projects" title="Systems designed, built, and shipped."
          description="Multi-agent AI platforms, full-stack applications, and intelligent automation — from academic projects to internship products." />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={cn("rounded-full px-4 py-1.5 text-xs font-mono border transition-colors",
                  activeCategory === cat ? "border-gold text-gold bg-gold/10" : "border-border text-bone-dim hover:border-gold/50 hover:text-bone")}>
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-bone-faint" />
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects or tech..."
              className="w-full rounded-full border border-border bg-surface/40 pl-9 pr-4 py-2 text-sm text-bone placeholder:text-bone-faint focus:border-gold outline-none transition-colors" />
          </div>
        </div>
        {filtered.length === 0 ? (
          <p className="text-bone-dim font-mono text-sm">No projects match your search.</p>
        ) : (
          <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid sm:grid-cols-2 gap-6">
            {featured && <ProjectCard project={featured} featured />}
            {rest.map((project) => <ProjectCard key={project.id} project={project} />)}
          </motion.div>
        )}
      </div>
    </section>
  );
}
