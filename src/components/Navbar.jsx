import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Linkedin, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { resumeData } from "../data";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/skills-certifications", label: "Skills & Certifications" },
    { to: "/education", label: "Education" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center px-3 py-2 rounded-md border border-zinc-200 dark:border-zinc-800"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          <a
            href="/"
            className="font-semibold text-zinc-900 dark:text-zinc-100"
          >
            {resumeData.name}
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm hover:text-blue-600 hover:font-bold ${
                  isActive
                    ? "font-bold text-blue-600 border-blue-600 border-b " // Active: bold, blue, underlined
                    : "text-zinc-600 dark:text-zinc-300" // Inactive
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={resumeData.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex text-zinc-700 dark:text-zinc-300 hover:text-accent"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={resumeData.contacts.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex text-zinc-700 dark:text-zinc-300 hover:text-accent"
          >
            <Github className="w-5 h-5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm  hover:text-blue-600 hover:font-bold ${
                    isActive
                      ? "font-bold text-blue-600 underline"
                      : "text-zinc-600 dark:text-zinc-300"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
