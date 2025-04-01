'use client';

import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  index: number;
}

export default function ExperienceCard({
  title,
  company,
  location,
  duration,
  description,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <p className="text-lg text-blue-400">{company}</p>
          <p className="text-gray-400">{location}</p>
        </div>
        <p className="text-gray-400 mt-2 md:mt-0">{duration}</p>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {description.map((item, i) => (
          <li key={i} className="text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
} 