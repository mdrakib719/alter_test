import { CheckCircle } from "lucide-react";

import SectionHeader from "@/components/SectionHeader";

export default function Goals() {
  const goals = [
    {
      title: "Pre and Post-Disaster Incident Assessment",
      description:
        " Our rover is designed to conduct comprehensive assessments before and after disasters. It maps affected areas, identifies structural damages, and provides real-time data to support rescue planning and recovery. This ensures faster response and efficient resource allocation during critical situations",
    },
    {
      title: "Reliable Communication",
      description:
        "Wireless rescue rover communication system designed to ensure reliable data transmission in hazardous environments.",
    },
    {
      title: "Pioneering Robotics Industry",
      description:
        "Aiming to establish a pioneering robotics industry in Bangladesh for long-term technological growth, innovation, and impactful contributions to national safety.",
    },
    {
      title: "AI-Powered Intelligence",
      description:
        "Future integration of AI to enhance autonomous decision-making and environment analysis.",
    },
  ];

  return (
    <section id="goals" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Core Goals"
          subtitle="Empowering national resilience with robotic innovation, strategic safety, and long-term industrial growth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-rescue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
