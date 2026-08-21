import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, Sparkles, Eye, Scissors } from 'lucide-react';
import { PageRoute, Artwork } from '../types';
import { ARTWORKS } from '../data/artworks';
import { BrandLogo } from './BrandLogo';

interface HeroSliderProps {
  onNavigate: (page: PageRoute) => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

interface SlideItem {
  id: number;
  badge: string;
  title: string;
  quote: string;
  artworkId: number;
  highlightColor: string;
  accentGradient: string;
  techniqueTag: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate, onSelectArtwork }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 6000; // 6 seconds per slide

  const slides: SlideItem[] = [
    {
      id: 0,
      badge: 'Folk Art',
      title: 'A Little House Full of Stories',
      quote:
        'A charming hand-stitched artwork where a little house, trees, flowers, and a starry sky come together in a colorful village-inspired story.',
      artworkId: 1,
      highlightColor: '#C9A45C',
      accentGradient:
        'from-[#0F3829] via-[#174D38] to-[#0A261B]',
      techniqueTag:
        'Hand Embroidery • Floral & Nature Threadwork',
    },

    {
      id: 1,
      badge: 'Bengali Village Story',
      title: 'A Village Story in Every Stitch',
      quote:
        'A narrative textile artwork bringing together a Bengali village scene, nature, people, and everyday life through colorful hand embroidery.',
      artworkId: 4,
      highlightColor: '#D97706',
      accentGradient:
        'from-[#2F1E0E] via-[#59391D] to-[#1F140A]',
      techniqueTag:
        'Narrative Embroidery • Landscape Stitchwork',
    },

    {
      id: 2,
      badge: 'Framed Textile Art',
      title: 'A Story Framed in Thread',
      quote:
        'A carefully framed embroidered scene where colorful figures, nature, and surroundings are created entirely through detailed needlework.',
      artworkId: 6,
      highlightColor: '#C9A45C',
      accentGradient:
        'from-[#172B24] via-[#315447] to-[#0D1D17]',
      techniqueTag:
        'Fine Hand Embroidery • Narrative Stitchwork',
    },

    {
      id: 3,
      badge: 'Village Life',
      title: 'Colors of Village Life',
      quote:
        'People, homes, trees, and the surrounding landscape come together in a richly detailed embroidered picture of rural Bengal.',
      artworkId: 9,
      highlightColor: '#B85C38',
      accentGradient:
        'from-[#3A2117] via-[#70422D] to-[#21130E]',
      techniqueTag:
        'Narrative Hand Embroidery • Detailed Figure Stitching',
    },

    {
      id: 4,
      badge: 'Floral & Nature',
      title: 'A Garden Woven with Thread',
      quote:
        'Delicate flowers and leafy stems are carefully stitched across soft fabric, creating a peaceful botanical textile composition.',
      artworkId: 3,
      highlightColor: '#A67C52',
      accentGradient:
        'from-[#3A3830] via-[#6B6657] to-[#292720]',
      techniqueTag:
        'Floral Embroidery • Stem Stitch • Fine Threadwork',
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (stepMs / SLIDE_DURATION) * 100;
      });
    }, stepMs);

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const currentSlideData = slides[currentSlide];
  const matchedArtwork = ARTWORKS.find((a) => a.id === currentSlideData.artworkId) || ARTWORKS[0];

  return (
    <section 
      id="hero-sliding-banner" 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Outer Banner Card Frame with Decorative Gold Stitch Edge */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF7] bg-[#0F3829] text-[#FFFDF7]">
        
        {/* Animated Progress Line at the very top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/40 z-30 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#C9A45C] via-[#F59E0B] to-[#EF4444] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Slide Background with Decorative Kantha Pattern */}
        <div className={`relative min-h-[540px] sm:min-h-[580px] md:min-h-[620px] bg-gradient-to-br ${currentSlideData.accentGradient} transition-colors duration-1000 p-6 sm:p-10 md:p-14 lg:p-16 flex items-center`}>
          
          {/* Subtle Kantha Embroidery Grid Watermark in Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="slide-kantha-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4,4" />
                  <circle cx="40" cy="40" r="4" fill="#C9A45C" />
                  <path d="M20 20 L60 60 M60 20 L20 60" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2,4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#slide-kantha-pattern)" />
            </svg>
          </div>

          {/* Radial Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C9A45C]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#B83227]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Running Stitches on Edge */}
          <div className="absolute top-3 left-6 right-6 h-[2px] bg-[repeating-linear-gradient(90deg,#C9A45C,#C9A45C_6px,transparent_6px,transparent_12px)] opacity-60 pointer-events-none" />
          <div className="absolute bottom-3 left-6 right-6 h-[2px] bg-[repeating-linear-gradient(90deg,#C9A45C,#C9A45C_6px,transparent_6px,transparent_12px)] opacity-60 pointer-events-none" />

          {/* Main Slide Grid Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              
              {/* Badge & Technique Pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#C9A45C]/50 text-[#FCE7B8] text-xs font-semibold uppercase tracking-[0.2em]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>{currentSlideData.badge}</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-mono">
                  <Scissors className="w-3 h-3 text-[#C9A45C]" />
                  <span>{currentSlideData.techniqueTag}</span>
                </div>
              </div>

              {/* Headings */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FFFDF7] tracking-tight leading-[1.15] transition-all duration-300">
                  {currentSlideData.title}
                </h1>
              </div>

              {/* Quote / Description */}
              <div className="space-y-1 max-w-xl mx-auto lg:mx-0">
                <p className="text-base sm:text-lg text-[#F8F3E8]/90 font-sans leading-relaxed">
                  {currentSlideData.quote}
                </p>
              </div>

              {/* Stitched Divider */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C9A45C] font-mono text-xs tracking-widest opacity-80">
                ✦ • • • • • • • • • • • • • • • • ✦
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  id="slide-explore-gallery-btn"
                  onClick={() => onNavigate('handcrafts')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C9A45C] hover:bg-[#D4AF37] text-[#0F3829] font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl group active:scale-98"
                >
                  <span>Explore All Handcrafts</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  id="slide-view-artwork-btn"
                  onClick={() => onSelectArtwork(matchedArtwork)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 hover:border-[#C9A45C] font-medium text-sm sm:text-base transition-all duration-200"
                >
                  <Eye className="w-4 h-4 text-[#C9A45C]" />
                  <span>Inspect This Stitchwork</span>
                </button>
              </div>

            </div>

            {/* Right Artwork Showcase Card (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md group cursor-pointer" onClick={() => onSelectArtwork(matchedArtwork)}>
                
                {/* Decorative Rotating Stitch Aura */}
                <div className="absolute -inset-3 border-2 border-dashed border-[#C9A45C]/70 rounded-3xl rotate-2 pointer-events-none group-hover:rotate-0 transition-transform duration-500" />
                
                {/* Artwork Display Box */}
                <div className="relative rounded-2xl overflow-hidden bg-[#FFFDF7] p-3 sm:p-4 shadow-2xl border-2 border-[#C9A45C]/60 text-[#292621]">
                  
                  {/* Artwork Image Surface */}
                  <div className="relative aspect-4/3 sm:aspect-square w-full rounded-xl overflow-hidden bg-[#292621]">
                    <img
                      src={matchedArtwork.image}
                      alt={matchedArtwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay with title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#B85C38] text-white text-[11px] font-semibold uppercase tracking-wider w-fit mb-1">
                        {matchedArtwork.category}
                      </div>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                        {matchedArtwork.title}
                      </h4>
                    </div>

                    {/* Inspect Badge on top-right */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs flex items-center gap-1 border border-white/20 group-hover:bg-[#174D38] transition-colors">
                      <Eye className="w-3 h-3 text-[#C9A45C]" />
                      <span>Click to Zoom</span>
                    </div>
                  </div>

                  {/* Micro Footer inside card */}
                  <div className="mt-3 flex items-center justify-between text-xs text-[#5A5243] px-1">
                    <span className="font-serif italic font-medium">Rita's Signature Handcraft</span>
                    <span className="text-[#174D38] font-bold flex items-center gap-1 group-hover:text-[#B85C38] transition-colors">
                      View Full Details →
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM CONTROLS BAR */}
        <div className="relative z-20 bg-black/50 backdrop-blur-md px-4 sm:px-8 py-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Slide Navigation Buttons & Play/Pause */}
          <div className="flex items-center gap-3">
            <button
              id="slider-prev-btn"
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              id="slider-play-pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-[#C9A45C]" /> : <Play className="w-4 h-4 fill-current text-[#C9A45C]" />}
            </button>

            <button
              id="slider-next-btn"
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-white/70 ml-2">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

          {/* Interactive Slide Thumbnail / Dot Selectors */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  id={`slide-dot-${idx}`}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setProgress(0);
                  }}
                  className={`group relative py-1 px-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 text-xs ${
                    isActive
                      ? 'bg-[#C9A45C] text-[#0F3829] font-bold shadow-md'
                      : 'bg-white/10 hover:bg-white/20 text-white/70 hover:text-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#0F3829]' : 'bg-white/40'}`} />
                  <span className="hidden md:inline font-serif truncate max-w-[100px]">
                    {slide.title.split(':')[0]}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};
