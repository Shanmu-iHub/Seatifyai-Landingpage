import { motion } from "framer-motion";
import { Search, GitCompare, CheckCircle, CreditCard, FileCheck } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Discover", desc: "Browse schools, colleges, and programs that match your preferences and location." },
  { icon: GitCompare, num: "02", title: "Compare", desc: "Compare courses, grades, fees, and facilities side by side across institutions." },
  { icon: CheckCircle, num: "03", title: "Check Eligibility", desc: "Instantly see if you qualify — no guesswork, no wasted applications." },
  { icon: CreditCard, num: "04", title: "Reserve Your Seat", desc: "Block your seat with a partial payment. No full commitment upfront." },
  { icon: FileCheck, num: "05", title: "Complete Admission", desc: "Upload documents, pay fees, and confirm your admission — all digitally." },
];

const HowItWorksSection = () => {
  return (
    <section id="how" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Discover, Compare & Secure Seats</h2>
          <p className="text-muted-foreground text-lg">
            Five simple steps from discovery to confirmed admission.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`md:flex items-center gap-8 md:mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`bg-card rounded-2xl p-7 border border-border inline-block text-left w-full`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                        <step.icon size={20} className="text-primary-foreground" />
                      </div>
                      <span className="text-sm font-bold text-primary">{step.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow" />
                </div>

                <div className="md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
