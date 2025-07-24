import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAnchor, FiHeart, FiStar, FiShield } = FiIcons;

const quotes = [
  "A bar of gold, a lifetime of service.",
  "Commissioned not just by rank — but by responsibility.",
  "From midshipman to officer, the journey of honor begins.",
  "Leadership is not about being in charge. It's about taking care of those in your charge.",
  "The finest steel has to go through the hottest fire.",
  "Honor, Courage, Commitment — the pillars of naval service.",
  "In the service of our nation, we find our highest calling."
];

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-navy-deep relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-12 bg-gradient-gold rotate-12"></div>
        <div className="absolute top-1/4 right-1/4 text-8xl text-gold-premium opacity-10">⚓</div>
        <div className="absolute bottom-1/4 left-1/4 text-6xl text-gold-premium opacity-10">★</div>
        <div className="absolute top-3/4 right-1/3 text-5xl text-gold-premium opacity-10">⚓</div>
      </div>

      {/* Wave pattern */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-off-white to-transparent opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-22 relative z-10">
        {/* Quote carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-18"
        >
          <div className="h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-2xl font-serif italic text-gold-premium max-w-5xl leading-relaxed"
              >
                "{quotes[currentQuote]}"
              </motion.blockquote>
            </AnimatePresence>
          </div>
          
          {/* Quote indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote
                    ? 'bg-gold-premium shadow-gold-glow'
                    : 'bg-gold-premium bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Commissioning details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center space-x-4 mb-6 justify-center lg:justify-start">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <SafeIcon icon={FiAnchor} className="text-navy-deep text-xl" />
              </div>
              <h3 className="text-xl font-serif text-off-white font-semibold">
                Commissioning
              </h3>
            </div>
            <div className="text-silver font-sans space-y-2 leading-relaxed">
              <p className="text-gold-premium font-semibold">Ensign Matthew J. Brooks</p>
              <p>United States Navy</p>
              <p>Commissioned: May 15, 2024</p>
              <p>Naval Academy Class of 2024</p>
              <p>Annapolis, Maryland</p>
            </div>
          </motion.div>

          {/* Core values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center space-x-4 mb-6 justify-center">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <SafeIcon icon={FiShield} className="text-navy-deep text-xl" />
              </div>
              <h3 className="text-xl font-serif text-off-white font-semibold">
                Core Values
              </h3>
            </div>
            <div className="text-silver font-sans space-y-2 leading-relaxed">
              <p className="text-gold-premium font-semibold">Honor • Courage • Commitment</p>
              <p>Leadership through Service</p>
              <p>Defending Freedom</p>
              <p>Protecting Democracy</p>
              <p>Serving with Distinction</p>
            </div>
          </motion.div>

          {/* Service commitment */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center space-x-4 mb-6 justify-center">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <SafeIcon icon={FiStar} className="text-navy-deep text-xl" />
              </div>
              <h3 className="text-xl font-serif text-off-white font-semibold">
                Service
              </h3>
            </div>
            <div className="text-silver font-sans space-y-2 leading-relaxed">
              <p className="text-gold-premium font-semibold">Duty • Honor • Country</p>
              <p>Leading the Next Generation</p>
              <p>Upholding Naval Traditions</p>
              <p>Defending the Constitution</p>
              <p>Serving All Americans</p>
            </div>
          </motion.div>

          {/* Legacy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <div className="flex items-center space-x-4 mb-6 justify-center lg:justify-end">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <SafeIcon icon={FiHeart} className="text-navy-deep text-xl" />
              </div>
              <h3 className="text-xl font-serif text-off-white font-semibold">
                Legacy
              </h3>
            </div>
            <div className="text-silver font-sans space-y-2 leading-relaxed">
              <p className="text-gold-premium font-semibold">Continuing the Tradition</p>
              <p>Mentoring Future Officers</p>
              <p>Upholding Excellence</p>
              <p>Inspiring Others</p>
              <p>Honor, Always Honor</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gold-premium border-opacity-20 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-silver font-sans text-sm text-center lg:text-left">
              <p>&copy; 2024 Commissioning Tribute. Built with pride, honor, and dedication.</p>
              <p className="mt-1 text-xs opacity-75">A digital monument to service and sacrifice</p>
            </div>
            
            <div className="flex items-center space-x-6 text-silver">
              <div className="text-sm font-sans text-center lg:text-right">
                <p>
                  <span className="text-gold-premium font-semibold">Designed by</span> Mrake Agency
                </p>
                <p className="text-xs opacity-75 mt-1">Premium Digital Experiences</p>
              </div>
              <div className="w-px h-12 bg-gold-premium opacity-30"></div>
              <div className="text-sm font-sans text-center lg:text-right">
                <p className="text-gold-premium font-semibold">Digital Commissioning Plaque</p>
                <p className="text-xs opacity-75 mt-1">Honoring Naval Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-premium opacity-10"
            style={{
              left: `${15 + i * 20}%`,
              top: `${25 + i * 15}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SafeIcon icon={FiStar} className="text-2xl" />
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;