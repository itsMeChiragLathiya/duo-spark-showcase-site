
import React, { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code as ReactIcon, 
  FileCode as AngularIcon,
  Code as VueIcon,
  FileCode as NextJsIcon,
  Code as TypeScriptIcon
} from "lucide-react";

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

  const technologies = [
    { name: "ReactJS", icon: <ReactIcon className="w-12 h-12 text-blue-500" />, proficiency: 90, color: "bg-blue-500" },
    { name: "Angular", icon: <AngularIcon className="w-12 h-12 text-red-500" />, proficiency: 85, color: "bg-red-500" },
    { name: "VueJS", icon: <VueIcon className="w-12 h-12 text-green-500" />, proficiency: 80, color: "bg-green-500" },
    { name: "NextJS", icon: <NextJsIcon className="w-12 h-12 text-gray-800" />, proficiency: 88, color: "bg-gray-800" },
    { name: "TypeScript", icon: <TypeScriptIcon className="w-12 h-12 text-blue-700" />, proficiency: 85, color: "bg-blue-700" },
  ];

  return (
    <section id="technologies" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Technologies</h2>
        <p className="text-center text-gray-600 mb-10 animate-on-scroll">
          Here are the technologies I specialize in and work with regularly
        </p>
        
        <div className="animate-on-scroll mb-16" style={{ animationDelay: "0.3s" }}>
          <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {technologies.map((tech, index) => (
                <CarouselItem key={tech.name} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="mb-4">{tech.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                      <div className="w-full mb-2">
                        <Progress value={tech.proficiency} className={`h-2 ${tech.color}`} />
                      </div>
                      <div className="flex justify-between w-full">
                        <span className="text-sm text-gray-500">Proficiency</span>
                        <Badge variant="outline" className="font-mono">{tech.proficiency}%</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
