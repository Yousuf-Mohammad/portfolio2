"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/public/projects/data.json";
import { ArrowLeft, ExternalLink, FileJson2, Github } from "lucide-react";

// Lazy Load Components for Faster Initial Load
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
    <div className="md:absolute relative inset-0 -z-10 flex flex-col h-full items-start px-5  bg-gradient-to-b from-black to-indigo-900 md:h-screen">
      {/* Back Button */}
      <Button classNames="mt-5 p-4" linkString="/" target="_self" ButttonName={<ArrowLeft />} />

      {/* Project Grid */}
      <div className="grid md:grid-cols-7 md:grid-rows-6 grid-cols-1 grid-rows-4 gap-4 mx-auto md:p-28 md:h-[90vh] w-full">
        {/* Project Image (Visible on Desktop) */}
        {project.src && (
          <div className="col-span-2 row-span-3 md:row-span-5 flex justify-center items-center rounded-2xl hidden md:block">
            <Image
              src={project.src}
              width={1000}
              height={1000}
              alt={project.name}
              className="h-full object-cover object-top rounded-2xl"
              priority
            />
          </div>
        )}

        {/* Tech Stack Card */}
        <BentoCard className="md:col-span-5 md:row-span-3 col-span-1 row-span-1 bg-slate-900 mt-5 md:mt-0 flex flex-col items-center justify-center">
          <h1 className="md:text-3xl text-2xl font-black text-center mb-3 flex items-center justify-center gap-4">
            <FileJson2 className="md:h-10 md:w-10 h-4 w-4" /> Tech Stack
          </h1>
          <div className=" grid grid-cols-5 md:flex md:justify-center md:items-center md:gap-4 gap-2 mb-2">
            {project.stack?.map((tech, index) => (
              <Image
                key={index}
                src={tech}
                width={64}
                height={64}
                alt="Tech"
                className="md:h-16 h-12 w-12 md:w-auto bg-white rounded-lg p-2 shadow-xl shadow-gray-700"
                loading="lazy"
              />
            ))}
          </div>
          {project.github && (
            <Button
              linkString={project.github}
              target="_blank"
              ButttonName={
                <span className="flex items-center gap-2 text-gray-700 py-2 font-bold">
                  <Github className="w-5 h-5" />
                  Repository
                </span>
              }
              classNames="w-full mx-auto"
            />
          )}
        </BentoCard>

        {/* Description Card */}
        <BentoCard className="md:col-span-5 md:row-span-4 col-span-1 row-span-2 bg-slate-900 flex flex-col items-center">
          <h1 className="md:text-4xl text-2xl font-black text-center underline underline-offset-8 mb-5">
            Description
          </h1>
          <p className="text-justify md:text-2xl text-md font-bold">{project.description}</p>
        </BentoCard>

        {/* Project Link Card */}
        <BentoCard className="md:col-span-2 md:row-span-1 col-span-1 row-span-1 flex justify-center items-center bg-slate-900">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <h1 className="md:text-4xl text-2xl font-bold flex justify-center items-center gap-2">
              {project.name} <ExternalLink className="md:w-10 md:h-10 h-5 w-5" />
            </h1>
          </Link>
        </BentoCard>
      </div>
    </div>
  );
};

export default ProjectPage;
