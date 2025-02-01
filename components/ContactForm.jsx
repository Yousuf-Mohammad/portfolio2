'use client'

import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import {Festive} from "next/font/google"
import Link from 'next/link';
import Button from './Button';
import { EqualApproximatelyIcon, MapPinHouse, Phone, Send } from 'lucide-react';
export default function ContactForm() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_g2eftow', 'template_kfnk30q', formRef.current, '1PUeDFzI0rOqxVfSk')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div>
    <div className="isolate  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] md:px-6 md:py-24 md:h-screen rounded-2xl relative z-10 flex justify-center items-center">
      <div className=' bg-slate-800 md:p-12 p-5 md:w-1/3 w-full rounded-2xl  shadow-2xl shadow-gray-600'>
      
      {done ? 
      <h1 className='text-3xl font-semibold tracking-tight text-balance text-gray-200 text-center'>Thank you for contacting me</h1> : <form onSubmit={sendEmail} ref={formRef} className="mx-auto mt-4 max-w-lg sm:mt-4">
        <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-200 mb-5 font-[exo] underline underline-offset-4 sm:text-5xl">Contact Me</h2>
        
      </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-300">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-300">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-300">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-300">
              Phone number
            </label>
            <div className="mt-2.5 ">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
               
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-2 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-300">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={''}
              />
            </div>
          </div>
        
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>}
      </div>
    </div>
     <div className="sticky z-0 bottom-0 left-0 w-full h-80  bg-white flex justify-center items-center">
     <div className="relative overflow-hidden w-full h-full flex justify-end md:px-12 px-4 text-right items-start py-12 text-primaryRed">
       <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl ">
         <ul className='flex flex-col space-y-2'>
          <li className=""><span className='flex gap-2'> <MapPinHouse/>Dhaka, Bangladesh</span></li>
           <li className=""><span className='flex gap-2'> <Phone/> +880 1521331371</span></li>
           <li className=""><span className='flex gap-2 items-center'> <Send/> yousuf.mohammad8783@gmail.com</span></li>
           
          
         </ul>
         <ul className='flex flex-col space-y-2'>
           <li className="hover:underline cursor-pointer"><Link href="https://github.com/yousufmohammad" target="_blank" rel="noopener noreferrer">Github</Link></li>
           <li className="hover:underline cursor-pointer"><Link href="https://github.com/yousufmohammad" target="_blank" rel="noopener noreferrer">Linked In</Link></li>
           <li className="hover:underline cursor-pointer"><Link href="https://github.com/yousufmohammad" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
         
         </ul>
       </div>
     
       <h2 className="absolute bottom-20 left-10  translate-y-1/3 text-3xl  md:text-8xl font-bold text-slate-950 font-[rockybilly]">
         Yousuf Mohammad
       </h2>
      
     </div>
   </div>
     
   </div>
  )
}
