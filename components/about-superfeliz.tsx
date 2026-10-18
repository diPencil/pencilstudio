"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  TrendingUp,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

import SculptureHero from "@/components/ui/liquid-sculpture-hero";

interface AboutSuperFelizProps {
  isRtl: boolean;
}

function ScenarioConsole({ isRtl, slug }: { isRtl: boolean; slug: string }) {
  const videoSrcMap: Record<string, string> = {
    ecommerce: "/about/e-commerce-retail.mp4",
    saas: "/about/saas-cloud-platforms.mp4",
    realestate: "/about/real-estate-luxury.mp4",
  };

  const videoSrc = videoSrcMap[slug] || "/about/e-commerce-retail.mp4";

  return (
    <div className="group relative aspect-[5/4] sm:aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-neutral-200/90 bg-neutral-950 shadow-2xl shadow-neutral-900/10 transition-all duration-500 hover:shadow-blue-500/15">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
      {/* Subtle glass reflection & border ring */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-black/10" />
    </div>
  );
}

export function AboutSuperFeliz({ isRtl }: AboutSuperFelizProps) {
  const architecturalSpecs = [
    {
      num: "01",
      icon: Cpu,
      tagEn: "AUTONOMOUS OPS",
      tagAr: "أتمتة التشغيل الذاتي",
      titleEn: "24/7 Workflow Orchestration",
      titleAr: "أتمتة مسارات العمل والربط 24/7",
      descEn:
        "Direct API integration into CRM, ERP, and payment stacks to eliminate human lag and batch queue bottlenecks.",
      descAr:
        "ربط مباشر لأنظمة الـ CRM، بوابات الدفع، والمخازن لأتمتة المهام الروتينية والتحقق الفوري دون انتظار بشري.",
      traditionalEn: "Fragmented tools, manual review queues, and days of reconciliation delay.",
      traditionalAr: "أنظمة منفصلة وجزر معزولة، مراجعة يدوية بطيئة، وتأخير في مطابقة الفواتير لأيام.",
      superfelizEn: "14ms auto-execution latency • Instant inventory & document sync • Zero human lag",
      superfelizAr: "استجابة فورية خلال 14ms • مزامنة تلقائية للمخزون والطلبات • انعدام التعطيل البشري",
      metricEn: "Up to 80% Faster Execution",
      metricAr: "تسريع العمليات التشغيلية حتى 80%",
    },
    {
      num: "02",
      icon: TrendingUp,
      tagEn: "COMMERCIAL AI",
      tagAr: "ذكاء تجاري للأرباح",
      titleEn: "Data-Driven Margin Steering",
      titleAr: "توجيه القرارات وحماية هوامش الربح",
      descEn:
        "Powered by Feliz Oper to monitor unit economics, customer drop-offs, and pricing sensitivity in real time.",
      descAr:
        "مدعوماً بنموذج Feliz Oper لمراقبة سلوك العملاء، هوامش الربح الصافية، وحساسية التسعير لحظة بلحظة.",
      traditionalEn: "Delayed monthly reports, unaddressed checkout drop-offs, and silent margin bleed.",
      traditionalAr: "تقارير متأخرة نهاية الشهر، خروج العملاء من شاشات الدفع دون رصد، وتآكل هوامش الربح.",
      superfelizEn: "Automated cart retention workflows • Dynamic margin defense • Live cohort telemetry",
      superfelizAr: "تفعيل مسارات استعادة السلات آلياً • حماية ديناميكية للهوامش • رصد لحظي للتحويل",
      metricEn: "+24.8% Real-Time Margin Gain",
      metricAr: "تحسين ومراقبة مستمرة لهوامش الربح (+24.8%)",
    },
    {
      num: "03",
      icon: ShieldCheck,
      tagEn: "DATA SOVEREIGNTY",
      tagAr: "سيادة سحابية 100%",
      titleEn: "100% Private Cloud Sovereignty",
      titleAr: "حماية بياناتك داخل سيرفراتك الخاصة",
      descEn:
        "Runs entirely inside your dedicated VPS infrastructure with military-grade memory isolation and zero data leak.",
      descAr:
        "يعمل بالكامل داخل سيرفرات الـ VPS الخاصة بك مع عزل بياني كامل وانعدام خروج أي بايت بيانات لمزود خارجي.",
      traditionalEn: "Public AI APIs streaming client records to third parties for public model training.",
      traditionalAr: "أدوات AI عامة ترسل سجلات عملائك لسيرفرات خارجية وتستخدمها لتدريب نماذجها.",
      superfelizEn: "Dedicated client VPS • AES-256 memory encryption • Zero third-party data access",
      superfelizAr: "سيرفر VPS خاص ومخصص • تشفير كامل AES-256 للذاكرة • انعدام تدريب أطراف ثالثة",
      metricEn: "Zero Public Data Leakage",
      metricAr: "انعدام تسريب البيانات بنسبة 100%",
    },
    {
      num: "04",
      icon: Layers,
      tagEn: "EXCLUSIVE PRO SUITE",
      tagAr: "وصول كامل لفريقك",
      titleEn: "Full Feliz Family for Your Team",
      titleAr: "تفعيل عائلة Feliz المتخصصة لموظفيك",
      descEn:
        "Contracted partners receive enterprise seats for all 4 Feliz engines: Oper, Tech, Gen, and SuperFeliz.",
      descAr:
        "تحصل الشركات المتعاقدة معنا على حسابات PRO لجميع نماذج عائلة Feliz: Oper، Tech، Gen، و SuperFeliz المركزي.",
      traditionalEn: "Single generic chatbot hallucinating on domain specs, with costly per-seat add-ons.",
      traditionalAr: "شات بوت عام واحد سطحي يهلوس في الأرقام الهندسية، مع اشتراكات متفرقة ومكلفة لكل موظف.",
      superfelizEn: "4 dedicated engines: Oper (finance), Tech (code), Gen (creative), SuperFeliz (orchestrator)",
      superfelizAr: "4 نماذج متخصصة: Oper للمال، Tech للكود، Gen للمحتوى، و SuperFeliz للتشغيل المركزي",
      metricEn: "4 Specialized Enterprise Engines",
      metricAr: "4 نماذج ذكاء متخصصة لفريقك",
    },
  ];

  const scenarios = [
    {
      id: "ecommerce",
      labelEn: "E-Commerce & Retail",
      labelAr: "المتاجر والتجارة الإلكترونية",
      missionEn: "High cart abandonment & customer return friction during seasonal sales peak.",
      missionAr: "ارتفاع نسبة السلات المتروكة وصعوبة إدارة المرتجعات أثناء مواسم البيع الكبرى.",
      actionsEn: [
        "Feliz Oper identifies checkout drop-off at payment gateway step",
        "Autonomous WhatsApp re-engagement workflow triggered in 4 minutes",
        "Automated return label generated and inventory synchronized instantly",
      ],
      actionsAr: [
        "نموذج Oper يكتشف نقطة خروج العملاء بدقة في مرحلة الدفع",
        "تفعيل مسار استعادة السلات عبر واتساب آلياً خلال 4 دقائق فقط",
        "إصدار بوليصة استرجاع ذكية وتحديث نظام المخازن فوراً بدون تدخل يدوي",
      ],
      outcomeEn: "+32% recovered GMV • 4.8 min average resolution",
      outcomeAr: "استعادة 32% من المبيعات المتروكة • 4.8 دقيقة لإنهاء أي طلب",
    },
    {
      id: "saas",
      labelEn: "SaaS & Cloud Platforms",
      labelAr: "المنصات الرقمية وSaaS",
      missionEn: "Complex enterprise onboarding, role permissions, and API telemetry bottleneck.",
      missionAr: "تعقيد تهيئة حسابات الشركات الكبرى ومنح الصلاحيات ومتابعة استهلاك الـ API.",
      actionsEn: [
        "SuperFeliz parses client requirements and auto-provisions tenant DB",
        "Feliz Tech runs automated security linting and generates tenant API keys",
        "Predictive load alerts triggered before server memory crosses 80%",
      ],
      actionsAr: [
        "SuperFeliz يحلل متطلبات العميل ويؤسس قاعدة بيانات العزل تلقائياً",
        "نموذج Tech ينشئ مفاتيح الربط الآمنة ويفحص ثغرات الصلاحيات فوراً",
        "إرسال تنبيهات تنبؤية قبل وصول ضغط السيرفرات إلى 80%",
      ],
      outcomeEn: "Zero-touch client onboarding • 99.99% uptime guarantee",
      outcomeAr: "انضمام عملاء آلي بالكامل • جاهزية تشغيل مستمرة 99.99%",
    },
    {
      id: "realestate",
      labelEn: "Real Estate & Luxury",
      labelAr: "العقارات والمشاريع الفاخرة",
      missionEn: "Slow sales qualification for high-intent Gulf and international property investors.",
      missionAr: "بطء تأهيل وفرز العملاء المحتملين ذوي الملاءة المالية من الخليج والمهتمين بالاستثمار.",
      actionsEn: [
        "Bilingual conversational bot screens investor budget and unit preference",
        "Instant matching with available inventory units and payment schedules",
        "Verified leads auto-routed to senior relationship partner via WhatsApp CRM",
      ],
      actionsAr: [
        "محادثة ذكية ثنائية اللغة تفحص ميزانية المستثمر ونوع الوحدات المطلوبة",
        "مطابقة فورية مع الوحدات المتاحة في المشروع وجداول السداد المناسبة",
        "تحويل العميل المؤهل فوراً إلى مدير المبيعات المباشر مع ملف استثماري كامل",
      ],
      outcomeEn: "Lead response in < 45 seconds • 3.4x higher viewing conversion",
      outcomeAr: "استجابة للعميل في أقل من 45 ثانية • زيادة المعاينات 3.4 أضعاف",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] select-none">
      
      {/* ── LIVING MULTI-COLOR AMBIENT GRADIENT MESH (UNIFIED WITH STUDIO STANDARDS) ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cobalt Blue Aura Blob */}
        <div className="animate-aura-1 absolute -top-24 left-1/4 h-[580px] w-[580px] rounded-full bg-[#2057ff]/12 blur-[140px]" />
        
        {/* Violet / Indigo Aura Blob */}
        <div className="animate-aura-2 absolute top-1/4 -right-24 h-[620px] w-[620px] rounded-full bg-[#8b5cf6]/10 blur-[150px]" />
        
        {/* Cyan / Teal Fresh Aura Blob */}
        <div className="animate-aura-3 absolute top-1/2 -left-24 h-[560px] w-[560px] rounded-full bg-[#06b6d4]/10 blur-[140px]" />
        
        {/* Warm Coral / Rose Highlight Blob */}
        <div className="animate-aura-1 absolute top-3/4 right-1/4 h-[480px] w-[480px] rounded-full bg-[#f43f5e]/8 blur-[140px]" />

        {/* Delicate Architectural Dot Matrix Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── SUPERFELIZ PRIMARY LIQUID SCULPTURE SECTION ─────────────────── */}
      <div className="relative w-full overflow-hidden">
        <SculptureHero
          showNav={false}
          showCredit={false}
          themeToggle={false}
          theme="light"
          loadFonts={false}
          headingFont={
            isRtl
              ? "var(--font-arabic), Alexandria, system-ui, sans-serif"
              : "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }
          accentFont={
            isRtl
              ? "var(--font-arabic), Alexandria, system-ui, sans-serif"
              : "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }
          bodyFont={
            isRtl
              ? "var(--font-arabic), Alexandria, system-ui, sans-serif"
              : "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          }
          height="min(92vh, 760px)"
          sculptureScale={0.92}
          sculptureY={2}
          backdropText="SUPERFELIZ"
          eyebrow={
            isRtl
              ? "محرك الذكاء الاصطناعي المؤسسي لـ PENCIL // V1.0 PRO"
              : "PENCIL ENTERPRISE AI ENGINE // V1.0 PRO"
          }
          headline={
            isRtl
              ? "ذكاء عصبي حي\nيقود نمو شركتك."
              : "Intelligence that\nanswers back."
          }
          headlineAccent={isRtl ? "يقود نمو شركتك." : "answers back."}
          body={
            isRtl
              ? "نموذج SuperFeliz الشامل والمحرك الرقمي الذي يدمج في أنظمتك ليؤتمت مسارات العمل المعقدة، يحلل سلوك العملاء، ويحمي هوامش أرباحك على مدار الساعة."
              : "Pencil's all-domain enterprise AI engine. Embedded directly into your private cloud infrastructure to automate recurring friction, steer commercial decisions, and scale operational velocity."
          }
          primaryCta={{
            label: isRtl ? "استكشف تفعيل SuperFeliz" : "Explore SuperFeliz Integration",
            href: "/consultation",
          }}
          secondaryCta={{
            label: isRtl ? "محاكي المهام الحية" : "Live mission playbooks",
            href: "#superfeliz-simulator",
          }}
          hint={isRtl ? "حرك الماوس لتفاعل السائل العصبي" : "Move across the liquid neural form"}
          hintTouch={isRtl ? "المس التكوين لتفاعل الجزيئات" : "Touch the liquid neural form"}
          background="transparent"
          darkBackground="#0D0E12"
          textColor="#151514"
          accentColor="#2057ff"
          interactive={true}
          strength={1.2}
          radius={240}
          liquid={1.35}
          turbulence={1.1}
          speed={1.05}
          streaks={true}
          className="relative"
        />
      </div>

      {/* ── CLIENT VALUE & HOW SUPERFELIZ POWERS PARTNERS ────────────────── */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <div className="container-custom relative z-10 mx-auto px-4 sm:px-6">
          
          {/* Section Heading */}
          <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 mb-4 border border-neutral-200">
                {isRtl ? "معيار SuperFeliz" : "The SuperFeliz Standard"}
              </span>
              <h2 className={cn("text-4xl lg:text-6xl text-neutral-900 mb-4 font-normal", isRtl ? "tracking-normal" : "leading-tight")}>
                {isRtl ? (
                  <>
                    كيف يخدم SuperFeliz شركتك{" "}
                    <span className="italic font-light text-neutral-500">
                      ويحمي استمرارية أرباحها؟
                    </span>
                  </>
                ) : (
                  <>
                    How SuperFeliz Serves Our Partners{" "}
                    <span className="italic font-light text-neutral-500">
                      & Sustains Margin Advantage
                    </span>
                  </>
                )}
              </h2>
              <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                {isRtl
                  ? "محرك PENCIL المعرفي الخاص، مدمج مباشرة داخل بنيتك التحتية لأتمتة التنفيذ، حماية الهوامش، وتسريع وتيرة التشغيل."
                  : "PENCIL’s in-house cognitive engine, embedded directly inside your private infrastructure to automate execution, protect margins and scale operational velocity."}
              </p>
            </div>

            {/* SuperFeliz Mark */}
            <div className="hidden lg:flex shrink-0 items-center justify-center pe-4 xl:pe-10">
              <Image
                src="/macosdock/superfeliz.svg"
                alt="SuperFeliz"
                width={256}
                height={256}
                unoptimized
                className="h-auto w-40 xl:w-52 object-contain drop-shadow-[0_28px_60px_rgba(32,87,255,0.20)]"
              />
            </div>
          </div>

          {/* SuperFeliz Capability Ledger — editorial cards with a subtle 3D tilt */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {architecturalSpecs.map((spec, idx) => {
              const Icon = spec.icon;

              return (
                <div key={spec.num} className="[perspective:1400px]">
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 6, rotateY: -3 }}
                    whileHover={{ rotateX: 0, rotateY: 0, y: -6 }}
                    viewport={{ once: false, amount: 0.2, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-5 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 lg:py-9 shadow-[0_18px_45px_-26px_rgba(15,23,42,0.28)] hover:border-blue-200 hover:shadow-[0_34px_60px_-26px_rgba(32,87,255,0.30)] transition-colors duration-300"
                  >
                    {/* Index + Icon */}
                    <div className="lg:col-span-1 flex items-center gap-3 lg:flex-col lg:items-start">
                      <span className="font-mono text-4xl lg:text-5xl font-light leading-none text-neutral-200 transition-colors duration-300 group-hover:text-[#2057ff]/40">
                        {spec.num}
                      </span>
                      <div className="h-10 w-10 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-800 shadow-sm transition-all duration-300 group-hover:bg-[#2057ff] group-hover:text-white group-hover:border-[#2057ff] lg:mt-4 shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Capability */}
                    <div className="lg:col-span-7">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2057ff]">
                        {isRtl ? spec.tagAr : spec.tagEn}
                      </span>
                      <h3 className="mt-2 text-2xl lg:text-3xl font-normal text-neutral-950 leading-tight">
                        {isRtl ? spec.titleAr : spec.titleEn}
                      </h3>
                      <p className="mt-3 text-sm lg:text-base text-neutral-600 leading-relaxed max-w-2xl">
                        {isRtl ? spec.descAr : spec.descEn}
                      </p>
                      <p className="mt-4 flex items-start gap-2 text-xs sm:text-sm text-neutral-900">
                        <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 fill-[#2057ff] text-[#2057ff]" />
                        <span>{isRtl ? spec.superfelizAr : spec.superfelizEn}</span>
                      </p>
                    </div>

                    {/* Verified Outcome */}
                    <div className="lg:col-span-4 flex flex-col justify-center lg:border-s lg:border-neutral-200 lg:ps-8">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                        {isRtl ? "النتيجة المؤكدة" : "Verified Outcome"}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2057ff]" />
                        {isRtl ? spec.metricAr : spec.metricEn}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Verified Architecture Footnote */}
          <div className="mt-6 mb-16 lg:mb-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-neutral-800">
                {isRtl
                  ? "معتمد هندسياً: تشغيل كامل داخل سيرفرات العميل الخاصة"
                  : "Verified architecture: 100% private client VPS"}
              </span>
            </span>
            <span>
              {isRtl
                ? "مدمج تلقائياً في كل عقود PENCIL المؤسسية"
                : "Natively integrated into all PENCIL enterprise contracts"}
            </span>
          </div>

        {/* Interactive Mission Simulator: See SuperFeliz in Action */}
        <div id="superfeliz-simulator" className="scroll-mt-24 relative">

          {/* Header: Simulator Title + Live Telemetry Status */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="h-4 w-4 text-[#2057ff]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  {isRtl ? "محاكي المهام التشغيلية الحية" : "Live Enterprise Mission Simulator"}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-950">
                {isRtl
                  ? "شاهد كيف يحل SuperFeliz تحديات شركتك لحظياً"
                  : "Experience How SuperFeliz Orchestrates Client Operations"}
              </h4>
            </div>

            {/* Live Telemetry Pill */}
            <div className="flex items-center gap-3 self-start md:self-auto text-xs font-mono bg-white px-3.5 py-1.5 rounded-full border border-neutral-200 shadow-sm">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                SUPERFELIZ V1.0 PRO
              </span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-500">LATENCY 14MS</span>
            </div>
          </div>

          {/* Alternating mission rows — visual ⟷ content, full width */}
          <div className="mt-14 lg:mt-20 flex flex-col gap-16 lg:gap-28">
            {scenarios.map((sc, idx) => {
              const reversed = idx % 2 === 1;

              return (
                <div
                  key={sc.id}
                  className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16"
                >
                  {/* Visual column */}
                  <div className={cn("relative", reversed && "lg:order-2")}>
                    <ScenarioConsole isRtl={isRtl} slug={sc.id} />
                  </div>

                  {/* Content column */}
                  <div className={cn("max-w-xl", reversed ? "lg:order-1" : "lg:justify-self-start")}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#2057ff]">0{idx + 1}</span>
                      <span className="h-px w-8 bg-neutral-300" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                        {isRtl ? sc.labelAr : sc.labelEn}
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl lg:text-4xl font-normal leading-tight text-neutral-950">
                      {isRtl ? sc.missionAr : sc.missionEn}
                    </h3>

                    <p className="mt-4 text-sm lg:text-base text-neutral-500 leading-relaxed">
                      {isRtl
                        ? "عادة ما يتطلب هذا التحدي ساعات طويلة وتدخل بشري متكرر قد يسبب أخطاء أو بطء في استجابة العملاء."
                        : "Traditionally requires manual coordination across departments, creating customer drop-off and operational friction."}
                    </p>

                    {/* Autonomous resolution list */}
                    <div className="mt-8 border-t border-neutral-200 divide-y divide-neutral-200">
                      {(isRtl ? sc.actionsAr : sc.actionsEn).map((action, i) => (
                        <div key={i} className="flex items-start gap-4 py-4">
                          <CheckCircle2 className="h-4 w-4 text-[#2057ff] shrink-0 mt-1" />
                          <span className="text-sm lg:text-base text-neutral-700 leading-snug">{action}</span>
                        </div>
                      ))}
                    </div>

                    {/* Commercial outcome */}
                    <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        {isRtl ? "النتيجة التجارية المحققة" : "Commercial Outcome"}
                      </span>
                      <span className="mt-1.5 block text-base font-semibold text-neutral-950 leading-snug">
                        {isRtl ? sc.outcomeAr : sc.outcomeEn}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  </section>
);
}
