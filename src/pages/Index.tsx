
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import OrganizingCommittee from '../components/OrganizingCommittee';
import SupportTeam from '../components/SupportTeam';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturedSpeakers />
        <OrganizingCommittee />
        <SupportTeam />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
