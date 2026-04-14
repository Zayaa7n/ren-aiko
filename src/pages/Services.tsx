import React, { useEffect, useState } from "react";
import { 
  Layout, 
  Code2, 
  Zap, 
  Layers,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/src/components/layout/Common";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", label: "All Services" },
  { id: "design", label: "Web Design" },
  { id: "dev", label: "Web Development" },
  { id: "automation", label: "Automation Solutions" },
  { id: "integration", label: "System Integrations" }
];

const projects = [
  { 
    title: "Lumina AI", 
    category: "automation", 
    categoryLabel: "Automation Solutions",
    image: "https://picsum.photos/seed/tech1/800/600",
    description: "Intelligent workflow automation using custom AI models.",
    tags: ["AI", "Python", "Workflow"]
  },
  { 
    title: "Aether OS", 
    category: "design", 
    categoryLabel: "Web Design",
    image: "https://picsum.photos/seed/tech2/800/600",
    description: "Next-gen user interface design for cloud-based operating systems.",
    tags: ["UI/UX", "Figma", "Visual Design"]
  },
  { 
    title: "Nexus Flow", 
    category: "integration", 
    categoryLabel: "System Integrations",
    image: "https://picsum.photos/seed/tech3/800/600",
    description: "Seamless API integration connecting legacy systems with modern cloud tools.",
    tags: ["API", "Middleware", "Cloud"]
  },
  { 
    title: "Zenith", 
    category: "dev", 
    categoryLabel: "Web Development",
    image: "https://picsum.photos/seed/tech4/800/600",
    description: "High-performance e-commerce engine built for global scale.",
    tags: ["React", "Node.js", "E-commerce"]
  },
  { 
    title: "Nova CRM", 
    category: "automation", 
    categoryLabel: "Automation Solutions",
    image: "https://picsum.photos/seed/tech5/800/600",
    description: "Automated lead management and customer relationship system.",
    tags: ["CRM", "Automation", "Sales"]
  },
  { 
    title: "Pulse Analytics", 
    category: "dev", 
    categoryLabel: "Web Development",
    image: "https://picsum.photos/seed/tech6/800/600",
    description: "Real-time data processing and visualization platform.",
    tags: ["Big Data", "React", "D3.js"]
  },
  { 
    title: "Stellar Brand", 
    category: "design", 
    categoryLabel: "Web Design",
    image: "https://picsum.photos/seed/tech7/800/600",
    description: "Minimalist brand identity and digital presence for a tech startup.",
    tags: ["Branding", "Minimalism", "Web"]
  },
  { 
    title: "OmniConnect", 
    category: "integration", 
    categoryLabel: "System Integrations",
    image: "https://picsum.photos/seed/tech8/800/600",
    description: "Unified communication bridge for cross-platform data synchronization.",
    tags: ["Webhooks", "Integration", "SaaS"]
  }
];

const ServicesHero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden pt-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <FadeIn>
          <Badge variant="secondary" className="mb-6 px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-white/5 border-white/10">
            Our Expertise
          </Badge>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Solutions Built <br /> for Impact.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Explore our specialized services through the lens of our work. 
            We build systems that connect intelligence with human-centric design.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        {/* Category Filter */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className="rounded-full px-6 transition-all duration-300"
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={`${project.title}-${activeCategory}`} delay={index * 0.05}>
              <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
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
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-widest border-white/10 text-primary">
                      {project.categoryLabel}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <FadeIn>
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category yet.</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

const ServicesCTA = () => {
  return (
    <section className="py-32 bg-primary/5">
      <div className="container px-6 mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            Need a custom solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether it's a high-end website or a complex automation workflow, 
            we have the expertise to bring your vision to life.
          </p>
          <Button size="lg" className="rounded-full px-12 h-16 text-lg group" asChild>
            <Link to="/#contact">
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </div>
  );
}
