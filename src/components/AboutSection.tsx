
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">9th</span> National IDeA Symposium of Biomedical Research Excellence (NIBSRE)
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6">
            <strong>June 17-21, 2023</strong> | <strong>Portsmouth Convention Center, Portsmouth, NH</strong>
          </p>

          <p className="text-gray-700 mb-6">
            We invite you to attend the 9th NIBSRE that will be held June 17-21, 2023, in Portsmouth New Hampshire. This is the first in-person meeting of the NIBSRE since 2019. The NIBSRE is the national meeting for the IDeA program funded by the National Institute of General Medical Sciences (NIGMS) of the National Institutes of Health (NIH) that will include all scientific research funded by the IDeA program including INBRE, COBRE, IDeA-CTR and STTR.
          </p>

          <p className="text-gray-700 mb-8">
            Expected meeting attendance includes representatives from all 23 IDeA States plus Puerto Rico. These include researchers, administrators and students.
          </p>

          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-primary mb-3">Download NIBSRE Conference Program and Final Program</h3>
              <a href="#" className="read-more inline-block">Download PDF</a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Questions about the Conference?</h3>
              <p className="text-gray-700">Email us at <a href="mailto:info@nibsre.org" className="text-primary hover:underline">info@nibsre.org</a></p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            This conference is supported by a grant from the National Institute of General Medical Sciences (NIGMS) of the National Institutes of Health (NIH) under grant number R13GM142247.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
