"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/public/projects/data.json";
import { ArrowLeft, ExternalLink, FileJson2, Github } from "lucide-react";

// Lazy Load Components for Faster Performance
const BentoCard = dynamic(() => import("@/components/BentoCard"), { ssr: false });
const Button = dynamic(() => import("@/components/Button"), { ssr: false });

const ProjectPage = () => {
  const { id } = useParams();
  const projectId = Number(id);

  // Efficiently find project based on ID
  const project = useMemo(() => data.find((p) => p.id === projectId), [projectId]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-start min-h-screen px-5 py-8 bg-gradient-to-b from-black to-indigo-900">
      
      {/* Back Button */}
      <Button classNames="mb-5 p-4" linkString="/" target="_self" ButttonName={<ArrowLeft />} />

      {/* Bento Grid Layout */}
      <div className="grid w-full max-w-6xl mx-auto gap-6 grid-cols-1 sm:grid-cols-4 sm:grid-rows-6">
        
        {/* Project Image (Large Image in a Bento Box) */}
        {project.src && (
          <BentoCard className="sm:col-span-2 sm:row-span-4 flex justify-center items-center p-0 overflow-hidden">
            <Image
              src={project.src}
              width={1000}
              height={600}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </BentoCard>
        )}

        {/* Tech Stack Card */}
        <BentoCard className="sm:col-span-2 sm:row-span-2 flex flex-col items-center justify-center bg-slate-900">
          <h1 className="text-lg sm:text-2xl font-black justify-center uppercase mb-3 flex items-center gap-1">
            <FileJson2 className="w-6 h-6 sm:w-8 sm:h-8 uppercase" /> Tech Stack
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {project.stack?.map((tech, index) => (
              <Image
                key={index}
                src={tech}
                width={64}
                height={64}
                alt="Tech"
                className="h-12 w-12 sm:h-16 sm:w-16 bg-white rounded-lg p-2 shadow-xl shadow-gray-700"
                loading="lazy"
              />
            ))}
          </div>
          {project.github && (
            <Button
              linkString={project.github}
              target="_blank"
              ButttonName={
                <span className="flex items-center gap-2 text-gray-800 py-2 font-bold ">
                  <Github className="w-5 h-5" />
                  Repository
                </span>
              }
              classNames="w-full mt-4"
            />
          )}
        </BentoCard>

        {/* Project Description */}
        <BentoCard className="sm:col-span-2 sm:row-span-3 flex flex-col items-center justify-center bg-slate-900">
          <h1 className="text-lg sm:text-2xl font-black text-center uppercase mb-4">
            Description
          </h1>
          <p className="text-justify text-sm sm:text-lg font-bold .text-stroke">{project.description}</p>
        </BentoCard>

        {/* Project Link */}
        <BentoCard className="sm:col-span-2 sm:row-span-1 flex justify-center items-center bg-slate-900">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <h1 className="text-lg sm:text-2xl font-bold flex items-center gap-2">
              {project.name} <ExternalLink className="w-6 h-6" />
            </h1>
          </Link>
        </BentoCard>
      </div>
    </div>
  );
};

export default ProjectPage;
