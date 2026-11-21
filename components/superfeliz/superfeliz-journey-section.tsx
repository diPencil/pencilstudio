"use client";

import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/shared/motion/reveal";
import Image from "next/image";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { felizJourney } from "@/lib/feliz/feliz";

const MODEL_CONFIGS = [
  {
    slug: "oper",
    icon: "/meet-feliz/oper.png",
    accent: "#10B981",
    accentBar: "bg-[#10B981]",
    iconBorder: "border-emerald-200/80 ring-2 ring-emerald-500/10",
    checkBg: "bg-emerald-100/80 text-emerald-700",
    checkColor: "text-emerald-700",
    subRoleEn: "The Business Brain",
    subRoleAr: "العقل التجاري",
    badge: "bg-neutral-900 text-white",
  },
  {
    slug: "tech",
    icon: "/meet-feliz/tech.png",
    accent: "#EF4444",
    accentBar: "bg-[#EF4444]",
    iconBorder: "border-red-200/80 ring-2 ring-red-500/10",
    checkBg: "bg-red-100/80 text-red-700",
    checkColor: "text-red-700",
    subRoleEn: "The Technical Brain",
    subRoleAr: "العقل التقني",
    badge: "bg-neutral-900 text-white",
  },
  {
    slug: "gen",
    icon: "/meet-feliz/gen.png",
    accent: "#EAB308",
    accentBar: "bg-[#EAB308]",
    iconBorder: "border-amber-200/80 ring-2 ring-amber-500/10",
    checkBg: "bg-amber-100/80 text-amber-700",
    checkColor: "text-amber-700",
    subRoleEn: "The Creation Engine",
    subRoleAr: "محرك الإبداع",
    badge: "bg-neutral-900 text-white",
  },
  {
    slug: "superfeliz",
    icon: "/meet-feliz/super.png",
    accent: "#2057FF",
    accentBar: "bg-[#2057FF]",
    iconBorder: "border-blue-200/80 ring-2 ring-[#2057FF]/10",
    checkBg: "bg-blue-100/80 text-[#2057FF]",
    checkColor: "text-[#2057FF]",
    subRoleEn: "The Autonomous Flagship",
    subRoleAr: "الذكاء الشامل والمستقل",
    badge: "bg-neutral-900 text-white",
  },
];

export function SuperfelizJourneySection() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const NextArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative border-b border-neutral-200/80 bg-white py-20 md:py-28 overflow-hidden">
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-aura-1 absolute -top-40 right-1/4 h-[420px] w-[420px] rounded-full bg-[#2057FF]/4 blur-[160px]" />
        <div className="animate-aura-2 absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-[#10B981]/4 blur-[160px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* ============================================================ */}
        {/* SECTION HEADER (PENCIL Signature Style)                      */}
        {/* ============================================================ */}
        <div className="relative mb-14 md:mb-18">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-[#2057FF]">
                  <span className="size-1.5 rounded-full bg-[#2057FF] animate-pulse" />
                  <span>{isRtl ? "رحلة فكرة واحدة // مسار متصل" : "ONE IDEA'S JOURNEY // CONTINUOUS FLOW"}</span>
                </div>

                <h2 className="mt-4 text-3xl font-normal tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.14]">
                  {isRtl ? (
                    <>
                      كيف تركب الأربعة
                      <span className="block font-light italic text-neutral-500">
                        معاً في رحلة واحدة.
                      </span>
                    </>
                  ) : (
                    <>
                      How the four fit
                      <span className="block font-light italic text-neutral-500">
                        together in one journey.
                      </span>
                    </>
                  )}
                </h2>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.08}>
                <p className="text-xs sm:text-[13px] md:text-sm leading-[1.7] text-neutral-600">
                  {isRtl
                    ? "تخيل أنك تدخل بفكرة شركة جديدة من الصفر. هكذا يتناوب كل عقل اختصاصي بتسليم المخرجات للآخر لينقلك من مجرد سؤال مبهم إلى شركة حية تعمل وتنفذ."
                    : "Imagine walking in with a new company idea. Here is how each model takes the baton and moves you seamlessly from question to an operating company."}
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4 CARDS (With Model Icons & Brand Soul)                      */}
        {/* ============================================================ */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {felizJourney.map((step, i) => {
            const config = MODEL_CONFIGS[i] || MODEL_CONFIGS[0];

            return (
              <Reveal key={step.modelEn} delay={0.07 * i} className="h-full">
                <div className="group relative flex flex-col justify-between h-full rounded-[2rem] border border-neutral-200/90 bg-white p-6 sm:p-7 shadow-[0_12px_36px_-12px_rgba(15,23,42,0.06),0_4px_12px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_24px_50px_-15px_rgba(32,87,255,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Model Accent Top Line */}
                  <div
                    className={cn(
                      "absolute top-0 inset-x-0 h-1.5 transition-all duration-300 group-hover:h-2",
                      config.accentBar
                    )}
                  />

                  {/* Card Body */}
                  <div>
                    {/* Top Row: 01, 02.. + Dark Motto Pill */}
                    <div className="flex items-center justify-between pt-1">
                      <span
                        className="font-mono text-3xl sm:text-4xl font-black text-neutral-200 group-hover:text-neutral-900 transition-colors duration-300"
                        dir="ltr"
                      >
                        0{i + 1}
                      </span>
                      <span className="rounded-full bg-neutral-900 px-3.5 py-1 text-[11px] font-bold text-white tracking-wide shadow-2xs">
                        {isRtl ? step.mottoAr : step.mottoEn}
                      </span>
                    </div>

                    {/* Model Info: Icon + Name + Subtitle */}
                    <div className="mt-5 flex items-center gap-3">
                      <div
                        className={cn(
                          "relative size-10 rounded-2xl bg-white border shadow-2xs p-1 shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110",
                          config.iconBorder
                        )}
                      >
                        <Image
                          src={config.icon}
                          alt={step.modelEn}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-black text-lg sm:text-xl text-neutral-950 tracking-tight leading-tight truncate">
                          {isRtl ? step.modelAr : step.modelEn}
                        </h3>
                        <span className="text-[11px] font-mono font-semibold text-neutral-400 block mt-0.5 truncate">
                          {isRtl ? config.subRoleAr : config.subRoleEn}
                        </span>
                      </div>
                    </div>

                    {/* Stage Prompt / Mission Question */}
                    <p className="mt-4 text-sm font-semibold text-neutral-700 leading-snug">
                      {isRtl ? step.descAr : step.descEn}
                    </p>

                    {/* Divider */}
                    <div className="my-4 border-t border-neutral-100" />

                    {/* Checkpoints List */}
                    <ul className="space-y-2.5">
                      {(isRtl ? step.pointsAr : step.pointsEn).map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed text-neutral-600"
                        >
                          <span
                            className={cn(
                              "size-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-2xs",
                              config.checkBg
                            )}
                          >
                            <Check size={11} strokeWidth={3} className={config.checkColor} />
                          </span>
                          <span className="font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom: Subtle Step Transition */}
                  <div className="mt-6 pt-3 border-t border-neutral-100/80 flex items-center justify-between text-[11px] font-mono font-bold text-neutral-400">
                    <span>
                      {isRtl ? `المرحلة 0${i + 1} من 04` : `PHASE 0${i + 1} OF 04`}
                    </span>
                    {i < 3 && (
                      <span className="flex items-center gap-1 text-neutral-400 group-hover:text-[#2057FF] transition-colors">
                        <NextArrow size={14} className="transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
