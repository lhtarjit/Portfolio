import React from "react";
import { motion } from "framer-motion";

const ShieldBadge = ({ number = 0, size = 10 }) => {
  return (
    <motion.div className={`relative w-${size} h-${size}`}>
      {/* Shield SVG */}
      <svg viewBox="0 0 126.1 128.9" className="w-full h-full">
        {/* Ring Back */}
        <g fill="#1D4ED8">
          <path d="M0,95.5l0-28C0,52,27.5,39.3,61.9,39c34.8-0.3,63.5,12.3,64.1,28v28c-0.6-15.7-29.3-28.3-64.1-28C27.5,67.2,0,80,0,95.5z" />
        </g>

        {/* Full Shield Base */}
        <g>
          <path
            fill="#2563EB"
            d="M63,0c-0.6,0-1.2,0.1-1.8,0.3L5.2,17.8c-2.6,0.8-4.4,3.3-4.3,6c1.4,72.8,35.1,92.7,59.4,104.4
             c0.3,0.1,1.1,0.5,2,0.7c9.8-40.6,12.2-69.5,10.7-90.6c0.8-3.5,2.8-6.4,4.8-7l43.1-12.9c0.4-0.1,0.7-0.1,1-0.1
             c-0.4-0.2-0.8-0.4-1.2-0.5L64.8,0.3C64.2,0.1,63.6,0,63,0z"
          />
        </g>

        {/* Back half slightly darker */}
        <g>
          <path
            fill="#1E40AF"
            d="M65.7,128.2c24.3-11.7,58.1-31.6,59.5-104.4c0-2.3-1.2-4.4-3.2-5.5c-0.3,0-0.7,0-1,0.1L77.8,31.3
        c-2,0.6-4,3.4-4.8,7c-9.8,40.6-12.2,69.5-10.7,90.6c0.2,0,0.5,0.1,0.7,0.1C64.1,128.9,65.3,128.3,65.7,128.2z"
          />
        </g>

        {/* Floating Front Ring */}
        <motion.g
          animate={{ y: [-2, 2, -2] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          fill="#3B82F6"
        >
          <path
            d="M126.1,95.5c0,15.5-27.5,28.2-61.9,28.5C29.3,124.3,0.6,111.7,0,96c0-0.2,0-0.3,0-0.5l0-28c0,0.2,0,0.3,0,0.5
        c0.6,15.7,29.3,28.3,64.1,28c34.4-0.3,61.9-13,61.9-28.5C126.1,75.9,126.1,87.1,126.1,95.5z"
          />
        </motion.g>
      </svg>

      {/* Number overlay */}
      <h3
        className="absolute inset-0 flex items-center justify-center font-black text-2xl text-zinc-900 dark:text-zinc-50"
        style={{ WebkitTextStroke: "0.5px #ffffff" }}
      >
        {number}
      </h3>
    </motion.div>
  );
};

export default ShieldBadge;
