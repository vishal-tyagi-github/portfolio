import { motion } from 'framer-motion';
import { HoverBorderGradient } from './ui/hover-border-gradient';

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
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 tracking-tight text-center [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] dark:[text-shadow:_none]">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              viewport={{ once: true }}
            >
              <HoverBorderGradient
                key={skill}
                containerClassName="rounded-full hover:shadow-[var(--highlight)] hover:shadow-sm dark:hover:shadow-[var(--highlight)] dark:hover:shadow-sm transition-shadow duration-300"
                as="span"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 shadow-2xl hover:text-[var(--highlight)] dark:hover:text-[var(--highlight)] transition-colors duration-300"
                initialHovered={true}
              >
                {skill}
              </HoverBorderGradient>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
