import { useMemo } from "react";
import { motion } from "framer-motion";
import { useMouseParallax } from "../../hooks/useMouseParallax";

interface Node { x: number; y: number; r: number; delay: number; }

function generateNodes(count: number, seed: number): Node[] {
  const nodes: Node[] = [];
  let s = seed;
  const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let i = 0; i < count; i++) {
    nodes.push({ x: 40 + rand() * 1120, y: 40 + rand() * 720, r: 2 + rand() * 2.5, delay: rand() * 4 });
  }
  return nodes;
}
function distance(a: Node, b: Node) { return Math.hypot(a.x - b.x, a.y - b.y); }

export function NodeGraph() {
  const nodes = useMemo(() => generateNodes(26, 7), []);
  const parallax = useMouseParallax(14);
  const edges = useMemo(() => {
    const list: { a: Node; b: Node; key: string }[] = [];
    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (j <= i) return;
        if (distance(a, b) < 180) list.push({ a, b, key: `${i}-${j}` });
      });
    });
    return list;
  }, [nodes]);

  return (
    <motion.svg viewBox="0 0 1200 800" className="absolute inset-0 h-full w-full"
      style={{ x: parallax.x, y: parallax.y }} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {edges.map(({ a, b, key }) => (
        <motion.line key={key} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#D4AF37" strokeWidth={0.6}
          initial={{ opacity: 0 }} animate={{ opacity: [0.05, 0.18, 0.05] }}
          transition={{ duration: 6 + (a.x % 5), repeat: Infinity, ease: "easeInOut", delay: a.delay }} />
      ))}
      {nodes.map((n, i) => (
        <motion.circle key={i} cx={n.x} cy={n.y} r={n.r} fill="#D4AF37" className="node-glow"
          initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 4 + n.delay, repeat: Infinity, ease: "easeInOut", delay: n.delay }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }} />
      ))}
    </motion.svg>
  );
}
