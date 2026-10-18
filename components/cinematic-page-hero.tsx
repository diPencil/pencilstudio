"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ScrollFillText } from "@/components/scroll-fill-text";

export interface CinematicHeroMetric {
  value: string;
  label: string;
}

export interface CinematicPageHeroProps {
  isRtl: boolean;
  breadcrumb: { label: string; href?: string }[];
  badge: string;
  badgeEnAr?: string;
  titleSolid: string;
  titleOutline: string;
  subtitle: string;
  bgMotion: React.ReactNode;
  children?: React.ReactNode;
  /** Optional bottom metric cards (SuperFeliz style) */
  metrics?: CinematicHeroMetric[];
}

export function CinematicPageHero({
  isRtl,
  breadcrumb,
  badge,
  badgeEnAr = "AR + EN",
  titleSolid,
  titleOutline,
  subtitle,
  bgMotion,
  children,
  metrics,
}: CinematicPageHeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-neutral-950 text-white pt-24 pb-8 md:pt-32 md:pb-10">
      {/* 1. Page-Specific Motion Background */}
      {bgMotion}

      {/* Top spacer to balance vertical layout */}
      <div className="h-2 w-full shrink-0" aria-hidden="true" />

      {/* 2. Container Centered Content (Fills the viewport gracefully) */}
      <div className="container-custom relative z-10 w-full my-auto text-center py-6 sm:py-8">
        {/* Breadcrumb Centered */}
        <Reveal>
          <nav className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wide text-white/60">
            {breadcrumb.map((c, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span aria-hidden className="text-white/40">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white font-bold">{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </Reveal>

        {/* Badges Centered */}
        <Reveal delay={0.05}>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
              {badge}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-neutral-900 shadow-sm">
              {isRtl ? "عربي + إنجليزي" : badgeEnAr}
            </span>
          </div>
        </Reveal>

        {/* Big Headline (Centered + Solid line 1 + Outlined scroll-fill line 2, Strict 2 lines like SuperFeliz) */}
        <Reveal delay={0.1}>
          <h1 className="mx-auto max-w-6xl text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.85rem] 2xl:text-[4.25rem]">
            <span className="block whitespace-normal sm:whitespace-nowrap">{titleSolid}</span>
            <span className="block whitespace-normal sm:whitespace-nowrap mt-1 sm:mt-2">
              <ScrollFillText text={titleOutline} isRtl={isRtl} />
            </span>
          </h1>
        </Reveal>

        {/* Subtitle Centered (Ultra-Concise) */}
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-relaxed text-white/75 sm:text-base">
            {subtitle}
          </p>
        </Reveal>

        {/* Optional Action Buttons or Children */}
        {children && (
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </Reveal>
        )}
      </div>

      {/* 3. Base of the Hero (SuperFeliz style): Metrics Bar OR Scroll Cue */}
      <div className="relative z-10 w-full shrink-0">
        {metrics && metrics.length > 0 ? (
          <Reveal delay={0.25}>
            <div className="container-custom border-t border-white/10 pt-6 pb-2">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <span className="font-mono text-xl font-black text-white sm:text-2xl" dir="ltr">
                      {m.value}
                    </span>
                    <span className="mt-1 text-xs font-semibold text-white/50">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1.5 pb-2 text-xs font-medium text-white/40 tracking-wider">
            <span className="text-[11px]">{isRtl ? "مرر للاستكشاف" : "Scroll to explore"}</span>
            <span className="inline-block animate-bounce text-sm text-white/60">↓</span>
          </div>
        )}
      </div>
    </section>
  );
}
