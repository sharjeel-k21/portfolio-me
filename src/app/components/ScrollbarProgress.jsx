'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-white-500 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
    />
  );
}
