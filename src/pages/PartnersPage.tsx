import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Buildings, Wrench, DesktopTower, Link, SealCheck, ArrowsOutLineHorizontal } from '@phosphor-icons/react';
import SectionLabel from '../components/SectionLabel';
import StatCard from '../components/StatCard';
import FeatureBox from '../components/FeatureBox';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
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
                Partners
              </SectionLabel>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight mb-6 text-brand-navy">
                The Technical backbone for <span className="text-brand-blue">modern operations.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-light">
                We partner with growing and established firms, independent creators, and hardware distributors to provide a standardized layer of technical support. By integrating Fixline into your operations or supply chain, hardware failures stop being unpredictable disruptions and become managed events.
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=60&w=1000" 
                  alt="Partnership collaboration" 
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
            {[
                { val: '+200', label: <>Partner fleets <br/>under management</> },
                { val: '+15', label: <>Authorized vendor <br/>alliances</> },
                { val: '+12,000', label: <>Technical assets <br/>verified</> },
                { val: '99.8%', label: <>Uptime maintained for <br/>partner networks</> },
            ].map((stat, i) => (
                <StatCard key={i} number={stat.val} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Endevour */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-blue"></span>
              <span className="text-brand-blue font-bold tracking-widest uppercase text-xs">We endeavor to</span>
            </div>
            <p className="font-heading text-3xl lg:text-4xl font-bold text-brand-navy leading-[1.15] tracking-tight">
                Establish the technical baseline for regional productivity by providing <span className="text-brand-blue">reliable support structures</span> for those who build, distribute, and rely on technology.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Pillars Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden m-4 lg:m-6 rounded-2xl border border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full">
          <div className="mb-12">
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-blue"></span>
              Partnership Pillars
            </h2>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
               How we collaborate
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
                icon={<Buildings size={28} weight="duotone" />}
                title="Enterprise & Startup Fleets"
                description="Dedicated technical support for startups and growing firms. From day-zero deployments to ongoing fleet maintenance, we manage the lifecycle of workstations and devices."
              />
              <FeatureBox 
                icon={<Wrench size={28} weight="duotone" />}
                title="Vendors & Distributors"
                description="Professional service extension for hardware providers. We manage after-sales repairs, warranty fulfillment, and technical audits for consistent experiences."
              />
              <FeatureBox 
                icon={<DesktopTower size={28} weight="duotone" />}
                title="Creative & Pro Studios"
                description="Priority diagnostics, maintenance, and infrastructure support for high-performance workstations and secure creative networks."
              />
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 py-6 px-6 lg:px-12 text-center rounded-xl bg-slate-50/50 border border-slate-100">
              <p className="text-slate-600 font-medium max-w-2xl mx-auto text-sm">
                By making infrastructure stable and high-performing, we empower industries to solve real-world challenges at scale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Principles */}
      <section className="py-12 md:py-16 bg-brand-blue relative overflow-hidden m-4 lg:m-6 rounded-2xl flex items-center border border-brand-blue">
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
            alt="Partnership Background" 
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
                Partner Principles
              </h3>
            </div>
            
            {/* Right side Stacked List */}
            <div className="lg:w-[55%] relative z-10 pt-8 lg:pt-0">
              <div className="flex flex-col divide-y divide-white/10">
                {[
                    { prefix: "We prioritize", title: "Integration", desc: "Partnership is operational integration. Gain full visibility into your technical environment through diagnostic logs, asset health reports, and maintenance records." },
                    { prefix: "We enforce", title: "Standardization", desc: "Every repair, deployment, and infrastructure intervention follows the same rigorous engineering process, eliminating local support inconsistencies." },
                    { prefix: "We design for", title: "Scalability", desc: "Our support infrastructure scales with you. From a single workstation to multi-office environments, our systems are designed to maintain stability as complexity increases." },
                ].map((principle, idx) => (
                  <div key={idx} className="py-6 lg:py-7 first:pt-0 last:pb-0 flex items-start gap-4">
                    {/* Minimal inset bullet */}
                    <div className="mt-1 flex-shrink-0 flex items-center justify-center w-3.5 h-3.5 rounded-full border border-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    
                    <div>
                      <h4 className="text-base text-blue-50 mb-1.5 leading-tight font-medium">
                        {principle.prefix} <span className="font-bold text-white">{principle.title}</span>
                      </h4>
                      <p className="text-blue-100 text-sm leading-relaxed max-w-md font-light">{principle.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Value */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-heading text-3xl font-bold text-brand-navy mb-8">Strategic Value</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
            Fixline bridges the gap between owning technology and maintaining reliable technology. Businesses reduce internal IT overhead, vendors gain a trusted fulfillment partner for service and warranties, and creative teams gain dependable infrastructure for their work.
            </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-brand-blue relative overflow-hidden m-4 lg:m-6 rounded-2xl flex items-center">
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-300/20 blur-[150px] rounded-full pointer-events-none"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <h3 className="font-heading text-3xl md:text-4xl text-white font-bold tracking-tight text-center lg:text-left lg:max-w-2xl">
            Secure reliable technical support for your operations.
          </h3>
          <button className="bg-white hover:bg-slate-50 text-brand-blue px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group w-full lg:w-auto">
            <span className="text-sm tracking-wide whitespace-nowrap">Request a Partnership Consultation</span>
            <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
}
