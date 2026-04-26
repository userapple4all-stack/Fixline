import React from 'react';

interface StatCardProps {
  number: string;
  label: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="border-l-2 border-brand-blue pl-4">
      <div className="text-3xl lg:text-4xl font-extrabold mb-1 text-brand-navy tracking-tight">{number}</div>
      <div className="text-xs text-slate-600 font-medium leading-relaxed">{label}</div>
    </div>
  );
};

export default StatCard;
