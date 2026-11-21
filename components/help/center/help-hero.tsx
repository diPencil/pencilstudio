"use client";

import * as React from "react";
import Link from "next/link";
import { LiquidBackdrop } from "@/components/editorial";
import { Reveal } from "@/components/shared/motion/reveal";
import { cn } from "@/lib/utils";

export type HelpCrumb = { label: string; href?: string };

/* Shared help hero in the About spirit: light paper ground, dot grid,
   soft cobalt glow and rotating sweep, giant two-line title with a
   cobalt second line, and a white console for actions. */
export function HelpHero({
  breadcrumb,
  badges,
  titleA,
  titleB,
  subtitle,
  children,
  caption,
  size = "2xl",
  seed = 0x2b5b4a3c,
  outline = true,
}: {
  breadcrumb: HelpCrumb[];
  badges: React.ReactNode;
  titleA: React.ReactNode;
  titleB: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  caption?: React.ReactNode;
  size?: "xl" | "2xl";
  seed?: number;
  /* Kept for call-site compatibility; the light hero always accents
     the second line in cobalt. */
  outline?: boolean;
}) {
  void seed;
  void outline;

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[#FBFBFB] text-neutral-950">
      <LiquidBackdrop />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 10%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 pb-16 pt-28 text-center md:pb-20 md:pt-40">
        <Reveal>
          <nav className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wide text-neutral-500">
            {breadcrumb.map((c, i) => (
              <React.Fragment key={`${c.label}-${i}`}>
                {i > 0 && <span aria-hidden className="text-neutral-300">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-neutral-900">{c.label}</Link>
                ) : (
                  <span className="text-neutral-900">{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2.5">{badges}</div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className={cn("mx-auto mt-6 max-w-5xl font-black leading-[1.02] tracking-tight text-neutral-950", size === "xl" ? "text-5xl md:text-7xl" : "text-6xl md:text-8xl")}>
            {titleA}
            <br />
            <span className="text-[#2057ff]">{titleB}</span>
          </h1>
        </Reveal>

        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-neutral-600">{subtitle}</p>
        )}

        {children && (
          <Reveal delay={0.15}>
            <div className="mx-auto mt-9 max-w-3xl rounded-[1.75rem] border border-neutral-200 bg-white p-4 text-start shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] sm:p-5">
              {children}
            </div>
          </Reveal>
        )}

        {caption && <div className="mx-auto mt-5 max-w-3xl">{caption}</div>}
      </div>
    </section>
  );
}
