/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, Artwork } from './types';
import { ARTWORKS } from './data/artworks';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { Home } from './pages/Home';
import { Handcrafts } from './pages/Handcrafts';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState<number | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'handcrafts', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArtwork = (artwork: Artwork) => {
    const idx = ARTWORKS.findIndex(a => a.id === artwork.id);
    if (idx !== -1) {
      setSelectedArtworkIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedArtworkIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#292621] font-sans selection:bg-[#B85C38]/20 selection:text-[#0F3829]">
      
      {/* Top Heritage Micro Banner */}
      <div className="bg-[#0F3829] text-[#FFFDF7] text-[11px] sm:text-xs py-1.5 px-4 text-center border-b border-[#C9A45C]/30 flex items-center justify-center gap-2">
        <span className="text-[#C9A45C]">✦</span>
        <span className="font-serif tracking-wider">সুতোয় গল্প • Stories in Every Stitch</span>
        <span className="hidden sm:inline text-[#E6DCC9]/70">— Authentic Handmade Bengali Embroidery & Textile Art</span>
        <span className="text-[#C9A45C]">✦</span>
      </div>

      {/* Main Sticky Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area with Fade Transition */}
      <main className="flex-1 w-full animate-in fade-in duration-300">
        {currentPage === 'home' && (
          <Home onNavigate={navigateTo} onSelectArtwork={handleSelectArtwork} />
        )}
        {currentPage === 'handcrafts' && (
          <Handcrafts onNavigate={navigateTo} onSelectArtwork={handleSelectArtwork} />
        )}
        {currentPage === 'about' && (
          <About onNavigate={navigateTo} />
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Interactive Artwork Lightbox */}
      <Lightbox
        artworks={ARTWORKS}
        currentIndex={selectedArtworkIndex}
        onClose={handleCloseLightbox}
        onNavigate={(newIndex) => setSelectedArtworkIndex(newIndex)}
      />

    </div>
  );
}
