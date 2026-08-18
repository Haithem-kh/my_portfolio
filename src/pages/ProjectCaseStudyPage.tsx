import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import { GithubMark } from "../components/shared/BrandIcons";
import { PROJECTS } from "../data/projects";
import { getCaseStudy } from "../data/caseStudies";
import { CaseSection } from "../components/sections/CaseSection";
import { fadeUp, fadeIn, viewportOnce } from "../lib/motion";

const TOC = [
  ["problem","01","Problem"], ["objectives","02","Objectives"], ["architecture","03","Architecture"],
  ["system-design","04","System Design"], ["technologies","05","Technologies"],
  ["memory","06","Memory Framework"], ["workflow","07","Multi-Agent Workflow"],
  ["challenges","08","Challenges & Solutions"], ["benchmarks","09","Benchmarks"],
  ["results","10","Results"], ["screenshots","11","Screenshots"], ["conclusion","12","Conclusion"],
] as const;

export function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  const caseStudy = slug ? getCaseStudy(slug) : undefined;
  if (!project || !caseStudy) return <Navigate to="/" replace />;

  return (
    <article className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-bone-dim hover:text-gold transition-colors mb-10">
          <ArrowLeft size={15} /> Back to projects
        </Link>
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="mb-12">
          <span className="eyebrow mb-4">case study · {project.year}</span>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold text-bone tracking-tight max-w-4xl">{project.title}</h1>
          <p className="mt-5 text-bone-dim text-base sm:text-lg max-w-2xl leading-relaxed">{project.tagline}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-bone hover:border-gold hover:text-gold transition-colors">
                <GithubMark size={15} /> View Code
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm text-ink font-medium hover:bg-gold-glow transition-colors">
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
            {caseStudy.demoVideoUrl && (
              <a href={caseStudy.demoVideoUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-bone-dim hover:text-gold transition-colors">
                <PlayCircle size={15} /> Watch Demo
              </a>
            )}
          </div>
        </motion.div>
        <img src={project.image} alt={project.title} className="w-full rounded-2xl border border-border-soft mb-16 aspect-[16/7] object-cover" />
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">
          <nav className="hidden lg:block">
            <div className="sticky top-28 space-y-2">
              <p className="font-mono text-[11px] text-bone-faint mb-3 uppercase tracking-wide">Contents</p>
              {TOC.map(([id, index, label]) => (
                <a key={id} href={`#${id}`} className="block text-sm text-bone-dim hover:text-gold transition-colors py-1">
                  <span className="font-mono text-xs text-bone-faint mr-2">{index}</span>{label}
                </a>
              ))}
            </div>
          </nav>
          <div>
            <CaseSection id="problem" index="01" title="Problem">
              {caseStudy.problem.map((p, i) => <p key={i}>{p}</p>)}
            </CaseSection>
            <CaseSection id="objectives" index="02" title="Objectives">
              <ul className="space-y-2">
                {caseStudy.objectives.map((o, i) => <li key={i} className="flex gap-2"><span className="text-gold mt-1">▸</span><span>{o}</span></li>)}
              </ul>
            </CaseSection>
            <CaseSection id="architecture" index="03" title="Architecture">
              {caseStudy.architecture.map((p, i) => <p key={i}>{p}</p>)}
            </CaseSection>
            <CaseSection id="system-design" index="04" title="System Design">
              {caseStudy.systemDesign.map((p, i) => <p key={i}>{p}</p>)}
            </CaseSection>
            <CaseSection id="technologies" index="05" title="Technologies">
              <motion.div variants={{ show: { transition: { staggerChildren: 0.05 } } }} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid sm:grid-cols-2 gap-3">
                {caseStudy.technologies.map((t) => (
                  <motion.div key={t.label} variants={fadeUp} className="rounded-lg border border-border-soft bg-surface/40 p-4">
                    <p className="font-mono text-sm text-gold">{t.label}</p>
                    <p className="text-sm text-bone-dim mt-1">{t.detail}</p>
                  </motion.div>
                ))}
              </motion.div>
            </CaseSection>
            <CaseSection id="memory" index="06" title="Memory Framework">
              {caseStudy.memoryFramework.map((p, i) => <p key={i}>{p}</p>)}
            </CaseSection>
            <CaseSection id="workflow" index="07" title="Multi-Agent Workflow">
              <div className="space-y-4">
                {caseStudy.multiAgentWorkflow.map((step, i) => (
                  <motion.div key={step.step} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} transition={{ delay: i * 0.04 }}
                    className="flex gap-4 rounded-lg border border-border-soft bg-surface/30 p-4">
                    <span className="font-mono text-xs text-gold whitespace-nowrap">{step.step}</span>
                    <p className="text-sm text-bone-dim">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </CaseSection>
            <CaseSection id="challenges" index="08" title="Challenges & Solutions">
              <div className="space-y-5">
                {caseStudy.challenges.map((c, i) => (
                  <div key={i} className="rounded-lg border border-border-soft bg-surface/30 p-5">
                    <p className="text-sm font-medium text-bone mb-2"><span className="text-bone-faint font-mono text-xs mr-2">CHALLENGE</span>{c.challenge}</p>
                    <p className="text-sm text-bone-dim"><span className="text-gold font-mono text-xs mr-2">SOLUTION</span>{c.solution}</p>
                  </div>
                ))}
              </div>
            </CaseSection>
            <CaseSection id="benchmarks" index="09" title="Benchmarks">
              <div className="grid sm:grid-cols-2 gap-4">
                {caseStudy.benchmarks.map((b) => (
                  <div key={b.metric} className="rounded-lg border border-border-soft bg-surface/40 p-5">
                    <p className="font-display text-2xl font-semibold text-gold">{b.value}</p>
                    <p className="text-sm text-bone mt-1">{b.metric}</p>
                    {b.note && <p className="text-xs text-bone-faint mt-1">{b.note}</p>}
                  </div>
                ))}
              </div>
            </CaseSection>
            <CaseSection id="results" index="10" title="Results">
              <ul className="space-y-2">
                {caseStudy.results.map((r, i) => <li key={i} className="flex gap-2"><span className="text-gold mt-1">▸</span><span>{r}</span></li>)}
              </ul>
            </CaseSection>
            <CaseSection id="screenshots" index="11" title="Screenshots">
              <div className="grid sm:grid-cols-2 gap-4">
                {caseStudy.screenshots.map((s) => (
                  <figure key={s.src} className="rounded-lg overflow-hidden border border-border-soft">
                    <img src={s.src} alt={s.caption} className="w-full aspect-[4/3] object-cover" />
                    <figcaption className="p-3 text-xs text-bone-faint font-mono">{s.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </CaseSection>
            <CaseSection id="conclusion" index="12" title="Conclusion">
              {caseStudy.conclusion.map((p, i) => <p key={i}>{p}</p>)}
            </CaseSection>
          </div>
        </div>
      </div>
    </article>
  );
}
