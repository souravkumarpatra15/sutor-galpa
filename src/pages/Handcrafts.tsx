import React, { useState, useMemo } from 'react';
import { Sparkles, SlidersHorizontal, Eye, Grid, Maximize2, ZoomIn } from 'lucide-react';
import { Artwork, Category, PageRoute } from '../types';
import { ARTWORKS } from '../data/artworks';
import { SectionHeading } from '../components/SectionHeading';
import { ArtworkCard } from '../components/ArtworkCard';
import { CTASection } from '../components/CTASection';
import { PageHeader } from '../components/PageHeader';

interface HandcraftsProps {
  onNavigate: (page: PageRoute) => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

const CATEGORIES: Category[] = [
  'All',
  'Bengali Art',
  'Folk Art',
  'Heritage & Cinema',
  'Textile Art',
  'Floral & Nature',
  'Stitch Art'
];

type ViewMode = 'grid' | 'framed' | 'zoom';

export const Handcrafts: React.FC<HandcraftsProps> = ({ onNavigate, onSelectArtwork }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredArtworks = useMemo(() => {
    if (selectedCategory === 'All') return ARTWORKS;
    return ARTWORKS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-12 md:space-y-16 py-4 sm:py-6">
      
      {/* STYLISH HANDCRAFTS PAGE HEADER */}
      <section id="handcrafts-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          badge="Handmade Gallery"
          badgeBengali="হস্তশিল্প সংগ্রহশালা"
          title="Every Stitch Has a Story"
          titleBengali="প্রতিটি সেলাইয়ে লুকিয়ে আছে একটি গল্প"
          description="Explore the complete archive of Rita's original handmade artworks—from folk Baul singers, Pather Panchali cinema homages, and rhyme quilts to riverboat tapestries and vibrant Nakshi Kantha motifs."
          icon="palette"
        />
      </section>

      {/* FILTER TABS & GALLERY SECTION */}
      <section id="handcrafts-gallery-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters Bar & View Mode Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-[#E6DCC9]">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`filter-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#174D38] text-[#FFFDF7] shadow-md border border-[#174D38] scale-102'
                      : 'bg-[#F8F3E8] text-[#292621]/80 hover:bg-[#E6DCC9] hover:text-[#0F3829] border border-[#E6DCC9]'
                  }`}
                >
                  {category}
                  {isSelected && (
                    <span className="ml-1.5 text-[10px] text-[#C9A45C]">✦</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher & Count */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#F8F3E8] p-1 rounded-lg border border-[#E6DCC9] text-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors ${
                  viewMode === 'grid' ? 'bg-[#174D38] text-white font-medium shadow-xs' : 'text-[#5C5449] hover:text-[#174D38]'
                }`}
                title="Standard Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Gallery</span>
              </button>
              <button
                onClick={() => setViewMode('framed')}
                className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors ${
                  viewMode === 'framed' ? 'bg-[#174D38] text-white font-medium shadow-xs' : 'text-[#5C5449] hover:text-[#174D38]'
                }`}
                title="Framed Wall Exhibition View"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Framed</span>
              </button>
            </div>

            {/* Item Count */}
            <div className="text-xs font-mono text-[#8A7D6B] whitespace-nowrap">
              {filteredArtworks.length} pieces
            </div>
          </div>

        </div>

        {/* Gallery Grid */}
        {filteredArtworks.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'framed' 
              ? 'grid-cols-1 sm:grid-cols-2 gap-10' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredArtworks.map((artwork, idx) => (
              <div 
                key={artwork.id} 
                className={viewMode === 'framed' ? 'p-3 bg-[#EFE6D5] rounded-2xl shadow-md border-4 border-[#C18845]' : ''}
              >
                <ArtworkCard
                  artwork={artwork}
                  index={idx}
                  onSelect={onSelectArtwork}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F8F3E8] rounded-2xl border border-dashed border-[#C9A45C]">
            <Sparkles className="w-8 h-8 text-[#C9A45C] mx-auto mb-3" />
            <h3 className="text-xl font-serif text-[#0F3829]">No artworks found in this category</h3>
            <p className="text-sm text-[#5C5449] mt-1">Please select another category above to view more handcrafted pieces.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-4 py-2 rounded-full bg-[#174D38] text-[#FFFDF7] text-xs font-medium"
            >
              Show All Works
            </button>
          </div>
        )}

      </section>

      {/* CALL TO ACTION */}
      <CTASection onNavigate={onNavigate} />

    </div>
  );
};

