import { Shield, BookOpen, Users, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Assess Your Digital Safety",
    description: "Complete our comprehensive digital safety assessment to identify your current risk level and vulnerabilities in your online presence.",
    icon: Shield,
  },
  {
    number: "02",
    title: "Learn Essential Skills",
    description: "Access our curated digital literacy courses covering privacy settings, secure communication, and identifying online threats.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Implement Safety Tools",
    description: "Use our practical safety tools and resources to protect your digital identity, secure your accounts, and prevent harassment.",
    icon: Target,
  },
  {
    number: "04",
    title: "Join the Community",
    description: "Connect with a supportive network of women across Africa, share experiences, and access ongoing support and resources.",
    icon: Users,
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              How It <span className="text-secondary">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our simple 4-step process makes safeguarding your digital presence in seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple 4-step process makes safeguarding your digital presence in seconds.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Begin your journey to a safer digital experience today.
            </p>
            <Link to="/digital-literacy">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white hover:scale-105 transition-transform">
                Take Free Courses
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;