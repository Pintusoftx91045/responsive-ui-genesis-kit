
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, FileText, CheckCircle, Clock } from "lucide-react";

const Abstracts = () => {
  const importantDates = [
    { title: "Abstract Submission Opens", date: "January 15, 2023", icon: CalendarIcon, completed: true },
    { title: "Abstract Submission Deadline", date: "March 31, 2023", icon: Clock, completed: true },
    { title: "Abstract Review Process", date: "April 1-30, 2023", icon: FileText, completed: true },
    { title: "Notification of Acceptance", date: "May 10, 2023", icon: CheckCircle, completed: true },
  ];

  const abstractCategories = [
    "Genomics and Proteomics",
    "Molecular and Cellular Biology",
    "Neuroscience",
    "Infectious Diseases",
    "Cancer Research",
    "Computational Biology",
    "Clinical and Translational Research",
    "Environmental Health",
    "Immunology",
    "Drug Discovery and Development"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">Abstract Submission</h1>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-10">
              <CardContent className="pt-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-yellow-800">
                    <strong>Important:</strong> Abstract submission for the 2023 conference is now closed. The abstract portal will reopen for the 2024 conference in January.
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6">
                  The National IDeA Symposium of Biomedical Research Excellence (NIBSRE) invites abstract submissions for oral and poster presentations. This is an excellent opportunity to showcase your research and receive valuable feedback from peers and experts in the field.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`mt-1 mr-4 p-2 rounded-full ${item.completed ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-10">
              <CardHeader>
                <CardTitle>Abstract Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {abstractCategories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-10">
              <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Abstracts must be submitted in English.</li>
                  <li>Maximum word count: 300 words (excluding title, authors, and affiliations).</li>
                  <li>Include objectives, methods, results, and conclusion sections.</li>
                  <li>Up to 2 tables or figures may be included.</li>
                  <li>All abstracts will be peer-reviewed.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Please review the complete submission guidelines before preparing your abstract.
                </p>
                <div className="flex justify-center">
                  <Button className="mr-4">Download Guidelines</Button>
                  <Button variant="outline">View Sample Abstract</Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                Questions about abstract submission? Contact us at:
              </p>
              <a href="mailto:abstracts@nibsre.org" className="text-primary font-medium">abstracts@nibsre.org</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Abstracts;
