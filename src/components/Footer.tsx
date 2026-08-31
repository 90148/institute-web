import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#071120] text-white pt-16 pb-8 relative overflow-hidden z-20 border-t border-white/5 font-sans">
      {/* Animated Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/10 overflow-hidden">
        <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-sweep-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        
        {/* Column 1: Info */}
        <div className="lg:col-span-4 flex flex-col items-start text-left gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Scholars Bridge Logo"
              className="h-9 w-auto object-contain rounded-md"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-wider">
                SCHOLARS BRIDGE
              </span>
              <span className="text-[9px] font-semibold text-brand-gold tracking-widest uppercase">
                Professional EdTech
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
            Bridging the gap between classroom education, technical skills, and target job placements. We guide students, build careers, and transform futures.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="LinkedIn">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Twitter">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Facebook">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 flex flex-col items-start text-left gap-4">
          <h4 className="font-display font-semibold text-sm text-brand-gold uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-400">
            <li>
              <a href="#/" className="hover:text-brand-gold transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#/about" className="hover:text-brand-gold transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#/services" className="hover:text-brand-gold transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#/programs" className="hover:text-brand-gold transition-colors">
                Programs
              </a>
            </li>
            <li>
              <a href="#/why-us" className="hover:text-brand-gold transition-colors">
                Why Choose Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Learning Paths */}
        <div className="lg:col-span-3 flex flex-col items-start text-left gap-4">
          <h4 className="font-display font-semibold text-sm text-brand-gold uppercase tracking-wider">
            Learning Paths
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-400">
            <li>
              <a href="#/programs" className="hover:text-brand-gold transition-colors">
                Programming Foundations
              </a>
            </li>
            <li>
              <a href="#/programs" className="hover:text-brand-gold transition-colors">
                Data Analytics
              </a>
            </li>
            <li>
              <a href="#/programs" className="hover:text-brand-gold transition-colors">
                Artificial Intelligence
              </a>
            </li>
            <li>
              <a href="#/programs" className="hover:text-brand-gold transition-colors">
                Web Development
              </a>
            </li>
            <li>
              <a href="#/programs" className="hover:text-brand-gold transition-colors">
                Cloud & DevOps
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="lg:col-span-3 flex flex-col items-start text-left gap-4">
          <h4 className="font-display font-semibold text-sm text-brand-gold uppercase tracking-wider">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-xs sm:text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <Mail className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
              <a href="mailto:info@scholarsbridge.com" className="hover:text-brand-gold transition-colors break-all">
                info@scholarsbridge.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
              <a href="tel:+1800123456" className="hover:text-brand-gold transition-colors">
                +1 (800) 123-456
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
              <span>Suite 500, EdTech Campus, Silicon Valley, CA</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-gray-500">
          © 2026 Scholars Bridge. All Rights Reserved.
        </span>

        {/* Scroll-to-top */}
        <button
          onClick={handleScrollToTop}
          className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-brand-gold hover:text-brand-navy-dark shadow transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
