"use client";

import React, { useEffect, useRef, useState } from "react";

interface AboutHeroProps {
  isRtl: boolean;
}

export function AboutHero({ isRtl }: AboutHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Interactive WebGL-inspired Iridescent Pearl & Cobalt Fluid Canvas (Light & Joyful)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let curMouseX = 0.5;
    let curMouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = e.clientY / window.innerHeight;
      setMousePos({ x: targetMouseX, y: targetMouseY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      time += 0.012;
      curMouseX += (targetMouseX - curMouseX) * 0.05;
      curMouseY += (targetMouseY - curMouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Pristine Gallery Off-White Base with Subtle Warmth
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        width * 0.1,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      bgGrad.addColorStop(0, "#FFFFFF");
      bgGrad.addColorStop(0.7, "#FAFBFD");
      bgGrad.addColorStop(1, "#F3F5F9");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Left Holographic Iridescent Liquid Ribbon (Light Prism Style)
      ctx.save();
      const leftGrad = ctx.createLinearGradient(0, 0, width * 0.35, height);
      leftGrad.addColorStop(0, "rgba(32, 87, 255, 0.22)"); // Electric Cobalt
      leftGrad.addColorStop(0.3, "rgba(99, 102, 241, 0.28)"); // Violet Silk
      leftGrad.addColorStop(0.6, "rgba(56, 189, 248, 0.25)"); // Sky Cyan
      leftGrad.addColorStop(0.85, "rgba(32, 87, 255, 0.15)");
      leftGrad.addColorStop(1, "transparent");

      ctx.beginPath();
      const leftOffset = Math.sin(time + curMouseY * 2) * 35;
      ctx.moveTo(-60, -50);
      ctx.bezierCurveTo(
        width * 0.18 + leftOffset,
        height * 0.2,
        width * 0.22 - leftOffset,
        height * 0.7,
        -40,
        height + 50
      );
      ctx.lineTo(-120, height + 50);
      ctx.lineTo(-120, -50);
      ctx.closePath();
      ctx.fillStyle = leftGrad;
      ctx.filter = "blur(28px)";
      ctx.fill();
      ctx.restore();

      // 3. Right Holographic Iridescent Liquid Ribbon
      ctx.save();
      const rightGrad = ctx.createLinearGradient(width, 0, width * 0.65, height);
      rightGrad.addColorStop(0, "rgba(32, 87, 255, 0.25)");
      rightGrad.addColorStop(0.35, "rgba(147, 197, 253, 0.35)"); // Shimmering Ice
      rightGrad.addColorStop(0.65, "rgba(129, 140, 248, 0.22)"); // Soft Indigo
      rightGrad.addColorStop(0.9, "rgba(32, 87, 255, 0.12)");
      rightGrad.addColorStop(1, "transparent");

      ctx.beginPath();
      const rightOffset = Math.cos(time * 0.9 + curMouseX * 2) * 40;
      ctx.moveTo(width + 60, -50);
      ctx.bezierCurveTo(
        width * 0.82 + rightOffset,
        height * 0.25,
        width * 0.78 - rightOffset,
        height * 0.75,
        width + 40,
        height + 50
      );
      ctx.lineTo(width + 120, height + 50);
      ctx.lineTo(width + 120, -50);
      ctx.closePath();
      ctx.fillStyle = rightGrad;
      ctx.filter = "blur(28px)";
      ctx.fill();
      ctx.restore();

      // 4. Soft Center Ambient Radial Glow
      const centerGlow = ctx.createRadialGradient(
        width * (0.5 + (curMouseX - 0.5) * 0.1),
        height * (0.35 + (curMouseY - 0.5) * 0.1),
        0,
        width * 0.5,
        height * 0.35,
        width * 0.45
      );
      centerGlow.addColorStop(0, "rgba(32, 87, 255, 0.06)");
      centerGlow.addColorStop(1, "transparent");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#FBFBFB] text-neutral-900 flex flex-col justify-between pt-20 pb-6 sm:pt-24 sm:pb-8 select-none border-b border-neutral-200">
      
      {/* 1. Interactive Liquid Pearl & Cobalt Canvas Background */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-95 transition-opacity duration-1000"
      />

      {/* Subtle Architectural Dot Matrix Background on Light Paper */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* 2. Side Editorial Vertical Metadata (Crisp Dark Typography on Light Canvas) */}
      <div
        className={`hidden lg:flex flex-col gap-3 absolute top-1/2 -translate-y-1/2 z-20 text-[11px] font-mono tracking-[0.28em] text-neutral-400 uppercase ${
          isRtl ? "right-8 text-right" : "left-8 text-left"
        }`}
      >
        <span className="hover:text-neutral-900 transition-colors duration-300">
          {isRtl ? "استراتيجية" : "STRATEGY"}
        </span>
        <span className="hover:text-neutral-900 transition-colors duration-300">
          {isRtl ? "تصميم وهوية" : "DESIGN"}
        </span>
        <span className="hover:text-neutral-900 transition-colors duration-300">
          {isRtl ? "هندسة سحابية" : "ENGINEERING"}
        </span>
      </div>

      {/* Opposite Side Metadata */}
      <div
        className={`hidden lg:flex flex-col gap-2 absolute top-1/2 -translate-y-1/2 z-20 text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase ${
          isRtl ? "left-8 text-left" : "right-8 text-right"
        }`}
      >
        <span className="font-bold text-neutral-800">PENCIL STUDIO</span>
        <span>EST. 2014 // CAIRO</span>
        <span className="text-[#2057ff] font-bold">120+ SHIPPED</span>
      </div>

      {/* 3. Centerpiece: The Three Visual Media Glyph Cards (Deep Dark Contrast Cards on Light Background) */}
      <div className="container-custom relative z-10 mx-auto px-4 sm:px-6 w-full max-w-5xl flex-1 flex flex-col justify-center my-auto py-2">
        
        {/* The 3 Showcase Letter Cards with /about Videos (identity, systems, scale) */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-6 max-w-2xl mx-auto w-full mb-6 sm:mb-8">
          
          {/* Card 1: 'P' - identity.mp4 */}
          <div className="group relative aspect-[0.92] sm:aspect-square overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-900 bg-neutral-950 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:border-blue-500 hover:shadow-blue-500/25">
            <video
              src="/about/identity.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover brightness-95 contrast-105 saturate-[1.1] transition-transform duration-700 group-hover:scale-110"
            />
            {/* Subtle Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25" />
            
            {/* Stylized Cutout Letter 'P' Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-6xl sm:text-8xl md:text-9xl font-black text-white/20 tracking-tighter select-none font-mono group-hover:text-white/35 transition-colors duration-500">
                P
              </span>
            </div>

            {/* Corner Badge with Video Name */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4 flex justify-between items-end text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white">
              <span className="uppercase tracking-widest">{isRtl ? "الهوية" : "IDENTITY"}</span>
              <span className="text-[#3b82f6] font-bold">01</span>
            </div>
          </div>

          {/* Card 2: 'C' - systems.mp4 */}
          <div className="group relative aspect-[0.92] sm:aspect-square overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-900 bg-neutral-950 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:border-blue-500 hover:shadow-blue-500/25">
            <video
              src="/about/systems.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover brightness-95 contrast-105 saturate-[1.1] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25" />

            {/* Stylized Cutout Letter 'C' Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-6xl sm:text-8xl md:text-9xl font-black text-white/20 tracking-tighter select-none font-mono group-hover:text-white/35 transition-colors duration-500">
                C
              </span>
            </div>

            {/* Corner Badge with Video Name */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4 flex justify-between items-end text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white">
              <span className="uppercase tracking-widest">{isRtl ? "الأنظمة" : "SYSTEMS"}</span>
              <span className="text-[#3b82f6] font-bold">02</span>
            </div>
          </div>

          {/* Card 3: 'L' - scale.mp4 */}
          <div className="group relative aspect-[0.92] sm:aspect-square overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-900 bg-neutral-950 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:border-blue-500 hover:shadow-blue-500/25">
            <video
              src="/about/scale.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover brightness-95 contrast-105 saturate-[1.1] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25" />

            {/* Stylized Cutout Letter 'L' Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-6xl sm:text-8xl md:text-9xl font-black text-white/20 tracking-tighter select-none font-mono group-hover:text-white/35 transition-colors duration-500">
                L
              </span>
            </div>

            {/* Corner Badge with Video Name */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4 flex justify-between items-end text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white">
              <span className="uppercase tracking-widest">{isRtl ? "التوسع" : "SCALE"}</span>
              <span className="text-[#3b82f6] font-bold">03</span>
            </div>
          </div>

        </div>

        {/* 4. Massive Punchy Headline (High-Contrast Black & Electric Blue) */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black uppercase tracking-tight leading-[0.98] text-neutral-950">
            {isRtl ? (
              <>
                <span className="text-[#2057ff]">
                  إبداع
                </span>{" "}
                <span>صُنِعَ لِيَدُوم</span>
                <span className="text-[#2057ff]">.</span>
              </>
            ) : (
              <>
                <span className="text-[#2057ff]">
                  CRAFT
                </span>{" "}
                <span>BUILT TO ENDURE</span>
                <span className="text-[#2057ff]">.</span>
              </>
            )}
          </h1>

          {/* Clean Subtitle in Crisp Charcoal */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg font-normal text-neutral-600 leading-relaxed">
            {isRtl
              ? "من الفكرة الأولى وحتى إطلاق المنصات السحابية الكبرى، نبني منتجات رقمية بهوية جريئة وأداء فائق لا يتنازل."
              : "From the first sketch to high-velocity cloud systems, we build digital products with clarity, uncompromising craft, and enduring impact."}
          </p>

        </div>

      </div>

      {/* 6. Subtle Bottom Marquee / Ticker */}
      <div className="relative z-10 w-full border-t border-neutral-200/80 pt-5 mt-6">
        <div className="container-custom mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-neutral-700">
              {isRtl ? "مشاريع جديدة متاحة للربع الحالي" : "AVAILABLE FOR SELECT Q2 PARTNERSHIPS"}
            </span>
          </div>
          <div className="flex items-center gap-6 font-semibold">
            <span>CAIRO</span>
            <span className="text-neutral-300">•</span>
            <span>DUBAI</span>
            <span className="text-neutral-300">•</span>
            <span>RIYADH</span>
            <span className="text-neutral-300">•</span>
            <span>BERLIN</span>
          </div>
        </div>
      </div>

    </section>
  );
}
