import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiAward, FiSalute } = FiIcons;

const reflections = [
  {
    id: 1,
    type: 'parent',
    name: 'Robert & Susan Brooks',
    relation: 'Parents',
    message: 'From the little boy who played with toy ships to the officer who will command real ones. We are so proud of the man you have become and the leader you will be.',
    icon: FiHeart
  },
  {
    id: 2,
    type: 'sibling',
    name: 'Sarah Brooks',
    relation: 'Sister',
    message: 'My big brother always protected me growing up. Now he gets to protect our whole country. I always knew you were destined for greatness.',
    icon: FiUsers
  },
  {
    id: 3,
    type: 'mentor',
    name: 'Captain James Mitchell',
    relation: 'Academy Mentor',
    message: 'In four years, I watched Matthew grow from an eager plebe into a natural leader. His dedication to excellence and his shipmates will serve him well as an officer.',
    icon: FiAward
  },
  {
    id: 4,
    type: 'first-salute',
    name: 'Chief Petty Officer Rodriguez',
    relation: 'First Salute',
    message: 'It was an honor to be chosen for your first salute, Sir. Your respect for enlisted sailors and understanding of leadership will make you an exceptional officer.',
    icon: FiSalute
  }
];

const FamilyReflections = () => {
  return (
    <section className="py-20 bg-dress-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-navy-blue mb-6">
            Family & Mentorship
          </h2>
          <p className="text-xl text-sea-steel max-w-2xl mx-auto">
            Words from those who shaped his journey and witnessed his transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reflections.map((reflection, index) => (
            <motion.div
              key={reflection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-gold-shoulder relative"
            >
              {/* Letter Style Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-navy-blue rounded-full flex items-center justify-center">
                  <SafeIcon icon={reflection.icon} className="text-gold-shoulder text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair text-navy-blue font-semibold">
                    {reflection.name}
                  </h3>
                  <p className="text-sea-steel font-inter text-sm">
                    {reflection.relation}
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <div className="absolute top-0 left-0 text-6xl text-gold-shoulder opacity-20 font-playfair">
                  "
                </div>
                <p className="text-gray-700 font-inter leading-relaxed pl-8 italic">
                  {reflection.message}
                </p>
              </div>

              {/* Signature Line */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-end">
                  <div className="text-right">
                    <p className="text-sm text-sea-steel font-inter">
                      With love and pride,
                    </p>
                    <p className="text-navy-blue font-playfair font-semibold">
                      {reflection.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Envelope Style Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gold-shoulder opacity-20 transform rotate-45"></div>
            </motion.div>
          ))}
        </div>

        {/* Shadowbox Style Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-navy-blue rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-playfair text-gold-shoulder mb-4">
            A Legacy of Service
          </h3>
          <p className="text-dress-white font-inter leading-relaxed max-w-3xl mx-auto">
            Behind every commissioned officer stands a family who supported the dream, 
            mentors who guided the way, and enlisted sailors who showed what it means to serve. 
            Their influence shaped not just a career, but a calling to lead with honor.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyReflections;