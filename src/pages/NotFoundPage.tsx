import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

export default function NotFoundPage() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-black text-brand-navy mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">Page not found</p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-navy transition-colors"
        >
          Go Back Home
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
