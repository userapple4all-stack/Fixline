import React from 'react';

export default function TermsOfServiceContent() {
  return (
    <div className="text-slate-700 leading-relaxed space-y-4">
      <p>Welcome to Fixline. By accessing our services, you agree to these terms.</p>
      <h3 className="font-bold text-brand-navy">Use of Services</h3>
      <p>Services are provided for the repair, maintenance, and technical consultation of computing equipment. Users must provide accurate diagnostic information.</p>
      <h3 className="font-bold text-brand-navy">Payments</h3>
      <p>Fees are agreed upon before services are rendered. Final charges may vary based on unforeseen hardware failures discovered during repair.</p>
      <h3 className="font-bold text-brand-navy">Liability</h3>
      <p>While we take highest care, Fixline is not liable for data loss during hardware repairs. We recommend backing up critical data beforehand. Our liability is limited to the cost of the repair performed.</p>
      <h3 className="font-bold text-brand-navy">Governing Law</h3>
      <p>These terms are governed by the laws of the Republic of Kenya.</p>
    </div>
  );
}
