"use client";
import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#18122B]/95 to-[#393053]/80 backdrop-blur-md shadow-lg z-50 transition-colors duration-500">
    <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tight text-purple-400 font-display">MyPortfolio</div>
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li><a href="#about" className="hover:text-purple-400 text-gray-100 transition-colors duration-300">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400 text-gray-100 transition-colors duration-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400 text-gray-100 transition-colors duration-300">Contact</a></li>
      </ul>
      <button className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-600 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300" aria-label="Open Menu">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
    </div>
  </nav>
);

export default Navbar;