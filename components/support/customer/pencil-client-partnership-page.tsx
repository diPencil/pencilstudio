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
  Check,
  Plus,
  ShieldCheck,
  Sparkles,
  Lock,
  Shield,
  Activity,
  Layers,
  Cpu,
  Mail,
  MessagesSquare,
  PhoneCall,
  Clock,
  Flag,
  Headphones,
  Wrench,
  X,
  FileCheck2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { LiquidBackdrop } from "@/components/editorial";
import { PencilCareAccessibility } from "@/components/shared/ui/pencil-care-accessibility";
import { useLanguage } from "@/components/language-context";
import { PencilButton } from "@/components/ui/pencil-button";
import {
  ClientRequestComposer,
  ClientSupportModels,
} from "@/components/support/customer/pencil-client-workbench";
import { clientText } from "@/lib/support/customer/pencil-client-partnership";
import { cn } from "@/lib/utils";

// ─── Support Center Navigation Ecosystem ─────────────────────────────────────
const SUPPORT_SUB_NAV = [
  { href: "/support", en: "Overview", ar: "نظرة عامة", icon: Headphones },
  { href: "/support/customer", en: "Customer", ar: "دعم العملاء", icon: MessagesSquare },
  { href: "/support/technical", en: "Technical", ar: "الدعم التقني", icon: Wrench },
  { href: "/support/callback", en: "Callback", ar: "طلب مكالمة", icon: PhoneCall },
  { href: "/support/report", en: "Report Issue", ar: "إبلاغ عن عطل", icon: Flag },
] as const;

export function PencilClientPartnershipPage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const tx = (en: string, ar: string) => (rtl ? ar : en);
  const Next = rtl ? ArrowLeft : ArrowRight;

  const [selectedModel, setSelectedModel] = React.useState(0);
  const [showFloatingNav, setShowFloatingNav] = React.useState(false);
  const [workbenchOpen, setWorkbenchOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"overview" | "workbench" | "models">("overview");

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
              SECTION 00: EDITORIAL HERO (PRESERVED ACCORDING TO USER DIRECTIVE)
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

            <div className="container-custom relative z-10 w-full">
              <div className="max-w-5xl mx-auto text-center">
                {/* Eyebrow Pill */}
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/95 px-4 py-1.5 text-xs font-semibold text-neutral-700 shadow-xs backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                      S / 01 • {tx("PENCIL SUPPORT ECOSYSTEM", "منظومة دعم بينسل")}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="font-bold text-[#2057FF]">
                      {tx("Customer Support & Partnerships", "دعم العملاء والشراكات")}
                    </span>
                  </div>
                </Reveal>

                {/* Main Headline */}
                <Reveal delay={0.06}>
                  <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-neutral-950 leading-[1.14]">
                    {rtl ? (
                      <>
                        <span>امتداد لفريقك، </span>
                        <span className="block font-light text-[#2057ff]">
                          ومعرفة تتراكم مع كل مرحلة.
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-extrabold tracking-tight text-neutral-950">
                          An extension of your team,{" "}
                        </span>
                        <span className="block font-light italic text-[#2057ff]">
                          with context that compounds.
                        </span>
                      </>
                    )}
                  </h1>
                </Reveal>

                {/* Editorial Description */}
                <Reveal delay={0.12}>
                  <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-neutral-600">
                    {tx(
                      "Your relationship with Pencil Studio does not reset when a project launches. We stay aligned across active iterations, recurring creative production, technical upkeep, and multi-service company partnerships, with explicit ownership and clear scope boundaries.",
                      "لا تتوقف شراكتك مع استوديو بينسل عند تسليم المشروع أو إطلاقه. نواصل العمل معكم عبر تطوير المنتجات، والإنتاج الإبداعي الدوري، والصيانة التقنية، وشراكات الشركات متعددة التخصصات، بمسؤوليات واضحة وحدود نطاق متفق عليها."
                    )}
                  </p>
                </Reveal>

                {/* Action Buttons */}
                <Reveal delay={0.18}>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                    <button
                      type="button"
                      onClick={() => setWorkbenchOpen(true)}
                      className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#2057ff] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
                    >
                      <span>{tx("Open Request Workbench", "فتح أداة تحرير الطلب")}</span>
                      <Sparkles size={16} className="transition-transform group-hover:rotate-12" />
                    </button>
                    <a
                      href="#enterprise-capabilities"
                      className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-neutral-300 bg-white/90 px-6 py-3 text-sm font-bold text-neutral-900 shadow-xs backdrop-blur-sm transition-all hover:border-[#2057ff] hover:text-[#2057ff]"
                    >
                      <span>{tx("Explore Architecture & Sprints", "استكشاف البنية والنماذج")}</span>
                      <Next size={16} />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* ─────────────────────────────────────────────────────────────────
                  HERO VISUAL SHOWCASE (Matching /help/contact, /help/faqs, /help/guides)
              ───────────────────────────────────────────────────────────────── */}
              <div className="mt-10 md:mt-14 relative w-full max-w-6xl mx-auto px-0 sm:px-2">
                <Reveal delay={0.22}>
                  <div className="relative overflow-hidden border border-neutral-200/80 bg-neutral-100 group">
                    <div className="relative aspect-16/10 w-full">
                      <Image
                        src="/supports/supportcustomer.jpg"
                        alt={rtl ? "دعم العملاء وشراكات بنسل ستوديو" : "Pencil Studio Client Support & Partnerships"}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 1536px) 100vw, 1280px"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              REFERENCE SECTION 01 (SLIDE 1):
              "Designed for secure, compliant, scalable enterprise use"
              Laptop Perspective + Floating Security Lime Card + Floating Dark Card + Certified Badges
          ───────────────────────────────────────────────────────────────── */}
          <section
            id="enterprise-capabilities"
            className="py-20 sm:py-28 bg-[#F5F5F7] border-b border-neutral-200/90 relative overflow-hidden"
          >
            <div className="container-custom max-w-7xl">
              <Reveal>
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#2057FF]">
                      01 // {tx("PLATFORM CAPABILITIES", "قدرات المنظومة والبنية")}
                    </p>
                  </div>
                  <h2 className={cn("mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", rtl ? "tracking-normal" : "tracking-tight")}>
                    {rtl ? (
                      <>
                        مصممة لشراكات آمنة وموثوقة،{" "}
                        <span className="font-light italic text-neutral-500">
                          وقابلة للتوسع المؤسسي المتكامل.
                        </span>
                      </>
                    ) : (
                      <>
                        Designed for secure,{" "}
                        <span className="font-light italic text-neutral-500">
                          compliant, scalable enterprise use.
                        </span>
                      </>
                    )}
                  </h2>
                </div>
              </Reveal>

              {/* Main Showcase Grid: 2 Cards (Wide Deployment Card + Robust Security Controls Card) */}
              <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                {/* ── CARD 01: Deployment // Infrastructure (Wide Architectural Dark Card) ── */}
                <Reveal delay={0.1} className="lg:col-span-7 xl:col-span-8 h-full">
                  <div className="h-full rounded-[2.2rem] bg-[#0c0c0e] text-white p-7 sm:p-10 shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                    <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#2057FF]/15 rounded-full blur-3xl pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                          01 // {tx("DEPLOYMENT INFRASTRUCTURE", "البنية التحتية والنشر")}
                        </span>
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-[1.12] text-white max-w-2xl">
                        {tx(
                          "Cloud, On Premise, Hybrid deployments",
                          "نشر سحابي، محلي، وهجين متكامل"
                        )}
                      </h3>

                      <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
                        {tx(
                          "Complete alignment with your enterprise cloud governance, CI/CD pipelines, and data locality requirements.",
                          "توافق تام مع سياسات الأمان والحوكمة السحابية الخاصة بمؤسستك ومسارات النشر الآلي."
                        )}
                      </p>

                      <div className="mt-7 flex flex-wrap items-center gap-2.5 pt-5 border-t border-white/10">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2057FF] px-4 py-1.5 text-xs font-bold text-white shadow-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          GenDevOps
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800 border border-neutral-700 px-4 py-1.5 text-xs font-bold text-neutral-200 shadow-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                          GenSecOps pipelines
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-[#2057FF]">
                            <Layers size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">
                              {tx("Full IP & Code Sovereignty", "ملكية فكرية وشيفرة كاملة")}
                            </p>
                            <p className="text-xs text-neutral-400 mt-0.5">
                              {tx("Direct GitHub & Figma org transfers", "نقل مباشر لمؤسساتكم على غيت هاب وفيجما")}
                            </p>
                          </div>
                        </div>
                        <Check size={20} className="text-emerald-400 shrink-0" />
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* ── CARD 02 (Previously 03): Robust Security Controls (With Image Inside - Untouched) ── */}
                <Reveal delay={0.2} className="lg:col-span-5 xl:col-span-4 h-full">
                  <div className="h-full rounded-[2.2rem] bg-[#2057FF] text-white p-7 sm:p-8 shadow-xl shadow-blue-500/20 border border-blue-400/30 flex flex-col justify-between relative overflow-hidden group hover:border-blue-300/50 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-100">
                          02 // {tx("SECURITY PROTOCOLS", "بروتوكولات الأمان والحماية")}
                        </span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white">
                          <Lock size={13} />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight text-white">
                        {tx("Robust security controls", "ضوابط أمان وحماية صارمة")}
                      </h3>

                      {/* SVG Wave Sparkline Graphic */}
                      <div className="my-2.5 py-0.5">
                        <svg
                          viewBox="0 0 200 24"
                          className="w-full h-5 stroke-white/80 fill-none stroke-[2.2]"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M 0 12 Q 15 2, 30 12 T 60 12 T 90 12 T 120 12 T 150 12 T 180 12 T 200 12" />
                        </svg>
                      </div>

                      {/* Pill Tags in Brand Style */}
                      <div className="flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold text-white">
                          256-bit Encryption
                        </span>
                        <span className="rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold text-white">
                          RBAC
                        </span>
                        <span className="rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold text-white">
                          Audit Logs
                        </span>
                        <span className="rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold text-white">
                          Vaulting
                        </span>
                      </div>
                    </div>

                    {/* Image inside Card 2 as explicitly requested by user (NO GRADIENT) */}
                    <div className="mt-5 relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-white/25 shadow-lg bg-blue-900/40">
                      <Image
                        src="/supports/robust-security-controls.jpg"
                        alt={tx("Robust Security Controls", "ضوابط أمان وحماية صارمة")}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              REFERENCE SECTION 02 (SLIDE 2):
              "Driving enterprise ROI with Dedicated Teams"
              Bento Grid:
              [100% Invoice / IP accuracy + Wave]
              [70% faster cycle times (LIME) + Avatars + Arrow]
              [80%+ automated + 3D Sphere]
              [4 weeks/hours average deployment per domain (DARK)]
          ───────────────────────────────────────────────────────────────── */}
          <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90">
            <div className="container-custom max-w-7xl">
              <Reveal>
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#2057FF]">
                      02 // {tx("ENTERPRISE VALUE & ROI", "العائد الاستثماري والسرعة")}
                    </p>
                  </div>
                  <h2 className={cn("mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", rtl ? "tracking-normal" : "tracking-tight")}>
                    {rtl ? (
                      <>
                        مضاعفة العائد الاستثماري،{" "}
                        <span className="font-light italic text-neutral-500">
                          للشركات عبر فِرق إنتاج متخصصة.
                        </span>
                      </>
                    ) : (
                      <>
                        Driving enterprise ROI,{" "}
                        <span className="font-light italic text-neutral-500">
                          with dedicated in-house teams.
                        </span>
                      </>
                    )}
                  </h2>
                </div>
              </Reveal>

              {/* Bento Grid */}
              <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {/* ── CARD 1 (LEFT): 100% IP & Milestone Accuracy + 3D Ribbed Wave ── */}
                <Reveal delay={0.1} className="h-full">
                  <div className="h-full rounded-[2rem] border border-neutral-200/80 bg-[#F5F5F7] p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-transform duration-300 hover:-translate-y-1">
                    {/* Top Graphic: Abstract Ribbed Wave with Pencil Brand Palette (Blue, Green, Red) */}
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 h-40 sm:h-44 p-4 flex flex-col justify-between border border-blue-200/50 shadow-inner">
                      {/* Stylized Ribbed Wave Lines Pattern using Pencil Logo Colors */}
                      <svg
                        viewBox="0 0 240 120"
                        className="absolute inset-0 w-full h-full object-cover opacity-85"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M -20,20 C 40,80 120,-20 260,60"
                          stroke="#2057FF"
                          strokeWidth="9"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M -20,40 C 40,100 120,0 260,80"
                          stroke="#10B981"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M -20,60 C 40,120 120,20 260,100"
                          stroke="#DD3126"
                          strokeWidth="7"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M -20,80 C 40,140 120,40 260,120"
                          stroke="#2057FF"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>

                      <div className="relative z-10 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setWorkbenchOpen(true)}
                          className="h-8 w-8 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:scale-110 transition shadow-md"
                          aria-label="Add request topic"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Stat: Enlarged 100% to fill empty space proportionally */}
                    <div className="mt-8 sm:mt-12">
                      <p className="text-6xl sm:text-7xl lg:text-8xl font-black text-neutral-950 tracking-tight leading-none">
                        100%
                      </p>
                      <p className="mt-4 text-sm sm:text-base font-bold text-neutral-600 leading-snug max-w-xs">
                        {tx(
                          "direct IP and creative asset ownership upon milestone sign-off",
                          "ملكية فكرية كاملة ومباشرة للأصول والشيفرة فور اعتماد كل مرحلة"
                        )}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* ── CARD 2 (CENTER): ROYAL BLUE 99.99% Faster Cycle Times + Image + (↗) ── */}
                <Reveal delay={0.2} className="h-full">
                  <div className="h-full rounded-[2rem] bg-[#2057FF] text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-blue-500/15 transition-transform duration-300 hover:-translate-y-1">
                    {/* Top: Header Pill & Circular Arrow Button */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-100">
                        02 // {tx("CYCLE VELOCITY", "سرعة الإنجاز")}
                      </span>

                      {/* Circular Arrow Button (↗) */}
                      <button
                        type="button"
                        onClick={() => setWorkbenchOpen(true)}
                        className="h-10 w-10 rounded-full bg-white text-[#2057FF] flex items-center justify-center shadow-md hover:scale-110 transition shrink-0"
                        aria-label="Direct Squad Inquiry"
                      >
                        <ArrowUpRight size={20} />
                      </button>
                    </div>

                    {/* Middle Image inside the card (NO GRADIENT) */}
                    <div className="relative my-4 aspect-16/10 w-full rounded-2xl overflow-hidden border border-white/20 shadow-md">
                      <Image
                        src="/supports/cycle-velocity.jpg"
                        alt={rtl ? "سرعة إطلاق وتطوير المنتجات" : "Accelerated Cycle Times"}
                        fill
                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                    </div>

                    {/* Bottom Stat: 99.99% matching the font scale of 80%+ */}
                    <div>
                      <p className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
                        99.99%
                      </p>
                      <p className="mt-2.5 text-xs sm:text-sm font-bold text-blue-100 leading-snug">
                        {tx(
                          "faster cycle times compared to hiring in-house technical squads",
                          "تسريع دورات التطوير والإطلاق مقارنة بتوظيف فِرق داخلية من الصفر"
                        )}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* ── COLUMN 3 (RIGHT): Three Stacked Cards (80% Sphere, 4h Emergency, <15m SLA) ── */}
                <div className="h-full flex flex-col justify-between gap-4">
                  {/* Top Card: 80%+ Processes Automated with 3D Sphere */}
                  <Reveal delay={0.25} className="flex-1 flex">
                    <div className="w-full rounded-[2rem] border border-neutral-200/80 bg-[#F5F5F7] p-5 sm:p-6 flex items-center justify-between gap-4 shadow-xs transition-transform duration-300 hover:-translate-y-1">
                      <div>
                        <p className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-none">
                          80%+
                        </p>
                        <p className="mt-2 text-xs sm:text-sm font-bold text-neutral-600 leading-snug">
                          {tx(
                            "deployments, testing, & asset handoffs automated",
                            "أتمتة الفحص، النشر المستمر، وتسليم الأصول"
                          )}
                        </p>
                      </div>

                      {/* 3D Glowing Brand Green Sphere Graphic */}
                      <div className="relative shrink-0">
                        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-[#059669] via-[#10B981] to-[#34D399] shadow-lg shadow-emerald-500/25 flex items-center justify-center overflow-hidden">
                          <div className="absolute top-2 left-2.5 w-6 h-6 rounded-full bg-white/40 blur-[3px]" />
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {/* Middle Card: Dark Card 4 hours average emergency deployment per domain */}
                  <Reveal delay={0.3} className="flex-1 flex">
                    <div className="w-full rounded-[2rem] bg-[#0c0c0e] text-white p-5 sm:p-6 border border-neutral-800 shadow-md flex items-center justify-between gap-4 transition-transform duration-300 hover:-translate-y-1 relative overflow-hidden">
                      {/* Subtle concentric wave background */}
                      <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full border border-white/10 pointer-events-none" />
                      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border border-white/10 pointer-events-none" />

                      <div className="relative z-10">
                        <p className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
                          4h
                        </p>
                        <p className="mt-2 text-xs sm:text-sm font-bold text-neutral-300 leading-snug">
                          {tx(
                            "emergency critical triage turnaround",
                            "زمن الاستجابة للطوارئ وحسم الأعطال"
                          )}
                        </p>
                      </div>

                      <div className="relative z-10">
                        <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                    </div>
                  </Reveal>

                  {/* Bottom Card (NEW BAR): < 15m Direct SLA Turnaround */}
                  <Reveal delay={0.35} className="flex-1 flex">
                    <div className="w-full rounded-[2rem] border border-neutral-200/80 bg-white p-5 sm:p-6 flex items-center justify-between gap-4 shadow-xs transition-transform duration-300 hover:-translate-y-1 relative overflow-hidden">
                      <div>
                        <p className="text-3xl sm:text-4xl font-black text-[#2057FF] tracking-tight leading-none">
                          &lt;15m
                        </p>
                        <p className="mt-2 text-xs sm:text-sm font-bold text-neutral-600 leading-snug">
                          {tx(
                            "direct lead engineer acknowledgment",
                            "إقرار وتدخل مباشر من قائد الفريق التقني"
                          )}
                        </p>
                      </div>

                      <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#2057FF] flex items-center justify-center shrink-0 shadow-2xs">
                        <Clock size={18} />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              REFERENCE SECTION 03 (SLIDE 3):
              "Let's build your AI workforce - together"
              Dark Theme Heroic Card:
              Left: Large Bold Headline + Pill badge + Callout
              Right: 3 Tall Vertical Cards:
              [1. Dark Card with luminous glow + (+)]
              [2. Light Cream Card + (+)]
              [3. Lime Green Card with (&) symbol + Pencil Care pill]
          ───────────────────────────────────────────────────────────────── */}
          <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90">
            <div className="container-custom max-w-7xl">
              <Reveal>
                <div className="rounded-[2.5rem] bg-[#09090b] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
                  {/* Subtle Concentric Curved Line Waves at Bottom (Exact Reference Texture) */}
                  <svg
                    viewBox="0 0 1200 400"
                    className="absolute -bottom-20 -left-20 w-[140%] h-[60%] pointer-events-none opacity-20 stroke-white/40 fill-none"
                    preserveAspectRatio="none"
                  >
                    <path d="M 0,400 Q 600,100 1200,400" strokeWidth="1" />
                    <path d="M 0,380 Q 600,120 1200,380" strokeWidth="1" />
                    <path d="M 0,360 Q 600,140 1200,360" strokeWidth="1" />
                    <path d="M 0,340 Q 600,160 1200,340" strokeWidth="1" />
                    <path d="M 0,320 Q 600,180 1200,320" strokeWidth="1" />
                    <path d="M 0,300 Q 600,200 1200,300" strokeWidth="1" />
                  </svg>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    {/* Left Column: Headline with integrated logo pill */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
                        {tx("PENCIL ENTERPRISE CARE", "رعاية بينسل المؤسسية")}
                      </div>

                      <h2 className={cn("text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.08]", rtl ? "tracking-normal" : "tracking-tight")}>
                        {rtl ? (
                          <>
                            دعنا نبني فريقك المخصص،{" "}
                            <span className="font-light italic text-neutral-400">
                              لتحقيق رؤيتك التشغيلية.
                            </span>
                          </>
                        ) : (
                          <>
                            Let&apos;s build your workforce,{" "}
                            <span className="font-light italic text-neutral-400">
                              and compound your velocity.
                            </span>
                          </>
                        )}
                      </h2>

                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md">
                        {tx(
                          "Scale your digital products, creative retainers, and cloud platforms with dedicated senior engineers and designers committed to your long-term roadmap.",
                          "طوّر منتجاتك الرقمية، تعاقداتك الإبداعية، وبنيتك السحابية مع نخبة من كبار المهندسين والمصممين الملتزمين بتحقيق أهدافك."
                        )}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-4 items-center">
                        <PencilButton
                          size="lg"
                          onClick={() => setWorkbenchOpen(true)}
                          className="bg-[#2057FF] text-white hover:bg-blue-600 shadow-lg shadow-blue-500/25"
                        >
                          {tx("Start Dedicated Consultation", "بدء استشارة التعاقد")}
                        </PencilButton>
                      </div>
                    </div>

                    {/* Right Column: 3 Tall Vertical Cards (Exact Reference Arrangement) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 items-stretch">
                      {/* ── CARD 1: DARK WITH DEDICATED SPECIALIST IMAGE & (+) ── */}
                      <div className="rounded-3xl bg-[#131316] border border-white/10 p-5 sm:p-6 flex flex-col justify-between min-h-[400px] sm:min-h-[440px] relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                            01 // SQUAD
                          </span>
                          <button
                            type="button"
                            onClick={() => setWorkbenchOpen(true)}
                            className="h-8 w-8 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:scale-110 hover:bg-white hover:text-neutral-950 transition shrink-0"
                            aria-label="Expand Squad Details"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Clean Image filling the empty space */}
                        <div className="relative my-3 aspect-4/3 w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-inner">
                          <Image
                            src="/supports/squad.jpg"
                            alt={tx("Dedicated Technical Specialist", "متخصص تقني مفرغ")}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 260px"
                          />
                        </div>

                        <div className="mt-auto pt-2">
                          <p className="text-sm font-bold text-neutral-200 leading-snug">
                            {tx(
                              "Start with one dedicated specialist or transform an entire department",
                              "ابدأ بمتخصص واحد مخصص أو طوّر منظومة شركتك بالكامل"
                            )}
                          </p>
                        </div>
                      </div>

                      {/* ── CARD 2: LIGHT OFF-WHITE/CREAM WITH ENTERPRISE CO-DEVELOP IMAGE & (+) ── */}
                      <div className="rounded-3xl bg-[#EDECE6] text-neutral-950 p-5 sm:p-6 flex flex-col justify-between min-h-[400px] sm:min-h-[440px] shadow-lg group hover:bg-white transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                            02 // CO-DEV
                          </span>
                          <button
                            type="button"
                            onClick={() => setWorkbenchOpen(true)}
                            className="h-8 w-8 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:scale-110 transition shrink-0"
                            aria-label="Expand Co-development Details"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Clean Image filling the empty space */}
                        <div className="relative my-3 aspect-4/3 w-full rounded-2xl overflow-hidden border border-neutral-300/80 bg-neutral-200/50 shadow-inner">
                          <Image
                            src="/supports/co-dev.jpg"
                            alt={tx("Enterprise Co-Development", "تطوير مشترك للحلول المؤسسية")}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 260px"
                          />
                        </div>

                        <div className="mt-auto pt-2">
                          <p className="text-sm font-black text-neutral-950 leading-snug">
                            {tx(
                              "Co-develop products tailored to your enterprise tech stack & brand DNA",
                              "تطوير مشترك للمنتجات والحلول بما يناسب أدواتك ومعايير هويتك بدقة"
                            )}
                          </p>
                        </div>
                      </div>

                      {/* ── CARD 3: PENCIL ROYAL BLUE WITH IMAGE & PENCIL CARE PILL ── */}
                      <div className="rounded-3xl bg-[#2057FF] text-white p-5 sm:p-6 flex flex-col justify-between min-h-[400px] sm:min-h-[440px] shadow-xl shadow-blue-500/20 group hover:brightness-105 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-100">
                            03 // CARE
                          </span>
                          <button
                            type="button"
                            onClick={() => setWorkbenchOpen(true)}
                            className="h-8 w-8 rounded-full bg-white text-[#2057FF] flex items-center justify-center hover:scale-110 transition shrink-0"
                            aria-label="Expand Pencil Care Details"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Clean Image filling the empty space */}
                        <div className="relative my-3 aspect-4/3 w-full rounded-2xl overflow-hidden border border-white/20 bg-blue-900/40 shadow-inner">
                          <Image
                            src="/supports/care.jpg"
                            alt={tx("Pencil Care Infrastructure & Support", "بنية تحتية ورعاية تشغيلية")}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 260px"
                          />
                        </div>

                        <div className="mt-auto pt-2">
                          {/* Pencil Care Link Pill */}
                          <button
                            type="button"
                            onClick={() => setWorkbenchOpen(true)}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#2057FF] px-3.5 py-1 text-xs font-bold mb-2.5 hover:bg-blue-50 transition shadow-xs"
                          >
                            <span>Pencil Care</span>
                            <ArrowUpRight size={13} />
                          </button>

                          <p className="text-xs sm:text-sm font-bold text-blue-100 leading-snug">
                            {tx(
                              "The operational infrastructure layer for ambitious brands",
                              "البنية التحتية والتشغيلية المعتمدة للشركات الطموحة"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              SECTION 04: DIRECT GATEWAYS ECOSYSTEM (SIBLING ROUTES)
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
                    "Need assistance outside customer account coordination? Access our specialized technical triage, bug reporting, or strategic advisory gateways below.",
                    "هل تحتاج إلى دعم خارج نطاق حسابات العملاء؟ يمكنك الوصول مباشرة إلى فحص الأعطال البرمجية، أو الدعم التقني، أو الاستشارات التخطيطية أدناه."
                  )}
                </p>
              </div>
            </Reveal>

            {/* 4 Gateway Cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: "/support/technical",
                  title: { en: "Technical Support", ar: "الدعم التقني" },
                  desc: {
                    en: "Websites, hosting, custom databases, and API integrations.",
                    ar: "المواقع والاستضافة وقواعد البيانات المخصصة وربط API.",
                  },
                  icon: Wrench,
                  badge: { en: "Engineering & Systems", ar: "الهندسة والأنظمة" },
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
                          {clientText(card.badge, rtl)}
                        </span>
                      </div>
                      <h4 className="mt-4 text-lg font-bold text-neutral-950 group-hover:text-[#2057ff] transition-colors">
                        {clientText(card.title, rtl)}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                        {clientText(card.desc, rtl)}
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

        {/* ─── SLIDE-IN MODAL FOR REQUEST WORKBENCH (FULL FUNCTIONALITY PRESERVED) ─── */}
        <AnimatePresence>
          {workbenchOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setWorkbenchOpen(false)}
                className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#2057FF] text-white flex items-center justify-center">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-950">
                        {tx("Client Request Workbench", "منصة إعداد طلبات العملاء")}
                      </h3>
                      <p className="text-[11px] text-neutral-500">
                        {tx("Frame your custom inquiry and connect directly with our engineering leadership", "صِغ طلبك وتواصل مباشرة مع قيادة الفريق الهندسي")}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setWorkbenchOpen(false)}
                    className="h-8 w-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center transition"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Body Content with Interactive Composer */}
                <div className="p-6 overflow-y-auto space-y-6">
                  <div className="rounded-2xl bg-blue-50/60 border border-blue-200/60 p-4 text-xs text-blue-900 flex items-center justify-between">
                    <span>
                      {tx(
                        "All inquiries route directly to lead partners and engineering managers in Cairo with verified milestone ownership.",
                        "تصل الطلبات مباشرة إلى الشركاء ومديري الهندسة في القاهرة مع تحديد صريح للمسؤوليات."
                      )}
                    </span>
                    <span className="font-bold font-mono">PENCIL-SLA-01</span>
                  </div>

                  <ClientRequestComposer rtl={rtl} model={selectedModel} />
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
                    const isActive = item.href === "/support/customer";
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
