import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { EXPERIENCE } from "../../data/career";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 bg-ink-soft/40">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionHeading eyebrow="experience" title="Where I've put these skills to work." />
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-[1px] bg-border" />
          <div className="space-y-12">
            {EXPERIENCE.map((item, i) => (
              <motion.div key={item.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} transition={{ delay: i * 0.05 }} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-ink" />
                <div className="rounded-2xl border border-border-soft bg-surface/40 p-6 hover:border-gold/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-bone">{item.role}</h3>
                      <p className="flex items-center gap-1.5 text-sm text-gold mt-0.5"><Building2 size={14} /> {item.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs text-bone-faint block">{item.startDate} — {item.endDate}</span>
                      <span className="font-mono text-xs text-bone-faint">{item.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-bone-dim leading-relaxed mb-4">{item.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-bone-dim">
                        <span className="text-gold mt-1">▸</span><span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span key={t} className="rounded-md bg-ink px-2 py-0.5 text-[10px] font-mono text-bone-dim border border-border-soft">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
