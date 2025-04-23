import SectionHeader from "@/components/SectionHeader";

export default function Team() {
  // Placeholder team members - replace with actual team data
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Team Lead",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.48.50%20AM.png",
    },
    {
      name: "Team Member 2",
      role: "Robotics Engineer",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.55.42%20AM.png",
    },
    {
      name: "Team Member 3",
      role: "Software Developer",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.36%20(1).jpeg",
    },
    {
      name: "Team Member 4",
      role: "Electronics Engineer",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.37.jpeg",
    },
    {
      name: "Team Member 5",
      role: "Mechanical Engineer",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.36%20(2).jpeg",
    },
    {
      name: "Team Member 6",
      role: "Research Associate",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.38.jpeg",
    },
    {
      name: "Team Member 7",
      role: "Project Manager",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.39.jpeg",
    },
    {
      name: "Team Member 8",
      role: "Faculty Advisor",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.37%20(1).jpeg",
    },
    {
      name: "Team Member 8",
      role: "Faculty Advisor",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.36.jpeg",
    },
    {
      name: "Team Member 8",
      role: "Faculty Advisor",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.35.jpeg",
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Team Members"
          subtitle="Meet the talented individuals behind the BRACU ALTER project."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 mx-auto border-2 border-rescue-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
