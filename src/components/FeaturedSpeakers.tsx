
import React from 'react';

interface SpeakerProps {
  name: string;
  title: string;
  institution: string;
  imageUrl: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, title, institution, imageUrl }) => {
  return (
    <div className="speaker-card bg-white rounded-md overflow-hidden shadow-md">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-primary">{name}</h3>
        <p className="text-gray-700 text-sm mb-2">{title}</p>
        <p className="text-gray-600 text-sm mb-4">{institution}</p>
        <a href="#" className="read-more text-sm">Read More...</a>
      </div>
    </div>
  );
};

const FeaturedSpeakers: React.FC = () => {
  const speakers = [
    {
      name: "Tracy Schaller, M.D.",
      title: "Professor, Department of Endocrinology",
      institution: "Harvard Medical School",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Sarah Miller",
      title: "Associate Professor of Biochemistry",
      institution: "Yale University",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "James Lee, Ph.D.",
      title: "Chair, Department of Microbiology",
      institution: "Stanford University",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Featured Keynote Speakers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              title={speaker.title}
              institution={speaker.institution}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
