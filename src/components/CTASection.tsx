import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';

interface CTASectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  return (
    <section 
      id="custom-artwork-cta" 
      className="relative bg-[#0F3829] text-[#FFFDF7] py-16 sm:py-20 md:py-24 overflow-hidden border-y-2 border-dashed border-[#C9A45C]/50"
    >
      {/* Background subtle fabric grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#C9A45C 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* Decorative floating stitch lines */}
      <div className="absolute top-6 left-10 text-[#C9A45C]/30 text-xs font-mono select-none hidden lg:block">
        • • • • • • • • • • • • • • • • • • • •
      </div>
      <div className="absolute bottom-6 right-10 text-[#C9A45C]/30 text-xs font-mono select-none hidden lg:block">
        • • • • • • • • • • • • • • • • • • • •
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Needle & Thread Graphic */}
        <div className="inline-flex items-center justify-center p-3.5 mb-6 rounded-full bg-[#174D38] border border-dashed border-[#C9A45C]/60 text-[#C9A45C] shadow-lg">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Needle */}
            <path d="M26 6L14 18M26 6L28 4C28.5 3.5 27.5 2.5 27 3L25 5L26 6ZM26 6L25 5" stroke="#C9A45C" strokeLinecap="round" />
            <circle cx="26" cy="6" r="1" fill="#C9A45C" />
            {/* Curving thread into a heart / loop */}
            <path d="M14 18C10 22 6 22 4 20C2 18 2 14 6 12C10 10 16 12 18 16C20 20 18 26 12 28C8 29.5 4 27 3 24" stroke="#B85C38" strokeDasharray="3 3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#FFFDF7] tracking-tight leading-tight mb-4">
          Have a Story You'd Like to See Stitched?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#E6DCC9] max-w-2xl mx-auto leading-relaxed mb-8">
          Turn a memory, idea, name or special moment into something handmade, authentic and deeply personal. Every custom piece is crafted with undivided care.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-start-conversation"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold bg-[#B85C38] text-[#FFFDF7] hover:bg-[#a14c2b] active:scale-98 transition-all duration-200 shadow-lg hover:shadow-xl border border-[#C9A45C]/40 group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            id="cta-explore-gallery"
            onClick={() => onNavigate('handcrafts')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium bg-[#174D38] text-[#E6DCC9] hover:text-[#FFFDF7] hover:bg-[#1a553e] transition-colors border border-[#C9A45C]/30"
          >
            <Sparkles className="w-4 h-4 text-[#C9A45C]" />
            <span>Browse All Creations</span>
          </button>
        </div>

      </div>
    </section>
  );
};
