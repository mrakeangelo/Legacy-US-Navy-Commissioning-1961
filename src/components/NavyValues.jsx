import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiHeart, FiTarget, FiStar, FiAnchor } = FiIcons;

const coreValues = [
  {
    id: 1,
    value: 'Honor',
    icon: FiShield,
    description: 'Integrity is the foundation of honor. We are honest in word and deed, conducting ourselves with the highest ethical standards.',
    reflection: 'From the first day at the Academy, honor was not just a concept but a way of life. Every decision, every action, every word spoken was measured against this standard. Honor means doing what is right, even when no one is watching. It is the compass that guides us through moral complexity and ensures we remain worthy of the trust placed in us.',
    quote: 'Honor is the moral compass that guides every decision.',
    principle: 'Integrity First'
  },
  {
    id: 2,
    value: 'Courage',
    icon: FiHeart,
    description: 'Courage is not the absence of fear, but action in spite of it. We face challenges with determination and resolve.',
    reflection: 'Courage was tested daily - from speaking up in class to standing up for shipmates. Physical courage is important, but moral courage - the strength to do what is right despite consequences - is what defines true leadership. It takes courage to make difficult decisions, to stand alone when necessary, and to face the unknown with confidence.',
    quote: 'Courage is the bridge between fear and action.',
    principle: 'Bravery in Service'
  },
  {
    id: 3,
    value: 'Commitment',
    icon: FiTarget,
    description: 'We are committed to excellence in all we do, for our shipmates, our Navy, and our nation.',
    reflection: 'Commitment means finishing what you start, supporting your teammates, and never giving up on the mission. It is the dedication to something greater than yourself - to the Navy, to your sailors, and to the Constitution. This commitment extends beyond duty hours; it is a way of life that demands excellence in all endeavors.',
    quote: 'Commitment is the promise we make to those who depend on us.',
    principle: 'Excellence Always'
  }
];

const NavyValues = () => {
  return (
    <section className="py-30 bg-navy-deep relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-premium to-transparent"></div>
        <div className="absolute top-16 right-16 text-9xl text-gold-premium opacity-20">⚓</div>
        <div className="absolute bottom-16 left-16 text-7xl text-gold-premium opacity-20">★</div>
        <div className="absolute top-1/2 left-1/4 text-6xl text-gold-premium opacity-15">⚓</div>
      </div>

      {/* Floating star elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-premium opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SafeIcon icon={FiStar} className="text-xl" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-18"
        >
          <div className="flex justify-center mb-6">
            <SafeIcon icon={FiAnchor} className="text-4xl text-gold-premium" />
          </div>
          <h2 className="display font-display text-off-white mb-8 star-motif">
            Navy Core Values
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto font-serif leading-relaxed">
            The three pillars that guide every sailor and officer in service to our nation. 
            These values form the foundation of character and the essence of naval service.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-luxury bg-off-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-10 border border-gold-premium border-opacity-20 hover:border-opacity-40 transition-all duration-300 h-full shadow-luxury">
                {/* Icon and header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold-glow">
                    <SafeIcon icon={value.icon} className="text-navy-deep text-3xl" />
                  </div>
                  <h3 className="text-3xl font-serif text-gold-premium mb-3 font-semibold">
                    {value.value}
                  </h3>
                  <p className="text-off-white font-sans text-sm uppercase tracking-wider font-semibold mb-4">
                    {value.principle}
                  </p>
                  <p className="text-silver font-sans leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Personal reflection */}
                <div className="mb-8">
                  <h4 className="text-lg font-serif text-off-white mb-4 font-semibold">
                    Personal Reflection
                  </h4>
                  <p className="text-silver font-sans text-sm leading-relaxed">
                    {value.reflection}
                  </p>
                </div>

                {/* Quote */}
                <div className="border-t border-gold-premium border-opacity-20 pt-6">
                  <div className="relative">
                    <div className="absolute top-0 left-0 text-4xl text-gold-premium opacity-30 font-serif">
                      "
                    </div>
                    <blockquote className="text-gold-premium font-serif italic text-center pl-8 leading-relaxed">
                      {value.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom inspirational section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-22 text-center"
        >
          <div className="card-luxury bg-gold-premium bg-opacity-10 rounded-3xl p-12 border border-gold-premium border-opacity-20 shadow-luxury">
            <div className="flex justify-center mb-6">
              <SafeIcon icon={FiStar} className="text-4xl text-gold-premium" />
            </div>
            <h3 className="text-3xl font-serif text-gold-premium mb-6 font-semibold">
              Living the Values
            </h3>
            <p className="text-off-white font-sans leading-relaxed max-w-4xl mx-auto text-lg">
              These values are not just words on a wall — they are the foundation of naval service. 
              Every officer carries the responsibility to embody these principles, to teach them to 
              junior sailors, and to live them in every decision, every day. They are the bridge 
              between who we are and who we aspire to be, the standard by which we measure ourselves 
              and the legacy we leave for future generations.
            </p>
            
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-2">
                  <SafeIcon icon={FiShield} className="text-navy-deep text-xl" />
                </div>
                <p className="text-gold-premium font-serif font-semibold">Honor</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-2">
                  <SafeIcon icon={FiHeart} className="text-navy-deep text-xl" />
                </div>
                <p className="text-gold-premium font-serif font-semibold">Courage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-2">
                  <SafeIcon icon={FiTarget} className="text-navy-deep text-xl" />
                </div>
                <p className="text-gold-premium font-serif font-semibold">Commitment</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NavyValues;