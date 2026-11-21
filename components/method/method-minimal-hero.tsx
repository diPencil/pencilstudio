"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilButton } from "@/components/ui/pencil-button";
import type { MethodContent } from "@/lib/method/method-content";
import { cn } from "@/lib/utils";

/**
 * Minimalist Hero matching reference Image 2 (mnmlst. "less is more."):
 * - Strategy: PENCIL Logo Red circle (#dd3126)
 * - Design: PENCIL Logo Green circle (#53ab47)
 * - Build: PENCIL Logo Royal Blue circle (#2057FF)
 * - Model: Grand scale breaking out above and below the solid color circle.
 */
export function MethodMinimalHero({
  content,
}: {
  content: MethodContent;
  priceLabel?: string;
}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  // Exact PENCIL Logo brand colors requested by user:
  // - strategy-direction: Red (#dd3126)
  // - design-experience: Green (#53ab47)
  // - build-launch: Royal Blue (#2057FF)
  const circleBg =
    content.key === "strategy"
      ? "bg-[#dd3126]" // PENCIL logo red
      : content.key === "design"
        ? "bg-[#53ab47]" // PENCIL logo green
        : "bg-[#2057FF]"; // PENCIL logo royal blue

  const circleShadow =
    content.key === "strategy"
      ? "shadow-[#dd3126]/30"
      : content.key === "design"
        ? "shadow-[#53ab47]/30"
        : "shadow-[#2057FF]/30";

  // Main bold display headline per phase
  const bigWordsEn =
    content.key === "strategy"
      ? ["strategy &", "direction."]
      : content.key === "design"
        ? ["design &", "experience."]
        : ["build &", "deliver."];

  const bigWordsAr =
    content.key === "strategy"
      ? ["الاستراتيجية", "والاتجاه."]
      : content.key === "design"
        ? ["التصميم", "والتجربة."]
        : ["البناء", "والتسليم."];

  const imageSrc = `/digital-product/hero-${content.slug}.png`;

  return (
    <section className="relative overflow-hidden bg-white text-neutral-950 min-h-screen lg:h-screen flex flex-col justify-end pt-16 sm:pt-20 pb-0 border-b border-neutral-100">
      <div className="container-custom relative z-10 w-full flex-1 flex flex-col justify-end">
        {/* 3-Column / Split Layout Matching Reference - Exact Full Screen Height */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6 xl:gap-8 w-full flex-1 pt-4 sm:pt-6 pb-0">
          {/* ============================================================ */}
          {/* COLUMN 1: Description, CTA & Quick Info (Col 4 - Centered)   */}
          {/* ============================================================ */}
          <div className="order-3 lg:order-1 lg:col-span-4 flex flex-col justify-center py-4 z-10 self-center">
            <div>
              <Reveal delay={0.05}>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-neutral-50 px-3.5 py-1 text-xs font-mono font-bold text-neutral-700 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-[#2057FF]" />
                  <span>{isRtl ? content.stepAr : content.stepEn}</span>
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 text-xs sm:text-sm font-light italic text-neutral-500 leading-relaxed">
                  {isRtl ? content.taglineAr : content.taglineEn}
                </p>
                <p className="mt-2.5 text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-600 font-medium max-w-sm">
                  {isRtl ? content.introAr : content.introEn}
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <PencilButton
                    href="https://wa.me/201003778273"
                    variant="primary"
                    size="default"
                    hoverLabel={isRtl ? "احجز استشارة ←" : "Book Sprint →"}
                  >
                    <span>{isRtl ? "احجز استشارة مجانية" : "Book Consultation"}</span>
                  </PencilButton>

                  <a
                    href="#deliverables"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-neutral-900 hover:text-[#2057FF] transition-colors py-2 px-1 border-b-2 border-neutral-900 hover:border-[#2057FF]"
                  >
                    <span>{isRtl ? "استكشف المخرجات" : "Read More"}</span>
                    <NextIcon size={14} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: Center Cutout Graphic with Large Brand Circle     */}
          {/* Refined slightly smaller proportion with breathing room      */}
          {/* ============================================================ */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex items-end justify-center relative overflow-visible pb-0 self-end">
            <Reveal delay={0.12} className="relative w-full flex items-end justify-center overflow-visible">
              <div className="relative flex items-end justify-center overflow-visible">
                {/* Solid Brand Circle Background */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-[44%] -translate-y-1/2 size-[260px] sm:size-[330px] md:size-[380px] lg:size-[420px] xl:size-[470px] rounded-full shadow-2xl transition-all duration-500 shrink-0 pointer-events-none -z-10",
                    circleBg,
                    circleShadow
                  )}
                />

                {/* Model Graphic - Refined scale, resting flush on the bottom edge */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  className="relative w-[310px] sm:w-[400px] md:w-[460px] lg:w-[530px] xl:w-[590px] 2xl:w-[630px] aspect-[1086/1156] flex items-end justify-center pointer-events-none overflow-visible"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={imageSrc}
                      alt={isRtl ? content.titleAr : content.titleEn}
                      fill
                      priority
                      className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.25)]"
                      sizes="(max-width: 640px) 310px, (max-width: 1024px) 530px, 630px"
                    />
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: Giant Heavy Statement Typography (Col 4 - Centered)*/}
          {/* ============================================================ */}
          <div className="order-2 lg:order-3 lg:col-span-4 flex flex-col justify-center py-4 text-start z-10 self-center">
            <Reveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[76px] 2xl:text-[84px] font-black tracking-tight leading-[0.92] text-neutral-950 select-none">
                {(isRtl ? bigWordsAr : bigWordsEn).map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <div className="mt-5 flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#2057FF]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  {isRtl ? "منهجية بينسل التنفيذية" : "PENCIL Production Method"}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
