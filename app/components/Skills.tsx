import { motion } from 'framer-motion';

const skills = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Redux.js',
  'React Router',
  'MaterialUI',
  'Ant Design',
  'Tailwind CSS',
  'Jest',
  'React Testing Library',
  'Firebase',
  'Git',
  'GitHub',
  'Webpack',
  'Vite',
  'Jira',
];

export default function Skills() {
  return (
    <div id="skills" className="h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="font-syne text-4xl sm:text-5xl mb-8 gradient-text">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="shadow-2xl border-2 dark:bg-[var(--muted)] text-[var(--foreground)] px-4 py-2 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
