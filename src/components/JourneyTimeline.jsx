import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiAward, FiUsers, FiCalendar, FiStar } = FiIcons;

const timelineEvents = [
  {
    id: 1,
    date: 'September 2020',
    title: 'Naval Academy Appointment',
    description: 'Accepted appointment to the United States Naval Academy, beginning a transformative journey of leadership and service.',
    location: 'Annapolis, MD',
    icon: FiMapPin,
    type: 'milestone',
    highlight: 'Congressional Nomination'
  },
  {
    id: 2,
    date: 'Summer 2021',
    title: 'Plebe Summer',
    description: 'Completed intensive military training and indoctrination, forging the foundation of naval discipline and honor.',
    location: 'USNA',
    icon: FiUsers,
    type: 'training',
    highlight: 'Honor Company'
  },
  {
    id: 3,
    date: 'Fall 2023',
    title: 'Brigade Leadership',
    description: 'Selected as Company Commander, 2nd Battalion, leading over 150 midshipmen with distinction.',
    location: 'USNA',
    icon: FiAward,
    type: 'leadership',
    highlight: 'Distinguished Graduate'
  },
  {
    id: 4,
    date: 'May 2024',
    title: 'Commissioning',
    description: 'Graduated magna cum laude and commissioned as Ensign, United States Navy, ready to serve with honor.',
    location: 'Annapolis, MD',
    icon: FiCalendar,
    type: 'commissioning',
    highlight: 'Magna Cum Laude'
  }
];

const JourneyTimeline = () => {
  return (
    <section id="journey-section" className="py-30 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-22"
        >
          <div className="flex justify-center mb-6">
            <SafeIcon icon={FiStar} className="text-4xl text-gold-premium" />
          </div>
          <h2 className="display font-display text-navy-deep mb-8 star-motif">
            The Journey to Gold Bars
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto font-serif leading-relaxed">
            From appointment to commissioning, every step forged the officer he has become. 
            A testament to dedication, honor, and the pursuit of excellence in service to our nation.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-gold opacity-60 hidden md:block"></div>

          {/* Timeline events */}
          <div className="space-y-18">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-12`}
              >
                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center mb-8 md:mb-0`}>
                  <div className="card-luxury rounded-2xl p-8 border-l-4 border-gold-premium relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <SafeIcon icon={event.icon} className="text-8xl text-gold-premium" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                        <SafeIcon 
                          icon={event.icon} 
                          className={`text-2xl ${getTypeColor(event.type)}`} 
                        />
                        <span className="text-sm font-sans font-semibold text-silver uppercase tracking-wider">
                          {event.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-serif text-navy-deep mb-3 font-semibold">
                        {event.title}
                      </h3>
                      
                      <p className="text-charcoal mb-4 leading-relaxed font-sans">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center justify-center md:justify-start space-x-4">
                        <span className="text-sm text-silver font-sans">
                          {event.location}
                        </span>
                        <span className="px-3 py-1 bg-gold-premium bg-opacity-20 text-warm-gold text-xs font-sans font-semibold rounded-full">
                          {event.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline marker */}
                <div className="relative z-10 my-4 md:my-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-luxury ${getTypeBackground(event.type)}`}>
                    <SafeIcon 
                      icon={event.icon} 
                      className="text-white text-2xl" 
                    />
                  </div>
                  {/* Connecting line for mobile */}
                  <div className="md:hidden w-1 h-12 bg-gradient-gold mx-auto mt-4 opacity-60"></div>
                </div>

                {/* Spacer for desktop */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-22"
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-cream rounded-full border border-gold-premium border-opacity-20">
            <SafeIcon icon={FiStar} className="text-gold-premium text-xl" />
            <span className="text-charcoal font-serif italic">
              "Excellence is not a destination, but a journey of honor"
            </span>
            <SafeIcon icon={FiStar} className="text-gold-premium text-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const getTypeColor = (type) => {
  switch (type) {
    case 'milestone': return 'text-accent-blue';
    case 'training': return 'text-green-600';
    case 'leadership': return 'text-purple-600';
    case 'commissioning': return 'text-gold-premium';
    default: return 'text-charcoal';
  }
};

const getTypeBackground = (type) => {
  switch (type) {
    case 'milestone': return 'bg-accent-blue';
    case 'training': return 'bg-green-600';
    case 'leadership': return 'bg-purple-600';
    case 'commissioning': return 'bg-gradient-gold';
    default: return 'bg-charcoal';
  }
};

export default JourneyTimeline;