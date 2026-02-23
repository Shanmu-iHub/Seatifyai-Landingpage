import { motion } from "framer-motion";
import { ArrowRight, School, GraduationCap } from "lucide-react";

const EntryPathsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose Your Path</h2>
          <p className="text-muted-foreground text-lg">
            SeatifyAI has dedicated platforms for both school and higher education admissions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* K12 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-card rounded-2xl p-8 md:p-10 border-2 border-primary/20 overflow-hidden group hover:border-primary/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <School size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">SeatifyAI for Schools (K12)</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Find the right school for your child. Browse admission grades, discover nearby schools, and complete the admission process with a parent-friendly flow — from nursery to grade 12.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Grade-wise admission discovery</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> School comparison tools</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Simple, parent-first experience</li>
              </ul>
              <a
                href="https://k12.seatifyai.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Explore School Admissions
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Higher Ed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#060c17] rounded-2xl p-8 md:p-10 border border-white/10 overflow-hidden group hover:border-primary transition-all"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <GraduationCap size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-background mb-3">SeatifyAI for Colleges & Universities</h3>
              <p className="text-background/70 mb-4 leading-relaxed">
                Explore degree programs, check eligibility, compare courses across universities, and reserve your seat — all from one unified platform designed for higher education admissions.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-background/70">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Degree program explorer</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Smart eligibility matching</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Cross-university course comparison</li>
              </ul>
              <a
                href="https://he.velzx.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Explore College Admissions
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EntryPathsSection;
