"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { PencilButton } from "@/components/ui/pencil-button";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";
import { LazyDotLottie } from "@/components/shared/media/lazy-dot-lottie";

type TabId = "strategy" | "design" | "build";
const TAB_IDS: TabId[] = ["strategy", "design", "build"];

export function IdeaToProductSection() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [activeTab, setActiveTab] = useState<TabId>("strategy");
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth auto-advance every 6 seconds (pauses on mouse hover or after manual interaction)
  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = TAB_IDS.indexOf(prev);
        const nextIndex = (currentIndex + 1) % TAB_IDS.length;
        return TAB_IDS[nextIndex];
      });
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused, activeTab]);

  const tabsConfig = [
    {
      id: "strategy" as const,
      stepNum: "01",
      badge: isRtl ? "استكشاف وتوجيه" : "STRATEGY // 01",
      cardTitle: isRtl ? "الاستراتيجية والاتجاه" : "Strategy & Direction",
      cardSummary: isRtl
        ? "نشكّل الفكرة قبل التصميم. نفهم الأهداف والجمهور وهيكل العمل قبل كتابة سطر كود واحد."
        : "We shape the idea before we design it. Understanding business goals, audience, and digital direction before code.",
      eyebrow: isRtl ? "منهجية بنسل // المرحلة الأولى" : "PENCIL METHOD // STEP 01",
      headlineMain: isRtl ? "نشكّل الفكرة،" : "We shape the idea,",
      headlineAccent: isRtl ? "قبل أن نبدأ التصميم." : "before we design it.",
      description: isRtl
        ? "نبدأ بفهم أهداف مشروعك، دراسة الجمهور المستهدف، وتحليل المشكلة الحقيقية. نحول الفكرة إلى استراتيجية رقمية واضحة ومسار تنفيذي متفق عليه قبل كتابة سطر كود واحد."
        : "We start by analyzing your business goals, target audience, and market landscape. We turn raw ideas into an actionable digital direction signed off before any code is written.",
      cta: isRtl ? "ابدأ التخطيط" : "Start Planning",
      hoverLabel: isRtl ? "استكشف الاستراتيجية ←" : "Explore Strategy →",
      href: "/strategy-direction",
      lottieSrc: "https://lottie.host/4264c941-5022-4639-a2a3-86ad8fd46ed1/6Mv8mSvNCD.lottie",
      lottieScale: "scale-[1.5] sm:scale-[1.65] lg:scale-[1.75]",
      lottieShiftLtr: "-translate-x-3 sm:-translate-x-6 lg:-translate-x-8",
      lottieShiftRtl: "translate-x-3 sm:translate-x-6 lg:translate-x-8",
    },
    {
      id: "design" as const,
      stepNum: "02",
      badge: isRtl ? "تصميم وتجربة" : "EXPERIENCE // 02",
      cardTitle: isRtl ? "التصميم والتجربة" : "Design & Experience",
      cardSummary: isRtl
        ? "نصمم تجارب واجهات وهويات بصرية متكاملة راقية وسلسة تترجم القيمة التجارية وتبني الثقة."
        : "We design experiences that feel clear and premium. Brand systems, interface kits, and clickable prototypes built for real users.",
      eyebrow: isRtl ? "منهجية بنسل // المرحلة الثانية" : "PENCIL METHOD // STEP 02",
      headlineMain: isRtl ? "نصمم تجارب واضحة،" : "Design that turns attention,",
      headlineAccent: isRtl ? "تترجم القيمة وتبني الثقة." : "into measurable trust.",
      description: isRtl
        ? "نصمم الواجهات، الهوية البصرية، ورحلة المستخدم بشكل بسيط، قوي، ومبني على احتياجات العمل الفعلية ليقنع ويبيع بوضوح قبل كتابة أي كود برمجي."
        : "We create high-conversion interfaces, comprehensive brand design systems, and interactive prototypes that establish market authority and test user journeys with zero friction.",
      cta: isRtl ? "استعرض أعمال التصميم" : "View Design Work",
      hoverLabel: isRtl ? "استكشف التصميم ←" : "Explore Design →",
      href: "/design-experience",
      lottieSrc: "https://lottie.host/6a508e03-4ffb-4bbd-bbef-9f07bb8763fc/eiBqNk5jQb.lottie",
      lottieScale: "scale-[1.35] sm:scale-[1.5] lg:scale-[1.6]",
      lottieShiftLtr: "-translate-x-2 sm:-translate-x-4 lg:-translate-x-6",
      lottieShiftRtl: "translate-x-2 sm:translate-x-4 lg:translate-x-6",
    },
    {
      id: "build" as const,
      stepNum: "03",
      badge: isRtl ? "بناء وإطلاق" : "PRODUCTION // 03",
      cardTitle: isRtl ? "البناء والإطلاق" : "Build & Launch",
      cardSummary: isRtl
        ? "نبني مواقع، تطبيقات، منصات حجز، وأنظمة تشغيل بكود نظيف وبنية سريعة ودعم تشغيلي حقيقي."
        : "We develop websites, apps, dashboards, and booking platforms with clean code, strong structure, and high performance.",
      eyebrow: isRtl ? "منهجية بنسل // المرحلة الثالثة" : "PENCIL METHOD // STEP 03",
      headlineMain: isRtl ? "نبني أنظمة جاهزة،" : "We build systems ready,",
      headlineAccent: isRtl ? "للعمل اليومي والنمو." : "for daily business.",
      description: isRtl
        ? "نطوّر أنظمة متكاملة: مواقع شركات، تطبيقات، لوحات تحكم، ومنصات حجز بأحدث تقنيات Next.js وكود نظيف وقابل للتوسع مع ضمان تشغيلي مستمر بدون ديون تقنية."
        : "We engineer production-grade platforms, corporate portals, e-commerce engines, and booking systems built on Next.js with clean code, sub-second speeds, and zero technical debt.",
      cta: isRtl ? "ابنِ نظامك معنا" : "Build With Us",
      hoverLabel: isRtl ? "استكشف البناء ←" : "Explore Build →",
      href: "/build-launch",
      lottieSrc: "https://lottie.host/5feea738-69c3-4a47-8b62-0e356c1ffed4/TlihmRQp5m.lottie",
      lottieScale: "scale-[1.35] sm:scale-[1.5] lg:scale-[1.6]",
      lottieShiftLtr: "-translate-x-5 sm:-translate-x-8 lg:-translate-x-10",
      lottieShiftRtl: "translate-x-5 sm:translate-x-8 lg:translate-x-10",
    },
  ];

  const activeData = tabsConfig.find((tab) => tab.id === activeTab) || tabsConfig[0];

  return (
    <section
      id="idea-to-product"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden border-b border-neutral-200/90 bg-[#F8F9FC] py-16 sm:py-20 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* ── COLUMN 1 (LEFT in LTR, RIGHT in RTL): Top Arrow & Description + Bottom Dynamic Headline & 2 CTAs ── */}
          <div className="flex h-full flex-col justify-between py-1 text-start lg:col-span-4">
            {/* Top: Blue Arrow Button + Dynamic Narrative Paragraph */}
            <div>
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#1853ea] text-white shadow-md shadow-blue-600/25">
                <ArrowDownRight className={cn("h-5 w-5", isRtl && "-scale-x-100")} />
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 text-xs sm:text-[13px] lg:text-sm leading-relaxed text-neutral-600 max-w-sm"
                >
                  {activeData.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom: Dynamic Eyebrow + Big Headline + 2 Action Buttons */}
            <div className="mt-8 pt-2 lg:mt-auto">
              <div className="text-xs sm:text-[13px] font-semibold text-neutral-400 tracking-wider">
                {activeData.eyebrow}
              </div>

              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={cn("mt-2 text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-neutral-900", isRtl ? "tracking-normal" : "tracking-tight")}
                >
                  {activeData.headlineMain} <br className="hidden sm:inline" />
                  <span className="font-light italic text-neutral-500">
                    {activeData.headlineAccent}
                  </span>
                </motion.h2>
              </AnimatePresence>

              {/* Action CTA Buttons (Primary for active phase, Secondary for Consultation) */}
              <div className="mt-6 pt-1 flex flex-wrap items-center gap-3">
                <PencilButton
                  href={activeData.href}
                  variant="primary"
                  size="default"
                  hoverLabel={activeData.hoverLabel}
                  className="font-bold shadow-md hover:shadow-lg"
                >
                  {activeData.cta}
                </PencilButton>
                <PencilButton
                  href="/contact"
                  variant="white"
                  size="default"
                  hoverLabel={isRtl ? "احجز استشارة ←" : "Book Clarity Call →"}
                  className="font-bold border-neutral-300 bg-white hover:border-neutral-900 text-neutral-900 shadow-2xs"
                >
                  {isRtl ? "احجز استشارة" : "Book Consultation"}
                </PencilButton>
              </div>
            </div>
          </div>

          {/* ── COLUMN 2 (CENTER): Frameless Scaled Lottie Animation ── */}
          <div className="flex h-full items-center justify-center lg:col-span-4 overflow-visible">
            <div
              className={cn(
                "relative flex h-full w-full items-center justify-center overflow-visible transition-transform duration-500 ease-out",
                isRtl ? activeData.lottieShiftRtl : activeData.lottieShiftLtr
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative flex h-full w-full items-center justify-center overflow-visible"
                >
                  {mounted ? (
                    <LazyDotLottie
                      src={activeData.lottieSrc}
                      loop
                      autoplay
                      className={cn(
                        "h-64 sm:h-72 lg:h-80 w-full max-w-[360px] object-contain drop-shadow-sm pointer-events-none select-none transition-transform duration-500",
                        activeData.lottieScale
                      )}
                    />
                  ) : (
                    <div className="h-64 sm:h-72 lg:h-80 w-full max-w-[360px]" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── COLUMN 3 (RIGHT in LTR, LEFT in RTL): 3 Stacked Cards (Exact Height Equalization) ── */}
          <div className="flex h-full flex-col justify-between gap-3 sm:gap-3.5 lg:gap-4 lg:col-span-4">
            {tabsConfig.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <div
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsPaused(true);
                  }}
                  className={cn(
                    "group flex flex-1 flex-col justify-center cursor-pointer rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 text-start transition-all duration-300 select-none",
                    isActive
                      ? "bg-[#1853ea] text-white shadow-xl shadow-blue-600/25 border border-transparent scale-[1.01]"
                      : "bg-white border border-neutral-200/90 text-neutral-900 shadow-xs hover:border-neutral-300 hover:bg-neutral-50/70"
                  )}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className={cn(
                        "font-mono text-xs sm:text-sm font-black tracking-wider block",
                        isActive ? "text-blue-200" : "text-neutral-400"
                      )}
                      dir="ltr"
                    >
                      {tab.stepNum}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors",
                        isActive
                          ? "border-white/30 bg-white/15 text-white"
                          : "border-neutral-200 bg-neutral-100 text-neutral-600"
                      )}
                    >
                      {tab.badge}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "text-base sm:text-lg font-bold leading-snug tracking-tight transition-colors",
                      isActive ? "text-white" : "text-neutral-950 group-hover:text-[#1853ea]"
                    )}
                  >
                    {tab.cardTitle}
                  </h3>

                  <p
                    className={cn(
                      "mt-1 text-xs sm:text-[13px] leading-relaxed transition-colors line-clamp-2",
                      isActive ? "text-blue-100/90" : "text-neutral-500"
                    )}
                  >
                    {tab.cardSummary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
