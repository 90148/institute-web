import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, GraduationCap, ChevronRight, CheckCircle, TrendingUp } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-royal/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-brand-gold/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Network background grid line visual */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          {/* Top Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-royal/20 border border-brand-royal/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Guiding Students • Building Careers • Transforming Futures</span>
          </motion.div>

          {/* Institute Brand Identity Header 
          <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
            <img src="/logo.jpg" alt="Scholars Bridge Logo" className="h-9 w-auto rounded border border-white/20 shadow" />
            <div>
              <span className="text-xs tracking-widest text-brand-gold font-bold uppercase block">SCHOLARS BRIDGE</span>
              <span className="text-[10px] text-gray-300 font-medium tracking-wider uppercase">Professional EdTech Services</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6"
          >
            Empowering Students. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal-light via-blue-400 to-brand-gold">
              Building Careers.
            </span> <br />
            Shaping Futures.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8"
          >
            A premier EdTech institute dedicated to bridging the critical gap between college curriculum and industry recruitment standards through structured mentorship and project excellence.
          </motion.p>

          {/* Stats Chips Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 mb-8 w-full max-w-lg">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="font-display font-bold text-lg sm:text-xl text-brand-gold block">98%</span>
              <span className="text-[11px] text-gray-300 font-medium">Placement Rate</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="font-display font-bold text-lg sm:text-xl text-brand-royal-light block">500+</span>
              <span className="text-[11px] text-gray-300 font-medium">Hiring Partners</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="font-display font-bold text-lg sm:text-xl text-emerald-400 block">4.8 / 5</span>
              <span className="text-[11px] text-gray-300 font-medium">Student Rating</span>
            </div>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#/programs"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-brand-royal to-blue-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-brand-royal/30 group"
            >
              {/* Sweeping shimmer effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>Explore Programs</span>
              <ArrowRight className="h-5 w-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#/contact"
              whileHover={{ scale: 1.03, border: '1px solid rgba(212, 175, 55, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              <span>Contact Us</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Cinematic Home Hero Visual with Floating Glass Badges */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Glowing Aura Ring */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-brand-royal via-brand-gold/30 to-blue-500 rounded-3xl blur-2xl opacity-40 animate-pulse-subtle" />

          {/* Main Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative w-full rounded-3xl overflow-hidden border border-white/20 bg-brand-navy-dark shadow-2xl group"
          >
            <img
              src="/images/home-hero.jpg"
              alt="Scholars Bridge - Connecting Students with Career Opportunities"
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/85 via-transparent to-transparent pointer-events-none" />

            {/* Floating Live Badge Top Left */}
            <div className="absolute top-4 left-4 p-3 rounded-2xl bg-brand-navy-accent/90 border border-white/15 backdrop-blur-md flex items-center gap-2.5 shadow-lg">
              <div className="p-2 rounded-xl bg-brand-gold/20 text-brand-gold">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">Target Outcomes</span>
                <span className="text-xs font-semibold text-white">Corporate-Ready Graduates</span>
              </div>
            </div>

            {/* Floating Live Badge Bottom Banner */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-navy-accent/95 border border-brand-gold/30 backdrop-blur-md flex items-center justify-between text-left shadow-xl">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                    The Career Bridge
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-white">
                  College Theory ➔ Corporate Placement
                </h4>
              </div>
              <div className="p-2.5 rounded-xl bg-brand-royal/40 border border-brand-royal/60 text-white">
                <TrendingUp className="h-5 w-5 text-brand-gold" />
              </div>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Hero bottom ambient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-gray to-transparent pointer-events-none" />
    </section>
  );
}
