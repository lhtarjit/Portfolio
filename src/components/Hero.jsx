import React from "react";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "../data";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight">
          Hi, I’m Arjit — <span className="text-accent">MERN developer.</span>{" "}
          Crafting clean, scalable apps.
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-300">
          {resumeData.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:scale-[1.03] transition"
          >
            View projects <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={resumeData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            <Download className="w-4 h-4" /> Résumé
          </a>
          <div className="ml-2 flex gap-2 items-center">
            <a
              href={resumeData.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-accent"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={resumeData.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-accent"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {resumeData.skills.languagesAndFrameworks.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="flex justify-center"
      >
        <div className="max-w-md w-full">
          <svg
            viewBox="0 0 600 600"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Illustration"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#E0E7FF" />
                <stop offset="1" stopColor="#F0F9FF" />
              </linearGradient>
            </defs>
            <rect rx="28" width="600" height="600" fill="url(#g1)" />
            <g transform="translate(80,120)">
              <rect
                x="40"
                y="40"
                width="300"
                height="180"
                rx="12"
                fill="#fff"
                opacity="0.95"
              />
              <rect
                x="60"
                y="70"
                width="260"
                height="18"
                rx="6"
                fill="#3B82F6"
              />
              <rect
                x="60"
                y="100"
                width="220"
                height="12"
                rx="6"
                fill="#CBD5E1"
              />
              <rect
                x="60"
                y="122"
                width="180"
                height="12"
                rx="6"
                fill="#E2E8F0"
              />
              <circle cx="240" cy="240" r="72" fill="#fff" opacity="0.95" />
              <path
                d="M210 240c0-22 18-40 40-40s40 18 40 40-18 40-40 40-40-18-40-40z"
                fill="#3B82F6"
                opacity="0.95"
              />
            </g>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
