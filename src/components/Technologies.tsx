
import React, { useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { 
  React as ReactIcon, 
  Angular as AngularIcon,
  Globe as VueIcon,
  Server as NextIcon 
} from "lucide-react";

const technologies = [
  { 
    name: "React", 
    icon: <ReactIcon className="h-12 w-12 mb-4" />, 
    color: "bg-[#61DAFB]",
    textColor: "text-black" 
  },
  { 
    name: "Vue.js", 
    icon: <VueIcon className="h-12 w-12 mb-4" />, 
    color: "bg-[#4FC08D]",
    textColor: "text-white"  
  },
  { 
    name: "Angular", 
    icon: <AngularIcon className="h-12 w-12 mb-4" />, 
    color: "bg-[#DD0031]",
    textColor: "text-white"  
  },
  { 
    name: "Next.js", 
    icon: <NextIcon className="h-12 w-12 mb-4" />, 
    color: "bg-[#000000]",
    textColor: "text-white" 
  },
  { 
    name: "TypeScript", 
    icon: <span className="text-[#3178C6] text-4xl font-bold mb-4">TS</span>, 
    color: "bg-[#3178C6]",
    textColor: "text-white" 
  },
  { 
    name: "JavaScript", 
    icon: <span className="text-[#F7DF1E] text-4xl font-bold mb-4">JS</span>, 
    color: "bg-[#F7DF1E]",
    textColor: "text-black" 
  },
  { 
    name: "Node.js", 
    icon: <span className="text-[#339933] text-4xl font-bold mb-4">Node</span>, 
    color: "bg-[#339933]",
    textColor: "text-white" 
  },
  { 
    name: "TailwindCSS", 
    icon: <span className="text-[#06B6D4] text-4xl font-bold mb-4">TW</span>, 
    color: "bg-[#06B6D4]",
    textColor: "text-white" 
  }
];

const Technologies = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">My Tech Stack</h2>
        
        <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {technologies.map((tech, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className={`${tech.color} ${tech.textColor} rounded-lg p-6 h-52 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}>
                    {tech.icon}
                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                    <div className="mt-2">
                      <Badge variant="outline" className="bg-white/20 backdrop-blur-sm">
                        {index % 3 === 0 ? "Advanced" : index % 3 === 1 ? "Intermediate" : "Proficient"}
                      </Badge>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static transform-none mx-2" />
              <CarouselNext className="relative static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
