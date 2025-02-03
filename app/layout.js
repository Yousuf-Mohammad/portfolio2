import { Geist, Geist_Mono, Exo, Montserrat} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const myFont = localFont({
  src: '../public/Rockybilly.ttf', // Adjust the path if needed
  
  variable: '--font-myfont' // Optional for CSS variables
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
        className={`${geistSans.variable} ${geistMono.variable} ${exo.variable} ${montserrat.variable} ${myFont.variable}  antialiased overflow-x-hidden overflow-y-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
