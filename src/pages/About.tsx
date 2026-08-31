import { motion } from 'framer-motion';
import { BookOpen, Code2, TrendingUp, CheckCircle, ShieldAlert, Award, GraduationCap, Users } from 'lucide-react';
import heroImage from '../assets/about hero.png';

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
      
      {/* Hero Section with Image */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden pt-30">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={heroImage}
            alt="Industry Ready Skills - Building the Bridge for Success"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </section>

      <div className="pt-24 pb-16 bg-brand-gray/30 min-h-screen">
      
      {/* Core About Header */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Arc Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-[400px] aspect-[4/5] bg-white rounded-3xl border border-brand-gray-dark shadow-xl p-8 flex flex-col justify-between overflow-hidden">
              <div>
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2 block">Our Vision In Action</span>
                <h4 className="font-display font-bold text-xl text-brand-navy leading-snug">The Career Bridge</h4>
                <p className="text-brand-gray-textlight text-sm mt-2">Connecting classroom concepts to job roles.</p>
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
              About Scholars Bridge
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-6">
              Bridging Education With Opportunity
            </h1>
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
                      <h3 className="font-display font-semibold text-base text-brand-navy text-left">{pillar.title}</h3>
                      <p className="text-brand-gray-textlight text-xs sm:text-sm mt-1 leading-relaxed text-left">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Academia vs Industry Matrix */}
      <section className="py-16 bg-white border-y border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
              Academia ≠ Industry
            </h2>
            <p className="text-brand-gray-textlight mt-2 text-sm">
              Both are vital, but they serve different goals. Our curriculum acts as the link.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {/* Academia Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl border border-brand-gray-dark bg-brand-gray/30 flex flex-col text-left"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-brand-navy/10 text-brand-navy">
                  <ShieldAlert className="h-5 w-5 text-brand-royal" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy">ACADEMICS</h3>
              </div>
              <ul className="flex flex-col gap-3.5 flex-grow">
                {academicItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-brand-gray-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-royal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industry Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl border border-brand-gold/40 bg-[#FAF8F5] flex flex-col text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/15 rounded-bl-full flex items-center justify-center">
                <Award className="h-5 w-5 text-brand-gold-dark" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-brand-gold/10 text-brand-gold-dark">
                  <GraduationCap className="h-5 w-5 text-brand-gold-dark" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy">INDUSTRY</h3>
              </div>
              <ul className="flex flex-col gap-3.5 flex-grow">
                {industryItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-brand-gray-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 text-center max-w-xl mx-auto px-4">
            <p className="text-brand-navy font-display font-semibold italic text-base sm:text-lg">
              "Both are important. But they are not the same. This roadmap builds the bridge between the two."
            </p>
          </div>
        </div>
      </section>

      {/* The Development Ecosystem */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            Coordinated Alignment
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
            The Development Ecosystem
          </h2>
          <p className="text-brand-gray-textlight mt-2 text-sm">
            Our structural tripartite integration delivers consistent placements.
          </p>
        </div>

        {/* 3 Circle Graphic */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {/* Circle 1: College */}
          <div className="w-64 h-64 rounded-full border-2 border-dashed border-brand-royal/40 bg-white shadow-lg p-6 flex flex-col items-center justify-center text-center group hover:border-brand-royal transition-colors">
            <GraduationCap className="h-8 w-8 text-brand-royal mb-3" />
            <h4 className="font-display font-bold text-sm text-brand-navy uppercase tracking-wider">College</h4>
            <p className="text-[11px] text-brand-gray-textlight mt-2 max-w-[150px]">Academic Knowledge & Fundamental Principles</p>
          </div>

          <div className="text-2xl font-bold text-brand-gold select-none lg:block hidden">+</div>

          {/* Circle 2: Industry Partner */}
          <div className="w-64 h-64 rounded-full border-2 border-dashed border-brand-gold/40 bg-white shadow-lg p-6 flex flex-col items-center justify-center text-center hover:border-brand-gold transition-colors">
            <Users className="h-8 w-8 text-brand-gold mb-3" />
            <h4 className="font-display font-bold text-sm text-brand-navy uppercase tracking-wider">Industry Partner</h4>
            <p className="text-[11px] text-brand-gray-textlight mt-2 max-w-[150px]">Practical Exposure & Real-World Projects</p>
          </div>

          <div className="text-2xl font-bold text-brand-gold select-none lg:block hidden">+</div>

          {/* Circle 3: Student */}
          <div className="w-64 h-64 rounded-full border-2 border-dashed border-brand-navy/30 bg-white shadow-lg p-6 flex flex-col items-center justify-center text-center hover:border-brand-navy transition-colors">
            <Award className="h-8 w-8 text-brand-navy mb-3" />
            <h4 className="font-display font-bold text-sm text-brand-navy uppercase tracking-wider">Student</h4>
            <p className="text-[11px] text-brand-gray-textlight mt-2 max-w-[150px]">Skills + Custom Projects + Soft Skill Growth</p>
          </div>
        </div>

        {/* Outcome Box */}
        <div className="mt-12 flex flex-col items-center">
          <div className="px-8 py-3 rounded-full bg-brand-navy text-brand-gold font-bold text-sm tracking-widest uppercase shadow-md">
            Employable Graduate
          </div>
          <p className="text-brand-gray-textlight text-xs font-semibold uppercase tracking-wider mt-4">
            "Together, we build employable graduates."
          </p>
        </div>
      </section>

      </div>
    </div>
  );
}
