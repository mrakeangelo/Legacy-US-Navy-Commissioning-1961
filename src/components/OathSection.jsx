import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiPause, FiVolume2, FiVolumeX, FiStar } = FiIcons;

const oathText = [
  "I, Matthew J. Brooks, do solemnly swear",
  "that I will support and defend the Constitution of the United States",
  "against all enemies, foreign and domestic;",
  "that I will bear true faith and allegiance to the same;",
  "that I take this obligation freely,",
  "without any mental reservation or purpose of evasion;",
  "and that I will well and faithfully discharge",
  "the duties of the office on which I am about to enter.",
  "So help me God."
];

const OathSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate audio playback with enhanced line highlighting
      let lineIndex = 0;
      const interval = setInterval(() => {
        setCurrentLine(lineIndex);
        lineIndex++;
        if (lineIndex >= oathText.length) {
          clearInterval(interval);
          setIsPlaying(false);
          setCurrentLine(0);
        }
      }, 2500);
    }
  };

  return (
    <section className="py-30 bg-navy-deep relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-premium to-transparent"></div>
        <div className="absolute top-20 right-20 text-9xl text-gold-premium opacity-20">⚓</div>
        <div className="absolute bottom-20 left-20 text-7xl text-gold-premium opacity-20">★</div>
      </div>

      {/* Floating constitutional elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-premium opacity-20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SafeIcon icon={FiStar} className="text-2xl" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-18"
        >
          <h2 className="display font-display text-off-white mb-8 star-motif">
            The Oath of Office
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto font-serif leading-relaxed">
            The sacred promise that binds every officer to the Constitution and the nation. 
            These words transform a citizen into a guardian of liberty.
          </p>
        </motion.div>

        {/* Audio controls */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-6 mb-16"
        >
          <button
            onClick={togglePlayback}
            className="btn-premium flex items-center space-x-4 px-10 py-5 rounded-full text-lg font-sans font-semibold"
          >
            <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="text-xl" />
            <span>{isPlaying ? 'Pause' : 'Listen to'} the Oath</span>
            <SafeIcon icon={audioEnabled ? FiVolume2 : FiVolumeX} className="text-xl" />
          </button>
          
          <button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="p-3 rounded-full bg-gold-premium bg-opacity-20 text-gold-premium hover:bg-opacity-30 transition-all duration-300"
          >
            <SafeIcon icon={audioEnabled ? FiVolume2 : FiVolumeX} className="text-xl" />
          </button>
        </motion.div>

        {/* Oath text */}
        <div className="card-luxury bg-off-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-gold-premium border-opacity-20 shadow-luxury">
          <div className="space-y-8">
            {oathText.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-lg md:text-xl font-serif leading-relaxed transition-all duration-700 ${
                  currentLine === index && isPlaying
                    ? 'text-gold-premium font-semibold transform scale-105 text-shimmer'
                    : 'text-off-white'
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Key phrases highlight */}
        <div className="grid md:grid-cols-3 gap-8 mt-18">
          {[
            {
              phrase: "Support and defend the Constitution",
              description: "The foundation of our democracy"
            },
            {
              phrase: "Bear true faith and allegiance",
              description: "Unwavering loyalty to our nation"
            },
            {
              phrase: "So help me God",
              description: "A sacred commitment to service"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="card-luxury bg-gold-premium bg-opacity-10 rounded-2xl p-8 border border-gold-premium border-opacity-30 hover:border-opacity-50 transition-all duration-300">
                <blockquote className="text-gold-premium font-serif text-lg italic mb-4">
                  "{item.phrase}"
                </blockquote>
                <p className="text-silver font-sans text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Constitutional quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-18"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-serif italic text-gold-premium leading-relaxed">
              "I do solemnly swear that I will support and defend the Constitution 
              of the United States against all enemies, foreign and domestic..."
            </blockquote>
            <cite className="block mt-4 text-silver font-sans text-sm">
              — Officer's Oath of Office, United States Navy
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OathSection;