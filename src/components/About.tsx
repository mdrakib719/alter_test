import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader title="About the Mission" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <div className="rounded-lg  overflow-hidden">
              <img
                src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//21.jpg"
                alt="Underground exploration"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-lg text-gray-700  leading-relaxed">
              Our mission is to create a cutting-edge underground rover that can
              safely explore, map, and monitor hazardous environments such as
              manholes and underground tunnels. The rover is equipped with gas
              detection sensors, real-time 2D mapping, precision actuators, and
              a rugged design to withstand harsh conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This innovative solution aims to aid in infrastructure
              maintenance, emergency response, and scientific research by
              minimizing human risk and increasing data reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
