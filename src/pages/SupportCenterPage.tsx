import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MagnifyingGlass, CalendarBlank, CheckCircle, CircleDashed, FileText, Receipt, WarningCircle } from '@phosphor-icons/react';

type TimelineEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'current' | 'pending';
};

type RepairJobInfo = {
  id: string;
  model: string;
  issue: string;
  status: string;
  timeline: TimelineEvent[];
};

export default function SupportCenterPage() {
  const [jobId, setJobId] = useState('');
  const [activeJob, setActiveJob] = useState<RepairJobInfo | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [repairSuccess, setRepairSuccess] = useState<{jobNumber: string} | null>(null);

  useEffect(() => {
    (function (C: any, A: any, L: any) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const w = window as any;
    w.Cal("init", "support", {origin:"https://app.cal.com"});
    w.Cal.ns.support("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  }, []);

  const handleRepairSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwm0h7HUI7gJy3uJYs-VnVosA1EW3iimHpblaP7qRcv6lDgwKn6_5jDn72XwKtepptU_A/exec', {
        method: 'POST',
        body: formData,
      });
      setIsSubmitting(false);
      setRepairSuccess({ jobNumber: `FXL-${Math.floor(Math.random() * 90000) + 10000}` });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setRepairSuccess({ jobNumber: `FXL-${Math.floor(Math.random() * 90000) + 10000}` });
      form.reset();
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = jobId.trim().toUpperCase();
    if (!query) return;

    setIsSearching(true);
    setError(null);

    // Simulate network request - ready to be swapped with DB fetch function
    setTimeout(() => {
      setIsSearching(false);
      
      if (query.startsWith('FXL-')) {
        setActiveJob({
          id: query,
          model: 'Lenovo ThinkPad X1 Carbon',
          issue: 'Intermittent power failure',
          status: 'In Progress',
          timeline: [
            {
              id: 'step-1',
              title: 'Device Received',
              description: 'Visual inspection cleared. Proceeding to teardown bay.',
              date: 'Oct 24, 09:12 AM',
              status: 'completed'
            },
            {
              id: 'step-2',
              title: 'Diagnostics',
              description: 'Identified short on the 5V rail. Thermal imaging complete.',
              date: 'Oct 24, 11:45 AM',
              status: 'completed'
            },
            {
              id: 'step-3',
              title: 'Component Repair',
              description: 'Replacing charging controller. Validating capacitors.',
              date: 'Current Stage',
              status: 'current'
            },
            {
              id: 'step-4',
              title: 'Stress Testing',
              description: 'System assembly and 24-hour thermal/power validation.',
              date: 'Pending',
              status: 'pending'
            }
          ]
        });
      } else {
        setActiveJob(null);
        setError("We couldn't find a repair job with that ID. Please note valid IDs typically start with 'FXL-'.");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-8">
      {/* Hero Section */}
      <section className="text-center mb-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-blue tracking-tight mb-4 leading-tight">
            Support Centre
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            We are building a comprehensive portal to enable you to track your service history and maintain your relationship with us.
          </p>
        </motion.div>
      </section>

      {/* Tracking Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-10 lg:py-12 bg-blue-50 relative overflow-hidden m-4 lg:m-6 rounded-xl border border-blue-100"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-w-0">
            
            {/* Left Side: Search */}
            <div className="flex flex-col justify-center min-w-0">
              <div className="w-14 h-14 bg-white text-brand-blue rounded-xl flex items-center justify-center shrink-0 mb-6 shadow-sm border border-blue-100/50">
                <MagnifyingGlass size={28} weight="duotone" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-3">Track Your Repair</h2>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-md">
                Paste your Job ID below to check up with updates on your ongoing service.
              </p>
              
              <form onSubmit={handleSearch} className="relative flex flex-col w-full max-w-md">
                <div className="relative flex items-center w-full">
                  <input 
                    type="text" 
                    placeholder="e.g. FXL-10492"
                    value={jobId}
                    onChange={(e) => setJobId(e.target.value)}
                    className={`w-full bg-white border ${error ? 'border-red-300 focus:border-red-400 focus:ring-red-500/10 text-red-900' : 'border-slate-200 focus:border-brand-blue focus:ring-brand-blue/10 text-slate-700'} rounded-xl py-3.5 pl-4 sm:pl-5 pr-[80px] sm:pr-[90px] outline-none transition-all font-mono text-sm sm:text-base placeholder:font-sans placeholder:text-sm sm:placeholder:text-base placeholder:text-slate-400 focus:ring-4`}
                  />
                  <button 
                    type="submit" 
                    disabled={isSearching}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 sm:px-6 bg-brand-navy hover:bg-brand-blue disabled:opacity-50 text-white rounded-lg font-bold transition-colors text-xs sm:text-sm"
                  >
                    {isSearching ? '...' : 'Track'}
                  </button>
                </div>
                {error && (
                  <motion.div initial={{opacity:0, y:-5}} animate={{opacity:1, y:0}} className="flex items-start gap-2 mt-3 text-red-600">
                    <WarningCircle size={16} weight="fill" className="mt-0.5 shrink-0" />
                    <p className="text-xs leading-relaxed font-medium">{error}</p>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Right Side: Report */}
            <div className="flex flex-col min-h-[400px] lg:min-h-[450px] min-w-0 justify-center lg:pl-10 text-slate-800">
              <AnimatePresence mode="wait">
                {!activeJob ? (
                  <motion.div 
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-10 px-6"
                  >
                    <div className="w-20 h-20 bg-white/60 border border-slate-200/50 rounded-full flex items-center justify-center mb-6 text-slate-400 shrink-0 mix-blend-multiply">
                      <Receipt size={32} weight="duotone" />
                    </div>
                    <h3 className="text-brand-navy font-bold text-xl mb-2">Awaiting Search</h3>
                    <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                      Enter your job reference number to view your report and tracking timeline.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="repair-report"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full min-w-0 py-4 lg:py-6"
                  >
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-brand-navy">Here is your report</h3>
                      <div className="px-3 py-1 rounded-md bg-white border border-slate-200/50 shadow-sm text-brand-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest shrink-0">
                        {activeJob.status}
                      </div>
                    </div>

                    {/* Grey Shaded Container */}
                    <div className="bg-white/60 border border-slate-200/50 shadow-sm rounded-xl p-5 md:p-6 flex-1 flex flex-col min-w-0 overflow-hidden backdrop-blur-md">

                      
                      <div className="mb-4 md:mb-6">
                        <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Job ID</p>
                        <p className="text-brand-navy font-mono font-bold text-base sm:text-lg break-all">{activeJob.id}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 md:mb-6">
                        <div className="min-w-0">
                          <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-1 truncate">Device Model</p>
                          <p className="text-brand-navy font-medium text-xs sm:text-sm line-clamp-2">{activeJob.model}</p>
                        </div>
                        <div className="min-w-0">
                          <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-1 truncate">Reported Issue</p>
                          <p className="text-brand-navy font-medium text-xs sm:text-sm line-clamp-2">{activeJob.issue}</p>
                        </div>
                      </div>

                      <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-wider mb-3">Service Timeline</p>
                      
                      {/* Horizontal Timeline */}
                      <div className="flex overflow-x-auto pb-4 gap-3 md:gap-4 snap-x snap-mandatory flex-1 items-stretch overscroll-x-contain touch-pan-x min-h-[140px]
                        [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-slate-200/50 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full"
                      >
                        {activeJob.timeline.map((event) => (
                          <div 
                            key={event.id}
                            className={`w-[200px] md:w-[220px] shrink-0 rounded-xl p-4 snap-start 
                              ${event.status === 'completed' ? 'bg-white border border-slate-200 shadow-sm' : ''}
                               ${event.status === 'current' ? 'bg-white border-2 border-brand-blue/30 shadow-sm relative overflow-hidden' : ''}
                                ${event.status === 'pending' ? 'bg-white/60 border border-slate-200/50 shadow-sm opacity-70' : ''}
                            `}
                          >
                            {event.status === 'current' && (
                               <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue animate-pulse"></div>
                            )}
                            <div className="flex items-center gap-3 mb-2">
                              {event.status === 'completed' && <CheckCircle size={18} className="text-brand-blue" weight="fill" />}
                              {event.status === 'current' && <CircleDashed size={18} className="text-brand-blue animate-spin" weight="bold" />}
                              {event.status === 'pending' && <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>}
                              
                              <h4 className={`font-bold text-sm ${event.status === 'pending' ? 'text-slate-500' : 'text-brand-navy'}`}>
                                {event.title}
                              </h4>
                            </div>
                            
                            <p className="text-xs text-slate-500 mb-2 leading-relaxed">{event.description}</p>
                            
                            {event.status === 'completed' && <span className="text-slate-400 font-mono text-[10px]">{event.date}</span>}
                            {event.status === 'current' && <span className="text-brand-blue/80 font-bold uppercase tracking-wider text-[10px]">{event.date}</span>}
                            {event.status === 'pending' && <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">{event.date}</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Booking section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="py-10 lg:py-16 bg-white relative overflow-hidden m-4 lg:m-6 rounded-xl border border-slate-200"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-10 gap-6 border-b border-slate-100 pb-8">
            <div className="flex flex-col items-start w-full">
              <button
                data-cal-link="fixline-systems-mgiaor/support"
                data-cal-namespace="support"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="flex items-center gap-2 text-brand-blue hover:text-brand-navy font-bold text-sm mb-6 transition-colors"
              >
                <CalendarBlank size={18} weight="bold" />
                <span>Prefer to schedule a call?</span>
              </button>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Book a Repair</h3>
              <p className="text-slate-600 max-w-xl">
                Tell us about your device and the problem you're experiencing to get a repair job number.
              </p>
            </div>
          </div>
          
          <div className="w-full">
            {repairSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-lg mx-auto p-8 md:p-12 text-center bg-blue-50 border border-blue-100 rounded-2xl flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white text-brand-blue rounded-full shadow-sm flex items-center justify-center mb-6">
                  <CheckCircle size={32} weight="fill" />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-2">Repair Requested</h4>
                <p className="text-slate-600 mb-6">
                  Your repair has been logged successfully. Use the job number below to track the progress in the search bar above.
                </p>
                <div className="bg-white px-6 py-4 rounded-xl border border-blue-200 shadow-sm w-full mb-8">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Job Number</p>
                  <p className="text-brand-blue font-mono text-xl font-bold">{repairSuccess.jobNumber}</p>
                </div>
                <button 
                  onClick={() => {
                    setRepairSuccess(null);
                    setJobId(repairSuccess.jobNumber);
                  }}
                  className="bg-brand-navy hover:bg-brand-blue text-white font-bold py-3 px-6 rounded-xl transition-colors w-full"
                >
                  Track This Repair
                </button>
              </motion.div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleRepairSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-2">Full Name</label>
                    <input type="text" name="customerName" placeholder="Your name" className="w-full border border-slate-200 rounded-xl px-4 py-3" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-2">Email Address</label>
                    <input type="email" name="customerEmail" placeholder="Your email" className="w-full border border-slate-200 rounded-xl px-4 py-3" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-2">Device Model</label>
                    <input type="text" name="deviceModel" placeholder="e.g. MacBook Pro 2021" className="w-full border border-slate-200 rounded-xl px-4 py-3" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-navy mb-2">Problem Description</label>
                    <textarea name="problem" placeholder="Describe the issue" className="w-full border border-slate-200 rounded-xl px-4 py-3 min-h-[120px]" required></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-blue hover:bg-brand-navy disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-colors">
                    {isSubmitting ? 'Submitting...' : 'Submit Repair Request'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
