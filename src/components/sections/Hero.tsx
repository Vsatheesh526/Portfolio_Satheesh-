import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';


interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

    const handleContactClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6ec4', '#7873f5', '#42e695', '#ffb86c'],
    });
  };



  useEffect(() => {
    if (inView) {
      setActiveSection('home');
    }
  }, [inView, setActiveSection]);

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Vsatheesh526', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/satheesh-vadla-aa7027255/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:satheeshvadla2004@gmail.com', label: 'Email' },
  ];
  const blockColors = [
  "#ff6ec4", "#7873f5", "#42e695", "#ffb86c", "#f67280", "#355c7d", "#6c5b7b", "#c06c84"
  ];
  const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;
  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden pt-24 sm:pt-32"
    >
      {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-md"
            style={{
              width: `${getRandom(40, 80)}px`,
              height: `${getRandom(40, 80)}px`,
              background: blockColors[Math.floor(Math.random() * blockColors.length)],
              top: `${getRandom(0, 90)}%`,
              left: `${getRandom(0, 90)}%`,
              opacity: 0.18,
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
            }}
            animate={{
              y: [0, getRandom(-40, 40)],
              x: [0, getRandom(-40, 40)],
              rotate: [0, getRandom(-30, 30)],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: getRandom(8, 16),
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            {/* <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 text-blue-800 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold mb-6"
          >
            Hi, I'm <span className="gradient-text">SATHEESH</span>
            <br />
            <span className="text-sm font-mono text-gray-800 dark:text-gray-400">Professional Web Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            I create beautiful, responsive websites and applications with modern technologies. Let's bring your ideas to life!
          </motion.p>

          <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
      >
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={handleContactClick}
        >
          Contact Me
        </a>
        <a href="#projects" className="btn btn-secondary" onClick={handleContactClick}>
          View My Work
        </a>
      </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <a 
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-gray-600 dark:text-gray-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;