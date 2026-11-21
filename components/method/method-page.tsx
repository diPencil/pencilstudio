"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  BadgeCheck,
  CalendarClock,
  Check,
  ChevronDown,
  Layers,
  Mail,
  PhoneCall,
  Plus,
  Quote,
  Sparkles,
  X,
  Palette,
  LayoutTemplate,
  ShieldCheck,
  Grid3X3,
  BookOpenCheck,
  Clapperboard,
  Flame,
  Target,
  Globe,
  MessageSquare,
  Languages,
  Layout,
  Activity,
  CalendarCheck,
  Lock,
  Cpu,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { MethodHeading } from "@/components/method/method-heading";
import { useLanguage } from "@/components/language-context";
import { PricingCalculator } from "@/components/method/pricing-calculator";
import { MethodMinimalHero } from "@/components/method/method-minimal-hero";
import { MethodStatementLanes } from "@/components/method/method-statement-lanes";
import { METHOD_CONTENT, METHOD_ORDER, type MethodContent, type MethodKey } from "@/lib/method/method-content";
import {
  PricingCurrencyCode,
  PRICING_CURRENCIES,
  PRICING_CURRENCY_CODES,
} from "@/lib/pricing/pricing-currency";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { PencilButton } from "@/components/ui/pencil-button";
import { CalendlyCarousel, type CarouselItem } from "@/components/ui/connected-carousel";
import { cn } from "@/lib/utils";

const DELIVERABLE_ICONS = [
  Layers,
  Palette,
  Grid3X3,
  BookOpenCheck,
  LayoutTemplate,
  Clapperboard,
  ShieldCheck,
];

const DELIVERABLE_BADGES: Record<MethodKey, { en: string[]; ar: string[] }> = {
  strategy: {
    en: ["ONE-PAGER", "SITEMAP", "TEARDOWN", "SIGNED DOC", "90-DAY KPI", "WALKTHROUGH"],
    ar: ["وثيقة تموضع", "خريطة الموقع", "تشريح المنافسين", "ميثاق معتمد", "مؤشرات 90 يوم", "شرح مسجل"],
  },
  design: {
    en: ["PROTOTYPE", "DESIGN SYSTEM", "SCREEN SUITE", "BRAND KIT", "FIGMA SYSTEM", "DEV HANDOFF"],
    ar: ["نموذج تفاعلي", "منظومة واجهات", "شاشات حية", "أصول الهوية", "قوالب فيجما", "تسليم برمجي"],
  },
  build: {
    en: ["NEXT.JS APP", "ADMIN COCKPIT", "CONVERSION FLOW", "SEO & METRICS", "CLOUD BACKUPS", "30-DAY SLA"],
    ar: ["تطبيق Next.js", "لوحة التحكم", "بوابات الدفع", "أرشفة وتحليلات", "نسخ سحابي", "دعم 30 يوم"],
  },
};

const DELIVERABLE_SHORT_DESCS: Record<MethodKey, { en: string[]; ar: string[] }> = {
  strategy: {
    en: [
      "Bilingual core positioning & messaging.",
      "Live site hierarchy & designated page leads.",
      "Competitor pricing, gaps & unfair advantages.",
      "Strict scope boundary signed before kickoff.",
      "Milestone KPIs & executive tracking sheet.",
      "Full video walkthrough & handover archive.",
    ],
    ar: [
      "تموضع ثنائي اللغة ومنظومة رسائل متكاملة.",
      "هيكلية تصفح معتمدة وتوزيع مهام الصفحات.",
      "تحليل مقارن للأسعار والثغرات التنافسية.",
      "ميثاق معتمد يحدد النطاق ويمنع الهدر.",
      "مؤشرات قياس واضحة مع جدول متابعة تنفيذي.",
      "فيديو تسليم مسجل وشرح كامل لفريقك.",
    ],
  },
  design: {
    en: [
      "Clickable mobile flows tested with real users.",
      "Tokens, typography, components & icons.",
      "Figma production screens in Arabic & English.",
      "Vector assets, covers & printable rate cards.",
      "Figma & Canva locked-style master templates.",
      "Zero-friction code handoff with motion specs.",
    ],
    ar: [
      "مسارات تفاعلية مجربة على هواتف حقيقية.",
      "منظومة تصميم كاملة بالألوان والخطوط والأيقونات.",
      "شاشات إنتاجية باللغتين العربية والإنجليزية.",
      "أصول متجهة وأغلفة وقوائم أسعار جاهزة.",
      "قوالب فيجما وكانفا بأنماط مقفلة للاستخدام.",
      "مواصفات دقيقة للمبرمجين مع ملاحظات الحركة.",
    ],
  },
  build: {
    en: [
      "Zero-debt, ultra-fast Next.js architecture.",
      "Arabic CMS cockpit with tailored permissions.",
      "Tested checkout, bookings & WhatsApp engine.",
      "Technical SEO, telemetry & analytics wired in.",
      "Automated off-site backups & monitoring.",
      "Direct bug-fix SLA & recorded handover.",
    ],
    ar: [
      "منصة Next.js فائقة السرعة وخالية من الأخطاء.",
      "لوحة تحكم مرنة بتسميات عربية وتدريب شامل.",
      "محركات دفع وحجز وواتساب مختبرة بالكامل.",
      "أرشفة متقدمة وأدوات تحليلات مربوطة مباشرة.",
      "نسخ احتياطي سحابي ومراقبة حية للأداء.",
      "دعم فني مباشر لمدة 30 يوماً مع أرشيف التسليم.",
    ],
  },
};

interface WorkShowcaseItem {
  id: string;
  slug: string;
  categoryEn: string;
  categoryAr: string;
  titleEn: string;
  titleAr: string;
  clientEn: string;
  clientAr: string;
  image: string;
}

const WORK_SHOWCASE_ITEMS: WorkShowcaseItem[] = [
  {
    id: "aqarawi",
    slug: "mobile-apps",
    categoryEn: "Mobile Apps & SaaS",
    categoryAr: "تطبيقات الهواتف والـ SaaS",
    titleEn: "Aqarawi Real Estate SuperApp & Live Auctions",
    titleAr: "تطبيق عقاروي للمزادات العقارية الفورية",
    clientEn: "Aqarawi Global · Riyadh & Dubai",
    clientAr: "عقاروي العقارية · الرياض ودبي",
    image: "/portfolio/mobile-app-development/aqarawi/Aqarawi.png",
  },
  {
    id: "altayar-web",
    slug: "websites",
    categoryEn: "Websites & Platforms",
    categoryAr: "المواقع والمنصات الرقمية",
    titleEn: "Direct Events Ticketing & High-Traffic Portal",
    titleAr: "بوابة فعاليات دايركت للحجوزات والمؤتمرات",
    clientEn: "Direct Group · Munich & Cairo",
    clientAr: "مجموعة دايركت الدولية",
    image: "/sectors/corporate-websites.jpg",
  },
  {
    id: "supportplus-id",
    slug: "corporate-identity",
    categoryEn: "Corporate Identity",
    categoryAr: "الهوية المؤسسية",
    titleEn: "SupportPlus Healthcare Corporate Identity System",
    titleAr: "منظومة الهوية المؤسسية لمجموعة سبورت بلس",
    clientEn: "SupportPlus Medical · Egypt & Gulf",
    clientAr: "سبورت بلس الطبية · مصر والخليج",
    image: "/portfolio/corporate-identity/supportplus/social-media-identity1.jpg",
  },
  {
    id: "altayar-social",
    slug: "social-media",
    categoryEn: "Social Media & Growth",
    categoryAr: "السوشيال ميديا والنمو",
    titleEn: "Altayar VIP Aviation Social Presence & Acquisition",
    titleAr: "حملات الاستحواذ والهوية الرقمية للطيار VIP",
    clientEn: "Altayar Aviation · GCC",
    clientAr: "الطيار للطيران · الخليج",
    image: "/portfolio/corporate-identity/supportplus/social-media-identity7.jpg",
  },
  {
    id: "altayar-video",
    slug: "video-editing",
    categoryEn: "Video Editing & Ads",
    categoryAr: "المونتاج والإعلانات المرئية",
    titleEn: "Altayar VIP Aviation Cinematic Commercial Series",
    titleAr: "سلسلة الإعلانات السينمائية لأسطول طائرات VIP",
    clientEn: "Altayar Aviation Concierge",
    clientAr: "الطيار لخدمات الطيران",
    image: "/portfolio/corporate-identity/supportplus/social-media-identity10.jpg",
  },
  {
    id: "ahd-water",
    slug: "mobile-apps",
    categoryEn: "Mobile Apps & SaaS",
    categoryAr: "تطبيقات الهواتف والـ SaaS",
    titleEn: "AHD Water Delivery & Subscription SuperApp",
    titleAr: "تطبيق مياه عهد للاشتراكات والتوصيل الفوري",
    clientEn: "AHD Water Co. · Saudi Arabia",
    clientAr: "شركة مياه عهد · السعودية",
    image: "/portfolio/mobile-app-development/ahd-water/AHDWater.png",
  },
  {
    id: "ecommerce-web",
    slug: "websites",
    categoryEn: "Websites & Platforms",
    categoryAr: "المواقع والمنصات الرقمية",
    titleEn: "Omnichannel Luxury E-Commerce Engine",
    titleAr: "منصة تجارة إلكترونية متكاملة للعلامات الفاخرة",
    clientEn: "Pencil Retail Architecture",
    clientAr: "بينسل للتجارة الرقمية",
    image: "/sectors/e-commerce.jpg",
  },
  {
    id: "beedor-id",
    slug: "corporate-identity",
    categoryEn: "Corporate Identity",
    categoryAr: "الهوية المؤسسية",
    titleEn: "Beedor Luxury Architectural Brand Mark",
    titleAr: "الهوية البصرية لشركة بيدور للتطوير العقاري",
    clientEn: "Beedor Developments · Cairo",
    clientAr: "بيدور للتطوير العقاري · القاهرة",
    image: "/portfolio/corporate-identity/supportplus/social-media-identity3.jpg",
  },
  {
    id: "medical-social",
    slug: "social-media",
    categoryEn: "Social Media & Growth",
    categoryAr: "السوشيال ميديا والنمو",
    titleEn: "Healthcare Multi-Branch Lead Generation Campaign",
    titleAr: "حملات التوسع الرقمي واستقطاب المرضى",
    clientEn: "24Etb Medical Clinics",
    clientAr: "عيادات 24Etb الطبية",
    image: "/portfolio/corporate-identity/supportplus/social-media-identity8.jpg",
  },
  {
    id: "superfeliz-app",
    slug: "mobile-apps",
    categoryEn: "Mobile Apps & SaaS",
    categoryAr: "تطبيقات الهواتف والـ SaaS",
    titleEn: "SuperFeliz Intelligent Business Automation Suite",
    titleAr: "منظومة سوبر فيليز للأتمتة والذكاء الاصطناعي",
    clientEn: "Pencil Ventures · Enterprise",
    clientAr: "استوديو بينسل · قطاع الأعمال",
    image: "/portfolio/mobile-app-development/superfeilz/SuperFeliz.png",
  },
  {
    id: "aqarawi-video",
    slug: "video-editing",
    categoryEn: "Video Editing & Ads",
    categoryAr: "المونتاج والإعلانات المرئية",
    titleEn: "Aqarawi 3D Architectural Property Tour & Visual FX",
    titleAr: "جولات عقارية ثلاثية الأبعاد ومؤثرات بصرية",
    clientEn: "Aqarawi Real Estate Auctions",
    clientAr: "مزادات عقاروي العقارية",
    image: "/portfolio/corporate-identity/supportplus/social-media-identity12.jpg",
  },
  {
    id: "medical-web",
    slug: "websites",
    categoryEn: "Websites & Platforms",
    categoryAr: "المواقع والمنصات الرقمية",
    titleEn: "Medical Booking & Clinic Management Platform",
    titleAr: "منصة الحجوزات الطبية وإدارة العيادات",
    clientEn: "Healthcare Authority · Cairo",
    clientAr: "منظومة الرعاية الصحية",
    image: "/sectors/medical-clinics.jpg",
  },
];

const PAIN_ICONS: Record<MethodKey, React.ElementType[]> = {
  strategy: [Flame, Target, ShieldCheck, Globe],
  design: [MessageSquare, Sparkles, Languages, Layout],
  build: [Activity, CalendarCheck, Lock, Cpu],
};

export function MethodPage({ content }: { content: MethodContent }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;
  const [currency, setCurrency] = useState<PricingCurrencyCode>("USD");
  const [tIndex, setTIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeDeliverable, setActiveDeliverable] = useState(0);

  const others = METHOD_ORDER.filter((k) => k !== content.key).map((k) => METHOD_CONTENT[k]);
  const t = content.testimonials[tIndex % content.testimonials.length];

  const money = (usd: number) => {
    const c = PRICING_CURRENCIES[currency] || PRICING_CURRENCIES.USD;
    const converted = Math.round(usd * c.rateVsUsd);
    const formattedVal = new Intl.NumberFormat("en-US").format(converted);
    if (currency === "USD") return `$${formattedVal}`;
    if (currency === "EUR") return `€${formattedVal}`;
    if (currency === "GBP") return `£${formattedVal}`;
    if (currency === "SAR") return isRtl ? `${formattedVal} ⃁` : `⃁${formattedVal}`;
    if (currency === "EGP") return isRtl ? `${formattedVal} ج.م` : `E£${formattedVal}`;
    return `$${formattedVal}`;
  };

  // Process steps as Connected Carousel Items (matching From Diagnostic to Market 3D carousel)
  const processCarouselItems: CarouselItem[] = content.steps.map((s, i) => {
    const images = [
      "/solutions/Diagnostic-&-Architecture-Blueprint.jpg",
      "/solutions/Rapid-Production-Sprint.jpg",
      "/solutions/Stress-Testing-&-Training.jpg",
      "/solutions/Launch-&-Managed-SLA.jpg",
    ];
    return {
      id: isRtl ? `المرحلة // 0${i + 1}` : `PHASE // 0${i + 1}`,
      days: isRtl ? s.timeAr : s.timeEn,
      stat: isRtl ? s.tAr : s.tEn,
      quote: isRtl ? s.dAr : s.dEn,
      author: isRtl ? `تسليم المرحلة 0${i + 1}` : `Phase 0${i + 1} Deliverable`,
      role: isRtl
        ? content.deliverablesAr[i] || s.tAr
        : content.deliverablesEn[i] || s.tEn,
      defaultImage: images[i % images.length],
      selectedImage: images[i % images.length],
      alt: isRtl ? s.tAr : s.tEn,
      badge: isRtl ? `المرحلة 0${i + 1}` : `Phase 0${i + 1}`,
    };
  });

  // Statement marquee lanes data
  const marqueeStatements = isRtl
    ? [
        "تسليم معتمد بنسبة 100%",
        "عقود عمل ومواثيق SLA صارمة",
        "واجهات وتطبيقات بسرعة تفوق 90+",
        "تصميم وتطوير بدون وسطاء",
        "كود نظيف ووثائق معمارية كاملة",
        "تسليم أسبوعي بروابط حية على هاتفك",
        "صفر مفاجآت وصفر تأخير",
      ]
    : [
        "100% Verified Milestones",
        "Ironclad SLA Contracts",
        "Core Web Vitals 95+ Guarantee",
        "Zero Intermediaries · Direct Senior Team",
        "Clean Code & Complete System Docs",
        "Weekly Live Walkthroughs on Mobile",
        "Zero Surprises · Zero Drag",
      ];

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-[#2057FF] selection:text-white"
    >
      {/* Header */}
      <Header light />

      {/* ============================================================ */}
      {/* 1. HERO - Minimalist Iconic Layout (matching Reference Image)*/}
      {/* ============================================================ */}
      <MethodMinimalHero content={content} priceLabel={`${money(content.priceFromUsd)}+`} />

      {/* ============================================================ */}
      {/* 2. CAPABILITY STATEMENT LANES (Matching Services Style)      */}
      {/* ============================================================ */}
      <MethodStatementLanes methodKey={content.key} isRtl={isRtl} />

      {/* ============================================================ */}
      {/* 3. MARKET REALITY (Matching "The Four Principles" Showcase)   */}
      {/* ============================================================ */}
      <section className="pt-20 sm:pt-28 pb-0 bg-[#FFFFFF] border-b border-neutral-200/90 relative overflow-hidden">
        {/* Header: Left Headline vs Right Minimal Arrow & Note (Constrained in container) */}
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-12 sm:pb-16 text-start">
              <div className="max-w-xl">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {isRtl ? "01 // بصراحة وبلا مجاملة" : "01 // MARKET REALITY"}
                </span>
                <h2 className={cn("mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.14] text-neutral-900", isRtl ? "tracking-normal" : "tracking-tight")}>
                  {isRtl ? (
                    <>
                      {content.painsTitleAr}{" "}
                      <span className="font-light italic text-neutral-500">
                        {content.painsAccentAr}
                      </span>
                    </>
                  ) : (
                    <>
                      {content.painsTitleEn}{" "}
                      <span className="font-light italic text-neutral-500">
                        {content.painsAccentEn}
                      </span>
                    </>
                  )}
                </h2>
              </div>

              <div className="flex items-start gap-3 max-w-md pt-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm">
                  <ArrowDownRight size={17} className={isRtl ? "scale-x-[-1]" : ""} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-neutral-950">
                    {isRtl ? "معالجة حقيقية لعنق الزجاجة" : "Direct Bottleneck Resolution"}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                    {isRtl ? content.painsSubAr : content.painsSubEn}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Overlapping Showcase Area */}
        <div className="relative w-full">
          {/* 4 Cards Grid (Layered on top with z-20 inside container) */}
          <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch pt-2 lg:pt-6">
              {content.pains.map((p, i) => {
                const Icon = PAIN_ICONS[content.key]?.[i] || PAIN_ICONS.build[i];
                const isHighlight = i === 1; // Card 02 highlighted in Signature Royal Blue with elevated float

                if (isHighlight) {
                  return (
                    <Reveal key={i} delay={0.1 + i * 0.05} className="h-full">
                      <div className="h-full min-h-[210px] sm:min-h-[230px] rounded-3xl bg-[#2057FF] text-white p-6 sm:p-7 flex flex-col justify-start shadow-2xl shadow-blue-600/40 lg:-translate-y-6 transition-transform duration-300 hover:lg:-translate-y-7 hover:-translate-y-1 text-start group">
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight" dir="ltr">
                            0{i + 1}
                          </p>
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                        <h3 className="mt-4 text-base sm:text-lg font-black text-white tracking-tight">
                          {isRtl ? p.tAr : p.tEn}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                          {isRtl ? p.dAr : p.dEn}
                        </p>
                      </div>
                    </Reveal>
                  );
                }

                return (
                  <Reveal key={i} delay={0.1 + i * 0.05} className="h-full">
                    <div className="h-full min-h-[210px] sm:min-h-[230px] rounded-3xl border border-neutral-100 bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-neutral-900/10 transition-transform duration-300 hover:-translate-y-1 text-start group">
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight" dir="ltr">
                          0{i + 1}
                        </p>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800 shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="mt-4 text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                        {isRtl ? p.tAr : p.tEn}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        {isRtl ? p.dAr : p.dEn}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* FULL BLEED IMAGE: market-reality.jpg Edge-to-Edge 100vw overlapping bottom of cards */}
          <div className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32 w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] overflow-hidden">
            <Image
              src="/digital-product/market-reality.jpg"
              alt={isRtl ? "واقع وتحديات السوق" : "Market Reality"}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PROCESS - Connected 3D Carousel (From Diagnostic Style)  */}
      {/* ============================================================ */}
      <section className="relative py-20 md:py-28 bg-[#FFFFFF] border-b border-neutral-200/80 overflow-hidden">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="animate-aura-1 absolute -top-32 left-1/4 h-[440px] w-[440px] rounded-full bg-[#2057FF]/5 blur-[160px]" />
          <div className="animate-aura-2 absolute bottom-0 right-1/4 h-[440px] w-[440px] rounded-full bg-[#10B981]/5 blur-[160px]" />
        </div>

        <div className="container-custom relative z-10">
          <MethodHeading
            badge={isRtl ? "02 // منهجية التنفيذ" : "02 // SPRINT EXECUTION"}
            title={isRtl ? content.processTitleAr : content.processTitleEn}
            accent={isRtl ? content.processAccentAr : content.processAccentEn}
            subtitle={isRtl ? "التزام زمني صارم ومحطات تسليم معتمدة" : "Fixed Timelines & Sign-off Checkpoints"}
            description={isRtl ? content.processSubAr : content.processSubEn}
          />
        </div>

        {/* 3D Connected Carousel (Full Width matching Solutions page) */}
        <div className="relative w-full z-10">
          <CalendlyCarousel
            items={processCarouselItems}
            autoPlayInterval={6500}
            pauseOnHover={true}
            isRtl={isRtl}
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. STATEMENT LANES (Continuous High-Velocity Marquee)       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-y border-blue-600/70 bg-[#2057FF] py-4 text-white select-none shadow-inner shadow-blue-800/20">
        <div className="flex w-max items-center statement-ticker-ltr" dir="ltr">
          {/* Loop Set 1 */}
          <div className="flex items-center shrink-0">
            {[...marqueeStatements, ...marqueeStatements].map((st, i) => (
              <div key={`h1-${i}`} className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {st}
                </span>
                <span className="text-white/60 font-mono text-xs sm:text-sm font-bold select-none">+</span>
              </div>
            ))}
          </div>
          {/* Loop Set 2 (Exact duplicate for seamless infinite loop) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {[...marqueeStatements, ...marqueeStatements].map((st, i) => (
              <div key={`h2-${i}`} className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8">
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {st}
                </span>
                <span className="text-white/60 font-mono text-xs sm:text-sm font-bold select-none">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. STORY + DELIVERABLES (3-Column Architectural Flagship)    */}
      {/* ============================================================ */}
      <section id="deliverables" className="scroll-mt-24 relative py-16 sm:py-20 lg:py-24 bg-[#F8F9FC] border-b border-neutral-200/90 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">

            {/* ── COLUMN 1 (LEFT): Top Narrative & Arrow + Bottom Title & Eyebrow ── */}
            <div className="flex h-full flex-col justify-between py-1 text-start lg:col-span-4">
              {/* Top: Arrow + Subtitle + Description + Body Text */}
              <Reveal>
                <div>
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-md shadow-blue-600/25">
                    <ArrowDownRight className={cn("h-5 w-5", isRtl && "-scale-x-100")} />
                  </div>

                  <p className="mt-4 text-sm sm:text-base font-bold text-neutral-950">
                    {isRtl ? "تسليمات إنتاجية جاهزة للعمل المباشر" : "Production-Ready Shipped Assets"}
                  </p>

                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-neutral-600 font-medium">
                    {isRtl
                      ? "أسبوع واحد من التفكير المعمق الآن، يوفر عليك ثلاثة أشهر من إعادة العمل وتكاليف الهدر."
                      : "One week of hard thinking now. Three months of rework you never pay for."}
                  </p>

                  <div className="mt-4 space-y-3">
                    {(isRtl ? content.splitBodyAr : content.splitBodyEn).map((par, i) => (
                      <p key={i} className="text-xs sm:text-[13px] leading-relaxed text-neutral-500">
                        {par}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Bottom: Eyebrow + Main Title + CTA Button */}
              <Reveal delay={0.1}>
                <div className="mt-8 pt-4 lg:mt-auto">
                  <div className="text-xs sm:text-[13px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                    {isRtl ? "03 // المخرجات المعتمدة" : "03 // WHAT YOU SIGN OFF"}
                  </div>

                  <h2 className={cn("mt-2 text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-neutral-900", isRtl ? "tracking-normal" : "tracking-tight")}>
                    {isRtl ? (
                      <>
                        {content.splitTitleAr} <br className="hidden sm:inline" />
                        <span className="font-light italic text-neutral-500">{content.splitAccentAr}</span>
                      </>
                    ) : (
                      <>
                        {content.splitTitleEn} <br className="hidden sm:inline" />
                        <span className="font-light italic text-neutral-500">{content.splitAccentEn}</span>
                      </>
                    )}
                  </h2>

                  <div className="mt-6 pt-1 flex items-center gap-3">
                    <PencilButton
                      href="#pricing"
                      variant="primary"
                      size="default"
                      hoverLabel={isRtl ? "حاسبة الأسعار ←" : "Pricing Calculator →"}
                      className="font-bold shadow-md hover:shadow-lg"
                    >
                      {isRtl ? "احسب استثمار مرحلتك" : "Calculate Investment"}
                    </PencilButton>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── COLUMN 2 (CENTER): Pure Clean Image in Middle ── */}
            <div className="flex h-full flex-col lg:col-span-4">
              <Reveal delay={0.08} className="h-full">
                <div className="relative block h-full min-h-[460px] sm:min-h-[520px] lg:min-h-0 w-full overflow-hidden rounded-[26px] sm:rounded-[30px] border border-neutral-200/90 bg-white shadow-md">
                  <Image
                    src={content.splitImage}
                    alt={isRtl ? content.titleAr : content.titleEn}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                </div>
              </Reveal>
            </div>

            {/* ── COLUMN 3 (RIGHT): 6 Stacked Deliverables Cards (Compact, Streamlined) ── */}
            <div className="flex h-full flex-col justify-between gap-2 sm:gap-2.5 lg:col-span-4">
              {(isRtl ? content.deliverablesAr : content.deliverablesEn).map((d, i) => {
                const isActive = activeDeliverable === i;
                const badges = DELIVERABLE_BADGES[content.key] || DELIVERABLE_BADGES.strategy;
                const badgeLabel = isRtl ? badges.ar[i] : badges.en[i];
                const shortDescs = DELIVERABLE_SHORT_DESCS[content.key] || DELIVERABLE_SHORT_DESCS.strategy;
                const shortDesc = isRtl ? shortDescs.ar[i] : shortDescs.en[i];

                return (
                  <Reveal key={i} delay={0.03 * i} className="flex-1 flex">
                    <div
                      onClick={() => setActiveDeliverable(i)}
                      className={cn(
                        "group flex flex-1 flex-col justify-center cursor-pointer rounded-2xl p-3 sm:py-3 sm:px-3.5 text-start transition-all duration-300",
                        isActive
                          ? "bg-[#2057FF] text-white shadow-lg shadow-blue-600/25 border border-transparent"
                          : "bg-white border border-neutral-200/90 text-neutral-900 shadow-2xs hover:border-[#2057FF]/40 hover:bg-neutral-50/70"
                      )}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={cn(
                            "font-mono text-xs font-black tracking-wider block",
                            isActive ? "text-blue-200" : "text-neutral-400"
                          )}
                          dir="ltr"
                        >
                          0{i + 1}
                        </span>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[9.5px] font-mono font-bold tracking-wider uppercase",
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-neutral-100 text-neutral-600"
                          )}
                        >
                          {badgeLabel || (isRtl ? "مخرج معتمد" : "SHIPPED")}
                        </span>
                      </div>
                      <h3
                        className={cn(
                          "text-xs sm:text-[13px] font-bold leading-snug line-clamp-1",
                          isActive ? "text-white" : "text-neutral-950"
                        )}
                      >
                        {d}
                      </h3>
                      <p
                        className={cn(
                          "mt-0.5 text-[11px] leading-tight line-clamp-1",
                          isActive ? "text-blue-100/90" : "text-neutral-500"
                        )}
                      >
                        {shortDesc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. GALLERY (Live Work Showcase - 5 Internal Services)        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-b border-neutral-200/80 bg-[#FAFAFA] py-20 md:py-28">
        <div className="container-custom">
          <MethodHeading
            badge={isRtl ? "04 // سجل الإنجاز وسابقة الأعمال" : "04 // LIVE WORK SHOWCASE"}
            title={isRtl ? "أعمال حية من أرض الواقع،" : "Live projects,"}
            accent={isRtl ? "من أقسامنا الخمسة المتخصصة." : "shipped and running."}
            subtitle={isRtl ? "مختارات حية من أعمالنا عبر الأقسام الخمسة في /work" : "Curated implementations from our 5 internal production divisions"}
            description={
              isRtl
                ? "نماذج مختارة عشوائياً من سابقة أعمالنا في الهوية المؤسسية، المواقع، التطبيقات، السوشيال ميديا، والمونتاج."
                : "Real, live commercial systems engineered and shipped across our five production departments."
            }
          />
        </div>

        <div className="mt-8 overflow-hidden" dir="ltr">
          <div className={cn("flex w-max gap-5 hover:[animation-play-state:paused]", isRtl ? "gallery-marquee-rtl" : "gallery-marquee-ltr")}>
            {[...WORK_SHOWCASE_ITEMS, ...WORK_SHOWCASE_ITEMS].map((item, i) => (
              <Link
                key={item.id + "-" + i}
                href={`/work/${item.slug}`}
                className="group w-[80vw] shrink-0 overflow-hidden rounded-[2rem] border border-neutral-200/90 bg-white shadow-md hover:shadow-xl hover:border-[#2057FF]/40 transition-all sm:w-[420px] lg:w-[480px] block select-none cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={isRtl ? item.titleAr : item.titleEn}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 80vw, 480px"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 start-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 backdrop-blur-md text-neutral-900 border border-white/60 shadow-xs group-hover:border-[#2057FF] group-hover:text-[#2057FF] transition-colors">
                      {isRtl ? item.categoryAr : item.categoryEn}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <span className="font-mono text-xs font-bold text-neutral-400 block mb-1" dir="ltr">
                      {String((i % WORK_SHOWCASE_ITEMS.length) + 1).padStart(2, "0")} // {isRtl ? item.clientAr : item.clientEn}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug truncate group-hover:text-[#2057FF] transition-colors">
                      {isRtl ? item.titleAr : item.titleEn}
                    </h3>
                  </div>

                  <div className="size-9 rounded-full bg-neutral-100 text-neutral-700 group-hover:bg-[#2057FF] group-hover:text-white flex items-center justify-center transition-all shadow-xs shrink-0">
                    <ArrowUpRight size={16} className={isRtl ? "-scale-x-100" : ""} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. COMPARE TABLE (PENCIL vs Traditional Agency)              */}
      {/* ============================================================ */}
      <section className="relative py-20 md:py-28 bg-white border-b border-neutral-200/80">
        <div className="container-custom">
          <MethodHeading
            badge={isRtl ? "05 // المقارنة الصريحة" : "05 // COMPARISON"}
            title={isRtl ? content.compareTitleAr : content.compareTitleEn}
            accent={isRtl ? content.compareAccentAr : content.compareAccentEn}
            subtitle={isRtl ? "وضوح كامل في الالتزام والمسؤولية" : "Unambiguous Accountability & Commitments"}
            description={isRtl ? content.compareSubAr : content.compareSubEn}
          />

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-neutral-200/90 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-start">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50/80">
                    <th className="p-5 sm:p-6 text-xs sm:text-sm font-mono font-bold uppercase text-neutral-500 text-start">
                      {isRtl ? "المعيار" : "Criterion"}
                    </th>
                    <th className="p-5 sm:p-6 text-xs sm:text-sm font-mono font-bold uppercase text-neutral-400 text-start">
                      {isRtl ? "الشركات التقليدية" : "Traditional Agencies"}
                    </th>
                    <th className="p-5 sm:p-6 text-xs sm:text-sm font-mono font-bold uppercase text-[#2057FF] bg-blue-50/40 text-start">
                      <div className="inline-flex items-center gap-1.5">
                        <BadgeCheck size={16} />
                        <span>PENCIL Studio</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm font-medium">
                  {content.compareRows.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="p-5 sm:p-6 font-bold text-neutral-900">
                        {isRtl ? row.labelAr : row.labelEn}
                      </td>
                      <td className="p-5 sm:p-6 text-neutral-500">
                        <div className="flex items-start gap-2">
                          <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                          <span>{isRtl ? row.themAr : row.themEn}</span>
                        </div>
                      </td>
                      <td className="p-5 sm:p-6 bg-blue-50/20 font-bold text-neutral-950">
                        <div className="flex items-start gap-2">
                          <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{isRtl ? row.usAr : row.usEn}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. PRICING PACKAGES                                         */}
      {/* ============================================================ */}
      <section id="pricing" className="scroll-mt-24 relative py-20 md:py-28 bg-[#F8F9FC] border-b border-neutral-200/80">
        <div className="container-custom">
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col justify-between gap-6 pb-2 text-start md:flex-row md:items-start lg:gap-12">
              {/* Left Column: Eyebrow + Main Title */}
              <div className="max-w-2xl">
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-mono font-bold tracking-wider mb-4 shadow-2xs text-[#2057FF]">
                    <span className="size-1.5 rounded-full bg-[#2057FF] animate-pulse" />
                    <span>{isRtl ? "06 // باقات الاستثمار" : "06 // INVESTMENT TIERS"}</span>
                  </div>

                  <h2 className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.14] text-neutral-900", isRtl ? "tracking-normal" : "tracking-tight")}>
                    {isRtl ? content.pricingTitleAr : content.pricingTitleEn}{" "}
                    <span className="font-light italic text-neutral-500">
                      {isRtl ? content.pricingAccentAr : content.pricingAccentEn}
                    </span>
                  </h2>
                </Reveal>
              </div>

              {/* Right Column: Subtitle & Description on top, and Currency Bar directly below */}
              <div className="flex max-w-lg flex-col items-start gap-4 pt-1 lg:pt-3">
                <Reveal delay={0.08}>
                  <div className="flex items-start gap-3.5">
                    <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-md shadow-blue-600/25 mt-0.5 transition-all duration-300 hover:scale-105">
                      <ArrowDownRight
                        size={18}
                        className={cn("transition-transform", isRtl && "-scale-x-100")}
                      />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-neutral-950">
                        {isRtl ? "تسعير قطعي ومخرجات محددة" : "Fixed Pricing with Guaranteed Scope"}
                      </p>
                      <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-neutral-500 font-medium">
                        {isRtl ? content.pricingSubAr : content.pricingSubEn}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Quick Currency Selector directly below */}
                <Reveal delay={0.12}>
                  <div className="relative inline-flex items-center gap-1.5 rounded-2xl border border-neutral-200/90 bg-white p-1.5 shadow-2xs" dir="ltr">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2">
                      {isRtl ? "العملة:" : "CURRENCY:"}
                    </span>
                    {PRICING_CURRENCY_CODES.map((currCode) => {
                      const c = PRICING_CURRENCIES[currCode];
                      const isSelected = currency === currCode;
                      return (
                        <button
                          key={currCode}
                          type="button"
                          onClick={() => setCurrency(currCode)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-mono font-bold transition-all cursor-pointer",
                            isSelected
                              ? "bg-[#2057FF] text-white shadow-xs"
                              : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                          )}
                        >
                          <span className={cn("text-[11px] font-bold", isSelected ? "text-blue-100" : "text-[#2057FF]")}>
                            {c.symbol}
                          </span>
                          <span>{c.code}</span>
                        </button>
                      );
                    })}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {content.tiers.map((pkg, i) => {
              const isDark = pkg.featured;
              return (
                <Reveal key={pkg.nameEn} delay={0.06 * i} className="h-full">
                  <div
                    className={cn(
                      "relative flex flex-col justify-between h-full rounded-[2.25rem] p-8 transition-all duration-300 shadow-xl",
                      isDark
                        ? "bg-neutral-950 text-white border-2 border-[#2057FF] shadow-blue-500/10 lg:-translate-y-2"
                        : "bg-white text-neutral-900 border border-neutral-200/90 hover:border-neutral-300"
                    )}
                  >
                    {(pkg.featured || pkg.badgeEn) && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#2057FF] px-4 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-md">
                        {isRtl ? (pkg.badgeAr || "الأكثر طلباً") : (pkg.badgeEn || "MOST POPULAR")}
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-mono font-bold uppercase",
                            isDark
                              ? "bg-white/10 text-white"
                              : "bg-neutral-100 text-neutral-800"
                          )}
                        >
                          {isRtl ? pkg.nameAr : pkg.nameEn}
                        </span>
                        <span
                          className={cn(
                            "text-xs font-mono font-bold",
                            isDark ? "text-neutral-400" : "text-neutral-500"
                          )}
                        >
                          {isRtl ? (pkg.durationAr || content.durationAr) : (pkg.durationEn || content.durationEn)}
                        </span>
                      </div>

                      <div className="mt-6 flex flex-wrap items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight" dir="ltr">
                          {money(pkg.priceUsd)}
                        </span>
                        {pkg.originalPriceUsd && (
                          <span
                            className={cn(
                              "text-sm sm:text-base line-through font-mono font-bold",
                              isDark ? "text-neutral-500" : "text-neutral-400"
                            )}
                            dir="ltr"
                          >
                            {money(pkg.originalPriceUsd)}
                          </span>
                        )}
                        <span
                          className={cn(
                            "text-xs font-mono",
                            isDark ? "text-neutral-400" : "text-neutral-500"
                          )}
                        >
                          {isRtl ? "استثمار قطعي" : "fixed flat"}
                        </span>
                      </div>

                      <p
                        className={cn(
                          "mt-3 text-xs sm:text-sm font-medium leading-relaxed",
                          isDark ? "text-neutral-300" : "text-neutral-600"
                        )}
                      >
                        {isRtl ? pkg.blurbAr : pkg.blurbEn}
                      </p>

                      <div
                        className={cn(
                          "mt-6 pt-6 border-t space-y-3",
                          isDark ? "border-white/10" : "border-neutral-100"
                        )}
                      >
                        {(isRtl ? pkg.pointsAr : pkg.pointsEn).map((f) => (
                          <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                            <Check
                              size={16}
                              className={cn(
                                "shrink-0 mt-0.5",
                                isDark ? "text-emerald-400" : "text-emerald-600"
                              )}
                            />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-100/10">
                      <PencilButton
                        href={`https://wa.me/201003778273?text=${encodeURIComponent(
                          isRtl
                            ? `مرحباً PENCIL Studio، أود الاستفسار وحجز باقة "${pkg.nameAr}" (${money(pkg.priceUsd)}).`
                            : `Hello PENCIL Studio, I would like to inquire about and book the "${pkg.nameEn}" tier (${money(pkg.priceUsd)}).`
                        )}`}
                        variant={isDark ? "primary" : "outline"}
                        size="md"
                        className="w-full justify-center"
                        hoverLabel={isRtl ? "احجز الباقة ←" : "Book Tier →"}
                      >
                        <span>{isRtl ? "اختر هذه الباقة" : "Select Tier"}</span>
                      </PencilButton>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. ESTIMATOR (Interactive Scope & Price Tool)              */}
      {/* ============================================================ */}
      <section className="relative py-20 md:py-28 bg-white border-b border-neutral-200/80">
        <div className="container-custom">
          <MethodHeading
            badge={isRtl ? "07 // حاسبة التقدير" : "07 // COST ESTIMATOR"}
            title={isRtl ? "خصّص نطاق عملك،" : "Customize Your Scope,"}
            accent={isRtl ? "واكتشف التكلفة فوراً." : "Get Instant Estimates."}
            subtitle={isRtl ? "حساب فوري للمدة والاستثمار" : "Instant Scope, Price & Timeline Calibrator"}
            description={isRtl ? "أداة تفاعلية مباشرة لاحتساب التكلفة والجدول الزمني التقديري وفق متطلبات مشروعك الفعلية." : "Interactive tool to calculate your timeline and budget based on production deliverables."}
          />

          <div className="mt-8">
            <PricingCalculator
              methodKey={content.key}
              currency={currency}
              onCurrencyChange={setCurrency}
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FAQ + LIVE SUPPORT CARD (Split Section)                 */}
      {/* ============================================================ */}
      <section className="relative py-20 md:py-28 bg-[#FAFAFA] border-b border-neutral-200/80">
        <div className="container-custom grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          {/* Left Column: Heading + Sticky WhatsApp Card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <MethodHeading
                className="mb-6 sm:mb-8"
                badge={isRtl ? "08 // الأسئلة الشائعة" : "08 // FAQ"}
                title={isRtl ? "إجابات صريحة،" : "Direct Answers,"}
                accent={isRtl ? "قبل أن تسأل." : "Before You Ask."}
                subtitle={isRtl ? "شفافية مطلقة في العقود والمخرجات" : "Total Transparency on Scope & Ownership"}
                description={isRtl ? "كل ما يدور بذهنك حول حقوق الملكية، أوقات التسليم، والتعديلات." : "Everything you need to know about IP ownership, delivery timelines, and revisions."}
              />

              <div className="mt-6 rounded-[2rem] border border-neutral-200/90 bg-white p-6 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <WhatsAppIcon size={24} />
                    <span className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-950">
                      {isRtl ? "تفضل النقاش المباشر؟" : "Prefer a Direct Chat?"}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {isRtl ? "متواجدون للرد الفوري على استفساراتك" : "Our leadership responds within 15 minutes"}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-600 font-bold">
                    {isRtl ? "متاح الآن على واتساب" : "Online on WhatsApp"}
                  </span>
                  <a
                    href="https://wa.me/201003778273"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-4 py-2 text-xs font-bold text-white hover:bg-[#2057FF] transition-colors"
                  >
                    <span>{isRtl ? "تواصل معنا" : "Chat Now"}</span>
                    <NextIcon size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {content.faq.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.qEn} delay={0.04 * i}>
                  <div className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-2xs transition-all hover:border-neutral-300">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between p-6 text-start"
                    >
                      <span className="text-base sm:text-lg font-bold text-neutral-950">
                        {isRtl ? f.qAr : f.qEn}
                      </span>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "shrink-0 text-neutral-400 transition-transform duration-300",
                          isOpen && "rotate-180 text-[#2057FF]"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600 border-t border-neutral-100">
                            {isRtl ? f.aAr : f.aEn}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. FINAL CONSULTATION BANNER ("Ready to Build an Engine")   */}
      {/* ============================================================ */}
      <section className="container-custom py-16 sm:py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] bg-gradient-to-br from-[#143eb8] via-[#2057ff] to-[#0f34a4] px-6 py-14 text-center text-white shadow-2xl shadow-blue-500/25 sm:px-12 md:px-16 md:py-20">
            {/* Dot matrix background & glows */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-900/40 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-md">
                {isRtl ? "الخطوة التالية // استشارة تنفيذية" : "TAKE THE NEXT STEP"}
              </span>

              <h2 className={cn("mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-white", isRtl ? "tracking-normal" : "tracking-tight")}>
                {isRtl ? (
                  <>
                    جاهز لبناء منظومة{" "}
                    <span className="font-light italic text-neutral-400">
                      تليق بطموح مشروعك؟
                    </span>
                  </>
                ) : (
                  <>
                    Ready to Build an Engine{" "}
                    <span className="font-light italic text-neutral-400">
                      Worthy of Your Ambition?
                    </span>
                  </>
                )}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/85">
                {isRtl
                  ? "احجز جلسة استشارية استراتيجية مع الفريق التنفيذي لبينسل. نراجع أهدافك التجارية، نحدد الاختناقات، ونرسم خارطة حلول واضحة دون أي التزام."
                  : "Book a strategic consultation with Pencil's executive team. We review your commercial goals, identify bottlenecks, and present a clear solution roadmap with zero obligation."}
              </p>

              {/* 3 Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
                <a
                  href="https://wa.me/201003778273"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-neutral-950 transition hover:bg-neutral-100 hover:scale-105 shadow-md shadow-black/10"
                >
                  <WhatsAppIcon size={18} />
                  <span>{isRtl ? "محادثة عبر واتساب" : "Chat on WhatsApp"}</span>
                </a>

                <a
                  href="mailto:info@dipencil.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20 hover:scale-105 shadow-sm"
                >
                  <Mail size={16} />
                  <span>{isRtl ? "إيميل مباشر للاستوديو" : "Email Studio"}</span>
                </a>

                <Link
                  href="/support/callback"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20 hover:scale-105 shadow-sm"
                >
                  <PhoneCall size={16} />
                  <span>{isRtl ? "طلب اتصال مباشر" : "Direct Call"}</span>
                </Link>
              </div>

              {/* Next Method Phases Links */}
              <div className="mt-12 pt-8 border-t border-white/15">
                <p className="text-xs font-mono font-bold text-white/70 uppercase tracking-wider mb-4">
                  {isRtl ? "استكشف مراحل المنهجية الأخرى:" : "EXPLORE OTHER METHOD PHASES:"}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {others.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/${m.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      <span>{isRtl ? m.stepAr : m.stepEn}</span>
                      <span>·</span>
                      <span className="font-light italic">{isRtl ? m.titleAr : m.titleEn}</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
