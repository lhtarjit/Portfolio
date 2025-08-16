import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
    {children}
  </span>
);

export default function Skills() {
  const [lightboxIndex, setLightboxIndex] = React.useState(-1);
  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
      <div className="flex gap-2 flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Skills & Certifications
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Tools and tech I use
        </p>
      </div>

      {/* Skills Section */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <motion.div
          className="rounded-2xl bg-white dark:bg-zinc-900 p-6 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60"
          custom={0}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3">Languages & Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.languagesAndFrameworks.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-white dark:bg-zinc-900 p-6 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60"
          custom={1}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.tools.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl bg-white dark:bg-zinc-900 p-6 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60"
          custom={2}
          variants={fadeUp}
        >
          <h3 className="font-semibold mb-3">Strengths</h3>
          <ul className="list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            {resumeData.skills.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Certifications Section */}
      <h3 className="text-2xl font-bold mb-2">Certifications</h3>
      <div className="relative w-full overflow-x-scroll overflow-y-hidden scrollbar-hide py-4">
        <motion.div
          className="flex flex-nowrap gap-5 py-2" // Add vertical padding to give space for shadows
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...resumeData.certifications].map((cert, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-visible bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 hover:shadow-lg transition cursor-pointer min-w-[250px] flex-shrink-0"
              onClick={() =>
                setLightboxIndex(idx % resumeData.certifications.length)
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (idx % resumeData.certifications.length) * 0.1,
              }}
            >
              {/* Certificate Level Pill */}
              <span
                className={`absolute top-3 right-3 inline-flex items-center rounded-full ${
                  cert.level === "Verified Role"
                    ? "bg-blue-600"
                    : "bg-green-500"
                }  px-2 py-1 text-xs text-white font-normal z-50`}
              >
                {cert.level}
              </span>

              {/* Image */}
              <div className="w-full flex items-center justify-center rounded-t-2xl bg-gray-50">
                <LazyLoadImage
                  src={cert.image}
                  alt={cert.certificate}
                  className="max-h-40 object-contain "
                  effect="blur"
                />
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-lg">{cert.certificate}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {cert.institute}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                  {new Date(cert.date).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Lightbox */}
      {lightboxIndex >= 0 && (
        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={resumeData.certifications.map((c) => ({ src: c.image }))}
        />
      )}
    </section>
  );
}
