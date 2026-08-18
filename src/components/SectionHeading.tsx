import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  bengaliTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  bengaliTitle,
  subtitle,
  align = 'center',
  dark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {label && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-dashed text-xs tracking-[0.2em] uppercase font-medium bg-[#FFFDF7]/60 backdrop-blur-xs"
          style={{
            borderColor: dark ? 'rgba(201, 164, 92, 0.4)' : '#C9A45C',
            color: dark ? '#C9A45C' : '#B85C38'
          }}
        >
          <span>✦</span>
          <span>{label}</span>
          <span>✦</span>
        </div>
      )}

      <h2 
        className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight"
        style={{
          color: dark ? '#FFFDF7' : '#0F3829',
          fontFamily: '"Playfair Display", Georgia, serif'
        }}
      >
        {title}
      </h2>

      {bengaliTitle && (
        <p 
          className="text-lg sm:text-xl md:text-2xl mt-2 font-medium"
          style={{
            color: dark ? '#C9A45C' : '#174D38',
            fontFamily: '"Noto Serif Bengali", serif'
          }}
        >
          {bengaliTitle}
        </p>
      )}

      {subtitle && (
        <p 
          className="mt-4 text-base sm:text-lg leading-relaxed"
          style={{
            color: dark ? '#E6DCC9' : '#5C5449',
            fontFamily: '"Inter", sans-serif'
          }}
        >
          {subtitle}
        </p>
      )}

      <div className={`mt-4 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-[2px] w-8 bg-[#B85C38]/60 rounded-full"></span>
        <span className="text-[#C9A45C] text-xs">𐄙</span>
        <span className="h-[2px] w-12 bg-[#174D38]/60 rounded-full"></span>
      </div>
    </div>
  );
};
