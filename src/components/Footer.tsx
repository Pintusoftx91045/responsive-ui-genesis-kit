
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-4">About NIBSRE</h3>
            <p className="text-gray-600 mb-6">
              The National IDeA Symposium of Biomedical Research Excellence brings together researchers, administrators, and students for collaboration and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/agenda" className="text-gray-600 hover:text-primary">Agenda</Link></li>
              <li><Link to="/speakers" className="text-gray-600 hover:text-primary">Speakers</Link></li>
              <li><Link to="/abstracts" className="text-gray-600 hover:text-primary">Abstracts</Link></li>
              <li><Link to="/registration" className="text-gray-600 hover:text-primary">Registration</Link></li>
              <li><Link to="/travel-and-lodging" className="text-gray-600 hover:text-primary">Travel & Lodging</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-gray-500" />
                <a href="mailto:info@nibsre.org" className="text-gray-600 hover:text-primary">info@nibsre.org</a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-gray-500" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-primary">(555) 123-4567</a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">Portsmouth Convention Center, Portsmouth, NH</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Updates</h3>
            <p className="text-gray-600 mb-4">
              Stay informed about conference news and updates.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-white" />
              <Button type="submit">Sign Up</Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-10">
          <img src="https://via.placeholder.com/150x60?text=NAIPI" alt="NAIPI Logo" className="h-12 mb-4 md:mb-0" />
          <img src="https://via.placeholder.com/150x60?text=LSU" alt="LSU Logo" className="h-12 ml-0 md:ml-8" />
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center text-sm text-gray-600 max-w-3xl mx-auto">
            <p className="mb-4">
              The National IDeA Symposium of Biomedical Research Excellence (NIBSRE) is funded by the National Institute of General Medical Sciences (NIGMS) of the National Institutes of Health (NIH) under grant number R13GM142247.
            </p>
            <p className="mb-4">
              Content is solely the responsibility of the organizers and does not necessarily represent the official views of the National Institutes of Health.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p>&copy; {new Date().getFullYear()} NIBSRE | All Rights Reserved</p>
              <div className="flex gap-4">
                <a href="#" className="hover:underline text-gray-600">Privacy Policy</a>
                <a href="#" className="hover:underline text-gray-600">Terms of Use</a>
                <a href="#" className="hover:underline text-gray-600">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
