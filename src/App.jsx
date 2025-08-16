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
          <Route
            path="/contact"
            element={
              <section className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
                <h2 className="text-3xl font-bold mb-6">Contact</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="rounded-2xl bg-white dark:bg-zinc-900 p-6 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60">
                      <h3 className="font-semibold">Get in touch</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2">
                        Email is best — I typically reply within 48 hours.
                      </p>
                      <div className="mt-4">
                        <a
                          href={`mailto:${resumeData.contacts.email}`}
                          className="text-accent"
                        >
                          {resumeData.contacts.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="rounded-2xl bg-white dark:bg-zinc-900 p-6 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60">
                      <form className="grid gap-3">
                        <input
                          placeholder="Your name"
                          className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-transparent"
                        />
                        <input
                          placeholder="Email"
                          className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-transparent"
                        />
                        <textarea
                          placeholder="Message"
                          className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-3 py-2 bg-transparent min-h-[140px]"
                        ></textarea>
                        <button className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-accent text-white w-[100px]">
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
