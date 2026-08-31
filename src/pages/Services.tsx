import { motion } from 'framer-motion';
import { Code, Compass, Cpu, Briefcase, Globe, UserCheck, ArrowRight, CheckCircle2, Sparkles, Layers, Award, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  icon: typeof Code;
  title: string;
  description: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    icon: Code,
    title: 'Skill Development',
    description: 'Master high-demand technical and soft skills customized for modern professional success.',
    details: ['Logic Building', 'Problem-Solving Mindset', 'Object-Oriented Programming', 'Clean Coding Practices'],
  },
  {
    icon: Compass,
    title: 'Career Guidance',
    description: 'Resolve professional path dilemmas with personalized coaching and career blueprints.',
    details: ['1-on-1 Consultation', 'Interest Mapping', 'Target Market Analysis', 'Goal Tracking Sheets'],
  },
  {
    icon: Cpu,
    title: 'Technical Training',
    description: 'Receive deep hands-on instruction across Programming, Cloud, DevOps, and Data Science.',
    details: ['Full Stack Stack', 'Machine Learning & Python', 'Cloud & Docker Deployments', 'Database Administration'],
  },
  {
    icon: Briefcase,
    title: 'Placement Preparation',
    description: 'Polish your profile with standard resume design, mock drills, and active interview training.',
    details: ['Resume Formats', 'Aptitude Practice Labs', 'Behavioral Mock Interviews', 'Coding Assessments'],
  },
  {
    icon: Globe,
    title: 'Industry-Oriented Programs',
    description: 'Work directly on production-grade projects designed to match standard company environments.',
    details: ['Git Workflows & PRs', 'Agile/Scrum Model', 'Requirement Analysis', 'API Integrations'],
  },
  {
    icon: UserCheck,
    title: 'Student Mentorship',
    description: 'Gain insight and guidance with 1-on-1 support from active industry professionals.',
    details: ['Industry Guest Mentors', 'Mock Code Reviews', 'Corporate Behavior Training', 'Placement Support Record'],
  },
];

export default function Services() {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      
      {/* 1. Cinematic Services Hero Section */}
      <section className="relative pt-8 pb-16 bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white overflow-hidden mb-12">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-royal/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-royal/20 border border-brand-royal/40 text-brand-gold-light text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                <span>Empowering Student Careers</span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal-light via-blue-400 to-brand-gold">
                  EdTech Services
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Comprehensive training, 1-on-1 industry mentorship, and tailored career preparation designed to accelerate your journey from education to employment.
              </p>

              {/* Service Quick Badges */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <Layers className="h-4 w-4 text-brand-gold flex-shrink-0" />
                  <span>Custom Learning Tracks</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <Award className="h-4 w-4 text-brand-gold flex-shrink-0" />
                  <span>Placement Prep Matrix</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services-grid"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-royal to-blue-700 hover:from-blue-600 hover:to-brand-royal text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-royal/30 transition-all duration-300 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#/contact"
                  className="px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight className="h-4 w-4 text-gray-400" />
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image Card with Float Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-6 relative"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-royal via-brand-gold/30 to-blue-600 rounded-3xl blur-xl opacity-40 animate-pulse-subtle" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-brand-navy-dark shadow-2xl group">
                <img
                  src="/images/services-hero.jpg"
                  alt="Scholars Bridge EdTech Services Ecosystem"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-navy-accent/90 border border-brand-gold/30 backdrop-blur-md flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                      Advanced Ecosystem
                    </span>
                    <h4 className="font-display font-bold text-sm text-white mt-0.5">
                      Integrated Career & Skills Platform
                    </h4>
                  </div>
                  <div className="p-2 rounded-xl bg-brand-gold/20 text-brand-gold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section id="services-grid" className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            What We Deliver
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Our Core EdTech Offerings
          </h2>
          <p className="text-brand-gray-textlight mt-3 text-sm sm:text-base">
            Structured modules built to bridge the gap between classroom theory and real-world corporate expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative overflow-hidden group p-8 rounded-3xl border border-brand-gray-dark bg-[#F8FAFC]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Gold Highlight Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                
                <div>
                  {/* Icon */}
                  <div className="mb-6 p-3.5 rounded-xl bg-brand-navy/5 text-brand-navy w-fit group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3 text-left">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-gray-textlight text-sm leading-relaxed mb-6 text-left">
                    {service.description}
                  </p>

                  {/* Service Specific Details */}
                  <ul className="flex flex-col gap-2.5 mb-8 text-left">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-brand-navy/80">
                        <CheckCircle2 className="h-4 w-4 text-brand-gold flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Trigger */}
                <a
                  href="#/contact"
                  className="flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-royal transition-colors cursor-pointer w-fit mt-auto"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300 text-brand-gold" />
                </a>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Methodology Section */}
      <section className="py-16 bg-brand-navy-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            Systematic Process
          </span>
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">
            How We Deliver Results
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-12">
            A proven methodology from initial baseline mapping to final corporate placement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-brand-navy-accent/60 border border-white/10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h4 className="font-semibold text-base">Personalized Assessment</h4>
              <p className="text-gray-400 text-xs mt-2 max-w-[200px]">We map your skills and baseline to customize your learning speed.</p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-navy-accent/60 border border-white/10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h4 className="font-semibold text-base">Hands-on Engineering</h4>
              <p className="text-gray-400 text-xs mt-2 max-w-[200px]">You learn concepts, write sandboxes, and compile complete GitHub code repositories.</p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-navy-accent/60 border border-white/10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h4 className="font-semibold text-base">Mentored Placement</h4>
              <p className="text-gray-400 text-xs mt-2 max-w-[200px]">You receive continuous code reviews and mock interview assessments until placement execution.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
