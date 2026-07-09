'use client';
import { ReactLenis } from 'lenis/react';

import Nav from "@/components/Nav";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Nav />
      <ReactLenis root>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </ReactLenis>
    </>
  );
}
