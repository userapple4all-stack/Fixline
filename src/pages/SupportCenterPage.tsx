import React, { useState } from 'react';
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
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4 leading-tight">
              Welcome to the Support Centre
            </h1>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              We are building a comprehensive portal to enable you to track your service history and maintain your relationship with us.
            </p>
          </motion.div>
        </div>

        {/* Tracking Card - Layout matching the sketch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-12 w-full max-w-full overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 lg:divide-x divide-y lg:divide-y-0 divide-slate-100 min-w-0">
            
            {/* Left Side: Search */}
            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center min-w-0">
              <div className="w-14 h-14 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0 mb-6">
                <MagnifyingGlass size={28} weight="duotone" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-3">Track Your Repair</h2>
              <p className="text-slate-500 mb-8 leading-relaxed max-w-md">
                Paste your Job ID below to check up with updates on your ongoing service.
              </p>
              
              <form onSubmit={handleSearch} className="relative flex flex-col w-full max-w-md">
                <div className="relative flex items-center w-full">
                  <input 
                    type="text" 
                    placeholder="e.g. FXL-10492"
                    value={jobId}
                    onChange={(e) => setJobId(e.target.value)}
                    className={`w-full bg-slate-50 border rounded-xl py-3.5 pl-4 sm:pl-5 pr-[80px] sm:pr-[90px] outline-none focus:bg-white transition-all font-mono text-sm sm:text-base placeholder:font-sans placeholder:text-sm sm:placeholder:text-base placeholder:text-slate-400
                      ${error ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-500/10 text-red-900' : 'border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 text-slate-700'}`}
                  />
                  <button 
                    type="submit" 
                    disabled={isSearching}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 sm:px-5 bg-brand-navy hover:bg-brand-blue disabled:opacity-50 text-white rounded-lg font-bold transition-colors text-xs sm:text-sm"
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

            {/* Right Side: Report (Grey Shaded Area) */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 bg-slate-50/50 flex flex-col min-h-[400px] lg:min-h-[450px] min-w-0">
              <AnimatePresence mode="wait">
                {!activeJob ? (
                  <motion.div 
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-300 shadow-sm shrink-0">
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
                    className="flex flex-col h-full min-w-0"
                  >
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-brand-navy">Here is your report</h3>
                      <div className="px-3 py-1 rounded-md bg-blue-50 text-brand-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-blue-100 shrink-0">
                        {activeJob.status}
                      </div>
                    </div>

                    {/* Grey Shaded Container */}
                    <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 md:p-6 flex-1 flex flex-col min-w-0 overflow-hidden">
                      
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
        </motion.div>

        {/* Booking Placeholder section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-navy mb-3">Schedule a Consultation</h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              Need immediate assistance or want to discuss a new project? Book a time that works for you.
            </p>
          </div>
          
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl h-64 flex flex-col items-center justify-center text-slate-400 p-6 text-center max-w-3xl mx-auto">
            <CalendarBlank size={40} weight="duotone" className="mb-4 text-slate-300" />
            <p className="font-bold text-slate-500 mb-1">Booking Component Wrapper</p>
            <p className="text-sm max-w-sm text-slate-400 leading-relaxed">
              We'll integrate Cal.com here shortly. For now, this serves as the placeholder for the scheduling interface.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
