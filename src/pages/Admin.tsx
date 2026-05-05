import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DataManager from "@/components/admin/DataManager";

const Admin = () => {
  useEffect(() => {
    document.title = "Admin Dashboard - SeatifyAI";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-tight px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Admin Dashboard
            </h1>
            
            <p className="text-center text-muted-foreground mb-12">
              Manage contact form submissions and view analytics
            </p>

            <DataManager />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
