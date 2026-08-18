import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const LINES = ["initialising agents...", "loading memory systems...", "linking llm nodes...", "ready."];
export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  useEffect(() => {
    if (lineIndex >= LINES.length) { const t = setTimeout(() => setDone(true), 350); return () => clearTimeout(t); }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 280);
    return () => clearTimeout(t);
  }, [lineIndex]);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink">
          <div className="font-mono text-sm text-bone-dim space-y-1.5 min-h-[120px]">
            {LINES.slice(0, lineIndex).map((line, i) => (
              <motion.p key={line} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                className={i === LINES.length - 1 ? "text-gold" : ""}>
                <span className="text-bone-faint">$</span> {line}
              </motion.p>
            ))}
          </div>
          <motion.div className="mt-6 h-[2px] w-40 bg-border overflow-hidden rounded-full">
            <motion.div className="h-full bg-gold" initial={{ width: "0%" }}
              animate={{ width: `${(lineIndex / LINES.length) * 100}%` }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
