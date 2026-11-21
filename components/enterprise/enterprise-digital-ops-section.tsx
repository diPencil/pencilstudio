"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilButton } from "@/components/ui/pencil-button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

/* 4-petal organic bloom motif exactly matching the reference top-right icon */
function ReferenceOrganicBloom({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={cn("w-14 h-14 sm:w-16 sm:h-16 text-[#2057FF] shrink-0", className)}
      aria-hidden="true"
    >
      <g transform="translate(50, 50)">
        <ellipse cx="0" cy="-24" rx="14" ry="24" transform="rotate(45)" />
        <ellipse cx="0" cy="-24" rx="14" ry="24" transform="rotate(135)" />
        <ellipse cx="0" cy="-24" rx="14" ry="24" transform="rotate(225)" />
        <ellipse cx="0" cy="-24" rx="14" ry="24" transform="rotate(315)" />
      </g>
    </svg>
  );
}

/* Circular rotating text badge with central arrow matching the reference bottom-right */
function ReferenceRotatingStamp({ isRtl = false }: { isRtl?: boolean }) {
  return (
    <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 select-none shrink-0">
      <svg
        className="w-full h-full animate-[spin_24s_linear_infinite]"
        viewBox="0 0 120 120"
      >
        <path
          id="stampCirclePath"
          d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          fill="none"
        />
        <text className="text-[8.5px] font-mono uppercase tracking-[0.24em] fill-neutral-900 font-bold">
          <textPath href="#stampCirclePath" startOffset="0%">
            {isRtl
              ? "• استوديو بينسل • إدارة رقمية موحدة • 2026 •"
              : "• PENCIL STUDIO • DIGITAL HQ • 2026 • ALL IN ONE •"}
          </textPath>
        </text>
      </svg>
      <Link
        href="/#contact"
        aria-label={isRtl ? "تواصل مع بينسل" : "Contact PENCIL"}
        className="absolute inset-0 flex items-center justify-center group"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-sm group-hover:scale-110 group-hover:bg-[#2057FF] group-hover:text-white group-hover:border-[#2057FF] transition-all duration-300">
          <ArrowRight
            size={18}
            className={cn("transition-transform", isRtl ? "rotate-180 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5")}
          />
        </div>
      </Link>
    </div>
  );
}

export function EnterpriseDigitalOpsSection() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <section id="digital-hq" className="relative overflow-hidden border-b border-neutral-200/90 bg-[#FFFFFF] py-16 sm:py-24 text-neutral-900">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================================ */}
        {/* EXACT REFERENCE COMPOSITION: 2 COLUMNS (Left ~30% / Right ~70%) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-start">
          
          {/* ────────────────────────────────────────────────────────── */}
          {/* 1. LEFT COLUMN: Exactly matching the reference layout       */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Top Squircle Card */}
              <Reveal>
                <div className="rounded-3xl border border-neutral-100 bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.05)] flex items-center gap-3.5 max-w-[320px]">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-neutral-100 bg-[#F5F5F7]">
                    <Image
                      src="/about/personal-high.jpg"
                      alt={isRtl ? "إدارة الشركات الرقمية" : "Unified Digital HQ"}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium text-neutral-600 leading-snug">
                    {isRtl
                      ? "منظومة تشغيل وإدارة رقمية موحدة لكامل حضور مؤسستك."
                      : "You can unify your entire digital presence under one dedicated partner."}
                  </p>
                </div>

                {/* Micro Text below Card */}
                <p className="mt-4 text-xs text-neutral-500 leading-relaxed max-w-[320px]">
                  {isRtl
                    ? "انضم إلى قادة الأعمال الذين يديرون برمجياتهم وتسويقهم وإنتاجهم المرئي عبر شريك تنفيذي واحد."
                    : "Join our team to run your digital operations together. Software, growth, media, and design with zero vendor friction."}
                </p>

                {/* Avatar Stack + Dark Pill Button (Side-by-Side) */}
                <div className="mt-4 flex items-center gap-2.5">
                  <div className="flex -space-x-2 rtl:space-x-reverse overflow-hidden shrink-0">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-neutral-200 shadow-xs">
                      <Image
                        src="/explore-pencil/pencil-studio.jpg"
                        alt="PENCIL Studio"
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-neutral-300 shadow-xs">
                      <Image
                        src="/explore-pencil/pencil-company.jpg"
                        alt="PENCIL Leadership"
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-neutral-900 shadow-xs flex items-center justify-center">
                      <Image
                        src="/favcion.png"
                        alt="PENCIL"
                        fill
                        className="object-contain p-1.5"
                        sizes="32px"
                      />
                    </div>
                  </div>
                  <div className="rounded-full bg-neutral-950 px-4 py-2 text-xs font-bold text-white shadow-xs">
                    {isRtl ? "6 استوديوهات متخصصة • شريك واحد" : "6 Specialized Studios • 1 Partner"}
                  </div>
                </div>
              </Reveal>

              {/* Middle Section: "Green the Planet / Share with us your results" */}
              <Reveal delay={0.1}>
                <div className="mt-8 sm:mt-10">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {isRtl ? "القيادة والتنفيذ المباشر" : "DIRECT EXECUTIVE ALIGNMENT"}
                  </span>
                  <h3 className="mt-2 text-3xl sm:text-4xl lg:text-[38px] font-black text-neutral-950 tracking-tight leading-[1.15]">
                    {isRtl ? (
                      <>
                        شاركنا رؤيتك، <br />
                        <span className="font-light italic text-[#2057FF]">لنحولها لواقع.</span>
                      </>
                    ) : (
                      <>
                        Share With Us Your Vision, <br />
                        <span className="font-light italic text-[#2057FF]">Built for Scale.</span>
                      </>
                    )}
                  </h3>

                  {/* PENCIL CTA Button */}
                  <div className="mt-5">
                    <PencilButton
                      href="/#contact"
                      variant="outline"
                      size="sm"
                      hoverLabel={isRtl ? "تواصل مع القيادة ←" : "Direct Alignment →"}
                    >
                      <span>{isRtl ? "اكتشف المزيد" : "Learn More"}</span>
                    </PencilButton>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bottom Text of Left Column */}
            <Reveal delay={0.15}>
              <div className="mt-5 sm:mt-7">
                <p className="text-[13px] sm:text-sm text-neutral-600 leading-relaxed max-w-[340px]">
                  {isRtl
                    ? "منذ عام 2014، يقود استوديو بينسل تشغيل وتطوير المنظومات الرقمية والهويات البصرية الكبرى، الحملات الإعلانية والإنتاج السينمائي، وهندسة البرمجيات السحابية المعقدة في مصر والسعودية والخليج وأوروبا. نعمل كذراع تنفيذي مباشر لمجلس الإدارة لضمان سرعة التوسع وحماية استقرار أعمالك بعقود ملزمة وضمانات تشغيل رسمية."
                    : "Since 2014, PENCIL has engineered, scaled, and managed mission-critical software platforms, award-winning brand identities, cinema campaigns, and luxury print architectures across Egypt, Saudi Arabia, the GCC, and Europe. We operate as an embedded executive partner, aligning your commercial KPIs with end-to-end technical and creative excellence."}
                </p>
              </div>
            </Reveal>
          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* 2. RIGHT COLUMN: Exactly matching the reference layout     */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Top Headline with Oblong Outline Pill & 4-Petal Organic Bloom */}
            <Reveal>
              <div className="flex items-start justify-between gap-4 pb-6 sm:pb-8">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                    {isRtl ? "منظومة رقمية شاملة" : "ALL-IN-ONE ENTERPRISE OPS"}
                  </span>
                  <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-tight text-neutral-900 leading-[1.12]">
                    {isRtl ? (
                      <>
                        <span className="font-normal text-neutral-900">كل ما تحتاجه مؤسستك</span>
                        <span className="block mt-1 sm:mt-2">
                          <span className="inline-block rounded-full border border-neutral-300 px-6 sm:px-8 py-0.5 sm:py-1 font-light italic text-neutral-500 bg-neutral-50">
                            تحت سقف واحد
                          </span>
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-normal text-neutral-900">Everything your business</span>
                        <span className="block mt-1 sm:mt-2">
                          <span className="font-normal text-neutral-900">needs </span>
                          <span className="inline-block rounded-full border border-neutral-300 px-6 sm:px-8 py-0.5 sm:py-1 mx-1.5 font-light italic text-neutral-500 bg-neutral-50">
                            under one roof
                          </span>
                        </span>
                      </>
                    )}
                  </h2>
                </div>

                {/* 4-Petal Organic Bloom on Top Right */}
                <div className="shrink-0 pt-4 hidden sm:block">
                  <ReferenceOrganicBloom />
                </div>
              </div>
            </Reveal>

            {/* ────────────────────────────────────────────────────────── */}
            {/* Centerpiece: Widescreen Capsule Banner                     */}
            {/* ────────────────────────────────────────────────────────── */}
            <Reveal delay={0.1}>
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[290px] rounded-tl-[70px] sm:rounded-tl-[95px] md:rounded-tl-[120px] rounded-br-[70px] sm:rounded-br-[95px] md:rounded-br-[120px] rounded-tr-3xl rounded-bl-3xl overflow-hidden border border-neutral-200/90 bg-[#F5F5F7] shadow-md shadow-neutral-900/5">
                <Image
                  src="/about/aboutcompany-2.jpg"
                  alt={isRtl ? "منظومة بينسل الموحدة" : "PENCIL Digital HQ Architecture"}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
              </div>
            </Reveal>

            {/* ────────────────────────────────────────────────────────── */}
            {/* Sub-grid under Capsule: Floating Card (Left) & Text (Right) */}
            {/* ────────────────────────────────────────────────────────── */}
            <Reveal delay={0.15}>
              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Floating Stat Card (Overlaps bottom-left edge of capsule with Frosted Glassmorphism) */}
                <div className="md:col-span-6 lg:col-span-5 relative -mt-16 sm:-mt-22 md:-mt-28 ms-4 sm:ms-6 z-20 rounded-[32px] sm:rounded-[36px] bg-white/75 backdrop-blur-2xl backdrop-saturate-150 p-7 sm:p-8 md:p-9 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] border border-white/80 text-start min-h-[250px] sm:min-h-[280px] flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-white/10 pointer-events-none rounded-[32px] sm:rounded-[36px]" />
                  
                  <div className="relative z-10">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-4xl sm:text-5xl lg:text-[54px] font-black text-neutral-950 tracking-tight leading-none">
                        +40%
                      </span>
                      <div className="font-mono text-xs sm:text-sm font-bold text-neutral-700 leading-tight">
                        <div>overhead</div>
                        <div>saved</div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm sm:text-[15px] font-medium text-neutral-800 leading-relaxed">
                      {isRtl
                        ? "إلغاء فوضى 6 عقود ووكالات منفصلة في شريك تنفيذي واحد: كود، تسويق، سوشيال، فيديو، طباعة، واستشارات."
                        : "Eliminating 6 separate agency invoices into one cohesive partner. Zero blame games, guaranteed SLAs, and collective commercial accountability."}
                    </p>
                  </div>
                </div>

                {/* Right Area beside Floating Card: Paragraph + Buttons */}
                <div className="md:col-span-6 lg:col-span-7 pt-4 sm:pt-6 md:pt-8 px-2 sm:px-6">
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {isRtl
                      ? "نجمع بين دقة الهندسة البرمجية، وابتكار الإنتاج السينمائي والموشن، وقوة التسويق المربوط بالأرباح، والطباعة الفاخرة، والاستشارات المباشرة لمجالس الإدارة. استوديو واحد يحمل كل تفاصيل حضورك الرقمي بكفاءة واحترافية مطلقة."
                      : "We strive to protect enterprise momentum for future scale. PENCIL has carried mission-critical platforms, award-winning brand identities, cinema campaigns, and print architectures across Egypt, Saudi Arabia, the GCC, and Europe."}
                  </p>

                  {/* PENCIL Signature CTA Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3.5 sm:gap-4">
                    <PencilButton
                      href="/#contact"
                      variant="primary"
                      size="md"
                      showPencilIcon
                      hoverLabel={isRtl ? "احجز جلستك الآن ←" : "Book Discovery Call →"}
                    >
                      <span>{isRtl ? "احجز جلسة استشارية" : "Book Discovery Call"}</span>
                    </PencilButton>

                    <PencilButton
                      href="/work"
                      variant="outline"
                      size="md"
                      hoverLabel={isRtl ? "استعرض سوابق الأعمال ←" : "Explore Case Studies →"}
                    >
                      <span>{isRtl ? "استعرض سوابق الأعمال" : "View Case Studies"}</span>
                    </PencilButton>
                  </div>
                </div>

              </div>
            </Reveal>

          </div>

          {/* ────────────────────────────────────────────────────────── */}
          {/* 3. FULL-WIDTH BOTTOM ROW: Headline on Left + Statement & Stamp on Right */}
          {/* ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-12 mt-4 sm:mt-6 pt-5 sm:pt-6 border-t border-neutral-100">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side (in the previous empty space on the left) */}
                <div className="lg:col-span-4 text-start">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {isRtl ? "الريادة والحوكمة الرقمية" : "ENTERPRISE EXCELLENCE"}
                  </span>
                  <h3 className="mt-1.5 text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight leading-snug">
                    {isRtl ? (
                      <>
                        بُنيت لكبرى المؤسسات، <br />
                        <span className="font-light italic text-[#2057FF]">وهندسة تصنع الفارق.</span>
                      </>
                    ) : (
                      <>
                        Built for Global Scale, <br />
                        <span className="font-light italic text-[#2057FF]">Engineered to Lead.</span>
                      </>
                    )}
                  </h3>
                </div>

                {/* Right Side: Statement + Rotating Stamp */}
                <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-normal text-neutral-900 leading-snug max-w-lg text-start">
                    {isRtl ? (
                      <>
                        عقد كامل من الهندسة السريعة، والأنظمة البصرية،{" "}
                        <span className="font-light italic text-[#2057FF]">والشراكة الاستراتيجية الحقيقية.</span>
                      </>
                    ) : (
                      <>
                        A decade of high-velocity engineering, bespoke brand systems,{" "}
                        <span className="font-light italic text-[#2057FF]">and enduring commercial scale.</span>
                      </>
                    )}
                  </h4>

                  {/* Rotating Circular Stamp Badge with Arrow */}
                  <ReferenceRotatingStamp isRtl={isRtl} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
