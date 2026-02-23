import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NewHero = () => {
    return (
        <section className="relative pt-20 md:pt-24 pb-12 overflow-hidden">
            {/* Main Container - Full width on mobile, curved on desktop */}
            <div className="w-full md:w-[90%] mx-auto relative rounded-none md:rounded-[60px] overflow-hidden bg-[#0F172A] min-h-[600px] md:min-h-[750px] flex items-center justify-center border-b md:border border-white/5">

                {/* High-Impact Cosmic Flux - Full Width & High Opacity */}
                <div className="absolute inset-0 z-0 bg-[#060B16] overflow-hidden">
                    {/* Morphing Blob 1: Left to Right Traveler */}
                    <motion.div
                        animate={{
                            x: ['-40%', '140%', '-40%'],
                            y: ['10%', '60%', '10%'],
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 1, 0.8],
                            background: [
                                'radial-gradient(circle, rgba(255, 184, 0, 0.8) 0%, transparent 75%)',
                                'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, transparent 75%)',
                                'radial-gradient(circle, rgba(255, 184, 0, 0.8) 0%, transparent 75%)',
                            ]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            background: { duration: 4, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute w-[600px] h-[600px] rounded-full"
                        style={{ filter: 'blur(40px)' }}
                    />

                    {/* Morphing Blob 2: Right to Left Traveler */}
                    <motion.div
                        animate={{
                            x: ['130%', '-30%', '130%'],
                            y: ['70%', '20%', '70%'],
                            scale: [1.2, 0.9, 1.2],
                            opacity: [0.7, 0.9, 0.7],
                            background: [
                                'radial-gradient(circle, rgba(147, 51, 234, 0.7) 0%, transparent 75%)',
                                'radial-gradient(circle, rgba(255, 184, 0, 0.7) 0%, transparent 75%)',
                                'radial-gradient(circle, rgba(147, 51, 234, 0.7) 0%, transparent 75%)',
                            ]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                            background: { duration: 4, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute w-[500px] h-[500px] rounded-full"
                        style={{ filter: 'blur(50px)' }}
                    />

                    {/* Morphing Blob 3: Center Crosser */}
                    <motion.div
                        animate={{
                            x: ['-20%', '120%', '-20%'],
                            y: ['50%', '50%', '50%'],
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.2, 1],
                            background: [
                                'radial-gradient(circle, rgba(255, 184, 0, 0.6) 0%, transparent 75%)',
                                'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, transparent 75%)',
                                'radial-gradient(circle, rgba(255, 184, 0, 0.6) 0%, transparent 75%)',
                            ]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                            background: { duration: 4, repeat: Infinity, ease: "linear" }
                        }}
                        className="absolute top-0 w-[550px] h-[550px] rounded-full"
                        style={{ filter: 'blur(45px)' }}
                    />

                    {/* Abstract Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '50px 50px' }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060B16] opacity-60" />
                </div>

                <div className="relative z-10 w-[95%] md:w-[80%] mx-auto py-20 text-center flex flex-col items-center">

                    {/* Top Pill Chip */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 max-w-full"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                        <span className="text-white/80 text-[10px] sm:text-sm font-semibold tracking-wide uppercase whitespace-nowrap">
                            World's First Digital Admission Marketplace
                        </span>
                    </motion.div>

                    {/* Main Title Overlaying the designs */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-white mb-8 max-w-6xl"
                    >
                        One Unified Marketplace <br className="hidden md:block" />
                        for K12 to UG & PG Admissions. <br className="hidden md:block" />
                        <span className="text-primary italic">Zero Hassle with AI Process.</span>
                    </motion.h1>

                    {/* Centered Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-white/60 text-[15px] md:text-xl leading-relaxed max-w-3xl mb-12"
                    >
                        Seatify brings K–12 schools, colleges, and universities onto a single admission platform, replacing fragmented processes with one clear, transparent digital journey.
                    </motion.p>

                    {/* Buttons Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-5"
                    >
                        <a
                            href="https://k12.seatifyai.com"
                            className="group relative px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_30px_rgba(255,184,0,0.4)] transition-all duration-300 flex items-center gap-3 overflow-hidden"
                        >
                            School Admissions
                            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://he.seatifyai.com"
                            className="px-10 py-5 rounded-2xl bg-white/5 text-white border border-white/10 font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 active:scale-95"
                        >
                            Higher Education
                            <ArrowRight size={22} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewHero;
