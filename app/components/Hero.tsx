"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useEffect, useState } from "react";

function TypingEffect({ text }: { readonly text: string }) {
  const [displayedText, setDisplayedText] = useState("");
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
  const text = "Frontend Developer crafting exceptional digital experiences";
  const words = text.split(" ").map((word, index) => ({
    text: word,
    className: `text-xl sm:text-2xl text-[var(--muted)] dark:text-[var(--muted)] tracking-wide ${
      index === 0 || index === 1
        ? "text-[var(--highlight)] dark:text-[var(--highlight)]"
        : ""
    }`,
  }));

  return (
    <div className="h-screen flex items-center justify-center px-6">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="text-center max-w-4xl">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] dark:[text-shadow:_none]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vishal Tyagi
          </motion.h1>
          <TypewriterEffectSmooth
            className="mb-12 hidden md:flex"
            cursorClassName="hidden"
            words={words}
          />
          <motion.p
            className="md:hidden text-xl sm:text-2xl text-[var(--muted)] tracking-wide mb-12"
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
              className="bg-[var(--foreground)] text-[var(--background)] hover:scale-105 hover:shadow-lg hover:shadow-[var(--foreground)] hover:rotate-1 transition-all duration-300 ease-out relative before:absolute before:inset-0 before:bg-[var(--foreground)] before:opacity-50 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300 before:-z-10"
            >
              <a href="/VishalTyagiResume.pdf" download>
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
