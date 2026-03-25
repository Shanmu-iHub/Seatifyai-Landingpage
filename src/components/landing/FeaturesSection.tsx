import { motion } from "framer-motion";
import { Layers, GitCompare, BrainCircuit, Wallet, Activity, Sparkles, Bell } from "lucide-react";

const features = [
  { icon: Layers, title: "Multi-Institution Listings", desc: "Thousands of schools and colleges, all in one searchable marketplace." },
  { icon: GitCompare, title: "Course & School Comparison", desc: "Compare programs, fees, and facilities side by side to make informed decisions." },
  { icon: BrainCircuit, title: "Smart Eligibility Checks", desc: "Know instantly if you qualify before you apply. No more wasted effort." },
  { icon: Wallet, title: "Partial Payment Seat Blocking", desc: "Reserve your seat with a fraction of the fee. Pay the rest later." },
  { icon: Activity, title: "Real-Time Seat Availability", desc: "See exactly how many seats are left — updated live as admissions happen." },
  { icon: Sparkles, title: "AI-Powered Recommendations", desc: "Get personalized course and institution suggestions based on your profile." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-[#060c17]">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4 text-white">Smart AI-Based Admission Process</h2>
          <p className="text-white/70 text-lg">
            Everything you need for a smarter, faster admission experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover-lift transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4 transition-colors">
                <item.icon size={20} className="text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
