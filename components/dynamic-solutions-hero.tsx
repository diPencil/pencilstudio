"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Rocket,
  Workflow,
  TrendingUp,
  Layers,
  Bot,
  Sparkles,
  PhoneCall,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Activity,
  Flame,
  Cpu,
  LineChart,
  MessageSquare,
  ChevronDown,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";

export function DynamicSolutionsHero() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  // Mouse Parallax Physics
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Kinetic Typewriter Slogans
  const slogans = isRtl
    ? [
        "تُدار بذكاء Feliz المؤسسي",
        "تُضاعف مبيعاتك وأرباحك",
        "تجمع شغلك في سيستم واحد",
        "بدون تشتت بين 5 موردين",
        "تسليم مفتاح جاهز للعمل",
      ]
    : [
        "Powered by SuperFeliz AI",
        "Built to Scale Commercial ROI",
        "Centralized Under One Roof",
        "Zero Freelancer Chaos",
        "Turnkey Production Quality",
      ];

  const [sloganIdx, setSloganIdx] = useState(0);
  const [activeNode, setActiveNode] = useState<string>("superfeliz");

  useEffect(() => {
    const timer = setInterval(() => {
      setSloganIdx((prev) => (prev + 1) % slogans.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [slogans.length]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] overflow-hidden border-b border-neutral-200/90 bg-white pb-16 pt-28 md:pb-24 md:pt-36 select-none"
    >
      {/* ============================================================ */}
      {/* 1. DYNAMIC LIVING BACKGROUND                                 */}
      {/* ============================================================ */}
      {/* Animated Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 45%, black 40%, transparent 95%)",
        }}
      />

      {/* Floating Glowing Energy Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.35, 0.55, 0.35],
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 start-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#2057ff]/20 via-indigo-500/10 to-transparent blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, -35, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-40 end-1/6 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-amber-400/20 via-pink-500/10 to-transparent blur-[130px]"
      />

      <div className="container-custom relative z-10">
        {/* ============================================================ */}
        {/* 2. HEADER & PUNCHY KINETIC HEADLINE                          */}
        {/* ============================================================ */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Top Live Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/90 bg-white/80 px-4 py-1.5 text-xs font-bold text-neutral-800 shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2057ff] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2057ff]" />
            </span>
            <span>{isRtl ? "منظومات الأعمال الرقمية للمؤسسات" : "Full-Stack Enterprise Solutions"}</span>
            <span className="text-neutral-300">|</span>
            <span className="font-semibold text-neutral-500">
              {isRtl ? "تسليم مفتاح معتمد · Pencil Studio" : "Turnkey Partner · Pencil Studio"}
            </span>
          </motion.div>

          {/* Main Kinetic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-black tracking-tight text-neutral-900 sm:text-6xl lg:text-[68px] lg:leading-[1.08]"
          >
            {isRtl ? (
              <>
                حلول أعمال رقمية تُهندس{" "}
                <br className="hidden sm:inline" />
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-[#2057ff] to-neutral-900">
                    لتُدير وتُوسّع نشاطك
                  </span>
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 inset-x-0 h-3 bg-[#2057ff]/15 -rotate-1 rounded-full -z-0"
                  />
                </span>
              </>
            ) : (
              <>
                Digital enterprise engines{" "}
                <br className="hidden sm:inline" />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-[#2057ff] to-neutral-900">
                  built to run & scale
                </span>
              </>
            )}
          </motion.h1>

          {/* Dynamic Slogan Morphing Ticker */}
          <div className="mt-4 flex items-center justify-center gap-2 text-lg sm:text-2xl font-bold">
            <span className="text-neutral-400 font-light">{isRtl ? "منظومة واحدة:" : "One Engine:"}</span>
            <motion.span
              key={sloganIdx}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="font-black text-[#2057ff] drop-shadow-sm"
            >
              {slogans[sloganIdx]}
            </motion.span>
          </div>

          {/* Authentic Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            {isRtl
              ? "مش مجرد خدمات متفرقة بتطلبها بالقطعة وتتشتت بين خمس أطراف. بنسل بتبنيلك ماكينة أعمال رقمية متكاملة تضمن هيبة البراند، استقرار البرمجة، سرعة المبيعات، وأتمتة العمليات اليومية مع ذكاء Feliz المؤسسي الذي يربط المنظومة كلها."
              : "Not fragmented services scattered across five different freelancers. We engineer turnkey digital engines: brand authority, custom Next.js software, operational automation, and SuperFeliz enterprise AI."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <Link
              href="/support/callback"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-neutral-900 px-8 py-4 text-sm font-black text-white shadow-xl transition-all duration-300 hover:bg-neutral-800 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <PhoneCall size={16} />
                <span>{isRtl ? "احجز دراسة حل لشركتك" : "Discuss a solution for your company"}</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            <a
              href="#solutions-suites"
              className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-900/10 bg-white px-7 py-4 text-sm font-bold text-neutral-800 shadow-sm transition hover:border-neutral-900 hover:bg-neutral-50 hover:shadow-md"
            >
              <span>{isRtl ? "استكشف منظومات الحلول" : "Explore Solution Suites"}</span>
              <Flame size={15} className="text-[#2057ff]" />
            </a>

            <a
              href="#feliz-enterprise"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-50 px-6 py-4 text-sm font-bold text-amber-900 shadow-sm transition hover:bg-amber-100 hover:border-amber-500"
            >
              <Sparkles size={15} className="text-amber-600 animate-spin" style={{ animationDuration: "8s" }} />
              <span>{isRtl ? "عائلة Feliz الذكية" : "Feliz AI Layer"}</span>
            </a>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* 3. THE INTERACTIVE NEURAL SOLUTIONS CONSTELLATION STAGE     */}
        {/* ============================================================ */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative mx-auto mt-14 max-w-6xl"
        >
          {/* Main Stage Frame */}
          <div className="relative overflow-hidden rounded-[36px] border border-neutral-900/10 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 p-6 sm:p-10 text-white shadow-2xl">
            {/* Ambient Interior Lighting */}
            <div className="pointer-events-none absolute -top-32 start-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-[#2057ff]/30 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 end-10 h-56 w-72 rounded-full bg-amber-400/20 blur-[90px]" />

            {/* Top Bar Matrix Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-400/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/90">
                  Pencil Enterprise Network Core
                </span>
              </div>

              <div className="flex items-center gap-3 font-mono text-[11px] text-white/60">
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-emerald-400">
                  ● 5 Connected Engines
                </span>
                <span className="hidden sm:inline">Latency: 18ms</span>
                <span className="hidden sm:inline">SLA: 99.99%</span>
              </div>
            </div>

            {/* The 5 Interactive Dynamic Nodes Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* NODE 1: BRAND LAUNCH */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setActiveNode("brand")}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300",
                  activeNode === "brand"
                    ? "border-[#2057ff] bg-white/[0.08] shadow-lg shadow-[#2057ff]/20"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
                )}
              >
                {/* Background image preview with smooth zoom */}
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 transition-opacity duration-500 group-hover:opacity-35">
                  <Image src="/hero-section.jpg" alt="Brand Launch" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2057ff]/30 px-2.5 py-0.5 text-[10px] font-bold text-[#6ea8fe] backdrop-blur-md">
                    <Rocket size={11} />
                    {isRtl ? "إطلاق متكامل" : "Turnkey Launch"}
                  </span>
                  <span className="font-mono text-[10px] text-white/50" dir="ltr">30 DAYS</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-white group-hover:text-[#6ea8fe] transition-colors">
                  {isRtl ? "إطلاق العلامة واختراق السوق" : "Brand Launch & Authority"}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                  {isRtl
                    ? "Brand Book متكامل + موقع Next.js 15 صاروخي يفتح في أقل من ثانية."
                    : "Full Brand Book (50+ pgs) & sub-second Next.js 15 web platform."}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                  <span>{isRtl ? "✓ جاهزية لأول 100 عميل" : "✓ 0 to First 100 Clients"}</span>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
              </motion.div>

              {/* NODE 2: CUSTOM CRM & OPERATIONS */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setActiveNode("crm")}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300",
                  activeNode === "crm"
                    ? "border-emerald-500 bg-white/[0.08] shadow-lg shadow-emerald-500/20"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
                )}
              >
                {/* Background image preview */}
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 transition-opacity duration-500 group-hover:opacity-35">
                  <Image src="/business-sectors/crm-automation.jpg" alt="CRM Automation" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 backdrop-blur-md">
                    <Workflow size={11} />
                    {isRtl ? "كفاءة وأتمتة" : "Operations Core"}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400" dir="ltr">-60% TIME</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {isRtl ? "أتمتة العمليات والـ CRM المخصص" : "Custom CRM & Automation"}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                  {isRtl
                    ? "ودّع فوضى الإكسل: ربط الفروع، فواتير فورية عبر WhatsApp API."
                    : "Zero spreadsheet chaos: multi-branch sync & automated WhatsApp billing."}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                  <span>{isRtl ? "✓ بدون اشتراكات مقاعد شهرية" : "✓ 0% Per-Seat SaaS Taxes"}</span>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
              </motion.div>

              {/* NODE 3: CENTRAL SUPERFELIZ AI (FEATURED BIGGER IN CENTER) */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setActiveNode("superfeliz")}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-2xl border-2 p-5 transition-all duration-300 sm:col-span-2 lg:col-span-1",
                  activeNode === "superfeliz"
                    ? "border-amber-400 bg-gradient-to-br from-amber-400/20 via-neutral-900 to-neutral-950 shadow-xl shadow-amber-400/20"
                    : "border-amber-400/40 bg-white/[0.04] hover:border-amber-400 hover:bg-white/[0.07]"
                )}
              >
                {/* Background image preview */}
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-25 transition-opacity duration-500 group-hover:opacity-45">
                  <Image src="/help-editorial/pencil-superfeliz.png" alt="SuperFeliz AI" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-black text-neutral-950 shadow-sm">
                    <Sparkles size={11} />
                    {isRtl ? "ذكاء فيليز المؤسسي" : "SuperFeliz AI"}
                  </span>
                  <span className="font-mono text-[10px] text-amber-400 font-bold" dir="ltr">24/7 ACTIVE</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>{isRtl ? "سوبر فيليز: الذكاء المتصل" : "SuperFeliz: Enterprise AI"}</span>
                  <Bot size={16} className="text-amber-400 animate-pulse" />
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/80">
                  {isRtl
                    ? "مساعد ذكي مدرب على سياسات شركتك لخدمة العملاء وأتمتة الردود."
                    : "Private enterprise knowledge ingestion, WhatsApp sales bot, and decision assistance."}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-amber-400 font-bold">
                  <span>{isRtl ? "✓ عائلة Feliz (Oper·Tech·Gen)" : "✓ Oper · Tech · Gen Core"}</span>
                  <ArrowUpRight size={13} className="text-amber-400" />
                </div>
              </motion.div>

              {/* NODE 4: REVENUE FUNNELS & ATTRIBUTION */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setActiveNode("revenue")}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300",
                  activeNode === "revenue"
                    ? "border-pink-500 bg-white/[0.08] shadow-lg shadow-pink-500/20"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
                )}
              >
                {/* Background image preview */}
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 transition-opacity duration-500 group-hover:opacity-35">
                  <Image src="/signature-capabilities/Marketing-Growth-Systems.jpg" alt="Revenue Funnels" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/30 px-2.5 py-0.5 text-[10px] font-bold text-pink-400 backdrop-blur-md">
                    <TrendingUp size={11} />
                    {isRtl ? "مضاعفة الأرباح" : "Revenue Growth"}
                  </span>
                  <span className="font-mono text-[10px] text-pink-400" dir="ltr">2.8x ROAS</span>
                </div>
                <h3 className="mt-3 text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                  {isRtl ? "فانلز الاستحواذ والتتبع CAPI" : "Conversion Funnels & CAPI"}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                  {isRtl
                    ? "صفحات هبوط تفتح في أقل من 800ms، وتتبع سحابي مباشر."
                    : "Sub-800ms landing funnels & server-side Conversions API."}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-pink-400">
                  <span>{isRtl ? "✓ مسارات استرجاع السلات المهجورة" : "✓ Cart Recovery Automation"}</span>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
              </motion.div>

              {/* NODE 5: SAAS & MOBILE APPS */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setActiveNode("product")}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:col-span-2 lg:col-span-2",
                  activeNode === "product"
                    ? "border-indigo-500 bg-white/[0.08] shadow-lg shadow-indigo-500/20"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
                )}
              >
                {/* Background image preview */}
                <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 transition-opacity duration-500 group-hover:opacity-35">
                  <Image src="/signature-capabilities/Mobile-Apps-SaaS-Products.jpg" alt="SaaS & Mobile Apps" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/30 px-2.5 py-0.5 text-[10px] font-bold text-indigo-400 backdrop-blur-md">
                    <Layers size={11} />
                    {isRtl ? "هندسة المنتجات" : "Product Scale"}
                  </span>
                  <span className="font-mono text-[10px] text-indigo-400" dir="ltr">AWS SCALE</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {isRtl ? "بناء المنصات وتطبيقات الـ SaaS والهواتف" : "SaaS & Mobile Product Acceleration"}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                      {isRtl
                        ? "تطبيقات أصلية iOS وأندرويد، تصميم فيجما، وسيرفرات ذاتية التوسع بدون أعذار فنية."
                        : "Native iOS & Android code, Figma systems, and zero-downtime cloud architecture."}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end text-[11px] font-mono text-indigo-400 space-y-1">
                    <span>{isRtl ? "✓ بوابات دفع واشتراكات دورية" : "✓ Stripe & Local Recurring Gateways"}</span>
                    <span>{isRtl ? "✓ ملكية تامة للسورس كود 100%" : "✓ Complete IP & Source Code Ownership"}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Interactive Navigation Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span className="font-mono text-emerald-400">● LIVE ARCHITECTURE:</span>
                <span>{isRtl ? "انقر على أي منظومة للنزول لتفاصيلها المباشرة" : "Click any suite to jump to its detailed breakdown"}</span>
              </div>

              <a
                href="#solutions-suites"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-black text-neutral-950 transition hover:bg-neutral-200"
              >
                <span>{isRtl ? "عرض تفاصيل المنظومات كاملة" : "View Full Suites Breakdown"}</span>
                <ChevronDown size={14} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 4. REAL COMMERCIAL TRUST METRIC ROW                          */}
        {/* ============================================================ */}
        <div className="mx-auto mt-12 max-w-5xl border-t border-neutral-200/80 pt-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { en: "+10 Years", ar: "+10 سنوات", subEn: "Multidisciplinary Craft", subAr: "خبرة تنفيذية في السوق العربي" },
              { en: "Single Team", ar: "فريق واحد", subEn: "Owns the Result & ROI", subAr: "يضمن النتيجة ومعدل التحويل" },
              { en: "99.99% Uptime", ar: "99.99%", subEn: "AWS Cloud Stability SLA", subAr: "استقرار سحابي معتمد بدون سقوط" },
              { en: "SuperFeliz AI", ar: "ذكاء Feliz", subEn: "24/7 Autonomous Operations", subAr: "أتمتة العمليات وخدمة العملاء 24/7" },
            ].map((m, idx) => (
              <div key={idx} className="flex flex-col text-center sm:text-start">
                <span className="text-2xl font-black text-neutral-900 md:text-3xl" dir="ltr">
                  {isRtl ? m.ar : m.en}
                </span>
                <span className="mt-1 text-xs font-semibold text-neutral-500">
                  {isRtl ? m.subAr : m.subEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
