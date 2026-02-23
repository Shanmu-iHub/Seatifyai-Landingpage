import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/Seatify Hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Warm glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, hsl(48 97% 50% / 0.25) 0%, transparent 70%)" }} />

      <div className="container-tight px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-5 py-2 rounded-full bg-accent text-accent-foreground text-base font-semibold mb-6">
                Digital Admission Marketplace
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-hero text-foreground mb-6 text-balance"
            >
              One Platform.{" "}
              <span className="text-primary">Every Admission.</span>{" "}
              Zero Hassle.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="subheading-hero mb-10 text-balance"
            >
              Seatify is the world’s first true Admission Marketplace for K-12 schools, colleges, and universities, unifying fragmented admission journeys into a single, transparent digital experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="https://k12.seatifyai.com"
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20"
              >
                School Admissions
                <ArrowRight size={20} />
              </a>
              <a
                href="https://he.seatifyai.com"
                className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-foreground text-foreground font-bold text-lg hover:bg-foreground hover:text-background"
              >
                College & University Admissions
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative lg:ml-auto animate-slow-float"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={heroImage}
              alt="Students and parents using SeatifyAI digital admission platform"
              className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/10 relative z-10 cursor-pointer"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
