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
    <div className="absolute inset-0 -z-10  items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-[100vh]" >
          <Button classNames='mt-5'  linkString="/" target="_self" ButttonName={<ArrowLeft/>}/>
          <div className='grid grid-cols-3 grid-rows-6 gap-4 mx-auto p-28 h-[90vh]'> 
            <div className='col-span-1 row-span-5 flex flex-col justify-center items-center rounded-2xl'>
                
                <Image src={project.src} width="1000" height="1000" alt='me' className=' h-full object-cover object-top rounded-2xl'/>
            </div>
         
                <BentoCard className="col-span-2 row-span-2 bg-slate-900 ">
                  
                    <h1 className='text-4xl font-black font-[exo] text-center underline underline-offset-8 mb-5 flex items-center justify-center gap-4 '><FileJson2 className='h-10 w-10'/> Tech Stack</h1>
                    
                    {/* <p className='text-center text-2xl font-[montserrat] font-extrabold'>{project.stack}</p> */}
                    
                    <p className='flex justify-center items-center gap-4 mb-2'>
                      {project.stack.map((tech) => (
                        <Image src={tech} width="1000" height="1000" alt='React' className='h-12 w-fit bg-white rounded-lg p-2 shadow-xl shadow-gray-700'/> 
                      ))}
                      
                    </p>
                    
                    {project.github && <p className='text-center'>
                    <Button linkString={project.github} target="_blank" ButttonName={<span className='flex items-center justify-center gap-2 text-gray-700 font-bold font-[exo]'> <Github className='w-7 h-7'/>Github</span>}
                    classNames={""}/>
                    </p>}
                    
                </BentoCard>

            
            <BentoCard className='col-span-2 row-span-4 flex flex-col justify-center items-center bg-slate-900 '>
            <h1 className='text-4xl font-black font-[exo] text-center underline underline-offset-8 mb-5'>Description</h1>
            <p className='text-justify text-2xl font-[montserrat] font-extrabold'>{project.description}</p>
            
            </BentoCard>
            <BentoCard className='col-span-1 row-span-1 flex  justify-center items-center bg-slate-900 '>
           
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className='text-4xl '>  <h1 className='text-4xl font-black font-[exo] flex justify-center items-center gap-2'>{project.name} <ExternalLink className='w-10 h-10 '/> 
            </h1>
            </Link>
            
                    
            </BentoCard>
        </div>
    </div>
  )
}

export default projectPage