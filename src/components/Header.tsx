import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Shield, LogOut } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ResourcesDropdown } from "./ResourcesDropdown";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Safety Tools", path: "/safety-tools" },
  { name: "Digital Literacy", path: "/digital-literacy" },
  { name: "Community", path: "/community" },
  { name: "AI Support", path: "/ai-support" },
];

export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const showQuickExit = location.pathname === "/voice-reporting" || location.pathname === "/safety-plan";

  const handleQuickExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-display">
            Safe Digital Africa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path)
                ? "text-primary font-semibold"
                : "text-muted-foreground"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <ResourcesDropdown />
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <ThemeToggle />
          {showQuickExit && (
            <Button
              variant="destructive"
              onClick={handleQuickExit}
              className="hidden lg:flex gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <LogOut className="h-4 w-4" />
              Quick Exit
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-4 md:hidden">
          {showQuickExit && (
            <Button
              variant="destructive"
              size="sm"
              onClick={handleQuickExit}
              className="flex gap-2 font-semibold"
            >
              <LogOut className="h-4 w-4" />
              Exit
            </Button>
          )}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left border-b pb-4 mb-4">
                <SheetTitle className="flex items-center gap-2 font-display text-xl">
                  <Shield className="h-5 w-5 text-primary" />
                  Safe Digital Africa
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-border my-2" />
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header >
  );
};