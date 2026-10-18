"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import type { MethodContent } from "@/lib/method-content";

/**
 * BUILD hero - dark "launch console".
 * Animated PageSpeed ring, deploy log, live status.
 */
export function BuildHero({ content, priceLabel }: { content: MethodContent; priceLabel: string }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const R = 44;
  const C = 2 * Math.PI * R;

  const logs = isRtl
    ? [
        "$ pencil deploy --prod",
        "✓ 18 صفحة · عربي + إنجليزي في 42 ثانية",
        "✓ سرعة 94 · على الجوال",
        "✓ شهادة + نسخ + مراقبة مفعّلة",
        "→ مباشر: الثلاثاء 09:41",
      ]
    : [
        "$ pencil deploy --prod",
        "✓ 18 pages · AR + EN in 42s",
        "✓ PageSpeed 94 · mobile",
        "✓ SSL + backups + monitoring on",
        "→ live tuesday 09:41",
      ];

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
      <div className="container-custom relative z-10 pb-14 pt-28 md:pb-20 md:pt-36">
        <Reveal>
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-white/50">
            <Link href="/" className="transition hover:text-white">
              {isRtl ? "الرئيسية" : "Home"}
            </Link>
            <span aria-hidden>/</span>
            <Link href="/#idea-to-product" className="transition hover:text-white">
              PENCIL Method
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white">{isRtl ? content.stepAr : content.stepEn}</span>
          </nav>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                  {isRtl ? content.stepAr : content.stepEn}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  {isRtl ? "جاهز للإطلاق" : "Ready to ship"}
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold backdrop-blur-md" dir="ltr">
                  {priceLabel} · {isRtl ? content.durationAr : content.durationEn}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {isRtl ? content.titleAr : content.titleEn}{" "}
                <span className="font-light italic text-white/60">{isRtl ? content.italicAr : content.italicEn}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg font-light italic text-white/85">
                {isRtl ? content.taglineAr : content.taglineEn}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl leading-relaxed text-white/65">
                {isRtl ? content.introAr : content.introEn}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@dipencil.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
                >
                  {isRtl ? "اطلب عرضا ثابتا" : "Get a fixed quote"}
                  <NextIcon size={16} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  {isRtl ? "احسب سعرك بنفسك" : "Calculate your price"}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Console */}
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/60 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                  <span className="flex gap-1.5" dir="ltr">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white/50" dir="ltr">
                    pencil: deploy
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-400/10 px-2.5 py-1 font-mono text-[10px] font-bold text-green-400">
                    ● LIVE
                  </span>
                </div>

                <div className="flex items-center gap-5 p-5 md:p-6">
                  {/* speed ring */}
                  <div className="relative h-28 w-28 shrink-0" dir="ltr">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="9" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r={R}
                        fill="none"
                        stroke="#fff"
                        strokeWidth="9"
                        strokeLinecap="round"
                        strokeDasharray={C}
                        initial={{ strokeDashoffset: C }}
                        whileInView={{ strokeDashoffset: C * (1 - 0.94) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.4 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold" dir="ltr">94</span>
                      <span className="font-mono text-[9px] font-bold uppercase text-white/50">speed</span>
                    </div>
                  </div>
                  <div className="grid flex-1 grid-cols-1 gap-2">
                    {[
                      { v: isRtl ? "1.1 ث" : "1.1s", l: isRtl ? "تحميل الجوال" : "mobile load" },
                      { v: "99.9%", l: isRtl ? "استمرارية" : "uptime" },
                      { v: isRtl ? "30 يوم" : "30 days", l: isRtl ? "إصلاح بعد الإطلاق" : "post-launch fixes" },
                    ].map((m, i) => (
                      <motion.div
                        key={m.l}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.12 }}
                        className="flex items-baseline justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2"
                      >
                        <span className="text-sm font-bold" dir="ltr">{m.v}</span>
                        <span className="text-[11px] font-semibold text-white/55">{m.l}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-white/10 p-5 font-mono text-[11.5px] leading-relaxed md:px-6" dir="ltr">
                  {logs.map((line, i) => (
                    <motion.p
                      key={line}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.28 }}
                      className={i === 0 ? "text-white/45" : i === logs.length - 1 ? "font-bold text-green-400" : "text-white/80"}
                    >
                      {line}
                    </motion.p>
                  ))}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="inline-block h-3.5 w-2 bg-white/80"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3">
            {content.stats.map((s) => (
              <div key={s.labelEn} className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 backdrop-blur-md">
                <div className="font-mono text-lg font-bold md:text-2xl" dir="ltr">
                  {isRtl ? s.valueAr : s.valueEn}
                </div>
                <div className="mt-1 text-[11px] font-semibold leading-snug text-white/60">
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
