import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  program: string;
  text: string;
  rating: number;
  avatarBg: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rohan Sen',
    program: 'Cloud & DevOps',
    text: 'The practical project experience here is incredible. Going from coding local scripts to containerizing complex applications and deploying them on AWS was a massive boost to my professional confidence.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-blue-600 to-indigo-700',
    initials: 'RS',
  },
  {
    id: 2,
    name: 'Ananya Rao',
    program: 'Data Analytics',
    text: 'Transitioning from a finance background to data analytics was daunting, but the curriculum and customized pathways at Scholars Bridge helped me land a data scientist position within weeks of completing my program.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-amber-500 to-orange-600',
    initials: 'AR',
  },
  {
    id: 3,
    name: 'Priyanshu Das',
    program: 'Web Development',
    text: 'The resume review workshops and technical mock interview drills prepared me perfectly for multiple rounds of coding interviews. The mentoring team is incredibly patient and highly professional.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-emerald-500 to-teal-700',
    initials: 'PD',
  },
  {
    id: 4,
    name: 'Sneha Mehta',
    program: 'Artificial Intelligence',
    text: 'I mastered deep learning algorithms and generative model pipelines. Working on real-world projects helped me bridge the gap between academic theory and actual production environments.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-purple-600 to-pink-700',
    initials: 'SM',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
  };

  return (
    <section id="testimonials" className="py-20 bg-brand-gray/30 overflow-hidden relative z-20">
      {/* Visual background details */}
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Student Success Stories
          </h2>
        </div>

        {/* Carousel Slider Card */}
        <div
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          className="relative min-h-[340px] md:min-h-[280px] bg-white/70 backdrop-blur-md rounded-3xl border border-brand-gray-dark/80 p-8 sm:p-12 shadow-xl flex flex-col justify-between"
        >
          {/* Quote Icon overlay */}
          <div className="absolute top-6 right-8 text-brand-navy/5 pointer-events-none select-none">
            <Quote className="h-28 w-28 transform rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-brand-gray-text text-base sm:text-lg italic font-normal leading-relaxed text-left">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Row */}
              <div className="flex items-center gap-4 mt-2">
                {/* Custom Avatar Badge */}
                <div className={`w-12 h-12 rounded-full ${testimonials[currentIndex].avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {testimonials[currentIndex].initials}
                </div>
                <div className="text-left">
                  <h4 className="font-display font-bold text-brand-navy leading-none">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="text-xs font-semibold text-brand-gold-dark mt-1 block">
                    {testimonials[currentIndex].program}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-gray-dark/60">
            {/* Dots Pagination */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-6 bg-brand-navy' : 'w-2.5 bg-brand-navy/20 hover:bg-brand-navy/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left/Right Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-brand-gray-dark bg-white hover:bg-brand-gray hover:text-brand-navy shadow-sm transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-brand-gray-dark bg-white hover:bg-brand-gray hover:text-brand-navy shadow-sm transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
