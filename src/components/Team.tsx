import SectionHeader from "@/components/SectionHeader";

export default function Team() {
  // Placeholder team members - replace with actual team data
  const teamMembers = [
    {
      name: "Muntasir Ahad",
      role: "Project Manager",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//Screenshot%202025-04-22%20at%2012.48.50%20AM.png",
    },
    {
      name: "Sahoria Ahmmad Durjoy",
      role: "Team Lead",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.36%20(1).jpeg",
    },
    {
      name: "Farha Hassan Priti",
      role: "Electronics And Communication Lead",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.37.jpeg",
    },
    {
      name: "Mehidi Hassan",
      role: "Control And AI Lead",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.36%20(2).jpeg",
    },
    {
      name: "Anamul Haque Akash",
      role: "Management Lead",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.38.jpeg",
    },
    {
      name: "Mahadia Mashkura",
      role: "Management Co-Lead",
      image:
        "https://i.ibb.co.com/q3fJF1sf/Whats-App-Image-2025-04-21-at-9-53-33-PM.jpg",
    },
    {
      name: "Raheeb Sadman",
      role: "Electronics Co-Lead",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.35.jpeg",
    },
    {
      name: "Jahedul Alam Mahe",
      role: "Communication Co-Lead",
      image:
        "https://i.ibb.co.com/1YFN8bvB/Whats-App-Image-2025-04-21-at-9-53-32-PM.jpg",
    },
    {
      name: "Safwan Sattar",
      role: "Control And AI Co-Lead",
      image:
        "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/alter//WhatsApp%20Image%202025-04-23%20at%2019.40.36.jpeg",
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
              className="text-center animate-fade-in w-[200px] "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 mx-auto border-2 border-rescue-100">
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
