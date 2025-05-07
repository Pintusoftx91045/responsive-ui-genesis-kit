
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedSpeakers from '../components/FeaturedSpeakers';

const Speakers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-12">Speakers</h1>
          <FeaturedSpeakers />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Speakers;
