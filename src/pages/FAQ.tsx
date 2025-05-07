
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h1>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2 text-primary">When and where is the conference?</h2>
              <p className="text-gray-700">The conference will take place from June 17-21, 2023 at the Portsmouth Convention Center in Portsmouth, New Hampshire.</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2 text-primary">How do I register for the conference?</h2>
              <p className="text-gray-700">Registration details will be posted soon. Please check back for updates.</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2 text-primary">Is there a deadline for abstract submissions?</h2>
              <p className="text-gray-700">Yes, abstract submissions are due by March 15, 2023. More details will be available on the Abstracts page.</p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2 text-primary">Are there discounted hotel rates for conference attendees?</h2>
              <p className="text-gray-700">Yes, we have negotiated special rates at several hotels near the conference venue. Details will be posted on the Travel & Lodging page.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
