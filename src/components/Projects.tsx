
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "An interactive weather application that provides real-time weather data, forecasts, and interactive maps using the OpenWeather API and MapBox.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Weather API", "ChartJS"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and deadlines. Built with React and Firebase, featuring real-time updates and collaboration features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Firebase", "Material UI"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Recipe Finder",
      description:
        "A web application that allows users to search for recipes based on ingredients they have at home, with filtering options for dietary restrictions.",
      image: "https://images.unsplash.com/photo-1495546968767-f0573cca821e?q=80&w=1000&auto=format&fit=crop",
      tags: ["JavaScript", "API Integration", "Responsive Design"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-heading">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-6 flex justify-between">
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                </Button>
                <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
