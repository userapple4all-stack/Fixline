import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DesktopTower, Headset, Network, Star, ShieldCheck, Handshake, ArrowRight } from '@phosphor-icons/react';
import SectionLabel from '../components/SectionLabel';
import StatCard from '../components/StatCard';
import FeatureBox from '../components/FeatureBox';
import fixlineStudioImage from '../assets/images/fixline studio.svg';

const gapSlides = [
  {
    label: "The Problem",
    title: "The Reliability Gap.",
    text: "Technical support is often unpredictable. Devices are handed over without clear diagnostics, temporary fixes create long-term problems, and data privacy is rarely considered.",
    emphasis: "This uncertainty stifles productivity for everyone—from independent creators to growing businesses."
  },
  {
    label: "The Solution",
    title: "The Fixline Standard.",
    text: "Fixline replaces guesswork with transparency. Every diagnostic audit and remote session generates a clear log accessible to the client. Our process ensures that issues are properly identified, repairs are verifiable, and systems return to operation with stability.",
    emphasis: "Our focus is consistent: ensuring your technology operates reliably, every time."
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
              <SectionLabel>
                About Fixline
              </SectionLabel>
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
            <StatCard 
              number="+5k" 
              label={<>Hardware assets<br/>engineered & restored</>} 
            />
            <StatCard 
              number="+8k" 
              label={<>Secure remote<br/>sessions resolved</>} 
            />
            <StatCard 
              number="+200" 
              label={<>Managed networks &<br/>fleet infrastructures</>} 
            />
            <StatCard 
              number="+50k" 
              label={<>Hours of downtime<br/>eliminated for clients</>} 
            />
          </motion.div>
        </div>
      </section>

      {/* The Gap (Auto Scroll) Section */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 relative bg-white border-t border-slate-200 overflow-hidden">
        <img src="/src/assets/fixline-motif.svg" alt="" className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-56 h-56 lg:w-72 lg:h-72 opacity-[0.03] pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Auto Scrolling Content */}
            <div className="relative w-full min-h-[450px] sm:min-h-[350px] lg:min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
                >
                  <div className="flex flex-col items-start text-left">
                    <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                       <span className="w-8 h-[2px] bg-brand-blue"></span>
                       {gapSlides[activeSlide].label}
                    </h2>
                    <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.15] tracking-tight">
                      {gapSlides[activeSlide].title}
                    </h3>
                  </div>
                  <div className="text-base sm:text-lg text-slate-600 leading-relaxed font-light text-left mt-2 lg:mt-0">
                    <p className="mb-4">{gapSlides[activeSlide].text}</p>
                    <p className="text-sm sm:text-base font-medium text-slate-800 border-t border-slate-200 pt-4">{gapSlides[activeSlide].emphasis}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4 lg:mt-8 w-full">
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
      </section>
        
      {/* Core Capabilities Section */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden m-4 lg:m-6 rounded-2xl border border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-12">
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-blue"></span>
              Core Capabilities
            </h2>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
               Built for reliable performance
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 3-Column Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 border-t border-slate-100 pt-8 lg:pt-12">
              <FeatureBox 
                icon={<DesktopTower size={28} weight="duotone" />}
                title="We Treat Hardware as Infrastructure"
                description="Devices are not disposable tools; they are part of a larger system. We approach every repair, deployment, and configuration as part of an environment that must remain stable, secure, and maintainable over time."
              />
              <FeatureBox 
                icon={<Headset size={28} weight="duotone" />}
                title="We Standardize What Others Improvise"
                description="Where technical support is often inconsistent, we apply structured processes. Every repair, deployment, and audit follows a defined method to ensure consistent outcomes regardless of scale."
              />
              <FeatureBox 
                icon={<Network size={28} weight="duotone" />}
                title="We Design for Continuity"
                description="Our work is measured over time. Systems should continue to perform under real conditions, not just immediately after service. We build and maintain environments that support uninterrupted work."
              />
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 py-6 px-6 lg:px-12 text-center bg-slate-50/50 border border-slate-100">
              <p className="text-slate-600 font-medium max-w-2xl mx-auto text-sm">
                By making infrastructure stable and high-performing, we empower industries to solve real-world challenges at scale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Trust Section */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 relative bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-blue"></span>
              Our Mission
            </h2>
            <h3 className="font-heading text-3xl md:text-4xl text-brand-navy font-bold max-w-2xl">
              Establish dependable technical standards that keep systems and infrastructure reliably operational.
            </h3>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* the BIG "Who We Are" Image + Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-0"
          >
            {/* Large Team Image */}
            <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full relative">
              <img 
                src={fixlineStudioImage} 
                alt="Fixline Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 3-Column Image Stats Footer */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
              <div className="p-8 lg:p-10 flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-5">
                  <Star fill="currentColor" size={24} />
                </div>
                <h5 className="font-bold text-lg text-brand-navy mb-2">Standardized Engineering</h5>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Engineered to international technical standards, providing enterprise-grade reliability for individual hardware and office networks.
                </p>
              </div>
              <div className="p-8 lg:p-10 flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-5">
                  <ShieldCheck fill="currentColor" size={24} />
                </div>
                <h5 className="font-bold text-lg text-brand-navy mb-2">The Trusted Backbone</h5>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  The technical partner for Nairobi’s leading creative studios, independent professionals, and enterprise fleets.
                </p>
              </div>
              <div className="p-8 lg:p-10 flex flex-col items-start text-left">
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
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-16 bg-brand-blue relative overflow-hidden m-4 lg:m-6 rounded-2xl flex items-center border border-brand-blue">
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
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row w-full relative"
          >
            {/* Left side Large Heading */}
            <div className="lg:py-8 lg:w-[45%] flex items-center lg:items-start relative z-10">
              <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight lg:sticky lg:top-32">
                Our Values
              </h3>
            </div>
            
            {/* Right side Stacked List */}
            <div className="lg:w-[55%] relative z-10 pt-8 lg:pt-0">
              <div className="flex flex-col divide-y divide-white/10">
                {[
                  {
                    title: "We Value Clarity",
                    desc: "Technical work should be understood, not obscured. We communicate issues, decisions, and outcomes in a way that allows clients to make informed choices about their systems."
                  },
                  {
                    title: "We Prioritize Reliability",
                    desc: "A system that works once is not enough. We focus on outcomes that hold over time, ensuring that our work supports consistent performance under real conditions."
                  },
                  {
                    title: "We are Responsible",
                    desc: "Access to systems and data comes with responsibility. We handle every device and environment with the same level of care we would expect for our own."
                  },
                  {
                    title: "We Value Long-Term Thinking",
                    desc: "Short-term fixes often create long-term problems. We make decisions that reduce future risk, even when it requires more effort upfront."
                  },
                  {
                    title: "We Maintain Professional Discipline",
                    desc: "Technical work requires structure and consistency. We follow defined processes not out of rigidity, but to ensure dependable and repeatable outcomes."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="py-4 lg:py-5 first:pt-0 last:pb-0 flex items-start gap-4">
                    {/* Minimal inset bullet */}
                    <div className="mt-1 flex-shrink-0 flex items-center justify-center w-3.5 h-3.5 rounded-full border border-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    
                    <div>
                      <h4 className="text-base text-white mb-1.5 leading-tight font-bold">
                        {item.title}
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full">
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
