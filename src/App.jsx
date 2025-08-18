import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { resumeData } from "./data";
import Education from "./components/Education";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Projects variant="tiles" limit={2} />
    </>
  );
}

export default function App() {
  const loc = useLocation ? useLocation() : { pathname: "/" };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects variant="journey" />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills-certifications" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
