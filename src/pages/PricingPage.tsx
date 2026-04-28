import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import fixlineMotif from '/assets/fixline-motif.svg';
import { EnvelopeSimple, PhoneCall, CurrencyCircleDollar } from '@phosphor-icons/react';

export default function PricingPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 bg-slate-50 pt-28 pb-20 relative font-sans flex flex-col">
      {/* Background decorations matching ProductPage */}
      <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full flex-grow flex flex-col pt-10">
        
        {/* Pricing Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="w-20 h-20 mx-auto bg-white rounded-3xl shadow-md border border-slate-100 flex items-center justify-center text-brand-blue mb-8">
            <CurrencyCircleDollar size={40} weight="duotone" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-navy mb-6 tracking-tight">
            Fixline Pricing
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Transparent, upfront quotes for all your IT service and hardware needs.
          </p>
        </motion.div>

        {/* Glassmorphic Coming Soon Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex-grow flex flex-col justify-center"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-[0.03] rounded-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl border border-slate-200/50"></div>
          
          <div className="relative backdrop-blur-2xl bg-white/40 border border-white/60 shadow-[0_8px_32px_0_rgba(0,68,255,0.05)] rounded-3xl p-10 md:p-16 lg:p-24 text-center overflow-hidden m-4 md:m-8">
            {/* Subtle motif watermark */}
            <img src={fixlineMotif} alt="" className="absolute -top-10 -right-10 w-96 h-96 opacity-[0.03] pointer-events-none" />
            
            {/* Ambient light inside the glass box */}
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-blue/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100/80 border border-slate-200 text-slate-600 text-sm font-semibold tracking-widest uppercase mb-8 shadow-sm">
                Get a Quote
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">
                We're still cooking this up.
              </h2>
              
              <p className="text-lg text-slate-600 mb-12 font-light leading-relaxed">
                We're working hard to put the finishing touches on our structured pricing. 
                In the meantime, we're offering welcoming, open discounts across all our services and hardware. 
                Whether you need diagnostics, custom builds, or enterprise deployments, getting a custom quote is easy and completely free!
              </p>

              {/* Action Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-slate-600">
                <p className="font-medium text-slate-500 text-sm uppercase tracking-wide">Have a quick enquiry?</p>
                
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                  <Link 
                    to="/get-a-quote" 
                    className="flex items-center gap-2 text-brand-blue hover:text-brand-navy font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <EnvelopeSimple size={20} weight="bold" />
                    Request a quote
                  </Link>
                  
                  <button 
                    data-cal-link="fixline-systems-mgiaor/support"
                    data-cal-namespace="support"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                    className="flex items-center gap-2 text-brand-blue hover:text-brand-navy font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <PhoneCall size={20} weight="bold" />
                    Schedule a call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}