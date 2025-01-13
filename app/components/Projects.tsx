'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Order Management System',
    description: 'A comprehensive system for managing orders and transactions.',
    details: [
      'Implemented high-priority features following Figma design specifications',
      'Developed a real-time order tracking system using WebSocket',
      'Created a dynamic filtering system for order management',
      'Integrated payment gateway with multiple payment methods',
      'Implemented order analytics dashboard with data visualization',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'WebSocket', 'Chart.js'],
  },
  {
    name: 'GroupNexus',
    description:
      'A collaborative platform for team communication and project management.',
    details: [
      'Led the development of real-time chat functionality',
      'Implemented drag-and-drop file sharing system',
      'Created an interactive kanban board for project management',
      'Developed user permission system with role-based access',
      'Integrated video conferencing using WebRTC',
    ],
    technologies: ['React', 'Firebase', 'Material-UI', 'WebRTC', 'Redux'],
  },
  {
    name: 'Pod.ai',
    description: 'An AI-powered content management platform.',
    details: [
      'Enhanced security implementation reducing vulnerabilities by 70%',
      'Developed AI-powered content recommendation system',
      'Implemented content versioning and rollback features',
      'Created automated content moderation system',
      'Integrated analytics dashboard for content performance',
    ],
    technologies: [
      'React',
      'Firebase',
      'Tailwind CSS',
      'TensorFlow.js',
      'Node.js',
    ],
  },
];

export default function Projects() {
  return (
    <div id="projects" className="section-container py-32">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 tracking-tight [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] dark:[text-shadow:_none]">
          Projects
        </h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="border-t border-[var(--muted)] pt-8"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-[var(--muted)] mb-6">{project.description}</p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-[var(--muted)]">
                {project.details.map((detail, i) => (
                  <li key={i} className="pl-2">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-[var(--muted)] px-4 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
