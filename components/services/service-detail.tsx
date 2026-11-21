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
  CheckCircle2,
  CirclePlay,
  Play,
  Layers,
  Palette,
  Grid3X3,
  BookOpenCheck,
  LayoutTemplate,
  Clapperboard,
  ShieldCheck,
  PackageCheck,
  PhoneCall,
  Mail,
  MessageSquare,
  Plus,
  Sparkles,
  Wrench,
} from "lucide-react";
import { CurrencyConverter } from "@/components/shared/ui/currency-converter";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { PencilButton } from "@/components/ui/pencil-button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicePricingMatrix } from "@/components/services/service-pricing-matrix";
import { SocialMediaPricingCards } from "@/components/services/social-media-pricing-cards";
import { ServiceStatementLanes } from "@/components/services/service-statement-lanes";
import { Reveal } from "@/components/shared/motion/reveal";
import { SectionHeading } from "@/components/shared/typography/section-heading";
import { useLanguage } from "@/components/language-context";
import { services, getRelatedServices, type Service } from "@/lib/services/services";
import { cn } from "@/lib/utils";

const DELIVERABLE_ICONS = [
  Layers,
  Palette,
  Grid3X3,
  BookOpenCheck,
  LayoutTemplate,
  Clapperboard,
];

export function ServiceDetail({ service }: { service: Service }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const related = getRelatedServices(service.slug, 3);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const portfolioPoints = isRtl
    ? [
      {
        n: "01",
        t: "تنوع القطاعات والصناعات",
        d: "من العقارات والتجارة الإلكترونية إلى الرعاية الصحية والمطاعم؛ نفهم متطلبات كل قطاع ونبني منظومة تلائم طبيعة عملائه.",
        badge: "تغطية قطاعية واسعة",
      },
      {
        n: "02",
        t: "سابقة أعمال حقيقية موثقة",
        d: "مشاريع كاملة أطلقناها لشركائنا، سلّمنا فيها أصولاً وأنظمة تصميم رقمية متكاملة تدعم التشغيل اليومي بلا تعقيد.",
        badge: "مشاريع حية",
      },
      {
        n: "03",
        t: "أثر تجاري وقيمة استثمارية",
        d: "لا ننتج تصاميم للمباهاة فقط؛ كل مخرج مصمم لبناء الثقة، تسريع الإطلاق، وتحقيق عائد استثماري ونمو ملموس.",
        badge: "عائد ملموس",
      },
    ]
    : [
      {
        n: "01",
        t: "Cross-Sector Expertise",
        d: "From real estate and e-commerce to healthcare and SaaS, we understand each sector's nuances and engineer tailored solutions.",
        badge: "Multi-Industry",
      },
      {
        n: "02",
        t: "Battle-Tested Deliverables",
        d: "Real-world projects shipped with complete design systems, production-ready assets, and zero daily friction for teams.",
        badge: "Live Projects",
      },
      {
        n: "03",
        t: "Measurable Commercial Impact",
        d: "We don't design for decoration. Every asset is built to establish market authority, win trust, and drive commercial growth.",
        badge: "Proven ROI",
      },
    ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeVideoPoint, setActiveVideoPoint] = useState(0);

  const sectionLabel = (en: string, ar: string) => (isRtl ? ar : en);

  const getServiceWorkLink = (slug: string) => {
    switch (slug) {
      case "brand-identity":
        return {
          href: "/work/corporate-identity",
          labelEn: "View Identity Portfolio",
          labelAr: "استعرض معرض أعمال الهوية",
        };
      case "websites-platforms":
        return {
          href: "/work/websites",
          labelEn: "View Websites Portfolio",
          labelAr: "استعرض أعمال المواقع والمنصات",
        };
      case "mobile-apps-saas":
        return {
          href: "/work/mobile-apps",
          labelEn: "View Apps & SaaS Portfolio",
          labelAr: "استعرض أعمال التطبيقات والـ SaaS",
        };
      case "marketing-growth":
        return {
          href: "/work/social-media",
          labelEn: "View Social Media Portfolio",
          labelAr: "استعرض أعمال السوشيال ميديا",
        };
      case "hosting-cloud":
        return {
          href: "/cloud-hosting",
          labelEn: "Cloud Hosting Hub",
          labelAr: "منصة الاستضافة السحابية",
        };
      default:
        return {
          href: "/work",
          labelEn: "Explore Our Full Portfolio",
          labelAr: "استعرض كافة أعمالنا ومشاريعنا",
        };
    }
  };

  const workLink = getServiceWorkLink(service.slug);

  const getSection5Buttons = (slug: string, rtl: boolean) => {
    switch (slug) {
      case "brand-identity":
        return [
          {
            href: "/work/corporate-identity",
            variant: "primary" as const,
            label: rtl ? "أعمال الهوية" : "Identity Portfolio",
            hoverLabel: rtl ? "أعمال الهوية ←" : "Identity Portfolio →",
          },
          {
            href: "/work/social-media",
            variant: "outline" as const,
            label: rtl ? "السوشيال ميديا" : "Social Media",
            hoverLabel: rtl ? "السوشيال ميديا ←" : "Social Media →",
          },
        ];

      case "websites-platforms":
        return [
          {
            href: "/work/websites",
            variant: "primary" as const,
            label: rtl ? "أعمال المواقع" : "Websites Portfolio",
            hoverLabel: rtl ? "أعمال المواقع ←" : "Websites Portfolio →",
          },
          {
            href: "/cloud-hosting",
            variant: "outline" as const,
            label: rtl ? "الاستضافة السحابية" : "Cloud Hosting",
            hoverLabel: rtl ? "الاستضافة السحابية ←" : "Cloud Hosting →",
          },
        ];

      case "mobile-apps-saas":
        return [
          {
            href: "/work/mobile-apps",
            variant: "primary" as const,
            label: rtl ? "أعمال التطبيقات" : "Apps & SaaS Portfolio",
            hoverLabel: rtl ? "أعمال التطبيقات ←" : "Apps & SaaS →",
          },
          {
            href: "/cloud-hosting",
            variant: "outline" as const,
            label: rtl ? "الاستضافة السحابية" : "Cloud Hosting",
            hoverLabel: rtl ? "الاستضافة السحابية ←" : "Cloud Hosting →",
          },
        ];

      case "marketing-growth":
        return [
          {
            href: "/work/social-media",
            variant: "primary" as const,
            label: rtl ? "أعمال السوشيال ميديا" : "Social Media Portfolio",
            hoverLabel: rtl ? "السوشيال ميديا ←" : "Social Media →",
          },
          {
            href: "/work",
            variant: "outline" as const,
            label: rtl ? "اكتشف المزيد" : "Discover more",
            hoverLabel: rtl ? "كافة الأعمال ←" : "All Projects →",
          },
        ];

      case "hosting-cloud":
        return [
          {
            href: "/cloud-hosting",
            variant: "primary" as const,
            label: rtl ? "الاستضافة السحابية" : "Cloud Hosting",
            hoverLabel: rtl ? "الاستضافة السحابية ←" : "Cloud Hosting →",
          },
          {
            href: "/work",
            variant: "outline" as const,
            label: rtl ? "اكتشف المزيد" : "Discover more",
            hoverLabel: rtl ? "كافة الأعمال ←" : "All Projects →",
          },
        ];

      case "business-systems":
      default:
        return [
          {
            href: "/work",
            variant: "primary" as const,
            label: rtl ? "استعرض أعمالنا" : "Explore Portfolio",
            hoverLabel: rtl ? "استعرض الأعمال ←" : "Explore Portfolio →",
          },
          {
            href: "/work",
            variant: "outline" as const,
            label: rtl ? "اكتشف المزيد" : "Discover more",
            hoverLabel: rtl ? "كافة الأعمال ←" : "All Projects →",
          },
        ];
    }
  };

  const sectionButtons = getSection5Buttons(service.slug, isRtl);

  const getServicePortfolioImage = (slug: string) => {
    const map: Record<string, string> = {
      "brand-identity": "/services/brand-identity.jpg",
      "websites-platforms": "/services/websites-platforms.jpg",
      "mobile-apps-saas": "/services/mobile-apps-saas.jpg",
      "business-systems": "/services/business-systems.jpg",
      "marketing-growth": "/services/marketing-growth.jpg",
      "hosting-cloud": "/services/hosting-cloud.jpg",
    };
    return map[slug] || `/services/${slug}.jpg`;
  };

  const getServiceShowcaseImage = (slug: string) => {
    const map: Record<string, string> = {
      "brand-identity": "/services/hero-brand-identity-creative-design.jpg",
      "websites-platforms": "/services/hero-websites-digital-platforms.jpg",
      "mobile-apps-saas": "/services/hero-mobile-apps-saas-products.jpg",
      "business-systems": "/services/hero-business-systems-dashboards.jpg",
      "marketing-growth": "/services/hero-marketing-growth-systems.jpg",
      "hosting-cloud": "/services/hero-hosting-cloud-tech-support.jpg",
    };
    return map[slug] || "/services/hero-brand-identity-creative-design.jpg";
  };

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-white text-neutral-900">
      <Header light />

      {/* ---------- 1. FREESTANDING ASYMMETRICAL CURVED HERO BANNER (MATCHING REFERENCE) ---------- */}
      <section className="bg-white pt-[76px] pb-3 sm:pt-20 sm:pb-4 lg:pt-[88px] lg:pb-5">
        <div className="container-custom">
          <Reveal>
            <div
              className={cn(
                "relative overflow-hidden bg-[#1853ea] p-8 sm:p-12 lg:p-16 text-white text-start min-h-[200px] sm:min-h-[230px] flex flex-col justify-center",
                // Tailwind classes fallback
                isRtl
                  ? "rounded-tr-[60px] sm:rounded-tr-[90px] lg:rounded-tr-[130px] rounded-bl-[60px] sm:rounded-bl-[90px] lg:rounded-bl-[130px] rounded-tl-[24px] sm:rounded-tl-[32px] rounded-br-[24px] sm:rounded-br-[32px]"
                  : "rounded-tl-[60px] sm:rounded-tl-[90px] lg:rounded-tl-[130px] rounded-br-[60px] sm:rounded-br-[90px] lg:rounded-br-[130px] rounded-tr-[24px] sm:rounded-tr-[32px] rounded-bl-[24px] sm:rounded-bl-[32px]"
              )}
              style={{
                borderRadius: isRtl
                  ? "28px clamp(60px, 8vw, 130px) 28px clamp(60px, 8vw, 130px)"
                  : "clamp(60px, 8vw, 130px) 28px clamp(60px, 8vw, 130px) 28px",
              }}
            >
              {/* Concentric Sky-Blue Ripple Arcs in the bottom corner (matching reference) */}
              <div
                className={cn(
                  "pointer-events-none absolute bottom-0 select-none h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]",
                  isRtl ? "left-0" : "right-0"
                )}
              >
                <svg viewBox="0 0 340 340" className="h-full w-full" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="serviceHeroArc1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="serviceHeroArc2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {/* Outer Ripple Wave Arc */}
                  <circle
                    cx={isRtl ? 0 : 340}
                    cy={340}
                    r={220}
                    stroke="url(#serviceHeroArc1)"
                    strokeWidth={26}
                  />
                  {/* Inner Ripple Wave Arc */}
                  <circle
                    cx={isRtl ? 0 : 340}
                    cy={340}
                    r={145}
                    stroke="url(#serviceHeroArc2)"
                    strokeWidth={28}
                  />
                </svg>
              </div>

              {/* Banner Content */}
              <div className="relative z-10 max-w-2xl">
                <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {isRtl ? "تفاصيل الخدمة" : "Service Details"}
                </h1>

                <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-blue-100 font-light max-w-xl">
                  {isRtl ? service.taglineAr : service.taglineEn}
                </p>

                <nav
                  aria-label="Breadcrumb"
                  className="mt-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-blue-200"
                >
                  <Link href="/" className="text-white font-bold transition hover:underline">
                    {isRtl ? "الرئيسية" : "Home"}
                  </Link>
                  <span className="text-blue-300 font-bold" aria-hidden="true">&gt;</span>
                  <Link href="/services" className="text-blue-100 transition hover:text-white">
                    {isRtl ? "الخدمات" : "Services"}
                  </Link>
                  <span className="text-blue-300 font-bold" aria-hidden="true">&gt;</span>
                  <span className="text-white font-bold">
                    {isRtl ? service.nameAr : service.nameEn}
                  </span>
                </nav>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 2. EXECUTIVE SERVICE OVERVIEW (MATCHING REFERENCE DESIGN) ---------- */}
      <section className="relative overflow-hidden border-b border-neutral-200/90 bg-[#FFFFFF] pt-2 pb-14 md:pt-4 md:pb-20">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* ── LEFT COLUMN: Badges, Title with Avatars, Tagline, Intro, Buttons & Floating Cards ── */}
            <div className="flex flex-col justify-between text-start lg:col-span-7">
              <div>
                <Reveal>
                  <div className="mb-4 flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-800">
                      {isRtl ? service.badgeAr : service.badgeEn}
                    </span>
                    <span className="rounded-full bg-neutral-900 px-3.5 py-1 text-[11px] font-bold text-white">
                      {isRtl ? service.priceAr : service.priceEn}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-normal leading-[1.12] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                      {isRtl ? service.nameAr : service.nameEn}
                    </h2>
                    {/* Team avatars stack beside title */}
                    <div className="inline-flex items-center -space-x-2 select-none rtl:space-x-reverse">
                      <div className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-full border-2 border-white bg-neutral-200 shadow-xs">
                        <Image
                          src="/explore-pencil/pencil-studio.jpg"
                          alt="Pencil Team"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-full border-2 border-white bg-neutral-300 shadow-xs">
                        <Image
                          src="/explore-pencil/pencil-company.jpg"
                          alt="Pencil Leadership"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-white bg-[#2057FF] text-[11px] font-bold text-white shadow-xs">
                        +
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 max-w-xl text-base sm:text-lg font-light italic text-neutral-600">
                    {isRtl ? service.taglineAr : service.taglineEn}
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-neutral-600">
                    {isRtl ? service.introAr : service.introEn}
                  </p>
                </Reveal>

                <Reveal delay={0.14}>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <PencilButton
                      href="mailto:info@dipencil.com"
                      variant="primary"
                      size="default"
                      hoverLabel={isRtl ? "تواصل الآن ←" : "Contact Now →"}
                    >
                      {isRtl ? "ابدأ مشروعك" : "Start a project"}
                    </PencilButton>
                    <PencilButton
                      href="#deliverables"
                      variant="outline"
                      size="default"
                      hoverLabel={isRtl ? "المخرجات ←" : "Deliverables →"}
                    >
                      {isRtl ? "شاهد ماذا ستستلم" : "See deliverables"}
                    </PencilButton>
                  </div>
                </Reveal>
              </div>

              {/* ── Two Floating Showcase Cards Matching Reference ── */}
              <Reveal delay={0.18}>
                <div className="mt-8 flex items-start gap-3.5 border-t border-neutral-100 pt-6">
                  {/* Circular Arrow Button */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm mt-1">
                    <ArrowDownRight size={17} className="rtl:rotate-90" />
                  </div>

                  {/* Dual Cards */}
                  <div className="grid w-full grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {/* Card 1: Royal Blue Card */}
                    <div className="group flex min-h-[130px] flex-col justify-between rounded-2xl bg-[#2057FF] p-5 text-start text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#1A4BDE]">
                      <div>
                        <div className="font-mono text-2xl sm:text-3xl font-black tracking-tight text-white" dir={isRtl ? "rtl" : "ltr"}>
                          {service.stats[0]?.valueAr && isRtl ? service.stats[0].valueAr : service.stats[0]?.value}
                        </div>
                        <h4 className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">
                          {isRtl ? service.stats[0]?.labelAr : service.stats[0]?.labelEn}
                        </h4>
                      </div>
                      <p className="mt-2 text-[11px] sm:text-xs text-blue-100/85 leading-relaxed line-clamp-2">
                        {isRtl ? "معايير تصميم وتطوير هندسية متكاملة تضمن أعلى عائد استثماري." : "Calibrated production standards built for high compound velocity."}
                      </p>
                    </div>

                    {/* Card 2: White Card */}
                    <div className="group flex min-h-[130px] flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-5 text-start shadow-xl shadow-neutral-900/5 transition-all hover:border-neutral-300">
                      <div>
                        <div className="font-mono text-2xl sm:text-3xl font-black tracking-tight text-neutral-950" dir={isRtl ? "rtl" : "ltr"}>
                          {service.stats[1]?.valueAr && isRtl ? service.stats[1].valueAr : service.stats[1]?.value}
                        </div>
                        <h4 className="mt-1.5 text-xs sm:text-sm font-bold text-neutral-950 leading-snug">
                          {isRtl ? service.stats[1]?.labelAr : service.stats[1]?.labelEn}
                        </h4>
                      </div>
                      <p className="mt-2 text-[11px] sm:text-xs text-neutral-500 leading-relaxed line-clamp-2">
                        {isRtl ? "تنفيذ دقيق وفق جدول زمني حازم دون أي مفاجآت أو تأخير." : "Milestone-driven execution with verified handoffs and zero delays."}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT COLUMN: Clean Showcase Artwork (No Frame, No Shadow) ── */}
            <div className="flex items-center justify-center lg:col-span-5">
              <Reveal delay={0.16} className="w-full">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[4/4.5]">
                  <Image
                    src={getServiceShowcaseImage(service.slug)}
                    alt={isRtl ? service.nameAr : service.nameEn}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2. TWO-ROW BIDIRECTIONAL MARQUEE LANES (ABOUT-STYLE) ---------- */}
      <ServiceStatementLanes service={service} isRtl={isRtl} />

      {/* ---------- 3. HOW WE ACTUALLY WORK (ADAPTED SLA SPEC-DRIVEN LAYOUT) ---------- */}
      <section className="relative overflow-hidden border-b border-neutral-200/90 bg-white py-20 sm:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* ── LEFT COLUMN: Eyebrow + Headline + Story text + Circular Indicator ── */}
            <div className="flex h-full flex-col justify-between space-y-8 text-start lg:col-span-5">
              <div>
                <Reveal>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                    {sectionLabel("02 // HOW WE ACTUALLY WORK", "02 // كيف نعمل فعلاً")}
                  </span>
                </Reveal>

                <Reveal delay={0.05}>
                  <h2 className={cn("mt-4 text-3xl font-normal leading-[1.14] text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl", isRtl ? "tracking-normal" : "tracking-tight")}>
                    {isRtl ? (
                      <>
                        ليس مجرد شكل،{" "}
                        <span className="font-light italic text-neutral-500">بل نظام يعمل.</span>
                      </>
                    ) : (
                      <>
                        Not decoration,{" "}
                        <span className="font-light italic text-neutral-500">a working system.</span>
                      </>
                    )}
                  </h2>
                </Reveal>

                <div className="mt-6 space-y-4">
                  {(isRtl ? service.storyAr : service.storyEn).map((p, i) => (
                    <Reveal key={i} delay={0.08 * (i + 1)}>
                      <p className="text-sm sm:text-base leading-relaxed text-neutral-600">{p}</p>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal delay={0.18}>
                <div className="flex items-start gap-3.5 border-t border-neutral-100 pt-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm">
                    <ArrowDownRight size={17} className="rtl:rotate-90" />
                  </div>
                  <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-neutral-500">
                    {isRtl
                      ? "من أول مسودة على الورق وحتى الإطلاق الحي، نختبر كل تفصيلة وفق معايير الأداء والنمو الفعلي لعملك."
                      : "From the first rough sketch on paper to production launch, every piece is tested against real business velocity."}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT COLUMN: Dynamic Staggered Asymmetric Rows (Matching Technical SLA Wireframe) ── */}
            <div className="flex flex-col gap-3.5 sm:gap-4 lg:col-span-7">
              {/* ── ROW 1: Wide Text Card (Col 8) + Narrow Image Card (Col 4) ── */}
              <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-12 sm:gap-3.5">
                <Reveal delay={0.15} className="sm:col-span-8">
                  <div className="group flex min-h-[120px] sm:min-h-[130px] flex-col justify-center rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] p-5 text-start transition-all duration-300 hover:border-neutral-300 hover:shadow-xs sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-black tracking-tight text-neutral-950 sm:text-lg">
                        {isRtl ? "تأسيس من الصفر" : "Greenfield & Fresh Launch"}
                      </h3>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-neutral-200/80 text-neutral-800">
                        <BadgeCheck size={16} />
                      </div>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm leading-snug text-neutral-600 line-clamp-2">
                      {(isRtl ? service.forWhoAr : service.forWhoEn)[0]}
                    </p>
                  </div>
                </Reveal>

                {/* Image Card 1: Narrow (4 cols) */}
                <Reveal delay={0.18} className="sm:col-span-4">
                  <div className="group relative h-full min-h-[120px] sm:min-h-[130px] w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] shadow-xs transition-all duration-300 hover:border-neutral-300">
                    <Image
                      src={service.gallery[0] || "/sectors/corporate-websites.jpg"}
                      alt={isRtl ? service.nameAr : service.nameEn}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 220px"
                    />
                  </div>
                </Reveal>
              </div>

              {/* ── ROW 2: Medium-Wide Royal Blue Text Card (Col 7) + Medium Image Card (Col 5) ── */}
              <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-12 sm:gap-3.5">
                <Reveal delay={0.2} className="sm:col-span-7">
                  <div className="group flex min-h-[120px] sm:min-h-[130px] flex-col justify-center rounded-2xl bg-[#2057FF] p-5 text-start text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:brightness-105 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-black tracking-tight text-white sm:text-lg">
                        {isRtl ? "فرق النمو والتوسع" : "Growth & Expansion Teams"}
                      </h3>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
                        <Sparkles size={16} />
                      </div>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm leading-snug text-blue-100/95 line-clamp-2">
                      {(isRtl ? service.forWhoAr : service.forWhoEn)[1]}
                    </p>
                  </div>
                </Reveal>

                {/* Image Card 2: Medium (5 cols) */}
                <Reveal delay={0.23} className="sm:col-span-5">
                  <div className="group relative h-full min-h-[120px] sm:min-h-[130px] w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] shadow-xs transition-all duration-300 hover:border-neutral-300">
                    <Image
                      src={service.gallery[1] || "/sectors/e-commerce.jpg"}
                      alt={isRtl ? service.nameAr : service.nameEn}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 260px"
                    />
                  </div>
                </Reveal>
              </div>

              {/* ── ROW 3: Shortest Text Card (Col 6) + Widest Image Card (Col 6) ── */}
              <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-12 sm:gap-3.5">
                <Reveal delay={0.25} className="sm:col-span-6">
                  <div className="group flex min-h-[120px] sm:min-h-[130px] flex-col justify-center rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] p-5 text-start transition-all duration-300 hover:border-neutral-300 hover:shadow-xs sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-black tracking-tight text-neutral-950 sm:text-lg">
                        {isRtl ? "التشغيل والإنتاجية اليومية" : "Operational Scaling"}
                      </h3>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-neutral-200/80 text-neutral-800">
                        <Layers size={16} />
                      </div>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm leading-snug text-neutral-600 line-clamp-2">
                      {(isRtl ? service.forWhoAr : service.forWhoEn)[2]}
                    </p>
                  </div>
                </Reveal>

                {/* Image Card 3: Widest (6 cols) */}
                <Reveal delay={0.28} className="sm:col-span-6">
                  <div className="group relative h-full min-h-[120px] sm:min-h-[130px] w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] shadow-xs transition-all duration-300 hover:border-neutral-300">
                    <Image
                      src={service.gallery[2] || "/sectors/real-estate.jpg"}
                      alt={isRtl ? service.nameAr : service.nameEn}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 4. WHAT IS INCLUDED (NOTCHED ROYAL BLUE CARDS) ---------- */}
      <section className="relative overflow-hidden border-b border-neutral-200/90 bg-white py-20 sm:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="flex flex-col gap-6 text-start md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#2057FF]">
                  <span>{sectionLabel("WHAT IS INCLUDED", "ما الذي تتضمنه الخدمة")}</span>
                </div>
                <h2 className={cn("mt-4 text-3xl font-normal leading-[1.14] text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl", isRtl ? "tracking-normal" : "tracking-tight")}>
                  {isRtl ? (
                    <>
                      تفاصيل مدروسة،{" "}
                      <span className="font-light italic text-neutral-500">لا مجرد شعارات.</span>
                    </>
                  ) : (
                    <>
                      Real details,{" "}
                      <span className="font-light italic text-neutral-500">not slogans.</span>
                    </>
                  )}
                </h2>
              </div>
              <div className="max-w-md lg:max-w-lg">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                  {isRtl
                    ? "كل نقطة أدناه شيء نسلّمه فعلاً وتوقع على استلامه. لا كلام تسويقي."
                    : "Every point below is something we actually deliver and you sign off. Not marketing copy."}
                </p>
              </div>
            </div>
          </Reveal>

          {/* 6 Notched Royal Blue Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
            {service.features.map((f, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <Reveal key={num} delay={0.05 * (idx + 1)}>
                  <div className="group relative flex min-h-[175px] sm:min-h-[195px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#2057FF] p-6 text-start text-white shadow-lg shadow-blue-600/15 transition-all duration-300 hover:bg-[#1A4BDE] hover:shadow-xl hover:shadow-blue-600/25 sm:p-7">
                    {/* Card Content: Title + Description */}
                    <div className="relative z-0">
                      <h3 className="text-base font-bold leading-snug tracking-tight text-white pe-16 rtl:pe-0 rtl:ps-16 sm:text-lg">
                        {isRtl ? f.titleAr : f.titleEn}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-blue-100/90 pe-16 rtl:pe-0 rtl:ps-16">
                        {isRtl ? f.descAr : f.descEn}
                      </p>
                    </div>

                    {/* Notched Corner with Concave Inverted Curves & Docked Pill */}
                    {isRtl ? (
                      /* RTL: Bottom-Left Notch */
                      <div className="absolute -bottom-px -left-px z-10 flex items-center justify-center rounded-tr-[28px] bg-white px-4 py-2.5">
                        {/* Top concave fillet */}
                        <svg
                          className="pointer-events-none absolute -top-5 left-0 h-5 w-5 fill-white"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M0 20 V0 C0 11.046 8.954 20 20 20 H0 Z" />
                        </svg>
                        {/* Right concave fillet */}
                        <svg
                          className="pointer-events-none absolute bottom-0 -right-5 h-5 w-5 fill-white"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M0 20 H20 C8.954 20 0 11.046 0 0 V20 Z" />
                        </svg>

                        {/* Docked White Pill */}
                        <div className="flex h-7.5 min-w-[52px] select-none items-center justify-center rounded-full border-2 border-[#2057FF] bg-white px-3.5 py-0.5 font-mono text-xs font-black text-[#2057FF] shadow-xs sm:text-[13px]">
                          {num}
                        </div>
                      </div>
                    ) : (
                      /* LTR: Bottom-Right Notch */
                      <div className="absolute -bottom-px -right-px z-10 flex items-center justify-center rounded-tl-[28px] bg-white px-4 py-2.5">
                        {/* Top concave fillet */}
                        <svg
                          className="pointer-events-none absolute -top-5 right-0 h-5 w-5 fill-white"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M20 20 V0 C20 11.046 11.046 20 0 20 H20 Z" />
                        </svg>
                        {/* Left concave fillet */}
                        <svg
                          className="pointer-events-none absolute bottom-0 -left-5 h-5 w-5 fill-white"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M20 20 H0 C11.046 20 20 11.046 20 0 V20 Z" />
                        </svg>

                        {/* Docked White Pill */}
                        <div className="flex h-7.5 min-w-[52px] select-none items-center justify-center rounded-full border-2 border-[#2057FF] bg-white px-3.5 py-0.5 font-mono text-xs font-black text-[#2057FF] shadow-xs sm:text-[13px]">
                          {num}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 5. PORTFOLIO & SECTOR SHOWCASE (MATCHING 3-COLUMN REFERENCE LAYOUT) ---------- */}
      <section className="relative overflow-hidden border-b border-neutral-200/90 bg-[#F8F9FC] py-16 sm:py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            {/* ── COLUMN 1 (LEFT in LTR, RIGHT in RTL): Top Arrow & Description + Bottom Title & Eyebrow + Work Button ── */}
            <div className="flex h-full flex-col justify-between py-1 text-start lg:col-span-4">
              {/* Top: Arrow + Short Narrative Paragraph */}
              <div>
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#1853ea] text-white shadow-md shadow-blue-600/25">
                  <ArrowDownRight className={cn("h-5 w-5", isRtl && "-scale-x-100")} />
                </div>

                <p className="mt-4 text-xs sm:text-[13px] lg:text-sm leading-relaxed text-neutral-600 max-w-sm">
                  {isRtl
                    ? "نمتلك سابقة أعمال حقيقية موثقة تمتد عبر مختلف القطاعات: التجارة الإلكترونية، الشركات، العقارات، الأغذية، والرعاية الصحية. ندرك أن لكل قطاع لغته وقواعده، لذلك نصمم حلولاً تترجم أهدافك إلى نتائج ملموسة."
                    : "A battle-tested track record across diverse commercial sectors: e-commerce, corporate, real estate, hospitality, and healthcare. We understand each industry's nuances to build solutions that drive measurable business growth."}
                </p>
              </div>

              {/* Bottom: Eyebrow + Big Headline + CTA Work Button */}
              <div className="mt-8 pt-2 lg:mt-auto">
                <div className="text-xs sm:text-[13px] font-semibold text-neutral-400 tracking-wider">
                  {isRtl ? "سابقة أعمالنا مع مختلف القطاعات" : "Real-World Work Across Sectors"}
                </div>

                <h2 className={cn("mt-2 text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-neutral-900", isRtl ? "tracking-normal" : "tracking-tight")}>
                  {isRtl ? (
                    <>
                      أعمال من أرض الواقع، <br className="hidden sm:inline" />
                      <span className="font-light italic text-neutral-500">مصممة لتصنع الفارق.</span>
                    </>
                  ) : (
                    <>
                      Battle-tested work, <br className="hidden sm:inline" />
                      <span className="font-light italic text-neutral-500">built for your sector.</span>
                    </>
                  )}
                </h2>

                {/* Action CTA Buttons (Curated specifically per service: exactly 2 buttons) */}
                <div className="mt-6 pt-1 flex flex-wrap items-center gap-3">
                  {sectionButtons.map((btn, idx) => (
                    <PencilButton
                      key={idx}
                      href={btn.href}
                      variant={btn.variant}
                      size="default"
                      hoverLabel={btn.hoverLabel}
                      className={cn(
                        "font-bold",
                        btn.variant === "primary"
                          ? "shadow-md hover:shadow-lg"
                          : "border-neutral-300 bg-white hover:border-neutral-900 text-neutral-900 shadow-2xs"
                      )}
                    >
                      {btn.label}
                    </PencilButton>
                  ))}
                </div>
              </div>
            </div>

            {/* ── COLUMN 2 (CENTER): Pure Clean Portfolio Image from /portfolio (No hover, no gradient, no text) ── */}
            <div className="flex h-full flex-col lg:col-span-4">
              <Link
                href={workLink.href}
                className="relative block h-full min-h-[460px] sm:min-h-[500px] lg:min-h-0 w-full overflow-hidden rounded-[26px] sm:rounded-[30px] border border-neutral-200/90 bg-white shadow-md cursor-pointer"
              >
                <Image
                  src={getServicePortfolioImage(service.slug)}
                  alt={isRtl ? service.nameAr : service.nameEn}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </Link>
            </div>

            {/* ── COLUMN 3 (RIGHT in LTR, LEFT in RTL): 3 Stacked Cards (Exact Height Equalization) ── */}
            <div className="flex h-full flex-col justify-between gap-3 sm:gap-3.5 lg:gap-4 lg:col-span-4">
              {portfolioPoints.map((pt, i) => {
                const isActive = activeVideoPoint === i;
                return (
                  <div
                    key={i}
                    onClick={() => setActiveVideoPoint(i)}
                    className={cn(
                      "group flex flex-1 flex-col justify-center cursor-pointer rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 text-start transition-all duration-300",
                      isActive
                        ? "bg-[#1853ea] text-white shadow-xl shadow-blue-600/25 border border-transparent"
                        : "bg-white border border-neutral-200/90 text-neutral-900 shadow-xs hover:border-neutral-300 hover:bg-neutral-50/70"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className={cn(
                          "font-mono text-xs sm:text-sm font-black tracking-wider block",
                          isActive ? "text-blue-200" : "text-neutral-400"
                        )}
                        dir="ltr"
                      >
                        {pt.n}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                          isActive
                            ? "border-white/30 bg-white/15 text-white"
                            : "border-neutral-200 bg-neutral-100 text-neutral-600"
                        )}
                      >
                        {pt.badge}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "text-base sm:text-lg font-bold leading-snug tracking-tight",
                        isActive ? "text-white" : "text-neutral-950"
                      )}
                    >
                      {pt.t}
                    </h3>

                    <p
                      className={cn(
                        "mt-1.5 text-xs sm:text-[13px] leading-relaxed line-clamp-2",
                        isActive ? "text-blue-100/90" : "text-neutral-600"
                      )}
                    >
                      {pt.d}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 6. TIMELINE WITHOUT SURPRISES (MATCHING ADAPTED ARCHITECTURE SLA) ---------- */}
      <section className="relative overflow-hidden border-b border-neutral-200/90 bg-[#FFFFFF] pt-20 pb-0 sm:pt-28">
        {/* Header: Left Headline vs Right Minimal Arrow & Note */}
        <div className="container-custom">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 pb-12 text-start sm:pb-16 md:flex-row md:items-start">
              <div className="max-w-xl">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {sectionLabel("03 // TIMELINE WITHOUT SURPRISES", "03 // جدول زمني بلا مفاجآت")}
                </span>
                <h2 className={cn("mt-3 text-3xl font-normal leading-[1.14] text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl", isRtl ? "tracking-normal" : "tracking-tight")}>
                  {isRtl ? (
                    <>
                      ستعرف ما يحدث تحديداً،{" "}
                      <span className="font-light italic text-neutral-500">
                        أسبوعاً بأسبوع بلا مفاجآت.
                      </span>
                    </>
                  ) : (
                    <>
                      You will know what happens,{" "}
                      <span className="font-light italic text-neutral-500">
                        every single week.
                      </span>
                    </>
                  )}
                </h2>
              </div>

              <div className="flex max-w-lg items-start gap-3.5 pt-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-md shadow-blue-600/20">
                  <ArrowDownRight size={18} className="rtl:rotate-90" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950">
                    {isRtl ? "التزام زمني صارم ومراحل تسليم واضحة" : "Structured Weekly Milestones & Deliverables"}
                  </p>
                  <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-neutral-600">
                    {isRtl
                      ? "مخرجات أسبوعية شفافة وملموسة مع جولات استعراضية تفاعلية مباشرة، وروابط تجريبية حية على هاتفك، ومحطات اعتماد ومراجعة محددة سلفاً. ستختبر كل مرحلة وميزة على بيئة عمل حقيقية كل 7 أيام دون أي تخمين أو مفاجآت في منتصف الطريق."
                      : "Transparent weekly deliverables with live walkthroughs, interactive staging links tested directly on your phone, and fixed sign-off checkpoints. You will verify every milestone in real time every 7 days without guessing, delays, or mid-project surprises."}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Overlapping Showcase Area with 4 Cards */}
        <div className="relative w-full">
          <div className="container-custom relative z-20">
            <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {service.steps.map((st, i) => {
                const isStandout = i === 1; // Standout Royal Blue Card (Elevated UPWARDS matching Reference)
                return (
                  <Reveal key={i} delay={0.08 * (i + 1)}>
                    <div
                      className={cn(
                        "flex h-full min-h-[190px] sm:min-h-[210px] flex-col justify-start rounded-3xl p-6 sm:p-7 text-start transition-transform duration-300",
                        isStandout
                          ? "bg-[#2057FF] text-white shadow-2xl shadow-blue-600/40 lg:-translate-y-8 hover:lg:-translate-y-9 hover:-translate-y-1"
                          : "border border-neutral-100 bg-white text-neutral-900 shadow-xl shadow-neutral-900/10 hover:-translate-y-1"
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "font-mono text-xs font-bold uppercase tracking-wider",
                            isStandout ? "text-blue-100/80" : "text-neutral-400"
                          )}
                        >
                          Step 0{i + 1}
                        </span>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold",
                            isStandout
                              ? "bg-white/20 text-white"
                              : "bg-neutral-100 text-neutral-700"
                          )}
                        >
                          <CalendarClock size={11} />
                          {isRtl ? st.durationAr : st.durationEn}
                        </span>
                      </div>

                      <h3
                        className={cn(
                          "mt-4 text-base sm:text-lg font-black tracking-tight",
                          isStandout ? "text-white" : "text-neutral-950"
                        )}
                      >
                        {isRtl ? st.titleAr : st.titleEn}
                      </h3>

                      <p
                        className={cn(
                          "mt-2 text-xs leading-relaxed",
                          isStandout ? "text-blue-100/90" : "text-neutral-500"
                        )}
                      >
                        {isRtl ? st.descAr : st.descEn}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* FULL BLEED IMAGE: Edge-to-Edge 100vw, NO border, NO rounded curve, NO shadow! */}
          <div className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32 h-[260px] sm:h-[300px] md:h-[360px] w-full overflow-hidden">
            <Image
              src="/supports/key-technical-needs.jpg"
              alt={isRtl ? "جدول زمني وهندسة التنفيذ" : "Key Technical Needs & Enterprise Infrastructure"}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------- 7. PACKAGES & PRICING MATRIX (MATCHING REFERENCE DESIGN WITH SWIPING TABS & CURRENCY BAR) ---------- */}
      <div id="pricing">
        <ServicePricingMatrix serviceSlug={service.slug} isRtl={isRtl} />
      </div>

      {/* ---------- 7b. SOCIAL MEDIA MONTHLY DESIGN SQUISHY CARDS (4 CARDS: 8, 12, 16, 30) ---------- */}
      <SocialMediaPricingCards isRtl={isRtl} />

      {/* ---------- 7b. HANDOVER LIST (WHAT YOU SIGN OFF) ---------- */}
      <section id="deliverables" className="scroll-mt-24 border-t border-neutral-200/90 bg-[#FBFBFD] py-14 sm:py-18">
        <div className="container-custom">
          {/* Header Row: Left Title & Right Narrative with Blue Arrow (matching previous sections) */}
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 text-start">
              {/* Left Column: Eyebrow + Headline */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#2057FF] border border-blue-200/50">
                  <PackageCheck size={13} />
                  <span>{sectionLabel("Handover checklist", "قائمة الاستلام والاعتماد")}</span>
                </div>
                <h2 className={cn("mt-3 text-2xl font-normal text-neutral-900 sm:text-3xl md:text-4xl lg:text-5xl", isRtl ? "tracking-normal" : "tracking-tight")}>
                  {isRtl ? (
                    <>
                      على ماذا ستوقع بالضبط عند الاستلام؟ <br className="hidden sm:inline" />
                      <span className="font-light italic text-neutral-500">تسليم موثق بلا أي غموض.</span>
                    </>
                  ) : (
                    <>
                      What exactly do you sign off? <br className="hidden sm:inline" />
                      <span className="font-light italic text-neutral-500">Zero ambiguity.</span>
                    </>
                  )}
                </h2>
              </div>

              {/* Right Column: Blue Arrow + Description Block (Top Right) */}
              <div className="flex max-w-lg items-start gap-3.5 pt-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-md shadow-blue-600/20">
                  <ArrowDownRight size={18} className="rtl:rotate-90" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950">
                    {isRtl ? "مخرجات موثقة وملفات أصلية كاملة" : "Verified Production Sign-off"}
                  </p>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-neutral-600">
                    {isRtl
                      ? "كل بند أدناه هو مخرج إنتاجي ملموس، تفحصه وتعتمد عليه مع كامل ملفات المصدر والتراخيص المفتوحة."
                      : "Every item below is a verified deliverable you inspect and sign off, backed by full native source files."}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Compact, Sleek Royal Blue Deliverable Pills (Tight & Elegant Height) */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(isRtl ? service.deliverablesAr : service.deliverablesEn).map((d, i) => (
              <Reveal key={i} delay={0.025 * (i + 1)}>
                <div className="group flex items-center justify-between gap-3 rounded-2xl border border-neutral-200/80 bg-white px-4 py-3 sm:py-3.5 text-start transition-all duration-300 hover:border-[#2057FF]/60 hover:shadow-md hover:shadow-blue-600/10 hover:-translate-y-0.5 select-none">
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-mono text-xs font-black text-[#2057FF] border border-blue-200/60 transition-colors duration-300 group-hover:bg-[#2057FF] group-hover:text-white group-hover:border-[#2057FF]"
                      dir="ltr"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs sm:text-[13px] font-semibold leading-snug text-neutral-800 transition-colors duration-300 group-hover:text-neutral-950">
                      {d}
                    </p>
                  </div>
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#2057FF] opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:bg-[#2057FF] group-hover:text-white">
                    <Check size={11} strokeWidth={3} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 7b. FAQ ---------- */}
      <section className="border-t border-neutral-200/90 bg-white py-16 md:py-24">
        <div className="container-custom grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#2057FF]">
                  <MessageSquare size={13} />
                  <span>{isRtl ? "05 // أسئلة شائعة" : "05 // ASKED EVERY WEEK"}</span>
                </div>
                <h2 className={cn("mt-4 text-3xl font-normal md:text-5xl lg:text-6xl text-neutral-900", isRtl ? "tracking-normal" : "tracking-tight")}>
                  {isRtl ? (
                    <>
                      أسئلة نجيب عنها <br className="hidden sm:inline" />
                      <span className="font-light italic text-neutral-500">كل أسبوع.</span>
                    </>
                  ) : (
                    <>
                      Questions we answer <br className="hidden sm:inline" />
                      <span className="font-light italic text-neutral-500">every week.</span>
                    </>
                  )}
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-neutral-600 text-sm sm:text-base">
                  {isRtl
                    ? "هذه تتكرر في كل مكالمة تعارف تقريباً. وإن لم يكن سؤالك هنا، أرسله عبر واتساب وسنرد عليك في اليوم نفسه."
                    : "These come up on almost every intro call. If yours is not here, send it on WhatsApp and we will reply the same day."}
                </p>
                <PencilButton
                  href="https://wa.me/201003778273"
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  size="default"
                  icon={<WhatsAppIcon size={17} />}
                  hoverLabel={isRtl ? "محادثة فورية ←" : "Direct Chat →"}
                  className="mt-6 shadow-md shadow-blue-500/25"
                >
                  {isRtl ? "اسألنا عبر واتساب" : "Ask on WhatsApp"}
                </PencilButton>
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
                        "overflow-hidden rounded-2xl border transition-all duration-300",
                        open
                          ? "border-[#2057FF] bg-[#2057FF] text-white shadow-xl shadow-blue-600/20"
                          : "border-neutral-200/90 bg-white hover:border-blue-300 hover:shadow-xs"
                      )}
                    >
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full cursor-pointer items-center gap-4 p-5 text-start md:p-6"
                        aria-expanded={open}
                      >
                        <span
                          className={cn(
                            "text-sm font-black font-mono transition-colors",
                            open ? "text-white/60" : "text-neutral-400"
                          )}
                          dir="ltr"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "flex-1 text-base font-bold leading-snug md:text-lg transition-colors",
                            open ? "text-white" : "text-neutral-950"
                          )}
                        >
                          {isRtl ? f.qAr : f.qEn}
                        </span>
                        <span
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                            open
                              ? "rotate-45 border-white/30 bg-white/20 text-white shadow-xs"
                              : "border-neutral-200 bg-neutral-100 text-neutral-700 hover:bg-blue-50 hover:text-[#2057FF] hover:border-blue-200"
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
                            <p className="px-5 pb-6 leading-loose text-white/90 md:px-6 md:ps-[4.25rem] text-sm sm:text-base">
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

      {/* ---------- 8. FINAL STRATEGIC CONSULTATION CTA BANNER (RIGHT AFTER FAQS) ---------- */}
      <section className="container-custom py-16 sm:py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#143eb8] via-[#2057ff] to-[#0f34a4] px-6 py-14 sm:px-12 sm:py-18 md:px-16 md:py-20 text-center text-white shadow-2xl shadow-blue-500/25">
            {/* Dot Matrix & Ambient Glows */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-900/40 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-inner">
                {isRtl ? "ابدأ الشراكة الآن" : "Take The Next Step"}
              </span>

              <h2 className={cn("mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]", isRtl ? "tracking-normal" : "tracking-tight")}>
                {isRtl ? (
                  <>
                    جاهز لبناء منظومة تليق{" "}
                    <span className="font-light italic text-neutral-400">بطموح شركتك؟</span>
                  </>
                ) : (
                  <>
                    Ready to Build an Engine Worthy{" "}
                    <span className="font-light italic text-neutral-400">of Your Ambition?</span>
                  </>
                )}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {isRtl
                  ? "احجز استشارة استراتيجية متخصصة مع فريق بينسل التنفيذي. نناقش أهدافك، نحلل الفرص غير المستغلة، ونقدم لك خطة معمارية مقترحة دون أي التزام مسبق."
                  : "Book a strategic consultation with Pencil's executive team. We review your commercial goals, identify bottlenecks, and present a clear solution roadmap with zero obligation."}
              </p>

              {/* 3 Contact Buttons: WhatsApp + Email + Direct Phone Call */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {/* 1. WhatsApp Button */}
                <PencilButton
                  href="https://wa.me/201003778273"
                  target="_blank"
                  rel="noreferrer"
                  variant="white"
                  size="lg"
                  icon={<WhatsAppIcon size={18} />}
                  hoverLabel={isRtl ? "محادثة فورية ←" : "Chat on WhatsApp →"}
                  className="font-bold shadow-lg shadow-black/15"
                >
                  <span>{isRtl ? "تواصل عبر واتساب" : "Chat on WhatsApp"}</span>
                </PencilButton>

                {/* 2. Email Button */}
                <PencilButton
                  href="mailto:info@dipencil.com"
                  variant="outline"
                  size="lg"
                  icon={<Mail size={17} />}
                  hoverLabel={isRtl ? "أرسل بريداً ←" : "Send Email →"}
                  className="bg-white/15 text-white border-white/25 hover:bg-white/25 hover:border-white/40 shadow-md backdrop-blur-md font-bold"
                >
                  <span>{isRtl ? "راسلنا عبر الإيميل" : "Email Studio"}</span>
                </PencilButton>

                {/* 3. Direct Phone Call Button */}
                <PencilButton
                  href="tel:+201003778273"
                  variant="outline"
                  size="lg"
                  icon={<PhoneCall size={17} />}
                  hoverLabel={isRtl ? "اتصال فوري ←" : "Direct Call →"}
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/35 shadow-md backdrop-blur-md font-bold"
                >
                  <span>{isRtl ? "اتصال هاتفي مباشر" : "Direct Call"}</span>
                </PencilButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- 9. SERVICES THAT GO TOGETHER (INFINITE SLIDER) ---------- */}
      <section className="relative overflow-hidden border-t border-neutral-200 bg-white py-16 md:py-20 select-none">
        <div className="container-custom mb-8">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className={cn("text-2xl font-normal md:text-4xl lg:text-5xl text-neutral-900", isRtl ? "tracking-normal" : "tracking-tight")}>
                {isRtl ? (
                  <>
                    خدمات <span className="font-light italic text-neutral-500">تكمل بعضها</span>
                  </>
                ) : (
                  <>
                    Services that <span className="font-light italic text-neutral-500">go together</span>
                  </>
                )}
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
        </div>

        {/* Infinite Moving Slider Track (Pause on Hover) */}
        <div className="relative w-full overflow-hidden" dir="ltr">
          <div className="flex w-max services-marquee-track gap-5 sm:gap-6 items-stretch py-3 px-4">
            {[...otherServices, ...otherServices, ...otherServices].map((r, idx) => (
              <Link
                key={`${r.slug}-${idx}`}
                href={`/services/${r.slug}`}
                className="group relative flex w-[300px] sm:w-[350px] md:w-[390px] shrink-0 flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-xs transition-all duration-300 hover:border-neutral-900 hover:shadow-xl hover:-translate-y-1 text-start"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={r.heroImage}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="400px"
                  />
                  <span className="absolute start-4 top-4 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {isRtl ? r.badgeAr : r.badgeEn}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold leading-snug text-neutral-950 group-hover:text-[#2057FF] transition-colors">
                      {isRtl ? r.nameAr : r.nameEn}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm leading-relaxed text-neutral-500">
                      {isRtl ? r.taglineAr : r.taglineEn}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#2057FF]">
                    {isRtl ? "افتح صفحة الخدمة" : "Open service page"}
                    <NextIcon size={14} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="container-custom mt-8 text-start">
          <PencilButton
            href="/"
            variant="outline"
            size="default"
            hoverLabel={isRtl ? "الرئيسية ←" : "Home →"}
          >
            {isRtl ? "العودة للرئيسية" : "Back home"}
          </PencilButton>
        </div>

        <style jsx>{`
          @keyframes servicesScrollKeyframe {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333333%);
            }
          }
          .services-marquee-track {
            animation: servicesScrollKeyframe 45s linear infinite;
          }
          .services-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}
