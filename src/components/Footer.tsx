
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <img src="https://via.placeholder.com/150x60?text=NAIPI" alt="NAIPI Logo" className="h-12" />
          <img src="https://via.placeholder.com/150x60?text=LSU" alt="LSU Logo" className="h-12 ml-8" />
        </div>
        
        <div className="text-center text-sm text-gray-600 max-w-3xl mx-auto">
          <p className="mb-4">
            The National IDeA Symposium of Biomedical Research Excellence (NIBSRE) is funded by the National Institute of General Medical Sciences (NIGMS) of the National Institutes of Health (NIH) under grant number R13GM142247.
          </p>
          <p className="mb-4">
            Content is solely the responsibility of the organizers and does not necessarily represent the official views of the National Institutes of Health.
          </p>
          <p>
            &copy; 2023 NIBSRE | All Rights Reserved | <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
