"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LiquidBackdrop } from "./liquid-backdrop";

export interface HeroCard {
  letter?: string;
  label: string;
  index: string;
  src?: string;
}

export interface EditorialPageHeroProps {
  isRtl: boolean;
  cards: HeroCard[];
  title: React.ReactNode;
  subtitle: string;
  leftMeta?: string[];
  rightMeta?: { brand: string; line: string; accent: string };
  ticker?: { status?: string; locations?: string[] };
  children?: React.ReactNode;
  className?: string;
}

/**
 * EditorialPageHero - the shared "About-style" page hero.
 * Mirrors the About page hero: iridescent cobalt fluid canvas, dot matrix,
 * side metadata rails, a three-card centerpiece, a punchy headline and a
 * bottom ticker. Only the content is parameterised so every page shares the
 * exact same design spirit.
 */
export function EditorialPageHero({
  isRtl,
  cards,
  title,
  subtitle,
  leftMeta = [],
  rightMeta,
  ticker,
  children,
  className,
}: EditorialPageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden border-b border-neutral-200 bg-[#FBFBFB] pt-20 pb-6 text-neutral-900 select-none lg:min-h-screen sm:pt-24 sm:pb-8",
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

      {/* Centerpiece */}
      <div className="container-custom relative z-10 mx-auto my-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-2 sm:px-6">
        {/* Three visual glyph cards */}
        <div className="mx-auto mb-6 grid w-full max-w-2xl grid-cols-3 gap-3 sm:mb-8 sm:gap-5 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.index}
              className="group relative aspect-[0.92] overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:border-blue-500 hover:shadow-blue-500/25 sm:aspect-square sm:rounded-3xl"
            >
              {card.src ? (
                card.src.endsWith(".mp4") ? (
                  <>
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                    <video
                      src={card.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover brightness-95 contrast-105 saturate-[1.1] transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25" />
                  </>
                ) : (
                  <>
                    <Image
                      src={card.src}
                      alt={card.label}
                      fill
                      className="object-cover brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100px, 200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25" />
                  </>
                )
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
              )}



              {/* Corner badge */}
              <div className="absolute inset-x-3 bottom-3 flex items-end justify-between text-[10px] font-mono font-bold tracking-wider text-white sm:inset-x-4 sm:bottom-4 sm:text-xs">
                <span className="uppercase tracking-widest">{card.label}</span>
                <span className="font-bold text-[#3b82f6]">{card.index}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Headline + subtitle */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-neutral-950 sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-neutral-600 sm:text-base md:text-lg">
            {subtitle}
          </p>
          {children && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">{children}</div>
          )}
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
