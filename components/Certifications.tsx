'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaAward, FaCheck } from 'react-icons/fa';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    'Core Concepts',
    'Configuration',
    'Multi-container Pods',
    'Observability',
    'Pod Design',
    'Services & Networking',
    'State Persistence',
    'Troubleshooting'
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Certifications</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-2xl shadow-2xl"
            >
              <div className="bg-gray-900 p-8 md:p-12 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                      <FaCertificate className="text-6xl text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <FaAward className="text-3xl text-yellow-500" />
                      <h3 className="text-3xl font-bold text-white">
                        Certified Kubernetes Application Developer
                      </h3>
                    </div>

                    <div className="mb-4">
                      <p className="text-lg text-gray-300 mb-2">
                        <strong>Issued by:</strong> Cloud Native Computing Foundation (CNCF)
                      </p>
                      <p className="text-lg text-gray-300 mb-2">
                        <strong>Certification ID:</strong> <span className="font-mono text-purple-400">LF-hfc7lb3taq</span>
                      </p>
                      <p className="text-lg text-gray-300">
                        <strong>Issued:</strong> February 2025
                      </p>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      Demonstrates proficiency in designing, building, and deploying cloud-native applications for Kubernetes. 
                      Gained deep expertise in debugging applications faster through implementing CI/CD pipelines from scratch 
                      using Kubernetes, enabling smarter and faster delivery workflows.
                    </p>

                    <div className="bg-gray-800 rounded-lg p-6">
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                        <span>Validated Skills:</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {skills.map((skill, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FaCheck className="text-green-500 flex-shrink-0" />
                            <span className="text-gray-300">{skill}</span>
                          </div>
                        ))}
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
