import { useEffect, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";

export default function Gallery() {
  const scrollRef = useRef(null);

  const images = [
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2020.39.35%20(1).jpeg",
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2020.39.35.jpeg",
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2020.41.07%20(1).jpeg",
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2020.41.07.jpeg",
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2020.43.24.jpeg",
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//34.jpg",
  ];

  // Duplicate once for seamless loop illusion
  const allImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 1;
    let frameId;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        // Smoothly reset to start of first image group
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Photo Gallery"
          subtitle="Glimpse into the build, testing, and field moments of our rover journey."
        />
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide py-4"
          style={{ scrollBehavior: "auto", scrollSnapType: "none" }}
        >
          {allImages.map((image, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] h-60 relative rounded-lg overflow-hidden shadow-md flex-shrink-0"
            >
              <img
                src={image}
                alt={`Gallery image ${(index % images.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
