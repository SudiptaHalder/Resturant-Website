import { motion } from 'framer-motion';
import { Feature } from '../types/index';

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Modern Design",
      description: "Clean, minimalist design that focuses on your content and user experience.",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Fast Performance",
      description: "Optimized for speed with lazy loading and efficient code splitting.",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Responsive",
      description: "Looks perfect on all devices from mobile to desktop.",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Amazing Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create a stunning website that converts visitors into customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;