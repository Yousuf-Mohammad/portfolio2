"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#skills" },
  { label: "Work", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-bone"
        >
          Yousuf<span className="text-acid">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="kicker text-dust transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="/Yousuf_Mohammad_FullStack_Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-acid/40 bg-acid/5 px-4 py-2 font-mono text-xs uppercase tracking-widest text-acid transition-all duration-300 hover:bg-acid hover:text-ink"
        >
          Résumé
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
