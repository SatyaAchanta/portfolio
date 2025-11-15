"use client";

import { navLinks } from "./navLinks";

type SectionNavProps = {
  className?: string;
};

export default function MobileSectionNav({
  className = "lg:hidden",
}: SectionNavProps) {
  const baseClasses =
    "rounded-3xl border border-white/10 bg-white/80 p-4 shadow-lg backdrop-blur-lg dark:bg-gray-900/80 dark:border-white/5";

  return (
    <nav className={`${baseClasses} ${className}`}>
      <div className="mb-3 text-xs uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
        Sections
      </div>
      <div className="flex snap-x gap-3 overflow-x-auto rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-inner dark:border-white/10 dark:bg-gray-900">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="shrink-0 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-slate-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
