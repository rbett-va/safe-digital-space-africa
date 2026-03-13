import { Shield, Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-display">Safe Digital Africa</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed">
              Empowering African women and girls with the tools, knowledge, and community to navigate the digital world safely and confidently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-primary-foreground/80 transition-colors hover:text-white hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/safety-tools" className="text-primary-foreground/80 transition-colors hover:text-white hover:underline">
                  Safety Tools
                </Link>
              </li>
              <li>
                <Link to="/digital-literacy" className="text-primary-foreground/80 transition-colors hover:text-white hover:underline">
                  Digital Literacy
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 transition-colors hover:text-white hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Emergency Support</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="font-medium">Helpline (24/7)</p>
                  <a href="tel:116" className="text-primary-foreground/80 hover:text-white">116 (Child Helpline)</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <a href="mailto:help@safedigitalafrica.org" className="text-primary-foreground/80 hover:text-white">help@safedigitalafrica.org</a>
                </div>
              </li>
              <li>
                <Link to="/resources" className="text-accent hover:text-accent-light font-medium inline-flex items-center">
                  View all emergency resources
                  <span aria-hidden="true" className="ml-1">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-display">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/christine.kwamboka.39904"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/christinemirimba/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Tinnah_Mirimba?t=nZPhrf1oB28G1s6LyyrssA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/christine-mirimba-51202a26b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full transition-colors hover:bg-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="pt-4">
              <Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-white underline decoration-primary-foreground/30 underline-offset-4">
                Send us a message
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Safe Digital Africa. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};