import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden z-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-royal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            The Scholars Bridge Advantage
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Why Students Choose Scholars Bridge
          </h2>
          <p className="text-brand-gray-textlight mt-4 text-sm sm:text-base">
            We dont just teach tech; we establish the professional and academic bridge that drives direct career placement.
          </p>
        </div>

        {/* Central Layout (Responsive Grid/Flex) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* SVG Connecting Lines - hidden on small viewports */}
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

              {/* Left features connections to center (x: 600, y: 300) */}
              <path d="M 380,80 C 480,80 500,200 600,300" stroke="url(#left-line-grad)" strokeWidth="1.5" />
              <path d="M 380,210 C 480,210 500,250 600,300" stroke="url(#left-line-grad)" strokeWidth="1.5" />
              <path d="M 380,390 C 480,390 500,350 600,300" stroke="url(#left-line-grad)" strokeWidth="1.5" />
              <path d="M 380,520 C 480,520 500,400 600,300" stroke="url(#left-line-grad)" strokeWidth="1.5" />

              {/* Right features connections to center */}
              <path d="M 820,80 C 720,80 700,200 600,300" stroke="url(#right-line-grad)" strokeWidth="1.5" />
              <path d="M 820,210 C 720,210 700,250 600,300" stroke="url(#right-line-grad)" strokeWidth="1.5" />
              <path d="M 820,390 C 720,390 700,350 600,300" stroke="url(#right-line-grad)" strokeWidth="1.5" />
              <path d="M 820,520 C 720,520 700,400 600,300" stroke="url(#right-line-grad)" strokeWidth="1.5" />

              {/* Glowing circles traveling along lines */}
              <circle cx="600" cy="300" r="280" stroke="rgba(212,175,55,0.06)" strokeWidth="1" />
            </svg>
          </div>

          {/* Left Columns (Features 1-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 relative z-10">
            {features
              .filter((f) => f.side === 'left')
              .map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 p-5 rounded-2xl border border-brand-gray-dark bg-brand-gray/40 hover:bg-white hover:shadow-md transition-all duration-300 group text-left"
                >
                  <div className="p-2 h-fit rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                    <Check className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-navy">
                      {feature.title}
                    </h3>
                    <p className="text-brand-gray-textlight text-xs mt-1.5 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Center Column: Hub Graphic (Logo & Pulsing Emblem) */}
          <div className="lg:col-span-4 flex items-center justify-center py-6 lg:py-0 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center"
            >
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-brand-gold/30 animate-[ping_3s_ease-in-out_infinite]" />
              <div className="absolute inset-4 rounded-full border border-brand-royal/20 animate-pulse-subtle" />
              
              {/* Center Core Badge */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-brand-navy border-2 border-brand-gold shadow-2xl flex flex-col items-center justify-center p-4 text-center">
                <img
                  src="/logo.jpg"
                  alt="Scholars Bridge Emblem"
                  className="h-12 w-auto object-contain rounded-md mb-2"
                />
                <span className="text-[10px] font-display font-bold tracking-widest text-white leading-none">
                  SCHOLARS
                </span>
                <span className="text-[10px] font-display font-bold tracking-widest text-white mt-0.5">
                  BRIDGE
                </span>
                <span className="text-[8px] font-semibold text-brand-gold mt-1 uppercase tracking-wider">
                  ADVANTAGE
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Columns (Features 5-8) */}
          <div className="lg:col-span-4 flex flex-col gap-6 relative z-10">
            {features
              .filter((f) => f.side === 'right')
              .map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ x: -6 }}
                  className="flex gap-4 p-5 rounded-2xl border border-brand-gray-dark bg-brand-gray/40 hover:bg-white hover:shadow-md transition-all duration-300 group text-left"
                >
                  <div className="p-2 h-fit rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                    <Check className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-navy">
                      {feature.title}
                    </h3>
                    <p className="text-brand-gray-textlight text-xs mt-1.5 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
}
