'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Menu() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);

  const handleClick = () => {
    router.push('/menu');
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black sticky top-0 cursor-pointer"
      onClick={handleClick}
    >
      {/* Background Image for Menu */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
          alt="Sushi menu presentation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Menu Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 text-center text-white"
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
          OUR MENU
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
          Discover our exquisite selection of Asian delicacies crafted with passion and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-gray-300"
        >
          Click anywhere to view full menu →
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/malarkeey');
      `}</style>
    </section>
  );
}