
'use client';

import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image - Luxury Dessert */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/302478/pexels-photo-302478.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=2"
            alt="Luxury dessert background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          {/* Title with Lines */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="w-20 h-px bg-white/40"></div>
            <div className="text-white text-lg">CONTACT US</div>
            <div className="w-20 h-px bg-white/40"></div>
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-12 text-white"
            style={{ fontFamily: "'Forum', serif" }}
          >
            WE'RE AT YOUR SERVICE
          </motion.h1>
        </div>

        {/* Fade Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Forum', serif", color: 'rgb(255, 237, 216)' }}
            >
              GET IN TOUCH
            </h2>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition-colors duration-300"
              style={{ backgroundColor: 'rgb(241, 194, 135)' }}
            >
              SEND MESSAGE
            </button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">RESERVATIONS</h3>
              <p className="text-gray-400">+1 (212) 555-1212</p>
              <p className="text-gray-400 text-sm mt-1">reserve@pikus.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">GENERAL INQUIRIES</h3>
              <p className="text-gray-400">hello@pikus.com</p>
              <p className="text-gray-400 text-sm mt-1">Mon-Sun: 9AM-11PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">LOCATIONS</h3>
              <p className="text-gray-400">24 Locations</p>
              <p className="text-gray-400 text-sm mt-1">Worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-normal tracking-tight"
              style={{ fontFamily: "'Forum', serif", color: 'rgb(255, 237, 216)' }}
            >
              OUR LOCATIONS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: "NEW YORK", address: "123 Fifth Avenue\nSuite 100\nNew York, NY 10001" },
              { city: "TOKYO", address: "456 Ginza Street\nChuo City\nTokyo 104-0061" },
              { city: "PARIS", address: "789 Champs-Élysées\n8th Arrondissement\nParis 75008" },
              { city: "DUBAI", address: "101 Downtown Boulevard\nBusiness Bay\nDubai, UAE" }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{location.city}</h3>
                <p className="text-gray-400 leading-relaxed whitespace-pre-line">{location.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Footer */}
      <Footer />

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