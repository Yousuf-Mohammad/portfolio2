import { Geist, Geist_Mono, Exo, Montserrat} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});







export const metadata = {
  title: "Yousuf Mohammad",
  description: "Yousuf Mohammad's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}   antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
