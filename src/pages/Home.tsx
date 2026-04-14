import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef, useEffect } from "react";
import { 
  Layout, 
  Code2, 
  Zap, 
  ArrowRight, 
  ChevronRight,
  Globe,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/src/components/layout/Common";
import { useLocation, Link } from "react-router-dom";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
      </motion.div>

      <div className="container relative z-10 px-6 text-center">
        <FadeIn>
          <Badge variant="secondary" className="mb-6 px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-white/5 border-white/10">
            Digital Excellence Redefined
          </Badge>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Crafting Digital <br /> Futures.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Ren Aiko is a boutique agency specializing in high-performance web design, 
            bespoke development, and intelligent automations.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-base group" asChild>
              <a href="#contact">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-base" asChild>
              <a href="#work">View Our Work</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Immersive UI/UX experiences that captivate and convert. We focus on aesthetic precision and functional clarity.",
      icon: Layout,
      tags: ["UI/UX", "Branding", "Prototyping"]
    },
    {
      title: "Development",
      description: "High-performance, scalable web applications built with modern stacks. Clean code, fast loads, zero compromises.",
      icon: Code2,
      tags: ["React", "Next.js", "Full-stack"]
    },
    {
      title: "Automations",
      description: "Intelligent workflows that save time and eliminate human error. We build the systems that run your business.",
      icon: Zap,
      tags: ["AI Integration", "Workflow", "API"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <FadeIn direction="right">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine creative vision with technical rigor to deliver 
                solutions that drive real business growth.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="left">
            <div className="flex gap-4 mb-2">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary" />
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/[0.08] transition-all duration-500 group h-full">
                <CardHeader className="pt-8 px-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-transparent border-white/10 text-[10px] uppercase tracking-wider">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    { title: "Lumina AI", category: "Automation Platform", image: "https://picsum.photos/seed/tech1/800/600" },
    { title: "Aether OS", category: "Web Interface", image: "https://picsum.photos/seed/tech2/800/600" },
    { title: "Nexus Flow", category: "SaaS Dashboard", image: "https://picsum.photos/seed/tech3/800/600" },
    { title: "Zenith", category: "E-commerce Experience", image: "https://picsum.photos/seed/tech4/800/600" }
  ];

  return (
    <section id="work" className="py-32 bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Selected Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the digital ecosystems we've built. These examples showcase our design and technical capabilities.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1} direction={index % 2 === 0 ? "right" : "left"}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Button variant="secondary" className="rounded-full">View Case Study</Button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground uppercase text-xs tracking-widest font-medium">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="rounded-full px-12 group" asChild>
              <Link to="/work">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container px-6 mx-auto text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Ready to automate <br /> your growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's build something exceptional together. Our team is ready to 
              transform your vision into a high-performance digital reality.
            </p>
            <Button size="lg" className="rounded-full px-12 h-16 text-lg group" asChild>
              <a href="mailto:hello@renaiko.com">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Services />
      <Work />
      <CTA />
    </>
  );
}
