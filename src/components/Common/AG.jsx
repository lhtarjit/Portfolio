import React from "react";

export default function AGLogo({
  className = "text-zinc-900 dark:text-white",
  width = 120,
  height = 60,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 100"
      width={width}
      height={height}
      className={`${className} animate-spin-slow`}
    >
      <defs>
        {/* Gradient for letters */}
        <linearGradient id="AGGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        {/* Shadow filter for 3D effect */}
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="2"
            floodColor="#000"
            floodOpacity="0.3"
          />
        </filter>
      </defs>

      {/* A letter with gradient fill and shadow */}
      <path
        d="M20 80 L50 20 L50 80 Z"
        fill="url(#AGGradient)"
        filter="url(#shadow)"
      />

      {/* G letter with gradient fill and shadow */}
      <path
        d="M60 20 C90 20, 90 80, 60 80 C50 80, 50 70, 60 70 L80 70"
        fill="url(#AGGradient)"
        filter="url(#shadow)"
      />

      {/* Dynamic swoosh with gradient stroke */}
      <path
        d="M15 70 C60 10, 140 10, 180 70"
        stroke="url(#AGGradient)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
