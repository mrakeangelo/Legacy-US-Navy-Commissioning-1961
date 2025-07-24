import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const galleryCategories = [
  {
    id: 'training',
    name: 'Training',
    photos: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        caption: 'Plebe Summer formation',
        location: 'USNA, Annapolis'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        caption: 'Navigation training',
        location: 'Naval Academy'
      }
    ]
  },
  {
    id: 'leadership',
    name: 'Leadership',
    photos: [
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        caption: 'Company Commander duties',
        location: 'USNA'
      }
    ]
  },
  {
    id: 'ceremony',
    name: 'Commissioning',
    photos: [
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        caption: 'Taking the oath',
        location: 'Annapolis, MD'
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        caption: 'Family pinning ceremony',
        location: 'Annapolis, MD'
      }
    ]
  }
];

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState('training');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allPhotos = galleryCategories.flatMap(cat => cat.photos);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    setCurrentIndex(allPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % allPhotos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(allPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(allPhotos[prevIndex]);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-navy-blue mb-6">
            Commissioning Highlights
          </h2>
          <p className="text-xl text-sea-steel max-w-2xl mx-auto">
            Moments that captured the transformation from midshipman to officer.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-lg">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-md font-inter font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-navy-blue text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryCategories
              .find(cat => cat.id === activeCategory)
              ?.photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(photo)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy-blue bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-white font-inter font-semibold">
                        {photo.caption}
                      </h3>
                      <p className="text-gray-300 text-sm">{photo.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                >
                  <SafeIcon icon={FiX} className="text-2xl" />
                </button>

                {/* Navigation */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                >
                  <SafeIcon icon={FiChevronLeft} className="text-2xl" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                >
                  <SafeIcon icon={FiChevronRight} className="text-2xl" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-white font-inter font-semibold text-lg">
                    {selectedPhoto.caption}
                  </h3>
                  <p className="text-gray-300">{selectedPhoto.location}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;