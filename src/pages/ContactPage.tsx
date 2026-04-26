import React, { useState } from 'react';
import { motion } from 'motion/react';
const supportImg = '/assets/images/support-image.webp';
import SectionLabel from '../components/SectionLabel';
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

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionLabel>
                Get in Touch
              </SectionLabel>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight mb-6 text-brand-navy">
                We're here to <br className="hidden sm:block" /><span className="text-brand-blue">help.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Whether you're facing a critical system failure or planning a major infrastructure upgrade, our technical experts are ready to assist you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[5/4] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply z-10"></div>
                <img 
                  src={supportImg} 
                  alt="IT support professional on a call" 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -left-4 md:-left-8 -bottom-6 md:-bottom-8 bg-white p-3 md:p-5 rounded-xl md:rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 md:gap-4 z-20 animate-bounce-slow">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                  <CheckCircle weight="fill" className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-brand-navy whitespace-nowrap">Expert Support</p>
                  <p className="text-[10px] md:text-xs text-slate-500 whitespace-nowrap">Fast & Reliable</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 h-full"
            >
              <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 h-full flex flex-col">
                <div className="space-y-10 flex-grow">
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
                        <p className="text-slate-600">+254 740493244</p>
                        <p className="text-slate-500 text-sm mt-1">7am to 7:30pm</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                        <EnvelopeSimple weight="fill" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-navy mb-1">Email</h3>
                        <a href="mailto:support@fixline.co.ke" className="text-slate-600 hover:text-brand-blue transition-colors">support@fixline.co.ke</a>
                        <p className="text-slate-500 text-sm mt-1">Online support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book a Call Card */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mt-10">
                  <h3 className="font-bold text-brand-navy mb-2">Book a quick call</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Need immediate assistance or want to discuss a project? Schedule a brief call with our technical team.
                  </p>
                  <button className="bg-white border border-slate-200 hover:border-brand-blue text-brand-navy hover:text-brand-blue px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 w-fit">
                    <Phone weight="bold" size={16} />
                    Schedule Call
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 h-full"
            >
              <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 h-full">
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
                      className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
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
      <section className="py-20 lg:py-24 bg-brand-blue relative overflow-hidden m-4 lg:m-6 rounded-2xl flex items-center">
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-300/20 blur-[150px] rounded-full pointer-events-none"></div>
        </div>
        <div className="max-w-6xl mx-auto px-8 lg:px-12 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
          >
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-white tracking-tight leading-[1.2] sm:leading-[1.15]">
                <span className="text-blue-100 font-medium block sm:inline mb-1 sm:mb-0 sm:mr-2">Need dependable</span>
                <span className="font-bold">technical support?</span>
              </h3>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <button className="bg-white hover:bg-slate-50 text-brand-blue px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group w-full sm:w-auto">
                <span className="text-base tracking-wide whitespace-nowrap">Book a Repair</span>
                <ArrowRight size={20} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
