import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: 'h-14',
    md: 'h-25',
    lg: 'h-25',
  };

  return (
    <div className="flex items-center">
      <img
        src="/assets/logo.png"
        alt="সুতোয় গল্প — Stories in Every Stitch"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};