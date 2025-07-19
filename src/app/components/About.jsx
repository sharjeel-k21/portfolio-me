"use client";
import React from "react";

const About = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#18122B] to-[#393053] py-20 px-4 transition-colors duration-500">
    <img
      src="/portfolio-me.jpg"
      alt="Profile"
      className="w-32 h-32 rounded-full shadow-xl mb-6 border-4 border-purple-400 object-cover transition-shadow duration-500"
    />
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 font-display">Sharjeel Khan</h1>
    <p className="max-w-xl text-justify text-lg md:text-xl text-gray-300 mb-6 transition-colors duration-500">
      I am a passionate web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
    </p>
    <div className="skills pt-10">
      <div className="flex flex-wrap gap-4">
        <img src="/icons8-react-48.png" alt="React" className="w-15 h-15" />
        <img src="/icons8-node-js-48.png" alt="Next.js" className="w-15 h-15" />
        <img src="/icons8-tailwindcss-48.png" alt="Tailwind" className="w-15 h-15" />
        <img src="/icons8-postgresql-48.png" alt="PostgreSQL" className="w-15 h-15" />
        <img src="/icons8-django-50.png" alt="MongoDB" className="w-15 h-15" />
      </div>
    </div>
    <div className="flex space-x-4 pt-10">
      <a href="#projects" className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors duration-300">View Projects</a>
      <a href="#contact" className="px-6 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-950 hover:text-white transition-colors duration-300">Contact Me</a>
    </div>
  </section>
);

export default About;
