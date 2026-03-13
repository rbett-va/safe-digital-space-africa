import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Eye, AlertCircle, Lock, Smartphone, Globe, Key, Check, X, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/CustomCards";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ChatDisclaimerModal } from "@/components/ChatDisclaimerModal";

const SafetyTools = () => {
  const navigate = useNavigate();
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<any>(null);
  const [checklistPlatform, setChecklistPlatform] = useState("Facebook");
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);
  const { toast } = useToast();

  const tools = [
    {
      id: "voice-reporting",
      icon: <Shield className="h-6 w-6" />,
      title: "Voice Reporting",
      description: "Securely record and document incidents of harassment or abuse.",
      actionLabel: "Record Incident",
      link: "/voice-reporting"
    },
    {
      id: "safety-plan",
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Plan Wizard",
      description: "Create a personalized safety plan with emergency contacts and safe places.",
      actionLabel: "Create Plan",
      link: "/safety-plan"
    },
    {
      id: "journal",
      icon: <Lock className="h-6 w-6" />,
      title: "Encrypted Journal",
      description: "Securely document your experiences in a password-protected journal.",
      actionLabel: "Open Journal",
      link: "/journal"
    },
    {
      id: "password-strength",
      icon: <Key className="h-6 w-6" />,
      title: "Password Strength Checker",
      description: "Test your password security with our advanced strength analysis tool.",
      actionLabel: "Test Password",
    },
    {
      id: "email-breach",
      icon: <Search className="h-6 w-6" />,
      title: "Email Breach Scanner",
      description: "Check if your email address has been compromised in known data breaches.",
      actionLabel: "Scan Email",
    },
    {
      id: "privacy-checklist",
      icon: <Shield className="h-6 w-6" />,
      title: "Social Media Privacy Checklist",
      description: "Step-by-step guide to securing your Facebook, Instagram, and WhatsApp accounts.",
      actionLabel: "Start Checklist",
    },
    {
      id: "digital-footprint",
      icon: <Eye className="h-6 w-6" />,
      title: "Digital Footprint Analyzer",
      description: "Discover what information about you is publicly available online.",
      actionLabel: "Analyze Now",
    },
    {
      id: "device-security",
      icon: <Smartphone className="h-6 w-6" />,
      title: "Device Security Setup",
      description: "Secure your phone and computer with essential security settings.",
      actionLabel: "View Guide",
    },
    {
      id: "safe-browsing",
      icon: <Globe className="h-6 w-6" />,
      title: "Safe Browsing Assistant",
      description: "Learn how to identify and avoid malicious websites and phishing scams.",
      actionLabel: "Learn More",
    },
  ];

  const calculatePasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length > 8) score += 20;
    if (pass.length > 12) score += 20;
    if (/[A-Z]/.test(pass)) score += 15;
    if (/[0-9]/.test(pass)) score += 15;
    if (/[^A-Za-z0-9]/.test(pass)) score += 30;
    return Math.min(100, score);
  };

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pass = e.target.value;
    setPassword(pass);
    setCheckResult({ score: calculatePasswordStrength(pass) });
  };

  const handleEmailCheck = () => {
    setIsChecking(true);
    // Mock API call
    setTimeout(() => {
      setIsChecking(false);
      setCheckResult({
        safe: Math.random() > 0.3, // Random result for demo
        breaches: Math.random() > 0.3 ? ["Collection #1", "Canva 2019"] : [],
      });
    }, 1500);
  };

  const handleStartLiveChat = () => {
    setIsChatModalOpen(true);
  };

  const handleChatAccept = () => {
    setIsChatModalOpen(false);
    setIsChatActive(true);

    // Inject Tawk.to script
    // Note: Replace 'YOUR_PROPERTY_ID/YOUR_WIDGET_ID' with your actual Tawk.to ID
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    toast({
      title: "Connecting to Support...",
      description: "Chat widget is loading... Please wait.",
    });
  };

  const handleChatDecline = () => {
    setIsChatModalOpen(false);
  };

  const renderToolContent = () => {
    switch (activeTool) {
      case "password-strength":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Enter a password to test</Label>
              <Input
                id="password"
                type="text"
                placeholder="Type a password..."
                value={password}
                onChange={handlePasswordCheck}
                className="text-lg"
              />
            </div>
            {password && (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                <div className="flex justify-between text-sm">
                  <span>Strength Score</span>
                  <span className="font-bold">{checkResult?.score}%</span>
                </div>
                <Progress
                  value={checkResult?.score}
                  className="h-3"
                />
                <p className={`text-sm font-medium ${checkResult?.score > 80 ? "text-green-600" :
                  checkResult?.score > 50 ? "text-yellow-600" : "text-red-600"
                  }`}>
                  {checkResult?.score > 80 ? "Strong Password! 🛡️" :
                    checkResult?.score > 50 ? "Moderate Strength - Add special chars" : "Weak Password - Too simple"}
                </p>
              </div>
            )}
          </div>
        );

      case "email-breach":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Enter your email address</Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={handleEmailCheck} disabled={!email || isChecking}>
                  {isChecking ? "Scanning..." : "Scan"}
                </Button>
              </div>
            </div>
            {checkResult && !isChecking && (
              <div className={`p-4 rounded-lg border ${checkResult.safe ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <div className="flex items-start gap-3">
                  {checkResult.safe ? (
                    <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  )}
                  <div>
                    <h4 className={`font-bold ${checkResult.safe ? "text-green-800" : "text-red-800"}`}>
                      {checkResult.safe ? "No Breaches Found" : "Potential Breach Detected"}
                    </h4>
                    <p className={`text-sm mt-1 ${checkResult.safe ? "text-green-700" : "text-red-700"}`}>
                      {checkResult.safe
                        ? "Good news! Your email does not appear in our database of known breaches."
                        : `Your email was found in the following breaches: ${checkResult.breaches.join(", ")}. We recommend changing your password immediately.`}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "privacy-checklist":
        return (
          <div className="space-y-4">
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {["Facebook", "Instagram", "WhatsApp"].map((platform) => (
                <Button
                  key={platform}
                  variant={checklistPlatform === platform ? "default" : "outline"}
                  size="sm"
                  onClick={() => setChecklistPlatform(platform)}
                >
                  {platform}
                </Button>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Securing {checklistPlatform}
              </h3>
              <ul className="space-y-3">
                {checklistPlatform === "Facebook" && (
                  <>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Enable Two-Factor Authentication (2FA) in Settings &gt; Security.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Review "Who can see your future posts?" and set to Friends.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Check "Apps and Websites" to remove old connected apps.</span>
                    </li>
                  </>
                )}
                {checklistPlatform === "Instagram" && (
                  <>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Set account to Private in Settings &gt; Privacy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Enable Two-Factor Authentication.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Restrict who can add you to groups.</span>
                    </li>
                  </>
                )}
                {checklistPlatform === "WhatsApp" && (
                  <>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Enable Two-Step Verification (PIN).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Set Profile Photo visibility to "My Contacts".</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Disable "Last Seen" for better privacy.</span>
                    </li>
                  </>
                )}
              </ul>
              <Button className="w-full mt-4" onClick={() => toast({ title: "Progress Saved", description: "Keep going! You're making your account safer." })}>
                Mark as Reviewed
              </Button>
            </div>
          </div>
        );

      case "digital-footprint":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your digital footprint is the trail of data you leave behind while using the internet.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Search className="h-4 w-4" />
                Self-Search Action Plan
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Google your full name in quotes (e.g., "Jane Doe").</li>
                <li>Check Google Images for photos of you.</li>
                <li>Search for your email address and phone number.</li>
                <li>Check social media privacy settings to ensure old posts aren't public.</li>
              </ol>
            </div>
            <Button className="w-full" variant="outline" onClick={() => window.open("https://www.google.com", "_blank")}>
              Start a Google Search
            </Button>
          </div>
        );

      case "device-security":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-primary/20 bg-primary/5">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Smartphone className="h-4 w-4" /> Mobile
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Set a 6-digit PIN</li>
                  <li>• Enable Biometrics</li>
                  <li>• Turn on "Find My Device"</li>
                  <li>• Update OS regularly</li>
                </ul>
              </Card>
              <Card className="p-4 border-primary/20 bg-primary/5">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Lock className="h-4 w-4" /> Laptop
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Enable Firewall</li>
                  <li>• Install Antivirus</li>
                  <li>• Encrypt Hard Drive</li>
                  <li>• Use Strong Password</li>
                </ul>
              </Card>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Regularly backing up your data is also a critical security step.
            </p>
          </div>
        );

      case "safe-browsing":
        return (
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2 text-primary">
                <Shield className="h-4 w-4" />
                Proactive Security Actions
              </h4>
              <ol className="list-decimal list-inside space-y-3 text-sm">
                <li className="p-2 bg-muted/30 rounded-lg">
                  <span className="font-medium">Verify URL Authenticity:</span> Always check the address bar for "https://" and the correct domain spelling before entering data.
                </li>
                <li className="p-2 bg-muted/30 rounded-lg">
                  <span className="font-medium">Unknown Downloads:</span> Never download attachments from unknown senders. If unsure, contact the sender through a different channel.
                </li>
                <li className="p-2 bg-muted/30 rounded-lg">
                  <span className="font-medium">Password Management:</span> Use a password manager to generate and store unique, complex passwords for every site.
                </li>
                <li className="p-2 bg-muted/30 rounded-lg">
                  <span className="font-medium">Update Browser:</span> Keep your web browser updated to the latest version to ensure you have the newest security patches.
                </li>
              </ol>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 mt-2">
              <h4 className="font-semibold text-green-800 mb-1 flex items-center gap-2">
                <Check className="h-4 w-4" />
                Empowerment Tip
              </h4>
              <p className="text-sm text-green-700">
                You are in control. If a website feels "off" or asks for too much information, trust your instincts and leave immediately.
              </p>
            </div>
          </div>
        );

      default:
        return <p>Select a tool to get started.</p>;
    }
  };

  return (
    <div className="w-full py-12 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-display">Safety Tools</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Practical tools designed to help you secure your digital life instantly.
          </p>
        </motion.div>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-l-4 border-l-accent bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <AlertCircle className="h-6 w-6" />
                Emergency Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-foreground/80">
                If you're experiencing immediate danger or harassment, please contact emergency services or our 24/7 support hotline.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="tel:116" className="w-full sm:w-auto">
                  <Button variant="default" className="bg-accent hover:bg-accent/90 w-full">
                    Call Emergency Hotline (116)
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/ai-support")}
                >
                  Get Live Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ToolCard
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                actionLabel={tool.actionLabel}
                onAction={() => {
                  if (tool.link) {
                    navigate(tool.link);
                  } else {
                    setActiveTool(tool.id);
                    setCheckResult(null);
                    setPassword("");
                    setEmail("");
                  }
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Tool Dialog */}
        <Dialog open={!!activeTool} onOpenChange={() => setActiveTool(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{tools.find(t => t.id === activeTool)?.title}</DialogTitle>
              <DialogDescription>
                {tools.find(t => t.id === activeTool)?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              {renderToolContent()}
            </div>
          </DialogContent>
        </Dialog>

        {/* Chat Disclaimer Modal */}
        <ChatDisclaimerModal
          open={isChatModalOpen}
          onAccept={handleChatAccept}
          onDecline={handleChatDecline}
        />
      </div>
    </div>
  );
};

export default SafetyTools;
