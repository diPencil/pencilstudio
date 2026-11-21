"use client";

import React from "react";
import { Plus } from "lucide-react";
import type { Service } from "@/lib/services/services";

interface ServiceStatementLanesProps {
  service: Service;
  isRtl: boolean;
}

type LaneItem =
  | { type: "label"; en: string; ar: string }
  | { type: "empty"; width: number };

// Curated 2-lane configurations for each service slug
const serviceLanesData: Record<
  string,
  {
    lane1: LaneItem[];
    lane2: LaneItem[];
  }
> = {
  "brand-identity": {
    lane1: [
      { type: "empty", width: 120 },
      { type: "label", en: "Figma Design System", ar: "نظام فيجما المتكامل للتصميم" },
      { type: "label", en: "Brand Architecture & Strategy", ar: "استراتيجية وهندسة العلامة التجارية" },
      { type: "empty", width: 230 },
      { type: "label", en: "Adobe Illustrator Vector Suite", ar: "فيكتور سويت عبر أدوبي إليستريتور" },
      { type: "empty", width: 150 },
      { type: "label", en: "Typography & Font Pairing", ar: "منظومة الخطوط والتايبوغرافي" },
      { type: "label", en: "Primary & Secondary Logo Suite", ar: "الشعارات الأساسية والفرعية" },
      { type: "empty", width: 270 },
      { type: "label", en: "Color Harmony & Palette Rules", ar: "قواعد وتناغم الباليت اللوني" },
      { type: "empty", width: 140 },
    ],
    lane2: [
      { type: "label", en: "Brand Book Guidelines (50+ Pages)", ar: "دليل العلامة التجارية ٥٠+ صفحة" },
      { type: "empty", width: 180 },
      { type: "label", en: "After Effects Motion Intro", ar: "موشن انترو بشعار العلامة" },
      { type: "empty", width: 140 },
      { type: "label", en: "Bespoke Iconography (25+ Icons)", ar: "حزمة أيقونات مخصصة بالكامل" },
      { type: "empty", width: 240 },
      { type: "label", en: "Social & Print Ready Templates", ar: "قوالب جاهزة للسوشيال والطباعة" },
      { type: "empty", width: 160 },
      { type: "label", en: "SVG System & Native Source Files", ar: "أنظمة SVG وملفات العمل المفتوحة" },
      { type: "label", en: "Packaging & Signage Standards", ar: "معايير التغليف واللافتات التجارية" },
      { type: "empty", width: 120 },
    ],
  },

  "websites-platforms": {
    lane1: [
      { type: "empty", width: 130 },
      { type: "label", en: "Next.js 15 App Router", ar: "نكست جي اس ١٥ بأحدث بنية" },
      { type: "label", en: "Tailwind CSS & Framer Motion", ar: "تيلويند وحركات فريمر السلسة" },
      { type: "empty", width: 240 },
      { type: "label", en: "TypeScript Strict Type-Safety", ar: "تايب سكريبت لأمان الشيفرة البرمجية" },
      { type: "empty", width: 150 },
      { type: "label", en: "Figma High-Fidelity UI/UX", ar: "تصميم واجهات عالية الدقة على فيجما" },
      { type: "label", en: "Responsive Across All Screens", ar: "استجابة كاملة لكافة الشاشات" },
      { type: "empty", width: 280 },
      { type: "label", en: "Headless CMS Integration", ar: "ربط أنظمة إدارة المحتوى السحابية" },
      { type: "empty", width: 140 },
    ],
    lane2: [
      { type: "label", en: "Core Web Vitals 99+ Speed", ar: "سرعة قياسية لمعايير الويب الأساسية" },
      { type: "empty", width: 190 },
      { type: "label", en: "Arabic RTL Pixel-Perfect Typography", ar: "توافق تام مع المحاذاة والخطوط العربية" },
      { type: "empty", width: 130 },
      { type: "label", en: "Micro-Interactions & Smooth UI", ar: "تفاعلات دقيقة وانسيابية الحركة" },
      { type: "empty", width: 250 },
      { type: "label", en: "Technical On-Page SEO", ar: "تهيئة برمجية لمحركات البحث" },
      { type: "empty", width: 160 },
      { type: "label", en: "Conversion-Focused Architecture", ar: "هيكلة مخصصة لرفع معدل التحويل" },
      { type: "label", en: "Webflow & Custom Code Export", ar: "تكامل ويب فلو وتصدير الكود النظيف" },
      { type: "empty", width: 120 },
    ],
  },

  "mobile-apps-saas": {
    lane1: [
      { type: "empty", width: 140 },
      { type: "label", en: "React Native & Expo Architecture", ar: "بنية ريآكت نيتف وإكسبو المتطورة" },
      { type: "label", en: "iOS & Android Native Performance", ar: "أداء متقدم على نظامي iOS وأندرويد" },
      { type: "empty", width: 230 },
      { type: "label", en: "User Journey & Wireframing", ar: "تخطيط رحلة العميل والمخططات الهيكلية" },
      { type: "empty", width: 150 },
      { type: "label", en: "Dark & Light Mode Systems", ar: "أنظمة العرض الليلي والنهاري" },
      { type: "label", en: "Supabase & Firebase Backend", ar: "إدارة البيانات عبر سوبابيز وفايربيز" },
      { type: "empty", width: 270 },
      { type: "label", en: "Interactive Prototypes", ar: "نماذج تفاعلية حية للاختبار والتجربة" },
      { type: "empty", width: 120 },
    ],
    lane2: [
      { type: "label", en: "Biometric FaceID & Touch Auth", ar: "مصادقة البصمة والتعرف على الوجه" },
      { type: "empty", width: 180 },
      { type: "label", en: "Push Notifications & Automations", ar: "إشعارات فورية وسلاسل تلقائية" },
      { type: "empty", width: 140 },
      { type: "label", en: "Offline-First Data Caching", ar: "تخزين سحابي ومحلي يدعم العمل دون إنترنت" },
      { type: "empty", width: 240 },
      { type: "label", en: "Multi-Tenant SaaS Subscriptions", ar: "إدارة اشتراكات ساس متعددة المستخدمين" },
      { type: "empty", width: 160 },
      { type: "label", en: "App Store & Google Play Launch", ar: "نشر وتدقيق متجري آبل وجوجل" },
      { type: "label", en: "Payment Gateways & In-App Purchases", ar: "بوابات الدفع والشراء داخل التطبيق" },
      { type: "empty", width: 130 },
    ],
  },

  "business-systems": {
    lane1: [
      { type: "empty", width: 150 },
      { type: "label", en: "Custom Management Dashboards", ar: "لوحات تحكم وإدارة مخصصة" },
      { type: "label", en: "PostgreSQL & Redis High-Speed", ar: "قواعد بيانات بوستغرس وريديس فائقة السرعة" },
      { type: "empty", width: 240 },
      { type: "label", en: "Role-Based Access Control (RBAC)", ar: "صلاحيات وأدوار الموظفين الدقيقة" },
      { type: "empty", width: 150 },
      { type: "label", en: "Workflow & Approval Automations", ar: "أتمتة سلاسل الموافقات وسير العمل" },
      { type: "label", en: "Full Audit Logs & Traceability", ar: "سجل تدقيق ومتابعة شامل لكافة العمليات" },
      { type: "empty", width: 280 },
      { type: "label", en: "Custom CRM & Client Portals", ar: "بوابات العملاء وأنظمة الـ CRM" },
      { type: "empty", width: 130 },
    ],
    lane2: [
      { type: "label", en: "Automated Invoicing & ZATCA Ready", ar: "فوترة إلكترونية متوافقة مع متطلبات الزكاة" },
      { type: "empty", width: 190 },
      { type: "label", en: "REST & GraphQL API Integrations", ar: "ربط واجهات الـ API المفتوحة" },
      { type: "empty", width: 140 },
      { type: "label", en: "Inventory & Multi-Branch Sync", ar: "مزامنة المخزون بين الفروع والمستودعات" },
      { type: "empty", width: 250 },
      { type: "label", en: "Real-Time BI Performance Metrics", ar: "مؤشرات أداء ذكاء الأعمال اللحظية" },
      { type: "empty", width: 160 },
      { type: "label", en: "Webhook Event Orchestration", ar: "إدارة الأحداث والتنبيهات البرمجية" },
      { type: "label", en: "Export CSV, PDF & Excel Reports", ar: "تصدير تقارير الإكسل والـ PDF الفورية" },
      { type: "empty", width: 120 },
    ],
  },

  "marketing-growth": {
    lane1: [
      { type: "empty", width: 130 },
      { type: "label", en: "Meta Ads & TikTok Campaigns", ar: "حملات مدفوعة على ميتا وتيك توك" },
      { type: "label", en: "Viral Reels & Video Production", ar: "إنتاج ريلز وفيديوهات إعلانية جذابة" },
      { type: "empty", width: 240 },
      { type: "label", en: "Conversion Rate Optimization (CRO)", ar: "تحسين معدلات التحويل وزيادة المبيعات" },
      { type: "empty", width: 150 },
      { type: "label", en: "High-Converting Sales Copywriting", ar: "نصوص بيعية مقنعة وصناعة الهوك الإعلاني" },
      { type: "label", en: "Google Search & Performance Max", ar: "إعلانات جوجل وشبكات البحث الذكية" },
      { type: "empty", width: 280 },
      { type: "label", en: "Multi-Channel Editorial Calendar", ar: "جدولة المحتوى وخطة النشر متعددة القنوات" },
      { type: "empty", width: 140 },
    ],
    lane2: [
      { type: "label", en: "Pixel, CAPI & GA4 Tracking", ar: "تتبع متقدم بالبكسل وكونفيرجن API" },
      { type: "empty", width: 180 },
      { type: "label", en: "A/B Creative Testing Engine", ar: "اختبار النماذج الإعلانية المتعددة" },
      { type: "empty", width: 140 },
      { type: "label", en: "Audience Segmentation & Retargeting", ar: "استهداف دقيق وإعادة استهداف ذكية" },
      { type: "empty", width: 250 },
      { type: "label", en: "ROAS Growth & Budget Scaling", ar: "رفع العائد على الإنفاق وتوسيع الميزانيات" },
      { type: "empty", width: 160 },
      { type: "label", en: "Email & WhatsApp Flows", ar: "حملات الواتساب والأتمتة البريدية" },
      { type: "label", en: "Influencer & UGC Production", ar: "إدارة المؤثرين والمحتوى التوليدي UGC" },
      { type: "empty", width: 120 },
    ],
  },

  "hosting-cloud": {
    lane1: [
      { type: "empty", width: 140 },
      { type: "label", en: "AWS & Google Cloud Infrastructure", ar: "بنية سحابية على AWS وجوجل كلاود" },
      { type: "label", en: "Cloudflare Enterprise Edge CDN", ar: "شبكة توزيع سحابية فائقة السرعة" },
      { type: "empty", width: 230 },
      { type: "label", en: "NVMe Ultra-Fast SSD Storage", ar: "أقراص تخزين فائقة السرعة NVMe" },
      { type: "empty", width: 150 },
      { type: "label", en: "Automated Hourly & Daily Backups", ar: "نسخ احتياطي مؤتمت يومي وساعي" },
      { type: "label", en: "99.9% High Availability SLA", ar: "اتفاقية ضمان تشغيل واستقرار ٩٩.٩٪" },
      { type: "empty", width: 270 },
      { type: "label", en: "Redis & Memcached In-Memory Cache", ar: "كاشينغ فائق السرعة عبر ريديس" },
      { type: "empty", width: 130 },
    ],
    lane2: [
      { type: "label", en: "Free Auto-Renewing SSL Certificates", ar: "شهادات أمان SSL مجانية متجددة تلقائياً" },
      { type: "empty", width: 190 },
      { type: "label", en: "24/7 Real-Time Server Monitoring", ar: "مراقبة حية ومستمرة للخوادم على مدار الساعة" },
      { type: "empty", width: 140 },
      { type: "label", en: "DDoS Mitigation & Web App Firewall", ar: "حماية متقدمة من هجمات الحجب والاختراق" },
      { type: "empty", width: 250 },
      { type: "label", en: "Staging Sandboxes & Zero-Downtime Deploy", ar: "بيئات تجريبية ونشر بدون أي توقف" },
      { type: "empty", width: 160 },
      { type: "label", en: "Dedicated IP & Reverse Proxy", ar: "عناوين IP مخصصة وريفرس بروكسي" },
      { type: "label", en: "HTTP/3 & QUIC Network Protocols", ar: "بروتوكولات HTTP/3 الأحدث عالمياً" },
      { type: "empty", width: 120 },
    ],
  },
};

// Fallback generator for any custom or dynamic service
function getFallbackLanes(service: Service): { lane1: LaneItem[]; lane2: LaneItem[] } {
  const lane1: LaneItem[] = [
    { type: "empty", width: 120 },
    ...service.stack.map((item) => ({ type: "label" as const, en: item, ar: item })),
    { type: "empty", width: 220 },
    ...service.features.slice(0, 3).map((f) => ({
      type: "label" as const,
      en: f.titleEn,
      ar: f.titleAr,
    })),
    { type: "empty", width: 160 },
  ];

  const lane2: LaneItem[] = [
    { type: "empty", width: 180 },
    ...service.deliverablesEn.slice(0, 3).map((dEn, idx) => ({
      type: "label" as const,
      en: dEn,
      ar: service.deliverablesAr[idx] || dEn,
    })),
    { type: "empty", width: 240 },
    ...service.relatedSectorsEn.map((sEn, idx) => ({
      type: "label" as const,
      en: sEn,
      ar: service.relatedSectorsAr[idx] || sEn,
    })),
    { type: "empty", width: 140 },
  ];

  return { lane1, lane2 };
}

export function ServiceStatementLanes({ service, isRtl }: ServiceStatementLanesProps) {
  const lanes = serviceLanesData[service.slug] || getFallbackLanes(service);

  return (
    <section className="relative overflow-hidden border-b border-neutral-200/80 bg-white py-6 sm:py-8 select-none">
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
        <div className="flex w-max service-scroll-left gap-3 sm:gap-3.5 items-center">
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
        <div className="flex w-max service-scroll-right gap-3 sm:gap-3.5 items-center">
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
        @keyframes serviceScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        @keyframes serviceScrollRight {
          0% {
            transform: translateX(-33.333333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .service-scroll-left {
          animation: serviceScrollLeft 65s linear infinite;
        }
        .service-scroll-right {
          animation: serviceScrollRight 75s linear infinite;
        }
        .service-scroll-left:hover,
        .service-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

