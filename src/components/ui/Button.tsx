import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
interface ButtonProps { children: ReactNode; href?: string; onClick?: () => void; variant?: "primary"|"outline"|"ghost"; size?: "md"|"sm"; icon?: ReactNode; target?: string; type?: "button"|"submit"; className?: string; }
export function Button({ children, href, onClick, variant = "primary", size = "md", icon, target, type = "button", className }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 font-display whitespace-nowrap";
  const sizes = { md: "px-6 py-3 text-sm", sm: "px-4 py-2 text-xs" };
  const variants = { primary: "bg-gold text-ink hover:bg-gold-glow hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]", outline: "border border-border text-bone hover:border-gold hover:text-gold", ghost: "text-bone-dim hover:text-gold" };
  const classes = cn(base, sizes[size], variants[variant], className);
  const content = <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className={classes}>{children}{icon}</motion.span>;
  if (href) return <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>{content}</a>;
  return <button type={type} onClick={onClick} className="appearance-none bg-transparent border-0 p-0">{content}</button>;
}
