"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Ithaka",
    role: "Senior Software Engineer",
    location: "Ann Arbor, MI",
    period: "November 2019 - Present",
    description:
      "Accomplished Senior Software Engineer maintaining admin portals, reporting workflows, and public APIs in compliance with COUNTER specifications",
    highlights: [
      "Reduced end-user feedback loop by 50% by introducing a real-time feedback widget that streamlined user communication",
      "Proficient in AI coding agents and automated testing pipelines to release software with speed",
      "Eliminated delivery bottlenecks by collaborating with product owners to plan and execute quarterly sprints with precision",
      "Enhanced CI/CD efficiency by building scalable pipelines using GitHub Actions, GitLab, Jenkins, Docker, and Kubernetes",
      "Modernized legacy services into AWS Step Functions and Lambda architectures, improving scalability and reducing maintenance",
      "Regular contributor to open-source design systems and experienced in implementing React/Python/Django microfrontends",
      "Recognized for end-to-end ownership across SDLC—from architecture and QA to production deployment",
      "Mentor junior engineers and interns, sharing knowledge on debugging and best practices",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "Infor",
    role: "Software Engineer",
    location: "Ann Arbor, MI",
    period: "May 2015 - November 2019",
    description:
      "Engineered enterprise-grade software solutions for major automotive clients, driving feature delivery and system modernization",
    highlights: [
      "Spearheaded front-end development in Angular 8 and built RESTful APIs with Spring Framework",
      "Redesigned and optimized database schemas using Hibernate and SQL, improving data consistency and cutting query latency",
      "Partnered directly with Principal Architect in recurring 1:1s to refine architectural design patterns and elevate code quality",
      "Led Angular migration initiatives, modernizing legacy front-end architecture (Angular 2 → 4 → 6 → 8)",
      "Introduced automated linting (TSLint, ESLint) to enforce maintainability and reduce code smells",
      "Automated release operations by developing silent-install scripts, streamlining deployment cycles",
      "Accelerated analyst productivity by 30% through custom EDI mapping between reports and Java classes",
      "Championed Agile best practices and continuous integration via Jenkins, Git/SVN, and JIRA",
    ],
    color: "from-blue-500 to-cyan-500",
  },
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

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`rounded-2xl bg-gradient-to-br ${exp.color} p-[1px] shadow-xl`}
              >
                <div className="flex h-full flex-col rounded-2xl bg-white/95 p-6 dark:bg-gray-900/95">
                  <div className="flex items-center gap-3">
                    <FaBriefcase className="text-xl text-purple-600" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                        {exp.company}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="inline-flex items-center gap-2">
                      <FaCalendar className="text-purple-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <FaMapMarkerAlt className="text-purple-500" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {exp.highlights.slice(0, 4).map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-purple-600">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
