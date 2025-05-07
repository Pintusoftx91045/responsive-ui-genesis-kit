
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center text-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/43a76492-c7a7-4283-90e4-a36ea56ce705.png')"
        }}
      ></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <span className="inline-block bg-white/10 text-white backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6 border border-white/20">
            #NIBSRE2023
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            National IDeA Symposium of Biomedical Research Excellence
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-white">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="text-lg">June 17-21, 2023</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/70"></div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">Portsmouth, New Hampshire</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/70"></div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span className="text-lg">500+ Attendees</span>
            </div>
          </div>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl">
            Join leaders and innovators in biomedical research for five days of collaboration,
            learning, and networking at the premier IDeA program conference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#f47e3e] hover:bg-[#e06b2d] text-white px-8">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
