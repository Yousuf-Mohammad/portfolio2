"use client"
import React from 'react'
import { useTransform , motion} from 'framer-motion';
import Image from 'next/image'
import BentoCard from './BentoCard'

const About = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

    return (
    <motion.section className=' overflow-hidden z-[-2] md:h-screen md:w-screen bg-slate-900 bg-[radial-gradient(#ffffff_1px,#00091d_1px)] bg-[size:20px_20px]  sticky top-0 h-full w-full 
    ' style={{ scale, rotate }}>

            
    

        <div className='grid md:h-[100vh] h-full md:grid-cols-4 md:grid-rows-4 gap-4 container mx-auto md:p-24 p-2 grid-cols-1 grid-rows-24'> 
            
           <div className='md:col-span-1 md:row-span-2  flex flex-col justify-center items-center '>
             <div className='rounded-full md:w-80 md:h-80 h-56 w-56 bg-yellow-300 border-white-500 border-4 '>
                <Image src='/Me.png' width={1000} height={1000} alt='me' className='rounded-full'/>
             </div>
            </div>
           <BentoCard className='md:col-span-3 md:row-span-2 flex flex-col justify-center items-center bg-gray-800  row-span-3'>
                <p className='md:text-2xl text-md md:font-bold'>Hello, I'm Yousuf, a dedicated and passionate web developer committed to creating impactful and user-centric websites. I specialize in designing and developing websites that are not only visually appealing but also highly functional, ensuring an optimal user experience.

                </p><br />
                
                <p className='md:text-2xl text-md md:font-bold hidden md:block'>
                With a strong enthusiasm for web development, I continuously seek opportunities to expand my skill set and stay updated with the latest industry trends. My goal is to craft innovative digital solutions that effectively meet user needs and business objectives.
                </p>
            </BentoCard>
            <BentoCard className='md:col-span-2 md:row-span-2 flex flex-col justify-center items-center bg-gray-800'>
                <h1 className='md:text-4xl text-2xl font-bold text-center underline underline-offset-4 mb-5'>I have worked using </h1>
                <p className='grid grid-cols-8 gap-4'>
                <Image src='/techStack/html.png' width={1000} height={1000} alt='html' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/css.png' width={1000} height={1000} alt='css' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/Scss.png' width={1000} height={1000} alt='scss' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/Bootstrap.png' width={1000} height={1000} alt='bootstrap' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/Tailwind.png' width={1000} height={1000} alt='tailwind' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/GSAP.png' width={1000} height={1000} alt='GSAP' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/frameMotion.png' width={1000} height={1000} alt='frameMotion' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/shadcn-ui-seeklogo.png' width={1000} height={1000} alt='shadcn' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/JS.png' width={1000} height={1000} alt='JS' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
               
                <Image src='/techStack/reactJs.png' width={1000} height={1000} alt='react' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/nextJS.png' width={1000} height={1000} alt='next' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
             
                <Image src='/techStack/Redux.png' width={1000} height={1000} alt='Redux' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                
                <Image src='/techStack/nodeJS.png' width={1000} height={1000} alt='node' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/Express.png' width={1000} height={1000} alt='Express' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/Mongo.png' width={1000} height={1000} alt='mongo' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
               
                <Image src='/techStack/MYSQL.png' width={1000} height={1000} alt='mysql' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/firebase.png' width={1000} height={1000} alt='firebase' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
               
                <Image src='/techStack/PHP.png' width={1000} height={1000} alt='php' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                
                <Image src='/techStack/CSharp.png' width={1000} height={1000} alt='csharp' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/git.png' width={1000} height={1000} alt='csharp' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                <Image src='/techStack/github.png' width={1000} height={1000} alt='csharp' className='h-10 md:h-16 w-fit bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                
                </p>
            </BentoCard>
           <BentoCard className='md:col-span-1 md:row-span-2 flex flex-col justify-center items-start  bg-gray-800 '>
                <h1 className='text-2xl md:text-4xl font-bold font-[exo] underline underline-offset-2 mb-5 text-center'>Experience</h1>
                <div className='flex justify-center items-start gap-4 mb-10'>
                    <Image src='/aveenir.png' width={1000} height={1000} alt='Google' className='h-16 w-16 bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                     <p className='text-md font-bold  text-left'>Jr. Frontend Developer,<br /> Aveenir IT <br />
                     <span>(Sep2024 - present)</span></p>
                </div>
                <div className=' justify-center items-start gap-4 hidden md:flex'>
                    <Image src='/vast.jpg' width={1000} height={1000} alt='Google' className='h-16 w-16 bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                     <p className='text-md font-bold  text-left'>Web Developer <br />(contractual),<br /> VAST 
                     <span>(Oct2023 - Sep2024)</span></p>
                </div>
                
                
            </BentoCard>
            <BentoCard className='md:col-span-1 md:row-span-2 flex flex-col justify-center items-end bg-gray-800'>
            <h1 className='text-4xl font-bold font-[exo] underline underline-offset-2 mb-5 text-center'>Education</h1>
                <div className='flex justify-center items-start gap-4 mb-5'>
                    <Image src='/bracu.png' width={1000} height={1000} alt='Google' className='h-16 w-16 bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                     <p className='text-md font-bold  text-left'>BSc. in Electronics and Communication Engineering,<br /> BRAC University <br />
                     </p>
                </div>
                <div className='flex justify-center items-start gap-4 mb-5'>
                    <Image src='/dhakacollege.png' width={1000} height={1000} alt='Google' className='h-16 w-16 bg-white shadow-lg shadow-gray-700 rounded-lg p-2'/>
                     <p className='text-md font-bold  text-left'>Higher Secondary, Dhaka College
                     </p>
                </div>
            </BentoCard>
        </div>
        
    </motion.section>
  )
}

export default About