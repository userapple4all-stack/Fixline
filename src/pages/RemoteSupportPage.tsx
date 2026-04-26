import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
const customerSupportImg = '/assets/images/customer-support-agent-at-fixline.webp';
import { 
  ArrowRight, 
  CheckCircle, 
  CalendarPlus, 
  TerminalWindow, 
  ShieldCheck, 
  FileText, 
  Power,
  Clock,
  Car,
  FirstAid,
  TrendUp,
  IdentificationCard
} from '@phosphor-icons/react';
import SectionLabel from '../components/SectionLabel';
import FeatureBox from '../components/FeatureBox';

export default function RemoteSupportPage() {
  return (
    <div className="bg-white">
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
              <SectionLabel className="mb-6">
                Remote Support
              </SectionLabel>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.05] tracking-tight mb-6 text-brand-navy">
                Uptime in minutes,<br className="hidden md:block" /> <span className="text-brand-blue">not days.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                We provide secure remote diagnostics and technical support to identify, troubleshoot, and resolve many common computer problems in real time.
              </p>
              
              <div className="flex flex-row gap-3 sm:gap-4">
                <Link to="/contact" className="flex-1 sm:flex-none bg-brand-blue hover:bg-brand-blue-hover text-white px-4 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all shadow-[0_8px_20px_rgba(0,82,255,0.25)] hover:shadow-[0_12px_25px_rgba(0,82,255,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group whitespace-nowrap">
                  <span className="sm:hidden">Start Fix</span>
                  <span className="hidden sm:inline">Initiate Remote Fix</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="flex-1 sm:flex-none bg-white hover:bg-slate-50 border border-slate-200 text-brand-navy px-4 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all shadow-sm hover:shadow flex items-center justify-center whitespace-nowrap">
                  <span className="sm:hidden">Consult</span>
                  <span className="hidden sm:inline">Speak to an Expert</span>
                </Link>
              </div>
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
                  src={customerSupportImg}
                  alt="Remote Technical Support" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <img src="/assets/fixline-motif.svg" alt="" className="absolute -top-24 -right-24 sm:-top-32 sm:-right-24 w-80 h-80 sm:w-96 sm:h-96 opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight mb-6">
                Not every technical issue requires a <span className="text-brand-blue">physical repair.</span>
              </h2>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="space-y-6"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                Many system problems originate from software conflicts, configuration errors, updates, or performance bottlenecks that can be diagnosed and corrected remotely. Through a secure support session, a Fixline technician can access the system with your permission, investigate the issue, and restore proper functionality without requiring you to leave your workstation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                This approach allows problems to be resolved faster while reducing downtime for individuals and teams that rely on their devices daily.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Remote Support Can Help With */}
      <section className="py-10 lg:py-14 bg-white relative overflow-hidden m-4 lg:m-6 rounded-xl border border-slate-200">
        <img src="/assets/fixline-motif.svg" alt="" className="absolute -bottom-10 -left-10 w-64 h-64 opacity-[0.03] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Headers + Points */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-10 lg:mb-12">
                  <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-brand-blue"></span>
                    Capabilities
                  </h2>
                  <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-brand-navy tracking-tight leading-[1.15] mb-5">
                    What Remote Support Can Help With
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                    Remote support is commonly used to quickly diagnose and resolve issues such as:
                  </p>
                </div>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "Slow or unresponsive computers",
                    "Software installation and configuration",
                    "System errors and operating system issues",
                    "Virus and malware removal",
                    "Application and services troubleshooting",
                    "Network configuration problems",
                    "Performance optimization and cleanup"
                  ].map((issue, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="mt-0.5 text-brand-blue shrink-0">
                        <CheckCircle size={22} weight="fill" />
                      </div>
                      <span className="text-brand-navy font-semibold text-[15px] sm:text-base md:text-[17px] leading-snug">{issue}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Right Column: CTA Text */}
              <div className="lg:col-span-5 lg:border-l border-t lg:border-t-0 border-slate-100 pt-10 lg:pt-0 lg:pl-12 flex flex-col justify-center">
                <p className="text-slate-600 text-[17px] sm:text-lg leading-relaxed mb-8">
                  If the issue requires hardware repair, the technician will recommend the appropriate next step and schedule an in-person repair if necessary.
                </p>
                <div className="flex">
                  <Link to="/contact" className="inline-flex text-brand-blue hover:text-brand-blue-hover text-lg sm:text-xl font-bold transition-all items-center gap-3 py-2 group">
                    <CalendarPlus size={28} weight="regular" className="group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
                    <span className="border-b-2 border-brand-blue/30 group-hover:border-brand-blue transition-colors pb-0.5">Start Remote Diagnosis</span>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* How Remote Support Works */}
      <section className="py-10 lg:py-14 bg-brand-blue relative overflow-hidden m-4 lg:m-6 rounded-xl border border-brand-blue/30">
        {/* Subtle background noise/image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1500')] opacity-10 mix-blend-luminosity object-cover hidden lg:block"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-start">
            {/* Left: Large Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 h-full flex flex-col justify-start">
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
               >
                 How Remote Support Works
               </motion.h2>
            </div>

            {/* Right: List of Values-Style Steps */}
            <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-4">
               <div className="space-y-0 relative border-l border-white/20 ml-4 sm:ml-6">
                  {/* Step 1 */}
                  <div className="relative pl-6 sm:pl-8 pb-5 sm:pb-6 group last:pb-0">
                    <div className="absolute -left-[9px] top-[2px]">
                      <CalendarPlus size={18} weight="bold" className="text-white" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[17px] md:text-[19px] font-normal text-white mb-1.5 leading-tight">
                        1 &ndash; <span className="font-bold">Book a Support Session</span>
                      </h3>
                      <p className="text-white/90 text-[14px] md:text-[15px] leading-relaxed max-w-lg">
                        Schedule a remote support appointment and briefly describe the problem you're experiencing.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-6 sm:pl-8 pb-5 sm:pb-6 group last:pb-0">
                    <div className="absolute -left-[9px] top-[2px]">
                      <IdentificationCard size={18} weight="bold" className="text-white" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[17px] md:text-[19px] font-normal text-white mb-1.5 leading-tight">
                        2 &ndash; <span className="font-bold">Client-Generated ID</span>
                      </h3>
                      <p className="text-white/90 text-[14px] md:text-[15px] leading-relaxed max-w-lg">
                        You initiate the session by generating a unique ID from your terminal. This handshake is the only way into the system; we have no way to enter without your active authorization.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-6 sm:pl-8 pb-5 sm:pb-6 group last:pb-0">
                    <div className="absolute -left-[9px] top-[2px]">
                      <ShieldCheck size={18} weight="bold" className="text-white" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[17px] md:text-[19px] font-normal text-white mb-1.5 leading-tight">
                        3 &ndash; <span className="font-bold">Proprietary Gateway</span>
                      </h3>
                      <p className="text-white/90 text-[14px] md:text-[15px] leading-relaxed max-w-lg">
                        Interventions are conducted through our custom-built internal tool. It is engineered for low-latency, kernel-level repairs, bypassing the vulnerabilities found in standard off-the-shelf remote software.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative pl-6 sm:pl-8 pb-5 sm:pb-6 group last:pb-0">
                    <div className="absolute -left-[9px] top-[2px]">
                      <FileText size={18} weight="bold" className="text-white" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[17px] md:text-[19px] font-normal text-white mb-1.5 leading-tight">
                        4 &ndash; <span className="font-bold">Process Logging</span>
                      </h3>
                      <p className="text-white/90 text-[14px] md:text-[15px] leading-relaxed max-w-lg">
                        With your consent, every command executed and every configuration change made is recorded. This log is automatically uploaded to your Support Centre dashboard, providing a permanent reference for audits.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative pl-6 sm:pl-8 pb-0 group last:pb-0">
                    <div className="absolute -left-[9px] top-[2px]">
                      <Power size={18} weight="bold" className="text-white" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[17px] md:text-[19px] font-normal text-white mb-1.5 leading-tight">
                        5 &ndash; <span className="font-bold">Safe Termination</span>
                      </h3>
                      <p className="text-white/90 text-[14px] md:text-[15px] leading-relaxed max-w-lg">
                        Once the fix is verified, the connection is forcefully purged. The session ID is destroyed instantly. The access path is dead and cannot be reused, ensuring our entry is strictly temporary.
                      </p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Remote Support */}
      <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-12 lg:mb-16">
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
               <span className="w-8 h-px bg-brand-blue"></span>
               Remote Support Benefits
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
               Why Use Remote Support
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl">
               Remote support offers a practical solution when immediate assistance is needed.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mb-12">
            
            {/* Card 1 */}
            <div className="border border-slate-200 rounded-2xl p-5 lg:p-6 bg-white flex flex-col">
              <h4 className="text-xs font-bold text-slate-500 mb-3 tracking-wide">Instant Connectivity</h4>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue mb-4">
                <TrendUp size={18} weight="regular" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-1.5">Faster Issue Resolution</h3>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                Get connected to an expert instantly without waiting for a dispatch or dropping off equipment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-200 rounded-2xl p-5 lg:p-6 bg-white flex flex-col">
              <h4 className="text-xs font-bold text-slate-500 mb-3 tracking-wide">Stay Where You Are</h4>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue mb-4">
                <Car size={18} weight="regular" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-1.5">No Travel Required</h3>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                Eliminate the need to drive, park, or carry heavy devices to a repair facility. We come to your desktop.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-200 rounded-2xl p-5 lg:p-6 bg-white flex flex-col">
              <h4 className="text-xs font-bold text-slate-500 mb-3 tracking-wide">Expert Guidance</h4>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue mb-4">
                <FirstAid size={18} weight="regular" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-1.5">Direct Assistance</h3>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                Work one-on-one with a professional technician who can guide you through the process as it happens.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-slate-200 rounded-2xl p-5 lg:p-6 bg-white flex flex-col">
              <h4 className="text-xs font-bold text-slate-500 mb-3 tracking-wide">Maximize Productivity</h4>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue mb-4">
                <Clock size={18} weight="regular" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-1.5">Reduced Downtime</h3>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                Minimize disruptions to your work or study schedule with rapid diagnostic times and live fixes.
              </p>
            </div>

            {/* Card 5 */}
            <div className="border border-slate-200 rounded-2xl p-5 lg:p-6 bg-white flex flex-col">
              <h4 className="text-xs font-bold text-slate-500 mb-3 tracking-wide">Professional Standards</h4>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue mb-4">
                <ShieldCheck size={18} weight="regular" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-1.5">Verified Fixes</h3>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                Benefit from the exact same structured diagnostic process used in our professional on-site physical service.
              </p>
            </div>

            {/* Card 6 */}
            <div className="border border-slate-200 rounded-2xl p-5 lg:p-6 bg-white flex flex-col">
              <h4 className="text-xs font-bold text-slate-500 mb-3 tracking-wide">Secure Connection</h4>
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue mb-4">
                <TerminalWindow size={18} weight="regular" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-1.5">Auditable Sessions</h3>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                Interventions are fully encrypted and securely logged on the Fixline gateway, guaranteeing total transparency.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Appraisal CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-brand-blue relative overflow-hidden m-4 lg:m-6 rounded-2xl flex items-center">
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-300/20 blur-[150px] rounded-full pointer-events-none"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
          >
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-heading text-[22px] sm:text-2xl md:text-3xl lg:text-[34px] text-white tracking-tight leading-[1.4] md:leading-[1.3] max-w-3xl mx-auto lg:mx-0">
                <span className="text-blue-100 font-normal mr-2">Remote support allows problems to be diagnosed and corrected quickly</span>
                <span className="font-bold text-white">while maintaining the same structured repair process used in <span className="text-blue-200">physical repair.</span></span>
              </h3>
            </div>
            <div className="shrink-0 w-full lg:w-auto flex justify-center mt-2 lg:mt-0">
              <Link to="/contact" className="bg-white hover:bg-slate-50 text-brand-blue px-4 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 flex flex-row items-center justify-center gap-2 group w-full sm:w-auto">
                <span className="text-[13px] sm:text-[15px] tracking-wide whitespace-nowrap">Book a Remote Support Session</span>
                <CalendarPlus size={20} weight="bold" className="shrink-0 transition-transform group-hover:scale-110" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
