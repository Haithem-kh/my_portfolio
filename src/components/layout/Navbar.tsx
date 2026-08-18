import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../../data/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { cn } from "../../lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") { navigate(`/#${id}`); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-ink/85 backdrop-blur-md border-b border-border-soft" : "bg-transparent")}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <button onClick={() => goTo("home")} className="font-mono text-sm text-bone tracking-tight flex items-center gap-2" aria-label="Go to home">
          <span className="text-gold">{"<"}</span>HK<span className="text-gold">{"/>"}</span>
        </button>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button onClick={() => goTo(link.href)}
                className={cn("relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors",
                  activeId === link.href ? "text-gold" : "text-bone-dim hover:text-bone")}>
                {link.label}
                {activeId === link.href && (
                  <motion.span layoutId="nav-underline" className="absolute left-3.5 right-3.5 -bottom-0.5 h-[1.5px] bg-gold" />
                )}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => goTo("contact")}
          className="hidden lg:inline-flex items-center rounded-full border border-border px-5 py-2 text-[13px] font-medium text-bone hover:border-gold hover:text-gold transition-colors font-display">
          Let's talk
        </button>
        <button className="lg:hidden text-bone" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-ink border-b border-border-soft">
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button onClick={() => goTo(link.href)}
                    className={cn("w-full text-left py-3 text-sm font-medium border-b border-border-soft/60",
                      activeId === link.href ? "text-gold" : "text-bone-dim")}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
