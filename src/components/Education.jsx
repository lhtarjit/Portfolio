import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data";

export default function Education() {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Education
      </h2>
      <div className="relative pl-6">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent to-transparent" />
        <div className="space-y-8">
          {resumeData.education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-white dark:ring-zinc-950" />
                <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{e.degree}</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        {e.school} · {e.location}
                      </p>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
                      {e.period}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
