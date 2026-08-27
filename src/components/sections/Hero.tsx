import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { NodeGraph } from "../shared/NodeGraph";
import { GithubMark, LinkedinMark } from "../shared/BrandIcons";
import { PROFILE, SOCIAL_LINKS } from "../../data/site";
import { useEffect, useState } from "react";

const ROLES = ["Multi-Agent LLM Systems", "Memory-Augmented AI", "Agentic AI Frameworks", "Full-Stack Development"];

function useTypewriter(words: string[], speed = 55, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: number;
    if (!deleting && text.length < current.length) timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    else if (!deleting && text.length === current.length) timeout = window.setTimeout(() => setDeleting(true), pause);
    else if (deleting && text.length > 0) timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    else if (deleting && text.length === 0) { setDeleting(false); setWordIndex((i) => i + 1); }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);
  return text;
}

const ICONS = { github: GithubMark, linkedin: LinkedinMark, mail: Mail, twitter: Mail } as const;

export function Hero() {
  const typed = useTypewriter(ROLES);
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 opacity-70"><NodeGraph /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/60 to-ink" />
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow">
            actively seeking a full-time position (CDI)
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-semibold leading-[1.05] tracking-tight text-bone">
            {PROFILE.name}
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-9 font-mono text-base sm:text-lg text-gold">
            {typed}<span className="inline-block w-[2px] h-5 bg-gold ml-1 animate-pulse align-middle" />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-bone-dim text-base sm:text-lg leading-relaxed">
            {PROFILE.heroHeading} {PROFILE.heroHeadingAccent}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4">
            <a href={PROFILE.resumeUrl} download
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink font-display hover:bg-gold-glow hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all">
              <FileDown size={16} /> Download Resume
            </a>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-bone font-display hover:border-gold hover:text-gold transition-colors">
              View Projects <ArrowRight size={16} />
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-bone-dim font-display hover:text-gold transition-colors">
              Contact Me
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => {
              const Icon = ICONS[link.icon];
              return (
                <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer" aria-label={link.label} className="text-bone-dim hover:text-gold transition-colors">
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border border-gold/20" />
            <div className="absolute -inset-10 rounded-full border border-gold/10" />
            <img src="/images/profile/avatar.jpg" alt={PROFILE.name}
              className="h-72 w-72 rounded-full object-cover border border-border" />
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone-faint">
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
