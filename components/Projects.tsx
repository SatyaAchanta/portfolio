"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaExternalLinkAlt,
  FaRocket,
  FaClock,
  FaLaptopCode,
  FaPalette,
  FaGlobe,
} from "react-icons/fa";
import ProductRoadmap from "./ProductRoadmap";
import TruncatedText from "./TruncatedText";
import ExpandableList from "./ExpandableList";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fantasyLeagueDesc =
    "Built and launched a prediction-based fantasy cricket platform for Michigan Cricket Association fans, enabling users to predict match outcomes, track leaderboards, and compete across weekly rounds. Designed to bring community engagement and data transparency to local cricket enthusiasts.";

  const portfolioDesc =
    "A story-driven personal platform built with Next.js 16 and Tailwind CSS v4, orchestrating a cohesive narrative for career achievements, projects, and certifications. Framer Motion micro-interactions, MUI call-to-actions, and a floating AI assistant create a responsive, always-on discovery experience for recruiters and collaborators.";

  const fantasyHighlights = [
    "Implemented modular UI using ShadCN components for consistent design language",
    "Added Progressive Web App (PWA) capabilities for offline access",
    "Designed maintainable serverless backend architecture",
    "Complete product lifecycle ownership from concept to production",
  ];

  const portfolioHighlights = [
    "Unified content system spanning resume download, experience timeline, and multiple certification badges (CKAD & CBA)",
    "Reusable component library with animation presets for rapid storytelling experiments",
    "Instrumented CTAs (contact, downloads) to capture intent while keeping UX frictionless",
    "Seamless resume and cover-letter downloads alongside direct contact CTAs to encourage quick outreach",
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
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
              <div className="bg-gray-900 p-6 md:p-12 rounded-xl">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <FaRocket className="text-3xl text-purple-400" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          Fantasy League MichCA
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-400 mb-4">
                        Full-Stack Engineer & Product Owner
                      </p>
                    </div>
                    <a
                      href="https://www.fantasyleaguemichca.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm md:text-base rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                    >
                      <span>Visit Live Site</span>
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    <TruncatedText text={fantasyLeagueDesc} maxLength={150} />
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center gap-2 mb-2">
                        <FaClock className="text-green-400" />
                        <h4 className="font-bold text-white text-sm md:text-base">
                          Performance Impact
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-gray-300">
                        <span className="hidden md:inline">
                          Reduced result calculation time from{" "}
                        </span>
                        <strong>30 min → 15 sec</strong>
                        <span className="hidden md:inline">
                          {" "}
                          by engineering an automated scoring pipeline
                        </span>
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 mb-2">
                        <FaCode className="text-blue-400" />
                        <h4 className="font-bold text-white text-sm md:text-base">
                          Modern Stack
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-gray-300">
                        <strong>Next.js, TypeScript, Prisma</strong>
                        <span className="hidden md:inline">
                          , Neon Postgres and deployed on Vercel with Clerk
                          Authentication
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 md:p-6">
                    <h4 className="font-bold text-white mb-4 text-sm md:text-base">
                      Key Achievements:
                    </h4>
                    <ExpandableList
                      items={fantasyHighlights}
                      initialCount={2}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-xs md:text-sm font-semibold">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-xs md:text-sm font-semibold">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-xs md:text-sm font-semibold">
                      Prisma
                    </span>
                    <span className="px-3 py-1 bg-cyan-900 text-cyan-200 rounded-full text-xs md:text-sm font-semibold">
                      Neon Postgres
                    </span>
                    <span className="hidden md:inline px-3 py-1 bg-orange-900 text-orange-200 rounded-full text-xs md:text-sm font-semibold">
                      Vercel
                    </span>
                    <span className="hidden md:inline px-3 py-1 bg-pink-900 text-pink-200 rounded-full text-xs md:text-sm font-semibold">
                      Clerk Auth
                    </span>
                    <span className="hidden md:inline px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-xs md:text-sm font-semibold">
                      ShadCN UI
                    </span>
                    <span className="px-3 py-1 bg-yellow-900 text-yellow-200 rounded-full text-xs md:text-sm font-semibold">
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
              <div className="bg-gray-900 p-6 md:p-12 rounded-xl">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <FaLaptopCode className="text-3xl text-sky-400" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          Personal Portfolio
                        </h3>
                      </div>
                      <p className="text-base md:text-lg text-gray-400 mb-4">
                        Solo Product Builder & Experience Designer
                      </p>
                    </div>
                    <a
                      href="https://www.itsmesatya.info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white text-sm md:text-base rounded-lg hover:from-sky-700 hover:to-cyan-700 transition-all shadow-lg"
                    >
                      <span className="hidden md:inline">
                        Explore Portfolio
                      </span>
                      <span className="md:hidden">Visit</span>
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    <TruncatedText text={portfolioDesc} maxLength={150} />
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-slate-900/20 to-sky-900/20 p-4 rounded-lg border-l-4 border-sky-500">
                      <div className="flex items-center gap-2 mb-2">
                        <FaPalette className="text-sky-400" />
                        <h4 className="font-bold text-white text-sm md:text-base">
                          Immersive Presentation
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-gray-300">
                        Hero gradients, animated timelines, and modular sections
                        <span className="hidden md:inline">
                          {" "}
                          tailor the messaging across desktop and mobile
                          touchpoints
                        </span>
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 p-4 rounded-lg border-l-4 border-indigo-500">
                      <div className="flex items-center gap-2 mb-2">
                        <FaGlobe className="text-indigo-400" />
                        <h4 className="font-bold text-white text-sm md:text-base">
                          AI-Ready Architecture
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-gray-300">
                        Chat API routes
                        <span className="hidden md:inline">
                          , OpenAI streaming, and resume-driven content
                          pipelines lay the groundwork for intelligent Q&A
                          experiences
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 md:p-6">
                    <h4 className="font-bold text-white mb-4 text-sm md:text-base">
                      Key Highlights:
                    </h4>
                    <ExpandableList
                      items={portfolioHighlights}
                      initialCount={2}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-xs md:text-sm font-semibold">
                      Next.js 16
                    </span>
                    <span className="px-3 py-1 bg-cyan-900 text-cyan-200 rounded-full text-xs md:text-sm font-semibold">
                      Tailwind CSS 4
                    </span>
                    <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-xs md:text-sm font-semibold">
                      Framer Motion
                    </span>
                    <span className="px-3 py-1 bg-emerald-900 text-emerald-200 rounded-full text-xs md:text-sm font-semibold">
                      MUI
                    </span>
                    <span className="hidden md:inline px-3 py-1 bg-amber-900 text-slate-200 rounded-full text-xs md:text-sm font-semibold">
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
              className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 md:p-6 rounded-lg"
            >
              <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm md:text-base">
                <span>🤖</span>
                <span>AI/ML Learning Journey</span>
              </h4>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3">
                Actively exploring{" "}
                <strong>LangChain, Langraph, and LangSmith</strong> to build RAG
                and agentic workflows.
                <span className="hidden md:inline">
                  {" "}
                  Implemented RAG ChatBots in Python for resume Q&A and daily
                  standup notes, with proficiency in creating vector embeddings
                  in ChromaDB and tool calling in LangChain.
                </span>
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                <strong>Next Goal:</strong>{" "}
                <span className="hidden md:inline">Introduce an </span>AI
                Chatbot in Fantasy League
                <span className="hidden md:inline">
                  {" "}
                  website to enable users to make predictions, view standings,
                  and get AI-based suggestions through conversational interface
                </span>
              </p>
            </motion.div>

            <ProductRoadmap isInView={isInView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
