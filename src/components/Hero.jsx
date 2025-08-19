import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import developerImage from "../assets/image.png";
import {
  leftVariants,
  rightVariants,
  staggerContainer,
  slideInLeft,
  slideUp,
} from "../utils";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
      {/* Left Side (Text) */}
      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ amount: 0.3 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight">
          Hi, I’m Arjit — <span className="text-accent">MERN developer.</span>{" "}
          Crafting clean, scalable apps.
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-300">
          {resumeData.summary}
        </p>

        {/* Buttons slide left → right */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <motion.div variants={slideInLeft} className="text-center">
            <Link
              to="/skills-certifications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:scale-[1.03] transition"
            >
              Skills & Certifications <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.a
            variants={slideInLeft}
            href={resumeData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            <Download className="w-4 h-4" /> Résumé
          </motion.a>

          <motion.div
            variants={slideInLeft}
            className="ml-2 flex gap-2 items-center"
          >
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
          </motion.div>
        </motion.div>

        {/* Skills slide-up */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {resumeData.skills.languagesAndFrameworks.map((s) => (
            <motion.span
              key={s}
              variants={slideUp}
              className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side (Image) */}
      <motion.div
        variants={rightVariants}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ amount: 0.3 }}
        className="flex justify-center"
      >
        <div className="max-w-md w-full">
          <LazyLoadImage
            src={developerImage}
            alt="developer"
            className="rounded-ss-3xl"
            effect="blur"
          />
        </div>
      </motion.div>
    </section>
  );
}
