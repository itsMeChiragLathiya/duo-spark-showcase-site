
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-on-scroll">
              Hey, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              A passionate web developer creating beautiful and functional experiences
            </p>
            <div className="flex flex-wrap gap-4 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full">
                View Projects
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-full">
                About Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-primary">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white rounded-full p-4 shadow-lg">
                <span className="font-bold">10+</span> Years Experience
              </div>
            </div>
          </div>
        </div>
        
        {/* Fixed scroll down arrow with improved styling */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#about" 
            className="bg-white hover:bg-gray-100 p-4 rounded-full shadow-md flex items-center justify-center transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="text-primary" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
