'use client';
import { ReactLenis } from 'lenis/react';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';


export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', '60% 60%'],
  });
  return (
    <div  ref={container} >
      <Hero scrollYProgress={scrollYProgress}/>
      <ReactLenis root="root"   >
      <About scrollYProgress={scrollYProgress} />
      <Projects/>
      <ContactForm/>
      </ReactLenis>
  
    </div>
  );
}
