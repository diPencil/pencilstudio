"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle2,
  ArrowUpRight,
  Play,
  Layers,
  Sparkles,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Send,
  X,
  Cpu,
  Smartphone,
  ExternalLink,
  MessageSquare,
  Building2,
  Wrench,
  Compass,
  Search,
  Star,
  Eye,
  BadgeCheck,
  Clock,
  Filter,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Reveal } from "@/components/shared/motion/reveal"
import { useLanguage } from "@/components/language-context"
import { EditorialPageHero, StatStrip, DarkPanel, Eyebrow } from "@/components/editorial"
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon"
import { PencilButton } from "@/components/ui/pencil-button"
import { PENCIL } from "@/components/shared/ui/pencil-ui"
import { cn } from "@/lib/utils"
import {
  MARKETPLACE_PRODUCTS,
  MARKETPLACE_CATEGORIES,
  type MarketplaceProduct,
  type MarketplaceCategory,
} from "@/lib/marketplace/marketplace-data"

export function MarketplacePage() {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"

  // Filter & Search states
  const [activeCategory, setActiveCategory] = React.useState<string>("all")
  const [searchQuery, setSearchQuery] = React.useState<string>("")
  const [selectedTech, setSelectedTech] = React.useState<string>("all")
  const [selectedDelivery, setSelectedDelivery] = React.useState<string>("all")
  const [sortBy, setSortBy] = React.useState<"featured" | "rating" | "version">("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState<boolean>(false)

  // Reset all filters
  const handleResetFilters = () => {
    setActiveCategory("all")
    setSearchQuery("")
    setSelectedTech("all")
    setSelectedDelivery("all")
    setSortBy("featured")
  }

  const hasActiveFilters =
    activeCategory !== "all" ||
    searchQuery.trim() !== "" ||
    selectedTech !== "all" ||
    selectedDelivery !== "all" ||
    sortBy !== "featured"

  // Modal / Drawer State
  const [modalOpen, setModalOpen] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState<MarketplaceProduct | null>(null)
  const [engagementType, setEngagementType] = React.useState<"ready" | "customized" | "build">("ready")

  // Form State
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    contact: "",
    details: "",
  })
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  // Filtered and searched products
  const filteredProducts = React.useMemo(() => {
    let list = MARKETPLACE_PRODUCTS

    // Category filter
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory)
    }

    // Technology filter
    if (selectedTech !== "all") {
      list = list.filter((p) =>
        p.techStack.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()))
      )
    }

    // Delivery Readiness filter
    if (selectedDelivery === "instant") {
      list = list.filter(
        (p) =>
          p.deliveryDaysEn.toLowerCase().includes("instant") ||
          p.deliveryDaysEn.includes("2") ||
          p.deliveryDaysAr.includes("فوري")
      )
    } else if (selectedDelivery === "3-5days") {
      list = list.filter(
        (p) =>
          p.deliveryDaysEn.includes("3") ||
          p.deliveryDaysEn.includes("5") ||
          p.deliveryDaysAr.includes("3")
      )
    }

    // Search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(
        (p) =>
          p.nameEn.toLowerCase().includes(q) ||
          p.nameAr.toLowerCase().includes(q) ||
          p.taglineEn.toLowerCase().includes(q) ||
          p.taglineAr.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q)) ||
          p.badgeEn.toLowerCase().includes(q) ||
          p.badgeAr.toLowerCase().includes(q)
      )
    }

    // Sorting
    if (sortBy === "rating") {
      list = [...list].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    } else if (sortBy === "version") {
      list = [...list].sort((a, b) => b.version.localeCompare(a.version))
    }

    return list
  }, [activeCategory, selectedTech, selectedDelivery, searchQuery, sortBy])

  // Pagination: exactly 9 products per page (3x3 grid)
  const ITEMS_PER_PAGE = 9
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  React.useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, selectedTech, selectedDelivery, searchQuery, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = React.useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredProducts, currentPage])

  // Open product detail / checkout modal
  const handleOpenProduct = (product: MarketplaceProduct, type: "ready" | "customized" | "build" = "ready") => {
    setSelectedProduct(product)
    setEngagementType(type)
    setFormSubmitted(false)
    setModalOpen(true)
  }

  // Submit via WhatsApp
  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedProduct) return
    const targetProduct = isRtl ? selectedProduct.nameAr : selectedProduct.nameEn
    const typeLabel =
      engagementType === "ready"
        ? isRtl ? "حل جاهز (Ready Solution)" : "Ready Solution"
        : engagementType === "customized"
          ? isRtl ? "تخصيص كامل (Customized)" : "Customized Solution"
          : isRtl ? "بناء نظام مخصص من الصفر (Custom Build)" : "Custom Build"

    const messageText = isRtl
      ? `مرحباً بنسل ستوديو، أود طلب ومعاينة منتج من المتجر الرقمي:\n` +
      `• المنتج: ${targetProduct} (${selectedProduct.version})\n` +
      `• مسار التنفيذ: ${typeLabel}\n` +
      `• الاسم: ${formData.name || "غير محدد"}\n` +
      `• الشركة: ${formData.company || "غير محدد"}\n` +
      `• الهاتف: ${formData.contact || "غير محدد"}\n` +
      `• ملاحظات: ${formData.details || "أرغب في الحصول على عرض تجريبي ومناقشة تفاصيل النشر والتخصيص."}`
      : `Hello Pencil Studio, I would like to inquire about a digital product from the Marketplace:\n` +
      `• Product: ${targetProduct} (${selectedProduct.version})\n` +
      `• Pathway: ${typeLabel}\n` +
      `• Name: ${formData.name || "N/A"}\n` +
      `• Company: ${formData.company || "N/A"}\n` +
      `• Phone/Contact: ${formData.contact || "N/A"}\n` +
      `• Notes: ${formData.details || "Requesting a live demo and deployment walkthrough."}`

    const encoded = encodeURIComponent(messageText)
    window.open(`https://wa.me/201099905204?text=${encoded}`, "_blank")
    setFormSubmitted(true)
  }

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={cn("min-h-screen text-neutral-900 selection:bg-[#2057ff] selection:text-white", PENCIL.paper)}>
      {/* Light editorial header */}
      <Header light />

      {/* Editorial Page Hero (matching /services, /solutions, /sectors) */}
      <EditorialPageHero
        isRtl={isRtl}
        cards={[
          {
            letter: "P",
            label: isRtl ? "المنصات" : "PLATFORMS",
            index: "01",
            src: "/signature-capabilities/business-systems-dashboards.mp4",
          },
          {
            letter: "C",
            label: isRtl ? "محرك التجارة" : "COMMERCE",
            index: "02",
            src: "/solutions/high-volume-digital-commerce-portals.mp4",
          },
          {
            letter: "A",
            label: isRtl ? "سوبر فيليز AI" : "SUPERFELIZ AI",
            index: "03",
            src: "/solutions/feliz-ai.mp4",
          },
        ]}
        title={
          isRtl ? (
            <>
              <span className="text-[#2057ff]">ماركت بليس</span> صُنعت بأيدي بنسل
              <span className="text-[#2057ff]">.</span>
            </>
          ) : (
            <>
              <span className="text-[#2057ff]">MARKETPLACE</span> BUILT FOR SCALE
              <span className="text-[#2057ff]">.</span>
            </>
          )
        }
        subtitle={
          isRtl
            ? "صُنعت بأيدي بنسل. جاهزة للاستخدام، التخصيص، أو التوسع. أنظمة أعمال رقمية، وكلاء ذكاء اصطناعي، ومحركات تجارة جاهزة للإطلاق الفوري."
            : "Built by Pencil. Ready to use, customize, or scale. Production-ready digital systems, neural AI agents, and commerce engines."
        }
        leftMeta={
          isRtl
            ? ["أنظمة ومنصات", "محركات تجارة", "ذكاء اصطناعي"]
            : ["PLATFORMS & BMS", "COMMERCE ENGINES", "NEURAL AI AGENTS"]
        }
        rightMeta={{
          brand: "PENCIL STUDIO",
          line: isRtl ? "الماركت بليس // 2026" : "MARKETPLACE // 2026",
          accent: isRtl ? "كود نظيف وملكية كاملة" : "100% IP OWNERSHIP",
        }}
        ticker={{
          status: isRtl
            ? "منتجات ومنصات برمجية حقيقية صممتها وهندستها بنسل ستوديو لتسريع نمو الأعمال"
            : "CURATED DIGITAL PRODUCTS ARCHITECTED & ENGINEERED BY PENCIL STUDIO FOR RAPID DEPLOYMENT",
          locations: ["RIYADH", "DUBAI", "CAIRO", "BERLIN"],
        }}
      />

      {/* Verified Stat Strip */}
      <StatStrip
        items={[
          {
            value: isRtl ? "10 منتجات" : "10 Products",
            label: isRtl ? "أنظمة ومنصات جاهزة للتسليم" : "Production-Ready Digital Systems",
          },
          {
            value: isRtl ? "100% كود أصلي" : "100% Source",
            label: isRtl ? "ملكية فكرية كاملة دون وسطاء" : "Full IP & Source Code Ownership",
          },
          {
            value: isRtl ? "3 مسارات" : "3 Pathways",
            label: isRtl ? "حل جاهز، تخصيص، أو بناء من الصفر" : "Ready, Customized, or Custom Build",
          },
          {
            value: isRtl ? "0$ عمولات" : "$0 Royalties",
            label: isRtl ? "دون اشتراكات قوالب أو تراخيص متكررة" : "Zero SaaS Template Royalties",
          },
        ]}
      />

      {/* SHOP SECTION: Real Digital Shop Catalog with Sidebar Filter */}
      <section id="shop-catalog" className="relative py-12 lg:py-20 border-b border-neutral-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            {/* ============================================================ */}
            {/* SIDEBAR FILTER (Left in LTR, Right in RTL via dir="rtl")    */}
            {/* ============================================================ */}
            <aside className="lg:col-span-3 xl:col-span-3 lg:sticky lg:top-24 self-start">
              {/* Mobile filter toggle button */}
              <div className="mb-4 flex items-center justify-between lg:hidden">
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-bold text-neutral-800 shadow-sm"
                >
                  <Filter className="h-3.5 w-3.5 text-[#2057ff]" />
                  <span>{isRtl ? "تصفية المنتجات" : "Filter Products"}</span>
                  {hasActiveFilters && (
                    <span className="h-2 w-2 rounded-full bg-[#2057ff]" />
                  )}
                </button>

                <span className="text-xs font-medium text-neutral-500">
                  {filteredProducts.length} {isRtl ? "منتج" : "items"}
                </span>
              </div>

              {/* Sidebar container */}
              <div
                className={cn(
                  "space-y-4.5 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                  mobileFiltersOpen ? "block" : "hidden lg:block"
                )}
              >
                {/* Header: Title & Reset */}
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3.5">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-[#2057ff]" />
                    <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-mono">
                      {isRtl ? "تصفية المعرض" : "Filters"}
                    </h3>
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={handleResetFilters}
                      className="text-xs font-semibold text-[#2057ff] hover:text-[#1848dc] transition"
                    >
                      {isRtl ? "إعادة ضبط" : "Clear All"}
                    </button>
                  )}
                </div>

                {/* 1. Live Search Input */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-1.5">
                    {isRtl ? "البحث بالاسم والتقنية:" : "SEARCH CATALOG:"}
                  </label>
                  <div className="relative w-full">
                    <Search
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400",
                        isRtl ? "right-3" : "left-3"
                      )}
                    />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={isRtl ? "ابحث عن نظام أو تقنية..." : "Search products..."}
                      className={cn(
                        "w-full rounded-xl border border-neutral-200 bg-[#FBFBFB] py-2 text-xs font-medium text-neutral-900 transition placeholder:text-neutral-400 focus:border-[#2057ff] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2057ff]",
                        isRtl ? "pr-9 pl-3" : "pl-9 pr-3"
                      )}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className={cn(
                          "absolute top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700",
                          isRtl ? "left-2.5" : "right-2.5"
                        )}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. Categories Vertical List */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                    {isRtl ? "التصنيف والقطاع:" : "CATEGORIES:"}
                  </label>
                  <div className="space-y-1">
                    {MARKETPLACE_CATEGORIES.map((cat) => {
                      const isActive = activeCategory === cat.id
                      const count =
                        cat.id === "all"
                          ? MARKETPLACE_PRODUCTS.length
                          : MARKETPLACE_PRODUCTS.filter((p) => p.category === cat.id).length

                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all text-start",
                            isActive
                              ? "bg-neutral-900 text-white font-bold shadow-sm"
                              : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                          )}
                        >
                          <span className="truncate">{isRtl ? cat.labelAr : cat.labelEn}</span>
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[10px] font-mono shrink-0",
                              isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500"
                            )}
                          >
                            {count}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 3. Technology / Framework Filter */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                    {isRtl ? "التقنية واللغة:" : "TECHNOLOGIES:"}
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: "all", label: isRtl ? "الكل" : "All" },
                      { id: "Next.js", label: "Next.js" },
                      { id: "React", label: "React" },
                      { id: "PostgreSQL", label: "PostgreSQL" },
                      { id: "FastAPI", label: "FastAPI" },
                      { id: "Redis", label: "Redis" },
                    ].map((t) => {
                      const isActive = selectedTech === t.id
                      return (
                        <button
                          key={t.id}
                          onClick={() => setSelectedTech(t.id)}
                          className={cn(
                            "rounded-lg px-2.5 py-1 text-[11px] font-mono transition",
                            isActive
                              ? "bg-[#2057ff] text-white font-bold"
                              : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                          )}
                        >
                          {t.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 4. Delivery & Readiness */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                    {isRtl ? "الجاهزية وسرعة التسليم:" : "DELIVERY READINESS:"}
                  </label>
                  <div className="space-y-1.5">
                    {[
                      { id: "all", labelEn: "All Schedules", labelAr: "جميع المواعيد" },
                      { id: "instant", labelEn: "Instant / 3 Days", labelAr: "فوري / خلال 3 أيام" },
                      { id: "3-5days", labelEn: "3 - 5 Days", labelAr: "خلال 3 إلى 5 أيام" },
                    ].map((d) => {
                      const isActive = selectedDelivery === d.id
                      return (
                        <button
                          key={d.id}
                          onClick={() => setSelectedDelivery(d.id)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl border px-3 py-1.5 text-xs font-medium transition text-start",
                            isActive
                              ? "border-[#2057ff] bg-blue-50/60 text-[#2057ff] font-bold"
                              : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                          )}
                        >
                          <span>{isRtl ? d.labelAr : d.labelEn}</span>
                          {isActive && <CheckCircle2 className="h-3.5 w-3.5 text-[#2057ff]" />}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* 5. Sort Dropdown */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-1.5">
                    {isRtl ? "الترتيب حسب:" : "SORT BY:"}
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full rounded-xl border border-neutral-200 bg-[#FBFBFB] px-3 py-2 text-xs font-semibold text-neutral-700 focus:border-[#2057ff] focus:outline-none"
                  >
                    <option value="featured">{isRtl ? "المنتجات الأبرز" : "Featured Products"}</option>
                    <option value="rating">{isRtl ? "الأعلى تقييماً" : "Top Rated (5.0)"}</option>
                    <option value="version">{isRtl ? "أحدث إصدار برمجياً" : "Latest Version"}</option>
                  </select>
                </div>

                {/* 6. Mini Consultation Callout */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3.5 text-center">
                  <div className="text-[11px] font-bold text-neutral-900">
                    {isRtl ? "تحتاج نظاماً مخصصاً؟" : "Need a custom engine?"}
                  </div>
                  <p className="mt-1 text-[10px] text-neutral-500 leading-relaxed">
                    {isRtl
                      ? "تواصل مع مهندسي بنسل لبناء نظام مفصل لاحتياجاتك."
                      : "Talk with our lead architects to tailor or build from scratch."}
                  </p>
                  <a
                    href="https://wa.me/201099905204?text=Hello%20Pencil%20Studio%2C%20I%20am%20looking%20for%20a%20custom%20software%20solution."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-neutral-900 py-1.5 text-[11px] font-bold text-white transition hover:bg-[#2057ff]"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{isRtl ? "استشارة سريعة" : "Direct WhatsApp"}</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* ============================================================ */}
            {/* MAIN PRODUCTS GRID (Right in LTR, Left in RTL)               */}
            {/* ============================================================ */}
            <main className="lg:col-span-9 xl:col-span-9">
              {/* Catalog Top Header Bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#2057ff] animate-ping" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#2057ff] font-bold">
                      {isRtl ? "المعروض في المتجر" : "LIVE SHOWROOM INVENTORY"}
                    </span>
                  </div>
                  <h2 className="mt-1 text-2xl font-black text-neutral-900 tracking-tight">
                    {isRtl ? "منتجات وحلول بنسل الجاهزة" : "Pencil Digital Products & Engines"}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-semibold text-neutral-700">
                    {filteredProducts.length === 0
                      ? isRtl ? "لا توجد منتجات" : "0 items"
                      : isRtl
                        ? `عرض ${(currentPage - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(
                          currentPage * ITEMS_PER_PAGE,
                          filteredProducts.length
                        )} من أصل ${filteredProducts.length} منتج`
                        : `Showing ${(currentPage - 1) * ITEMS_PER_PAGE + 1}–${Math.min(
                          currentPage * ITEMS_PER_PAGE,
                          filteredProducts.length
                        )} of ${filteredProducts.length} products`}
                  </span>
                </div>
              </div>

              {/* Active Filters Bar (Chips with clear X) */}
              {hasActiveFilters && (
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-neutral-400 font-medium">
                    {isRtl ? "التصفيات النشطة:" : "Active:"}
                  </span>

                  {activeCategory !== "all" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#2057ff]">
                      <span>
                        {MARKETPLACE_CATEGORIES.find((c) => c.id === activeCategory)?.labelEn || activeCategory}
                      </span>
                      <button onClick={() => setActiveCategory("all")}>
                        <X className="h-3 w-3 hover:text-blue-900" />
                      </button>
                    </span>
                  )}

                  {selectedTech !== "all" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#2057ff]">
                      <span>{selectedTech}</span>
                      <button onClick={() => setSelectedTech("all")}>
                        <X className="h-3 w-3 hover:text-blue-900" />
                      </button>
                    </span>
                  )}

                  {selectedDelivery !== "all" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#2057ff]">
                      <span>{selectedDelivery === "instant" ? "Instant / 3 Days" : "3-5 Days"}</span>
                      <button onClick={() => setSelectedDelivery("all")}>
                        <X className="h-3 w-3 hover:text-blue-900" />
                      </button>
                    </span>
                  )}

                  {searchQuery && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 border border-neutral-300 px-3 py-1 text-xs font-semibold text-neutral-800">
                      <span>&quot;{searchQuery}&quot;</span>
                      <button onClick={() => setSearchQuery("")}>
                        <X className="h-3 w-3 hover:text-neutral-950" />
                      </button>
                    </span>
                  )}

                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-bold text-[#2057ff] underline hover:text-[#1848dc] transition ml-2"
                  >
                    {isRtl ? "مسح الكل" : "Reset"}
                  </button>
                </div>
              )}

              {/* Product Grid: 3 columns on desktop */}
              {filteredProducts.length === 0 ? (
                <div className="rounded-3xl border border-neutral-200 bg-white p-16 text-center shadow-sm">
                  <Search className="mx-auto h-12 w-12 text-neutral-300" />
                  <h3 className="mt-4 text-lg font-bold text-neutral-800">
                    {isRtl ? "لم يتم العثور على منتجات مطابقة" : "No matching products found"}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {isRtl
                      ? "جرب البحث بكلمات أخرى أو تغيير خيارات التصفية الجانبية"
                      : "Try different keywords or reset your sidebar filters"}
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#2057ff]"
                  >
                    {isRtl ? "إعادة ضبط التصفية" : "Reset Filters"}
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {paginatedProducts.map((product, idx) => (
                      <ShopProductCard
                        key={product.id}
                        product={product}
                        isRtl={isRtl}
                        onQuickPreview={(prod) => {
                          setSelectedProduct(prod)
                          setModalOpen(true)
                        }}
                        index={idx}
                      />
                    ))}
                  </div>

                  {/* Pagination: 9 products per page (3x3 grid) */}
                  {totalPages > 1 && (
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200/80 pt-6">
                      <span className="text-xs text-neutral-500 font-medium">
                        {isRtl
                          ? `عرض ${(currentPage - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(
                            currentPage * ITEMS_PER_PAGE,
                            filteredProducts.length
                          )} من أصل ${filteredProducts.length} منتج`
                          : `Showing ${(currentPage - 1) * ITEMS_PER_PAGE + 1} - ${Math.min(
                            currentPage * ITEMS_PER_PAGE,
                            filteredProducts.length
                          )} of ${filteredProducts.length} items`}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setCurrentPage((p) => Math.max(1, p - 1))
                            document.getElementById("shop-catalog")?.scrollIntoView({ behavior: "smooth" })
                          }}
                          disabled={currentPage === 1}
                          className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          {isRtl ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                          <span>{isRtl ? "السابق" : "Previous"}</span>
                        </button>

                        <div className="flex items-center gap-1.5">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                              key={page}
                              onClick={() => {
                                setCurrentPage(page)
                                document.getElementById("shop-catalog")?.scrollIntoView({ behavior: "smooth" })
                              }}
                              className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition",
                                currentPage === page
                                  ? "bg-[#2057ff] text-white shadow-sm"
                                  : "bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900"
                              )}
                            >
                              {page}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => {
                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                            document.getElementById("shop-catalog")?.scrollIntoView({ behavior: "smooth" })
                          }}
                          disabled={currentPage === totalPages}
                          className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <span>{isRtl ? "التالي" : "Next"}</span>
                          {isRtl ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* SECTION: The Three Ways to Work with Marketplace Products */}
      <section className="relative border-b border-neutral-200 bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <Eyebrow className="mb-3 text-[#2057ff] bg-blue-50 border-blue-200">
              {isRtl ? "خيارات التنفيذ والتعاون" : "WAYS TO WORK WITH US"}
            </Eyebrow>
            <h2 className="text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl text-neutral-900 leading-[1.14]">
              {isRtl ? (
                <>
                  ثلاثة مسارات لتطبيق{" "}
                  <span className="font-light italic text-neutral-500">منتجات بنسل الرقمية</span>
                </>
              ) : (
                <>
                  Three Ways to Work with{" "}
                  <span className="font-light italic text-neutral-500">Marketplace Products</span>
                </>
              )}
            </h2>
            <p className="mt-3 text-base text-neutral-600 sm:text-lg leading-relaxed">
              {isRtl
                ? "سواء كنت بحاجة إلى سرعة الإطلاق الفوري لمنتج مختبر، أو ترغب في تكييفه بالكامل مع أنظمة شركتك وهوية علامتك، أو تحتاج لبناء حل فريد من الصفر - نوفر لك النموذج الأنسب."
                : "Whether you need rapid go-to-market with a proven engine, deep custom adaptation to your company's SOPs and brand identity, or a proprietary ground-up build - we adapt to your roadmap."}
            </p>
          </div>

          {/* Three Model Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* 1. Ready Solution */}
            <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-[#FAFAFA] p-7 transition hover:border-neutral-900 hover:shadow-md">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#2057ff] mb-5">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {isRtl ? "المسار الأول" : "PATHWAY 01"}
                </div>
                <h3 className="mt-1 text-xl font-bold text-neutral-900">
                  {isRtl ? "حل جاهز (Ready Solution)" : "Ready Solution"}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isRtl
                    ? "انطلاق فوري بالاعتماد على منتج قائم من منتجات بنسل. برمجيات مختبرة ميدانياً، معمارية آمنة، وجاهزة للإطلاق على خوادمك السحابية في أيام معدودة."
                    : "Start directly from an existing Pencil product. Production-grade codebase, hardened security, and rapid deployment to your infrastructure in days."}
                </p>

                <div className="mt-5 space-y-2 border-t border-neutral-200/80 pt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "إطلاق فوري في أسرع وقت" : "Rapid go-to-market deployment"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "ربط بوابات الدفع والإشعارات الإقليمية" : "Pre-integrated payment & auth rails"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "أقل تكلفة استثمارية مبدئية" : "Lowest initial engineering overhead"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3">
                <PencilButton
                  href="#shop-catalog"
                  variant="primary"
                  size="default"
                  fullWidth
                  hoverLabel={isRtl ? "تصفح المنتجات ←" : "View Products →"}
                >
                  {isRtl ? "اختر منتجك الجاهز" : "Browse Ready Products"}
                </PencilButton>
              </div>
            </div>

            {/* 2. Customized Solution */}
            <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[#2057ff] bg-white p-7 shadow-sm">
              <div className="absolute -top-3 right-6 rounded-full bg-[#2057ff] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                {isRtl ? "الأكثر طلباً" : "MOST POPULAR"}
              </div>

              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white mb-5">
                  <Wrench className="h-5 w-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
                  {isRtl ? "المسار الثاني" : "PATHWAY 02"}
                </div>
                <h3 className="mt-1 text-xl font-bold text-neutral-900">
                  {isRtl ? "حل مخصص (Customized Solution)" : "Customized Solution"}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isRtl
                    ? "تكييف منتج حالي ليناسب هوية شركتك، مسارات عملك الفريدة، ومتطلباتك التشغيلية. نعدّل واجهات المستخدم، ونربط قواعد بياناتك وأنظمة الـ ERP الخاصة بك."
                    : "Adapt an existing product to your company’s brand, unique workflow and operational requirements. Custom UI/UX, ERP/CRM webhook integration, and bespoke logic."}
                </p>

                <div className="mt-5 space-y-2 border-t border-neutral-100 pt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "تصميم واجهات كامل بهوية علامتك" : "Bespoke UI/UX reflecting brand identity"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "ربط مخصص مع أنظمة ERP و CRM" : "Custom ERP, CRM & API integrations"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "اختصار 70% من وقت وتكلفة البرمجة" : "70% faster than ground-up R&D"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3">
                <PencilButton
                  onClick={() =>
                    handleOpenProduct(
                      selectedProduct || MARKETPLACE_PRODUCTS[0],
                      "customized"
                    )
                  }
                  variant="primary"
                  size="default"
                  fullWidth
                  hoverLabel={isRtl ? "اطلب التخصيص ←" : "Request Customization →"}
                >
                  {isRtl ? "طلب تخصيص حل" : "Request Customization"}
                </PencilButton>
              </div>
            </div>

            {/* 3. Custom Build */}
            <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-[#FAFAFA] p-7 transition hover:border-neutral-900 hover:shadow-md">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-200 text-neutral-900 mb-5">
                  <Compass className="h-5 w-5" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {isRtl ? "المسار الثالث" : "PATHWAY 03"}
                </div>
                <h3 className="mt-1 text-xl font-bold text-neutral-900">
                  {isRtl ? "بناء من الصفر (Custom Build)" : "Custom Build"}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isRtl
                    ? "إذا لم يكن الحل المناسب متاحاً بعد، تصمم وتبني بنسل نظامك بالكامل من الصفر. نبدأ من مرحلة التخطيط والمعمارية وصولاً للتطوير الكامل والإطلاق."
                    : "If the right solution does not exist yet, Pencil can design and build it from scratch. Complete product discovery, proprietary architecture, and dedicated engineering delivery."}
                </p>

                <div className="mt-5 space-y-2 border-t border-neutral-200/80 pt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "ملكية فكرية حصرية 100%" : "100% proprietary intellectual property"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "معمارية مفصلة لأدق متطلباتك" : "Engineered specifically for your use-case"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{isRtl ? "فريق هندسي مخصص تحت إشرافنا" : "Dedicated engineering delivery team"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3">
                <PencilButton
                  href="/contact"
                  variant="dark"
                  size="default"
                  fullWidth
                  hoverLabel={isRtl ? "تحدث مع المهندسين ←" : "Talk to Team →"}
                >
                  {isRtl ? "تحدث مع بنسل لبناء نظامك" : "Talk to Pencil"}
                </PencilButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: “Can’t find exactly what you need?” */}
      <section className="relative py-14 lg:py-20 bg-[#F8F9FA] overflow-hidden">
        <div className="container-custom">
          <DarkPanel className="relative overflow-hidden p-8 sm:p-12 lg:p-14">
            {/* Ambient glowing radial effects */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 mb-5">
                {isRtl ? "استشارة تقنية معمارية" : "CUSTOM ARCHITECTURE EVALUATION"}
              </span>

              <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.14]">
                {isRtl ? (
                  <>
                    لم تجد بالضبط{" "}
                    <span className="font-light italic text-neutral-400">ما تحتاجه؟</span>
                  </>
                ) : (
                  <>
                    Can’t find exactly{" "}
                    <span className="font-light italic text-neutral-400">what you need?</span>
                  </>
                )}
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-300">
                {isRtl
                  ? "لكل شركة مسارات تشغيلية فريدة وتحديات لا تغطيها القوالب الجاهزة. شارك فريق بنسل الهندسي مسار عملك، المشكلة التشغيلية، أو فكرة منتجك - وسنقوم بدراستها معمارياً لتحديد ما إذا كان بالإمكان تكييف أحد حلولنا القائمة لاختصار الوقت والتكلفة، أو تصميم وبناء نظام رقمي جديد كلياً يضمن لك الريادة."
                  : "Every business operates with unique constraints and workflows. Bring Pencil your workflow, business bottleneck, or digital product concept. Our engineering leadership will evaluate your technical landscape to determine whether an existing product can be adapted to save you months of R&D, or whether building a ground-up bespoke solution is your optimal path."}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <PencilButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  hoverLabel={isRtl ? "احجز استشارتك ←" : "Book Architecture Call →"}
                >
                  {isRtl ? "حجز استشارة معمارية" : "Talk to Pencil"}
                </PencilButton>

                <a
                  href="https://wa.me/201099905204?text=Hello%20Pencil%20Studio%2C%20I%20have%20a%20custom%20software%20workflow%20idea%20I%20would%20like%20to%20evaluate."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                  <span>{isRtl ? "محادثة فورية عبر الواتساب" : "Direct WhatsApp Evaluation"}</span>
                </a>
              </div>
            </div>
          </DarkPanel>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* Interactive Shop Modal / Product Drawer */}
      <AnimatePresence>
        {modalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-neutral-200 bg-white shadow-2xl text-neutral-900"
            >
              {/* Header with Video Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                {selectedProduct.videoSrc ? (
                  <video
                    src={`${selectedProduct.videoSrc}#t=0.001`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.nameEn}
                    className="h-full w-full object-cover"
                  />
                )}

                {/* Close Button */}
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-black transition backdrop-blur-md"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Overlay details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-600/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white">
                      {isRtl ? selectedProduct.badgeAr : selectedProduct.badgeEn}
                    </span>
                    <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-mono text-neutral-200">
                      {selectedProduct.version}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {isRtl ? selectedProduct.demoTypeAr : selectedProduct.demoTypeEn}
                  </span>
                </div>
              </div>

              {/* Product Info in Modal */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#2057ff] font-bold">
                      {isRtl ? selectedProduct.typeAr : selectedProduct.typeEn}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      {selectedProduct.rating} / 5.0
                    </span>
                  </div>

                  <h3 className="mt-1 text-2xl font-black text-neutral-900 tracking-tight">
                    {isRtl ? selectedProduct.nameAr : selectedProduct.nameEn}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {isRtl ? selectedProduct.taglineAr : selectedProduct.taglineEn}
                  </p>
                </div>

                {/* The Problem Solved */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    {isRtl ? "المشكلة التي يعالجها المنتج:" : "THE PROBLEM SOLVED:"}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-neutral-700">
                    {isRtl ? selectedProduct.problemAr : selectedProduct.problemEn}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {isRtl ? "أبرز الإمكانيات والميزات:" : "KEY CAPABILITIES:"}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(isRtl ? selectedProduct.capabilitiesAr : selectedProduct.capabilitiesEn).map(
                      (cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-[#2057ff] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Tech Chips */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    {isRtl ? "لغات البرمجة والتقنيات:" : "TECHNOLOGY STACK:"}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-mono text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Preview Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/marketplace/${selectedProduct.slug}`}
                    onClick={() => setModalOpen(false)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#2057ff] py-3 px-5 text-xs sm:text-sm font-bold text-white transition hover:bg-[#1848dc] shadow-md shadow-blue-500/20"
                  >
                    <span>{isRtl ? "عرض تفاصيل ولغات المنتج بالكامل (Get / Demo)" : "View Full Product Page (Get / Demo)"}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={`https://wa.me/201099905204?text=${encodeURIComponent(
                      isRtl
                        ? `مرحباً بنسل، أود الاستفسار عن منتج ${selectedProduct.nameAr} (${selectedProduct.version}) وحجز عرض تجريبي.`
                        : `Hello Pencil, I want to book a live demo for ${selectedProduct.nameEn} (${selectedProduct.version}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-xs font-bold text-neutral-800 transition hover:bg-neutral-50 hover:border-neutral-900"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-emerald-500" />
                    <span>{isRtl ? "حجز عرض (WhatsApp)" : "WhatsApp Demo"}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Authentic Shop Product Card Component
 * Sleek, compact, shop-style card with thumbnail/video hover, badges, specs, and quick action.
 */
function ShopProductCard({
  product: p,
  isRtl,
  onQuickPreview,
  index,
}: {
  product: MarketplaceProduct
  isRtl: boolean
  onQuickPreview: (product: MarketplaceProduct) => void
  index: number
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isHovered) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => { })
      }
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [isHovered])

  return (
    <Reveal delay={0.03 * (index % 4)}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-xl"
      >
        {/* Top Media / Thumbnail Box */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
          {p.videoSrc ? (
            <video
              ref={videoRef}
              src={`${p.videoSrc}#t=0.001`}
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
            />
          ) : (
            <img
              src={p.imageSrc}
              alt={p.nameEn}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* Dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Top Badges: Category & Version */}
          <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between">
            <span className="rounded-full bg-neutral-900/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
              {isRtl ? p.badgeAr : p.badgeEn}
            </span>
            <span className="rounded-full bg-white/90 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono font-bold text-neutral-800">
              {p.version}
            </span>
          </div>

          {/* Hover Quick Action Indicator: Quick Preview Modal */}
          <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-neutral-950/40 backdrop-blur-[2px]">
            <button
              onClick={() => onQuickPreview(p)}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-neutral-900 shadow-lg transition hover:scale-105 hover:bg-[#2057ff] hover:text-white"
            >
              <Eye className="h-3.5 w-3.5" />
              <span>{isRtl ? "معاينة سريعة" : "Quick Preview"}</span>
            </button>
          </div>

          {/* Live Demo Status Pill */}
          <div className="absolute bottom-2.5 right-2.5 z-10">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[10px] font-medium text-white border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {isRtl ? "ديمو حي" : "Live Demo"}
            </span>
          </div>
        </div>

        {/* Product Card Content */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div>
            {/* Category / Type & Rating */}
            <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-1.5">
              <span className="font-mono uppercase font-semibold text-[#2057ff] truncate max-w-[170px]">
                {isRtl ? p.typeAr : p.typeEn}
              </span>
              <span className="inline-flex items-center gap-1 font-bold text-amber-600">
                <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                {p.rating}
              </span>
            </div>

            {/* Product Title: Links to Inner Product Page */}
            <Link
              href={`/marketplace/${p.slug}`}
              className="text-base font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-[#2057ff] block line-clamp-1"
            >
              {isRtl ? p.nameAr : p.nameEn}
            </Link>

            {/* Concise 2-line tagline */}
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 line-clamp-2">
              {isRtl ? p.taglineAr : p.taglineEn}
            </p>

            {/* Tech chips */}
            <div className="mt-3 flex flex-wrap gap-1">
              {p.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-mono text-neutral-600"
                >
                  {tech}
                </span>
              ))}
              {p.techStack.length > 3 && (
                <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
                  +{p.techStack.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Shop Card Footer: Get / Demo links to inner product page */}
          <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
            <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>{isRtl ? p.deliveryDaysAr : p.deliveryDaysEn}</span>
            </div>

            <Link
              href={`/marketplace/${p.slug}`}
              className="inline-flex items-center gap-1 rounded-full bg-neutral-950 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-[#2057ff]"
            >
              <span>{isRtl ? "طلب ومعاينة" : "Get / Demo"}</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
