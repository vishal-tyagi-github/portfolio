'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackgroundLines } from '@/components/ui/background-lines';
import { useEffect, useState } from 'react';

function TypingEffect({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayedText}</span>;
}

export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center px-6">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="text-center max-w-4xl">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vishal Tyagi
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-[var(--muted)] tracking-wide mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypingEffect text="Frontend Developer crafting exceptional digital experiences" />
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              className="bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--muted)] transition-colors"
            >
              <a href="/vishal-tyagi-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </BackgroundLines>
    </div>
  );
}
