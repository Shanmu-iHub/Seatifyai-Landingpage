import { motion } from "framer-motion";
import { Globe, Zap, ShieldCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Real-Time Seat Availability", desc: "Real-time seat availability, eligibility checks, and clear fee structures." },
  { icon: Globe, title: "Transparent Admission Workflow", desc: "Every step of the admission process is online — no paperwork, no queues." },
  { icon: Zap, title: "Easy Application & Enrollment", desc: "What took weeks now takes minutes. Compare, apply, and confirm in one session." },
];

const WhatIsSection = () => {
  return (
    <section id="what" className="section-padding bg-section-alt">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="mb-4">One Platform for All Admissions</h2>
          <p className="text-muted-foreground text-lg">
            SeatifyAI is a unified admission marketplace where schools, colleges, and universities list their programs — and students find, compare, and secure seats digitally. One platform, thousands of options.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover-lift transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <item.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
