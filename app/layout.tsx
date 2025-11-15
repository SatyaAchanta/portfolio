import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Satya Achanta - Senior Software Engineer",
  description:
    "Portfolio of Satya Achanta - Evidence-based software engineer specializing in React, TypeScript, Python, and cloud technologies",
  keywords: [
    "Software Engineer",
    "React",
    "TypeScript",
    "Python",
    "Full Stack Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
