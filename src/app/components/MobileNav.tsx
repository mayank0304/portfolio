'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

interface MobileNavProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export default function MobileNav({ activeSection, onSectionClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (section: string) => {
    if (section === 'blog') {
      window.location.href = '/blog';
    } else {
      onSectionClick(section);
    }
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg"
          >
            <nav className="p-4">
              <ul className="space-y-4">
                {['home', 'projects', 'skills', 'experience', 'blog', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleSectionClick(section)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === section
                          ? 'bg-blue-500 text-white'
                          : 'hover:bg-gray-700'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 