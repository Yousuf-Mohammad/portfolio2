'use client'

import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import Footer from './Footer';

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
    <div className="flex flex-col min-h-screen">
      {/* Background & Container */}
      <div className="isolate flex items-center justify-center px-4 py-16 min-h-screen md:px-6 lg:py-24 bg-gradient-to-b from-black to-indigo-900 relative z-10 rounded-3xl">
        <div className="bg-slate-800 w-full max-w-lg lg:max-w-2xl p-6 md:p-12 rounded-2xl shadow-lg shadow-gray-600 ">
          
          {/* Success Message */}
          {done ? (
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-200 text-center">Thank you for contacting me!</h1>
          ) : (
            <form onSubmit={sendEmail} ref={formRef} className="mx-auto">
              
              {/* Heading */}
              <div className="text-center mb-6">
                <small className="text-gray-200 text-md font-bold">I&apos;d love to hear from you</small>
                <h2 className="text-3xl md:text-5xl font-black text-gray-200 uppercase">Contact Me</h2>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-300">First name</label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm focus:outline-indigo-600"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-gray-300">Last name</label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm focus:outline-indigo-600"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm focus:outline-indigo-600"
                  />
                </div>

                {/* Phone Number */}
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-300">Phone number</label>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    required
                    placeholder="123-456-7890"
                    className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm focus:outline-indigo-600"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-lg font-semibold text-white shadow-md transition hover:bg-indigo-500 focus:outline-indigo-600"
                >
                  Let's Talk
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
