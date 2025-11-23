'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, SiAngular, SiNextdotjs, SiTypescript, SiFlutter, 
  SiPython, SiDjango, SiOpenjdk, SiSpring, SiNodedotjs,
  SiMysql, SiElasticsearch, SiAmazon, SiKubernetes, SiDocker,
  SiGitlab, SiGithubactions, SiJenkins, SiGraphql, SiFirebase
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Angular', icon: SiAngular, color: '#DD0031' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Java', icon: SiOpenjdk, color: '#007396' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ]
  },
  {
    title: 'Database & APIs',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ]
  },
  {
    title: 'CI/CD',
    skills: [
      { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Technical Skills</span>
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Icon size={40} style={{ color: skill.color }} />
                        <span className="text-xs font-medium text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-center text-white">
                Additional Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Jest', 'Mockito', 'Swagger', 'Hibernate', 'Serverless', 'Lambda', 'SQS', 'S3', 
                  'Vercel', 'Codemagic', 'Ruby', 'PHP', 'Bash', 'Windows Scripts', 'Lombok', 
                  'Maven', 'Git', 'JIRA', 'Agile'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-900 to-pink-900 text-purple-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
