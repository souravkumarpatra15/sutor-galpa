import React from 'react';
import { Sparkles, Scissors, Heart, Mail, Palette, Feather } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  badgeBengali?: string;
  title: string;
  titleBengali: string;
  description: string;
  icon?: 'palette' | 'feather' | 'heart' | 'mail' | 'scissors';
  patternVariant?: 'emerald' | 'gold' | 'terracotta' | 'heritage';
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeBengali,
  title,
  titleBengali,
  description,
  icon = 'palette',
  patternVariant = 'emerald',
}) => {
  // Select icon component
  const renderIcon = () => {
    switch (icon) {
      case 'feather':
        return <Feather className="w-4 h-4 text-[#C9A45C]" />;
      case 'heart':
        return <Heart className="w-4 h-4 text-[#B83227]" />;
      case 'mail':
        return <Mail className="w-4 h-4 text-[#C9A45C]" />;
      case 'scissors':
        return <Scissors className="w-4 h-4 text-[#C9A45C]" />;
      case 'palette':
      default:
        return <Sparkles className="w-4 h-4 text-[#C9A45C]" />;
    }
  };

  return (
    <div className="relative overflow-hidden mb-12 sm:mb-16">
      
      {/* Outer Styled Card Frame with Double Stitched Border */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0F3829] via-[#174D38] to-[#0A261B] text-[#FFFDF7] p-8 sm:p-12 md:p-16 shadow-2xl border-4 border-[#FFFDF7] ring-1 ring-[#C9A45C]/40">
        
        {/* BACKGROUND TEXTILE ART & ORNAMENTAL PATTERNS */}
        <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
          {/* Traditional Nakshi Kantha Grid Pattern SVG */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="kantha-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                {/* Diamond stitches */}
                <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#C9A45C" strokeWidth="1" strokeDasharray="3,3" />
                <circle cx="30" cy="30" r="3" fill="#C9A45C" />
                <path d="M15 15 L45 45 M45 15 L15 45" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2,3" />
                {/* Corner floral petals */}
                <circle cx="0" cy="0" r="4" fill="#B83227" />
                <circle cx="60" cy="0" r="4" fill="#B83227" />
                <circle cx="0" cy="60" r="4" fill="#B83227" />
                <circle cx="60" cy="60" r="4" fill="#B83227" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kantha-pattern)" />
          </svg>
        </div>

        {/* Ambient Glowing Radial Highlights */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C9A45C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B83227]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Top & Bottom Running Stitch Borders */}
        <div className="absolute top-3 left-6 right-6 h-[2px] bg-[repeating-linear-gradient(90deg,#C9A45C,#C9A45C_6px,transparent_6px,transparent_12px)] opacity-75" />
        <div className="absolute bottom-3 left-6 right-6 h-[2px] bg-[repeating-linear-gradient(90deg,#C9A45C,#C9A45C_6px,transparent_6px,transparent_12px)] opacity-75" />

        {/* Decorative Corner Stitch Accents */}
        <div className="absolute top-4 left-4 text-[#C9A45C] text-xs font-mono select-none opacity-80">╔══✦</div>
        <div className="absolute top-4 right-4 text-[#C9A45C] text-xs font-mono select-none opacity-80">✦══╗</div>
        <div className="absolute bottom-4 left-4 text-[#C9A45C] text-xs font-mono select-none opacity-80">╚══✦</div>
        <div className="absolute bottom-4 right-4 text-[#C9A45C] text-xs font-mono select-none opacity-80">✦══╝</div>

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C9A45C]/50 text-[#F5E6C8] text-xs font-semibold uppercase tracking-[0.25em] shadow-inner">
            {renderIcon()}
            <span>{badge}</span>
            {badgeBengali && (
              <>
                <span className="text-[#C9A45C]">•</span>
                <span className="font-serif tracking-normal text-xs font-medium text-[#FFFDF7]">{badgeBengali}</span>
              </>
            )}
          </div>

          {/* Main Titles */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FFFDF7] tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] leading-relaxed drop-shadow-xs">
              {titleBengali}
            </p>
          </div>

          {/* Golden Stitched Divider with Embroidery Needle */}
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C9A45C]" />
            <div className="flex items-center gap-1 text-[#C9A45C] text-xs">
              <span>✦</span>
              <span className="font-mono text-[10px] tracking-widest text-[#E6DCC9]">• • • • •</span>
              <span>✦</span>
            </div>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C9A45C]" />
          </div>

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#E6DCC9]/90 leading-relaxed font-sans max-w-2xl mx-auto">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
};
