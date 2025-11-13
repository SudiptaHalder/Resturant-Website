'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '../types/index';

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "This template completely transformed our online presence. The design is stunning and the performance is incredible.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp"
    },
    {
      id: 2,
      text: "We've seen a 40% increase in conversions since implementing this template. The user experience is flawless.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "StartupXYZ"
    },
    {
      id: 3,
      text: "The attention to detail in this template is remarkable. It saved us weeks of development time and looks professional.",
      author: "Emily Rodriguez",
      role: "Creative Director",
      company: "DesignStudio"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-amber-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
        >
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              500+
            </motion.div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              99%
            </motion.div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              24/7
            </motion.div>
            <p className="text-gray-600">Support</p>
          </div>
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              50+
            </motion.div>
            <p className="text-gray-600">Countries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;