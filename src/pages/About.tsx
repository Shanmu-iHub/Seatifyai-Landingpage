import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About SeatifyAI - AI Admission Marketplace";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              About SeatifyAI
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  SeatifyAI is revolutionizing the education admission landscape by creating a unified digital marketplace that connects educational institutions with students and parents. We believe that finding and securing educational opportunities should be simple, transparent, and accessible to everyone.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SeatifyAI is a cutting-edge technology company founded by education professionals and technology experts who recognized the challenges in the traditional admission process. Our platform leverages artificial intelligence and machine learning to create seamless connections between schools, colleges, universities, and prospective students.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We serve as a comprehensive bridge for K-12 schools, undergraduate programs, and postgraduate institutions, making the admission journey efficient for both educational providers and seekers.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">For Students & Parents</h3>
                    <p className="text-muted-foreground">
                      Discover, compare, and secure admission seats across thousands of educational institutions with personalized recommendations and real-time availability updates.
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">For Institutions</h3>
                    <p className="text-muted-foreground">
                      Reach qualified candidates, streamline admission processes, and optimize seat utilization with our AI-powered management tools.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-1">Transparency</h3>
                      <p className="text-muted-foreground">Clear, honest information about institutions, courses, and admission processes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-1">Accessibility</h3>
                      <p className="text-muted-foreground">Making quality education accessible to everyone, regardless of location or background.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-1">Innovation</h3>
                      <p className="text-muted-foreground">Continuously improving our platform with cutting-edge technology and user feedback.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-1">Excellence</h3>
                      <p className="text-muted-foreground">Maintaining high standards in everything we do, from user experience to customer support.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Since our inception, SeatifyAI has helped thousands of students find their ideal educational paths and assisted hundreds of institutions in optimizing their admission processes. We're proud to be contributing to making education more accessible and efficient across the country.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform continues to grow, incorporating new features and expanding our network of partner institutions to better serve the evolving needs of the education ecosystem.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about SeatifyAI? Want to learn more about how we can help you or your institution? We'd love to hear from you. Visit our <a href="/contact" className="text-primary hover:underline">contact page</a> to get in touch with our team.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
