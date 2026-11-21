"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Pause,
  Star,
  BadgeCheck,
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  Wrench,
  Clock,
  Sparkles,
  Server,
  Database,
  Terminal,
  Send,
  X,
  Share2,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Film,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Reveal } from "@/components/shared/motion/reveal"
import { useLanguage } from "@/components/language-context"
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon"
import { PENCIL } from "@/components/shared/ui/pencil-ui"
import { Eyebrow, DarkPanel } from "@/components/editorial"
import { cn } from "@/lib/utils"
import {
  type MarketplaceProduct,
  MARKETPLACE_PRODUCTS,
} from "@/lib/marketplace/marketplace-data"

export function MarketplaceProductDetail({ product: p }: { product: MarketplaceProduct }) {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"

  // Gallery & Media playback state
  const mediaItems = React.useMemo(() => {
    if (p.gallery && p.gallery.length > 0) return p.gallery
    const list: Array<{ type: "video" | "image"; src: string; titleEn?: string; titleAr?: string }> = []
    if (p.videoSrc) {
      list.push({
        type: "video",
        src: p.videoSrc,
        titleEn: "Walkthrough Video",
        titleAr: "فيديو استعراض المنتج",
      })
    }
    list.push({
      type: "image",
      src: p.imageSrc,
      titleEn: "System Interface",
      titleAr: "واجهة النظام الرئيسية",
    })
    return list
  }, [p])

  const [activeMediaIndex, setActiveMediaIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  // Reset active media when product changes
  React.useEffect(() => {
    setActiveMediaIndex(0)
    setIsPlaying(true)
  }, [p.slug])

  const activeMedia = mediaItems[activeMediaIndex] || mediaItems[0]

  const handlePrevMedia = () => {
    setActiveMediaIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1))
    setIsPlaying(true)
  }

  const handleNextMedia = () => {
    setActiveMediaIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1))
    setIsPlaying(true)
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  // Related products from the catalog
  const relatedProducts = React.useMemo(() => {
    return MARKETPLACE_PRODUCTS.filter((item) => item.id !== p.id).slice(0, 3)
  }, [p.id])

  // Order / Demo Modal state
  const [modalOpen, setModalOpen] = React.useState(false)
  const [engagementType, setEngagementType] = React.useState<"ready" | "customized" | "build">("ready")
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    contact: "",
    details: "",
  })

  // Submit via WhatsApp
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const targetProduct = isRtl ? p.nameAr : p.nameEn
    const typeLabel =
      engagementType === "ready"
        ? isRtl ? "حل جاهز (Ready Solution)" : "Ready Solution"
        : engagementType === "customized"
        ? isRtl ? "تخصيص كامل (Customized)" : "Customized Solution"
        : isRtl ? "بناء نظام مخصص من الصفر (Custom Build)" : "Custom Build"

    const messageText = isRtl
      ? `مرحباً بنسل ستوديو، أود طلب ومعاينة منتج ${targetProduct} (${p.version}):\n` +
        `• مسار التنفيذ: ${typeLabel}\n` +
        `• الاسم: ${formData.name || "غير محدد"}\n` +
        `• الشركة: ${formData.company || "غير محدد"}\n` +
        `• الهاتف: ${formData.contact || "غير محدد"}\n` +
        `• ملاحظات: ${formData.details || "أرغب في حجز عرض تجريبي ومناقشة تفاصيل النشر والتسليم."}`
      : `Hello Pencil Studio, I want to inquire about ${targetProduct} (${p.version}):\n` +
        `• Pathway: ${typeLabel}\n` +
        `• Name: ${formData.name || "N/A"}\n` +
        `• Company: ${formData.company || "N/A"}\n` +
        `• Phone/Contact: ${formData.contact || "N/A"}\n` +
        `• Notes: ${formData.details || "Requesting a live demo and technical walkthrough."}`

    const encoded = encodeURIComponent(messageText)
    window.open(`https://wa.me/201099905204?text=${encoded}`, "_blank")
  }

  // Pre-configured services included with all Pencil products
  const includedServices = React.useMemo(
    () => [
      {
        titleEn: "Full IP & Source Code",
        titleAr: "ملكية فكرية كاملة وكود مصدر نظيف",
        descEn: "Complete repository access without obfuscation or vendor lock-in.",
        descAr: "وصول كامل للـ Repository بدون تشفير أو قيود ربط بمنصات خارجية.",
      },
      {
        titleEn: "Cloud Deployment & Setup",
        titleAr: "التثبيت والنشر السحابي الكامل",
        descEn: "Assistance launching on AWS, DigitalOcean, Hetzner, or your own private cloud.",
        descAr: "المساعدة في تثبيت النظام على خوادم AWS أو سيرفراتك الخاصة وتجهيز الـ DNS.",
      },
      {
        titleEn: "Brand & Logo Adaptation",
        titleAr: "تكييف الهوية والشعار والألوان",
        descEn: "Reskinning the system with your brand palette, typography, and company assets.",
        descAr: "تطبيق ألوان هويتك وشعارك التجاري على كافة الشاشات ولوحة التحكم.",
      },
      {
        titleEn: "Payment & API Integrations",
        titleAr: "ربط بوابات الدفع والـ APIs",
        descEn: "Integration with regional payment gateways (Mada, Knet, Apple Pay) and notification rails.",
        descAr: "ربط جاهز مع بوابات الدفع الخليجية والعربية وخدمات الرسائل والواتساب.",
      },
      {
        titleEn: "12 Months Technical Assurance",
        titleAr: "ضمان ودعم فني لمدة 12 شهراً",
        descEn: "Continuous bug fixes, security updates, and architectural advisory by Pencil.",
        descAr: "معالجة أي أخطاء برمجية، وتحديثات أمنية دورية، واستشارات هندسية مستمرة.",
      },
    ],
    []
  )

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={cn("min-h-screen text-neutral-900 selection:bg-[#2057ff] selection:text-white", PENCIL.paper)}
    >
      <Header light />

      {/* Top Breadcrumb & Navigation */}
      <div className="border-b border-neutral-200 bg-white/80 backdrop-blur-md pt-24 pb-4">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
              <Link href="/" className="hover:text-neutral-900 transition">
                {isRtl ? "الرئيسية" : "Home"}
              </Link>
              <span className="text-neutral-300">/</span>
              <Link href="/marketplace" className="hover:text-neutral-900 transition">
                {isRtl ? "الماركت بليس" : "Marketplace"}
              </Link>
              <span className="text-neutral-300">/</span>
              <span className="font-bold text-neutral-900">{isRtl ? p.nameAr : p.nameEn}</span>
            </nav>

            <Link
              href="/marketplace"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2057ff] hover:text-[#1848dc] transition"
            >
              {isRtl ? <ArrowRight className="h-3.5 w-3.5" /> : <ArrowLeft className="h-3.5 w-3.5" />}
              <span>{isRtl ? "العودة للمتجر" : "Back to Store"}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Product Layout: Media + Details + Sticky Sidebar */}
      <div className="container-custom py-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* LEFT COLUMN: Main Showcase & Specs (8 cols) */}
          <div className="space-y-10 lg:col-span-8">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                  {isRtl ? p.badgeAr : p.badgeEn}
                </span>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-mono font-bold text-[#2057ff]">
                  {p.version}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  {p.rating} / 5.0
                </span>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
                  {isRtl ? p.demoTypeAr : p.demoTypeEn}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight">
                {isRtl ? p.nameAr : p.nameEn}
              </h1>

              <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed font-medium">
                {isRtl ? p.taglineAr : p.taglineEn}
              </p>
            </div>

            {/* Media Box: Interactive Gallery (Main viewport + Navigation + Thumbnails) */}
            <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-3xl border border-neutral-300 bg-neutral-950 shadow-2xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMedia.src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full w-full"
                    >
                      {activeMedia.type === "video" ? (
                        <video
                          ref={videoRef}
                          src={`${activeMedia.src}#t=0.001`}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <img
                          src={activeMedia.src}
                          alt={activeMedia.titleEn || p.nameEn}
                          className="h-full w-full object-cover select-none"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Left / Right Navigation Arrows */}
                  {mediaItems.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevMedia}
                        aria-label="Previous media"
                        className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black hover:scale-110 shadow-lg border border-white/20 active:scale-95"
                      >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextMedia}
                        aria-label="Next media"
                        className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black hover:scale-110 shadow-lg border border-white/20 active:scale-95"
                      >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                      </button>
                    </>
                  )}

                  {/* Top-left: Counter & Media Type Tag */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-xs font-mono font-bold text-white backdrop-blur-md border border-white/20">
                      {activeMedia.type === "video" ? (
                        <Film className="h-3.5 w-3.5 text-blue-400" />
                      ) : (
                        <ImageIcon className="h-3.5 w-3.5 text-emerald-400" />
                      )}
                      <span>
                        {activeMediaIndex + 1} / {mediaItems.length}
                      </span>
                    </span>
                    <span className="hidden sm:inline-block rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-neutral-200 backdrop-blur-md border border-white/10">
                      {activeMedia.type === "video"
                        ? isRtl ? "فيديو تفاعلي" : "Live Video Demo"
                        : isRtl ? "لقطة شاشة حقيقية" : "Verified Screen"}
                    </span>
                  </div>

                  {/* Bottom-left: Video Play/Pause Overlay Control */}
                  {activeMedia.type === "video" && (
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black hover:scale-105"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white ml-0.5" />}
                    </button>
                  )}

                  {/* Bottom-right: Badge */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-mono font-bold text-white backdrop-blur-md border border-white/20">
                      {isRtl ? p.typeAr : p.typeEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Gallery Thumbnails Strip */}
              {mediaItems.length > 1 && (
                <div className="rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4 shadow-sm">
                  <div className="mb-2.5 flex items-center justify-between text-xs font-bold text-neutral-500">
                    <span className="flex items-center gap-1.5 uppercase font-mono tracking-wider text-neutral-700">
                      <ImageIcon className="h-3.5 w-3.5 text-[#2057ff]" />
                      {isRtl ? "معرض صور وفيديوهات المنتج" : "Product Media Gallery"}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {isRtl ? `${mediaItems.length} وسائط تفاعلية` : `${mediaItems.length} interactive assets`}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-1 no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {mediaItems.map((item, idx) => {
                      const isActive = idx === activeMediaIndex
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setActiveMediaIndex(idx)
                            setIsPlaying(true)
                          }}
                          className={cn(
                            "group relative flex-shrink-0 w-24 sm:w-32 md:w-36 aspect-[16/10] overflow-hidden rounded-xl border-2 transition-all duration-200 text-left",
                            isActive
                              ? "border-[#2057ff] ring-4 ring-[#2057ff]/20 shadow-md scale-[1.03]"
                              : "border-neutral-200 hover:border-neutral-400 opacity-65 hover:opacity-100 hover:scale-[1.01]"
                          )}
                        >
                          {item.type === "video" ? (
                            <div className="relative h-full w-full bg-neutral-900">
                              <video
                                src={`${item.src}#t=0.001`}
                                muted
                                playsInline
                                preload="metadata"
                                className="h-full w-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm border border-white/30 group-hover:scale-110 transition">
                                  <Play className="h-3 w-3 fill-white ml-0.5" />
                                </div>
                              </div>
                              <div className="absolute top-1 right-1 rounded bg-black/80 px-1 py-0.5 text-[8px] font-mono font-bold text-white uppercase tracking-wider">
                                VIDEO
                              </div>
                            </div>
                          ) : (
                            <img
                              src={item.src}
                              alt={item.titleEn || `Gallery ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          )}

                          {/* Active border accent */}
                          {isActive && (
                            <div className="absolute inset-0 border-2 border-[#2057ff] rounded-xl pointer-events-none" />
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* Caption of active item */}
                  {activeMedia && (activeMedia.titleEn || activeMedia.titleAr) && (
                    <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 font-medium">
                      <span className="truncate pr-2">
                        {isRtl ? activeMedia.titleAr : activeMedia.titleEn}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-neutral-400 whitespace-nowrap">
                        {activeMediaIndex + 1} / {mediaItems.length}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* SECTION: The Problem Solved */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#2057ff]">
                <Sparkles className="h-4 w-4" />
                <span>{isRtl ? "المشكلة التي يعالجها المنتج" : "THE PROBLEM SOLVED"}</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-neutral-900">
                {isRtl ? "لماذا طوّرت بنسل هذا النظام؟" : "Why Pencil Engineered This Solution"}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-700">
                {isRtl ? p.problemAr : p.problemEn}
              </p>
            </div>

            {/* SECTION: Programming Languages & Tech Stack */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#2057ff]">
                <Code2 className="h-4 w-4" />
                <span>{isRtl ? "لغات البرمجة والتقنيات المستخدمة" : "LANGUAGES & ARCHITECTURE"}</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-neutral-900">
                {isRtl ? "بنية برمجية معتمدة ومفتوحة المصدر" : "Hardened Enterprise Stack"}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500">
                {isRtl
                  ? "كود نظيف مكتوب بأحدث إصدارات لغات البرمجة، مع توثيق كامل وهيكلية جاهزة للتوسع السحابي دون أي قوالب مقيدة."
                  : "Clean code written with modern frameworks, complete developer documentation, and microservice modularity."}
              </p>

              {/* Tech Badges Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {p.techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-3.5 transition hover:border-[#2057ff]/40 hover:bg-white"
                  >
                    <Terminal className="h-4 w-4 text-[#2057ff] shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-neutral-900 font-mono">{tech}</span>
                      <span className="block text-[10px] text-neutral-500 font-medium">
                        {isRtl ? "تقنية أساسية" : "Core Dependency"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: Key Capabilities & Features */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#2057ff]">
                <Cpu className="h-4 w-4" />
                <span>{isRtl ? "المميزات والقدرات التشغيلية" : "KEY CAPABILITIES"}</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-neutral-900">
                {isRtl ? "ما يمكن للنظام تنفيذه لمنظومتك" : "Operational Superpowers & Features"}
              </h2>

              <div className="mt-6 space-y-3.5">
                {(isRtl ? p.capabilitiesAr : p.capabilitiesEn).map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-100 bg-[#FBFBFB] p-4 transition hover:border-neutral-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2057ff] shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-neutral-800 leading-relaxed">{cap}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION: Included Services */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
                <span>{isRtl ? "الخدمات المرفقة مع هذا المنتج" : "SERVICES INCLUDED"}</span>
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-neutral-900">
                {isRtl ? "تسليم شامل مع نقل كامل للملكية" : "Turnkey Handover & Enterprise Ownership"}
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {includedServices.map((svc, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-neutral-200/80 bg-[#FAFAFA] p-4 transition hover:border-neutral-900"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                      <BadgeCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{isRtl ? svc.titleAr : svc.titleEn}</span>
                    </div>
                    <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                      {isRtl ? svc.descAr : svc.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Shop Action & Ordering Box (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Product Card Box */}
              <div className="rounded-3xl border border-neutral-300 bg-white p-6 sm:p-7 shadow-xl">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <span className="text-xs font-mono uppercase font-bold text-[#2057ff]">
                    {isRtl ? p.badgeAr : p.badgeEn}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                    {isRtl ? p.deliveryDaysAr : p.deliveryDaysEn}
                  </span>
                </div>

                <div className="py-5">
                  <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                    {isRtl ? p.nameAr : p.nameEn}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                    <span className="font-mono font-bold text-neutral-800">{p.version}</span>
                    <span>•</span>
                    <span className="font-semibold">{isRtl ? p.typeAr : p.typeEn}</span>
                  </div>

                  <div className="mt-5 rounded-2xl bg-neutral-50 p-4 border border-neutral-200">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      {isRtl ? "نموذج الترخيص والتسليم" : "DELIVERY & OWNERSHIP"}
                    </div>
                    <div className="mt-1 text-sm font-bold text-neutral-900">
                      {isRtl ? "ملكية كاملة للكود مع ترخيص دائم" : "Full Source Code & Perpetual License"}
                    </div>
                    <div className="mt-1 text-xs text-neutral-500">
                      {isRtl
                        ? "دون اشتراكات شهرية، دون عمولات على المبيعات."
                        : "Zero recurring SaaS fees. Zero cut on your transactions."}
                    </div>
                  </div>
                </div>

                {/* Pathway Selection */}
                <div className="space-y-2 border-t border-neutral-100 pt-4">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    {isRtl ? "اختر مسار التنفيذ المطلوب:" : "SELECT DEPLOYMENT MODEL:"}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setEngagementType("ready")}
                      className={cn(
                        "rounded-xl border py-2 text-[11px] font-bold transition text-center",
                        engagementType === "ready"
                          ? "border-[#2057ff] bg-blue-50 text-[#2057ff]"
                          : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                      )}
                    >
                      {isRtl ? "حل جاهز" : "Ready"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setEngagementType("customized")}
                      className={cn(
                        "rounded-xl border py-2 text-[11px] font-bold transition text-center",
                        engagementType === "customized"
                          ? "border-[#2057ff] bg-blue-50 text-[#2057ff]"
                          : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                      )}
                    >
                      {isRtl ? "تخصيص" : "Custom"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setEngagementType("build")}
                      className={cn(
                        "rounded-xl border py-2 text-[11px] font-bold transition text-center",
                        engagementType === "build"
                          ? "border-[#2057ff] bg-blue-50 text-[#2057ff]"
                          : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                      )}
                    >
                      {isRtl ? "بناء جديد" : "Build"}
                    </button>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="mt-6 space-y-2.5">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2057ff] py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-[#1848dc] shadow-md shadow-blue-500/20"
                  >
                    <span>{isRtl ? "طلب استعراض حي وتفاصيل (Demo)" : "Request Live Demo & Order"}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <a
                    href={`https://wa.me/201099905204?text=${encodeURIComponent(
                      `مرحباً بنسل ستوديو، أود الاستفسار مباشرة عن منتج ${isRtl ? p.nameAr : p.nameEn} (${p.version})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white py-3 text-xs sm:text-sm font-bold text-neutral-800 transition hover:bg-neutral-50 hover:border-neutral-900"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-emerald-500" />
                    <span>{isRtl ? "تواصل فوري عبر الواتساب" : "Direct WhatsApp Inquiry"}</span>
                  </a>
                </div>

                {/* Trust Points */}
                <div className="mt-6 space-y-2 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{isRtl ? "تسليم الكود المصدري كاملاً" : "100% Full Source Code Handover"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{isRtl ? "نشر على خوادمك السحابية الخاصة" : "Deployment on Your Own Cloud Servers"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{isRtl ? "فريق هندسي متخصص للإشراف" : "Dedicated Senior Engineering Support"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Related Products to continue browsing */}
        <div className="mt-20 border-t border-neutral-200 pt-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2057ff]">
                {isRtl ? "منتجات إضافية" : "RELATED PRODUCTS"}
              </span>
              <h2 className="mt-1 text-2xl font-black text-neutral-950">
                {isRtl ? "حلول وأنظمة أخرى من بنسل" : "Explore More Pencil Engines"}
              </h2>
            </div>

            <Link
              href="/marketplace"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-[#2057ff] transition"
            >
              <span>{isRtl ? "عرض جميع المنتجات" : "View All Products"}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/marketplace/${rel.slug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  {rel.videoSrc ? (
                    <video
                      src={`${rel.videoSrc}#t=0.001`}
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={rel.imageSrc}
                      alt={rel.nameEn}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="rounded-full bg-neutral-900/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-white">
                      {isRtl ? rel.badgeAr : rel.badgeEn}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-[#2057ff] font-bold">
                      {isRtl ? rel.typeAr : rel.typeEn}
                    </div>
                    <h3 className="mt-1 text-base font-bold text-neutral-900 group-hover:text-[#2057ff] transition">
                      {isRtl ? rel.nameAr : rel.nameEn}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 line-clamp-2">
                      {isRtl ? rel.taglineAr : rel.taglineEn}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 text-xs font-bold text-neutral-900">
                    <span className="text-emerald-600 font-semibold text-[11px]">
                      {isRtl ? rel.deliveryDaysAr : rel.deliveryDaysEn}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#2057ff]">
                      <span>{isRtl ? "تفاصيل المنتج" : "View Details"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Order / Demo Request Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-lg rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-2xl text-neutral-900"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#2057ff] font-bold">
                    {isRtl ? "طلب استعراض حي وتخصيص" : "LIVE DEMO & SOLUTION ORDER"}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{isRtl ? p.nameAr : p.nameEn}</h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-full p-2 text-neutral-400 hover:bg-neutral-100 transition"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSendWhatsApp} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    {isRtl ? "الاسم الكريم:" : "Your Name:"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRtl ? "الاسم بالكامل" : "Full Name"}
                    className="w-full rounded-xl border border-neutral-300 px-3.5 py-2 text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      {isRtl ? "الشركة / المشروع:" : "Company / Venture:"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={isRtl ? "اسم شركتك" : "Company Name"}
                      className="w-full rounded-xl border border-neutral-300 px-3.5 py-2 text-xs focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      {isRtl ? "الهاتف / الواتساب:" : "Phone / WhatsApp:"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder={isRtl ? "+20 100 xxx xxxx" : "+1 555-0199"}
                      className="w-full rounded-xl border border-neutral-300 px-3.5 py-2 text-xs focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    {isRtl ? "ملاحظات أو أسئلة خاصة (اختياري):" : "Specific Requirements (Optional):"}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder={
                      isRtl
                        ? "أخبرنا عن مسار عملك أو المتطلبات التي ترغب في مناقشتها..."
                        : "Tell us about your operational rules, volume, or timeline..."
                    }
                    className="w-full rounded-xl border border-neutral-300 px-3.5 py-2 text-xs focus:border-blue-600 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#2057ff] py-3 text-xs font-bold text-white transition hover:bg-[#1848dc]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>{isRtl ? "إرسال وحجز العرض عبر الواتساب" : "Book Demo via WhatsApp"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const subject = encodeURIComponent(`Marketplace Order: ${p.nameEn} [${engagementType}]`)
                      const body = encodeURIComponent(
                        `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.contact}\nDetails: ${formData.details}`
                      )
                      window.location.href = `mailto:hello@dipencil.com?subject=${subject}&body=${body}`
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-xs font-bold text-neutral-800 transition hover:bg-neutral-100"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{isRtl ? "بريد إلكتروني" : "Email"}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

