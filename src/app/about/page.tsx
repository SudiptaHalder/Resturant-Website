// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Header from '../../components/Header';

// export default function AboutPage() {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   const testimonials = [
//     {
//       text: "Holier completely redefined my expectations of sushi. Every roll was a perfect balance of freshness, flavor, and artistry. Ambiance was incredible, and service was top-notch!",
//       author: "Carl S.",
//       background: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
//     },
//     {
//       text: "From the sushi to the ramen, everything at Holier was perfection. The flavors were bold, authentic, and absolutely delicious. The atmosphere was warm and inviting—this place is a must-visit!",
//       author: "Sarah L.",
//       background: "https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
//     },
//     {
//       text: "Holier is more than just a restaurant—it's an experience. The sushi was melt-in-your-mouth good, and the Asian-inspired dishes were packed with unique and delicious flavors. Can't wait for my next visit!",
//       author: "Dina H.",
//       background: "https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="https://framerusercontent.com/images/3M8LkcXEy9BBjUGNjd0jxhQvYz0.png"
//             alt="Hero background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
//           {/* Title with Lines and Stars */}
//           <div className="flex items-center justify-center space-x-8 mb-8">
//             <div className="w-20 h-px bg-white/40"></div>
//             <div className="flex space-x-2">
//               {[1, 2, 3].map((star) => (
//                 <div key={star} className="text-amber-400 text-xl">★</div>
//               ))}
//             </div>
//             <div className="w-20 h-px bg-white/40"></div>
//           </div>

//           {/* Main Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-12 text-white"
//           >
//             A QUEST TO EXCELLENCE
//           </motion.h1>
//         </div>

//         {/* Fade Overlays */}
//         <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
//       </section>

//       {/* Intro Section */}
//       <section className="py-20 bg-black">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-light mb-8 text-white">
//               BOLD, UNIQUE, AND UNMATCHED CULINARY CRAFTSMANSHIP
//             </h2>
//             <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
//               At Piku's, sushi is more than just food—it's an expression of craftsmanship. Every roll is meticulously prepared with the finest ingredients, ensuring a perfect balance of flavor, texture, and presentation. Our chefs bring years of passion to the table, transforming simple ingredients into edible works of art.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Metrics Section */}
//       <section className="py-20 relative">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="https://framerusercontent.com/images/aghAysVM8yaAYyXtTwgcZfONws.png"
//             alt="Metrics background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         {/* Metrics Content */}
//         <div className="relative z-10 max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { number: "03", label: "MICHELIN STARS" },
//               { number: "16", label: "AWARDS" },
//               { number: "584", label: "CHEFS" },
//               { number: "24", label: "LOCATIONS" }
//             ].map((metric, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <h3 className="text-4xl md:text-5xl font-light text-white mb-2">{metric.number}</h3>
//                 <p className="text-gray-400 text-sm tracking-widest">{metric.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Sticky Section */}
//       <section className="py-20 bg-black">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
//                 PIKU'S ISN'T JUST ABOUT FOOD — IT'S A CULTURAL EXPERIENCE
//               </h2>
//               <p className="text-lg text-gray-400 leading-relaxed">
//                 Experience Asian cuisine at its finest. Whether you're a sushi lover, an adventurous foodie, or simply looking for a place to enjoy authentic flavors, Piku's is here to serve up something extraordinary.
//               </p>
//             </motion.div>

//             {/* Images Grid */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 gap-4"
//             >
//               <div className="space-y-4">
//                 <div className="aspect-square rounded-lg overflow-hidden">
//                   <img
//                     src="https://framerusercontent.com/images/uYvvHrIVAkWeuq3Z0DPSYXyPw.jpg"
//                     alt="Cuisine 1"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="aspect-square rounded-lg overflow-hidden">
//                   <img
//                     src="https://framerusercontent.com/images/iocZIpdm2DUGdolA5UX9HbNq0.jpg"
//                     alt="Cuisine 2"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="aspect-square rounded-lg overflow-hidden relative">
//                 <img
//                   src="https://framerusercontent.com/images/xZXsBhwDnyc3i6bL54pqYhjZCQ.jpg"
//                   alt="Cuisine 3"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-black">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="mb-12"
//           >
//             <div className="flex justify-center space-x-1 mb-4">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <div key={star} className="text-amber-400 text-xl">★</div>
//               ))}
//             </div>
//             <h2 
//               className="text-4xl md:text-5xl font-normal tracking-tight"
//               style={{ fontFamily: "'Forum', serif", color: 'rgb(255, 237, 216)' }}
//             >
//               WORDS OF LOVE
//             </h2>
//           </motion.div>

//           {/* Testimonial Carousel */}
//           <div className="relative h-96 rounded-2xl overflow-hidden">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: activeTestimonial === index ? 1 : 0 }}
//                 transition={{ duration: 1 }}
//                 className="absolute inset-0"
//               >
//                 <img
//                   src={testimonial.background}
//                   alt={`Testimonial ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
//                 {/* Testimonial Text */}
//                 <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center max-w-2xl px-6">
//                   <h3 className="text-2xl md:text-3xl font-light text-white mb-4 leading-relaxed">
//                     {testimonial.text}
//                   </h3>
//                   <p className="text-gray-400 text-lg">{testimonial.author}</p>
//                 </div>
//               </motion.div>
//             ))}
            
//             {/* Indicators */}
//             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveTestimonial(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     activeTestimonial === index ? 'bg-amber-400' : 'bg-white/50'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Reserve Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 
//               className="text-4xl md:text-5xl font-normal tracking-tight mb-8"
//               style={{ fontFamily: "'Malarkeey', sans-serif", color: 'rgb(255, 237, 216)' }}
//             >
//               RESERVE YOUR TABLE
//             </h2>
//           </motion.div>

//           {/* Reserve form would go here - same as your menu page */}
//           <div className="text-center">
//             <p className="text-gray-400 text-lg">
//               Reserve by phone, dial{' '}
//               <a href="tel:+12125551212" className="text-amber-400 hover:text-amber-300 transition-colors">
//                 +1 (212) 555-1212
//               </a>{' '}
//               (or) send an email to{' '}
//               <a href="mailto:reserve@pikus.com" className="text-amber-400 hover:text-amber-300 transition-colors">
//                 reserve@pikus.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-gray-800 py-12 bg-black">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <div 
//             className="text-5xl font-normal tracking-widest opacity-60 mb-6"
//             style={{ fontFamily: "'Malarkeey', sans-serif", color: 'rgb(255, 237, 216)' }}
//           >
//             PIKU'S
//           </div>
//           <p className="text-gray-500 text-base">
//             Exceptional Asian Cuisine • Crafted with Passion
//           </p>
//         </div>
//       </footer>

//       <style jsx global>{`
//         @import url('https://fonts.cdnfonts.com/css/malarkeey');
//         @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
//         body {
//           background: #000;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Holier completely redefined my expectations of sushi. Every roll was a perfect balance of freshness, flavor, and artistry. Ambiance was incredible, and service was top-notch!",
      author: "Carl S.",
      background: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
    },
    {
      text: "From the sushi to the ramen, everything at Holier was perfection. The flavors were bold, authentic, and absolutely delicious. The atmosphere was warm and inviting—this place is a must-visit!",
      author: "Sarah L.",
      background: "https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
    },
    {
      text: "Holier is more than just a restaurant—it's an experience. The sushi was melt-in-your-mouth good, and the Asian-inspired dishes were packed with unique and delicious flavors. Can't wait for my next visit!",
      author: "Dina H.",
      background: "https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
    <section className="min-h-screen relative flex items-end justify-center overflow-hidden pt-20">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://framerusercontent.com/images/3M8LkcXEy9BBjUGNjd0jxhQvYz0.png"
      alt="Hero background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content - Positioned at bottom center */}
  <div className="relative z-20 text-center w-full pb-32">
    {/* Title with Lines and Icons */}
    <div className="flex items-center justify-center space-x-8 mb-8">
      <div className="w-20 h-px bg-white/40"></div>
      <div className="flex space-x-3">
        <div className="text-amber-400 text-lg">◆</div>
        <div className="text-amber-400 text-lg">◇</div>
        <div className="text-amber-400 text-lg">◆</div>
      </div>
      <div className="w-20 h-px bg-white/40"></div>
    </div>

    {/* Main Heading - Large font size at bottom center with line break */}
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-tight mb-12 text-white leading-none"
      style={{ 
        fontFamily: "'Forum', serif",
        color: 'rgb(255, 237, 216)'
      }}
    >
      A QUEST TO<br />EXCELLENCE
    </motion.h1>
  </div>

  {/* Fade Overlays */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
</section>

      {/* Intro Section */}
     <section className="py-20 bg-black">
  <div className="max-w-4xl mx-auto px-5 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col gap-16 text-left w-full max-w-2xl mx-auto mb-20"
    >
      {/* Heading with different font */}
      <h2 
        className="text-3xl md:text-4xl font-normal leading-tight tracking-wide whitespace-pre-line"
        style={{ fontFamily: "'Forum', serif", color: 'rgb(255, 237, 216)' }}
      >
        {`BOLD, UNIQUE, AND\nUNMATCHED CULINARY\nCRAFTSMANSHIP`}
      </h2>
      
      {/* Paragraph with different font */}
      <p 
        className="text-lg leading-relaxed tracking-normal whitespace-pre-line"
        style={{ 
          fontFamily: "'Inter', sans-serif",
          color: 'rgb(115, 116, 125)',
        }}
      >
        {`At Holier, sushi is more than just food—it's an\nexpression of craftsmanship. Every roll is \nmeticulously prepared with the finest\n ingredients, ensuring a perfect balance of \nflavor, texture, and presentation. Our chefs \nbring years of passion to the table, \ntransforming simple ingredients into edible \nworks of art.`}
      </p>
    </motion.div>
  </div>
</section>

      {/* Metrics Section */}
     <section className="relative">
  {/* Background Image Container with fixed height */}
  <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
    <img
      src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
      alt="Restaurant ambiance"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  {/* Metrics Content positioned below the image */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 -mt-20 md:-mt-24">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-black/90 backdrop-blur-sm p-8 rounded-lg">
      {[
        { number: "03", label: "MICHELIN STARS" },
        { number: "16", label: "AWARDS" },
        { number: "584", label: "CHEFS" },
        { number: "24", label: "LOCATIONS" }
      ].map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center"
        >
          {/* Number */}
          <h3 
            className="text-4xl md:text-5xl font-light mb-2"
            style={{ color: 'rgb(255, 237, 216)' }}
          >
            {metric.number}
          </h3>
          
          {/* Label */}
          <p 
            className="text-sm tracking-widest uppercase"
            style={{ color: 'rgb(255, 237, 216)' }}
          >
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Sticky Section */}
     <section className="relative min-h-screen bg-black flex items-center mt-20">
  <div className="max-w-7xl mx-auto w-full">
    <div className="flex flex-col lg:flex-row gap-10 px-10 py-20">
      
      {/* Text Content - Fixed on left */}
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="sticky top-32"
        >
          {/* Main Heading with line breaks */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight tracking-wide whitespace-pre-line"
            style={{ 
              color: 'rgb(255, 237, 216)',
              fontFamily: "'Forum', serif"
            }}
          >
            {`HOLIER ISN'T JUST ABOUT\nFOOD — IT'S A CULTURAL\nEXPERIENCE`}
          </h2>
          
          {/* Description with different font */}
          <p 
            className="text-lg md:text-xl leading-relaxed mt-12"
            style={{ 
              color: 'rgb(115, 116, 125)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '300'
            }}
          >
            Experience Asian cuisine at its finest. Whether you're a sushi lover, an adventurous foodie, or simply looking for a place to enjoy authentic flavors, Holier is here to serve up something extraordinary.
          </p>
        </motion.div>
      </div>

      {/* Images Container - Scrollable on right */}
      <div className="lg:w-1/2">
        <div className="space-y-4 h-[300vh]">
          {/* First Image - Larger size */}
          <div className="sticky top-32 h-screen flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-20%" }}
              className="w-full h-[95vh] rounded-2xl overflow-hidden"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                objectPosition: 'center center',
                objectFit: 'cover',
                boxSizing: 'border-box',
                WebkitFontSmoothing: 'inherit'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  inset: '0px'
                }}
              >
                <img
                  src="https://framerusercontent.com/images/uYvvHrIVAkWeuq3Z0DPSYXyPw.jpg"
                  alt="Cuisine presentation"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center center',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Second Image - Larger size */}
          <div className="sticky top-32 h-screen flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-20%" }}
              className="w-full h-[95vh] rounded-2xl overflow-hidden"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                objectPosition: 'center center',
                objectFit: 'cover',
                boxSizing: 'border-box',
                WebkitFontSmoothing: 'inherit'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  inset: '0px'
                }}
              >
                <img
                  src="https://framerusercontent.com/images/iocZIpdm2DUGdolA5UX9HbNq0.jpg"
                  alt="Cuisine details"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center center',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Third Image - Larger size */}
          <div className="sticky top-32 h-screen flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-20%" }}
              className="w-full h-[95vh] rounded-2xl overflow-hidden relative"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                objectPosition: 'center center',
                objectFit: 'cover',
                boxSizing: 'border-box',
                WebkitFontSmoothing: 'inherit'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  inset: '0px'
                }}
              >
                <img
                  src="https://framerusercontent.com/images/xZXsBhwDnyc3i6bL54pqYhjZCQ.jpg"
                  alt="Restaurant ambiance"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center center',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  inset: '0px'
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
    <section className="py-20 bg-black">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
      style={{
        placeContent: 'center flex-start',
        alignItems: 'center',
        display: 'flex',
        flex: '0 0 auto',
        flexFlow: 'column',
        gap: '40px',
        height: 'min-content',
        overflow: 'visible',
        padding: '80px 0px 0px',
        position: 'relative',
        width: '100%'
      }}
    >
      {/* Stars */}
      <div className="flex justify-center space-x-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="text-amber-400 text-xl">★</div>
        ))}
      </div>

      {/* WORDS OF LOVE Heading */}
      <div
        style={{
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          flexShrink: 0,
          transform: 'none'
        }}
      >
        <p 
          className="text-5xl md:text-6xl font-normal tracking-tight"
          style={{ 
            fontFamily: "'Forum', serif",
            color: 'rgb(255, 237, 216)',
            fontSize: '64px',
            letterSpacing: '-0.03em',
            lineHeight: '68px',
            textAlign: 'center'
          }}
        >
          WORDS OF LOVE
        </p>
      </div>
    </motion.div>

    {/* Testimonial Carousel */}
    <div className="relative h-[500px] rounded-2xl overflow-hidden">
      {[
        {
          text: "Holier completely redefined my expectations of sushi. Every roll was a perfect balance of freshness, flavor, and artistry. Ambiance was incredible, and service was top-notch!",
          author: "Carl S.",
          background: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
        },
        {
          text: "From the sushi to the ramen, everything at Holier was perfection. The flavors were bold, authentic, and absolutely delicious. The atmosphere was warm and inviting—this place is a must-visit!",
          author: "Sarah L.",
          background: "https://images.pexels.com/photos/2098133/pexels-photo-2098133.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
        },
        {
          text: "Holier is more than just a restaurant—it's an experience. The sushi was melt-in-your-mouth good, and the Asian-inspired dishes were packed with unique and delicious flavors. Can't wait for my next visit!",
          author: "Dina H.",
          background: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
        }
      ].map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeTestimonial === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Cover Style */}
          <div className="absolute inset-0">
            <img
              src={testimonial.background}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-full object-cover"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                objectPosition: 'center center',
                objectFit: 'cover'
              }}
            />
          </div>
          
          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Fade Gradient at Bottom */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(12, 10, 16, 0.8) 100%)'
            }}
          ></div>
          
          {/* Testimonial Text - Centered at Bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center w-full max-w-4xl px-6">
            {/* Testimonial Quote */}
            <div className="mb-4">
              <h3 
                className="text-lg md:text-xl font-light text-white leading-relaxed"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: 'rgb(255, 237, 216)',
                  fontWeight: '300'
                }}
              >
                {testimonial.text}
              </h3>
            </div>
            
            {/* Author - Small Font */}
            <div>
              <p 
                className="text-sm md:text-base tracking-wide"
                style={{
                  color: 'rgb(255, 237, 216)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: '400',
                  opacity: '0.9'
                }}
              >
                {testimonial.author}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Carousel Indicators - Small Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[1, 2, 3].map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              activeTestimonial === index ? 'bg-amber-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Reserve Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl md:text-5xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Malarkeey', sans-serif", color: 'rgb(255, 237, 216)' }}
            >
              RESERVE YOUR TABLE
            </h2>
          </motion.div>

          {/* Reserve form would go here - same as your menu page */}
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Reserve by phone, dial{' '}
              <a href="tel:+12125551212" className="text-amber-400 hover:text-amber-300 transition-colors">
                +1 (212) 555-1212
              </a>{' '}
              (or) send an email to{' '}
              <a href="mailto:reserve@pikus.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                reserve@pikus.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div 
            className="text-5xl font-normal tracking-widest opacity-60 mb-6"
            style={{ fontFamily: "'Malarkeey', sans-serif", color: 'rgb(255, 237, 216)' }}
          >
            PIKU'S
          </div>
          <p className="text-gray-500 text-base">
            Exceptional Asian Cuisine • Crafted with Passion
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/malarkeey');
        @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
        body {
          background: #000;
        }
      `}</style>
    </div>
  );
}