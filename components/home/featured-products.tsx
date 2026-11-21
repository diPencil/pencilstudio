"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ViewportVideo } from "@/components/shared/media/viewport-video"
import { Reveal } from "@/components/shared/motion/reveal"
import { CardStack, CardStackItem } from "@/components/ui/card-stack"
import { useLanguage } from "@/components/language-context"
import { serviceSlugById } from "@/lib/services/services"
import { ArrowUpRight } from "lucide-react"
import { PencilButton } from "@/components/ui/pencil-button"

const featuredProducts = [
  {
    id: "1",
    name: "Brand Identity & Creative Design",
    price: "From $499.99",
    image: "/hero-section.jpg",
    video: "/signature-capabilities/brand-identity-creative-design.mp4",
    badge: "Core" as const,
    materials: ["Brand Strategy", "Visual Identity"],
    swatches: [
      { name: "Strategic Design", color: "#9CAF88" },
      { name: "System Logic", color: "#B87333" },
      { name: "Scale & Deploy", color: "#355E3B" },
    ],
    quickLookImages: [
      "/hero-section.jpg",
      "/hero-section.jpg",
    ],
    dimensions: "Full branding guidelines and assets.",
  },
  {
    id: "2",
    name: "Websites & Digital Platforms",
    price: "From $499.99",
    image: "/hero-section.jpg",
    video: "/signature-capabilities/websites-digital-platforms.mp4",
    badge: "Core" as const,
    materials: ["Next.js", "Headless CMS"],
    swatches: [
      { name: "Strategic Design", color: "#9CAF88" },
      { name: "System Logic", color: "#B87333" },
      { name: "Scale & Deploy", color: "#355E3B" },
    ],
    quickLookImages: [
      "/hero-section.jpg",
      "/hero-section.jpg",
    ],
    dimensions: "High performance & SEO optimized.",
  },
  {
    id: "3",
    name: "Mobile Apps & SaaS Products",
    price: "From $499.99",
    image: "/hero-section.jpg",
    video: "/signature-capabilities/mobile-apps-saas-products.mp4",
    badge: "Elite" as const,
    materials: ["React Native", "APIs"],
    swatches: [
      { name: "Strategic Design", color: "#9CAF88" },
      { name: "System Logic", color: "#B87333" },
      { name: "Scale & Deploy", color: "#355E3B" },
    ],
    quickLookImages: [
      "/hero-section.jpg",
      "/hero-section.jpg",
    ],
    dimensions: "Custom apps for iOS & Android.",
  },
  {
    id: "4",
    name: "Business Systems & Dashboards",
    price: "From $599.99",
    image: "/business-sectors/crm-automation.jpg",
    video: "/signature-capabilities/business-systems-dashboards.mp4",
    badge: "Core" as const,
    materials: ["Dashboards", "Bookings"],
    swatches: [
      { name: "Strategic Design", color: "#9CAF88" },
      { name: "System Logic", color: "#B87333" },
      { name: "Scale & Deploy", color: "#355E3B" },
    ],
    quickLookImages: [
      "/business-sectors/crm-automation.jpg",
      "/business-sectors/crm-automation.jpg",
    ],
    dimensions: "Intelligent workflows & data models.",
  },
  {
    id: "5",
    name: "Marketing & Growth Systems",
    price: "From $299.99",
    image: "/hero-section.jpg",
    video: "/signature-capabilities/marketing-growth-systems.mp4",
    badge: "Core" as const,
    materials: ["Conversion Opt", "SEO Setup"],
    swatches: [
      { name: "Strategic Design", color: "#9CAF88" },
      { name: "System Logic", color: "#B87333" },
      { name: "Scale & Deploy", color: "#355E3B" },
    ],
    quickLookImages: [
      "/hero-section.jpg",
      "/hero-section.jpg",
    ],
    dimensions: "Funnels & acquiring channels.",
  },
  {
    id: "6",
    name: "Hosting, Cloud & Tech Support",
    price: "From $14.99/mo",
    image: "/hero-section.jpg",
    video: "/signature-capabilities/hosting-cloud-tech-support.mp4",
    badge: "Elite" as const,
    materials: ["AWS Config", "24/7 Monitoring"],
    swatches: [
      { name: "Strategic Design", color: "#9CAF88" },
      { name: "System Logic", color: "#B87333" },
      { name: "Scale & Deploy", color: "#355E3B" },
    ],
    quickLookImages: [
      "/hero-section.jpg",
      "/hero-section.jpg",
    ],
    dimensions: "Zero-downtime serverless setups.",
  },
]

export function FeaturedProducts() {
  const { t, locale } = useLanguage()
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const isRtl = locale === "ar"

  const handleOpenPage = (product?: { id: string } | null) => {
    if (!product?.id) return
    const slug = serviceSlugById[product.id]
    if (slug) router.push(`/services/${slug}`)
  }

  // Dynamically map translations to products
  const localizedProducts = featuredProducts.map((product) => {
    let name: string = product.name
    let materials: string[] = product.materials
    let dimensions: string = product.dimensions
    let badge: string = product.badge

    const defaultSwatches = [
      { name: t("swatch.design"), color: "#9CAF88" },
      { name: t("swatch.logic"), color: "#B87333" },
      { name: t("swatch.scale"), color: "#355E3B" },
    ]

    if (product.id === "1") {
      name = t("product.brand.name")
      materials = [t("swatch.design"), t("swatch.logic")]
      dimensions = t("product.brand.dimensions")
      badge = t("featured.new")
    } else if (product.id === "2") {
      name = t("product.web.name")
      materials = [t("swatch.design"), t("swatch.scale")]
      dimensions = t("product.web.dimensions")
      badge = t("featured.new")
    } else if (product.id === "3") {
      name = t("product.app.name")
      materials = [t("swatch.logic"), t("swatch.scale")]
      dimensions = t("product.app.dimensions")
      badge = t("featured.limited")
    } else if (product.id === "4") {
      name = t("product.systems.name")
      materials = [t("swatch.logic"), t("swatch.scale")]
      dimensions = t("product.systems.dimensions")
      badge = t("featured.new")
    } else if (product.id === "5") {
      name = t("product.marketing.name")
      materials = [t("swatch.design"), t("swatch.logic")]
      dimensions = t("product.marketing.dimensions")
      badge = t("featured.new")
    } else if (product.id === "6") {
      name = t("product.hosting.name")
      materials = [t("swatch.scale")]
      dimensions = t("product.hosting.dimensions")
      badge = t("featured.limited")
    }

    return {
      ...product,
      name,
      materials,
      dimensions,
      badge,
      swatches: defaultSwatches,
    }
  })

  const cardStackItems: CardStackItem[] = localizedProducts.map((product) => ({
    id: product.id,
    title: product.name,
    description: product.dimensions,
    imageSrc: product.image,
    videoSrc: product.video,
    tag: product.badge,
    rawProduct: product,
  }))

  const activeProduct = localizedProducts[activeIndex] ?? localizedProducts[0]
  const activeSlug = activeProduct ? serviceSlugById[activeProduct.id] : undefined

  const renderServiceCard = (item: CardStackItem, state: { active: boolean }) => (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 overflow-hidden">
        {item.videoSrc ? (
          <ViewportVideo src={`${item.videoSrc}#t=0.001`} active={state.active} preloadPreview className="h-full w-full object-cover pointer-events-none" />
        ) : item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover"
            draggable={false}
            sizes="(max-width: 768px) 100vw, 520px"
          />
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      {item.tag && (
        <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md text-white border border-white/20">
          {item.tag}
        </div>
      )}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-start text-white">
        <div className="truncate text-xl font-bold tracking-tight">{item.title}</div>
        {item.description ? (
          <div className="mt-1.5 line-clamp-2 text-xs text-white/80 leading-relaxed font-medium">
            {item.description}
          </div>
        ) : null}
        {state.active && activeSlug && (
          <div className="pointer-events-auto mt-4 w-fit">
            <PencilButton
              onClick={(e) => {
                e.stopPropagation()
                handleOpenPage(item.rawProduct)
              }}
              variant="primary"
              size="sm"
              hoverLabel={isRtl ? "تفاصيل الخدمة ←" : "Explore service →"}
            >
              <span>{isRtl ? "افتح صفحة الخدمة" : "Open service page"}</span>
            </PencilButton>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section className="py-20 lg:py-32 overflow-hidden" id="featured-products">
      <div className="container-custom">
        <Reveal>
          <div className="text-start mb-10">
            <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl">
              {t("featured.title")} <span className="italic font-light">{t("featured.subtitle")}</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl">
              {t("featured.description")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="w-full max-w-3xl mx-auto mt-6">
            <CardStack
              items={cardStackItems}
              initialIndex={0}
              autoAdvance
              intervalMs={3000}
              pauseOnHover
              showDots
              onChangeIndex={(index) => setActiveIndex(index)}
              renderCard={renderServiceCard}
            />
            <div className="mt-5 flex flex-col items-center gap-2 text-center">
              <PencilButton
                onClick={() => activeProduct && handleOpenPage(activeProduct)}
                variant="primary"
                size="md"
                hoverLabel={isRtl ? "تفاصيل الخدمة ←" : "Open service →"}
              >
                <span>{isRtl ? `افتح صفحة: ${activeProduct?.name}` : `Open page: ${activeProduct?.name}`}</span>
              </PencilButton>
              <p className="text-xs font-semibold text-neutral-500">
                {isRtl ? "حرّك البطاقات أو انقر بطاقة جانبية لإحضارها للوسط. فتح الخدمة من الزر فقط." : "Drag the cards or click a side card to bring it center. Use the button only to open the service."}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-8 text-center">
            <PencilButton
              onClick={() => router.push("/services")}
              variant="outline"
              size="md"
              hoverLabel={isRtl ? "تصفح كل الخدمات ←" : "Browse all services →"}
            >
              <span>{t("featured.quickLook") === "View Scope" ? "View all services" : "عرض كل الخدمات"}</span>
            </PencilButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
