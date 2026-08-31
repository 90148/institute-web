import { motion } from 'framer-motion';
import { ArrowRight, MessageSquareCode } from 'lucide-react';

export default function CTA() {

  return (
    <section className="py-24 bg-[#071120] text-white relative overflow-hidden z-20">
      {/* Premium background radial glowing spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-brand-royal/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Main Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Logo illustration inside CTA */}
          <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center animate-float-medium">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-auto rounded" />
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-2xl leading-[1.1] mb-6">
            Your Career Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light via-brand-gold to-yellow-300">
              Starts Here.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-normal">
            Learn the right skills, gain practical experience, and move confidently toward your future.
          </p>

          {/* Buttons Stack */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a
              href="#/programs"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden px-8 py-4 rounded-full bg-brand-gold text-brand-navy-dark font-bold text-sm tracking-wide flex items-center justify-center gap-2 group shadow-lg shadow-brand-gold/20"
            >
              {/* Gold sweeping animation */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>Explore Programs</span>
              <ArrowRight className="h-4.5 w-4.5 text-brand-navy-dark group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#/contact"
              whileHover={{ scale: 1.03, border: '1px solid rgba(255, 255, 255, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <MessageSquareCode className="h-4.5 w-4.5 text-brand-gold" />
              <span>Talk to Us</span>
            </motion.a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
