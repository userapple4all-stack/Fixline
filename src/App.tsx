import React, { useState } from 'react';
import { 
  Wrench, 
  Desktop, 
  HardDrives, 
  ShieldCheck, 
  FileText, 
  WifiHigh, 
  Cpu, 
  TerminalWindow, 
  Certificate,
  ArrowRight,
  CheckCircle,
  List,
  X
} from '@phosphor-icons/react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-3xl tracking-tight text-brand-navy">
                Fix<span className="text-brand-blue">l</span>ine
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Services</a>
              <a href="#why-us" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Why Fixline</a>
              <a href="#products" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Products</a>
              <button className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
                Get Support
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                className="text-slate-600 hover:text-brand-navy p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4 z-50">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-brand-blue p-2">Services</a>
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-brand-blue p-2">Why Fixline</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-600 hover:text-brand-blue p-2">Products</a>
            <button className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3 rounded-full text-base font-medium transition-all shadow-sm w-full mt-2">
              Get Support
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-end pt-40 pb-12 lg:pt-48 lg:pb-24 overflow-hidden">
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 z-0 bg-brand-navy">
          <img 
            src="https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=2000" 
            alt="Technician repairing laptop motherboard" 
            className="w-full h-full object-cover brightness-[0.6]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Deeper Gradient Overlay for text contrast, especially on mobile */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F19] via-[#0B0F19]/80 sm:via-[#0B0F19]/40 to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-[#0B0F19] to-transparent sm:opacity-50"></div>
          {/* Electric blue splash in the bottom left */}
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#0044FF]/30 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-md">
              <span className="text-white">Tech support,</span> <span className="text-[#0044FF] drop-shadow-sm">done properly.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 mb-10 leading-relaxed drop-shadow max-w-2xl">
              Fixline provides professional repair, remote support, <br className="hidden sm:block" />
              and technical consulting for individuals and businesses.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4">
              <button className="flex-1 sm:flex-none bg-brand-blue hover:bg-brand-blue-hover text-white px-4 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap">
                <span className="sm:hidden">Get Support</span>
                <span className="hidden sm:inline">Get Support Now</span>
                <ArrowRight size={20} weight="bold" className="hidden sm:block" />
              </button>
              <button className="flex-1 sm:flex-none bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-4 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all flex items-center justify-center whitespace-nowrap">
                <span className="sm:hidden">Services</span>
                <span className="hidden sm:inline">Explore Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">What we do</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
              The full spectrum of technical support.
            </h3>
            <p className="text-lg text-slate-600">
             Fixline handles the full cycle — diagnosis, repair, hardware engineering, and long-term technical planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Remote */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="Remote session interface" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md p-2.5 rounded-xl text-white">
                  <Desktop size={28} weight="duotone" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-heading text-2xl font-bold text-brand-navy mb-2">Fixline Remote</h4>
                <p className="text-brand-blue font-medium mb-4 text-sm">Fast software repair without leaving your desk.</p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Most technical issues can be solved remotely. Our engineers connect securely, diagnose, and repair live while you watch.
                </p>
                <div className="mb-8 flex-grow">
                  <ul className="space-y-2.5">
                    {['System crashes & slow performance', 'Malware and viruses', 'Driver & update failures'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
                        <CheckCircle size={18} className="text-brand-blue shrink-0 mt-0.5" weight="fill" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-auto text-brand-blue font-semibold hover:text-brand-navy transition-colors flex items-center gap-2 group">
                  Start Remote Fix <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Service 2: Lab */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=800" 
                  alt="Technician repairing motherboard" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md p-2.5 rounded-xl text-white">
                  <Wrench size={28} weight="duotone" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-heading text-2xl font-bold text-brand-navy mb-2">Fixline Lab</h4>
                <p className="text-brand-blue font-medium mb-4 text-sm">Professional hardware repair.</p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  When hardware fails, proper diagnostics matter. Our lab handles complex repairs and upgrades in controlled environments.
                </p>
                <div className="mb-8 flex-grow">
                  <ul className="space-y-2.5">
                    {['Motherboard repair', 'SSD & data recovery', 'Component replacement & upgrades'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
                        <CheckCircle size={18} className="text-brand-blue shrink-0 mt-0.5" weight="fill" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-auto text-brand-blue font-semibold hover:text-brand-navy transition-colors flex items-center gap-2 group">
                  Book a Lab Repair <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Service 3: Consult */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" 
                  alt="Office IT architecture" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md p-2.5 rounded-xl text-white">
                  <HardDrives size={28} weight="duotone" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-heading text-2xl font-bold text-brand-navy mb-2">Fixline Consult</h4>
                <p className="text-brand-blue font-medium mb-4 text-sm">Technical planning for businesses.</p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  Technology decisions affect productivity. We help businesses choose hardware, build networks, and deploy systems.
                </p>
                <div className="mb-8 flex-grow">
                  <ul className="space-y-2.5">
                    {['Workstation planning', 'Office network setup', 'Hardware procurement & rollout'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
                        <CheckCircle size={18} className="text-brand-blue shrink-0 mt-0.5" weight="fill" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-auto text-brand-blue font-semibold hover:text-brand-navy transition-colors flex items-center gap-2 group">
                  Speak with a Consultant <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fixline */}
      <section id="why-us" className="py-24 lg:py-32 bg-[#0B0F19] text-white relative overflow-hidden">
        {/* Electric Blue Glow & Image Overlay */}
        <div className="absolute inset-0 z-0 bg-[#0044FF]/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[#0044FF]/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Abstract tech background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-5 max-w-xl">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Why Fixline:<br />
                A different standard.
              </h2>
              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed">
                We don't just fix what's broken—we build resilient systems. Experience enterprise-grade technical solutions with complete transparency, verified parts, and professional reporting.
              </p>
              <button className="bg-[#0044FF] hover:bg-blue-500 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(0,68,255,0.4)] hover:shadow-[0_0_30px_rgba(0,68,255,0.6)]">
                Learn More About Us
              </button>
            </div>

            {/* Right Column: 2x2 Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-5">
              {/* Card 1 */}
              <div className="bg-[#131B2F]/90 backdrop-blur-md border border-[#0044FF]/20 rounded-2xl p-8 hover:bg-[#1A243D] hover:border-[#0044FF]/40 transition-all shadow-lg">
                <Desktop size={32} className="text-[#0044FF] mb-5 drop-shadow-[0_0_8px_rgba(0,68,255,0.8)]" weight="fill" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Real-time transparency</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Every job is tracked. You receive updates and progress reports throughout the repair process.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#131B2F]/90 backdrop-blur-md border border-[#0044FF]/20 rounded-2xl p-8 hover:bg-[#1A243D] hover:border-[#0044FF]/40 transition-all shadow-lg">
                <ShieldCheck size={32} className="text-[#0044FF] mb-5 drop-shadow-[0_0_8px_rgba(0,68,255,0.8)]" weight="fill" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Verified components</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  We use genuine, high-quality hardware sourced from trusted suppliers. No shortcuts.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#131B2F]/90 backdrop-blur-md border border-[#0044FF]/20 rounded-2xl p-8 hover:bg-[#1A243D] hover:border-[#0044FF]/40 transition-all shadow-lg">
                <FileText size={32} className="text-[#0044FF] mb-5 drop-shadow-[0_0_8px_rgba(0,68,255,0.8)]" weight="fill" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Professional reporting</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Receive clear diagnostic reports and proper invoices for every service performed.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#131B2F]/90 backdrop-blur-md border border-[#0044FF]/20 rounded-2xl p-8 hover:bg-[#1A243D] hover:border-[#0044FF]/40 transition-all shadow-lg">
                <ShieldCheck size={32} className="text-[#0044FF] mb-5 drop-shadow-[0_0_8px_rgba(0,68,255,0.8)]" weight="fill" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Strict Data Security</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Your data remains private. We follow strict protocols to ensure your information is never compromised.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Beyond Repair (Products) */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Beyond Repair</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
                We build the systems behind your work.
              </h3>
              <p className="text-lg text-slate-600">
                Fixline provides the infrastructure that keeps teams productive.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="text-brand-blue font-semibold hover:text-brand-navy transition-colors flex items-center gap-2">
                View All Products <ArrowRight size={20} weight="bold" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group border border-slate-200 rounded-3xl p-8 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all bg-slate-50/50">
              <WifiHigh size={40} className="text-brand-navy mb-6 group-hover:text-brand-blue transition-colors" weight="duotone" />
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-3">Fixline Networks</h4>
              <p className="text-slate-600">Office Wi-Fi, secure routing, and reliable connectivity engineered for modern workspaces.</p>
            </div>

            <div className="group border border-slate-200 rounded-3xl p-8 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all bg-slate-50/50">
              <Cpu size={40} className="text-brand-navy mb-6 group-hover:text-brand-blue transition-colors" weight="duotone" />
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-3">Fixline Builds</h4>
              <p className="text-slate-600">Custom computers designed specifically for performance, stability, and long-term reliability.</p>
            </div>

            <div className="group border border-slate-200 rounded-3xl p-8 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all bg-slate-50/50">
              <TerminalWindow size={40} className="text-brand-navy mb-6 group-hover:text-brand-blue transition-colors" weight="duotone" />
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-3">Fixline OS</h4>
              <p className="text-slate-600">Our internal repair and ticketing system used to manage diagnostics, repairs, and service records.</p>
            </div>

            <div className="group border border-slate-200 rounded-3xl p-8 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all bg-slate-50/50">
              <Certificate size={40} className="text-brand-navy mb-6 group-hover:text-brand-blue transition-colors" weight="duotone" />
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-3">Fixline Certified</h4>
              <p className="text-slate-600">A catalog of verified, high-grade hardware components used in our repairs and custom builds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Need help with your device?
          </h2>
          <p className="text-xl text-blue-100 mb-2 max-w-2xl mx-auto">
            Start with a free 15-minute diagnosis with a Fixline engineer.
          </p>
          <p className="text-blue-200 mb-10 max-w-2xl mx-auto">
            No pressure. Just a clear understanding of the problem and how to solve it.
          </p>
          <button className="bg-white text-brand-blue hover:bg-slate-50 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Get Support Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-2xl tracking-tight text-white">
              Fix<span className="text-brand-blue">l</span>ine
            </span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Fixline. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
