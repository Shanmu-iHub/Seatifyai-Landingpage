import logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#060c17] border-t border-white/5">
      <div className="container-tight px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <img src={logo} alt="SeatifyAI Logo" className="h-16 md:h-[78px] w-auto brightness-0 invert" />
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-sm mx-auto md:mx-0">
              SeatifyAI is a Digital Admission Marketplace connecting schools, colleges, and universities with students and parents — making admissions simple, transparent, and digital.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Platforms</h4>
            <ul className="space-y-3">
              <li><a href="https://k12.seatifyai.com" className="text-white/50 text-sm hover:text-primary transition-colors">School Admissions (K12)</a></li>
              <li><a href="https://he.seatifyai.com" className="text-white/50 text-sm hover:text-primary transition-colors">College & University Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} SeatifyAI – Digital Admission Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
