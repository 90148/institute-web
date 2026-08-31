import { motion } from 'framer-motion';
import { BookOpen, Code2, TrendingUp, CheckCircle } from 'lucide-react';

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

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-gray/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Creative Visual (Education + Career Growth Bridge) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Visual background elements */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-royal/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold/5 rounded-full blur-2xl" />

            {/* Premium CSS/SVG Graphic */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-white rounded-3xl border border-brand-gray-dark shadow-xl p-8 flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110 duration-300" />
              
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">Our Vision In Action</span>
                <h4 className="font-display font-bold text-xl text-brand-navy leading-snug">The Career Bridge</h4>
                <p className="text-brand-gray-textlight text-sm mt-2">Connecting classroom concepts to job roles.</p>
              </div>

              {/* Central Vector Graphics: The Bridge */}
              <div className="my-8 flex justify-center items-center relative h-[220px]">
                <svg className="w-full h-full" viewBox="0 0 300 220" fill="none">
                  {/* Grid background inside card */}
                  <defs>
                    <pattern id="card-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="300" height="220" fill="url(#card-grid)" rx="16" />

                  {/* Connecting Arc (The Bridge) */}
                  <path
                    d="M 50,170 C 100,60 200,60 250,170"
                    stroke="#0A192F"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="stroke-brand-navy"
                  />
                  <path
                    d="M 50,170 C 100,60 200,60 250,170"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeDasharray="6,6"
                    className="stroke-brand-gold"
                  />

                  {/* Left Anchor: Academic Circle */}
                  <circle cx="50" cy="170" r="14" fill="#1E40AF" />
                  <text x="50" y="174" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">EDU</text>

                  {/* Right Anchor: Career Target */}
                  <circle cx="250" cy="170" r="14" fill="#D4AF37" />
                  <text x="250" y="174" fill="#0A192F" fontSize="10" fontWeight="bold" textAnchor="middle">JOB</text>

                  {/* Connecting Line Nodes */}
                  <circle cx="105" cy="110" r="4" fill="#3B82F6" className="animate-pulse" />
                  <circle cx="150" cy="92" r="4" fill="#F59E0B" className="animate-pulse" />
                  <circle cx="195" cy="110" r="4" fill="#10B981" className="animate-pulse" />

                  {/* Progress Line */}
                  <path
                    d="M 50,170 C 70,135 105,110 105,110"
                    stroke="#3B82F6"
                    strokeWidth="2.5"
                  />
                </svg>

                {/* Floating Micro Labels */}
                <span className="absolute left-[38px] bottom-[10px] text-[10px] font-bold text-brand-royal uppercase">Academic base</span>
                <span className="absolute right-[28px] bottom-[10px] text-[10px] font-bold text-brand-gold-dark uppercase">Career placement</span>
              </div>

              {/* Trust statement */}
              <div className="flex items-center gap-2 bg-brand-navy/5 p-3.5 rounded-xl border border-brand-navy/10">
                <CheckCircle className="h-5 w-5 text-brand-gold flex-shrink-0" />
                <span className="text-xs text-brand-navy font-semibold">100% Industry-Aligned Curriculums</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text & Pillar Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
              About Scholars Bridge
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-6">
              Bridging Education With Opportunity
            </h2>
            <p className="text-brand-gray-text font-normal text-base leading-relaxed mb-8">
              At Scholars Bridge, we are committed to closing the skills gap in the modern economy. By integrating academic rigor with real-world technological training, we enable students to build robust portfolios and transition smoothly into highly rewarding careers.
            </p>

            {/* Pillars Stack */}
            <div className="flex flex-col gap-5">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex gap-4 p-5 rounded-2xl bg-white border border-brand-gray-dark/50 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`p-3 h-fit rounded-xl ${pillar.color} flex-shrink-0`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-display font-semibold text-base text-brand-navy">
                        {pillar.title}
                      </h3>
                      <p className="text-brand-gray-textlight text-sm mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
