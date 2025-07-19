"use client";
import React from "react";

const Contact = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-[#18122B] to-[#393053] py-20 px-4 transition-colors duration-500">
    <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-8 font-display">Contact</h2>
    <form className="w-full max-w-md bg-[#23213a] rounded-xl shadow-lg p-8 flex flex-col gap-4 border border-purple-900/40 transition-colors duration-500">
      <input
        type="text"
        placeholder="Your Name"
        className="border border-purple-700 bg-[#18122B] text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition-all duration-300"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border border-purple-700 bg-[#18122B] text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition-all duration-300"
        required
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        className="border border-purple-700 bg-[#18122B] text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400 transition-all duration-300"
        required
      />
      <button
        type="submit"
        className="bg-purple-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-purple-700 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
    <div className="flex space-x-6 mt-8">
      <a href="https://www.linkedin.com/in/sharjeel-khan-88a5ab230/" target="_blank" rel="noopener noreferrer">
        <img src="/icons8-linkedin-48.png" alt="LinkedIn" className="h-13 w-13 text-purple-400 hover:underline hover:text-purple-300 transition-colors duration-300" />
      </a>
      <a href="https://github.com/sharjeel-k21" target="_blank" rel="noopener noreferrer">
        <img src="/icons8-github-logo-64.png" alt="GitHub" className="h-13 w-13 text-purple-400 hover:underline hover:text-purple-300 transition-colors duration-300" />
      </a>
    </div>
  </section>
);

export default Contact;
