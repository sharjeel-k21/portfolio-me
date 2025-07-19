"use client";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    
    <AnimatePresence mode="wait">
      <main className="flex flex-col gap-24 pt-24">
        <motion.div
          key="about"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <About />
        </motion.div>
        <motion.div
          key="projects"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
        >
          <Projects />
        </motion.div>
        <motion.div
          key="contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
        >
          <Contact />
        </motion.div>
      </main>
    </AnimatePresence>
  );
}
