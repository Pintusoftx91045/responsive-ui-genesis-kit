
import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  institution: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, title, institution, imageUrl }) => {
  return (
    <div className="speaker-card bg-white rounded-md overflow-hidden shadow-md">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h3 className="font-bold text-md text-primary">{name}</h3>
        <p className="text-gray-700 text-xs mb-1">{title}</p>
        <p className="text-gray-600 text-xs mb-3">{institution}</p>
        <a href="#" className="read-more text-xs">Read More...</a>
      </div>
    </div>
  );
};

const SupportTeam: React.FC = () => {
  const members = [
    {
      name: "Maria Campbell",
      title: "Communications Director",
      institution: "University of Nebraska",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ethan Davis",
      title: "Technical Support Manager",
      institution: "Oklahoma State University",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Olivia Blake",
      title: "Event Coordinator",
      institution: "University of Kansas",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "William Lewis",
      title: "Administrative Assistant",
      institution: "Mississippi State University",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Meet the Organizing Support Team (NIBSRE2026)</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              title={member.title}
              institution={member.institution}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportTeam;
