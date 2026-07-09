"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import BentoCard from "./BentoCard";

const experiences = [
  { company: "Nukta Solutions", role: "Jr. Software Engineer", duration: "Apr 2025 — Present", logo: "/nukta.svg" },
  { company: "Avenir IT", role: "Jr. Frontend Developer", duration: "Sep 2024 — Mar 2025", logo: "/aveenir.png" },
  { company: "VAST", role: "Web Developer (Contractual)", duration: "Nov 2023 — Sep 2024", logo: "/vast.jpg" },
];

const education = [
  { school: "BRAC University", degree: "BSc. in Electronics & Communication Engineering", logo: "/bracu.png" },
  { school: "Dhaka College", degree: "Higher Secondary", logo: "/dhakacollege.png" },
];

const SectionLabel = ({ index, children }) => (
  <div className="mb-10 flex items-center gap-4">
    <span className="font-mono text-sm text-acid">{index}</span>
    <span className="kicker text-dust">{children}</span>
    <span className="h-px flex-1 bg-line" />
  </div>
);

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative z-10 w-full rounded-t-[2.5rem] border-t border-line bg-ink bg-dotgrid px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="01">About</SectionLabel>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 lg:grid-rows-6">
          {/* Profile Image */}
          <div className="flex items-center justify-center lg:col-span-3 lg:row-span-3">
            <div className="group relative">
              <div className="absolute -inset-3 rounded-full bg-acid/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 lg:opacity-0" />
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-acid/30 ring-1 ring-line sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
                <Image
                  src="/Me.png"
                  width={320}
                  height={320}
                  alt="Yousuf Mohammad"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          </div>

          {/* About Me */}
          <BentoCard className="lg:col-span-7 lg:row-span-3">
            <div className="flex h-full flex-col justify-center">
              <h3 className="mb-4 font-display text-2xl font-medium text-bone md:text-3xl">
                Hello, I&apos;m Yousuf<span className="text-acid">.</span>
              </h3>
              <p className="text-sm leading-relaxed text-dust md:text-base lg:text-lg">
                A Full-Stack JavaScript Engineer shipping production-grade web and mobile
                products — LMS platforms, AI-powered SaaS tools, online exam systems, and
                e-commerce apps used by real people.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dust md:text-base lg:text-lg">
                I work across the whole stack: React, Next.js &amp; React Native on the
                front, Node, Express &amp; Laravel on the back, with LangChain and LLM
                integrations where they add real value. Obsessed with performance, clean
                architecture, and actually shipping.
              </p>
            </div>
          </BentoCard>

          {/* Availability + stats */}
          <BentoCard className="lg:col-span-4 lg:row-span-3">
            <div className="flex h-full flex-col">
              <span className="inline-flex items-center gap-2.5 self-start rounded-full border border-acid/30 bg-acid/5 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-acid">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-acid" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
                </span>
                Open to work
              </span>
              <p className="mt-5 font-display text-2xl font-medium leading-snug text-bone md:text-[1.7rem]">
                Available for freelance &amp; full-time roles.
              </p>
              <dl className="mt-auto grid grid-cols-3 gap-x-4 border-t border-line pt-6">
                {[
                  { value: "2", suffix: "+", label: "Years" },
                  { value: "10", suffix: "+", label: "Projects" },
                  { value: "20", suffix: "+", label: "Technologies" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dd className="font-display text-4xl font-semibold leading-none tracking-tight text-bone md:text-[2.75rem]">
                      <span className="text-acid">{stat.value}</span>
                      {stat.suffix}
                    </dd>
                    <dt className="mt-2 font-mono text-[11px] uppercase tracking-widest text-dust">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </BentoCard>

          {/* Experience */}
          <BentoCard className="lg:col-span-3 lg:row-span-3">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-dust">
              Experience
            </h3>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.company} className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-bone/95 p-1.5 ring-1 ring-white/10">
                    <Image src={exp.logo} width={40} height={40} alt={exp.company} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bone">{exp.role}</p>
                    <p className="text-xs text-dust">{exp.company}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-dust/70">{exp.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Education */}
          <BentoCard className="lg:col-span-3 lg:row-span-3">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-dust">
              Education
            </h3>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.school} className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-bone/95 p-1.5 ring-1 ring-white/10">
                    <Image src={edu.logo} width={40} height={40} alt={edu.school} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-snug text-bone">{edu.degree}</p>
                    <p className="mt-0.5 text-xs text-dust">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
