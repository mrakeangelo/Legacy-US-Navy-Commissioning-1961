import React from 'react';
import HeroSection from '../components/HeroSection';
import JourneyTimeline from '../components/JourneyTimeline';
import OathSection from '../components/OathSection';
import PhotoGallery from '../components/PhotoGallery';
import FamilyReflections from '../components/FamilyReflections';
import OfficerLetter from '../components/OfficerLetter';
import NavyValues from '../components/NavyValues';
import Guestbook from '../components/Guestbook';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-navy-blue">
      <HeroSection />
      <JourneyTimeline />
      <OathSection />
      <PhotoGallery />
      <FamilyReflections />
      <OfficerLetter />
      <NavyValues />
      <Guestbook />
      <Footer />
    </div>
  );
};

export default HomePage;