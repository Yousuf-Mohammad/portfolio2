"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { useMediaQuery } from "../hooks/use-media-query";
import Typewriter from "./fancy/typewriter";
import Floating, { FloatingElement } from "./fancy/parallax-floating";
import Button from "./Button";

const MotionImage = motion.create(Image);

const floatingImages = [
  { src: "/HeroSection/travel.jpeg", width: 192, height: 96, depth: 0.5, pos: "top-[10%] left-[12%]" },
  { src: "/HeroSection/amraNagorik.jpeg", width: 192, height: 208, depth: 1, pos: "top-[4%] left-[32%]" },
  { src: "/HeroSection/limit.png", width: 240, height: 208, depth: 2, pos: "top-[10%] left-[58%]" },
  { src: "/HeroSection/Tazkiah.jpeg", width: 192, height: 128, depth: 1, pos: "top-[15%] left-[75%]" },
  { src: "/HeroSection/IPhone.jpeg", width: 208, height: 256, depth: 1, pos: "top-[60%] left-[20%]" },
  { src: "/HeroSection/premier.jpeg", width: 144, height: 192, depth: 2, pos: "top-[33%] left-[10%]" },
  { src: "/HeroSection/regokus.jpeg", width: 240, height: 360, depth: 4, pos: "top-[45%] right-[1%]" },
  { src: "/HeroSection/travel.jpeg", width: 288, height: 384, depth: 4, pos: "top-[80%] left-[48%]" },
  { src: "/HeroSection/zentry.jpeg", width: 208, height: 288, depth: 1, pos: "top-[65%] left-[64%]" },
];

const Hero = () => {
  // The floating layer is only visible on large screens. Mounting it
  // conditionally avoids the per-frame rAF loop + global mouse/touch
  // listeners on phones and tablets, where it would never be seen.
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="sticky top-0">
      <motion.section className="flex w-full h-screen justify-center items-center overflow-hidden select-none [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] relative sm:w-full">
        <motion.div
          className="z-50 text-center space-y-4 items-center flex flex-col mix-blend-difference"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <h1 className="text-5xl md:text-[6vw] font-black z-50 mix-blend-difference text-gray-300 font-['exo']">
            Yousuf Mohammad
          </h1>
          <Typewriter
            text={[
              "Fullstack Developer",
              "Tech Enthusiast",
              "Frontend Specialist",
            ]}
            speed={80}
            className="text-gray-400 text-3xl font-bold"
            waitTime={1000}
            deleteSpeed={40}
            cursorChar={"|"}
          />

          <Button
            linkString="/Yousuf_Mohammad_FullStack_Developer.pdf"
            target="_blank"
            buttonName={
              <span className="flex items-center justify-center font-bold font-[exo]">
                Resume
              </span>
            }
            classNames="text-xl font-bold z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-3 w-40 cursor-pointer"
          />
        </motion.div>

        {isDesktop && (
          <Floating
            sensitivity={-1}
            className="absolute h-full w-full">
            {floatingImages.map(({ src, width, height, depth, pos }, index) => (
              <FloatingElement key={index} depth={depth} className={pos}>
                <MotionImage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  src={src}
                  alt="Project preview"
                  width={width}
                  height={height}
                  className="object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                  priority={index < 2}
                />
              </FloatingElement>
            ))}
          </Floating>
        )}
      </motion.section>
    </section>
  );
};

export default Hero;
