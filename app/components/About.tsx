'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-12 tracking-tight">
          About
        </h2>
        <p className="text-xl text-[var(--muted)] mb-6 leading-relaxed">
          Experienced frontend developer with 2+ years in React.js, Next.js,
          JavaScript, and TypeScript. Expert in building user-friendly web apps,
          leading teams, optimizing performance, and enhancing security.
        </p>
        <p className="text-xl text-[var(--muted)] leading-relaxed">
          Passionate about creating intuitive and efficient user interfaces that
          deliver exceptional user experiences.
        </p>
      </motion.div>
    </div>
  );
}
