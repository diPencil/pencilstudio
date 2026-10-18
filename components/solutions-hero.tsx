"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Rocket,
  Workflow,
  TrendingUp,
  Layers,
  Bot,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Zap,
  Activity,
  Flame,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface HeroEngine {
  id: string;
  tabEn: string;
  tabAr: string;
  badgeEn: string;
  badgeAr: string;
  metricEn: string;
  metricAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  image: string;
  tagsEn: string[];
  tagsAr: string[];
  icon: any;
  accent: string;
  anchor: string;
}

const HERO_ENGINES: HeroEngine[] = [
  {
    id: "market-entry",
    tabEn: "Brand Launch",
    tabAr: "إطلاق العلامات",
    badgeEn: "Turnkey Launch",
    badgeAr: "إطلاق متكامل على المفتاح",
    metricEn: "0 to Market in 30 Days",
    metricAr: "جاهزية كاملة في 30 يوماً",
    titleEn: "Brand Authority & Full Market Entry",
    titleAr: "منظومة إطلاق العلامات واختراق السوق من الصفر",
    descEn: "Turnkey market launch: Brand Book (50+ pgs), sub-second Next.js 15 web platform, and conversion funnels ready for day one.",
    descAr: "إطلاق تجاري كامل: استراتيجية تموضع، كتيب هوية مؤسسية (+50 صفحة)، موقع Next.js صاروخي، ومسارات لاقتناص أول 100 عميل حقيقي.",
    image: "/hero-section.jpg",
    tagsEn: ["Brand Book 50+ Pgs", "Next.js 15 Platform", "Lead Funnels", "Day-One Trust"],
    tagsAr: ["كتيب هوية +50 صفحة", "منصة Next.js 15", "مسارات التقاط الليدز", "هيبة وثقة فورية"],
    icon: Rocket,
    accent: "#2057ff",
    anchor: "#solutions-suites",
  },
  {
    id: "superfeliz",
    tabEn: "Feliz AI Engine",
    tabAr: "ذكاء فيليز المؤسسي",
    badgeEn: "Managed AI Layer",
    badgeAr: "الذكاء الاصطناعي المؤسسي المدار",
    metricEn: "Feliz Quad-Core AI",
    metricAr: "بنية عائلة Feliz للعمليات",
    titleEn: "SuperFeliz: Enterprise AI & Autonomous Operations",
    titleAr: "سوبر فيليز: الذكاء الاصطناعي المتصل بعمليات شركتك",
    descEn: "Private enterprise knowledge ingestion, WhatsApp Business bot, and autonomous customer support & pricing workflows.",
    descAr: "تدريب آمن على بيانات وسياسات شركتك، ربط فوري بواتساب والموقع، وأتمتة خدمة العملاء والتسعير على مدار الساعة 24/7.",
    image: "/help-editorial/pencil-superfeliz.png",
    tagsEn: ["Private Data Isolation", "WhatsApp Business Bot", "Feliz Oper & Tech", "24/7 Operations"],
    tagsAr: ["عزل وتشفير تام", "مساعد واتساب ذكي", "عقول Oper و Tech", "خدمة ودعم 24/7"],
    icon: Bot,
    accent: "#f59e0b",
    anchor: "#feliz-enterprise",
  },
  {
    id: "operations",
    tabEn: "Operations CRM",
    tabAr: "أتمتة العمليات والـ CRM",
    badgeEn: "Operations Engine",
    badgeAr: "محرك العمليات والكفاءة",
    metricEn: "60% Overhead Cut",
    metricAr: "توفير 60% من وقت التشغيل",
    titleEn: "Centralized Business Operations & Custom CRM",
    titleAr: "التحول الرقمي وأتمتة العمليات المركزية للشركات",
    descEn: "Replace messy spreadsheets with a custom CRM: multi-branch sync, automated invoicing, and live revenue dashboards.",
    descAr: "ودّع فوضى الإكسل وجروبات واتساب: نظام CRM وإدارة صفقات مخصص لشركتك، أتمتة الفواتير، وداشبورد إيرادات حية للإدارة.",
    image: "/business-sectors/crm-automation.jpg",
    tagsEn: ["Custom Sales CRM", "WhatsApp Triggers", "Multi-Branch Sync", "0% Per-Seat Taxes"],
    tagsAr: ["CRM مخصص لنشاطك", "أتمتة WhatsApp API", "ربط الفروع والمخازن", "بدون اشتراكات مقاعد"],
    icon: Workflow,
    accent: "#10b981",
    anchor: "#solutions-suites",
  },
  {
    id: "revenue",
    tabEn: "Revenue Funnels",
    tabAr: "مضاعفة المبيعات والاستحواذ",
    badgeEn: "Growth Engine",
    badgeAr: "محرك الاستحواذ والنمو",
    metricEn: "2.8x Average ROAS Boost",
    metricAr: "مضاعفة العائد على الإعلانات",
    titleEn: "Revenue Architecture & Conversion Funnels",
    titleAr: "منظومة الاستحواذ ومسارات التحويل التسويقي المباشر",
    descEn: "Sub-second landing funnels, server-side Meta CAPI tracking, and automated abandoned customer recovery flows.",
    descAr: "صفحات هبوط تفتح في أقل من 800ms، تتبع سحابي دقيق CAPI يتغلب على قيود التتبع، ومسارات استرجاع الزوار عبر واتساب.",
    image: "/signature-capabilities/Marketing-Growth-Systems.jpg",
    tagsEn: ["Sub-800ms Pages", "Meta CAPI Tracking", "Cart Recovery", "Blended ROAS"],
    tagsAr: ["فتح أقل من 800ms", "تتبع سحابي CAPI", "استرجاع السلات", "حساب العائد الصافي"],
    icon: TrendingUp,
    accent: "#ec4899",
    anchor: "#solutions-suites",
  },
  {
    id: "product",
    tabEn: "SaaS & Mobile Apps",
    tabAr: "المنصات وتطبيقات الموبايل",
    badgeEn: "Product Scale",
    badgeAr: "بناء وتوسيع المنتجات",
    metricEn: "Production-Grade Scale",
    metricAr: "بنية إنتاجية معتمدة",
    titleEn: "SaaS & Mobile Product Acceleration",
    titleAr: "بناء وتوسيع المنصات التقنية والـ SaaS وتطبيقات الهواتف",
    descEn: "Dedicated product engineering: Figma design systems, iOS/Android native code, and zero-downtime AWS cloud microservices.",
    descAr: "وحدة هندسة منتجات مخصصة: تصميم فيجما، تطبيقات iOS وأندرويد معتمدة على المتاجر، وبنية سحابية AWS بدون أي توقف.",
    image: "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg",
    tagsEn: ["iOS & Android Native", "Figma Design System", "AWS Cloud Scale", "Recurring Billing"],
    tagsAr: ["تطبيقات iOS وأندرويد", "نظام تصميم فيجما", "سيرفرات AWS مرنة", "دفع واشتراكات دورية"],
    icon: Layers,
    accent: "#8b5cf6",
    anchor: "#solutions-suites",
  },
];

export function SolutionsHero() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [activeTab, setActiveTab] = useState<string>("market-entry");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Auto rotate tabs every 6s unless user hovered
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = HERO_ENGINES.findIndex((e) => e.id === prev);
        const nextIndex = (currentIndex + 1) % HERO_ENGINES.length;
        return HERO_ENGINES[nextIndex].id;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const activeEngine = HERO_ENGINES.find((e) => e.id === activeTab) || HERO_ENGINES[0];
  const Icon = activeEngine.icon;

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white pb-10 pt-24 md:pb-14 md:pt-28 lg:pt-32">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-40 start-1/4 h-[420px] w-[650px] rounded-full bg-[#2057ff]/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-40 end-10 h-[350px] w-[450px] rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="container-custom relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center xl:gap-14">
          {/* ========================================================= */}
          {/* LEFT: PUNCHY EXECUTIVE TEXT & ACTIONS (7 COLS)            */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              {/* Live Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800">
                  <span className="h-2 w-2 rounded-full bg-[#2057ff] animate-pulse" />
                  {isRtl ? "حلول الأعمال المتكاملة للمؤسسات" : "Full-Stack Enterprise Solutions"}
                </span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-bold text-neutral-500">
                  {isRtl ? "Pencil Studio · تسليم مفتاح جاهز للعمل" : "Pencil Studio · Turnkey Partner"}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-4 text-3xl font-black tracking-tight text-neutral-900 sm:text-5xl lg:text-[46px] xl:text-[54px] lg:leading-[1.12]">
                {isRtl ? (
                  <>
                    حلول أعمال رقمية للمؤسسات.. تُبنى لتُدير وتُوسّع نشاطك{" "}
                    <span className="font-light italic text-neutral-500">من الألف إلى الياء.</span>
                  </>
                ) : (
                  <>
                    Full-stack digital solutions built to run, sell, and scale..{" "}
                    <span className="font-light italic text-neutral-500">under one roof.</span>
                  </>
                )}
              </h1>

              {/* Pitch */}
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                {isRtl
                  ? "مش مجرد خدمات متفرقة بتطلبها بالقطعة وتتشتت بين خمس أطراف. بنسل بتبنيلك ماكينة أعمال رقمية متكاملة تضمن هيبة البراند، استقرار البرمجة، سرعة المبيعات، وأتمتة العمليات اليومية مع ذكاء Feliz المؤسسي الذي يربط المنظومة كلها."
                  : "Not piecemeal services scattered across five different freelancers. We deliver integrated digital business engines: from brand authority and custom software to operational automation and SuperFeliz enterprise AI intelligence."}
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/support/callback"
                  className="inline-flex items-center gap-2.5 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg"
                >
                  <PhoneCall size={16} />
                  <span>{isRtl ? "احجز دراسة حل لشركتك" : "Discuss a solution for your company"}</span>
                  <ArrowUpRight size={16} />
                </Link>

                <a
                  href="#solutions-suites"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-bold text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-50"
                >
                  <span>{isRtl ? "استكشف المنظومات" : "Explore Suites"}</span>
                  <ChevronDown size={15} />
                </a>

                <a
                  href="#feliz-enterprise"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50/80 px-5 py-3.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100"
                >
                  <Sparkles size={14} className="text-amber-600" />
                  <span>{isRtl ? "عائلة Feliz الذكية" : "Feliz AI Layer"}</span>
                </a>
              </div>

              {/* Trust Metric Row */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-neutral-200/80 pt-6 sm:grid-cols-4">
                {[
                  { en: "+10 Years", ar: "+10 سنوات", subEn: "Multidisciplinary", subAr: "خبرة في السوق العربي" },
                  { en: "Single Team", ar: "فريق واحد", subEn: "Owns the Result", subAr: "يضمن النتيجة التجارية" },
                  { en: "99.99% SLA", ar: "99.99%", subEn: "Uptime Stability", subAr: "استقرار سحابي معتمد" },
                  { en: "Feliz AI", ar: "Feliz AI", subEn: "Autonomous Ops", subAr: "ذكاء مؤسسي مدمج 24/7" },
                ].map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-lg font-black text-neutral-900 md:text-xl" dir="ltr">
                      {isRtl ? m.ar : m.en}
                    </span>
                    <span className="mt-0.5 text-[11px] font-semibold text-neutral-500">
                      {isRtl ? m.subAr : m.subEn}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: THE INTERACTIVE SOLUTIONS COCKPIT (5-6 COLS)       */}
          {/* ========================================================= */}
          <div
            className="lg:col-span-6 xl:col-span-5"
            onMouseEnter={() => setAutoRotate(false)}
            onMouseLeave={() => setAutoRotate(true)}
          >
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border-2 border-neutral-900 bg-neutral-950 p-5 text-white shadow-2xl sm:p-6">
                {/* Cockpit Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white/80">
                      Pencil Solutions Cockpit
                    </span>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-white/60">
                    5 Active Suites
                  </span>
                </div>

                {/* Tab Pill Selectors */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {HERO_ENGINES.map((eng) => {
                    const isCurrent = eng.id === activeTab;
                    return (
                      <button
                        key={eng.id}
                        type="button"
                        onClick={() => setActiveTab(eng.id)}
                        className={cn(
                          "rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer",
                          isCurrent
                            ? "bg-white text-neutral-950 shadow-md scale-105"
                            : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        {isRtl ? eng.tabAr : eng.tabEn}
                      </button>
                    );
                  })}
                </div>

                {/* Active Engine Card Stage */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold text-neutral-950"
                      style={{ backgroundColor: activeEngine.accent === "#2057ff" ? "#60a5fa" : activeEngine.accent }}
                    >
                      <Icon size={12} />
                      <span>{isRtl ? activeEngine.badgeAr : activeEngine.badgeEn}</span>
                    </span>

                    <span className="font-mono text-xs font-bold text-white/90" dir="ltr">
                      {isRtl ? activeEngine.metricAr : activeEngine.metricEn}
                    </span>
                  </div>

                  {/* Visual Preview */}
                  <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-md">
                    <Image
                      src={activeEngine.image}
                      alt={isRtl ? activeEngine.titleAr : activeEngine.titleEn}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 450px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white/90">
                        {isRtl ? "منظومة تسليم مفتاح جاهزة للتشغيل" : "Turnkey Production Engine"}
                      </span>
                      <span className="rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                        ONLINE
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-4">
                    <h3 className="text-lg font-black text-white sm:text-xl leading-snug">
                      {isRtl ? activeEngine.titleAr : activeEngine.titleEn}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {isRtl ? activeEngine.descAr : activeEngine.descEn}
                    </p>
                  </div>

                  {/* Tags Pill Row */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(isRtl ? activeEngine.tagsAr : activeEngine.tagsEn).map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80"
                      >
                        <CheckCircle2 size={11} className="text-emerald-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Direct Link to section */}
                  <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between">
                    <a
                      href={activeEngine.anchor}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 transition hover:text-amber-300"
                    >
                      <span>{isRtl ? "عرض تفاصيل ومكونات المنظومة" : "View Complete Architecture"}</span>
                      <ArrowUpRight size={13} />
                    </a>

                    <Link
                      href="/support/callback"
                      className="rounded-full bg-white px-4 py-2 text-xs font-bold text-neutral-950 transition hover:bg-neutral-200"
                    >
                      {isRtl ? "طلب استشارة" : "Request Consultation"}
                    </Link>
                  </div>
                </div>

                {/* Bottom Live Status Footer */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] font-mono text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Activity size={12} className="text-emerald-400" />
                    AWS Cloud SLA: 99.99%
                  </span>
                  <span>Next.js 15: Sub-800ms</span>
                  <span>Feliz AI: 24/7 Active</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
