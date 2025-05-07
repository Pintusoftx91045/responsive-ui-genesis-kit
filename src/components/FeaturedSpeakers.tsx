
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface SpeakerProps {
  name: string;
  title: string;
  institution: string;
  imageUrl: string;
  bio?: string;
}

const SpeakerCard: React.FC<SpeakerProps> = ({ name, title, institution, imageUrl, bio }) => {
  return (
    <Card className="speaker-card bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
      <div className="relative aspect-[3/4]">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="text-white">
            {bio && <p className="text-sm mb-3 line-clamp-4">{bio}</p>}
            <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
              View Profile <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-primary">{name}</h3>
        <p className="text-gray-700 text-sm mb-1">{title}</p>
        <p className="text-gray-600 text-sm">{institution}</p>
      </CardContent>
    </Card>
  );
};

const FeaturedSpeakers: React.FC = () => {
  const speakers = [
    {
      name: "Tracy Schaller, M.D.",
      title: "Professor, Department of Endocrinology",
      institution: "Harvard Medical School",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Schaller is a leading researcher in endocrinology with over 20 years of experience in diabetes research and treatment innovations."
    },
    {
      name: "Sarah Miller",
      title: "Associate Professor of Biochemistry",
      institution: "Yale University",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Miller's work on protein folding has revolutionized our understanding of neurodegenerative diseases and potential therapeutic approaches."
    },
    {
      name: "James Lee, Ph.D.",
      title: "Chair, Department of Microbiology",
      institution: "Stanford University",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "An expert in immunology and infectious diseases, Dr. Lee has led groundbreaking research on viral pathogenesis and vaccine development."
    },
    {
      name: "Elena Rodriguez, Ph.D.",
      title: "Director, Center for Genomic Medicine",
      institution: "Johns Hopkins University",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Rodriguez is pioneering research in CRISPR gene editing technologies with applications in treating genetic disorders."
    },
    {
      name: "Michael Chang, M.D.",
      title: "Professor of Neuroscience",
      institution: "University of California, San Francisco",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Chang's research focuses on brain plasticity and has led to novel approaches in treating neurological disorders and injuries."
    },
    {
      name: "Amara Washington",
      title: "Assistant Professor, Biostatistics",
      institution: "Duke University",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Washington specializes in developing statistical methods for analyzing large-scale genomic and clinical data."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-4">Featured Keynote Speakers</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our distinguished speakers represent cutting-edge research across various biomedical disciplines,
          bringing valuable insights and expertise to NIBSRE.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              title={speaker.title}
              institution={speaker.institution}
              imageUrl={speaker.imageUrl}
              bio={speaker.bio}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="mx-auto">
            View All Speakers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
