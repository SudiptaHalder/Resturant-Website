// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent'
//       }`}
//     >
//       <div className="w-full px-2 py-2">
//         <div className="flex items-center justify-between">
//           {/* Logo - Far Left - Minimal Margin */}
//           <motion.div 
//             style={{ 
//               fontFamily: "'Malarkeey', sans-serif",
//               fontSize: '1rem',
//               fontWeight: 'normal',
//               color: isScrolled ? 'rgb(44, 42, 39)' : 'rgb(255, 237, 216)',
//               marginLeft: '0.5rem'
//             }}
//           >
//             Piku
//           </motion.div>

//           {/* Menu - Far Right - Minimal Margin */}
//           <nav className="flex items-center space-x-4" style={{ marginRight: '0.5rem' }}>
//             {['Menu', 'About', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 style={{ 
//                   fontFamily: 'sans-serif',
//                   fontSize: '0.7rem',
//                   color: isScrolled ? 'rgb(115, 116, 125)' : 'rgb(255, 237, 216)',
//                   fontWeight: '300',
//                   letterSpacing: '0.1em'
//                 }}
//                 className="uppercase hover:underline underline-offset-2 transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </motion.header>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-2 py-2">
        <div className="flex items-center justify-between">
          {/* Logo - Far Left - Minimal Margin */}
          <motion.div 
            style={{ 
              fontFamily: "'Malarkeey', sans-serif",
              fontSize: '1rem',
              fontWeight: 'normal',
              color: isScrolled ? 'rgb(44, 42, 39)' : 'rgb(255, 237, 216)',
              marginLeft: '0.5rem'
            }}
          >
            <Link href="/" className="hover:opacity-80 transition-opacity">
              Piku
            </Link>
          </motion.div>

          {/* Menu - Far Right - Minimal Margin */}
          <nav className="flex items-center space-x-4" style={{ marginRight: '0.5rem' }}>
            {[
              { name: 'Menu', path: '/menu' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' } // ← Changed path
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                style={{ 
                  fontFamily: 'sans-serif',
                  fontSize: '0.7rem',
                  color: isScrolled ? 'rgb(115, 116, 125)' : 'rgb(255, 237, 216)',
                  fontWeight: '300',
                  letterSpacing: '0.1em'
                }}
                className="uppercase hover:underline underline-offset-2 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}