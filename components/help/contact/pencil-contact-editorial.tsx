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
  Clock,
  Copy,
  FileText,
  HelpCircle,
  LifeBuoy,
  Mail,
  MessageCircle,
  MessagesSquare,
  Phone,
  PhoneCall,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { LiquidBackdrop } from "@/components/editorial/liquid-backdrop";
import { PencilButton } from "@/components/ui/pencil-button";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
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

// ─── Floating Bottom-Left Sub-Navigation ──────────────────────────────────────
const HELP_SUB_NAV = [
  { href: "/help", en: "Help Center", ar: "مركز المساعدة", icon: LifeBuoy },
  { href: "/help/faqs", en: "FAQs", ar: "الأسئلة", icon: HelpCircle },
  { href: "/help/guides", en: "Guides", ar: "الأدلة", icon: BookOpen },
  { href: "/help/contact", en: "Contact Help", ar: "طلب مساعدة", icon: MessagesSquare },
];

// ─── Trusted Ecosystem Partners / Tags ────────────────────────────────────────
const TRUST_TAGS = [
  { en: "SuperFeliz AI", ar: "ذكاء سوبر فيليز" },
  { en: "Enterprise Systems", ar: "أنظمة المؤسسات" },
  { en: "Next.js Platforms", ar: "منصات Next.js" },
  { en: "Brand Architecture", ar: "هندسة الهويات" },
  { en: "Cloud & Hosting", ar: "السحابة والاستضافة" },
  { en: "Bespoke Ecommerce", ar: "التجارة الرقمية" },
];

// ─── Consultation Benefits (Reference 2-Column Grid) ──────────────────────────
const CONSULTATION_BENEFITS = [
  { en: "Client-oriented", ar: "تركيز محوري على العميل" },
  { en: "Results-driven", ar: "مدفوعون بالأثر والنتائج" },
  { en: "Independent Craft", ar: "هندسة وتنفيذ مستقل" },
  { en: "Problem-solving", ar: "حلول وتفكير استباقي" },
  { en: "Proven Competence", ar: "خبرة متراكمة منذ 2014" },
  { en: "Transparent SLA", ar: "شفافية والتزام بالـ SLA" },
];

export function PencilContactEditorial() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";

  // Comprehensive Consultation Form State (Reference Layout)
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [service, setService] = React.useState("brand");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim()) return;

    // Send formatted WhatsApp message
    const serviceName =
      service === "brand"
        ? rtl ? "الهوية البصرية والأنظمة الإبداعية" : "Brand Identity & Design Systems"
        : service === "web"
          ? rtl ? "المواقع والمنصات وتطبيقات الويب" : "Web Platforms & Custom Systems"
          : service === "ai"
            ? rtl ? "حلول الذكاء الاصطناعي و SuperFeliz AI" : "SuperFeliz AI & Automation"
            : service === "commerce"
              ? rtl ? "التجارة الرقمية وتجارب المستخدم" : "Digital Commerce & UI/UX"
              : rtl ? "استشارة استراتيجية عامة وتطوير أعمال" : "Strategic Consultation & Advisory";

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

    const text = encodeURIComponent(
      `*PENCIL Studio - Consultation Request*\n\n` +
      `👤 *Name:* ${fullName}\n` +
      (company.trim() ? `🏢 *Company:* ${company.trim()}\n` : "") +
      (email.trim() ? `✉️ *Email:* ${email.trim()}\n` : "") +
      `📞 *Phone:* ${phone.trim()}\n` +
      `🎯 *Service:* ${serviceName}\n` +
      (message.trim() ? `💬 *Project Notes:* ${message.trim()}\n` : "")
    );

    window.open(`https://wa.me/201003778273?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className="relative min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057FF] selection:text-white"
    >
      <Header solid light />

      <main className="relative z-10">
        {/* ───────────────────────────────────────────────────────────────────
            1. HERO SECTION & INTEGRATED VISUAL SHOWCASE
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
            <Reveal>
              <div className="max-w-3xl mx-auto flex flex-col items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/70 px-4 py-1 text-xs font-bold text-[#2057FF] mb-4 shadow-xs backdrop-blur-md">
                  <MessagesSquare size={13} className="shrink-0" />
                  <span>{rtl ? "تواصل مباشر وبدء المشاريع" : "Direct Studio Contact & Inquiries"}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.12]">
                  {rtl ? (
                    <>
                      تحدث مع بنسل ستوديو.{" "}
                      <span className="text-[#2057FF]">لنبدأ مشروعك القادم.</span>
                    </>
                  ) : (
                    <>
                      Talk to Pencil Studio.{" "}
                      <span className="text-[#2057FF]">Let’s shape your venture.</span>
                    </>
                  )}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                  {rtl
                    ? "سواء كنت تبدأ هوية جديدة، تبني منصة رقمية، تدمج ذكاء سوبر فيليز، أو تحتاج جلسة استشارية لتحديد المتطلبات."
                    : "Whether creating a new identity, launching a digital platform, integrating SuperFeliz AI, or defining clear requirements."}
                </p>
              </div>
            </Reveal>

            {/* ───────────────────────────────────────────────────────────────────
                2. HERO VISUAL SHOWCASE (The image provided: /help/helpcontact.jpg)
                   Clean, full section width, no shadows, no gradients
            ─────────────────────────────────────────────────────────────────── */}
            <div className="mt-8 md:mt-12 relative w-full max-w-6xl mx-auto px-0 sm:px-2">
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden border border-neutral-200/80 bg-neutral-100 group">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src="/help/helpcontact.jpg"
                      alt={rtl ? "فريق وتواصل بنسل ستوديو" : "Pencil Studio Contact & Team"}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1536px) 100vw, 1280px"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
            3. PARTNER / ECOSYSTEM STRIP (Like the Reference)
        ─────────────────────────────────────────────────────────────────── */}
        <section className="container-custom py-6 sm:py-8 border-b border-neutral-200/60">
          <Reveal delay={0.15}>
            <div className="flex flex-col items-center text-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                {rtl
                  ? "منظومة إبداعية وتشغيلية موثوقة لمختلف القطاعات"
                  : "TRUSTED EXPERTISE ACROSS DIGITAL & ENTERPRISE SECTORS"}
              </span>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl">
                {TRUST_TAGS.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold border border-neutral-200/60 shadow-2xs hover:bg-neutral-200/60 transition-colors"
                  >
                    <CheckCircle2 size={13} className="text-[#2057FF]" />
                    {rtl ? tag.ar : tag.en}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ───────────────────────────────────────────────────────────────────
            4. THE MAIN CONTAINER SECTION (Exact Reference Rounded Container Layout)
               With 3 Distinct White Cards & CTA Actions
        ─────────────────────────────────────────────────────────────────── */}
        <section className="container-custom mt-10 md:mt-16">
          <div className="rounded-[32px] md:rounded-[44px] bg-[#EEF4FF]/75 border border-blue-100/70 p-6 sm:p-10 md:p-14 relative overflow-hidden">
            {/* Subtle brand glow in background */}
            <div className="absolute top-0 end-0 -mt-16 -me-16 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 start-0 -mb-16 -ms-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <Reveal>
                <div className="max-w-2xl mb-8 md:mb-10 text-start">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#2057FF] shadow-2xs border border-blue-100 mb-3">
                    <Sparkles size={12} />
                    <span>{rtl ? "قنوات التواصل المباشرة" : "DIRECT CHANNELS"}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                    {rtl ? (
                      <>
                        ما يميز طريقة تواصلنا:{" "}
                        <span className="font-light italic text-neutral-500">
                          اختر المسار الأنسب لطلبك.
                        </span>
                      </>
                    ) : (
                      <>
                        What truly sets us apart:{" "}
                        <span className="font-light italic text-neutral-500">
                          choose the right channel.
                        </span>
                      </>
                    )}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600">
                    {rtl
                      ? "ثلاثة مسارات مباشرة للرد الفوري، تسليم المواصفات، أو الاجتماع الاستراتيجي."
                      : "Three streamlined pathways for instant messaging, official RFPs, or strategic calls."}
                  </p>
                </div>
              </Reveal>

              {/* 3 White Feature / Channel Cards (Exactly like reference) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {/* ── CARD 1: Instant WhatsApp ── */}
                <Reveal delay={0.05} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 shadow-xs border border-neutral-200/80 hover:shadow-xl hover:-translate-y-1 hover:border-[#2057FF]/40 transition-all duration-300 text-start">
                    <div>
                      {/* Icon */}
                      <div className="h-13 w-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs mb-5">
                        <WhatsAppIcon size={24} />
                      </div>

                      <h3 className="text-lg font-bold text-neutral-950">
                        {rtl ? "محادثة واتساب فورية" : "Instant WhatsApp"}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {rtl
                          ? "المسار الأسرع لتقديرات التكلفة، الأسئلة السريعة، والتحدث المباشر مع مديري المشاريع."
                          : "Fastest route for instant cost estimates, rapid questions, and direct project chat."}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                        <Clock size={13} />
                        <span>{rtl ? "استجابة حية خلال دقائق" : "Live reply within minutes"}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100">
                      <PencilButton
                        href="https://wa.me/201003778273"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        fullWidth
                        icon={<WhatsAppIcon size={16} />}
                        hoverLabel={rtl ? "تحدث الآن ←" : "Chat Now →"}
                      >
                        {rtl ? "فتح واتساب الاستوديو" : "Open WhatsApp"}
                      </PencilButton>
                    </div>
                  </div>
                </Reveal>

                {/* ── CARD 2: Official Brief & Email ── */}
                <Reveal delay={0.1} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 shadow-xs border border-neutral-200/80 hover:shadow-xl hover:-translate-y-1 hover:border-[#2057FF]/40 transition-all duration-300 text-start">
                    <div>
                      {/* Icon */}
                      <div className="h-13 w-13 rounded-2xl bg-blue-50 text-[#2057FF] flex items-center justify-center shadow-2xs mb-5">
                        <Mail size={22} />
                      </div>

                      <h3 className="text-lg font-bold text-neutral-950">
                        {rtl ? "موجز المشروع والبريد" : "Official Project Brief"}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {rtl
                          ? "لطلبات العروض الرسمية (RFP)، ملفات المواصفات، والمشاريع المعقدة التي تحتاج نطاق عمل مفصل."
                          : "For corporate RFPs, tender documents, specification sheets, and detailed scopes."}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#2057FF]">
                        <CheckCircle2 size={13} />
                        <span>{rtl ? "دراسة فنية خلال ٢٤ ساعة" : "Technical review in 24 hrs"}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100">
                      <PencilButton
                        href="mailto:info@dipencil.com"
                        variant="primary"
                        size="sm"
                        fullWidth
                        icon={<Mail size={15} />}
                        hoverLabel={rtl ? "إرسال بريد ←" : "Send Email →"}
                      >
                        {rtl ? "مراسلة عبر البريد" : "Email Studio"}
                      </PencilButton>
                    </div>
                  </div>
                </Reveal>

                {/* ── CARD 3: Executive Call & Strategy ── */}
                <Reveal delay={0.15} className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 shadow-xs border border-neutral-200/80 hover:shadow-xl hover:-translate-y-1 hover:border-[#2057FF]/40 transition-all duration-300 text-start">
                    <div>
                      {/* Icon */}
                      <div className="h-13 w-13 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center shadow-2xs mb-5">
                        <PhoneCall size={22} />
                      </div>

                      <h3 className="text-lg font-bold text-neutral-950">
                        {rtl ? "جلسة اتصال واستشارة" : "Strategic Call & Meeting"}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {rtl
                          ? "لمناقشة التحول الرقمي، شراكات الذكاء الاصطناعي مع SuperFeliz، والأنظمة المؤسسية الكبرى."
                          : "For digital transformations, SuperFeliz AI partnerships, and large enterprise systems."}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
                        <Phone size={13} />
                        <span>+20 100 377 8273</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100">
                      <PencilButton
                        href="tel:+201003778273"
                        variant="dark"
                        size="sm"
                        fullWidth
                        icon={<PhoneCall size={14} />}
                        hoverLabel={rtl ? "اتصل الآن ←" : "Call Studio →"}
                      >
                        {rtl ? "اتصال هاتفي مباشر" : "Direct Phone Call"}
                      </PencilButton>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* ── Comprehensive Consultation 2-Column Section (Reference Layout) ── */}
              <div className="mt-12 sm:mt-16 pt-10 sm:pt-14 border-t border-blue-200/70">
                <Reveal delay={0.2}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-start">

                    {/* Left Column: Context, Contacts, Benefits, Next Steps */}
                    <div className="lg:col-span-5 flex flex-col space-y-7">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50/80 px-3 py-1 text-[11px] font-bold text-[#2057FF] border border-blue-100 mb-3 shadow-2xs">
                          <PencilOriginalIconSvg className="w-3.5 h-3.5" />
                          <span>{rtl ? "استشارة استراتيجية مجانية" : "FREE STRATEGIC CONSULTATION"}</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950 leading-[1.2]">
                          {rtl ? (
                            <>
                              استشارة شاملة لمشروعك القادم{" "}
                              <span className="text-[#2057FF] block sm:inline">قبل بدء التنفيذ.</span>
                            </>
                          ) : (
                            <>
                              Check Out Our Services for{" "}
                              <span className="text-[#2057FF] block sm:inline">Comprehensive Scopes.</span>
                            </>
                          )}
                        </h3>

                        <p className="mt-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {rtl
                            ? "يسعدنا الإجابة عن أي استفسار ومساعدتك في اختيار المسار التقني أو التصميمي الأنسب لطموحات مشروعك وميزانيتك."
                            : "We're happy to answer any questions you may have and help you determine which of our services best fit your needs."}
                        </p>
                      </div>

                      {/* Direct Regional Contacts Strip */}
                      <div className="rounded-2xl bg-white p-4 sm:p-5 border border-neutral-200/80 shadow-xs space-y-3">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                          {rtl ? "قنوات الاتصال والواتساب المباشرة" : "DIRECT HOTLINES & REGIONAL CHANNELS"}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {/* KSA - WhatsApp Only */}
                          <a
                            href="https://wa.me/201003778273"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={rtl ? "محادثة واتساب مباشرة" : "Direct WhatsApp Chat"}
                            className="group flex items-center justify-between gap-2 p-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:bg-emerald-50/40 hover:border-emerald-300 transition-all cursor-pointer shadow-2xs"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-base select-none shrink-0" aria-hidden="true">🇸🇦</span>
                              <div className="min-w-0">
                                <div className="text-[10px] font-bold uppercase text-neutral-400 group-hover:text-emerald-700 leading-none mb-1 transition-colors">
                                  {rtl ? "السعودية (واتساب)" : "KSA (WhatsApp)"}
                                </div>
                                <div className="font-mono text-xs font-bold text-neutral-900 tracking-tight truncate">
                                  (020) 100-377-8273
                                </div>
                              </div>
                            </div>
                            <div className="h-7 w-7 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center transition-all shadow-2xs shrink-0">
                              <WhatsAppIcon className="w-3.5 h-3.5" />
                            </div>
                          </a>

                          {/* EGY - Mobile / Direct Call Only */}
                          <a
                            href="tel:+201003778273"
                            title={rtl ? "اتصال هاتفي مباشر" : "Direct Phone Call"}
                            className="group flex items-center justify-between gap-2 p-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:bg-blue-50/40 hover:border-blue-300 transition-all cursor-pointer shadow-2xs"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-base select-none shrink-0" aria-hidden="true">🇪🇬</span>
                              <div className="min-w-0">
                                <div className="text-[10px] font-bold uppercase text-neutral-400 group-hover:text-blue-700 leading-none mb-1 transition-colors">
                                  {rtl ? "مصر (اتصال مباشر)" : "EGY (Direct Call)"}
                                </div>
                                <div className="font-mono text-xs font-bold text-neutral-900 tracking-tight truncate">
                                  (020) 100-377-8273
                                </div>
                              </div>
                            </div>
                            <div className="h-7 w-7 rounded-lg bg-blue-50 text-[#2057FF] group-hover:bg-[#2057FF] group-hover:text-white flex items-center justify-center transition-all shadow-2xs shrink-0">
                              <Phone size={13} />
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Benefits 2-Column Grid */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                          {rtl ? "مزايا العمل مع بنسل ستوديو:" : "Your benefits:"}
                        </h4>
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                          {CONSULTATION_BENEFITS.map((b, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-800">
                              <div className="h-5 w-5 rounded-full bg-[#2057FF] text-white flex items-center justify-center shrink-0 shadow-2xs">
                                <Check size={12} strokeWidth={3} />
                              </div>
                              <span>{rtl ? b.ar : b.en}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What Happens Next */}
                      <div className="rounded-2xl bg-white/80 border border-blue-100 p-4 sm:p-5">
                        <h4 className="text-xs font-bold text-[#2057FF] uppercase tracking-wider mb-2.5">
                          {rtl ? "ماذا يحدث بعد إرسال الطلب؟" : "What happens next?"}
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <li className="flex items-start gap-2">
                            <span className="font-mono font-bold text-[#2057FF] shrink-0">01.</span>
                            <span>{rtl ? "مراجعة فنية وهندسية لمتطلباتك خلال أقل من ٢٤ ساعة." : "Technical review of your scope within 24 hours."}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-mono font-bold text-[#2057FF] shrink-0">02.</span>
                            <span>{rtl ? "جلسة استشارية أولية مجانية عبر زوم أو الهاتف لتحديد النطاق." : "Free discovery call via Zoom or phone to outline architecture."}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-mono font-bold text-[#2057FF] shrink-0">03.</span>
                            <span>{rtl ? "مقترح عمل واضح ومحدد بالمراحل والميزانية دون أي التزامات." : "Detailed milestone proposal with transparent scope and timeline."}</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right Column: Elevated Form Card */}
                    <div className="lg:col-span-7">
                      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl border border-neutral-200/90 text-start relative">
                        <div className="border-b border-neutral-100 pb-5 mb-6">
                          <h4 className="text-lg sm:text-xl font-bold text-neutral-950">
                            {rtl ? "حجز جلسة استشارية مجانية" : "Schedule a Free Consultation"}
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                            {rtl
                              ? "أدخل بياناتك وسيتواصل معك المستشار المختص لتنسيق الموعد وتحديد النطاق."
                              : "Fill in the details below and our lead team will reach out promptly."}
                          </p>
                        </div>

                        {submitted ? (
                          <div className="py-8 text-center space-y-4">
                            <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                              <CheckCircle2 size={30} />
                            </div>
                            <h5 className="text-base sm:text-lg font-bold text-neutral-950">
                              {rtl ? "تم إرسال طلبك بنجاح!" : "Request Sent Successfully!"}
                            </h5>
                            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                              {rtl
                                ? "شكراً لك. سيقوم المستشار الفني بمراجعة تفاصيل مشروعك والتواصل معك خلال ساعات العمل."
                                : "Thank you. Our technical lead is reviewing your requirements and will reach out shortly."}
                            </p>
                            <div className="pt-2">
                              <PencilButton
                                onClick={() => setSubmitted(false)}
                                variant="outline"
                                size="sm"
                              >
                                {rtl ? "إرسال طلب آخر" : "Send Another Brief"}
                              </PencilButton>
                            </div>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            {/* First & Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1">
                                  {rtl ? "الاسم الأول *" : "First name *"}
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                  placeholder={rtl ? "مثال: أحمد" : "e.g. Alex"}
                                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#2057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1">
                                  {rtl ? "اسم العائلة *" : "Last name *"}
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                  placeholder={rtl ? "مثال: عبد العزيز" : "e.g. Morgan"}
                                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#2057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                              </div>
                            </div>

                            {/* Company / Organization */}
                            <div>
                              <label className="block text-xs font-bold text-neutral-700 mb-1">
                                {rtl ? "الشركة أو المؤسسة" : "Company / Organization"}
                              </label>
                              <input
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder={rtl ? "مثال: شركة الحلول الرقمية" : "e.g. Acme Corp"}
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#2057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                              />
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1">
                                  {rtl ? "البريد الإلكتروني المهني *" : "Company email *"}
                                </label>
                                <input
                                  type="email"
                                  required
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="name@company.com"
                                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#2057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-neutral-700 mb-1">
                                  {rtl ? "رقم الهاتف أو الواتساب *" : "Phone *"}
                                </label>
                                <input
                                  type="tel"
                                  required
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  placeholder={rtl ? "+20 1..." : "+1 (555)..."}
                                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#2057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                                />
                              </div>
                            </div>

                            {/* How can we help you? */}
                            <div>
                              <label className="block text-xs font-bold text-neutral-700 mb-1">
                                {rtl ? "كيف يمكننا مساعدتك؟ *" : "How Can We Help You? *"}
                              </label>
                              <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 outline-none focus:border-[#2057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
                              >
                                <option value="brand">{rtl ? "الهوية البصرية والأنظمة الإبداعية (Brand Identity)" : "Brand Identity & Design Systems"}</option>
                                <option value="web">{rtl ? "المواقع والمنصات وتطبيقات الويب (Web Platforms)" : "Web Platforms & Custom Digital Systems"}</option>
                                <option value="ai">{rtl ? "حلول الذكاء الاصطناعي و SuperFeliz AI" : "SuperFeliz AI & Enterprise Automation"}</option>
                                <option value="commerce">{rtl ? "التجارة الرقمية وتجارب التسوق (Bespoke Ecommerce)" : "Digital Commerce & UX Systems"}</option>
                                <option value="general">{rtl ? "استشارة استراتيجية عامة وتطوير أعمال" : "General Strategic Consultation"}</option>
                              </select>
                            </div>

                            {/* Message */}
                            <div>
                              <label className="block text-xs font-bold text-neutral-700 mb-1">
                                {rtl ? "تفاصيل المشروع أو المتطلبات" : "Message"}
                              </label>
                              <textarea
                                rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={rtl ? "اكتب نبذة مختصرة عن فكرة مشروعك، موعد الإطلاق المستهدف، أو أي تفاصيل مساعدة..." : "To better assist you, please describe how we can help..."}
                                className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#2057FF] focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                              />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                              <PencilButton
                                type="submit"
                                variant="primary"
                                size="default"
                                fullWidth
                                icon={<Send size={15} />}
                                hoverLabel={rtl ? "إرسال طلب الاستشارة ←" : "Submit Request →"}
                              >
                                {rtl ? "إرسال طلب الاستشارة المجانية" : "Submit"}
                              </PencilButton>
                            </div>

                            <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-neutral-400">
                              <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                              <span>{rtl ? "بياناتك محمية تماماً وبسرية مطلقة وفق اتفاقية NDA" : "100% private and confidential • NDA upon request"}</span>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

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
                  const active = item.href === "/help/contact";
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
