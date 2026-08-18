import { Mail } from "lucide-react";
import { GithubMark, LinkedinMark } from "../shared/BrandIcons";
import { PROFILE, SOCIAL_LINKS } from "../../data/site";
const ICONS = { github: GithubMark, linkedin: LinkedinMark, mail: Mail, twitter: Mail } as const;
export function Footer() {
  return (
    <footer className="border-t border-border-soft py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-bone-faint">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript & Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer" aria-label={link.label} className="text-bone-dim hover:text-gold transition-colors">
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
