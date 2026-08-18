import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Experience } from "../components/sections/Experience";
import { Education } from "../components/sections/Education";
import { Certificates } from "../components/sections/Certificates";
import { Resume } from "../components/sections/Resume";
import { Contact } from "../components/sections/Contact";

export function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, [location]);
  return (
    <>
      <Hero /><About /><Projects /><Skills /><Experience /><Education /><Certificates /><Resume /><Contact />
    </>
  );
}
