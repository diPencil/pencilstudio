"use client";

import React, { useState } from "react";
import { Compass, Code2, Megaphone, Server, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutDecadeStoryProps {
  isRtl: boolean;
}

const chapters = [
  {
    yearEn: "2014 // CAIRO",
    yearAr: "2014 // القاهرة",
    titleEn: "A sketch on a desk",
    titleAr: "اسكتش على مكتب أبيض",
    descEn:
      "We started as designers obsessed with one thing: work that looks exceptional and actually works under the hood.",
    descAr:
      "بدأنا ديزاينرز مهووسين بحاجة واحدة: شغل شكله رائع وشغال بجد على أرض الواقع بدون تهاون في التفاصيل.",
    badgeEn: "THE ORIGIN",
    badgeAr: "البداية",
  },
  {
    yearEn: "2017 // THE GULF",
    yearAr: "2017 // الخليج والمنطقة",
    titleEn: "Systems people live on",
    titleAr: "أنظمة الناس عايشة عليها",
    descEn:
      "Booking systems, luxury real estate platforms, and restaurant operations. The region trusted us with their core daily business.",
    descAr:
      "سيستمات حجز ومنصات عقارات وتشغيل مطاعم. كبرى الشركات ائتمنتنا على أنظمة شغلها اليومي وأثبتنا جدارتنا.",
    badgeEn: "REGIONAL SCALE",
    badgeAr: "التوسع الإقليمي",
  },
  {
    yearEn: "2021 // EUROPE & MOBILE",
    yearAr: "2021 // أوروبا والموبايل",
    titleEn: "Apps, SaaS and cloud engines",
    titleAr: "تطبيقات وسحابة ومنتجات SaaS",
    descEn:
      "High-concurrency mobile apps and serious cloud architecture across Europe and the Middle East.",
    descAr:
      "تطبيقات آيفون وأندرويد ومنتجات SaaS وتشغيل سحابي ثقيل. نفس الهوس الحرفي لكن على مسرح أكبر وأعقد.",
    badgeEn: "HIGH ARCHITECTURE",
    badgeAr: "الهندسة المتقدمة",
  },
  {
    yearEn: "2024–2026 // THE AI ERA",
    yearAr: "2024–2026 // عصر الذكاء والسحابة",
    titleEn: "SuperFeliz is born",
    titleAr: "ولادة سوبر فيليز ومنصتنا السحابية",
    descEn:
      "A decade of client engineering distilled into our own SuperFeliz AI model and in-house cloud management panel.",
    descAr:
      "عشر سنوات من الخبرة الميدانية تحولت إلى موديل AI ومحرك سحابي متكامل يخدم عملاءنا مباشرة من بيتنا.",
    badgeEn: "PROPRIETARY TECH",
    badgeAr: "تقنية مستقلة",
  },
];

const studioPrinciples = [
  {
    num: "01",
    icon: Compass,
    tagEn: "STRATEGIC LOGIC",
    tagAr: "المنطق الاستراتيجي",
    titleEn: "We direct before we decorate",
    titleAr: "بنوجّه ونفكر قبل ما نرسم",
    descEn:
      "We clarify the business model, revenue paths, and user intent before opening any design canvas. Aesthetics serve commercial momentum.",
    descAr:
      "بنحلل نموذج العمل ونقاط الربح وسير المستخدم في مشروعك قبل ما نفتح أي شاشة تصميم. الجمال البصري وظيفته يخدم نمو البيع.",
    protocolEn: "Business Logic > Visual Vanity",
    protocolAr: "تحليل الأرباح قبل الرسم",
    metricEn: "Clear Revenue Architecture",
    metricAr: "هندسة أرباح واضحة",
  },
  {
    num: "02",
    icon: Code2,
    tagEn: "PRODUCTION ENGINE",
    tagAr: "هندسة الإنتاج الحية",
    titleEn: "Engineered for zero ghostware",
    titleAr: "بنبني اللي يتشغل ويدخل فلوس",
    descEn:
      "No pretty prototypes that die in staging. We build enterprise production systems that live, endure, and handle high real-world customer traffic.",
    descAr:
      "مش بروتوتايب حلو يترمي في الدرج. بنبني سيستمات برمجية حية بتعيش وتتحمل آلاف العملاء الحقيقيين وضغط البيع بدون سقوط.",
    protocolEn: "100% Production Code • Zero Staging Death",
    protocolAr: "كود إنتاجي حقيقي • بدون مشاريع وهمية",
    metricEn: "High-Concurrency Resilience",
    metricAr: "استقرار فائق تحت الضغط",
  },
  {
    num: "03",
    icon: Megaphone,
    tagEn: "FOUNDER ACCESS",
    tagAr: "الوصول لصناع القرار",
    titleEn: "Direct founder-led access",
    titleAr: "تواصل مباشر مع صناع القرار",
    descEn:
      "No intermediate account managers or junior buffers. You talk directly with the senior engineering and design leads shaping your product.",
    descAr:
      "مفيش وسيط ولا مدراء حسابات بدون خبرة تقنية. كلامك واجتماعاتك مباشرة مع كبار المصممين والمهندسين اللي بيبنوا منتجك بإيدهم.",
    protocolEn: "Zero Middlemen • Senior Craft Execution",
    protocolAr: "بدون وسطاء • تواصل مباشر مع القادة",
    metricEn: "Instant Decision Velocity",
    metricAr: "سرعة استجابة وقرار فوري",
  },
  {
    num: "04",
    icon: Server,
    tagEn: "FULL-LIFECYCLE OPS",
    tagAr: "تشغيل وسحابة متكاملة",
    titleEn: "We operate what we build",
    titleAr: "تشغيل واستضافة وسحابة متكاملة",
    descEn:
      "From managed cloud VPS and enterprise DNS to automated security and continuous scaling, we own the full operational lifecycle in-house.",
    descAr:
      "من حجز النطاقات وسيرفرات الـ VPS وحتى حماية البيانات والنسخ الاحتياطي والتوسع المستمر، بنشيل مسؤولية التشغيل كاملة من بيتنا.",
    protocolEn: "In-House Cloud VPS • 24/7 Reliability",
    protocolAr: "سيرفرات سحابية خاصة • حماية 24/7",
    metricEn: "99.99% Operational Reliability",
    metricAr: "99.99% جاهزية تشغيل مستمرة",
  },
];

export function AboutDecadeStory({ isRtl }: AboutDecadeStoryProps) {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-0 text-neutral-900 lg:pt-28 lg:pb-0 select-none">
      <div className="container-custom mx-auto px-4 sm:px-6">
        
        {/* Part 1: The Decade Journey */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 mb-4 border border-neutral-200">
            {isRtl ? "رحلة العقد الكامل" : "A Decade of Delivery"}
          </span>
          <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl font-normal leading-tight">
            {isRtl ? (
              <>
                ستوديو من القاهرة <span className="italic font-light text-neutral-500">كبر مع إنترنت المنطقة</span>
              </>
            ) : (
              <>
                A Cairo Studio <span className="italic font-light text-neutral-500">That Grew with the Region</span>
              </>
            )}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed">
            {isRtl
              ? "نفس الهوس ونفس المعايير منذ 2014. إليك كيف تطورت الحرفة على مدار عشر سنوات:"
              : "Same obsession, same exacting standards since 2014. Here is how our craft evolved across a full decade:"}
          </p>
        </div>

        {/* 4 Milestones Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 lg:mb-32">
          {chapters.map((ch, idx) => {
            const isFirst = idx === 0;

            if (isFirst) {
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-[1.5px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1.5"
                >
                  {/* Subtle Electric Outer Halo on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#2057ff] opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-300" />

                  {/* Solid Blue Card Body */}
                  <div className="relative h-full w-full rounded-[14.5px] bg-[#2057ff] text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-blue-500/25 border border-blue-400/30">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-100 mb-6">
                        <span>{isRtl ? ch.yearAr : ch.yearEn}</span>
                        <span className="rounded-full bg-white/20 border border-white/25 px-2.5 py-0.5 text-[10px] text-white font-bold tracking-wider">
                          {isRtl ? ch.badgeAr : ch.badgeEn}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2.5">
                        {isRtl ? ch.titleAr : ch.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                        {isRtl ? ch.descAr : ch.descEn}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-blue-100">
                      <span>01 // THE ORIGIN</span>
                      <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-[1.5px] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/15 hover:-translate-y-1"
              >
                {/* Animated Rotating Electric Blue Border (Moving Stroke around card on hover) */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-[150%] animate-border-spin bg-[conic-gradient(from_0deg_at_50%_50%,#2057ff_0deg,#60a5fa_60deg,transparent_120deg,transparent_240deg,#2057ff_360deg)]" />
                </div>

                {/* Inner Card Content */}
                <div className="relative h-full w-full rounded-[14.5px] bg-[#FBFBFB] p-6 sm:p-7 flex flex-col justify-between border border-neutral-200 group-hover:border-transparent transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-neutral-500 mb-6">
                      <span className="group-hover:text-neutral-700 transition-colors">{isRtl ? ch.yearAr : ch.yearEn}</span>
                      <span className="rounded-full bg-neutral-200/80 px-2 py-0.5 text-[10px] text-neutral-800 group-hover:bg-blue-50 group-hover:text-[#2057ff] transition-colors">
                        {isRtl ? ch.badgeAr : ch.badgeEn}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-950 mb-2 group-hover:text-[#2057ff] transition-colors">
                      {isRtl ? ch.titleAr : ch.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {isRtl ? ch.descAr : ch.descEn}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200 group-hover:border-blue-100 transition-colors flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-neutral-600">
                    <span>0{idx + 1} // MILESTONE</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2057ff]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Studio Standards - Full Width Open Canvas with Living Gradient Mesh */}
      <div className="relative w-full overflow-hidden bg-[#FAFAFA] pt-20 pb-16 lg:pt-32 lg:pb-24 border-t border-neutral-200/80 select-none">
        
        {/* Living Multi-Color Animated Gradient Aura Blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Cobalt Blue Aura Blob */}
          <div className="animate-aura-1 absolute -top-24 -left-20 h-[560px] w-[560px] rounded-full bg-[#2057ff]/14 blur-[130px]" />
          
          {/* Violet / Indigo Aura Blob */}
          <div className="animate-aura-2 absolute top-1/4 -right-24 h-[600px] w-[600px] rounded-full bg-[#8b5cf6]/12 blur-[140px]" />
          
          {/* Cyan / Teal Fresh Aura Blob */}
          <div className="animate-aura-3 absolute -bottom-24 left-1/3 h-[520px] w-[520px] rounded-full bg-[#06b6d4]/12 blur-[130px]" />
          
          {/* Warm Coral / Rose Highlight Blob */}
          <div className="animate-aura-1 absolute top-1/2 right-1/4 h-[440px] w-[440px] rounded-full bg-[#f43f5e]/8 blur-[130px]" />

          {/* Delicate Fine Architectural Dot Grid Texture */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="container-custom relative z-10 mx-auto px-4 sm:px-6">
          
          {/* Section Heading matching Home Page signature */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-neutral-800 mb-4 border border-neutral-200 shadow-sm">
              {isRtl ? "معايير PENCIL الصارمة" : "The Studio Standards"}
            </span>
            <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl font-normal leading-tight">
              {isRtl ? (
                <>
                  لسنا مجرد منفذين، <span className="italic font-light text-neutral-500">نحن شركاء قرار</span>
                </>
              ) : (
                <>
                  We Are Not Just Makers, <span className="italic font-light text-neutral-500">We Are Decision Partners</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              {isRtl
                ? "أجمل واجهة في العالم مالهاش قيمة لو مش بتبيع أو بتشغل بكفاءة. مرر الماوس لاستكشاف بروتوكولاتنا الأربعة:"
                : "The most gorgeous interface means little if it does not convert or run reliably. Hover across the 4 pillars to explore our operating protocols:"}
            </p>
          </div>

          {/* Sleek Expanding Monolith Slabs - Ultra-Compact & Snug (Zero Empty Space) */}
          <div className="flex flex-col lg:flex-row gap-3.5 h-auto lg:h-[225px] w-full">
            {studioPrinciples.map((pillar, idx) => {
              const isActive = activePillar === idx;
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.num}
                  onMouseEnter={() => setActivePillar(idx)}
                  onClick={() => setActivePillar(idx)}
                  className={cn(
                    "group relative rounded-2xl p-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none",
                    isActive
                      ? "lg:flex-[2.8] shadow-xl shadow-blue-500/15"
                      : "lg:flex-1 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  )}
                >
                  {/* Animated Rotating Electric Blue Border (Active or on Hover) */}
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                  >
                    <div className="absolute -inset-[150%] animate-border-spin bg-[conic-gradient(from_0deg_at_50%_50%,#2057ff_0deg,#60a5fa_60deg,transparent_120deg,transparent_240deg,#2057ff_360deg)]" />
                  </div>

                  {/* Inner Card Body */}
                  <div
                    className={cn(
                      "relative h-full w-full rounded-[14.5px] overflow-hidden flex flex-col justify-between transition-colors",
                      isActive
                        ? "bg-white/95 backdrop-blur-2xl border border-transparent"
                        : "bg-white/80 backdrop-blur-xl border border-neutral-200/80 group-hover:border-transparent group-hover:bg-white/95"
                    )}
                  >
                    {/* Subtle Ambient Glow for active slab */}
                    {isActive && (
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(32,87,255,0.06),transparent_70%)]" />
                    )}

                    {/* Watermark Number */}
                    <span
                      className={cn(
                        "pointer-events-none absolute font-mono font-black transition-all duration-500 select-none",
                        isActive
                          ? "top-2.5 right-4 text-4xl sm:text-5xl text-neutral-900/[0.04]"
                          : "top-2.5 right-2.5 text-2xl sm:text-3xl text-neutral-900/[0.05]"
                      )}
                    >
                      {pillar.num}
                    </span>

                    {/* Inner Content - Ultra Tight and Snug */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-5">
                      <div>
                        {/* Top Row: Icon + Tag */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div
                            className={cn(
                              "h-9 w-9 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm shrink-0",
                              isActive
                                ? "bg-[#2057ff] text-white shadow-md shadow-[#2057ff]/25 scale-105"
                                : "bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </div>

                          <span
                            className={cn(
                              "text-[9px] sm:text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border transition-colors",
                              isActive
                                ? "bg-blue-50 text-[#2057ff] border-blue-200 font-bold"
                                : "bg-neutral-100/80 text-neutral-500 border-neutral-200/60 truncate max-w-[105px]"
                            )}
                          >
                            {isRtl ? pillar.tagAr : pillar.tagEn}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={cn(
                            "font-bold transition-colors duration-300 leading-snug",
                            isActive
                              ? "text-base sm:text-lg text-neutral-950 mb-1"
                              : "text-xs sm:text-sm text-neutral-800 line-clamp-2"
                          )}
                        >
                          {isRtl ? pillar.titleAr : pillar.titleEn}
                        </h3>

                        {/* Description (Visible on Active Slab) */}
                        {isActive && (
                          <p className="text-xs text-neutral-600 leading-relaxed max-w-xl transition-all duration-300 line-clamp-2">
                            {isRtl ? pillar.descAr : pillar.descEn}
                          </p>
                        )}
                      </div>

                      {/* Bottom Protocol Row */}
                      {isActive ? (
                        <div className="pt-2 border-t border-neutral-200/70 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                          <div className="flex items-center gap-1.5 text-[#2057ff] font-bold">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#2057ff] shrink-0" />
                            <span>{isRtl ? pillar.protocolAr : pillar.protocolEn}</span>
                          </div>
                          <span className="text-neutral-500 font-semibold">
                            {isRtl ? pillar.metricAr : pillar.metricEn}
                          </span>
                        </div>
                      ) : (
                        <div className="hidden lg:flex items-center justify-between pt-2 border-t border-neutral-200/50 text-[10px] font-mono text-neutral-400 font-semibold">
                          <span>PILLAR {pillar.num}</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
