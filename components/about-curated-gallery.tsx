"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutCuratedGalleryProps {
  isRtl: boolean;
}

interface ServiceCardItem {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  badgeEn: string;
  badgeAr: string;
  materialsEn: string[];
  materialsAr: string[];
  videoSrc: string;
  posterSrc: string;
}

const serviceCapabilities: ServiceCardItem[] = [
  {
    id: "1",
    slug: "brand-identity",
    nameEn: "Brand Identity & Creative Design",
    nameAr: "الهوية البصرية والتصميم الإبداعي",
    taglineEn: "Comprehensive brand positioning and bespoke visual architecture.",
    taglineAr: "بناء الهوية وتحديد مكانة العلامة التجارية بتصميم بصري مخصص.",
    badgeEn: "Core",
    badgeAr: "أساسية",
    materialsEn: ["Brand Strategy", "Visual System", "Guidelines"],
    materialsAr: ["استراتيجية العلامة", "منظومة بصرية", "أدلة الاستخدام"],
    videoSrc: "/signature-capabilities/brand-identity-creative-design.mp4",
    posterSrc: "/hero-section.jpg",
  },
  {
    id: "2",
    slug: "websites-platforms",
    nameEn: "Websites & Digital Platforms",
    nameAr: "المواقع والمنصات الرقمية",
    taglineEn: "High-performance digital flagship platforms engineered for real traffic.",
    taglineAr: "منصات ويب رائدة فائقة السرعة مهندسة للعمل تحت ضغط الزوار الحقيقيين.",
    badgeEn: "Core",
    badgeAr: "أساسية",
    materialsEn: ["Next.js", "Headless CMS", "Global Edge"],
    materialsAr: ["Next.js", "إدارة محتوى مرنة", "شبكات سحابية عالمية"],
    videoSrc: "/signature-capabilities/websites-digital-platforms.mp4",
    posterSrc: "/hero-section.jpg",
  },
  {
    id: "3",
    slug: "mobile-apps-saas",
    nameEn: "Mobile Apps & SaaS Products",
    nameAr: "تطبيقات الموبايل ومنتجات SaaS",
    taglineEn: "Scalable iOS, Android and SaaS software products engineered to endure.",
    taglineAr: "تطبيقات هواتف آيفون وأندرويد ومنظومات سحابية مبنية للتوسع والاستقرار.",
    badgeEn: "Elite",
    badgeAr: "نخبة",
    materialsEn: ["React Native", "Secure APIs", "Cloud Realtime"],
    materialsAr: ["React Native", "واجهات برمجية آمنة", "بيانات فورية"],
    videoSrc: "/signature-capabilities/mobile-apps-saas-products.mp4",
    posterSrc: "/hero-section.jpg",
  },
  {
    id: "4",
    slug: "business-systems",
    nameEn: "Business Systems & Dashboards",
    nameAr: "الأنظمة المؤسسية ولوحات التحكم",
    taglineEn: "Custom POS, booking engines, and internal automated enterprise tools.",
    taglineAr: "أنظمة كاشير ونقاط بيع ومحركات حجز وأدوات أتمتة مؤسسية داخلية.",
    badgeEn: "Core",
    badgeAr: "أساسية",
    materialsEn: ["Operational Dashboards", "CRM Sync", "Role Security"],
    materialsAr: ["لوحات تشغيل", "ربط CRM", "صلاحيات مشددة"],
    videoSrc: "/signature-capabilities/business-systems-dashboards.mp4",
    posterSrc: "/business-sectors/crm-automation.jpg",
  },
  {
    id: "5",
    slug: "marketing-growth",
    nameEn: "Marketing & Growth Systems",
    nameAr: "منظومات التسويق والنمو الرقمي",
    taglineEn: "Conversion funnel engineering, performance campaigns, and SEO engines.",
    taglineAr: "هندسة مسارات التحويل وحملات قياس الأداء وتهيئة محركات البحث.",
    badgeEn: "Core",
    badgeAr: "أساسية",
    materialsEn: ["Conversion Flow", "Performance SEO", "Paid Strategy"],
    materialsAr: ["مسار التحويل", "تهيئة البحث", "إعلانات موجهة"],
    videoSrc: "/signature-capabilities/marketing-growth-systems.mp4",
    posterSrc: "/hero-section.jpg",
  },
  {
    id: "6",
    slug: "hosting-cloud",
    nameEn: "Hosting, Cloud & Tech Support",
    nameAr: "الاستضافة والسحابة والدعم التقني",
    taglineEn: "Zero-downtime managed cloud, daily backups, and 24/7 technical monitoring.",
    taglineAr: "إدارة سحابية بدون انقطاع مع نسخ احتياطي يومي ومراقبة تشغيل على مدار الساعة.",
    badgeEn: "Elite",
    badgeAr: "نخبة",
    materialsEn: ["Cloudflare Edge", "Automated Backups", "24/7 Monitoring"],
    materialsAr: ["شبكة Cloudflare", "نسخ احتياطي آلي", "مراقبة مستمرة"],
    videoSrc: "/signature-capabilities/hosting-cloud-tech-support.mp4",
    posterSrc: "/hero-section.jpg",
  },
];

export function AboutCuratedGallery({ isRtl }: AboutCuratedGalleryProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Manual scroll step when clicking arrows
  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const distance = 380;
    containerRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  // Duplicated list for seamless infinite loop
  const loopItems = [...serviceCapabilities, ...serviceCapabilities];

  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-[#FBFBFB] border-b border-neutral-200/80 select-none">
      <div className="container-custom mx-auto px-4 sm:px-6 mb-12 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          {/* Header matching exact Home Page section heading typography & style */}
          <div className="text-start max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 mb-4 border border-neutral-200">
              {isRtl ? "خدماتنا وإمكاناتنا" : "Signature Capabilities"}
            </span>
            <h2 className={cn("text-neutral-900 mb-4 text-4xl lg:text-6xl font-normal", isRtl ? "tracking-normal" : "leading-tight")}>
              {isRtl ? (
                <>
                  منظوماتنا البرمجية <span className="italic font-light text-neutral-500">في حركة مستمرة</span>
                </>
              ) : (
                <>
                  Signature Systems <span className="italic font-light text-neutral-500">in Motion</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
              {isRtl
                ? "من بناء العلامة وتطوير الويب وحتى المنظومات السحابية المتقدمة، استعرض كروت خدماتنا الأساسية قيد التشغيل."
                : "From brand positioning and custom web platforms to cloud software, explore our core production capabilities in motion."}
            </p>
          </div>

          {/* Quick manual navigation controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scroll(isRtl ? "right" : "left")}
              aria-label={isRtl ? "السابق" : "Previous capability"}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm transition-all hover:bg-neutral-950 hover:text-white hover:border-neutral-950 hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(isRtl ? "left" : "right")}
              aria-label={isRtl ? "التالي" : "Next capability"}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm transition-all hover:bg-neutral-950 hover:text-white hover:border-neutral-950 hover:scale-105 active:scale-95"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Moving Service Video Cards Slider */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-[#FBFBFB] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-[#FBFBFB] to-transparent" />

        <div
          ref={containerRef}
          className={`flex gap-6 w-max py-4 will-change-transform ${
            isRtl ? "about-work-marquee-rtl" : "about-work-marquee-ltr"
          }`}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            animationDuration: "45s",
          }}
        >
          {loopItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="group relative h-[460px] sm:h-[500px] md:h-[530px] w-[300px] sm:w-[340px] md:w-[360px] shrink-0 overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-900 shadow-md transition-all duration-500 hover:shadow-2xl hover:border-[#2057ff] hover:-translate-y-2"
            >
              {/* Background Video Looping */}
              <div className="absolute inset-0 overflow-hidden">
                <video
                  src={`${item.videoSrc}#t=0.001`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                />
              </div>

              {/* Black Gradient Overlay - reveals on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

              {/* Top Badge (Core / Elite) - reveals on hover */}
              <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center text-[11px] font-mono opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <span className="rounded-full bg-white/95 px-3 py-1 font-bold text-neutral-950 backdrop-blur-md shadow-sm border border-neutral-100 uppercase tracking-wider">
                  {isRtl ? item.badgeAr : item.badgeEn}
                </span>
                <span className="text-white/70 font-bold">
                  {(idx % serviceCapabilities.length) + 1 < 10
                    ? `0${(idx % serviceCapabilities.length) + 1}`
                    : (idx % serviceCapabilities.length) + 1}
                </span>
              </div>

              {/* Bottom Card Content - reveals on hover with smooth slide-up */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-start text-white space-y-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                <div className="flex flex-wrap gap-1.5">
                  {(isRtl ? item.materialsAr : item.materialsEn).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/15 backdrop-blur-md text-white/90 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {isRtl ? item.nameAr : item.nameEn}
                </h3>

                <p className="text-xs sm:text-sm text-white/75 line-clamp-2 leading-relaxed">
                  {isRtl ? item.taglineAr : item.taglineEn}
                </p>

                {/* Direct Action Link to Service Page */}
                <div className="pt-2">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-neutral-900 transition hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <span>{isRtl ? "افتح صفحة الخدمة" : "Open service page"}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
