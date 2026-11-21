"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PencilButton } from "@/components/ui/pencil-button";
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
  imageSrc: string;
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
    imageSrc: "/about/Brand-Identity-Creative-Design.jpg",
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
    imageSrc: "/about/Websites-Digital-Platforms.jpg",
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
    imageSrc: "/about/Mobile-Apps-SaaS-Products.jpg",
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
    imageSrc: "/about/Business-Systems-Dashboards.jpg",
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
    imageSrc: "/about/Marketing-Growth-Systems.jpg",
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
    imageSrc: "/about/Hosting-Cloud-Tech-Support.jpg",
  },
];

export function AboutCuratedGallery({ isRtl }: AboutCuratedGalleryProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Duplicated list for seamless infinite loop
  const loopItems = [...serviceCapabilities, ...serviceCapabilities];

  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-[#FBFBFB] border-b border-neutral-200/80 select-none">
      <div className="container-custom mx-auto px-4 sm:px-6 mb-12 lg:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 lg:gap-12">
          
          {/* Header matching exact Home Page section heading typography & style */}
          <div className="text-start max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 mb-4 border border-neutral-200">
              {isRtl ? "خدماتنا وإمكاناتنا" : "Signature Capabilities"}
            </span>
            <h2 className={cn("text-neutral-900 text-4xl lg:text-6xl font-normal", isRtl ? "tracking-normal" : "leading-tight")}>
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
          </div>

          {/* Description placed on the right side in place of navigation controls */}
          <div className="max-w-md pb-1 text-start">
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {isRtl
                ? "من بناء العلامة وتطوير الويب وحتى المنظومات السحابية المتقدمة، استعرض كروت خدماتنا الأساسية قيد التشغيل."
                : "From brand positioning and custom web platforms to cloud software, explore our core production capabilities in motion."}
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Moving Service Video Cards Slider */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
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
              className="group relative h-[460px] sm:h-[500px] md:h-[530px] w-[300px] sm:w-[340px] md:w-[360px] shrink-0 overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-900 shadow-md transition-all duration-500 hover:shadow-xl hover:border-[#2057ff] hover:-translate-y-1"
            >
              {/* Background Image with smooth zoom on hover */}
              <div className="absolute inset-0 overflow-hidden bg-neutral-900">
                <Image
                  src={item.imageSrc}
                  alt={isRtl ? item.nameAr : item.nameEn}
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, 360px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={idx < 4}
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
                  <PencilButton
                    href={`/services/${item.slug}`}
                    variant="primary"
                    size="sm"
                    hoverLabel={isRtl ? "تفاصيل الخدمة ←" : "Service details →"}
                  >
                    {isRtl ? "افتح صفحة الخدمة" : "Open service page"}
                  </PencilButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
