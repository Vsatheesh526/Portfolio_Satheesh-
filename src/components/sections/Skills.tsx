import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProgressBar from '../ui/ProgressBar';

interface SkillsProps {
  setActiveSection: (section: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('skills');
    }
  }, [inView, setActiveSection]);

  const frontendSkills = [
    { name: 'HTML & CSS', value: 95, theme: 'blue' },
    { name: 'JavaScript', value: 90, theme: 'blue' },
    { name: 'React.js', value: 85, theme: 'blue' },
    { name: 'TypeScript', value: 80, theme: 'blue' },
    { name: 'Tailwind CSS', value: 85, theme: 'blue' },
  ];

  const backendSkills = [
    { name: 'Node.js', value: 80, theme: 'teal' },
    { name: 'Express.js', value: 75, theme: 'teal' },
    { name: 'MongoDB', value: 70, theme: 'teal' }

  ];

  const otherSkills = [
    { name: 'UI/UX Design', value: 75, theme: 'gold' },
    { name: 'Git & GitHub', value: 90, theme: 'gold' },
    { name: 'Responsive Design', value: 95, theme: 'gold' },
    { name: 'Performance Optimization', value: 80, theme: 'gold' },
    { name: 'Testing & Debugging', value: 85, theme: 'gold' },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I've developed a diverse range of skills throughout my career. Here's a breakdown of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-6 text-blue-500">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <ProgressBar 
                key={index} 
                label={skill.name} 
                value={skill.value} 
                theme={skill.theme as 'blue' | 'teal' | 'gold'} 
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-6 text-teal-500">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <ProgressBar 
                key={index} 
                label={skill.name} 
                value={skill.value} 
                theme={skill.theme as 'blue' | 'teal' | 'gold'} 
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-6 text-accent-500">Other Skills</h3>
            {otherSkills.map((skill, index) => (
              <ProgressBar 
                key={index} 
                label={skill.name} 
                value={skill.value} 
                theme={skill.theme as 'blue' | 'teal' | 'gold'} 
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 
              'MongoDB',  'Git', 'GitHub', 'Tailwind CSS', 
               'Figma', 'VS Code', 'Postman', 'Google Firebase',
            ].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full shadow-sm"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;