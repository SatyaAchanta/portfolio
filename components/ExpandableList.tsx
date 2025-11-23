"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type ExpandableListProps = {
  items: string[];
  initialCount?: number;
  className?: string;
};

export default function ExpandableList({
  items,
  initialCount = 3,
  className = "",
}: ExpandableListProps) {
  const [expanded, setExpanded] = useState(false);
  const displayItems = expanded ? items : items.slice(0, initialCount);
  const hasMore = items.length > initialCount;

  return (
    <div className={className}>
      <ul className="space-y-2 text-sm text-gray-400">
        {displayItems.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-cyan-500 mt-1 flex-shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors md:hidden"
        >
          {expanded ? (
            <>
              <FaChevronUp /> Show Less
            </>
          ) : (
            <>
              <FaChevronDown /> Show {items.length - initialCount} More
            </>
          )}
        </button>
      )}

      {/* Desktop: show all items */}
      {!expanded && hasMore && (
        <ul className="hidden md:block space-y-2 text-sm text-gray-400 mt-2">
          {items.slice(initialCount).map((item, index) => (
            <li key={index + initialCount} className="flex gap-2">
              <span className="text-cyan-500 mt-1 flex-shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
