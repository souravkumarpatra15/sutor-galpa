import React from 'react';
import { PageRoute } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { StitchDivider } from '../components/StitchDivider';
import { CTASection } from '../components/CTASection';
import { BrandLogo } from '../components/BrandLogo';
import { PageHeader } from '../components/PageHeader';
import { Sparkles, Flower2, Trees, Home as HomeIcon, Heart, Compass, Film, ArrowRight, Scissors } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageRoute) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const inspirations = [
    {
      icon: <Trees className="w-6 h-6 text-[#174D38]" />,
      emoji: '🌿',
      title: 'Nature',
      titleBengali: 'প্রকৃতি ও নিসর্গ',
      desc: 'Flowing rivers, lush green trees, songbirds, and the quiet organic rhythm of rural Bengal.'
    },
    {
      icon: <Flower2 className="w-6 h-6 text-[#B85C38]" />,
      emoji: '🌸',
      title: 'Flowers',
      titleBengali: 'বুনো ফুল ও শিউলি',
      desc: 'Blooming wildflowers, parijat, lotus, and vibrant marigolds rendered in layered silk thread shades.'
    },
    {
      icon: <HomeIcon className="w-6 h-6 text-[#C9A45C]" />,
      emoji: '🏡',
      title: 'Village Life',
      titleBengali: 'গ্রাম বাংলার মেঠো সুর',
      desc: 'Quiet riverbanks, wooden boats, thatched cottages, and everyday moments of rural tranquility.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#0F3829]" />,
      emoji: '🧵',
      title: 'Traditional Craft',
      titleBengali: 'ঐতিহ্যবাহী কাঁথাস্টিচ',
      desc: 'Centuries-old Kantha heritage, Bengali motifs, alpona designs, and authentic hand needlework.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#A83232]" />,
      emoji: '❤️',
      title: 'Memories',
      titleBengali: 'স্মৃতি ও অনুভূতি',
      desc: 'Cherished memories, nostalgic moments, and personal thoughts preserved patiently stitch by stitch.'
    }
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'The Beginning',
      titleBengali: 'শুরুর সেই দিনগুলো',
      description: 'A love for stitching and handmade creativity begins with simple designs, handloom exploration, and basic pattern needlework.'
    },
    {
      step: '02',
      title: 'Learning Through Practice',
      titleBengali: 'চর্চায় গড়ে ওঠা হাত',
      description: 'With every piece, new techniques, intricate stitch varieties, and creative storytelling take shape on cotton and raw tussar silk.'
    },
    {
      step: '03',
      title: 'Finding Her Signature Style',
      titleBengali: 'নিজের ধারা খুঁজে পাওয়া',
      description: 'Traditional folk motifs, Bengali nursery rhymes, Pather Panchali cinema homages, and nature come together in harmony.'
    },
    {
      step: '04',
      title: 'Preserving Heritage Today',
      titleBengali: 'আজকের পথচলা',
      description: 'Each new artwork continues the artistic journey — weaving memories and heritage, one patient, heartfelt stitch at a time.'
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16 py-4 sm:py-6">
      
      {/* STYLISH ABOUT PAGE HEADER */}
      <section id="about-page-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          badge="The Artisan Story"
          badgeBengali="শিল্পীর কথা ও জীবনগাঁথা"
          title="The Hands Behind Every Stitch"
          titleBengali="সুতো, সেলাই আর সৃষ্টির রূপকথা"
          description="A lifelong dedication to preserving Bengali needlecraft heritage—turning pure cotton and tussar silk into woven heirloom stories with needle, thread, and boundless love."
          icon="feather"
        />
      </section>

      {/* HERO SECTION SPLIT LAYOUT */}
      <section id="about-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Artwork / Logo Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 border-2 border-dashed border-[#C9A45C] rounded-3xl rotate-1 pointer-events-none" />
              
              <div className="relative bg-[#FFFDF7] p-8 rounded-3xl shadow-xl border border-[#E6DCC9] overflow-hidden text-center flex flex-col items-center">
                <div className="p-6 bg-[#F8F3E8] rounded-2xl border border-[#E6DCC9]/60 w-full flex justify-center">
                  <BrandLogo size="lg" showSubtitle={true} />
                </div>

                <div className="mt-5 pt-4 border-t border-dashed border-[#C9A45C]/60 w-full text-xs text-[#8A7D6B] flex items-center justify-between">
                  <span className="font-serif italic text-sm text-[#174D38] font-medium">হাতের সেলাইয়ে প্রাণের ছোঁয়া</span>
                  <span className="font-mono text-[#B85C38] font-semibold">Handcraft Heritage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-dashed border-[#C9A45C] bg-[#FFFDF7] text-[#B85C38] text-xs tracking-[0.2em] font-semibold uppercase shadow-xs">
              <span>✦</span>
              <span>ABOUT THE ARTIST • আমার কথা</span>
              <span>✦</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#0F3829] tracking-tight leading-tight">
              The Hands Behind Every Stitch
            </h1>

            <p className="text-2xl sm:text-3xl font-serif font-medium text-[#174D38]">
              সুতো, সেলাই আর সৃষ্টির গল্প
            </p>

            <div className="space-y-4 text-base sm:text-lg text-[#292621]/90 leading-relaxed font-sans">
              <p>
                Behind every handmade piece is time, patience and imagination. Through stitching and embroidery, simple fabric becomes a canvas for timeless Bengali stories.
              </p>
              <p>
                Rita's work brings together traditional decorative patterns, Bengali literary nursery rhymes, Baul folk mystics, blooming wildflowers, and iconic cinematic scenes like Apu and Durga running through the Kash flower meadow.
              </p>
              <p className="font-serif italic text-[#174D38] border-l-2 border-[#B85C38] pl-4 py-1">
                Rather than simply decorating fabric, each piece becomes a personal handmade heirloom.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('handcrafts')}
                className="px-6 py-3 rounded-full bg-[#174D38] text-[#FFFDF7] text-sm font-semibold hover:bg-[#0F3829] transition-colors shadow-sm"
              >
                View Gallery Creations
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-[#F8F3E8] text-[#0F3829] hover:bg-[#E6DCC9] border border-[#E6DCC9] text-sm font-semibold transition-colors"
              >
                Get In Touch
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* PHILOSOPHY CALLOUT */}
      <section id="about-philosophy" className="bg-[#F8F3E8] py-16 border-y border-[#E6DCC9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="text-2xl text-[#C9A45C] font-serif">“</div>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-[#0F3829] leading-snug">
            Art does not always begin with a blank canvas. Sometimes it begins with a simple piece of cloth and a single thread.
          </blockquote>
          <p className="text-lg sm:text-xl font-serif text-[#174D38]">
            শিল্পের সূচনা সর্বদা ক্যানভাসে হয় না; এক টুকরো সাধারণ কাপড় আর একটি সুতো দিয়েই শুরু হয় তার যাত্রা।
          </p>
          <StitchDivider variant="thread" />
        </div>
      </section>

      {/* HER JOURNEY TIMELINE */}
      <section id="about-journey" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Evolution"
          title="Her Creative Journey"
          bengaliTitle="একটি শিল্পের বিকাশ ও পথচলা"
          subtitle="How curiosity, practice, and passion shaped a distinctive embroidery voice."
        />

        <div className="relative mt-12">
          {/* Vertical central stitched line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 border-l-2 border-dashed border-[#C9A45C]/60" />

          <div className="space-y-12">
            {journeySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in Center */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#174D38] text-[#FFFDF7] border-2 border-[#C9A45C] flex items-center justify-center font-mono text-xs font-bold shadow-md">
                    {step.step}
                  </div>

                  {/* Content Box */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#E6DCC9] shadow-xs hover:border-[#C9A45C] transition-colors">
                      <span className="text-xs uppercase tracking-widest text-[#B85C38] font-semibold">
                        Stage {step.step}
                      </span>
                      <h3 className="text-xl font-serif font-semibold text-[#0F3829] mt-1">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium text-[#174D38] font-serif mb-2">
                        {step.titleBengali}
                      </p>
                      <p className="text-sm text-[#5C5449] leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOURCES OF INSPIRATION */}
      <section id="about-inspiration" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Roots & Motifs"
          title="Sources of Inspiration"
          bengaliTitle="অনুপ্রেরণার উৎসসমূহ"
          subtitle="The everyday wonders and cultural traditions that breathe life into every stitch."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FFFDF7] rounded-2xl p-6 border border-[#E6DCC9] hover:border-[#C9A45C] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="p-2 rounded-lg bg-[#F8F3E8] group-hover:bg-[#174D38]/10 transition-colors">
                    {item.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#0F3829] group-hover:text-[#B85C38] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-serif text-[#174D38] font-medium">
                    {item.titleBengali}
                  </p>
                </div>

                <p className="text-xs text-[#5C5449] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-[#E6DCC9] text-[10px] font-mono text-[#C9A45C]">
                • • • • • • • •
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection onNavigate={onNavigate} />

    </div>
  );
};
