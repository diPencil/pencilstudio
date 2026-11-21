"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PencilButton } from "@/components/ui/pencil-button"
import { useLanguage } from "@/components/language-context"

interface CapabilityFrame {
  id: number
  titleEn: string
  titleAr: string
  categoryEn: string
  categoryAr: string
  descriptionEn: string
  descriptionAr: string
  image: string
  href: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
}

const capabilityFrames: CapabilityFrame[] = [
  {
    id: 1,
    titleEn: "Brand Identity & Design",
    titleAr: "الهوية البصرية والعلامة التجارية",
    categoryEn: "Branding",
    categoryAr: "هوية واستراتيجية",
    descriptionEn: "Complete brand ecosystems, typography systems, vector guidelines & design tokens.",
    descriptionAr: "بناء استراتيجيات الهوية، منظومات الخطوط، دلائل التصميم، والمطبوعات.",
    image: "/signature-capabilities/brand-identity-creative-design.jpg",
    href: "/services/brand-identity",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
  },
  {
    id: 2,
    titleEn: "Websites & Portals",
    titleAr: "المواقع والمنصات الرقمية",
    categoryEn: "Web Platforms",
    categoryAr: "منصات الويب",
    descriptionEn: "High-throughput Next.js platforms, headless CMS architecture, ultra-fast load speed.",
    descriptionAr: "مواقع فائقة السرعة، بوابات مؤسسية متقدمة، وأداء SEO قياسي.",
    image: "/signature-capabilities/websites-digital-platforms.jpg",
    href: "/services/websites-platforms",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
  },
  {
    id: 3,
    titleEn: "Mobile Apps & SaaS",
    titleAr: "تطبيقات الهواتف والـ SaaS",
    categoryEn: "Mobile & SaaS",
    categoryAr: "تطبيقات وبرمجيات",
    descriptionEn: "React Native & Swift native apps, cloud data synchronization, and enterprise backends.",
    descriptionAr: "تطبيقات iOS وأندرويد كاملة المواصفات مع مزامنة سحابية وقواعد بيانات فورية.",
    image: "/signature-capabilities/mobile-apps-saas-products.jpg",
    href: "/services/mobile-apps-saas",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
  },
  {
    id: 4,
    titleEn: "Business Dashboards & CRM",
    titleAr: "لوحات التحكم والأنظمة الإدارية",
    categoryEn: "Custom Systems",
    categoryAr: "أنظمة داخلية",
    descriptionEn: "Tailored operational dashboards, order workflows, booking engines, and analytics.",
    descriptionAr: "أنظمة تتبع العمليات، إدارة الحجوزات والعملاء، ولوحات التحكم التشغيلية.",
    image: "/signature-capabilities/business-systems-dashboards.jpg",
    href: "/services/business-systems",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
  },
  {
    id: 5,
    titleEn: "Marketing & Growth Engines",
    titleAr: "أنظمة النمو والتسويق الرقمي",
    categoryEn: "Growth & SEO",
    categoryAr: "محركات النمو",
    descriptionEn: "Conversion funnel optimization, telemetry tracking, technical SEO, and analytics pipelines.",
    descriptionAr: "أقماع البيع والتحويل، أدوات قياس رحلة العميل، وتحسين محركات البحث التقني.",
    image: "/signature-capabilities/marketing-growth-systems.jpg",
    href: "/services/marketing-growth",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
  },
  {
    id: 6,
    titleEn: "Cloud & DevOps Infrastructure",
    titleAr: "البنية السحابية وإدارة الخوادم",
    categoryEn: "Cloud & Infra",
    categoryAr: "سيرفرات وأمان",
    descriptionEn: "Zero-downtime serverless architecture, 24/7 telemetry monitoring, CDN caching & backups.",
    descriptionAr: "سيرفرات سحابية مرنة، حماية ومراقبة مستمرة على مدار الساعة، ونسخ احتياطي فوري.",
    image: "/signature-capabilities/hosting-cloud-tech-support.jpg",
    href: "/services/hosting-cloud",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
  },
]

function CapabilityImageCard({
  frame,
  isHovered,
  isRtl,
}: {
  frame: CapabilityFrame
  isHovered: boolean
  isRtl: boolean
}) {
  return (
    <Link
      href={frame.href}
      className="relative block w-full h-full overflow-hidden rounded-2xl bg-neutral-100 group border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all cursor-pointer select-none"
    >
      {/* High-quality static image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={frame.image}
          alt={isRtl ? frame.titleAr : frame.titleEn}
          fill
          unoptimized
          priority
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
      </div>

      {/* Dark scrim gradient for crisp text legibility */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-95" : "opacity-0 sm:opacity-0 max-sm:opacity-75"
        }`}
      />

      {/* Overlay Information */}
      <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between z-10">
        {/* Top Tag: Visible always */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white/95 backdrop-blur-md text-neutral-900 border border-white/60 shadow-xs group-hover:border-[#2057FF] group-hover:text-[#2057FF] transition-colors">
            {isRtl ? frame.categoryAr : frame.categoryEn}
          </span>
          <span
            className={`text-[11px] font-mono font-semibold transition-colors duration-300 ${
              isHovered
                ? "text-white drop-shadow-xs"
                : "text-neutral-900 max-sm:text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]"
            }`}
          >
            0{frame.id}
          </span>
        </div>

        {/* Bottom Title & Description - reveals completely on hover & accessible on mobile */}
        <div
          className={`space-y-1 transition-all duration-300 transform ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 sm:opacity-0 max-sm:opacity-100 translate-y-2 max-sm:translate-y-0"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-tight truncate drop-shadow-sm group-hover:text-blue-200 transition-colors">
              {isRtl ? frame.titleAr : frame.titleEn}
            </h4>
            <div
              className={`w-7 h-7 rounded-full bg-white text-neutral-900 group-hover:bg-[#2057FF] group-hover:text-white flex items-center justify-center transition-all shadow-md shrink-0 ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 sm:opacity-0 max-sm:opacity-100 scale-75 max-sm:scale-100"
              }`}
            >
              <ArrowUpRight size={14} className={isRtl ? "scale-x-[-1]" : ""} />
            </div>
          </div>

          {/* Reveal detailed description on expansion / hover */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isHovered ? "max-h-16 opacity-95 mt-1" : "max-h-0 sm:max-h-0 max-sm:max-h-0 opacity-0"
            }`}
          >
            <p className="text-[11px] text-white/90 line-clamp-2 leading-relaxed">
              {isRtl ? frame.descriptionAr : frame.descriptionEn}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function DynamicCapabilitiesSection() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"

  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize] = useState(6)
  const [gapSize] = useState(6)
  const showFrames = false
  const autoplayMode = "all" as const

  const getRowSizes = () => {
    if (hovered === null) {
      return "6fr 6fr"
    }
    return hovered.row === 0 ? "7.2fr 4.8fr" : "4.8fr 7.2fr"
  }

  const getColSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (col: number, row: number) => {
    const vertical = row === 0 ? "top" : "bottom"
    const horizontal = col === 0 ? "left" : col === 1 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  return (
    <section
      id="featured-products"
      className="relative w-full pt-16 pb-14 lg:pt-20 lg:pb-20 bg-[#FBFBFB] text-neutral-900 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#2057ff]/8 via-transparent to-transparent blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

          {/* Left Column: Editorial Content in Light Theme */}
          <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col justify-between">
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Editorial Large Typography matching original section */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-[110%]">
                {t("featured.title")}
                <br />
                <span className="italic font-light text-neutral-500">{t("featured.subtitle")}</span>
              </h2>

              {/* Description & Editorial dividers */}
              <div className="flex flex-col gap-4 text-neutral-600 text-sm font-normal leading-relaxed max-w-[340px]">
                <div className="h-px bg-neutral-200 w-full" />

                <p className="text-base text-neutral-800 leading-relaxed font-normal">
                  {t("featured.description")}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {isRtl
                    ? "نبتكر حلولاً رقمية متكاملة تجمع بين التصميم الممنهج، وبناء المنصات السحابية المرنة، وتطبيقات الهواتف الذكية مع أدوات الأتمتة والذكاء الاصطناعي لتمكين المؤسسات من التوسع المستدام."
                    : "From bespoke brand architectures and high-throughput web platforms to native mobile ecosystems and intelligent AI agents, we construct unified digital engines tailored to how your business scales."}
                </p>

                <p className="text-neutral-900 font-semibold text-xs tracking-wide">
                  {isRtl
                    ? "استكشف إمكاناتنا الست أثناء حركتها وتشغيلها المباشر."
                    : "Explore our six signature capabilities in motion."}
                </p>

                <div className="h-px bg-neutral-200 w-full" />
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 pt-4">
              <PencilButton
                href="/services"
                variant="primary"
                size="lg"
                hoverLabel={isRtl ? "استكشف الخدمات ←" : "Explore Services →"}
                className="w-full sm:w-auto min-w-[240px]"
              >
                {isRtl ? "استكشف كافة الخدمات" : "Explore All Services"}
              </PencilButton>
            </div>
          </div>

          {/* Right Column: Dynamic Frame Layout 2x3 (6 Cards) */}
          <div className="w-full lg:flex-grow flex flex-col justify-center">
            {/* 2x3 Interactive Dynamic Grid */}
            <div
              className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px]"
              style={{
                display: "grid",
                gridTemplateRows: getRowSizes(),
                gridTemplateColumns: getColSizes(),
                gap: `${gapSize}px`,
                transition: "grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1), grid-template-columns 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {capabilityFrames.map((frame, index) => {
                const row = Math.floor(index / 3)
                const col = index % 3
                const transformOrigin = getTransformOrigin(col, row)
                const isItemHovered = hovered?.row === row && hovered?.col === col

                return (
                  <motion.div
                    key={frame.id}
                    className="relative w-full h-full cursor-pointer"
                    style={{
                      transformOrigin,
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={() => setHovered({ row, col })}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <CapabilityImageCard
                      frame={frame}
                      isHovered={isItemHovered}
                      isRtl={isRtl}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

