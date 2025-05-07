
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
          <div className="max-w-lg mx-auto">
            <p className="text-gray-700 mb-6">
              For questions about the conference, please contact:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> <a href="mailto:info@nibsre.org" className="text-primary hover:underline">info@nibsre.org</a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong><br />
              NIBSRE Conference Office<br />
              123 Research Way<br />
              Portsmouth, NH 03801
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
