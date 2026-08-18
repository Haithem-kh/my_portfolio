import { motion } from "framer-motion";
import { Code2, Layers, BrainCircuit, Database, Terminal, BarChart2, Link, Server, Cpu, type LucideIcon } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { SKILL_CATEGORIES } from "../../data/skills";

const ICON_MAP: Record<string, LucideIcon> = { Code2, Layers, BrainCircuit, Database, Terminal, BarChart2, Link, Server, Cpu };

export function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36 bg-ink-soft/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading eyebrow="skills" title="A toolkit spanning agent memory to production infrastructure."
          description="From LangGraph multi-agent orchestration to Spring Boot backends and Power BI dashboards — the full stack to ship AI products." />
        <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] ?? Code2;
            return (
              <motion.div key={cat.id} variants={fadeUp} whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border-soft bg-surface/50 p-6 transition-colors hover:border-gold/40">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(120px circle at 20% 0%, rgba(212,175,55,0.08), transparent)" }} />
                <div className="relative flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-ink text-gold">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-medium text-bone">{cat.title}</h3>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="rounded-md bg-ink px-2.5 py-1 text-[11px] font-mono text-bone-dim border border-border-soft group-hover:border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
