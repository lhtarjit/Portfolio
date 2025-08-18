import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data";
import { Book, MapPin, Calendar } from "lucide-react";

// Slide-in animation
const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Education
      </h2>
      <div className="relative pl-6">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent to-transparent" />

        <AnimatePresence mode="sync">
          <div className="space-y-8">
            {resumeData.education.map((e, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                viewport={{ amount: 0.2 }}
                variants={slideInRight}
              >
                <div className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-white dark:ring-zinc-950" />

                  <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 p-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <Book className="w-4 h-4 text-accent" />
                      <h4 className="font-semibold text-lg">{e.degree}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <MapPin className="w-3 h-3" />
                      <span>
                        {e.school}, {e.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <Calendar className="w-3 h-3" />
                      <span>{e.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
