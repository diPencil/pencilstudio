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
  CirclePlay,
  Play,
  Layers,
  PackageCheck,
  PhoneCall,
  MessageSquare,
  Plus,
  Sparkles,
  Wrench,
} from "lucide-react";
import { CurrencyConverter } from "@/components/currency-converter";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { getRelatedServices, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceDetail({ service }: { service: Service }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const related = getRelatedServices(service.slug, 3);
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const videoPoints = isRtl
    ? [
        { n: "01", t: "المشكلة: قبل", d: "الشكل القديم زي ما هو فعلاً، من غير تجميل ولا فلاتر." },
        { n: "02", t: "الشغل: من الرسم للإطلاق", d: "لقطات من الورشة والتصميم والبرمجة والاختبار على موبايلات حقيقية." },
        { n: "03", t: "الأرقام: بعد", d: "السرعة والحجوزات والفلوس. فيديو من غير أرقام يبقى ديكور." },
      ]
    : [
        { n: "01", t: "The problem: before", d: "The old look exactly as it was. No beautifying, no filters." },
        { n: "02", t: "The work: sketch to launch", d: "Clips from the workshop, design, code, and testing on real phones." },
        { n: "03", t: "The numbers: after", d: "Speed, bookings, revenue. A video without numbers is decoration." },
      ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sectionLabel = (en: string, ar: string) => (isRtl ? ar : en);

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />

      {/* ---------- 1. HERO ---------- */}
      <section className="relative flex overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={isRtl ? service.nameAr : service.nameEn}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/30" />
        </div>

        <div className="container-custom relative z-10 flex w-full flex-col pb-16 pt-24 md:pb-20 md:pt-28 lg:min-h-[92svh]">
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-white/60">
              <Link href="/" className="transition hover:text-white">
                {isRtl ? "الرئيسية" : "Home"}
              </Link>
              <span aria-hidden>/</span>
              <Link href="/services" className="transition hover:text-white">
                {isRtl ? "الخدمات" : "Services"}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-white">{isRtl ? service.nameAr : service.nameEn}</span>
            </nav>
          </Reveal>

          <div className="my-auto grid items-center gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {isRtl ? service.badgeAr : service.badgeEn}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-neutral-900">
                    {isRtl ? service.priceAr : service.priceEn}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                  {isRtl ? service.nameAr : service.nameEn}
                </h1>
                <p className="mt-4 max-w-2xl text-lg font-light italic text-white/85 md:text-xl">
                  {isRtl ? service.taglineAr : service.taglineEn}
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-2xl leading-relaxed text-white/75">
                  {isRtl ? service.introAr : service.introEn}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-wrap items-center gap-3 pb-2">
                  <a
                    href="mailto:info@dipencil.com"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
                  >
                    {isRtl ? "ابدأ مشروعك" : "Start a project"}
                    <NextIcon size={16} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </a>
                  <a
                    href="#deliverables"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                  >
                    {isRtl ? "شوف هتستلم إيه" : "See deliverables"}
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {service.stats.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/15 bg-white/5 p-4 text-start backdrop-blur-md"
                    >
                      <div className="text-2xl font-black" dir="ltr">
                        {s.value}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-white/65">
                        {isRtl ? s.labelAr : s.labelEn}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2. STACK + SECTORS STRIP ---------- */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-custom flex flex-col gap-4 pb-7 pt-8 md:flex-row md:items-center md:justify-between md:gap-6 md:pb-9 md:pt-10">
          <div className="flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible lg:pb-0">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-900 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-white">
              <Layers size={13} />
              {isRtl ? "الأدوات" : "Stack"}
            </span>
            {service.stack.map((s) => (
              <span
                key={s}
                className="shrink-0 whitespace-nowrap rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-[13px] font-semibold text-neutral-700"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2 border-t border-neutral-100 pt-4 text-[13px] leading-relaxed text-neutral-500 md:border-0 md:pt-0">
            <Sparkles size={14} className="shrink-0" />
            <span className="whitespace-nowrap font-medium">
              {isRtl ? "مناسب لـ: " : "Fits: "}
              {(isRtl ? service.relatedSectorsAr : service.relatedSectorsEn).join(isRtl ? "  •  " : "  •  ")}
            </span>
          </div>
        </div>
      </section>

      {/* ---------- 3. STORY + FOR WHO ---------- */}
      <section className="py-16 md:py-24">
        <div className="container-custom grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                {sectionLabel("How we actually work", "بنشتغل إزاي فعلاً")}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                {isRtl ? (
                  <>
                    مش شكل حلو، <span className="font-light italic text-neutral-500">نظام شغال.</span>
                  </>
                ) : (
                  <>
                    Not decoration, <span className="font-light italic text-neutral-500">a working system.</span>
                  </>
                )}
              </h2>
            </Reveal>
            {(isRtl ? service.storyAr : service.storyEn).map((p, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="mt-6 leading-loose text-neutral-600">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
                <p className="mb-4 flex items-center gap-2 text-sm font-bold">
                  <BadgeCheck size={17} />
                  {isRtl ? "لمين الخدمة دي؟" : "Who is this for?"}
                </p>
                <ul className="space-y-3">
                  {(isRtl ? service.forWhoAr : service.forWhoEn).map((w, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={service.gallery[0]}
                    alt={isRtl ? service.nameAr : service.nameEn}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-5 start-5 end-5 flex items-center justify-between gap-3 text-white">
                  <p className="text-sm font-semibold leading-snug">
                    {isRtl ? service.taglineAr : service.taglineEn}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 4. FEATURES GRID ---------- */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <Reveal>
            <div className="mb-12 flex flex-col gap-3 text-start md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                  {sectionLabel("What is included", "إيه اللي جوه الخدمة")}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                  {isRtl ? "تفاصيل مدروسة، مش عناوين." : "Real details, not slogans."}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-neutral-500">
                {isRtl
                  ? "كل نقطة تحت دي حاجة بنسلّمها فعلاً وبتتمضي في محضر الاستلام. مش كلام تسويقي."
                  : "Every point below is something we actually deliver and you sign off. Not marketing copy."}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f, i) => (
              <Reveal key={i} delay={0.04 * i}>
                <div className="group h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-black transition group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                    <span dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug">{isRtl ? f.titleAr : f.titleEn}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 transition group-hover:text-white/75">
                    {isRtl ? f.descAr : f.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. VIDEO: PHONE CASE STUDY ---------- */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div>
            <Reveal>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                <CirclePlay size={14} />
                {isRtl ? "شوفها في 3 دقايق" : "Watch it in 3 minutes"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                {isRtl ? (
                  <>
                    متصوّر بالطول، <span className="font-light italic text-neutral-500">زي ما عملاءك بيتفرجوا.</span>
                  </>
                ) : (
                  <>
                    Shot vertical, <span className="font-light italic text-neutral-500">like your clients watch.</span>
                  </>
                )}
              </h2>
              <p className="mt-5 max-w-xl leading-loose text-neutral-600">
                {isRtl
                  ? "أكتر من 70% من اللي هيشوف شغلك هيقابله لأول مرة على شاشة موبايل وهو بيقلب بسرعة. عشان كده فيديو المشروع عندنا طولي 9:16، يشتغل Reels وTikTok وShorts وحالة واتساب، مش مركون على يوتيوب."
                  : "Over 70% of the people who see your work will meet it first on a phone screen while scrolling fast. That is why our project video is vertical 9:16, built for Reels, TikTok, Shorts and WhatsApp status, not parked on YouTube."}
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {videoPoints.map((pt, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
                    <span className="text-sm font-black text-neutral-300" dir="ltr">
                      {pt.n}
                    </span>
                    <div>
                      <p className="font-bold leading-snug">{pt.t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">{pt.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-bold text-white">
                  <Play size={12} fill="currentColor" />
                  {isRtl ? service.videoDurationAr : service.videoDurationEn}
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  {isRtl ? "النسخة الكاملة بتتسلم مع المشروع" : "Full cut delivered with the project"}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Phone column */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-fit">
              <div
                className="absolute left-1/2 top-1/2 h-[75%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900/15 blur-[80px]"
                aria-hidden
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -start-3 top-16 z-20 hidden items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-[11px] font-bold shadow-lg sm:inline-flex"
              >
                <span className="h-2 w-2 rounded-full bg-red-500" />
                {isRtl ? "دراسة حالة" : "Case study"}
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -end-4 bottom-28 z-20 hidden rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-[11px] font-bold shadow-lg sm:inline-flex"
                dir="ltr"
              >
                9:16
              </motion.div>

              <div className="relative w-[270px] rounded-[3rem] border border-neutral-800 bg-neutral-950 p-2.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.45)] sm:w-[300px]">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[2.4rem] bg-black">
                  <Image
                    src={service.videoPoster}
                    alt="project video cover"
                    fill
                    className="object-cover opacity-80"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
                  <div className="absolute left-1/2 top-3 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center">
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-neutral-900 shadow-2xl"
                      aria-label="play video"
                    >
                      <Play size={26} className="ms-1" fill="currentColor" />
                    </motion.button>
                    <p className="text-[13px] font-bold leading-snug text-white">
                      {isRtl ? service.videoDurationAr : service.videoDurationEn}
                    </p>
                  </div>
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="mb-2 h-1 overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-1/3 rounded-full bg-white" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-white/80">
                      <span dir="ltr">0:47</span>
                      <span dir="ltr">HD</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-xs font-semibold text-neutral-500">
                {isRtl ? "مكان فيديو طولي للريلز والتيك توك والشورتس" : "Vertical video slot for Reels, TikTok and Shorts"}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 6. PROCESS ---------- */}
      <section className="bg-neutral-900 py-16 text-white md:py-24">
        <div className="container-custom">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              {sectionLabel("Timeline without surprises", "جدول زمني من غير مفاجآت")}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              {isRtl ? "هتعرف كل أسبوع بيحصل فيه إيه." : "You will know what happens every week."}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((st, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <div className="relative h-full rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-4xl font-black text-white/15" dir="ltr">
                      0{i + 1}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-white/80">
                      <CalendarClock size={12} />
                      {isRtl ? st.durationAr : st.durationEn}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug">{isRtl ? st.titleAr : st.titleEn}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {isRtl ? st.descAr : st.descEn}
                  </p>
                  {i < service.steps.length - 1 && (
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

      {/* ---------- 7. DELIVERABLES + PRICE ---------- */}
      <section id="deliverables" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-custom grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                <PackageCheck size={14} />
                {sectionLabel("Handover list", "قائمة الاستلام")}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                {isRtl ? "هتمضي على إيه بالظبط؟" : "What exactly do you sign off?"}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-3">
              {(isRtl ? service.deliverablesAr : service.deliverablesEn).map((d, i) => (
                <Reveal key={i} delay={0.03 * i}>
                  <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white" dir="ltr">
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
                <div className="overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-900 text-white">
                  <div className="p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
                      {isRtl ? "التكلفة والمدة" : "Cost & timing"}
                    </p>
                    <CurrencyConverter baseUsd={service.priceUsd} monthly={service.monthly} />
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {isRtl
                        ? "السعر النهائي بعد مكالمة 20 دقيقة ومعاينة المحتوى الجاهز عندك. مفيش مفاجآت في النص. أي إضافة بسعر متفق عليه قبل التنفيذ."
                        : "Final quote after a 20-min call and a look at your ready content. No mid-project surprises. Any add-on is quoted before we build it."}
                    </p>
                    <div className="mt-6 space-y-3">
                      <a
                        href="mailto:info@dipencil.com"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
                      >
                        <PhoneCall size={16} />
                        {isRtl ? "احجز مكالمة 20 دقيقة" : "Book a 20-min call"}
                      </a>
                      <a
                        href="https://wa.me/201003778273"
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                      >
                        <WhatsAppIcon size={17} />
                        WhatsApp
                      </a>
                    </div>
                    <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/55">
                      <Wrench size={13} />
                      {isRtl ? "info@dipencil.com وهنرد في نفس اليوم" : "info@dipencil.com, same-day reply"}
                    </div>
                  </div>
                </div>

                {/* FAQ lives in its own section below */}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 7b. FAQ ---------- */}
      <section className="border-t border-neutral-200 bg-white py-16 md:py-24">
        <div className="container-custom grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                  <MessageSquare size={14} />
                  {isRtl ? "بتتسأل كل أسبوع" : "Asked every week"}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                  {isRtl ? (
                    <>
                      أسئلة بنجاوب عليها <span className="font-light italic text-neutral-500">كل أسبوع.</span>
                    </>
                  ) : (
                    <>
                      Questions we answer <span className="font-light italic text-neutral-500">every week.</span>
                    </>
                  )}
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-neutral-600">
                  {isRtl
                    ? "دي اللي بتتكرر في كل مكالمة تعارف تقريباً. لو سؤالك مش هنا، ابعته واتساب وهنرد عليك في نفس اليوم."
                    : "These come up on almost every intro call. If yours is not here, send it on WhatsApp and we will reply the same day."}
                </p>
                <a
                  href="https://wa.me/201003778273"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-neutral-700"
                >
                  <WhatsAppIcon size={17} />
                  {isRtl ? "اسألنا واتساب" : "Ask on WhatsApp"}
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {service.faq.map((f, i) => {
                const open = openFaq === i;
                return (
                  <Reveal key={i} delay={0.04 * i}>
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl border transition-colors duration-300",
                        open
                          ? "border-neutral-900 bg-neutral-900 text-white"
                          : "border-neutral-200 bg-neutral-50 hover:border-neutral-400"
                      )}
                    >
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full cursor-pointer items-center gap-4 p-5 text-start md:p-6"
                        aria-expanded={open}
                      >
                        <span
                          className={cn("text-sm font-black", open ? "text-white/40" : "text-neutral-300")}
                          dir="ltr"
                        >
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
                            <p
                              className={cn(
                                "px-5 pb-6 leading-loose md:px-6 md:ps-[4.25rem]",
                                open ? "text-white/75" : "text-neutral-600"
                              )}
                            >
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

      {/* ---------- 8. RELATED ---------- */}
      <section className="border-t border-neutral-200 bg-white py-16 md:py-20">
        <div className="container-custom">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                {isRtl ? "خدمات بتكمل بعضها" : "Services that go together"}
              </h2>
              <Link
                href="/services"
                className={cn(
                  "hidden items-center gap-1.5 text-sm font-bold text-neutral-600 transition hover:text-neutral-900 sm:inline-flex"
                )}
              >
                {isRtl ? "كل الخدمات" : "All services"}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={0.05 * i}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 transition hover:border-neutral-900"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={r.heroImage}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute start-4 top-4 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {isRtl ? r.badgeAr : r.badgeEn}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold leading-snug">{isRtl ? r.nameAr : r.nameEn}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-neutral-500">
                      {isRtl ? r.taglineAr : r.taglineEn}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold">
                      {isRtl ? "افتح الصفحة" : "Open page"}
                      <NextIcon size={15} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-bold transition hover:border-neutral-900"
            >
              <BackIcon size={15} />
              {isRtl ? "رجوع للرئيسية" : "Back home"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
