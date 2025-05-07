
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Agenda = () => {
  const days = [
    { id: "day1", label: "Day 1 - June 17", active: true },
    { id: "day2", label: "Day 2 - June 18" },
    { id: "day3", label: "Day 3 - June 19" },
    { id: "day4", label: "Day 4 - June 20" },
    { id: "day5", label: "Day 5 - June 21" },
  ];

  const agendaEvents = {
    day1: [
      { time: "08:00 - 09:00", title: "Registration & Breakfast", location: "Main Hall" },
      { time: "09:00 - 09:30", title: "Welcome Address", location: "Auditorium A", speaker: "Dr. J.R. Harrison, NIBSRE Chair" },
      { time: "09:30 - 10:30", title: "Keynote: Advances in Biomedical Research", location: "Auditorium A", speaker: "Dr. Tracy Schaller, Harvard Medical School" },
      { time: "10:30 - 11:00", title: "Coffee Break", location: "Networking Lounge" },
      { time: "11:00 - 12:30", title: "Panel: IDeA Program Impact", location: "Auditorium B" },
      { time: "12:30 - 14:00", title: "Lunch & Poster Session I", location: "Exhibition Hall" },
    ],
    day2: [
      { time: "08:30 - 09:00", title: "Breakfast", location: "Main Hall" },
      { time: "09:00 - 10:30", title: "Concurrent Sessions", location: "Various Rooms" },
      { time: "10:30 - 11:00", title: "Coffee Break", location: "Networking Lounge" },
      { time: "11:00 - 12:30", title: "Workshop: Grant Writing Strategies", location: "Conference Room C" },
      { time: "12:30 - 14:00", title: "Lunch & Networking", location: "Main Hall" },
    ],
    day3: [
      { time: "08:30 - 09:00", title: "Breakfast", location: "Main Hall" },
      { time: "09:00 - 10:30", title: "Research Presentations", location: "Auditorium A" },
      { time: "10:30 - 11:00", title: "Coffee Break", location: "Networking Lounge" },
      { time: "11:00 - 12:30", title: "Mentoring Session", location: "Conference Rooms" },
      { time: "12:30 - 14:00", title: "Lunch & Poster Session II", location: "Exhibition Hall" },
    ],
    day4: [
      { time: "08:30 - 09:00", title: "Breakfast", location: "Main Hall" },
      { time: "09:00 - 10:30", title: "Special Interest Groups", location: "Various Rooms" },
      { time: "10:30 - 11:00", title: "Coffee Break", location: "Networking Lounge" },
      { time: "11:00 - 12:30", title: "Technology Showcase", location: "Exhibition Hall" },
      { time: "12:30 - 14:00", title: "Lunch & Roundtables", location: "Main Hall" },
    ],
    day5: [
      { time: "08:30 - 09:00", title: "Breakfast", location: "Main Hall" },
      { time: "09:00 - 10:30", title: "Closing Keynote Address", location: "Auditorium A" },
      { time: "10:30 - 11:00", title: "Coffee Break", location: "Networking Lounge" },
      { time: "11:00 - 12:30", title: "Awards & Recognition", location: "Auditorium A" },
      { time: "12:30 - 14:00", title: "Farewell Lunch", location: "Main Hall" },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-8">Conference Agenda</h1>
          
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Join us for five days of engaging sessions, workshops, and networking opportunities. 
            The agenda below provides an overview of the conference schedule.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-gray-100">
                {days.map((day) => (
                  <TabsTrigger key={day.id} value={day.id} className="text-sm py-3">
                    {day.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(agendaEvents).map(([dayId, events]) => (
                <TabsContent key={dayId} value={dayId}>
                  <div className="space-y-6">
                    {events.map((event, index) => (
                      <Card key={index} className="p-4 border-l-4 border-primary hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center">
                          <div className="font-bold text-primary min-w-[140px]">{event.time}</div>
                          <div className="flex-grow">
                            <h3 className="font-medium text-lg">{event.title}</h3>
                            <p className="text-gray-600">{event.location}</p>
                            {event.speaker && (
                              <p className="text-sm text-gray-500 mt-1">Speaker: {event.speaker}</p>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-700 mb-2">Need more details about a specific session?</p>
            <a href="#" className="text-primary font-medium hover:underline">Download the full conference program (PDF)</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agenda;
