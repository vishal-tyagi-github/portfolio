'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  'About',
  'Experience',
  'Projects',
  'Skills',
  'Education',
  'Contact',
];

interface HeaderProps {
  readonly currentSection: number;
  readonly onNavigate: (index: number) => void;
}

export default function Header({ currentSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] bg-opacity-80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <button
          className="w-12 flex justify-end"
          onClick={() => onNavigate(0)}
          aria-label="Go to top"
        >
          <motion.div
            className="relative w-8 h-8"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[var(--foreground)]"
            >
              {/* Outer rotating ring */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="8 4"
              />

              {/* Middle geometric pattern */}
              <path
                d="M50 15
                   L85 50
                   L50 85
                   L15 50
                   Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />

              {/* Inner rotating squares */}
              <rect
                x="35"
                y="35"
                width="30"
                height="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(45 50 50)"
              />

              <rect
                x="40"
                y="40"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                transform="rotate(22.5 50 50)"
              />

              {/* Center dot */}
              <circle cx="50" cy="50" r="3" fill="currentColor" />
            </svg>
          </motion.div>
        </button>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-12">
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
                    ? 'text-[var(--highlight)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div className="flex justify-end">
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-[var(--foreground)]"
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
          <div className="w-12 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--background)] border-t border-[var(--muted)]"
          >
            <ul className="flex flex-col items-center py-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  className="w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => {
                      onNavigate(index + 1);
                      setIsOpen(false);
                    }}
                    className={`w-full py-3 text-base tracking-wider transition-colors ${
                      currentSection === index + 1
                        ? 'text-[var(--highlight)]'
                        : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
