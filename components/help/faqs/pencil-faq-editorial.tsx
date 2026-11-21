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
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Compass,
  Copy,
  HelpCircle,
  LayoutGrid,
  LifeBuoy,
  MessagesSquare,
  Minus,
  Plus,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { LiquidBackdrop } from "@/components/editorial";
import { PencilButton } from "@/components/ui/pencil-button";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import {
  FAQ_CHAPTERS,
  PENCIL_EDITORIAL_QUESTIONS,
  type PencilQuestion,
} from "@/lib/help/faqs/pencil-faq-editorial";
import { type LocalText } from "@/lib/studio-care/studio-care-content";
import { cn } from "@/lib/utils";

// ─── Floating Bottom Quick Dock Navigation ───────────────────────────────────
const HELP_SUB_NAV = [
  { href: "/help", en: "Help Center", ar: "مركز المساعدة", icon: LifeBuoy },
  { href: "/help/faqs", en: "FAQs", ar: "الأسئلة", icon: HelpCircle },
  { href: "/help/guides", en: "Guides", ar: "الأدلة", icon: BookOpen },
  { href: "/help/contact", en: "Contact Help", ar: "طلب مساعدة", icon: MessagesSquare },
];

// ─── Quick Suggestion Chips for Hero Search ─────────────────────────────────
const FAQ_SEARCH_SUGGESTIONS = [
  { en: "SuperFeliz", ar: "SuperFeliz", category: "ai", term: "SuperFeliz" },
  { en: "SaaS & Apps", ar: "تطبيقات و SaaS", category: "digital", term: "SaaS" },
  { en: "Arabic & RTL", ar: "العربية و RTL", category: "digital", term: "Arabic" },
  { en: "Scope & Budget", ar: "النطاق والميزانية", category: "process", term: "budget" },
  { en: "Post-Launch", ar: "ما بعد الإطلاق", category: "continuity", term: "launch" },
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

// ─── 6 Exploration Hubs Metadata (Section 02 Cards) ─────────────────────────
interface FaqHubMeta {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
}

const FAQ_HUBS: FaqHubMeta[] = [
  {
    id: "pencil",
    nameEn: "Pencil, Explained",
    nameAr: "التعرّف إلى بينسل",
    titleEn: "Who we are & how we operate",
    titleAr: "من نحن وما الذي نصنعه",
    descEn: "Multidisciplinary practice, ecosystem structure, and how we turn business questions into tangible ventures.",
    descAr: "فلسفة العمل، الفرق بين الشركة والاستوديو، ونموذج التعاون متعدد التخصصات لحل أسئلة الأعمال.",
    icon: Compass,
    accentColor: "text-[#2057FF]",
    badgeBg: "bg-blue-50 text-[#2057FF]",
  },
  {
    id: "creative",
    nameEn: "Brand & Creative",
    nameAr: "الهوية والإبداع",
    titleEn: "Brand systems & visual identity",
    titleAr: "بناء الهويات والأنظمة البصرية",
    descEn: "How identities work after presentation, intellectual property, and guidelines that protect brand equity.",
    descAr: "كيف تعمل الهوية بعد انتهاء العرض، حقوق الملكية، وما تتضمنه أدلة الاستخدام لحماية قيمة العلامة.",
    icon: Sparkles,
    accentColor: "text-[#dd3126]",
    badgeBg: "bg-rose-50 text-[#dd3126]",
  },
  {
    id: "digital",
    nameEn: "Products & Tech",
    nameAr: "المنتجات والتقنية",
    titleEn: "Websites, mobile apps & SaaS",
    titleAr: "المواقع، التطبيقات، والمنصات",
    descEn: "UX architecture, engineering standards, custom dashboards, and business systems built for real operations.",
    descAr: "الفرق بين الموقع والمنتج، أنظمة الإدارة، وتطوير المنتجات الرقمية المخصصة للتشغيل الفعلي.",
    icon: LayoutGrid,
    accentColor: "text-indigo-600",
    badgeBg: "bg-indigo-50 text-indigo-600",
  },
  {
    id: "ai",
    nameEn: "SuperFeliz AI",
    nameAr: "سوبر فيليز والذكاء",
    titleEn: "Autonomous intelligence & workflows",
    titleAr: "ذكاء سوبر فيليز وأتمتة العمليات",
    descEn: "Where AI creates genuine value, integrations with existing systems, data privacy, and model training.",
    descAr: "أين يفيد الذكاء الاصطناعي حقاً، التكامل مع الأنظمة القائمة، وخصوصية البيانات وأمان النماذج.",
    icon: SuperFelizMiniIcon,
    accentColor: "text-cyan-600",
    badgeBg: "bg-cyan-50 text-[#0099ff]",
  },
  {
    id: "process",
    nameEn: "Working Relationship",
    nameAr: "علاقة العمل والتعاقد",
    titleEn: "Scope, budget & milestones",
    titleAr: "النطاق، الجداول الزمنية، والميزانية",
    descEn: "How we price engagements, decision checkpoints, change management, and phased delivery.",
    descAr: "كيف نسعر المشاريع، إدارة التعديلات أثناء التنفيذ، ومراحل تسليم المخرجات بوضوح تام.",
    icon: ClipboardList,
    accentColor: "text-amber-600",
    badgeBg: "bg-amber-50 text-amber-600",
  },
  {
    id: "continuity",
    nameEn: "After Launch",
    nameAr: "ما بعد الإطلاق والرعاية",
    titleEn: "Hosting, SLAs & ongoing care",
    titleAr: "الاستضافة، الدعم، والتطوير المستمر",
    descEn: "What happens after go-live, enterprise SLAs, cloud infrastructure, and long-term retainers.",
    descAr: "ماذا يحدث يوم الإطلاق، اتفاقيات مستوى الخدمة (SLA)، وضمان استقرار وتطوير الأنظمة.",
    icon: ShieldCheck,
    accentColor: "text-emerald-600",
    badgeBg: "bg-emerald-50 text-emerald-600",
  },
];

// Helper for bilingual strings
function local(value: LocalText, rtl: boolean): string {
  return rtl ? value.ar : value.en;
}

// Search normalization (handles diacritics, alef, teh marbuta, case)
function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim();
}

export function PencilFaqEditorial() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const Next = rtl ? ArrowLeft : ArrowRight;

  // ─── Filter & Search State ────────────────────────────────────────────────
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [openQuestions, setOpenQuestions] = React.useState<Set<string>>(
    new Set(["who", "feliz"])
  );
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  // ─── Scroll & Floating Dock State ─────────────────────────────────────────
  const [showFloatingNav, setShowFloatingNav] = React.useState(false);
  const footerRef = React.useRef<HTMLDivElement>(null);
  const popularSectionRef = React.useRef<HTMLElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // Floating dock autohide controller
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

  // ─── Deep Linking Handler ─────────────────────────────────────────────────
  const handleDeepLink = React.useCallback((hashId: string) => {
    const cleanId = hashId.replace(/^#/, "");
    if (!cleanId) return;

    // Check if hash matches a category
    const matchedCategory = FAQ_CHAPTERS.find(
      (c) => c.id === cleanId || `category-${c.id}` === cleanId
    );
    if (matchedCategory) {
      setSelectedCategory(matchedCategory.id);
      setTimeout(() => {
        popularSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
      return;
    }

    // Check if hash matches an individual question
    const matched = PENCIL_EDITORIAL_QUESTIONS.find((item) => item.id === cleanId);
    if (matched) {
      setSelectedCategory((prev) => (prev !== "all" && prev !== matched.category ? "all" : prev));
      setOpenQuestions((prev) => new Set([...Array.from(prev), cleanId]));

      setTimeout(() => {
        const el = document.getElementById(cleanId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    }
  }, []);

  // Scroll to questions library
  const scrollToQuestions = React.useCallback((categoryId?: string) => {
    if (categoryId) {
      setSelectedCategory(categoryId);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${categoryId}`);
      }
    }
    if (typeof window !== "undefined") {
      const el = document.getElementById("popular-questions");
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  // Read URL hash on initial mount and on hashchange
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      handleDeepLink(window.location.hash);
    }

    const onHashChange = () => {
      if (window.location.hash) {
        handleDeepLink(window.location.hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [handleDeepLink]);

  // Category selection handler
  const onSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${categoryId}`);
    }
    scrollToQuestions();
  };

  // Copy direct question link to clipboard
  const copyQuestionLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url).then(() => {
        setCopiedId(id);
        window.history.replaceState(null, "", `#${id}`);
        setTimeout(() => setCopiedId(null), 2500);
      });
    }
  };

  // ─── Filter & Search Engine ───────────────────────────────────────────────
  const searchTerms = normalizeText(searchQuery).split(/\s+/).filter(Boolean);

  const filteredQuestions = React.useMemo(() => {
    return PENCIL_EDITORIAL_QUESTIONS.filter((item) => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      if (searchTerms.length === 0) return true;

      const haystack = normalizeText(
        [
          item.question.en,
          item.question.ar,
          ...item.answer.en,
          ...item.answer.ar,
        ].join(" ")
      );
      return searchTerms.every((term) => haystack.includes(term));
    });
  }, [selectedCategory, searchTerms]);

  // Accordion toggle
  const toggleQuestion = (id: string) => {
    setOpenQuestions((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand all visible questions
  const expandAll = () => {
    setOpenQuestions(new Set(filteredQuestions.map((q) => q.id)));
  };

  // Collapse all questions
  const collapseAll = () => {
    setOpenQuestions(new Set());
  };

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className="relative min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057FF] selection:text-white"
    >
      <Header solid light />

      <main className="relative z-10">
        {/* ───────────────────────────────────────────────────────────────────
            1. EDITORIAL FAQ HERO & INTEGRATED VISUAL SHOWCASE
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
                  01 // FAQ KNOWLEDGE EXPLORER
                </span>
                <span className="text-neutral-300">•</span>
                <span className="font-bold text-[#2057FF]">
                  {rtl ? "24 إجابة موثقة" : "24 Verified Answers"}
                </span>
              </div>
            </Reveal>

            {/* Editorial Title with High-Contrast Typography */}
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl leading-[1.15]">
                {rtl ? (
                  <>
                    <span className="block">إجابات واضحة تشكّلها</span>
                    <span className="block font-light text-neutral-500 mt-1">
                      حقائق التنفيذ والعمل.
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block">Answers shaped by</span>
                    <span className="block font-light italic text-neutral-500 mt-1">
                      the reality of the work.
                    </span>
                  </>
                )}
              </h1>
            </Reveal>

            {/* Subtitle (Strictly 2 balanced lines) */}
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-neutral-600 sm:text-lg text-balance">
                {rtl ? (
                  <>
                    <span className="block">كل ما تريد معرفته قبل العمل معنا: من نحن، وما الذي نصنعه،</span>
                    <span className="block mt-1">وكيف نفكر، وما الذي يحدث عندما تبدأ الفكرة وتصبح مشروعًا.</span>
                  </>
                ) : (
                  <>
                    <span className="block">Everything people usually ask before working with us: who we are, what we make,</span>
                    <span className="block mt-1">how we think, and what happens when an idea becomes a project.</span>
                  </>
                )}
              </p>
            </Reveal>

            {/* Prominent Search Interface */}
            <Reveal delay={0.15}>
              <div className="mx-auto mt-8 w-full">
                <div className="mx-auto max-w-2xl">
                  <div className="group relative rounded-full p-[2px] transition-all duration-300 focus-within:shadow-xl focus-within:shadow-blue-500/20">
                    <div className="pointer-events-none absolute -inset-[2px] rounded-full bg-gradient-to-r from-[#2057FF]/30 via-[#00D2FF]/40 to-[#2057FF]/30 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />

                    <div className="relative flex items-center gap-3 rounded-full border border-neutral-300/90 bg-white/95 px-4 py-2.5 shadow-sm backdrop-blur-xl transition group-focus-within:border-[#2057FF]">
                      <Search
                        size={18}
                        className="text-neutral-400 group-focus-within:text-[#2057FF] transition-colors shrink-0"
                      />
                      <label htmlFor="faq-search-input" className="sr-only">
                        {rtl ? "ابحث في أسئلة وإجابات بينسل" : "Search Pencil questions and answers"}
                      </label>
                      <input
                        ref={searchInputRef}
                        id="faq-search-input"
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={
                          rtl
                            ? "ابحث عن أي سؤال: الذكاء الاصطناعي، الميزانية، التطوير، العقود…"
                            : "Search any question: SuperFeliz, scope, SaaS, pricing, Arabic..."
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
                        onClick={() => scrollToQuestions()}
                        aria-label={rtl ? "الانتقال إلى الإجابات" : "Jump to answers"}
                        className="flex h-9 cursor-pointer items-center gap-1.5 rounded-full bg-neutral-950 px-4 text-xs font-bold text-white transition hover:bg-[#2057FF] hover:shadow-md hover:shadow-blue-500/20"
                      >
                        <span>{rtl ? "استعراض" : "Browse"}</span>
                        <Next size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick-Jump Suggestion Chips */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-[11px] font-semibold text-neutral-400 me-1">
                    {rtl ? "مواضيع شائعة:" : "Quick topics:"}
                  </span>
                  {FAQ_SEARCH_SUGGESTIONS.map((chip) => (
                    <button
                      key={chip.en}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(chip.category);
                        setSearchQuery(chip.term);
                        scrollToQuestions();
                      }}
                      className="rounded-full border border-neutral-200/90 bg-white/80 px-3 py-1 text-[11px] font-medium text-neutral-600 transition hover:border-[#2057FF]/40 hover:bg-[#EEF3FF] hover:text-[#2057FF] cursor-pointer"
                    >
                      #{rtl ? chip.ar : chip.en}
                    </button>
                  ))}
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
                    src="/help/helpfaqs.jpg"
                    alt={rtl ? "أسئلة وإجابات بنسل ستوديو" : "Pencil Studio Questions & Knowledge Hub"}
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
            2. SECTION 02: مسارات الاستكشاف ومحاور الأسئلة (Reference Hubs Layout)
               Left: Sticky Directory Card + "Need Help" Card
               Right: Clean Stacked Hub Cards with Squircle Badges & "Browse docs ->"
        ─────────────────────────────────────────────────────────────────── */}
        <section className="container-custom py-12 md:py-16">
          <Reveal>
            <div className="border-b border-neutral-200/80 pb-6 mb-10 text-start">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#2057FF]">
                <LayoutGrid size={13} />
                <span>{rtl ? "02 // مسارات الاستكشاف ومحاور الأسئلة" : "02 // EXPLORATION HUBS & DISCIPLINES"}</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                {rtl ? (
                  <>
                    محاور الأسئلة:{" "}
                    <span className="font-light italic text-neutral-500">
                      اختر المسار الأقرب لاحتياجك.
                    </span>
                  </>
                ) : (
                  <>
                    Question disciplines:{" "}
                    <span className="font-light italic text-neutral-500">
                      choose your area of inquiry.
                    </span>
                  </>
                )}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-xl">
                {rtl
                  ? "دليل مصنف يجمع إجابات الاستوديو حول الهوية، المنصات الرقمية، ذكاء سوبر فيليز، ونموذج العمل."
                  : "Categorized hubs addressing brand systems, digital engineering, SuperFeliz AI, and operating frameworks."}
              </p>
            </div>
          </Reveal>

          {/* Reference Two-Column Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column (Sticky Sidebar Cards) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
              {/* Card 1: Directory Selector Card */}
              <div className="rounded-3xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs text-start">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    {rtl ? "دليل الأقسام" : "TOPIC DIRECTORY"}
                  </span>
                  <span className="text-[11px] font-bold text-[#2057FF]">
                    {FAQ_HUBS.length} {rtl ? "محاور" : "Hubs"}
                  </span>
                </div>

                <div className="mt-3 space-y-1">
                  {/* All Questions Button */}
                  <button
                    type="button"
                    onClick={() => onSelectCategory("all")}
                    className={cn(
                      "w-full flex items-center justify-between p-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer text-start",
                      selectedCategory === "all"
                        ? "bg-[#2057FF] text-white shadow-xs"
                        : "text-neutral-700 hover:bg-neutral-100"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <Compass size={15} className={selectedCategory === "all" ? "text-white" : "text-neutral-400"} />
                      <span>{rtl ? "جميع الأسئلة والأجوبة" : "All Questions"}</span>
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-mono font-bold",
                        selectedCategory === "all" ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                      )}
                    >
                      {PENCIL_EDITORIAL_QUESTIONS.length}
                    </span>
                  </button>

                  {/* Hub Items */}
                  {FAQ_HUBS.map((hub) => {
                    const HubIcon = hub.icon;
                    const isSelected = selectedCategory === hub.id;
                    const count = PENCIL_EDITORIAL_QUESTIONS.filter((q) => q.category === hub.id).length;

                    return (
                      <button
                        key={hub.id}
                        type="button"
                        onClick={() => onSelectCategory(hub.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer text-start",
                          isSelected
                            ? "bg-[#2057FF] text-white shadow-xs"
                            : "text-neutral-700 hover:bg-neutral-100"
                        )}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <HubIcon
                            className={cn(
                              "h-4 w-4 shrink-0",
                              isSelected ? "text-white" : "text-neutral-400"
                            )}
                          />
                          <span className="truncate">{rtl ? hub.nameAr : hub.nameEn}</span>
                        </div>
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-mono font-bold shrink-0",
                            isSelected ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                          )}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Card 2: Need More Help Card (Reference Style) */}
              <div className="rounded-3xl border border-blue-100/90 bg-[#EEF4FF]/75 p-6 shadow-xs relative overflow-hidden text-start">
                <div className="absolute top-0 end-0 -mt-6 -me-6 h-24 w-24 rounded-full bg-blue-300/30 blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#2057FF] mb-3">
                    <MessagesSquare size={18} />
                  </div>
                  <h3 className="text-sm font-extrabold text-neutral-950">
                    {rtl ? "هل لديك سؤال دقيق لمشروعك؟" : "Need specific project guidance?"}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                    {rtl
                      ? "فريق بنسل جاهز لمراجعة فكرة مشروعك وتقديم إجابة مباشرة وموثقة."
                      : "Our team will review your brief and provide a clear, context-specific response."}
                  </p>
                  <div className="mt-4">
                    <PencilButton
                      variant="primary"
                      size="sm"
                      hoverLabel={rtl ? "تواصل معنا ←" : "Talk to us →"}
                      href="/help/contact"
                    >
                      {rtl ? "طلب استشارة مباشرة" : "Submit Inquiry"}
                    </PencilButton>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: 6 Clean Wide Cards (Reference Layout) */}
            <div className="lg:col-span-8 space-y-4">
              {FAQ_HUBS.map((hub, idx) => {
                const HubIcon = hub.icon;
                const count = PENCIL_EDITORIAL_QUESTIONS.filter((q) => q.category === hub.id).length;
                const isSelected = selectedCategory === hub.id;

                return (
                  <Reveal key={hub.id} delay={idx * 0.04}>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => onSelectCategory(hub.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onSelectCategory(hub.id);
                        }
                      }}
                      className={cn(
                        "group w-full rounded-3xl border bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 cursor-pointer text-start outline-none focus-visible:ring-2 focus-visible:ring-[#2057FF]",
                        isSelected
                          ? "border-[#2057FF] ring-2 ring-[#2057FF]/10 shadow-md"
                          : "border-neutral-200/80 hover:border-[#2057FF]/40 hover:-translate-y-0.5"
                      )}
                    >
                      <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                        {/* Centered Squircle Icon Badge */}
                        <div
                          className={cn(
                            "w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105",
                            hub.badgeBg
                          )}
                        >
                          <HubIcon className="h-6 w-6" />
                        </div>

                        {/* Card Info */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                              0{idx + 1} // {rtl ? hub.nameAr : hub.nameEn}
                            </span>
                            <span>•</span>
                            <span className="text-[11px] font-bold text-[#2057FF]">
                              {count} {rtl ? "أسئلة" : "Q&As"}
                            </span>
                          </div>

                          <h3 className="mt-1.5 text-base sm:text-lg font-bold text-neutral-950 group-hover:text-[#2057FF] transition-colors leading-snug">
                            {rtl ? hub.titleAr : hub.titleEn}
                          </h3>

                          <p className="mt-1.5 text-xs sm:text-sm text-neutral-500 leading-relaxed line-clamp-2">
                            {rtl ? hub.descAr : hub.descEn}
                          </p>
                        </div>
                      </div>

                      {/* Browse Docs Action on End */}
                      <div className="shrink-0 self-end sm:self-center flex items-center gap-1.5 text-xs font-bold text-neutral-700 group-hover:text-[#2057FF] transition-colors pt-2 sm:pt-0">
                        <span>{rtl ? "استعراض الأسئلة" : "Browse topic"}</span>
                        {rtl ? (
                          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                        ) : (
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
            3. SECTION 03: الأسئلة الأكثر تكراراً وقرارات التنفيذ (Reference Accordion Section)
               Left: Filter Pills Stack ("All", "Pencil", "Brand", ...)
               Right: Elegant White Card Containing Full Questions Accordion
        ─────────────────────────────────────────────────────────────────── */}
        <section
          ref={popularSectionRef}
          id="popular-questions"
          className="mt-8 py-14 sm:py-20 bg-[#FAF8F5] border-y border-neutral-200/60 scroll-mt-20"
        >
          <div className="container-custom">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#2057FF] mb-2">
                  <Sparkles size={13} />
                  <span>{rtl ? "03 // الأسئلة الأكثر تكراراً وقرارات التنفيذ" : "03 // POPULAR QUESTIONS & CORE DECISIONS"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                  {rtl ? (
                    <>
                      إجابات سريعة ومباشرة:{" "}
                      <span className="font-light italic text-neutral-500">
                        كل ما تحتاج معرفته قبل أن نبدأ.
                      </span>
                    </>
                  ) : (
                    <>
                      Quick, direct answers:{" "}
                      <span className="font-light italic text-neutral-500">
                        everything you consider before starting.
                      </span>
                    </>
                  )}
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {rtl
                    ? "اختر التصنيف من القائمة لاستعراض الأسئلة الأكثر طرحاً وإجاباتها المعتمدة من فريق الاستوديو."
                    : "Select a discipline to view concise operational answers to frequent questions."}
                </p>
              </div>
            </Reveal>

            {/* Reference Accordion Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Filter Pills Stack */}
              <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] pb-2 lg:pb-0">
                {FAQ_CHAPTERS.map((chapter) => {
                  const isActive = selectedCategory === chapter.id;
                  const count =
                    chapter.id === "all"
                      ? PENCIL_EDITORIAL_QUESTIONS.length
                      : PENCIL_EDITORIAL_QUESTIONS.filter((item) => item.category === chapter.id).length;

                  return (
                    <button
                      key={chapter.id}
                      type="button"
                      onClick={() => onSelectCategory(chapter.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer text-start shrink-0 whitespace-nowrap lg:whitespace-normal border",
                        isActive
                          ? "bg-[#2057FF] text-white border-[#2057FF] shadow-md shadow-blue-500/20 translate-x-0"
                          : "bg-white text-neutral-700 border-neutral-200/80 hover:bg-neutral-50 hover:border-neutral-300"
                      )}
                    >
                      <span>{rtl ? chapter.ar : chapter.en}</span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ms-2",
                          isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                        )}
                      >
                        {String(count).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Large White Accordion Container */}
              <div className="lg:col-span-9">
                <div className="rounded-3xl sm:rounded-[36px] border border-neutral-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm text-start">
                  {/* Top Bar inside Accordion Card */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950">
                        {selectedCategory === "all"
                          ? rtl
                            ? "جميع الأسئلة والأجوبة المعتمدة"
                            : "All Verified Questions"
                          : rtl
                          ? FAQ_CHAPTERS.find((c) => c.id === selectedCategory)?.ar
                          : FAQ_CHAPTERS.find((c) => c.id === selectedCategory)?.en}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {filteredQuestions.length} {rtl ? "سؤالًا متوفرًا" : "questions available"}
                      </p>
                    </div>

                    {/* Expand All / Collapse All Controls */}
                    <div className="flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-neutral-50 px-2.5 py-1 text-xs">
                      <button
                        type="button"
                        onClick={expandAll}
                        className="rounded-full px-2 py-0.5 text-[11px] font-bold text-neutral-600 hover:bg-white hover:text-neutral-950 transition cursor-pointer"
                      >
                        {rtl ? "فتح الكل" : "Expand all"}
                      </button>
                      <span className="text-neutral-300">•</span>
                      <button
                        type="button"
                        onClick={collapseAll}
                        className="rounded-full px-2 py-0.5 text-[11px] font-bold text-neutral-600 hover:bg-white hover:text-neutral-950 transition cursor-pointer"
                      >
                        {rtl ? "إغلاق الكل" : "Collapse all"}
                      </button>
                    </div>
                  </div>

                  {/* Accordion Stream */}
                  {filteredQuestions.length > 0 ? (
                    <div className="divide-y divide-neutral-100">
                      {filteredQuestions.map((item, idx) => {
                        const expanded = openQuestions.has(item.id);
                        const isSuperFeliz = item.id === "feliz";
                        const globalIndex = PENCIL_EDITORIAL_QUESTIONS.findIndex((q) => q.id === item.id) + 1;

                        return (
                          <div key={item.id} id={item.id} className="py-4.5 sm:py-5 first:pt-0 last:pb-0 scroll-mt-28">
                            {/* Accordion Trigger Row */}
                            <div className="w-full flex items-start justify-between gap-4 text-start group">
                              <button
                                type="button"
                                onClick={() => toggleQuestion(item.id)}
                                aria-expanded={expanded}
                                className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1 text-start cursor-pointer"
                              >
                                <span className="font-mono text-xs font-bold text-neutral-400 pt-0.5 group-hover:text-[#2057FF] transition-colors shrink-0">
                                  {String(globalIndex).padStart(2, "0")}
                                </span>

                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                      {item.category.toUpperCase()}
                                    </span>
                                    {isSuperFeliz && (
                                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.2 text-[9px] font-bold text-[#2057FF]">
                                        <Image
                                          src="/macosdock/superfeliz.svg"
                                          alt="SuperFeliz"
                                          width={10}
                                          height={10}
                                        />
                                        SuperFeliz AI
                                      </span>
                                    )}
                                  </div>

                                  <h4 className="text-sm sm:text-base font-bold text-neutral-950 group-hover:text-[#2057FF] transition-colors leading-snug">
                                    {local(item.question, rtl)}
                                  </h4>
                                </div>
                              </button>

                              {/* Right Controls: Copy Link & Accordion Arrow */}
                              <div className="flex items-center gap-2 shrink-0 pt-0.5">
                                <button
                                  type="button"
                                  onClick={(e) => copyQuestionLink(item.id, e)}
                                  title={rtl ? "نسخ الرابط المباشر" : "Copy direct link"}
                                  className="text-neutral-400 hover:text-neutral-900 transition p-1 cursor-pointer"
                                >
                                  {copiedId === item.id ? (
                                    <Check size={14} className="text-emerald-600" />
                                  ) : (
                                    <Copy size={14} />
                                  )}
                                </button>

                                <button
                                  type="button"
                                  onClick={() => toggleQuestion(item.id)}
                                  aria-expanded={expanded}
                                  aria-label={expanded ? (rtl ? "إغلاق السؤال" : "Collapse question") : (rtl ? "فتح السؤال" : "Expand question")}
                                  className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 cursor-pointer",
                                    expanded
                                      ? "bg-[#2057FF] text-white rotate-180"
                                      : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200"
                                  )}
                                >
                                  <ChevronDown size={15} />
                                </button>
                              </div>
                            </div>

                            {/* Copied indicator */}
                            {copiedId === item.id && (
                              <div className="ps-8 pt-1">
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  <CheckCircle2 size={11} />
                                  {rtl ? "تم نسخ الرابط المباشر!" : "Direct link copied!"}
                                </span>
                              </div>
                            )}

                            {/* Accordion Expanded Body */}
                            <AnimatePresence>
                              {expanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="ps-7 sm:ps-10 pt-4 pb-2 space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                    {item.answer[rtl ? "ar" : "en"].map((paragraph, pIdx) => (
                                      <p key={pIdx}>{paragraph}</p>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Empty state */
                    <div className="py-12 text-center">
                      <Search size={32} className="mx-auto text-neutral-300 mb-3" />
                      <h4 className="text-base font-bold text-neutral-900">
                        {rtl ? "لا توجد نتائج مطابقة لبحثك" : "No questions match your query"}
                      </h4>
                      <p className="mt-1 text-xs text-neutral-500">
                        {rtl
                          ? "جرب البحث بكلمات أخرى أو أعد ضبط تصنيف الأسئلة."
                          : "Try adjusting your query or reset the category filter."}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("all");
                        }}
                        className="mt-4 rounded-full bg-neutral-950 px-4 py-2 text-xs font-bold text-white hover:bg-neutral-800 cursor-pointer"
                      >
                        {rtl ? "إعادة الضبط" : "Reset Filter"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
            4. SECTION 04: تواصل استشاري مباشر (Reference Bottom Dark Banner CTA)
        ─────────────────────────────────────────────────────────────────── */}
        <section className="container-custom py-14 sm:py-20">
          <Reveal>
            <div className="rounded-3xl md:rounded-[40px] bg-gradient-to-br from-[#0c1427] via-[#080d1a] to-[#04070d] border border-blue-500/20 p-8 sm:p-12 md:p-16 relative overflow-hidden text-center text-white shadow-2xl">
              {/* Radial atmospheric glows */}
              <div className="absolute top-0 start-1/4 -mt-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 end-1/4 -mb-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold text-blue-300 border border-white/10 mb-5 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#2057FF] animate-pulse" />
                  <span>{rtl ? "04 // تواصل استشاري مباشر" : "04 // DIRECT STUDIO INQUIRY"}</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                  {rtl ? (
                    <>
                      لديك استفسار خاص بمشروعك؟{" "}
                      <span className="text-neutral-400 font-light italic block sm:inline mt-1 sm:mt-0">
                        تحدث مباشرة مع فريق العمل.
                      </span>
                    </>
                  ) : (
                    <>
                      Have a project-specific question?{" "}
                      <span className="text-neutral-400 font-light italic block sm:inline mt-1 sm:mt-0">
                        Talk directly with our team.
                      </span>
                    </>
                  )}
                </h2>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                  {rtl
                    ? "تبدأ المحادثة المفيدة دائمًا من سياق العمل الحقيقي. أرسل تفاصيل مشروعك وسنرد عليك بدقة ووضوح."
                    : "A productive conversation always begins with real context. Share your project brief for a clear, actionable response."}
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                  <PencilButton
                    variant="primary"
                    size="default"
                    hoverLabel={rtl ? "ابدأ المحادثة ←" : "Start now →"}
                    href="/help/contact"
                  >
                    {rtl ? "تحدث مع بينسل ستوديو" : "Talk to Pencil Studio"}
                  </PencilButton>

                  <a
                    href="https://wa.me/201003778273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-xs font-bold text-white transition hover:bg-white/10 cursor-pointer backdrop-blur-xs"
                  >
                    <WhatsAppIcon size={15} className="shrink-0" />
                    <span>{rtl ? "واتساب مباشر" : "WhatsApp"}</span>
                  </a>

                  <Link
                    href="/help/guides"
                    className="inline-flex h-11 items-center gap-1.5 rounded-full border border-white/20 px-5 text-xs font-bold text-neutral-300 transition hover:bg-white/10 hover:text-white cursor-pointer"
                  >
                    <BookOpen size={14} />
                    <span>{rtl ? "استكشف دفاتر العمل" : "Explore Playbooks"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Global Footer */}
      <div ref={footerRef}>
        <Footer />
      </div>

      {/* ───────────────────────────────────────────────────────────────────
          5. FLOATING CENTERED NAVIGATION DOCK (AUTOHIDE BEHAVIOR)
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
                  const active = item.href === "/help/faqs";
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
