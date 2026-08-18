import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { useCountUp } from "../../hooks/useCountUp";
import { STATS } from "../../data/site";

const HIGHLIGHTS = ["Computer Engineering (ENSI)", "Multi-Agent LLM Systems", "Memory-Augmented AI", "Agentic AI Frameworks", "RAG & Vector Search", "Full-Stack Development", "FastAPI / React / Next.js", "Blockchain"];

function StatCard({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div className="rounded-xl border border-border-soft bg-surface/40 p-5">
      <p className="font-display text-3xl sm:text-4xl font-semibold text-gold">
        <span ref={ref}>{animated}</span>{suffix}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-bone-dim">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading eyebrow="about" title="Engineering intelligence — from agent memory to production systems." />
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-5">
            <p className="text-bone-dim text-base sm:text-lg leading-relaxed">
              I'm a Computer Sciences Engineer (ENSI) with hands-on experience building multi-agent LLM systems, memory-augmented AI frameworks, and full-stack AI-driven platforms through internships and academic projects.
            </p>
            <p className="text-bone-dim text-base sm:text-lg leading-relaxed">
              My final-year project at KPIT Engineering pushed me deep into agent memory architecture — designing 6 distinct memory systems (Working, Semantic, Episodic, Procedural, Associative, Knowledge-Base) inside a LangGraph framework for automotive test case generation, with benchmarking pipelines to validate every design decision.
            </p>
            <p className="text-bone-dim text-base sm:text-lg leading-relaxed">
              Curious, adaptable, and motivated — I want to tackle real-world engineering challenges while continuously learning new technologies. Currently actively seeking a full-time AI engineering position (CDI).
            </p>
            <motion.div variants={staggerContainer(0.06)} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-wrap gap-2 pt-2">
              {HIGHLIGHTS.map((tag) => (
                <motion.span key={tag} variants={fadeUp}
                  className="rounded-full border border-border px-4 py-1.5 text-xs font-mono text-bone-dim hover:border-gold hover:text-gold transition-colors">
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />)}
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
              className="rounded-xl border border-border-soft bg-surface/40 p-6 font-mono text-xs sm:text-sm text-bone-dim leading-relaxed">
              <p className="text-gold mb-2">// journey.log</p>
              <p><span className="text-bone-faint">2021</span> — began Preparatory Cycle (Physics & Chemistry), IPEIS Sfax</p>
              <p><span className="text-bone-faint">2023</span> — joined ENSI, Computer Sciences Engineering cycle</p>
              <p><span className="text-bone-faint">2024</span> — first enterprise internship at TFM, Spring Boot + Angular</p>
              <p><span className="text-bone-faint">2025</span> — AI internship at Talan, built multi-agent RevMA platform</p>
              <p><span className="text-bone-faint">2025</span> — won Talan Challenge with AI Corporate Intelligence Dashboard</p>
              <p><span className="text-bone-faint">2026</span> — <span className="text-gold">final-year project</span> — memory-augmented LLM framework at KPIT</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
