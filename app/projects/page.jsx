"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import data from "@/public/projects/data.json";
import { prettyTech } from "@/lib/tech";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI" },
  { value: "fullstack", label: "Full-Stack" },
  { value: "frontend", label: "Frontend" },
  { value: "mobile", label: "Mobile" },
];

const WorkPage = () => {
  const [active, setActive] = useState("all");

  const projects = useMemo(
    () =>
      active === "all"
        ? data
        : data.filter((p) => p.category === active),
    [active]
  );

  return (
    <div className="relative min-h-screen bg-atelier">
      <Nav />

      <div className="mx-auto max-w-7xl px-4 pb-28 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        {/* Back + header */}
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-2 rounded-full border border-line bg-bone/5 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-bone backdrop-blur-sm transition-colors duration-300 hover:border-bone/30"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back home
        </Link>

        <div className="mb-10">
          <div className="mb-4 flex items-center gap-4">
            <span className="kicker text-dust">Archive</span>
          </div>
          <h1 className="font-display display-tight text-5xl font-semibold text-bone sm:text-6xl md:text-7xl">
            Some Selected <span className="italic text-acid">Works</span>
          </h1>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = active === f.value;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setActive(f.value)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "border-acid bg-acid text-ink"
                    : "border-line text-dust hover:border-bone/30 hover:text-bone"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-coal/40 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-bone/25"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-line">
                <Image
                  src={project.card || project.src}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-2xl font-medium tracking-tight text-bone transition-colors duration-300 group-hover:text-acid">
                    {project.name}
                  </h2>
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-bone transition-all duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                {project.stack?.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-dust"
                      >
                        {prettyTech(tech)}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-dust">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="mt-16 text-center font-mono text-sm text-dust">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default WorkPage;
