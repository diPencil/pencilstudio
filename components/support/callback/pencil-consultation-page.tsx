"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Flag,
  Headphones,
  Mail,
  MessagesSquare,
  PhoneCall,
  Sparkles,
  Wrench,
  ShieldCheck,
  FileCheck2,
  Users,
  Award,
  Layers,
  Building2,
  Calendar,
  X,
  Compass,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { LiquidBackdrop } from "@/components/editorial";
import { PencilCareAccessibility } from "@/components/shared/ui/pencil-care-accessibility";
import { useLanguage } from "@/components/language-context";
import { PencilButton } from "@/components/ui/pencil-button";
import { ConsultationRequest } from "@/components/support/callback/pencil-consultation-request";
import {
  CALL_PREPARATION,
  CALL_REQUESTS,
  callText,
} from "@/lib/support/callback/pencil-consultation";
import { cn } from "@/lib/utils";

// ─── 5-Route Support Center Navigation Ecosystem ─────────────────────────────
const SUPPORT_SUB_NAV = [
  { href: "/support", en: "Overview", ar: "نظرة عامة", icon: Headphones },
  { href: "/support/customer", en: "Customer", ar: "دعم العملاء", icon: MessagesSquare },
  { href: "/support/technical", en: "Technical", ar: "الدعم التقني", icon: Wrench },
  { href: "/support/callback", en: "Callback", ar: "طلب مكالمة", icon: PhoneCall },
  { href: "/support/report", en: "Report Issue", ar: "إبلاغ عن عطل", icon: Flag },
] as const;

export function PencilConsultationPage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const tx = (en: string, ar: string) => (rtl ? ar : en);
  const Next = rtl ? ArrowLeft : ArrowRight;

  const [request, setRequest] = React.useState("new");
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
              SECTION 00: EDITORIAL CONSULTATION HERO (PRESERVED)
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
                    S / 04 • {tx("PENCIL SUPPORT ECOSYSTEM", "منظومة دعم بينسل")}
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="font-bold text-[#2057FF]">
                    {tx("Consultation & Callback Desk", "مكتب الاستشارات وطلب المكالمات")}
                  </span>
                </div>
              </Reveal>

              {/* Main Headline */}
              <Reveal delay={0.06}>
                <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-neutral-950 leading-[1.14]">
                  {rtl ? (
                    <>
                      <span>حوار استشاري مركز، </span>
                      <span className="block font-light text-[#2057ff]">
                        ينطلق من طبيعة العمل والقرارات المطلوبة.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-extrabold tracking-tight text-neutral-950">
                        A focused consultation,{" "}
                      </span>
                      <span className="block font-light italic text-[#2057ff]">
                        built around the work in front of you.
                      </span>
                    </>
                  )}
                </h1>
              </Reveal>

              {/* Editorial Description */}
              <Reveal delay={0.12}>
                <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-neutral-600">
                  {tx(
                    "Whether evaluating a new digital platform, exploring a SuperFeliz demo, or planning ongoing technical care, prepare your request here. We review the details first to ensure our conversation addresses your actual operational requirements.",
                    "سواء كنت بصدد تقييم منصة رقمية جديدة، أو طلب عرض لمنتجات سوبر فيليز، أو التخطيط لشراكة تقنية مستمرة، ابدأ بإعداد تفاصيل طلبك هنا. نقوم بدراسة المعطيات مسبقاً لضمان حوار عملي يناسب احتياجاتك التشغيلية الفعلية."
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
                    <span>{tx("Prepare Consultation Brief", "إعداد ملخص الاستشارة")}</span>
                    <Calendar size={16} className="transition-transform group-hover:scale-110" />
                  </button>
                  <a
                    href="#consultation-cycle"
                    className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-neutral-300 bg-white/90 px-6 py-3 text-sm font-bold text-neutral-900 shadow-xs backdrop-blur-sm transition-all hover:border-[#2057ff] hover:text-[#2057ff]"
                  >
                    <span>{tx("Explore Consultation Cycle", "استكشاف مراحل الدورة الاستشارية")}</span>
                    <Next size={16} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
                HERO VISUAL SHOWCASE (Matching /support/customer, /support/technical)
            ───────────────────────────────────────────────────────────────── */}
            <div className="mt-10 md:mt-14 relative w-full max-w-6xl mx-auto px-0 sm:px-2">
              <Reveal delay={0.22}>
                <div className="relative overflow-hidden border border-neutral-200/80 bg-neutral-100 group">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src="/supports/supportcallback.jpg"
                      alt={rtl ? "طلب استشارة ومكالمة مخصصة في بنسل ستوديو" : "Pencil Studio Strategic Callback & Consultation"}
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
              REFERENCE SECTION 01 (SLIDE 1):
              "Полный цикл строительных работ" -> "Full cycle of digital & strategic consultation"
              Top: Blueprint schematic line art in top-right
              Grid of 6 Notched Royal Blue Cards with Cutout Corner Pill Numbers:
              [01], [02], [03], [04], [05], [06]
          ───────────────────────────────────────────────────────────────── */}
          <section
            id="consultation-cycle"
            data-section="full-cycle"
            className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90 relative overflow-hidden"
          >
            {/* Authentic Pencil Studio Brand Icon (Replacing Architectural Blueprint Graphic) */}
            <div className="absolute top-6 end-8 sm:top-8 sm:end-12 lg:end-16 w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] lg:w-[250px] lg:h-[250px] pointer-events-none opacity-30 hidden md:block">
              <svg
                viewBox="0 0 453 453"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="#dd3126"
                  d="M341.5,24.3c-25.9-9.6-52.8-16-81.1-16l-130.5.2c-66.3,0-117.8,56.1-120.9,121.3l.4,55.8c33.5-55.2,91.3-88.3,156.9-88l90,.7c48.3,1,92.5-11.5,134.3-35.2,0,0,2.5-1.7,6.1-4.1-15.2-14.9-33.8-26.8-55.1-34.7Z"
                />
                <path
                  fill="#53ab47"
                  d="M441.8,149.3c-.6-3.6-.7-4.4-1.4-7.9-6.5-32.3-21.7-60.6-43.9-82.3-3,2.8-4.1,4-4.1,4-31.8,30.5-76.5,42.3-120,48.7-36,3.7-70,1.9-106.3,2.7-70.2,1.6-132.6,42.5-157.4,107.4l.6,86.7c35.2-47.4,87.7-77.3,147.7-77.8,0,0,106.4,2.3,106.4,2.3,27,.6,55.2-5.2,80.3-14.8,13.3-5.1,26.3-11.1,38.3-18.8s19.6-14.4,29-22.1,22.2-17.3,30.7-28.1Z"
                />
                <path
                  fill="#3467ae"
                  d="M390.1,200.7c-37.7,27.7-80.4,35.7-125.1,41.6l-102.1,4.7c-72.6,2.8-136.6,53.8-152.7,125.1-5.3,23.4-.3,46.6-1,72.7,36.7-46.5,88.2-78.5,148.3-78.8l99.7-.5c35.7-.2,69.4-9.1,100.5-25.5,70.8-37.3,96.6-112.4,84.5-189.5-21.3,27.5-52.1,50.3-52.1,50.3Z"
                />
              </svg>
            </div>

            <div className="container-custom max-w-7xl relative z-10">
              <Reveal>
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#2057FF]">
                    <span>{tx("01 // ADVISORY FRAMEWORK", "01 // مسارات الاستشارة")}</span>
                  </div>

                  <h2 className={cn("mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", rtl ? "tracking-normal" : "tracking-tight")}>
                    {rtl ? (
                      <>
                        الدورة الكاملة للاستشارات،{" "}
                        <span className="font-light italic text-neutral-500">
                          الاستراتيجية والهندسية المتكاملة.
                        </span>
                      </>
                    ) : (
                      <>
                        Full cycle of strategic consultation,{" "}
                        <span className="font-light italic text-neutral-500">
                          engineered for compounding velocity.
                        </span>
                      </>
                    )}
                  </h2>
                </div>
              </Reveal>

              {/* 6 Notched Royal Blue Cards Grid (2 rows of 3) exactly matching Reference Design */}
              <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {[
                  {
                    num: "01",
                    titleEn: "Scope Framing & System Architecture",
                    titleAr: "تأطير النطاق والهندسة المعمارية",
                    descEn: "Defining operational requirements, core user journeys, and technical feasibility.",
                    descAr: "تحديد المتطلبات التشغيلية، ومسارات المستخدم، والجدوى الهندسية للمشروع.",
                  },
                  {
                    num: "02",
                    titleEn: "Turnkey Discovery & System Audit",
                    titleAr: "الفحص التقني الشامل واستكشاف الأنظمة",
                    descEn: "Full-stack code review, legacy system discovery, and milestone readiness.",
                    descAr: "فحص الشيفرة الحالية، استكشاف الأنظمة القديمة، وتجهيز المراحل للتنفيذ.",
                  },
                  {
                    num: "03",
                    titleEn: "UX Design Tokens & Product Direction",
                    titleAr: "تجربة المستخدم والاتجاه الإبداعي",
                    descEn: "Brand identity alignment, design systems, and responsive interaction logic.",
                    descAr: "مواءمة الهوية التجارية، وتوحيد مكونات التصميم وتجربة التفاعل.",
                  },
                  {
                    num: "04",
                    titleEn: "Cloud Infrastructure & Sizing",
                    titleAr: "البنية السحابية وتحديد الطاقة التشغيلية",
                    descEn: "Server sizing, multi-region replication, and automated CI/CD pipeline planning.",
                    descAr: "تحديد أحجام الخوادم، والنسخ الاحتياطي الجغرافي، ومسارات النشر الآلي.",
                  },
                  {
                    num: "05",
                    titleEn: "Technical Supervision & Advisory",
                    titleAr: "الإشراف الفني والاستشارة المستمرة",
                    descEn: "Sprint code audits, pull-request sign-offs, and architecture governance.",
                    descAr: "مراجعة سبرنتات العمل، واعتماد طلبات السحب، وحوكمة الأمان.",
                  },
                  {
                    num: "06",
                    titleEn: "Commercial Scoping & Milestone Delivery",
                    titleAr: "تسعير المراحل وخطة التسليم المعتمدة",
                    descEn: "Transparent pricing models, milestone-based SLAs, and verified handoffs.",
                    descAr: "نماذج تسعير واضحة، اتفاقيات تسليم مرحلية، وضمانات تسليم معتمدة.",
                  },
                ].map((card, idx) => (
                  <Reveal key={card.num} delay={0.06 * (idx + 1)}>
                    <div className="group relative rounded-[28px] bg-[#2057FF] text-white p-6 sm:p-7 flex flex-col justify-between min-h-[175px] sm:min-h-[190px] shadow-lg shadow-blue-600/15 hover:bg-[#1A4BDE] hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300 overflow-hidden">
                      {/* Card Content: Title + Description */}
                      <div className="relative z-0">
                        <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug pe-16 rtl:pe-0 rtl:ps-16">
                          {tx(card.titleEn, card.titleAr)}
                        </h3>

                        <p className="mt-2.5 text-xs sm:text-[13px] text-blue-100/90 leading-relaxed pe-16 rtl:pe-0 rtl:ps-16">
                          {tx(card.descEn, card.descAr)}
                        </p>
                      </div>

                      {/* Notched Corner with Concave Inverted Curves & Docked Pill */}
                      {rtl ? (
                        /* RTL: Bottom-Left Notch */
                        <div className="absolute -bottom-px -left-px z-10 flex items-center justify-center bg-white px-4 py-2.5 rounded-tr-[28px]">
                          {/* Top concave fillet */}
                          <svg
                            className="absolute -top-5 left-0 w-5 h-5 fill-white pointer-events-none"
                            viewBox="0 0 20 20"
                          >
                            <path d="M0 20 V0 C0 11.046 8.954 20 20 20 H0 Z" />
                          </svg>
                          {/* Right concave fillet */}
                          <svg
                            className="absolute bottom-0 -right-5 w-5 h-5 fill-white pointer-events-none"
                            viewBox="0 0 20 20"
                          >
                            <path d="M0 20 H20 C8.954 20 0 11.046 0 0 V20 Z" />
                          </svg>

                          {/* Docked White Pill */}
                          <div className="flex h-7.5 min-w-[52px] items-center justify-center rounded-full border-2 border-[#2057FF] px-3.5 py-0.5 bg-white text-xs sm:text-[13px] font-black font-mono text-[#2057FF] shadow-xs select-none">
                            {card.num}
                          </div>
                        </div>
                      ) : (
                        /* LTR: Bottom-Right Notch */
                        <div className="absolute -bottom-px -right-px z-10 flex items-center justify-center bg-white px-4 py-2.5 rounded-tl-[28px]">
                          {/* Top concave fillet */}
                          <svg
                            className="absolute -top-5 right-0 w-5 h-5 fill-white pointer-events-none"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 20 V0 C20 11.046 11.046 20 0 20 H20 Z" />
                          </svg>
                          {/* Left concave fillet */}
                          <svg
                            className="absolute bottom-0 -left-5 w-5 h-5 fill-white pointer-events-none"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 20 H0 C11.046 20 20 11.046 20 0 V20 Z" />
                          </svg>

                          {/* Docked White Pill */}
                          <div className="flex h-7.5 min-w-[52px] items-center justify-center rounded-full border-2 border-[#2057FF] px-3.5 py-0.5 bg-white text-xs sm:text-[13px] font-black font-mono text-[#2057FF] shadow-xs select-none">
                            {card.num}
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              REFERENCE SECTION 02 (SLIDE 2 - TWO SPLIT PANELS):
              Panel A (Left): "Our live platforms - our pride" + 3 Project Cards
              Panel B (Right): "We build not just buildings - we create comfort & reliability"
              Stats: [150+] + [10+] + Dark Blue Disciplines Box + Perspective Tower
          ───────────────────────────────────────────────────────────────── */}
          <section data-section="authority-velocity" className="py-20 sm:py-28 bg-[#F5F5F7] border-b border-neutral-200/90">
            <div className="container-custom max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* ── PANEL A (LEFT): OUR VERIFIED PLATFORMS ── */}
                <div className="lg:col-span-6 rounded-[2.2rem] bg-white border border-neutral-200/90 p-7 sm:p-9 shadow-xs flex flex-col justify-between">
                  <Reveal delay={0.1}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950">
                        {tx("Our live systems - verified track record", "أنظمتنا الحية - سجل إنجازات معتمد")}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-500">
                        {tx(
                          "Proven high-traffic digital platforms built and maintained by Pencil Studio.",
                          "منصات رقمية ذات موثوقية عالية تم بناؤها وإدارتها من قِبل استوديو بينسل."
                        )}
                      </p>
                    </div>

                    {/* 3 Project Cards in a Row matching Reference */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Project 1 */}
                      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-3 shadow-2xs group hover:border-[#2057FF] transition">
                        <div className="relative h-28 w-full rounded-xl overflow-hidden bg-neutral-200">
                          <Image
                            src="/sectors/sector-section/crm-automation.jpg"
                            alt={rtl ? "منصة إدارة العمليات BMS Cockpit" : "Enterprise BMS Platform"}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>
                        <div className="mt-3">
                          <h4 className="text-xs font-black text-neutral-950">
                            {tx("BMS Cockpit", "منصة إدارة العمليات (BMS)")}
                          </h4>
                          <p className="text-[10px] text-neutral-500 mt-0.5">
                            {tx("Commercial Architecture", "هندسة الأنظمة التجارية")}
                          </p>
                          <p className="text-[10px] font-mono text-[#2057FF] mt-1 font-bold">50k+ Daily Users</p>
                        </div>
                      </div>

                      {/* Project 2 */}
                      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-3 shadow-2xs group hover:border-[#2057FF] transition">
                        <div className="relative h-28 w-full rounded-xl overflow-hidden bg-neutral-200">
                          <Image
                            src="/sectors/sector-section/e-commerce.jpg"
                            alt={rtl ? "منصة التجارة المتعددة القنوات" : "Omnichannel Commerce Hub"}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>
                        <div className="mt-3">
                          <h4 className="text-xs font-black text-neutral-950">
                            {tx("Commerce Hub", "منصة التجارة الإلكترونية")}
                          </h4>
                          <p className="text-[10px] text-neutral-500 mt-0.5">
                            {tx("High-Traffic Retail", "تجارة تجزئة عالية الكثافة")}
                          </p>
                          <p className="text-[10px] font-mono text-[#2057FF] mt-1 font-bold">12,500 Orders/day</p>
                        </div>
                      </div>

                      {/* Project 3 */}
                      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-3 shadow-2xs group hover:border-[#2057FF] transition">
                        <div className="relative h-28 w-full rounded-xl overflow-hidden bg-neutral-200">
                          <Image
                            src="/sectors/sector-section/corporate-websites.jpg"
                            alt={rtl ? "منصة الأنظمة السحابية" : "Industrial Cloud Platform"}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                          />
                        </div>
                        <div className="mt-3">
                          <h4 className="text-xs font-black text-neutral-950">
                            {tx("Cloud System", "الأنظمة السحابية والمؤسسية")}
                          </h4>
                          <p className="text-[10px] text-neutral-500 mt-0.5">
                            {tx("Infrastructure Hub", "بنية تحتية متقدمة")}
                          </p>
                          <p className="text-[10px] font-mono text-emerald-600 mt-1 font-bold">99.98% Uptime</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#2057FF]">
                    <span>{tx("Ready to scope a similar project?", "هل تريد دراسة نطاق مشروع مشابه؟")}</span>
                    <button
                      type="button"
                      onClick={() => setWizardOpen(true)}
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      <span>{tx("Schedule Callback", "طلب مكالمة")}</span>
                      <Next size={13} />
                    </button>
                  </div>
                </div>

                {/* ── PANEL B (RIGHT): WE BUILD MORE THAN CODE (STATS + TOWER VISUAL) ── */}
                <div className="lg:col-span-6 rounded-[2.2rem] bg-white border border-neutral-200/90 p-7 sm:p-9 shadow-xs flex flex-col justify-between">
                  <Reveal delay={0.2}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 leading-snug">
                        {tx(
                          "We build more than software - we create compounding business velocity",
                          "لا نبني مجرد برمجيات - بل نؤسس لسرعة واستقرار أعمالك"
                        )}
                      </h3>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                      {/* Left: Stats & Blue Disciplines Box */}
                      <div className="sm:col-span-7 space-y-4">
                        {/* Two Pill Stat Boxes */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-3.5 text-center">
                            <p className="text-2xl sm:text-3xl font-black text-[#2057FF]">150+</p>
                            <p className="text-[10px] font-bold text-neutral-500 uppercase mt-0.5">
                              {tx("Delivered Systems", "أنظمة ومشاريع")}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-3.5 text-center">
                            <p className="text-2xl sm:text-3xl font-black text-[#2057FF]">10+</p>
                            <p className="text-[10px] font-bold text-neutral-500 uppercase mt-0.5">
                              {tx("Years Experience", "سنوات خبرة")}
                            </p>
                          </div>
                        </div>

                        {/* Royal Blue Core Disciplines Box matching Reference */}
                        <div className="rounded-2xl bg-[#2057FF] text-white p-5 shadow-sm">
                          <p className="text-xs font-black uppercase tracking-wider text-blue-100">
                            {tx("Core Consultation Disciplines", "المسارات الاستشارية الأساسية")}
                          </p>
                          <ul className="mt-3 space-y-2 text-xs font-bold text-white/95">
                            <li className="flex items-center gap-2">
                              <span>•</span>
                              <span>{tx("Enterprise System Architecture", "هندسة الأنظمة للمؤسسات")}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span>•</span>
                              <span>{tx("High-Conversion Digital Platforms", "المنصات الرقمية التجارية")}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span>•</span>
                              <span>{tx("Cloud Infrastructure & Migration", "الترحيل السحابي وتوسيع الأنظمة")}</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right: Core Consultation Disciplines Image showcase */}
                      <div className="sm:col-span-5 flex items-center justify-center">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden group">
                          <Image
                            src="/supports/core-consultation-disciplines.jpg"
                            alt={rtl ? "المسارات الاستشارية وهندسة الأنظمة في بنسل ستوديو" : "Pencil Studio Core Consultation Disciplines"}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 320px"
                          />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────────────────────────────────────────────────────────────
              REFERENCE SECTION 03 (SLIDE 3):
              "Надёжный партнёр для вашего проекта" -> "Reliable partner for your project"
              Top: Handshake/Shield Trust Icon
              4 Tall Arch-Topped Vertical Pillars with Circular Line-Art Illustration Badges:
              [Pillar 1: Dark - Warranty]
              [Pillar 2: Royal Blue - In-House Team]
              [Pillar 3: Dark - Contract SLA]
              [Pillar 4: Royal Blue - Tailored Pricing]
          ───────────────────────────────────────────────────────────────── */}
          <section data-section="pillars" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90">
            <div className="container-custom max-w-7xl">
              {/* Header with Handshake / Shield Icon matching Reference */}
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-200/70 pb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#2057FF]">
                      <span>{tx("03 // STRATEGIC PARTNERSHIP", "03 // الشراكة الاستراتيجية")}</span>
                    </div>

                    <h2 className={cn("mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", rtl ? "tracking-normal" : "tracking-tight")}>
                      {rtl ? (
                        <>
                          <span className="block">الشريك الاستراتيجي الموثوق،</span>
                          <span className="block font-light italic text-neutral-500">
                            لمشروعك وتطلعاتك الرقمية.
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="block">
                            Reliable strategic partner,
                          </span>
                          <span className="block font-light italic text-neutral-500">
                            for your ambitious project.
                          </span>
                        </>
                      )}
                    </h2>
                  </div>

                  {/* Handshake / Verified Shield Badge Icon matching Reference */}
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-current fill-none stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 4 Tall Arch-Topped Pillars with Large Concentric Circular Badges (Matching Reference) */}
              <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {/* ── PILLAR 1 (DARK): WARRANTY ACROSS ALL ASSETS ── */}
                <Reveal delay={0.1}>
                  <div className="h-full rounded-t-full rounded-b-[2rem] bg-[#141416] text-white p-5 sm:p-6 pb-8 sm:pb-9 flex flex-col justify-between min-h-[460px] sm:min-h-[480px] shadow-lg border border-neutral-800 transition-transform duration-300 hover:-translate-y-1">
                    {/* Concentric Full-Arch Circular Image Badge */}
                    <div className="relative w-full aspect-square rounded-full overflow-hidden bg-white shadow-md">
                      <Image
                        src="/supports/comprehensive-warranty.jpg"
                        alt={tx("Comprehensive warranty", "ضمان شامل")}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="mt-6 sm:mt-8 text-center px-1 sm:px-2">
                      <h4 className="text-base sm:text-lg font-black tracking-tight text-white leading-snug">
                        {tx("Comprehensive warranty on all delivered assets", "ضمان شامل لجميع الأعمال والبرمجيات")}
                      </h4>
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                        {tx(
                          "Verified QA sign-off and explicit guarantee against code defects.",
                          "اعتماد كامل للجودة وضمان رسمي لسلامة الشيفرة البرمجية."
                        )}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* ── PILLAR 2 (ROYAL BLUE): DEDICATED IN-HOUSE SPECIALISTS ── */}
                <Reveal delay={0.2}>
                  <div className="h-full rounded-t-full rounded-b-[2rem] bg-[#2057FF] text-white p-5 sm:p-6 pb-8 sm:pb-9 flex flex-col justify-between min-h-[460px] sm:min-h-[480px] shadow-xl shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-1">
                    {/* Concentric Full-Arch Circular Image Badge */}
                    <div className="relative w-full aspect-square rounded-full overflow-hidden bg-white shadow-md">
                      <Image
                        src="/supports/dedicated-in-house.jpg"
                        alt={tx("Dedicated in-house team", "فريق متخصص بالكامل")}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="mt-6 sm:mt-8 text-center px-1 sm:px-2">
                      <h4 className="text-base sm:text-lg font-black tracking-tight text-white leading-snug">
                        {tx("Dedicated in-house team & zero outsourcing", "فريق متخصص بالكامل وبدون أي إسناد خارجي")}
                      </h4>
                      <p className="mt-2 text-xs text-blue-100 leading-relaxed">
                        {tx(
                          "Direct access to lead software engineers and design partners in Cairo.",
                          "تواصل مباشر مع كبار المهندسين والمصممين في القاهرة."
                        )}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* ── PILLAR 3 (DARK): STRICT CONTRACT SLA & TIMELINES ── */}
                <Reveal delay={0.3}>
                  <div className="h-full rounded-t-full rounded-b-[2rem] bg-[#141416] text-white p-5 sm:p-6 pb-8 sm:pb-9 flex flex-col justify-between min-h-[460px] sm:min-h-[480px] shadow-lg border border-neutral-800 transition-transform duration-300 hover:-translate-y-1">
                    {/* Concentric Full-Arch Circular Image Badge */}
                    <div className="relative w-full aspect-square rounded-full overflow-hidden bg-white shadow-md">
                      <Image
                        src="/supports/strict-contract.jpg"
                        alt={tx("Strict contract SLA", "التزام صارم بالعقد")}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="mt-6 sm:mt-8 text-center px-1 sm:px-2">
                      <h4 className="text-base sm:text-lg font-black tracking-tight text-white leading-snug">
                        {tx("Strict contract SLA & guaranteed milestone dates", "التزام صارم بالعقد وتسليم دقيق في الموعد")}
                      </h4>
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                        {tx(
                          "Clear delivery schedules backed by commercial milestone agreements.",
                          "جداول تسليم مرحلية ملزمة مدعومة باتفاقيات مستوى خدمة قانونية."
                        )}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* ── PILLAR 4 (ROYAL BLUE): TAILORED ADVISORY & TRANSPARENCY ── */}
                <Reveal delay={0.4}>
                  <div className="h-full rounded-t-full rounded-b-[2rem] bg-[#2057FF] text-white p-5 sm:p-6 pb-8 sm:pb-9 flex flex-col justify-between min-h-[460px] sm:min-h-[480px] shadow-xl shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-1">
                    {/* Concentric Full-Arch Circular Image Badge */}
                    <div className="relative w-full aspect-square rounded-full overflow-hidden bg-white shadow-md">
                      <Image
                        src="/supports/tailored-advisory.jpg"
                        alt={tx("Tailored advisory", "نهج مخصص")}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="mt-6 sm:mt-8 text-center px-1 sm:px-2">
                      <h4 className="text-base sm:text-lg font-black tracking-tight text-white leading-snug">
                        {tx("Tailored advisory & transparent scope breakdowns", "نهج مخصص ودراسة واضحة لتفاصيل التكلفة")}
                      </h4>
                      <p className="mt-2 text-xs text-blue-100 leading-relaxed">
                        {tx(
                          "Clear estimates, no hidden clauses, and complete cost transparency.",
                          "تقديرات دقيقة دون أي شروط خفية وشفافية كاملة في احتساب التكاليف."
                        )}
                      </p>
                    </div>
                  </div>
                </Reveal>
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
                    "Need assistance outside strategic consultations? Access our client accounts, technical systems, or incident reporting gateways below.",
                    "هل تحتاج إلى دعم خارج نطاق الاستشارات التخطيطية؟ يمكنك الوصول مباشرة إلى إدارة حسابات العملاء، أو الدعم التقني، أو الإبلاغ عن الأعطال أدناه."
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
                          {callText(card.badge, rtl)}
                        </span>
                      </div>
                      <h4 className="mt-4 text-lg font-bold text-neutral-950 group-hover:text-[#2057ff] transition-colors">
                        {callText(card.title, rtl)}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                        {callText(card.desc, rtl)}
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

        {/* ─── SLIDE-IN MODAL FOR CONSULTATION WORKBENCH WIZARD ─── */}
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
                      <PhoneCall size={16} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-950">
                        {tx("Schedule a Strategic Callback", "طلب مكالمة أو استشارة مخصصة")}
                      </h3>
                      <p className="text-[11px] text-neutral-500">
                        {tx("Connect with lead engineers and partners in Cairo", "تواصل مباشر مع كبار المهندسين والشركاء في القاهرة")}
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
                        "All callback appointments are reviewed by technical and commercial leads within 24 hours.",
                        "تتم مراجعة مواعيد الاستشارات من قِبل المديرين الفنيين والتجاريين خلال 24 ساعة."
                      )}
                    </span>
                    <span className="font-bold font-mono">PRIORITY-CALLBACK</span>
                  </div>

                  <ConsultationRequest
                    rtl={rtl}
                    request={request}
                    onRequestChange={setRequest}
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
                    const isActive = item.href === "/support/callback";
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
