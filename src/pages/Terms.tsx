import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service - SeatifyAI";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using SeatifyAI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SeatifyAI is a digital admission marketplace that connects students, parents, and educational institutions. Our platform facilitates the discovery, application, and admission process for K-12 schools, undergraduate programs, and postgraduate institutions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
                <h3 className="text-xl font-semibold mb-3 mt-6">Registration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To use certain features of the Service, you must register for an account. When you register:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You must provide accurate, current, and complete information</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You are responsible for all activities that occur under your account</li>
                  <li>You must notify us immediately of any unauthorized use</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Account Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time for violations of these terms or for any other reason we deem appropriate.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a user of SeatifyAI, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide truthful and accurate information</li>
                  <li>Not use the service for fraudulent purposes</li>
                  <li>Not submit false or misleading applications</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not interfere with the proper working of the service</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Educational Institution Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Educational institutions using our platform agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and up-to-date information about programs and admissions</li>
                  <li>Process applications in a timely and fair manner</li>
                  <li>Maintain confidentiality of applicant information</li>
                  <li>Comply with educational regulations and standards</li>
                  <li>Not discriminate against applicants based on protected characteristics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Privacy and Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices. By using the Service, you consent to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold mb-3 mt-6">SeatifyAI Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of SeatifyAI and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">User Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of any content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may not use our service for any illegal or unauthorized purpose. You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use the service for any fraudulent or deceptive purpose</li>
                  <li>Submit false or misleading information</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit malware or harmful code</li>
                  <li>Spam or harass other users</li>
                  <li>Attempt to reverse engineer or hack our systems</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to maintain the Service's availability, but we do not guarantee uninterrupted access. We may modify, suspend, or discontinue the Service at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Accuracy or reliability of information</li>
                  <li>Availability of educational seats or programs</li>
                  <li>Admission outcomes or guarantees</li>
                  <li>Uninterrupted or error-free operation</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall SeatifyAI, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless SeatifyAI and its licensors and licensees, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Bangalore, India.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. If we make material changes, we will notify you by email or by posting a notice on our site prior to the change becoming effective. Your continued use of the service after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:support@seatifyai.com" className="text-primary hover:underline">support@seatifyai.com</a>
                  </p>
                  <p className="text-muted-foreground">
                    Phone: <a href="tel:+919600940618" className="text-primary hover:underline">+91 96009 40618</a>
                  </p>
                  <p className="text-muted-foreground">
                    Address: BLOCK-L, Embassy TechVillage, Outer Ring Rd, Devarabisanahalli, Bellandur, Bengaluru, Karnataka 560103, India
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
