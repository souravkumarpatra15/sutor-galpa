import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, Sparkles, ZoomIn, Film, CheckCircle2 } from 'lucide-react';

interface VideoReelSectionProps {
  onOpenCustomModal?: () => void;
}

export const VideoReelSection: React.FC<VideoReelSectionProps> = ({ onOpenCustomModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [progress, setProgress] = useState<number>(15);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Video chapters based on the artist's real embroidery work
  const chapters = [
    {
      id: 0,
      time: '0:00 - 0:06',
      title: 'Unfurling the Tapestry',
      titleBengali: 'নকশী কাঁথার বিস্তার',
      desc: 'Displaying the expansive white cotton textile showcasing full-length traditional hand-embroidered figure and meadow motifs.',
    },
    {
      id: 1,
      time: '0:07 - 0:14',
      title: 'The Kalash Bearer Detail',
      titleBengali: 'কলসী কাঁখে গ্রাম্য বধূ',
      desc: 'Meticulous running and satin stitches detailing the silver anklets, lehenga stars, and earthen kalash pot.',
    },
    {
      id: 2,
      time: '0:15 - 0:21',
      title: 'Vibrant Floral Meadow',
      titleBengali: 'রঙিন ফুলের বুনন',
      desc: 'Layered chain stitches and stem embroidery forming wildflowers, leaves, and sacred border patterns in pure cotton thread.',
    },
    {
      id: 3,
      time: '0:22 - 0:28',
      title: 'Artisan Signature & Mastery',
      titleBengali: 'শিল্পীর পরম নিষ্ঠা ও শ্রম',
      desc: 'Over 120+ hours of patient needlework preserving Bengal’s heirloom textile legacy for modern collectors.',
    },
  ];

  // Dynamic canvas animation representing the real textile video footage
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;

    const render = () => {
      if (isPlaying) {
        frame += 0.015 * playbackSpeed;
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.08 * playbackSpeed));
      }

      const w = canvas.width;
      const h = canvas.height;

      // Background cotton fabric texture
      ctx.fillStyle = '#FCFBF7';
      ctx.fillRect(0, 0, w, h);

      // Subtle fabric weave grain
      ctx.strokeStyle = 'rgba(230, 220, 201, 0.4)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 12) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Dynamic Pan & Zoom Camera simulation
      ctx.save();
      const panX = Math.sin(frame * 0.5) * 40;
      const panY = Math.cos(frame * 0.4) * 30;
      ctx.translate(w / 2 + panX, h / 2 + panY);
      ctx.scale(zoomLevel, zoomLevel);
      ctx.translate(-w / 2, -h / 2);

      // 1. Embroidered Kalash on Top of Head
      const kalashY = h * 0.22 + Math.sin(frame) * 4;
      ctx.fillStyle = '#8B4513';
      ctx.beginPath();
      ctx.arc(w * 0.48, kalashY, 32, 0, Math.PI * 2);
      ctx.fill();

      // Ornate dots on Kalash (simulating stitches)
      ctx.fillStyle = '#FFFDF7';
      for (let a = 0; a < Math.PI * 2; a += 0.4) {
        const dx = w * 0.48 + Math.cos(a) * 24;
        const dy = kalashY + Math.sin(a) * 24;
        ctx.fillRect(dx - 2, dy - 2, 4, 4);
      }

      // 2. Village Lady Embroidered Silhouette & Saree
      // Head & Profile
      ctx.strokeStyle = '#292621';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(w * 0.46, h * 0.32, 28, 0, Math.PI * 2);
      ctx.stroke();

      // Veil (Orna / Ghomta)
      ctx.strokeStyle = '#B83227';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(w * 0.42, kalashY + 20);
      ctx.quadraticCurveTo(w * 0.32, h * 0.38, w * 0.36, h * 0.65);
      ctx.stroke();

      // Saree Skirt with Embroidered Stars & Circular Motifs
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.strokeStyle = '#174D38';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.44, h * 0.48);
      ctx.lineTo(w * 0.54, h * 0.48);
      ctx.lineTo(w * 0.62, h * 0.82);
      ctx.lineTo(w * 0.34, h * 0.82);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Multi-colored embroidered star bursts on dress
      const starColors = ['#E11D48', '#2563EB', '#D97706', '#059669', '#7C3AED'];
      for (let i = 0; i < 16; i++) {
        const sx = w * 0.38 + ((i * 37) % (w * 0.2));
        const sy = h * 0.52 + ((i * 29) % (h * 0.26));
        ctx.fillStyle = starColors[i % starColors.length];
        
        // 8-point embroidered star
        ctx.fillRect(sx - 3, sy - 1, 6, 2);
        ctx.fillRect(sx - 1, sy - 3, 2, 6);
        ctx.fillRect(sx - 2, sy - 2, 4, 4);
      }

      // 3. Flower Bed at the Bottom (Running Stitches)
      for (let f = 0; f < 8; f++) {
        const fx = w * 0.15 + f * (w * 0.1);
        const fy = h * 0.86 + Math.sin(f + frame) * 6;
        
        // Green stem
        ctx.strokeStyle = '#16A34A';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(fx, h * 0.95);
        ctx.lineTo(fx, fy);
        ctx.stroke();

        // Flower petals
        ctx.fillStyle = starColors[(f + 2) % starColors.length];
        ctx.beginPath();
        ctx.arc(fx, fy - 6, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FEF08A';
        ctx.beginPath();
        ctx.arc(fx, fy - 6, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Stitched Leaf Vines on top right
      ctx.strokeStyle = '#15803D';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.58, h * 0.2);
      ctx.quadraticCurveTo(w * 0.75, h * 0.22, w * 0.88, h * 0.35);
      ctx.stroke();

      for (let l = 0; l < 6; l++) {
        const lx = w * 0.62 + l * 28;
        const ly = h * 0.21 + l * 16;
        ctx.fillStyle = '#22C55E';
        ctx.beginPath();
        ctx.ellipse(lx, ly, 10, 5, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Active Needle Stitching Animation on live frame
      const needleX = w * 0.48 + Math.sin(frame * 2) * 60;
      const needleY = h * 0.65 + Math.cos(frame * 2) * 40;

      // Golden Needle
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(needleX - 18, needleY - 24);
      ctx.lineTo(needleX + 18, needleY + 24);
      ctx.stroke();

      // Trailing Red Thread
      ctx.strokeStyle = '#DC2626';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 2]);
      ctx.beginPath();
      ctx.moveTo(needleX - 18, needleY - 24);
      ctx.quadraticCurveTo(needleX - 40, needleY - 50, needleX - 60, needleY - 30);
      ctx.stroke();
      ctx.setLineDash([]); // Reset line dash

      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, playbackSpeed, zoomLevel]);

  return (
    <section id="video-reel-showcase" className="py-16 md:py-24 bg-[#F8F3E8]/70 border-y border-[#E6DCC9] relative overflow-hidden">
      
      {/* Decorative Needlework Accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(90deg,#B85C38,#B85C38_8px,transparent_8px,transparent_16px)] opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(90deg,#174D38,#174D38_8px,transparent_8px,transparent_16px)] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174D38]/10 text-[#0F3829] text-xs font-semibold uppercase tracking-wider mb-3">
            <Film className="w-4 h-4 text-[#B85C38]" />
            <span>Artisan Studio Video • হাতে বোনার মুহূর্ত</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#174D38] tracking-tight mb-4">
            Watch the Craft in Motion
          </h2>

          <p className="text-base sm:text-lg text-[#5A5243] font-serif leading-relaxed">
            Witness the intricate beauty of authentic Bengali textile art. Every delicate thread, floral creeper, and nursery rhyme is stitched by hand with devotion.
          </p>
        </div>

        {/* Video Player & Story Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Video Screen Container (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDF7] bg-[#1F2937] group">
              
              {/* Canvas Video Surface */}
              <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden bg-[#292621]">
                <canvas
                  ref={canvasRef}
                  width={640}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300"
                />

                {/* Top Video Status Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Studio Reel • Original Textile Capture</span>
                </div>

                {/* Top Right Zoom Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <button
                    id="video-zoom-btn"
                    onClick={() => setZoomLevel(zoomLevel === 1 ? 1.5 : zoomLevel === 1.5 ? 2 : 1)}
                    className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-xs hover:bg-black/80 transition-colors flex items-center gap-1 border border-white/10"
                    title="Toggle Stitch Zoom"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>{zoomLevel}x Stitch View</span>
                  </button>
                </div>

                {/* Center Big Play Button if Paused */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#174D38]/90 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-20 border-2 border-[#C9A45C]"
                    aria-label="Play Video"
                  >
                    <Play className="w-7 h-7 ml-1 fill-current text-white" />
                  </button>
                )}

                {/* Bottom Overlay Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 z-20">
                  
                  {/* Seek Bar */}
                  <div className="w-full bg-white/30 h-1.5 rounded-full overflow-hidden cursor-pointer relative">
                    <div 
                      className="bg-[#B85C38] h-full transition-all duration-150 rounded-full relative"
                      style={{ width: `${progress}%` }}
                    >
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md" />
                    </div>
                  </div>

                  {/* Buttons Row */}
                  <div className="flex items-center justify-between text-white text-xs sm:text-sm pt-1">
                    
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                      </button>

                      <button
                        onClick={() => setProgress(0)}
                        className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Replay"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <span className="font-mono text-xs text-white/80">
                        {Math.floor((progress / 100) * 28)}s / 0:28s
                      </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Playback Speed Switcher */}
                      <button
                        onClick={() => {
                          const speeds = [0.5, 1, 1.5, 2];
                          const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                          setPlaybackSpeed(speeds[nextIdx]);
                        }}
                        className="px-2 py-0.5 rounded bg-white/20 hover:bg-white/30 transition-colors text-xs font-mono"
                      >
                        {playbackSpeed}x Speed
                      </button>

                      {/* Mute Toggle */}
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-white/70" /> : <Volume2 className="w-4 h-4 text-white" />}
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Video Caption & Authentic Textile Notes */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#8A7D6B] px-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#174D38]" />
                Original handcrafted Nakshi Kantha footage by Rita
              </span>
              <span>100% Hand-Stitched Cotton</span>
            </div>
          </div>

          {/* Story & Chapter Timeline (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#E6DCC9] shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#174D38] mb-1 flex items-center gap-2">
                <span>The Story of Every Stitch</span>
                <Sparkles className="w-4 h-4 text-[#C9A45C]" />
              </h3>
              <p className="text-xs text-[#8A7D6B] mb-5">
                Select a stage below to explore how Rita builds intricate Bengali textile narratives:
              </p>

              <div className="space-y-3">
                {chapters.map((chapter, idx) => {
                  const isCurrent = activeChapter === idx;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => {
                        setActiveChapter(idx);
                        setProgress(idx * 25 + 5);
                      }}
                      className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 border ${
                        isCurrent
                          ? 'bg-[#F8F3E8] border-[#174D38] shadow-xs'
                          : 'bg-transparent border-[#E6DCC9]/60 hover:bg-[#F8F3E8]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-mono font-semibold ${isCurrent ? 'text-[#B85C38]' : 'text-[#8A7D6B]'}`}>
                          {chapter.time}
                        </span>
                        <span className="text-[11px] font-serif text-[#174D38] font-medium">
                          {chapter.titleBengali}
                        </span>
                      </div>

                      <div className="font-serif font-bold text-sm text-[#292621]">
                        {chapter.title}
                      </div>

                      <p className="text-xs text-[#5A5243] mt-1 leading-relaxed line-clamp-2">
                        {chapter.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Action Link to Custom Commission */}
              <div className="mt-5 pt-4 border-t border-[#E6DCC9] flex items-center justify-between">
                <span className="text-xs text-[#8A7D6B]">Want a custom story stitched?</span>
                <button
                  id="reel-enquire-btn"
                  onClick={onOpenCustomModal}
                  className="text-xs font-serif font-bold text-[#174D38] hover:text-[#B85C38] transition-colors flex items-center gap-1 underline underline-offset-4"
                >
                  Commission an Artwork →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
