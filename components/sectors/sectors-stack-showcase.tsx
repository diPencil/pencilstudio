"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"
import { PencilButton } from "@/components/ui/pencil-button"

export interface SectorItem {
  id: string
  nameEn: string
  nameAr: string
  badgeEn: string
  badgeAr: string
  accentColor: string
  promptEn: string
  promptAr: string
  descEn: string
  descAr: string
  image: string
  mockupDomainEn: string
  mockupDomainAr: string
  href: string
}

export const SECTORS_DATA: SectorItem[] = [
  {
    id: "restaurants-pos",
    nameEn: "Restaurants & Cloud POS",
    nameAr: "المطاعم والكاشير ونقاط البيع",
    badgeEn: "Hospitality & POS",
    badgeAr: "الضيافة ونقاط البيع",
    accentColor: "#EA580C", // Warm Orange (matching restaurant & POS card)
    promptEn: "Connect kitchen display screens, touch POS, and tableside QR ordering.",
    promptAr: "اربط شاشات المطبخ، نقاط البيع السريعة، والطلب الذاتي عبر الباركود.",
    descEn: "Menus, orders and kitchen workflows synced in real-time with zero order errors.",
    descAr: "قوائم طعام، كاشير ذكي، وشاشات مطبخ متزامنة فورياً لصفر أخطاء في الطلبات.",
    image: "/sectors/sector-section/restaurant-pos.jpg",
    mockupDomainEn: "chef-kitchen.orderhub.io",
    mockupDomainAr: "kitchen.restaurant-pos.app",
    href: "/marketplace/restaurant-pos-dispatch",
  },
  {
    id: "ecommerce",
    nameEn: "Omnichannel E-Commerce",
    nameAr: "التجارة الإلكترونية والمتاجر",
    badgeEn: "High-Volume Retail",
    badgeAr: "التجارة ومتاجر التجزئة",
    accentColor: "#10B981", // Emerald / Green
    promptEn: "Launch high-converting storefronts built for sub-second checkouts.",
    promptAr: "أطلق متجرًا إلكترونيًا لمنتجاتك بتصميم عصري ودفع خليجي وعالمي فوري.",
    descEn: "Engineered for high-volume sales, multi-branch inventory, and instant payments.",
    descAr: "محرك تجارة سحابي فائق السرعة يدعم آلاف الطلبات المتزامنة وإدارة الفروع.",
    image: "/sectors/sector-section/e-commerce.jpg",
    mockupDomainEn: "store.pencilcommerce.com",
    mockupDomainAr: "shop.hypercommerce.app",
    href: "/marketplace/omnichannel-commerce",
  },
  {
    id: "real-estate",
    nameEn: "PropTech & Real Estate",
    nameAr: "العقارات وإدارة الوسطاء",
    badgeEn: "PropTech Portal",
    badgeAr: "بوابات العقارات الذكية",
    accentColor: "#C09858", // Luxury Warm Beige / Tan (matching Real Estate card)
    promptEn: "Turn property inquiries into organized broker leads via automated routing.",
    promptAr: "حوّل اهتمام العملاء إلى صفقات منظمة مع توزيع فوري على الوسطاء عبر الواتساب.",
    descEn: "Interactive 3D unit maps, mortgage calculators, and direct WhatsApp CRM intake.",
    descAr: "تصفح ثلاثي الأبعاد للوحدات، حاسبة أقساط ذكية، وسحب آلي للعملاء المحتملين.",
    image: "/sectors/sector-section/real-estate.jpg",
    mockupDomainEn: "proptech.pencilestates.com",
    mockupDomainAr: "luxury.aqar-showcase.com",
    href: "/marketplace/real-estate-showcase",
  },
  {
    id: "tourism-booking",
    nameEn: "Tourism & Travel Portals",
    nameAr: "السياحة وحجوزات السفر",
    badgeEn: "Tours & Travel",
    badgeAr: "السياحة وحجز الرحلات",
    accentColor: "#0284C7", // Sky Blue
    promptEn: "Plan, book, and issue automated travel vouchers with dynamic itinerary maps.",
    promptAr: "صمم برامج سياحية متكاملة وأصدر قسائم الحجز الآلية مع خريطة مسار الرحلة.",
    descEn: "Live hotel APIs, flight packages, and multi-tier B2B sub-agent distribution.",
    descAr: "ربط فندقي لحظي، باقات طيران، وبوابة وكلاء B2B لتوزيع التذاكر والرحلات.",
    image: "/sectors/sector-section/tourism-booking.jpg",
    mockupDomainEn: "destinations.directtrip.io",
    mockupDomainAr: "tours.directbooking.app",
    href: "/marketplace/tourism-itinerary-platform",
  },
  {
    id: "medical-clinics",
    nameEn: "Smart Clinic & Patient Care",
    nameAr: "العيادات والمراكز الطبية",
    badgeEn: "Healthcare EHR",
    badgeAr: "الرعاية والملفات الطبية",
    accentColor: "#06B6D4", // Cyan
    promptEn: "Streamline doctor appointment slots with encrypted digital patient records.",
    promptAr: "نظّم مواعيد الأطباء وملفات المرضى الإلكترونية مع تذكير تلقائي عبر الواتساب.",
    descEn: "Automated booking reminders, dynamic prescriptions, and multi-branch calendars.",
    descAr: "تقليل إلغاء المواعيد، وصفات علاجية آلية، وربط التحاليل والتقارير الطبية المشفرة.",
    image: "/sectors/sector-section/medical-clinics.jpg",
    mockupDomainEn: "care.smartclinic-flow.com",
    mockupDomainAr: "health.clinics-flow.app",
    href: "/marketplace/clinic-patient-flow",
  },
  {
    id: "education-lms",
    nameEn: "EdTech Academy & LMS",
    nameAr: "التعليم والأكاديميات الرقمية",
    badgeEn: "EdTech Platform",
    badgeAr: "التعليم والتدريب الذكي",
    accentColor: "#8B5CF6", // Purple / Violet
    promptEn: "Deliver DRM watermarked video lessons with interactive student quizzes.",
    promptAr: "بث كورسات مشفرة مع علامة مائية مضادة للتسجيل وشهادات تخرج فورية بالـ QR.",
    descEn: "Secure streaming, automated quiz grading, and downloadable verifiable certificates.",
    descAr: "حماية تامة للمحتوى التدريبي، اختبارات تفاعلية، ومتابعة دقيقة لنسب إتمام الطلاب.",
    image: "/sectors/sector-section/education-lms.jpg",
    mockupDomainEn: "academy.learnflow.io",
    mockupDomainAr: "portal.academy-lms.com",
    href: "/marketplace/edtech-lms-academy",
  },
  {
    id: "crm-automation",
    nameEn: "CRM & Workflow Automations",
    nameAr: "الأتمتة ومسارات المبيعات (CRM)",
    badgeEn: "Sales & Pipelines",
    badgeAr: "إدارة العملاء والمبيعات",
    accentColor: "#F59E0B", // Amber
    promptEn: "Qualify prospective leads and dispatch alerts in under 60 seconds automatically.",
    promptAr: "استقبل عملاء إعلانات ميتا وتيك توك ووزعهم على المبيعات خلال أقل من دقيقة.",
    descEn: "Kanban pipeline visualization, WhatsApp sales bots, and revenue analytics.",
    descAr: "لوحة كانبان للصفقات، إشعارات واتساب فورية للمناديب، وتوقعات إيرادات تفصيلية.",
    image: "/sectors/sector-section/crm-automation.jpg",
    mockupDomainEn: "pipeline.smartcrm-hub.io",
    mockupDomainAr: "crm.leadflow-sync.app",
    href: "/marketplace/crm-workflow-automation",
  },
  {
    id: "corporate-websites",
    nameEn: "Corporate & Enterprise Sites",
    nameAr: "مواقع الشركات والمؤسسات",
    badgeEn: "Corporate Portal",
    badgeAr: "بوابات ومواقع الشركات",
    accentColor: "#3B82F6", // Royal / Cobalt Blue
    promptEn: "Establish authoritative market presence with elite corporate design and performance.",
    promptAr: "ابنِ حضوراً مؤسسياً موثوقاً بموقع تفاعلي فائق السرعة يعكس هيبة ومكانة شركتك.",
    descEn: "Bilingual investor portals, executive portfolios, and enterprise grade CMS architecture.",
    descAr: "بوابات للمستثمرين ثنائية اللغة، استعراض أعمال تنفيذي، وأنظمة إدارة محتوى سحابية متطورة.",
    image: "/sectors/sector-section/corporate-websites.jpg",
    mockupDomainEn: "corporate.pencilholdings.com",
    mockupDomainAr: "enterprise.sharikat-portal.app",
    href: "/marketplace/corporate-websites",
  },
]

function TypewriterText({ text, speed = 22, isRtl = false }: { text: string; speed?: number; isRtl?: boolean }) {
  const [displayedText, setDisplayedText] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(true)

  React.useEffect(() => {
    setDisplayedText("")
    setIsTyping(true)
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span className="inline">
      {displayedText}
      {isTyping && (
        <span
          className={cn(
            "inline-block w-1.5 h-3.5 sm:h-4 bg-[#2057ff] align-middle animate-pulse rounded-sm",
            isRtl ? "mr-1" : "ml-1"
          )}
        />
      )}
    </span>
  )
}

export function SectorsStackShowcase() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"

  const [activeIndex, setActiveIndex] = React.useState(0)

  // Infinite auto-advance loop
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SECTORS_DATA.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const total = SECTORS_DATA.length
  const currentSector = SECTORS_DATA[activeIndex]

  // Compute 3 stacked cards for depth effect:
  // Position 0 = Active front card
  // Position 1 = Second card stacked behind and higher
  // Position 2 = Third card stacked further behind
  const stackedCards = React.useMemo(() => {
    return [
      { item: SECTORS_DATA[activeIndex], stackPos: 0 },
      { item: SECTORS_DATA[(activeIndex + 1) % total], stackPos: 1 },
      { item: SECTORS_DATA[(activeIndex + 2) % total], stackPos: 2 },
    ]
  }, [activeIndex, total])

  return (
    <section
      id="business-sectors"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-[#FBFBFB] scroll-mt-24"
    >
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-40 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-emerald-100/30 blur-[130px]" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ============================================================ */}
          {/* COLUMN 1: Visual Stacked Cards (Hostinger Inspired) */}
          {/* On desktop: 7 cols */}
          {/* ============================================================ */}
          <div className="relative order-2 lg:order-1 lg:col-span-7">
            {/* Top Stack Stage (Gives room for cards peeking out from behind) */}
            <div className="relative pt-12 sm:pt-14 pb-4">

              {/* Stacked Cards Deck - Wider & More Cinematic */}
              <div className="relative mx-auto w-full max-w-2xl lg:max-w-[720px] aspect-[16/9.5] sm:aspect-[16/9]">
                {stackedCards
                  .slice()
                  .reverse() // Render back cards first so front card sits on top
                  .map(({ item, stackPos }) => {
                    const isFront = stackPos === 0
                    const isMiddle = stackPos === 1
                    const isBack = stackPos === 2

                    // Card positioning & scale styling
                    const translateY = isFront ? 0 : isMiddle ? -20 : -38
                    const scale = isFront ? 1 : isMiddle ? 0.94 : 0.88
                    const zIndex = isFront ? 30 : isMiddle ? 20 : 10
                    const opacity = isFront ? 1 : isMiddle ? 0.85 : 0.55

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity,
                          scale,
                          y: translateY,
                          zIndex,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 28,
                        }}
                        className={cn(
                          "absolute inset-0 rounded-2xl sm:rounded-3xl border overflow-hidden transition-all duration-300",
                          isFront
                            ? "border-neutral-300 bg-neutral-900"
                            : "border-neutral-300/80 bg-neutral-800 pointer-events-none select-none"
                        )}
                        style={{ transformOrigin: "top center" }}
                      >
                        {/* Browser Window Bar on Top (Like Hostinger Reference) */}
                        <div className="relative z-20 flex h-9 sm:h-10 w-full items-center justify-between border-b border-white/10 bg-neutral-900/90 px-3 sm:px-4 backdrop-blur-md">
                          <div className="flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          </div>

                          {/* Domain / Sector Address Bar */}
                          <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5 text-[10px] sm:text-[11px] font-mono text-neutral-300 border border-white/5">
                            <span className="text-emerald-400">https://</span>
                            <span>{isRtl ? item.mockupDomainAr : item.mockupDomainEn}</span>
                          </div>

                          {/* Sector Tag */}
                          <div className="flex items-center gap-1.5">
                            <span
                              className="h-2 w-2 rounded-full animate-pulse"
                              style={{ backgroundColor: item.accentColor }}
                            />
                            <span className="text-[10px] sm:text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                              {isRtl ? item.badgeAr : item.badgeEn}
                            </span>
                          </div>
                        </div>

                        {/* Card Image Viewport - Clean without any inner shadow */}
                        <div className="relative h-[calc(100%-2.25rem)] w-full overflow-hidden bg-neutral-950">
                          <Image
                            src={item.image}
                            alt={isRtl ? item.nameAr : item.nameEn}
                            fill
                            sizes="(max-width: 768px) 100vw, 720px"
                            className="object-cover object-top select-none transition-transform duration-700"
                            priority={isFront}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
              </div>

              {/* Floating Prompt / Action Board at the Bottom of the Front Card */}
              {/* Static clean border with subtle soft ambient glow */}
              <div className="relative z-40 -mt-8 sm:-mt-10 mx-auto max-w-xl lg:max-w-[640px] px-2 sm:px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSector.id}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative flex items-center justify-between gap-3 rounded-2xl sm:rounded-full bg-white/95 px-4 py-3 sm:px-6 sm:py-3.5 backdrop-blur-xl border transition-all duration-500"
                    style={{
                      borderColor: `${currentSector.accentColor}40`,
                      boxShadow: `0 8px 30px -4px ${currentSector.accentColor}25, 0 2px 10px rgba(0,0,0,0.04), inset 0 1px 1px rgba(255,255,255,0.8)`,
                    }}
                  >
                    {/* Prompt Text with Typewriter Live Effect */}
                    <div className="flex-1 pr-1 text-right sm:pr-2" dir={isRtl ? "rtl" : "ltr"}>
                      <p className="text-xs sm:text-sm md:text-[15px] font-semibold text-neutral-900 leading-snug min-h-[2.5rem] flex items-center">
                        <TypewriterText
                          text={isRtl ? currentSector.promptAr : currentSector.promptEn}
                          speed={22}
                          isRtl={isRtl}
                        />
                      </p>
                    </div>

                    {/* Circular Action Arrow Button */}
                    <Link
                      href={currentSector.href}
                      aria-label={isRtl ? `استكشف ${currentSector.nameAr}` : `Explore ${currentSector.nameEn}`}
                      className="group/btn relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{ backgroundColor: currentSector.accentColor }}
                    >
                      {isRtl ? (
                        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:-translate-x-0.5" />
                      ) : (
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover/btn:translate-x-0.5" />
                      )}
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 8 Sectors Interactive Indicators */}
              <div className="flex items-center justify-center gap-2 mt-6 max-w-2xl lg:max-w-[720px] mx-auto">
                {SECTORS_DATA.map((sec, idx) => {
                  const isActive = idx === activeIndex
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveIndex(idx)}
                      title={isRtl ? sec.nameAr : sec.nameEn}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300 cursor-pointer",
                        isActive
                          ? "w-8 shadow-xs"
                          : "w-2.5 bg-neutral-300/80 hover:bg-neutral-400"
                      )}
                      style={isActive ? { backgroundColor: sec.accentColor } : undefined}
                      aria-label={`Go to ${sec.nameEn}`}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: Editorial & Text Column (Pencil Original Style) */}
          {/* ============================================================ */}
          <div className="order-1 lg:order-2 lg:col-span-5 space-y-3.5 text-start">
            {/* Standalone SuperFeliz Icon */}
            <div className="flex items-center">
              <Image
                src="/macosdock/superfeliz.svg"
                alt="SuperFeliz"
                width={36}
                height={36}
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
              />
            </div>

            <h2 className={cn("text-neutral-900 text-4xl lg:text-6xl font-normal leading-tight tracking-tight", isRtl ? "tracking-normal" : "")}>
              {isRtl ? (
                <>
                  القطاعات <span className="font-light italic text-neutral-500">التجارية</span>
                </>
              ) : (
                <>
                  Business <span className="font-light italic text-neutral-500">Sectors</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-xl">
              {isRtl
                ? "نطور بيئات رقمية متخصصة ومصممة خصيصاً لتناسب المنطق الفريد لكل قطاع عمل، من أتمتة العمليات اليومية وإدارة تدفق الطلبات، وحتى بناء تجارب مستخدم مخصصة تعزز المبيعات وثقة العملاء."
                : "We develop specialized digital ecosystems tailored to the unique logic of different industries, engineered to streamline daily workflows, eliminate operational bottlenecks, and drive measurable growth."}
            </p>

            <div className="pt-2">
              <PencilButton
                href="/sectors"
                variant="primary"
                size="md"
                hoverLabel={isRtl ? "تصفح كل القطاعات ←" : "View all sectors →"}
              >
                <span>{isRtl ? "استكشف كافة القطاعات" : "Explore All Sectors"}</span>
              </PencilButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

