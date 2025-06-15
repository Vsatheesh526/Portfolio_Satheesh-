import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, PenTool, Rocket, Users } from 'lucide-react';

interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);

  const features = [
    {
      icon: <Code size={24} className="text-blue-500" />,
      title: 'Web Development',
      description: 'Building responsive and user-friendly websites using modern frameworks and technologies.',
    },
    {
      icon: <PenTool size={24} className="text-teal-500" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience.',
    },
    {
      icon: <Rocket size={24} className="text-accent-500" />,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, SEO, and accessibility to improve user retention.',
    },
    {
      icon: <Users size={24} className="text-primary-600" />,
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams to deliver successful projects.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I'm a passionate web developer with expertise in creating modern, user-friendly web applications. 
            With a strong foundation in both front-end and back-end technologies, I bring ideas to life through clean, 
            efficient code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://res.cloudinary.com/dn4okkd2p/image/upload/v1749965509/prof_u6iddh.avif" 
              alt="Developer coding" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
              As an intern in web development, I've gained hands-on experience working on a variety of projects, from small business websites to more complex web applications.
               I'm eager to learn and continuously adapt to new technologies to provide effective and modern solutions
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I believe in creating web experiences that are not only visually appealing but also functional, accessible, 
                and optimized for performance. My goal is to help businesses establish a strong online presence and connect 
                with their audience effectively.
              </p>
            </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-6 md:px-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-lg"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
