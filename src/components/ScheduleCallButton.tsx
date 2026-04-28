import React from 'react';

interface Props {
  className?: string;
  calLink?: string;
  calNamespace?: string;
  calConfig?: string;
  children: React.ReactNode;
}

export default function ScheduleCallButton({ 
  className = "", 
  calLink = "fixline-systems-mgiaor/support",
  calNamespace = "support",
  calConfig = '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
  children 
}: Props) {
  return (
    <button
      data-cal-link={calLink}
      data-cal-namespace={calNamespace}
      data-cal-config={calConfig}
      className={`${className}`}
    >
      {children}
    </button>
  );
}
