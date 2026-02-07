"use client";

import { useState } from "react";

type ExpandableListProps = {
  items: string[];
  initialCount?: number;
};

export default function ExpandableList({ items, initialCount = 3 }: ExpandableListProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, initialCount);
  const hasMore = items.length > initialCount;

  return (
    <div>
      <ul className="mb-0 mt-0 list-disc space-y-1.5 pl-5">
        {visibleItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-2 text-sm underline"
          style={{ color: "var(--accent-strong)" }}
        >
          {expanded ? "Show fewer" : `Show ${items.length - initialCount} more`}
        </button>
      ) : null}
    </div>
  );
}
