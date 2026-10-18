"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  Check,
  Layers,
  Plus,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { MethodHeading } from "@/components/method/method-heading";
import { useLanguage } from "@/components/language-context";
import { PricingCalculator } from "@/components/method/pricing-calculator";
import { StrategyHero } from "@/components/method/hero-strategy";
import { DesignHero } from "@/components/method/hero-design";
import { BuildHero } from "@/components/method/hero-build";
import { METHOD_CONTENT, METHOD_ORDER, type MethodContent } from "@/lib/method-content";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

export function MethodPage({ content }: { content: MethodContent }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;
  const [currency, setCurrency] = useState<"USD" | "EGP">("USD");
  const [tIndex, setTIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const others = METHOD_ORDER.filter((k) => k !== content.key).map((k) => METHOD_CONTENT[k]);
  const t = content.testimonials[tIndex % content.testimonials.length];

  const money = (usd: number) =>
    currency === "USD"
      ? `$${new Intl.NumberFormat("en-US").format(usd)}`
      : `${new Intl.NumberFormat("en-US").format(Math.round(usd * 50.5))} ${isRtl ? "ج.م" : "EGP"}`;

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Same header as home: transparent over the hero, white bar on scroll.
          Light heroes get dark icons from the first pixel so they stay visible. */}
      <Header light={content.key !== "build"} />

      {/* ============ 1. HERO - a different concept per page ============ */}
      {content.key === "strategy" ? (
        <StrategyHero content={content} priceLabel={`${money(content.priceFromUsd)}+`} />
      ) : content.key === "design" ? (
        <DesignHero content={content} priceLabel={`${money(content.priceFromUsd)}+`} />
      ) : (
        <BuildHero content={content} priceLabel={`${money(content.priceFromUsd)}+`} />
      )}

      {/* ============ 2. STACK + FITS STRIP ============ */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-custom flex flex-col gap-4 pb-7 pt-8 md:flex-row md:items-center md:justify-between md:gap-6 md:pb-9 md:pt-10">
          <div className="flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible lg:pb-0">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-white">
              <Layers size={13} />
              {isRtl ? "الأدوات" : "Stack"}
            </span>
            {content.tools.map((tool) => (
              <span
                key={tool}
                className="shrink-0 whitespace-nowrap rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-[13px] font-semibold text-neutral-700"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2 border-t border-neutral-100 pt-4 text-[13px] leading-relaxed text-neutral-500 md:border-0 md:pt-0">
            <Sparkles size={14} className="shrink-0" />
            <span className="font-medium">
              {isRtl ? "يناسب: " : "Fits: "}
              {isRtl ? content.fitsAr : content.fitsEn}
            </span>
          </div>
        </div>
      </section>

      {/* ============ 3. PAINS ============ */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <MethodHeading
            badge={isRtl ? "بصراحة" : "Honestly"}
            title={isRtl ? content.painsTitleAr : content.painsTitleEn}
            accent={isRtl ? content.painsAccentAr : content.painsAccentEn}
            description={isRtl ? content.painsSubAr : content.painsSubEn}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {content.pains.map((p, i) => (
              <Reveal key={p.tEn} delay={0.04 * i}>
                <div className="group h-full rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white">
                  <div className="mb-4 text-sm font-bold text-neutral-300 transition group-hover:text-white/40" dir="ltr">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold leading-snug">{isRtl ? p.tAr : p.tEn}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 transition group-hover:text-white/75">
                    {isRtl ? p.dAr : p.dEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. PROCESS (dark) ============ */}
      <section className="bg-neutral-900 py-16 text-white md:py-24">
        <div className="container-custom">
          <MethodHeading
            dark
            badge={isRtl ? "الطريقة" : "The process"}
            title={isRtl ? content.processTitleAr : content.processTitleEn}
            accent={isRtl ? content.processAccentAr : content.processAccentEn}
            description={isRtl ? content.processSubAr : content.processSubEn}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.steps.map((s, i) => (
              <Reveal key={s.tEn} delay={0.06 * i}>
                <div className="relative h-full rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-4xl font-bold text-white/15" dir="ltr">
                      0{i + 1}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-white/80">
                      <CalendarClock size={12} />
                      {isRtl ? s.timeAr : s.timeEn}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug">{isRtl ? s.tAr : s.tEn}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {isRtl ? s.dAr : s.dEn}
                  </p>
                  {i < content.steps.length - 1 && (
                    <NextIcon
                      size={18}
                      className="absolute top-1/2 -end-3 hidden -translate-y-1/2 rounded-full border border-white/15 bg-neutral-900 p-0.5 text-white/60 lg:block"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. STORY + DELIVERABLES ============ */}
      <section className="py-16 md:py-24">
        <div className="container-custom grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <MethodHeading
              badge={isRtl ? "المخرجات" : "Deliverables"}
              title={isRtl ? content.splitTitleAr : content.splitTitleEn}
              accent={isRtl ? content.splitAccentAr : content.splitAccentEn}
            />
            {(isRtl ? content.splitBodyAr : content.splitBodyEn).map((par, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="mt-6 leading-loose text-neutral-600">{par}</p>
              </Reveal>
            ))}
            <div className="mt-8 space-y-3">
              {(isRtl ? content.deliverablesAr : content.deliverablesEn).map((d, i) => (
                <Reveal key={d} delay={0.03 * i}>
                  <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white"
                      dir="ltr"
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-neutral-800">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={content.splitImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-5 start-5 end-5">
                    <p className="text-sm font-semibold leading-snug text-white">
                      {isRtl ? content.taglineAr : content.taglineEn}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 6. GALLERY - infinite marquee, never stops ============ */}
      <section className="overflow-hidden border-y border-neutral-200 bg-white py-16 md:py-24">
        <div className="container-custom">
            <MethodHeading
              badge={isRtl ? "من الشغل" : "Field notes"}
              title={isRtl ? content.galleryTitleAr : content.galleryTitleEn}
              accent={isRtl ? content.galleryAccentAr : content.galleryAccentEn}
            />
        </div>
        <div className="mt-10 overflow-hidden" dir="ltr">
          <div className={cn("flex w-max gap-4", isRtl ? "gallery-marquee-rtl" : "gallery-marquee-ltr")}>
            {[...content.gallery, ...content.gallery].map((g, i) => (
              <figure
                key={g.src + i}
                className="w-[78vw] shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 sm:w-[380px] lg:w-[420px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={isRtl ? g.capAr : g.capEn}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 78vw, 420px"
                  />
                </div>
                <figcaption dir={isRtl ? "rtl" : "ltr"} className="flex items-start gap-2.5 p-4">
                  <span className="text-xs font-bold text-neutral-300" dir="ltr">
                    {String((i % content.gallery.length) + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-semibold leading-relaxed text-neutral-600">
                    {isRtl ? g.capAr : g.capEn}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. COMPARE TABLE ============ */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <MethodHeading
            badge={isRtl ? "مقارنة أسعار" : "Price & value"}
            title={isRtl ? content.compareTitleAr : content.compareTitleEn}
            accent={isRtl ? content.compareAccentAr : content.compareAccentEn}
            description={isRtl ? content.compareSubAr : content.compareSubEn}
          />

          <Reveal delay={0.08}>
            <div className="mt-10 hidden overflow-hidden rounded-3xl border border-neutral-200 bg-white md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50 text-xs uppercase tracking-wider text-neutral-500">
                    <th className="p-5 text-start font-bold"></th>
                    <th className="p-5 text-start font-bold text-neutral-900">
                      <span className="inline-flex items-center gap-1.5">
                        <BadgeCheck size={15} /> PENCIL
                      </span>
                    </th>
                    <th className="p-5 text-start font-bold">{isRtl ? "المعتاد في السوق" : "Typical market"}</th>
                  </tr>
                </thead>
                <tbody>
                  {content.compareRows.map((r, i) => (
                    <tr key={r.labelEn} className={cn("border-b border-neutral-100 last:border-0", i % 2 === 1 && "bg-neutral-50/60")}>
                      <td className="p-5 font-bold">{isRtl ? r.labelAr : r.labelEn}</td>
                      <td className="p-5 font-semibold">
                        <span className="inline-flex items-start gap-2">
                          <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0" />
                          {isRtl ? r.usAr : r.usEn}
                        </span>
                      </td>
                      <td className="p-5 text-neutral-500">
                        <span className="inline-flex items-start gap-2">
                          <X size={15} className="mt-0.5 shrink-0 text-neutral-300" />
                          {isRtl ? r.themAr : r.themEn}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <div className="mt-8 space-y-3 md:hidden">
            {content.compareRows.map((r) => (
              <div key={r.labelEn} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">{isRtl ? r.labelAr : r.labelEn}</p>
                <p className="mt-2.5 flex items-start gap-2 text-sm font-bold">
                  <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0" />
                  {isRtl ? r.usAr : r.usEn}
                </p>
                <p className="mt-2 flex items-start gap-2 text-sm text-neutral-500">
                  <X size={15} className="mt-0.5 shrink-0 text-neutral-300" />
                  {isRtl ? r.themAr : r.themEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 8. PRICING TIERS ============ */}
      <section className="border-y border-neutral-200 bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <MethodHeading
              badge={isRtl ? "الباقات" : "Packages"}
              title={isRtl ? content.pricingTitleAr : content.pricingTitleEn}
              accent={isRtl ? content.pricingAccentAr : content.pricingAccentEn}
              description={isRtl ? content.pricingSubAr : content.pricingSubEn}
            />
            <div className="flex shrink-0 rounded-full border border-neutral-200 bg-neutral-50 p-1 text-xs font-bold">
              {(["USD", "EGP"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2 transition",
                    currency === c ? "bg-neutral-900 text-white" : "text-neutral-500 hover:text-neutral-900"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {content.tiers.map((tier, i) => (
              <Reveal key={tier.nameEn} delay={0.06 * i}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-7 md:p-8",
                    tier.featured ? "border-neutral-900 bg-neutral-900 text-white shadow-2xl" : "border-neutral-200 bg-neutral-50"
                  )}
                >
                  {tier.featured && (
                    <span className="absolute -top-3.5 start-6 rounded-full bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-900 shadow">
                      {isRtl ? "الأكثر طلبا" : "Most picked"}
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{isRtl ? tier.nameAr : tier.nameEn}</h3>
                  <p className={cn("mt-1.5 text-[13px] leading-relaxed", tier.featured ? "text-white/65" : "text-neutral-500")}>
                    {isRtl ? tier.blurbAr : tier.blurbEn}
                  </p>
                  <p className="mt-4 text-4xl font-bold" dir="ltr">
                    {money(tier.priceUsd)}
                    <span className={cn("ms-1 align-middle text-xs font-bold", tier.featured ? "text-white/50" : "text-neutral-400")}>
                      {isRtl ? "+ حسب النطاق" : "+ by scope"}
                    </span>
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {(isRtl ? tier.pointsAr : tier.pointsEn).map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-[13px] font-semibold leading-relaxed">
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            tier.featured ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"
                          )}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:info@dipencil.com"
                    className={cn(
                      "mt-6 block rounded-full py-3 text-center text-sm font-bold transition",
                      tier.featured ? "bg-white text-neutral-900 hover:bg-neutral-200" : "bg-neutral-900 text-white hover:bg-neutral-700"
                    )}
                  >
                    {isRtl ? "اطلب هذه الباقة" : "Pick this package"}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. CALCULATOR ============ */}
      <section id="calculator" className="container-custom scroll-mt-24 py-16 md:py-24">
        <MethodHeading
          badge={isRtl ? "حاسبة تفاعلية" : "Interactive"}
          title={isRtl ? "جرّب بنفسك:" : "Try it:"}
          accent={isRtl ? "كم سيكلّف مشروعك؟" : "what would your project cost?"}
          description={
            isRtl
              ? "اختر عدد الصفحات والإضافات وشاهد سعرنا مقابل الفريلانسر والوكالات. الأرقام تتحدث لحظيا."
              : "Pick page count and add-ons and watch our price vs. freelancers and agencies. Numbers update live."
          }
        />
        <Reveal delay={0.08}>
          <div className="mt-10">
            <PricingCalculator methodKey={content.key} />
          </div>
        </Reveal>
      </section>

      {/* ============ 10. TESTIMONIALS ============ */}
      <section className="border-y border-neutral-200 bg-white py-16 md:py-24">
        <div className="container-custom">
          <MethodHeading
            badge={isRtl ? "قالوا عنا" : "Client words"}
            title={isRtl ? "ناس دفعت" : "People who paid,"}
            accent={isRtl ? "وتكلمت." : "talking."}
          />
          <Reveal delay={0.06}>
            <div className="relative mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-7 md:p-10">
              <Quote size={40} className="text-neutral-200" />
              <AnimatePresence mode="wait">
                <motion.figure
                  key={tIndex}
                  initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? -30 : 30 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote className="mt-3 max-w-3xl text-lg font-bold leading-relaxed md:text-2xl">
                    “{isRtl ? t.qAr : t.qEn}”
                  </blockquote>
                  <figcaption className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                      {(isRtl ? t.nAr : t.nEn).trim().charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{isRtl ? t.nAr : t.nEn}</span>
                      <span className="block text-xs text-neutral-500">{isRtl ? t.rAr : t.rEn}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
              <div className="mt-7 flex items-center gap-2">
                <button
                  onClick={() => setTIndex((v) => (v + content.testimonials.length - 1) % content.testimonials.length)}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-300 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                </button>
                <button
                  onClick={() => setTIndex((v) => (v + 1) % content.testimonials.length)}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-700"
                >
                  {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </button>
                <div className="ms-2 flex gap-1.5" dir="ltr">
                  {content.testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTIndex(i)}
                      aria-label={`Go to ${i + 1}`}
                      className={cn(
                        "h-1.5 cursor-pointer rounded-full transition-all",
                        i === tIndex % content.testimonials.length ? "bg-neutral-900" : "bg-neutral-300 hover:bg-neutral-400"
                      )}
                      style={{ width: i === tIndex % content.testimonials.length ? 26 : 8 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 11. FAQ ============ */}
      <section className="border-b border-neutral-200 py-16 md:py-24">
        <div className="container-custom grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <span className="inline-block rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-800 mb-4">
                  {isRtl ? "تُطرح كل أسبوع" : "Asked every week"}
                </span>
                <h2 className={cn("mb-4 text-4xl lg:text-6xl font-normal", isRtl ? "tracking-normal" : "leading-tight")}>
                  {isRtl ? (
                    <>
                      أسئلة نجيب عنها <span className="font-light italic text-neutral-500">كل أسبوع.</span>
                    </>
                  ) : (
                    <>
                      Questions we answer <span className="font-light italic text-neutral-500">every week.</span>
                    </>
                  )}
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-neutral-600">
                  {isRtl
                    ? "هذه تتكرر في كل مكالمة تعارف تقريبا. وإن لم يكن سؤالك هنا، أرسله عبر واتساب وسنرد عليك في اليوم نفسه."
                    : "These come up on almost every intro call. If yours is not here, send it on WhatsApp and we will reply the same day."}
                </p>
                <a
                  href="https://wa.me/201003778273"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-neutral-700"
                >
                  <WhatsAppIcon size={17} />
                  {isRtl ? "اسألنا عبر واتساب" : "Ask on WhatsApp"}
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {content.faq.map((f, i) => {
                const open = openFaq === i;
                return (
                  <Reveal key={f.qEn} delay={0.04 * i}>
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl border transition-colors duration-300",
                        open ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white hover:border-neutral-400"
                      )}
                    >
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full cursor-pointer items-center gap-4 p-5 text-start md:p-6"
                        aria-expanded={open}
                      >
                        <span className={cn("text-sm font-bold", open ? "text-white/40" : "text-neutral-300")} dir="ltr">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-base font-bold leading-snug md:text-lg">
                          {isRtl ? f.qAr : f.qEn}
                        </span>
                        <span
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300",
                            open ? "rotate-45 border-white/25 bg-white/10" : "border-neutral-300 bg-white"
                          )}
                        >
                          <Plus size={16} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
                          >
                            <p className="px-5 pb-6 leading-loose text-white/75 md:px-6 md:ps-[4.25rem]">
                              {isRtl ? f.aAr : f.aEn}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 12. CLOSE + NEXT STEPS ============ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="rounded-3xl bg-neutral-100 p-8 md:p-14">
            <Reveal>
              <span className="inline-block rounded-full border border-neutral-300 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-800 mb-4">
                {isRtl ? content.stepAr : content.stepEn}
              </span>
              <h2 className={cn("mb-4 max-w-3xl text-4xl lg:text-6xl font-normal", isRtl ? "tracking-normal" : "leading-tight")}>
                {isRtl ? content.closeTitleAr : content.closeTitleEn}{" "}
                <span className="italic font-light text-neutral-500">
                  {isRtl ? content.closeAccentAr : content.closeAccentEn}
                </span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
                {isRtl ? content.closeSubAr : content.closeSubEn}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:info@dipencil.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-700"
                >
                  {isRtl ? "ابدأ الآن" : "Start now"}
                  <NextIcon size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
                <a
                  href="https://wa.me/201003778273"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-bold transition hover:border-neutral-900"
                >
                  <WhatsAppIcon size={17} />
                  WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mb-5 mt-12 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                {isRtl ? "الخطوات التالية في المنهجية" : "Next steps in the method"}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {others.map((o) => (
                  <Link
                    key={o.key}
                    href={`/${o.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:border-neutral-900"
                  >
                    <div className="relative aspect-[16/8] overflow-hidden">
                      <Image
                        src={o.heroImage}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="absolute start-4 top-4 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        {isRtl ? o.stepAr : o.stepEn}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-5">
                      <p className="font-bold leading-snug">
                        {isRtl ? o.taglineAr : o.taglineEn}
                      </p>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition group-hover:scale-105">
                        <NextIcon size={16} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 text-start">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-bold transition hover:border-neutral-900"
              >
                <BackIcon size={15} />
                {isRtl ? "العودة للرئيسية" : "Back home"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
