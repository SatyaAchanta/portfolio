'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Button } from '@mui/material';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            SATYA ACHANTA
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-4xl mb-6 font-light "
          >
            Senior Software Engineer | Full Stack Engineer | Product Builder
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            10+ years of experience designing, developing, and modernizing large-scale web platforms and APIs. 
            Expert in React, Python, Django, and TypeScript with a proven track record of reducing delivery bottlenecks 
            and accelerating release velocity through automation and AI-driven workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center mb-8"
          >
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                backgroundColor: 'white',
                color: '#0891b2',
                '&:hover': { backgroundColor: '#f3f4f6' },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Get In Touch
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              href="/resume.pdf"
              download
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { borderColor: '#f3f4f6', backgroundColor: 'rgba(255,255,255,0.1)' },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Download Resume
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="/cover-letter.pdf"
              download
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { borderColor: '#f3f4f6', backgroundColor: 'rgba(255,255,255,0.1)' },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Download Cover Letter
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-6 justify-center text-3xl"
          >
            <a href="https://github.com/satyaachanta" target="_blank" rel="noopener noreferrer" 
               className="hover:scale-110 transition-transform duration-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/satyaachanta" target="_blank" rel="noopener noreferrer"
               className="hover:scale-110 transition-transform duration-300">
              <FaLinkedin />
            </a>
            <a href="mailto:satya.achantavenkata@gmail.com"
               className="hover:scale-110 transition-transform duration-300">
              <FaEnvelope />
            </a>
            <a href="tel:+17343830393"
               className="hover:scale-110 transition-transform duration-300">
              <FaPhone />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="text-white animate-bounce block">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
