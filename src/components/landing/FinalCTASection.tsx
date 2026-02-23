import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-[#060c17]">
      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-white mb-4">
            Ready to Simplify Admissions?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Choose your path and get started today. Whether it's school or college — SeatifyAI makes admissions effortless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://k12.seatifyai.com"
              className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base"
            >
              Explore School Admissions
              <ArrowRight size={18} />
            </a>
            <a
              href="https://he.seatifyai.com"
              className="btn-premium w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/20 text-white font-semibold text-base hover:bg-white hover:text-black transition-all"
            >
              Explore College Admissions
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
