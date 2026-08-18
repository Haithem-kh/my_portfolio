import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Phone } from "lucide-react";
import { GithubMark, LinkedinMark } from "../shared/BrandIcons";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp, viewportOnce } from "../../lib/motion";
import { PROFILE, SOCIAL_LINKS } from "../../data/site";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-ink-soft/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading eyebrow="contact" title="Let's build something intelligent together."
          description="Open to full-time AI engineering roles (CDI), freelance projects, and interesting conversations." />
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-4">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 rounded-xl border border-border-soft bg-surface/40 p-5 hover:border-gold/40 transition-colors">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-ink text-gold"><Mail size={17} /></span>
              <div><p className="text-xs text-bone-faint font-mono">Email</p><p className="text-sm text-bone">{PROFILE.email}</p></div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border-soft bg-surface/40 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-ink text-gold"><Phone size={17} /></span>
              <div><p className="text-xs text-bone-faint font-mono">Phone</p><p className="text-sm text-bone">{PROFILE.phone}</p></div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border-soft bg-surface/40 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-ink text-gold"><MapPin size={17} /></span>
              <div><p className="text-xs text-bone-faint font-mono">Location</p><p className="text-sm text-bone">{PROFILE.location} · Open to remote</p></div>
            </div>
            {SOCIAL_LINKS.filter((l) => l.icon !== "mail").map((link) => {
              const Icon = link.icon === "github" ? GithubMark : LinkedinMark;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border-soft bg-surface/40 p-5 hover:border-gold/40 transition-colors">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-ink text-gold"><Icon size={17} /></span>
                  <div><p className="text-xs text-bone-faint font-mono">{link.label}</p><p className="text-sm text-bone">{link.href.replace("https://", "")}</p></div>
                </a>
              );
            })}
          </motion.div>
          <motion.form variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}
            onSubmit={handleSubmit} className="rounded-2xl border border-border-soft bg-surface/40 p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-bone-faint mb-2">Name</label>
                <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-ink px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-gold outline-none transition-colors" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-bone-faint mb-2">Email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-ink px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-gold outline-none transition-colors" placeholder="jane@company.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-bone-faint mb-2">Message</label>
              <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-ink px-4 py-3 text-sm text-bone placeholder:text-bone-faint focus:border-gold outline-none resize-none transition-colors"
                placeholder="Tell me about your opportunity or project..." />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink font-display hover:bg-gold-glow hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all">
              {sent ? <><CheckCircle2 size={16} /> Opening your mail client...</> : <><Send size={16} /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
