"use client";

import { motion } from "framer-motion";
function getExperienceDuration() {
  const startDate = new Date("2022-06-15");
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  return `${years}.${months} years`;
}

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
        <h2 className="text-5xl sm:text-6xl font-bold mb-12 tracking-tight [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] dark:[text-shadow:_none]">
          About
        </h2>
        <p className="text-xl text-[var(--muted)] mb-6 leading-relaxed">
          Experienced frontend developer with{" "}
          <span className="font-bold">{getExperienceDuration()}</span> in
          <span className="font-bold">{" React.js "}</span>,{" "}
          <span className="font-bold">{" Next.js "}</span>,{" "}
          <span className="font-bold">{" JavaScript "}</span>, and
          <span className="font-bold">{" TypeScript "}</span>. Expert in
          building user-friendly web apps, leading teams, optimizing
          performance, and enhancing security.
          {/* An <span className="">experienced frontend developer</span> with
          expertise in
          <span className="font-bold">{' React.js '}</span>,
          <span className="font-bold">{' Next.js '}</span>,
          <span className="font-bold">{' JavaScript '}</span>, and
          <span className="font-bold">{' TypeScript '}</span>.
          <span className="">
            Specialized in building user-friendly web applications
          </span>
          ,<span>leading teams</span>,<span>optimizing performance</span>, and
          <span>enhancing security</span>. */}
        </p>
        <p className="text-xl text-[var(--muted)] leading-relaxed">
          Passionate about creating intuitive and efficient user interfaces that
          deliver exceptional user experiences.
        </p>
      </motion.div>
    </div>
  );
}
