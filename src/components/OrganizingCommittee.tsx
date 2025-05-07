
import React from 'react';

interface CommitteeMemberProps {
  name: string;
  title: string;
  institution: string;
  imageUrl: string;
}

const CommitteeMemberCard: React.FC<CommitteeMemberProps> = ({ name, title, institution, imageUrl }) => {
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

const OrganizingCommittee: React.FC = () => {
  const members = [
    {
      name: "Dr. J.R. Harrison, Ph.D.",
      title: "Professor of Biochemistry",
      institution: "University of Nebraska Medical Center",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bob Smith, Ph.D., M.S.",
      title: "Director of Research",
      institution: "Montana State University",
      imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Elisa Garcia",
      title: "Associate Professor",
      institution: "University of New Mexico",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Linda Chen, M.D.",
      title: "Clinical Research Director",
      institution: "University of Hawaii",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Scott Davis, Ph.D.",
      title: "Professor of Pathology",
      institution: "Louisiana State University",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Nancy Anderson, M.S.",
      title: "Research Coordinator",
      institution: "University of Arkansas",
      imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Susan Everly-Moore",
      title: "Associate Dean of Research",
      institution: "West Virginia University",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dr. Barbara Mathews",
      title: "Professor of Microbiology",
      institution: "University of Alaska",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Alex J. Stevens, Ph.D.",
      title: "Director of Core Facilities",
      institution: "University of Vermont",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Meet The 2026 Organizing Committee</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <CommitteeMemberCard
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

export default OrganizingCommittee;
