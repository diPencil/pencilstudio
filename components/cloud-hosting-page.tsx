"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Globe,
  Search,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock,
  Mail,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/reveal";
import { CloudPanelSection } from "@/components/cloud-panel-section";
import { CloudHostingDepth } from "@/components/page-upgrades";
import { CloudNetworkMotionBg } from "@/components/cloud-network-motion-bg";
import { cn } from "@/lib/utils";

/**
 * ScrollFillText: Hollow outlined text that fills horizontally from the side
 * with a clean blue gradient as the user scrolls down, and empties on scroll up.
 */
function ScrollFillText({ text, isRtl }: { text: string; isRtl?: boolean }) {
  const { scrollY } = useScroll();

  // Scroll range [10px -> 200px]: fill goes from 0% to 100% smoothly
  const fill = useTransform(scrollY, [10, 200], [0, 100]);

  // Horizontal fill direction: RTL fills right-to-left, LTR fills left-to-right
  const direction = isRtl ? "to left" : "to right";

  const backgroundImage = useTransform(fill, (v) => {
    const clamped = Math.max(0, Math.min(100, Math.round(v)));
    if (clamped <= 1) {
      return `linear-gradient(${direction}, transparent 0%, transparent 100%)`;
    }
    // Sleek royal & electric blue gradient filling horizontally from the side
    return `linear-gradient(${direction}, #93c5fd 0%, #3b82f6 35%, #2563eb 70%, #1d4ed8 ${clamped}%, transparent ${clamped}%, transparent 100%)`;
  });

  const filter = useTransform(fill, (v) => {
    if (v <= 5) return "none";
    const blur = (v / 100) * 16;
    const opacity = (v / 100) * 0.6;
    return `drop-shadow(0 0 ${blur}px rgba(37, 99, 235, ${opacity}))`;
  });

  return (
    <motion.span
      className="inline-block select-none"
      style={{
        WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.9)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        backgroundImage,
        filter,
      }}
    >
      {text}
    </motion.span>
  );
}

const TLD_PRICES = [
  { ext: ".com", priceEn: "$9.99/yr", priceAr: "39 ر.س/سنة" },
  { ext: ".sa", priceEn: "$24.99/yr", priceAr: "99 ر.س/سنة" },
  { ext: ".net", priceEn: "$11.99/yr", priceAr: "45 ر.س/سنة" },
  { ext: ".org", priceEn: "$12.99/yr", priceAr: "49 ر.س/سنة" },
  { ext: ".io", priceEn: "$39.99/yr", priceAr: "149 ر.س/سنة" },
  { ext: ".store", priceEn: "$1.99/yr", priceAr: "9 ر.س/سنة" },
];

export function CloudHostingPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  const [domainQuery, setDomainQuery] = useState("");
  const [selectedTld, setSelectedTld] = useState(".com");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    available: boolean;
    price: string;
  } | null>(null);

  const handleDomainSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const raw = domainQuery.trim().toLowerCase();
    if (!raw) return;

    let clean = raw.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
    if (!clean.includes(".")) {
      clean = `${clean}${selectedTld}`;
    }

    setIsSearching(true);
    setSearchResult(null);

    setTimeout(() => {
      const matchedTld = TLD_PRICES.find((t) => clean.endsWith(t.ext)) || TLD_PRICES[0];
      setSearchResult({
        domain: clean,
        available: true,
        price: isRtl ? matchedTld.priceAr : matchedTld.priceEn,
      });
      setIsSearching(false);
    }, 400);
  };

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-white text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header />

      {/* ============================================================ */}
      {/* 1. CINEMATIC CENTERED HERO SECTION (SuperFeliz Inspired)     */}
      {/* ============================================================ */}
      <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-neutral-950 text-white pt-24 pb-8 md:pt-32 md:pb-10">
        {/* Dynamic Animated Cyber Cloud Network & Server Infrastructure Motion Canvas */}
        <CloudNetworkMotionBg />

        {/* Top spacer to balance vertical layout */}
        <div className="h-2 w-full shrink-0" aria-hidden="true" />

        {/* Container Centered Content */}
        <div className="container-custom relative z-10 w-full my-auto py-6 sm:py-8 text-center">
          {/* Breadcrumb Centered */}
          <Reveal>
            <nav className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wide text-white/60">
              <Link href="/" className="transition hover:text-white">
                {isRtl ? "الرئيسية" : "Home"}
              </Link>
              <span aria-hidden className="text-white/40">/</span>
              <span className="text-white font-bold">
                {isRtl ? "الاستضافة والبانل" : "Cloud & Hosting"}
              </span>
            </nav>
          </Reveal>

          {/* Badges Centered */}
          <Reveal delay={0.05}>
            <div className="mb-5 flex flex-wrap items-center justify-center gap-2.5">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                {isRtl ? "الاستضافة السحابية والدومينات" : "Cloud Hosting & Domains"}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-neutral-900 shadow-sm">
                {isRtl ? "عربي + إنجليزي" : "AR + EN"}
              </span>
            </div>
          </Reveal>

          {/* Big SuperFeliz-Style Headline (Centered + Outlined Accent Line, Strict 2 lines) */}
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-6xl text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.85rem] 2xl:text-[4.25rem]">
              {isRtl ? (
                <>
                  <span className="block whitespace-normal sm:whitespace-nowrap">سيرفرات سحابية فائقة.</span>
                  <span className="block whitespace-normal sm:whitespace-nowrap mt-1">
                    <ScrollFillText text="ودومينات بلا تعقيد." isRtl={isRtl} />
                  </span>
                </>
              ) : (
                <>
                  <span className="block whitespace-normal sm:whitespace-nowrap">Ultra-Fast Cloud.</span>
                  <span className="block whitespace-normal sm:whitespace-nowrap mt-1">
                    <ScrollFillText text="Zero Headaches." isRtl={isRtl} />
                  </span>
                </>
              )}
            </h1>
          </Reveal>

          {/* Subtitle Centered (Ultra-Concise) */}
          <Reveal delay={0.15}>
            <p className="mx-auto mt-3 max-w-lg text-sm font-normal text-white/75 sm:text-base">
              {isRtl
                ? "سيرفرات NVMe سحابية ونطاقات فورية في لوحة واحدة."
                : "NVMe cloud servers & instant domains in one panel."}
            </p>
          </Reveal>

          {/* ============================================================ */}
          {/* SLEEK FLOATING GLASS CAPSULE SEARCH (No Heavy Bulky Box!)    */}
          {/* ============================================================ */}
          <Reveal delay={0.2}>
            <div className="mx-auto mt-9 max-w-3xl">
              <form
                onSubmit={handleDomainSearch}
                className="max-w-2xl mx-auto relative flex items-center rounded-full border border-white/20 bg-white/10 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all focus-within:border-blue-400 focus-within:bg-white/15 focus-within:ring-4 focus-within:ring-blue-500/20"
              >
                <div className="pointer-events-none ps-4 text-white/50">
                  <Globe size={20} />
                </div>

                <input
                  type="text"
                  value={domainQuery}
                  onChange={(e) => setDomainQuery(e.target.value)}
                  placeholder={
                    isRtl
                      ? "ابحث عن اسم نطاقك (مثال: company.com)..."
                      : "Find your ideal domain (e.g. company.com)..."
                  }
                  className="w-full bg-transparent px-3 py-3 text-sm font-semibold text-white placeholder-white/45 outline-none"
                  dir="ltr"
                />

                {/* Inline TLD Selector Dropdown */}
                <select
                  value={selectedTld}
                  onChange={(e) => setSelectedTld(e.target.value)}
                  className="cursor-pointer rounded-full border border-white/10 bg-neutral-900/80 px-3 py-2 text-xs font-mono font-bold text-amber-300 outline-none transition hover:bg-neutral-800"
                  dir="ltr"
                >
                  {TLD_PRICES.map((t) => (
                    <option key={t.ext} value={t.ext} className="bg-neutral-900 text-white">
                      {t.ext}
                    </option>
                  ))}
                </select>

                {/* Primary Button */}
                <button
                  type="submit"
                  disabled={isSearching}
                  className="ms-2 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#2057ff] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-600 active:scale-95"
                >
                  {isSearching ? (
                    <RefreshCw size={15} className="animate-spin" />
                  ) : (
                    <Search size={15} />
                  )}
                  <span>{isRtl ? "بحث الدومين" : "Search"}</span>
                </button>
              </form>

              {/* Instant Search Result Floating Badge */}
              <AnimatePresence>
                {searchResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    className="max-w-2xl mx-auto mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-400/40 bg-emerald-950/80 p-3.5 shadow-2xl backdrop-blur-2xl text-start"
                  >
                    <div className="flex items-center gap-2.5 ps-1">
                      <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-black text-white" dir="ltr">
                            {searchResult.domain}
                          </span>
                          <span className="rounded-full bg-emerald-400/20 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                            {isRtl ? "متاح للحجز الفوري" : "Available"}
                          </span>
                        </div>
                        <span className="text-[11px] text-white/70">
                          {isRtl ? "السعر:" : "Price:"}{" "}
                          <span className="font-bold text-amber-300">{searchResult.price}</span>{" "}
                          {isRtl ? "مع شهادة SSL وحماية WHOIS مجاناً" : "with free SSL & WHOIS privacy"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://panel.dipencil.com/login?domain=${encodeURIComponent(searchResult.domain)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-neutral-950 shadow transition hover:bg-emerald-300"
                      >
                        <span>{isRtl ? "احجز الآن" : "Register Now"}</span>
                        <ArrowUpRight size={13} />
                      </a>
                      <button
                        onClick={() => setSearchResult(null)}
                        className="text-white/60 hover:text-white px-2 py-1 text-xs cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Minimal Clean TLD Price Pills Underneath Search Bar (Never wrap, always in a single line) */}
              <div className="mt-4 flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2 text-xs overflow-x-auto py-1 scrollbar-none">
                {TLD_PRICES.map((item) => (
                  <button
                    key={item.ext}
                    type="button"
                    onClick={() => {
                      setSelectedTld(item.ext);
                      if (domainQuery) {
                        const cleanBase = domainQuery.replace(/\.[a-zA-Z0-9.-]+$/, "");
                        setDomainQuery(`${cleanBase}${item.ext}`);
                      }
                    }}
                    className={cn(
                      "inline-flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1 text-xs transition cursor-pointer backdrop-blur-md",
                      selectedTld === item.ext
                        ? "bg-white font-bold text-neutral-950 shadow-md"
                        : "border border-white/10 bg-white/5 font-semibold text-white/70 hover:bg-white/15 hover:text-white"
                    )}
                  >
                    <span className="font-mono font-bold">{item.ext}</span>
                    <span className={selectedTld === item.ext ? "text-neutral-700" : "text-white/50"}>
                      {isRtl ? item.priceAr : item.priceEn}
                    </span>
                  </button>
                ))}
              </div>

              {/* Free Inclusions Guarantee Strip */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/75">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  {isRtl ? "شهادة SSL مجانية مدى الحياة" : "Free Lifetime SSL"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock size={14} className="text-blue-400" />
                  {isRtl ? "خصوصية بيانات WHOIS مجاناً" : "Free WHOIS Privacy"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap size={14} className="text-amber-400" />
                  {isRtl ? "خوادم NVMe فائقة السرعة" : "Ultra-Fast NVMe"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-purple-400" />
                  {isRtl ? "إيميل رسمي باسم شركتك" : "Business Email"}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Centered Trust Metrics Bar at the Base */}
          <Reveal delay={0.25}>
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {[
                { en: "99.99% Uptime", ar: "99.99% استقرار", subEn: "Guaranteed SLA", subAr: "اتفاقية تشغيل وضمان استقرار" },
                { en: "NVMe Storage", ar: "خوادم NVMe", subEn: "Sub-Second Response", subAr: "سرعة تحميل فائقة وأداء مضاعف" },
                { en: "Free SSL & DDoS", ar: "حماية وSSL مجاني", subEn: "Enterprise Security", subAr: "أمان متواصل وشهادات معتمدة" },
                { en: "Unified Panel", ar: "لوحة تحكم موحدة", subEn: "Domains, VPS & Emails", subAr: "إدارة شاملة لجميع أصولك" },
              ].map((m, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <span className="font-mono text-xl font-black text-white sm:text-2xl" dir="ltr">
                    {isRtl ? m.ar : m.en}
                  </span>
                  <span className="mt-1 text-xs font-semibold text-white/50">
                    {isRtl ? m.subAr : m.subEn}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CloudPanelSection />
      <CloudHostingDepth />
      <Footer />
    </div>
  );
}
