
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React.js",
    "TypeScript",
    "Node.js",
    "CSS/Tailwind",
    "UI/UX Design",
    "GraphQL",
    "Next.js",
    "Git",
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="col-span-2 animate-on-scroll">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-gray-700 mb-4">
                Hello! I'm a passionate web developer with a keen eye for creating beautiful, functional, and user-friendly websites. With over 5 years of experience in the tech industry, I've had the privilege of working with diverse clients and projects.
              </p>
              <p className="text-gray-700 mb-4">
                I started my journey as a self-taught developer, fueled by curiosity and a desire to bring ideas to life through code. Over the years, I've refined my skills across the full stack, specializing in modern frontend technologies.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or diving into a good book. I believe that diverse experiences fuel creativity in problem-solving.
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-6 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Education</h3>
                <div className="mb-3">
                  <h4 className="font-medium">Master's in Computer Science</h4>
                  <p className="text-gray-600 text-sm">Tech University, 2018-2020</p>
                </div>
                <div>
                  <h4 className="font-medium">Bachelor's in Software Engineering</h4>
                  <p className="text-gray-600 text-sm">Tech University, 2014-2018</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
