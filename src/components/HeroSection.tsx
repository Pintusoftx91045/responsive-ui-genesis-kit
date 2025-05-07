
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[70vh] w-full bg-cover bg-center flex items-center justify-center text-center">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10"
        style={{ 
          backgroundImage: "url('/lovable-uploads/43a76492-c7a7-4283-90e4-a36ea56ce705.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <button className="btn-register px-6 py-2 rounded-full text-sm font-medium uppercase">
              Register Now
            </button>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            National IDeA Symposium of Biomedical<br />Research Excellence
          </h1>
          <p className="text-xl text-white mb-8">
            June 17-21, 2023
          </p>
          <p className="text-lg text-white mb-6">
            West Portsmouth Convention Center | Portsmouth, New Hampshire
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
