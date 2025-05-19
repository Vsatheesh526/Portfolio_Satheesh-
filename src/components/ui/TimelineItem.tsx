import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  subtitle,
  description,
}) => {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">{date}</span>
      <h3 className="text-xl font-bold">{title}</h3>
      <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-2">{subtitle}</h4>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;