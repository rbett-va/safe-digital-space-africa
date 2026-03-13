import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const Hero = () => {
    return (
        <div className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero.png"
                    alt="Empowered African woman using technology"
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6">
                <div className="max-w-3xl space-y-8 animate-fade-in">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                        Empowering African Women in Digital Spaces
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-display">
                        Navigate the Digital World with <span className="text-secondary-light">Confidence</span>
                    </h1>

                    <p className="max-w-[600px] text-lg text-white/90 md:text-xl leading-relaxed">
                        Join a community of women mastering digital safety. Learn to protect your privacy, identify threats, and reclaim your space online.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/safety-assessment">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1"
                            >
                                <ShieldCheck className="mr-2 h-5 w-5" />
                                Take Safety Assessment
                            </Button>
                        </Link>
                        <Link to="/how-it-works">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white transition-all hover:-translate-y-1"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-white/80">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold font-display">5k+</span>
                            <span className="text-sm">Women Trained</span>
                        </div>
                        <div className="h-10 w-px bg-white/20" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold font-display">100%</span>
                            <span className="text-sm">Free Resources</span>
                        </div>
                        <div className="h-10 w-px bg-white/20" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold font-display">24/7</span>
                            <span className="text-sm">Support Access</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};