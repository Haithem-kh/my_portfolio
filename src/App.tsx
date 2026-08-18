import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { BackToTop } from "./components/layout/BackToTop";
import { LoadingScreen } from "./components/layout/LoadingScreen";
import { HomePage } from "./pages/HomePage";

const ProjectCaseStudyPage = lazy(() => import("./pages/ProjectCaseStudyPage").then((m) => ({ default: m.ProjectCaseStudyPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

function ScrollReset() {
  const location = useLocation();
  useEffect(() => { if (!location.hash) window.scrollTo(0, 0); }, [location.pathname, location.hash]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-ink text-bone selection:bg-gold selection:text-ink">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <ScrollReset />
      <main>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
export default App;
