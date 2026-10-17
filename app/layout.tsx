import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satya Achanta - Full-Stack Engineer & Developer Experience",
  description:
    "Portfolio of Satya Achanta - Senior Full-Stack Engineer building web platforms, APIs, and company internal tools that improve developer experience and delivery.",
  keywords: [
    "Software Engineer",
    "Developer Experience",
    "Internal Tools",
    "AI-Forward Engineer",
    "OpenAI",
    "RAG",
    "React",
    "TypeScript",
    "Python",
    "Java",
    "AWS",
    "Full Stack Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
