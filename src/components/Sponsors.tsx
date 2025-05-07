
import React from 'react';

interface SponsorCategoryProps {
  title: string;
  sponsors: { name: string; logo: string }[];
}

const SponsorCategory: React.FC<SponsorCategoryProps> = ({ title, sponsors }) => {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-medium text-center mb-6">{title}</h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className="max-h-16 max-w-[180px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Sponsors: React.FC = () => {
  const platinumSponsors = [
    { name: "Picstar", logo: "https://via.placeholder.com/150x60?text=Picstar" },
    { name: "LSU", logo: "https://via.placeholder.com/150x60?text=LSU" },
    { name: "University Medical Center", logo: "https://via.placeholder.com/150x60?text=University+Medical" },
    { name: "Research Institute", logo: "https://via.placeholder.com/150x60?text=Research+Institute" },
    { name: "UA", logo: "https://via.placeholder.com/150x60?text=UA" },
  ];

  const goldSponsors = [
    { name: "University of New Mexico", logo: "https://via.placeholder.com/150x60?text=UNM" },
    { name: "State University", logo: "https://via.placeholder.com/150x60?text=State+University" },
    { name: "Auburn", logo: "https://via.placeholder.com/150x60?text=Auburn" },
  ];

  const silverSponsors = [
    { name: "ODIN", logo: "https://via.placeholder.com/150x60?text=ODIN" },
    { name: "Research Center", logo: "https://via.placeholder.com/150x60?text=Research+Center" }
  ];

  const exhibitors = [
    { name: "Tech Labs", logo: "https://via.placeholder.com/150x60?text=TechLabs" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">Sponsors</h2>
        
        <SponsorCategory title="Platinum" sponsors={platinumSponsors} />
        <SponsorCategory title="Gold" sponsors={goldSponsors} />
        <SponsorCategory title="Silver" sponsors={silverSponsors} />
        <SponsorCategory title="Exhibitor" sponsors={exhibitors} />
      </div>
    </section>
  );
};

export default Sponsors;
