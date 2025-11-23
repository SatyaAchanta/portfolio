"use client";

import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { FaTimes } from "react-icons/fa";

type TruncatedTextProps = {
  text: string;
  maxLength?: number;
  className?: string;
};

export default function TruncatedText({
  text,
  maxLength = 100,
  className = "",
}: TruncatedTextProps) {
  const [open, setOpen] = useState(false);
  const shouldTruncate = text.length > maxLength;

  if (!shouldTruncate) {
    return <span className={className}>{text}</span>;
  }

  return (
    <>
      <span className={className}>
        <span className="md:hidden">
          {text.substring(0, maxLength)}...{" "}
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label="Read more"
          >
            <FaInfoCircle className="text-sm" />
            <span className="text-sm font-semibold">Read more</span>
          </button>
        </span>
        <span className="hidden md:inline">{text}</span>
      </span>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a2e",
            color: "#ffffff",
            borderRadius: "16px",
          },
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Full Content</span>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "#ffffff" }}>
            <FaTimes />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <p className="text-gray-300 leading-relaxed">{text}</p>
        </DialogContent>
      </Dialog>
    </>
  );
}
