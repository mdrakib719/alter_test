import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-rescue-600  block">BRACU ALTER</span>
              <span className="text-lg md:text-2xl lg:text-2xl text-gray-800 block mt-2">
                An Autonomous Locomotion Technology for Emergency Rescue
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Pioneering robotic solutions for hazardous environments with
              cutting-edge technology for safer exploration and rescue
              operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="bg-rescue-600 hover:bg-rescue-700 text-white"
              >
                <a href="#about">Learn More</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-rescue-600 text-rescue-600 hover:bg-rescue-50"
              >
                <a href="#features">See Features</a>
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="aspect-video relative w-full max-w-xxl mx-auto rounded-xl overflow-hidden shadow-xxl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Video%202025-04-23%20at%2019.49.47.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
