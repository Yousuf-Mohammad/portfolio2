import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  { href: "https://github.com/yousuf-mohammad", text: "GitHub" },
  { href: "https://www.linkedin.com/in/yousuf-mohammad-a9a131223/", text: "LinkedIn" },
  { href: "https://www.facebook.com/yousuf313/", text: "Facebook" },
];

const contacts = [
  { icon: <MapPin className="h-4 w-4 text-acid" />, text: "Dhaka, Bangladesh" },
  { icon: <Phone className="h-4 w-4 text-acid" />, text: "+880 1521331371" },
  { icon: <Mail className="h-4 w-4 text-acid" />, text: "yousuf.mohammad8783@gmail.com" },
];

const Footer = React.memo(() => {
  return (
    <footer className="relative z-30 border-t border-line bg-ink px-6 pb-10 pt-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="font-display display-tight text-5xl font-semibold text-bone md:text-6xl">
              Let&apos;s create
              <br />
              <span className="italic text-acid">together.</span>
            </h2>
            <p className="mt-5 text-sm text-dust">
              Open to freelance, full-time roles, and interesting collaborations.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-dust/70">
                Social
              </h3>
              <ul className="space-y-2.5">
                {socials.map((s) => (
                  <li key={s.text}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-base text-bone transition-colors hover:text-acid"
                    >
                      {s.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-dust/70">
                Contact
              </h3>
              <ul className="space-y-2.5">
                {contacts.map((c) => (
                  <li key={c.text} className="flex items-center gap-2.5 text-sm text-dust">
                    {c.icon}
                    {c.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="font-mono text-xs text-dust/60">
            © {new Date().getFullYear()} Yousuf Mohammad
          </p>
          <p className="font-mono text-xs text-dust/60">
            Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export default Footer;
