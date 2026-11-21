"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Flag,
  Headphones,
  Mail,
  MessagesSquare,
  PhoneCall,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { LiquidBackdrop } from "@/components/editorial";
import { PencilCareAccessibility } from "@/components/shared/ui/pencil-care-accessibility";
import { useLanguage } from "@/components/language-context";
import { IssueRequest } from "@/components/support/report/pencil-issue-request";
import { cn } from "@/lib/utils";

// ─── 5-Route Support Center Navigation Sub-Bar ────────────────────────────────
const SUPPORT_SUB_NAV = [
  { href: "/support", en: "Overview", ar: "نظرة عامة", icon: Headphones },
  { href: "/support/customer", en: "Customer", ar: "دعم العملاء", icon: MessagesSquare },
  { href: "/support/technical", en: "Technical", ar: "الدعم التقني", icon: Wrench },
  { href: "/support/callback", en: "Callback", ar: "طلب مكالمة", icon: PhoneCall },
  { href: "/support/report", en: "Report Issue", ar: "إبلاغ عن عطل", icon: Flag },
] as const;

export function PencilIssueResolutionPage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const tx = (en: string, ar: string) => (rtl ? ar : en);
  const Next = rtl ? ArrowLeft : ArrowRight;

  // ─── Interactive Ticket Wizard Modal State ─────────────────────────────────
  const [isTicketModalOpen, setIsTicketModalOpen] = React.useState(false);
  const [service, setService] = React.useState("studio");
  const [showFloatingNav, setShowFloatingNav] = React.useState(false);

  // ─── Floating Dock Autohide Controller ─────────────────────────────────────
  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const isNearBottom =
            window.innerHeight + currentY >= document.body.offsetHeight - 240;
          setShowFloatingNav(currentY > 260 && !isNearBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div
        dir={rtl ? "rtl" : "ltr"}
        className="relative min-h-screen bg-[#FFFFFF] text-neutral-950 font-sans antialiased selection:bg-[#2057FF] selection:text-white"
      >
        <PencilCareAccessibility />
        <Header light />

        <main id="main-content">
          {/* ─────────────────────────────────────────────────────────────────
              HERO SECTION: EDITORIAL ISSUE REPORTING & TRIAGE (PRESERVED)
          ───────────────────────────────────────────────────────────────── */}
          <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden bg-[#FBFBFB] border-b border-neutral-200">
            <LiquidBackdrop />

            {/* Subtle architectural dot grid */}
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            <div className="container-custom relative z-10 max-w-5xl text-center mx-auto w-full">
              {/* Eyebrow Pill */}
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/95 px-4 py-1.5 text-xs font-semibold text-neutral-700 shadow-xs backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    S / 05 • {tx("PENCIL SUPPORT ECOSYSTEM", "منظومة دعم بينسل")}
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="font-bold text-[#2057FF]">
                    {tx("Incident Triage & Issue Reporting", "مكتب فرز وبلاغات الأعطال")}
                  </span>
                </div>
              </Reveal>

              {/* Main Headline */}
              <Reveal delay={0.06}>
                <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-neutral-950 leading-[1.14]">
                  {rtl ? (
                    <>
                      <span>أبلغ عن المشكلة، </span>
                      <span className="block font-light text-[#2057ff]">
                        مع السياق التشغيلي اللازم لتشخيصها.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-extrabold tracking-tight text-neutral-950">
                        Report an issue,{" "}
                      </span>
                      <span className="block font-light italic text-[#2057ff]">
                        with the context needed to resolve it.
                      </span>
                    </>
                  )}
                </h1>
              </Reveal>

              {/* Editorial Description */}
              <Reveal delay={0.12}>
                <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-neutral-600">
                  {tx(
                    "Whether a live service disruption, an unexpected workflow error, or a delivery mismatch, prepare a complete case here. We isolate root causes and review the evidence before proposing a controlled fix.",
                    "سواء كان ذلك توقفاً في خدمة حية، أو سلوكاً برمجياً غير متوقع، أو اختلافاً في التسليم، جهّز بلاغك المفصل هنا. نقوم بتشخيص الأسباب الجذرية وفحص الأدلة قبل اقتراح أي تدخل تشغيلي."
                  )}
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => setIsTicketModalOpen(true)}
                    className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#2057ff] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
                  >
                    <span>{tx("Open Support Ticket Wizard", "فتح معالج تذكرة الدعم")}</span>
                    <ArrowDown
                      size={16}
                      className="transition-transform group-hover:translate-y-0.5"
                    />
                  </button>
                  <a
                    href="#report-dispatch"
                    className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-neutral-300 bg-white/90 px-6 py-3 text-sm font-bold text-neutral-900 shadow-xs backdrop-blur-sm transition-all hover:border-[#2057ff] hover:text-[#2057ff]"
                  >
                    <span>{tx("Explore Triage System", "استعراض منظومة الفرز")}</span>
                    <Next size={16} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                HERO VISUAL SHOWCASE (Matching /support/customer, /support/technical, /support/callback)
            ───────────────────────────────────────────────────────────────── */}
            <div className="mt-10 md:mt-14 relative w-full max-w-6xl mx-auto px-0 sm:px-2">
              <Reveal delay={0.22}>
                <div className="relative overflow-hidden border border-neutral-200/80 bg-neutral-100 group">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src="/supports/supportreport.jpg"
                      alt={rtl ? "مكتب بلاغات وفرز الأعطال في بنسل ستوديو" : "Pencil Studio Incident Triage & Issue Resolution"}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1536px) 100vw, 1280px"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              REFERENCE SECTION 01 (SLIDE 1):
              "Business -Proposal" -> "Incident -Reporting"
              Top: Subtitle + $180K/99% Stats + Huge Typography
              Bottom: Large Dark Banner Card with Asterisk (*) and Dual Text Columns
          ═════════════════════════════════════════════════════════════════ */}
          <section
            id="report-dispatch"
            data-section="report-dispatch"
            className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90"
          >
            <div className="container-custom max-w-7xl">
              {/* Slide 1 Top Header Meta Bar */}
              <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200/60 pb-4 mb-10">
                <div className="flex items-center gap-2 text-neutral-900">
                  <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                  <span>@PENCIL STUDIO</span>
                </div>
                <div className="hidden sm:flex items-center gap-8 text-neutral-500">
                  <span>{tx("INCIDENT DISPATCH DESK", "مكتب فرز البلاغات التشغيلية")}</span>
                  <span>{tx("PRODUCTION DEFENSE", "حماية الأنظمة الحية")}</span>
                </div>
                <div className="text-neutral-900 font-bold">2026 // LIVE</div>
              </div>

              {/* Slide 1 Main Split Grid */}
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
                  {/* Left Column: Scope subtitle and Two Large Stats */}
                  <div className="lg:col-span-6 space-y-8">
                    <p className="text-lg sm:text-xl font-medium text-neutral-600 max-w-md leading-relaxed">
                      {tx(
                        "Where Critical Triage, System Diagnostics, and Rapid Resolution Meet.",
                        "حيث يلتقي الفرز الحرج للأعطال، بالتشخيص المعماري الدقيق، وسرعة الاحتواء والتعافي."
                      )}
                    </p>

                    <div className="flex items-center gap-10 pt-2">
                      <div>
                        <div className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 font-mono">
                          15<span className="text-[#2057FF]">m</span>
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mt-1">
                          {tx("Critical Triage SLA", "زمن الاستجابة للأعطال الحرجة")}
                        </div>
                      </div>

                      <div className="h-12 w-px bg-neutral-200" />

                      <div>
                        <div className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 font-mono">
                          99.9<span className="text-[#10B981] bg-neutral-900 px-1.5 py-0.5 rounded-sm">%</span>
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mt-1">
                          {tx("Target Recovery SLA", "هدف استقرار وجاهزية النظام")}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Giant Editorial Stacked Typography */}
                  <div className="lg:col-span-6 text-start lg:text-end">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-900 leading-[1.05]">
                      {rtl ? (
                        <>
                          <span className="block font-normal text-neutral-900">بلاغات</span>
                          <span className="block font-light italic text-neutral-500">-الأعطال</span>
                        </>
                      ) : (
                        <>
                          <span className="block font-normal text-neutral-900">Incident</span>
                          <span className="block font-light italic text-neutral-500">-Reporting</span>
                        </>
                      )}
                    </h2>
                  </div>
                </div>
              </Reveal>

              {/* Slide 1 Bottom: Large Dark Banner Card with Asterisk Icon */}
              <Reveal delay={0.15}>
                <div className="rounded-[2.2rem] bg-[#141416] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl shadow-neutral-950/10">
                  {/* Subtle noise/texture overlay */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay"
                    style={{
                      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Top Bar inside Dark Card: Pill Tag + Royal Blue Asterisk Badge */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900/90 px-4 py-1.5 text-xs font-mono font-bold tracking-wider text-neutral-300">
                      <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                      <span>{tx("LIVE TICKET DISPATCH // 2026", "إرسال تذكرة الفرز الحي // 2026")}</span>
                    </div>

                    {/* Signature Royal Blue Asterisk (*) Badge matching Brand Palette */}
                    <div className="w-10 h-10 rounded-xl bg-[#2057FF] text-white font-black text-2xl flex items-center justify-center select-none shadow-md shadow-blue-500/20">
                      *
                    </div>
                  </div>

                  {/* Headline & Twin Text Columns */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    <div className="lg:col-span-5">
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">
                        {tx(
                          "Strategic Triage & Diagnostic Escalation Protocol",
                          "بروتوكول الفرز الاستراتيجي والتصعيد التشخيصي السريع"
                        )}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-mono">
                        {tx("DIRECT VERIFIED CASE NUMBER ASSIGNMENT", "تخصيص مباشر وموثق لرقم البلاغ والمهندس المسؤول")}
                      </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-neutral-300 text-xs sm:text-[13px] leading-relaxed">
                      <p className="border-t sm:border-t-0 sm:border-s border-neutral-800 pt-4 sm:pt-0 sm:ps-6 rtl:sm:border-s-0 rtl:sm:border-e rtl:sm:pe-6">
                        {tx(
                          "When an operational failure strikes a production platform, every second spent negotiating tier-one bot responses costs compounding enterprise value. Our reporting framework routes directly to system leads.",
                          "عند حدوث عطل تشغيلي في نظام حي، فإن كل دقيقة تضيع في انتظار الردود الآلية للروبوتات تكلف أصحاب الأعمال خسائر تراكمية. يوجه نظام بلاغاتنا تقاريرك مباشرة لمهندسي النظام."
                        )}
                      </p>
                      <p className="border-t sm:border-t-0 sm:border-s border-neutral-800 pt-4 sm:pt-0 sm:ps-6 rtl:sm:border-s-0 rtl:sm:border-e rtl:sm:pe-6">
                        {tx(
                          "Every ticket is backed by strict reproduction criteria, automated trace capture, staging sandbox verification, and transparent hotfix deployment without unverified blind changes.",
                          "كل تذكرة دعم تخضع لمعايير إعادة إنتاج صارمة للخطأ، والتقاط سجلات التتبع، واختبار الحل في بيئة تجريبية معزولة، ثم اعتماده في الإنتاج دون أي تعديل عشوائي غير مثبت."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              REFERENCE SECTION 02 (SLIDE 2):
              4 Tall Vertical Rounded Cards with Underlined Numbers:
              [01 - Yellow] [02 - Off-White] [03 - Dark] [04 - Off-White]
          ═════════════════════════════════════════════════════════════════ */}
          <section
            data-section="lifecycle-pillars"
            className="py-20 sm:py-28 bg-[#F5F5F7] border-b border-neutral-200/90"
          >
            <div className="container-custom max-w-7xl">
              {/* Slide 2 Header Meta Bar */}
              <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-300/60 pb-4 mb-10">
                <div className="flex items-center gap-2 text-neutral-900">
                  <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                  <span>@PENCIL // TICKET PHASES</span>
                </div>
                <div className="hidden sm:flex items-center gap-8 text-neutral-500">
                  <span>{tx("INCIDENT RECOVERY CYCLE", "دورة التعافي من الأعطال")}</span>
                  <span>{tx("STAGES 01 - 04", "المراحل من 01 إلى 04")}</span>
                </div>
                <div className="text-neutral-900 font-bold">2026</div>
              </div>

              {/* 4 Tall Vertical Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {/* ── CARD 01: PENCIL CRIMSON RED (#EF4444) ── */}
                <Reveal delay={0.05}>
                  <div className="h-full rounded-[2.2rem] bg-[#EF4444] text-white p-8 flex flex-col justify-between shadow-lg shadow-red-500/15 min-h-[420px] transition-transform duration-300 hover:-translate-y-1">
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white leading-snug">
                        {tx("Ticket Ingestion & Evidence", "استلام التذكرة وفحص الأدلة")}
                      </h3>
                      <p className="mt-4 text-xs sm:text-[13px] text-red-100 leading-relaxed font-medium">
                        {tx(
                          "Client registers the affected domain, expected behavior vs. actual error, and attaches sanitized server traces, console logs, or screenshots.",
                          "تسجيل النطاق المتأثر، ومقارنة السلوك المتوقع بالسلوك الفعلي، وإرفاق سجلات الكونسول أو لقطات الشاشة المنقحة لحصر المشكلة بدقة."
                        )}
                      </p>
                    </div>

                    <div className="pt-8 border-t border-white/20">
                      <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
                        01
                      </div>
                      <div className="h-1 w-12 bg-white mt-2" />
                    </div>
                  </div>
                </Reveal>

                {/* ── CARD 02: OFF-WHITE / LIGHT GRAY (#FFFFFF) ── */}
                <Reveal delay={0.1}>
                  <div className="h-full rounded-[2.2rem] bg-white border border-neutral-200/90 text-neutral-950 p-8 flex flex-col justify-between shadow-xs min-h-[420px] transition-transform duration-300 hover:-translate-y-1">
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-neutral-950 leading-snug">
                        {tx("Root Cause Isolation", "عزل وتحديد السبب الجذري")}
                      </h3>
                      <p className="mt-4 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                        {tx(
                          "Lead engineers isolate the exact boundary responsible: whether database latency, caching stale states, third-party API timeout, or frontend logic regression.",
                          "عزل الجزء المسؤول تقنياً بدقة: سواء كان بطء في قاعدة البيانات، كاش منتهي، انقطاع في API خارجي، أو خلل في واجهة المستخدم."
                        )}
                      </p>
                    </div>

                    <div className="pt-8 border-t border-neutral-100">
                      <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-neutral-950">
                        02
                      </div>
                      <div className="h-1 w-12 bg-[#2057FF] mt-2" />
                    </div>
                  </div>
                </Reveal>

                {/* ── CARD 03: DARK (#141416) WITH TEXTURE ── */}
                <Reveal delay={0.15}>
                  <div className="h-full rounded-[2.2rem] bg-[#141416] text-white p-8 flex flex-col justify-between shadow-lg shadow-neutral-950/15 min-h-[420px] transition-transform duration-300 hover:-translate-y-1 relative overflow-hidden">
                    {/* Concentric rings visual */}
                    <div className="absolute top-12 right-0 w-48 h-48 pointer-events-none opacity-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full stroke-neutral-400 fill-none">
                        <circle cx="50" cy="50" r="20" strokeWidth="0.8" />
                        <circle cx="50" cy="50" r="35" strokeWidth="0.8" strokeDasharray="3 3" />
                        <circle cx="50" cy="50" r="48" strokeWidth="0.8" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-black tracking-tight text-white leading-snug">
                        {tx("Staging Hotfix & Regression Tests", "ترقيع تجريبي واختبارات حماية")}
                      </h3>
                      <p className="mt-4 text-xs sm:text-[13px] text-neutral-300 leading-relaxed">
                        {tx(
                          "We engineer a non-breaking patch within an isolated staging sandbox. Automated test suites verify that neighboring workflows remain 100% resilient.",
                          "تطوير الترقيع البرمجي داخل بيئة تجريبية معزولة بالكامل، مع تشغيل اختبارات انحدار آلية للتأكد من عدم تأثر أي وظائف مجاورة."
                        )}
                      </p>
                    </div>

                    <div className="pt-8 border-t border-neutral-800 relative z-10">
                      <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
                        03
                      </div>
                      <div className="h-1 w-12 bg-[#2057FF] mt-2" />
                    </div>
                  </div>
                </Reveal>

                {/* ── CARD 04: OFF-WHITE / LIGHT GRAY (#FFFFFF) ── */}
                <Reveal delay={0.2}>
                  <div className="h-full rounded-[2.2rem] bg-white border border-neutral-200/90 text-neutral-950 p-8 flex flex-col justify-between shadow-xs min-h-[420px] transition-transform duration-300 hover:-translate-y-1">
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-neutral-950 leading-snug">
                        {tx("Production Deploy & Sign-Off", "إطلاق في الإنتاج واعتماد الإغلاق")}
                      </h3>
                      <p className="mt-4 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                        {tx(
                          "Controlled hotfix rollout to production with live canary monitoring. Once verified, a complete post-mortem note is delivered and the ticket is formally signed off.",
                          "إطلاق التحديث المعتمد إلى السيرفرات الحية ومراقبة المقاييس التشغيلية لحظياً، ثم تسليم تقرير تشخيصي نهائي وإغلاق التذكرة رسمياً."
                        )}
                      </p>
                    </div>

                    <div className="pt-8 border-t border-neutral-100">
                      <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-neutral-950">
                        04
                      </div>
                      <div className="h-1 w-12 bg-[#10B981] mt-2" />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              REFERENCE SECTION 03 (SLIDE 3):
              Left: Dual Sculptural Black Spheres in Rounded Container
              Right: "Introducing Our Incident Desk" + Subtitle + 2026 Badge + Twin Columns
          ═════════════════════════════════════════════════════════════════ */}
          <section
            data-section="command-desk"
            className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90"
          >
            <div className="container-custom max-w-7xl">
              {/* Slide 3 Header Meta Bar */}
              <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200/60 pb-4 mb-10">
                <div className="flex items-center gap-2 text-neutral-900">
                  <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                  <span>@PENCIL // DESK ARCHITECTURE</span>
                </div>
                <div className="hidden sm:flex items-center gap-8 text-neutral-500">
                  <span>{tx("ENGINEERING COMMAND DESK", "مكتب القيادة الهندسية للأعطال")}</span>
                  <span>{tx("ZERO OUTSOURCING", "تنفيذ مباشر دون وسطاء")}</span>
                </div>
                <div className="text-neutral-900 font-bold">2026</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left: Introducing Incident Desk Visual Card */}
                <div className="lg:col-span-5 w-full">
                  <Reveal className="w-full">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-[2.2rem] overflow-hidden group">
                      <Image
                        src="/supports/introducing-our-incident-desk.jpg"
                        alt={rtl ? "مكتب إدارة وبلاغات الأعطال في بنسل ستوديو" : "Pencil Studio Incident Command Desk"}
                        fill
                        priority
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Right: "Introducing Our Incident Desk" + Subtitle + Badges + Text */}
                <div className="lg:col-span-7 space-y-6">
                  <Reveal delay={0.1}>
                    <div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.12]">
                        {rtl ? (
                          <>
                            <span className="font-normal text-neutral-900">مكتب إدارة وبلاغات </span>
                            <span className="font-light italic text-neutral-500">الأعطال التشغيلية</span>
                          </>
                        ) : (
                          <>
                            <span className="font-normal text-neutral-900">Introducing Our </span>
                            <span className="font-light italic text-neutral-500">Incident Desk</span>
                          </>
                        )}
                      </h2>

                      <p className="mt-4 text-xl sm:text-2xl font-bold text-neutral-800 leading-snug">
                        {tx(
                          "Turning System Disruptions into Controlled Fixes, and Outages into Fortified Code.",
                          "نحول التوقفات المفاجئة إلى حلول برمجية مضبوطة، والأعطال إلى حصانة معمارية دائمة."
                        )}
                      </p>
                    </div>

                    {/* Twin Badges matching Reference Slide 3 */}
                    <div className="flex items-center gap-3 pt-3">
                      <div className="rounded-full border border-neutral-300 bg-white px-4 py-1 text-xs font-mono font-bold text-neutral-800 shadow-2xs">
                        {tx("Pencil Support Desk", "مكتب دعم بينسل")}
                      </div>
                      <div className="rounded-full bg-[#2057FF] px-3.5 py-1 text-xs font-mono font-bold text-white shadow-2xs">
                        2026 // SLA
                      </div>
                    </div>

                    {/* Twin Descriptive Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-200 text-xs sm:text-[13px] leading-relaxed text-neutral-600">
                      <p>
                        {tx(
                          "When an issue is logged, it does not sit in a backlog queue. A designated lead systems engineer in Cairo audits the reproduction context, reviews error traces, and scopes the corrective boundary within minutes.",
                          "عند تسجيل أي بلاغ، لا يُترك في قوائم انتظار باردة. يتولى مهندس أنظمة رئيسي في القاهرة فحص سياق الخطأ وسجلات التتبع وتحديد نطاق التدخل التقني خلال دقائق معدودة."
                        )}
                      </p>
                      <p>
                        {tx(
                          "We prioritize data integrity, continuous transaction uptime, and backward compatibility. No patch reaches production without verified regression testing in staging environments.",
                          "نضع سلامة البيانات واستمرار المعاملات والتوافقية في صدارة الأولويات. لا يعتمد أي تعديل برمجي على السيرفرات الحية دون اختبارات حماية شاملة في بيئاتنا التجريبية."
                        )}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              REFERENCE SECTION 04 (SLIDE 4):
              Left: Executive Summary + Squircle with Abstract Texture & Asterisk (*)
              Right: Summary of Key Initiatives / 2 Stacked Severity Rows
          ═════════════════════════════════════════════════════════════════ */}
          <section
            data-section="severity-classification"
            className="py-20 sm:py-28 bg-[#F5F5F7] border-b border-neutral-200/90"
          >
            <div className="container-custom max-w-7xl">
              {/* Slide 4 Header Meta Bar */}
              <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-300/60 pb-4 mb-10">
                <div className="flex items-center gap-2 text-neutral-900">
                  <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                  <span>@PENCIL // SEVERITY TRIAGE</span>
                </div>
                <div className="hidden sm:flex items-center gap-8 text-neutral-500">
                  <span>{tx("INCIDENT HANDLING TIERS", "مستويات الفرز والأثر التشغيلي")}</span>
                  <span>{tx("URGENT / STANDARD", "حرج / اعتيادي")}</span>
                </div>
                <div className="text-neutral-900 font-bold">2026</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Left (7 cols): Executive Severity Triage Header + 2 Stacked Severity Rows */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <Reveal delay={0.1}>
                    <div className="border-b border-neutral-300/80 pb-4">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                        {rtl ? (
                          <>
                            <span className="font-normal text-neutral-900">فرز الأثر </span>
                            <span className="font-light italic text-neutral-500">التشغيلي الحرج</span>
                          </>
                        ) : (
                          <>
                            <span className="font-normal text-neutral-900">Executive </span>
                            <span className="font-light italic text-neutral-500">Severity Triage</span>
                          </>
                        )}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-medium">
                        {tx(
                          "Clear criteria to distinguish critical outages from isolated logic adjustments.",
                          "معايير واضحة للتفريق بين التوقفات الحرجة والتعديلات البرمجية المحدودة."
                        )}
                      </p>
                    </div>

                    <div className="mt-5 space-y-3">
                      {/* Tier Row 1: Critical Stoppage (P1) */}
                      <div className="rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-600 animate-pulse" />
                            <span className="font-mono text-xs font-bold uppercase text-red-600">
                              LEVEL 01 // {tx("CRITICAL STOPPAGE (P1)", "توقف تشغيلي حرج (P1)")}
                            </span>
                          </div>
                          <span className="rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-[10px] font-mono font-bold text-red-700">
                            {tx("15-MIN ACKNOWLEDGMENT", "استجابة خلال 15 دقيقة")}
                          </span>
                        </div>

                        <h4 className="text-lg font-black text-neutral-950">
                          {tx(
                            "Total System Stoppage & Checkout Failure",
                            "توقف كامل للنظام أو تعطل مسارات الشراء والمعاملات"
                          )}
                        </h4>

                        <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                          {tx(
                            "Production database deadlock, hosting node failure, authentication lockout, or broken revenue-critical transactions. Triggers immediate warm-standby mobilization and hourly status reports until resolution.",
                            "توقف قواعد البيانات، انقطاع الخوادم السحابية، تعذر تسجيل الدخول، أو فشل بوابات الدفع. يطلق استنفاراً فورياً مع إحاطات تقدم كل ساعة حتى تمام التعافي."
                          )}
                        </p>
                      </div>

                      {/* Tier Row 2: Functional Regression (P2/P3) */}
                      <div className="rounded-3xl bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#2057FF]" />
                            <span className="font-mono text-xs font-bold uppercase text-[#2057FF]">
                              LEVEL 02 // {tx("FUNCTIONAL & LOGIC DEFECTS (P2/P3)", "خلل وظيفي أو برمجي (P2/P3)")}
                            </span>
                          </div>
                          <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[10px] font-mono font-bold text-[#2057FF]">
                            {tx("SAME-DAY REPRODUCTION", "تشخيص في نفس اليوم")}
                          </span>
                        </div>

                        <h4 className="text-lg font-black text-neutral-950">
                          {tx(
                            "Controlled Sprint Hotfix & UI Regression",
                            "ترقيع برمجي منظم ومعالجة الأخطاء السلوكية للواجهة"
                          )}
                        </h4>

                        <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                          {tx(
                            "Specific workflow friction where partial workarounds remain viable, visual styling discrepancies across mobile devices, or minor logic errors. Handled via staging branch validation without risking production uptime.",
                            "صعوبة تشغيلية مع بقاء مسارات عمل بديلة، أو عدم اتساق في العرض على بعض الأجهزة، أو أخطاء حسابية محدودة. تعالج عبر فروع تجريبية لضمان عدم اضطراب الخدمة الحية."
                          )}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Right (5 cols): Summary Header + Full-Height Pure Image (Bottom Synchronized, No Stroke) */}
                <div className="lg:col-span-5 flex flex-col h-full justify-between">
                  <Reveal className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl tracking-tight text-neutral-950">
                        {rtl ? (
                          <>
                            <span className="font-extrabold text-neutral-950">ملخص مستويات </span>
                            <span className="font-light text-[#2057FF]">التعامل مع البلاغات</span>
                          </>
                        ) : (
                          <>
                            <span className="font-extrabold text-neutral-950">Summary of </span>
                            <span className="font-light italic text-[#2057FF]">Incident Response Tiers</span>
                          </>
                        )}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-500 font-mono">
                        {tx("TWO OPERATIONAL CHANNELS CONFIGURED FOR MEASURED RESOLUTION", "مساران تشغيليان لضمان المعالجة الدقيقة والمتدرجة")}
                      </p>
                    </div>

                    {/* Pure Image Card with No Stroke, Stretching to Match Left Cards Height */}
                    <div className="mt-6 flex-1 relative w-full h-[360px] sm:h-[420px] lg:h-auto min-h-[360px] rounded-[2.2rem] overflow-hidden group">
                      <Image
                        src="/supports/executive-severity-triage.jpg"
                        alt={rtl ? "مصفوفة فرز الأعطال والاستجابة التشغيلية" : "Executive Severity Triage & Diagnostic Matrix"}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 500px"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              REFERENCE SECTION 05 (SLIDE 5):
              Left (3 cols): Tall Dark Capsule with Organic Spheres
              Center (5 cols): 3 Stacked Cards (Dark, Yellow, White)
              Right (4 cols): Proposed Solution / Headline & Badges
          ═════════════════════════════════════════════════════════════════ */}
          <section
            data-section="proposed-solution"
            className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90"
          >
            <div className="container-custom max-w-7xl">
              {/* Slide 5 Header Meta Bar */}
              <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200/60 pb-4 mb-10">
                <div className="flex items-center gap-2 text-neutral-900">
                  <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                  <span>@PENCIL // TRIAGE PROTOCOL</span>
                </div>
                <div className="hidden sm:flex items-center gap-8 text-neutral-500">
                  <span>{tx("VERIFIABLE RESOLUTION SUITE", "حزمة الحلول البرمجية المثبتة")}</span>
                  <span>{tx("ZERO DATA LOSS", "بدون فقدان أي بيانات")}</span>
                </div>
                <div className="text-neutral-900 font-bold">2026</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column (3 cols): Proposed Solution Pure Image Card (No Text, No Stroke) */}
                <div className="lg:col-span-3 w-full h-full flex flex-col justify-center">
                  <Reveal className="w-full h-full flex items-center justify-center">
                    <div className="relative w-full aspect-[1255/1536] sm:min-h-[440px] rounded-[2.4rem] overflow-hidden group">
                      <Image
                        src="/supports/proposed-solution.jpg"
                        alt={rtl ? "منظومة حلول الأعطال المقترحة" : "Pencil Studio Proposed Solution Isolation"}
                        fill
                        priority
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 360px"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Center Column (5 cols): 3 Stacked Cards (Red, Green, Blue) */}
                <div className="lg:col-span-5 space-y-2.5">
                  {/* Card 1: Red (#DD3126) */}
                  <Reveal delay={0.05}>
                    <div className="rounded-2xl bg-[#DD3126] text-white p-5 sm:p-6 shadow-md shadow-red-500/15">
                      <div className="flex items-center gap-2 mb-2 font-mono text-[11px] font-bold text-red-100">
                        <span>01</span>
                        <span>//</span>
                        <span className="uppercase">{tx("EVIDENCE REPRODUCTION", "إعادة إنتاج الخطأ")}</span>
                      </div>
                      <h4 className="text-base font-black text-white">
                        {tx("Rapid Evidence Capture & Stack Analysis", "التقاط فوري للأدلة وتحليل سجل الأخطاء")}
                      </h4>
                      <p className="mt-2 text-xs text-white/90 leading-relaxed">
                        {tx(
                          "We duplicate the exact failure sequence in isolated sandboxes before applying any modifications.",
                          "نعيد تسلسل الخطأ بدقة داخل بيئة معزولة لتحديد المتغيرات المسببة قبل إجراء أي تعديل."
                        )}
                      </p>
                    </div>
                  </Reveal>

                  {/* Card 2: Emerald Green (#10B981) */}
                  <Reveal delay={0.1}>
                    <div className="rounded-2xl bg-[#10B981] text-white p-5 sm:p-6 shadow-md shadow-emerald-500/15">
                      <div className="flex items-center gap-2 mb-2 font-mono text-[11px] font-black text-emerald-100">
                        <span>02</span>
                        <span>//</span>
                        <span className="uppercase">{tx("ZERO DISRUPTION", "بدون انقطاع")}</span>
                      </div>
                      <h4 className="text-base font-black text-white">
                        {tx("Safe Patching with Zero Production Disruption", "ترقيع آمن بدون أي اضطراب لقواعد البيانات")}
                      </h4>
                      <p className="mt-2 text-xs text-white/90 font-medium leading-relaxed">
                        {tx(
                          "Controlled atomic deployments ensure customers continue transactions uninterrupted while hotfixes release.",
                          "إطلاقات برمجية ذرية تضمن استمرار تعاملات المستخدمين دون أي توقف أثناء سريان التحديث."
                        )}
                      </p>
                    </div>
                  </Reveal>

                  {/* Card 3: Royal Blue (#2057FF) */}
                  <Reveal delay={0.15}>
                    <div className="rounded-2xl bg-[#2057FF] text-white p-5 sm:p-6 shadow-md shadow-blue-500/15">
                      <div className="flex items-center gap-2 mb-2 font-mono text-[11px] font-bold text-blue-100">
                        <span>03</span>
                        <span>//</span>
                        <span className="uppercase">{tx("POST-MORTEM & HARDENING", "تقرير ما بعد المعالجة والتحصين")}</span>
                      </div>
                      <h4 className="text-base font-black text-white">
                        {tx("Post-Mortem Documentation & Permanent Fortification", "توثيق شامل للحادث وإضافة اختبارات وقائية")}
                      </h4>
                      <p className="mt-2 text-xs text-white/90 leading-relaxed">
                        {tx(
                          "Every resolved ticket concludes with architectural notes and automated regression tests preventing recurrence.",
                          "يُختتم كل بلاغ بتقرير فني مفصل واختبارات حماية مؤتمتة تمنع تكرار نفس الخلل مستقبلاً."
                        )}
                      </p>
                    </div>
                  </Reveal>
                </div>

                {/* Right Column (4 cols): Proposed Solution / Headline, Badges & Copy */}
                <div className="lg:col-span-4 space-y-6">
                  <Reveal delay={0.2}>
                    {/* Twin Badges */}
                    <div className="flex items-center gap-3">
                      <div className="rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-mono font-bold text-neutral-800">
                        {tx("Pencil Protocol", "بروتوكول بينسل")}
                      </div>
                      <div className="rounded-full bg-[#2057FF] px-3.5 py-1 text-xs font-mono font-bold text-white shadow-2xs">
                        2026 // RESOLUTION
                      </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.12]">
                      {rtl ? (
                        <>
                          <span className="font-normal text-neutral-900">الحلول </span>
                          <span className="font-light italic text-neutral-500">الهندسية المعتمدة</span>
                        </>
                      ) : (
                        <>
                          <span className="font-normal text-neutral-900">Proposed </span>
                          <span className="font-light italic text-neutral-500">Solution</span>
                        </>
                      )}
                    </h2>

                    <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-600">
                      {tx(
                        "We treat incident reporting not as an ad-hoc fix, but as a compounding defense of your software investment. Transparent SLAs, verifiable hotfixes, and continuous uptime monitoring.",
                        "لا نتعامل مع بلاغات الأعطال كحلول مؤقتة، بل كخط دفاع تراكمي يحمي استثمارك البرمجي. التزامات أداء واضحة، وترقيعات مثبتة بالدليل، ومراقبة مستمرة للجاهزية."
                      )}
                    </p>

                    <div className="pt-4 border-t border-neutral-200">
                      <button
                        type="button"
                        onClick={() => setIsTicketModalOpen(true)}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#2057FF] hover:text-blue-800 transition"
                      >
                        <span>{tx("SUBMIT CASE EVIDENCE", "إرسال بلاغك وأدلة الخلل الآن")}</span>
                        <Next size={14} />
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              REFERENCE SECTION 06 (SLIDE 6):
              Left (6 cols): Ribbed Wave Sculpture in Dark Box + Headline + Asterisk (*) Box
              Right (6 cols): Two Cards [01 - Light] and [02 - Bright Yellow]
          ═════════════════════════════════════════════════════════════════ */}
          <section
            data-section="slas-and-goals"
            className="py-20 sm:py-28 bg-[#F5F5F7] border-b border-neutral-200/90"
          >
            <div className="container-custom max-w-7xl">
              {/* Slide 6 Header Meta Bar */}
              <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-300/60 pb-4 mb-10">
                <div className="flex items-center gap-2 text-neutral-900">
                  <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                  <span>@PENCIL // SLA COMMITMENTS</span>
                </div>
                <div className="hidden sm:flex items-center gap-8 text-neutral-500">
                  <span>{tx("CONTRACTUAL RESOLUTION DEFENSE", "حماية والتزام تعاقدي بالمعالجة")}</span>
                  <span>{tx("CLEAR CRITERIA", "معايير دقيقة")}</span>
                </div>
                <div className="text-neutral-900 font-bold">2026</div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Left (6 cols): 3D Ribbed Wave Object + Huge Title + Asterisk Box */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <Reveal>
                    {/* Ribbed Wave 3D Sculpture Box matching Reference Slide 6 */}
                    <div className="rounded-[2.4rem] bg-[#141416] p-8 min-h-[220px] flex items-center justify-center relative overflow-hidden shadow-lg shadow-neutral-950/15">
                      {/* Stylized Ribbed Accordion/Wave Sculpture SVG */}
                      <svg viewBox="0 0 420 160" className="w-full max-w-[360px] h-auto drop-shadow-2xl">
                        <defs>
                          <linearGradient id="ribGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#EDEDF2" />
                            <stop offset="40%" stopColor="#A4A4B0" />
                            <stop offset="80%" stopColor="#41414C" />
                            <stop offset="100%" stopColor="#1E1E24" />
                          </linearGradient>
                        </defs>

                        {/* Array of concentric perspective ribbed discs */}
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => {
                          const x = 50 + idx * 28;
                          const rx = 14 + Math.sin(idx * 0.4) * 4;
                          const ry = 48 + Math.sin(idx * 0.4) * 16;
                          return (
                            <ellipse
                              key={idx}
                              cx={x}
                              cy={80}
                              rx={rx}
                              ry={ry}
                              fill="url(#ribGrad)"
                              stroke="#141416"
                              strokeWidth="2"
                              opacity={0.85 + (idx / 12) * 0.15}
                            />
                          );
                        })}
                      </svg>

                      <div className="absolute bottom-3 font-mono text-[9px] uppercase tracking-widest text-[#2057FF]">
                        PENCIL CONTINUOUS STABILITY MATRIX
                      </div>
                    </div>

                    {/* Headline + Signature Dark Square Asterisk (*) Box */}
                    <div className="mt-8 flex items-end justify-between gap-6">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.12] max-w-md">
                        {rtl ? (
                          <>
                            <span className="font-normal text-neutral-900">رؤية مدعومة </span>
                            <span className="font-light italic text-neutral-500">بالتزامات أداء دقيقة</span>
                          </>
                        ) : (
                          <>
                            <span className="font-normal text-neutral-900">A Vision Backed </span>
                            <span className="font-light italic text-neutral-500">by Clear Goals</span>
                          </>
                        )}
                      </h2>

                      {/* Dark Square Asterisk (*) Box matching Reference Slide 6 */}
                      <div className="w-14 h-14 rounded-2xl bg-[#141416] text-[#2057FF] font-black text-3xl flex items-center justify-center shrink-0 shadow-md">
                        *
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Right (6 cols): Two Distinct Cards [01 - Light] & [02 - Pencil Royal Blue] */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                  {/* Card 01: Light Gray / White with border */}
                  <Reveal delay={0.1}>
                    <div className="h-full rounded-[2.2rem] bg-white border border-neutral-200/90 text-neutral-950 p-7 flex flex-col justify-between shadow-xs min-h-[320px]">
                      <div>
                        <div className="font-mono text-xs font-bold text-neutral-400 mb-4" dir="ltr">
                          01 // CADENCE
                        </div>

                        <h3 className="text-xl font-black tracking-tight text-neutral-950 leading-snug">
                          {tx("Strict SLA Response Cadence", "وتيرة استجابة وتحديث صارمة")}
                        </h3>

                        <p className="mt-4 text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                          {tx(
                            "15-minute acknowledgment for critical blockers, coupled with hourly transparent status updates until total recovery is verified in production.",
                            "إقرار بالاستلام خلال 15 دقيقة للأعطال الحرجة، مع تقرير متابعة شفاف كل ساعة حتى عودة النظام للعمل الكامل في الإنتاج."
                          )}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-[#2057FF]">
                        <Clock size={16} />
                        <span>{tx("Measurable Response SLA", "معيار زمني موثق")}</span>
                      </div>
                    </div>
                  </Reveal>

                  {/* Card 02: Pencil Royal Blue (#2057FF) */}
                  <Reveal delay={0.15}>
                    <div className="h-full rounded-[2.2rem] bg-[#2057FF] text-white p-7 flex flex-col justify-between shadow-lg shadow-blue-500/15 min-h-[320px]">
                      <div>
                        <div className="font-mono text-xs font-bold text-blue-200 mb-4" dir="ltr">
                          02 // ARCHITECTS
                        </div>

                        <h3 className="text-xl font-black tracking-tight text-white leading-snug">
                          {tx("Direct Senior Systems Engineers", "تواصل مباشر مع كبار المهندسين")}
                        </h3>

                        <p className="mt-4 text-xs sm:text-[13px] text-blue-100 font-medium leading-relaxed">
                          {tx(
                            "Work directly with the software architects who authored the code. No middle agents, outsourced contractors, or generic scripted responses.",
                            "تواصل مباشر مع مهندسي ومصممي البرمجيات الذين كتبوا الكود وشيدوا النظام، دون وسطاء أو عمالة خارجية أو ردود نمطية مكررة."
                          )}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/20 flex items-center gap-2 text-xs font-bold text-white">
                        <CheckCircle2 size={16} />
                        <span>{tx("Direct Senior Access", "وصول مباشر للمطورين")}</span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              CONNECTED SUPPORT CHANNELS & CROSS-GATEWAYS (PRESERVED)
          ═════════════════════════════════════════════════════════════════ */}
          <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90">
            <div className="container-custom max-w-7xl">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/80 pb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#2057FF]">
                      <span>{tx("07 // VERIFIED CHANNELS", "07 // القنوات المعتمدة")}</span>
                    </div>

                    <h2 className={cn("mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", rtl ? "tracking-normal" : "tracking-tight")}>
                      {rtl ? (
                        <>
                          <span>قنوات معتمدة ومباشرة، </span>
                          <span className="font-light italic text-neutral-500">
                            لتسريع حل البلاغ.
                          </span>
                        </>
                      ) : (
                        <>
                          <span>
                            Verified channels,{" "}
                          </span>
                          <span className="font-light italic text-neutral-500">
                            for rapid incident resolution.
                          </span>
                        </>
                      )}
                    </h2>
                  </div>

                  <p className="max-w-md text-sm sm:text-base leading-relaxed text-neutral-600">
                    {tx(
                      "Facing a critical operational stoppage right now? Use our verified Cairo studio contact channels below.",
                      "هل تواجه توقفاً تشغيلياً حرجاً في هذه اللحظة؟ استخدم قنوات التواصل المباشرة المعتمدة لمكتبنا بالقاهرة أدناه."
                    )}
                  </p>
                </div>
              </Reveal>

              {/* 3 Contact Cards: Email, WhatsApp, Phone */}
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <a
                  href="mailto:help@dipencil.com"
                  className="group flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xs transition hover:border-[#2057ff] hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#2057FF]">
                      <Mail size={22} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-neutral-400 group-hover:text-[#2057FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                    />
                  </div>

                  <div className="mt-6">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      {tx("DIRECT VERIFIED EMAIL", "البريد المباشر المعتمد")}
                    </span>
                    <h4 dir="ltr" className="text-base font-black text-neutral-950 group-hover:text-[#2057FF] transition mt-1">
                      help@dipencil.com
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      {tx("Triage acknowledgment within 15 mins", "إقرار واستلام خلال 15 دقيقة")}
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/201003778273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xs transition hover:border-emerald-600 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <WhatsAppIcon size={22} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-neutral-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                    />
                  </div>

                  <div className="mt-6">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      {tx("INCIDENT HOTLINE WHATSAPP", "واتساب طوارئ الأعطال")}
                    </span>
                    <h4 dir="ltr" className="text-base font-black text-neutral-950 group-hover:text-emerald-600 transition mt-1">
                      (020) 100-377-8273
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      {tx("Live incident lead connection", "اتصال مباشر مع قائد الفريق")}
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+201003778273"
                  className="group flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xs transition hover:border-neutral-950 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900">
                      <PhoneCall size={22} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                    />
                  </div>

                  <div className="mt-6">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      {tx("VOICE DIRECT HOTLINE", "الخط الهاتفي المباشر")}
                    </span>
                    <h4 dir="ltr" className="text-base font-black text-neutral-950 group-hover:text-[#2057FF] transition mt-1">
                      (020) 100-377-8273
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">
                      {tx("Available Sun - Thu // 10am - 7pm", "متاح الأحد - الخميس // 10ص - 7م")}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* ═════════════════════════════════════════════════════════════════
              GATEWAY SWITCHER (4 SIBLINGS)
          ═════════════════════════════════════════════════════════════════ */}
          <section className="py-16 bg-[#F5F5F7]">
            <div className="container-custom max-w-7xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
                    {tx("Explore Sibling Support Pathways", "استكشف بوابات منظومة الدعم الأخرى")}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    {tx(
                      "Looking for monthly retainers, engineering maintenance, or consultation?",
                      "هل تبحث عن تعاقدات تطوير دورية، أو دعم برمجي دائم، أو استشارات معمارية؟"
                    )}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  href="/support"
                  className="rounded-2xl bg-white border border-neutral-200/90 p-5 shadow-2xs hover:border-[#2057FF] hover:shadow-xs transition group"
                >
                  <Headphones size={20} className="text-[#2057FF] mb-3" />
                  <h4 className="text-sm font-bold text-neutral-950 group-hover:text-[#2057FF] transition">
                    {tx("Support Overview", "نظرة عامة على الدعم")}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    {tx("Complete desk directory & SLA index", "دليل المكاتب الشامل ومعايير الخدمة")}
                  </p>
                </Link>

                <Link
                  href="/support/customer"
                  className="rounded-2xl bg-white border border-neutral-200/90 p-5 shadow-2xs hover:border-[#2057FF] hover:shadow-xs transition group"
                >
                  <MessagesSquare size={20} className="text-[#2057FF] mb-3" />
                  <h4 className="text-sm font-bold text-neutral-950 group-hover:text-[#2057FF] transition">
                    {tx("Customer Support", "دعم العملاء")}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    {tx("Retainers, milestones & account care", "عقود التطوير، التسليمات وحسابات العملاء")}
                  </p>
                </Link>

                <Link
                  href="/support/technical"
                  className="rounded-2xl bg-white border border-neutral-200/90 p-5 shadow-2xs hover:border-[#2057FF] hover:shadow-xs transition group"
                >
                  <Wrench size={20} className="text-[#2057FF] mb-3" />
                  <h4 className="text-sm font-bold text-neutral-950 group-hover:text-[#2057FF] transition">
                    {tx("Technical Care", "الدعم التقني والهندسي")}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    {tx("Code, hosting & systems architecture", "الكود، الخوادم السحابية وبنية الأنظمة")}
                  </p>
                </Link>

                <Link
                  href="/support/callback"
                  className="rounded-2xl bg-white border border-neutral-200/90 p-5 shadow-2xs hover:border-[#2057FF] hover:shadow-xs transition group"
                >
                  <PhoneCall size={20} className="text-[#2057FF] mb-3" />
                  <h4 className="text-sm font-bold text-neutral-950 group-hover:text-[#2057FF] transition">
                    {tx("Request Callback", "طلب مكالمة استشارية")}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    {tx("15-min direct architecture call", "مكالمة معمارية مباشرة لتقييم النطاق")}
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* ═════════════════════════════════════════════════════════════════
            MODAL: COMPLETE 5-STEP ISSUE REPORTING WIZARD
        ═════════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {isTicketModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsTicketModalOpen(false)}
                className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-4xl rounded-[2rem] bg-white border border-neutral-200 shadow-2xl p-6 sm:p-8 md:p-10 my-8 z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsTicketModalOpen(false)}
                  className="absolute top-6 end-6 rounded-full bg-neutral-100 p-2 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 transition"
                  aria-label={tx("Close", "إغلاق")}
                >
                  <X size={20} />
                </button>

                {/* Modal Title */}
                <div className="mb-6 border-b border-neutral-200 pb-4">
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#2057FF] mb-2">
                    <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                    <span>{tx("INCIDENT REPORTING WIZARD", "معالج بلاغات وأدلة الأعطال")}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-950">
                    {tx(
                      "Prepare Your Incident Triage Ticket",
                      "تجهيز تفاصيل وأدلة بلاغ العطل"
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    {tx(
                      "Select your service, define expected vs actual behavior, and generate an evidence-backed case.",
                      "حدد الخدمة، ووضح السلوك المتوقع مقابل الفعلي، لتجهيز بلاغ موثق بالأدلة للإرسال."
                    )}
                  </p>
                </div>

                {/* Interactive Form Component */}
                <IssueRequest
                  rtl={rtl}
                  service={service}
                  onServiceChange={setService}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ═════════════════════════════════════════════════════════════════
            FLOATING SUPPORT SUB-NAV DOCK
        ═════════════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {showFloatingNav && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.18 }}
              className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4"
            >
              <div className="pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full border border-neutral-200/90 bg-white/95 px-3 py-2 shadow-xl shadow-neutral-950/10 backdrop-blur-md">
                <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase text-neutral-400 ps-2 pe-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
                  <span>SUPPORT</span>
                </span>

                <div className="flex items-center gap-1">
                  {SUPPORT_SUB_NAV.map((item) => {
                    const isActive = item.href === "/support/report";
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all",
                          isActive
                            ? "bg-[#2057FF] text-white shadow-xs"
                            : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
                        )}
                      >
                        <Icon size={13} />
                        <span>{tx(item.en, item.ar)}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </MotionConfig>
  );
}
