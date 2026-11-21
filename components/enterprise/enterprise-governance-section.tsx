"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import {
  Scale,
  Lock,
  FileCheck,
  Layers,
  ArrowDownRight,
  Headphones,
  PhoneCall,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PencilButton } from "@/components/ui/pencil-button";

interface GovernancePillar {
  id: string;
  step: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  badgeEn: string;
  badgeAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  metricEn: string;
  metricAr: string;
}

const GOVERNANCE_PILLARS: GovernancePillar[] = [
  {
    id: "ip-ownership",
    step: "01",
    icon: Scale,
    badgeEn: "100% OWNERSHIP",
    badgeAr: "ملكية 100%",
    titleEn: "100% IP & Asset Ownership",
    titleAr: "ملكية فكرية كاملة 100%",
    descEn: "Every line of code, design system, API, and cloud credential is legally registered to your entity from day one.",
    descAr: "كل سطر برمجي، نظام تصميم، وتراخيص سحابية مسجلة بالكامل باسم مؤسستك منذ اليوم الأول.",
    deliverablesEn: ["Direct IP Deed", "Full Git Repositories Transfer"],
    deliverablesAr: ["سند ملكية فكرية رسمي", "نقل كامل لمستودعات الشيفرة"],
    metricEn: "100% Legal Deed",
    metricAr: "ملكية قانونية 100%",
  },
  {
    id: "data-isolation",
    step: "02",
    icon: Lock,
    badgeEn: "ZERO LEAKAGE",
    badgeAr: "صفر تسريب",
    titleEn: "Air-Gapped Data Isolation",
    titleAr: "عزل وتشفير تام للبيانات",
    descEn: "Isolated Virtual Private Clouds (VPC), strict role-based access control, and zero data leakage to third parties.",
    descAr: "سحب افتراضية خاصة ومعزولة، صلاحيات وصول مشددة، وعدم تسريب أي بيانات لأطراف خارجية.",
    deliverablesEn: ["Isolated VPC Setup", "Strict RBAC & Secret Vaulting"],
    deliverablesAr: ["بنية سحابية معزولة VPC", "صلاحيات مشددة وإدارة أسرار"],
    metricEn: "0.00% Data Leak",
    metricAr: "0.00% تسريب بيانات",
  },
  {
    id: "governance-slas",
    step: "03",
    icon: FileCheck,
    badgeEn: "99.99% BINDING SLA",
    badgeAr: "SLA ملزم 99.99%",
    titleEn: "Enforceable Governance SLAs",
    titleAr: "عقود ملزمة وضمانات مالية",
    descEn: "Service level agreements with formal uptime credits and clear executive escalation matrices.",
    descAr: "اتفاقيات مستوى خدمة قانونية تتضمن بنود تعويضية ومسار تصعيد مباشر للإدارة العليا.",
    deliverablesEn: ["Financial Uptime Credits", "Critical P1 Escalation < 15 Min"],
    deliverablesAr: ["بنود تعويضية مالية", "تصعيد حرج P1 في أقل من 15 دقيقة"],
    metricEn: "99.99% Binding Uptime",
    metricAr: "جاهزية ملزمة 99.99%",
  },
  {
    id: "disaster-recovery",
    step: "04",
    icon: Layers,
    badgeEn: "MULTI-REGION",
    badgeAr: "متعدد المناطق",
    titleEn: "Enterprise Disaster Recovery",
    titleAr: "استرجاع للكوارث متعدد المناطق",
    descEn: "Automated real-time multi-region replication with near-zero RPO and single-click failover protocols.",
    descAr: "مزامنة لحظية في مواقع جغرافية متعددة مع بروتوكولات استرجاع فوري لضمان عدم ضياع أي بيانات.",
    deliverablesEn: ["Cross-Region Replication", "Single-Click Failover Protocols"],
    deliverablesAr: ["مزامنة عبر مناطق جغرافية متعددة", "استرجاع فوري بضغطة زر"],
    metricEn: "< 15s Instant Failover",
    metricAr: "استرجاع فوري < 15 ثانية",
  },
];

export function EnterpriseGovernanceSection() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [selectedPillar, setSelectedPillar] = React.useState<number>(0);

  const activePillar = GOVERNANCE_PILLARS[selectedPillar] || GOVERNANCE_PILLARS[0];

  return (
    <section id="governance" className="relative scroll-mt-24 border-y border-neutral-200/80 bg-[#FAFAFC] py-20 text-neutral-900 lg:py-28 overflow-hidden">
      {/* Subtle Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2057ff0c_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#2057ff]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#00d2ff]/5 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* ============================================================ */}
        {/* 2-COLUMN SPLIT (STYLE OF FOUR TURNKEY SUITES FROM SOLUTIONS) */}
        {/* Left: 4 Stacked Cards (alternating blue & white)            */}
        {/* Right: Rectangular Visual on Top, Title & Subtitle Below     */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: 4 Stacked Cards with alternating Blue & White backgrounds (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {GOVERNANCE_PILLARS.map((pillar, idx) => {
              const isSelected = selectedPillar === idx;
              // Alternating backgrounds: idx 0 & 2 are vibrant blue, idx 1 & 3 are crisp white
              const isBlue = idx % 2 === 0;
              const Icon = pillar.icon;

              return (
                <Reveal key={pillar.id} delay={0.05 * (idx + 1)}>
                  <div
                    onClick={() => setSelectedPillar(idx)}
                    className={cn(
                      "group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 sm:p-5 text-start cursor-pointer transition-all duration-300",
                      isBlue
                        ? "bg-[#2057FF] text-white shadow-md shadow-blue-500/20 hover:bg-[#1a4cd8] hover:shadow-lg hover:shadow-blue-500/30"
                        : "bg-white text-neutral-900 border border-neutral-200/80 shadow-2xs hover:border-[#2057FF]/40 hover:bg-[#FCFDFF] hover:shadow-md",
                      isSelected && (isBlue ? "ring-2 ring-white/70" : "ring-2 ring-[#2057FF]")
                    )}
                  >
                    {/* Top Row: Index + Icon, Badge, Arrow */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "font-mono text-xs font-black tracking-wider",
                            isBlue ? "text-white" : "text-[#2057FF]"
                          )}
                        >
                          {pillar.step}
                        </span>
                        <div
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-lg",
                            isBlue ? "bg-white/20 text-white" : "bg-neutral-100 text-[#2057FF]"
                          )}
                        >
                          <Icon size={14} strokeWidth={2.5} />
                        </div>
                        <span
                          className={cn(
                            "rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider",
                            isBlue ? "bg-white/15 text-white border border-white/20" : "bg-neutral-100 text-neutral-700 border border-neutral-200/80"
                          )}
                        >
                          {isRtl ? pillar.badgeAr : pillar.badgeEn}
                        </span>
                      </div>

                      <div
                        className={cn(
                          "h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                          isBlue
                            ? "border border-white/40 bg-white/10 text-white group-hover:bg-white group-hover:text-[#2057FF]"
                            : "border border-neutral-300 bg-neutral-50 text-neutral-700 group-hover:border-[#2057FF] group-hover:bg-[#2057FF] group-hover:text-white"
                        )}
                      >
                        <ArrowDownRight
                          size={16}
                          className={cn(
                            "transition-transform duration-300",
                            isRtl && "-scale-x-100",
                            isSelected && "rotate-45"
                          )}
                        />
                      </div>
                    </div>

                    {/* Middle: Title & Description */}
                    <div className="mt-2.5">
                      <h4
                        className={cn(
                          "text-sm sm:text-base font-bold leading-snug",
                          isBlue ? "text-white" : "text-neutral-950 font-black"
                        )}
                      >
                        {isRtl ? pillar.titleAr : pillar.titleEn}
                      </h4>
                      <p
                        className={cn(
                          "mt-1 text-xs leading-relaxed line-clamp-2",
                          isBlue ? "text-white/85" : "text-neutral-500"
                        )}
                      >
                        {isRtl ? pillar.descAr : pillar.descEn}
                      </p>
                    </div>

                    {/* Bottom Row: Deliverables snippet + Metric badge */}
                    <div
                      className={cn(
                        "mt-3 flex items-center justify-between border-t pt-2 text-[11px]",
                        isBlue ? "border-white/15" : "border-neutral-100"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center gap-1.5 truncate max-w-[65%]",
                          isBlue ? "text-white/85" : "text-neutral-600"
                        )}
                      >
                        <Zap
                          className={cn(
                            "h-3 w-3 shrink-0",
                            isBlue ? "fill-white text-white" : "fill-[#2057FF] text-[#2057FF]"
                          )}
                        />
                        <span className="truncate font-medium">
                          {(isRtl ? pillar.deliverablesAr : pillar.deliverablesEn).join(" • ")}
                        </span>
                      </div>

                      <div
                        className={cn(
                          "flex items-center gap-1 shrink-0 font-mono text-[10px] font-bold",
                          isBlue ? "text-emerald-300" : "text-emerald-600"
                        )}
                        dir="ltr"
                      >
                        <CheckCircle2 size={12} className={isBlue ? "text-emerald-300" : "text-emerald-600"} />
                        <span>{isRtl ? pillar.metricAr : pillar.metricEn}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Rectangular Visual on Top, Tag + Arrow, Title & Subtitle Below (7 Cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative flex flex-col justify-between text-start">
                {/* Top: Rectangular Image with Rounded Corners */}
                <div className="relative aspect-[2.33/1] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-md">
                  <Image
                    src="/enterprise/contractual-accountability.jpg"
                    alt={isRtl ? "الحوكمة والمسؤولية التعاقدية" : "Contractual accountability"}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>

                {/* Below Image: Row with Category Tag and Circular Arrow Button matching Reference */}
                <div className="mt-6 sm:mt-7 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white px-3.5 py-1.5 text-xs font-bold text-[#2057FF] shadow-2xs">
                    <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                    <span>{isRtl ? "الحوكمة وضمانات التشغيل // 2026" : "GOVERNANCE & COMMITMENTS // 2026"}</span>
                  </span>

                  <Link
                    href="/#contact"
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#2057FF] text-white flex items-center justify-center hover:bg-[#1a46cc] transition-all duration-300 hover:scale-105 shadow-sm shrink-0"
                    aria-label={isRtl ? "استكشف مصفوفة الحوكمة" : "Explore Governance"}
                  >
                    <ArrowDownRight size={18} className={cn("transition-transform", isRtl && "-scale-x-100")} />
                  </Link>
                </div>

                {/* Main Section Title */}
                <h2 className={cn("mt-4 text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 leading-[1.15] max-w-2xl", isRtl ? "tracking-normal" : "tracking-tight")}>
                  {isRtl ? (
                    <>
                      اتفاقيات حقيقية..{" "}
                      <span className="font-light italic text-neutral-500">لا مجرد وعود شفهية.</span>
                    </>
                  ) : (
                    <>
                      Contractual accountability..{" "}
                      <span className="font-light italic text-neutral-500">never vague promises.</span>
                    </>
                  )}
                </h2>

                {/* Main Section Description */}
                <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
                  {isRtl
                    ? "للمؤسسات التي تبني عملياتها على التكنولوجيا، الاعتمادية ليست ميزة بل مسألة بقاء. صممنا إطار عملنا القانوني والتقني ليوفر أعلى معايير الحماية والالتزام التعاقدي."
                    : "For organizations that run their business on software, reliability isn't an amenity: it's foundational. We structured our legal and operational frameworks to give executive leaders peace of mind."}
                </p>

                {/* Bottom Action Row */}
                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <PencilButton
                    href="/#contact"
                    variant="primary"
                    size="md"
                    hoverLabel={isRtl ? "احجز جلستك الآن ←" : "Book session now →"}
                  >
                    <span>{isRtl ? "احجز جلسة استشارية" : "Book Executive Session"}</span>
                  </PencilButton>

                  <PencilButton
                    href="/support/callback"
                    variant="outline"
                    size="md"
                    pencilAnimation={false}
                    showPencilIcon={false}
                    className="px-8 min-w-[170px] sm:min-w-[190px]"
                  >
                    <span className="inline-flex items-center gap-2 font-bold whitespace-nowrap">
                      <PhoneCall size={16} className="shrink-0" />
                      <span>{isRtl ? "استشارة تنفيذية سريعة" : "Advisory Call"}</span>
                    </span>
                  </PencilButton>

                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isRtl ? "99.99% اتفاقية تشغيل ملزمة قانونياً" : "99.99% Legally Binding SLA Framework"}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM BANNER: EXECUTIVE PARTNERSHIP SESSION (KEPT EXACTLY) */}
        {/* ============================================================ */}
        <Reveal delay={0.2}>
          <div className="relative mt-16 sm:mt-20 overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-r from-[#143eb8] via-[#2057ff] to-[#0f34a4] p-7 sm:p-9 shadow-2xl shadow-blue-600/25 text-white">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#00d2ff]/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4 text-center md:text-start">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md text-white shadow-inner">
                  <Headphones size={24} />
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-100">
                      {isRtl ? "جلسة استشارية مغلقة للإدارة التنفيذية" : "EXECUTIVE PARTNERSHIP SESSION"}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  </div>
                  <p className="mt-1 text-sm sm:text-base leading-relaxed text-blue-50/95 max-w-2xl">
                    {isRtl ? (
                      <>
                        <span className="font-bold text-white">جلسة مباشرة مع القيادة الهندسية والشريك المؤسس.</span>
                        {" "}نناقش متطلبات مؤسستك، خطة التوسع، وبنود اتفاقية التشغيل والسرية قبل التوقيع.
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-white">Direct consultation with engineering leadership and founders.</span>
                        {" "}We examine your architecture, scaling roadmap, and formal SLA requirements under NDA.
                      </>
                    )}
                  </p>
                </div>
              </div>

              <PencilButton
                href="/#contact"
                variant="primary"
                size="lg"
                hoverLabel={isRtl ? "احجز جلستك الآن ←" : "Book session now →"}
              >
                <span>{isRtl ? "احجز جلسة استشارية" : "Book Executive Session"}</span>
              </PencilButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
