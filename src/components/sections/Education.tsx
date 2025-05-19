import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineItem from '../ui/TimelineItem';

interface EducationProps {
  setActiveSection: (section: string) => void;
}

const Education: React.FC<EducationProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('education');
    }
  }, [inView, setActiveSection]);

  const education = [
    {
      date: '2022 - 2026',
      title: 'Bachelor of Technology',
      subtitle: 'Madanapalle Institute of Technology and Science',
      description: 'Graduated with distinction. Specialized in Full Stack Development, Data Structures, and Software Engineering projects.',
    },
    {
      date: '2020 - 2022',
      title: 'Board Of Intermediate Education | Andhra Pradesh India',
      subtitle: 'vivekananda junior college',
      description: 'Completed Intermediate Education with a strong academic record.Focused on Mathematics, Physics, and Chemistry (MPC stream).',
    },
    {
      date: '2020',
      title: 'State board of secondary education ',
      subtitle: 'Sree Vidya High School',
      description: 'Completed schooling with a solid foundation in core subjectsActively participated in academic and co-curricular activities.',
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            My academic background and ongoing learning journey have provided me with a strong foundation in computer science and specialized knowledge in web development.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;