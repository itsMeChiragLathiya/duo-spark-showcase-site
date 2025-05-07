
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Github, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Let's Work Together
            </h3>
            <p className="text-gray-600 mb-8">
              Have a project in mind or want to explore possibilities? I'd love to hear from you! Fill out the form or reach me through the contact information provided.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:your.email@example.com" className="text-gray-800 hover:text-primary">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-full">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-800 hover:text-secondary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-accent bg-opacity-10 p-3 rounded-full">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-800">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <p className="text-gray-600 mb-4">Find me on</p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#333] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <Card className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 w-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
