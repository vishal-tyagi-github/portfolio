import { motion } from 'framer-motion';

const education = [
  {
    name: 'Bachelor of Technology in Computer Science',
    description: 'ABES Engineering College, Ghaziabad',
    period: '2019 - 2022',
    technologies: [
      'Data structure and Algorithm',
      'Operating System',
      'Compiler Design',
      'Database Management System',
      'Computer Networks',
      'Software Development Life Cycle',
    ],
  },
  {
    name: 'Three year Diploma in Computer Science',
    description: 'Government Polytechnic, Saharanpur',
    period: '2016 - 2019',
    technologies: [
      'Programming in C & C++',
      'Java Programming',
      'Web Development',
      'Data structure and Algorithm',
      'Network Administration and  Security',
      'Database Management System',
    ],
  },
];

export default function Education() {
  return (
    <div id="education" className="section-container py-32">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 tracking-tight [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] dark:[text-shadow:_none]">
          Education
        </h2>
        <div className="space-y-20">
          {education.map((institute, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="border-t border-[var(--muted)] pt-8"
            >
              <h3 className="text-2xl font-semibold mb-4">{institute.name}</h3>
              <p className="text-[var(--muted)]">{institute.description}</p>
              <p className="text-[var(--muted)] mb-6">{institute.period}</p>

              <div className="flex flex-wrap gap-3">
                {institute.technologies.map((tech, i) => (
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
