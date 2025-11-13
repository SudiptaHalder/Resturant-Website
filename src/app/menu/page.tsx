'use client';

import { useState } from 'react';
import Header from '../../components/Header'; // Import your header component

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('sushi');

  const menuCategories = [
    { id: 'sushi', name: 'SUSHI' },
    { id: 'sashimi', name: 'SASHIMI' },
    { id: 'ramen', name: 'RAMEN' },
    { id: 'drinks', name: 'DRINKS' },
    { id: 'desserts', name: 'DESSERTS' },
  ];

  const menuItems = {
    sushi: [
      { name: 'CALIFORNIA ROLL', price: '$19', description: 'A classic mix of crab, avocado, and cucumber, wrapped in sushi rice and nori, topped with sesame seeds.', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'PHILADELPHIA ROLL', price: '$24', description: 'Silky smoked salmon, cream cheese, and cucumber, wrapped in sushi rice for a rich, smooth bite.', image: 'https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'DRAGON ROLL', price: '$28', description: 'Eel, cucumber, avocado with eel sauce, topped with avocado slices resembling dragon scales.', image: 'https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'RAINBOW ROLL', price: '$32', description: 'California roll topped with fresh tuna, salmon, shrimp, and avocado creating a colorful presentation.', image: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'SPIDER ROLL', price: '$26', description: 'Soft-shell crab tempura, cucumber, avocado, and spicy mayo wrapped in sushi rice.', image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'VOLCANO ROLL', price: '$30', description: 'Baked roll with spicy crab mix, topped with baked scallops and special sauce.', image: 'https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' }
    ],
    sashimi: [
      { name: 'BLUEFIN TUNA SASHIMI', price: '$38', description: 'Premium bluefin tuna belly, known for its rich marbling and melt-in-your-mouth texture.', image: 'https://images.pexels.com/photos/11286796/pexels-photo-11286796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'SALMON SASHIMI', price: '$22', description: 'Fresh Atlantic salmon slices with perfect balance of fattiness and sweetness.', image: 'https://images.pexels.com/photos/11286795/pexels-photo-11286795.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'YELLOWTAIL SASHIMI', price: '$26', description: 'Silky yellowtail with delicate, slightly citrusy flavor, served with yuzu ponzu.', image: 'https://images.pexels.com/photos/11286798/pexels-photo-11286798.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'OCTOPUS SASHIMI', price: '$24', description: 'Tender octopus slices with firm texture and subtle sweetness.', image: 'https://images.pexels.com/photos/11286797/pexels-photo-11286797.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' }
    ],
    ramen: [
      { name: 'TONKOTSU RAMEN', price: '$18', description: 'Rich pork bone broth with chashu pork, soft-boiled egg, and bamboo shoots.', image: 'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'MISO RAMEN', price: '$16', description: 'Savory miso broth with corn, butter, bean sprouts, and ground pork.', image: 'https://images.pexels.com/photos/1907229/pexels-photo-1907229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'SHOYU RAMEN', price: '$17', description: 'Soy sauce based clear broth with chicken, nori, and menma.', image: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' }
    ],
    drinks: [
      { name: 'MATCHA LATTE', price: '$8', description: 'Traditional Japanese green tea powder whisked with steamed milk.', image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'SAKE FLIGHT', price: '$25', description: 'Three different premium sakes for tasting and comparison.', image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'YUZU LEMONADE', price: '$7', description: 'Refreshing Japanese citrus lemonade with honey and mint.', image: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' }
    ],
    desserts: [
      { name: 'MATCHA TIRAMISU', price: '$12', description: 'Layers of matcha-soaked sponge cake and mascarpone cream.', image: 'https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'MOCHI ICE CREAM', price: '$10', description: 'Assorted flavors of chewy mochi with ice cream filling.', image: 'https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' },
      { name: 'BLACK SESAME PANNA COTTA', price: '$11', description: 'Creamy sesame dessert with caramelized sugar topping.', image: 'https://images.pexels.com/photos/302478/pexels-photo-302478.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2' }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Use your Header component */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-[120vh] relative flex items-center justify-center overflow-hidden pt-20">
        {/* Background Images Container */}
        <div className="absolute inset-0">
          {/* Black Background */}
          <div className="absolute inset-0 bg-black"></div>

          {/* 4 Tilted Images with Proper Spacing */}
          <div className="absolute inset-0">
            {/* Top Left Image */}
            <div className="absolute top-32 left-16 w-64 h-80 transform -rotate-12 z-10">
              <img
                src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2"
                alt="Sushi presentation"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>

            {/* Top Right Image */}
            <div className="absolute top-28 right-20 w-60 h-76 transform rotate-8 z-10">
              <img
                src="https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2"
                alt="Sushi rolls"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-32 left-20 w-62 h-78 transform rotate-6 z-10">
              <img
                src="https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2"
                alt="Sushi platter"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-28 right-16 w-58 h-74 transform -rotate-8 z-10">
              <img
                src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2"
                alt="Japanese cuisine"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-0"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          {/* Title with Lines */}
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="w-16 h-px bg-white/40"></div>
            <div>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest text-white">
                THE MENU
              </h3>
            </div>
            <div className="w-16 h-px bg-white/40"></div>
          </div>

          {/* Main Heading */}
          <div>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-2"
              style={{ fontFamily: "'Malarkeey', sans-serif", color: 'rgb(255, 237, 216)' }}
            >
              EXCEPTIONAL
            </h1>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Malarkeey', sans-serif", color: 'rgb(255, 237, 216)' }}
            >
              FLAVORS
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Discover our exquisite selection of Asian delicacies crafted with passion and precision.
          </p>
        </div>
      </section>

      {/* Menu Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-4">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-6 py-4 transition-all duration-300 rounded-lg border-2 ${
                    activeCategory === category.id 
                      ? 'bg-amber-900/20 border-amber-500 text-white shadow-lg' 
                      : 'bg-transparent border-amber-700/50 text-gray-400 hover:text-white hover:border-amber-500/70 hover:bg-amber-900/10'
                  }`}
                >
                  <span className="text-base font-light tracking-wide">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-3">
            <div className="space-y-10">
              {(menuItems[activeCategory as keyof typeof menuItems] || []).map((item, index) => (
                <div key={index} className="flex items-start space-x-8 group hover:opacity-90 transition-all duration-300 p-6 rounded-lg hover:bg-white/5 border border-transparent hover:border-amber-500/20">
                  <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-light text-white tracking-wide">{item.name}</h3>
                      <span className="text-lg font-light text-amber-200 ml-4">{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
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
        body {
          background: #000;
        }
      `}</style>
    </div>
  );
}