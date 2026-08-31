import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, PhoneCall, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

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
    // Clear error on change
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API Submission
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
      // Auto close success alert after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-2 block">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Let’s Build Your Future Together
          </h2>
          <p className="text-brand-gray-textlight mt-4 text-sm sm:text-base">
            Have questions about our programs, course structures, or career services? Drop us an enquiry and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Outer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-8 text-left">
              <h3 className="font-display font-bold text-2xl text-brand-navy">
                Contact Information
              </h3>
              <p className="text-brand-gray-textlight text-sm leading-relaxed max-w-sm">
                Feel free to visit our campus offices or connect directly via phone or email during operational business hours.
              </p>

              {/* Physical details list */}
              <div className="flex flex-col gap-6 mt-4">
                
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-navy/5 text-brand-navy">
                    <Mail className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-gray-textlight uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a href="mailto:info@scholarsbridge.com" className="text-brand-navy hover:text-brand-royal font-semibold text-sm mt-1 transition-colors block">
                      info@scholarsbridge.com
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
                    <a href="tel:+1800123456" className="text-brand-navy hover:text-brand-royal font-semibold text-sm mt-1 transition-colors block">
                      +1 (800) 123-456
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
                      Suite 500, EdTech Campus, Silicon Valley, CA
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social media icons links */}
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

          {/* Right Column: Contact form card */}
          <div className="lg:col-span-7">
            <div className="bg-brand-gray/40 border border-brand-gray-dark rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
              
              {/* Form Success/Status Alerts */}
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
                {/* Name field */}
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

                {/* Email and Phone Grid */}
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

                {/* Program Selector */}
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

                {/* Message field */}
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

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-2 py-4 bg-brand-navy hover:bg-brand-gold text-white font-bold text-sm tracking-wide rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-85"
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

      </div>
    </section>
  );
}
