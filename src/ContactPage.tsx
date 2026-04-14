import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  EnvelopeSimple, 
  Buildings, 
  User,
  ArrowRight,
  CheckCircle
} from '@phosphor-icons/react';

export default function ContactPage() {
  const [clientType, setClientType] = useState<'individual' | 'business'>('individual');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError('Email address is required');
      return false;
    }
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) validateEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    if (email) validateEmail(email);
  };

  const validatePhone = (value: string) => {
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
    const digitCount = (value.match(/\d/g) || []).length;
    
    if (!value) {
      setPhoneError('Phone number is required');
      return false;
    }
    if (!phoneRegex.test(value) || digitCount < 7) {
      setPhoneError('Please enter a valid phone number');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (phoneError) validatePhone(e.target.value);
  };

  const handlePhoneBlur = () => {
    if (phone) validatePhone(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isPhoneValid = validatePhone(phone);
    const isEmailValid = validateEmail(email);
    if (!isPhoneValid || !isEmailValid) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-slate-200 text-brand-blue font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
                Get in Touch
              </span>
              <h1 className="font-heading text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6 text-brand-navy">
                We're here to <span className="text-brand-blue">help.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                Whether you're facing a critical system failure or planning a major infrastructure upgrade, our technical experts are ready to assist you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply z-10"></div>
                <img 
                  src="/images/support-image.webp" 
                  alt="IT support professional on a call" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 z-20 animate-bounce-slow">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                  <CheckCircle weight="fill" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Expert Support</p>
                  <p className="text-xs text-slate-500">Fast & Reliable</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="font-heading text-3xl font-bold text-brand-navy mb-4">Contact Information</h2>
                <p className="text-slate-600 leading-relaxed">
                  Reach out to us through any of these channels. We aim to respond to all inquiries within 2 hours during business days.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin weight="fill" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Our Location</h3>
                    <p className="text-slate-600">Apic Centre, Westlands</p>
                    <p className="text-slate-500 text-sm mt-1">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <Phone weight="fill" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Phone</h3>
                    <p className="text-slate-600">[Phone Number Placeholder]</p>
                    <p className="text-slate-500 text-sm mt-1">Mon-Fri, 8am - 6pm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <EnvelopeSimple weight="fill" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Email</h3>
                    <p className="text-slate-600">[Email Placeholder]</p>
                    <p className="text-slate-500 text-sm mt-1">Online support</p>
                  </div>
                </div>
              </div>

              {/* Book a Call Card */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mt-8">
                <h3 className="font-bold text-brand-navy mb-2">Book a quick call</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Need immediate assistance or want to discuss a project? Schedule a brief call with our technical team.
                </p>
                <button className="bg-white border border-slate-200 hover:border-brand-blue text-brand-navy hover:text-brand-blue px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 w-fit">
                  <Phone weight="bold" size={16} />
                  Schedule Call
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-brand-navy mb-6">Send us a message</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle weight="fill" size={32} />
                    </div>
                    <h4 className="font-bold text-xl text-brand-navy mb-2">Message Sent!</h4>
                    <p className="text-slate-600">Thank you for reaching out. One of our technical experts will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Client Type Selector */}
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-slate-700">I am inquiring as a:</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setClientType('individual')}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all ${
                            clientType === 'individual' 
                              ? 'border-brand-blue bg-blue-50 text-brand-blue' 
                              : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                          }`}
                        >
                          <User weight={clientType === 'individual' ? 'fill' : 'regular'} size={20} />
                          <span className="font-medium">Individual</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setClientType('business')}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all ${
                            clientType === 'business' 
                              ? 'border-brand-blue bg-blue-50 text-brand-blue' 
                              : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                          }`}
                        >
                          <Buildings weight={clientType === 'business' ? 'fill' : 'regular'} size={20} />
                          <span className="font-medium">Business</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={email}
                          onChange={handleEmailChange}
                          onBlur={handleEmailBlur}
                          className={`w-full px-4 py-3 rounded-xl border ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'} focus:ring-2 outline-none transition-all bg-slate-50 focus:bg-white`}
                          placeholder="john@example.com"
                        />
                        {emailError && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="text-red-500 text-xs font-medium mt-1"
                          >
                            {emailError}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        onBlur={handlePhoneBlur}
                        className={`w-full px-4 py-3 rounded-xl border ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/20'} focus:ring-2 outline-none transition-all bg-slate-50 focus:bg-white`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {phoneError && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          className="text-red-500 text-xs font-medium mt-1"
                        >
                          {phoneError}
                        </motion.p>
                      )}
                    </div>

                    {clientType === 'business' && (
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-bold text-slate-700">Company Name</label>
                        <input 
                          type="text" 
                          id="company" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="Acme Corp"
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-bold text-slate-700">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-bold text-slate-700">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                        placeholder="Please describe your issue or inquiry in detail..."
                      ></textarea>
                    </div>

                    <motion.button 
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <ArrowRight weight="bold" size={20} />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appraisal CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-12 lg:py-16 bg-brand-blue relative overflow-hidden m-4 lg:m-6 rounded-xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-blue/50 to-brand-blue"></div>
        
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to upgrade your IT experience?
          </h2>
          <p className="text-base text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with Fixline for enterprise-grade IT solutions and personalized technical care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-white text-brand-blue hover:bg-slate-50 px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center">
              Partner With Us
              <div className="w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center">
                <ArrowRight weight="bold" size={16} className="shrink-0" />
              </div>
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
