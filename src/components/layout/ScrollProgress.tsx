import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";
export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
      <motion.div className="h-full bg-gold" style={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
    </div>
  );
}
