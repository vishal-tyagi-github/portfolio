'use client';

import { motion } from 'framer-motion';
import { Timeline } from '@/components/ui/timeline';

const experiences = [
  {
    title: 'Software Engineer - I',
    company: 'upGrad Education Pvt. Ltd.',
    period: 'Aug 2024 – Present',
    responsibilities: [
      'Spearheaded development of high-priority features in the Order Management System',
      'Managed medium to high-complexity features from planning to deployment',
      'Guided and mentored new team members on project workflows and best practices',
      'Conducted detailed code reviews and provided constructive feedback',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Josh Technology Group',
    period: 'Oct 2023 – Aug 2024',
    responsibilities: [
      'Led cross-functional teams in requirement gathering and feature release planning',
      'Actively engaged in code reviews and system design',
      'Led a team of 5 in a major React router dependencies migration',
      'Migrated a WordPress application to Next.js and Tailwind CSS',
      'Enhanced Firestore security rules, resulting in a 70% decrease in vulnerabilities',
      'Optimized application performance, reducing loading time by 26%',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Josh Technology Group',
    period: 'Jun 2022 – Sept 2023',
    responsibilities: [
      'Executed daily tasks involving requirement gathering and UI design collaboration',
      'Enhanced test coverage by 30% through comprehensive unit testing',
      'Reduced build size by 8% through Firebase SDK upgrade',
      'Boosted build efficiency by 37% with Webpack upgrade',
    ],
  },
];

export default function Experience() {
  const getTimelineData = () => {
    return experiences.map((exp, index) => ({
      title: exp.title,
      content: (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          viewport={{ once: true }}
          className="border-t border-[var(--muted)] pt-8"
        >
          {/* <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3> */}
          <p className="text-xl mb-2">{exp.company}</p>
          <p className="text-[var(--muted)] mb-6">{exp.period}</p>
          <ul className="list-disc list-inside mb-6 space-y-2 text-[var(--muted)]">
            {exp.responsibilities.map((resp, i) => (
              <li key={i} className="pl-2">
                {resp}
              </li>
            ))}
          </ul>
        </motion.div>
      ),
    }));
  };

  return (
    <div id="experience" className="section-container py-32">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 tracking-tight">
          Experience
        </h2>
        <div className="space-y-20">
          <Timeline data={getTimelineData()} />
        </div>
      </motion.div>
    </div>
  );
}
