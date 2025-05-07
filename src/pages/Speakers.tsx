
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Speakers = () => {
  const categories = [
    { id: "all", label: "All Speakers", active: true },
    { id: "keynote", label: "Keynote Speakers" },
    { id: "panel", label: "Panel Moderators" },
    { id: "workshop", label: "Workshop Leaders" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">Conference Speakers</h1>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-center text-gray-600 mb-8">
              Learn from leading experts in biomedical research. Our diverse speakers represent 
              institutions across the nation and bring valuable insights from their fields of expertise.
            </p>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input 
                type="search"
                placeholder="Search speakers by name, institution, or topic..."
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="mb-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-gray-100">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm py-3">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <FeaturedSpeakers />
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Interested in Speaking at NIBSRE?</h3>
            <p className="text-gray-700 mb-6">
              We're always looking for experts to share their research and insights. 
              Applications for the 2024 conference will open in January.
            </p>
            <Button>Nominate a Speaker</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Speakers;
