import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, BookOpen, PenTool, Rocket, Briefcase, GraduationCap } from 'lucide-react';

interface Stage {
  num: string;
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  transitionText: string;
}

const stages: Stage[] = [
  {
    num: '01',
    icon: HelpCircle,
    title: 'Discover',
    subtitle: 'Identify Strengths & Paths',
    description: 'Participate in entry alignment assessments to understand your interests and build a clear career roadmap.',
    transitionText: 'Student',
  },
  {
    num: '02',
    icon: BookOpen,
    title: 'Learn',
    subtitle: 'Acquire Rigorous Theory',
    description: 'Study specialized concepts designed by top engineering leaders, laying down an unbreakable academic base.',
    transitionText: 'Skills',
  },
  {
    num: '03',
    icon: PenTool,
    title: 'Practice',
    subtitle: 'Solve Coding Sandboxes',
    description: 'Acquire practical muscle memory by completing daily database, styling, and algorithmic drills.',
    transitionText: 'Knowledge',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Build',
    subtitle: 'Assemble Capstone Apps',
    description: 'Work in cross-functional sprint groups to build and deploy high-performance web systems and AI applications.',
    transitionText: 'Projects',
  },
  {
    num: '05',
    icon: Briefcase,
    title: 'Prepare',
    subtitle: 'Resume & Mock Drills',
    description: 'Format standard industry resumes, practice behavioral coding interviews, and optimize your social profile presence.',
    transitionText: 'Career',
  },
  {
    num: '06',
    icon: GraduationCap,
    title: 'Launch',
    subtitle: 'Deploy into Target Placement',
    description: 'Enter targeted placements, secure interviews with partner corporations, and start your dream career path.',
    transitionText: 'Future',
  },
];

export default function CareerJourney() {
  return (
    <section className="py-20 bg-brand-navy-dark text-white relative overflow-hidden z-20">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-royal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            The Transformation Pathway
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4">
            Your Career Journey Timeline
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            From classroom foundations to your first high-paying placement. We bridge each critical step.
          </p>
        </div>

        {/* Visual Bridge Label (Student -> Future) */}
        <div className="flex justify-center items-center gap-2 sm:gap-6 mb-16 flex-wrap">
          {stages.map((stg, idx) => (
            <React.Fragment key={stg.num}>
              <div className="flex flex-col items-center">
                <span className="text-xs font-semibold text-brand-gold-light">{stg.num}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white mt-1">{stg.transitionText}</span>
              </div>
              {idx < stages.length - 1 && (
                <div className="h-[2px] w-8 sm:w-16 bg-gradient-to-r from-brand-royal to-brand-gold/50 hidden xs:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Alternating Vertical Timeline */}
        <div className="relative">
          
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-royal via-brand-gold to-brand-royal/20 transform -translate-x-1/2" />

          {/* Stages List */}
          <div className="flex flex-col gap-12 md:gap-16">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={stage.num}
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Bullet Point */}
                  <div className="absolute left-4 md:left-1/2 top-4 transform -translate-x-1/2 z-20">
                    <motion.div
                      whileInView={{ scale: [1, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="w-9 h-9 rounded-full bg-brand-navy border-2 border-brand-gold flex items-center justify-center shadow-lg group-hover:border-brand-royal"
                    >
                      <span className="text-[11px] font-bold text-brand-gold">{stage.num}</span>
                    </motion.div>
                  </div>

                  {/* Left/Right Blank spacing for desktop alignment */}
                  <div className="w-full md:w-1/2" />

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 mt-1 md:mt-0"
                  >
                    <div className="p-6 bg-brand-navy-accent border border-white/10 hover:border-brand-gold/30 rounded-2xl shadow-xl transition-all duration-300 group">
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="p-2.5 rounded-lg bg-white/5 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy-dark transition-all duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-brand-gold-light uppercase tracking-wider block">
                            Stage {stage.num}
                          </span>
                          <h3 className="font-display font-bold text-lg text-white">
                            {stage.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                        {stage.subtitle}
                      </p>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
