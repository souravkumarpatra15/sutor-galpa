import React from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { Artwork } from '../types';

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
  onSelect: (artwork: Artwork) => void;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onSelect }) => {
  return (
    <div 
      id={`artwork-card-${artwork.id}`}
      onClick={() => onSelect(artwork)}
      className="group relative bg-[#FFFDF7] rounded-xl overflow-hidden border border-[#E6DCC9] hover:border-[#C9A45C] transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col"
    >
      {/* Outer stitched subtle border overlay on hover */}
      <div className="absolute inset-1.5 border border-dashed border-transparent group-hover:border-[#C9A45C]/50 rounded-lg pointer-events-none transition-colors duration-300 z-10" />

      {/* Image container */}
      <div className="relative aspect-4/3 sm:aspect-16/11 bg-[#F8F3E8] overflow-hidden">
        <img
          src={artwork.image}
          alt={artwork.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFFDF7]/90 backdrop-blur-xs text-[#0F3829] text-[11px] font-semibold tracking-wider uppercase border border-[#E6DCC9] shadow-xs">
            <Sparkles className="w-3 h-3 text-[#B85C38]" />
            <span>{artwork.category}</span>
          </span>
        </div>

        {/* Hover View Overlay */}
        <div className="absolute inset-0 bg-[#0F3829]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF7] text-[#0F3829] text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-4 h-4 text-[#B85C38]" />
            <span>View Full Detail</span>
          </span>
        </div>
      </div>

      {/* Content description box */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-[#FFFDF7]">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="font-serif text-lg sm:text-xl font-medium text-[#0F3829] group-hover:text-[#B85C38] transition-colors leading-snug">
              {artwork.title}
            </h3>
          </div>

          {artwork.titleBengali && (
            <p className="text-sm font-medium text-[#174D38] mb-2 font-serif">
              {artwork.titleBengali}
            </p>
          )}

          <p className="text-xs text-[#5C5449] line-clamp-2 leading-relaxed font-sans mb-4">
            {artwork.description}
          </p>
        </div>

        {/* Footer info & CTA */}
        <div className="pt-3 border-t border-dashed border-[#E6DCC9] flex items-center justify-between text-xs">
          <span className="text-[#8A7D6B] font-mono text-[11px] flex items-center gap-1">
            <span>🧵</span>
            <span className="truncate max-w-[150px]">{artwork.technique || 'Hand-stitched'}</span>
          </span>

          <span className="text-[#B85C38] font-semibold group-hover:underline flex items-center gap-1">
            <span>View Artwork</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>

      </div>
    </div>
  );
};
