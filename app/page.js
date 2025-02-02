'use client';
import { ReactLenis } from 'lenis/react';
import { useRef } from 'react';

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';


export default function Home() {

  return (
   
      <ReactLenis root="root"   >
      <Hero />
      <About />
      <Projects/>
      <ContactForm/>
      </ReactLenis>
  
   
  );
}
