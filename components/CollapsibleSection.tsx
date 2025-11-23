"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type CollapsibleSectionProps = {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = `${title.toLowerCase().replace(/\s+/g, "-")}-content`;

  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.35)] transition-all duration-300 lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 text-left text-base font-semibold text-white lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{title}</span>
        <FaChevronDown
          className={`text-sm transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={contentId}
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out lg:mt-0 lg:max-h-none lg:opacity-100 ${
          isOpen
            ? "max-h-[5000px] opacity-100"
            : "max-h-0 opacity-0 lg:opacity-100"
        }`}
      >
        <div className="lg:mt-0">{children}</div>
      </div>
    </div>
  );
}
