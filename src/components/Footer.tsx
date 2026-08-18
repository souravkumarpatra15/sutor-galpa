import React from 'react';
import { PageRoute } from '../types';
import { BrandLogo } from './BrandLogo';
import { Heart, Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0F3829] text-[#FFFDF7] relative overflow-hidden border-t-4 border-dashed border-[#C9A45C]/40">
      {/* Decorative top stitch accent */}
      <div className="h-1.5 w-full bg-repeating-linear-gradient" style={{
        backgroundImage: 'repeating-linear-gradient(to right, #B85C38, #B85C38 8px, transparent 8px, transparent 16px)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Brand & Story */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div className="inline-block bg-[#FFFDF7] p-3 rounded-2xl border border-[#C9A45C]/40 shadow-lg">
              <BrandLogo size="md" variant="light" showSubtitle={true} />
            </div>

            <p className="text-sm text-[#E6DCC9]/90 leading-relaxed max-w-md pt-2">
              Traditional Bengali handmade stitching combined with patient craftsmanship. Every thread weaves a memory, a thought, and a celebration of handcraft heritage.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[#C9A45C]">
              <span className="text-xs font-mono tracking-widest">• • • • • • • • • • • • • • •</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A45C] mb-4 pb-2 border-b border-[#174D38]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-[#E6DCC9] hover:text-[#FFFDF7] hover:translate-x-1 transition-all duration-200 text-left flex items-center gap-2 group"
                >
                  <span className="text-[#C9A45C] group-hover:text-[#B85C38]">✦</span>
                  <span>Home</span>
                  <span className="text-xs text-[#C9A45C]/60">(নীড়পাতা)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('handcrafts')}
                  className="text-[#E6DCC9] hover:text-[#FFFDF7] hover:translate-x-1 transition-all duration-200 text-left flex items-center gap-2 group"
                >
                  <span className="text-[#C9A45C] group-hover:text-[#B85C38]">✦</span>
                  <span>Handcrafts</span>
                  <span className="text-xs text-[#C9A45C]/60">(হস্তশিল্প)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-[#E6DCC9] hover:text-[#FFFDF7] hover:translate-x-1 transition-all duration-200 text-left flex items-center gap-2 group"
                >
                  <span className="text-[#C9A45C] group-hover:text-[#B85C38]">✦</span>
                  <span>About the Artist</span>
                  <span className="text-xs text-[#C9A45C]/60">(আমার কথা)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-[#E6DCC9] hover:text-[#FFFDF7] hover:translate-x-1 transition-all duration-200 text-left flex items-center gap-2 group"
                >
                  <span className="text-[#C9A45C] group-hover:text-[#B85C38]">✦</span>
                  <span>Contact & Custom Order</span>
                  <span className="text-xs text-[#C9A45C]/60">(যোগাযোগ)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Social Placeholders */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C9A45C] mb-4 pb-2 border-b border-[#174D38]">
              Connect With The Artist
            </h4>
            <p className="text-xs text-[#E6DCC9]/80 leading-relaxed mb-4">
              Have a question about a piece or wish to discuss custom handmade embroidery?
            </p>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {/* WhatsApp placeholder button */}
              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#174D38] hover:bg-[#1f6248] text-xs font-medium text-[#FFFDF7] transition-colors border border-[#C9A45C]/30"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>WhatsApp Enquiry</span>
              </button>

              {/* Email button */}
              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#174D38] hover:bg-[#1f6248] text-xs font-medium text-[#FFFDF7] transition-colors border border-[#C9A45C]/30"
              >
                <Mail className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Send Message</span>
              </button>
            </div>

            {/* Social Links (Placeholders) */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#C9A45C] uppercase tracking-wider">Follow:</span>
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                className="p-2 rounded-full bg-[#174D38] hover:bg-[#B85C38] text-[#E6DCC9] hover:text-[#FFFDF7] transition-colors"
                aria-label="Instagram portfolio"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                className="p-2 rounded-full bg-[#174D38] hover:bg-[#B85C38] text-[#E6DCC9] hover:text-[#FFFDF7] transition-colors"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#174D38] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6DCC9]/70">
          <p>© 2026 সুতোয় গল্প. Handmade with love.</p>
          <div className="flex items-center gap-1 text-[#C9A45C]">
            <span>Crafted with patience & thread</span>
            <Heart className="w-3.5 h-3.5 text-[#A83232] fill-[#A83232]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
