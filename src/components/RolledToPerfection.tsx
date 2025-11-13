'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function RolledToPerfection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Same animation as previous sections
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black sticky top-0"
    >
      {/* Full Cover Background Image */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
          alt="Caviar and sushi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
      >
        <motion.h2
          style={{
            fontFamily: "'Malarkeey', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'normal',
            color: 'rgb(255, 237, 216)',
            lineHeight: '1.1',
            marginBottom: '2rem'
          }}
        >
          ROLLED TO PERFECTION
        </motion.h2>

        <motion.p
          style={{
            fontFamily: 'sans-serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: 'rgb(255, 237, 216)',
            fontWeight: '300',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          From the delicate slicing of fresh fish to the careful rolling of each piece, precision is at the heart of our craft.
        </motion.p>
      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/malarkeey');
      `}</style>
    </section>
  );
}