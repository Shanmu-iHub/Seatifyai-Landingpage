import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "SeatifyAI transformed how we handle admissions. Applications went up 40% in the first semester, and the digital workflow saved my staff hundreds of hours.",
    name: "School Administrator",
    role: "K12 Institution",
    logo: "Institution A",
    tagline: "$10M+ Scale Institution",
    avatar: "https://i.pravatar.cc/150?u=a"
  },
  {
    quote: "As a parent, I compared five schools and confirmed my daughter's admission in one afternoon. The transparent process and instant feedback were incredible.",
    name: "Rajesh Kumar",
    role: "Parent, Mumbai",
    logo: "Parent Council",
    tagline: "Educational Advocacy Group",
    avatar: "https://i.pravatar.cc/150?u=b"
  },
  {
    quote: "The eligibility check saved us hours of screening. We now focus on students who actually qualify, significantly improving our conversion rates.",
    name: "Admissions Head",
    role: "Global University",
    logo: "University B",
    tagline: "Top 50 Global University",
    avatar: "https://i.pravatar.cc/150?u=c"
  },
  {
    quote: "We were struggling with fragmented paper processes. Seatify brought everything online in weeks. It's the cleanest UI we've ever used in education.",
    name: "Director of Tech",
    role: "Elite School Network",
    logo: "Network X",
    tagline: "Leading K-12 Network",
    avatar: "https://i.pravatar.cc/150?u=d"
  },
  {
    quote: "The real-time dashboard gives us total visibility into our funnel. We can now identify and fix bottlenecks in our admission process instantly.",
    name: "Finance Director",
    role: "Pre-K Chain",
    logo: "Academy Prime",
    tagline: "Multi-city Pre-K Network",
    avatar: "https://i.pravatar.cc/150?u=e"
  },
  {
    quote: "Seatify is not just a tool; it's a growth engine. It has fundamentally changed how we interact with prospective families from the first touchpoint.",
    name: "Marketing Head",
    role: "Higher Education Group",
    logo: "Institute of Design",
    tagline: "Premier Design College",
    avatar: "https://i.pravatar.cc/150?u=f"
  }
];

const TrustSection = () => {
  // Triple the array for a truly infinite, gapless scroll on any screen size
  const scrollingTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-section-alt/30">
      <div className="container-tight mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="mb-4">
            Trusted by <span className="text-primary">Schools, Colleges & Universities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            SeatifyAI is trusted by forward-thinking schools and colleges that want to modernize their admissions.
          </p>
        </motion.div>
      </div>

      {/* Infinity Scroll Container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {scrollingTestimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] sm:w-[400px] md:w-[450px] mr-6 bg-white border border-border/60 rounded-[28px] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_35px_rgb(0,0,0,0.08)] transition-all whitespace-normal"
            >
              {/* Top part: Logo and Tagline */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                    {t.logo[0]}
                  </div>
                  <span className="text-xl font-bold text-foreground">
                    {t.logo}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {t.tagline}
                </p>
              </div>

              {/* Middle part: Quote */}
              <p className="text-[#333] text-[1.05rem] leading-relaxed mb-10 font-medium">
                "{t.quote}"
              </p>

              {/* Bottom part: Avatar and Details */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt="AI admission platform dashboard for seat booking and enrollment"
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover grayscale brightness-110"
                />
                <div>
                  <p className="font-bold text-foreground text-base">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default TrustSection;
