import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { PROFILE } from "../../data/site";

export function Resume() {
  return (
    <section id="resume" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <SectionHeading eyebrow="resume" title="My resume, in full." description="Preview it below, or download a copy." align="center" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="rounded-2xl border border-border-soft bg-surface/40 p-3 sm:p-4">
          <div className="aspect-[4/5] sm:aspect-[8/9] w-full overflow-hidden rounded-xl border border-border-soft bg-ink">
            <object data={PROFILE.resumeUrl} type="application/pdf" className="h-full w-full">
              <div className="flex h-full items-center justify-center text-sm text-bone-dim font-mono p-6 text-center">
                Your browser can't preview PDFs inline — use the download button below.
              </div>
            </object>
          </div>
          <div className="flex justify-center mt-5">
            <a href={PROFILE.resumeUrl} download
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink font-display hover:bg-gold-glow hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all">
              <FileDown size={16} /> Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
