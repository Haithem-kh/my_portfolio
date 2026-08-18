# Haithem Khachlouf — AI Engineer Portfolio

Premium dark-mode portfolio built with **React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion**.

## Quick start

```bash
npm install
npm run dev       # → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

Node.js 18+ required.

---

## Personalise your portfolio

All content lives in **5 data files** — no need to touch any component code.

### `src/data/site.ts`
Your name, title, email, phone, LinkedIn, GitHub, hero text, stats.

### `src/data/skills.ts`
Skill categories and tags. Add, remove, or reorder freely.

### `src/data/projects.ts`
All project cards. Fields: `title`, `tagline`, `description`, `image`, `tech`, `features`, `githubUrl`, `demoUrl`, `status`, `year`.  
Set `featured: true` on the one project that should get the large hero card + Case Study link.

### `src/data/caseStudies.ts`
The full 12-section deep-dive for your featured project. Match `projectSlug` to the project's `slug`.

### `src/data/career.ts`
Experience, education, and certificates (with modal preview).

---

## Replace placeholder assets

| Asset | Path | Notes |
|---|---|---|
| Your photo | `public/images/profile/avatar.svg` | Replace with `avatar.jpg` and update the `src` in `src/components/sections/Hero.tsx` |
| Resume PDF | `public/documents/resume.pdf` | Drop in your real resume — same filename |
| Project screenshots | `public/images/projects/planforge.svg` etc. | Replace with real `.jpg`/`.png` screenshots and update `image` paths in `src/data/projects.ts` |
| Certificates | `public/images/certificates/` | Add certificate images and fill in `src/data/career.ts` |

---

## Deploy

```bash
# Vercel (recommended)
npx vercel

# Or connect your GitHub repo to vercel.com / netlify.com — auto-deploys on every push.
```

---

## Project structure

```
src/
  components/
    layout/      Navbar · Footer · ScrollProgress · BackToTop · LoadingScreen
    sections/    Hero · About · Projects · Skills · Experience · Education
                 Certificates · Resume · Contact · CaseSection
    shared/      NodeGraph (animated hero background) · BrandIcons
    ui/          Button · SectionHeading
  data/          ← edit these 5 files to personalise
  hooks/         useScrollProgress · useActiveSection · useCountUp · useMouseParallax
  lib/           Framer Motion variants · cn() utility
  pages/         HomePage · ProjectCaseStudyPage · NotFoundPage
  types/         TypeScript interfaces for all data shapes
```
