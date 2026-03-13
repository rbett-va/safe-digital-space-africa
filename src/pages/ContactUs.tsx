import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the backend API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We will get back to you shortly.",
        variant: "default",
        className: "bg-green-600 text-white border-none"
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact Form Error:", error);
      toast({
        title: "Error Sending Message",
        description: error instanceof Error ? error.message : "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-secondary" />
                    <CardTitle className="text-lg">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:bett.devop@gmail.com"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    bett.devop@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-secondary" />
                    <CardTitle className="text-lg">Phone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+15733037764"
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +1 (573) 303-7764
                    </a>
                    <a
                      href="tel:+254701609261"
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +254 701 609 261
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <CardTitle className="text-lg">Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.google.com/maps/place/Colorado+Springs,+CO,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    Colorado Springs, CO, USA
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-secondary/10 border-secondary/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    <CardTitle className="text-lg">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-secondary">
                    Available 24/7
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;