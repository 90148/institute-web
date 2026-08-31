import { motion } from 'framer-motion';
import { Check, ClipboardList, TrendingUp, Sparkles, Award, ShieldCheck, ArrowRight, Star, Target } from 'lucide-react';

interface FeatureItem {
  id: number;
  title: string;
  desc: string;
  side: 'left' | 'right';
}

const features: FeatureItem[] = [
  { id: 1, title: 'Industry-focused Learning', desc: 'Curriculum shaped directly by active corporate software engineers and product teams.', side: 'left' },
  { id: 2, title: 'Practical Project Experience', desc: 'Build production-level tools, deploy systems, and compile a strong GitHub portfolio.', side: 'left' },
  { id: 3, title: 'Career-oriented Training', desc: 'Structured training focusing heavily on technical interviews, system design, and algorithms.', side: 'left' },
  { id: 4, title: 'Expert Mentorship', desc: 'Acquire 1-on-1 feedback and advice from professionals working in top tech platforms.', side: 'left' },
  { id: 5, title: 'Skill-based Programs', desc: 'No fluff. Learn only what matters in the industry and discard outdated syllabus contents.', side: 'right' },
  { id: 6, title: 'Professional Development', desc: 'Excel in public speaking, professional networking, mock negotiation, and CV styling.', side: 'right' },
  { id: 7, title: 'Personalized Guidance', desc: 'Enjoy personalized learning tracks designed specifically for your current baseline and goals.', side: 'right' },
  { id: 8, title: 'Future-ready Education', desc: 'Gain immediate competence in AI modeling, cloud automation, and modern fullstack frameworks.', side: 'right' },
];

interface ScorecardMetric {
  name: string;
  score: number;
}

const scorecardMetrics: ScorecardMetric[] = [
  { name: 'Technical Skills', score: 4.5 },
  { name: 'Projects', score: 4.2 },
  { name: 'Communication', score: 4.0 },
  { name: 'Problem Solving', score: 4.5 },
  { name: 'GitHub Activity', score: 4.2 },
  { name: 'Internship', score: 4.0 },
  { name: 'Resume', score: 4.8 },
  { name: 'Aptitude', score: 4.0 },
  { name: 'Mock Interviews', score: 4.5 }
];

export default function WhyChooseUs() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      
      {/* 1. Cinematic Why Choose Us Hero Section */}
      <section className="relative pt-8 pb-16 bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white overflow-hidden mb-16">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-royal/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-royal/20 border border-brand-royal/40 text-brand-gold-light text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                <span>The Scholars Bridge Advantage</span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
                Bridging Academia to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal-light via-blue-400 to-brand-gold">
                  Industry Excellence
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                We don't just teach theory; we build your professional identity, project portfolio, and interview confidence so you graduate as a corporate-ready engineer.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <Award className="h-4 w-4 text-brand-gold flex-shrink-0" />
                  <span>Graduate Portfolio Standard</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <ShieldCheck className="h-4 w-4 text-brand-gold flex-shrink-0" />
                  <span>Industry Readiness Scorecard</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#features-network"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-royal to-blue-700 hover:from-blue-600 hover:to-brand-royal text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-royal/30 transition-all duration-300 group"
                >
                  <span>Explore Advantages</span>
                  <ArrowRight className="h-4 w-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#scorecard-section"
                  className="px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>View Scorecard</span>
                  <Target className="h-4 w-4 text-brand-gold" />
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-royal via-brand-gold/30 to-blue-600 rounded-3xl blur-xl opacity-40 animate-pulse-subtle" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-brand-navy-dark shadow-2xl group">
                <img
                  src="/images/why-us-hero.jpg"
                  alt="Scholars Bridge Placement Achievement and Industry Bridge"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-navy-accent/90 border border-brand-gold/30 backdrop-blur-md flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                      Placement Benchmark
                    </span>
                    <h4 className="font-display font-bold text-sm text-white mt-0.5">
                      Target 4.5+ Industry Readiness Index
                    </h4>
                  </div>
                  <div className="p-2 rounded-xl bg-brand-gold/20 text-brand-gold">
                    <Star className="h-5 w-5 fill-brand-gold" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Interactive Circular Features Network */}
      <section id="features-network" className="max-w-7xl mx-auto px-6 mb-24 relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            Core Pillars
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Why Students Choose Scholars Bridge
          </h2>
          <p className="text-brand-gray-textlight mt-2 text-sm sm:text-base">
            An all-in-one ecosystem connecting learning, mentorship, portfolio creation, and direct corporate placement.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* SVG Connecting Lines - hidden on mobile */}
          <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
              <defs>
                <linearGradient id="left-line-grad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="right-line-grad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 380,80 C 480,80 500,200 600,300" stroke="url(#left-line-grad)" strokeWidth="1.5" />
              <path d="M 380,210 C 480,210 500,250 600,300" stroke="url(#left-line-grad)" strokeWidth="1.5" />
              <path d="M 380,390 C 480,390 500,350 600,300" stroke="url(#left-line-grad)" strokeWidth="1.5" />
              <path d="M 380,520 C 480,520 500,400 600,300" stroke="url(#left-line-grad)" strokeWidth="1.5" />
              <path d="M 820,80 C 720,80 700,200 600,300" stroke="url(#right-line-grad)" strokeWidth="1.5" />
              <path d="M 820,210 C 720,210 700,250 600,300" stroke="url(#right-line-grad)" strokeWidth="1.5" />
              <path d="M 820,390 C 720,390 700,350 600,300" stroke="url(#right-line-grad)" strokeWidth="1.5" />
              <path d="M 820,520 C 720,520 700,400 600,300" stroke="url(#right-line-grad)" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Left Features */}
          <div className="lg:col-span-4 flex flex-col gap-6 relative z-10">
            {features
              .filter((f) => f.side === 'left')
              .map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-brand-gray-dark shadow-sm hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="p-2 rounded-xl bg-brand-gold/10 flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-navy">{feature.title}</h3>
                    <p className="text-brand-gray-textlight text-xs mt-1.5 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Center Circular Brand Emblem Hub */}
          <div className="lg:col-span-4 flex items-center justify-center relative z-10 py-6 lg:py-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-brand-navy flex flex-col items-center justify-center p-8 text-center border-4 border-brand-gold/40 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.25),transparent_70%)] pointer-events-none" />
              
              <div className="p-3 bg-white/10 rounded-2xl border border-white/20 mb-3 shadow-inner">
                <img src="/logo.jpg" alt="Logo" className="h-10 w-auto rounded" />
              </div>

              <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight">
                SCHOLARS BRIDGE
              </h4>
              <p className="text-brand-gold text-[10px] sm:text-xs font-semibold tracking-wider uppercase mt-1">
                Student Growth & Placement Hub
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-royal/40 border border-brand-royal/60 text-[10px] text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Industry Ready Standards</span>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-4 flex flex-col gap-6 relative z-10">
            {features
              .filter((f) => f.side === 'right')
              .map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-brand-gray-dark shadow-sm hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className="p-2 rounded-xl bg-brand-gold/10 flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-navy">{feature.title}</h3>
                    <p className="text-brand-gray-textlight text-xs mt-1.5 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* 3. The Graduate Portfolio Standard Checklist */}
      <section className="py-16 bg-brand-gray/30 border-y border-brand-gray-dark text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
              Our Completion Standard
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
              The Graduate Portfolio
            </h2>
            <p className="text-brand-gray-textlight mt-2 text-sm">
              By graduation, every student should have a "Corporate Ready Graduate" profile:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1: Digital Identity */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white border border-brand-gray-dark shadow-sm flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-navy/10 text-brand-navy">
                  <svg className="h-5 w-5 text-brand-royal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy">Digital Identity</h3>
              </div>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-brand-gray-text">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Professional Resume
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Optimized LinkedIn Profile
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Active GitHub Profile
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Personal Portfolio Website
                </li>
              </ul>
            </motion.div>

            {/* Box 2: Demonstrated Capability */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white border border-brand-gray-dark shadow-sm flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-navy/10 text-brand-navy">
                  <svg className="h-5 w-5 text-brand-royal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy">Demonstrated Capability</h3>
              </div>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-brand-gray-text">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> 5-8 Practical Mini Projects
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> 1 Major Capstone Project
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Internship / Industry Exposure
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Technical Certifications
                </li>
              </ul>
            </motion.div>

            {/* Box 3: Proven Readiness */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-white border border-brand-gray-dark shadow-sm flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-navy/10 text-brand-navy">
                  <ClipboardList className="h-5 w-5 text-brand-royal" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy">Proven Readiness</h3>
              </div>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-brand-gray-text">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Technical Presentation Experience
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Mock Interview Feedback Reports
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Coding Assessment Readiness (LeetCode/HackerRank)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Documented Personal Development
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Industry Readiness Scorecard */}
      <section id="scorecard-section" className="py-20 max-w-7xl mx-auto px-6 text-left">
        <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-brand-navy-dark overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Target Standard: Target Score ≥ 4.0 / 5.0</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Industry Readiness Scorecard
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              We benchmark every student against the 9 critical vectors that hiring managers and technical leads assess during corporate recruitment.
            </p>
          </div>

          {/* Metrics Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {scorecardMetrics.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-gray-200">{item.name}</span>
                  <span className="text-brand-gold font-bold">{item.score} / 5.0</span>
                </div>
                
                {/* Progress track */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-royal-light to-brand-gold transition-all duration-1000"
                    style={{ width: `${(item.score / 5.0) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 relative z-10">
            <span>Overall Employability Benchmark Target: <strong className="text-brand-gold font-bold">4.4 / 5.0 (Corporate Ready)</strong></span>
            <a
              href="#/contact"
              className="px-6 py-2.5 rounded-full bg-brand-gold text-brand-navy-dark font-bold text-xs hover:bg-yellow-400 transition-colors"
            >
              Get Assessed Today
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
