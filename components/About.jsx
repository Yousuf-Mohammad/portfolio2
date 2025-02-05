"use client"
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BentoCard from "./BentoCard";

const techStack = [
  "html", "css", "Scss", "Bootstrap", "Tailwind", "GSAP", "frameMotion",
  "shadcn-ui-seeklogo", "JS", "react", "next", "Redux", "nodeJS",
  "Express", "Mongo", "MYSQL", "firebase", "PHP", "CSharp", "git", "github"
];

const experiences = [
  {
    company: "Avenir IT",
    role: "Jr. Frontend Developer",
    duration: "Sep 2024 - Present",
    logo: "/aveenir.png",
  },
  {
    company: "VAST",
    role: "Web Developer (Contractual)",
    duration: "Oct 2023 - Sep 2024",
    logo: "/vast.jpg",
  }
];

const education = [
  {
    school: "BRAC University",
    degree: "BSc. in Electronics and Communication Engineering",
    logo: "/bracu.png",
  },
  {
    school: "Dhaka College",
    degree: "Higher Secondary",
    logo: "/dhakacollege.png",
  }
];

const About = () => {
  const techStackImages = useMemo(() => (
    techStack.map((tech) => (
      <Image 
        key={tech} 
        src={`/techStack/${tech}.png`} 
        width={64} height={64} 
        alt={tech} 
        className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto bg-white shadow-lg rounded-lg p-1 md:p-2" 
        loading="lazy"
      />
    ))
  ), []);

  return (
    <motion.section
      className="w-full min-h-screen bg-slate-900 bg-[radial-gradient(#ffffff_1px,#00091d_1px)] bg-[size:20px_20px] lg:rounded-3xl px-4 sm:px-6 lg:px-8 py-8  md:sticky relative md:top-0 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-10 lg:grid-rows-6 gap-4 max-w-7xl mx-auto">
        
        {/* Profile Image */}
        <div className="lg:col-span-3 lg:row-span-3 row-span-1 flex justify-center items-center">
          <div className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-yellow-300 border-2 sm:border-4 border-white overflow-hidden">
            <Image 
              src="/Me.png" 
              width={320} 
              height={320} 
              alt="Me" 
              className="w-full h-full object-cover"
              priority 
            />
          </div>
        </div>

        {/* About Me */}
        <BentoCard className="lg:col-span-7 lg:row-span-3 row-span-2 bg-gray-800 p-4 md:p-6">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed text-stroke">
            Hello, I'm Yousuf, a dedicated and passionate web developer committed to creating impactful and user-centric websites. 
            I specialize in designing and developing websites that are not only visually appealing but also highly functional, 
            ensuring an optimal user experience.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed mt-2 md:mt-4 text-stroke">
            With a strong enthusiasm for web development, I continuously seek opportunities to expand my skill set and stay updated 
            with the latest industry trends. My goal is to craft innovative digital solutions that effectively meet user needs and 
            business objectives.
          </p>
        </BentoCard>

        {/* Tech Stack */}
        <BentoCard className="lg:col-span-4 lg:row-span-3 row-span-2 bg-gray-800 p-4 md:p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center uppercase mb-4 text-stroke ">I have worked using</h1>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 md:gap-3">
            {techStackImages}
          </div>
        </BentoCard>

        {/* Experience */}
        <BentoCard className="lg:col-span-3 lg:row-span-3 row-span-2 bg-gray-800 p-4 md:p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase  text-center mb-4 text-stroke">Experience</h1>
          {experiences.map((exp) => (
            <div key={exp.company} className="flex items-start gap-3 mb-4">
              <Image 
                src={exp.logo} 
                width={48} 
                height={48} 
                alt={exp.company} 
                className="h-12 w-12 sm:h-14 sm:w-14 bg-white shadow-lg rounded-lg p-1"
              />
              <div>
                <p className="text-sm sm:text-base md:text-lg font-semibold">{exp.role}</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-300">{exp.company}</p>
                <p className="text-xs sm:text-sm text-gray-400">({exp.duration})</p>
              </div>
            </div>
          ))}
        </BentoCard>

        {/* Education */}
        <BentoCard className="lg:col-span-3 lg:row-span-3 row-span-2 bg-gray-800 p-4 md:p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center mb-4 text-stroke">Education</h1>
          {education.map((edu) => (
            <div key={edu.school} className="flex items-start gap-3 mb-4">
              <Image 
                src={edu.logo} 
                width={48} 
                height={48} 
                alt={edu.school} 
                className="h-12 w-12 sm:h-14 sm:w-14 bg-white shadow-lg rounded-lg p-1"
              />
              <div>
                <p className="text-sm sm:text-base md:text-lg font-semibold">{edu.degree}</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-300">{edu.school}</p>
              </div>
            </div>
          ))}
        </BentoCard>

      </div>
    </motion.section>
  );
  
};

export default About;
