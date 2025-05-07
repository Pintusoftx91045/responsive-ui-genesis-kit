
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, Download, MapPin, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: CalendarDays,
      title: "5 Days",
      description: "Of intensive scientific exchange"
    },
    {
      icon: Users,
      title: "500+ Attendees",
      description: "From 24 IDeA states and territories"
    },
    {
      icon: MapPin,
      title: "Portsmouth, NH",
      description: "At the beautiful seaside conference center"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-primary">9th</span> National IDeA Symposium of Biomedical Research Excellence
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-xl font-medium text-gray-700 max-w-3xl mx-auto">
            Advancing Biomedical Research Excellence Through Collaboration and Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-5">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="md:flex md:items-start">
            <div className="md:flex-1">
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong className="text-primary">June 17-21, 2023</strong> | <strong>Portsmouth Convention Center, Portsmouth, NH</strong>
              </p>
              
              <p className="text-gray-700 mb-6">
                We invite you to attend the 9th NIBSRE that will be held June 17-21, 2023, in Portsmouth New Hampshire. This is the first in-person meeting of the NIBSRE since 2019. The NIBSRE is the national meeting for the IDeA program funded by the National Institute of General Medical Sciences (NIGMS) of the National Institutes of Health (NIH) that will include all scientific research funded by the IDeA program including INBRE, COBRE, IDeA-CTR and STTR.
              </p>

              <p className="text-gray-700 mb-8">
                Expected meeting attendance includes representatives from all 23 IDeA States plus Puerto Rico. These include researchers, administrators and students engaged in cutting-edge biomedical research and education.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between mb-8 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Conference Program
              </h3>
              <Button variant="outline" className="read-more">Download PDF</Button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Questions about the Conference?</h3>
              <p className="text-gray-700">Email us at <a href="mailto:info@nibsre.org" className="text-primary hover:underline">info@nibsre.org</a></p>
            </div>
          </div>

          <div className="bg-primary/5 p-4 rounded border-l-4 border-primary">
            <p className="text-sm text-gray-600">
              This conference is supported by a grant from the National Institute of General Medical Sciences (NIGMS) of the National Institutes of Health (NIH) under grant number R13GM142247.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
