import React from 'react';

interface StitchDividerProps {
  className?: string;
  variant?: 'dots' | 'cross' | 'thread' | 'floral';
  color?: string;
}

export const StitchDivider: React.FC<StitchDividerProps> = ({ 
  className = '', 
  variant = 'dots',
  color = '#C9A45C' 
}) => {
  if (variant === 'thread') {
    return (
      <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
        <div className="h-[1px] w-16 md:w-28 border-b-2 border-dashed border-[#C9A45C]/60" />
        <svg className="w-5 h-5 text-[#B85C38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" fill="#C9A45C" fillOpacity="0.2" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
        </svg>
        <div className="h-[1px] w-16 md:w-28 border-b-2 border-dashed border-[#C9A45C]/60" />
      </div>
    );
  }

  if (variant === 'floral') {
    return (
      <div className={`flex items-center justify-center gap-2 my-5 text-[#B85C38] ${className}`}>
        <span className="text-[#C9A45C] text-xs">𐄙</span>
        <span className="text-[#174D38] text-sm">✦</span>
        <span className="font-serif italic text-xs tracking-widest text-[#B85C38] uppercase">
          • • • • • • • • • • • • •
        </span>
        <span className="text-[#174D38] text-sm">✦</span>
        <span className="text-[#C9A45C] text-xs">𐄙</span>
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center justify-center select-none my-6 text-xs tracking-[0.4em] font-mono text-[#C9A45C] opacity-80 ${className}`}
      style={{ color }}
      aria-hidden="true"
    >
      • • • • • • • • • • • • • • •
    </div>
  );
};
