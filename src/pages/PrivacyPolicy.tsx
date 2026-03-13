import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-center">Privacy Policy</h1>
          <p className="text-center text-muted-foreground">
            Last Updated: November 26, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-lg max-w-none space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              SafeSpace Africa ("we," "our," or "us") is committed to protecting the privacy and security of African women and girls using our digital safety platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Complete our digital safety assessment</li>
              <li>Enroll in digital literacy courses</li>
              <li>Contact us for support</li>
              <li>Report incidents or threats</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Usage Data</h3>
            <p className="text-muted-foreground leading-relaxed">
              We automatically collect certain information when you visit our platform, including your IP address, browser type, device information, pages visited, and time spent on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide and maintain our digital safety services</li>
              <li>Deliver personalized safety assessments and recommendations</li>
              <li>Facilitate your enrollment and progress in digital literacy courses</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process and investigate reported incidents</li>
              <li>Send you educational content, safety alerts, and platform updates</li>
              <li>Improve our platform and develop new features</li>
              <li>Comply with legal obligations and protect rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Security and Protection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand the sensitive nature of the information we handle, especially for women facing digital threats. We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>End-to-end encryption for sensitive communications</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security audits and updates</li>
              <li>Staff training on data protection and confidentiality</li>
              <li>Anonymous reporting options for incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We respect your privacy and do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform (under strict confidentiality agreements)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights, safety, and property</li>
              <li><strong>Partner Organizations:</strong> With vetted partner organizations providing support services (only with your permission)</li>
              <li><strong>Emergency Situations:</strong> When necessary to prevent imminent harm or danger</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct or update inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with relevant data protection authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience, analyze platform usage, and deliver personalized content. You can control cookie preferences through your browser settings. Disabling cookies may affect some platform functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              SafeSpace Africa provides services to girls and young women. For users under 18, we require parental or guardian consent where legally required. We implement age-appropriate privacy protections and limit data collection for minors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries outside your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Course progress and safety assessments are retained to support your learning journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our platform and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg space-y-2">
              <p className="text-foreground"><strong>SafeSpace Africa</strong></p>
              <p className="text-muted-foreground">Email: bett.devop@gmail.com</p>
              <p className="text-muted-foreground">Phone: +1 (573) 303-7764 or +254701609261</p>
              <p className="text-muted-foreground">Available: 24/7</p>
            </div>
          </section>

          <section className="border-t pt-8">
            <p className="text-sm text-muted-foreground italic">
              At SafeSpace Africa, we are deeply committed to protecting your privacy and creating a safe digital environment for African women and girls. Your trust is paramount, and we continuously work to uphold the highest standards of data protection and confidentiality.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;