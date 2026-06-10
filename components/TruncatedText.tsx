"use client";

import { useState } from "react";

type TruncatedTextProps = {
  text: string;
  maxLength?: number;
};

export default function TruncatedText({ text, maxLength = 160 }: TruncatedTextProps) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <>{text}</>;
  }

  const preview = text.slice(0, maxLength).trimEnd();

  return (
    <>
      {expanded ? text : `${preview}...`}{" "}
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="underline"
        style={{ color: "var(--accent-strong)" }}
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </>
  );
}
