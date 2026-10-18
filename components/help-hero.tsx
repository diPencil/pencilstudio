"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export type HelpCrumb = { label: string; href?: string };

/* Shared help hero in the SuperFeliz spirit: dark stage, grid + glow orbs,
   rotating sweep, shimmer band, rising particles, giant two-line title
   with an outlined second line, and a glass console for actions. */
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
  /* Outlined second line looks sharp in Latin but renders broken
     letterforms in Arabic, so pages disable it for RTL. */
  outline?: boolean;
}) {
  const particles = React.useMemo(() => {
    const list: Array<{ id: number; left: number; top: number; size: number; duration: number; delay: number; drift: number; peak: number }> = [];
    let current = seed;
    const rand = () => {
      current = (current * 1664525 + 1013904223) >>> 0;
      return current / 0x100000000;
    };
    for (let i = 0; i < 14; i++) {
      list.push({
        id: i,
        left: rand() * 100,
        top: 20 + rand() * 70,
        size: 1.5 + rand() * 2.5,
        duration: 7 + rand() * 8,
        delay: rand() * 8,
        drift: (rand() - 0.5) * 70,
        peak: 0.3 + rand() * 0.5,
      });
    }
    return list;
  }, [seed]);

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 85% 60% at 50% 32%, black 15%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 60% at 50% 32%, black 15%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-1/2 top-[-220px] h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[#2563EB]/25 blur-[150px]"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute right-[4%] top-[30%] h-[340px] w-[340px] rounded-full bg-emerald-500/20 blur-[130px]"
        animate={{ y: [0, -40, 0], x: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-[8%] left-[6%] h-[300px] w-[300px] rounded-full bg-violet-500/20 blur-[130px]"
        animate={{ y: [0, 35, 0], x: [0, 30, 0], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-1/2 top-[-30%] h-[760px] w-[760px]"
        style={{
          x: "-50%",
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(80,140,255,0.20) 60deg, transparent 130deg, transparent 200deg, rgba(52,211,153,0.14) 260deg, transparent 330deg)",
          filter: "blur(80px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-[-20%] h-[140%] w-36 rotate-12 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent blur-2xl"
        animate={{ left: ["-12%", "106%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
        aria-hidden="true"
      />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -160], x: [0, p.drift], opacity: [0, p.peak, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}

      <div className="container-custom relative z-10 pb-16 pt-28 text-center md:pb-20 md:pt-40">
        <Reveal>
          <nav className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wide text-white/60">
            {breadcrumb.map((c, i) => (
              <React.Fragment key={`${c.label}-${i}`}>
                {i > 0 && <span aria-hidden>/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2.5">{badges}</div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className={cn("mx-auto mt-6 max-w-5xl font-black leading-[0.98] tracking-tight", size === "xl" ? "text-5xl md:text-7xl" : "text-6xl md:text-8xl")}>
            {titleA}
            <br />
            {outline ? (
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.9)", color: "transparent" }}>
                {titleB}
              </span>
            ) : (
              <span className="font-light text-white/55">{titleB}</span>
            )}
          </h1>
        </Reveal>

        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-white/55">{subtitle}</p>
        )}

        {children && (
          <Reveal delay={0.15}>
            <div className="mx-auto mt-9 max-w-3xl rounded-[1.75rem] border border-white/10 bg-black/40 p-4 text-start shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-5">
              {children}
            </div>
          </Reveal>
        )}

        {caption && <div className="mx-auto mt-5 max-w-3xl">{caption}</div>}
      </div>
    </section>
  );
}
