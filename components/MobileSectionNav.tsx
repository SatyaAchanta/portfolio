'use client';

import { navLinks } from './navLinks';

export default function MobileSectionNav() {
  return (
    <nav className="lg:hidden">
      <div className="mb-2 text-xs uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
        Sections
      </div>
      <div className="flex snap-x gap-3 overflow-x-auto rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-lg dark:border-white/10 dark:bg-gray-900/80">
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
