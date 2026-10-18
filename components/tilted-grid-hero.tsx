"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flame, PhoneCall, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

interface ReelItem {
  id: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  image: string;
  href?: string;
  badge?: string;
}

const DEFAULT_ITEMS: ReelItem[] = [
  {
    id: "market-entry",
    titleEn: "Brand Authority & Market Launch",
    titleAr: "إطلاق العلامات واختراق السوق",
    categoryEn: "Turnkey Launch",
    categoryAr: "إطلاق متكامل",
    image: "/hero-section.jpg",
    badge: "01",
  },
  {
    id: "superfeliz",
    titleEn: "SuperFeliz Enterprise AI",
    titleAr: "سوبر فيليز للذكاء المؤسسي",
    categoryEn: "AI Operations",
    categoryAr: "ذكاء العمليات",
    image: "/help-editorial/pencil-superfeliz.png",
    badge: "AI",
  },
  {
    id: "operations",
    titleEn: "Centralized Business CRM",
    titleAr: "التحول الرقمي والـ CRM المخصص",
    categoryEn: "Operations Engine",
    categoryAr: "محرك العمليات",
    image: "/business-sectors/crm-automation.jpg",
    badge: "02",
  },
  {
    id: "revenue",
    titleEn: "High-Conversion Funnels & CAPI",
    titleAr: "مسارات التحويل والتتبع السحابي",
    categoryEn: "Revenue Growth",
    categoryAr: "مضاعفة المبيعات",
    image: "/signature-capabilities/Marketing-Growth-Systems.jpg",
    badge: "03",
  },
  {
    id: "product",
    titleEn: "SaaS Platforms & Mobile Apps",
    titleAr: "المنصات السحابية وتطبيقات الموبايل",
    categoryEn: "Product Scale",
    categoryAr: "هندسة المنتجات",
    image: "/signature-capabilities/Mobile-Apps-SaaS-Products.jpg",
    badge: "04",
  },
  {
    id: "corporate",
    titleEn: "Enterprise Web Architecture",
    titleAr: "المنصات المؤسسية الكبرى",
    categoryEn: "Next.js 15 Platform",
    categoryAr: "بنية فائقة السرعة",
    image: "/business-sectors/corporate-websites.jpg",
    badge: "05",
  },
  {
    id: "booking",
    titleEn: "Real-Time Booking Engines",
    titleAr: "محركات الحجز المتزامنة",
    categoryEn: "Turnkey System",
    categoryAr: "نظام متكامل",
    image: "/business-sectors/tourism-booking.jpg",
    badge: "06",
  },
  {
    id: "commerce",
    titleEn: "Omnichannel Commerce & POS",
    titleAr: "منظومات التجارة ونقاط البيع",
    categoryEn: "Direct Commerce",
    categoryAr: "تجارة رقمية",
    image: "/business-sectors/restaurants-pos.jpg",
    badge: "07",
  },
];

export function TiltedGridHero({
  items = DEFAULT_ITEMS,
  className,
}: {
  items?: ReelItem[];
  className?: string;
}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Repeat items for seamless infinite streaming
  const displayItems = [...items, ...items, ...items];
  const itemWidth = 360; // Card width in px
  const itemGap = 24; // Gap between cards in px
  const totalItemSpan = itemWidth + itemGap;
  const loopWidth = items.length * totalItemSpan;

  // Continuous smooth auto-stream animation loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.045; // Pixels per ms

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isHovered && !isDragging) {
        setOffset((prev) => {
          const next = prev + speed * delta;
          return next >= loopWidth ? next - loopWidth : next;
        });
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging, loopWidth]);

  // Drag interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(offset);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const diff = startX - e.clientX;
      let next = dragOffset + diff;
      if (next < 0) next += loopWidth;
      if (next >= loopWidth) next -= loopWidth;
      setOffset(next);
    },
    [isDragging, startX, dragOffset, loopWidth]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(offset);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = startX - e.touches[0].clientX;
    let next = dragOffset + diff;
    if (next < 0) next += loopWidth;
    if (next >= loopWidth) next -= loopWidth;
    setOffset(next);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-neutral-200 bg-white pb-16 pt-32 md:pb-24 md:pt-40 select-none",
        className
      )}
    >
      {/* Background radial ambient lights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-b from-[#2057ff]/10 via-amber-400/5 to-transparent blur-[140px]" />

      <div className="container-custom relative">
        <Reveal>
          {/* Header Stickers */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800">
              <span className="h-2 w-2 rounded-full bg-[#2057ff] animate-pulse" />
              {isRtl ? "حلول الأعمال المتكاملة للمؤسسات" : "Full-Stack Enterprise Solutions"}
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-bold text-neutral-500">
              {isRtl ? "Pencil Studio · تسليم مفتاح جاهز للعمل" : "Pencil Studio · Turnkey Partner"}
            </span>
          </div>

          {/* Main Hero Headline */}
          <div className="mx-auto mt-6 max-w-4xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-neutral-900 md:text-6xl md:leading-[1.12]">
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

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-xl">
              {isRtl
                ? "مش مجرد خدمات متفرقة بتطلبها بالقطعة وتتشتت بين خمس أطراف. بنسل بتبنيلك ماكينة أعمال رقمية متكاملة تضمن هيبة البراند، استقرار البرمجة، سرعة المبيعات، وأتمتة العمليات اليومية مع ذكاء Feliz المؤسسي الذي يربط المنظومة كلها."
                : "Not piecemeal services scattered across five different freelancers. We deliver integrated digital business engines: from brand authority and custom software to operational automation and SuperFeliz enterprise AI intelligence."}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/support/callback"
                className="inline-flex items-center gap-2.5 rounded-full bg-neutral-900 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg"
              >
                <PhoneCall size={16} />
                <span>{isRtl ? "احجز دراسة حل لشركتك" : "Discuss a solution for your company"}</span>
                <ArrowUpRight size={16} />
              </Link>

              <a
                href="#solutions-suites"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-sm font-bold text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-50"
              >
                <span>{isRtl ? "استكشف منظومات الحلول" : "Explore Solution Suites"}</span>
                <Flame size={15} className="text-[#2057ff]" />
              </a>

              <a
                href="#feliz-enterprise"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50/80 px-6 py-4 text-sm font-bold text-amber-900 transition hover:bg-amber-100"
              >
                <Sparkles size={15} className="text-amber-600" />
                <span>{isRtl ? "حلول Feliz للذكاء الاصطناعي" : "Feliz Enterprise AI"}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ============================================================ */}
      {/* 3D TILTED / CURVED STREAMING REEL                            */}
      {/* ============================================================ */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={cn(
          "relative mt-14 w-full overflow-hidden py-10 cursor-grab active:cursor-grabbing",
          isDragging && "cursor-grabbing"
        )}
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 start-0 z-20 w-24 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-48" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-20 w-24 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-48" />

        {/* 3D Curved Transform Layer */}
        <div
          className="flex items-center justify-start will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateX(-${offset}px)`,
            width: `${displayItems.length * totalItemSpan}px`,
          }}
        >
          {displayItems.map((item, index) => {
            // Calculate distance of this card from center viewport to compute 3D tilt curve
            const cardCenterPos = index * totalItemSpan + itemWidth / 2 - offset;
            const screenCenter = typeof window !== "undefined" ? window.innerWidth / 2 : 700;
            const distFromCenter = cardCenterPos - screenCenter;
            const normalizedDist = Math.max(-1.5, Math.min(1.5, distFromCenter / (screenCenter * 0.95)));

            // Curve math: cards tilt inward towards viewer at the edges and flatten in center
            const rotateY = -normalizedDist * 28; // Tilted angle
            const translateZ = (1 - Math.abs(normalizedDist)) * 60 - 60; // Curves toward viewer
            const scale = Math.max(0.85, 1 - Math.abs(normalizedDist) * 0.12);
            const opacity = Math.max(0.4, 1 - Math.abs(normalizedDist) * 0.35);

            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 transition-transform duration-75"
                style={{
                  width: `${itemWidth}px`,
                  marginRight: `${itemGap}px`,
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                  opacity,
                }}
              >
                <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border-2 border-neutral-900/10 bg-neutral-950 shadow-2xl transition-all duration-300 hover:border-neutral-900 hover:shadow-neutral-900/20">
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={isRtl ? item.titleAr : item.titleEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="360px"
                    priority={index < 5}
                  />

                  {/* Gradient Lighting & Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                  {/* Card Content Header */}
                  <div className="absolute top-4 start-4 flex items-center gap-2">
                    {item.badge && (
                      <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md">
                        {item.badge}
                      </span>
                    )}
                    <span className="rounded-full bg-neutral-900/70 px-2.5 py-0.5 text-[10px] font-bold text-white/90 backdrop-blur-md">
                      {isRtl ? item.categoryAr : item.categoryEn}
                    </span>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="absolute bottom-4 inset-x-4">
                    <p className="text-sm font-black text-white sm:text-base leading-snug drop-shadow-sm">
                      {isRtl ? item.titleAr : item.titleEn}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#6ea8fe]">
                      <span>{isRtl ? "حل متكامل تسليم مفتاح" : "Integrated Turnkey Solution"}</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtitle Hint */}
        <p className="mt-6 text-center text-xs font-semibold text-neutral-400">
          {isRtl
            ? "اسحب لعرض منظومات الأعمال · تدوير ثلاثي الأبعاد مستمر"
            : "Drag to explore enterprise solution engines · Continuous 3D perspective stream"}
        </p>
      </div>

      {/* Bottom Impact Metric Bar */}
      <div className="container-custom mt-12 border-t border-neutral-200/80 pt-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { en: "10+ Years", ar: "+10 سنوات", subEn: "Multidisciplinary Experience", subAr: "خبرة تنفيذية في السوق العربي" },
            { en: "Single Ownership", ar: "مسؤولية كاملة", subEn: "One Team Owns the Result", subAr: "فريق واحد يضمن النتيجة التجارية" },
            { en: "99.99% Uptime", ar: "99.99% استقرار", subEn: "Scalable Cloud Architecture", subAr: "بنية سحابية ذاتية التوسع والأمان" },
            { en: "Feliz AI Layer", ar: "ذكاء Feliz المؤسسي", subEn: "Enterprise AI & Operations", subAr: "أتمتة العمليات وخدمة العملاء 24/7" },
          ].map((m, idx) => (
            <div key={idx} className="flex flex-col text-center sm:text-start">
              <span className="text-xl font-black text-neutral-900 md:text-2xl" dir="ltr">
                {isRtl ? m.ar : m.en}
              </span>
              <span className="mt-1 text-xs font-semibold text-neutral-500">
                {isRtl ? m.subAr : m.subEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
