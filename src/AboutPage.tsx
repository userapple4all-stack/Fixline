import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DesktopTower, Headset, Network, Star, ShieldCheck, Handshake, ArrowRight } from '@phosphor-icons/react';

const gapSlides = [
  {
    title: "The Reliability Gap.",
    text: "Technical support is often unpredictable. Devices are handed over without clear diagnostics, temporary fixes create long-term problems, and data privacy is rarely considered.",
    emphasis: "This uncertainty slows productivity for everyone—from independent creators to growing businesses."
  },
  {
    title: "The Fixline Standard.",
    text: "Fixline replaces guesswork with transparency. Every diagnostic audit and remote session generates a clear log accessible to the client. Our process ensures that issues are properly identified, repairs are verifiable, and systems return to operation with stability.",
    emphasis: "Our goal is simple: turn unstable technology into dependable infrastructure."
  }
];

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gapSlides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col h-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-slate-200 text-brand-blue font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
                About Fixline
              </span>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight mb-6 text-brand-navy">
                Bringing Standards to <span className="text-brand-blue">Technical Support.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-light">
                If your devices’ performance is non-negotiable, your support should be too. Fixline provides the technical backbone for modern operations—replacing guesswork with clear standards for hardware repair, networks, and system deployments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                  alt="IT Professionals working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 pt-10 mt-10"
          >
            <div className="border-l-2 border-brand-blue pl-4">
              <div className="text-3xl lg:text-4xl font-extrabold mb-1 text-brand-navy tracking-tight">+5k</div>
              <div className="text-xs text-slate-600 font-medium">Hardware assets<br/>engineered & restored</div>
            </div>
            <div className="border-l-2 border-brand-blue pl-4">
              <div className="text-3xl lg:text-4xl font-extrabold mb-1 text-brand-navy tracking-tight">+8k</div>
              <div className="text-xs text-slate-600 font-medium">Secure remote<br/>sessions resolved</div>
            </div>
            <div className="border-l-2 border-brand-blue pl-4">
              <div className="text-3xl lg:text-4xl font-extrabold mb-1 text-brand-navy tracking-tight">+200</div>
              <div className="text-xs text-slate-600 font-medium leading-relaxed">Managed networks &<br/>fleet infrastructures</div>
            </div>
            <div className="border-l-2 border-brand-blue pl-4">
              <div className="text-3xl lg:text-4xl font-extrabold mb-1 text-brand-navy tracking-tight">+50k</div>
              <div className="text-xs text-slate-600 font-medium leading-relaxed">Hours of downtime<br/>eliminated for clients</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Gap (Auto Scroll) Section */}
      <section className="py-16 lg:py-24 relative bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            
            {/* Auto Scrolling Content */}
            <div className="relative w-full h-[320px] sm:h-[240px] md:h-[200px] lg:h-[180px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy leading-[1.15] tracking-tight mb-4 mx-auto max-w-3xl">
                    {gapSlides[activeSlide].title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-light px-4">
                    {gapSlides[activeSlide].text} <span className="italic font-medium text-slate-800">{gapSlides[activeSlide].emphasis}</span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex gap-2 mt-6">
              {gapSlides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-brand-blue w-6' : 'bg-slate-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Centered Box layout for Core Capabilities */}
        <div className="max-w-6xl mx-auto px-6 mt-16 lg:mt-24 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden"
          >
            {/* Top Bar */}
            <div className="py-6 text-center border-b border-slate-100 bg-slate-50/50">
              <h4 className="font-heading font-bold text-lg text-brand-navy">Our core capabilities</h4>
            </div>
            
            {/* 3-Column Grid */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Column 1 */}
              <div className="px-8 py-10 lg:p-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-5 text-brand-blue">
                  <DesktopTower size={28} weight="duotone" />
                </div>
                <h5 className="font-bold text-lg text-brand-navy mb-3">Hardware Diagnostics & Repair</h5>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  From component-level motherboard repairs to workstation builds, our lab ensures every device is restored to verified performance standards.
                </p>
              </div>
              
              {/* Column 2 */}
              <div className="px-8 py-10 lg:p-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-5 text-brand-blue">
                  <Headset size={28} weight="duotone" />
                </div>
                <h5 className="font-bold text-lg text-brand-navy mb-3">Secure Remote Support</h5>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Through encrypted remote sessions, we diagnose and resolve operating system issues, software failures, and system configuration problems without compromising security.
                </p>
              </div>
              
              {/* Column 3 */}
              <div className="px-8 py-10 lg:p-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-5">
                  <Network size={28} weight="duotone" />
                </div>
                <h5 className="font-bold text-lg text-brand-navy mb-3">Infrastructure & Networks</h5>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  We design and deploy stable network environments—from secure office Wi-Fi systems to scalable IT infrastructure for growing teams.
                </p>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-6 px-6 lg:px-12 text-center border-t border-slate-100 bg-slate-50/50">
              <p className="text-slate-600 font-medium max-w-2xl mx-auto text-sm">
                By making infrastructure stable and high-performing, we empower industries to solve real-world challenges at scale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Trust Section */}
      <section className="py-20 lg:py-28 relative bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-blue"></span>
              <span className="text-brand-blue font-bold tracking-widest uppercase text-xs">Our Mission</span>
            </div>
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-brand-navy leading-[1.15] tracking-tight mx-auto max-w-3xl">
              To establish dependable technical standards for computer systems, infrastructure, and support required for total uptime.
            </h3>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* the BIG "Who We Are" Image + Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden mb-16 lg:mb-24"
          >
            {/* Large Team Image */}
            <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
                alt="Fixline Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3-Column Image Stats Footer */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
              <div className="p-8 lg:p-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-5">
                  <Star fill="currentColor" size={24} />
                </div>
                <h5 className="font-bold text-lg text-brand-navy mb-2">Standardized Engineering</h5>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Engineered to international technical standards, providing enterprise-grade reliability for individual hardware and office networks.
                </p>
              </div>
              <div className="p-8 lg:p-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-5">
                  <ShieldCheck fill="currentColor" size={24} />
                </div>
                <h5 className="font-bold text-lg text-brand-navy mb-2">The Trusted Backbone</h5>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  The technical partner for Nairobi’s leading creative studios, independent professionals, and enterprise fleets.
                </p>
              </div>
              <div className="p-8 lg:p-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-5">
                  <Handshake fill="currentColor" size={24} />
                </div>
                <h5 className="font-bold text-lg text-brand-navy mb-2">Expert Architect Team</h5>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  A dedicated team of senior hardware engineers and network architects with deep experience in global technical systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Values Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-blue rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative"
          >
            {/* Background Image overlay */}
            <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
                alt="Technology background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Subtle background glow for the whole box */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-white/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
            
            {/* Left side Large Heading */}
            <div className="p-10 lg:p-16 lg:w-[45%] flex items-center lg:items-start relative z-10">
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight lg:sticky lg:top-32">
                Our Values
              </h3>
            </div>
            
            {/* Right side Stacked List */}
            <div className="p-8 lg:p-12 lg:pr-16 lg:w-[55%] relative z-10">
              <div className="flex flex-col divide-y divide-white/10">
                {[
                  {
                    prefix: "We are",
                    title: "Transparent",
                    desc: "We provide real-time visibility into every diagnostic and repair. Through Fixline OS, you own the technical data and the process history of every asset."
                  },
                  {
                    prefix: "We are",
                    title: "Secure",
                    desc: "Privacy is a baseline protocol. From our zero-retention remote access keys to our secure lab data-handling, your information never leaves your control."
                  },
                  {
                    prefix: "We are",
                    title: "Accountable",
                    desc: "We don't hide behind jargon or temporary fixes. We provide verifiable results for every motherboard repair, network audit, and software rollout."
                  },
                  {
                    prefix: "We are",
                    title: "Scalable",
                    desc: "We build technical infrastructure that grows with you. Whether it’s a single workstation for a creator or a multi-site network for a firm, our standards remain absolute."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="py-6 lg:py-7 first:pt-0 last:pb-0 flex items-start gap-4">
                    {/* Minimal inset bullet */}
                    <div className="mt-1 flex-shrink-0 flex items-center justify-center w-3.5 h-3.5 rounded-full border border-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    
                    <div>
                      <h4 className="text-base text-blue-50 mb-1.5 leading-tight font-medium">
                        {item.prefix} <span className="font-bold text-white">{item.title}</span>
                      </h4>
                      <p className="text-blue-100 text-sm leading-relaxed max-w-md font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden m-4 lg:m-6 rounded-2xl flex items-center">
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
          <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/30 blur-[150px] rounded-full pointer-events-none"></div>
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
              <h3 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-brand-navy tracking-tight leading-[1.2] sm:leading-[1.15]">
                <span className="text-slate-500 font-medium block md:inline mb-1 md:mb-0 md:mr-2">Discover how Fixline can help you</span>
                <span className="font-bold">eliminate technical friction to secure your uptime.</span>
              </h3>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <button className="bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group w-full sm:w-auto">
                <span className="text-base tracking-wide whitespace-nowrap">Consult an engineer</span>
                <ArrowRight size={20} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
