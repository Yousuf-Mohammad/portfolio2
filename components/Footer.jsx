import React from "react";
import { MapPinHouse, Phone, Send } from "lucide-react";
import Link from "next/link";

const Footer = React.memo(() => {
  return (
    <footer className="sticky bottom-0 left-0 w-full h-80 bg-white flex justify-center items-center">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-6 md:px-12 py-12 text-right text-primaryRed">
        {/* Contact & Social Links Section */}
        <div className="flex flex-row space-x-8 md:space-x-24 text-sm sm:text-lg md:text-xl">
          <ul className="space-y-2">
            <ContactInfo icon={<MapPinHouse />} text="Dhaka, Bangladesh" />
            <ContactInfo icon={<Phone />} text="+880 1521331371" />
            <ContactInfo icon={<Send />} text="yousuf.mohammad8783@gmail.com" />
          </ul>
          <ul className="space-y-2">
            <SocialLink href="https://github.com/yousufmohammad" text="GitHub" />
            <SocialLink href="https://linkedin.com/in/yousufmohammad" text="LinkedIn" />
            <SocialLink href="https://facebook.com/yousufmohammad" text="Facebook" />
          </ul>
        </div>

        {/* Name Branding */}
        <h2 className="absolute bottom-20 left-10 text-3xl md:text-8xl font-bold text-slate-950 font-[rockybilly]">
          Yousuf Mohammad
        </h2>
      </div>
    </footer>
  );
});

// Reusable Contact Info Component
const ContactInfo = ({ icon, text }) => (
  <li className="flex gap-2 items-center">{icon} {text}</li>
);

// Reusable Social Link Component
const SocialLink = ({ href, text }) => (
  <li>
    <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
      {text}
    </Link>
  </li>
);

export default Footer;
