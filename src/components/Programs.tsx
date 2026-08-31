import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, BarChart2, Cpu, Globe2, Cloud, HeartHandshake, ArrowRight } from 'lucide-react';

interface ProgramItem {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  duration: string;
}

const programsData: ProgramItem[] = [
  {
    id: 'programming',
    icon: Terminal,
    title: 'Programming Foundations',
    shortDesc: 'Master data structures, algorithms, and logical problem solving.',
    longDesc: 'Learn the core concepts of software construction. Master arrays, lists, trees, graphs, dynamic programming, and complexity analysis using Python or C++.',
    tech: ['Python', 'C++', 'Data Structures', 'Algorithms'],
    duration: '12 Weeks',
  },
  {
    id: 'data-analytics',
    icon: BarChart2,
    title: 'Data Analytics',
    shortDesc: 'Analyze raw data datasets and extract high-value business insights.',
    longDesc: 'Turn raw unstructured data into interactive analytical reports. Master relational database querying, statistical cleaning, data modeling, and business dashboards.',
    tech: ['SQL', 'Power BI', 'Pandas', 'Excel'],
    duration: '16 Weeks',
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'Artificial Intelligence',
    shortDesc: 'Build intelligent neural models and generative model applications.',
    longDesc: 'Enter the cutting edge of modern technology. Build linear regressions, decision forests, convolutional neural networks, LLM integrations, and pipeline deployments.',
    tech: ['PyTorch', 'TensorFlow', 'NLP', 'Scikit-Learn'],
    duration: '24 Weeks',
  },
  {
    id: 'web-dev',
    icon: Globe2,
    title: 'Web Development',
    shortDesc: 'Build high-performance, responsive full-stack web applications.',
    longDesc: 'Learn the complete architectural flow of web systems. Build user interfaces using React, scalable API services using Node.js/Next.js, and wire up database layers.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    duration: '16 Weeks',
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud & DevOps',
    shortDesc: 'Deploy and scale modern distributed cloud architectures.',
    longDesc: 'Automate build environments and system scaling. Master container orchestrations, continuous integration pipelines, infrastructure-as-code, and cloud security.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    duration: '14 Weeks',
  },
  {
    id: 'career-dev',
    icon: HeartHandshake,
    title: 'Career Development',
    shortDesc: 'Acquire mock interview skills and high-impact communication.',
    longDesc: 'Bridge the gap between technology and industry entry. Receive structural training on behavioral interview formulas, public pitch delivery, and executive networking.',
    tech: ['Resume Review', 'Mock Interviews', 'Soft Skills', 'LinkedIn Strategy'],
    duration: '8 Weeks',
  },
];

export default function Programs() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="programs" className="py-20 bg-brand-gray/30 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
              Curriculum Paths
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
              Build Skills That Build Careers
            </h2>
          </div>
          <p className="text-brand-gray-textlight text-sm max-w-sm md:text-right">
            Carefully curated specialized learning pathways crafted to transition students into industry-ready software engineers, analysts, and leaders.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((prog, idx) => {
            const Icon = prog.icon;
            const isHovered = hoveredCard === prog.id;

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredCard(prog.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative bg-white rounded-3xl border border-brand-gray-dark/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer min-h-[360px] flex flex-col justify-between"
              >
                {/* Gold Highlight Ring on Hover */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full pointer-events-none transition-transform duration-300 ${
                    isHovered ? 'scale-125' : 'scale-100'
                  }`}
                />

                <div className="flex flex-col gap-6">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-brand-navy text-brand-gold group-hover:rotate-6 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold text-brand-royal bg-brand-royal/10 px-3 py-1 rounded-full">
                      {prog.duration}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                      {prog.title}
                    </h3>
                    
                    {/* Switchable descriptions */}
                    <div className="relative overflow-hidden min-h-[90px]">
                      <p className={`text-brand-gray-text text-sm leading-relaxed absolute inset-0 transition-opacity duration-300 ${
                        isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}>
                        {prog.shortDesc}
                      </p>
                      <p className={`text-brand-gray-textlight text-xs leading-relaxed absolute inset-0 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}>
                        {prog.longDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies & CTA */}
                <div className="mt-6 pt-6 border-t border-brand-gray-dark flex flex-col gap-4">
                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {prog.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold bg-brand-gray text-brand-navy border border-brand-gray-dark/50 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* View Path Link */}
                  <div className="flex items-center justify-between text-sm font-semibold text-brand-navy mt-2">
                    <span>View Curriculum</span>
                    <ArrowRight className={`h-4 w-4 text-brand-gold transform transition-transform duration-300 ${
                      isHovered ? 'translate-x-1.5' : ''
                    }`} />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
