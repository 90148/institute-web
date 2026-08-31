import React from 'react';
import { motion } from 'framer-motion';
import { Code, Compass, Cpu, Briefcase, Globe, UserCheck, ArrowRight } from 'lucide-react';

interface ServiceItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Code,
    title: 'Skill Development',
    description: 'Master high-demand technical and soft skills customized for modern professional success.',
  },
  {
    icon: Compass,
    title: 'Career Guidance',
    description: 'Resolve professional path dilemmas with personalized coaching and career blueprints.',
  },
  {
    icon: Cpu,
    title: 'Technical Training',
    description: 'Receive deep hands-on instruction across Programming, Cloud, DevOps, and Data Science.',
  },
  {
    icon: Briefcase,
    title: 'Placement Preparation',
    description: 'Polish your profile with standard resume design, mock drills, and active interview training.',
  },
  {
    icon: Globe,
    title: 'Industry-Oriented Programs',
    description: 'Work directly on production-grade projects designed to match standard company environments.',
  },
  {
    icon: UserCheck,
    title: 'Student Mentorship',
    description: 'Gain insight and guidance with 1-on-1 support from active industry professionals.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight mb-4">
            Professional EdTech Services
          </h2>
          <p className="text-brand-gray-textlight text-base">
            Tailored learning and career development packages built to help students unlock their potential and land target job opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                className="relative overflow-hidden group p-8 rounded-2xl border border-brand-gray-dark bg-[#F8FAFC]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[250px]"
              >
                {/* Gold top accent line - slides in on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                
                <div>
                  {/* Card Icon */}
                  <div className="mb-6 p-3.5 rounded-xl bg-brand-navy/5 text-brand-navy w-fit group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                    <Icon className="h-6 w-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-300" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-brand-gray-textlight text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More link */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-royal transition-colors cursor-pointer w-fit">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300 text-brand-gold" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
