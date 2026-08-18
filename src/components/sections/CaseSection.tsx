import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
interface CaseSectionProps { id: string; index: string; title: string; children: ReactNode; }
export function CaseSection({ id, index, title, children }: CaseSectionProps) {
  return (
    <motion.section id={id} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
      className="py-12 border-b border-border-soft last:border-b-0">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-xs text-gold">{index}</span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-bone">{title}</h2>
      </div>
      <div className="text-bone-dim text-base leading-relaxed space-y-4 max-w-3xl">{children}</div>
    </motion.section>
  );
}
