import React from 'react';
import { motion } from 'framer-motion';
import { Code, Compass, Cpu, Briefcase, Globe, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  icon: React.ComponentType<any>;
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
      
      {/* Header */}
      <section className="py-12 bg-brand-gray/30 border-b border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            Custom Solutions
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
            Professional EdTech Services
          </h1>
          <p className="text-brand-gray-textlight text-base max-w-2xl">
            At Scholars Bridge, we offer tailored training and advisory structures to build skills, optimize portfolios, and ensure placement success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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

      {/* Methodology Section */}
      <section className="py-12 bg-brand-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-2xl text-white tracking-tight mb-4">
            How We Deliver Results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h4 className="font-semibold text-base">Personalized Assessment</h4>
              <p className="text-gray-400 text-xs mt-2 max-w-[200px]">We map your skills and baseline to customize your learning speed.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h4 className="font-semibold text-base">Hands-on Engineering</h4>
              <p className="text-gray-400 text-xs mt-2 max-w-[200px]">You learn concepts, write sandboxes, and compile complete GitHub code repositories.</p>
            </div>
            <div className="flex flex-col items-center">
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
