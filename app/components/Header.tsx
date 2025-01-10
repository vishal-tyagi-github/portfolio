'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  'About',
  'Experience',
  'Projects',
  'Skills',
  'Education',
  'Contact',
];

interface HeaderProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

export default function Header({ currentSection, onNavigate }: HeaderProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] bg-opacity-80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="w-12"> {/* Empty div for spacing */}</div>
        <ul className="flex justify-center space-x-12">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => onNavigate(index + 1)}
                className={`text-base tracking-wider transition-colors ${
                  currentSection === index + 1
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>
        <div className="w-12 flex justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
