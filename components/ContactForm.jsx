'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Footer from './Footer';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const inputClass =
  "mt-2 block w-full rounded-lg border border-line bg-ash/60 px-4 py-3 text-base text-bone placeholder:text-dust/50 outline-none transition-colors duration-300 focus:border-acid/60 focus:bg-ash";

const labelClass = "font-mono text-xs uppercase tracking-widest text-dust";

const fields = [
  { id: "first-name", label: "First name", type: "text", autoComplete: "given-name", colSpan: false },
  { id: "last-name", label: "Last name", type: "text", autoComplete: "family-name", colSpan: false },
  { id: "email", label: "Email", type: "email", autoComplete: "email", colSpan: true },
  { id: "phone-number", label: "Phone number", type: "tel", placeholder: "123-456-7890", colSpan: true },
];

const Field = ({ id, label, type, autoComplete, placeholder, colSpan }) => (
  <div className={colSpan ? "sm:col-span-2" : undefined}>
    <label htmlFor={id} className={labelClass}>{label}</label>
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
    <div id="contact" className="relative z-30 flex flex-col">
      <div className="flex min-h-screen items-center justify-center rounded-t-[2.5rem] border-t border-line bg-atelier px-4 py-20 md:px-6 lg:py-28">
        <div className="w-full max-w-2xl">
          <div className="mb-10 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="font-mono text-sm text-acid">04</span>
              <span className="kicker text-dust">Get in touch</span>
            </div>
            <h2 className="font-display display-tight text-5xl font-semibold text-bone sm:text-6xl md:text-7xl">
              Let&apos;s <span className="italic text-acid">talk</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-dust">
              Have a product to build, a role to fill, or an idea worth shipping? Tell me
              about it — I usually reply within a day.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-coal/80 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm md:p-10">
            {status === 'done' ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-acid text-2xl text-ink">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-medium text-bone md:text-3xl">
                  Thank you for reaching out!
                </h3>
                <p className="mt-2 text-sm text-dust">I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={sendEmail} ref={formRef}>
                {/* Honeypot — hidden from real users, catches bots */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <Field key={field.id} {...field} />
                  ))}

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>Message</label>
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
                  <p className="mt-4 text-center font-mono text-xs text-red-400">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-acid px-6 py-4 font-mono text-sm font-medium uppercase tracking-wider text-ink transition-all duration-300 hover:scale-[1.01] disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : (
                    <>
                      Send message
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
