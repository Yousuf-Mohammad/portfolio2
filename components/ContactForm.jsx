'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Footer from './Footer';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const inputClass =
  "mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm focus:outline-indigo-600";

const fields = [
  { id: "first-name", label: "First name", type: "text", autoComplete: "given-name", colSpan: false },
  { id: "last-name", label: "Last name", type: "text", autoComplete: "family-name", colSpan: false },
  { id: "email", label: "Email", type: "email", autoComplete: "email", colSpan: true },
  { id: "phone-number", label: "Phone number", type: "tel", placeholder: "123-456-7890", colSpan: true },
];

const Field = ({ id, label, type, autoComplete, placeholder, colSpan }) => (
  <div className={colSpan ? "sm:col-span-2" : undefined}>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-300">{label}</label>
    <input
      id={id}
      name={id}
      type={type}
      required
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={inputClass}
    />
  </div>
);

export default function ContactForm() {
  const formRef = useRef();
  const mountTime = useRef(Date.now());
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'done' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();

    // Anti-spam: honeypot must stay empty and the form must not be submitted
    // within 3s of mount (bots fill and submit instantly).
    const form = formRef.current;
    if (form?.elements?.company?.value) return;
    if (Date.now() - mountTime.current < 3000) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      .then(() => setStatus('done'))
      .catch(() => setStatus('error'));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Background & Container */}
      <div className="isolate flex items-center justify-center px-4 py-16 min-h-screen md:px-6 lg:py-24 bg-gradient-to-b from-black to-indigo-900 relative z-10 rounded-3xl">
        <div className="bg-slate-800 w-full max-w-lg lg:max-w-2xl p-6 md:p-12 rounded-2xl shadow-lg shadow-gray-600 ">

          {/* Success Message */}
          {status === 'done' ? (
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-200 text-center">Thank you for contacting me!</h1>
          ) : (
            <form onSubmit={sendEmail} ref={formRef} className="mx-auto">

              {/* Heading */}
              <div className="text-center mb-6">
                <small className="text-gray-200 text-md font-bold">I&apos;d love to hear from you</small>
                <h2 className="text-3xl md:text-5xl font-black text-gray-200 uppercase">Contact Me</h2>
              </div>

              {/* Honeypot — hidden from real users, catches bots */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {/* Input Fields */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {fields.map((field) => (
                  <Field key={field.id} {...field} />
                ))}

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={inputClass}
                  />
                </div>
              </div>

              {status === 'error' && (
                <p className="mt-4 text-center text-sm font-semibold text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-lg font-semibold text-white shadow-md transition hover:bg-indigo-500 focus:outline-indigo-600 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : "Let's Talk"}
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
