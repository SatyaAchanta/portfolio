'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaExternalLinkAlt, FaRocket, FaClock, FaLaptopCode, FaPalette, FaGlobe } from 'react-icons/fa';
import ProductRoadmap from './ProductRoadmap';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Featured Projects</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1 rounded-2xl shadow-2xl"
            >
              <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-xl">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <FaRocket className="text-3xl text-purple-600" />
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                          Fantasy League MichCA
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        Full-Stack Engineer & Product Owner
                      </p>
                    </div>
                    <a 
                      href="https://www.fantasyleaguemichca.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                    >
                      <span>Visit Live Site</span>
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Built and launched a prediction-based fantasy cricket platform for Michigan Cricket Association fans, 
                    enabling users to predict match outcomes, track leaderboards, and compete across weekly rounds. Designed 
                    to bring community engagement and data transparency to local cricket enthusiasts.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center gap-2 mb-2">
                        <FaClock className="text-green-600" />
                        <h4 className="font-bold text-gray-800 dark:text-white">Performance Impact</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Reduced result calculation time from <strong>30 minutes to 15 seconds</strong> by engineering 
                        an automated scoring pipeline
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 mb-2">
                        <FaCode className="text-blue-600" />
                        <h4 className="font-bold text-gray-800 dark:text-white">Modern Stack</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Built with <strong>Next.js, TypeScript, Prisma, Neon Postgres</strong> and deployed on Vercel 
                        with Clerk Authentication
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 dark:text-white mb-4">Key Achievements:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Implemented modular UI using ShadCN components for consistent design language
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Added Progressive Web App (PWA) capabilities for offline access
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Designed maintainable serverless backend architecture
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Complete product lifecycle ownership from concept to production
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                      Prisma
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-semibold">
                      Neon Postgres
                    </span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-semibold">
                      Vercel
                    </span>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm font-semibold">
                      Clerk Auth
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-semibold">
                      ShadCN UI
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">
                      PWA
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-12 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 p-1 rounded-2xl shadow-2xl"
            >
              <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-xl">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <FaLaptopCode className="text-3xl text-sky-600" />
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                          Personal Portfolio
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        Solo Product Builder & Experience Designer
                      </p>
                    </div>
                    <a
                      href="https://www.itsmesatya.info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-lg hover:from-sky-700 hover:to-cyan-700 transition-all shadow-lg"
                    >
                      <span>Explore Portfolio</span>
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    A story-driven personal platform built with <strong>Next.js 16</strong> and Tailwind CSS v4,
                    orchestrating a cohesive narrative for career achievements, projects, and certifications. Framer Motion
                    micro-interactions, MUI call-to-actions, and a floating AI assistant create a responsive, always-on
                    discovery experience for recruiters and collaborators.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-slate-50 to-sky-50 dark:from-slate-900/20 dark:to-sky-900/20 p-4 rounded-lg border-l-4 border-sky-500">
                      <div className="flex items-center gap-2 mb-2">
                        <FaPalette className="text-sky-600" />
                        <h4 className="font-bold text-gray-800 dark:text-white">Immersive Presentation</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Hero gradients, animated timelines, and modular sections tailor the messaging across desktop and mobile touchpoints.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-lg border-l-4 border-indigo-500">
                      <div className="flex items-center gap-2 mb-2">
                        <FaGlobe className="text-indigo-600" />
                        <h4 className="font-bold text-gray-800 dark:text-white">AI-Ready Architecture</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Chat API routes, OpenAI streaming, and resume-driven content pipelines lay the groundwork for intelligent Q&A experiences.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 dark:text-white mb-4">Key Highlights:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Unified content system spanning resume download, experience timeline, and certification badges
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Reusable component library with animation presets for rapid storytelling experiments
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Instrumented CTAs (contact, downloads) to capture intent while keeping UX frictionless
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1 flex-shrink-0">▸</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          Seamless resume and cover-letter downloads alongside direct contact CTAs to encourage quick outreach
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                      Next.js 16
                    </span>
                    <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-semibold">
                      Tailwind CSS 4
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold">
                      Framer Motion
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-semibold">
                      MUI
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-amber-900 text-slate-800 dark:text-slate-200 rounded-full text-sm font-semibold">
                      React Icons
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg"
            >
              <h4 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <span>🤖</span>
                <span>AI/ML Learning Journey</span>
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Actively exploring <strong>LangChain, Langraph, and LangSmith</strong> to build RAG and agentic workflows. 
                Implemented RAG ChatBots in Python for resume Q&A and daily standup notes, with proficiency in creating 
                vector embeddings in ChromaDB and tool calling in LangChain.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Next Goal:</strong> Introduce an AI Chatbot in Fantasy League website to enable users to make 
                predictions, view standings, and get AI-based suggestions through conversational interface.
              </p>
            </motion.div>

            <ProductRoadmap isInView={isInView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
