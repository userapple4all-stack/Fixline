import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  // If no specific border/shadow classes are passed, we provide the default ones
  // used across most pages, otherwise we let the caller pass their own exact string.
  const isCustom = className.includes('border') || className.includes('min-w');
  const baseClasses = isCustom 
    ? `inline-block py-1.5 px-4 rounded-full bg-white text-brand-blue font-bold text-xs tracking-widest uppercase mb-6 ${className}`
    : `inline-block py-1.5 px-4 rounded-full bg-white border border-slate-200 text-brand-blue font-bold text-xs tracking-widest uppercase mb-6 shadow-sm ${className}`;

  return (
    <span className={baseClasses.trim()}>
      {children}
    </span>
  );
}
