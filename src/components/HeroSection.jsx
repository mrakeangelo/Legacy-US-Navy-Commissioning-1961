import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiStar, FiAnchor } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* High-resolution ocean background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-hero"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 bg-navy-deep bg-opacity-40"></div>
      </div>

      {/* Floating star motifs */}
      <div className="absolute inset-0 z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-premium opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SafeIcon icon={FiStar} className="text-xl animate-star-twinkle" />
          </motion.div>
        ))}
      </div>

      {/* Anchor watermark */}
      <div className="absolute top-10 right-10 z-5 opacity-5">
        <SafeIcon icon={FiAnchor} className="text-9xl text-gold-premium" />
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Naval insignia */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-glow">
              <SafeIcon icon={FiStar} className="text-navy-deep text-3xl" />
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-title font-display text-off-white mb-6 star-motif"
          >
            Ensign Matthew J. Brooks
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl md:text-3xl text-gold-premium font-serif font-medium mb-8 tracking-wide"
          >
            Newly Commissioned Officer – United States Navy
          </motion.p>

          {/* Inspirational quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <blockquote className="text-xl md:text-2xl text-off-white font-serif italic leading-relaxed">
              "From promise to purpose — he stepped into command."
            </blockquote>
          </motion.div>

          {/* Premium CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="pt-8"
          >
            <button
              onClick={() => {
                document.getElementById('journey-section').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="btn-premium inline-flex items-center space-x-3 px-12 py-6 rounded-full text-lg font-sans font-semibold animate-pulse-gold"
            >
              <span>Witness His Commissioning Journey</span>
              <SafeIcon icon={FiChevronDown} className="text-xl" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-premium opacity-70"
        >
          <SafeIcon icon={FiChevronDown} className="text-3xl" />
        </motion.div>
      </motion.div>

      {/* Wave divider */}
      <div className="wave-divider absolute bottom-0 left-0 right-0 h-16"></div>
    </section>
  );
};

export default HeroSection;