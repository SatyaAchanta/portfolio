'use client';

import { Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { FaRoad } from 'react-icons/fa';

type ProductRoadmapProps = {
  isInView: boolean;
};

export default function ProductRoadmap({ isInView }: ProductRoadmapProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mt-12 bg-white dark:bg-gray-900 border border-slate-200/70 dark:border-slate-700 rounded-xl p-8 md:p-12 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <FaRoad className="text-2xl text-purple-600" />
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white">Product Roadmap</h4>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        A shared delivery plan that keeps both initiatives evolving in tandem—balancing conversational AI, gameplay
        insights, and polished storytelling for prospective collaborators.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200/50 dark:border-purple-800/60">
          <h5 className="text-xl font-semibold text-purple-700 dark:text-purple-200 mb-3">Fantasy League MichCA</h5>
          <strong>Q1 2026:</strong> <Chip label="2026" size="small" color="primary" className="ml-2" />
          <ul className="mt-2 ml-6 space-y-2 list-disc">
            <li>Ship conversational prediction assistant using LangChain and existing scoring APIs.</li>
            <li>Launch Team based competition where multiple teams can compete with each other.</li>
            <li>Enhance PWA features for offline access and improved user experience.</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-lg p-6 border border-cyan-200/50 dark:border-cyan-800/60">
          <h5 className="text-xl font-semibold text-sky-700 dark:text-sky-200 mb-3">Portfolio OS</h5>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Q4 2025:</strong> <Chip label="2025" size="small" color="secondary" className="ml-2" />
              <ul className="mt-2 ml-6 space-y-2 list-disc">
                <li>Integrate resume-grounded RAG pipeline to answer nuanced career questions.</li>
                <li>Layer in privacy-friendly analytics and personalization to tailor content by visitor persona.</li>
              </ul>
              <br />
              <strong>Q1 2026:</strong> <Chip label="2026" size="small" color="primary" className="ml-2" />
              <ul className="mt-2 ml-6 space-y-2 list-disc">
                <li>Add calendar and email integrations for proactive career management.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
