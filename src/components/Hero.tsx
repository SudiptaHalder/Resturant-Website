'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black sticky top-0"
    >
      {/* Background Image */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
          alt="Beautiful Asian cuisine presentation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 text-center text-white"
      >
        <motion.h1 
          style={{
            fontFamily: "'Malarkeey', sans-serif",
            fontSize: 'clamp(8rem, 25vw, 20rem)',
            fontWeight: 'normal',
            color: 'rgb(255, 237, 216)',
            lineHeight: '0.8',
            letterSpacing: '-0.02em'
          }}
        >
          Piku's
        </motion.h1>
        
        <motion.span
          style={{
            fontFamily: "'Malarkeey', sans-serif",
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            fontWeight: 'normal',
            color: 'rgb(255, 237, 216)',
            letterSpacing: '0.3em',
            lineHeight: '1.5'
          }}
          className="block mt-4"
        >
          ASIAN CUISINE MASTERY WITH A TWIST
        </motion.span>
      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/malarkeey');
      `}</style>
    </section>
  );
}