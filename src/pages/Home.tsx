import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/CustomCards";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Shield,
  BookOpen,
  Users,
  Lock,
  Globe,
  Award,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy Protection",
    description: "Learn how to secure your personal data and maintain privacy across all digital platforms."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Communication",
    description: "Master the art of encrypted messaging and safe social media interaction."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Digital Footprint",
    description: "Understand and manage your online presence to prevent unwanted tracking."
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Expert Resources",
    description: "Access a comprehensive library of guides, tutorials, and safety checklists."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Support",
    description: "Join a supportive network of women sharing experiences and advice."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Certification",
    description: "Earn certificates as you complete modules and master digital safety skills."
  }
];

const steps = [
  {
    number: "01",
    title: "Assess Your Risk",
    description: "Take our comprehensive safety assessment to identify your vulnerabilities."
  },
  {
    number: "02",
    title: "Personalized Plan",
    description: "Get a custom learning path tailored to your specific needs and risk profile."
  },
  {
    number: "03",
    title: "Learn & Practice",
    description: "Complete interactive modules and use our tools to secure your digital life."
  },
  {
    number: "04",
    title: "Stay Protected",
    description: "Join our community and receive ongoing updates on emerging threats."
  }
];

const testimonials = [
  {
    name: "Amara",
    role: "Small Business Owner",
    content: "Safe Digital Africa helped me secure my business accounts. I feel so much more confident online now.",
    location: "Lagos, Nigeria"
  },
  {
    name: "Sarah",
    role: "Journalist",
    content: "As a journalist, digital privacy is crucial. This platform gave me the tools I needed to protect my sources.",
    location: "Nairobi, Kenya"
  },
  {
    name: "Zainab",
    role: "Student",
    content: "The courses are easy to understand and very practical. I've taught my friends how to stay safe too!",
    location: "Accra, Ghana"
  },
  {
    name: "Grace",
    role: "Teacher",
    content: "I use these resources to teach my students about online safety. It's an invaluable tool for educators.",
    location: "Kampala, Uganda"
  }
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-display mb-4">
              Your Journey to Digital Safety
            </h2>
            <p className="text-lg text-muted-foreground">
              We've simplified digital security into four easy steps. Start your journey today.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative p-6 rounded-2xl bg-muted/30 border border-border hover:border-primary/50 transition-colors group">
                <div className="text-6xl font-bold text-primary/10 mb-4 font-display group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-muted/40 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-geometric opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent" />
        <div className="container relative px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-display mb-4">
              Why Choose Safe Digital Africa?
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              We provide a holistic approach to digital safety, combining expert knowledge with community support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/community.png"
            alt="Community of women"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-display">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Connect with thousands of women across Africa who are taking control of their digital lives. Share experiences, ask questions, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Facebook Group
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                  Contact Us
                </Button>
              </Link>
              <Link to="/contact">
                {/* Responsive Partner Button: Hidden on small mobile, visible on larger screens, or stacked */}
                <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 w-full sm:w-auto">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-display mb-4">
              Stories of Empowerment
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from women who have transformed their digital safety with our platform.
              <br />
              <span className="text-sm italic opacity-80">*Names have been changed to protect user privacy.</span>
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col">
                      <div className="flex-grow mb-6">
                        <p className="text-muted-foreground italic leading-relaxed">"{testimonial.content}"</p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;