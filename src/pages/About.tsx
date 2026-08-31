import { motion } from 'framer-motion';
import { BookOpen, Code2, TrendingUp, CheckCircle, Award, GraduationCap, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    title: 'Learn',
    color: 'text-blue-500 bg-blue-50',
    description: 'Acquire high-demand technical and cognitive skills through curriculum structured by industry experts.',
  },
  {
    icon: Code2,
    title: 'Build',
    color: 'text-amber-500 bg-amber-50',
    description: 'Apply theoretical knowledge by building comprehensive, production-grade projects and portfolio pieces.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    color: 'text-emerald-500 bg-emerald-50',
    description: 'Receive personalized mentorship, career counselling, resume reviews, and placement preparation to launch your career.',
  },
];

const academicItems = [
  'Concepts & Theory',
  'Subjects & Examinations',
  'Fundamentals',
  'Academic Assignments',
  'Semester Evaluation',
];

const industryItems = [
  'Practical Skills',
  'Problem Solving',
  'Projects',
  'Communication & Presentation',
  'Teamwork & Collaboration',
  'Professional Tools & Git',
  'Delivery Mindset & Agile',
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Cinematic Hero Section with The Industry Ready Skills Bridge Graphic */}
      <section className="relative w-full bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-dark pt-28 pb-12 overflow-hidden flex flex-col items-center justify-center text-white">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-royal/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          
          {/* Tagline Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-royal/20 border border-brand-royal/40 text-brand-gold-light text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
              <span>Building The Bridge Today For A Successful Tomorrow</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Industry Ready Skills <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal-light via-blue-400 to-brand-gold">
                Connecting College to Career
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Transforming academic foundations into corporate readiness through practical exposure, technical mastery, and professional attitude.
            </p>
          </motion.div>

          {/* Centerpiece Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-brand-navy-dark group max-w-6xl mx-auto"
          >
            <img 
              src="/images/about-bridge-hero.jpg"
              alt="Industry Ready Skills - Building The Bridge Today For A Successful Tomorrow: College to Industry"
              className="w-full h-auto object-contain max-h-[85vh] mx-auto rounded-3xl"
            />

            {/* Bottom floating summary banner */}
            <div className="p-4 sm:p-5 bg-brand-navy-accent/95 border-t border-brand-gold/30 flex flex-wrap items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-gold/20 text-brand-gold">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                    Core Philosophy
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Learn • Practice • Adapt • Succeed
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>College (Theory & Fundamentals)</span>
                </span>
                <span className="text-brand-gold font-bold">➔</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                  <span>Industry (Real World Opportunities)</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Core About Section */}
      <div className="py-16 bg-brand-gray/30 min-h-screen">
      
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Arc Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-[400px] aspect-[4/5] bg-white rounded-3xl border border-brand-gray-dark shadow-xl p-8 flex flex-col justify-between overflow-hidden">
              <div>
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2 block">Our Vision In Action</span>
                <h4 className="font-display font-bold text-xl text-brand-navy leading-snug">The Career Bridge</h4>
                <p className="text-brand-gray-textlight text-sm mt-2">Connecting classroom concepts to corporate employment.</p>
              </div>

              <div className="my-8 flex justify-center items-center relative h-[200px]">
                <svg className="w-full h-full" viewBox="0 0 300 200" fill="none">
                  <path
                    d="M 50,150 C 100,50 200,50 250,150"
                    stroke="#0A192F"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 50,150 C 100,50 200,50 250,150"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="6,6"
                  />
                  <circle cx="50" cy="150" r="14" fill="#1E40AF" />
                  <text x="50" y="154" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">EDU</text>

                  <circle cx="250" cy="150" r="14" fill="#D4AF37" />
                  <text x="250" y="154" fill="#0A192F" fontSize="10" fontWeight="bold" textAnchor="middle">JOB</text>

                  <circle cx="105" cy="98" r="4" fill="#3B82F6" className="animate-pulse" />
                  <circle cx="150" cy="80" r="4" fill="#F59E0B" className="animate-pulse" />
                  <circle cx="195" cy="98" r="4" fill="#10B981" className="animate-pulse" />
                </svg>
              </div>

              <div className="flex items-center gap-2 bg-brand-navy/5 p-3.5 rounded-xl border border-brand-navy/10">
                <CheckCircle className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <span className="text-xs text-brand-navy font-semibold">100% Industry-Aligned Curriculums</span>
              </div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
              About Scholars Bridge
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-6">
              Bridging Education With Opportunity
            </h2>
            <p className="text-brand-gray-text text-base leading-relaxed mb-8">
              At Scholars Bridge, we are committed to closing the skills gap in the modern economy. By integrating academic rigor with real-world technological training, we enable students to build robust portfolios and transition smoothly into highly rewarding careers.
            </p>

            <div className="flex flex-col gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-brand-gray-dark/50 shadow-sm">
                    <div className={`p-3 h-fit rounded-xl ${pillar.color} flex-shrink-0`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-navy text-base">{pillar.title}</h4>
                      <p className="text-brand-gray-textlight text-xs mt-1 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </section>

      {/* 3. Academia != Industry Comparison Matrix (From reference slide 4) */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-left">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            The Core Paradigm
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
            Academia ≠ Industry
          </h2>
          <p className="text-brand-gray-textlight mt-2 text-sm">
            Understanding the distinction between theoretical coursework and commercial corporate delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Academics */}
          <div className="p-8 rounded-3xl bg-white border border-brand-gray-dark shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-brand-royal">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-navy">Academics</h3>
                <span className="text-xs text-brand-gray-textlight">Foundational Knowledge</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-3">
              {academicItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-brand-gray-text">
                  <span className="w-2 h-2 rounded-full bg-brand-royal/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Industry */}
          <div className="p-8 rounded-3xl bg-white border-2 border-brand-gold/40 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-brand-gold text-brand-navy font-bold text-[10px] uppercase tracking-widest rounded-bl-xl">
              Target Profile
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-brand-gold/10 text-brand-gold-dark">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-navy">Industry</h3>
                <span className="text-xs text-brand-gray-textlight">Production Readiness</span>
              </div>
            </div>
            
            <ul className="flex flex-col gap-3">
              {industryItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-brand-navy">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. The Development Ecosystem (From reference slide 5) */}
      <section className="py-16 bg-white border-t border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            Collaborative Model
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight mb-4">
            The Development Ecosystem
          </h2>
          <p className="text-brand-gray-textlight text-sm max-w-xl mx-auto mb-16">
            College + Industry Partner + Student combined to forge an Employable Graduate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Stakeholder 1: College */}
            <div className="p-8 rounded-3xl bg-brand-gray/30 border border-brand-gray-dark flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center mb-6 shadow-md">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-2">College</h3>
              <p className="text-xs font-semibold text-brand-royal mb-4">Theory & Fundamentals</p>
              <p className="text-brand-gray-text text-xs leading-relaxed">
                Builds academic rigor, core curriculum foundations, and educational environments for multi-year cohorts.
              </p>
            </div>

            {/* Stakeholder 2: Industry Partner */}
            <div className="p-8 rounded-3xl bg-brand-gray/30 border border-brand-gray-dark flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-royal text-white flex items-center justify-center mb-6 shadow-md">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Industry Partner</h3>
              <p className="text-xs font-semibold text-brand-royal mb-4">Exposure & Mentorship</p>
              <p className="text-brand-gray-text text-xs leading-relaxed">
                Guides project quality, code review standards, agile team workflows, and active recruitment benchmarks.
              </p>
            </div>

            {/* Stakeholder 3: Student */}
            <div className="p-8 rounded-3xl bg-brand-gray/30 border border-brand-gray-dark flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-gold text-brand-navy flex items-center justify-center mb-6 shadow-md">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Student</h3>
              <p className="text-xs font-semibold text-brand-royal mb-4">Skills & Projects</p>
              <p className="text-brand-gray-text text-xs leading-relaxed">
                Applies concepts, completes continuous projects, acquires portfolio credentials, and becomes corporate ready.
              </p>
            </div>

          </div>

          <div className="mt-12 p-6 rounded-2xl bg-brand-navy text-white max-w-xl mx-auto flex items-center justify-center gap-3">
            <span className="font-bold text-brand-gold text-base">➔</span>
            <span className="font-display font-bold text-base">Outcome: Employable Graduate Ready for Day 1</span>
          </div>

        </div>
      </section>

      </div>
    </div>
  );
}
