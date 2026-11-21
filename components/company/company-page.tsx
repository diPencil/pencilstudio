"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilButton, PencilOriginalIconSvg } from "@/components/ui/pencil-button";
import { PENCIL } from "@/components/shared/ui/pencil-ui";
import { cn } from "@/lib/utils";
import {
  HeartHandshake,
  ShieldCheck,
  Flame,
  Users2,
  Sparkles,
  TrendingUp,
  Workflow,
  CheckCircle2,
  MapPin,
  Building2,
  Briefcase,
  ArrowRight,
  ArrowDownRight,
  Check,
  PhoneCall,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";

const PRICING_TABLE_SERVICES = [
  {
    value: "Websites & landing pages",
    labelEn: "Websites & landing pages",
    labelAr: "المواقع الإلكترونية وصفحات الهبوط (Websites & Landing Pages)",
  },
  {
    value: "Digital platforms & E-commerce",
    labelEn: "Digital platforms & E-commerce",
    labelAr: "المنصات الرقمية والمتاجر الإلكترونية (E-Commerce & Portals)",
  },
  {
    value: "Mobile app (iOS & Android)",
    labelEn: "Mobile app (iOS & Android)",
    labelAr: "تطبيقات الموبايل (iOS & Android)",
  },
  {
    value: "Desktop software (Windows, macOS & Linux)",
    labelEn: "Desktop software (Windows, macOS & Linux)",
    labelAr: "برامج الكمبيوتر (Windows, macOS & Linux)",
  },
  {
    value: "SaaS product development",
    labelEn: "SaaS product development",
    labelAr: "برمجة وتطوير منتجات الـ SaaS",
  },
  {
    value: "Hostinger cloud & web hosting",
    labelEn: "Hostinger cloud & web hosting",
    labelAr: "استضافة هوستنجر السحابية وإدارة المواقع (Hostinger Cloud)",
  },
  {
    value: "Domain registration & DNS management",
    labelEn: "Domain registration & DNS management",
    labelAr: "حجز النطاقات وإدارة الـ DNS (Domains & DNS)",
  },
  {
    value: "Corporate business email suites",
    labelEn: "Corporate business email suites",
    labelAr: "البريد الإلكتروني الرسمي للشركات (Business Email)",
  },
  {
    value: "Managed Cloud VPS (Linux & Windows RDP)",
    labelEn: "Managed Cloud VPS (Linux & Windows RDP)",
    labelAr: "سيرفرات VPS السحابية (Cloud VPS & RDP)",
  },
  {
    value: "SSL security certificates & encryption",
    labelEn: "SSL security certificates & encryption",
    labelAr: "شهادات أمان SSL وتشفير المواقع (SSL Certificates)",
  },
  {
    value: "Dedicated Cloud & DevOps Operations",
    labelEn: "Dedicated Cloud & DevOps Operations",
    labelAr: "الإدارة السحابية المتقدمة وعمليات DevOps (Cloud & DevOps Ops)",
  },
  {
    value: "IT Consulting & Advisory",
    labelEn: "IT Consulting & Advisory",
    labelAr: "الاستشارات التقنية وهندسة النظم (IT Consulting)",
  },
  {
    value: "Brand identity & creative systems",
    labelEn: "Brand identity & creative systems",
    labelAr: "الهوية المؤسسية والأنظمة البصرية (Brand Identity)",
  },
  {
    value: "Social media design packages",
    labelEn: "Social media design packages",
    labelAr: "باقات تصميم السوشيال ميديا (Social Media Design)",
  },
  {
    value: "Business systems & CRM",
    labelEn: "Business systems & CRM",
    labelAr: "أنظمة التشغيل والـ CRM والداشبورد (Business Systems)",
  },
  {
    value: "Marketing & growth systems",
    labelEn: "Marketing & growth systems",
    labelAr: "أنظمة التسويق والنمو وتتبع الأداء (Marketing & Growth)",
  },
  {
    value: "SuperFeliz AI & autonomous agents",
    labelEn: "SuperFeliz AI & autonomous agents",
    labelAr: "بوابة سوبر فيليز والذكاء الاصطناعي (SuperFeliz AI)",
  },
  {
    value: "Four turnkey solution suites",
    labelEn: "Four turnkey solution suites",
    labelAr: "المنظومات التجارية الأربع المتكاملة (Turnkey Solution Suites)",
  },
  {
    value: "Company management & retainer",
    labelEn: "Company management & retainer",
    labelAr: "الإدارة الرقمية الشاملة للشركة (Operating Retainer)",
  },
];

export function CompanyPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  // Strategic Consultation Form State
  const [consultDone, setConsultDone] = React.useState(false);
  const [consultForm, setConsultForm] = React.useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    service: PRICING_TABLE_SERVICES[0].value,
    message: "",
  });
  const [consultError, setConsultError] = React.useState("");

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultForm.firstName.trim() || !consultForm.lastName.trim()) {
      setConsultError(isRtl ? "يرجى كتابة الاسم كاملاً." : "Please provide your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(consultForm.email)) {
      setConsultError(isRtl ? "يرجى إدخال بريد إلكتروني صحيح." : "Please provide a valid email address.");
      return;
    }
    if (!consultForm.phone.trim()) {
      setConsultError(isRtl ? "يرجى كتابة رقم الهاتف للتواصل." : "Please provide a phone number.");
      return;
    }
    setConsultError("");
    setConsultDone(true);
  };

  // Core values from the original Why Us page
  const coreValues = [
    {
      icon: Flame,
      num: "01",
      titleEn: "Passionate",
      titleAr: "شغف بلا حدود",
      descEn:
        "An intense, uncompromising enthusiasm for delivering an extraordinary client experience and craft that sets industry benchmarks.",
      descAr:
        "شغف حقيقي غير مهادن بتقديم تجربة استثنائية لشركائنا، وجودة برمجية وبصرية تضع معايير جديدة في السوق.",
    },
    {
      icon: HeartHandshake,
      num: "02",
      titleEn: "Respectful",
      titleAr: "احترام وشفافية كاملة",
      descEn:
        "Maintaining a kind, constructive, and radically transparent relationship internally and with every partner, even under peak delivery pressure.",
      descAr:
        "علاقة يسودها التقدير والوضوح المطلق مع كل شريك، والتواصل المهني الصادق حتى في أصعب أوقات التسليم.",
    },
    {
      icon: ShieldCheck,
      num: "03",
      titleEn: "Ownership",
      titleAr: "ملكية ومسؤولية تنفيذية",
      descEn:
        "Empowering every team member to take full pride and accountability for outcomes, relentlessly pursuing our shared commercial targets.",
      descAr:
        "نتعامل مع كل مشروع كأنه شركتنا الخاصة؛ نتحمل المسؤولية الكاملة عن النتيجة ونقاتل لتحقيق الأهداف المشتركة.",
    },
    {
      icon: Users2,
      num: "04",
      titleEn: "Unified",
      titleAr: "فريق واحد متناغم",
      descEn:
        "Operating seamlessly as a cohesive multidisciplinary unit across strategy, design, engineering, and cloud operations.",
      descAr:
        "نعمل ككيان استراتيجي واحد يربط بين الفكر الفني، هندسة البرمجيات، وحلول السحابة دون جزر معزولة.",
    },
  ];


  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={cn("min-h-screen text-neutral-900", PENCIL.paper)}>
      <Header light />

      {/* ─────────────────────────────────────────────────────────────────
          HERO SECTION: CLEAN PURE WHITE BACKGROUND (NO GRADIENT)
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-0 flex flex-col justify-center overflow-hidden bg-white">
        <div className="container-custom relative z-10 max-w-5xl text-center my-auto w-full px-4 sm:px-6">
          {/* Eyebrow Pill */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/95 px-4 py-1.5 text-xs font-semibold text-neutral-700 shadow-xs backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                C / 01 • {isRtl ? "منظومة شركة بنسل" : "PENCIL COMPANY ECOSYSTEM"}
              </span>
              <span className="text-neutral-300">•</span>
              <span className="font-bold text-[#2057FF]">
                {isRtl ? "عن الشركة والشراكة الاستراتيجية" : "About Company & Partnership"}
              </span>
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={0.06}>
            <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-neutral-950 leading-[1.14]">
              {isRtl ? (
                <>
                  <span>لسنا مجرد منفذين، </span>
                  <span className="block font-light text-[#2057ff]">
                    نحن شركاء بناء وقرار استراتيجي.
                  </span>
                </>
              ) : (
                <>
                  <span className="font-extrabold tracking-tight text-neutral-950">
                    We are not just makers,{" "}
                  </span>
                  <span className="block font-light italic text-[#2057ff]">
                    we are strategic decision partners.
                  </span>
                </>
              )}
            </h1>
          </Reveal>

          {/* Editorial Description */}
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-neutral-600">
              {isRtl
                ? "عقد من الخبرة في هندسة البرمجيات وبناء الهويات البصرية والمنظومات التشغيلية في مصر، السعودية، الخليج، وأوروبا. نسخر خبراتنا لتخفيف فوضى التشغيل وتحقيق نمو تجاري مستدام."
                : "A decade of high-velocity software engineering, bespoke brand systems, and operational platforms across Egypt, Saudi Arabia, the GCC, and Europe. Built on genuine ownership, craft, and unwavering trust."}
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <PencilButton
                href="/contact"
                variant="primary"
                size="default"
                hoverLabel={isRtl ? "تحدث مع القيادة ←" : "Talk with Leadership →"}
                className="font-bold shadow-md hover:shadow-lg"
              >
                {isRtl ? "تحدث مع قيادة الشركة" : "Talk with Company Leadership"}
              </PencilButton>

              <PencilButton
                href="/work"
                variant="outline"
                size="default"
                hoverLabel={isRtl ? "استعرض الأعمال ←" : "Explore Portfolio →"}
                className="font-bold border-neutral-300 bg-white hover:border-neutral-900 text-neutral-900 shadow-2xs"
              >
                {isRtl ? "استعرض سجل الأعمال" : "View Portfolio & Proof"}
              </PencilButton>
            </div>
          </Reveal>
        </div>

        {/* HERO VISUAL SHOWCASE (aboutcompany.jpg - Edge-to-Edge Full Bleed Width, Flush to Black Bar) */}
        <div className="mt-10 md:mt-14 relative w-full px-0 mb-0 leading-none">
          <Reveal delay={0.22}>
            <div className="relative w-full overflow-hidden leading-none">
              <Image
                src="/about/aboutcompany.jpg"
                alt={isRtl ? "شركة بنسل ستوديو - القيادة والهندسة والشراكة الاستراتيجية" : "Pencil Studio & Company - Leadership, Engineering & Partnership"}
                width={1672}
                height={789}
                priority
                className="w-full h-auto block m-0 p-0"
                sizes="100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-b border-neutral-200/80 bg-neutral-950 py-12 text-white">
        <div className="container-custom mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-start">
            <div>
              <span className="block font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">10+</span>
              <span className="mt-1 block text-xs sm:text-sm text-neutral-400 font-medium">
                {isRtl ? "سنوات خبرة متواصلة (منذ 2014)" : "Years in Market (Est. 2014)"}
              </span>
            </div>
            <div>
              <span className="block font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">890+</span>
              <span className="mt-1 block text-xs sm:text-sm text-neutral-400 font-medium">
                {isRtl ? "مشروع ناجح تم تسليمه" : "Delivered Digital Projects"}
              </span>
            </div>
            <div>
              <span className="block font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight">50+</span>
              <span className="mt-1 block text-xs sm:text-sm text-neutral-400 font-medium">
                {isRtl ? "متخصص إقليمي ومستشار" : "Regional Engineers & Designers"}
              </span>
            </div>
            <div>
              <span className="block font-mono text-3xl sm:text-5xl font-bold text-[#2057ff] tracking-tight">99.8%</span>
              <span className="mt-1 block text-xs sm:text-sm text-neutral-400 font-medium">
                {isRtl ? "نسبة استمرارية ورضا الشركاء" : "Client SLA & Retention Rate"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          HOW WE DRIVE REAL IMPACT FOR YOU (OPERATING PHILOSOPHY)
          MATCHING /support/technical ASYMMETRIC STAGGERED WIREFRAME
      ───────────────────────────────────────────────────────────────── */}
      <section
        id="company-impact"
        className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-neutral-200/90 relative overflow-hidden"
      >
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* ── LEFT COLUMN: Eyebrow + Headline + Note & Indicator ── */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 text-start">
              <div>
                <Reveal>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                    {isRtl ? "فلسفتنا التشغيلية" : "OUR OPERATING PHILOSOPHY"}
                  </span>
                </Reveal>

                <Reveal delay={0.05}>
                  <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                    {isRtl ? (
                      <>
                        كيف نصنع الفارق،{" "}
                        <span className="block font-light italic text-neutral-500">
                          في نجاح ونمو مشروعك.
                        </span>
                      </>
                    ) : (
                      <>
                        How We Drive,{" "}
                        <span className="block font-light italic text-neutral-500">
                          Real Impact for You.
                        </span>
                      </>
                    )}
                  </h2>
                </Reveal>
              </div>

              <Reveal delay={0.1}>
                <div className="pt-4 border-t border-neutral-100 flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm">
                    <ArrowDownRight size={17} className={isRtl ? "scale-x-[-1]" : ""} />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm">
                    {isRtl
                      ? "أطر عمل استراتيجية مصممة خصيصاً لهوامش أرباحك، وتزيل فوضى التشغيل، وتبني لريادة قطاعك بثقة واستدامة."
                      : "Strategic execution frameworks tuned to your unit economics, eliminating operational friction, and engineering sustainable market authority."}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ── RIGHT COLUMN: Dynamic Staggered Asymmetric Rows (Matching Reference Exactly) ── */}
            <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
              {/* ── ROW 1: Wide Text Card (Col 8) + Narrow Image Card (Col 4) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                {/* Text Card 1: Extra Wide (8 cols) */}
                <Reveal delay={0.15} className="sm:col-span-8 md:col-span-8 lg:col-span-8 xl:col-span-8">
                  <div className="h-full rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] p-5 sm:p-6 flex flex-col justify-center min-h-[116px] sm:min-h-[126px] transition-all duration-300 hover:border-neutral-300 hover:shadow-xs group text-start">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                        {isRtl ? "عناية شخصية فائقة + هوية مؤثرة" : "Personal High-Touch Care + Bold Identity"}
                      </h3>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-200/80 text-neutral-800 shrink-0">
                        <Sparkles size={16} />
                      </div>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm text-neutral-500 leading-snug line-clamp-2">
                      {isRtl
                        ? "نجمع بين الاهتمام الشخصي المباشر من قيادات الاستوديو، وبين بناء منظومات بصرية راقية تفرض هيبتها في السوق."
                        : "We combine dedicated executive partnership with world-class design systems that command authority."}
                    </p>
                  </div>
                </Reveal>

                {/* Image Card 1: Narrow (4 cols) */}
                <Reveal delay={0.18} className="sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4">
                  <div className="relative w-full h-full min-h-[116px] sm:min-h-[126px] rounded-2xl overflow-hidden border border-neutral-200/90 bg-[#F5F5F7] shadow-xs group hover:border-neutral-300 transition-all duration-300">
                    <Image
                      src="/about/personal-high.jpg"
                      alt={isRtl ? "عناية شخصية فائقة وهيبة بصرية" : "Personal High-Touch Care + Bold Identity"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                  </div>
                </Reveal>
              </div>

              {/* ── ROW 2: Medium-Wide Royal Blue Text Card (Col 7) + Medium Image Card (Col 5) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                {/* Text Card 2: Medium-Wide (7 cols) */}
                <Reveal delay={0.2} className="sm:col-span-7 md:col-span-7 lg:col-span-7 xl:col-span-7">
                  <div className="h-full rounded-2xl bg-[#2057FF] text-white p-5 sm:p-6 flex flex-col justify-center min-h-[116px] sm:min-h-[126px] shadow-lg shadow-blue-500/20 transition-all duration-300 hover:brightness-105 group text-start">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                        {isRtl ? "شراكة قرار وليست علاقة مورد" : "Collaborative Strategic Partnerships"}
                      </h3>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-white shrink-0">
                        <TrendingUp size={16} />
                      </div>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm text-blue-100/90 leading-snug line-clamp-2">
                      {isRtl
                        ? "نتعمق في أرقام مشروعك، هوامش أرباحك، وتحدياتك لتوجيه أفضل قرار تقني وتنفيذي مستدام."
                        : "We immerse ourselves in your unit economics, operational bottlenecks, and expansion goals."}
                    </p>
                  </div>
                </Reveal>

                {/* Image Card 2: Medium (5 cols) */}
                <Reveal delay={0.23} className="sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-5">
                  <div className="relative w-full h-full min-h-[116px] sm:min-h-[126px] rounded-2xl overflow-hidden border border-neutral-200/90 bg-[#F5F5F7] shadow-xs group hover:border-neutral-300 transition-all duration-300">
                    <Image
                      src="/about/partnerships.jpg"
                      alt={isRtl ? "شراكة قرار استراتيجية" : "Collaborative Strategic Partnerships"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 240px"
                    />
                  </div>
                </Reveal>
              </div>

              {/* ── ROW 3: Compact Text Card (Col 6) + Widest Image Card (Col 6) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
                {/* Text Card 3: Compact (6 cols) */}
                <Reveal delay={0.25} className="sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6">
                  <div className="h-full rounded-2xl border border-neutral-200/90 bg-[#F5F5F7] p-5 sm:p-6 flex flex-col justify-center min-h-[116px] sm:min-h-[126px] transition-all duration-300 hover:border-neutral-300 hover:shadow-xs group text-start">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                        {isRtl ? "تبسيط التعقيد وحماية المستقبل" : "Simplifying Chaos & Future-Proofing"}
                      </h3>
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-200/80 text-neutral-800 shrink-0">
                        <Workflow size={16} />
                      </div>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-sm text-neutral-500 leading-snug line-clamp-2">
                      {isRtl
                        ? "تخفيف فوضى التشغيل، خفض التكاليف البرمجية الخفية، ومنحك راحة البال المطلقة."
                        : "Eliminating operational friction, reducing long-term tech debt, and providing peace of mind."}
                    </p>
                  </div>
                </Reveal>

                {/* Image Card 3: Widest (6 cols) */}
                <Reveal delay={0.28} className="sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6">
                  <div className="relative w-full h-full min-h-[116px] sm:min-h-[126px] rounded-2xl overflow-hidden border border-neutral-200/90 bg-[#F5F5F7] shadow-xs group hover:border-neutral-300 transition-all duration-300">
                    <Image
                      src="/about/future-proofing.jpg"
                      alt={isRtl ? "تبسيط التعقيد وحماية المستقبل" : "Simplifying Chaos & Future-Proofing"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          THE FOUR PRINCIPLES THAT GUIDE EVERY ACTION (CORE VALUES)
          MATCHING "Key technical needs, and enterprise engineering" SHOWCASE
      ───────────────────────────────────────────────────────────────── */}
      <section className="pt-20 sm:pt-28 pb-0 bg-[#FFFFFF] border-b border-neutral-200/90 relative overflow-hidden">
        {/* Header: Left Headline vs Right Minimal Arrow & Note (Constrained in container) */}
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-12 sm:pb-16 text-start">
              <div className="max-w-xl">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {isRtl ? "قيمنا المؤسسية" : "COMPANY CORE VALUES"}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                  {isRtl ? (
                    <>
                      المبادئ الأربعة،{" "}
                      <span className="font-light italic text-neutral-500">
                        التي تحكم عملنا وتوجه قراراتنا.
                      </span>
                    </>
                  ) : (
                    <>
                      The Four Principles,{" "}
                      <span className="block font-light italic text-neutral-500">
                        that guide every action.
                      </span>
                    </>
                  )}
                </h2>
              </div>

              <div className="flex items-start gap-3 max-w-md pt-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm">
                  <ArrowDownRight size={17} className={isRtl ? "scale-x-[-1]" : ""} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-neutral-950">
                    {isRtl ? "معايير مهنية لا مساومة عليها" : "Uncompromising Professional Standards"}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 leading-relaxed">
                    {isRtl
                      ? "مبادئ تأسيسية تضمن وضوح الرؤية، والمسؤولية الكاملة، وتقديم قيمة حقيقية تدوم مع كل مرحلة إطلاق."
                      : "Foundational pillars guaranteeing radical clarity, executive accountability, and long-term value delivery across every release."}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Overlapping Showcase Area */}
        <div className="relative w-full">
          {/* 4 Cards Grid (Layered on top with z-20 inside container) */}
          <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
              {coreValues.map((val, i) => {
                const Icon = val.icon;
                const isHighlight = i === 1;

                if (isHighlight) {
                  return (
                    <Reveal key={i} delay={0.1 + i * 0.05}>
                      <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl bg-[#2057FF] text-white p-6 sm:p-7 flex flex-col justify-start shadow-2xl shadow-blue-600/40 lg:-translate-y-8 transition-transform duration-300 hover:lg:-translate-y-9 hover:-translate-y-1 text-start group">
                        <div className="flex items-center justify-between">
                          <p className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight">
                            {val.num}
                          </p>
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                        <h3 className="mt-4 text-base sm:text-lg font-black text-white tracking-tight">
                          {isRtl ? val.titleAr : val.titleEn}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                          {isRtl ? val.descAr : val.descEn}
                        </p>
                      </div>
                    </Reveal>
                  );
                }

                return (
                  <Reveal key={i} delay={0.1 + i * 0.05}>
                    <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl border border-neutral-100 bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-neutral-900/10 transition-transform duration-300 hover:-translate-y-1 text-start group">
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                          {val.num}
                        </p>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800 shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="mt-4 text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                        {isRtl ? val.titleAr : val.titleEn}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        {isRtl ? val.descAr : val.descEn}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* FULL BLEED IMAGE: Edge-to-Edge 100vw, NO border, NO rounded curve, NO shadow! */}
          <div className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32 w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] overflow-hidden">
            <Image
              src="/about/aboutcompany-2.jpg"
              alt={isRtl ? "قيم ومبادئ استوديو بينسل" : "Pencil Core Values & Principles"}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          REGIONAL FOOTPRINT / LOCAL STRATEGIC TEAMS
          EXACT REPLICATION OF REFERENCE SLIDE 3-COLUMN STAGGERED LAYOUT
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-neutral-200/80 relative overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-[#1253FA] text-white p-7 sm:p-10 lg:p-14 shadow-2xl shadow-blue-600/30">
            {/* Prominent cyan concentric semi-circular arcs matching reference (RTL/LTR dynamic) */}
            <div
              className={cn(
                "pointer-events-none absolute -bottom-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full border-[14px] sm:border-[18px] border-cyan-400/40 z-0",
                isRtl ? "-right-14 sm:-right-20" : "-left-14 sm:-left-20"
              )}
            />
            <div
              className={cn(
                "pointer-events-none absolute -bottom-24 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full border-[14px] sm:border-[18px] border-cyan-400/25 z-0",
                isRtl ? "-right-28 sm:-right-36" : "-left-28 sm:-left-36"
              )}
            />

            {/* Translucent vertical arch (RTL/LTR dynamic) */}
            <div
              className={cn(
                "pointer-events-none absolute bottom-0 w-40 sm:w-48 lg:w-60 h-[72%] rounded-t-[56px] bg-gradient-to-t from-cyan-400/25 via-blue-400/10 to-transparent z-0",
                isRtl ? "right-[48%] sm:right-[54%] lg:right-[60%]" : "left-[34%] sm:left-[38%] lg:left-[43%]"
              )}
            />
            
            {/* Ambient soft glow on opposite top corner */}
            <div
              className={cn(
                "pointer-events-none absolute -top-24 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl z-0",
                isRtl ? "left-0" : "right-0"
              )}
            />

            {/* ── MODEL IMAGE ANCHORED AT BOTTOM-0 (TAILORED FOR EN & AR) ── */}
            <div
              className={cn(
                "pointer-events-none absolute bottom-0 w-[280px] sm:w-[340px] lg:w-[390px] h-[460px] sm:h-[540px] lg:h-[620px] z-10 overflow-hidden",
                isRtl
                  ? "start-48 sm:start-80 lg:start-[770px]"
                  : "start-36 sm:start-68 lg:start-[540px]"
              )}
            >
              <Image
                src="/about/aboutcompany-3.png"
                alt={isRtl ? "فريق استوديو بينسل الاستشاري" : "Pencil Executive Advisory Team"}
                fill
                className="object-contain object-bottom"
                priority
              />
              {/* Blue background gradient overlay focused only at the bottom edge */}
              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#1253FA] via-[#1253FA]/60 to-transparent" />
            </div>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* ── ZONE 1 (LEFT COLUMN): Headline + White Pill CTA + Tagline ── */}
              <div className="lg:col-span-5 flex flex-col justify-between relative min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] text-start">
                <div>
                  <Reveal>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-200">
                      {isRtl ? "تواجد إقليمي حقيقي" : "OUR SERVICES"}
                    </span>
                  </Reveal>

                  <Reveal delay={0.05}>
                    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight leading-[1.15]">
                      {isRtl ? (
                        <>
                          فريق محلي متخصص{" "}
                          <span className="block font-light italic text-neutral-400">
                            يفهم واقع السوق الإقليمي.
                          </span>
                        </>
                      ) : (
                        <>
                          Local Strategic Teams{" "}
                          <span className="block font-light italic text-neutral-400">
                            With Deep Market Insight.
                          </span>
                        </>
                      )}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-[#1253FA] px-7 py-3 font-black text-xs uppercase tracking-wider shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 group"
                      >
                        <span>{isRtl ? "استكشف مكاتبنا" : "MORE SERVICES"}</span>
                        <ArrowRight size={14} className={isRtl ? "rotate-180 group-hover:-translate-x-1 transition-transform" : "group-hover:translate-x-1 transition-transform"} />
                      </Link>
                    </div>
                  </Reveal>
                </div>

                {/* Bottom Tagline matching reference */}
                <div className="relative z-20 mt-auto pt-48 sm:pt-56 lg:pt-64">
                  <p className="text-[11px] sm:text-xs text-blue-100/90 font-medium tracking-wide max-w-xs">
                    {isRtl
                      ? "ندمج بين معايير الهندسة العالمية ومعرفة طبيعة وثقافة المستهلك الإقليمي."
                      : "Ensuring Wellness with Excellence, Compassion, and Innovation."}
                  </p>
                </div>
              </div>

              {/* ── ZONE 2 & 3: TWO VERTICAL COLUMNS OF CARDS (STAGGERED LIKE REFERENCE) ── */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-start">
                {/* ── MIDDLE COLUMN: Card 1 (Cairo) + Card 2 (Riyadh) ── */}
                <div className="flex flex-col gap-5 sm:gap-6 pt-0">
                  {/* Card 1: Cairo */}
                  <Reveal delay={0.15}>
                    <div className="rounded-[1.75rem] bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-blue-950/20 border border-white/50 text-start transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group min-h-[240px]">
                      <h4 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                        {isRtl ? "القاهرة، مصر" : "Cairo, Egypt"}
                      </h4>
                      <div className="my-3.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1253FA] text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                        <Building2 size={22} />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
                        {isRtl ? "مركز الهندسة والعمليات السحابية" : "Engineering & Cloud Hub"}
                      </p>
                      <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
                        {isRtl
                          ? "مركز الهندسة البرمجية والإنتاج الفني والعمليات السحابية المركزية."
                          : "Engineering hub, creative direction, and central cloud operations."}
                      </p>
                    </div>
                  </Reveal>

                  {/* Card 2: Riyadh */}
                  <Reveal delay={0.2}>
                    <div className="rounded-[1.75rem] bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-blue-950/20 border border-white/50 text-start transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group min-h-[240px]">
                      <h4 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                        {isRtl ? "الرياض، السعودية" : "Riyadh, Saudi Arabia"}
                      </h4>
                      <div className="my-3.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1253FA] text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                        <Briefcase size={22} />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
                        {isRtl ? "إدارة الشراكات المؤسسية" : "Enterprise Partnerships"}
                      </p>
                      <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
                        {isRtl
                          ? "إدارة الشراكات المؤسسية وتطوير الأعمال والاستشارات التنفيذية."
                          : "Enterprise partnerships, strategic expansion, and client accounts."}
                      </p>
                    </div>
                  </Reveal>
                </div>

                {/* ── RIGHTMOST COLUMN: Card 3 (Dubai) + Card 4 (Berlin) -> STAGGERED DOWNWARDS ── */}
                <div className="flex flex-col gap-5 sm:gap-6 pt-0 lg:pt-14">
                  {/* Card 3: Dubai */}
                  <Reveal delay={0.25}>
                    <div className="rounded-[1.75rem] bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-blue-950/20 border border-white/50 text-start transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group min-h-[240px]">
                      <h4 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                        {isRtl ? "دبي، الإمارات" : "Dubai, UAE"}
                      </h4>
                      <div className="my-3.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1253FA] text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                        <Workflow size={22} />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight">
                        {isRtl ? "ربط المنصات العالمية" : "Global Tech Orchestration"}
                      </p>
                      <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
                        {isRtl
                          ? "ربط المنصات العالمية وحلول التقنية الفائقة والتجارة الرقمية."
                          : "Global partner orchestration, advanced commerce, and tech advisory."}
                      </p>
                    </div>
                  </Reveal>

                  {/* Card 4: Berlin */}
                  <Reveal delay={0.3}>
                    <div className="rounded-[1.75rem] bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-blue-950/20 border border-white/50 text-start transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group min-h-[240px]">
                      <h4 className="text-base sm:text-lg font-black text-neutral-950 tracking-tight">
                        {isRtl ? "برلين، أوروبا" : "Berlin, Europe"}
                      </h4>
                      <div className="my-3.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1253FA] text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                        <ShieldCheck size={22} />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-neutral-950 tracking-tight">
                        {isRtl ? "الأمان والسيادة التقنية" : "Data Sovereignty & Security"}
                      </p>
                      <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
                        {isRtl
                          ? "معايير الأمان السحابي المتقدمة والسيادة التقنية الدولية."
                          : "Infrastructure security, data sovereignty, and technical architecture."}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          STRATEGIC CONSULTATION & SCOPES (REPLACING OLD DARK CTA)
          MATCHING "Check Out Our Services for Comprehensive Scopes"
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#FBFBFB] border-t border-neutral-200/90 relative overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-start">
            {/* ── LEFT COLUMN: Headline + Channels + Benefits + What Happens Next ── */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-700 shadow-2xs">
                    <PencilOriginalIconSvg className="h-3.5 w-3.5" />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                      {isRtl ? "استشارة استراتيجية مجانية" : "FREE STRATEGIC CONSULTATION"}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.05}>
                  <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal tracking-tight text-neutral-900 leading-[1.15]">
                    {isRtl ? (
                      <>
                        <span>استكشف خدماتنا، </span>
                        <span className="block font-light italic text-neutral-500">
                          لنطاقات عمل استشارية شاملة.
                        </span>
                      </>
                    ) : (
                      <>
                        Check Out Our Services for{" "}
                        <span className="block font-light italic text-neutral-500">
                          Comprehensive Scopes.
                        </span>
                      </>
                    )}
                  </h2>
                </Reveal>

                <Reveal delay={0.08}>
                  <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {isRtl
                      ? "يسعدنا الإجابة عن أي استفسارات لديكم ومساعدتكم في اختيار الخدمات والحلول الأنسب لاحتياجات ونمو مشروعكم."
                      : "We're happy to answer any questions you may have and help you determine which of our services best fit your needs."}
                  </p>
                </Reveal>

                {/* Direct Hotlines & Regional Channels */}
                <Reveal delay={0.12}>
                  <div className="mt-8 rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      {isRtl ? "قنوات الاتصال المباشر والخطوط الساخنة" : "DIRECT HOTLINES & REGIONAL CHANNELS"}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href="https://wa.me/201003778273"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 hover:bg-neutral-100/80 transition-colors group"
                      >
                        <div>
                          <span className="text-[10px] font-mono font-bold text-neutral-400 block">
                            {isRtl ? "المملكة (واتساب)" : "SA • KSA (WHATSAPP)"}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-neutral-900 font-mono tracking-tight" dir="ltr">
                            (020) 100-377-8273
                          </span>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 shrink-0 group-hover:scale-105 transition-transform">
                          <WhatsAppIcon className="h-4 w-4" />
                        </div>
                      </a>

                      <a
                        href="tel:+201003778273"
                        className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 hover:bg-neutral-100/80 transition-colors group"
                      >
                        <div>
                          <span className="text-[10px] font-mono font-bold text-neutral-400 block">
                            {isRtl ? "مصر (اتصال مباشر)" : "EG • EGY (DIRECT CALL)"}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-neutral-900 font-mono tracking-tight" dir="ltr">
                            (020) 100-377-8273
                          </span>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2057FF] shrink-0 group-hover:scale-105 transition-transform">
                          <PhoneCall className="h-4 w-4" />
                        </div>
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* YOUR BENEFITS */}
                <Reveal delay={0.16}>
                  <div className="mt-8">
                    <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-3.5">
                      {isRtl ? "مميزات الشراكة معنا:" : "YOUR BENEFITS:"}
                    </span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {[
                        { en: "Client-oriented", ar: "اهتمام مباشر باحتياجاتك" },
                        { en: "Results-driven", ar: "تركيز على مؤشرات الأداء" },
                        { en: "Independent Craft", ar: "إتقان تقني مستقل" },
                        { en: "Problem-solving", ar: "حلول جذرية واستباقية" },
                        { en: "Proven Competence", ar: "خبرة ومعايير موثقة" },
                        { en: "Transparent SLA", ar: "اتفاقيات خدمة شفافة" },
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-xs">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                            {isRtl ? benefit.ar : benefit.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* WHAT HAPPENS NEXT? */}
                <Reveal delay={0.2}>
                  <div className="mt-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/80 p-5">
                    <span className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                      {isRtl ? "ماذا يحدث بعد إرسال الطلب؟" : "WHAT HAPPENS NEXT?"}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {isRtl
                        ? "يقوم الفريق الاستراتيجي بمراجعة طلبك خلال 4 ساعات عمل لتحديد المستشار المتخصص والتنسيق معكم لمناقشة خارطة الطريق ونطاق العمل."
                        : "Our leadership team reviews your initiative within 4 hours to prepare actionable advisory options and clear next milestones."}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Schedule a Free Consultation Form ── */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-9 shadow-xl shadow-neutral-900/5 text-start">
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
                    {isRtl ? "احجز استشارة استراتيجية مجانية" : "Schedule a Free Consultation"}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                    {isRtl
                      ? "املأ البيانات أدناه وسيتواصل معك فريق القيادة في أقرب وقت."
                      : "Fill in the details below and our lead team will reach out promptly."}
                  </p>

                  {consultDone ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <Check size={24} strokeWidth={3} />
                      </div>
                      <h4 className="text-lg font-bold text-neutral-950">
                        {isRtl ? "تم استلام طلب الاستشارة بنجاح!" : "Consultation Request Received!"}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                        {isRtl
                          ? "شكراً لتواصلك. سيقوم أحد مستشارينا وقياديينا بدراسة نطاق مشروعك والتواصل معك قريباً."
                          : "Thank you for reaching out. A studio director will review your scope and get in touch promptly."}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setConsultDone(false);
                          setConsultForm({
                            firstName: "",
                            lastName: "",
                            company: "",
                            email: "",
                            phone: "",
                            service: PRICING_TABLE_SERVICES[0].value,
                            message: "",
                          });
                        }}
                        className="mt-6 text-xs font-bold text-[#2057FF] underline underline-offset-4"
                      >
                        {isRtl ? "إرسال طلب استشارة آخر" : "Submit another request"}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleConsultSubmit} className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                            {isRtl ? "الاسم الأول *" : "First name *"}
                          </label>
                          <input
                            required
                            value={consultForm.firstName}
                            onChange={(e) => setConsultForm({ ...consultForm, firstName: e.target.value })}
                            placeholder={isRtl ? "مثال: طارق" : "e.g. Alex"}
                            className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                            {isRtl ? "اسم العائلة *" : "Last name *"}
                          </label>
                          <input
                            required
                            value={consultForm.lastName}
                            onChange={(e) => setConsultForm({ ...consultForm, lastName: e.target.value })}
                            placeholder={isRtl ? "مثال: ممدوح" : "e.g. Morgan"}
                            className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                          {isRtl ? "الشركة / المؤسسة" : "Company / Organization"}
                        </label>
                        <input
                          value={consultForm.company}
                          onChange={(e) => setConsultForm({ ...consultForm, company: e.target.value })}
                          placeholder={isRtl ? "مثال: شركة التطوير الرقمي" : "e.g. Acme Corp"}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                            {isRtl ? "البريد الإلكتروني المهني *" : "Company email *"}
                          </label>
                          <input
                            required
                            type="email"
                            dir="ltr"
                            value={consultForm.email}
                            onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                            placeholder="name@company.com"
                            className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                            style={{ textAlign: isRtl ? "right" : "left" }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                            {isRtl ? "رقم الهاتف *" : "Phone *"}
                          </label>
                          <input
                            required
                            type="tel"
                            dir="ltr"
                            value={consultForm.phone}
                            onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                            style={{ textAlign: isRtl ? "right" : "left" }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                          {isRtl ? "كيف يمكننا مساعدتك؟ *" : "How Can We Help You? *"}
                        </label>
                        <select
                          value={consultForm.service}
                          onChange={(e) => setConsultForm({ ...consultForm, service: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-neutral-900 focus:bg-white text-neutral-900"
                        >
                          {PRICING_TABLE_SERVICES.map((item) => (
                            <option key={item.value} value={item.value}>
                              {isRtl ? item.labelAr : item.labelEn}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                          {isRtl ? "تفاصيل الرسالة أو نطاق العمل المطلوب" : "Message"}
                        </label>
                        <textarea
                          rows={4}
                          value={consultForm.message}
                          onChange={(e) => setConsultForm({ ...consultForm, message: e.target.value })}
                          placeholder={
                            isRtl
                              ? "اكتب تفاصيل مشروعك أو التحديات التقنية التي تواجهها لمساعدتك بشكل أدق..."
                              : "To better assist you, please describe how we can help..."
                          }
                          className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50/70 px-3.5 py-2.5 text-xs sm:text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
                        />
                      </div>

                      {consultError && (
                        <p className="text-xs font-semibold text-red-600">{consultError}</p>
                      )}

                      <div className="pt-2">
                        <PencilButton
                          type="submit"
                          variant="primary"
                          size="lg"
                          fullWidth
                          hoverLabel={isRtl ? "إرسال طلب الاستشارة الآن ←" : "Send Consultation Request Now →"}
                        >
                          <span>{isRtl ? "إرسال طلب الاستشارة المجانية" : "Submit Consultation Request"}</span>
                        </PencilButton>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

