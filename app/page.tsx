'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = useRef<HTMLElement[]>([]);

  const sectionNames = [
    'hero',
    'about',
    'experience',
    'projects',
    'skills',
    'education',
    'contact',
  ];

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const initialSectionIndex = sectionNames.indexOf(hash);
    if (initialSectionIndex !== -1) {
      setTimeout(() => {
        scrollToSection(initialSectionIndex);
      }, 100);
    }

    if (!containerRef.current) return;

    const sectionElements = containerRef.current.querySelectorAll('section');
    sections.current = Array.from(sectionElements) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.current.indexOf(entry.target as HTMLElement);
            setCurrentSection(index);
            window.history.replaceState(null, '', `#${sectionNames[index]}`);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    sections.current.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sections.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    window.history.replaceState(null, '', `#${sectionNames[index]}`);
  };

  return (
    <div className="relative">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-[var(--foreground)] origin-[0%] z-50" />
      <Header currentSection={currentSection} onNavigate={scrollToSection} />
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory"
      >
        <section className="snap-start h-screen">
          <Hero />
        </section>
        <section className="snap-start h-screen">
          <About />
        </section>
        <section className="snap-start min-h-screen">
          <Experience />
        </section>
        <section className="snap-start min-h-screen">
          <Projects />
        </section>
        <section className="snap-start min-h-screen">
          <Skills />
        </section>
        <section className="snap-start min-h-screen">
          <Education />
        </section>
        <section className="snap-start min-h-screen">
          <Contact />
        </section>
      </div>
    </div>
  );
}
