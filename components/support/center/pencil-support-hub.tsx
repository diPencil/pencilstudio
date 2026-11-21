"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  BadgeCheck,
  Check,
  CheckCheck,
  Clock,
  Code2,
  Compass,
  Flag,
  Headphones,
  HelpCircle,
  Layers,
  Mail,
  MessagesSquare,
  Paperclip,
  Phone,
  PhoneCall,
  Rocket,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { useLanguage } from "@/components/language-context";
import { PencilCareAccessibility } from "@/components/shared/ui/pencil-care-accessibility";
import {
  SUPPORT_PATHWAYS,
  type SupportText,
} from "@/lib/support/pencil-support-operations";
import { cn } from "@/lib/utils";
import { PencilButton } from "@/components/ui/pencil-button";

// ─── Authentic Pencil Studio Brand Icon SVG ─────────────────────────────────
function PencilOriginalIconSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 453 453"
      className={cn("pointer-events-none select-none shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path fill="#dd3126" d="M341.5,24.3c-25.9-9.6-52.8-16-81.1-16l-130.5.2c-66.3,0-117.8,56.1-120.9,121.3l.4,55.8c33.5-55.2,91.3-88.3,156.9-88l90,.7c48.3,1,92.5-11.5,134.3-35.2,0,0,2.5-1.7,6.1-4.1-15.2-14.9-33.8-26.8-55.1-34.7Z" />
      <path fill="#53ab47" d="M441.8,149.3c-.6-3.6-.7-4.4-1.4-7.9-6.5-32.3-21.7-60.6-43.9-82.3-3,2.8-4.1,4-4.1,4-31.8,30.5-76.5,42.3-120,48.7-36,3.7-70,1.9-106.3,2.7-70.2,1.6-132.6,42.5-157.4,107.4l.6,86.7c35.2-47.4,87.7-77.3,147.7-77.8,0,0,106.4,2.3,106.4,2.3,27,.6,55.2-5.2,80.3-14.8,13.3-5.1,26.3-11.1,38.3-18.8s19.6-14.4,29-22.1,22.2-17.3,30.7-28.1Z" />
      <path fill="#3467ae" d="M390.1,200.7c-37.7,27.7-80.4,35.7-125.1,41.6l-102.1,4.7c-72.6,2.8-136.6,53.8-152.7,125.1-5.3,23.4-.3,46.6-1,72.7,36.7-46.5,88.2-78.5,148.3-78.8l99.7-.5c35.7-.2,69.4-9.1,100.5-25.5,70.8-37.3,96.6-112.4,84.5-189.5-21.3,27.5-52.1,50.3-52.1,50.3Z" />
    </svg>
  );
}

// ─── Bilingual Helper ────────────────────────────────────────────────────────
const local = (value: SupportText, rtl: boolean) => (rtl ? value.ar : value.en);

// ─── Sub-Navigation Routes ───────────────────────────────────────────────────
const SUPPORT_SUB_NAV = [
  { href: "/support", en: "Overview", ar: "نظرة عامة", icon: Headphones },
  { href: "/support/customer", en: "Customer", ar: "دعم العملاء", icon: MessagesSquare },
  { href: "/support/technical", en: "Technical", ar: "الدعم التقني", icon: Wrench },
  { href: "/support/callback", en: "Callback", ar: "طلب مكالمة", icon: PhoneCall },
  { href: "/support/report", en: "Report Issue", ar: "إبلاغ عن عطل", icon: Flag },
] as const;

// ─── Pathway Icon Map ────────────────────────────────────────────────────────
const PATHWAY_ICONS = {
  customer: MessagesSquare,
  technical: Wrench,
  callback: PhoneCall,
  report: Flag,
};

// ─── Extended Pathway Guidance & Operational Context ─────────────────────────
interface PathwayExtendedMeta {
  number: string;
  tagEn: string;
  tagAr: string;
  pillEn: string;
  pillAr: string;
  accent: "blue" | "indigo" | "sky" | "rose";
  useWhenEn: string[];
  useWhenAr: string[];
  prepareEn: string;
  prepareAr: string;
  nextStepEn: string;
  nextStepAr: string;
  ctaEn: string;
  ctaAr: string;
}

const PATHWAY_EXTENDED: Record<string, PathwayExtendedMeta> = {
  customer: {
    number: "01",
    tagEn: "Partnership & Scope",
    tagAr: "الشراكة ونطاق العمل",
    pillEn: "Commercial & Evolution",
    pillAr: "التطوير والتعاقدات",
    accent: "blue",
    useWhenEn: [
      "Active project progress, feedback rounds, and milestone sign-offs",
      "Retainer hours allocation, scope enhancements, and contract renewals",
      "Recurring creative deliverables, branding assets, and marketing updates",
    ],
    useWhenAr: [
      "متابعة مسار المشروعات الجارية والمراجعات واعتمادات المراحل",
      "إدارة ساعات التعاقد المستمر وتعديل نطاق العمل وتجديد الاتفاقيات",
      "التسليمات التصميمية المتكررة وأصول الهوية وتحديثات المواد التسويقية",
    ],
    prepareEn: "Company or project name, current contract context, and the specific decision or deliverable needed.",
    prepareAr: "اسم الشركة أو المشروع، مرجع التعاقد الحالي، والقرار أو الاعتماد المطلوب بدقة.",
    nextStepEn: "Directs to our structured client coordination workspace to register your requirement.",
    nextStepAr: "ينقلك مباشرة إلى مكتب التنسيق والشراكات المخصص لعملاء الاستوديو لتسجيل طلبك.",
    ctaEn: "Continue to Customer Support",
    ctaAr: "الانتقال إلى دعم العملاء",
  },
  technical: {
    number: "02",
    tagEn: "Engineering & Systems",
    tagAr: "الهندسة والأنظمة",
    pillEn: "Code & Architecture",
    pillAr: "البرمجة والبنية التحتية",
    accent: "indigo",
    useWhenEn: [
      "Custom codebase architecture, backend logic, and framework questions",
      "Managed VPS hosting, domain configurations, DNS records, and SSL setups",
      "Third-party API connections, payment gateways, and scheduled tech updates",
    ],
    useWhenAr: [
      "استفسارات الشيفرة البرمجية المخصصة وتحديثات المستودعات والمعمارية التقنية",
      "إعدادات الاستضافة، خوادم VPS السحابية، النطاقات، وسجلات DNS وشهادات SSL",
      "تكاملات واجهات API وبوابات الدفع والتعديلات التقنية المخططة مسبقاً",
    ],
    prepareEn: "Target service URL, repository or environment context, and expected technical outcome.",
    prepareAr: "رابط النظام المعني، بيئة الاستضافة أو المستودع، والسلوك التقني المطلوب تحقيقه.",
    nextStepEn: "Directs to our technical triage workspace for engineering assessment and scoping.",
    nextStepAr: "ينقلك مباشرة إلى مسار الفرز الهندسي وتجهيز الطلبات التقنية المتخصصة.",
    ctaEn: "Continue to Technical Care",
    ctaAr: "الانتقال إلى الدعم التقني",
  },
  callback: {
    number: "03",
    tagEn: "Advisory & Strategy",
    tagAr: "الاستشارات والتخطيط",
    pillEn: "Direct Audio/Video",
    pillAr: "مكالمة صوتية أو مرئية",
    accent: "sky",
    useWhenEn: [
      "Scoping an ambitious new system, SaaS product, or cross-discipline build",
      "Interactive walkthrough of SuperFeliz AI capabilities and custom workflows",
      "Strategic alignment session with stakeholders before writing a formal brief",
    ],
    useWhenAr: [
      "تحديد نطاق نظام جديد طموح، منصة SaaS، أو مشروع يجمع تخصصات متعددة",
      "عرض توضيحي مباشر لمنظومة سوبر فيليز الذكية وفحص جدوى الأتمتة",
      "جلسة مواءمة استراتيجية مع أصحاب القرار قبل الالتزام بموجز عمل رسمي",
    ],
    prepareEn: "Core objective of the session, attending decision-makers, and key questions to resolve.",
    prepareAr: "الهدف الأساسي من الجلسة، الأشخاص المعنيون بالحضور، والنقاط المراد توضيحها.",
    nextStepEn: "Schedules a dedicated 1-on-1 advisory session with studio engineering leads.",
    nextStepAr: "يتيح لك اختيار موعد مباشر لجلسة استشارية متخصصة مع مسؤولي الاستوديو.",
    ctaEn: "Request an Advisory Callback",
    ctaAr: "حجز مكالمة استشارية",
  },
  report: {
    number: "04",
    tagEn: "Incident Triage",
    tagAr: "فرز الأعطال والمشكلات",
    pillEn: "Actionable Brief",
    pillAr: "بلاغ قابل للفحص",
    accent: "rose",
    useWhenEn: [
      "A live production service, website, or customer journey is experiencing failure",
      "Reproducible defects in checkout, forms, database syncing, or authentication",
      "Critical visual or functional regressions discovered following a deployment",
    ],
    useWhenAr: [
      "توقف أو خلل في خدمة منشورة بالفعل، موقع إلكتروني، أو مسار عملاء نشط",
      "أعطال برمجية متكررة في إتمام الطلبات، النماذج، أو مزامنة قواعد البيانات",
      "مشكلات بصرية أو وظيفية حرجة ظهرت بعد إطلاق تحديث أو نشر إصدار جديد",
    ],
    prepareEn: "Exact steps to reproduce, affected device or browser, timestamp, and sanitized screenshot.",
    prepareAr: "خطوات إعادة حدوث العطل بالتحديد، المتصفح أو الجهاز المتأثر، ووقت المشكلة مع لقطة شاشة منقحة.",
    nextStepEn: "Transfers directly to our structured defect capture form for rapid engineering isolation.",
    nextStepAr: "ينقلك مباشرة إلى استمارة حصر وتصنيف الأعطال للتدخل الهندسي وعزل الخلل فوراً.",
    ctaEn: "Open Incident Report Desk",
    ctaAr: "فتح استمارة الإبلاغ عن عطل",
  },
};

interface WhatsAppScenario {
  id: string;
  chipLabelEn: string;
  chipLabelAr: string;
  pathwayId: string;
  clientMessageEn: string;
  clientMessageAr: string;
  clientTime: string;
  studioReplyEn: string;
  studioReplyAr: string;
  studioTime: string;
  prefillMessageEn: string;
  prefillMessageAr: string;
}

const WHATSAPP_SCENARIOS: WhatsAppScenario[] = [
  {
    id: "existing_project",
    chipLabelEn: "Existing Project",
    chipLabelAr: "مشروع قائم",
    pathwayId: "customer",
    clientMessageEn: "Hello Pencil Studio, we'd like a quick status check on our ongoing project and roadmap deliverables.",
    clientMessageAr: "مرحباً بينسل ستوديو، نود متابعة سريعة لحالة مشروعنا الجاري وتسليمات خطة العمل.",
    clientTime: "10:42 AM",
    studioReplyEn: "Hello! Our operations desk is reviewing your account. Please share any specific milestone or task details here, and our team will follow up directly.",
    studioReplyAr: "أهلاً بك! يراجع مكتب العمليات حساب شركتك. شاركنا هنا أي تفاصيل محددة عن التسليمات وسنتابع معك مباشرة.",
    studioTime: "10:43 AM",
    prefillMessageEn: "Hello Pencil Studio, I have an inquiry regarding our ongoing project.",
    prefillMessageAr: "مرحباً بينسل ستوديو، لدي استفسار بخصوص مشروعنا القائم.",
  },
  {
    id: "technical_help",
    chipLabelEn: "Technical Help",
    chipLabelAr: "دعم تقني",
    pathwayId: "technical",
    clientMessageEn: "Hi team, we need engineering guidance on an API integration and platform hosting setting.",
    clientMessageAr: "مرحباً بكم، نحتاج استشارة هندسية حول تكامل واجهة البرمجة (API) وإعدادات استضافة المنصة.",
    clientTime: "11:15 AM",
    studioReplyEn: "Understood. Please send your staging URL, error log, or architecture question here. Our engineering desk in Cairo will review it.",
    studioReplyAr: "تم. يرجى تزويدنا برابط بيئة الاختبار أو سجل الخطأ هنا، وسيقوم فريق الهندسة بمراجعته.",
    studioTime: "11:16 AM",
    prefillMessageEn: "Hello Pencil Studio, I need technical assistance with our system.",
    prefillMessageAr: "مرحباً بينسل ستوديو، أحتاج مساعدة تقنية تخص نظامنا.",
  },
  {
    id: "request_callback",
    chipLabelEn: "Request Callback",
    chipLabelAr: "طلب مكالمة",
    pathwayId: "callback",
    clientMessageEn: "Good day, can we schedule a 15-minute advisory call with your team this week?",
    clientMessageAr: "مرحباً، هل يمكن ترتيب مكالمة استشارية مدتها 15 دقيقة مع فريقكم هذا الأسبوع؟",
    clientTime: "01:20 PM",
    studioReplyEn: "Certainly. Share your preferred time slots between Sunday and Thursday (10:00 AM - 7:00 PM Africa/Cairo), or use our Callback Gateway.",
    studioReplyAr: "بالتأكيد. شاركنا المواعيد المناسبة لك بين الأحد والخميس (10ص - 7م بتوقيت القاهرة)، أو استخدم بوابة طلب مكالمة.",
    studioTime: "01:21 PM",
    prefillMessageEn: "Hello Pencil Studio, I would like to schedule an advisory call.",
    prefillMessageAr: "مرحباً بينسل ستوديو، أود ترتيب مكالمة استشارية.",
  },
  {
    id: "report_issue",
    chipLabelEn: "Report an Issue",
    chipLabelAr: "إبلاغ عن عطل",
    pathwayId: "report",
    clientMessageEn: "Urgent: we noticed unexpected behavior on the checkout/live flow and need diagnostic help.",
    clientMessageAr: "عاجل: لاحظنا سلوكاً غير متوقع في مسار الدفع المباشر ونحتاج دعماً تشخيصياً.",
    clientTime: "03:05 PM",
    studioReplyEn: "Priority received. Please send screenshots, device details, and steps to reproduce. We will triage this with our on-duty engineers immediately.",
    studioReplyAr: "تم استلام الأولوية. أرسل لنا لقطات الشاشة وتفاصيل الجهاز وخطوات التكرار لمباشرة الفحص الهندسي فوراً.",
    studioTime: "03:06 PM",
    prefillMessageEn: "Hello Pencil Studio, I am reporting an issue on our live system.",
    prefillMessageAr: "مرحباً بينسل ستوديو، أبلغ عن مشكلة في نظامنا الحي.",
  },
];

interface WhatsAppServiceShortcut {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const WHATSAPP_SERVICE_SHORTCUTS: WhatsAppServiceShortcut[] = [
  {
    id: "customer",
    nameEn: "Customer Support",
    nameAr: "دعم العملاء",
    descEn: "Partnership, retainers & revisions",
    descAr: "شراكة وتعديلات وعقود مستمرة",
    href: "/support/customer",
    icon: MessagesSquare,
  },
  {
    id: "technical",
    nameEn: "Technical Care",
    nameAr: "الدعم الفني",
    descEn: "Code, platforms & architecture",
    descAr: "أنظمة وبرمجة وبنية سحابية",
    href: "/support/technical",
    icon: Wrench,
  },
  {
    id: "callback",
    nameEn: "Request Callback",
    nameAr: "طلب مكالمة",
    descEn: "15-min direct advisory call",
    descAr: "مكالمة استشارية مباشرة 15 دقيقة",
    href: "/support/callback",
    icon: PhoneCall,
  },
  {
    id: "report",
    nameEn: "Report an Issue",
    nameAr: "إبلاغ عن مشكلة",
    descEn: "Defects, outages & triage",
    descAr: "أعطال حرجة وفحص تشخيصي",
    href: "/support/report",
    icon: ShieldAlert,
  },
];

// ─── Diagnostic Path Finder Filter Definitions ──────────────────────────────
type FilterOption = "all" | "incident" | "account" | "advisory";

export function PencilSupportHub() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const tx = (en: string, ar: string) => (rtl ? ar : en);
  const Next = rtl ? ArrowLeft : ArrowRight;

  // ─── State Management ──────────────────────────────────────────────────────
  const [showFloatingNav, setShowFloatingNav] = React.useState(false);

  // ─── Floating Dock Autohide Controller ─────────────────────────────────────
  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          // Show dock after scrolling down 240px and not at the very bottom
          const isNearBottom =
            window.innerHeight + currentY >= document.body.offsetHeight - 200;
          setShowFloatingNav(currentY > 240 && !isNearBottom);
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
        data-pencil-care
        dir={rtl ? "rtl" : "ltr"}
        className="pencil-support-page relative min-h-screen overflow-x-clip bg-[#FBFBFB] text-neutral-900 pt-14 lg:pt-16 selection:bg-[#2057ff] selection:text-white"
      >
        {/* Ambient background dot grid & lights */}
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(#2057ff0c_1px,transparent_1px)] [background-size:24px_24px] opacity-75 -z-10" />
        <div className="pointer-events-none fixed -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#2057ff]/4 blur-[130px] -z-10" />
        <div className="pointer-events-none fixed -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#00d2ff]/4 blur-[130px] -z-10" />

        <PencilCareAccessibility />
        <Header solid light />

        <style>{`
          .pencil-support-page { width: 100%; overflow-x: clip; letter-spacing: 0; }
          .pencil-support-page .container-custom { width: 100%; min-width: 0; }
          .pencil-support-page .grid > * { min-width: 0; }
          .pencil-support-page h1, .pencil-support-page h2, .pencil-support-page h3, .pencil-support-page p { overflow-wrap: break-word; letter-spacing: 0; }
          .pencil-support-page:dir(rtl) h1, .pencil-support-page:dir(rtl) h2, .pencil-support-page:dir(rtl) h3 { line-height: 1.4; }
          .pencil-support-page main [id] { scroll-margin-top: 100px; }
          .pencil-support-page main button:focus-visible, .pencil-support-page main a:focus-visible { outline: 3px solid #2057ff; outline-offset: 3px; }
          .pencil-support-page [role=tab]:focus-visible { outline-offset: -3px; }
        `}</style>

        <main className="relative z-10 bg-[#FBFBFB]">
          {/* ───────────────────────────────────────────────────────────────────
              SECTION 01: HERO SECTION - LAYERED COMMAND CENTER (MATCHING /help)
          ─────────────────────────────────────────────────────────────────── */}
          <section className="relative px-3 sm:px-6 lg:px-8 pt-4 pb-20 md:pb-28">
            {/* Contained Royal Blue Rounded Hero Container */}
            <div className="relative mx-auto max-w-[1536px] overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#1C4FD8] via-[#1644C9] to-[#0F35A6] px-6 pt-16 pb-32 text-center text-white shadow-2xl shadow-blue-950/20 sm:px-12 md:pt-20 md:pb-40">
              {/* Ambient Background Grid and Radial Glows */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
              <div className="pointer-events-none absolute -top-40 start-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-32 end-10 h-80 w-80 rounded-full bg-[#00D2FF]/20 blur-[90px]" />

              <div className="relative z-10 mx-auto max-w-4xl">
                {/* Capsule Pill Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md shadow-inner">
                  <span className="h-2 w-2 rounded-full bg-[#61d095] animate-pulse" />
                  <span className="font-mono text-[11px] text-white/70">PENCIL SUPPORT // HUB</span>
                  <span className="text-white/30">•</span>
                  <span className="font-bold">
                    {tx("Operational Support & Live Systems", "الرعاية والدعم التشغيلي للأنظمة")}
                  </span>
                </div>

                {/* Bold Editorial Display Typography with Pencil Studio Word Contrast */}
                <h1 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  {rtl ? (
                    <>
                      دعم للأنظمة الحية،{" "}
                      <span className="font-light text-blue-200">
                        وللفرق التي تديرها
                      </span>
                      <span className="text-[#61d095]">.</span>
                    </>
                  ) : (
                    <>
                      Support for Systems,{" "}
                      <span className="italic font-light text-blue-200">
                        and Teams Behind Them
                      </span>
                      <span className="text-[#61d095]">.</span>
                    </>
                  )}
                </h1>

                {/* Concise Supporting Copy - Exact /help style & size */}
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
                  {rtl
                    ? "الهوية التي يستخدمها فريقك، والأنظمة الحية التي تعتمد عليها شركتك. تواصل بينسل العمل معكم في الإنتاج والصيانة والبنية التحتية والتطوير المستمر."
                    : "The brand your team uses, and the systems your company runs on. Pencil stays involved through production, maintenance, and deliberate evolution."}
                </p>

                {/* Dual Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                  <a
                    href="#support-pathways"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#1242D6] shadow-lg shadow-black/10 transition hover:bg-neutral-100"
                  >
                    <span>{tx("Choose a support path", "اختر مسار الدعم المناسب")}</span>
                    <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
                  </a>
                  <a
                    href="#direct-channels"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    <Headphones size={16} />
                    <span>{tx("Direct Channels", "قنوات التواصل المباشر")}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ─── THE FLOATING COMMAND CENTER PREVIEW CARD (BREACHING HERO BOUNDARY) ─── */}
            <div className="relative z-20 mx-auto -mt-20 md:-mt-28 max-w-5xl px-3 sm:px-6">
              <div className="rounded-3xl border border-neutral-200/90 bg-white p-6 md:p-8 shadow-2xl shadow-neutral-900/15">
                {/* Top Telemetry Metric Cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 border-b border-neutral-100 pb-6">
                  <div className="flex items-center gap-3.5 rounded-2xl bg-neutral-50 p-4 border border-neutral-100">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#2057FF]">
                      <Layers size={18} />
                    </div>
                    <div>
                      <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                        {tx("Support Coverage", "نطاق التغطية")}
                      </span>
                      <span className="text-sm font-black text-neutral-900">
                        {tx("4 Dedicated Gateways", "4 مسارات عمل مخصصة")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 rounded-2xl bg-neutral-50 p-4 border border-neutral-100">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2057ff]">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                        {tx("Live Production Hub", "فريق العمليات الحية")}
                      </span>
                      <span className="text-sm font-black text-neutral-900">
                        {tx("Cairo Engineering Desk", "فريق القاهرة الهندسي")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 rounded-2xl bg-neutral-50 p-4 border border-neutral-100">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                        {tx("Operating Hours", "ساعات الدعم المباشر")}
                      </span>
                      <span className="text-sm font-black text-neutral-900">
                        {tx("Sun to Thu 10am to 7pm", "الأحد إلى الخميس 10ص إلى 7م")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4 Interactive Gateway Fast-Routing Cards inside Command Center */}
                <div className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {tx("Quick Gateway Routing", "الانتقال السريع لبوابة الدعم")}
                    </span>
                    <span className="text-xs font-bold text-[#2057ff]">
                      {tx("Select your current scenario", "حدد الحالة التي تطابق طلبك")}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <Link
                      href="/support/customer"
                      className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-4 transition-all hover:border-[#2057ff] hover:bg-white hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2057ff]">
                            <MessagesSquare size={16} />
                          </span>
                          <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-[#2057ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <h4 className="mt-3 text-sm font-bold text-neutral-950 group-hover:text-[#2057ff] transition-colors">
                          {tx("Customer Support", "دعم العملاء والشراكات")}
                        </h4>
                        <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                          {tx("Ongoing creative production, marketing assets, and retainer management.", "إنتاج إبداعي دوري، حملات تسويقية، وإدارة التعاقدات المستمرة.")}
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/support/technical"
                      className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-4 transition-all hover:border-[#2057ff] hover:bg-white hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2057ff]">
                            <Wrench size={16} />
                          </span>
                          <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-[#2057ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <h4 className="mt-3 text-sm font-bold text-neutral-950 group-hover:text-[#2057ff] transition-colors">
                          {tx("Technical Care", "الدعم التقني والهندسي")}
                        </h4>
                        <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                          {tx("Code, databases, server infrastructure, cloud hosting, and integrations.", "البرمجيات، قواعد البيانات، السحابة، الاستضافة، وتكامل الأنظمة.")}
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/support/callback"
                      className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-4 transition-all hover:border-[#2057ff] hover:bg-white hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2057ff]">
                            <PhoneCall size={16} />
                          </span>
                          <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-[#2057ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <h4 className="mt-3 text-sm font-bold text-neutral-950 group-hover:text-[#2057ff] transition-colors">
                          {tx("Request Callback", "طلب مكالمة استشارية")}
                        </h4>
                        <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                          {tx("Direct discussion for new systems, project expansion, or advisory calls.", "حوار مباشر لتوسعة المشروعات، الأنظمة الجديدة، أو الجلسات الاستشارية.")}
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/support/report"
                      className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-4 transition-all hover:border-[#2057ff] hover:bg-white hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600">
                            <Flag size={16} />
                          </span>
                          <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-[#2057ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <h4 className="mt-3 text-sm font-bold text-neutral-950 group-hover:text-[#2057ff] transition-colors">
                          {tx("Report an Issue", "إبلاغ عن عطل")}
                        </h4>
                        <p className="mt-1 text-xs text-neutral-500 line-clamp-2">
                          {tx("Live incident isolation, bug diagnostics, evidence capture, and rapid triage.", "تشخيص الأعطال الحية، جمع الأدلة الفنية، والمعالجة السريعة.")}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ───────────────────────────────────────────────────────────────────
              SECTION 02: MODULAR PRESENTATION BENTO (/help STYLE APPLIED TO /support CONTENT)
              2x2 Presentation Cards with Concise Operations Data & Brand Standard
          ─────────────────────────────────────────────────────────────────── */}
          <section id="support-pathways" className="container-custom py-12 sm:py-16 md:py-20">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6 mb-8 sm:mb-10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF] animate-pulse" />
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#2057FF]">
                      02 // {tx("OPERATIONAL SUITE", "منظومة الرعاية والدعم المستمر")}
                    </p>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                    {rtl ? (
                      <>
                        منظومة تشغيل متكاملة.{" "}
                        <span className="font-light italic text-neutral-500">
                          بوضوح وسرعة ودون تعقيد.
                        </span>
                      </>
                    ) : (
                      <>
                        Complete Operational Care.{" "}
                        <span className="font-light italic text-neutral-500">
                          Structured for velocity.
                        </span>
                      </>
                    )}
                  </h2>
                </div>
                <p className="max-w-md text-xs sm:text-sm leading-relaxed text-neutral-600">
                  {tx(
                    "Condensed pathways, rapid incident handling, and dedicated engineering desks - designed to keep your business running smoothly.",
                    "مسارات دعم محددة، استجابة سريعة للأعطال، وفرق هندسية متخصصة تضمن استقرار ونمو مشاريعك دون انقطاع."
                  )}
                </p>
              </div>
            </Reveal>

            {/* 2x2 Bento Presentation Grid (/help Editorial Layout with Live /support Content) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

              {/* ── CARD 01 (Top-Left): WHAT YOU GET WITH PENCIL CARE ── */}
              <Reveal delay={0.05} className="h-full flex flex-col">
                <div className="h-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2057FF]">
                          CARD 01 // {tx("WHAT YOU GET", "المخرجات والخدمات")}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight mt-1">
                          {rtl ? (
                            <>
                              ما الذي يضمنه لك
                              <br />
                              دعم بينسل؟
                            </>
                          ) : (
                            <>
                              What You Get with
                              <br />
                              Pencil Care
                            </>
                          )}
                        </h3>
                      </div>
                      {/* Brand mark */}
                      <div className="flex flex-col items-center shrink-0 pt-0.5 opacity-90">
                        <PencilOriginalIconSvg className="w-5 h-5 mb-0.5" />
                        <span className="font-mono text-[9px] font-black tracking-widest text-neutral-800 uppercase">
                          PENCIL
                        </span>
                      </div>
                    </div>

                    {/* Main Grid: Left 2x2 Gateway Cards + Right Portrait Column */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch flex-1 h-full">

                      {/* Left 2x2 Grid (8 cols on desktop) */}
                      <div className="sm:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">

                        {/* Gateway 1: Customer Support (Red Badge) */}
                        <Link
                          href="/support/customer"
                          className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-red-200 border border-transparent p-3.5 sm:p-4 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-950 group-hover:text-red-600 transition-colors leading-snug">
                              {tx("Customer Support", "دعم العملاء والشراكات")}
                            </h4>
                            <span className="h-6 w-6 rounded-full bg-[#DD3126] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                              <MessagesSquare size={12} strokeWidth={2.4} />
                            </span>
                          </div>
                          <p className="mt-2.5 text-[11px] text-neutral-500 leading-relaxed">
                            {tx(
                              "Milestone sign-offs, retainers, and ongoing creative delivery.",
                              "إدارة العقود والتسليمات الإبداعية والمراجعات الدورية."
                            )}
                          </p>
                        </Link>

                        {/* Gateway 2: Technical Care (Dark Badge) */}
                        <Link
                          href="/support/technical"
                          className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-blue-200 border border-transparent p-3.5 sm:p-4 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-950 group-hover:text-[#2057FF] transition-colors leading-snug">
                              {tx("Technical Care", "الدعم التقني والهندسي")}
                            </h4>
                            <span className="h-6 w-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                              <Wrench size={12} strokeWidth={2.4} />
                            </span>
                          </div>
                          <p className="mt-2.5 text-[11px] text-neutral-500 leading-relaxed">
                            {tx(
                              "Code, hosting, server infrastructure, and cloud health.",
                              "البرمجيات، الاستضافة، وقواعد البيانات، والسحابة."
                            )}
                          </p>
                        </Link>

                        {/* Gateway 3: Request Callback (Green Badge) */}
                        <Link
                          href="/support/callback"
                          className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-emerald-200 border border-transparent p-3.5 sm:p-4 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-950 group-hover:text-emerald-700 transition-colors leading-snug">
                              {tx("Request Callback", "طلب مكالمة استشارية")}
                            </h4>
                            <span className="h-6 w-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform font-bold">
                              <PhoneCall size={12} strokeWidth={2.4} />
                            </span>
                          </div>
                          <p className="mt-2.5 text-[11px] text-neutral-500 leading-relaxed">
                            {tx(
                              "15-min direct architecture call to resolve project scope.",
                              "مكالمة استشارية 15 دقيقة مع كبار المهندسين لتحديد النطاق."
                            )}
                          </p>
                        </Link>

                        {/* Gateway 4: Report an Issue (Blue Badge) */}
                        <Link
                          href="/support/report"
                          className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-blue-200 border border-transparent p-3.5 sm:p-4 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-950 group-hover:text-[#2057FF] transition-colors leading-snug">
                              {tx("Report an Issue", "إبلاغ عن عطل طارئ")}
                            </h4>
                            <span className="h-6 w-6 rounded-full bg-[#2057FF] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                              <Flag size={12} strokeWidth={2.4} />
                            </span>
                          </div>
                          <p className="mt-2.5 text-[11px] text-neutral-500 leading-relaxed">
                            {tx(
                              "Critical triage, bug isolation, and live system diagnostics.",
                              "تشخيص فوري للأعطال الحية، جمع الأدلة وعزل الأسباب."
                            )}
                          </p>
                        </Link>

                      </div>

                      {/* Right Visual Column (4 cols on desktop): Cairo Engineering Hub */}
                      <div className="sm:col-span-4 rounded-2xl sm:rounded-3xl bg-[#2057FF] relative overflow-hidden flex items-end justify-center min-h-[220px] sm:min-h-full shadow-2xs group">
                        <Image
                          src="/supports/live-operations-desk.jpg"
                          alt={tx("Cairo Engineering Desk", "فريق الدعم الهندسي - القاهرة")}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 240px"
                          priority
                        />
                        <div className="absolute bottom-3 start-3 end-3 z-10">
                          <div className="rounded-xl border border-white/20 bg-neutral-950/85 backdrop-blur-md p-2.5 text-white shadow-xl">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-300">
                                {tx("Live Operations Desk", "مكتب العمليات // مباشر")}
                              </span>
                            </div>
                            <p className="text-xs font-bold leading-tight text-white">
                              {tx("Cairo Engineering Hub", "فريق القاهرة الهندسي")}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Footer Strip */}
                  <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500 shrink-0">
                    <span>{tx("Response within working hours", "استجابة فورية خلال ساعات العمل")}</span>
                    <span className="font-mono font-bold text-neutral-900">Sun - Thu // 10am - 7pm</span>
                  </div>
                </div>
              </Reveal>

              {/* ── CARD 02 (Top-Right): WHY ONGOING CARE MATTERS & SLAS ── */}
              <Reveal delay={0.1} className="h-full flex flex-col">
                <div className="h-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex-1 flex flex-col">
                    {/* Top Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2057FF]">
                          CARD 02 // {tx("RELIABILITY", "القيمة التشغيلية")}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight mt-1">
                          {tx("Why Ongoing Care", "لماذا تحتاج الأنظمة الحية")}
                        </h3>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2057FF] leading-tight">
                          {tx("Matters Most?", "لرعاية مستمرة؟")}
                        </h3>
                      </div>

                      <div className="flex flex-col items-center shrink-0 pt-0.5">
                        <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono font-bold text-[#2057FF] tracking-wider uppercase">
                          15 MIN SLA
                        </span>
                      </div>
                    </div>

                    {/* Main Grid: Left Royal Blue Block + Right Stats & Action Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch flex-1 h-full">

                      {/* Left Flagship Pencil Blue Container */}
                      <div className="sm:col-span-6 rounded-3xl bg-[#2057FF] text-white p-5 sm:p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden">
                        <div className="pointer-events-none absolute -bottom-10 -end-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />

                        {/* Title with Word Contrast */}
                        <div>
                          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-[1.25]">
                            {rtl ? (
                              <>
                                استقرار الأعمال
                                <br />
                                يبدأ من الرعاية{" "}
                                <span className="font-light text-blue-200">
                                  الاستباقية
                                </span>
                                <span className="text-white">.</span>
                              </>
                            ) : (
                              <>
                                Continuous Care
                                <br />
                                Protects Business{" "}
                                <span className="italic font-light text-blue-200">
                                  Continuity
                                </span>
                                <span className="text-white">.</span>
                              </>
                            )}
                          </h4>
                        </div>

                        {/* Paragraph from original /support content */}
                        <p className="mt-4 text-xs sm:text-[13px] font-medium text-blue-100/90 leading-relaxed">
                          {tx(
                            "Because business stability depends on proactive monitoring and infrastructure updates before outages hit.",
                            "لأن استقرار الأعمال يبدأ من الحماية الاستباقية للبرمجيات وتحديث البنية التحتية قبل وقوع أي انقطاع."
                          )}
                        </p>
                      </div>

                      {/* Right Staggered Column (15 min, 99.9% and Direct Action Bar) */}
                      <div className="sm:col-span-6 flex flex-col justify-between gap-2.5 h-full">

                        {/* Row 1: Circle 15 min + Card */}
                        <div className="flex items-center gap-2.5 flex-1">
                          <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                            <span className="text-base sm:text-lg font-black text-[#2057FF]">
                              15m
                            </span>
                          </div>
                          <div className="rounded-2xl bg-neutral-100/80 p-3 sm:p-3.5 flex-1 flex flex-col justify-center h-full">
                            <p className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-snug">
                              {tx(
                                "Average emergency triage and initial diagnosis time.",
                                "متوسط الاستجابة والتشخيص الأولي للحالات الطارئة."
                              )}
                            </p>
                          </div>
                        </div>

                        {/* Row 2: Card + Circle 99.9% */}
                        <div className="flex items-center gap-2.5 flex-1">
                          <div className="rounded-2xl bg-neutral-100/80 p-3 sm:p-3.5 flex-1 flex flex-col justify-center h-full">
                            <p className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-snug">
                              {tx(
                                "Managed platform uptime SLA across live web and cloud platforms.",
                                "نسبة الجاهزية واستقرار المنصات البرمجية والسحابية."
                              )}
                            </p>
                          </div>
                          <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-emerald-50/80 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                            <span className="text-base sm:text-lg font-black text-[#16A34A]">
                              99.9%
                            </span>
                          </div>
                        </div>

                        {/* Row 3: Action Bar in Pencil Dark Slate + PencilButton */}
                        <div className="rounded-2xl bg-neutral-950 text-white p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-xs shrink-0 border border-neutral-900">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                            <p className="text-xs sm:text-[13px] font-medium text-neutral-200 leading-snug truncate">
                              {tx("Direct Senior Engineers", "استجابة هندسية مباشرة")}
                            </p>
                          </div>
                          <PencilButton
                            href="https://wa.me/201003778273"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="sm"
                            showPencilIcon
                            hoverLabel={rtl ? "واتساب ←" : "WhatsApp →"}
                            className="shrink-0 font-bold"
                          >
                            {rtl ? "تواصل فوري" : "Instant Chat"}
                          </PencilButton>
                        </div>

                      </div>

                    </div>
                  </div>

                  {/* Footer Strip */}
                  <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500 shrink-0">
                    <span>{tx("Dedicated account managers & engineers", "مهندسون متخصصون دون وسطاء")}</span>
                    <span className="font-bold text-[#2057FF]">{tx("Zero outsourcing", "تنفيذ داخلي 100%")}</span>
                  </div>
                </div>
              </Reveal>

              {/* ── CARD 03 (Bottom-Left): OPERATING CADENCE / كيف تُدار طلبات الدعم ── */}
              <Reveal delay={0.15} className="h-full flex flex-col">
                <div className="h-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2057FF]">
                          CARD 03 // {tx("OPERATING CADENCE", "آلية العمل والتنفيذ")}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight mt-1">
                          {tx("How Does Support", "كيف تُدار طلبات")}
                        </h3>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2057FF] leading-tight">
                          {tx("Run & Resolve?", "وحالات الدعم؟")}
                        </h3>
                      </div>

                      <div className="flex flex-col items-center shrink-0 pt-0.5">
                        <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono font-bold text-[#2057FF] tracking-wider uppercase">
                          {tx("90% <24H", "٩٠٪ خلال ٢٤س")}
                        </span>
                      </div>
                    </div>

                    {/* Main Grid: Left Dark Slate Container + Right Blue Framed Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch flex-1 h-full">

                      {/* Left Dark Slate Container with 3 Stepped Cadence Cards */}
                      <div className="sm:col-span-7 rounded-3xl bg-neutral-950 text-white p-5 sm:p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden border border-neutral-900">
                        <div className="pointer-events-none absolute -bottom-10 -start-10 h-32 w-32 rounded-full bg-[#2057FF]/15 blur-xl" />

                        {/* Top Header */}
                        <div>
                          <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
                            {rtl ? (
                              <>
                                مسار تشغيلي من ثلاث مراحل{" "}
                                <span className="font-light text-neutral-400">
                                  لحسم المشكلات
                                </span>
                                <span className="text-[#2057FF]">.</span>
                              </>
                            ) : (
                              <>
                                3-Stage Cadence{" "}
                                <span className="italic font-light text-neutral-400">
                                  for Rapid Resolution
                                </span>
                                <span className="text-[#2057FF]">.</span>
                              </>
                            )}
                          </h4>
                          <p className="mt-2 text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-medium">
                            {rtl
                              ? "منهجية دقيقة تضمن عدم المساس بالبيئة الحية قبل التحقق الكامل."
                              : "Structured engineering workflow isolating regressions with staging safety."}
                          </p>
                        </div>

                        {/* 3 White Step Cards from original /support content */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-5">

                          {/* Step 1: Rapid Triage */}
                          <div className="rounded-2xl bg-white p-2.5 sm:p-3 text-neutral-900 flex flex-col justify-between min-h-[110px] shadow-2xs">
                            <div>
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className="h-4 w-4 rounded-md bg-[#2057FF] text-white flex items-center justify-center font-mono text-[9px] font-bold">01</span>
                                <h5 className="text-[11px] sm:text-xs font-black text-neutral-950 leading-tight">
                                  {tx("Rapid Triage", "تشخيص فوري")}
                                </h5>
                              </div>
                              <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-snug">
                                {tx("Isolate code & bottlenecks.", "عزل الأعطال دون تخمين.")}
                              </p>
                            </div>
                            <span className="h-5 w-5 rounded-full bg-blue-50 text-[#2057FF] flex items-center justify-center self-end mt-2 shadow-2xs">
                              <Search size={10} />
                            </span>
                          </div>

                          {/* Step 2: Staging Patch */}
                          <div className="rounded-2xl bg-white p-2.5 sm:p-3 text-neutral-900 flex flex-col justify-between min-h-[110px] shadow-2xs">
                            <div>
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className="h-4 w-4 rounded-md bg-[#16A34A] text-white flex items-center justify-center font-mono text-[9px] font-bold">02</span>
                                <h5 className="text-[11px] sm:text-xs font-black text-neutral-950 leading-tight">
                                  {tx("Staging Patch", "معالجة واختبار")}
                                </h5>
                              </div>
                              <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-snug">
                                {tx("Verified in staging first.", "اختبار آمن في المعاينة.")}
                              </p>
                            </div>
                            <span className="h-5 w-5 rounded-full bg-emerald-50 text-[#16A34A] flex items-center justify-center self-end mt-2 font-bold shadow-2xs">
                              <Wrench size={10} />
                            </span>
                          </div>

                          {/* Step 3: Live Deployment */}
                          <div className="rounded-2xl bg-white p-2.5 sm:p-3 text-neutral-900 flex flex-col justify-between min-h-[110px] shadow-2xs">
                            <div>
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className="h-4 w-4 rounded-md bg-[#DD3126] text-white flex items-center justify-center font-mono text-[9px] font-bold">03</span>
                                <h5 className="text-[11px] sm:text-xs font-black text-neutral-950 leading-tight">
                                  {tx("Live Deploy", "نشر حي آمن")}
                                </h5>
                              </div>
                              <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-snug">
                                {tx("Rollback ready & logged.", "نشر وتوثيق كامل.")}
                              </p>
                            </div>
                            <span className="h-5 w-5 rounded-full bg-red-50 text-[#DD3126] flex items-center justify-center self-end mt-2 shadow-2xs font-bold">
                              <Clock size={10} />
                            </span>
                          </div>

                        </div>
                      </div>

                      {/* Right Blue Framed Container */}
                      <div className="sm:col-span-5 rounded-3xl bg-[#2057FF] p-3 sm:p-3.5 flex flex-col justify-between gap-2.5 shadow-sm h-full">

                        {/* Top White Card: 90% SLA */}
                        <div className="rounded-2xl bg-white p-4 sm:p-4.5 flex flex-col justify-between shadow-2xs flex-1">
                          <div>
                            <span className="text-xl sm:text-2xl font-black text-[#2057FF]">
                              90%
                            </span>
                            <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-900 leading-tight mt-0.5">
                              {tx("Closed within 24 hours", "إغلاق ومعالجة خلال ٢٤ ساعة")}
                            </h4>
                            <p className="mt-1.5 text-[10px] sm:text-[11px] text-neutral-500 leading-relaxed">
                              {tx(
                                "Live incident isolation and rapid patch deployment without production delay.",
                                "تشخيص فوري للأعطال ونشر آمن للتحديثات دون تعطيل الأعمال."
                              )}
                            </p>
                          </div>
                          <span className="h-6 w-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center self-end mt-2 shadow-2xs font-bold">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </div>

                        {/* Bottom 2 Stacked Horizontal Cards */}
                        <div className="space-y-2 shrink-0">
                          <Link
                            href="/support/callback"
                            className="group rounded-2xl bg-white p-3 sm:p-3.5 flex items-center justify-between gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                          >
                            <span className="text-xs font-bold text-neutral-900 group-hover:text-[#2057FF] transition-colors leading-tight">
                              {tx("Rapid Root Cause Isolation", "عزل فوري للأسباب الجذرية")}
                            </span>
                            <span className="h-6 w-6 rounded-full bg-blue-50 text-[#2057FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                              <Search size={12} />
                            </span>
                          </Link>

                          <Link
                            href="/support/technical"
                            className="group rounded-2xl bg-white p-3 sm:p-3.5 flex items-center justify-between gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                          >
                            <span className="text-xs font-bold text-neutral-900 group-hover:text-[#2057FF] transition-colors leading-tight">
                              {tx("Full Changelog & Sign-off", "توثيق شامل وسجل كامل للتغييرات")}
                            </span>
                            <span className="h-6 w-6 rounded-full bg-emerald-50 text-[#16A34A] flex items-center justify-center shrink-0 font-bold group-hover:scale-110 transition-transform">
                              <ShieldCheck size={12} />
                            </span>
                          </Link>
                        </div>

                      </div>

                    </div>
                  </div>

                  {/* Bottom Footer Strip */}
                  <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500 shrink-0">
                    <span>{tx("Full changelog & rollback safety", "توثيق شامل وسجل كامل للتغييرات")}</span>
                    <span className="font-mono font-bold text-neutral-900">Zero Downtime</span>
                  </div>
                </div>
              </Reveal>

              {/* ── CARD 04 (Bottom-Right): COVERED SYSTEMS & DOMAINS ── */}
              <Reveal delay={0.2} className="h-full flex flex-col">
                <div className="h-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2057FF]">
                          CARD 04 // {tx("COVERAGE", "نطاق التغطية")}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight mt-1">
                          {tx("What Systems Do We", "الأنظمة التي نتولى")}
                        </h3>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2057FF] leading-tight">
                          {tx("Maintain & Safeguard?", "إدارتها وحمايتها؟")}
                        </h3>
                      </div>

                      <div className="flex flex-col items-center shrink-0 pt-0.5">
                        <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono font-bold text-[#2057FF] tracking-wider uppercase">
                          {tx("FULL SCOPE", "تغطية شاملة")}
                        </span>
                      </div>
                    </div>

                    {/* Main Grid: Left Systems Visual Block + Right 4 Systems Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 items-stretch flex-1 h-full">

                      {/* Left Systems Visual Block */}
                      <div className="sm:col-span-5 rounded-2xl sm:rounded-3xl relative overflow-hidden bg-neutral-900 text-white p-3 sm:p-4 flex flex-col justify-end min-h-[220px] sm:min-h-full shadow-sm group">
                        <Image
                          src="/supports/end-to-end.jpg"
                          alt={tx("End-to-End Operational Defense", "حماية وإدارة برمجية متكاملة")}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 240px"
                          priority
                        />
                        <div className="relative z-10">
                          <div className="rounded-xl border border-white/20 bg-neutral-950/85 backdrop-blur-md p-3 text-white shadow-xl">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold text-white mb-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {tx("Production Grade", "معايير الإنتاج الحي")}
                            </span>
                            <h4 className="text-sm sm:text-base font-extrabold leading-snug text-white">
                              {tx("End-to-End Operational Defense", "حماية وإدارة برمجية متكاملة")}
                            </h4>
                            <p className="mt-0.5 text-[10px] sm:text-[11px] text-neutral-300 leading-relaxed">
                              {tx("From cloud infrastructure to daily brand releases.", "من بنية السحابة وحتى التحديثات اليومية للهوية.")}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right 4 Covered Systems Cards from original /support content */}
                      <div className="sm:col-span-7 flex flex-col justify-between gap-2.5 h-full">

                        {/* System 1: Web Platforms & Next.js (Blue Badge) */}
                        <div className="rounded-2xl bg-neutral-100/80 p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-2xs flex-1">
                          <div className="min-w-0">
                            <h5 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug truncate">
                              {tx("Web Platforms & Next.js", "المواقع والمنصات وتطبيقات Next.js")}
                            </h5>
                            <p className="text-[10px] text-neutral-500 mt-0.5 truncate">
                              {tx("Core Web Vitals, headless APIs & CMS", "السرعة، الـ SEO، وبوابات الدفع")}
                            </p>
                          </div>
                          <span className="h-6 w-6 rounded-full bg-[#2057FF] text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
                            <Code2 size={12} />
                          </span>
                        </div>

                        {/* System 2: Brand Identity & Design Sprints (Green Badge) */}
                        <div className="rounded-2xl bg-neutral-100/80 p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-2xs flex-1">
                          <div className="min-w-0">
                            <h5 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug truncate">
                              {tx("Brand Identity & Design Sprints", "الهوية الرقمية والأنظمة البصرية")}
                            </h5>
                            <p className="text-[10px] text-neutral-500 mt-0.5 truncate">
                              {tx("Design systems, tokens & collateral", "تحديث الأدلة الإرشادية والتصاميم الدورية")}
                            </p>
                          </div>
                          <span className="h-6 w-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
                            <Layers size={12} />
                          </span>
                        </div>

                        {/* System 3: SuperFeliz AI & Automations (Official SuperFeliz Brand Icon) */}
                        <div className="rounded-2xl bg-neutral-100/80 p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-2xs flex-1">
                          <div className="min-w-0">
                            <h5 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug truncate">
                              {tx("SuperFeliz AI & Automations", "وكلاء وحلول الذكاء الاصطناعي")}
                            </h5>
                            <p className="text-[10px] text-neutral-500 mt-0.5 truncate">
                              {tx("LLM agents, vector retrieval & workflows", "أتمتة الأعمال وربط النماذج الذكية")}
                            </p>
                          </div>
                          <span className="h-6 w-6 rounded-full bg-white border border-blue-200/90 shadow-2xs flex items-center justify-center shrink-0 p-1">
                            <Image
                              src="/macosdock/superfeliz.svg"
                              alt="SuperFeliz"
                              width={14}
                              height={14}
                              className="object-contain w-3.5 h-3.5"
                            />
                          </span>
                        </div>

                        {/* System 4: Cloud, Hosting & DevSecOps (Red Badge) */}
                        <div className="rounded-2xl bg-neutral-100/80 p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-2xs flex-1">
                          <div className="min-w-0">
                            <h5 className="text-xs sm:text-[13px] font-bold text-neutral-900 leading-snug truncate">
                              {tx("Cloud, Hosting & DevSecOps", "السحابة، الاستضافة، وقواعد البيانات")}
                            </h5>
                            <p className="text-[10px] text-neutral-500 mt-0.5 truncate">
                              {tx("Vercel, AWS, Cloudflare & Postgres", "شهادات الأمان، الحماية، والنسخ الاحتياطي")}
                            </p>
                          </div>
                          <span className="h-6 w-6 rounded-full bg-[#DD3126] text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
                            <ShieldAlert size={12} />
                          </span>
                        </div>

                      </div>

                    </div>
                  </div>

                  {/* Footer Strip */}
                  <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500 shrink-0">
                    <span>{tx("Full-stack creative & engineering team", "تغطية شاملة لكل طبقات المشروع")}</span>
                    <span className="font-bold text-neutral-900">Pencil Ecosystem</span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* ── SECTION 03: CLOSING PRESENTATION SLIDE (/support CONTENT IN /help EDITORIAL FRAME) ── */}
            <div className="mt-10 sm:mt-14">
              <Reveal delay={0.25} className="w-full">
                {/* Slide Outer Presentation Container (Full container-custom width) */}
                <div className="w-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

                    {/* Left Stately Container (Flagship Pencil Royal Blue with Ambient Glow - NO ORANGE) */}
                    <div className="lg:col-span-5 rounded-3xl sm:rounded-[28px] bg-[#2057FF] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] shadow-sm relative overflow-hidden">
                      <div className="pointer-events-none absolute -bottom-10 -start-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />

                      {/* Header in Pencil Studio Voice with Original /support Content */}
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-mono font-bold tracking-wider uppercase text-blue-100 mb-5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#61d095]" />
                          <span>PENCIL CARE // 2026</span>
                        </span>
                        <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white leading-[1.15]">
                          {rtl ? (
                            <>
                              جاهزون لدعمك{" "}
                              <span className="font-light text-blue-200">
                                وحماية أنظمتك اليوم!
                              </span>
                              <span className="text-[#61d095]">.</span>
                            </>
                          ) : (
                            <>
                              Ready to Support{" "}
                              <span className="italic font-light text-blue-200">
                                You Today!
                              </span>
                              <span className="text-[#61d095]">.</span>
                            </>
                          )}
                        </h3>
                      </div>

                      {/* Original /support Paragraph */}
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-blue-100/90 leading-relaxed">
                          {tx(
                            "Pencil Studio is your long-term engineering partner for reliable operations, zero downtime, and strategic growth.",
                            "بنسل ستوديو شريكك التشغيلي الدائم لضمان استقرار وتطور أعمالك بثقة مطلقة ودون انقطاع."
                          )}
                        </p>

                        <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 text-xs text-white/90 font-medium">
                          <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                          <span>{tx("Cairo Engineering Desk - Live & On-Duty", "فريق العمليات الهندسية - القاهرة // متصل الآن")}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Container: 2x2 Grid of 4 Chunky Rounded Cards + Dark Slate Bottom Action Container */}
                    <div className="lg:col-span-7 flex flex-col justify-between gap-4 h-full">

                      {/* Top Tier: 2x2 Grid of 4 Rounded Chunky Cards with Live /support Content */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 flex-1">

                        {/* Card 1: Direct WhatsApp Desk (Pencil Blue Badge) */}
                        <div className="rounded-2xl sm:rounded-[22px] bg-neutral-100/90 hover:bg-neutral-100 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] shadow-2xs transition-colors">
                          <div>
                            <h4 className="text-xs sm:text-sm lg:text-[14px] font-bold text-neutral-900 leading-snug">
                              {tx("Direct WhatsApp Desk", "دعم مباشر عبر الواتساب")}
                            </h4>
                            <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 leading-relaxed">
                              {tx(
                                "Quick chat with engineers without logging tickets.",
                                "تواصل سريع ومباشر مع المهندسين دون تعقيدات أو تذاكر روتينية."
                              )}
                            </p>
                          </div>
                          <span className="h-5 w-5 rounded-full bg-[#2057FF] text-white flex items-center justify-center self-end mt-2 shadow-2xs">
                            <MessagesSquare size={10} />
                          </span>
                        </div>

                        {/* Card 2: 100% Confidential & NDA (Pencil Green Badge) */}
                        <div className="rounded-2xl sm:rounded-[22px] bg-neutral-100/90 hover:bg-neutral-100 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] shadow-2xs transition-colors">
                          <div>
                            <h4 className="text-xs sm:text-sm lg:text-[14px] font-bold text-neutral-900 leading-snug">
                              {tx("100% Confidential & NDA", "سرية تامة واتفاقية NDA")}
                            </h4>
                            <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 leading-relaxed">
                              {tx(
                                "Complete data and system security contracts.",
                                "حماية بياناتك وحساباتك وفق أشد المعايير القانونية الصارمة."
                              )}
                            </p>
                          </div>
                          <span className="h-5 w-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center self-end mt-2 shadow-2xs font-bold">
                            <Check size={10} strokeWidth={3} />
                          </span>
                        </div>

                        {/* Card 3: Senior Craftsmen Only (Pencil Red Badge) */}
                        <div className="rounded-2xl sm:rounded-[22px] bg-neutral-100/90 hover:bg-neutral-100 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] shadow-2xs transition-colors">
                          <div>
                            <h4 className="text-xs sm:text-sm lg:text-[14px] font-bold text-neutral-900 leading-snug">
                              {tx("Senior Craftsmen Only", "مهندسون ومصممون خبراء")}
                            </h4>
                            <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 leading-relaxed">
                              {tx(
                                "Zero junior handoffs, handled directly by specialists.",
                                "فريق أساسي متمرس يتعامل مع تفاصيل مشروعك بدقة دون تدريب مبتدئين."
                              )}
                            </p>
                          </div>
                          <span className="h-5 w-5 rounded-full bg-[#DD3126] text-white flex items-center justify-center self-end mt-2 shadow-2xs font-bold">
                            <ShieldCheck size={10} />
                          </span>
                        </div>

                        {/* Card 4: Continuous Operational Logs (Pencil Dark Badge) */}
                        <div className="rounded-2xl sm:rounded-[22px] bg-neutral-100/90 hover:bg-neutral-100 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] shadow-2xs transition-colors">
                          <div>
                            <h4 className="text-xs sm:text-sm lg:text-[14px] font-bold text-neutral-900 leading-snug">
                              {tx("Continuous Operational Logs", "توثيق مستمر لكل خطوة")}
                            </h4>
                            <p className="mt-1 text-[11px] sm:text-xs text-neutral-500 leading-relaxed">
                              {tx(
                                "Full version history, deployment records, and changelog.",
                                "سجلات واضحة وتقارير تسليم دورية لكل مرحلة وتعديل برمجي."
                              )}
                            </p>
                          </div>
                          <span className="h-5 w-5 rounded-full bg-neutral-900 text-white flex items-center justify-center self-end mt-2 shadow-2xs">
                            <ArrowUpRight size={10} strokeWidth={2.5} />
                          </span>
                        </div>

                      </div>

                      {/* Bottom Tier: PENCIL DARK SLATE Container (#0A0D14) + PENCIL BUTTON */}
                      <div className="rounded-2xl sm:rounded-3xl bg-neutral-950 text-white p-6 sm:p-7 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm relative overflow-hidden min-h-[125px] sm:min-h-[135px] border border-neutral-900">
                        <div>
                          <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                            {rtl ? (
                              <>
                                تواصل مباشرة مع{" "}
                                <span className="font-light text-neutral-400">
                                  مكتب العمليات
                                </span>
                                <span className="text-[#2057FF]">.</span>
                              </>
                            ) : (
                              <>
                                Connect directly with{" "}
                                <span className="italic font-light text-neutral-400">
                                  operations
                                </span>
                                <span className="text-[#2057FF]">.</span>
                              </>
                            )}
                          </h4>
                          <p className="mt-1.5 text-xs sm:text-[13px] text-neutral-400 leading-relaxed max-w-md">
                            {tx(
                              "Instant chat for rapid triage or technical advice - 100% immediate response.",
                              "محادثة فورية لتنسيق الدعم أو طلب استشارة فنية عاجلة - استجابة فورية."
                            )}
                          </p>
                        </div>

                        <PencilButton
                          href="https://wa.me/201003778273?text=Hello%20Pencil%20Studio%20Support"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                          size="lg"
                          showPencilIcon
                          icon={<WhatsAppIcon className="w-5 h-5 text-white" />}
                          hoverLabel={tx("Open WhatsApp →", "فتح المحادثة ←")}
                          className="shrink-0 font-bold"
                        >
                          {tx("Start WhatsApp Chat", "فتح محادثة واتساب سريعة")}
                        </PencilButton>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Sub-Slide Floating Inquiry Link Pill */}
                <div className="mt-8 text-center">
                  <Link
                    href="https://wa.me/201003778273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-xs font-bold text-neutral-800 shadow-2xs hover:border-[#2057FF] hover:text-[#2057FF] transition-all"
                  >
                    <span>
                      {tx(
                        "Message our senior team directly to discuss your architecture & scope",
                        "تحدث مباشرة مع كبار مهندسينا لمناقشة نطاق مشروعك"
                      )}
                    </span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2057FF] text-white">
                      <ArrowUpRight size={11} strokeWidth={2.5} />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <Footer />

        {/* ───────────────────────────────────────────────────────────────────
            FLOATING SUB-NAV DOCK (MATCHES APPROVED PATTERN IN /help/contact)
        ─────────────────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {showFloatingNav && (
            <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
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
                    const isActive = item.href === "/support";
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
