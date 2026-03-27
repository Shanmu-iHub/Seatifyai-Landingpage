import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight, MapPin, GraduationCap, Building } from "lucide-react";

type PageType = "location" | "course" | "college";

const SEOLandingPage = ({ type }: { type: PageType }) => {
    const { slug } = useParams<{ slug: string }>();

    // Format slug to readable string (e.g., "bangalore" -> "Bangalore", "btech" -> "BTech")
    const formattedSlug = slug
        ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : "";

    let title = "";
    let description = "";
    let icon = null;

    switch (type) {
        case "location":
            title = `Top Colleges in ${formattedSlug} - Direct Admissions`;
            description = `Find the best colleges and universities in ${formattedSlug}. Compare courses, fees, and secure your seat online with SeatifyAI.`;
            icon = <MapPin className="w-12 h-12 text-primary mb-4" />;
            break;
        case "course":
            title = `Best ${formattedSlug} Admissions & Colleges`;
            description = `Explore top ranked colleges for ${formattedSlug}. View eligibility, placement records, and apply directly through SeatifyAI.`;
            icon = <GraduationCap className="w-12 h-12 text-primary mb-4" />;
            break;
        case "college":
            title = `${formattedSlug} Admissions, Fees & Reviews`;
            description = `Get complete admission details, fee structure, and reviews for ${formattedSlug}. Book your seat instantly using SeatifyAI.`;
            icon = <Building className="w-12 h-12 text-primary mb-4" />;
            break;
    }

    // Update document title for SEO
    useEffect(() => {
        document.title = `${title} | SeatifyAI`;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }
    }, [title, description]);

    return (
        <main className="min-h-screen bg-background relative flex flex-col">
            <Navbar />

            {/* Dynamic Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-purple-500/5 flex-grow">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center">{icon}</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                            Start Your Admission
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-gray-50 transition-colors border shadow-sm">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* Basic Content Section for SEO */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto prose lg:prose-lg">
                    <h2>Why Choose SeatifyAI for your Admission?</h2>
                    <p>
                        Whether you are looking for specific colleges in a region or aiming for a specialized course, SeatifyAI simplifies your admission process. We provide:
                    </p>
                    <ul>
                        <li><strong>Verified Institution Data:</strong> 100% genuine information regarding fees, paths, and curriculum.</li>
                        <li><strong>AI-Powered Matching:</strong> Find the best fit based on your profile and academic history.</li>
                        <li><strong>Seamless Application:</strong> Apply to multiple colleges using a single, unified platform.</li>
                    </ul>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default SEOLandingPage;
