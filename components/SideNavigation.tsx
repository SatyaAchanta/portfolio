"use client";

import { motion } from "framer-motion";
import { navLinks } from "./navLinks";

export default function SideNavigation() {
  return (
    <nav className="hidden rounded-3xl border border-white/10 bg-gray-900/80 p-6 shadow-2xl backdrop-blur-xl lg:block">
      <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
        Sections
      </p>
      <ul className="mt-4 flex flex-col gap-2">
        {navLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <a
              href={link.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-cyan-50 hover:text-cyan-700 dark:text-gray-200 dark:hover:bg-cyan-900/30 dark:hover:text-cyan-200"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{link.name}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
