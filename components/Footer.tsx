'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Satya Achanta</h3>
            <p className="text-gray-400">Senior Software Engineer</p>
          </div>

          <div className="flex gap-6 text-2xl">
            <a 
              href="https://github.com/satyaachanta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/satyaachanta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:satya.achantavenkata@gmail.com"
              className="hover:text-pink-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Satya Achanta © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
