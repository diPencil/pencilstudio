"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Compass,
  Copy,
  FileText,
  Globe2,
  HelpCircle,
  LayoutGrid,
  LifeBuoy,
  Lightbulb,
  MessagesSquare,
  Rocket,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { LiquidBackdrop } from "@/components/editorial/liquid-backdrop";
import { PencilButton } from "@/components/ui/pencil-button";
import { PENCIL_PLAYBOOKS, type Playbook } from "@/lib/help/guides/pencil-playbooks";
import { cn } from "@/lib/utils";

// ─── Floating Bottom-Left Navigation Items ──────────────────────────────────
const HELP_SUB_NAV = [
  { href: "/help", en: "Help Center", ar: "مركز المساعدة", icon: LifeBuoy },
  { href: "/help/faqs", en: "FAQs", ar: "الأسئلة", icon: HelpCircle },
  { href: "/help/guides", en: "Guides", ar: "الأدلة", icon: BookOpen },
  { href: "/help/contact", en: "Contact Help", ar: "طلب مساعدة", icon: MessagesSquare },
];

// ─── Quick Search Suggestion Chips for Hero ──────────────────────────────────
const GUIDE_SEARCH_SUGGESTIONS = [
  { en: "The Brief", ar: "الموجز", guideId: "brief" },
  { en: "Brand Identity", ar: "الهوية", guideId: "branding" },
  { en: "Content Flow", ar: "المحتوى", guideId: "content" },
  { en: "Arabic & RTL", ar: "العربية و RTL", guideId: "rtl" },
  { en: "SuperFeliz AI", ar: "ذكاء سوبر فيليز", guideId: "ai" },
  { en: "Launch Operations", ar: "الإطلاق والتسليم", guideId: "launch" },
];

// ─── SuperFeliz Starburst Icon SVG ──────────────────────────────────────────
function SuperFelizMiniIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 608 619.3"
      fill="currentColor"
      className={cn("pointer-events-none select-none shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M525.2,318.1l79-23.2-80.6-17.2c-66-13.9-103.3-84.3-77.8-146.8l31.1-76.3-63.6,52.4c-52.2,42.9-130.4,28.1-163.4-30.8L209.7,4.4l1.2,82.4c1,67.4-59.2,119.4-125.9,108.6L3.8,182l65.3,50.4c53.4,41.2,56.5,120.8,6.4,166.1l-61.1,55.2,80-19.5c65.6-16,129.7,31.1,133.8,98.5l5.1,82.2,34.6-74.8c28.3-61.3,105.2-82,160.5-43.2l67.4,47.3-36.9-73.7c-30.2-60.4,1.6-133.4,66.3-152.5ZM334.3,355.6c-19.2,5.6-28.7,27.3-19.7,45.2l11,21.8-20-14c-16.4-11.5-39.2-5.3-47.6,12.8l-10.3,22.2-1.5-24.4c-1.2-20-20.3-34-39.7-29.3l-23.7,5.8,18.1-16.4c14.8-13.4,13.9-37-1.9-49.3l-19.3-14.9,24.1,3.9c19.7,3.3,37.6-12.1,37.3-32.1l-.3-24.5,11.9,21.3c9.8,17.5,33,21.9,48.4,9.1l18.9-15.6-9.2,22.7c-7.6,18.6,3.5,39.5,23.1,43.6l23.9,5.1-23.4,7Z" />
    </svg>
  );
}

// ─── 6 Core Operational Categories ───────────────────────────────────────────
interface GuideCategoryMeta {
  id: string;
  nameEn: string;
  nameAr: string;
  icon: React.ComponentType<{ className?: string }>;
  playbookIds: string[];
  gradient: string;
  badgeBg: string;
}

const GUIDE_CATEGORIES: GuideCategoryMeta[] = [
  {
    id: "strategy",
    nameEn: "Brief & Strategy",
    nameAr: "الموجز والاستراتيجية",
    icon: ClipboardList,
    playbookIds: ["brief", "content"],
    gradient: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-500",
  },
  {
    id: "brand",
    nameEn: "Brand & Identity",
    nameAr: "الهوية والعلامة",
    icon: Sparkles,
    playbookIds: ["branding", "assets"],
    gradient: "from-rose-500 to-red-600",
    badgeBg: "bg-[#dd3126]",
  },
  {
    id: "ux",
    nameEn: "UX & Digital Shapes",
    nameAr: "التجربة والبنية الرقمية",
    icon: LayoutGrid,
    playbookIds: ["planning", "format"],
    gradient: "from-blue-600 to-indigo-600",
    badgeBg: "bg-[#2057FF]",
  },
  {
    id: "arabic",
    nameEn: "Arabic & RTL Native",
    nameAr: "العربية وتجربة RTL",
    icon: Globe2,
    playbookIds: ["rtl"],
    gradient: "from-emerald-500 to-teal-600",
    badgeBg: "bg-[#53ab47]",
  },
  {
    id: "ai",
    nameEn: "SuperFeliz AI",
    nameAr: "ذكاء سوبر فيليز",
    icon: SuperFelizMiniIcon,
    playbookIds: ["ai"],
    gradient: "from-blue-600 via-[#2057FF] to-cyan-400",
    badgeBg: "bg-gradient-to-tr from-[#2057FF] to-[#00d2ff]",
  },
  {
    id: "operations",
    nameEn: "Launch & Delivery",
    nameAr: "الإطلاق والتسليم",
    icon: Rocket,
    playbookIds: ["feedback", "approvals", "launch", "support"],
    gradient: "from-zinc-800 to-neutral-950",
    badgeBg: "bg-neutral-900",
  },
];

function getCategoryForPlaybook(playbookId: string): GuideCategoryMeta {
  return (
    GUIDE_CATEGORIES.find((cat) => cat.playbookIds.includes(playbookId)) ??
    GUIDE_CATEGORIES[0]
  );
}

const PLAYBOOK_META: Record<string, { durationEn: string; durationAr: string; tagEn: string; tagAr: string }> = {
  brief: { durationEn: "4 min read", durationAr: "٤ دقائق قراءة", tagEn: "Briefing • Clarity", tagAr: "موجز • قرارات" },
  branding: { durationEn: "6 min read", durationAr: "٦ دقائق قراءة", tagEn: "Identity • System", tagAr: "هوية • نظام" },
  content: { durationEn: "5 min read", durationAr: "٥ دقائق قراءة", tagEn: "Copy • Structure", tagAr: "محتوى • بنية" },
  assets: { durationEn: "4 min read", durationAr: "٤ دقائق قراءة", tagEn: "Assets • Hand-off", tagAr: "أصول • تسليم" },
  planning: { durationEn: "7 min read", durationAr: "٧ دقائق قراءة", tagEn: "Journey • UX Flow", tagAr: "رحلة • تجربة" },
  format: { durationEn: "5 min read", durationAr: "٥ دقائق قراءة", tagEn: "Architecture • CMS", tagAr: "بنية • منصة" },
  rtl: { durationEn: "5 min read", durationAr: "٥ دقائق قراءة", tagEn: "Typography • RTL", tagAr: "خطوط • اتجاه" },
  ai: { durationEn: "6 min read", durationAr: "٦ دقائق قراءة", tagEn: "SuperFeliz • Automate", tagAr: "سوبر فيليز • أتمتة" },
  feedback: { durationEn: "4 min read", durationAr: "٤ دقائق قراءة", tagEn: "Review • Precision", tagAr: "مراجعة • دقة" },
  approvals: { durationEn: "5 min read", durationAr: "٥ دقائق قراءة", tagEn: "Governance • Scope", tagAr: "اعتماد • نطاق" },
  launch: { durationEn: "8 min read", durationAr: "٨ دقائق قراءة", tagEn: "Go-live • Operations", tagAr: "إطلاق • تشغيل" },
  support: { durationEn: "6 min read", durationAr: "٦ دقائق قراءة", tagEn: "Care • Retainers", tagAr: "رعاية • استدامة" },
};

export function PencilGuidesEditorial() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activePlaybook, setActivePlaybook] = React.useState<Playbook | null>(null);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const categoriesSectionRef = React.useRef<HTMLElement>(null);
  const librarySectionRef = React.useRef<HTMLElement>(null);

  // ─── Floating Dock State & Scroll Observer ─────────────────────────────────
  const [showFloatingNav, setShowFloatingNav] = React.useState(false);
  const footerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let footerInView = false;

    const updateVisibility = () => {
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

  // Sync with URL Hash on load or change (e.g. #brief, #branding)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const match = PENCIL_PLAYBOOKS.find((p) => p.id === hash);
        if (match) setActivePlaybook(match);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const handleOpenPlaybook = (p: Playbook) => {
    setActivePlaybook(p);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${p.id}`);
    }
  };

  const handleCloseModal = () => {
    setActivePlaybook(null);
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  // Filter playbooks based on category and search query
  const filteredPlaybooks = React.useMemo(() => {
    return PENCIL_PLAYBOOKS.filter((p) => {
      if (selectedCategory) {
        const cat = GUIDE_CATEGORIES.find((c) => c.id === selectedCategory);
        if (cat && !cat.playbookIds.includes(p.id)) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleEn = p.title.en.toLowerCase();
        const titleAr = p.title.ar.toLowerCase();
        const introEn = p.intro.en.toLowerCase();
        const introAr = p.intro.ar.toLowerCase();
        return titleEn.includes(q) || titleAr.includes(q) || introEn.includes(q) || introAr.includes(q);
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Copy playbook markdown
  const handleCopyMarkdown = (p: Playbook) => {
    const title = rtl ? p.title.ar : p.title.en;
    const intro = rtl ? p.intro.ar : p.intro.en;
    const before = rtl ? p.before.ar : p.before.en;
    const tip = rtl ? p.tip.ar : p.tip.en;
    const steps = p.steps
      .map((s, idx) => `${idx + 1}. **${rtl ? s.title.ar : s.title.en}**: ${rtl ? s.body.ar : s.body.en}`)
      .join("\n\n");
    const checklist = p.checklist
      .map((item) => `- [ ] ${rtl ? item.ar : item.en}`)
      .join("\n");

    const md = `# ${title}\n\n${intro}\n\n### ${rtl ? "قبل البدء" : "Before You Begin"}\n${before}\n\n### ${rtl ? "الخطوات التنفيذية" : "Action Steps"}\n${steps}\n\n### ${rtl ? "قائمة المراجعة" : "Operational Checklist"}\n${checklist}\n\n### ${rtl ? "نصيحة الاستوديو" : "Pro Tip"}\n> ${tip}\n\n---\n*PENCIL Studio Guides & Playbooks - https://dipencil.com/help/guides*`;

    navigator.clipboard.writeText(md).then(() => {
      setCopiedId(p.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className="relative min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057FF] selection:text-white"
    >
      <Header solid light />

      <main className="relative z-10">
        {/* ───────────────────────────────────────────────────────────────────
            1. EXACT ORIGINAL EDITORIAL GUIDES HERO & INTEGRATED VISUAL SHOWCASE
        ─────────────────────────────────────────────────────────────────── */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex flex-col items-center overflow-hidden bg-[#FBFBFB] border-b border-neutral-200/70">
          {/* Interactive liquid pearl & cobalt canvas */}
          <LiquidBackdrop />

          {/* Architectural dot matrix */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="container-custom relative z-20 max-w-5xl text-center w-full">
            {/* Eyebrow Chip */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/95 px-4 py-1.5 text-xs font-semibold text-neutral-700 shadow-xs backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#2057FF] animate-pulse" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  01 // EDITORIAL PLAYBOOKS LIBRARY
                </span>
                <span className="text-neutral-300">•</span>
                <span className="font-bold text-[#2057FF]">
                  {rtl ? "12 دليلاً تشغيلياً" : "12 Operational Playbooks"}
                </span>
              </div>
            </Reveal>

            {/* Editorial Title with High-Contrast Typography */}
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl leading-[1.15]">
                {rtl ? (
                  <>
                    <span className="block">دفاتر عمل بينسل.</span>
                    <span className="block font-light text-neutral-500 mt-1">
                      فكرة أوضح، وبداية أفضل قبل التنفيذ.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block font-extrabold tracking-tight">
                      Pencil Playbooks.
                    </span>
                    <span className="block font-light italic text-neutral-500 mt-1">
                      Clearer thinking. Better starts before production.
                    </span>
                  </>
                )}
              </h1>
            </Reveal>

            {/* Subtitle strictly 2 lines */}
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-relaxed">
                {rtl
                  ? "أدلة ميدانية عملية لتجهيز الموجز، وتنظيم المحتوى، واختيار البنية البرمجية، وتقديم ملاحظات تدفع العمل إلى الأمام."
                  : "Field-tested playbooks for better briefs, structured content, architectural choices, and actionable production feedback."}
              </p>
            </Reveal>

            {/* Prominent Search Interface with Rotating Glow */}
            <Reveal delay={0.15}>
              <div className="mx-auto mt-8 w-full">
                <div className="mx-auto max-w-2xl">
                  <div className="group relative rounded-full p-[2px] transition-all duration-300 focus-within:shadow-xl focus-within:shadow-blue-500/20">
                    {/* Animated laser glow ring on hover/focus */}
                    <div className="pointer-events-none absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#2057FF]/30 via-[#00D2FF]/40 to-[#2057FF]/30 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

                    <div className="relative flex items-center gap-3 rounded-full border border-neutral-300/90 bg-white/95 px-4 py-2.5 shadow-sm backdrop-blur-xl transition group-focus-within:border-[#2057FF]">
                      <Search
                        size={18}
                        className="text-neutral-400 group-focus-within:text-[#2057FF] transition-colors shrink-0"
                      />
                      <input
                        ref={searchInputRef}
                        id="guide-search-input"
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={
                          rtl
                            ? "ابحث في الأدلة: الموجز، الهوية، المحتوى، العربية، سوبر فيليز، الإطلاق…"
                            : "Search playbooks: brief, branding, content, RTL, SuperFeliz, launch..."
                        }
                        className="min-w-0 flex-1 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden [&::-webkit-search-cancel-button]:hidden"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => {
                            setSearchQuery("");
                            searchInputRef.current?.focus();
                          }}
                          aria-label={rtl ? "مسح البحث" : "Clear search"}
                          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
                        >
                          <X size={16} />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          categoriesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                        }}
                        aria-label={rtl ? "استعراض الأدلة" : "Browse playbooks"}
                        className="flex h-9 cursor-pointer items-center gap-1.5 rounded-full bg-neutral-950 px-4 text-xs font-bold text-white transition hover:bg-[#2057FF] hover:shadow-md hover:shadow-blue-500/20"
                      >
                        <span>{rtl ? "استعراض" : "Browse"}</span>
                        {rtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick-Jump Suggestion Chips */}
                <div className="mx-auto mt-4 w-full overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 px-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap w-max mx-auto">
                    <span className="text-[11px] font-semibold text-neutral-400 whitespace-nowrap shrink-0 me-1">
                      {rtl ? "أدلة شائعة:" : "Quick topics:"}
                    </span>
                    {GUIDE_SEARCH_SUGGESTIONS.map((chip) => (
                      <button
                        key={chip.guideId}
                        type="button"
                        onClick={() => {
                          const p = PENCIL_PLAYBOOKS.find((x) => x.id === chip.guideId);
                          if (p) handleOpenPlaybook(p);
                        }}
                        className="rounded-full border border-neutral-200/90 bg-white/95 px-3 py-1 text-[11px] font-medium text-neutral-600 transition hover:border-[#2057FF]/40 hover:bg-[#EEF3FF] hover:text-[#2057FF] cursor-pointer whitespace-nowrap shrink-0 shadow-2xs backdrop-blur-md"
                      >
                        #{rtl ? chip.ar : chip.en}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ───────────────────────────────────────────────────────────────────
              VISUAL SHOWCASE (Exact matching size and container as /help/contact)
          ─────────────────────────────────────────────────────────────────── */}
          <div className="mt-8 md:mt-12 relative w-full max-w-6xl mx-auto px-0 sm:px-2">
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden border border-neutral-200/80 bg-neutral-100 group">
                <div className="relative aspect-16/10 w-full">
                  <Image
                    src="/help/helpguides.jpg"
                    alt={rtl ? "دفاتر عمل وأدلة بنسل ستوديو" : "Pencil Studio Playbooks & Guides"}
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

        {/* ───────────────────────────────────────────────────────────────────
            2. SECTION 02: مسارات العمل والتصنيفات التشغيلية (Exact Reference Layout)
               With Studio Editorial Headings & Eyebrows
        ─────────────────────────────────────────────────────────────────── */}
        <section ref={categoriesSectionRef} className="container-custom py-12 md:py-16">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6 mb-8 text-start">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#2057FF]">
                  <LayoutGrid size={13} />
                  <span>{rtl ? "02 // مسارات العمل والتصنيفات التشغيلية" : "02 // OPERATIONAL PATHWAYS & DISCIPLINES"}</span>
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                  {rtl ? (
                    <>
                      تصنيف دفاتر العمل:{" "}
                      <span className="font-light italic text-neutral-500">
                        اختر المحور الذي تبدأ منه.
                      </span>
                    </>
                  ) : (
                    <>
                      Operational pathways:{" "}
                      <span className="font-light italic text-neutral-500">
                        choose where your thinking begins.
                      </span>
                    </>
                  )}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-xl">
                  {rtl
                    ? "ستة محاور استراتيجية تغطي دورة حياة المشروع من إعداد الموجز وحتى الإطلاق والرعاية المستمرة."
                    : "Six strategic pillars spanning the complete lifecycle from briefing to release and ongoing care."}
                </p>
              </div>

              {selectedCategory && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2057FF] hover:underline self-start sm:self-auto cursor-pointer"
                >
                  <span>{rtl ? "استعراض جميع التصنيفات" : "Show All Disciplines"}</span>
                  {rtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
                </button>
              )}
            </div>
          </Reveal>

          {/* 6 Category Cards Row (Reference Layout) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {GUIDE_CATEGORIES.map((cat, idx) => {
              const IconComp = cat.icon;
              const isSelected = selectedCategory === cat.id;
              const count = cat.playbookIds.length;

              return (
                <Reveal key={cat.id} delay={idx * 0.04}>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCategory(isSelected ? null : cat.id)
                    }
                    className={cn(
                      "w-full h-full text-center flex flex-col items-center justify-between p-5 sm:p-6 rounded-3xl transition-all duration-300 cursor-pointer border select-none group",
                      isSelected
                        ? "bg-[#2057FF] text-white border-[#2057FF] shadow-lg shadow-blue-500/25 -translate-y-1"
                        : "bg-[#EEF4FF]/70 text-neutral-900 border-blue-100/60 hover:bg-[#E3EDFF] hover:-translate-y-1 hover:shadow-md"
                    )}
                  >
                    {/* Centered White Squircle Icon Badge */}
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs",
                        isSelected
                          ? "bg-white text-[#2057FF]"
                          : "bg-white text-neutral-900 group-hover:scale-105 group-hover:shadow-md"
                      )}
                    >
                      <IconComp className="h-6 w-6" />
                    </div>

                    {/* Category Title */}
                    <span
                      className={cn(
                        "mt-4 text-xs sm:text-sm font-bold leading-tight transition-colors line-clamp-1",
                        isSelected ? "text-white" : "text-neutral-900"
                      )}
                    >
                      {rtl ? cat.nameAr : cat.nameEn}
                    </span>

                    {/* Count */}
                    <span
                      className={cn(
                        "mt-1 text-[11px] font-medium transition-colors",
                        isSelected ? "text-white/80" : "text-neutral-400"
                      )}
                    >
                      {rtl ? `${count} أدلة عمل` : `${count} playbooks`}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Reference Carousel Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedCategory === null ? "w-6 bg-neutral-900" : "w-2 bg-neutral-300"
              )}
            />
            <span
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedCategory !== null ? "w-6 bg-[#2057FF]" : "w-2 bg-neutral-300"
              )}
            />
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
            3. SECTION 03: أرشيف دفاتر العمل وقوائم الفحص (Exact Reference 4-Card Grid on Soft Warm BG)
               With Studio Editorial Headings & Eyebrows
        ─────────────────────────────────────────────────────────────────── */}
        <section ref={librarySectionRef} className="mt-8 py-14 sm:py-20 bg-[#FAF8F5] border-y border-neutral-200/60">
          <div className="container-custom">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6 mb-8 text-start">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#2057FF]">
                    <BookOpen size={13} />
                    <span>{rtl ? "03 // أرشيف دفاتر العمل وقوائم الفحص" : "03 // THE PLAYBOOKS ARCHIVE & CHECKLISTS"}</span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                    {rtl ? (
                      <>
                        أدلة العمل الموثقة:{" "}
                        <span className="font-light italic text-neutral-500">
                          خطوات واضحة، وقوائم فحص دقيقة.
                        </span>
                      </>
                    ) : (
                      <>
                        Documented playbooks:{" "}
                        <span className="font-light italic text-neutral-500">
                          clear steps, verified checklists.
                        </span>
                      </>
                    )}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-xl">
                    {rtl
                      ? `كل دفتر عمل مصمم لإنهاء الحيرة، وتحديد المسؤول، وحماية جودة النتيجة (${filteredPlaybooks.length} دليلاً متاحاً).`
                      : `Structured to eliminate ambiguity, assign ownership, and protect core objectives (${filteredPlaybooks.length} actionable models).`}
                  </p>
                </div>

                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold self-start sm:self-auto">
                    {rtl
                      ? `المسار المختار: ${GUIDE_CATEGORIES.find((c) => c.id === selectedCategory)?.nameAr}`
                      : `Active Filter: ${GUIDE_CATEGORIES.find((c) => c.id === selectedCategory)?.nameEn}`}
                  </span>
                )}
              </div>
            </Reveal>

            {/* 4-Column Playbook Cards Grid (Reference Layout) */}
            {filteredPlaybooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredPlaybooks.map((p, idx) => {
                  const cat = getCategoryForPlaybook(p.id);
                  const meta = PLAYBOOK_META[p.id] ?? {
                    durationEn: "5 min read",
                    durationAr: "٥ دقائق قراءة",
                    tagEn: "Playbook",
                    tagAr: "دليل عمل",
                  };
                  const CatIcon = cat.icon;

                  return (
                    <Reveal key={p.id} delay={idx * 0.04} className="h-full">
                      <div
                        id={p.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleOpenPlaybook(p)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleOpenPlaybook(p);
                          }
                        }}
                        className="group flex h-full flex-col justify-between rounded-[26px] border border-neutral-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#2057FF]/40 hover:shadow-xl hover:shadow-neutral-900/5 cursor-pointer text-start outline-none focus-visible:ring-2 focus-visible:ring-[#2057FF]"
                      >
                        <div>
                          {/* Top Row: Category Pill with Icon */}
                          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-neutral-100 text-neutral-700 shrink-0">
                              <CatIcon className="h-3 w-3" />
                            </span>
                            <span className="line-clamp-1">{rtl ? cat.nameAr : cat.nameEn}</span>
                          </div>

                          {/* Middle: Title */}
                          <h3 className="mt-3.5 text-base font-bold leading-snug text-neutral-900 group-hover:text-[#2057FF] transition-colors line-clamp-2">
                            {rtl ? p.title.ar : p.title.en}
                          </h3>

                          {/* Meta items row */}
                          <div className="mt-2.5 flex items-center gap-2 text-xs font-medium text-neutral-400">
                            <span className="flex items-center gap-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
                              {rtl ? meta.durationAr : meta.durationEn}
                            </span>
                            <span>•</span>
                            <span className="line-clamp-1">{rtl ? meta.tagAr : meta.tagEn}</span>
                          </div>
                        </div>

                        {/* Bottom Row: Date/Author & Distinct Squircle App Icon Badge */}
                        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[11px] font-medium text-neutral-400">
                              {rtl ? "تحديث نوفمبر 2026" : "Nov 2026 by"}
                            </span>
                            <span className="text-xs font-bold text-neutral-800">
                              {rtl ? "بنسل ستوديو" : "Pencil Studio"}
                            </span>
                          </div>

                          {/* Squircle Branded Icon Badge */}
                          <div
                            className={cn(
                              "w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105",
                              cat.badgeBg
                            )}
                          >
                            <CatIcon className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            ) : (
              /* Empty Search State */
              <div className="rounded-3xl border border-neutral-200 bg-white p-10 text-center max-w-md mx-auto">
                <Search size={32} className="mx-auto text-neutral-300 mb-3" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {rtl ? "لا توجد نتائج مطابقة" : "No playbooks found"}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  {rtl
                    ? "جرب البحث بكلمات أخرى أو اختر تصنيفاً آخر."
                    : "Try adjusting your search query or reset category filter."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                  }}
                  className="mt-4 rounded-full bg-neutral-900 px-5 py-2 text-xs font-bold text-white hover:bg-neutral-800 cursor-pointer"
                >
                  {rtl ? "إعادة الضبط" : "Reset Filters"}
                </button>
              </div>
            )}

            {/* Bottom Actions Row */}
            <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
              <PencilButton
                variant="primary"
                size="default"
                hoverLabel={rtl ? "تواصل معنا ←" : "Get in touch →"}
                href="/help/contact"
              >
                {rtl ? "طلب مساعدة في تطبيق الأدلة" : "Need help executing?"}
              </PencilButton>

              {selectedCategory && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="px-5 py-2.5 rounded-full border border-neutral-300 text-xs font-bold text-neutral-700 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  {rtl ? "استعراض كافة الأدلة (12)" : "Show All Playbooks (12)"}
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ───────────────────────────────────────────────────────────────────
          4. INTERACTIVE SLIDE-OVER DRAWER MODAL FOR PLAYBOOK DETAILS
      ─────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activePlaybook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl bg-white shadow-2xl border border-neutral-200/90 z-10 overflow-hidden text-start"
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-100 flex items-start justify-between gap-4 bg-neutral-50/70">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-[#2057FF]">
                      {rtl
                        ? getCategoryForPlaybook(activePlaybook.id).nameAr
                        : getCategoryForPlaybook(activePlaybook.id).nameEn}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {rtl
                        ? PLAYBOOK_META[activePlaybook.id]?.durationAr
                        : PLAYBOOK_META[activePlaybook.id]?.durationEn}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-950 leading-tight">
                    {rtl ? activePlaybook.title.ar : activePlaybook.title.en}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-full p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors shrink-0 cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Intro */}
                <p className="text-sm sm:text-base leading-relaxed text-neutral-700 font-medium bg-blue-50/40 p-4 rounded-2xl border border-blue-100/50">
                  {rtl ? activePlaybook.intro.ar : activePlaybook.intro.en}
                </p>

                {/* Before You Begin */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    {rtl ? "قبل البدء" : "Before You Begin"}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {rtl ? activePlaybook.before.ar : activePlaybook.before.en}
                  </p>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    {rtl ? "الخطوات التنفيذية" : "Action Steps"}
                  </h4>
                  <div className="space-y-3">
                    {activePlaybook.steps.map((s, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-neutral-200/80 p-4 bg-white hover:border-[#2057FF]/40 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2057FF] text-white text-[10px] font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-sm font-bold text-neutral-900">
                            {rtl ? s.title.ar : s.title.en}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed ps-7">
                          {rtl ? s.body.ar : s.body.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operational Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                    {rtl ? "قائمة الفحص الميدانية" : "Operational Checklist"}
                  </h4>
                  <div className="space-y-2">
                    {activePlaybook.checklist.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium bg-neutral-50 px-3.5 py-2.5 rounded-xl border border-neutral-150"
                      >
                        <Check size={15} className="text-[#2057FF] shrink-0" />
                        <span>{rtl ? item.ar : item.en}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Studio Tip */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                  <div className="flex items-center gap-2 text-amber-900 text-xs font-bold mb-1">
                    <Lightbulb size={14} className="text-amber-600" />
                    <span>{rtl ? "نصيحة بنسل ستوديو" : "Pencil Studio Tip"}</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    {rtl ? activePlaybook.tip.ar : activePlaybook.tip.en}
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-4 sm:p-5 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleCopyMarkdown(activePlaybook)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300 text-xs font-bold text-neutral-800 bg-white hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  {copiedId === activePlaybook.id ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span>{rtl ? "تم النسخ بنجاح!" : "Copied Markdown!"}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>{rtl ? "نسخ الدليل كـ Markdown" : "Copy as Markdown"}</span>
                    </>
                  )}
                </button>

                <PencilButton
                  variant="primary"
                  size="sm"
                  href="/help/contact"
                  hoverLabel={rtl ? "تواصل الآن ←" : "Contact Now →"}
                >
                  {rtl ? "ابدأ هذا المسار" : "Start this journey"}
                </PencilButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ───────────────────────────────────────────────────────────────────
          FLOATING CENTERED NAVIGATION DOCK (AUTOHIDE BEHAVIOR)
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
                  <span className="h-2 w-2 rounded-full bg-[#2057FF] animate-pulse" />
                  <span>HELP</span>
                </div>

                {/* The 4 Navigation Tabs */}
                {HELP_SUB_NAV.map((item) => {
                  const active = item.href === "/help/guides";
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
                          active
                            ? "text-white"
                            : "text-neutral-400 group-hover:text-neutral-700"
                        )}
                      />
                      <span className="whitespace-nowrap">{rtl ? item.ar : item.en}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
