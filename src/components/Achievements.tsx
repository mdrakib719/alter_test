
import { Trophy, FileText, Handshake, Settings } from "lucide-react";

import SectionHeader from "@/components/SectionHeader";

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="h-10 w-10 text-amber-500" />,
      title: "Successful Feasibility Test",
      description: "The team conducted successful tests on the rover at two different industries — the Construction of Chemical Warehouse in Tongi and Eastern Tubes Limited. This led to a Performance Certificate and praise for the rover's capabilities."
    },
    {
      icon: <Handshake className="h-10 w-10 text-rescue-600" />,
      title: "Partnership Opportunity",
      description: "After demonstrating the rover's features to industry officials, BRACU ALTER received interest for a partnership to develop an industrial-grade version of the Rescue Rover for chemical operations."
    },
    {
      icon: <FileText className="h-10 w-10 text-emerald-500" />,
      title: "ICT Ministry Support",
      description: "The team had a meeting with the Honorable Secretary of the ICT Ministry, who was impressed by the rover's capabilities and promised funding of 10 lakh BDT if they pass the Feasibility Test."
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-500" />,
      title: "Semi-Finals of Idea Innovation 5.0",
      description: "BRACU ALTER reached the semi-finals in the Idea Innovation 5.0 competition, showcasing the innovation and potential of their rover project."
    },
    {
      icon: <Settings className="h-10 w-10 text-indigo-500" />,
      title: "RoboCup 2024",
      description: "BRACU ALTER showcased their rover's capabilities with successful control systems and maneuvering, preparing for future enhancements."
    },
    {
      icon: <Settings className="h-10 w-10 text-purple-500" />,
      title: "RoboCup 2025",
      description: "BRACU ALTER showcased their rover's capabilities with successful control systems and maneuvering, preparing for future enhancements."
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader title="Achievements" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
