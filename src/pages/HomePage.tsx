import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
const customerSupportImg = '/assets/images/customer-support-agent-at-fixline.webp';
const hardwareRepairImg = '/assets/images/fixline-hardware-repair.webp';
const consultationImg = '/assets/images/fixline-consultation.webp';
import { 
  Wrench, 
  Desktop, 
  HardDrives, 
  ShieldCheck, 
  FileText, 
  Network, 
  DesktopTower, 
  TerminalWindow, 
  ArrowRight,
  CheckCircle
} from '@phosphor-icons/react';

export const servicesData = [
  {
    id: 'remote',
    path: '/service/remote',
    title: 'Remote Support',
    subtitle: 'Fast software repair without leaving your desk.',
    description: 'Most technical issues can be solved remotely. Our engineers connect securely, diagnose, and repair live while you watch.',
    features: ['System crashes & slow performance', 'Malware and viruses', 'Driver & update failures'],
    buttonText: 'Start Remote Fix',
    icon: Desktop,
    image: customerSupportImg
  },
  {
    id: 'lab',
    path: '/service/hardware-lab',
    title: 'Hardware Repair Workshop',
    subtitle: 'Professional hardware repair.',
    description: 'When hardware fails, proper diagnostics matter. Our workshop handles complex repairs and upgrades in controlled environments.',
    features: ['Motherboard repair', 'SSD & data recovery', 'Component replacement & upgrades'],
    buttonText: 'Book a Repair',
    icon: Wrench,
    image: hardwareRepairImg
  },
  {
    id: 'consult',
    path: '/service/consult',
    title: 'Technical Consultation',
    subtitle: 'Technical planning for businesses.',
    description: 'Technology decisions affect productivity. We help businesses choose hardware, build networks, and deploy systems.',
    features: ['Workstation planning', 'Office network setup', 'Hardware procurement & rollout'],
    buttonText: 'Speak with a Consultant',
    icon: HardDrives,
    image: consultationImg
  },
  {
    id: 'install',
    path: '/service/install',
    title: 'Software Deployments',
    subtitle: 'OS & Software Installation.',
    description: 'Certified operating system and software deployments configured for optimal performance and security, tailored for both individual and enterprise use.',
    features: ['Windows, macOS & Linux deployments', 'Enterprise software configuration', 'License management & compliance'],
    buttonText: 'Request an Install',
    icon: TerminalWindow,
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800'
  }
];

export const hardwareLogos = [
  { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg', className: 'h-6 md:h-7 w-auto' },
  { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg', className: 'h-8 md:h-9 w-auto' },
  { name: 'Lenovo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg', className: 'h-4 md:h-5 w-auto' },
  { name: 'Apple', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', className: 'h-7 md:h-8 w-auto mb-1' },
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', className: 'h-6 md:h-7 w-auto' },
  { name: 'Asus', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg', className: 'h-4 md:h-5 w-auto' },
  { name: 'MSI', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/msi.svg', className: 'h-4 md:h-5 w-auto opacity-70' },
  { name: 'ROG', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/republicofgamers.svg', className: 'h-6 md:h-7 w-auto opacity-70' },
  { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', className: 'h-6 md:h-7 w-auto' },
  { name: 'Ubiquiti', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ubiquiti.svg', className: 'h-6 md:h-7 w-auto opacity-70' },
  { name: 'Hewlett Packard Enterprise', url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg', className: 'h-5 md:h-6 w-auto' },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const [typedWelcomeText, setTypedWelcomeText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullWelcomeText = "Welcome to Fixline";
  const navigate = useNavigate();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Reset and start typing
        setTypedWelcomeText('');
        setIsTypingComplete(false);
        let currentIndex = 0;

        const typeNextChar = () => {
          if (currentIndex < fullWelcomeText.length) {
            setTypedWelcomeText(fullWelcomeText.slice(0, currentIndex + 1));
            currentIndex++;
            
            // Fast, consistent typing speed
            const delay = 40; 
            
            timeout = setTimeout(typeNextChar, delay);
          } else {
            setIsTypingComplete(true);
          }
        };

        clearTimeout(timeout);
        // Start typing after a short initial delay to sync with fade-in
        timeout = setTimeout(typeNextChar, 600);
      } else {
        clearTimeout(timeout);
      }
    }, { threshold: 0.2 }); // Trigger when 20% of hero is visible (better for mobile)

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearTimeout(timeout);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-50">
        {/* Bright, inviting background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-300/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <SectionLabel className="min-w-[150px] sm:min-w-[160px] text-center whitespace-nowrap shadow-none border-none">
                  {typedWelcomeText}
                  {!isTypingComplete && <span className="animate-pulse ml-0.5">|</span>}
                </SectionLabel>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-brand-navy"
              >
                The operational backbone for <span className="text-brand-blue">modern technology.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg"
              >
                We provide dependable computer repair, system diagnostics, IT support, and infrastructure services that keep technology running reliably for individuals and businesses.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-row gap-3 sm:gap-4"
              >
                <button 
                  onClick={() => navigate('/contact')}
                  className="flex-1 sm:flex-none bg-brand-blue hover:bg-brand-blue-hover text-white px-4 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all shadow-[0_8px_20px_rgba(0,82,255,0.25)] hover:shadow-[0_12px_25px_rgba(0,82,255,0.35)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <span className="sm:hidden">Get Support</span>
                  <span className="hidden sm:inline">Get Support Now</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 sm:flex-none bg-white hover:bg-slate-50 border border-slate-200 text-brand-navy px-4 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all shadow-sm hover:shadow flex items-center justify-center whitespace-nowrap"
                >
                  Services
                </button>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" 
                  alt="Inviting tech workspace" 
                  className="w-full h-[550px] object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={28} className="text-brand-blue" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Available Now</p>
                  <p className="text-xs text-slate-500">Average response: 5 mins</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bridge (Logos) */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-brand-blue/60 font-medium text-sm md:text-base tracking-wide mb-10">
            The support standard for world-class hardware.
          </p>
          
          <div 
            className="relative w-full overflow-hidden"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <div className="flex w-max animate-marquee gap-16 md:gap-24 items-center">
              {/* First set of logos */}
              {hardwareLogos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center shrink-0">
                  <img 
                    src={logo.url} 
                    alt={`${logo.name} logo`} 
                    className={`${logo.className} grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              {/* Second set of logos for seamless loop */}
              {hardwareLogos.map((logo, i) => (
                <div key={`dup-${i}`} className="flex items-center justify-center shrink-0">
                  <img 
                    src={logo.url} 
                    alt={`${logo.name} logo`} 
                    className={`${logo.className} grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <motion.section 
        id="services" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-10 lg:py-12 bg-white relative overflow-hidden m-4 lg:m-6 rounded-xl border border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-blue"></span>
              What we do
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
              The full spectrum of technical support.
            </h3>
            <p className="text-lg text-slate-500 font-light">
             Select a service below to see how we can help you or your business.
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex overflow-x-auto sm:flex-wrap justify-start gap-2 sm:gap-4 mb-8 sm:mb-12 pb-4 sm:pb-0 snap-x hide-scrollbar"
          >
            {servicesData.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`shrink-0 snap-center flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-brand-blue text-white shadow-md' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <service.icon size={20} weight={isActive ? "fill" : "duotone"} />
                  {service.title}
                </button>
              );
            })}
          </motion.div>

          {/* Tab Content */}
          <div className="relative min-h-[400px] lg:min-h-[450px] flex items-center">
            {servicesData.map((service) => {
              if (activeTab !== service.id) return null;
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full"
                >
                  <div className="order-2 lg:order-1">
                    <h4 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy mb-4">{service.title}</h4>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {service.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <CheckCircle size={24} className="text-brand-blue shrink-0" weight="fill" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => navigate(service.path || `/service/${service.id}`)}
                      className="bg-brand-navy hover:bg-slate-800 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group w-fit"
                    >
                      {service.buttonText} <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover rounded-xl border border-slate-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-10 lg:py-12 bg-slate-50 relative overflow-hidden m-4 lg:m-6 rounded-xl border border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Top Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20 max-w-3xl"
          >
            <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-brand-blue"></span>
              How it works
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
              Six steps to total system restoration.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We elevate the standard of technical support by providing enterprise-grade diagnostics, repair, and infrastructure planning with complete transparency.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-[380px] lg:h-[460px]">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000" 
                  alt="Engineer working on hardware" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay"></div>
              </div>
            </div>

            {/* Right Column: Animated Timeline Cards */}
            <div className="lg:col-span-7 relative">
              {/* Gradient Mask for fading edges ONLY on the right (desktop only) */}
              <div 
                className="relative w-full"
                style={isDesktop ? { 
                  WebkitMaskImage: 'linear-gradient(to right, black 0%, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to right, black 0%, black 85%, transparent 100%)'
                } : {}}
              >
                {/* Scroll Container */}
                <div 
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto gap-6 sm:gap-6 lg:gap-8 pb-12 pt-8 px-6 lg:px-8 hide-scrollbar snap-x snap-mandatory -mx-6 lg:mx-0"
                >
                    {[
                      {
                        num: "01",
                        title: "Secure Initiation",
                        desc: "Request support through our encrypted portal. We generate a unique tracking ID and a one-time security key."
                      },
                      {
                        num: "02",
                        title: "Diagnostic Audit",
                        desc: "We perform a comprehensive 15-point system check—either remotely or in our repair workshop. We identify the root cause."
                      },
                      {
                        num: "03",
                        title: "Transparent Intervention",
                        desc: "For remote fixes, you watch the entire process live on your screen. For hardware repairs, you receive real-time updates."
                      },
                      {
                        num: "04",
                        title: "Verified Components",
                        desc: "We only use Fixline Certified parts. Every component is logged and verified for authenticity and performance."
                      },
                      {
                        num: "05",
                        title: "Quality Assurance",
                        desc: "Once the repair is complete, the system undergoes a rigorous stress test to verify stability and security."
                      },
                      {
                        num: "06",
                        title: "Secure Handover",
                        desc: "We terminate all remote access credentials or return your hardware with a final engineering report."
                      }
                    ].map((step, index) => (
                      <motion.div 
                        key={step.num}
                        initial="inactive"
                        whileInView="active"
                        viewport={{ root: scrollContainerRef, amount: 0.5, margin: "0px" }}
                        variants={{
                          inactive: { opacity: 0.5, scale: 0.95, y: 10 },
                          active: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                        className="timeline-card shrink-0 w-[85vw] sm:w-[340px] lg:w-[400px] snap-center flex flex-col relative group"
                      >
                        {/* Connecting Line to next card (visible only on desktop) */}
                        {index < 6 && (
                          <motion.div 
                            variants={{
                              inactive: { scaleX: 0, opacity: 0 },
                              active: { scaleX: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
                            }}
                            className="absolute top-[24px] left-[50%] w-[calc(100%+32px)] h-0.5 border-t-2 border-dashed border-brand-blue/50 z-0 origin-left hidden lg:block"
                          ></motion.div>
                        )}

                        {/* Timeline Node (visible only on desktop) */}
                        <motion.div 
                          variants={{
                            inactive: { backgroundColor: "#ffffff", color: "#0044FF", borderColor: "#e2e8f0", scale: 0.9 },
                            active: { backgroundColor: "#0044FF", color: "#ffffff", borderColor: "#0044FF", scale: 1 }
                          }}
                          transition={{ duration: 0.4 }}
                          className="w-12 h-12 rounded-full border-2 items-center justify-center font-bold mb-6 shadow-sm relative z-10 mx-auto transition-colors duration-300 hidden lg:flex"
                        >
                          {step.num}
                        </motion.div>
                        
                        {/* Card Content */}
                        <motion.div 
                          variants={{
                            inactive: { y: 20, opacity: 0.6, borderColor: "#e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" },
                            active: { y: 0, opacity: 1, borderColor: "rgba(0, 68, 255, 0.4)", boxShadow: "0 20px 40px -10px rgba(0,82,255,0.15)" }
                          }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="bg-white border-2 rounded-3xl p-6 lg:p-8 flex-1 flex flex-col justify-center min-h-[260px] lg:min-h-[320px] relative overflow-hidden group/card"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover/card:scale-110 lg:hidden"></div>
                          <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-bold mb-4 flex-shrink-0 lg:hidden text-lg relative z-10 transition-colors duration-500 group-hover/card:bg-brand-blue group-hover/card:text-white group-hover/card:border-brand-blue">
                            {step.num}
                          </div>
                          
                          <motion.h4 
                            variants={{
                              inactive: { color: "#0f172a" },
                              active: { color: "#0044FF" }
                            }}
                            className="font-heading text-xl lg:text-2xl font-bold mb-3 transition-colors relative z-10"
                          >
                            {step.title}
                          </motion.h4>
                          <p className="text-slate-600 text-sm lg:text-base leading-relaxed relative z-10">
                            {step.desc}
                          </p>
                        </motion.div>
                      </motion.div>
                    ))}

                    {/* 7th CTA Card */}
                    <motion.div 
                      initial="inactive"
                      whileInView="active"
                      viewport={{ root: scrollContainerRef, amount: 0.5, margin: "0px" }}
                      variants={{
                        inactive: { opacity: 0.5, scale: 0.95, y: 10 },
                        active: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      className="timeline-card shrink-0 w-[85vw] sm:w-[340px] lg:w-[480px] snap-center flex flex-col relative"
                    >
                      {/* Timeline Node (visible only desktop) */}
                      <motion.div 
                        variants={{
                          inactive: { scale: 0.8, opacity: 0.5 },
                          active: { scale: 1, opacity: 1 }
                        }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="w-12 h-12 rounded-full bg-brand-blue border-2 border-brand-blue items-center justify-center text-white font-bold mb-6 shadow-md relative z-10 mx-auto hidden lg:flex"
                      >
                        <ArrowRight size={20} weight="bold" />
                      </motion.div>
                      
                      {/* Card Content */}
                      <motion.div 
                        variants={{
                          inactive: { y: 20, opacity: 0.8, boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" },
                          active: { y: 0, opacity: 1, boxShadow: "0 25px 50px -12px rgba(0,82,255,0.3)" }
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-brand-blue border-2 border-brand-blue rounded-3xl p-6 lg:p-10 flex-1 flex flex-col justify-center items-center text-center min-h-[260px] lg:min-h-[320px] relative overflow-hidden group/card"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover/card:scale-110 lg:hidden"></div>
                        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold mb-4 flex-shrink-0 lg:hidden text-lg relative z-10 transition-colors duration-500 group-hover/card:bg-white group-hover/card:text-brand-blue group-hover/card:border-white">
                          <ArrowRight size={20} weight="bold" />
                        </div>
                        
                        <h4 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3 relative z-10">Ready to fix it?</h4>
                        <p className="text-blue-100 text-sm lg:text-base leading-relaxed mb-8 relative z-10">
                          Get your system back online with our enterprise-grade support.
                        </p>
                        <button 
                          onClick={() => navigate('/contact')}
                          className="group relative z-10 bg-white text-brand-blue hover:bg-slate-50 px-8 py-4 rounded-full text-sm lg:text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full flex items-center justify-center gap-2"
                        >
                          Get Diagnosis <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    </motion.div>

                    {/* Spacer for the end */}
                    <div className="shrink-0 w-[4vw]"></div>
                </div>
              </div>
              
              {/* Swipe Hint (Mobile) */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center sm:hidden pointer-events-none">
                <span className="text-xs font-semibold text-slate-400 tracking-widest uppercase bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                  Swipe to explore &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Fixline */}
      <motion.section 
        id="why-us" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-12 lg:py-16 bg-brand-blue text-white relative overflow-hidden m-4 lg:m-6 rounded-xl"
      >
        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Abstract tech background" 
            className="w-full h-full object-cover opacity-[0.08] mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Left Column: Text & CTA */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 max-w-xl"
            >
              <h2 className="text-blue-200 font-bold tracking-widest uppercase text-xs mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-blue-200"></span>
                Why Fixline
              </h2>
              <h3 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                A different standard.
              </h3>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Your business deserves more than a temporary patch. We deliver technical stability and honest insights, ensuring your systems are resilient enough to support your growth without the usual shortcuts.
              </p>
              <button 
                onClick={() => navigate('/about')}
                className="bg-white text-brand-blue hover:bg-slate-50 px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm"
              >
                Learn More About Us
              </button>
            </motion.div>

            {/* Right Column: 2x2 Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-6">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 lg:p-8 hover:bg-white/15 transition-all"
              >
                <Desktop size={28} className="text-white mb-4" weight="duotone" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Real-time transparency</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Every job is tracked. You receive updates and progress reports throughout the repair process.
                </p>
              </motion.div>
              
              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 lg:p-8 hover:bg-white/15 transition-all"
              >
                <ShieldCheck size={28} className="text-white mb-4" weight="duotone" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Verified components</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We use genuine, high-quality hardware sourced from trusted suppliers. No shortcuts.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 lg:p-8 hover:bg-white/15 transition-all"
              >
                <FileText size={28} className="text-white mb-4" weight="duotone" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Professional reporting</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Receive clear diagnostic reports and proper invoices for every service performed.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 border border-white/20 rounded-xl p-6 lg:p-8 hover:bg-white/15 transition-all"
              >
                <ShieldCheck size={28} className="text-white mb-4" weight="duotone" />
                <h4 className="font-heading text-lg font-bold text-white mb-2">Strict Data Security</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Your data remains private. We follow strict protocols to ensure your information is never compromised.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Beyond Repair (Products) */}
      <motion.section 
        id="products" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-10 lg:py-12 bg-white relative overflow-hidden m-4 lg:m-6 rounded-xl border border-slate-200"
      >
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:flex md:justify-between md:items-end"
          >
            <div className="max-w-2xl">
              <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-blue"></span>
                Beyond Repair
              </h2>
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
                We build the systems behind your work.
              </h3>
              <p className="text-lg text-slate-500 font-light">
                Fixline provides the infrastructure that keeps teams productive.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="text-brand-blue font-semibold hover:text-brand-navy transition-colors flex items-center gap-2 group">
                View All Products <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <div className="flex overflow-x-auto gap-6 pb-12 pt-4 px-6 lg:px-12 hide-scrollbar snap-x snap-mandatory -mx-6 lg:-mx-12">
            <motion.div 
              onClick={() => navigate('/products/networks')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="cursor-pointer group shrink-0 w-[85vw] sm:w-[340px] lg:w-[400px] snap-center bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:bg-white hover:border-brand-blue/30 hover:shadow-[0_20px_40px_-15px_rgba(0,82,255,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors duration-500 relative z-10">
                <Network size={28} weight="duotone" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-3 relative z-10">Fixline Networks</h4>
              <p className="text-slate-500 relative z-10 leading-relaxed font-light">Office Wi-Fi, secure routing, and reliable connectivity engineered for modern workspaces.</p>
            </motion.div>

            <motion.div 
              onClick={() => navigate('/products/builds')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cursor-pointer group shrink-0 w-[85vw] sm:w-[340px] lg:w-[400px] snap-center bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:bg-white hover:border-brand-blue/30 hover:shadow-[0_20px_40px_-15px_rgba(0,82,255,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors duration-500 relative z-10">
                <DesktopTower size={28} weight="duotone" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-3 relative z-10">Fixline Builds</h4>
              <p className="text-slate-500 relative z-10 leading-relaxed font-light">Custom computers designed specifically for performance, stability, and long-term reliability.</p>
            </motion.div>

            <motion.div 
              onClick={() => navigate('/products/os')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="cursor-pointer group shrink-0 w-[85vw] sm:w-[340px] lg:w-[400px] snap-center bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:bg-white hover:border-brand-blue/30 hover:shadow-[0_20px_40px_-15px_rgba(0,82,255,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors duration-500 relative z-10">
                <TerminalWindow size={28} weight="duotone" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-3 relative z-10">Fixline OS</h4>
              <p className="text-slate-500 relative z-10 leading-relaxed font-light">It's basically an AI mechanic for your PC. It quietly watches everything in the background—new downloads, weird processes, temp files, and network activity.</p>
            </motion.div>

            <motion.div 
              onClick={() => navigate('/products/tools')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="cursor-pointer group shrink-0 w-[85vw] sm:w-[340px] lg:w-[400px] snap-center bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:bg-white hover:border-brand-blue/30 hover:shadow-[0_20px_40px_-15px_rgba(0,82,255,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors duration-500 relative z-10">
                <Wrench size={28} weight="duotone" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-brand-navy mb-3 relative z-10">Fixline Tools</h4>
              <p className="text-slate-500 relative z-10 leading-relaxed font-light">A catalog of verified, high-grade hardware components and tools used in our repairs and custom builds.</p>
            </motion.div>
            
            {/* Spacer for the end */}
            <div className="shrink-0 w-[4vw]"></div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
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
                <span className="text-blue-100 font-medium block sm:inline mb-1 sm:mb-0 sm:mr-2">Ready to work with a team</span>
                <span className="font-bold">that takes your device performance seriously?</span>
              </h3>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white hover:bg-slate-50 text-brand-blue px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <span className="text-base tracking-wide whitespace-nowrap">Start Free Diagnostics</span>
                <ArrowRight size={20} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
