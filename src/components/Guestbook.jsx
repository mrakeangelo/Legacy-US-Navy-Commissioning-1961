import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMessageSquare, FiUser, FiMail, FiSend, FiHeart, FiStar, FiCheck } = FiIcons;

const sampleMessages = [
  {
    id: 1,
    name: 'Admiral Thompson',
    message: 'Congratulations on your commissioning. The Navy is fortunate to have officers of your caliber. Your dedication to excellence and leadership will serve our nation well.',
    date: '2024-05-15',
    approved: true,
    role: 'Flag Officer'
  },
  {
    id: 2,
    name: 'Classmate Johnson',
    message: 'From plebe year to commissioning - what a journey! Proud to call you shipmate. Your integrity and commitment have been an inspiration to us all.',
    date: '2024-05-15',
    approved: true,
    role: 'Naval Academy Classmate'
  },
  {
    id: 3,
    name: 'Uncle Mike',
    message: 'Following in your grandfather\'s footsteps. He would be so proud to see you in uniform. The family legacy of service continues with honor.',
    date: '2024-05-16',
    approved: true,
    role: 'Family'
  }
];

const Guestbook = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newMessage = {
      id: messages.length + 1,
      name: formData.name,
      message: formData.message,
      role: formData.role,
      date: new Date().toISOString().split('T')[0],
      approved: false // Would require admin approval
    };

    setMessages([newMessage, ...messages]);
    setFormData({ name: '', email: '', message: '', role: '' });
    setIsSubmitting(false);
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="py-30 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-18"
        >
          <div className="flex justify-center mb-6">
            <SafeIcon icon={FiMessageSquare} className="text-4xl text-gold-premium" />
          </div>
          <h2 className="display font-display text-navy-deep mb-8 star-motif">
            Virtual Ceremony Wall
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto font-serif leading-relaxed">
            Leave your congratulations and words of encouragement for our newly commissioned officer. 
            Each message becomes part of this digital tribute to his service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Message form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-luxury rounded-3xl p-10 border-t-4 border-gold-premium shadow-luxury">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiMessageSquare} className="text-navy-deep text-xl" />
                </div>
                <h3 className="text-2xl font-serif text-navy-deep font-semibold">
                  Sign the Guestbook
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="flex items-center space-x-3 text-sm font-medium text-charcoal mb-3">
                    <SafeIcon icon={FiUser} className="text-gold-premium" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-silver border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-premium focus:border-transparent bg-white shadow-inner-luxury font-sans"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-3 text-sm font-medium text-charcoal mb-3">
                    <SafeIcon icon={FiMail} className="text-gold-premium" />
                    <span>Email (optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-silver border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-premium focus:border-transparent bg-white shadow-inner-luxury font-sans"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-3 text-sm font-medium text-charcoal mb-3">
                    <SafeIcon icon={FiStar} className="text-gold-premium" />
                    <span>Your Role/Relationship</span>
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-silver border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-premium focus:border-transparent bg-white shadow-inner-luxury font-sans"
                    required
                  >
                    <option value="">Select your relationship</option>
                    <option value="Family">Family Member</option>
                    <option value="Naval Academy Classmate">Naval Academy Classmate</option>
                    <option value="Fellow Officer">Fellow Officer</option>
                    <option value="Mentor">Mentor</option>
                    <option value="Friend">Friend</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center space-x-3 text-sm font-medium text-charcoal mb-3">
                    <SafeIcon icon={FiHeart} className="text-gold-premium" />
                    <span>Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-5 py-4 border border-silver border-opacity-30 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-premium focus:border-transparent bg-white shadow-inner-luxury font-sans resize-none"
                    placeholder="Share your congratulations, memories, or words of encouragement..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-premium w-full flex items-center justify-center space-x-3 py-5 rounded-xl text-lg font-sans font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-navy-deep"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-sm text-silver mt-6 font-sans">
                All messages are reviewed before posting to ensure a respectful tribute.
              </p>
            </div>
          </motion.div>

          {/* Messages display */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-luxury rounded-3xl p-10 border-t-4 border-gold-premium shadow-luxury">
              <h3 className="text-2xl font-serif text-navy-deep mb-8 font-semibold">
                Messages of Congratulation
              </h3>

              <div className="space-y-6 max-h-96 overflow-y-auto custom-scrollbar">
                {messages.filter(msg => msg.approved).map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-cream rounded-2xl p-6 border-l-4 border-gold-premium shadow-inner-luxury"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-serif text-navy-deep font-semibold text-lg">
                          {message.name}
                        </h4>
                        <p className="text-gold-premium text-sm font-sans">
                          {message.role}
                        </p>
                      </div>
                      <span className="text-sm text-silver font-sans">
                        {message.date}
                      </span>
                    </div>
                    <p className="text-charcoal font-sans leading-relaxed">
                      {message.message}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-luxury flex items-center space-x-3 z-50"
            >
              <SafeIcon icon={FiCheck} className="text-xl" />
              <span className="font-sans font-semibold">Message submitted successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Commissioning book section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-22 text-center"
        >
          <div className="bg-navy-deep rounded-3xl p-12 shadow-luxury">
            <div className="flex justify-center mb-6">
              <SafeIcon icon={FiStar} className="text-4xl text-gold-premium" />
            </div>
            <h3 className="text-3xl font-serif text-gold-premium mb-6 font-semibold">
              Digital Commissioning Book
            </h3>
            <p className="text-off-white font-sans leading-relaxed max-w-3xl mx-auto text-lg">
              Like the traditional commissioning books of old, this digital tribute captures 
              the congratulations, well-wishes, and memories shared on this momentous day. 
              Each message becomes part of the permanent record of this officer's beginning 
              and a testament to the community that supports his service.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #E1B352 0%, #D4AF37 100%);
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default Guestbook;