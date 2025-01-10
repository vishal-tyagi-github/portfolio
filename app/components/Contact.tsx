'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 tracking-tight">
          Contact
        </h2>
        <div className="space-y-8 text-xl">
          <p>
            <a
              href="mailto:tyagivishal227@gmail.com"
              className="hover:text-[var(--muted)] transition-colors"
            >
              tyagivishal227@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:+918171849365"
              className="hover:text-[var(--muted)] transition-colors"
            >
              +91 8171849365
            </a>
          </p>
          <div className="flex gap-8">
            <a
              href="https://linkedin.com/in/vishaltyagi227"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--muted)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vishaltyagi227"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--muted)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
