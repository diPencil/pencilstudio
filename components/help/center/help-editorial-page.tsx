"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Layers,
  Compass,
  Workflow,
  TrendingUp,
  Server,
  Wrench,
  PhoneCall,
  Mail,
  BookOpen,
  HelpCircle,
  LifeBuoy,
  MessagesSquare,
  Check,
  Clock,
  ShieldCheck,
  Phone,
  Sparkles,
  Rocket,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { useLanguage } from "@/components/language-context";
import { PencilButton } from "@/components/ui/pencil-button";
import { Reveal } from "@/components/shared/motion/reveal";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  STUDIO_FAQS,
  STUDIO_GUIDES,
  SUPPORT_ECOSYSTEM,
  type LocalText,
} from "@/lib/studio-care/studio-care-content";
import { cn } from "@/lib/utils";


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

// ─── Helpers ─────────────────────────────────────────────────────────────────
const local = (value: LocalText, rtl: boolean) => (rtl ? value.ar : value.en);

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[\u064B-\u065F]/g, "") // remove arabic diacritics
    .trim();
}

function stemArabic(word: string): string[] {
  const forms = [word];
  let stripped = word;
  if (stripped.startsWith("و") && stripped.length > 3) {
    stripped = stripped.slice(1);
    forms.push(stripped);
  }
  if (stripped.startsWith("ال") && stripped.length > 3) {
    forms.push(stripped.slice(2));
  }
  return forms;
}

function tokenize(query: string): string[] {
  const norm = normalizeText(query);
  const rawTokens = norm.split(/[\s,;&+/\\-]+/).filter(Boolean);
  const stopwords = new Set(["و", "and", "or", "the", "in", "of", "to", "for", "في", "من", "عن", "على"]);

  const tokens: string[] = [];
  for (const t of rawTokens) {
    if (stopwords.has(t)) continue;
    tokens.push(t);
    for (const alt of stemArabic(t)) {
      if (alt !== t && !tokens.includes(alt)) {
        tokens.push(alt);
      }
    }
  }
  return tokens;
}

// Quick suggestion chips in Hero search
const SEARCH_SUGGESTIONS = [
  { en: "Playbooks", ar: "دفاتر العمل" },
  { en: "SuperFeliz", ar: "SuperFeliz" },
  { en: "Cloud & DNS", ar: "السحابة والنطاقات" },
  { en: "Process & Approvals", ar: "المسار والاعتمادات" },
];

// Featured Guides IDs for Interactive Section 4
const FEATURED_GUIDE_IDS = ["launch", "brief", "ux"];

// Global enterprise platforms & cloud infrastructure partners (from public/worldwide)
const WORLDWIDE_PARTNERS = [
  { name: "Google Cloud", src: "/worldwide/Googlecloud-logo.png", height: 26 },
  { name: "Microsoft", src: "/worldwide/microsoft-logo.png", height: 21 },
  { name: "AWS", src: "/worldwide/AWS.png", height: 26 },
  { name: "IBM", src: "/worldwide/IBM-Logo-1956.png", height: 19 },
  { name: "Adobe", src: "/worldwide/Adobe-Logo.png", height: 21 },
  { name: "Meta", src: "/worldwide/meta-logo.webp", height: 19 },
  { name: "Salesforce", src: "/worldwide/Sf-marketingcloud-logo.png", height: 24 },
  { name: "Hostinger", src: "/worldwide/Hostinger_logo.png", height: 21 },
  { name: "Trustpilot", src: "/worldwide/trustpilot.svg", height: 22 },
];

// Floating scroll navigation tabs (Help ecosystem routes)
const HELP_SUB_NAV = [
  { href: "/help", en: "Help Center", ar: "مركز المساعدة", icon: LifeBuoy },
  { href: "/help/faqs", en: "FAQs", ar: "الأسئلة", icon: HelpCircle },
  { href: "/help/guides", en: "Guides", ar: "الأدلة", icon: BookOpen },
  { href: "/help/contact", en: "Contact Help", ar: "تواصل", icon: MessagesSquare },
];

export function HelpEditorialPage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const NextIcon = rtl ? ArrowLeft : ArrowRight;

  // ─── Floating Scroll Navigation Dock State ────────────────────────────────
  const [showFloatingNav, setShowFloatingNav] = React.useState(false);
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let footerInView = false;

    const updateVisibility = () => {
      // Reveal dock when scrolled past hero (~350px) AND footer is NOT in view
      if (window.scrollY > 350 && !footerInView) {
        setShowFloatingNav(true);
      } else {
        setShowFloatingNav(false);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        footerInView = entry.isIntersecting;
        updateVisibility();
      },
      { rootMargin: "80px 0px 0px 0px" }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  // ─── Search Console State & Outside Click ─────────────────────────────────
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [expandedFaqId, setExpandedFaqId] = React.useState<string | null>(null);
  const [expandedGuideId, setExpandedGuideId] = React.useState<string | null>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside or Escape
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
        searchInputRef.current?.blur();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ─── Real Intelligent Knowledge Search Engine ────────────────────────────
  const searchResults = React.useMemo(() => {
    const raw = searchQuery.trim();
    if (!raw) return null;

    const norm = normalizeText(raw);
    const tokens = tokenize(raw);
    if (tokens.length === 0) return null;

    const hasPlaybookIntent = tokens.some((t) =>
      ["playbook", "playbooks", "guide", "guides", "دفتر", "دفاتر", "دليل", "ادلة", "خطوات"].includes(t)
    );
    const hasCloudIntent = tokens.some((t) =>
      ["cloud", "dns", "hosting", "domains", "vps", "سحاب", "سحابه", "استضافه", "نطاق", "نطاقات"].includes(t)
    );
    const hasSuperFelizIntent = tokens.some((t) =>
      ["superfeliz", "feliz", "ai", "ذكاء", "نموذج"].includes(t)
    );
    const hasProcessIntent = tokens.some((t) =>
      ["process", "approval", "approvals", "اعتماد", "اعتمادات", "مراجعه", "مراجعات", "مسار", "موجز", "brief"].includes(t)
    );
    const hasSlaIntent = tokens.some((t) =>
      ["sla", "uptime", "ضمان", "استجابه", "ساعات"].includes(t)
    );
    const hasArabicIntent = tokens.some((t) =>
      ["arabic", "rtl", "عربي", "عربيه", "ثنائي"].includes(t)
    );

    // 1. Filter FAQs
    const matchedFaqs = STUDIO_FAQS.map((faq) => {
      const qEn = normalizeText(faq.q.en);
      const qAr = normalizeText(faq.q.ar);
      const aEn = normalizeText(faq.a.en);
      const aAr = normalizeText(faq.a.ar);
      const cat = normalizeText(faq.category);

      let score = 0;
      if (qEn.includes(norm) || qAr.includes(norm)) score += 15;
      if (aEn.includes(norm) || aAr.includes(norm)) score += 8;

      for (const t of tokens) {
        if (qEn.includes(t) || qAr.includes(t)) score += 6;
        if (aEn.includes(t) || aAr.includes(t)) score += 3;
        if (cat.includes(t)) score += 4;
      }

      if (hasSuperFelizIntent && (faq.category === "feliz" || qEn.includes("feliz") || qAr.includes("فيليز"))) score += 10;
      if (hasProcessIntent && (faq.category === "process" || qEn.includes("approval") || qAr.includes("اعتماد"))) score += 10;
      if (hasCloudIntent && (faq.category === "services" || aEn.includes("cloud") || aAr.includes("سحابة"))) score += 6;
      if (hasArabicIntent && (qEn.includes("arabic") || qAr.includes("عربي"))) score += 12;
      if (hasSlaIntent && (aEn.includes("support") || aAr.includes("دعم"))) score += 5;

      return { faq, score };
    })
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((m) => ({
        type: "faq" as const,
        id: m.faq.q.en,
        title: local(m.faq.q, rtl),
        snippet: local(m.faq.a, rtl),
        category: m.faq.category,
      }));

    // 2. Filter Guides
    const matchedGuides = STUDIO_GUIDES.map((guide) => {
      const titleEn = normalizeText(guide.title.en);
      const titleAr = normalizeText(guide.title.ar);
      const introEn = normalizeText(guide.intro.en);
      const introAr = normalizeText(guide.intro.ar);
      const cat = normalizeText(guide.category);
      const stepsText = (rtl ? guide.steps.ar : guide.steps.en).map(normalizeText).join(" ");

      let score = 0;
      if (titleEn.includes(norm) || titleAr.includes(norm)) score += 15;
      if (introEn.includes(norm) || introAr.includes(norm)) score += 8;

      for (const t of tokens) {
        if (titleEn.includes(t) || titleAr.includes(t)) score += 6;
        if (introEn.includes(t) || introAr.includes(t)) score += 3;
        if (cat.includes(t)) score += 4;
        if (stepsText.includes(t)) score += 2;
      }

      if (hasPlaybookIntent) score += 8;
      if (hasCloudIntent && guide.id === "launch") score += 10;
      if (hasSuperFelizIntent && guide.id === "ai") score += 10;
      if (hasProcessIntent && (guide.id === "brief" || guide.id === "feedback")) score += 10;

      return { guide, score };
    })
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((m) => ({
        type: "guide" as const,
        id: m.guide.id,
        title: local(m.guide.title, rtl),
        snippet: local(m.guide.intro, rtl),
        category: m.guide.category,
        steps: rtl ? m.guide.steps.ar : m.guide.steps.en,
      }));

    // 3. Filter Topics (SUPPORT_ECOSYSTEM)
    const matchedTopics = SUPPORT_ECOSYSTEM.map((topic) => {
      const titleEn = normalizeText(topic.title.en);
      const titleAr = normalizeText(topic.title.ar);
      const detailEn = normalizeText(topic.detail.en);
      const detailAr = normalizeText(topic.detail.ar);

      let score = 0;
      if (titleEn.includes(norm) || titleAr.includes(norm)) score += 15;
      if (detailEn.includes(norm) || detailAr.includes(norm)) score += 8;

      for (const t of tokens) {
        if (titleEn.includes(t) || titleAr.includes(t)) score += 6;
        if (detailEn.includes(t) || detailAr.includes(t)) score += 3;
      }

      if (hasCloudIntent && topic.id === "cloud") score += 12;
      if (hasSuperFelizIntent && topic.id === "feliz") score += 12;
      if (hasProcessIntent && topic.id === "systems") score += 8;

      return { topic, score };
    })
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((m) => ({
        type: "topic" as const,
        id: m.topic.id,
        title: local(m.topic.title, rtl),
        snippet: local(m.topic.detail, rtl),
      }));

    return {
      faqs: matchedFaqs.slice(0, 4),
      guides: matchedGuides.slice(0, 3),
      topics: matchedTopics.slice(0, 3),
      totalCount: matchedFaqs.length + matchedGuides.length + matchedTopics.length,
    };
  }, [searchQuery, rtl]);

  // Find individual topics for the Finseer-inspired 2-Tier Bento Matrix
  const productTopic = SUPPORT_ECOSYSTEM.find((t) => t.id === "product")!;
  const felizTopic = SUPPORT_ECOSYSTEM.find((t) => t.id === "feliz")!;
  const cloudTopic = SUPPORT_ECOSYSTEM.find((t) => t.id === "cloud")!;
  const creativeTopic = SUPPORT_ECOSYSTEM.find((t) => t.id === "creative")!;
  const systemsTopic = SUPPORT_ECOSYSTEM.find((t) => t.id === "systems")!;
  const growthTopic = SUPPORT_ECOSYSTEM.find((t) => t.id === "growth")!;

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#FBFBFB] text-neutral-900 pt-14 lg:pt-16 selection:bg-[#2057FF] selection:text-white"
    >
      {/* Global Fixed Header */}
      <Header solid light />

      {/* Main Content Layer (Defined Stacking Context for Seamless Parallax Reveal) */}
      <main className="relative z-10 bg-[#FBFBFB]">
        {/* ─────────────────────────────────────────────────────────────────────
            1. HERO SECTION: REBUILT LAYERED COMMAND CENTER (FINSEER-INSPIRED)
        ───────────────────────────────────────────────────────────────────── */}
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
                <span className="font-mono text-[11px] text-white/70">PENCIL CARE // HUB</span>
                <span className="text-white/30">•</span>
                <span className="font-bold">
                  {rtl
                    ? "مركز المساعدة والتوثيق المباشر"
                    : "Direct Help & Knowledge Base"}
                </span>
              </div>

              {/* Bold Editorial Display Typography with Pencil Studio Word Contrast */}
              <h1 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {rtl ? (
                  <>
                    معرفة تشغيلية مباشرة{" "}
                    <span className="font-light text-blue-200">
                      ودفاتر عمل هندسية معتمدة
                    </span>
                    <span className="text-[#61d095]">.</span>
                  </>
                ) : (
                  <>
                    Direct Knowledge{" "}
                    <span className="italic font-light text-blue-200">
                      with Operational Clarity
                    </span>
                    <span className="text-[#61d095]">.</span>
                  </>
                )}
              </h1>

              {/* Concise Supporting Copy */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
                {rtl
                  ? "استكشف أدلة العمل المنهجية، والمواصفات التقنية، وقنوات الدعم المباشر لمنصات بينسل ستوديو ونماذج سوبر فيليز الذكية."
                  : "Access architectural playbooks, technical specifications, and direct support routing across Pencil Studio platforms, SaaS apps, and SuperFeliz AI."}
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href="#featured-guides"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#1242D6] shadow-lg shadow-black/10 transition hover:bg-neutral-100"
                >
                  <span>{rtl ? "استعراض دفاتر العمل" : "Explore Playbooks"}</span>
                  <NextIcon size={16} className="transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </a>
                <Link
                  href="/help/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <PhoneCall size={16} />
                  <span>{rtl ? "فتح تذكرة مساعدة" : "Open Help Inquiry"}</span>
                </Link>
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
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      {rtl ? "قاعدة المعرفة" : "Knowledge Base"}
                    </span>
                    <span className="text-sm font-black text-neutral-900">
                      {rtl ? "14 إجابة و10 دفاتر" : "14 FAQs & 10 Guides"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl bg-neutral-50 p-4 border border-neutral-100">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#BAE6FD]/60 p-2 shadow-xs border border-sky-200">
                    <Image
                      src="/macosdock/superfeliz.svg"
                      alt="SuperFeliz"
                      width={22}
                      height={22}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      {rtl ? "النموذج الذكي" : "SuperFeliz AI"}
                    </span>
                    <span className="text-sm font-black text-neutral-900">
                      {rtl ? "إصدار 4.2 نشط" : "Model v4.2 Active"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 rounded-2xl bg-neutral-50 p-4 border border-neutral-100">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      {rtl ? "ساعات الدعم" : "Operating Hours"}
                    </span>
                    <span className="text-sm font-black text-neutral-900">
                      {rtl ? "الأحد إلى الخميس 10ص إلى 7م" : "Sun to Thu 10am to 7pm"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Functional Search Console Input */}
              <div ref={searchContainerRef} className="relative pt-6">
                <div className="group/search relative rounded-full p-[2px] transition-all duration-500 hover:shadow-lg hover:shadow-[#2057FF]/10 focus-within:shadow-xl focus-within:shadow-[#2057FF]/20">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full bg-neutral-200/80">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-[1200px] w-[1200px] shrink-0 animate-border-spin bg-[conic-gradient(from_0deg_at_50%_50%,#2057ff_0deg,#38bdf8_60deg,#ffffff_90deg,#38bdf8_120deg,#2057ff_150deg,transparent_200deg,transparent_310deg,#2057ff_360deg)]" />
                    </div>
                  </div>
                  <div className="relative flex items-center rounded-full bg-white transition-all duration-300">
                    <div className="ps-5 text-neutral-400 transition-colors group-focus-within/search:text-[#2057FF]">
                      <Search size={20} />
                    </div>
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onFocus={() => setIsSearchOpen(true)}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setIsSearchOpen(true);
                      }}
                      placeholder={
                        rtl
                          ? "ابحث في الأسئلة الشائعة، دفاتر العمل، الدعم السحابي، أو سوبر فيليز..."
                          : "Search FAQs, playbooks, cloud operations, or SuperFeliz..."
                      }
                      className="w-full rounded-full bg-transparent px-3 py-4 text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400 sm:text-base"
                      aria-label={rtl ? "البحث في مركز المساعدة" : "Search Help Center"}
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("");
                          searchInputRef.current?.focus();
                        }}
                        className="me-3 rounded-full p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700 cursor-pointer"
                        aria-label={rtl ? "مسح البحث" : "Clear search"}
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Suggestion Chips */}
                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-neutral-400">
                      {rtl ? "اقتراحات شائعة:" : "Quick topics:"}
                    </span>
                    {SEARCH_SUGGESTIONS.map((chip) => (
                      <button
                        key={chip.en}
                        type="button"
                        onClick={() => {
                          setSearchQuery(local(chip, rtl));
                          setIsSearchOpen(true);
                          searchInputRef.current?.focus();
                        }}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-600 shadow-2xs transition hover:border-[#2057FF] hover:text-[#2057FF] cursor-pointer"
                      >
                        {local(chip, rtl)}
                      </button>
                    ))}
                  </div>

                  <span className="hidden font-mono text-[11px] text-neutral-400 md:inline-block">
                    {rtl ? "بحث فوري في كامل المحتوى" : "Real-time client indexing"}
                  </span>
                </div>

                {/* Dynamic Search Results Dropdown Panel */}
                <AnimatePresence>
                  {isSearchOpen && searchResults && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-x-0 top-full z-40 mt-3 max-h-[520px] overflow-y-auto rounded-3xl border border-neutral-200/90 bg-white p-5 sm:p-6 text-start shadow-2xl"
                    >
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-3 text-xs font-semibold text-neutral-500">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
                          <span>
                            {rtl
                              ? `نتائج البحث (${searchResults.totalCount})`
                              : `Found ${searchResults.totalCount} matching results`}
                          </span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsSearchOpen(false)}
                          className="font-bold text-[#2057FF] hover:underline cursor-pointer"
                        >
                          {rtl ? "إغلاق" : "Close"}
                        </button>
                      </div>

                      {searchResults.totalCount === 0 ? (
                        <div className="py-8 text-center">
                          <HelpCircle size={32} className="mx-auto text-neutral-300" />
                          <p className="mt-2 text-sm font-semibold text-neutral-800">
                            {rtl
                              ? `لم نعثر على نتيجة مطابقة لـ "${searchQuery}"`
                              : `No direct matches found for "${searchQuery}"`}
                          </p>
                          <p className="mt-1 text-xs text-neutral-500">
                            {rtl
                              ? "جرب البحث عن كلمات رئيسية مثل: SuperFeliz، السحابة، الاعتمادات، أو دفاتر العمل."
                              : "Try keywords like: SuperFeliz, Cloud, Playbooks, or SLAs."}
                          </p>
                          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                            {SEARCH_SUGGESTIONS.map((chip) => (
                              <button
                                key={chip.en}
                                type="button"
                                onClick={() => {
                                  setSearchQuery(local(chip, rtl));
                                  searchInputRef.current?.focus();
                                }}
                                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 hover:bg-blue-50 hover:text-[#2057FF] cursor-pointer"
                              >
                                {local(chip, rtl)}
                              </button>
                            ))}
                          </div>
                          <div className="mt-5 pt-4 border-t border-neutral-100">
                            <Link
                              href="/help/contact"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2057FF] hover:underline"
                            >
                              {rtl ? "إرسال استفسار مخصص للفريق" : "Submit direct inquiry"}
                              <NextIcon size={14} />
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 pt-3">
                          {/* FAQs Results */}
                          {searchResults.faqs.length > 0 && (
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                                  <HelpCircle size={13} className="text-[#2057FF]" />
                                  <span>{rtl ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</span>
                                </p>
                                <Link
                                  href="/help/faqs"
                                  className="text-[11px] font-bold text-[#2057FF] hover:underline"
                                >
                                  {rtl ? "عرض الكل في الأسئلة الشائعة ←" : "View all in FAQs →"}
                                </Link>
                              </div>
                              <div className="space-y-2">
                                {searchResults.faqs.map((faq) => {
                                  const isExpanded = expandedFaqId === faq.id;
                                  return (
                                    <div
                                      key={faq.id}
                                      className={cn(
                                        "rounded-2xl border transition-all text-start",
                                        isExpanded
                                          ? "border-blue-200 bg-blue-50/40 p-4 shadow-xs"
                                          : "border-neutral-100 hover:border-blue-200 bg-neutral-50/60 p-3 hover:bg-neutral-50"
                                      )}
                                    >
                                      <button
                                        type="button"
                                        onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                                        className="w-full flex items-start justify-between gap-3 text-start group cursor-pointer"
                                      >
                                        <div className="flex-1">
                                          <span className="text-sm font-bold text-neutral-900 group-hover:text-[#2057FF] transition-colors block">
                                            {faq.title}
                                          </span>
                                          {!isExpanded && (
                                            <span className="line-clamp-1 mt-0.5 text-xs text-neutral-500">
                                              {faq.snippet}
                                            </span>
                                          )}
                                        </div>
                                        <span className="shrink-0 text-xs font-bold text-[#2057FF] flex items-center gap-1 mt-0.5">
                                          {isExpanded ? (
                                            <>
                                              <span>{rtl ? "إخفاء" : "Hide"}</span>
                                              <ChevronUp size={14} />
                                            </>
                                          ) : (
                                            <>
                                              <span>{rtl ? "عرض الإجابة" : "View Answer"}</span>
                                              <ChevronDown size={14} />
                                            </>
                                          )}
                                        </span>
                                      </button>
                                      {isExpanded && (
                                        <div className="mt-3 pt-3 border-t border-blue-100 text-start">
                                          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                                            {faq.snippet}
                                          </p>
                                          <div className="mt-3 flex items-center justify-between pt-2">
                                            <Link
                                              href="/help/faqs"
                                              className="inline-flex items-center gap-1 text-xs font-bold text-[#2057FF] hover:underline"
                                            >
                                              <span>{rtl ? "الانتقال إلى دليل الأسئلة الشائعة الكامل" : "Open full FAQs directory"}</span>
                                              <NextIcon size={12} />
                                            </Link>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Playbooks Results */}
                          {searchResults.guides.length > 0 && (
                            <div className="border-t border-neutral-100 pt-3">
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                                  <BookOpen size={13} className="text-[#16A34A]" />
                                  <span>{rtl ? "دفاتر العمل التطبيقية" : "Playbooks & Guides"}</span>
                                </p>
                                <Link
                                  href="/help/guides"
                                  className="text-[11px] font-bold text-[#16A34A] hover:underline"
                                >
                                  {rtl ? "عرض كل الأدلة ←" : "View all Guides →"}
                                </Link>
                              </div>
                              <div className="space-y-2">
                                {searchResults.guides.map((guide) => {
                                  const isExpanded = expandedGuideId === guide.id;
                                  return (
                                    <div
                                      key={guide.id}
                                      className={cn(
                                        "rounded-2xl border transition-all text-start",
                                        isExpanded
                                          ? "border-emerald-200 bg-emerald-50/40 p-4 shadow-xs"
                                          : "border-neutral-100 hover:border-emerald-200 bg-neutral-50/60 p-3 hover:bg-neutral-50"
                                      )}
                                    >
                                      <button
                                        type="button"
                                        onClick={() => setExpandedGuideId(isExpanded ? null : guide.id)}
                                        className="w-full flex items-start justify-between gap-3 text-start group cursor-pointer"
                                      >
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold text-neutral-900 group-hover:text-[#16A34A] transition-colors">
                                              {guide.title}
                                            </span>
                                            <span className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-[10px] font-bold text-neutral-700">
                                              {guide.category}
                                            </span>
                                          </div>
                                          {!isExpanded && (
                                            <span className="line-clamp-1 mt-0.5 text-xs text-neutral-500">
                                              {guide.snippet}
                                            </span>
                                          )}
                                        </div>
                                        <span className="shrink-0 text-xs font-bold text-[#16A34A] flex items-center gap-1 mt-0.5">
                                          {isExpanded ? (
                                            <>
                                              <span>{rtl ? "إخفاء" : "Hide"}</span>
                                              <ChevronUp size={14} />
                                            </>
                                          ) : (
                                            <>
                                              <span>{rtl ? "خطوات التنفيذ" : "Action Steps"}</span>
                                              <ChevronDown size={14} />
                                            </>
                                          )}
                                        </span>
                                      </button>
                                      {isExpanded && (
                                        <div className="mt-3 pt-3 border-t border-emerald-100 text-start">
                                          <p className="text-xs text-neutral-600 mb-3 leading-relaxed font-medium">
                                            {guide.snippet}
                                          </p>
                                          <div className="space-y-1.5 my-2">
                                            {guide.steps.map((step, idx) => (
                                              <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-800">
                                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-black text-emerald-700">
                                                  {idx + 1}
                                                </span>
                                                <span>{step}</span>
                                              </div>
                                            ))}
                                          </div>
                                          <div className="mt-3 flex items-center justify-between pt-2">
                                            <Link
                                              href="/help/guides"
                                              className="inline-flex items-center gap-1 text-xs font-bold text-[#16A34A] hover:underline"
                                            >
                                              <span>{rtl ? "الانتقال إلى دليل العمل كاملاً" : "Open full playbook in Guides"}</span>
                                              <NextIcon size={12} />
                                            </Link>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Topics Section */}
                          {searchResults.topics.length > 0 && (
                            <div className="border-t border-neutral-100 pt-3">
                              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                                <MessagesSquare size={13} className="text-[#2057FF]" />
                                <span>{rtl ? "مجالات الدعم المباشر" : "Direct Support Topics"}</span>
                              </p>
                              <div className="space-y-1.5">
                                {searchResults.topics.map((topic) => (
                                  <Link
                                    key={topic.id}
                                    href="/help/contact"
                                    onClick={() => setIsSearchOpen(false)}
                                    className="group flex w-full items-center justify-between rounded-xl border border-neutral-100 hover:border-blue-200 bg-neutral-50/60 p-2.5 text-start transition hover:bg-neutral-50"
                                  >
                                    <div className="flex-1">
                                      <span className="text-sm font-bold text-neutral-900 group-hover:text-[#2057FF] transition-colors block">
                                        {topic.title}
                                      </span>
                                      <span className="line-clamp-1 mt-0.5 text-xs text-neutral-500">
                                        {topic.snippet}
                                      </span>
                                    </div>
                                    <ArrowUpRight
                                      size={15}
                                      className="text-neutral-400 group-hover:text-[#2057FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ms-2"
                                    />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Quick Links Router Bar */}
                          <div className="border-t border-neutral-100 pt-3 mt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-4 text-neutral-500">
                              <Link href="/help/faqs" className="hover:text-[#2057FF] font-semibold flex items-center gap-1">
                                <HelpCircle size={13} />
                                <span>{rtl ? "14 إجابة شاملة" : "14 FAQs"}</span>
                              </Link>
                              <Link href="/help/guides" className="hover:text-[#2057FF] font-semibold flex items-center gap-1">
                                <BookOpen size={13} />
                                <span>{rtl ? "10 دفاتر عمل" : "10 Guides"}</span>
                              </Link>
                            </div>
                            <Link
                              href="/help/contact"
                              className="font-bold text-[#2057FF] hover:underline inline-flex items-center gap-1"
                            >
                              <span>{rtl ? "طلب مساعدة مخصصة" : "Contact Help Direct"}</span>
                              <NextIcon size={13} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            2. TRUSTED WORLDWIDE INFRASTRUCTURE & PARTNERS
        ───────────────────────────────────────────────────────────────────── */}
        <section className="border-y border-neutral-200/80 bg-white py-8">
          <div className="container-custom">
            <div className="flex flex-col gap-6">
              {/* Header: Trusted label + simple editorial copy */}
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2 w-2 rounded-full bg-[#2057FF] ring-4 ring-[#2057FF]/20" />
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-neutral-900">
                    {rtl ? "موثوقية واعتمادية عالمية // TRUSTED" : "TRUSTED GLOBALLY"}
                  </span>
                </div>
                <p className="text-xs font-medium text-neutral-500 max-w-xl">
                  {rtl
                    ? "بنية متكاملة مع رواد التكنولوجيا السحابية، مراكز البيانات، وأقوى المعايير الرقمية العالمية."
                    : "Integrated alongside industry-leading cloud platforms, developer infrastructure, and global standards."}
                </p>
              </div>

              {/* Worldwide Logos Row */}
              <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8 lg:gap-10">
                {WORLDWIDE_PARTNERS.map((logo) => (
                  <div
                    key={logo.name}
                    className="group relative flex items-center justify-center filter grayscale opacity-60 contrast-125 transition-all duration-300 hover:filter-none hover:opacity-100 hover:scale-105"
                    title={logo.name}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={logo.height}
                      style={{ height: `${logo.height}px`, width: "auto" }}
                      className="object-contain"
                      unoptimized={logo.src.endsWith(".svg")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            3. 2X2 BENTO PRESENTATION MATRIX (PENCIL STUDIO EDITORIAL CRAFT)
        ───────────────────────────────────────────────────────────────────── */}
        <section id="knowledge-bento-card" className="container-custom py-16 md:py-24">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-800">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
              <span className="font-mono">{rtl ? "منظومة العمل والدعم · 02" : "02 // PRESENTATION SLIDES"}</span>
            </span>
            <h2 className="mt-4 text-3xl font-normal text-neutral-900 sm:text-5xl lg:text-6xl tracking-tight leading-[1.14]">
              {rtl ? (
                <>
                  معرفة معمارية مباشرة، معايير فورية،{" "}
                  <span className="font-light text-neutral-500">
                    وحلول موثوقة
                  </span>
                  <span className="text-[#2057FF]">.</span>
                </>
              ) : (
                <>
                  Knowledge, SLAs, and Workflows{" "}
                  <span className="italic font-light text-neutral-500">
                    in One Presentation
                  </span>
                  <span className="text-[#2057FF]">.</span>
                </>
              )}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              {rtl
                ? "عرض تقديمي شامل ومختصر لقدرات الاستوديو، أدلة العمل، معايير الاستجابة الفورية، ودورة المعالجة الكاملة."
                : "A unified, presentation-style overview of our studio capabilities, architecture playbooks, response SLAs, and direct support."}
            </p>
          </div>

          {/* ── 2x2 Bento Slides Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

            {/* ── CARD 01 (Top-Left): KNOWLEDGE ECOSYSTEM / مسارات المعرفة ── */}
            <Reveal delay={0.05} className="h-full flex flex-col">
              <div id="featured-guides" className="h-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between scroll-mt-24">
                <div className="flex-1 flex flex-col">
                  {/* Top Header: 2-Line Punchy Title on Left, Logo on Right */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight">
                        {rtl ? "ما الذي ستجده" : "What you will find"}
                      </h3>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2057FF] leading-tight">
                        {rtl ? "في بنسل ستوديو؟" : "in Pencil Studio?"}
                      </h3>
                    </div>

                    {/* Logo Emblem on Top Right */}
                    <div className="flex flex-col items-center shrink-0 pt-0.5">
                      <PencilOriginalIconSvg className="w-5 h-5 mb-0.5" />
                      <span className="font-mono text-[9px] font-black tracking-widest text-neutral-800 uppercase">
                        PENCIL
                      </span>
                    </div>
                  </div>

                  {/* Body Layout: 4 Cards on Left + Vertical Portrait on Right */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch flex-1 h-full">

                    {/* Left 2x2 Grid (8 cols on desktop) */}
                    <div className="sm:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">

                      {/* Card 1: Rocket icon (Launch & DNS) */}
                      <Link
                        href="/help/guides"
                        className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-blue-200 border border-transparent p-3.5 sm:p-4 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-950 group-hover:text-[#2057FF] transition-colors leading-snug">
                            {rtl ? "أدلة الإطلاق والنطاقات" : "Launch & DNS Playbooks"}
                          </h4>
                          <span className="h-6 w-6 rounded-full bg-[#DD3126] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                            <Rocket size={12} strokeWidth={2.4} />
                          </span>
                        </div>
                        <p className="mt-2.5 text-[11px] text-neutral-500 leading-relaxed">
                          {rtl
                            ? "فحص ما قبل الإطلاق، تهيئة السحابة، وضمان التوافر العالي دون انقطاع."
                            : "Pre-flight checks, cloud DNS staging, and high-availability releases."}
                        </p>
                      </Link>

                      {/* Card 2: Layers / Design icon (Design Systems) */}
                      <Link
                        href="/help/guides"
                        className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-blue-200 border border-transparent p-3.5 sm:p-4 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-950 group-hover:text-[#2057FF] transition-colors leading-snug">
                            {rtl ? "نظم الهوية والتصميم" : "Design Systems & RTL"}
                          </h4>
                          <span className="h-6 w-6 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                            <Layers size={12} strokeWidth={2.4} />
                          </span>
                        </div>
                        <p className="mt-2.5 text-[11px] text-neutral-500 leading-relaxed">
                          {rtl
                            ? "تصميم ثنائي اللغة أصيل، نظم التايبوجرافي، وتطوير تجربة المستخدم."
                            : "Authentic bilingual typography, design tokens, and RTL-first UX."}
                        </p>
                      </Link>

                      {/* Card 3: SuperFeliz AI Workflows (Official SuperFeliz Brand Icon) */}
                      <Link
                        href="/superfeliz"
                        className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-blue-200 border border-transparent p-3.5 sm:p-4 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-950 group-hover:text-[#2057FF] transition-colors leading-snug">
                            {rtl ? "تطبيقات ذكاء سوبر فيليز" : "SuperFeliz AI Workflows"}
                          </h4>
                          <span className="h-6 w-6 rounded-full bg-white border border-blue-200/90 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform p-1">
                            <Image
                              src="/macosdock/superfeliz.svg"
                              alt="SuperFeliz"
                              width={14}
                              height={14}
                              className="object-contain w-3.5 h-3.5"
                            />
                          </span>
                        </div>
                        <p className="mt-2.5 text-[11px] text-neutral-500 leading-relaxed">
                          {rtl
                            ? "حلول الذكاء الاصطناعي التطبيقية، أتمتة الأعمال، ونماذج سير العمل."
                            : "Applied AI orchestration, custom automations, and operational workflows."}
                        </p>
                      </Link>

                      {/* Card 4: ShieldCheck icon (Architecture SLAs) */}
                      <Link
                        href="/help/contact"
                        className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-emerald-200 border border-transparent p-3.5 sm:p-4 flex flex-col justify-between transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-950 group-hover:text-emerald-700 transition-colors leading-snug">
                            {rtl ? "استشارات معمارية مباشرة" : "Architecture & Cloud SLAs"}
                          </h4>
                          <span className="h-6 w-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform font-bold">
                            <ShieldCheck size={12} strokeWidth={2.6} />
                          </span>
                        </div>
                        <p className="mt-2.5 text-[11px] text-neutral-500 leading-relaxed">
                          {rtl
                            ? "دعم مباشر من كبار المهندسين والمصممين لحل أعقد التحديات التقنية."
                            : "Direct senior engineering advisory to resolve your deepest architecture challenges."}
                        </p>
                      </Link>

                    </div>

                    {/* Right Portrait Column (4 cols on desktop) */}
                    <div className="sm:col-span-4 rounded-2xl sm:rounded-3xl bg-[#2057FF] relative overflow-hidden flex items-end justify-center min-h-[220px] sm:min-h-full shadow-2xs">
                      <div className="relative w-full h-full min-h-[220px] sm:min-h-[250px]">
                        <Image
                          src="/help/what-you-will-find.jpg"
                          alt={rtl ? "فريق استوديو بنسل" : "Pencil Studio Team"}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, 240px"
                          priority
                        />
                      </div>
                    </div>

                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-bold shrink-0">
                  <Link
                    href="/help/guides"
                    className="inline-flex items-center gap-1.5 text-[#2057FF] hover:underline"
                  >
                    <span>{rtl ? "تصفح كل الأدلة المعمارية والتشغيلية" : "Explore All Studio Playbooks & Guides"}</span>
                    <NextIcon size={13} />
                  </Link>
                  <span className="text-neutral-400 font-mono text-[11px]">8+ Playbooks</span>
                </div>
              </div>
            </Reveal>

            {/* ── CARD 02 (Top-Right): OPERATIONAL STANDARDS / معايير الاستجابة (PERFECTLY ALIGNED) ── */}
            <Reveal delay={0.1} className="h-full flex flex-col">
              <div className="h-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  {/* Top Header: Matching Card 01 for Perfect Visual Balance */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight">
                        {rtl ? "معايير الاستجابة الفورية" : "Operational Standards"}
                      </h3>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2057FF] leading-tight">
                        {rtl ? "لسرعة وجودة التنفيذ" : "& Rapid Execution"}
                      </h3>
                    </div>

                    <div className="flex flex-col items-center shrink-0 pt-0.5">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono font-bold text-[#2057FF] tracking-wider uppercase">
                        15 MIN SLA
                      </span>
                    </div>
                  </div>

                  {/* Main Grid: Left Orange Block + Right Stats & Action Bar (Fully Equalized Height) */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-stretch flex-1 h-full">

                    {/* Left Flagship Pencil Blue Container */}
                    <div className="sm:col-span-6 rounded-3xl bg-[#2057FF] text-white p-5 sm:p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden">
                      <div className="pointer-events-none absolute -bottom-10 -end-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />

                      {/* Pencil Studio Style Title with Word Contrast */}
                      <div>
                        <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-[1.25]">
                          {rtl ? (
                            <>
                              الاستجابة الهندسية
                              <br />
                              الفورية والمباشرة{" "}
                              <span className="font-light text-blue-200">
                                هي الأساس
                              </span>
                              <span className="text-white">.</span>
                            </>
                          ) : (
                            <>
                              Direct Engineering
                              <br />
                              Response Built{" "}
                              <span className="italic font-light text-blue-200">
                                for Velocity
                              </span>
                              <span className="text-white">.</span>
                            </>
                          )}
                        </h4>
                      </div>

                      {/* Bottom Paragraph in White */}
                      <p className="mt-4 text-xs sm:text-[13px] font-medium text-blue-100/90 leading-relaxed">
                        {rtl
                          ? "لأن استقرار الأعمال ونمو المنصات لا يحتمل الانتظار، يتولى مهندسونا المباشرون الفحص والحل دون تذاكر روتينية أو روبوتات انتظار."
                          : "Because platform stability and business continuity cannot wait. Our direct engineers diagnose and solve without delayed queues."}
                      </p>
                    </div>

                    {/* Right Staggered Column (Circles, Cards, and Bottom Action Bar) */}
                    <div className="sm:col-span-6 flex flex-col justify-between gap-2.5 h-full">

                      {/* Row 1: Circle 85% + Card */}
                      <div className="flex items-center gap-2.5 flex-1">
                        <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                          <span className="text-lg sm:text-xl font-black text-[#2057FF]">
                            85%
                          </span>
                        </div>
                        <div className="rounded-2xl bg-neutral-100/80 p-3 sm:p-3.5 flex-1 flex flex-col justify-center h-full">
                          <p className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-snug">
                            {rtl
                              ? "من التحديات التقنية والمعمارية الحرجة تُحل في أقل من ٢٤ ساعة عبر الفحص المباشر."
                              : "Of critical architecture challenges isolated and resolved within 24 hours."}
                          </p>
                        </div>
                      </div>

                      {/* Row 2: Card + Circle 100% */}
                      <div className="flex items-center gap-2.5 flex-1">
                        <div className="rounded-2xl bg-neutral-100/80 p-3 sm:p-3.5 flex-1 flex flex-col justify-center h-full">
                          <p className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-snug">
                            {rtl
                              ? "كفاءات هندسية وتصميمية داخلية متفرغة تدير مشروعك دون أي إسناد خارجي."
                              : "In-house senior architects and designers managing your scope. Zero outsourcing."}
                          </p>
                        </div>
                        <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-emerald-50/80 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                          <span className="text-lg sm:text-xl font-black text-[#16A34A]">
                            100%
                          </span>
                        </div>
                      </div>

                      {/* Row 3: Action Bar in Pencil Dark Slate + Pencil Studio Signature Button */}
                      <div className="rounded-2xl bg-neutral-950 text-white p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-xs shrink-0 border border-neutral-900">
                        <p className="text-xs sm:text-[13px] font-medium text-neutral-300 leading-snug">
                          {rtl
                            ? "استجابة هندسية مباشرة دون وسطاء أو روبوتات محادثة روتينية."
                            : "Direct engineering triage. Zero bots, gatekeepers, or ticketing queues."}
                        </p>
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

                {/* Bottom Footer Strip */}
                <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500 shrink-0">
                  <span>{rtl ? "مهندسون واستشاريون مباشرون" : "Senior architects on call"}</span>
                  <div className="flex items-center gap-3 font-bold text-[#2057FF]">
                    <a href="https://wa.me/201003778273" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      🇸🇦 KSA
                    </a>
                    <span>•</span>
                    <a href="https://wa.me/201003778273" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      🇪🇬 EGY
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── CARD 03 (Bottom-Left): RESOLUTION LIFECYCLE ── */}
            <Reveal delay={0.15} className="h-full flex flex-col">
              <div className="h-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  {/* Main Grid: Left Orange Block + Right Blue Framed Container */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 items-stretch flex-1 h-full">

                    {/* Left Dark Slate Container (Pencil Editorial Dark with Blue Accent) */}
                    <div className="sm:col-span-7 rounded-3xl bg-neutral-950 text-white p-5 sm:p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden border border-neutral-900">
                      <div className="pointer-events-none absolute -bottom-10 -start-10 h-32 w-32 rounded-full bg-[#2057FF]/15 blur-xl" />

                      {/* Top Header with Pencil Editorial Style */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                          {rtl ? (
                            <>
                              كيف تُدار وتُنفذ{" "}
                              <span className="font-light text-neutral-400">
                                متطلبات مشروعك؟
                              </span>
                              <span className="text-[#2057FF]">.</span>
                            </>
                          ) : (
                            <>
                              How Does Your Project{" "}
                              <span className="italic font-light text-neutral-400">
                                Run &amp; Resolve?
                              </span>
                              <span className="text-[#2057FF]">.</span>
                            </>
                          )}
                        </h3>
                        <p className="mt-2 text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-medium">
                          {rtl
                            ? "منهجية معمارية واضحة ومسار محدد من أول لحظة وحتى الإطلاق."
                            : "Clear architectural cadence from the first brief to live launch."}
                        </p>
                      </div>

                      {/* 3 White Vertical Cards Inside Dark Slate Container */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-5">

                        {/* Sub-card 1: Blue icon badge (Pencil Blue) */}
                        <div className="rounded-2xl bg-white p-2.5 sm:p-3 text-neutral-900 flex flex-col justify-between min-h-[110px] shadow-2xs">
                          <div>
                            <h4 className="text-[11px] sm:text-xs font-black text-neutral-950 leading-tight mb-1">
                              {rtl ? "تشخيص بلا حشو" : "Zero-Fluff Triage"}
                            </h4>
                            <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-snug">
                              {rtl ? "فحص جذري وعزل للأسباب بدقة." : "Direct root-cause isolation."}
                            </p>
                          </div>
                          <span className="h-5 w-5 rounded-full bg-[#2057FF] text-white flex items-center justify-center self-end mt-2 shadow-2xs">
                            <Search size={10} />
                          </span>
                        </div>

                        {/* Sub-card 2: Green icon badge (Pencil Green) */}
                        <div className="rounded-2xl bg-white p-2.5 sm:p-3 text-neutral-900 flex flex-col justify-between min-h-[110px] shadow-2xs">
                          <div>
                            <h4 className="text-[11px] sm:text-xs font-black text-neutral-950 leading-tight mb-1">
                              {rtl ? "تعيين خبير مختص" : "Senior Specialist"}
                            </h4>
                            <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-snug">
                              {rtl ? "مهندس مباشر يملك السياق." : "Lead architect context owner."}
                            </p>
                          </div>
                          <span className="h-5 w-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center self-end mt-2 font-bold shadow-2xs">
                            <Wrench size={10} />
                          </span>
                        </div>

                        {/* Sub-card 3: Red icon badge (Pencil Red) */}
                        <div className="rounded-2xl bg-white p-2.5 sm:p-3 text-neutral-900 flex flex-col justify-between min-h-[110px] shadow-2xs">
                          <div>
                            <h4 className="text-[11px] sm:text-xs font-black text-neutral-950 leading-tight mb-1">
                              {rtl ? "تنفيذ واختبار حي" : "Live Execution"}
                            </h4>
                            <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-snug">
                              {rtl ? "تطبيق واختبار استقرار دقيق." : "Safe production deploy & QA."}
                            </p>
                          </div>
                          <span className="h-5 w-5 rounded-full bg-[#DD3126] text-white flex items-center justify-center self-end mt-2 shadow-2xs font-bold">
                            <Clock size={10} />
                          </span>
                        </div>

                      </div>
                    </div>

                    {/* Right Blue Framed Container */}
                    <div className="sm:col-span-5 rounded-3xl bg-[#2057FF] p-3 sm:p-3.5 flex flex-col justify-between gap-2.5 shadow-sm h-full">

                      {/* Top White Card: 90% stat + green check icon */}
                      <Link
                        href="/help/contact"
                        className="group rounded-2xl bg-white p-4 sm:p-4.5 flex flex-col justify-between shadow-2xs flex-1 hover:shadow-xs transition-all cursor-pointer"
                      >
                        <div>
                          <span className="text-xl sm:text-2xl font-black text-[#2057FF]">
                            {rtl ? "90% من التحديات" : "90% of Challenges"}
                          </span>
                          <h4 className="text-xs sm:text-[13px] font-extrabold text-neutral-900 group-hover:text-[#2057FF] transition-colors leading-tight mt-0.5">
                            {rtl ? "تُعالج وتُغلق خلال ٢٤ ساعة!" : "Resolved within 24 hours!"}
                          </h4>
                          <p className="mt-1.5 text-[10px] sm:text-[11px] text-neutral-500 leading-relaxed">
                            {rtl
                              ? "إغلاق فوري للتذاكر وتسريع وتيرة الإنتاج دون تعطيل."
                              : "Rapid resolution accelerating your product roadmap without delay."}
                          </p>
                        </div>
                        <span className="h-6 w-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center self-end mt-2 shadow-2xs font-bold group-hover:scale-110 transition-transform">
                          <Check size={12} strokeWidth={3} />
                        </span>
                      </Link>

                      {/* Bottom 2 Stacked Horizontal Cards */}
                      <div className="space-y-2 shrink-0">
                        {/* Horizontal Card 1 */}
                        <Link
                          href="/support/callback"
                          className="group rounded-2xl bg-white p-3 sm:p-3.5 flex items-center justify-between gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                        >
                          <span className="text-xs font-bold text-neutral-900 group-hover:text-[#2057FF] transition-colors leading-tight">
                            {rtl ? "مراجعات حية ومتابعة دورية" : "Live Sync & Review Sessions"}
                          </span>
                          <span className="h-6 w-6 rounded-full bg-blue-50 text-[#2057FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <PhoneCall size={12} />
                          </span>
                        </Link>

                        {/* Horizontal Card 2 */}
                        <Link
                          href="/help/guides"
                          className="group rounded-2xl bg-white p-3 sm:p-3.5 flex items-center justify-between gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                        >
                          <span className="text-xs font-bold text-neutral-900 group-hover:text-[#2057FF] transition-colors leading-tight">
                            {rtl ? "توثيق شامل وتسليم ملفات المصدر" : "Playbook & Source Handover"}
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
                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-500 shrink-0">
                  <span>{rtl ? "شفافية مطلقة في كل خطوة" : "Complete operational visibility"}</span>
                  <span className="font-bold text-[#2057FF]">{rtl ? "مسار تنفيذي واضح" : "Verified roadmap"}</span>
                </div>
              </div>
            </Reveal>

            {/* ── CARD 04 (Bottom-Right): CORE FAQS (PENCIL BLUE BRANDING) ── */}
            <Reveal delay={0.2} className="h-full flex flex-col">
              <div id="faqs-section" className="h-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-7 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between scroll-mt-24">
                <div className="flex-1 flex flex-col">
                  {/* Main Grid: Left Blue Portrait Block + Right Staggered Grid & Multi-Badge Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 sm:gap-4 items-stretch flex-1 h-full">

                    {/* Left Pencil Royal Blue Block */}
                    <div className="sm:col-span-6 rounded-3xl bg-[#2057FF] text-white p-5 sm:p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden">
                      <div className="pointer-events-none absolute -bottom-10 -start-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />

                      {/* 3-Line Large Bold Headline */}
                      <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                          {rtl ? (
                            <>
                              إجابات صريحة
                              <br />
                              عن منهجية العمل
                              <br />
                              والتشغيل المباشر؟
                            </>
                          ) : (
                            <>
                              Clear Answers
                              <br />
                              On How We Think,
                              <br />
                              Build &amp; Operate?
                            </>
                          )}
                        </h3>
                      </div>

                      {/* Clean Woman Portrait Blending With Blue Background */}
                      <div className="relative w-full flex-1 min-h-[190px] sm:min-h-[220px] mt-3 overflow-hidden flex items-end justify-center">
                        <Image
                          src="/help/clear-answers-on-how-we-think.jpg"
                          alt={rtl ? "مهندسو واستشاريو بنسل" : "Pencil Studio Team"}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, 360px"
                          priority
                        />
                      </div>
                    </div>

                    {/* Right Staggered Grid (2x2 Grid + Bottom Card With 4 Colored Badges) */}
                    <div className="sm:col-span-6 flex flex-col justify-between gap-2.5 h-full">

                      {/* 2x2 Grid of 4 Light-Gray Cards with Real Navigation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">

                        {/* Card 1: Blue circular badge (Pencil Blue) */}
                        <Link
                          href="/help/faqs"
                          className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-blue-200 border border-transparent p-3 sm:p-3.5 flex flex-col justify-between min-h-[80px] transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          <p className="text-[11px] sm:text-xs font-bold text-neutral-900 group-hover:text-[#2057FF] transition-colors leading-snug">
                            {rtl ? "ما العلاقة بين بينسل وبنسل ستوديو؟" : "What is the relation between Pencil & Studio?"}
                          </p>
                          <span className="h-5 w-5 rounded-full bg-[#2057FF] text-white flex items-center justify-center self-end mt-1.5 shadow-2xs group-hover:scale-110 transition-transform">
                            <BookOpen size={10} />
                          </span>
                        </Link>

                        {/* Card 2: Green circular badge (Pencil Green) */}
                        <Link
                          href="/help/faqs"
                          className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-emerald-200 border border-transparent p-3 sm:p-3.5 flex flex-col justify-between min-h-[80px] transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          <p className="text-[11px] sm:text-xs font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors leading-snug">
                            {rtl ? "كيف نضمن سرية بيانات وأفكار مشروعك؟" : "How is IP & client confidentiality protected?"}
                          </p>
                          <span className="h-5 w-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center self-end mt-1.5 font-bold shadow-2xs group-hover:scale-110 transition-transform">
                            <ShieldCheck size={11} strokeWidth={2.5} />
                          </span>
                        </Link>

                        {/* Card 3: Red circular badge (Pencil Red) */}
                        <Link
                          href="/help/contact"
                          className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-red-200 border border-transparent p-3 sm:p-3.5 flex flex-col justify-between min-h-[80px] transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          <p className="text-[11px] sm:text-xs font-bold text-neutral-900 group-hover:text-[#DD3126] transition-colors leading-snug">
                            {rtl ? "هل تقدمون استشارات مجانية قبل التعاقد؟" : "Do you offer free strategic discovery calls?"}
                          </p>
                          <span className="h-5 w-5 rounded-full bg-[#DD3126] text-white flex items-center justify-center self-end mt-1.5 shadow-2xs group-hover:scale-110 transition-transform">
                            <MessagesSquare size={10} />
                          </span>
                        </Link>

                        {/* Card 4: Black circular badge (Pencil Dark) */}
                        <Link
                          href="/help/faqs"
                          className="group rounded-2xl bg-neutral-100/80 hover:bg-white hover:border-neutral-300 border border-transparent p-3 sm:p-3.5 flex flex-col justify-between min-h-[80px] transition-all shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          <p className="text-[11px] sm:text-xs font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors leading-snug">
                            {rtl ? "ما هي معايير الجاهزية واتفاقيات SLA؟" : "What are your platform uptime SLAs?"}
                          </p>
                          <span className="h-5 w-5 rounded-full bg-neutral-900 text-white flex items-center justify-center self-end mt-1.5 shadow-2xs group-hover:scale-110 transition-transform">
                            <Clock size={10} />
                          </span>
                        </Link>

                      </div>

                      {/* Row 3: Horizontal Card with 4 Circular Colored Badges */}
                      <div className="rounded-2xl bg-neutral-100/90 p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-2xs shrink-0">
                        <p className="text-[11px] sm:text-xs font-bold text-neutral-900 leading-snug">
                          {rtl
                            ? "دعم مستمر ورعاية شاملة بعد الإطلاق دون أي مفاجآت في التكاليف"
                            : "Continuing operational care & cloud maintenance without hidden costs"}
                        </p>

                        {/* 4 Colored Badges Cluster (Pencil Blue, Pencil Red, Pencil Green, Pencil Dark) */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <Link
                            href="/help/guides"
                            aria-label={rtl ? "الأدلة والتوثيق" : "Guides"}
                            className="h-6 w-6 rounded-full bg-[#2057FF] text-white hover:scale-110 flex items-center justify-center shadow-2xs transition-transform"
                          >
                            <Sparkles size={10} />
                          </Link>
                          <Link
                            href="/help/faqs"
                            aria-label={rtl ? "الأسئلة الشائعة" : "FAQs"}
                            className="h-6 w-6 rounded-full bg-[#DD3126] text-white hover:scale-110 flex items-center justify-center shadow-2xs transition-transform"
                          >
                            <BookOpen size={10} />
                          </Link>
                          <Link
                            href="/help/contact"
                            aria-label={rtl ? "تواصل مباشر" : "Contact"}
                            className="h-6 w-6 rounded-full bg-[#16A34A] text-white hover:scale-110 flex items-center justify-center shadow-2xs font-bold transition-transform"
                          >
                            <Check size={10} strokeWidth={3} />
                          </Link>
                          <Link
                            href="/help/faqs"
                            aria-label={rtl ? "تصفح كل الأسئلة" : "Browse all FAQs"}
                            className="h-6 w-6 rounded-full bg-neutral-900 text-white hover:bg-[#2057FF] flex items-center justify-center shadow-2xs transition-colors"
                          >
                            <ArrowUpRight size={11} strokeWidth={2.5} />
                          </Link>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Bottom Footer Strip */}
                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold shrink-0">
                  <Link
                    href="/help/faqs"
                    className="inline-flex items-center gap-1.5 text-[#2057FF] hover:underline"
                  >
                    <span>{rtl ? "تصفح جميع الأسئلة الشائعة (15+ سؤالاً)" : "Browse All 15+ Frequently Asked Questions"}</span>
                    <NextIcon size={13} />
                  </Link>
                  <span className="text-neutral-400 font-mono text-[11px]">FAQs Directory</span>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────────────
            4. CLOSING PRESENTATION SLIDE (PENCIL STUDIO BRAND IDENTITY & EDITORIAL CRAFT)
        ───────────────────────────────────────────────────────────────────── */}
        <section className="container-custom pb-20 md:pb-28">
          <Reveal delay={0.25} className="w-full">
            {/* Slide Outer Presentation Container (Full container-custom width matching Section 3 above) */}
            <div className="w-full rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

                {/* Left Stately Container (Flagship Pencil Royal Blue with Ambient Glow) */}
                <div className="lg:col-span-5 rounded-3xl sm:rounded-[28px] bg-[#2057FF] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between min-h-[420px] sm:min-h-[460px] shadow-sm relative overflow-hidden">
                  <div className="pointer-events-none absolute -bottom-10 -start-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />

                  {/* Authentic Pencil Studio Typography & Tone */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-mono font-bold tracking-wider uppercase text-blue-100 mb-5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#61d095]" />
                      {rtl ? "شراكة تقنية واستشارية مباشرة" : "Direct Partnership"}
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white leading-[1.15]">
                      {rtl ? (
                        <>
                          جاهز للانطلاق{" "}
                          <span className="font-light text-blue-200">
                            بثقة معمارية كاملة؟
                          </span>
                          <span className="text-[#61d095]">.</span>
                        </>
                      ) : (
                        <>
                          Ready to Move{" "}
                          <span className="italic font-light text-blue-200">
                            with Complete Confidence?
                          </span>
                          <span className="text-[#61d095]">.</span>
                        </>
                      )}
                    </h3>
                  </div>

                  {/* Bottom Text in Pencil Studio Voice */}
                  <p className="mt-8 text-xs sm:text-sm font-medium text-blue-100/90 leading-relaxed">
                    {rtl
                      ? "بنسل ستوديو شريكك الرقمي المباشر لهندسة الهويات، بناء المنصات البرمجية، وتفعيل حلول الذكاء الاصطناعي مع ضمانات تشغيلية كاملة."
                      : "Pencil Studio is your direct digital partner to architect resilient brand systems, custom software platforms, and secure AI integrations."}
                  </p>
                </div>

                {/* Right Container: 2x2 Grid of 4 Chunky Rounded Cards + Dark Slate Bottom Action Container */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-4 h-full">

                  {/* Top Tier: 2x2 Grid of 4 Rounded Chunky Cards with Pencil Brand Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 flex-1">

                    {/* Card 1: Pencil Blue Accent */}
                    <div className="rounded-2xl sm:rounded-[22px] bg-neutral-100/90 hover:bg-neutral-100 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] shadow-2xs transition-colors">
                      <p className="text-xs sm:text-sm lg:text-[14px] font-bold text-neutral-900 leading-snug">
                        {rtl
                          ? "استشارة استراتيجية مباشرة غير ملزمة مع كبار المهندسين والمصممين."
                          : "Free strategic discovery call with our senior architects."}
                      </p>
                      <span className="h-5 w-5 rounded-full bg-[#2057FF] text-white flex items-center justify-center self-end mt-2 shadow-2xs">
                        <Sparkles size={10} />
                      </span>
                    </div>

                    {/* Card 2: Pencil Green Accent */}
                    <div className="rounded-2xl sm:rounded-[22px] bg-neutral-100/90 hover:bg-neutral-100 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] shadow-2xs transition-colors">
                      <p className="text-xs sm:text-sm lg:text-[14px] font-bold text-neutral-900 leading-snug">
                        {rtl
                          ? "فحص فني ومراجعة تفصيلية للنطاق ومواصفات المشروع خلال ٢٤ ساعة."
                          : "Technical scope review and architecture triage within 24 hours."}
                      </p>
                      <span className="h-5 w-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center self-end mt-2 shadow-2xs font-bold">
                        <Check size={10} strokeWidth={3} />
                      </span>
                    </div>

                    {/* Card 3: Pencil Red Accent */}
                    <div className="rounded-2xl sm:rounded-[22px] bg-neutral-100/90 hover:bg-neutral-100 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] shadow-2xs transition-colors">
                      <p className="text-xs sm:text-sm lg:text-[14px] font-bold text-neutral-900 leading-snug">
                        {rtl
                          ? "حماية كاملة لأفكار وبيانات مشروعك باتفاقية سرية رسمية (NDA)."
                          : "Complete IP and confidentiality protection under official NDA."}
                      </p>
                      <span className="h-5 w-5 rounded-full bg-[#DD3126] text-white flex items-center justify-center self-end mt-2 shadow-2xs font-bold">
                        <ShieldCheck size={10} />
                      </span>
                    </div>

                    {/* Card 4: Pencil Dark Accent */}
                    <div className="rounded-2xl sm:rounded-[22px] bg-neutral-100/90 hover:bg-neutral-100 p-5 sm:p-6 lg:p-7 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] shadow-2xs transition-colors">
                      <p className="text-xs sm:text-sm lg:text-[14px] font-bold text-neutral-900 leading-snug">
                        {rtl
                          ? "تواصل مباشر مع صناع القرار وفريق هندسي داخلي 100% دون وسطاء."
                          : "Direct access to decision-makers & 100% in-house engineering."}
                      </p>
                      <span className="h-5 w-5 rounded-full bg-neutral-900 text-white flex items-center justify-center self-end mt-2 shadow-2xs">
                        <ArrowUpRight size={10} strokeWidth={2.5} />
                      </span>
                    </div>

                  </div>

                  {/* Bottom Tier: PENCIL DARK SLATE Container (#0A0D14) + PENCIL BLUE Action Button (#2057FF) */}
                  <div className="rounded-2xl sm:rounded-3xl bg-neutral-950 text-white p-6 sm:p-7 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm relative overflow-hidden min-h-[125px] sm:min-h-[135px] border border-neutral-900">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                        {rtl ? (
                          <>
                            احجز استشارتك الهندسية{" "}
                            <span className="font-light text-neutral-400">
                              المجانية
                            </span>
                            <span className="text-[#2057FF]">.</span>
                          </>
                        ) : (
                          <>
                            Schedule a Free{" "}
                            <span className="italic font-light text-neutral-400">
                              Consultation
                            </span>
                            <span className="text-[#2057FF]">.</span>
                          </>
                        )}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm font-medium text-neutral-400 leading-snug">
                        {rtl
                          ? "مع قادة الفريق الهندسي والإبداعي - تشخيص استراتيجي واستجابة فورية 100%."
                          : "With our lead design & engineering team - direct scope review, 100% immediate response."}
                      </p>
                    </div>

                    {/* Pencil Studio Signature CTA Button */}
                    <PencilButton
                      href="/help/contact"
                      variant="primary"
                      size="lg"
                      showPencilIcon
                      hoverLabel={rtl ? "احجز استشارتك ←" : "Schedule Call →"}
                      className="shrink-0 font-bold shadow-lg shadow-[#2057FF]/25"
                    >
                      {rtl ? "احجز موعدك الآن" : "Schedule Consultation"}
                    </PencilButton>
                  </div>

                </div>

              </div>
            </div>

            {/* Interactive Bottom Signature Pill */}
            <div className="mt-7 flex justify-center">
              <Link
                href="/help/contact"
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-neutral-200/90 bg-white hover:bg-neutral-50 shadow-2xs hover:shadow-sm transition-all group"
              >
                <span className="text-xs sm:text-sm font-bold text-neutral-800 group-hover:text-[#2057FF] transition-colors">
                  {rtl ? "تواصل مع مهندسينا مباشرة لمناقشة المتطلبات الفنية والمعمارية لمشروعك" : "Message our senior team directly to discuss your architecture & scope"}
                </span>
                <div className="h-6 w-6 rounded-full bg-[#2057FF] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <NextIcon size={12} className={rtl ? "group-hover:-translate-x-0.5 transition-transform" : "group-hover:translate-x-0.5 transition-transform"} />
                </div>
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Global Cinematic Footer */}
      <div ref={footerRef}>
        <Footer />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          FLOATING CENTERED NAVIGATION DOCK (POPS UP PAST HERO)
      ───────────────────────────────────────────────────────────────────── */}
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
                  <span>HELP</span>
                </div>

                {/* The 4 Navigation Tabs */}
                {HELP_SUB_NAV.map((item) => {
                  const active = item.href === "/help";
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all duration-300 sm:px-3 sm:py-1.5 sm:text-xs",
                        active
                          ? "bg-[#2057FF] text-white shadow-md shadow-blue-500/25"
                          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                      )}
                    >
                      <Icon
                        size={13}
                        className={cn(
                          "transition-transform group-hover:scale-110",
                          active ? "text-white" : "text-neutral-400 group-hover:text-neutral-700"
                        )}
                      />
                      <span className="whitespace-nowrap">{local(item, rtl)}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
