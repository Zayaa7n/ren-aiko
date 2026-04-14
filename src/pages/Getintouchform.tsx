import React, { useState, useEffect } from "react";
import { Mail, Phone, User, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/src/components/layout/Common";

const GetInTouchHero = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden pt-40">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      <div className="container relative z-10 px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Get In Touch
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or need automation for your business? Let’s talk.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", form);

    // TODO: integrate API / email service
  };

  return (
    <section className="py-24">
      <div className="container px-6 mx-auto max-w-4xl">
        <FadeIn>
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl">Start a Conversation</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="pl-10 h-12"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className="pl-10 h-12"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="pl-10 h-12"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className="pl-10 pt-3 min-h-[140px]"
                    required
                  />
                </div>

                <Button size="lg" className="w-full h-14 text-lg group">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
            <p className="text-muted-foreground">
              Prefer direct communication? Reach us here.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FadeIn delay={0.1}>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <Mail className="mx-auto mb-4 w-6 h-6 text-primary" />
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">hello@renaiko.com</p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <Phone className="mx-auto mb-4 w-6 h-6 text-primary" />
                <p className="text-muted-foreground">Phone</p>
                <p className="font-medium">+91 98765 43210</p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <MessageSquare className="mx-auto mb-4 w-6 h-6 text-primary" />
                <p className="text-muted-foreground">Response Time</p>
                <p className="font-medium">Within 24 hours</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default function GetInTouchForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <GetInTouchHero />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}