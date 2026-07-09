import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ConstructionBadge from "@/components/ConstructionBadge";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const myFont = localFont({
  src: "../public/Rockybilly.ttf",
  variable: "--font-myfont",
  display: "swap",
});

export const metadata = {
  title: "Yousuf Mohammad — Fullstack Developer",
  description:
    "Portfolio of Yousuf Mohammad — a fullstack developer crafting fast, distinctive, user-centric web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${myFont.variable} font-sans bg-ink text-bone antialiased overflow-x-hidden overflow-y-scroll selection:bg-acid selection:text-ink`}
      >
        {children}
        <ConstructionBadge />
      </body>
    </html>
  );
}
