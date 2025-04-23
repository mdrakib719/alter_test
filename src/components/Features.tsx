import { Bot, Map, Navigation, ActivitySquare, CreditCard } from "lucide-react";
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";

export default function Features() {
  const features = [
    {
      title: "Real-time 2D & 3D mapping with LiDAR and RGB-depth cameras",
      icon: <Map className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.27.jpeg",
    },
    {
      title: "Autonomous navigation in rugged & hazardous terrain",
      icon: <Navigation className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.28%20(1).jpeg",
    },
    {
      title:
        "Object detection using YOLOv5 (trained on Hazmat & QR code datasets ",
      icon: <Bot className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.28.jpeg",
    },
    {
      title: "Thermal imaging & environmental sensing",
      icon: <ActivitySquare className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.49.47.jpeg",
    },
    {
      title: "6-track drive system for high stability",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.32.jpeg",
    },
    {
      title: "4 dynamic flippers with PID control for stair/obstacle traversal",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.31.jpeg",
    },
    {
      title: "UFactory xArm 6 (6 DoF) for manipulation tasks ",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.30%20(1).jpeg",
    },
    // {
    //   title: "6-track drive system for high stability",
    //   icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
    //   image: "https://images.unsplash.com/photo-1593790132854-fc1a5b39a5b3",
    // },
    {
      title: "Customized GUI for intuitive control",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.56.18.jpeg",
    },
    {
      title:
        "Base Station: centralized system for real-time monitoring, advanced control & seamless communication",
      icon: <CreditCard className="h-6 w-6 text-rescue-600" />,
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.42.29.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Project Features"
          subtitle="Explore the key technologies of our rover system."
        />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Project Names stacked top to bottom */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 px-6 py-3 w-full rounded-full border transition-colors text-left ${
                  index === activeIndex
                    ? "bg-rescue-600 text-white"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {React.cloneElement(feature.icon, {
                  className: "h-7 w-7 text-rescue-600",
                })}
                <span className="text-base font-medium">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Right: Changing Image Card */}
          <div className="w-full h-[200px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
            <img
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
