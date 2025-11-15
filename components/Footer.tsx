"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Satya Achanta</h3>
              <p className="text-gray-400">Senior Software Engineer</p>
            </div>

            <div className="flex justify-center gap-6 text-2xl md:justify-end">
              <a
                href="https://github.com/satyaachanta"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-purple-400"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/satyaachanta"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:satya.achantavenkata@gmail.com"
                className="transition-colors duration-300 hover:text-pink-400"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10 p-6 text-gray-300">
            <div className="flex flex-col gap-4 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-base">
              <p className="flex items-center justify-center gap-2">
                Made with <FaHeart className="text-red-500" /> by Satya Achanta
              </p>
              <p className="text-white/70">
                © {currentYear} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
