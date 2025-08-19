import React from "react";
import { resumeData } from "../data";
import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Name & Title */}
        <div className="text-center sm:text-left">
          <div className="font-bold text-zinc-900 dark:text-zinc-50 text-lg">
            {resumeData.name}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-300">
            {resumeData.title}
          </div>
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/"
            className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-accent transition"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-accent transition"
          >
            Projects
          </Link>
          <Link
            to="/skills-certifications"
            className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-accent transition"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-accent transition"
          >
            Contact
          </Link>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-3">
          {resumeData.contacts?.linkedin && (
            <a
              href={resumeData.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 dark:text-zinc-300 hover:text-accent transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {resumeData.contacts?.github && (
            <a
              href={resumeData.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 dark:text-zinc-300 hover:text-accent transition"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {resumeData.contacts?.email && (
            <a
              href={`mailto:${resumeData.contacts.email}`}
              className="text-zinc-600 dark:text-zinc-300 hover:text-accent transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-zinc-200 dark:border-zinc-800  py-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Designed & built by {resumeData.name}.
      </div>
    </footer>
  );
}
