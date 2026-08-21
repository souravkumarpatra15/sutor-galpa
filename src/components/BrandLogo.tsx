import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'full';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'light',
  showSubtitle = true,
  className = '',
}) => {
  // Dimensions based on size
  const dimensions = {
    sm: { width: 140, height: 48, scale: 0.6 },
    md: { width: 190, height: 64, scale: 0.8 },
    lg: { width: 260, height: 88, scale: 1.0 },
    xl: { width: 340, height: 116, scale: 1.3 },
  }[size];

  const textColorGreen = variant === 'dark' ? '#5EEAD4' : '#174D38';
  const textColorRed = variant === 'dark' ? '#F87171' : '#B83227';
  const hoopColor = variant === 'dark' ? '#D97706' : '#C18845';
  const needleColor = variant === 'dark' ? '#FCD34D' : '#D4AF37';
  const threadColor = variant === 'dark' ? '#EF4444' : '#B83227';
  const subtitleColor = variant === 'dark' ? '#E5E7EB' : '#1F2937';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 360 120"
        width={dimensions.width}
        height={dimensions.height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-label="Sutoy Galpo - Stories in Every Stitch Logo"
      >
        <defs>
          {/* Subtle wood gradient for hoop */}
          <linearGradient id="hoopGradient" x1="20" y1="20" x2="140" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D89D54" />
            <stop offset="50%" stopColor={hoopColor} />
            <stop offset="100%" stopColor="#9C662B" />
          </linearGradient>

          {/* Needle metallic shimmer */}
          <linearGradient id="needleGradient" x1="120" y1="30" x2="145" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFEAA7" />
            <stop offset="50%" stopColor={needleColor} />
            <stop offset="100%" stopColor="#A8811A" />
          </linearGradient>

          {/* Red Flower gradient */}
          <radialGradient id="flowerGrad" cx="35" cy="28" r="14" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="70%" stopColor="#C0392B" />
            <stop offset="100%" stopColor="#962214" />
          </radialGradient>
        </defs>

        {/* 1. EMBROIDERY HOOP (Circular Wooden Frame with clasp on top) */}
        <g id="embroidery-hoop">
          {/* Outer Ring */}
          <circle
            cx="80"
            cy="58"
            r="46"
            stroke="url(#hoopGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="270 20"
            fill="none"
          />
          {/* Inner Groove line */}
          <circle
            cx="80"
            cy="58"
            r="43"
            stroke="#784415"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            fill="none"
          />
          
          {/* Brass Clasp & Screw on Top */}
          <rect x="74" y="8" width="12" height="6" rx="2" fill="url(#needleGradient)" stroke="#8C6615" strokeWidth="0.8" />
          <rect x="77" y="5" width="6" height="4" rx="1" fill="#C18845" />
          <line x1="72" y1="11" x2="88" y2="11" stroke="#8C6615" strokeWidth="1" />
        </g>

        {/* 2. EMBROIDERED FLOWER & LEAVES on Top-Left (10 o'clock) */}
        <g id="hoop-flower">
          {/* Green Leaves */}
          <path
            d="M 28 32 C 22 26, 26 18, 36 22 C 34 28, 30 32, 28 32 Z"
            fill="#1E6B4B"
          />
          <path
            d="M 38 18 C 44 14, 48 18, 44 26 C 40 24, 38 20, 38 18 Z"
            fill="#2D8A62"
          />
          <path
            d="M 20 42 C 16 38, 18 34, 24 36 C 24 40, 22 42, 20 42 Z"
            fill="#174D38"
          />

          {/* 5 Red Petals */}
          <circle cx="36" cy="30" r="6" fill="url(#flowerGrad)" />
          <circle cx="44" cy="30" r="6" fill="url(#flowerGrad)" />
          <circle cx="40" cy="24" r="6" fill="url(#flowerGrad)" />
          <circle cx="37" cy="36" r="6" fill="url(#flowerGrad)" />
          <circle cx="43" cy="36" r="6" fill="url(#flowerGrad)" />

          {/* Golden Center Core */}
          <circle cx="40" cy="31" r="3.5" fill="#F59E0B" stroke="#B45309" strokeWidth="0.8" />
          <circle cx="40" cy="31" r="1.5" fill="#FEF08A" />
        </g>

        {/* 3. BENGALI CALLIGRAPHY INSIDE HOOP */}
        <g id="bengali-typography">
          {/* "Sutoy" in Deep Emerald Green */}
          <text
            x="48"
            y="52"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="32"
            fontWeight="800"
            fill={textColorGreen}
            letterSpacing="-0.5"
            style={{ textShadow: '0 0.5px 1px rgba(0,0,0,0.05)' }}
          >
            Sutoy
          </text>

          {/* "Galpo" in Rich Vermillion Crimson */}
          <text
            x="58"
            y="80"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="34"
            fontWeight="900"
            fill={textColorRed}
            letterSpacing="-0.5"
          >
            Galpo
          </text>
        </g>

        {/* 4. GOLDEN NEEDLE & FLOWING HEART THREAD */}
        <g id="needle-and-thread">
          {/* Thread looping underneath 'Sutoy' & 'Galpo' */}
          <path
            d="M 52 64 C 44 78, 60 92, 85 92 C 108 92, 118 78, 122 66 C 124 58, 134 54, 138 68 C 142 80, 134 94, 144 94 C 148 94, 150 90, 148 84"
            fill="none"
            stroke={threadColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Heart shaped loop on thread */}
          <path
            d="M 136 78 C 136 74, 140 70, 144 73 C 148 70, 152 74, 152 78 C 152 84, 144 88, 144 90 C 144 88, 136 84, 136 78 Z"
            fill="none"
            stroke={threadColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Slanted Golden Sewing Needle */}
          <path
            d="M 132 40 L 148 80"
            stroke="url(#needleGradient)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Needle Eye */}
          <ellipse
            cx="133.5"
            cy="44"
            rx="1.2"
            ry="2.4"
            transform="rotate(22 133.5 44)"
            fill="#FFF"
            stroke="#8C6615"
            strokeWidth="0.6"
          />
          {/* Needle Point */}
          <polygon points="147.5,78.5 149.5,83 146.5,81" fill="#D4AF37" />

          {/* Small leaf on thread tail */}
          <path
            d="M 134 84 C 131 82, 130 86, 133 88 C 135 87, 136 85, 134 84 Z"
            fill="#2D8A62"
          />
        </g>

        {/* 5. ENGLISH BRAND SUBTITLE (STORIES IN EVERY STITCH) */}
        {showSubtitle && (
          <g id="brand-subtitle" transform="translate(165, 0)">
            <text
              x="0"
              y="52"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="24"
              fontWeight="800"
              fill={textColorGreen}
              letterSpacing="0.5"
            >
              Sutoy Galpo
            </text>

            <text
              x="0"
              y="74"
              fontFamily="'Inter', sans-serif"
              fontSize="10.5"
              fontWeight="600"
              fill={subtitleColor}
              letterSpacing="3.5"
              className="uppercase tracking-[0.28em]"
            >
              STORIES IN EVERY STITCH
            </text>

            {/* Decorative Gold & Stitched Underline */}
            <line x1="0" y1="84" x2="180" y2="84" stroke="#C9A45C" strokeWidth="1" strokeOpacity="0.6" />
            <circle cx="90" cy="84" r="2.5" fill="#B83227" />
            <circle cx="82" cy="84" r="1.5" fill="#2D8A62" />
            <circle cx="98" cy="84" r="1.5" fill="#2D8A62" />
          </g>
        )}
      </svg>
    </div>
  );
};
