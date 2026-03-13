import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is SafeSpace Africa?",
        answer: "SafeSpace Africa is a digital platform dedicated to building safer online spaces for women and girls across Africa. We provide digital literacy education, safety tools, and community support to combat digital violence and promote online empowerment.",
      },
      {
        question: "Who can use SafeSpace Africa?",
        answer: "SafeSpace Africa is designed for women and girls across Africa, as well as allies who want to support the fight against digital gender-based violence. Our platform is free and accessible to everyone committed to creating safer digital spaces.",
      },
      {
        question: "Is SafeSpace Africa free to use?",
        answer: "Yes, all core features of SafeSpace Africa are completely free. We believe that digital safety should be accessible to everyone, regardless of their financial situation.",
      },
    ],
  },
  {
    category: "Digital Safety",
    questions: [
      {
        question: "What types of digital violence does SafeSpace address?",
        answer: "We address various forms of digital violence including cyberbullying, online harassment, doxxing, harmful content, blackmail, AI-generated abuse, data misuse, stalking, and non-consensual sharing of intimate images.",
      },
      {
        question: "How can I report online harassment?",
        answer: "You can report incidents through our Safety Tools section, which provides secure reporting mechanisms and connects you with appropriate support services. All reports are handled confidentially and with care.",
      },
      {
        question: "What should I do if I'm being harassed online?",
        answer: "Document everything, block the harasser, adjust your privacy settings, report the incident on the platform where it occurred, and reach out to our support team or emergency hotlines listed in our Resources section.",
      },
    ],
  },
  {
    category: "Digital Literacy",
    questions: [
      {
        question: "What digital literacy courses do you offer?",
        answer: "We offer courses on privacy settings, password security, recognizing online threats, safe social media use, data protection, identifying misinformation, and digital rights awareness.",
      },
      {
        question: "How long does it take to complete the courses?",
        answer: "Our courses are self-paced and modular. You can complete them at your own speed, with most courses taking between 30 minutes to 2 hours depending on the depth of content.",
      },
      {
        question: "Do I receive a certificate after completing courses?",
        answer: "Yes, you receive a digital certificate upon completion of each course, which you can share or add to your professional profiles.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "How does SafeSpace protect my data?",
        answer: "We use end-to-end encryption, secure servers, and follow strict data protection policies. We never share your personal information with third parties without your explicit consent.",
      },
      {
        question: "Can I use SafeSpace anonymously?",
        answer: "Yes, we offer anonymous browsing and interaction features in our Settings. You can access resources and support without revealing your identity.",
      },
      {
        question: "What information do you collect?",
        answer: "We only collect essential information needed to provide our services, such as email for account creation and anonymous usage data to improve our platform. You have full control over your data through the Settings page.",
      },
    ],
  },
  {
    category: "Support & Resources",
    questions: [
      {
        question: "How can I get emergency support?",
        answer: "Our Resources page lists emergency hotlines available 24/7 across multiple countries. You can also contact our support team at bett.devop@gmail.com or call +1 (573) 303-7764 or +254701609261.",
      },
      {
        question: "Are there community support groups?",
        answer: "Yes, we facilitate safe online community spaces where you can connect with other women and girls, share experiences, and access peer support.",
      },
      {
        question: "How can I contribute to SafeSpace Africa?",
        answer: "You can contribute by sharing the platform, volunteering as a mentor, providing feedback, or participating in our community programs. Contact us for more information on how to get involved.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about SafeSpace Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="mb-6 text-2xl font-bold text-primary">
                  {category.category}
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.category}-${index}`}
                        >
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Still Have Questions?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:bett.devop@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources">View Resources</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;