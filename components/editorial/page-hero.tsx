"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface HeroCard {
  letter: string;
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
  className?: string;
}

/**
 * EditorialPageHero — the shared "About-style" page hero.
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
  className,
}: EditorialPageHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [, setMousePos] = useState({ x: 0.5, y: 0.5 });

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

      // 1. Pristine gallery off-white base with subtle warmth
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

      // 2. Left holographic liquid ribbon
      ctx.save();
      const leftGrad = ctx.createLinearGradient(0, 0, width * 0.35, height);
      leftGrad.addColorStop(0, "rgba(32, 87, 255, 0.22)");
      leftGrad.addColorStop(0.3, "rgba(99, 102, 241, 0.28)");
      leftGrad.addColorStop(0.6, "rgba(56, 189, 248, 0.25)");
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

      // 3. Right holographic liquid ribbon
      ctx.save();
      const rightGrad = ctx.createLinearGradient(width, 0, width * 0.65, height);
      rightGrad.addColorStop(0, "rgba(32, 87, 255, 0.25)");
      rightGrad.addColorStop(0.35, "rgba(147, 197, 253, 0.35)");
      rightGrad.addColorStop(0.65, "rgba(129, 140, 248, 0.22)");
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

      // 4. Soft center ambient glow
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
    <section
      className={cn(
        "relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden border-b border-neutral-200 bg-[#FBFBFB] pt-20 pb-6 text-neutral-900 select-none lg:min-h-screen sm:pt-24 sm:pb-8",
        className
      )}
    >
      {/* Interactive liquid pearl & cobalt canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-95 transition-opacity duration-1000"
      />

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
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
              )}

              {/* Monogram letter */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-6xl font-black tracking-tighter text-white/20 transition-colors duration-500 select-none group-hover:text-white/35 sm:text-8xl md:text-9xl">
                  {card.letter}
                </span>
              </div>

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
        </div>
      </div>

      {/* Bottom ticker */}
      {ticker && (
        <div className="relative z-10 mt-6 w-full border-t border-neutral-200/80 pt-5">
          <div className="container-custom mx-auto flex flex-wrap items-center justify-between gap-4 px-4 text-xs font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
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
