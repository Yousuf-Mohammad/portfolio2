"use client"

import { useParams } from 'next/navigation'
import BentoCard from '@/components/BentoCard'
import Button from '@/components/Button'
import { ArrowBigLeft, ArrowLeft, ExternalLink, FileJson2, Github, GithubIcon, LucideGithub } from 'lucide-react'
import data from "@/public/projects/data.json"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const projectPage = () => {
  const { id } = useParams()
  const project = data[id-1]
  console.log(project);
  return (
    <div className="absolute inset-0 -z-10  items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-screen" >
          <Button classNames='mt-5'  linkString="/" target="_self" ButttonName={<ArrowLeft/>}/>
          <div className='grid  md:grid-cols-3 md:grid-rows-6 grid-cols-1 grid-rows-4 gap-4 mx-auto md:p-28 md:h-[90vh] '> 
            <div className='col-span-1 row-span-2 md:row-span-5 flex flex-col justify-center items-center rounded-2xl hidden md:block'>
                
                <Image src={project.src} width="1000" height="1000" alt='me' className=' h-full object-cover object-top rounded-2xl'/>
            </div>
         
                <BentoCard className="md:col-span-2 md:row-span-2 col-span-1 row-span-1 bg-slate-900 mt-5 md:mt-0 ">
                  
                    <h1 className='md:text-3xl text-2xl font-black font-[exo] text-center  mb-3 flex items-center justify-center gap-4 '><FileJson2 className='md:h-10 md:w-10 h-4 w-4'/> Tech Stack</h1>
                    
                    {/* <p className='text-center text-2xl font-[montserrat] font-extrabold'>{project.stack}</p> */}
                    
                    <p className='flex justify-center items-center gap-4 mb-2'>
                      {project.stack.map((tech,index) => (
                        <Image key={index} src={tech} width="1000" height="1000" alt='React' className='h-12 w-fit bg-white rounded-lg p-2 shadow-xl shadow-gray-700'/> 
                      ))}
                      
                    </p>
                    
                    {project.github && <p className='text-center'>
                    <Button linkString={project.github} target="_blank" ButttonName={<span className='flex items-center justify-center gap-2 text-gray-700 py-2 font-bold font-[exo]'> <Github className='w-5 h-5'/>Repository</span>}
                    classNames={""}/>
                    </p>}
                    
                </BentoCard>

            
            <BentoCard className='md:col-span-2 md:row-span-4 col-span-1 row-span-2 flex flex-col justify-center items-center bg-slate-900 '>
            <h1 className='md:text-4xl text-2xl font-black font-[exo] text-center underline underline-offset-8 mb-5'>Description</h1>
            <p className='text-justify md:text-2xl text-md font-[montserrat] font-bold'>{project.description}</p>
            
            </BentoCard>
            <BentoCard className='md:col-span-1 md:row-span-1  col-span-1 row-span-1 flex  justify-center items-center bg-slate-900 '>
           
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className='md:text-4xl text-2xl '>  <h1 className='md:text-4xl text-2xl font-bold font-[exo] flex justify-center items-center gap-2'>{project.name} <ExternalLink className='md:w-10 md:h-10 h-5 w-5 '/> 
            </h1>
            </Link>
            
                    
            </BentoCard>
        </div>
    </div>
  )
}

export default projectPage