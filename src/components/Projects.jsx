import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { slideInLeft, slideInRight } from "../utils";
import { Link } from "react-router-dom";

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
    {children}
  </span>
);

function TileCard({ p }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ amount: 0.2 }}
      variants={slideInRight}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl p-1"
    >
      <div className="rounded-2xl h-full bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 p-6 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
              {p.name}
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {p.period}
            </p>
          </div>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
          {p.highlights[0]}
        </p>

        <div className="mt-4 flex gap-2 flex-wrap">
          {p.tech.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>

        {p.highlights.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-xs font-medium text-accent flex items-center gap-1 hover:underline"
          >
            {expanded ? (
              <>
                Show less <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Show more <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-1"
            >
              {p.highlights.slice(1).map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

function JourneyCard({ p }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      exit="hidden"
      viewport={{ amount: 0.2 }}
      variants={slideInRight}
    >
      <div className="relative pl-8">
        <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#3B82F6] ring-4 ring-white dark:ring-zinc-950" />
        <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
                {p.name}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {p.period}
              </p>
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <div className="mt-4 flex gap-2 flex-wrap">
            {p.tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <ul className="mt-3 list-disc pl-5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
            {p.highlights.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ variant = "tiles", limit }) {
  const projects = limit
    ? resumeData.projects.slice(0, limit)
    : resumeData.projects;

  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
      <div className="flex gap-2 flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Projects
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Selected work & highlights
        </p>
      </div>

      {variant === "tiles" ? (
        <AnimatePresence mode="sync">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <TileCard key={p.name} p={p} />
              ))}
            </div>
            {limit && (
              // <div className="text-center">
              //   <a
              //     href="/projects"
              //     className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3B82F6] text-white hover:bg-blue-600"
              //   >
              //     See More Projects
              //   </a>
              // </div>
              <motion.div variants={slideInLeft} className="text-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3B82F6] text-white hover:bg-blue-600"
                >
                  See More Projects
                </Link>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="sync">
          <div className="relative pl-6 space-y-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#3B82F6] to-transparent" />
            {projects.map((p) => (
              <JourneyCard key={p.name} p={p} />
            ))}
          </div>
        </AnimatePresence>
      )}
    </section>
  );
}
