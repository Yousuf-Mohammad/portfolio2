"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import data from "@/public/projects/data.json";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { prettyTech } from "@/lib/tech";

const ease = [0.16, 1, 0.3, 1];
const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.07 * i, ease },
  }),
};

const hostnameOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

const ProjectPage = () => {
  const { id } = useParams();
  const projectId = Number(id);

  const index = useMemo(
    () => data.findIndex((p) => p.id === projectId),
    [projectId]
  );
  const project = index >= 0 ? data[index] : null;

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-atelier px-6 text-center text-bone">
        <span className="font-mono text-[6rem] leading-none text-acid/20 sm:text-[10rem]">
          404
        </span>
        <p className="font-display text-3xl">Project not found</p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3 font-mono text-sm font-medium uppercase tracking-wider text-ink transition-transform duration-300 hover:scale-[1.03]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back home
        </Link>
      </div>
    );
  }

  const nextProject = data[(index + 1) % data.length];
  const prevProject = data[(index - 1 + data.length) % data.length];
  const host = hostnameOf(project.link);
  const total = String(data.length).padStart(2, "0");
  const current = String(index + 1).padStart(2, "0");

  // Split the description into a lead sentence + body.
  const sentences = project.description.trim().match(/[^.!?]+[.!?]+/g) || [
    project.description.trim(),
  ];
  const lede = sentences[0]?.trim();
  const body = sentences.slice(1).join(" ").trim();

  return (
    <div className="relative min-h-screen overflow-hidden bg-atelier">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[95] h-[3px] origin-left bg-acid"
      />

      {/* Giant index watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 top-24 select-none font-display text-[34vw] font-semibold leading-none text-bone/[0.03] sm:top-16 sm:text-[26rem]"
      >
        {current}
      </span>

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        {/* Top bar */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-12 flex items-center justify-between"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-bone/5 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-bone backdrop-blur-sm transition-colors duration-300 hover:border-bone/30"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-dust">
            Case Study · {current} / {total}
          </span>
        </motion.div>

        {/* Title block */}
        <header className="mb-10">
          <motion.span
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={1}
            className="kicker mb-5 inline-flex items-center gap-2 text-acid"
          >
            <span className="h-px w-8 bg-acid/50" />
            Project
          </motion.span>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display display-tight text-5xl font-semibold text-bone sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {project.name}
          </motion.h1>

          {/* Meta strip */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-dust"
          >
            {host && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-bone transition-colors hover:text-acid"
              >
                {host}
              </a>
            )}
            <span className="text-dust/40">/</span>
            <span>
              {project.stack?.length || 0} {project.stack?.length === 1 ? "technology" : "technologies"}
            </span>
            <span className="text-dust/40">/</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-acid" /> Live
            </span>
          </motion.div>
        </header>

        {/* Feature image in a browser frame */}
        {project.src && (
          <motion.a
            variants={reveal}
            initial="hidden"
            animate="show"
            custom={4}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mb-16 block overflow-hidden rounded-2xl border border-line bg-coal shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)]"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-line bg-ash/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 hidden flex-1 items-center justify-center gap-2 rounded-md bg-ink/60 px-3 py-1 sm:flex">
                <span className="font-mono text-[11px] text-dust">{host || project.link}</span>
              </div>
              <span className="ml-auto hidden items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-dust transition-colors group-hover:text-acid sm:flex">
                Open <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
            {/* Screenshot */}
            <div className="aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
              <Image
                src={project.src}
                width={1400}
                height={800}
                alt={`${project.name} screenshot`}
                priority
                className="h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
              />
            </div>
          </motion.a>
        )}

        {/* Body: overview + sticky details */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Overview */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="lg:col-span-7"
          >
            <h2 className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-dust">
              <span className="text-acid">01</span> Overview
              <span className="h-px flex-1 bg-line" />
            </h2>
            <p className="font-display text-2xl leading-snug text-bone sm:text-3xl">
              {lede}
            </p>
            {body && (
              <p className="mt-6 text-base leading-relaxed text-dust sm:text-lg sm:leading-relaxed">
                {body}
              </p>
            )}
          </motion.div>

          {/* Sticky details */}
          <motion.aside
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            className="lg:col-span-5"
          >
            <div className="space-y-8 rounded-2xl border border-line bg-coal/60 p-6 backdrop-blur-sm sm:p-8 lg:sticky lg:top-12">
              {/* Stack */}
              {project.stack?.length > 0 && (
                <div>
                  <h3 className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-dust">
                    <span className="text-acid">02</span> Built with
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => {
                      const label = prettyTech(tech);
                      return (
                        <div
                          key={i}
                          className="group/chip flex items-center gap-2 rounded-full border border-line bg-bone/[0.03] py-1.5 pl-1.5 pr-3.5 transition-colors duration-300 hover:border-acid/40 hover:bg-bone/[0.06]"
                        >
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bone/95 p-1">
                            <Image
                              src={tech}
                              width={28}
                              height={28}
                              alt={label}
                              className="h-full w-full object-contain"
                              loading="lazy"
                            />
                          </span>
                          <span className="font-mono text-xs text-bone">{label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="space-y-3 border-t border-line pt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-2 rounded-full bg-acid px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-ink transition-transform duration-300 hover:scale-[1.02]"
                >
                  Live site
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-between gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-sm uppercase tracking-wider text-bone transition-colors duration-300 hover:border-bone/40 hover:bg-bone/5"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> Repository
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Prev / Next navigation */}
        <motion.nav
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-24 grid grid-cols-1 gap-3 border-t border-line pt-10 sm:grid-cols-2"
        >
          <Link
            href={`/project/${prevProject.id}`}
            className="group flex items-center gap-4 rounded-2xl border border-line p-5 transition-colors duration-300 hover:border-bone/30 hover:bg-bone/[0.03]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-bone transition-all duration-300 group-hover:-translate-x-1 group-hover:border-acid group-hover:bg-acid group-hover:text-ink">
              <ArrowLeft className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-widest text-dust">
                Previous
              </span>
              <p className="truncate font-display text-xl font-medium text-bone transition-colors group-hover:text-acid sm:text-2xl">
                {prevProject.name}
              </p>
            </div>
          </Link>

          <Link
            href={`/project/${nextProject.id}`}
            className="group flex items-center justify-end gap-4 rounded-2xl border border-line p-5 text-right transition-colors duration-300 hover:border-bone/30 hover:bg-bone/[0.03]"
          >
            <div className="min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-widest text-dust">
                Next
              </span>
              <p className="truncate font-display text-xl font-medium text-bone transition-colors group-hover:text-acid sm:text-2xl">
                {nextProject.name}
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-bone transition-all duration-300 group-hover:translate-x-1 group-hover:border-acid group-hover:bg-acid group-hover:text-ink">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </motion.nav>
      </div>
    </div>
  );
};

export default ProjectPage;
