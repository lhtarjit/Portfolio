import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ShieldBadge from "./Common/Badge";
import { fadeUp, staggerContainer, slideUp } from "../utils";

export const Pill = ({ children, custom }) => (
  <motion.span
    className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300"
    variants={slideUp}
    custom={custom}
  >
    {children}
  </motion.span>
);

export const renderCard = (title, items, isList = false, custom = 0) => (
  <motion.div
    className="rounded-2xl bg-white dark:bg-zinc-900 p-6 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60"
    custom={custom}
    variants={fadeUp}
  >
    <h3 className="font-semibold mb-3">{title}</h3>
    <motion.div
      className={isList ? "" : "flex flex-wrap gap-2"}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3 }}
    >
      {items.map((item, idx) =>
        isList ? (
          <motion.li
            key={idx}
            variants={slideUp}
            custom={idx}
            className="list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300"
          >
            {item}
          </motion.li>
        ) : (
          <Pill key={item} custom={idx}>
            {item}
          </Pill>
        )
      )}
    </motion.div>
  </motion.div>
);

export default function Skills() {
  const [lightboxIndex, setLightboxIndex] = React.useState(-1);

  return (
    <section className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
      {/* Header */}
      <div className="flex gap-2 flex-col sm:flex-row items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Skills
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Tools and tech I use
        </p>
      </div>

      {/* Skills Section */}
      <motion.div className="grid md:grid-cols-3 gap-6 mb-12">
        {renderCard(
          "Languages & Frameworks",
          resumeData.skills.languagesAndFrameworks,
          false,
          0
        )}
        {renderCard("Tools", resumeData.skills.tools, false, 1)}
        {renderCard("Strengths", resumeData.skills.strengths, true, 2)}
      </motion.div>

      {/* Certifications Section */}
      <div className="flex flex-col items-start gap-6 mb-8">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Certifications
          </h2>

          {/* Animated shield badge with floating ring */}
          <ShieldBadge number={resumeData.certifications.length} size={10} />
        </div>
      </div>

      {/* Certifications carousel */}
      <div className="relative w-full overflow-x-scroll overflow-y-hidden scrollbar-hide py-4">
        <motion.div
          className="flex flex-nowrap gap-5 py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {resumeData.certifications.map((cert, idx) => (
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
                delay: idx * 0.1,
              }}
            >
              {/* Certificate Level Pill */}
              <span
                className={`absolute top-3 right-3 inline-flex items-center rounded-full ${
                  cert.level === "Verified Role"
                    ? "bg-blue-600"
                    : "bg-green-500"
                } px-2 py-1 text-xs text-white font-normal z-50`}
              >
                {cert.level}
              </span>

              {/* Image */}
              <div className="w-full flex items-center justify-center rounded-t-2xl bg-gray-50">
                <LazyLoadImage
                  src={cert.image}
                  alt={cert.certificate}
                  className="max-h-40 object-contain"
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
