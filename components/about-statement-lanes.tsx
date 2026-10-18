"use client";

import React from "react";
import { Plus } from "lucide-react";

interface AboutStatementLanesProps {
  isRtl: boolean;
}

// 5 Distinct Lanes with real studio capabilities matching the brick-staggered layout
const lane1Items = [
  { type: "empty", width: 110 },
  { type: "label", en: "Photo and video production", ar: "إنتاج الفيديو والمحتوى البصري" },
  { type: "label", en: "Campaign Strategy", ar: "استراتيجية الحملات الرقمية" },
  { type: "empty", width: 260 },
  { type: "empty", width: 138 },
  { type: "empty", width: 275 },
  { type: "label", en: "Web Design & UI/UX", ar: "تصميم المواقع وتجربة المستخدم" },
  { type: "empty", width: 289 },
];

const lane2Items = [
  { type: "label", en: "Branding & Identity", ar: "بناء الهوية والعلامات التجارية" },
  { type: "empty", width: 330 },
  { type: "empty", width: 207 },
  { type: "label", en: "Communication management", ar: "إدارة التواصل والرسائل التسويقية" },
  { type: "empty", width: 221 },
  { type: "label", en: "Reels & Stories creation", ar: "صناعة الريلز والقصص التفاعلية" },
  { type: "empty", width: 235 },
  { type: "empty", width: 112 },
];

const lane3Items = [
  { type: "empty", width: 140 },
  { type: "label", en: "Content publishing and management", ar: "إدارة ونشر المحتوى الرقمي" },
  { type: "label", en: "Content planning", ar: "تخطيط الأجندة وصناعة المحتوى" },
  { type: "label", en: "Social Media Management", ar: "إدارة منصات التواصل الاجتماعي" },
  { type: "empty", width: 290 },
  { type: "empty", width: 160 },
  { type: "empty", width: 210 },
];

const lane4Items = [
  { type: "label", en: "Market and competitor analysis", ar: "تحليل السوق ودراسة المنافسين" },
  { type: "empty", width: 240 },
  { type: "label", en: "Content Creation", ar: "صناعة المحتوى الإبداعي" },
  { type: "empty", width: 280 },
  { type: "empty", width: 190 },
  { type: "label", en: "SEO & Performance Growth", ar: "تهيئة محركات البحث ونمو المبيعات" },
  { type: "empty", width: 150 },
];

const lane5Items = [
  { type: "empty", width: 160 },
  { type: "label", en: "Graphic design", ar: "التصميم الجرافيكي والأنظمة البصرية" },
  { type: "label", en: "Copywriting", ar: "كتابة النصوص الإعلانية والبيع" },
  { type: "empty", width: 310 },
  { type: "label", en: "Social media strategy", ar: "استراتيجيات النمو الرقمي" },
  { type: "empty", width: 220 },
  { type: "empty", width: 180 },
];

export function AboutStatementLanes({ isRtl }: AboutStatementLanesProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-neutral-900 border-b border-neutral-200 lg:py-28 select-none">
      
      {/* Subtle Architectural Dot Grid on White Canvas */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 1. Header & Statement on Clean White Gallery Canvas */}
      <div className="container-custom relative z-10 mx-auto px-4 sm:px-6 mb-16 lg:mb-20">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 mb-4 border border-neutral-200">
            {isRtl ? "عن الاستوديو" : "About Us"}
          </span>
          <h2 className="text-4xl text-neutral-900 mb-6 lg:text-6xl font-normal leading-tight">
            {isRtl ? (
              <>
                توجه استراتيجي <span className="italic font-light text-neutral-500">للعلامات التجارية الحديثة</span>
              </>
            ) : (
              <>
                Strategic Direction <span className="italic font-light text-neutral-500">for Modern Brands</span>
              </>
            )}
          </h2>

          {/* Giant Statement with PENCIL brand blue highlight */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-neutral-900 leading-[1.3] tracking-tight">
            {isRtl ? (
              <>
                وكالة <span className="text-[#2057ff] font-bold">PENCIL</span> تصنع توجهاً واضحاً للعلامات التجارية، ومكانة رقمية قوية، واستراتيجية نمو تجمع بين الفكرة، والمنظومة، والنتيجة.
              </>
            ) : (
              <>
                <span className="text-[#2057ff] font-bold">PENCIL AGENCY</span> creates a clear direction for brands, strong digital positioning, and a growth strategy that unites idea, system, and result.
              </>
            )}
          </p>

          <p className="text-sm sm:text-base text-neutral-600 max-w-2xl leading-relaxed">
            {isRtl
              ? "من الاستراتيجية إلى المحتوى، نبني علامات تجارية حديثة بوضوح وسرعة وأثر يدوم."
              : "From strategy to content, we build modern brands with clarity, speed, and lasting impact."}
          </p>
        </div>
      </div>

      {/* 2. The 5 Staggered Capability Lanes on White Paper Canvas */}
      <div
        className="relative w-full overflow-hidden flex flex-col gap-3.5 sm:gap-4.5 py-4"
        dir="ltr"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        
        {/* Lane 1: Sliding Left */}
        <div className="flex w-max lanes-scroll-left-1 gap-3 sm:gap-4 items-center">
          {[...lane1Items, ...lane1Items, ...lane1Items].map((item, idx) => (
            <React.Fragment key={idx}>
              {item.type === "label" ? (
                <div className="h-12 sm:h-14 px-6 sm:px-7 rounded-full bg-[#2057ff] text-white flex items-center gap-2.5 font-bold text-xs sm:text-sm tracking-wide shrink-0 transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" strokeWidth={2.5} />
                  <span className="whitespace-nowrap">{isRtl ? item.ar : item.en}</span>
                </div>
              ) : (
                <div
                  className="h-12 sm:h-14 rounded-full bg-neutral-100/90 border border-neutral-200/90 shrink-0"
                  style={{ width: `${item.width}px` }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Lane 2: Sliding Right */}
        <div className="flex w-max lanes-scroll-right-1 gap-3 sm:gap-4 items-center">
          {[...lane2Items, ...lane2Items, ...lane2Items].map((item, idx) => (
            <React.Fragment key={idx}>
              {item.type === "label" ? (
                <div className="h-12 sm:h-14 px-6 sm:px-7 rounded-full bg-[#2057ff] text-white flex items-center gap-2.5 font-bold text-xs sm:text-sm tracking-wide shrink-0 transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" strokeWidth={2.5} />
                  <span className="whitespace-nowrap">{isRtl ? item.ar : item.en}</span>
                </div>
              ) : (
                <div
                  className="h-12 sm:h-14 rounded-full bg-neutral-100/90 border border-neutral-200/90 shrink-0"
                  style={{ width: `${item.width}px` }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Lane 3: Sliding Left */}
        <div className="flex w-max lanes-scroll-left-2 gap-3 sm:gap-4 items-center">
          {[...lane3Items, ...lane3Items, ...lane3Items].map((item, idx) => (
            <React.Fragment key={idx}>
              {item.type === "label" ? (
                <div className="h-12 sm:h-14 px-6 sm:px-7 rounded-full bg-[#2057ff] text-white flex items-center gap-2.5 font-bold text-xs sm:text-sm tracking-wide shrink-0 transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" strokeWidth={2.5} />
                  <span className="whitespace-nowrap">{isRtl ? item.ar : item.en}</span>
                </div>
              ) : (
                <div
                  className="h-12 sm:h-14 rounded-full bg-neutral-100/90 border border-neutral-200/90 shrink-0"
                  style={{ width: `${item.width}px` }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Lane 4: Sliding Right */}
        <div className="flex w-max lanes-scroll-right-2 gap-3 sm:gap-4 items-center">
          {[...lane4Items, ...lane4Items, ...lane4Items].map((item, idx) => (
            <React.Fragment key={idx}>
              {item.type === "label" ? (
                <div className="h-12 sm:h-14 px-6 sm:px-7 rounded-full bg-[#2057ff] text-white flex items-center gap-2.5 font-bold text-xs sm:text-sm tracking-wide shrink-0 transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" strokeWidth={2.5} />
                  <span className="whitespace-nowrap">{isRtl ? item.ar : item.en}</span>
                </div>
              ) : (
                <div
                  className="h-12 sm:h-14 rounded-full bg-neutral-100/90 border border-neutral-200/90 shrink-0"
                  style={{ width: `${item.width}px` }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Lane 5: Sliding Left */}
        <div className="flex w-max lanes-scroll-left-3 gap-3 sm:gap-4 items-center">
          {[...lane5Items, ...lane5Items, ...lane5Items].map((item, idx) => (
            <React.Fragment key={idx}>
              {item.type === "label" ? (
                <div className="h-12 sm:h-14 px-6 sm:px-7 rounded-full bg-[#2057ff] text-white flex items-center gap-2.5 font-bold text-xs sm:text-sm tracking-wide shrink-0 transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" strokeWidth={2.5} />
                  <span className="whitespace-nowrap">{isRtl ? item.ar : item.en}</span>
                </div>
              ) : (
                <div
                  className="h-12 sm:h-14 rounded-full bg-neutral-100/90 border border-neutral-200/90 shrink-0"
                  style={{ width: `${item.width}px` }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes scrollLeftKeyframe {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        @keyframes scrollRightKeyframe {
          0% { transform: translateX(-33.333333%); }
          100% { transform: translateX(0); }
        }
        .lanes-scroll-left-1 {
          animation: scrollLeftKeyframe 70s linear infinite;
        }
        .lanes-scroll-right-1 {
          animation: scrollRightKeyframe 78s linear infinite;
        }
        .lanes-scroll-left-2 {
          animation: scrollLeftKeyframe 65s linear infinite;
        }
        .lanes-scroll-right-2 {
          animation: scrollRightKeyframe 82s linear infinite;
        }
        .lanes-scroll-left-3 {
          animation: scrollLeftKeyframe 72s linear infinite;
        }
        .lanes-scroll-left-1:hover,
        .lanes-scroll-right-1:hover,
        .lanes-scroll-left-2:hover,
        .lanes-scroll-right-2:hover,
        .lanes-scroll-left-3:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
