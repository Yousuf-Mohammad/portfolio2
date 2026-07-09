"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { useMediaQuery } from "../hooks/use-media-query";
import Typewriter from "./fancy/typewriter";
import Floating, { FloatingElement } from "./fancy/parallax-floating";

const MotionImage = motion.create(Image);

const floatingImages = [
  { src: "/HeroSection/travel.jpeg", width: 192, height: 96, depth: 0.5, pos: "top-[12%] left-[10%]" },
  { src: "/HeroSection/amraNagorik.jpeg", width: 184, height: 208, depth: 1, pos: "top-[6%] left-[31%]" },
  { src: "/HeroSection/limit.png", width: 232, height: 200, depth: 2, pos: "top-[9%] left-[70%]" },
  { src: "/HeroSection/Tazkiah.jpeg", width: 188, height: 128, depth: 1, pos: "top-[16%] right-[6%]" },
  { src: "/HeroSection/IPhone.jpeg", width: 200, height: 248, depth: 1, pos: "top-[58%] left-[16%]" },
  { src: "/HeroSection/premier.jpeg", width: 148, height: 196, depth: 2, pos: "top-[34%] left-[10%]" },
  { src: "/HeroSection/regokus.jpeg", width: 224, height: 320, depth: 4, pos: "top-[46%] right-[1%]" },
  { src: "/HeroSection/travel.jpeg", width: 268, height: 340, depth: 4, pos: "top-[84%] left-[36%]" },
  { src: "/HeroSection/zentry.jpeg", width: 200, height: 268, depth: 1, pos: "top-[70%] left-[66%]" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  // The floating layer is only visible on large screens. Mounting it
  // conditionally avoids the per-frame rAF loop + global listeners on phones.
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="sticky top-0">
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-atelier select-none">
        {/* Floating image collage (desktop only) */}
        {isDesktop && (
          <Floating sensitivity={-1} className="absolute h-full w-full">
            {floatingImages.map(({ src, width, height, depth, pos }, index) => (
              <FloatingElement key={index} depth={depth} className={pos}>
                <MotionImage
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  src={src}
                  alt="Project preview"
                  width={width}
                  height={height}
                  className="cursor-pointer rounded-xl object-cover shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.06]"
                  priority={index < 2}
                />
              </FloatingElement>
            ))}
          </Floating>
        )}

        {/* Center column */}
        <div className="relative z-50 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          {/* Availability kicker */}
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink/40 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-acid" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            <span className="kicker text-dust">Available for work · Dhaka</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="font-display display-tight text-[16vw] font-semibold text-bone sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Yousuf
            <br />
            <span className="italic text-acid">Mohammad</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-6 flex items-center gap-3 font-mono text-base text-dust sm:text-lg"
          >
            <span className="h-px w-8 bg-dust/50" />
            <Typewriter
              text={["Full-Stack Engineer", "React · Node · Laravel", "AI & LLM Integration", "Web & Mobile Apps"]}
              speed={80}
              className="text-bone"
              waitTime={1400}
              deleteSpeed={40}
              cursorChar={"_"}
            />
            <span className="h-px w-8 bg-dust/50" />
          </motion.div>

          <motion.p
            custom={3}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-lg text-balance text-sm leading-relaxed text-dust sm:text-base"
          >
            I build production-grade web &amp; mobile products end to end — from React
            &amp; Next.js interfaces to Node, Express &amp; Laravel APIs, and AI features
            powered by LangChain and LLMs.
          </motion.p>

          <motion.div
            custom={4}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="/Yousuf_Mohammad_FullStack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3 font-mono text-sm font-medium uppercase tracking-wider text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              View Résumé
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-mono text-sm uppercase tracking-wider text-bone transition-colors duration-300 hover:border-bone/40 hover:bg-bone/5"
            >
              See the work
            </a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-7 left-1/2 z-50 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="kicker text-dust/60">Scroll</span>
            <span className="h-10 w-px animate-pulse bg-gradient-to-b from-dust/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
