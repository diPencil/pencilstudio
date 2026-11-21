"use client";

import React from "react";
import { LiquidBackdrop } from "@/components/editorial";

interface AboutHeroProps {
  isRtl: boolean;
}

export function AboutHero({ isRtl }: AboutHeroProps) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#FBFBFB] text-neutral-900 flex flex-col justify-between pt-20 pb-6 sm:pt-24 sm:pb-8 select-none border-b border-neutral-200">
      
      {/* 1. Interactive Liquid Pearl & Cobalt Canvas Background */}
      <LiquidBackdrop />

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
