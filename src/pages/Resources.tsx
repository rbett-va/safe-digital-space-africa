import { useState } from "react";
import { Phone, Mail, Download, ExternalLink, MapPin, Heart, Search, FileText, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const hotlines = [
  {
    country: "Kenya",
    name: "Gender Violence Recovery Centre",
    phone: "+254 709 558 000",
    available: "24/7",
  },
  {
    country: "South Africa",
    name: "GBV Command Centre",
    phone: "0800 428 428",
    available: "24/7",
  },
  {
    country: "Nigeria",
    name: "Domestic Violence Hotline",
    phone: "0800 033 3333",
    available: "24/7",
  },
  {
    country: "Ghana",
    name: "Domestic Violence Support",
    phone: "0800 800 800",
    available: "24/7",
  },
];

const allResources = [
  {
    id: 1,
    title: "Digital Safety Guide 2024",
    description: "Comprehensive PDF guide covering online safety fundamentals, privacy settings, and threat avoidance.",
    category: "Technical",
    type: "PDF",
    size: "2.5 MB",
    icon: Shield,
    url: "/resources/digital-safety-guide.pdf"
  },
  {
    id: 2,
    title: "Social Media Privacy Checklist",
    description: "Step-by-step checklist for securing your Facebook, Instagram, Twitter, and TikTok accounts.",
    category: "Technical",
    type: "PDF",
    size: "1.2 MB",
    icon: FileText,
    url: "/resources/privacy-checklist.pdf"
  },
  {
    id: 3,
    title: "Legal Rights Online",
    description: "Understanding your legal rights regarding digital harassment, cyberbullying, and data privacy in Africa.",
    category: "Legal",
    type: "PDF",
    size: "1.8 MB",
    icon: FileText,
    url: "/resources/legal-rights.pdf"
  },
  {
    id: 4,
    title: "Mental Health & Digital Wellness",
    description: "Strategies for maintaining mental well-being while navigating digital spaces and dealing with online toxicity.",
    category: "Mental Health",
    type: "PDF",
    size: "3.1 MB",
    icon: Heart,
    url: "/resources/mental-health-guide.pdf"
  },
  {
    id: 5,
    title: "Incident Documentation Form",
    description: "Standardized form to document online harassment or threats for reporting to authorities.",
    category: "Legal",
    type: "PDF",
    size: "800 KB",
    icon: FileText,
    url: "/resources/incident-form.pdf"
  },
  {
    id: 6,
    title: "Community Support Directory",
    description: "Directory of women-led tech communities and support groups across various African regions.",
    category: "Community",
    type: "PDF",
    size: "1.5 MB",
    icon: Users,
    url: "/resources/community-directory.pdf"
  },
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredResources = allResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeTab === "all" || resource.category.toLowerCase().replace(" ", "-") === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full py-12 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-display">Resources & Support</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Access emergency hotlines, downloadable guides, and expert support to help you navigate the digital world safely.
          </p>
        </motion.div>

        {/* Emergency Hotlines Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Phone className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">Emergency Hotlines</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hotlines.map((hotline, index) => (
              <motion.div
                key={hotline.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-l-4 border-l-accent shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">{hotline.country}</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                        {hotline.available}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{hotline.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3 mt-2">
                      <div className="flex items-center gap-2 text-lg font-bold text-primary">
                        <Phone className="h-5 w-5" />
                        {hotline.phone}
                      </div>
                      <a href={`tel:${hotline.phone}`} className="w-full">
                        <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resource Library Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Resource Library</h2>
              <p className="text-muted-foreground">Curated guides and tools for your safety</p>
            </div>
            <div className="w-full md:w-72 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-8 flex flex-wrap h-auto p-1 gap-1 bg-muted/50">
              <TabsTrigger value="all" className="flex-1 min-w-[100px]">All Resources</TabsTrigger>
              <TabsTrigger value="technical" className="flex-1 min-w-[100px]">Technical Safety</TabsTrigger>
              <TabsTrigger value="legal" className="flex-1 min-w-[100px]">Legal Rights</TabsTrigger>
              <TabsTrigger value="mental-health" className="flex-1 min-w-[100px]">Mental Health</TabsTrigger>
              <TabsTrigger value="community" className="flex-1 min-w-[100px]">Community</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => (
                    <motion.div
                      key={resource.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                              <resource.icon className="h-6 w-6" />
                            </div>
                            <Badge variant="outline">{resource.category}</Badge>
                          </div>
                          <CardTitle className="line-clamp-1">{resource.title}</CardTitle>
                          <CardDescription className="line-clamp-2 mt-2">
                            {resource.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex items-center text-sm text-muted-foreground gap-4">
                            <span className="flex items-center gap-1">
                              <FileText className="h-4 w-4" /> {resource.type}
                            </span>
                            <span>{resource.size}</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <a href={resource.url} download className="w-full">
                            <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </a>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 text-muted-foreground">
                    <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <p>No resources found matching your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 font-display">Need Personalized Support?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Our team is here to help you navigate complex digital safety challenges. Reach out to us for confidential assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:bett.devop@gmail.com">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold">
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </Button>
            </a>
            <a href="tel:+15733037764">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call Helpline (+1 or +254)
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;