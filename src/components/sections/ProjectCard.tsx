import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import { GithubMark } from "../shared/BrandIcons";
import type { Project } from "../../types";
import { fadeUp } from "../../lib/motion";

const STATUS_COLOR: Record<Project["status"], string> = {
  Production: "bg-emerald-400", "In Progress": "bg-gold", Prototype: "bg-sky-400", Archived: "bg-bone-faint",
};

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface/40 transition-colors hover:border-gold/40 ${featured ? "lg:col-span-2 lg:flex-row" : ""}`}>
      <div className={`relative overflow-hidden ${featured ? "lg:w-1/2" : "aspect-[16/10]"}`}>
        <img src={project.image} alt={project.title} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        {project.featured && (
          <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[11px] font-mono font-medium text-ink">Featured</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`h-1.5 w-1.5 rounded-full ${STATUS_COLOR[project.status]}`} />
          <span className="font-mono text-[11px] text-bone-faint">{project.status} · {project.year}</span>
        </div>
        <h3 className="font-display text-xl font-semibold text-bone group-hover:text-gold transition-colors">{project.title}</h3>
        <p className="mt-2 text-sm text-bone-dim leading-relaxed">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, featured ? 9 : 5).map((t) => (
            <span key={t} className="rounded-md bg-ink px-2 py-0.5 text-[10px] font-mono text-bone-dim border border-border-soft">{t}</span>
          ))}
        </div>
        <div className="mt-auto pt-5 flex items-center gap-4 border-t border-border-soft/60">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-bone-dim hover:text-gold transition-colors">
              <GithubMark size={14} /> Code
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-bone-dim hover:text-gold transition-colors">
              <ArrowUpRight size={14} /> Live Demo
            </a>
          )}
          {project.featured && (
            <Link to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gold hover:text-gold-glow transition-colors ml-auto">
              <FileText size={14} /> Case Study
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
