import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">About Safe Digital Africa</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Safe Digital Africa is a platform built to empower women and girls across the continent with practical digital safety skills.
          We provide educational resources, privacy tools, and a supportive community to help you stay safe online.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Our mission is to close the digital safety gap by offering free, easy-to-follow guidance, tools, and community support tailored to the needs of African women.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/safety-tools">
            <Button size="lg">Explore Safety Tools</Button>
          </Link>
          <Link to="/community">
            <Button variant="outline" size="lg">
              Join the Community
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
