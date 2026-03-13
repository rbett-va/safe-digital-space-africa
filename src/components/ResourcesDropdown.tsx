import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Info, HelpCircle, Settings, Mail, FileText } from "lucide-react";

const resources = [
  {
    title: "About SafeSpace Africa",
    href: "/about",
    description: "Learn about our mission and values",
    icon: Info,
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Find answers to commonly asked questions",
    icon: HelpCircle,
  },
  {
    title: "Settings",
    href: "/settings",
    description: "Customize your SafeSpace experience",
    icon: Settings,
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with our team",
    icon: Mail,
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
    description: "Read our privacy and data protection policy",
    icon: FileText,
  },
];

export const ResourcesDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {resources.map((resource) => (
                <li key={resource.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={resource.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <resource.icon className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
                        <div className="text-sm font-medium leading-none">
                          {resource.title}
                        </div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {resource.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};