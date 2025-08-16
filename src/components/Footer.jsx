import React from "react";
import { resumeData } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-10 flex items-center justify-between">
        <div>
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">
            {resumeData.name}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-300">
            {resumeData.title}
          </div>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-300">
          Designed & built by you • {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
