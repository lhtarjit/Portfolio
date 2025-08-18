import React from "react";
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white dark:bg-zinc-900 shadow-sm ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
