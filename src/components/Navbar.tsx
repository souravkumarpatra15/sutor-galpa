import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';
import { BrandLogo } from './BrandLogoNew';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageRoute; label: string; labelBengali: string }[] = [
    { id: 'home', label: 'Home', labelBengali: 'নীড়পাতা' },
    { id: 'handcrafts', label: 'Handcrafts', labelBengali: 'হস্তশিল্প' },
    { id: 'about', label: 'About Me', labelBengali: 'আমার কথা' },
    { id: 'contact', label: 'Contact', labelBengali: 'যোগাযোগ' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFFDF7]/95 backdrop-blur-md shadow-xs border-b border-[#E6DCC9]' 
          : 'bg-[#FFFDF7]/85 backdrop-blur-xs border-b border-[#E6DCC9]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Official Logo Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174D38] rounded-lg p-1 transition-transform hover:scale-102"
            aria-label="সুতোয় গল্প Home"
          >
            <BrandLogo size="md" showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md group ${
                    isActive 
                      ? 'text-[#0F3829] font-semibold' 
                      : 'text-[#292621]/80 hover:text-[#174D38] hover:bg-[#F8F3E8]/80'
                  }`}
                >
                  <span className="relative z-10 block font-serif tracking-wide text-base">
                    {item.label}
                  </span>
                  
                  {/* Subtle Bengali Subtitle on hover / active */}
                  <span className={`block text-[10px] transition-opacity duration-200 font-medium ${
                    isActive ? 'text-[#B85C38] opacity-100' : 'text-[#8A7D6B] opacity-0 group-hover:opacity-100'
                  }`}>
                    {item.labelBengali}
                  </span>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#174D38] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-cta-connect"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#174D38] text-[#FFFDF7] hover:bg-[#0F3829] active:scale-98 transition-all duration-200 shadow-xs hover:shadow-md group border border-[#174D38]"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#0F3829] hover:bg-[#F8F3E8] focus:outline-none focus:ring-2 focus:ring-[#174D38]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="md:hidden bg-[#FFFDF7] border-b border-[#E6DCC9] shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1 divide-y divide-[#E6DCC9]/40">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-3.5 text-left rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-[#F8F3E8] text-[#0F3829] font-semibold border-l-4 border-[#174D38]' 
                      : 'text-[#292621] hover:bg-[#F8F3E8]/60'
                  }`}
                >
                  <div>
                    <div className="font-serif text-lg">{item.label}</div>
                    <div className="text-xs text-[#B85C38]">{item.labelBengali}</div>
                  </div>
                  {isActive && <Sparkles className="w-4 h-4 text-[#C9A45C]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-3 border-t border-[#E6DCC9]">
            <button
              id="mobile-nav-cta-connect"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#174D38] text-[#FFFDF7] font-medium text-base hover:bg-[#0F3829] transition-colors"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
