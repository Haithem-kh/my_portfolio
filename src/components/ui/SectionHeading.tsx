import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { cn } from "../../lib/cn";
interface SectionHeadingProps { eyebrow: string; title: string; description?: string; align?: "left" | "center"; }
export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
      className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <span className="eyebrow mb-4">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-bone tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-bone-dim text-base sm:text-lg leading-relaxed">{description}</p>}
    </motion.div>
  );
}
