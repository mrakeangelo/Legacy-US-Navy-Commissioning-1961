import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLock, FiClock, FiPlay, FiStar, FiFeather } = FiIcons;

const OfficerLetter = () => {
  const [selectedTab, setSelectedTab] = useState('future-self');
  const [isExpanded, setIsExpanded] = useState(false);

  const letters = {
    'future-self': {
      title: 'To My Future Self',
      subtitle: '10 Years from Now',
      content: `Dear Future Matthew,

As I write this on commissioning day, I'm filled with excitement and determination. The gold bars on my shoulders feel both weightless and heavy with responsibility.

I hope you remember this moment — the pride in our parents' eyes, the weight of the oath we took, and the dreams we carry. I hope you've led with honor, served with distinction, and never forgotten why we chose this path.

The Navy has given us purpose. I trust you've given it your best in return.

Remember the lessons learned at the Academy: integrity first, service before self, and excellence in all we do. These values will guide you through the challenges ahead.

I hope you've mentored young officers with the same care our mentors showed us. Leadership is not about command, but about service to those who serve.

Fair winds and following seas,
Ensign Brooks, May 2024`,
      locked: false,
      icon: FiMail,
      color: 'text-accent-blue'
    },
    'future-officers': {
      title: 'To Future Officers',
      subtitle: 'Those Who Will Follow',
      content: `To the future officers I hope to mentor,

Leadership isn't about the rank on your collar — it's about the trust of those you lead. Take care of your sailors, and they'll take care of the mission.

Remember: You're not just an officer, you're a guardian of traditions that stretch back centuries. Honor that legacy.

The Navy needs leaders who lead by example, who listen before they speak, and who understand that command is a privilege, not a right.

Your sailors will look to you for guidance, strength, and wisdom. Be worthy of their trust. Make decisions based on what's right, not what's easy.

Never forget that leadership is about service — service to your country, your crew, and the principles that make our Navy great.

Lead with courage, serve with honor.

V/R,
ENS M. Brooks`,
      locked: false,
      icon: FiFeather,
      color: 'text-green-600'
    },
    'time-capsule': {
      title: 'Time Capsule Letter',
      subtitle: 'Sealed Until 2034',
      content: `This letter is sealed until the 10-year anniversary of commissioning.

On May 15, 2034, these words will be revealed — a message from the newly commissioned ensign to the seasoned officer you will have become.

The contents remain locked, waiting for the passage of time to unlock the wisdom, reflections, and hopes contained within.

What dreams did you carry? What challenges did you face? What victories did you celebrate?

Time will tell...`,
      locked: true,
      unlockDate: '2034-05-15',
      icon: FiLock,
      color: 'text-warm-gold'
    }
  };

  return (
    <section className="py-30 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-18"
        >
          <div className="flex justify-center mb-6">
            <SafeIcon icon={FiFeather} className="text-4xl text-gold-premium" />
          </div>
          <h2 className="display font-display text-navy-deep mb-8 star-motif">
            Officer's Letters
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto font-serif leading-relaxed">
            Messages from commissioning day — to the future, to fellow officers, and to himself. 
            Words that capture the hopes, wisdom, and commitment of a newly minted naval officer.
          </p>
        </motion.div>

        {/* Letter tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-2 bg-white rounded-2xl p-3 shadow-luxury border border-gold-premium border-opacity-10">
            {Object.entries(letters).map(([key, letter]) => (
              <button
                key={key}
                onClick={() => setSelectedTab(key)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-sans font-semibold transition-all duration-300 ${
                  selectedTab === key
                    ? 'bg-navy-deep text-off-white shadow-luxury'
                    : 'text-charcoal hover:bg-off-white'
                }`}
              >
                <SafeIcon 
                  icon={letter.icon} 
                  className={`text-lg ${selectedTab === key ? 'text-gold-premium' : letter.color}`}
                />
                <span className="hidden sm:inline">{letter.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Letter content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="card-luxury rounded-3xl p-10 md:p-16 border-t-4 border-gold-premium shadow-luxury"
          >
            {/* Letter header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-6"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-glow">
                  <SafeIcon 
                    icon={letters[selectedTab].icon} 
                    className="text-navy-deep text-2xl" 
                  />
                </div>
              </motion.div>
              
              <h3 className="text-3xl font-serif text-navy-deep mb-3 font-semibold">
                {letters[selectedTab].title}
              </h3>
              <p className="text-silver font-sans text-lg">
                {letters[selectedTab].subtitle}
              </p>
            </div>

            {/* Letter body */}
            <div className="max-w-3xl mx-auto">
              {letters[selectedTab].locked ? (
                <div className="text-center py-16">
                  <div className="bg-off-white rounded-2xl p-12 border-2 border-dashed border-gold-premium border-opacity-30">
                    <SafeIcon icon={FiClock} className="text-6xl text-gold-premium mx-auto mb-6 animate-pulse" />
                    <h4 className="text-2xl font-serif text-charcoal mb-4">
                      Time Capsule Sealed
                    </h4>
                    <p className="text-silver mb-6 font-sans">
                      This letter will be unlocked on <strong>{letters[selectedTab].unlockDate}</strong>
                    </p>
                    <div className="bg-white rounded-xl p-6 border border-gold-premium border-opacity-20">
                      <p className="text-sm text-charcoal italic font-serif leading-relaxed">
                        {letters[selectedTab].content}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-off-white rounded-2xl p-10 border-l-4 border-gold-premium shadow-inner-luxury">
                  <div className="font-serif text-charcoal leading-relaxed whitespace-pre-line text-lg">
                    {isExpanded ? letters[selectedTab].content : letters[selectedTab].content.substring(0, 400) + '...'}
                  </div>
                  
                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="mt-6 text-gold-premium hover:text-warm-gold font-sans font-semibold transition-colors duration-300"
                    >
                      Read Full Letter →
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Audio option */}
            {!letters[selectedTab].locked && (
              <div className="mt-12 text-center">
                <button className="btn-premium inline-flex items-center space-x-3 px-8 py-4 rounded-full font-sans font-semibold">
                  <SafeIcon icon={FiPlay} className="text-lg" />
                  <span>Listen to Audio Version</span>
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Inspirational quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-18 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-serif italic text-charcoal leading-relaxed">
              "The best leaders are those who never forget where they came from 
              and always remember where they're going."
            </blockquote>
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiStar} className="text-gold-premium" />
                <SafeIcon icon={FiStar} className="text-gold-premium" />
                <SafeIcon icon={FiStar} className="text-gold-premium" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficerLetter;