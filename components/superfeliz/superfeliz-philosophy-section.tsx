"use client";

import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/shared/motion/reveal";
import { LazyDotLottie } from "@/components/shared/media/lazy-dot-lottie";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PRO_CROWN_LOTTIE =
  "https://lottie.host/4531a6de-9d03-4730-a036-9f3eb7aa216d/hbQIg95we5.lottie";

function ProCrownLottie({
  size = 28,
  width,
  height,
}: {
  size?: number;
  width?: number;
  height?: number;
}) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0 overflow-hidden"
      style={{ width: width ?? size, height: height ?? size }}
    >
      <LazyDotLottie
        src={PRO_CROWN_LOTTIE}
        autoplay
        loop
        className="h-full w-full"
        aria-hidden="true"
      />
    </span>
  );
}

export function SuperfelizPhilosophySection() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <section className="relative py-20 md:py-28 bg-[#FAFAFA] border-b border-neutral-200/80 overflow-hidden">
      {/* Subtle ambient aura */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-aura-1 absolute -top-32 right-1/4 h-[440px] w-[440px] rounded-full bg-[#2057FF]/5 blur-[160px]" />
        <div className="animate-aura-2 absolute bottom-0 left-1/4 h-[440px] w-[440px] rounded-full bg-[#10B981]/5 blur-[160px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Title, Avatar Stack & Overlapping Cards (7 Cols)*/}
          {/* ============================================================ */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* 1. Eyebrow */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-[#2057FF]">
                <span className="size-1.5 rounded-full bg-[#2057FF] animate-pulse" />
                <span>{isRtl ? "الفلسفة والقدرات // 2026" : "THE PHILOSOPHY // 2026"}</span>
              </div>
            </Reveal>

            {/* 2. Main Heading + Feliz Avatars Stack (Reference Style) */}
            <Reveal delay={0.05}>
              <div className="mt-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                    {isRtl ? (
                      <>
                        المجاني يعطي قيمة.{" "}
                        <span className="font-light italic text-neutral-500">
                          وPRO يفتح القدرة الأكبر.
                        </span>
                      </>
                    ) : (
                      <>
                        Free gives value.{" "}
                        <span className="font-light italic text-neutral-500">
                          PRO unlocks more.
                        </span>
                      </>
                    )}
                  </h2>

                  {/* Overlapping Feliz Models Bloom Avatars Pill */}
                  <div
                    className="inline-flex items-center gap-1 rounded-full border border-neutral-200/90 bg-white px-2 py-1 shadow-2xs"
                    title="Feliz AI Family"
                  >
                    <div className="flex -space-x-1.5 rtl:space-x-reverse items-center">
                      <div className="relative size-6 rounded-full ring-2 ring-white overflow-hidden bg-white shadow-2xs">
                        <Image
                          src="/meet-feliz/oper.png"
                          alt="Oper"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div className="relative size-6 rounded-full ring-2 ring-white overflow-hidden bg-white shadow-2xs">
                        <Image
                          src="/meet-feliz/tech.png"
                          alt="Tech"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div className="relative size-6 rounded-full ring-2 ring-white overflow-hidden bg-white shadow-2xs">
                        <Image
                          src="/meet-feliz/gen.png"
                          alt="Gen"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div className="relative size-6 rounded-full ring-2 ring-white overflow-hidden bg-white shadow-2xs">
                        <Image
                          src="/meet-feliz/super.png"
                          alt="Super"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-neutral-500 px-1">
                      4 AI
                    </span>
                  </div>
                </div>

                {/* Description under title */}
                <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600 font-medium max-w-xl">
                  {isRtl ? (
                    <>
                      فيليز يساعدك في المهمة.{" "}
                      <span className="font-light italic text-[#2057FF]">
                        سوبر فيليز يفهم الرسالة كاملة.
                      </span>
                    </>
                  ) : (
                    <>
                      Feliz helps you with the task.{" "}
                      <span className="font-light italic text-[#2057FF]">
                        SuperFeliz understands the whole mission.
                      </span>
                    </>
                  )}
                </p>
              </div>
            </Reveal>

            {/* 3. Cards Row with Circular Blue Arrow Button matching Reference */}
            <div className="mt-10 sm:mt-12 flex items-start gap-3 sm:gap-4">
              {/* Circular Blue Action Button (Reference Style) */}
              <Reveal delay={0.08}>
                <Link
                  href="/askfeliz"
                  className="size-10 sm:size-11 rounded-full bg-[#2057FF] text-white flex items-center justify-center hover:bg-[#1a46cc] transition-all duration-300 hover:scale-105 shadow-md shadow-[#2057FF]/25 shrink-0 mt-2"
                  aria-label={isRtl ? "جرّب فيليز" : "Explore Feliz"}
                  title={isRtl ? "جرّب فيليز" : "Explore Feliz"}
                >
                  <ArrowDownRight
                    size={20}
                    className={cn("transition-transform", isRtl && "-scale-x-100")}
                  />
                </Link>
              </Reveal>

              {/* The Two Cards: Blue Card (Free) & White Card (PRO) */}
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 flex-1">
                {/* CARD 1: Solid Royal Blue Card (FREE: Oper + Tech) */}
                <Reveal delay={0.1} className="h-full">
                  <div className="group relative h-full rounded-[1.75rem] bg-[#2057FF] p-6 sm:p-7 text-white shadow-[0_20px_45px_-12px_rgba(32,87,255,0.35)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                    <div>
                      {/* Top Pill */}
                      <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                        {isRtl ? "مجاني // Free" : "FREE TIER"}
                      </span>

                      {/* Title */}
                      <h3 className="mt-5 text-xl sm:text-2xl font-black tracking-tight text-white">
                        {isRtl ? "أوبر + تك" : "Oper + Tech"}
                      </h3>

                      {/* Body */}
                      <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-white/85 font-medium">
                        {isRtl
                          ? "تدخل وتحلل فكرتك وتأخذ توجيهاً حقيقياً تجارياً وتقنياً. المجاني هنا ليس عرضاً ضعيفاً، بل قيمة فعلية تدفعك للأمام."
                          : "Walk in, analyze your idea, and take real commercial and technical guidance. Free here is not a weak demo, it is real value."}
                      </p>
                    </div>

                    {/* Bottom Micro Info */}
                    <div className="mt-6 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/70">
                      <span>{isRtl ? "2 عقول مجانية" : "2 Free Models"}</span>
                      <span className="text-white font-bold">100% Free</span>
                    </div>
                  </div>
                </Reveal>

                {/* CARD 2: White Card (PRO: Gen + SuperFeliz with Lottie Crown) */}
                <Reveal delay={0.14} className="h-full">
                  <div className="group relative h-full rounded-[1.75rem] bg-white border border-neutral-200/90 p-6 sm:p-7 text-neutral-900 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.08)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                    <div>
                      {/* Top PRO Badge with Crown Lottie */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-2xs">
                          <span>PRO ACCESS</span>
                        </span>
                        <div className="scale-110" title="PRO Tier">
                          <ProCrownLottie size={30} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 text-xl sm:text-2xl font-black tracking-tight text-neutral-950">
                        {isRtl ? "جين + سوبر فيليز" : "Gen + SuperFeliz"}
                      </h3>

                      {/* Body */}
                      <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-neutral-600 font-medium">
                        {isRtl
                          ? "هنا تنتقل من النصيحة إلى الإنتاج والذكاء المتقدم والعمل المتكامل من البداية إلى النهاية بدون حدود."
                          : "Here you move from advice to production, advanced intelligence, and end-to-end work."}
                      </p>
                    </div>

                    {/* Bottom Micro Info */}
                    <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>{isRtl ? "الإنتاج والأتمتة" : "Production & Auto"}</span>
                      <span className="font-bold text-[#2057FF]">PRO Tier</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: pro-unlocks-more.png (Visual Mockup, 5 Cols)  */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.15}>
              <div className="relative w-full aspect-[4/3.5] sm:aspect-[4/3] lg:aspect-[1.12/1] rounded-3xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/meet-feliz/pro-unlocks-more.png"
                  alt={isRtl ? "قدرات سوبر فيليز الاحترافية" : "SuperFeliz PRO Unlocks More"}
                  fill
                  className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
