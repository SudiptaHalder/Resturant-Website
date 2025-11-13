'use client';

import { motion } from 'framer-motion';

export default function ReserveTable() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            RESERVE YOUR TABLE
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-light mb-4" style={{ color: 'rgb(255, 237, 216)' }}>Jane Smith</h3>
              <div className="space-y-2">
                <p className="text-lg">Phone</p>
                <p className="text-lg">Email</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-lg mb-2" style={{ color: 'rgb(255, 237, 216)' }}>Date</label>
                <div className="text-xl">dd-mm-yyyy</div>
              </div>

              <div>
                <label className="block text-lg mb-2" style={{ color: 'rgb(255, 237, 216)' }}>Select Time...</label>
                <div className="text-xl">Seats</div>
              </div>

              <div>
                <label className="block text-lg mb-2" style={{ color: 'rgb(255, 237, 216)' }}>Select Time...</label>
                <div className="text-xl">Message</div>
              </div>
            </div>
          </motion.div>

          {/* Reservation Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-light mb-6" style={{ color: 'rgb(255, 237, 216)' }}>
                Reserve by phone or email
              </h3>
              <div className="space-y-4 text-lg">
                <p>
                  <strong>Phone:</strong> +1 (212) 555-1212
                </p>
                <p>
                  <strong>Email:</strong> reserve@holier.io
                </p>
                <p className="mt-6 text-base opacity-80">
                  Contact us directly to make your reservation. Our team will assist you with table availability and special requests.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/malarkeey');
      `}</style>
    </section>
  );
}