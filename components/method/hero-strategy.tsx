"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BadgeCheck, Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import type { MethodContent } from "@/lib/method-content";

/**
 * STRATEGY hero - light editorial, "the signed decision".
 * A direction-doc mockup with a stamp, over a sketch sheet.
 */
export function StrategyHero({ content, priceLabel }: { content: MethodContent; priceLabel: string }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const rows = isRtl
    ? [
        { t: "صفحة التموضع", ok: true },
        { t: "بيت الرسائل، عربي + إنجليزي", ok: true },
        { t: "خريطة الموقع، 12 صفحة", ok: true },
        { t: "قائمة «لن نفعل»، 9 بنود", ok: false },
      ]
    : [
        { t: "Positioning one-pager", ok: true },
        { t: "Message house, AR + EN", ok: true },
        { t: "Sitemap, 12 pages", ok: true },
        { t: "“Won't-do” list, 9 items", ok: false },
      ];

  return (
    <section className="grain-texture relative overflow-hidden bg-neutral-50 text-neutral-900">
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
          <div className="lg:col-span-7">
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
              <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {isRtl ? content.titleAr : content.titleEn}{" "}
                <span className="font-light italic text-neutral-400">{isRtl ? content.italicAr : content.italicEn}</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg font-medium text-neutral-700">
                {isRtl ? content.taglineAr : content.taglineEn}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl leading-relaxed text-neutral-500">
                {isRtl ? content.introAr : content.introEn}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@dipencil.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-neutral-700"
                >
                  {isRtl ? "احجز مكالمة 20 دقيقة" : "Book a 20-min call"}
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

          {/* Direction doc mockup */}
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="relative mx-auto max-w-md">
                {/* sketch sheet behind */}
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 rotate-[5deg] rounded-3xl border border-neutral-200 bg-neutral-200/60 rtl:-rotate-[5deg]"
                >
                  <div className="space-y-2.5 p-6 opacity-60">
                    {[90, 70, 80, 55, 75].map((w, i) => (
                      <div key={i} className="h-2.5 rounded-full bg-neutral-300" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ rotate: isRtl ? 2 : -2, y: 24, opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] md:p-7"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-bold">{isRtl ? "وثيقة الاتجاه" : "Direction doc"}</p>
                    <span className="rounded-full bg-neutral-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      v1.0
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {rows.map((r, i) => (
                      <motion.div
                        key={r.t}
                        initial={{ opacity: 0, x: isRtl ? 16 : -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.12 }}
                        className="flex items-center gap-2.5 rounded-xl border border-neutral-100 bg-neutral-50 px-3.5 py-2.5 text-[13px] font-semibold"
                      >
                        <span
                          className={
                            r.ok
                              ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white"
                              : "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-500"
                          }
                        >
                          {r.ok ? <Check size={11} strokeWidth={3.5} /> : <X size={11} strokeWidth={3.5} />}
                        </span>
                        {r.t}
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-end justify-between border-t border-dashed border-neutral-200 pt-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        {isRtl ? "توقيع صاحب القرار" : "Decision-maker signature"}
                      </p>
                      <p className="mt-1 font-light italic text-neutral-700">
                        {isRtl ? "اعتماد المؤسس" : "Approved by the founder"}
                      </p>
                    </div>
                  </div>

                  {/* stamp */}
                  <motion.div
                    initial={{ scale: 2.2, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: isRtl ? -12 : 12 }}
                    transition={{ delay: 1, type: "spring", stiffness: 260, damping: 16 }}
                    className="absolute -bottom-5 end-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-double border-neutral-900 bg-white/80 text-center backdrop-blur-sm"
                  >
                    <span className="text-[10px] font-bold uppercase leading-tight tracking-wider">
                      {isRtl ? "مُعتمد" : "Signed"}
                    </span>
                  </motion.div>
                </motion.div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[isRtl ? content.heroFloat1Ar : content.heroFloat1En, isRtl ? content.heroFloat2Ar : content.heroFloat2En].map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-[11px] font-bold shadow-sm"
                    >
                      <BadgeCheck size={13} />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-3">
            {content.stats.map((s) => (
              <div key={s.labelEn} className="rounded-2xl border border-neutral-200 bg-white p-4">
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
