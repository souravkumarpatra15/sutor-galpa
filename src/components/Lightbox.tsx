import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { Artwork } from '../types';

interface LightboxProps {
  artworks: Artwork[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  artworks,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < artworks.length;
  const currentArtwork = isOpen ? artworks[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
      onNavigate(prevIndex);
    }
  }, [currentIndex, artworks.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % artworks.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, artworks.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentArtwork) return null;

  const currentCount = (currentIndex + 1).toString().padStart(2, '0');
  const totalCount = artworks.length.toString().padStart(2, '0');

  return (
    <div 
      id="artwork-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={currentArtwork.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F3829]/95 backdrop-blur-md p-3 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Container - Stop propagation so clicking inside doesn't close */}
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-[#FFFDF7] rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border-2 border-dashed border-[#C9A45C]/60"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button Top Right */}
        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0F3829]/80 text-[#FFFDF7] hover:bg-[#B85C38] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
          aria-label="Close artwork details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#0F3829]/80 text-[#C9A45C] text-xs font-mono tracking-widest backdrop-blur-xs border border-[#C9A45C]/40">
          {currentCount} / {totalCount}
        </div>

        {/* Artwork Image Viewport */}
        <div className="relative flex-1 bg-[#F8F3E8] flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden group">
          <img
            src={currentArtwork.image}
            alt={currentArtwork.title}
            className="max-h-[65vh] lg:max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-md transition-transform duration-300 group-hover:scale-102"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            id="lightbox-prev-btn"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0F3829]/70 text-[#FFFDF7] hover:bg-[#174D38] hover:text-[#C9A45C] transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="lightbox-next-btn"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0F3829]/70 text-[#FFFDF7] hover:bg-[#174D38] hover:text-[#C9A45C] transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Artwork Details Sidebar */}
        <div className="w-full lg:w-96 bg-[#FFFDF7] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-[#E6DCC9]">
          <div className="space-y-4">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F3E8] border border-dashed border-[#C9A45C] text-[#B85C38] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#C9A45C]" />
              <span>{currentArtwork.category}</span>
            </div>

            {/* Titles */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#0F3829] leading-tight">
                {currentArtwork.title}
              </h3>
              {currentArtwork.titleBengali && (
                <p className="text-lg font-medium text-[#174D38] mt-1 font-serif">
                  {currentArtwork.titleBengali}
                </p>
              )}
            </div>

            {/* Stitched line separator */}
            <div className="h-[1px] w-full border-b border-dashed border-[#C9A45C]/60 my-2" />

            {/* Description */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#8A7D6B] font-semibold mb-1">
                About the Piece
              </h4>
              <p className="text-sm text-[#292621]/90 leading-relaxed font-sans">
                {currentArtwork.description}
              </p>
              {currentArtwork.descriptionBengali && (
                <p className="text-sm text-[#5C5449] mt-2 italic font-serif leading-relaxed">
                  "{currentArtwork.descriptionBengali}"
                </p>
              )}
            </div>

            {/* Technique & Craft Details */}
            {currentArtwork.technique && (
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-widest text-[#8A7D6B] font-semibold mb-1">
                  Stitch Technique
                </h4>
                <p className="text-xs font-medium text-[#0F3829] bg-[#F8F3E8] p-2.5 rounded-lg border border-[#E6DCC9]">
                  🧵 {currentArtwork.technique}
                </p>
              </div>
            )}

            {currentArtwork.details && currentArtwork.details.length > 0 && (
              <div className="pt-1">
                <h4 className="text-xs uppercase tracking-widest text-[#8A7D6B] font-semibold mb-2">
                  Materials & Composition
                </h4>
                <ul className="text-xs space-y-1 text-[#5C5449]">
                  {currentArtwork.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#B85C38]">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Bottom navigation helper */}
          <div className="mt-6 pt-4 border-t border-[#E6DCC9] flex items-center justify-between text-xs text-[#8A7D6B]">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>Full handmade detail</span>
            </span>
            <span className="font-mono text-[11px] text-[#5C5449]">
              Use keyboard ← → to navigate
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
