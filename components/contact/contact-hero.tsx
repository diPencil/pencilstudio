"use client";

import React from "react";
import { useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { LiquidBackdrop } from "@/components/editorial/liquid-backdrop";
import { LinePath } from "@/components/ui/svg-follow-scroll";

export interface ContactHeroProps {
  isRtl: boolean;
  title?: React.ReactNode;
  titleLine1?: React.ReactNode;
  titleLine2?: React.ReactNode;
  subtitle: string;
  leftMeta?: string[];
  rightMeta?: { brand: string; line: string; accent: string };
  ticker?: { status?: string; locations?: string[] };
  className?: string;
}

export function ContactHero({
  isRtl,
  title,
  titleLine1,
  titleLine2,
  subtitle,
  leftMeta = [],
  rightMeta,
  ticker,
  className,
}: ContactHeroProps) {
  const { scrollYProgress } = useScroll();

  return (
    <section
      className={cn(
        "relative flex min-h-[92vh] w-full flex-col justify-between overflow-visible border-b border-neutral-200 bg-transparent pt-20 pb-6 text-neutral-900 select-none lg:min-h-screen sm:pt-24 sm:pb-8",
        className
      )}
    >
      {/* Interactive liquid pearl & cobalt canvas */}
      <LiquidBackdrop />

      {/* Architectural dot matrix */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Left editorial vertical metadata */}
      {leftMeta.length > 0 && (
        <div
          className={cn(
            "absolute top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 text-[11px] font-mono uppercase tracking-[0.28em] text-neutral-400 lg:flex",
            isRtl ? "right-8 text-right" : "left-8 text-left"
          )}
        >
          {leftMeta.map((item) => (
            <span key={item} className="transition-colors duration-300 hover:text-neutral-900">
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Opposite side metadata */}
      {rightMeta && (
        <div
          className={cn(
            "absolute top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 lg:flex",
            isRtl ? "left-8 text-left" : "right-8 text-right"
          )}
        >
          <span className="font-bold text-neutral-800">{rightMeta.brand}</span>
          <span>{rightMeta.line}</span>
          <span className="font-bold text-[#2057ff]">{rightMeta.accent}</span>
        </div>
      )}

      {/* Centerpiece without the 3 cards, with interactive SVG stroke flowing down into the page */}
      <div className="container-custom relative z-10 mx-auto my-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-8 sm:px-6">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
          {/* Animated SVG line following scroll in Pencil Electric Blue - scaled and centered so loops stay completely within the screen without clipping */}
          <div
            className={cn(
              "pointer-events-none absolute z-0 select-none overflow-visible",
              // Mobile: sized so the loop (755 units wide) fits comfortably inside mobile screen without clipping
              // Desktop: expands to full editorial presence
              "w-[540px] xs:w-[580px] sm:w-[860px] md:w-[1080px] lg:w-[1260px]",
              "h-auto aspect-[1278/2670]",
              "-top-[40px] xs:-top-[55px] sm:-top-[100px] lg:-top-[130px]",
              // Centers the loop (X=869.5 in the 1278px viewBox = 68%) directly in the middle of the screen
              "left-1/2 -translate-x-[68%]"
            )}
            style={{
              filter: "drop-shadow(0 14px 35px rgba(32, 87, 255, 0.22))",
            }}
          >
            <LinePath
              className="w-full h-full overflow-visible"
              scrollYProgress={scrollYProgress}
              strokeColor="#2057FF"
              strokeWidth={20}
              maxPathLength={0.88}
            />
          </div>

          {/* Headline + subtitle */}
          <div className="relative z-10 space-y-4">
            <h1 className="text-3xl font-bold leading-[1.08] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]">
              {titleLine1 && titleLine2 ? (
                <>
                  <span className="block font-bold text-neutral-950">
                    {titleLine1}
                  </span>
                  <span className="mt-1 block text-[0.74em] font-light italic text-neutral-500 sm:mt-2">
                    {titleLine2}
                  </span>
                </>
              ) : (
                title
              )}
            </h1>
            <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-neutral-600 sm:text-base md:text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      {ticker && (
        <div className="relative z-10 mt-6 w-full border-t border-neutral-200/80 pt-5">
          <div className="container-custom mx-auto flex flex-wrap items-center justify-between gap-4 px-4 text-xs font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#2057ff]" />
              <span className="font-semibold text-neutral-700">{ticker.status}</span>
            </div>
            {ticker.locations && ticker.locations.length > 0 && (
              <div className="flex items-center gap-6 font-semibold">
                {ticker.locations.map((loc, i) => (
                  <React.Fragment key={loc}>
                    {i > 0 && <span className="text-neutral-300">•</span>}
                    <span>{loc}</span>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
