"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

const experiences = [
  {
    title: "Software Engineer - 2",
    company: "upGrad Education Pvt. Ltd.",
    period: "Aug 2024 – Present",
    projects: "Order Management System",
    responsibilities: [
      "Accomplished seamless integration of business operations by implementing a multi-tenant, JSON-driven UI in React for the “one-OMS” Order Management System, which led to unified process management for both upGrad and Knowledge Hut businesses.",
      "Accomplished efficient document processing by developing a Document Management System for student applications, which led to streamlined verification, prompt error correction by students, and smoother admissions progression.",
      "Accomplished a 40% reduction in payment drop-offs by implementing Razorpay for domestic, and Stripe/Adyen for international payments, alongside designing a user-friendly payment page which led to increased payment completions.",
      "Implemented a mobile-first payment by incorporating QR code and UPI app payment flows directly within the upGrad website, which led to a faster and more convenient checkout experience.",
      "Accomplished improved user experience and conversion rate by tracking and analyzing user behavior to identify and address potential drop-off points, which led to a more intuitive application process.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Josh Technology Group",
    period: "Oct 2023 – Aug 2024",
    projects: "GroupNexus, Pod.ai",
    responsibilities: [
      "Led cross-functional teams in requirement gathering, UI design collaboration, feature release planning, and alignment with Agile sprints for timely delivery",
      "Actively engaged in code reviews and system design. Collaborated on design discussions, assisted peers with technical queries, facilitated task completion, and demonstrated leadership and teamwork when necessary",
      "Led a team of 5 in a major React router dependencies migration, minimizing code changes, introducing nested routes, and ensuring smooth feature releases. Coordinated with QA and technical leads to mitigate product impact and reduce bugs, overseeing code reviews and extensive testing",
      "Enhanced Firestore security rules to uphold app security and ensure data integrity, resulting in a 70% decrease in vulnerabilities and data breaches. Ensured compliance with GDPR, contributing to a 2% annual revenue saving for the organisation",
      "Migrated a WordPress application to Next.js and Tailwind CSS, enhancing support and achieving high SEO rankings",
      "Optimized application to meet Core Web Vitals standards, reducing loading time by 26% through page load and image optimization techniques",
      "Mentored 2 new joiners through the induction process, providing code reviews, guidance, and support. Clarified doubts, aligned their learning paths, and helped them with project onboarding",
      "Contributed to the frontend recruitment drive by preparing 50+ interview questions and reviewing interview materials. Conducted 7 interviews, evaluating candidates' skills and suitability for the role",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Josh Technology Group",
    period: "Jun 2022 – Sept 2023",
    projects: "GroupNexus",
    responsibilities: [
      "Executed daily tasks involving requirement gathering, collaborating on UI designs, addressing bug fixes, and developing new flows/features",
      "Enhanced test coverage by 30% through comprehensive unit testing using Jest and React Testing Library, achieving over 80% coverage",
      "Reduced build size by 8% through Firebase SDK upgrade from v8 to v9, leveraging tree-shaking capabilities",
      "Boosted build efficiency by 37% with Webpack upgrade from v4 to v5, reducing build time from 8 min to 5 min",
      "Refactored code, reducing technical debt by 24% and improving code maintainability",
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
          <p className="text-xl mb-2 text-[var(--highlight)]">{exp.company}</p>
          <p className="text-[var(--muted)] mb-2">{exp.period}</p>
          {exp.projects && (
            <p className="text-sm text-[var(--muted)] mb-4 italic">
              Projects: {exp.projects}
            </p>
          )}
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
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 tracking-tight [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] dark:[text-shadow:_none]">
          Experience
        </h2>
        <div className="space-y-20">
          <Timeline data={getTimelineData()} />
        </div>
      </motion.div>
    </div>
  );
}
