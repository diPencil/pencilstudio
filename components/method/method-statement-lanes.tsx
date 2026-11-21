"use client";

import React from "react";
import { Plus } from "lucide-react";
import type { MethodKey } from "@/lib/method/method-content";

interface MethodStatementLanesProps {
  methodKey: MethodKey;
  isRtl: boolean;
  accentColor?: string;
}

type LaneItem =
  | { type: "label"; en: string; ar: string }
  | { type: "empty"; width: number };

const methodLanesData: Record<
  MethodKey,
  {
    lane1: LaneItem[];
    lane2: LaneItem[];
  }
> = {
  strategy: {
    lane1: [
      { type: "empty", width: 130 },
      { type: "label", en: "Commercial Bottleneck & Margin Audit", ar: "تدقيق الاختناقات التجارية وهامش الربحية" },
      { type: "label", en: "Positioning & Messaging Architecture", ar: "استراتيجية التموضع وصياغة الرسائل" },
      { type: "empty", width: 220 },
      { type: "label", en: "Competitor Mystery Shop & Teardown", ar: "تحليل وتفكيك المنافسين الـ 5 المباشرين" },
      { type: "empty", width: 150 },
      { type: "label", en: "Information Architecture & Sitemap", ar: "هيكلة خريطة الموقع وتدفق المعلومات" },
      { type: "label", en: "Bilingual Value Proposition Suite", ar: "حزمة عروض القيمة بالعربية والإنجليزية" },
      { type: "empty", width: 260 },
      { type: "label", en: "Signed Scope Protection Agreement", ar: "ميثاق تحديد النطاق وحماية الميزانية" },
      { type: "empty", width: 140 },
    ],
    lane2: [
      { type: "label", en: "90-Day Execution Roadmap & KPIs", ar: "خارطة طريق تنفيذية لـ 90 يوماً ومؤشرات الأداء" },
      { type: "empty", width: 180 },
      { type: "label", en: "Customer Persona & Objection Mapping", ar: "تحديد شخصيات العملاء وتفكيك مخاوف الشراء" },
      { type: "empty", width: 140 },
      { type: "label", en: "Offer Packaging & Pricing Architecture", ar: "هندسة تسعير وبكجات العروض التجارية" },
      { type: "empty", width: 240 },
      { type: "label", en: "Recorded Executive Walkthrough & Docs", ar: "توثيق شامل وجلسة مسجلة لمواءمة الإدارة" },
      { type: "empty", width: 160 },
      { type: "label", en: "WhatsApp & Funnel Conversion Audit", ar: "تحليل مسار التحويل وسرعة الاستجابة" },
      { type: "label", en: "Paper, Not Promises Architecture", ar: "وثيقة تنفيذية مكتوبة تعتمد عليها فرق العمل" },
      { type: "empty", width: 120 },
    ],
  },

  design: {
    lane1: [
      { type: "empty", width: 120 },
      { type: "label", en: "Figma High-Fidelity UI/UX System", ar: "نظام فيجما المتكامل لتصميم الواجهات" },
      { type: "label", en: "Brand Book & Design Token Engine", ar: "محددات التصميم ودليل الهوية المتكامل" },
      { type: "empty", width: 230 },
      { type: "label", en: "Arabic RTL Pixel-Perfect Typography", ar: "تايبوغرافي عربي دقيق ومحاذاة بالبكسل" },
      { type: "empty", width: 150 },
      { type: "label", en: "Interactive Clickable Prototypes", ar: "نماذج تفاعلية حية للاختبار والمراجعة" },
      { type: "label", en: "Color Harmony & Accessible Contrast", ar: "تناغم لوني ومعايير تباين عالمية WCAG" },
      { type: "empty", width: 270 },
      { type: "label", en: "Bespoke Iconography & SVG Assets", ar: "حزمة أيقونات وعناصر فيكتور مخصصة" },
      { type: "empty", width: 140 },
    ],
    lane2: [
      { type: "label", en: "Micro-Interactions & Motion Intro", ar: "حركات تفاعلية دقيقة وانترو موشن للشعار" },
      { type: "empty", width: 180 },
      { type: "label", en: "Maze Usability Testing & User Sessions", ar: "جلسات اختبار قابلية الاستخدام عبر Maze" },
      { type: "empty", width: 140 },
      { type: "label", en: "Component Architecture & Auto-Layout", ar: "معمارية المكونات وأنظمة الأوتو لايوت" },
      { type: "empty", width: 240 },
      { type: "label", en: "Responsive Grid for All Devices", ar: "شبكة تصميم متجاوبة لجميع أحجام الشاشات" },
      { type: "empty", width: 160 },
      { type: "label", en: "Developer Handoff & Variable Specs", ar: "تسليم برمجي نظيف وتوثيق المتغيرات" },
      { type: "label", en: "Packaging, Social & Print Templates", ar: "قوالب متناسقة للسوشيال ميديا والطباعة" },
      { type: "empty", width: 120 },
    ],
  },

  build: {
    lane1: [
      { type: "empty", width: 130 },
      { type: "label", en: "Next.js 15 App Router Architecture", ar: "معمارية نكست جي اس 15 بأحدث بنية" },
      { type: "label", en: "TypeScript Strict Type-Safety", ar: "تايب سكريبت لأعلى أمان وموثوقية بالكود" },
      { type: "empty", width: 240 },
      { type: "label", en: "Supabase & PostgreSQL Database", ar: "قواعد بيانات سوبابيز وبوستجريس فائقة السرعة" },
      { type: "empty", width: 150 },
      { type: "label", en: "Paymob & Stripe Payment Gateways", ar: "ربط وتأمين بوابات الدفع باي موب وسترايب" },
      { type: "label", en: "Core Web Vitals 95+ Speed Guarantee", ar: "ضمان سرعة 95+ بمعايير جوجل القياسية" },
      { type: "empty", width: 280 },
      { type: "label", en: "Tailwind CSS & Framer Motion", ar: "تيلويند سي إس إس ومؤثرات فريمر الانسيابية" },
      { type: "empty", width: 140 },
    ],
    lane2: [
      { type: "label", en: "Vercel & AWS Edge Infrastructure", ar: "بنية سحابية على Vercel وAWS مع CDN عالمي" },
      { type: "empty", width: 190 },
      { type: "label", en: "Automated Daily Backups & SSL", ar: "نسخ احتياطي يومي آلي وشهادات أمان SSL" },
      { type: "empty", width: 130 },
      { type: "label", en: "Arabic First CMS & Admin Dashboard", ar: "لوحة تحكم إدارية وإدارة محتوى عربية بالكامل" },
      { type: "empty", width: 250 },
      { type: "label", en: "Technical On-Page SEO & Schema", ar: "تهيئة تقنية كاملة لمحركات البحث وسكيما" },
      { type: "empty", width: 160 },
      { type: "label", en: "30-Day Hypercare Post-Launch", ar: "رعاية ومتابعة مكثفة 30 يوماً بعد الإطلاق" },
      { type: "label", en: "Zero Broken Links & SLA Guarantee", ar: "صفر روابط مكسورة وعقود SLA موثقة" },
      { type: "empty", width: 120 },
    ],
  },
};

export function MethodStatementLanes({
  methodKey,
  isRtl,
}: MethodStatementLanesProps) {
  const lanes = methodLanesData[methodKey] || methodLanesData.build;

  return (
    <section className="relative overflow-hidden border-b border-neutral-200/80 bg-white py-6 sm:py-8 select-none shadow-2xs">
      {/* Subtle Architectural Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 2 Staggered Moving Capability Lanes */}
      <div
        className="relative flex w-full flex-col gap-3 sm:gap-4 py-1"
        dir="ltr"
      >
        {/* Lane 1: Sliding Left */}
        <div className="flex w-max method-scroll-left gap-3 sm:gap-3.5 items-center">
          {[...lanes.lane1, ...lanes.lane1, ...lanes.lane1].map((item, idx) => (
            <React.Fragment key={`l1-${idx}`}>
              {item.type === "label" ? (
                <div className="h-11 sm:h-12 px-5 sm:px-6 rounded-full bg-[#1855f4] text-white flex items-center gap-2 font-bold text-xs sm:text-[13px] tracking-wide shrink-0 transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20 cursor-default">
                  <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white shrink-0" strokeWidth={2.5} />
                  <span className="whitespace-nowrap">{isRtl ? item.ar : item.en}</span>
                </div>
              ) : (
                <div
                  className="h-11 sm:h-12 rounded-full bg-neutral-100/90 border border-neutral-200/90 shrink-0"
                  style={{ width: `${item.width}px` }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Lane 2: Sliding Right */}
        <div className="flex w-max method-scroll-right gap-3 sm:gap-3.5 items-center">
          {[...lanes.lane2, ...lanes.lane2, ...lanes.lane2].map((item, idx) => (
            <React.Fragment key={`l2-${idx}`}>
              {item.type === "label" ? (
                <div className="h-11 sm:h-12 px-5 sm:px-6 rounded-full bg-[#1855f4] text-white flex items-center gap-2 font-bold text-xs sm:text-[13px] tracking-wide shrink-0 transition-transform duration-300 hover:scale-105 shadow-md shadow-blue-500/20 cursor-default">
                  <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white shrink-0" strokeWidth={2.5} />
                  <span className="whitespace-nowrap">{isRtl ? item.ar : item.en}</span>
                </div>
              ) : (
                <div
                  className="h-11 sm:h-12 rounded-full bg-neutral-100/90 border border-neutral-200/90 shrink-0"
                  style={{ width: `${item.width}px` }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes methodScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        @keyframes methodScrollRight {
          0% {
            transform: translateX(-33.333333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .method-scroll-left {
          animation: methodScrollLeft 65s linear infinite;
        }
        .method-scroll-right {
          animation: methodScrollRight 75s linear infinite;
        }
        .method-scroll-left:hover,
        .method-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

