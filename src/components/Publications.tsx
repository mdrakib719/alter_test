import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import SectionHeader from "@/components/SectionHeader";

export default function Publications() {
  const publications = [
    {
      title:
        "Wireless event-based kill-switch for safe and autonomous UAS operation",
      authors: "J. Uddin, M. Ahad and A. Hil Kafi",
      conference:
        "2023 International Conference on Electronics, Information, and Communication (ICEIC), Singapore, 2023",
      link: "https://ieeexplore.ieee.org/document/10049917",
    },
    {
      title: "Rover Circuit Protection: A Holistic and Comprehensive Approach",
      authors: "M. Ahad, M. Hassan, S. A. Durjoy and A. H. Kafi",
      conference:
        "TENCON 2023 - 2023 IEEE Region 10 Conference (TENCON), Chiang Mai, Thailand, 2023",
      link: "https://ieeexplore.ieee.org/document/10322442",
    },
  ];

  return (
    <section id="publications" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Publications"
          subtitle="Explore our published research and findings from the rover project."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {pub.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {pub.authors}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                <p>{pub.conference}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-0 text-rescue-600 hover:text-rescue-700 font-medium flex items-center gap-1"
                >
                  <Button variant="link" className="p-0">
                    Read Full Paper <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
