import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, GraduationCap, Code, Brain, ChevronRight } from 'lucide-react';

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

  const floatVariants = (delay: number): any => ({
    animate: {
      y: [0, -12, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-royal/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Network background grid line visual */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Top Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-royal/20 border border-brand-royal/30 text-brand-gold-light text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span>Guiding Students • Building Careers • Transforming Futures</span>
          </motion.div>

          {/* Logo element inside hero */}
          <motion.div variants={itemVariants} className="mb-4 flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="h-8 w-auto rounded opacity-80" />
            <span className="text-xs tracking-widest text-brand-gold font-semibold uppercase">SCHOLARS BRIDGE</span>
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
            className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mb-8"
          >
            Professional EdTech services designed to bridge the gap between education, skills, and successful careers.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#programs"
              onClick={(e) => handleScrollClick(e, '#programs')}
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
              href="#contact"
              onClick={(e) => handleScrollClick(e, '#contact')}
              whileHover={{ scale: 1.03, border: '1px solid rgba(212, 175, 55, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              <span>Contact Us</span>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Creative Visual (SVG Network & Geometry) */}
        <div className="lg:col-span-5 flex items-center justify-center relative select-none">
          {/* Core Visual Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"
          >
            {/* Spinning background circles */}
            <div className="absolute inset-0 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[30px] border border-brand-royal/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-[60px] border border-dashed border-brand-gold/10 rounded-full animate-[spin_20s_linear_infinite]" />

            {/* Glowing nodes & connections in an SVG layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              {/* Custom linear gradients */}
              <defs>
                <linearGradient id="bridge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
                </linearGradient>
                <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Connecting Bridge Lines */}
              <path
                d="M 60,300 C 130,220 270,220 340,300"
                fill="none"
                stroke="url(#bridge-grad)"
                strokeWidth="3"
                strokeDasharray="4,4"
              />
              <path
                d="M 60,300 L 340,300"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
              
              {/* Network Connections */}
              <line x1="80" y1="120" x2="200" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="200" y1="80" x2="320" y2="120" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="80" y1="120" x2="150" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="320" y1="120" x2="250" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="150" y1="210" x2="250" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="200" y1="80" x2="200" y2="298" stroke="rgba(212,175,55,0.2)" strokeWidth="1.5" />
            </svg>

            {/* Central Graduation Cap floating geometry */}
            <motion.div
              variants={floatVariants(0)}
              animate="animate"
              className="absolute z-20 bg-brand-navy-accent/90 border border-brand-gold/30 p-6 rounded-2xl shadow-2xl flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-brand-gold/10 rounded-full blur-md" />
                <GraduationCap className="h-16 w-16 text-brand-gold relative z-10" />
              </div>
            </motion.div>

            {/* Floating Node 1: Code */}
            <motion.div
              variants={floatVariants(1)}
              animate="animate"
              className="absolute top-12 left-12 bg-brand-navy-accent border border-brand-royal/30 p-3.5 rounded-xl shadow-lg flex items-center justify-center"
            >
              <Code className="h-6 w-6 text-brand-royal-light" />
            </motion.div>

            {/* Floating Node 2: Brain */}
            <motion.div
              variants={floatVariants(2.5)}
              animate="animate"
              className="absolute top-12 right-12 bg-brand-navy-accent border border-brand-royal/30 p-3.5 rounded-xl shadow-lg flex items-center justify-center"
            >
              <Brain className="h-6 w-6 text-pink-400" />
            </motion.div>

            {/* Floating Node 3: BookOpen */}
            <motion.div
              variants={floatVariants(1.8)}
              animate="animate"
              className="absolute bottom-28 left-6 bg-brand-navy-accent border border-brand-royal/30 p-3.5 rounded-xl shadow-lg flex items-center justify-center"
            >
              <BookOpen className="h-6 w-6 text-emerald-400" />
            </motion.div>

            {/* Floating Node 4: Career growth indicator */}
            <motion.div
              variants={floatVariants(3.2)}
              animate="animate"
              className="absolute bottom-28 right-6 bg-brand-navy-accent border border-brand-gold/30 p-3.5 rounded-xl shadow-lg flex items-center justify-center"
            >
              <Sparkles className="h-6 w-6 text-brand-gold" />
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Hero bottom ambient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-gray to-transparent pointer-events-none" />
    </section>
  );
}
