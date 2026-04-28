import React from "react";
import fixlineLogo2 from '/assets/fixline-logo2.svg';
const fixlineFoot = '/assets/fixline-foot.svg';
import { Link } from "react-router-dom";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  XLogo,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-400 pt-16 pb-8 border-t border-white/10 mt-auto relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-8 md:mb-16 relative z-10">
          {/* Brand & SEO Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={fixlineLogo2}
                alt="Fixline"
                className="h-6 md:h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm sm:max-w-md md:max-w-lg md:pr-8 mb-8">
              Fixline provides enterprise-grade IT diagnostics, hardware repair,
              and technical infrastructure solutions. We deliver transparent,
              secure, and reliable technical support for modern businesses.
            </p>
            
            {/* Social Icons moved here */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue text-slate-400 hover:text-white transition-all"
              >
                <XLogo size={18} weight="fill" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue text-slate-400 hover:text-white transition-all"
              >
                <FacebookLogo size={18} weight="fill" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue text-slate-400 hover:text-white transition-all"
              >
                <LinkedinLogo size={18} weight="fill" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue text-slate-400 hover:text-white transition-all"
              >
                <InstagramLogo size={18} weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links Grouping for side-by-side mobile layout */}
          <div className="lg:col-span-2 col-span-1 md:col-span-1 grid grid-cols-2 gap-8">
            {/* Solutions */}
            <div>
              <h4 className="text-white font-heading font-bold mb-6 text-lg">
                Solutions
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="group flex items-center text-sm hover:text-white transition-colors w-fit"
                  >
                    <span>Services</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out text-brand-blue ml-1"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="group flex items-center text-sm hover:text-white transition-colors w-fit"
                  >
                    <span>Products</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out text-brand-blue ml-1"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="group flex items-center text-sm hover:text-white transition-colors w-fit"
                  >
                    <span>Help Center</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out text-brand-blue ml-1"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-heading font-bold mb-6 text-lg">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="group flex items-center text-sm hover:text-white transition-colors w-fit"
                  >
                    <span>About Us</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out text-brand-blue ml-1"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="group flex items-center text-sm hover:text-white transition-colors w-fit"
                  >
                    <span>Partners</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out text-brand-blue ml-1"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="group flex items-center text-sm hover:text-white transition-colors w-fit"
                  >
                    <span>Resources</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out text-brand-blue ml-1"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 md:col-span-1">
            <h4 className="text-white font-heading font-bold mb-6 text-lg">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <a
                  href="tel:+254740493244"
                  className="hover:text-white transition-colors"
                >
                  +254 740493244
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <EnvelopeSimple
                  size={18}
                  className="text-brand-blue shrink-0 mt-0.5"
                />
                <a
                  href="mailto:support@fixline.co.ke"
                  className="hover:text-white transition-colors"
                >
                  support@fixline.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span className="text-slate-400">Apic Centre, Westlands</span>
              </li>
            </ul>
          </div>
        </div>

            {/* Divider & Large Logo */}
            <div className="relative w-full mb-6 md:mb-8 flex items-center justify-center pointer-events-none">
              <div 
                className="absolute inset-x-0 flex justify-center items-center opacity-[0.06] select-none z-0" 
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 48%, transparent 75%)', 
                  WebkitMaskImage: 'linear-gradient(to bottom, black 48%, transparent 75%)' 
                }}
              >
                <button 
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
                  className="w-full relative z-10 pointer-events-auto"
                >
                  <img src={fixlineFoot} alt="Scroll to bottom" className="w-full h-auto" />
                </button>
              </div>
              <div className="h-px w-full bg-white/10 relative z-10 pointer-events-auto"></div>
            </div>

        {/* Legals */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs relative z-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link to="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Fixline Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
