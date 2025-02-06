import React from "react";
import { MapPinHouse, Phone, Send } from "lucide-react";
import Link from "next/link";

const Footer = React.memo(() => {
  return (
    <footer className="sticky bottom-0 left-0 w-full h-80 bg-white flex justify-around items-center">
      <div className="relative overflow-hidden w-full h-full flex lg:flex-row justify-between items-stretch lg:items-center flex-col-reverse gap-5 px-6 md:px-12 py-8">
          {/* Name Branding */}
          <div className="">
        <h2 className=" text-[7vw] xl:text-6xl md:text-4xl font-bold text-sky-950 rockybilly">
          Yousuf Mohammad
        </h2>
        </div>
        {/* Contact & Social Links Section */}
        <div className="flex lg:flex-row flex-col gap-4  text-md xl:text-xl lg:w-[40%] justify-between  ">
        <ul className="">
            <SocialLink href="https://github.com/yousuf-mohammad" text="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/yousuf-mohammad-a9a131223/" text="LinkedIn" />
            <SocialLink href="https://www.facebook.com/yousuf313/" text="Facebook" />
          </ul>

          <ul className="">
            <ContactInfo icon={<MapPinHouse />} text="Dhaka, Bangladesh" />
            <ContactInfo icon={<Phone />} text="+880 1521331371" />
            <ContactInfo icon={<Send />} text="yousuf.mohammad8783@gmail.com" />
          </ul>

        </div>

      
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
