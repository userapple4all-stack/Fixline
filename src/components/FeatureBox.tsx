import React from 'react';
import fixlineMotif from '/assets/fixline-motif.svg';

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export default function FeatureBox({ icon, title, description }: FeatureBoxProps) {
  return (
    <div className="px-8 py-10 lg:p-12 flex flex-col items-center text-center relative overflow-hidden">
      <img src={fixlineMotif} alt="" className="absolute -bottom-8 -left-8 w-24 h-24 opacity-[0.03] pointer-events-none"  loading="lazy" />
      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-5 relative z-10">
        {icon}
      </div>
      <h5 className="font-bold text-lg text-brand-navy mb-3 relative z-10">{title}</h5>
      <p className="text-sm text-slate-600 leading-relaxed font-light relative z-10">
        {description}
      </p>
    </div>
  );
}
