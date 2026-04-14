import React, { useEffect } from "react";
import { 
  Users, 
  Target, 
  Lightbulb, 
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/src/components/layout/Common";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden pt-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <FadeIn>
          <Badge variant="secondary" className="mb-6 px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-white/5 border-white/10">
            About Ren Aiko
          </Badge>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Build. Connect. Automate.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Ren Aiko is a modern web and automation studio focused on creating systems that don’t just look good — but actually work for your business.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Our Philosophy</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">“Ren”</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Means to connect, link, and integrate — the foundation of seamless digital systems.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">“Aiko”</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Represents intelligence with a human touch — combining technology with thoughtful design.
                </p>
              </div>
              <p className="text-xl font-medium pt-4 border-t border-white/10">
                Together, Ren Aiko stands for <span className="text-white">connected intelligence</span> — building smart, scalable solutions that simplify work and support growth.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/20 to-transparent p-1">
              <div className="w-full h-full bg-background rounded-[calc(1.5rem-1px)] flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center animate-pulse">
                    <Target className="w-12 h-12 text-primary" />
                  </div>
                  <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center">
                    <Users className="w-12 h-12 text-white/50" />
                  </div>
                  <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-12 h-12 text-white/50" />
                  </div>
                  <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center animate-pulse delay-700">
                    <Sparkles className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  const items = [
    {
      title: "Website Design & Development",
      description: "Clean, modern, and high-performing websites tailored to your brand."
    },
    {
      title: "Automation Solutions",
      description: "From lead capture to workflows, we build systems that save time and reduce repetitive work."
    },
    {
      title: "System Integration",
      description: "Connecting tools, APIs, and platforms into one smooth ecosystem."
    }
  ];

  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg">We help businesses move beyond static websites and manual processes.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="bg-white/5 border-white/10 h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-2xl font-bold tracking-tight">
              Our approach is simple: <br />
              <span className="text-primary italic">Build once. Automate forever.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    {
      name: "Mohmed Rehan M K",
      role: "Design & Aesthetics",
      description: "Brings strong visual aesthetics and design clarity, ensuring every project looks clean, modern, and aligned with brand identity."
    },
    {
      name: "Muhammed Zayan",
      role: "Automation Architect",
      description: "Focused on building and refining automation workflows, continuously improving system efficiency."
    },
    {
      name: "Ron Jais",
      role: "Full-stack Developer",
      description: "Specializes in full-stack web development, turning ideas into functional and scalable applications."
    },
    {
      name: "Emmanuel Martin",
      role: "Operations & Coordination",
      description: "Handles operations and client coordination, ensuring smooth execution and communication across projects."
    }
  ];

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">The Team Behind Ren Aiko</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A small, focused team with complementary strengths combining design, development, and systems thinking.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="bg-white/5 border-white/10 h-full hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Badge className="w-fit mb-2">{member.role}</Badge>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const points = [
    "We don’t just build websites — we build systems that work",
    "We focus on automation and efficiency, not just aesthetics",
    "We keep things simple, scalable, and effective",
    "We care about long-term value, not quick fixes"
  ];

  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Why Ren Aiko</h2>
            <ul className="space-y-6">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="left">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To help businesses operate smarter by combining <span className="text-white font-medium">web, automation, and intelligent systems</span> into one seamless experience.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const AboutCTA = () => {
  return (
    <section className="py-32 bg-primary/5">
      <div className="container px-6 mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Let’s Build Something <br /> That Works
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you need a website, an automated workflow, or a complete system — Ren Aiko is here to help you build it right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-12 h-16 text-lg group" asChild>
              <Link to="/#contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-primary font-bold tracking-widest uppercase text-sm">Your systems, simplified.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <AboutHero />
      <Philosophy />
      <WhatWeDo />
      <Team />
      <WhyUs />
      <AboutCTA />
    </div>
  );
}
