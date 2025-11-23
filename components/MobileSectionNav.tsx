"use client";

import { navLinks } from "./navLinks";

type SectionNavProps = {
  className?: string;
};

export default function MobileSectionNav({
  className = "lg:hidden",
}: SectionNavProps) {
  const baseClasses =
    "rounded-3xl border border-white/10 bg-gray-900/80 p-4 shadow-lg backdrop-blur-lg";

  return (
    <nav className={`${baseClasses} ${className}`}>
      <div className="mb-3 text-xs uppercase tracking-[0.4em] text-gray-400">
        Sections
      </div>
      <div className="flex snap-x gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-gray-900 px-4 py-3 shadow-inner">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="shrink-0 rounded-2xl bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:bg-gray-700"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
