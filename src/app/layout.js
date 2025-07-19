import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter, Poppins } from "next/font/google";
import ScrollProgress from "./components/ScrollbarProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sharjeel Khan",
  description: "Sharjeel Khan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`bg-[#18122B] text-gray-100 ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} antialiased transition-colors duration-500 font-sans`}
      >
        <ScrollProgress />
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
