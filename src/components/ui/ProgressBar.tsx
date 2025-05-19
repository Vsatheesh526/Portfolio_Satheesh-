import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  label: string;
  theme?: 'blue' | 'teal' | 'gold';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  label, 
  theme = 'blue' 
}) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'teal':
        return 'bg-secondary-500';
      case 'gold':
        return 'bg-accent-500';
      default:
        return 'bg-primary-500';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{label}</span>
        <span className="text-gray-600 dark:text-gray-400">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-2.5 rounded-full ${getThemeClasses()}`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;