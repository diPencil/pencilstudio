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
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/shared/motion/reveal";
import { CloudPanelSection } from "@/components/hosting/cloud-panel-section";
import { CloudInfrastructureSection } from "@/components/hosting/cloud-infrastructure-section";
import { EditorialPageHero, Eyebrow } from "@/components/editorial";
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
  { ext: ".com", priceEn: "$9.99/yr", priceAr: "39 ⃁/سنة" },
  { ext: ".sa", priceEn: "$24.99/yr", priceAr: "99 ⃁/سنة" },
  { ext: ".net", priceEn: "$11.99/yr", priceAr: "45 ⃁/سنة" },
  { ext: ".org", priceEn: "$12.99/yr", priceAr: "49 ⃁/سنة" },
  { ext: ".io", priceEn: "$39.99/yr", priceAr: "149 ⃁/سنة" },
  { ext: ".store", priceEn: "$1.99/yr", priceAr: "9 ⃁/سنة" },
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
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header light />

      {/* ============================================================ */}
      {/* 1. EDITORIAL HERO (About-style light stage)                  */}
      {/* ============================================================ */}
      <EditorialPageHero
        isRtl={isRtl}
        cards={[
          { label: isRtl ? "سيرفرات VPS" : "VPS", index: "01", src: "/cloud-hosting/vps.mp4" },
          { label: isRtl ? "دومينات" : "DOMAINS", index: "02", src: "/cloud-hosting/domains.mp4" },
          { label: isRtl ? "البانل" : "PANEL", index: "03", src: "/cloud-hosting/panel.mp4" },
        ]}
        title={
          isRtl ? (
            <>
              <span className="text-[#2057ff]">سيرفرات</span> سحابية فائقة بلا تعقيد
              <span className="text-[#2057ff]">.</span>
            </>
          ) : (
            <>
              <span className="text-[#2057ff]">ULTRA-FAST</span> CLOUD, ZERO HEADACHES
              <span className="text-[#2057ff]">.</span>
            </>
          )
        }
        subtitle={
          isRtl
            ? "سيرفرات NVMe سحابية ونطاقات فورية في لوحة واحدة."
            : "NVMe cloud servers & instant domains in one panel."
        }
        leftMeta={isRtl ? ["سيرفرات VPS", "دومينات", "البانل"] : ["VPS", "DOMAINS", "PANEL"]}
        rightMeta={{
          brand: "PENCIL STUDIO",
          line: isRtl ? "الاستضافة // 2026" : "CLOUD // 2026",
          accent: "99.99% UPTIME",
        }}
        ticker={{
          status: isRtl ? "NVMe · SSL مجاني · حماية DDoS" : "NVMe · FREE SSL · DDoS PROTECTION",
          locations: ["CAIRO", "DUBAI", "RIYADH", "BERLIN"],
        }}
      />

      {/* ============================================================ */}
      {/* 2. DOMAIN SEARCH - interactive light stage                   */}
      {/* ============================================================ */}
      <section className="relative border-b border-neutral-200 bg-[#FBFBFB]">
        <div className="container-custom py-14 md:py-20">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <Eyebrow className="mb-4">{isRtl ? "احجز دومينك" : "Claim your domain"}</Eyebrow>
            <h2 className="text-3xl font-normal tracking-tight text-neutral-900 md:text-4xl lg:text-5xl leading-[1.14]">
              {isRtl ? (
                <>
                  ابحث عن نطاق مثالي{" "}
                  <span className="font-light italic text-neutral-500">وابدأ فورًا.</span>
                </>
              ) : (
                <>
                  Find the right domain{" "}
                  <span className="font-light italic text-neutral-500">and launch today.</span>
                </>
              )}
            </h2>
          </div>
          <Reveal delay={0.2}>
            <div className="mx-auto mt-9 max-w-3xl">
              <form
                onSubmit={handleDomainSearch}
                className="max-w-2xl mx-auto relative flex items-center rounded-full border border-neutral-200 bg-white p-2 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.45)] transition-all focus-within:border-[#2057ff]/60 focus-within:ring-4 focus-within:ring-[#2057ff]/15"
              >
                <div className="pointer-events-none ps-4 text-neutral-400">
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
                  className="w-full bg-transparent px-3 py-3 text-sm font-semibold text-neutral-900 placeholder-neutral-400 outline-none"
                  dir="ltr"
                />

                {/* Inline TLD Selector Dropdown */}
                <select
                  value={selectedTld}
                  onChange={(e) => setSelectedTld(e.target.value)}
                  className="cursor-pointer rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-mono font-bold text-neutral-800 outline-none transition hover:bg-neutral-100"
                  dir="ltr"
                >
                  {TLD_PRICES.map((t) => (
                    <option key={t.ext} value={t.ext} className="bg-white text-neutral-900">
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
                    className="max-w-2xl mx-auto mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#cdd9ff] bg-[#eef3ff] p-3.5 shadow-sm text-start"
                  >
                    <div className="flex items-center gap-2.5 ps-1">
                      <CheckCircle2 size={20} className="text-[#2057ff] shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-black text-neutral-900" dir="ltr">
                            {searchResult.domain}
                          </span>
                          <span className="rounded-full bg-white border border-[#cdd9ff] px-2 py-0.5 text-[10px] font-bold text-[#2057ff]">
                            {isRtl ? "متاح للحجز الفوري" : "Available"}
                          </span>
                        </div>
                        <span className="text-[11px] text-neutral-600">
                          {isRtl ? "السعر:" : "Price:"}{" "}
                          <span className="font-bold text-neutral-900">{searchResult.price}</span>{" "}
                          {isRtl ? "مع شهادة SSL وحماية WHOIS مجاناً" : "with free SSL & WHOIS privacy"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://panel.dipencil.com/login?domain=${encodeURIComponent(searchResult.domain)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#2057ff] px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-[#1a49d6]"
                      >
                        <span>{isRtl ? "احجز الآن" : "Register Now"}</span>
                        <ArrowUpRight size={13} />
                      </a>
                      <button
                        onClick={() => setSearchResult(null)}
                        className="text-neutral-400 hover:text-neutral-900 px-2 py-1 text-xs cursor-pointer"
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
                      "inline-flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1 text-xs transition cursor-pointer",
                      selectedTld === item.ext
                        ? "bg-neutral-950 font-bold text-white shadow-md"
                        : "border border-neutral-200 bg-white font-semibold text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                    )}
                  >
                    <span className="font-mono font-bold">{item.ext}</span>
                    <span className={selectedTld === item.ext ? "text-white/70" : "text-neutral-400"}>
                      {isRtl ? item.priceAr : item.priceEn}
                    </span>
                  </button>
                ))}
              </div>

              {/* Free Inclusions Guarantee Strip */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#2057ff]" />
                  {isRtl ? "شهادة SSL مجانية مدى الحياة" : "Free Lifetime SSL"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock size={14} className="text-[#2057ff]" />
                  {isRtl ? "خصوصية بيانات WHOIS مجاناً" : "Free WHOIS Privacy"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap size={14} className="text-[#2057ff]" />
                  {isRtl ? "خوادم NVMe فائقة السرعة" : "Ultra-Fast NVMe"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-purple-600" />
                  {isRtl ? "إيميل رسمي باسم شركتك" : "Business Email"}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Centered Trust Metrics Bar at the Base */}
          <Reveal delay={0.25}>
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-4">
              {[
                { en: "99.99% Uptime", ar: "99.99% استقرار", subEn: "Guaranteed SLA", subAr: "اتفاقية تشغيل وضمان استقرار" },
                { en: "NVMe Storage", ar: "خوادم NVMe", subEn: "Sub-Second Response", subAr: "سرعة تحميل فائقة وأداء مضاعف" },
                { en: "Free SSL & DDoS", ar: "حماية وSSL مجاني", subEn: "Enterprise Security", subAr: "أمان متواصل وشهادات معتمدة" },
                { en: "Unified Panel", ar: "لوحة تحكم موحدة", subEn: "Domains, VPS & Emails", subAr: "إدارة شاملة لجميع أصولك" },
              ].map((m, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <span className="font-mono text-xl font-black text-neutral-950 sm:text-2xl" dir="ltr">
                    {isRtl ? m.ar : m.en}
                  </span>
                  <span className="mt-1 text-xs font-semibold text-neutral-500">
                    {isRtl ? m.subAr : m.subEn}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CloudPanelSection />
      <CloudInfrastructureSection />
      <Footer />
    </div>
  );
}
