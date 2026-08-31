import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Layers, Award } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<any>;
  value: number;
  suffix: string;
  label: string;
}

const statsData: StatItem[] = [
  { icon: Users, value: 500, suffix: '+', label: 'Students Guided' },
  { icon: BookOpen, value: 50, suffix: '+', label: 'Career Programs' },
  { icon: Layers, value: 25, suffix: '+', label: 'Industry Skills' },
  { icon: Award, value: 95, suffix: '%', label: 'Student Satisfaction' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const duration = 1500; // ms

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Quad ease-out
            const easeOutQuad = (t: number) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(progress) * value);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-12 bg-white border-y border-brand-gray-dark relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-4 p-5 rounded-2xl border border-brand-gray-dark/40 bg-brand-gray/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6 text-brand-gold group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <div className="flex flex-col text-center md:text-left">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs font-semibold text-brand-gray-textlight tracking-wide uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
