// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';

// export default function ExquisiteFlavors() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"]
//   });

//   // Same animation as Experience and Menu sections
//   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
//   const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative h-screen flex items-center justify-center overflow-hidden bg-black sticky top-0"
//     >
//       {/* Background Image */}
//       <motion.div 
//         style={{ opacity, scale }}
//         className="absolute inset-0 w-full h-full"
//       >
//         <img
//           src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
//           alt="Exquisite flavors presentation"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50"></div>
//       </motion.div>

//       {/* Content */}
//       <motion.div 
//         style={{ opacity, y }}
//         className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
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
//           EXQUISITE FLAVORS
//         </motion.h2>

//         <motion.p
//           style={{
//             fontFamily: 'sans-serif',
//             fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
//             color: 'rgb(255, 237, 216)',
//             fontWeight: '300',
//             lineHeight: '1.6',
//             maxWidth: '600px',
//             margin: '0 auto 3rem auto'
//           }}
//         >
//           Holier is more than just food—it's a celebration of culinary passion, crafted from an inspiring journey.
//         </motion.p>

//         {/* Learn More Button */}
//         <motion.button
//           style={{
//             fontFamily: 'sans-serif',
//             fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
//             color: 'rgb(255, 237, 216)',
//             fontWeight: '400',
//             border: '2px solid rgb(255, 237, 216)',
//             background: 'transparent',
//             padding: '1rem 2.5rem',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease'
//           }}
//           whileHover={{
//             backgroundColor: 'rgb(255, 237, 216)',
//             color: 'rgb(0, 0, 0)'
//           }}
//           className="rounded-sm"
//         >
//           LEARN MORE
//         </motion.button>
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
import { useRouter } from 'next/navigation';

export default function ExquisiteFlavors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Same animation as Experience and Menu sections
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -100]);

  // Function to handle click and navigate to about page
  const handleClick = () => {
    router.push('/about'); // Adjust the path according to your routing structure
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black sticky top-0 cursor-pointer"
      onClick={handleClick}
    >
      {/* Background Image */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
          alt="Exquisite flavors presentation"
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
          EXQUISITE FLAVORS
        </motion.h2>

        <motion.p
          style={{
            fontFamily: 'sans-serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: 'rgb(255, 237, 216)',
            fontWeight: '300',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}
        >
          Holier is more than just food—it's a celebration of culinary passion, crafted from an inspiring journey.
        </motion.p>

        {/* Learn More Button */}
        <motion.button
          style={{
            fontFamily: 'sans-serif',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgb(255, 237, 216)',
            fontWeight: '400',
            border: '2px solid rgb(255, 237, 216)',
            background: 'transparent',
            padding: '1rem 2.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          whileHover={{
            backgroundColor: 'rgb(255, 237, 216)',
            color: 'rgb(0, 0, 0)'
          }}
          className="rounded-sm"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the section click from triggering when button is clicked
            handleClick();
          }}
        >
          LEARN MORE
        </motion.button>
      </motion.div>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/malarkeey');
      `}</style>
    </section>
  );
}