'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full gradient-bg flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                    SA
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Senior Software Engineer & Product Builder
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    I deliver scalable, testable, and maintainable applications by fostering trust and teamwork. 
                    With 10+ years of experience, I specialize in modernizing large-scale web platforms, building 
                    CI/CD pipelines, and migrating legacy services to cloud-native architectures. I&apos;m passionate 
                    about reducing knowledge silos through documentation, automation, and continuous feedback.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Currently at <strong>Ithaka</strong>, I lead the library team within JSTOR&apos;s Front-end 
                    organization, mentor junior engineers, and introduced a real-time feedback widget that cut the 
                    end-user feedback loop by 50%. I&apos;m also a CKAD-certified engineer and active contributor 
                    to open-source design systems.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-full">
                      <span className="text-purple-800 dark:text-purple-200 font-semibold">📍 Michigan, USA</span>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
                      <span className="text-blue-800 dark:text-blue-200 font-semibold">🎓 Masters in CS - EMU</span>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full">
                      <span className="text-green-800 dark:text-green-200 font-semibold">🏆 CKAD Certified</span>
                    </div>
                    <div className="bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full">
                      <span className="text-orange-800 dark:text-orange-200 font-semibold">💡 10+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
