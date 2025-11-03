'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    company: 'Ithaka',
    role: 'Senior Software Engineer',
    location: 'Ann Arbor, MI',
    period: 'November 2019 - Present',
    description: 'Accomplished Senior Software Engineer maintaining admin portals, reporting workflows, and public APIs in compliance with COUNTER specifications',
    highlights: [
      'Reduced end-user feedback loop by 50% by introducing a real-time feedback widget that streamlined user communication',
      'Accelerated release velocity by 3× through adoption of AI coding agents and automated testing pipelines',
      'Eliminated delivery bottlenecks by collaborating with product owners to plan and execute quarterly sprints with precision',
      'Enhanced CI/CD efficiency by building scalable pipelines using GitHub Actions, GitLab, Jenkins, Docker, and Kubernetes',
      'Modernized legacy services into AWS Step Functions and Lambda architectures, improving scalability and reducing maintenance',
      'Regular contributor to open-source design systems and experienced in implementing React/Python/Django microfrontends',
      'Recognized for end-to-end ownership across SDLC—from architecture and QA to production deployment',
      'Mentor junior engineers and interns, sharing knowledge on debugging and best practices'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    company: 'Infor',
    role: 'Software Engineer',
    location: 'Ann Arbor, MI',
    period: 'May 2015 - November 2019',
    description: 'Engineered enterprise-grade software solutions for major automotive clients, driving feature delivery and system modernization',
    highlights: [
      'Spearheaded front-end development in Angular 8 and built RESTful APIs with Spring Framework',
      'Redesigned and optimized database schemas using Hibernate and SQL, improving data consistency and cutting query latency',
      'Partnered directly with Principal Architect in recurring 1:1s to refine architectural design patterns and elevate code quality',
      'Led Angular migration initiatives, modernizing legacy front-end architecture (Angular 2 → 4 → 6 → 8)',
      'Introduced automated linting (TSLint, ESLint) to enforce maintainability and reduce code smells',
      'Automated release operations by developing silent-install scripts, streamlining deployment cycles',
      'Accelerated analyst productivity by 30% through custom EDI mapping between reports and Java classes',
      'Championed Agile best practices and continuous integration via Jenkins, Git/SVN, and JIRA'
    ],
    color: 'from-blue-500 to-cyan-500'
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Work Experience</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`mb-12 flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-purple-500 rounded-full z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-gradient-to-r ${exp.color} p-1 rounded-xl shadow-xl`}>
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <FaBriefcase className="text-purple-600" />
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {exp.role}
                          </h3>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-purple-600 mb-2">{exp.company}</h4>
                        
                        <div className="flex flex-col gap-1 mb-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <FaCalendar className="text-sm" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-sm" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                          {exp.description}
                        </p>

                        <ul className="space-y-2">
                          {exp.highlights.slice(0, 4).map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <span className="text-purple-600 mt-1">▸</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
