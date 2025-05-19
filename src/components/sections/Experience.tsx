import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineItem from '../ui/TimelineItem';

interface ExperienceProps {
  setActiveSection: (section: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('experience');
    }
  }, [inView, setActiveSection]);

  const experiences = [
    {
      date: '2025 - Present',
      title: 'FontEndWeb Developer(Intern)',
      subtitle: 'CreTech',
      description: 'Leading the front-end development team, architecting solutions, and implementing best practices for scalable web applications.',
    },
    {
      date: '2024',
      title: 'Java Full Stack Developer (Intern)',
      subtitle: 'SkillDzire',
      description: 'Developed and maintained multiple client websites and applications using Java, Html, Css and various databases.',
    },
    {
      date: '2024 - 2026',
      title: 'Institute of Electronics and Telecommunication Engineers (IETE) – Member',
      subtitle: 'ISFC-1155',
      description: 'Member of the Institute of Electronics and Telecommunication Engineers (IETE), a leading professional society for electronics, telecommunication, and IT professionals in India',
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            My professional journey includes working with diverse teams and clients on a variety of projects, constantly expanding my skills and knowledge.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              date={experience.date}
              title={experience.title}
              subtitle={experience.subtitle}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;