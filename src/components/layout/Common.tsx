import { motion } from "motion/react";
import React from "react";
import { 
  Github, 
  Linkedin, 
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";


interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  key?: React.Key;
}

export const FadeIn = ({ children, delay = 0, direction = "up" }: FadeInProps) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/site-assets/logo.png"
            alt="Logo"
            className="h-45 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
          {/*<Link to="/work" className="hover:text-foreground transition-colors">Work</Link>*/}
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Button variant="outline" className="rounded-full px-6" asChild>
            <Link to="/get-in-touch">Get in Touch</Link>
                    </Button>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/site-assets/logo.png"
                alt="Logo"
                className="h-50 w-auto"
              />
            </div>
            <p className="text-muted-foreground max-w-sm mb-8">
              A digital agency focused on high-end web design, development, and intelligent automations.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/renxaiko" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <img
                  src="/site-assets/twitterX.png"
                  alt="Logo"
                  className="h-4 w-auto"
                />
              </a>
              <a href="https://github.com/Ren-Aiko" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/ren-aiko/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/renxaiko/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">Web Design</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Development</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Automations</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Agency</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              {/*<li><Link to="/work" className="hover:text-foreground transition-colors">Our Work</Link></li>*/}
              <li><Link to="/#services" className="hover:text-foreground transition-colors">Process</Link></li>
              <li><Link to="/#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-medium">
          <p>© 2026 Ren Aiko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
