import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'; // <-- Add this import
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import ThemeToggle from './components/ui/ThemeToggle';
import ScrollToTop from './components/ui/ScrollToTop';
import AnimatedCursor from "react-animated-cursor";
import Resume from './components/sections/Resume';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true); // <-- Add loading state

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // <-- Loader timeout
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleSetActiveSection = (section: string) => {
    setActiveSection(section);
  };

  if (loading) return <Loader />; // <-- Show loader while loading

 return (
    <div className={`animated-gradient-bg min-h-screen ${theme === 'dark' ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
      <AnimatedCursor
    innerSize={8}
    outerSize={35}
    color="127, 127, 255"
    outerAlpha={0.2}
    innerScale={1}
    outerScale={2}
  />
      <Navbar activeSection={activeSection} theme={theme} />
      <main>
        <Hero setActiveSection={handleSetActiveSection} />
        <About setActiveSection={handleSetActiveSection} />
        <Skills setActiveSection={handleSetActiveSection} />
        <Projects setActiveSection={handleSetActiveSection} />
        <Experience setActiveSection={handleSetActiveSection} />
        <Education setActiveSection={handleSetActiveSection} />
        <Certifications setActiveSection={handleSetActiveSection} />
        <Resume />
        <Contact setActiveSection={handleSetActiveSection} />
      </main>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <Footer />
    </div>
    
  );
}

export default App;