import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-tight flex items-center justify-between h-20 md:h-24 px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="SeatifyAI Logo" className="h-12 md:h-[78px] w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#what" className="text-[17px] leading-[25.5px] font-medium text-black hover:text-primary transition-colors nav-link-hover pb-1">What is SeatifyAI</a>
          <a href="#how" className="text-[17px] leading-[25.5px] font-medium text-black hover:text-primary transition-colors nav-link-hover pb-1">How It Works</a>
          <a href="#features" className="text-[17px] leading-[25.5px] font-medium text-black hover:text-primary transition-colors nav-link-hover pb-1">Features</a>
          <a href="#testimonials" className="text-[17px] leading-[25.5px] font-medium text-black hover:text-primary transition-colors nav-link-hover pb-1">Testimonials</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://k12.seatifyai.com" className="text-[15px] font-semibold px-5 py-2.5 rounded-xl bg-black text-white hover:bg-black/90 transition-all active:scale-95">
            School Admissions
          </a>
          <a href="https://he.seatifyai.com" className="text-[15px] font-semibold px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all active:scale-95">
            Higher Education Admissions
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <a href="#what" onClick={() => setOpen(false)} className="text-[17px] leading-[25.5px] font-medium py-2 text-black">What is SeatifyAI</a>
              <a href="#how" onClick={() => setOpen(false)} className="text-[17px] leading-[25.5px] font-medium py-2 text-black">How It Works</a>
              <a href="#features" onClick={() => setOpen(false)} className="text-[17px] leading-[25.5px] font-medium py-2 text-black">Features</a>
              <a href="#testimonials" onClick={() => setOpen(false)} className="text-[17px] leading-[25.5px] font-medium py-2 text-black">Testimonials</a>
              <div className="flex flex-col gap-2 pt-2">
                <a href="https://k12.seatifyai.com" className="text-[17px] font-semibold text-center px-4 py-3 rounded-xl bg-black text-white">School Admissions</a>
                <a href="https://he.seatifyai.com" className="text-[17px] font-semibold text-center px-4 py-3 rounded-xl bg-primary text-primary-foreground">Higher Education Admissions</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
