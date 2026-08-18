import React from 'react';
import { ArrowRight, Sparkles, Heart, Feather, Scissors, Film } from 'lucide-react';
import { PageRoute, Artwork } from '../types';
import { ARTWORKS } from '../data/artworks';
import { SectionHeading } from '../components/SectionHeading';
import { ArtworkCard } from '../components/ArtworkCard';
import { CTASection } from '../components/CTASection';
import { StitchDivider } from '../components/StitchDivider';
import { BrandLogo } from '../components/BrandLogo';
import { VideoReelSection } from '../components/VideoReelSection';
import { HeroSlider } from '../components/HeroSlider';

interface HomeProps {
  onNavigate: (page: PageRoute) => void;
  onSelectArtwork: (artwork: Artwork) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onSelectArtwork }) => {
  const featuredArtworks = ARTWORKS.filter(a => a.featured).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-20 md:space-y-24">
      
      {/* SLIDING HERO BANNER */}
      <section id="hero-slider-section" className="">
        <HeroSlider 
          onNavigate={onNavigate} 
          onSelectArtwork={onSelectArtwork} 
        />
      </section>

      {/* INTRODUCTION SECTION */}
      <section id="home-intro" className="relative py-12 bg-[#F8F3E8]/80 border-y border-[#E6DCC9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#B85C38]">
              <span>✦</span>
              <span>An Artistic Journey</span>
              <span>✦</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#0F3829]">
              A Little About the Artist
            </h2>

            <p className="text-xl sm:text-2xl font-serif text-[#174D38]">
              সুতোয় সৃষ্টির এক ছোট্ট জগৎ
            </p>

            <StitchDivider variant="dots" />

            <blockquote className="text-base sm:text-lg text-[#292621]/90 leading-relaxed font-sans max-w-2xl mx-auto">
              "This is a personal collection of handmade stitching and embroidery created with patience, imagination and love. From Bengali lettering and nursery rhymes to detailed scenes inspired by river life, nature, and classic Bengali cinema, every piece reflects the artist's unique relationship with thread and fabric."
            </blockquote>

            <div className="pt-4">
              <button
                id="intro-discover-story-btn"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#174D38] hover:text-[#B85C38] transition-colors group"
              >
                <span>Discover Her Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURED CREATIONS SECTION */}
      <section id="featured-handcrafts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="Handmade Collection"
          title="Featured Creations"
          bengaliTitle="নির্বাচিত কিছু সৃষ্টি"
          subtitle="A glimpse into a world created stitch by stitch."
        />

        {/* 2x2 Responsive Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featuredArtworks.map((artwork, idx) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              index={idx}
              onSelect={onSelectArtwork}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            id="view-all-handcrafts-btn"
            onClick={() => onNavigate('handcrafts')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFFDF7] text-[#0F3829] hover:text-[#FFFDF7] hover:bg-[#174D38] border-2 border-[#174D38] font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md group"
          >
            <span>View All Handcrafts ({ARTWORKS.length} Artworks)</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 text-[#B85C38] group-hover:text-[#FFFDF7]" />
          </button>
        </div>

      </section>

      {/* STUDIO VIDEO REEL & CRAFTSMANSHIP IN MOTION */}
      <VideoReelSection onOpenCustomModal={() => onNavigate('contact')} />

      {/* WHY HER WORK IS SPECIAL */}
      <section id="why-special-section" className="bg-[#FFFDF7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            label="The Craft"
            title="Why Her Work Is Special"
            bengaliTitle="যে কারণে প্রতিটি কাজ অনন্য"
            subtitle="The quiet artistry and dedication woven into every creation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 01 */}
            <div className="relative bg-[#F8F3E8]/90 rounded-2xl p-8 border border-[#E6DCC9] hover:border-[#C9A45C] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#C9A45C]">01</span>
                  <div className="p-3 rounded-full bg-[#FFFDF7] text-[#174D38] shadow-xs group-hover:bg-[#174D38] group-hover:text-[#FFFDF7] transition-colors">
                    <Scissors className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#0F3829]">
                  Hand Stitched
                </h3>
                <p className="text-sm font-medium text-[#174D38] font-serif">
                  সম্পূর্ণ হাতে সেলাই
                </p>

                <p className="text-sm text-[#5C5449] leading-relaxed font-sans">
                  Every design is carefully created by hand without machine shortcuts, keeping authentic traditional craftsmanship alive.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#C9A45C]/50 text-xs font-mono text-[#C9A45C]">
                • • • • • • • • • •
              </div>
            </div>

            {/* Card 02 */}
            <div className="relative bg-[#F8F3E8]/90 rounded-2xl p-8 border border-[#E6DCC9] hover:border-[#C9A45C] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#C9A45C]">02</span>
                  <div className="p-3 rounded-full bg-[#FFFDF7] text-[#B85C38] shadow-xs group-hover:bg-[#B85C38] group-hover:text-[#FFFDF7] transition-colors">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#0F3829]">
                  Made With Love
                </h3>
                <p className="text-sm font-medium text-[#174D38] font-serif">
                  যত্ন আর অনুরাগে তৈরি
                </p>

                <p className="text-sm text-[#5C5449] leading-relaxed font-sans">
                  Each piece reflects hours of time, genuine patience, and deeply personal creativity invested in every single loop.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#C9A45C]/50 text-xs font-mono text-[#C9A45C]">
                • • • • • • • • • •
              </div>
            </div>

            {/* Card 03 */}
            <div className="relative bg-[#F8F3E8]/90 rounded-2xl p-8 border border-[#E6DCC9] hover:border-[#C9A45C] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#C9A45C]">03</span>
                  <div className="p-3 rounded-full bg-[#FFFDF7] text-[#0F3829] shadow-xs group-hover:bg-[#0F3829] group-hover:text-[#FFFDF7] transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#0F3829]">
                  One of a Kind
                </h3>
                <p className="text-sm font-medium text-[#174D38] font-serif">
                  অনন্য এবং একক
                </p>

                <p className="text-sm text-[#5C5449] leading-relaxed font-sans">
                  Handmade artwork carries the distinct character, human touch, and story of its maker that can never be mass-duplicated.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#C9A45C]/50 text-xs font-mono text-[#C9A45C]">
                • • • • • • • • • •
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FULL-WIDTH CUSTOM ARTWORK CTA BANNER */}
      <CTASection onNavigate={onNavigate} />

    </div>
  );
};

