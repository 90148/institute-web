import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Programs', href: '#programs' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80; // approximate height of navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glassmorphism shadow-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              src="/logo1.jpeg"
              alt="Scholars Bridge Logo"
              className="h-10 w-auto object-contain rounded-md"
            />
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-brand-navy' : 'text-brand-navy-light bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-brand-royal'
              }`}>
                SCHOLARS BRIDGE
              </span>
              <span className="text-[9px] font-semibold text-brand-gold tracking-widest uppercase">
                Professional EdTech
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative py-2 text-sm font-semibold text-brand-navy/90 hover:text-brand-royal transition-colors duration-200 group"
                  >
                    {link.name}
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden px-6 py-2.5 rounded-full bg-brand-navy text-white text-sm font-semibold tracking-wide flex items-center gap-2 group shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Gold light sweep on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-navy focus:outline-none p-1.5 rounded-lg hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white shadow-xl border-t border-brand-gray-dark px-6 py-8 flex flex-col gap-6 lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-base font-semibold text-brand-navy/90 hover:text-brand-royal py-2 border-b border-brand-gray-dark/50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4 text-brand-gold" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
