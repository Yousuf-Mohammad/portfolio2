"use client"
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BentoCard from "./BentoCard";

const techStack = [
  "html", "css", "Scss", "Bootstrap", "Tailwind", "GSAP", "frameMotion",
  "shadcn-ui-seeklogo", "JS", "reactJs", "nextJS", "Redux", "nodeJS",
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
        className="h-10 md:h-16 w-auto bg-white shadow-lg rounded-lg p-2" 
        loading="lazy"
      />
    ))
  ), []);

  return (
    <motion.section
      className="md:overflow-hidden overflow-y-scroll md:h-screen h-full w-screen bg-slate-900 bg-[radial-gradient(#ffffff_1px,#00091d_1px)] bg-[size:20px_20px] md:sticky relative md:top-0 rounded-2xl"
    >
      <div className="grid md:h-screen md:grid-cols-10 md:grid-rows-6 gap-5 container mx-auto md:p-24 p-2 grid-cols-1 grid-rows-24  ">
        
        {/* Profile Image */}
        <div className="md:col-span-3 md:row-span-3 flex flex-col justify-center items-center">
          <div className="rounded-full md:w-80 md:h-80 h-56 w-56 bg-yellow-300 border-white border-4 overflow-hidden">
            <Image src="/Me.png" width={320} height={320} alt="Me" className="rounded-full" priority />
          </div>
        </div>

        {/* About Me */}
        <BentoCard className="md:col-span-7 md:row-span-3 flex flex-col justify-center items-center bg-gray-800 row-span-3">
          <p className="md:text-2xl text-md font-semibold">
          Hello, I'm Yousuf, a dedicated and passionate web developer committed to creating impactful and user-centric websites. I specialize in designing and developing websites that are not only visually appealing but also highly functional, ensuring an optimal user experience.

          </p>
          <p className="md:text-2xl text-md font-semibold hidden md:block mt-4">
          With a strong enthusiasm for web development, I continuously seek opportunities to expand my skill set and stay updated with the latest industry trends. My goal is to craft innovative digital solutions that effectively meet user needs and business objectives.
          </p>
        </BentoCard>

        {/* Tech Stack */}
        <BentoCard className="md:col-span-4 md:row-span-3 flex flex-col justify-center items-center bg-gray-800">
          <h1 className="md:text-3xl text-2xl font-bold text-center underline underline-offset-4 mb-5">I have worked using</h1>
          <div className="grid grid-cols-7 gap-4 ">{techStackImages}</div>
        </BentoCard>

        {/* Experience */}
        <BentoCard className="md:col-span-3 md:row-span-3 flex flex-col justify-center items-start bg-gray-800">
          <h1 className="text-2xl md:text-4xl font-bold underline underline-offset-2 mb-5 text-center">Experience</h1>
          {experiences.map((exp) => (
            <div key={exp.company} className="flex justify-start items-start gap-4 mb-5">
              <Image src={exp.logo} width={64} height={64} alt={exp.company} className="h-16 w-16 bg-white shadow-lg rounded-lg p-2" loading="lazy" />
              <p className="text-xl font-bold">{exp.role}<br />{exp.company}<br /><span>({exp.duration})</span></p>
            </div>
          ))}
        </BentoCard>

        {/* Education */}
        <BentoCard className="md:col-span-3 md:row-span-3 flex flex-col justify-center items-end bg-gray-800">
          <h1 className="text-2xl md:text-4xl font-bold underline underline-offset-2 mb-5 text-center">Education</h1>
          {education.map((edu) => (
            <div key={edu.school} className="flex justify-start items-start gap-4 mb-5">
              <Image src={edu.logo} width={64} height={64} alt={edu.school} className="h-16 w-16 bg-white shadow-lg rounded-lg p-2" loading="lazy" />
              <p className="text-xl font-bold text-left">{edu.degree}<br />{edu.school}</p>
            </div>
          ))}
        </BentoCard>

      </div>
    </motion.section>
  );
};

export default About;
