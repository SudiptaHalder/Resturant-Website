// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';

// export default function Experience() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-screen flex items-center justify-center bg-black py-20"
//     >
//       {/* Content */}
//       <motion.div 
//         style={{ opacity, y, scale }}
//         className="text-center text-white max-w-4xl mx-auto px-6"
//       >
//         <motion.h2
//           style={{
//             fontFamily: "'Malarkeey', sans-serif",
//             fontSize: 'clamp(3rem, 8vw, 6rem)',
//             fontWeight: 'normal',
//             color: 'rgb(255, 237, 216)',
//             lineHeight: '1.1',
//             marginBottom: '2rem'
//           }}
//         >
//           A UNIQUE EXPERIENCE
//         </motion.h2>

//         <motion.p
//           style={{
//             fontFamily: 'sans-serif',
//             fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
//             color: 'rgb(255, 237, 216)',
//             fontWeight: '300',
//             lineHeight: '1.6',
//             maxWidth: '600px',
//             margin: '0 auto'
//           }}
//         >
//           Redefining the way you experience sushi, bringing creativity and bold flavors to every bite.
//         </motion.p>
//       </motion.div>

//       <style jsx global>{`
//         @import url('https://fonts.cdnfonts.com/css/malarkeey');
//       `}</style>
//     </section>
//   );
// }
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"] // Changed to "end end" so it stays at the end
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]); // Changed last value to 1 so it stays visible
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]); // Only animates to 0, then stops
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-black"
      style={{ position: 'sticky', top: 0 }} // Make it sticky but only within its container
    >
      {/* Content */}
      <motion.div 
        style={{ opacity, y, scale }}
        className="text-center text-white max-w-4xl mx-auto px-6"
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
          A UNIQUE EXPERIENCE
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
          Redefining the way you experience sushi, bringing creativity and bold flavors to every bite.
        </motion.p>
      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/malarkeey');
      `}</style>
    </section>
  );
}