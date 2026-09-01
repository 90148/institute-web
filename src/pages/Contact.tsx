import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, PhoneCall, MapPin, Send, CheckCircle, AlertCircle, Sparkles, MessageSquare, Headphones, Clock, ArrowDown } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,12}$/.test(formData.phone.replace(/[\s-+()]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (10-12 digits)';
    }

    if (!formData.program) newErrors.program = 'Please select a program';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: '',
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      
      {/* 1. Cinematic Contact Hero Section */}
      <section className="relative pt-8 pb-16 bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white overflow-hidden mb-16">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-royal/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-royal/20 border border-brand-royal/40 text-brand-gold-light text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                <span>Student Support & Admissions</span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
                Connect With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal-light via-blue-400 to-brand-gold">
                  Scholars Bridge
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Have questions about our technical streams, 4-year roadmap, or corporate placements? Reach out to our admissions advisors for personalized career guidance.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <Headphones className="h-4 w-4 text-brand-gold flex-shrink-0" />
                  <span>1-on-1 Counseling</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <Clock className="h-4 w-4 text-brand-gold flex-shrink-0" />
                  <span>24-Hour Response Time</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#enquiry-form"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-royal to-blue-700 hover:from-blue-600 hover:to-brand-royal text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-royal/30 transition-all duration-300 group"
                >
                  <span>Send an Enquiry</span>
                  <ArrowDown className="h-4 w-4 text-brand-gold group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="tel:+1800123456"
                  className="px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <PhoneCall className="h-4 w-4 text-brand-gold" />
                  <span>+1 (800) 123-456</span>
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-brand-gold/30 to-brand-royal rounded-3xl blur-xl opacity-40 animate-pulse-subtle" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-brand-navy-dark shadow-2xl group">
                <img
                  src="/images/contact-hero.jpg"
                  alt="Scholars Bridge Information Hub and Student Support"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-navy-accent/90 border border-brand-gold/30 backdrop-blur-md flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                      Information & Advisory Hub
                    </span>
                    <h4 className="font-display font-bold text-sm text-white mt-0.5">
                      Expert Guidance for Students & Colleges
                    </h4>
                  </div>
                  <div className="p-2 rounded-xl bg-brand-gold/20 text-brand-gold">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section id="enquiry-form" className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-8 text-left">
              <div>
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-1 block">
                  Direct Inquiries
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy">
                  Contact Information
                </h3>
              </div>
              <p className="text-brand-gray-textlight text-sm leading-relaxed max-w-sm">
                Feel free to visit our campus offices or connect directly via phone or email during operational business hours.
              </p>

              <div className="flex flex-col gap-6 mt-2">
                
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-navy/5 text-brand-navy">
                    <Mail className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-gray-textlight uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a href="mailto:info@scholarsbridge.in" className="text-brand-navy hover:text-brand-royal font-semibold text-sm mt-1 transition-colors block">
                      info@scholarsbridge.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-navy/5 text-brand-navy">
                    <PhoneCall className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-gray-textlight uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a href="tel:+918688964015" className="text-brand-navy hover:text-brand-royal font-semibold text-sm mt-1 transition-colors block">
                      +91 8688964015
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-navy/5 text-brand-navy">
                    <MapPin className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-gray-textlight uppercase tracking-wider block">
                      Corporate Office
                    </span>
                    <span className="text-brand-navy font-semibold text-sm mt-1 block">
                      Scholars Bridge Professional Edtech Solutions, Akkana Vari Street, Fathekhanpet, Nellore, Andhra Pradesh - 524003
                    </span>
                  </div>
                </div>

              </div>

              <div className="overflow-hidden rounded-2xl border border-brand-gray-dark bg-brand-gray/30 shadow-sm">
                <iframe
                  title="Scholars Bridge Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.7616992281846!2d79.97338737517286!3d14.440892280966684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf363feb701bd%3A0x83a63e5ba354c5c6!2sScholars%20Bridge%20Professional%20Edtech%20Services!5e0!3m2!1sen!2sin!4v1788173870194!5m2!1sen!2sin"
                  className="w-full h-64 border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4 text-left">
              <span className="text-xs font-semibold text-brand-gray-textlight uppercase tracking-wider">
                Follow our journey
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-brand-gray-dark bg-brand-gray hover:bg-brand-navy hover:text-white transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5 group-hover:text-brand-gold transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-brand-gray-dark bg-brand-gray hover:bg-brand-navy hover:text-white transition-colors duration-300 group"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 group-hover:text-brand-gold transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-brand-gray-dark bg-brand-gray hover:bg-brand-navy hover:text-white transition-colors duration-300 group"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 group-hover:text-brand-gold transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-gray/40 border border-brand-gray-dark rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 z-30 bg-white/95 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <CheckCircle className="h-14 w-14 text-emerald-500 mb-4 animate-bounce" />
                    <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">
                      Enquiry Received!
                    </h3>
                    <p className="text-brand-gray-textlight text-sm max-w-sm">
                      Thank you for contacting Scholars Bridge. Our counseling representative will reach out to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-6 py-2.5 bg-brand-navy text-white hover:bg-brand-navy-light text-sm font-semibold rounded-full shadow"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-semibold text-brand-navy mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.name ? 'border-red-400 focus:ring-red-200' : 'border-brand-gray-dark focus:border-brand-gold focus:ring-brand-gold/10'
                    } text-brand-gray-text text-sm font-medium focus:outline-none focus:ring-4 transition-all`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-semibold text-brand-navy mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.email ? 'border-red-400 focus:ring-red-200' : 'border-brand-gray-dark focus:border-brand-gold focus:ring-brand-gold/10'
                      } text-brand-gray-text text-sm font-medium focus:outline-none focus:ring-4 transition-all`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-xs font-semibold text-brand-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit number"
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-brand-gray-dark focus:border-brand-gold focus:ring-brand-gold/10'
                      } text-brand-gray-text text-sm font-medium focus:outline-none focus:ring-4 transition-all`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="program" className="text-xs font-semibold text-brand-navy mb-2">
                    Select Program Track
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.program ? 'border-red-400 focus:ring-red-200' : 'border-brand-gray-dark focus:border-brand-gold focus:ring-brand-gold/10'
                    } text-brand-gray-text text-sm font-medium focus:outline-none focus:ring-4 transition-all`}
                  >
                    <option value="">Choose a path...</option>
                    <option value="programming">Programming Foundations</option>
                    <option value="data">Data Analytics</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="web">Web Development</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="career">Career Development</option>
                    <option value="general">General Enquiry</option>
                  </select>
                  {errors.program && (
                    <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.program}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-semibold text-brand-navy mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your background and career goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.message ? 'border-red-400 focus:ring-red-200' : 'border-brand-gray-dark focus:border-brand-gold focus:ring-brand-gold/10'
                    } text-brand-gray-text text-sm font-medium focus:outline-none focus:ring-4 transition-all resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 py-4 bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm tracking-wide rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-85"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="h-4 w-4 text-brand-gold" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
