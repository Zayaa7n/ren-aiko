import React, { useEffect } from "react";
import { 
  ExternalLink,
  ArrowRight,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/src/components/layout/Common";
import { Link } from "react-router-dom";

const WorkHero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden pt-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <FadeIn>
          <Badge variant="secondary" className="mb-6 px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-white/5 border-white/10">
            Portfolio
          </Badge>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Showcasing Digital <br /> Excellence.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            A collection of example projects demonstrating our capabilities in web design, development, and intelligent automations.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const ProjectsGrid = () => {
  const projects = [
    { 
      title: "Lumina AI", 
      category: "Automation Platform", 
      image: "https://picsum.photos/seed/tech1/800/600",
      description: "An intelligent automation platform that streamlines enterprise workflows using custom AI models.",
      tags: ["AI", "Automation", "SaaS"]
    },
    { 
      title: "Aether OS", 
      category: "Web Interface", 
      image: "https://picsum.photos/seed/tech2/800/600",
      description: "A futuristic operating system interface designed for the next generation of web-based computing.",
      tags: ["UI/UX", "React", "Design"]
    },
    { 
      title: "Nexus Flow", 
      category: "SaaS Dashboard", 
      image: "https://picsum.photos/seed/tech3/800/600",
      description: "A comprehensive data visualization dashboard for monitoring complex network infrastructures.",
      tags: ["Dashboard", "Data", "Analytics"]
    },
    { 
      title: "Zenith", 
      category: "E-commerce Experience", 
      image: "https://picsum.photos/seed/tech4/800/600",
      description: "A premium e-commerce platform focused on high-end luxury goods and immersive shopping experiences.",
      tags: ["E-commerce", "Luxury", "Web"]
    },
    { 
      title: "Nova CRM", 
      category: "Business Tool", 
      image: "https://picsum.photos/seed/tech5/800/600",
      description: "A streamlined CRM solution for small to medium-sized businesses focusing on lead conversion.",
      tags: ["CRM", "Business", "Systems"]
    },
    { 
      title: "Pulse Analytics", 
      category: "Data Platform", 
      image: "https://picsum.photos/seed/tech6/800/600",
      description: "Real-time user behavior analytics platform providing deep insights into digital product performance.",
      tags: ["Analytics", "Real-time", "Big Data"]
    }
  ];

  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-widest border-white/10">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkCTA = () => {
  return (
    <section className="py-32 bg-primary/5">
      <div className="container px-6 mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            Have a specific vision <br /> in mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            These are just examples of what we can build. Let's discuss your unique requirements and create a custom solution for your business.
          </p>
          <Button size="lg" className="rounded-full px-12 h-16 text-lg group" asChild>
            <Link to="/#contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <WorkHero />
      <ProjectsGrid />
      <WorkCTA />
    </div>
  );
}
