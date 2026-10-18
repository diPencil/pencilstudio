"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MousePointer2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import type { MethodContent } from "@/lib/method-content";
import { cn } from "@/lib/utils";

/**
 * DESIGN hero - an interactive Figma-like canvas.
 * A mini artboard with a live AR/EN direction toggle,
 * floating swatches, type chip and cursor.
 */
export function DesignHero({ content, priceLabel }: { content: MethodContent; priceLabel: string }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;
  const [mockRtl, setMockRtl] = useState(isRtl);

  return (
    <section className="relative overflow-hidden bg-white text-neutral-900">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #e2e2e2 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      />
      <div className="container-custom relative z-10 pb-14 pt-28 md:pb-20 md:pt-36">
        <Reveal>
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-neutral-400">
            <Link href="/" className="transition hover:text-neutral-900">
              {isRtl ? "الرئيسية" : "Home"}
            </Link>
            <span aria-hidden>/</span>
            <Link href="/#idea-to-product" className="transition hover:text-neutral-900">
              PENCIL Method
            </Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-900">{isRtl ? content.stepAr : content.stepEn}</span>
          </nav>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {isRtl ? content.stepAr : content.stepEn}
                </span>
                <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[11px] font-bold" dir="ltr">
                  {priceLabel} · {isRtl ? content.durationAr : content.durationEn}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {isRtl ? content.titleAr : content.titleEn}{" "}
                <span className="font-light italic text-neutral-400">{isRtl ? content.italicAr : content.italicEn}</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg font-medium text-neutral-700">
                {isRtl ? content.taglineAr : content.taglineEn}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl leading-relaxed text-neutral-500">
                {isRtl ? content.introAr : content.introEn}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@dipencil.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-neutral-700"
                >
                  {isRtl ? "اطلب تصور 7 أيام" : "Get a 7-day concept"}
                  <NextIcon size={16} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-bold transition hover:border-neutral-900"
                >
                  {isRtl ? "احسب سعرك بنفسك" : "Calculate your price"}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Canvas artboard */}
          <div className="lg:col-span-6">
            <Reveal delay={0.12}>
              <div className="relative mx-auto max-w-md">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 start-2 z-20 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-[11px] font-bold shadow-lg"
                >
                  <span className="flex gap-1" dir="ltr">
                    <span className="h-3.5 w-3.5 rounded-full bg-neutral-900" />
                    <span className="h-3.5 w-3.5 rounded-full bg-neutral-400" />
                    <span className="h-3.5 w-3.5 rounded-full border border-neutral-300 bg-white" />
                  </span>
                  {isRtl ? "ألوان بقواعد" : "Colors with rules"}
                </motion.div>

                <motion.div
                  animate={{ y: [0, 9, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute -bottom-5 end-0 z-20 flex items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-2 text-[11px] font-bold text-white shadow-xl"
                >
                  <MousePointer2 size={12} />
                  {isRtl ? "3 ضغطات للحجز" : "3 taps to book"}
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                  className="absolute top-1/3 -end-3 z-20 rounded-2xl border border-neutral-200 bg-white px-3.5 py-2.5 shadow-lg sm:-end-8"
                  dir="ltr"
                >
                  <p className="text-xl font-bold leading-none">Aa</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-neutral-400">Alexandria + Inter</p>
                </motion.div>

                {/* artboard */}
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
                    <span className="flex gap-1.5" dir="ltr">
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neutral-900" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      {isRtl ? "لوحة التصميم" : "Artboard"}
                    </span>
                    <div className="flex rounded-full border border-neutral-200 bg-neutral-50 p-0.5 text-[10px] font-bold" dir="ltr">
                      {(["AR", "EN"] as const).map((l) => {
                        const active = (l === "AR") === mockRtl;
                        return (
                          <button
                            key={l}
                            onClick={() => setMockRtl(l === "AR")}
                            className={cn(
                              "cursor-pointer rounded-full px-2.5 py-1 transition",
                              active ? "bg-neutral-900 text-white" : "text-neutral-400 hover:text-neutral-700"
                            )}
                          >
                            {l}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div dir={mockRtl ? "rtl" : "ltr"} className="space-y-3 p-5">
                    <div className="rounded-2xl bg-neutral-900 p-4 text-white">
                      <div className="h-2.5 w-2/3 rounded-full bg-white/90" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-white/40" />
                      <div className="mt-3 flex gap-2">
                        <div className="h-6 w-16 rounded-full bg-white" />
                        <div className="h-6 w-16 rounded-full border border-white/40" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[85, 60, 75].map((w, i) => (
                        <div key={i} className="rounded-xl border border-neutral-100 bg-neutral-50 p-2.5">
                          <div className="aspect-square rounded-lg bg-neutral-200" />
                          <div className="mt-2 h-1.5 rounded-full bg-neutral-300" style={{ width: `${w}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-neutral-100 p-2.5">
                      <div className="h-7 w-7 shrink-0 rounded-full bg-neutral-900" />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-3/4 rounded-full bg-neutral-200" />
                        <div className="h-1.5 w-1/2 rounded-full bg-neutral-100" />
                      </div>
                      <div className="h-6 w-14 shrink-0 rounded-full bg-neutral-900" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-3">
            {content.stats.map((s) => (
              <div key={s.labelEn} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <div className="text-xl font-bold md:text-2xl" dir="ltr">
                  {isRtl ? s.valueAr : s.valueEn}
                </div>
                <div className="mt-1 text-[11px] font-semibold leading-snug text-neutral-500">
                  {isRtl ? s.labelAr : s.labelEn}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
