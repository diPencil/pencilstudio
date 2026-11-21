"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  TriangleAlert,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Layers,
  Globe,
  Sliders,
  DollarSign,
  CheckCircle2,
  TrendingUp,
  Info,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";
import { PencilButton, PencilOriginalIconSvg } from "@/components/ui/pencil-button";
import type { MethodKey } from "@/lib/method/method-content";
import {
  PricingCurrencyCode,
  PRICING_CURRENCIES,
  PRICING_CURRENCY_CODES,
} from "@/lib/pricing/pricing-currency";

const EGP_RATE = 50.5;

const PER_PAGE: Record<MethodKey, number> = { strategy: 60, design: 140, build: 220 };
const BASE: Record<MethodKey, number> = { strategy: 900, design: 1400, build: 2400 };

/**
 * Computes a smooth cubic Bézier spline passing naturally through all data points
 */
function getSmoothBezierPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];

    const cp1x = p1.x + (p2.x - p0.x) / 4.5;
    const cp1y = p1.y + (p2.y - p0.y) / 4.5;
    const cp2x = p2.x - (p3.x - p1.x) / 4.5;
    const cp2y = p2.y - (p3.y - p1.y) / 4.5;

    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

export function PricingCalculator({
  methodKey,
  currency: externalCurrency,
  onCurrencyChange,
}: {
  methodKey: MethodKey;
  currency?: PricingCurrencyCode;
  onCurrencyChange?: (c: PricingCurrencyCode) => void;
}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [pages, setPages] = useState(10);
  const [internalCurrency, setInternalCurrency] = useState<PricingCurrencyCode>("USD");
  const currency = externalCurrency ?? internalCurrency;
  const setCurrency = onCurrencyChange ?? setInternalCurrency;
  const [bilingual, setBilingual] = useState(true);
  const [cms, setCms] = useState(true);
  const [booking, setBooking] = useState(methodKey === "build");
  const [motionFx, setMotionFx] = useState(methodKey === "design");
  const [hoveredNode, setHoveredNode] = useState<string | null>("pencil");

  const calc = useMemo(() => {
    let pencil = BASE[methodKey] + pages * PER_PAGE[methodKey];
    if (bilingual) pencil += pages * PER_PAGE[methodKey] * 0.4;
    if (cms) pencil += 450;
    if (booking) pencil += methodKey === "build" ? 1600 : 700;
    if (motionFx) pencil += 500;
    pencil = Math.round(pencil / 50) * 50;
    return {
      pencil,
      freelancer: Math.round((pencil * 0.55) / 50) * 50,
      local: Math.round((pencil * 1.4) / 50) * 50,
      eu: Math.round((pencil * 2.9) / 50) * 50,
    };
  }, [pages, bilingual, cms, booking, motionFx, methodKey]);

  const fmt = (usd: number) => {
    const c = PRICING_CURRENCIES[currency] || PRICING_CURRENCIES.USD;
    const converted = Math.round(usd * c.rateVsUsd);
    const formattedVal = new Intl.NumberFormat("en-US").format(converted);
    if (currency === "USD") return `$${formattedVal}`;
    if (currency === "EUR") return `€${formattedVal}`;
    if (currency === "GBP") return `£${formattedVal}`;
    if (currency === "SAR") return isRtl ? `${formattedVal} ⃁` : `⃁${formattedVal}`;
    if (currency === "EGP") return isRtl ? `${formattedVal} ج.م` : `E£${formattedVal}`;
    return `$${formattedVal}`;
  };

  const fmtCompact = (usd: number) => {
    const c = PRICING_CURRENCIES[currency] || PRICING_CURRENCIES.USD;
    const val = Math.round(usd * c.rateVsUsd);
    if (val >= 1000) {
      const k = (val / 1000).toFixed(1).replace(/\.0$/, "");
      if (currency === "USD") return `$${k}k`;
      if (currency === "EUR") return `€${k}k`;
      if (currency === "GBP") return `£${k}k`;
      if (currency === "SAR") return isRtl ? `${k}k ⃁` : `⃁${k}k`;
      if (currency === "EGP") return isRtl ? `${k}k ج.م` : `E£${k}k`;
    }
    return fmt(usd);
  };

  const toggles = [
    {
      on: bilingual,
      set: setBilingual,
      en: "Bilingual AR + EN",
      ar: "عربي + إنجليزي",
      extra: "+40%",
    },
    {
      on: cms,
      set: setCms,
      en: "Headless CMS Panel",
      ar: "لوحة تحكم للمحتوى",
      extra: "+$450",
    },
    {
      on: booking,
      set: setBooking,
      en: "Booking & Payments",
      ar: "نظام حجز ودفع إلكتروني",
      extra: methodKey === "build" ? "+$1,600" : "+$700",
    },
    {
      on: motionFx,
      set: setMotionFx,
      en: "Motion & Micro-UX",
      ar: "موشن جرافيك ولمسات تفاعلية",
      extra: "+$500",
    },
  ];

  const presets = [
    { count: 5, labelEn: "Landing", labelAr: "هبوط" },
    { count: 10, labelEn: "Corporate", labelAr: "مؤسسي" },
    { count: 20, labelEn: "Portal", labelAr: "بوابة" },
    { count: 35, labelEn: "Enterprise", labelAr: "منظومة" },
  ];

  // ── SVG CHART GEOMETRY (Matching Reference Images 2 & 3) ──
  // Canvas coordinate system: 680 x 280
  const chartWidth = 680;
  const chartHeight = 280;
  const paddingTop = 45;
  const paddingBottom = 45;
  const paddingLeft = 65;
  const paddingRight = 45;
  const baselineY = chartHeight - paddingBottom;
  const usableHeight = baselineY - paddingTop;

  // Max scale with headroom
  const maxVal = Math.max(calc.eu * 1.15, 2000);
  const minVal = 0;

  const getY = (val: number) => {
    const ratio = Math.max(0, Math.min(1, (val - minVal) / (maxVal - minVal)));
    return baselineY - ratio * usableHeight;
  };

  const nodes = [
    {
      id: "freelancer",
      labelEn: "Freelancer",
      labelAr: "مستقل / فريلانسر",
      subEn: "High Risk · No SLA",
      subAr: "مخاطرة عالية · دون توثيق",
      value: calc.freelancer,
      x: paddingLeft + (chartWidth - paddingLeft - paddingRight) * 0.08,
      y: getY(calc.freelancer),
      badgeEn: "Low Cost",
      badgeAr: "الأقل سعراً",
      color: "#F59E0B",
      isUs: false,
      isRisky: true,
    },
    {
      id: "pencil",
      labelEn: "PENCIL Studio",
      labelAr: "بنسل استوديو",
      subEn: "100% Code Ownership · 95+ Core Web Vitals",
      subAr: "ملكية كاملة للكود · سرعة فائقة 95+ مع ضمان SLA",
      value: calc.pencil,
      x: paddingLeft + (chartWidth - paddingLeft - paddingRight) * 0.38,
      y: getY(calc.pencil),
      badgeEn: "RECOMMENDED",
      badgeAr: "الخيار الأمثل",
      color: "#2057FF",
      isUs: true,
      isRisky: false,
    },
    {
      id: "local",
      labelEn: "Local Agency",
      labelAr: "وكالة محلية",
      subEn: "30+ Plugins · Slower Turnaround",
      subAr: "إضافات ووردبريس · بطء في التسليم",
      value: calc.local,
      x: paddingLeft + (chartWidth - paddingLeft - paddingRight) * 0.68,
      y: getY(calc.local),
      badgeEn: "+40% Markup",
      badgeAr: "+40% تكلفة",
      color: "#64748B",
      isUs: false,
      isRisky: false,
    },
    {
      id: "eu",
      labelEn: "EU / Global Agency",
      labelAr: "وكالة عالمية / خليجية",
      subEn: "3x Price · Timezone Friction",
      subAr: "3 أضعاف السعر · فارق توقيت",
      value: calc.eu,
      x: paddingLeft + (chartWidth - paddingLeft - paddingRight) * 0.94,
      y: getY(calc.eu),
      badgeEn: "+190% Price",
      badgeAr: "تكلفة مضاعفة",
      color: "#0F172A",
      isUs: false,
      isRisky: false,
    },
  ];

  const smoothCurvePath = useMemo(() => {
    return getSmoothBezierPath(nodes.map((n) => ({ x: n.x, y: n.y })));
  }, [nodes]);

  const smoothAreaPath = useMemo(() => {
    if (!smoothCurvePath) return "";
    const firstX = nodes[0].x;
    const lastX = nodes[nodes.length - 1].x;
    return `${smoothCurvePath} L ${lastX.toFixed(1)},${baselineY} L ${firstX.toFixed(1)},${baselineY} Z`;
  }, [smoothCurvePath, nodes, baselineY]);

  // Grid Ticks (4 levels: 0%, 33%, 66%, 100%)
  const yTicks = [
    { val: maxVal, y: paddingTop },
    { val: maxVal * 0.66, y: paddingTop + usableHeight * 0.34 },
    { val: maxVal * 0.33, y: paddingTop + usableHeight * 0.67 },
    { val: 0, y: baselineY },
  ];

  const savingsUsd = calc.eu - calc.pencil;
  const savingsPercent = Math.round((savingsUsd / calc.eu) * 100);

  const marketAvg = Math.round((calc.freelancer + calc.local + calc.eu) / 3);

  const waQuoteMessage = isRtl
    ? `مرحباً PENCIL Studio، قمت بحساب تكلفة مشروعي عبر حاسبة التقدير:\n• نطاق العمل: ${pages} صفحة / شاشة\n• اللغات: ${bilingual ? "عربي + إنجليزي" : "لغة واحدة"}\n• لوحة التحكم CMS: ${cms ? "نعم" : "لا"}\n• الدفع والحجز: ${booking ? "نعم" : "لا"}\n• الموشن والتفاعل: ${motionFx ? "نعم" : "لا"}\n• التقدير المقترح: ${fmt(calc.pencil)}\nأود حجز مكالمة تأكيد النطاق واعتماد العرض.`
    : `Hello PENCIL Studio, I calculated my project scope on your cost estimator:\n• Scope: ${pages} pages/screens\n• Languages: ${bilingual ? "Bilingual AR+EN" : "Single Language"}\n• CMS: ${cms ? "Yes" : "No"}\n• Booking/Payments: ${booking ? "Yes" : "No"}\n• Motion/Micro-UX: ${motionFx ? "Yes" : "No"}\n• Estimated Investment: ${fmt(calc.pencil)}\nI would like to book a 20-min clarity call to lock this quote.`;

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="overflow-hidden rounded-[2.5rem] border border-neutral-200/90 bg-white shadow-2xl shadow-blue-500/5 transition-all duration-300"
    >
      {/* ── TOP HEADER & DEDICATED CURRENCY BAR ── */}
      <div className="flex flex-col gap-4 border-b border-neutral-200/80 bg-neutral-50/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="flex items-center gap-3">
            <PencilOriginalIconSvg className="size-7 sm:size-8 shrink-0 select-none" />
            <h3 className="text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
              {isRtl ? "احسب استثمار مشروعك بنفسك" : "Price Your Project Yourself"}
            </h3>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-mono font-bold text-[#2057FF]">
              <Sparkles size={11} />
              LIVE MATH
            </span>
          </div>
          <p className="mt-1 text-xs text-neutral-500 sm:text-sm font-medium">
            {isRtl
              ? "حرّك عدد الشاشات وحدد الإضافات، وشاهد منحنى مقارنة السوق المباشر يتحرك لحظياً."
              : "Adjust page scope and add-ons to see our real-time dynamic market curve update."}
          </p>
        </div>

        {/* Quick Currency Selector from /pricing */}
        <div className="relative inline-flex items-center gap-1.5 rounded-2xl border border-neutral-200/90 bg-white p-1.5 shadow-2xs self-start sm:self-center" dir="ltr">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2">
            {isRtl ? "العملة:" : "CURRENCY:"}
          </span>
          {PRICING_CURRENCY_CODES.map((currCode) => {
            const c = PRICING_CURRENCIES[currCode];
            const isSelected = currency === currCode;
            return (
              <button
                key={currCode}
                type="button"
                onClick={() => setCurrency(currCode)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-mono font-bold transition-all cursor-pointer",
                  isSelected
                    ? "bg-[#2057FF] text-white shadow-xs"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                )}
              >
                <span className={cn("text-[11px] font-bold", isSelected ? "text-blue-100" : "text-[#2057FF]")}>
                  {c.symbol}
                </span>
                <span>{c.code}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── MAIN TWO-COLUMN WORKBENCH ── */}
      <div className="grid gap-0 lg:grid-cols-12">
        {/* ── LEFT COLUMN: SCOPE CONTROLS & ADD-ONS (5 COLS) ── */}
        <div className="border-b border-neutral-200/80 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-e">
          {/* Section Label */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-neutral-500">
              {isRtl ? "نطاق العمل // الصفحات والشاشات" : "SCOPE // PAGES & SCREENS"}
            </label>
            <span
              className="flex items-center gap-1.5 rounded-full bg-[#2057FF] px-3.5 py-1 text-sm font-mono font-bold text-white shadow-sm shadow-blue-600/30"
              dir="ltr"
            >
              <Layers size={13} />
              <span>{pages} {isRtl ? "صفحة" : "screens"}</span>
            </span>
          </div>

          {/* Interactive Range Slider */}
          <div className="mt-5">
            <input
              type="range"
              min={1}
              max={40}
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-200 accent-[#2057FF] focus:outline-none"
              aria-label={isRtl ? "عدد الصفحات" : "Page count"}
            />
            <div className="mt-2 flex justify-between font-mono text-[11px] font-bold text-neutral-400" dir="ltr">
              <span>01 Single</span>
              <span>10 Corporate</span>
              <span>20 Portal</span>
              <span>40 Enterprise</span>
            </div>
          </div>

          {/* Quick Preset Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono font-bold text-neutral-400">
              {isRtl ? "نماذج شائعة:" : "Quick presets:"}
            </span>
            {presets.map((preset) => (
              <button
                key={preset.count}
                type="button"
                onClick={() => setPages(preset.count)}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 text-xs font-mono font-bold transition-all",
                  pages === preset.count
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "border border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-100"
                )}
              >
                {preset.count} {isRtl ? preset.labelAr : preset.labelEn}
              </button>
            ))}
          </div>

          {/* Feature Add-on Toggles */}
          <div className="mt-8">
            <label className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-neutral-500">
              {isRtl ? "المواصفات والإضافات التقنية" : "CAPABILITIES & SYSTEM ADD-ONS"}
            </label>
            <div className="mt-3.5 space-y-2.5">
              {toggles.map((tg) => (
                <button
                  key={tg.en}
                  type="button"
                  onClick={() => tg.set(!tg.on)}
                  aria-pressed={tg.on}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border p-3.5 text-start transition-all duration-200",
                    tg.on
                      ? "border-[#2057FF]/40 bg-blue-50/50 shadow-xs"
                      : "border-neutral-200 bg-neutral-50/60 hover:border-neutral-300 hover:bg-neutral-100/50"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors",
                        tg.on ? "bg-[#2057FF] text-white" : "bg-neutral-200 text-neutral-600"
                      )}
                    >
                      <CheckCircle2 size={16} />
                    </span>
                    <div className="truncate">
                      <p className={cn("text-xs sm:text-sm font-bold truncate", tg.on ? "text-neutral-950" : "text-neutral-700")}>
                        {isRtl ? tg.ar : tg.en}
                      </p>
                      <span className="font-mono text-[11px] font-bold text-neutral-500">
                        {tg.extra}
                      </span>
                    </div>
                  </div>

                  {/* iOS Style Switcher */}
                  <span
                    className={cn(
                      "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200",
                      tg.on ? "bg-[#2057FF]" : "bg-neutral-300"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-200",
                        tg.on
                          ? isRtl
                            ? "left-0.5"
                            : "right-0.5"
                          : isRtl
                            ? "right-0.5"
                            : "left-0.5"
                      )}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Formula Transparency Box */}
          <div className="mt-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/80 p-4 text-xs leading-relaxed text-neutral-600">
            <div className="flex items-center gap-1.5 font-bold text-neutral-900 mb-1">
              <Sparkles size={14} className="text-[#2057FF]" />
              <span>{isRtl ? "معادلة الحساب الشفافة:" : "Transparent Calculation Model:"}</span>
            </div>
            {isRtl ? (
              <p>
                أساس الحساب <span className="font-mono font-bold text-neutral-900">{fmt(BASE[methodKey])}</span> +{" "}
                <span className="font-mono font-bold text-neutral-900">{fmt(PER_PAGE[methodKey])}</span> لكل صفحة
                {bilingual ? " + 40% لدعم الثنائية والـ RTL" : ""} + الإضافات المحددة. السعر استرشادي دقيق ويتحول لعقد قطعي ثابت بعد مكالمة التعارف.
              </p>
            ) : (
              <p>
                Calculated on <span className="font-mono font-bold text-neutral-900">{fmt(BASE[methodKey])}</span> base +{" "}
                <span className="font-mono font-bold text-neutral-900">{fmt(PER_PAGE[methodKey])}</span>/screen
                {bilingual ? " + 40% bilingual RTL" : ""} + selected modules. Verified fixed scope quote guaranteed after a 20-min call.
              </p>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN: DYNAMIC SMOOTH AREA/LINE CHART (7 COLS) ── */}
        <div className="flex flex-col justify-between bg-neutral-50/40 p-6 sm:p-8 lg:col-span-7">
          <div>
            {/* Top Metric Pills (Inspired by Reference Image 2 & 3) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              {/* PENCIL Metric */}
              <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold text-[#2057FF] shadow-xs">
                <span className="h-2 w-2 rounded-full bg-[#2057FF] animate-pulse" />
                <span>PENCIL:</span>
                <span className="font-mono font-black" dir="ltr">{fmt(calc.pencil)}</span>
              </div>

              {/* Market Average Metric */}
              <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-bold text-neutral-700 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-neutral-400" />
                <span>{isRtl ? "متوسط السوق:" : "Market Avg:"}</span>
                <span className="font-mono" dir="ltr">{fmt(marketAvg)}</span>
              </div>

              {/* Net Savings Metric */}
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/90 px-3.5 py-1.5 text-xs font-bold text-emerald-700 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{isRtl ? "وفر:" : "Save:"}</span>
                <span className="font-mono font-black" dir="ltr">{fmt(savingsUsd)} ({savingsPercent}%)</span>
              </div>
            </div>

            {/* Chart Subtitle Note */}
            <p className="text-xs text-neutral-500 font-medium mb-3">
              {isRtl
                ? "منحنى تسعير السوق المباشر ومعدل القيمة المضافة لنطاق العمل المختار:"
                : "Live market pricing distribution and value trajectory for the selected scope:"}
            </p>

            {/* ── REAL SMOOTH BÉZIER WAVE AREA CHART (IMAGE 2 & 3 STYLE) ── */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-4 sm:p-6 shadow-sm">
              {/* Floating Tooltip Indicator above PENCIL node */}
              <div
                className="absolute top-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 flex items-center gap-2 rounded-full bg-neutral-950 px-3.5 py-1 text-[11px] font-mono font-bold text-white shadow-lg border border-white/10 z-10"
              >
                <span className="h-2 w-2 rounded-full bg-[#2057FF] animate-ping" />
                <span>{isRtl ? "PENCIL: الخيار الأمثل والإنتاجي" : "PENCIL: Verified Sweet Spot"}</span>
              </div>

              <div className="w-full overflow-x-auto select-none">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="w-full h-auto min-w-[540px]"
                >
                  <defs>
                    {/* Area Fill Gradient: Royal Blue fading down */}
                    <linearGradient id="pencilAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2057FF" stopOpacity="0.25" />
                      <stop offset="50%" stopColor="#2057FF" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#2057FF" stopOpacity="0.00" />
                    </linearGradient>

                    {/* Line Stroke Gradient */}
                    <linearGradient id="pencilLineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="35%" stopColor="#2057FF" />
                      <stop offset="70%" stopColor="#3870FF" />
                      <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>

                    {/* Filter for glowing node */}
                    <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#2057FF" floodOpacity="0.4" />
                    </filter>
                  </defs>

                  {/* Horizontal Grid Lines & Y-Axis Labels */}
                  {yTicks.map((tick, i) => (
                    <g key={i}>
                      <line
                        x1={paddingLeft}
                        y1={tick.y}
                        x2={chartWidth - paddingRight}
                        y2={tick.y}
                        stroke="#E2E8F0"
                        strokeDasharray={i === yTicks.length - 1 ? "none" : "4 4"}
                        strokeWidth="1"
                      />
                      <text
                        x={paddingLeft - 10}
                        y={tick.y + 4}
                        textAnchor="end"
                        fill="#94A3B8"
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="600"
                      >
                        {fmtCompact(tick.val)}
                      </text>
                    </g>
                  ))}

                  {/* Vertical Guide Dashed Lines down from each node */}
                  {nodes.map((node) => (
                    <g key={`v-${node.id}`}>
                      <line
                        x1={node.x}
                        y1={node.y}
                        x2={node.x}
                        y2={baselineY}
                        stroke={node.isUs ? "#2057FF" : "#CBD5E1"}
                        strokeDasharray="4 4"
                        strokeWidth={node.isUs ? "1.5" : "1"}
                        opacity={node.isUs ? 0.7 : 0.45}
                      />
                    </g>
                  ))}

                  {/* The Smooth Gradient Area Fill */}
                  <path
                    d={smoothAreaPath}
                    fill="url(#pencilAreaGrad)"
                    className="transition-all duration-300"
                  />

                  {/* The Main Smooth Bézier Curve Line */}
                  <path
                    d={smoothCurvePath}
                    fill="none"
                    stroke="url(#pencilLineGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />

                  {/* Data Points / Circular Nodes */}
                  {nodes.map((node) => {
                    const isHovered = hoveredNode === node.id;
                    return (
                      <g
                        key={`node-${node.id}`}
                        className="cursor-pointer transition-transform"
                        onMouseEnter={() => setHoveredNode(node.id)}
                      >
                        {/* Node Outer Halo for PENCIL */}
                        {node.isUs && (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="14"
                            fill="#2057FF"
                            fillOpacity="0.18"
                            className="animate-pulse"
                          />
                        )}

                        {/* Node Outer Ring */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.isUs ? "7.5" : isHovered ? "6.5" : "5.5"}
                          fill={node.isUs ? "#2057FF" : "#FFFFFF"}
                          stroke={node.color}
                          strokeWidth={node.isUs ? "3" : "2.5"}
                          filter={node.isUs ? "url(#nodeGlow)" : undefined}
                          className="transition-all duration-200"
                        />

                        {/* Node Center Dot */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.isUs ? "3" : "2"}
                          fill="#FFFFFF"
                        />

                        {/* Floating Price Tag above node */}
                        <g transform={`translate(${node.x}, ${node.y - (node.isUs ? 22 : 16)})`}>
                          <rect
                            x={-35}
                            y={-12}
                            width={70}
                            height={20}
                            rx={10}
                            fill={node.isUs ? "#2057FF" : "#0F172A"}
                            className="shadow-sm"
                          />
                          <text
                            x={0}
                            y={2}
                            textAnchor="middle"
                            fill="#FFFFFF"
                            fontSize="10"
                            fontFamily="monospace"
                            fontWeight="bold"
                          >
                            {fmt(node.value)}
                          </text>
                        </g>

                        {/* X-Axis Category Label Below Baseline */}
                        <text
                          x={node.x}
                          y={baselineY + 18}
                          textAnchor="middle"
                          fill={node.isUs ? "#2057FF" : "#475569"}
                          fontSize={node.isUs ? "12" : "11"}
                          fontWeight={node.isUs ? "800" : "600"}
                          fontFamily="sans-serif"
                        >
                          {isRtl ? node.labelAr : node.labelEn}
                        </text>

                        {/* Badge/Tag under X-Axis label */}
                        <text
                          x={node.x}
                          y={baselineY + 31}
                          textAnchor="middle"
                          fill={node.isUs ? "#2057FF" : node.isRisky ? "#D97706" : "#94A3B8"}
                          fontSize="9"
                          fontFamily="monospace"
                          fontWeight="700"
                        >
                          {isRtl ? node.badgeAr : node.badgeEn}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Chart Footnote Highlights */}
              <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle2 size={15} className="text-[#2057FF] shrink-0" />
                  <span>
                    <strong className="text-neutral-900">{isRtl ? "نطاق عمل ثابت:" : "Fixed Scope:"} </strong>
                    {isRtl ? "كافة التكاليف محددة بدقة دون أية زيادات مفاجئة." : "Strict deliverables without scope-creep penalties."}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <BadgeCheck size={15} className="text-emerald-600 shrink-0" />
                  <span>
                    <strong className="text-neutral-900">{isRtl ? "ملكية الكود 100%:" : "100% IP Ownership:"} </strong>
                    {isRtl ? "جميع الملفات والأصول في حساباتك بالكامل." : "All repositories and design assets belong to you."}
                  </span>
                </div>
              </div>
            </div>

            {/* ── SAVINGS HIGHLIGHT BANNER ── */}
            <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/60 p-4 text-xs sm:text-sm font-medium text-emerald-950">
              <div className="flex items-center gap-2 font-bold text-emerald-800 mb-0.5">
                <TrendingDown size={17} />
                <span>{isRtl ? `وفر حتى ${savingsPercent}% مع جودة هندسية عالمية` : `Save up to ${savingsPercent}% with identical technical standards`}</span>
              </div>
              <p className="text-emerald-700 leading-relaxed text-xs">
                {isRtl ? (
                  <>
                    أنت توفر ما يعادل <span className="font-mono font-black text-emerald-950" dir="ltr">{fmt(savingsUsd)}</span> مقارنة
                    بالتعاقد مع الوكالات العالمية، مع كود إنتاجي نظيف، وسرعة 95+، وتواصل فوري دون حواجز زمنية.
                  </>
                ) : (
                  <>
                    You save approximately <span className="font-mono font-black text-emerald-950" dir="ltr">{fmt(savingsUsd)}</span> vs.
                    tier-one global agencies, with direct senior engineers, production architecture, and 100% Arabic/English fluency.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* ── HIGH-CONVERTING BOTTOM ACTION BUTTON ── */}
          <div className="mt-6 pt-4 border-t border-neutral-200/80">
            <PencilButton
              href={`https://wa.me/201003778273?text=${encodeURIComponent(waQuoteMessage)}`}
              variant="primary"
              size="lg"
              fullWidth
              className="py-4 text-sm sm:text-base font-bold shadow-lg shadow-blue-500/25"
              hoverLabel={isRtl ? "تثبيت العرض عبر واتساب ←" : "Lock Estimate on WhatsApp →"}
            >
              <span>{isRtl ? `تثبيت هذا التقدير (${fmt(calc.pencil)}) وبدء المشروع` : `Lock this Estimate (${fmt(calc.pencil)}) & Book Sprint`}</span>
            </PencilButton>

            <p className="mt-2 text-center font-mono text-[11px] text-neutral-400">
              {isRtl
                ? "مكالمة مجانية 20 دقيقة لتأكيد النطاق · لا التزام مالي مسبق"
                : "Free 20-min clarity session to calibrate exact scope · No upfront obligation"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}