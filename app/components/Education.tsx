import { motion } from 'framer-motion';

export default function Education() {
  return (
    <div
      id="education"
      className="h-screen flex items-center justify-center px-6"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="font-syne text-4xl sm:text-5xl mb-8 gradient-text">
          Education
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-syne text-2xl mb-2 text-[var(--accent)]">
            Bachelor of Technology in Computer Science
          </h3>
          <p className="text-lg mb-2 text-[var(--muted)]">
            ABES ENGINEERING COLLEGE, Ghaziabad, Uttar Pradesh
          </p>
          <p className="text-sm text-[var(--muted)] mb-4">2019 - 2022</p>
          <p className="text-lg text-[var(--foreground)]">CGPA: 8.45</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
