"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  ArrowDownRight,
  Check,
  Flag,
  Headphones,
  Mail,
  MessagesSquare,
  PhoneCall,
  Terminal,
  Wrench,
  Sparkles,
  Server,
  Database,
  Cpu,
  Layers,
  Shield,
  Activity,
  X,
  CreditCard,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { LiquidBackdrop } from "@/components/editorial";
import { PencilCareAccessibility } from "@/components/shared/ui/pencil-care-accessibility";
import { useLanguage } from "@/components/language-context";
import { PencilButton } from "@/components/ui/pencil-button";
import { TechnicalRequest } from "@/components/support/technical/pencil-technical-request";
import { technicalText } from "@/lib/support/technical/pencil-technical-care";
import { cn } from "@/lib/utils";

// ─── 5-Route Support Center Navigation Ecosystem ─────────────────────────────
const SUPPORT_SUB_NAV = [
  { href: "/support", en: "Overview", ar: "نظرة عامة", icon: Headphones },
  { href: "/support/customer", en: "Customer", ar: "دعم العملاء", icon: MessagesSquare },
  { href: "/support/technical", en: "Technical", ar: "الدعم التقني", icon: Wrench },
  { href: "/support/callback", en: "Callback", ar: "طلب مكالمة", icon: PhoneCall },
  { href: "/support/report", en: "Report Issue", ar: "إبلاغ عن عطل", icon: Flag },
] as const;

export function PencilTechnicalCarePage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const tx = (en: string, ar: string) => (rtl ? ar : en);
  const Next = rtl ? ArrowLeft : ArrowRight;

  const [area, setArea] = React.useState("frontend");
  const [showFloatingNav, setShowFloatingNav] = React.useState(false);
  const [wizardOpen, setWizardOpen] = React.useState(false);

  // Floating Dock Autohide Controller
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
        className="relative min-h-screen bg-[#FBFBFB] text-neutral-950 font-sans antialiased selection:bg-[#2057ff] selection:text-white"
      >
        <PencilCareAccessibility />
        <Header light />

        <main id="main-content">
          {/* ─────────────────────────────────────────────────────────────────
              SECTION 00: EDITORIAL TECHNICAL SUPPORT HERO (PRESERVED)
          ───────────────────────────────────────────────────────────────── */}
          <section className="relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 min-h-[75vh] flex flex-col justify-center overflow-hidden bg-[#FBFBFB] border-b border-neutral-200">
            <LiquidBackdrop />

            {/* Subtle architectural dot grid */}
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            <div className="container-custom relative z-10 max-w-5xl text-center my-auto w-full">
              {/* Eyebrow Pill */}
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/95 px-4 py-1.5 text-xs font-semibold text-neutral-700 shadow-xs backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    S / 02 • {tx("PENCIL SUPPORT ECOSYSTEM", "منظومة دعم بينسل")}
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="font-bold text-[#2057FF]">
                    {tx("Technical Care & Engineering", "الدعم التقني والهندسي")}
                  </span>
                </div>
              </Reveal>

              {/* Main Headline */}
              <Reveal delay={0.06}>
                <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-neutral-950 leading-[1.14]">
                  {rtl ? (
                    <>
                      <span>نفهم كيف بُني المنتج، </span>
                      <span className="block font-light text-[#2057ff]">
                        وما الذي يبقيه يعمل بأعلى كفاءة.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-extrabold tracking-tight text-neutral-950">
                        We know how it is built,{" "}
                      </span>
                      <span className="block font-light italic text-[#2057ff]">
                        and what keeps it working.
                      </span>
                    </>
                  )}
                </h1>
              </Reveal>

              {/* Editorial Description */}
              <Reveal delay={0.12}>
                <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-neutral-600">
                  {tx(
                    "A digital product brings together the screen, business logic, data flow, and infrastructure. At Pencil, we connect those layers throughout development and support, isolating root causes before touching production code.",
                    "المنتج الرقمي يجمع بين واجهة المستخدم، ومنطق العمل، وتدفق البيانات، والبنية التحتية. في بينسل نربط كل هذه الطبقات معاً أثناء التطوير والدعم، ونشخص السبب الجذري قبل تعديل أي سطر في بيئة العمل الحية."
                  )}
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => setWizardOpen(true)}
                    className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#2057ff] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
                  >
                    <span>{tx("Open Technical Request Wizard", "فتح أداة الطلب التقني")}</span>
                    <Terminal size={16} className="transition-transform group-hover:rotate-6" />
                  </button>
                  <a
                    href="#technical-tiers"
                    className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-neutral-300 bg-white/90 px-6 py-3 text-sm font-bold text-neutral-900 shadow-xs backdrop-blur-sm transition-all hover:border-[#2057ff] hover:text-[#2057ff]"
                  >
                    <span>{tx("Explore Technical Options", "استعراض مسارات الدعم الثلاثة")}</span>
                    <Next size={16} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                HERO VISUAL SHOWCASE (Matching /support/customer, /help/contact, /help/faqs, /help/guides)
            ───────────────────────────────────────────────────────────────── */}
            <div className="mt-10 md:mt-14 relative w-full max-w-6xl mx-auto px-0 sm:px-2">
              <Reveal delay={0.22}>
                <div className="relative overflow-hidden border border-neutral-200/80 bg-neutral-100 group">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src="/supports/supporttechnical.jpg"
                      alt={rtl ? "الدعم التقني والأنظمة السحابية في بنسل ستوديو" : "Pencil Studio Technical Support & Systems"}
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

          {/* ─────────────────────────────────────────────────────────────────
              REFERENCE SECTION 01:
              "Options of initial technical coverage"
              Re-architected to exactly match Reference Slide Layout:
              Left Column (Headline + Subtext note + Circular Indicator)
              Right Column (3 Horizontal Stacked Cards with % Badges + Clean Right Images)
          ───────────────────────────────────────────────────────────────── */}
          <section
            id="technical-tiers"
            className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90 relative overflow-hidden"
          >
            <div className="container-custom max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* ── LEFT COLUMN: Eyebrow + Headline + Note & Indicator ── */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
                  <div>
                    <Reveal>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                        {tx("Adapted Technical SLA", "تغطية تقنية متكيفة")}
                      </span>
                    </Reveal>

                    <Reveal delay={0.05}>
                      <h2 className={cn("mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.12]", rtl ? "tracking-normal" : "tracking-tight")}>
                        {rtl ? (
                          <>
                            تغطية هندسية متكاملة،{" "}
                            <span className="font-light italic text-neutral-500">
                              لبنيتكم التحتية الرقمية.
                            </span>
                          </>
                        ) : (
                          <>
                            Options of initial technical coverage,{" "}
                            <span className="font-light italic text-neutral-500">
                              scaled to your architecture.
                            </span>
                          </>
                        )}
                      </h2>
                    </Reveal>
                  </div>

                  <Reveal delay={0.1}>
                    <div className="pt-4 border-t border-neutral-100 flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm">
                        <ArrowDownRight size={17} />
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm">
                        {tx(
                          "Engineered coverage pathways tuned to system criticality, SLA guarantees, and enterprise compliance requirements.",
                          "مسارات تغطية تقنية مصممة وفق حجم أعمالك، وحساسية الخوادم، ومعايير الاستجابة الفورية."
                        )}
                      </p>
                    </div>
                  </Reveal>
                </div>

                {/* ── RIGHT COLUMN: Dynamic Staggered Asymmetric Rows (Matching Wireframe Exactly) ── */}
                <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
                  {/* ── ROW 1: Wide Text Card (Col 8.5) + Narrow Image Card (Col 3.5) ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                    {/* Text Card 1: Extra Wide (8.5 cols) */}
                    <Reveal delay={0.15} className="sm:col-span-8 md:col-span-8 lg:col-span-8 xl:col-span-8">
                      <div className="h-full rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] p-5 sm:p-6 flex flex-col justify-center min-h-[116px] sm:min-h-[126px] transition-all duration-300 hover:border-neutral-300 hover:shadow-xs group">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                            {tx("Cloud Systems & Infrastructure", "الخوادم والبنية التحتية")}
                          </h3>
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-200/80 text-neutral-800 shrink-0">
                            <Server size={16} />
                          </div>
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm text-neutral-500 leading-snug line-clamp-2">
                          {tx(
                            "High availability monitoring, automated multi-region backups, and proactive cloud uptime.",
                            "مراقبة مستمرة للتوافر العالي، نسخ احتياطي دوري، واستقرار سحابي دائم."
                          )}
                        </p>
                      </div>
                    </Reveal>

                    {/* Image Card 1: Narrow (4 cols) */}
                    <Reveal delay={0.18} className="sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4">
                      <div className="relative w-full h-full min-h-[116px] sm:min-h-[126px] rounded-2xl overflow-hidden border border-neutral-200/90 bg-[#F5F5F7] shadow-xs group hover:border-neutral-300 transition-all duration-300">
                        <Image
                          src="/supports/Cloud-Systems-Infrastructure.jpg"
                          alt={tx("Cloud Systems & Infrastructure", "الخوادم والبنية التحتية")}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 200px"
                        />
                      </div>
                    </Reveal>
                  </div>

                  {/* ── ROW 2: Medium-Wide Royal Blue Text Card (Col 7.5) + Medium Image Card (Col 4.5) ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                    {/* Text Card 2: Medium-Wide (7.5 -> 7 cols) */}
                    <Reveal delay={0.2} className="sm:col-span-7 md:col-span-7 lg:col-span-7 xl:col-span-7">
                      <div className="h-full rounded-2xl bg-[#2057FF] text-white p-5 sm:p-6 flex flex-col justify-center min-h-[116px] sm:min-h-[126px] shadow-lg shadow-blue-500/20 transition-all duration-300 hover:brightness-105 group">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                            {tx("Live Incident Triage & 24/7 SLA", "التدخل الطارئ والحسم 24/7")}
                          </h3>
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-white shrink-0">
                            <Activity size={16} />
                          </div>
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm text-blue-100/90 leading-snug line-clamp-2">
                          {tx(
                            "Guaranteed under 15-minute response for production outages with direct engineer dispatch.",
                            "استجابة فورية مضمونة خلال أقل من 15 دقيقة مع تدخل مباشر من كبار المهندسين."
                          )}
                        </p>
                      </div>
                    </Reveal>

                    {/* Image Card 2: Medium (5 cols) */}
                    <Reveal delay={0.23} className="sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-5">
                      <div className="relative w-full h-full min-h-[116px] sm:min-h-[126px] rounded-2xl overflow-hidden border border-neutral-200/90 bg-[#F5F5F7] shadow-xs group hover:border-neutral-300 transition-all duration-300">
                        <Image
                          src="/supports/Live-Incident-Triage-SLA.jpg"
                          alt={tx("Live Incident Triage", "التدخل الطارئ والحسم")}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 240px"
                        />
                      </div>
                    </Reveal>
                  </div>

                  {/* ── ROW 3: Shortest Text Card (Col 6) + Widest Image Card (Col 6) ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                    {/* Text Card 3: Compact (6 cols) */}
                    <Reveal delay={0.25} className="sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6">
                      <div className="h-full rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] p-5 sm:p-6 flex flex-col justify-center min-h-[116px] sm:min-h-[126px] transition-all duration-300 hover:border-neutral-300 hover:shadow-xs group">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                            {tx("Code & Repository Care", "رعاية الشيفرة والمستودعات")}
                          </h3>
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-200/80 text-neutral-800 shrink-0">
                            <Cpu size={16} />
                          </div>
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm text-neutral-500 leading-snug line-clamp-2">
                          {tx(
                            "Continuous Git commits, dependency updates, and pull-request triage.",
                            "تحديث مستمر للتبعيات ومراجعة فورية لطلبات السحب والشيفرة."
                          )}
                        </p>
                      </div>
                    </Reveal>

                    {/* Image Card 3: Widest (6 cols) */}
                    <Reveal delay={0.28} className="sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6">
                      <div className="relative w-full h-full min-h-[116px] sm:min-h-[126px] rounded-2xl overflow-hidden border border-neutral-200/90 bg-[#F5F5F7] shadow-xs group hover:border-neutral-300 transition-all duration-300">
                        <Image
                          src="/supports/Code-Repository-Care.jpg"
                          alt={tx("Code & Repository Care", "رعاية الشيفرة والمستودعات")}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 300px"
                        />
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              REFERENCE SECTION 02:
              "Key technical needs, and enterprise engineering."
              Rebuilt to exactly match Reference Slide 5 ("Our Company Milestone"):
              Top: Left Headline ("Key Technical Needs") vs Right Pill + Arrow Note (inside container)
              Middle: 4 Clean Minimal Milestone Cards (3 Light + 1 Highlighted Blue elevated upwards)
              Bottom: FULL-BLEED SCREEN-WIDTH Visual Image with NO border, NO rounded curve, NO shadow!
          ───────────────────────────────────────────────────────────────── */}
          <section className="pt-20 sm:pt-28 pb-0 bg-[#FFFFFF] border-b border-neutral-200/90 relative overflow-hidden">
            {/* Header: Left Headline vs Right Minimal Arrow & Note (Constrained in container) */}
            <div className="container-custom max-w-7xl">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-12 sm:pb-16">
                  <div className="max-w-xl">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {tx("Adapted Architecture SLA", "المتطلبات التقنية")}
                    </span>
                    <h2 className={cn("mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", rtl ? "tracking-normal" : "tracking-tight")}>
                      {rtl ? (
                        <>
                          المتطلبات التقنية،{" "}
                          <span className="font-light italic text-neutral-500">
                            والحلول الهندسية الأساسية.
                          </span>
                        </>
                      ) : (
                        <>
                          Key technical needs,{" "}
                          <span className="font-light italic text-neutral-500">
                            and enterprise engineering.
                          </span>
                        </>
                      )}
                    </h2>
                  </div>

                  <div className="flex items-start gap-3 max-w-md pt-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm">
                      <ArrowDownRight size={17} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-neutral-950">
                        {tx("Artificial Intelligence & Systems Engineering", "الهندسة البرمجية والأنظمة الذكية")}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                        {tx(
                          "Calibrated technical infrastructure and continuous architectural support for modern digital enterprises.",
                          "بنية تحتية ومعمارية رقمية متكاملة مصممة لدعم المنصات السحابية الحيوية على مدار الساعة."
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Overlapping Showcase Area */}
            <div className="relative w-full">
              {/* 4 Cards Grid (Layered on top with z-20 inside container) */}
              <div className="container-custom max-w-7xl relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                  {/* ── CARD 1: Light Card ── */}
                  <Reveal delay={0.1}>
                    <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl border border-neutral-100 bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-neutral-900/10 transition-transform duration-300 hover:-translate-y-1">
                      <div>
                        <p className="font-mono text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                          99.9%
                        </p>
                        <h3 className="mt-3 text-sm sm:text-base font-black text-neutral-950">
                          {tx("Cloud High Availability", "الجاهزية السحابية القصوى")}
                        </h3>
                        <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                          {tx(
                            "Multi-region failover and active VPS/Cloud clustering.",
                            "توزيع جغرافي متعدد ونسخ احتياطي فوري بدون انقطاع."
                          )}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* ── CARD 2: Standout Royal Blue Card (Elevated UPWARDS matching Reference) ── */}
                  <Reveal delay={0.15}>
                    <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl bg-[#2057FF] text-white p-6 sm:p-7 flex flex-col justify-start shadow-2xl shadow-blue-600/40 lg:-translate-y-8 transition-transform duration-300 hover:lg:-translate-y-9 hover:-translate-y-1">
                      <div>
                        <p className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight">
                          &lt; 15m
                        </p>
                        <h3 className="mt-3 text-sm sm:text-base font-black text-white">
                          {tx("Direct Lead Triage", "تدخل وتدقيق فوري")}
                        </h3>
                        <p className="mt-2 text-xs text-blue-100/90 leading-relaxed">
                          {tx(
                            "Guaranteed emergency response SLA for live systems.",
                            "استجابة فورية للأعطال الطارئة وحسم مباشر بدون طوابير."
                          )}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* ── CARD 3: Light Card ── */}
                  <Reveal delay={0.2}>
                    <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl border border-neutral-100 bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-neutral-900/10 transition-transform duration-300 hover:-translate-y-1">
                      <div>
                        <p className="font-mono text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                          256-bit
                        </p>
                        <h3 className="mt-3 text-sm sm:text-base font-black text-neutral-950">
                          {tx("Hardened Security & IAM", "الأمان والحوكمة الصارمة")}
                        </h3>
                        <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                          {tx(
                            "Strict role-based access, auditing, and secret vaulting.",
                            "تشفير شامل، صلاحيات وصول مشروطة، وسجلات مدققة."
                          )}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* ── CARD 4: Light Card ── */}
                  <Reveal delay={0.25}>
                    <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl border border-neutral-100 bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-neutral-900/10 transition-transform duration-300 hover:-translate-y-1">
                      <div>
                        <p className="font-mono text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                          CI/CD
                        </p>
                        <h3 className="mt-3 text-sm sm:text-base font-black text-neutral-950">
                          {tx("Automated Pipelines", "مسارات الإطلاق الآلية")}
                        </h3>
                        <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                          {tx(
                            "Continuous Git integration and automated regression checks.",
                            "دمج مستمر واختبارات تلقائية تضمن سلامة الإصدارات."
                          )}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* FULL BLEED IMAGE: Edge-to-Edge 100vw, NO border, NO rounded curve, NO shadow! */}
              <div className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32 w-full h-[260px] sm:h-[300px] md:h-[360px] overflow-hidden">
                <Image
                  src="/supports/key-technical-needs.jpg"
                  alt={tx("Key Technical Needs & Enterprise Infrastructure", "المتطلبات التقنية والبنية التحتية")}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              REFERENCE SECTION 03 (SLIDE 3):
              "Ecosystem components"
              Top: [ECOSYSTEM] + // DIGITAL BANKING PLATFORM
              Headline: Ecosystem [components] + paragraph
              Left Column: 4 Capability rows with circular black arrow buttons (↗)
              Center: Two modernist 3D ribbed geometric quadrants
              Right: Royal Blue "Universal platform" Card with starburst glyph
          ───────────────────────────────────────────────────────────────── */}
          <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90">
            <div className="container-custom max-w-7xl">
              {/* Header matching Reference Slide 3 */}
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-neutral-200/70 pb-8">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                      <span>{tx("ECOSYSTEM", "المنظومة المتكاملة")}</span>
                    </div>

                    <h2 className={cn("mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", rtl ? "tracking-normal" : "tracking-tight")}>
                      {rtl ? (
                        <>
                          مكونات المنظومة،{" "}
                          <span className="font-light italic text-neutral-500">
                            والبنية التقنية المترابطة.
                          </span>
                        </>
                      ) : (
                        <>
                          Ecosystem components,{" "}
                          <span className="font-light italic text-neutral-500">
                            and unified architecture.
                          </span>
                        </>
                      )}
                    </h2>

                    <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
                      {tx(
                        "Pencil technical infrastructure operates on a modular, unified aggregation model. We connect your custom backend, cloud servers, and user touchpoints through robust, monitored pipelines.",
                        "تعمل البنية التقنية لبينسل وفق نموذج موحد وتكاملي، لربط قواعد البيانات، والخوادم السحابية، وواجهات الاستخدام عبر مسارات مراقبة ومحمية بالكامل."
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                      // DIGITAL SYSTEMS ARCHITECTURE
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* 3-Part Composition Grid (Rows on Left, Center 3D Ribbed Quadrants, Right Blue Card) */}
              <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* ── LEFT COLUMN: 4 INTERACTIVE CAPABILITY ROWS WITH (↗) ── */}
                <div className="lg:col-span-5 space-y-4">
                  {[
                    {
                      en: "Turnkey cloud architecture & automated deployment",
                      ar: "بنية سحابية شاملة وتجهيز النشر التلقائي للأنظمة",
                      tag: "cloud",
                    },
                    {
                      en: "Database replication, clustering & query optimization",
                      ar: "مزامنة وتكرار قواعد البيانات وتسريع استعلامات SQL",
                      tag: "database",
                    },
                    {
                      en: "Custom API bridges, webhooks & CRM syncing",
                      ar: "جسور برمجية مخصصة، خطافات الويب، والربط مع CRM",
                      tag: "integrations",
                    },
                    {
                      en: "Real-time telemetry, analytics & bug isolation",
                      ar: "تتبع فوري للأداء، عزل الأخطاء، والتحليلات الحية",
                      tag: "monitoring",
                    },
                  ].map((item, idx) => (
                    <Reveal key={idx} delay={0.08 * (idx + 1)}>
                      <button
                        type="button"
                        onClick={() => { setArea(item.tag); setWizardOpen(true); }}
                        className="group w-full flex items-center justify-between gap-4 rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] hover:bg-white hover:border-[#2057FF] p-4 sm:p-5 text-start transition-all duration-300 shadow-2xs hover:shadow-md"
                      >
                        <span className="text-xs sm:text-sm font-bold text-neutral-800 group-hover:text-neutral-950 leading-snug">
                          {tx(item.en, item.ar)}
                        </span>
                        <div className="h-8 w-8 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#2057FF] transition shadow-xs">
                          <ArrowUpRight size={16} />
                        </div>
                      </button>
                    </Reveal>
                  ))}
                </div>

                {/* ── CENTER COLUMN: MODERNIST 3D RIBBED GEOMETRIC QUADRANTS ── */}
                <div className="lg:col-span-3 flex flex-col items-center justify-center gap-4">
                  <Reveal delay={0.15}>
                    <div className="space-y-4">
                      {/* Top Quadrant: Rounded top-right with fine curved metallic ribs */}
                      <div className="relative w-44 sm:w-48 h-36 sm:h-40 rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-[5rem] bg-gradient-to-tr from-neutral-200 via-neutral-100 to-white border border-neutral-300/80 shadow-md overflow-hidden flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                        <svg
                          viewBox="0 0 160 140"
                          className="absolute inset-0 w-full h-full stroke-neutral-400/80 fill-none stroke-[1.5]"
                        >
                          <path d="M 0 140 C 60 140, 140 100, 160 0" />
                          <path d="M 0 120 C 50 120, 120 80, 140 0" />
                          <path d="M 0 100 C 40 100, 100 60, 120 0" />
                          <path d="M 0 80 C 30 80, 80 40, 100 0" />
                          <path d="M 0 60 C 20 60, 60 20, 80 0" />
                          <path d="M 0 40 C 15 40, 40 10, 60 0" />
                        </svg>
                      </div>

                      {/* Bottom Quadrant: Complementary geometry */}
                      <div className="relative w-44 sm:w-48 h-36 sm:h-40 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-[5rem] bg-gradient-to-br from-white via-neutral-100 to-neutral-200 border border-neutral-300/80 shadow-md overflow-hidden flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                        <svg
                          viewBox="0 0 160 140"
                          className="absolute inset-0 w-full h-full stroke-neutral-400/80 fill-none stroke-[1.5]"
                        >
                          <path d="M 160 0 C 100 0, 20 40, 0 140" />
                          <path d="M 160 20 C 110 20, 40 60, 20 140" />
                          <path d="M 160 40 C 120 40, 60 80, 40 140" />
                          <path d="M 160 60 C 130 60, 80 100, 60 140" />
                          <path d="M 160 80 C 140 80, 100 120, 80 140" />
                          <path d="M 160 100 C 145 100, 120 130, 100 140" />
                        </svg>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* ── RIGHT COLUMN: ROYAL BLUE "UNIVERSAL PLATFORM" CARD WITH ASTERISK ── */}
                <div className="lg:col-span-4 h-full">
                  <Reveal delay={0.2}>
                    <div className="h-full rounded-[2.5rem] bg-[#2057FF] text-white p-7 sm:p-8 flex flex-col justify-between shadow-2xl shadow-blue-500/25 min-h-[380px] sm:min-h-[420px] relative overflow-hidden group">
                      {/* Oversized Stylized Asterisk / Starburst Icon from Reference */}
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-200">
                          PLATFORM TIER // PRODUCTION
                        </span>
                        <div className="select-none text-6xl sm:text-7xl font-extralight text-blue-200/90 leading-none">
                          ✱
                        </div>
                      </div>

                      <div className="mt-auto space-y-4 pt-8">
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          {tx("Universal platform", "منصة تشغيل موحدة")}
                        </h3>

                        <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                          {tx(
                            "Together with the launch of your custom systems, we maintain a complete multi-tier digital architecture and along with technical care we ensure zero downtime as your enterprise scales.",
                            "نقدم رعاية تشغيلية وهندسية شاملة تواكب كل مرحلة من مراحل نمو منصتك، لنضمن استقراراً كاملاً وأداءً فائق السرعة دون أي توقف أو اختناقات تقنية."
                          )}
                        </p>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setWizardOpen(true)}
                            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-950 px-4 py-2 text-xs font-bold hover:bg-neutral-100 transition shadow-sm"
                          >
                            <span>{tx("Engage Engineering Desk", "التواصل مع المكتب الهندسي")}</span>
                            <Next size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              SECTION 04: DIRECT SUPPORT ECOSYSTEM (SIBLING ROUTES)
          ───────────────────────────────────────────────────────────────── */}
          <section className="container-custom py-18 sm:py-24">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/80 pb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2057ff]" />
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#2057ff]">
                      04 // {tx("DIRECT SUPPORT ECOSYSTEM", "قنوات الدعم المتخصصة")}
                    </p>
                  </div>
                  <h2 className={cn("mt-3 text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900", rtl ? "tracking-normal" : "tracking-tight")}>
                    {rtl ? (
                      <>
                        قنوات موثوقة،{" "}
                        <span className="font-light text-neutral-500">
                          وروابط مباشرة للخدمات.
                        </span>
                      </>
                    ) : (
                      <>
                        Verified channels,{" "}
                        <span className="font-light italic text-neutral-500">
                          and direct pathways.
                        </span>
                      </>
                    )}
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                  {tx(
                    "Need assistance outside specialized engineering care? Access our client accounts, bug isolation, or strategic advisory gateways below.",
                    "هل تحتاج إلى دعم خارج نطاق الرعاية الهندسية المخصصة؟ يمكنك الوصول مباشرة إلى إدارة حسابات العملاء، أو الإبلاغ عن الأعطال، أو الاستشارات التخطيطية أدناه."
                  )}
                </p>
              </div>
            </Reveal>

            {/* 4 Gateway Cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/support/customer",
                  title: { en: "Customer Support", ar: "دعم العملاء" },
                  desc: {
                    en: "Retainers, monthly capacity, commercial scopes, and project follow-up.",
                    ar: "العقود الدورية، ساعات العمل الشهرية، ونطاق الشراكة المستمر.",
                  },
                  icon: MessagesSquare,
                  badge: { en: "Partnership Desk", ar: "مكتب الشراكات" },
                },
                {
                  href: "/support/report",
                  title: { en: "Report an Issue", ar: "الإبلاغ عن عطل" },
                  desc: {
                    en: "Actionable triage for specific defects, disruptions, or bugs.",
                    ar: "فرز تشغيلي للأعطال المحددة والمشكلات البرمجية الطارئة.",
                  },
                  icon: Flag,
                  badge: { en: "Incident Triage", ar: "فرز الأعطال" },
                },
                {
                  href: "/support/callback",
                  title: { en: "Request a Callback", ar: "طلب مكالمة" },
                  desc: {
                    en: "Strategic consultations, product demos, and expansion scoping.",
                    ar: "استشارات تخطيطية، عروض تجريبية، ومناقشة توسعات المشاريع.",
                  },
                  icon: PhoneCall,
                  badge: { en: "Advisory & Demos", ar: "الاستشارات والتخطيط" },
                },
                {
                  href: "/support",
                  title: { en: "Support Hub Overview", ar: "مركز الدعم العام" },
                  desc: {
                    en: "Explore all operational support domains, reels, and SLAs.",
                    ar: "استكشف كافة مجالات الدعم التشغيلي ومعايير الاستجابة.",
                  },
                  icon: Headphones,
                  badge: { en: "Support Overview", ar: "نظرة عامة" },
                },
              ].map((card) => {
                const CardIcon = card.icon;
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#2057ff]/40 hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2057ff] transition-transform group-hover:scale-105">
                          <CardIcon size={18} />
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                          {technicalText(card.badge, rtl)}
                        </span>
                      </div>
                      <h4 className="mt-4 text-lg font-bold text-neutral-950 group-hover:text-[#2057ff] transition-colors">
                        {technicalText(card.title, rtl)}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                        {technicalText(card.desc, rtl)}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#2057ff]">
                      <span>{tx("Visit route", "الانتقال للمسار")}</span>
                      <Next
                        size={14}
                        className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </main>

        <Footer />

        {/* ─── SLIDE-IN MODAL FOR TECHNICAL REQUEST WIZARD ─── */}
        <AnimatePresence>
          {wizardOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setWizardOpen(false)}
                className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#2057FF] text-white flex items-center justify-center">
                      <Terminal size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-950">
                        {tx("Technical Investigation Wizard", "أداة الفحص والطلب التقني")}
                      </h3>
                      <p className="text-[11px] text-neutral-500">
                        {tx("Isolate symptoms from root causes with verified telemetry", "تشخيص الأعراض وحصر الأسباب الجذرية بدقة")}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setWizardOpen(false)}
                    className="h-8 w-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center transition"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto space-y-8">
                  <div className="rounded-2xl bg-blue-50/60 border border-blue-200/60 p-4 text-xs text-blue-900 flex items-center justify-between">
                    <span>
                      {tx(
                        "Inquiries route directly to lead developers and infrastructure engineers in Cairo with zero ticket queues.",
                        "تصل الاستفسارات مباشرة إلى كبار المطورين ومهندسي البنية التحتية في القاهرة دون قوائم انتظار."
                      )}
                    </span>
                    <span className="font-bold font-mono">TIER-1-SLA</span>
                  </div>

                  <TechnicalRequest
                    rtl={rtl}
                    area={area}
                    onAreaChange={setArea}
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ─── Floating Centered Support Navigation Dock ─────────────────── */}
        <AnimatePresence>
          {showFloatingNav && (
            <div className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
              <motion.nav
                aria-label={rtl ? "التنقل السريع العائم" : "Floating Quick Navigation"}
                initial={{ opacity: 0, y: 28, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 28, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className="pointer-events-auto flex items-center max-w-[95vw]"
              >
                <div className="flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white/95 p-1.5 shadow-2xl shadow-blue-950/20 backdrop-blur-xl transition hover:border-[#2057FF]/40">
                  {/* Micro Brand Pill */}
                  <div className="hidden sm:flex items-center gap-1.5 ps-2.5 pe-2 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 border-e border-neutral-200/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF] animate-pulse" />
                    <span>SUPPORT</span>
                  </div>

                  {/* The 5 Navigation Tabs */}
                  {SUPPORT_SUB_NAV.map((item) => {
                    const isActive = item.href === "/support/technical";
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "group relative flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-300 sm:px-3 sm:py-1.5 sm:text-xs",
                          isActive
                            ? "bg-[#2057FF] text-white shadow-md shadow-blue-500/25"
                            : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                        )}
                      >
                        <Icon
                          size={13}
                          className={cn(
                            "transition-transform group-hover:scale-110",
                            isActive
                              ? "text-white"
                              : "text-neutral-400 group-hover:text-neutral-700"
                          )}
                        />
                        <span className="whitespace-nowrap">
                          {rtl ? item.ar : item.en}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </motion.nav>
            </div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
