import { motion } from 'framer-motion';
import { Check, ClipboardList, TrendingUp } from 'lucide-react';

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
      
      {/* 1. Header */}
      <section className="py-12 bg-brand-gray/30 border-b border-brand-gray-dark mb-16">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            The Scholars Bridge Advantage
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
            Why Students Choose Scholars Bridge
          </h1>
          <p className="text-brand-gray-textlight text-base max-w-2xl">
            We don't just teach tech; we establish the professional and academic bridge that drives direct placement results.
          </p>
        </div>
      </section>

      {/* 2. Interactive Circular Features Network */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative overflow-hidden">
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
                  className="flex gap-4 p-5 rounded-2xl border border-brand-gray-dark bg-brand-gray/40 hover:bg-white hover:shadow-md transition-all duration-300 group text-left font-sans"
                >
                  <div className="p-2 h-fit rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                    <Check className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-navy">{feature.title}</h3>
                    <p className="text-brand-gray-textlight text-xs mt-1.5 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Center Pulsing Logo Hub */}
          <div className="lg:col-span-4 flex items-center justify-center py-6 relative z-10">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-brand-gold/30 animate-[ping_3s_ease-in-out_infinite]" />
              <div className="absolute inset-4 rounded-full border border-brand-royal/20 animate-pulse-subtle" />
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-brand-navy border-2 border-brand-gold shadow-2xl flex flex-col items-center justify-center p-4 text-center">
                <img
                  src="/logo.jpg"
                  alt="Scholars Bridge Hub"
                  className="h-12 w-auto object-contain rounded-md mb-2"
                />
                <span className="text-[10px] font-display font-bold tracking-widest text-white leading-none">SCHOLARS</span>
                <span className="text-[10px] font-display font-bold tracking-widest text-white mt-0.5">BRIDGE</span>
                <span className="text-[8px] font-semibold text-brand-gold mt-1 uppercase tracking-wider">ADVANTAGE</span>
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
                  className="flex gap-4 p-5 rounded-2xl border border-brand-gray-dark bg-brand-gray/40 hover:bg-white hover:shadow-md transition-all duration-300 group text-left font-sans"
                >
                  <div className="p-2 h-fit rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
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
                  <Check className="h-4 w-4 text-emerald-500" /> Technical Presentations
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Mock Interview Assessments
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Placement Preparation Record
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" /> Strong Soft Skill & Communication base
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Industry Readiness Scorecard */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-left">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-royal/10 border border-brand-royal/30 text-brand-royal text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Target Competencies</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
            Industry Readiness Scorecard
          </h2>
          <p className="text-brand-gray-textlight mt-2 text-sm">
            Our scorecard metrics and targets to make graduates completely corporate-ready (1 to 5 scale).
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-brand-gold/25 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
          {scorecardMetrics.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-brand-navy">
                <span>{item.name}</span>
                <span className="text-brand-gold-dark font-bold">{item.score.toFixed(1)} / 5.0</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="h-2.5 w-full bg-brand-gray-dark rounded-full overflow-hidden relative">
                {/* Score Segment */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(item.score / 5) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.05 }}
                  className="h-full bg-gradient-to-r from-brand-royal to-brand-gold rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
