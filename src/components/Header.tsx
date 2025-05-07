
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-primary">NIBSRE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-primary">
              ABOUT
            </Link>
            <Link to="/agenda" className="text-sm font-medium text-gray-700 hover:text-primary">
              AGENDA
            </Link>
            <Link to="/speakers" className="text-sm font-medium text-gray-700 hover:text-primary">
              SPEAKERS
            </Link>
            <Link to="/abstracts" className="text-sm font-medium text-gray-700 hover:text-primary">
              ABSTRACTS
            </Link>
            <Link to="/registration" className="text-sm font-medium text-gray-700 hover:text-primary">
              REGISTRATION
            </Link>
            <Link to="/travel-and-lodging" className="text-sm font-medium text-gray-700 hover:text-primary">
              TRAVEL & LODGING
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-primary">
              CONTACT US
            </Link>
            <Link to="/faq" className="text-sm font-medium text-gray-700 hover:text-primary">
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/agenda"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              AGENDA
            </Link>
            <Link
              to="/speakers"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              SPEAKERS
            </Link>
            <Link
              to="/abstracts"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABSTRACTS
            </Link>
            <Link
              to="/registration"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              REGISTRATION
            </Link>
            <Link
              to="/travel-and-lodging"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              TRAVEL & LODGING
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
