import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        Experience
      </h2>
      <div className="relative pl-6">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#3B82F6] to-transparent" />
        <div className="space-y-8">
          {resumeData.experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#3B82F6] ring-4 ring-white dark:ring-zinc-950" />
                <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 p-6">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-extrabold">{e.role}</h4>

                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-6 mt-3">
                      <h5 className="flex items-center text-md font-semibold ">
                        <Briefcase className="w-4 h-4 mr-2 text-zinc-500 dark:text-zinc-400" />
                        {e.company}
                      </h5>

                      <h6 className="flex items-center font-semibold text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-zinc-500 dark:text-zinc-400" />
                        {e.location}
                      </h6>
                    </div>

                    <p className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      <Calendar className="w-4 h-4 mr-2 text-zinc-500 dark:text-zinc-400" />
                      {e.period}
                    </p>
                  </div>

                  {
                    <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      {e.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
