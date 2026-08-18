import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { CERTIFICATES } from "../../data/career";
import type { Certificate } from "../../types";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);
  return (
    <section id="certificates" className="relative py-28 lg:py-36 bg-ink-soft/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading eyebrow="certificates" title="Continuous learning, formalized." />
        <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATES.map((cert) => (
            <motion.button key={cert.id} variants={fadeUp} whileHover={{ y: -4 }} onClick={() => setActive(cert)}
              className="text-left rounded-2xl border border-border-soft bg-surface/40 overflow-hidden hover:border-gold/40 transition-colors group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={cert.image} alt={cert.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 text-gold mb-1.5">
                  <Award size={13} /><span className="font-mono text-[10px]">{cert.date}</span>
                </div>
                <h3 className="font-display text-sm font-medium text-bone leading-snug">{cert.title}</h3>
                <p className="text-xs text-bone-dim mt-1">{cert.issuer}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
        <p className="mt-6 font-mono text-xs text-bone-faint">// Add your certifications in <span className="text-gold">src/data/career.ts</span></p>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-6"
            onClick={() => setActive(null)}>
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} className="relative max-w-lg w-full rounded-2xl border border-border bg-surface p-6">
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 text-bone-dim hover:text-gold" aria-label="Close"><X size={20} /></button>
              <img src={active.image} alt={active.title} className="w-full rounded-lg mb-5 border border-border-soft" />
              <h3 className="font-display text-xl font-semibold text-bone">{active.title}</h3>
              <p className="text-sm text-gold mt-1">{active.issuer} · {active.date}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {active.skills.map((s) => (
                  <span key={s} className="rounded-md bg-ink px-2 py-0.5 text-[10px] font-mono text-bone-dim border border-border-soft">{s}</span>
                ))}
              </div>
              {active.credentialUrl && (
                <a href={active.credentialUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-glow">
                  View credential <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
