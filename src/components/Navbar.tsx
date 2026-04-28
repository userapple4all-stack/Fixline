import React, { useState, useEffect } from 'react';
import fixlineLogo from '/assets/fixline-logo.svg';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { CaretDown, Desktop, Wrench, HardDrives, TerminalWindow, ArrowRight, DesktopTower, Network, Lifebuoy, FileText, GraduationCap, Certificate, List, X, Phone, Newspaper } from '@phosphor-icons/react';

const navServicesData = {
  'remote': {
    title: 'Remote Support',
    description: 'Fast software repair without leaving your desk.',
    image: '/assets/images/support-image.svg',
    cta: 'Start Remote Fix',
    path: '/service/remote'
  },
  'hardware-lab': {
    title: 'Hardware Repair Workshop',
    description: 'Physical repairs, upgrades, and maintenance.',
    image: '/assets/images/fixline-hardware-repair.svg',
    cta: 'Book a Repair',
    path: '/service/hardware-lab'
  },
  'consult': {
    title: 'Technical Consultation',
    description: 'Expert advice for your IT infrastructure.',
    image: '/assets/images/fixline-consultation.svg',
    cta: 'Speak with a Consultant',
    path: '/service/consult'
  },
  'install': {
    title: 'Software Deployments',
    description: 'Roll out updates and new systems securely.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=60&w=800',
    cta: 'Request an Install',
    path: '/service/install'
  }
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<keyof typeof navServicesData>('remote');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <motion.nav
      className={`relative z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img src={fixlineLogo} alt="Fixline" className="h-6 md:h-8 w-auto" />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-brand-blue group-hover:text-brand-blue transition-colors flex items-center gap-1 py-2">
                Services
                <CaretDown size={12} weight="bold" className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out z-50">
                <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 flex gap-8 w-[650px]">
                  {/* Left Column */}
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">What we do</p>
                    <div className="flex flex-col gap-5">
                      <Link to="/service/remote" onMouseEnter={() => setHoveredService('remote')} className="flex gap-4 group/item">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                          <Desktop size={20} weight="regular" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Remote Support</p>
                          <p className="text-xs text-slate-500 leading-snug">Fast software repair without leaving your desk.</p>
                        </div>
                      </Link>
                      <Link to="/service/hardware-lab" onMouseEnter={() => setHoveredService('hardware-lab')} className="flex gap-4 group/item">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                          <Wrench size={20} weight="regular" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Hardware Repair Workshop</p>
                          <p className="text-xs text-slate-500 leading-snug">Physical repairs, upgrades, and maintenance.</p>
                        </div>
                      </Link>
                      <Link to="/service/consult" onMouseEnter={() => setHoveredService('consult')} className="flex gap-4 group/item">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                          <HardDrives size={20} weight="regular" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Technical Consultation</p>
                          <p className="text-xs text-slate-500 leading-snug">Expert advice for your IT infrastructure.</p>
                        </div>
                      </Link>
                      <Link to="/service/install" onMouseEnter={() => setHoveredService('install')} className="flex gap-4 group/item">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                          <TerminalWindow size={20} weight="regular" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Software Deployments</p>
                          <p className="text-xs text-slate-500 leading-snug">Roll out updates and new systems securely.</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - Featured Card */}
                  <div className="w-[260px] bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col shrink-0 relative overflow-hidden transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent mix-blend-overlay z-0 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-full h-32 rounded-lg overflow-hidden mb-4 border border-slate-200/60 shadow-sm relative shrink-0">
                        <img 
                          src={navServicesData[hoveredService].image} 
                          alt={navServicesData[hoveredService].title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        />
                      </div>
                      <p className="text-sm font-bold text-brand-navy mb-1">{navServicesData[hoveredService].title}</p>
                      <p className="text-xs text-slate-500 leading-snug mb-3">{navServicesData[hoveredService].description}</p>
                      <Link to={navServicesData[hoveredService].path} className="text-xs font-medium text-brand-blue hover:text-brand-blue-hover flex items-center gap-1 mt-auto group/cta">
                        {navServicesData[hoveredService].cta} <ArrowRight size={12} weight="bold" className="group-hover/cta:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-brand-blue group-hover:text-brand-blue transition-colors flex items-center gap-1 py-2">
                Products
                <CaretDown size={12} weight="bold" className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out z-50">
                <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 w-[350px]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">Our Products</p>
                  <div className="flex flex-col gap-5">
                    <Link to="/products/os" className="flex gap-4 group/item cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <TerminalWindow size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Fixline OS</p>
                        <p className="text-xs text-slate-500 leading-snug">The ultimate diagnostic operating system.</p>
                      </div>
                    </Link>
                    <Link to="/products/tools" className="flex gap-4 group/item cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <Wrench size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Fixline Tools</p>
                        <p className="text-xs text-slate-500 leading-snug">Professional utilities for technicians.</p>
                      </div>
                    </Link>
                    <Link to="/products/builds" className="flex gap-4 group/item cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <DesktopTower size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Fixline Builds</p>
                        <p className="text-xs text-slate-500 leading-snug">Custom hardware configurations.</p>
                      </div>
                    </Link>
                    <Link to="/products/networks" className="flex gap-4 group/item cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <Network size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Fixline Networks</p>
                        <p className="text-xs text-slate-500 leading-snug">Enterprise networking solutions.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-brand-blue group-hover:text-brand-blue transition-colors flex items-center gap-1 py-2">
                Resources
                <CaretDown size={12} weight="bold" className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out z-50">
                <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 w-[300px]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">Learn & Grow</p>
                  <div className="flex flex-col gap-5">
                    <Link to="/support" className="flex gap-4 group/item">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <Lifebuoy size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Support Centre</p>
                        <p className="text-xs text-slate-500 leading-snug">Track your service, book a repair or consultation.</p>
                      </div>
                    </Link>
                    <Link to="/blog" className="flex gap-4 group/item">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <Newspaper size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Blog</p>
                        <p className="text-xs text-slate-500 leading-snug">Tips, news, and insights.</p>
                      </div>
                    </Link>
                    <Link to="/training" className="flex gap-4 group/item">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <GraduationCap size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Training</p>
                        <p className="text-xs text-slate-500 leading-snug">Building talent in repair & networks.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Link */}
            <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors py-2">
              Pricing
            </Link>

            {/* Company Dropdown */}
            <div className="relative group">
              <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-brand-blue group-hover:text-brand-blue transition-colors flex items-center gap-1 py-2">
                Company
                <CaretDown size={12} weight="bold" className="group-hover:rotate-180 transition-transform" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-out z-50">
                <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 w-[300px]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">About Fixline</p>
                  <div className="flex flex-col gap-5">
                    <Link to="/about" className="flex gap-4 group/item">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <Desktop size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">About Us</p>
                        <p className="text-xs text-slate-500 leading-snug">Mission, vision, and team.</p>
                      </div>
                    </Link>
                    <Link to="/contact" className="flex gap-4 group/item">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <Phone size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Contact Us</p>
                        <p className="text-xs text-slate-500 leading-snug">Get in touch with support.</p>
                      </div>
                    </Link>
                    <Link to="/partners" className="flex gap-4 group/item">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:bg-brand-blue group-hover/item:text-white transition-colors">
                        <Certificate size={20} weight="regular" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-navy mb-0.5 group-hover/item:text-brand-blue transition-colors">Partners</p>
                        <p className="text-xs text-slate-500 leading-snug">Vendors and enterprise clients.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            
            <Link to="/support" className="group flex items-center bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm shadow-brand-blue/20">
              Start Repair
              <span className="max-w-0 opacity-0 group-hover:max-w-[20px] group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300 ease-out flex items-center overflow-hidden">
                <ArrowRight size={16} weight="bold" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-b border-slate-100 px-6 pt-4 pb-8 absolute w-full max-h-[85vh] overflow-y-auto shadow-2xl shadow-brand-navy/5"
        >
          <div className="flex flex-col space-y-1">
            
            {/* Mobile Services Wrap */}
            <div className="border-b border-slate-100 pb-2 mb-2">
              <button 
                onClick={() => setOpenMobileDropdown(openMobileDropdown === 'services' ? null : 'services')}
                className="flex items-center justify-between w-full py-3 text-slate-600 font-medium text-base hover:text-brand-blue transition-colors"
              >
                Services
                <CaretDown size={14} className={`transition-transform ${openMobileDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'services' && (
                <div className="pl-4 pb-2 space-y-3 mt-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">What we do</p>
                  <button onClick={() => handleMobileMenuClick('/service/remote')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Remote Support</button>
                  <button onClick={() => handleMobileMenuClick('/service/hardware-lab')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Hardware Repair Workshop</button>
                  <button onClick={() => handleMobileMenuClick('/service/consult')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Technical Consultation</button>
                  <button onClick={() => handleMobileMenuClick('/service/install')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Software Deployments</button>
                </div>
              )}
            </div>

            {/* Mobile Products Wrap */}
            <div className="border-b border-slate-100 pb-2 mb-2">
              <button 
                onClick={() => setOpenMobileDropdown(openMobileDropdown === 'products' ? null : 'products')}
                className="flex items-center justify-between w-full py-3 text-slate-600 font-medium text-base hover:text-brand-blue transition-colors"
              >
                Products
                <CaretDown size={14} className={`transition-transform ${openMobileDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'products' && (
                <div className="pl-4 pb-2 space-y-3 mt-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Our Products</p>
                  <button onClick={() => handleMobileMenuClick('/products/os')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Fixline OS</button>
                  <button onClick={() => handleMobileMenuClick('/products/tools')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Fixline Tools</button>
                  <button onClick={() => handleMobileMenuClick('/products/builds')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Fixline Builds</button>
                  <button onClick={() => handleMobileMenuClick('/products/networks')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Fixline Networks</button>
                </div>
              )}
            </div>

            {/* Mobile Resources Wrap */}
            <div className="border-b border-slate-100 pb-2 mb-2">
              <button 
                onClick={() => setOpenMobileDropdown(openMobileDropdown === 'resources' ? null : 'resources')}
                className="flex items-center justify-between w-full py-3 text-slate-600 font-medium text-base hover:text-brand-blue transition-colors"
              >
                Resources
                <CaretDown size={14} className={`transition-transform ${openMobileDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'resources' && (
                <div className="pl-4 pb-2 space-y-3 mt-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Learn & Grow</p>
                  <button onClick={() => handleMobileMenuClick('/support')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Support Centre</button>
                  <button onClick={() => handleMobileMenuClick('/blog')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Blog</button>
                  <button onClick={() => handleMobileMenuClick('/training')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Training</button>
                </div>
              )}
            </div>
            
            {/* Mobile Pricing Wrap */}
            <div className="border-b border-slate-100 pb-2 mb-2">
              <button 
                onClick={() => handleMobileMenuClick('/pricing')}
                className="flex items-center justify-between w-full py-3 text-slate-600 font-medium text-base hover:text-brand-blue transition-colors"
              >
                Pricing
              </button>
            </div>
            
            {/* Mobile Company Wrap */}
            <div className="border-b border-slate-100 pb-2 mb-2">
              <button 
                onClick={() => setOpenMobileDropdown(openMobileDropdown === 'company' ? null : 'company')}
                className="flex items-center justify-between w-full py-3 text-slate-600 font-medium text-base hover:text-brand-blue transition-colors"
              >
                Company
                <CaretDown size={14} className={`transition-transform ${openMobileDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'company' && (
                <div className="pl-4 pb-2 space-y-3 mt-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">About Fixline</p>
                  <button onClick={() => handleMobileMenuClick('/about')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">About Us</button>
                  <button onClick={() => handleMobileMenuClick('/contact')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Contact Us</button>
                  <button onClick={() => handleMobileMenuClick('/partners')} className="block text-slate-500 hover:text-brand-blue text-sm py-1 text-left w-full transition-colors">Partners</button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleMobileMenuClick('/support')}
              className="group flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3 rounded-full text-sm font-bold w-full mt-6 shadow-sm shadow-brand-blue/20 transition-all"
            >
              Start Repair
              <span className="max-w-0 opacity-0 group-hover:max-w-[20px] group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-300 ease-out flex items-center overflow-hidden">
                <ArrowRight size={16} weight="bold" />
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
