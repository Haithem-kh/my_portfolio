import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { EDUCATION } from "../../data/career";

export function Education() {
  return (
    <section id="education" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionHeading eyebrow="education" title="Academic foundations." />
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((edu) => (
            <motion.div key={edu.id} variants={fadeUp} whileHover={{ y: -4 }}
              className="rounded-2xl border border-border-soft bg-surface/40 p-6 hover:border-gold/30 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-ink text-gold mb-4">
                <GraduationCap size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold text-bone">{edu.degree}</h3>
              <p className="text-sm text-gold mt-1">{edu.institution}</p>
              <p className="font-mono text-xs text-bone-faint mt-1">{edu.location} · {edu.startDate} — {edu.endDate}</p>
              <ul className="mt-4 space-y-1.5">
                {edu.achievements.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-bone-dim">
                    <span className="text-gold mt-1">▸</span><span>{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
