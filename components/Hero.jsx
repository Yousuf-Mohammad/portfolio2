"use client"

import { useEffect } from "react"
import { stagger, useAnimate } from "motion/react"
import {motion, useTransform} from "framer-motion"
import Typewriter from "./fancy/typewriter"
import Floating, {
  FloatingElement,
} from "./fancy/parallax-floating.jsx"
import Link from "next/link"
import Button from "./Button"


const Hero = ({ scrollYProgress }) => {
  
  const [scope, animate] = useAnimate()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
   
    <motion.section
      className="flex w-full h-[100vh] justify-center items-center overflow-x-hidden select-none [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] z-10 relative"
      ref={scope}
      style={{ scale, rotate }}
      
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col mix-blend-difference "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <h1 className="text-5xl md:text-[6vw] font-black z-50 mix-blend-difference text-gray-300  font-['exo'] ">
          Yousuf Mohammad
        </h1>
        <Typewriter
          text={[
          
            "Fullstack Developer",
            "Tech enthusiast",
            "Frontend specialist",
           
          ]}
          speed={80}
          className="text-gray-400 text-3xl font-bold"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"|"}
        />
      
        <Button linkString="/resumeYousuf.pdf" target="_blank" ButttonName={<span className="flex items-center justify-center font-bold font-[exo]">Resume</span>} classNames="text-xl font-bold z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-3 w-40 cursor-pointer"/>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden h-screen w-screen">
        <FloatingElement depth={0.5} className="top-[10%] left-[12%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/travel.jpeg"}
            className="w-16 h-16 md:w-48 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[4%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/amraNagorik.jpeg"}
            className="w-20 h-20 md:w-48 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[10%] left-[58%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/limit.png"}
            className="w-28 h-40 md:w-60 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[15%] left-[75%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/Tazkiah.jpeg"}
            className="w-24 h-24 md:w-48  md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[60%] left-[20%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/IPhone.jpeg"}
            className="w-28 h-28 md:w-52 md:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[33%] left-[17%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/premier.jpeg"}
            className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[45%] right-[-9%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/regokus.jpeg"}
            className="w-40 md:w-60 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={4} className="top-[80%] left-[48%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/travel.jpeg"}
            className="w-40 md:w-72 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[65%] left-[64%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={"/HeroSection/zentry.jpeg"}
            className="w-24 h-24 md:w-52 md:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
       
      </Floating>
    </motion.section>
    
  )
}

export default Hero
