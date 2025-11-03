'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaUniversity, FaCalendar } from 'react-icons/fa';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl shadow-2xl"
            >
              <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <FaGraduationCap className="text-5xl text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                      Master of Science in Computer Science
                    </h3>

                    <div className="flex items-center gap-2 text-lg text-gray-600 dark:text-gray-300 mb-2">
                      <FaUniversity className="text-purple-600" />
                      <span className="font-semibold">Eastern Michigan University</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <FaCalendar />
                      <span>September 2013 - April 2015</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                      <span>📍</span>
                      <span>Ypsilanti, Michigan</span>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border-l-4 border-purple-600">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                        &quot;Pursued Masters in CS to expand my knowledge in CS core concepts and coding skills.&quot;
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">3.75</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">GPA</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">CS</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Major</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg col-span-2 md:col-span-1">
                        <div className="text-2xl font-bold text-green-600">Graduate</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Degree Level</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
