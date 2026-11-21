"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PencilButton } from "@/components/ui/pencil-button"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"

interface EcosystemCard {
  id: string
  badgeEn: string
  badgeAr: string
  descEn: string
  descAr: string
  href: string
  baseImage: string
  hoverImage: string
}

const CARDS: EcosystemCard[] = [
  {
    id: "pencil-company",
    badgeEn: "PENCIL COMPANY",
    badgeAr: "شركة بنسل",
    descEn:
      "Architecting robust corporate systems, global brand equity, and sustainable technological ventures built for long-term category leadership.",
    descAr:
      "تأسيس المنظومات المؤسسية، بناء القيمة الاستراتيجية للعلامات الكبرى، وتوسيع نطاق الأعمال نحو آفاق مستدامة.",
    href: "/company",
    baseImage: "/explore-pencil/pencil-company.jpg",
    hoverImage: "/explore-pencil/pencil-company-hover.jpg",
  },
  {
    id: "pencil-studio",
    badgeEn: "PENCIL STUDIO",
    badgeAr: "بنسل ستوديو",
    descEn:
      "Where high-aesthetic brand direction meets precision software engineering, crafting immersive digital platforms and bespoke experiences.",
    descAr:
      "حيث يلتقي الإخراج الفني الرفيع مع البرمجة فائقة الدقة لصناعة منصات رقمية وهويات بصرية تخطف الأنظار وتصنع الفارق.",
    href: "/work",
    baseImage: "/explore-pencil/pencil-studio.jpg",
    hoverImage: "/explore-pencil/pencil-studio-hover.jpg",
  },
  {
    id: "superfeliz-ai",
    badgeEn: "SUPERFELIZ AI",
    badgeAr: "سوبر فيليز AI",
    descEn:
      "Next-gen autonomous AI agents orchestrating sales, customer intelligence, complex workflows, and continuous operations 24/7.",
    descAr:
      "جيل جديد من وكلاء الذكاء الاصطناعي الذاتيين لقيادة خدمة العملاء، تحليل العمليات، وأتمتة المهام اليومية على مدار الساعة.",
    href: "/superfeliz",
    baseImage: "/explore-pencil/superfeliz-ai.jpg",
    hoverImage: "/explore-pencil/superfeliz-ai-hover.jpg",
  },
  {
    id: "marketplace",
    badgeEn: "MARKETPLACE",
    badgeAr: "ماركت بليس بنسل",
    descEn:
      "Explore ready-to-deploy platforms, e-commerce engines, modular business systems, and ultra-fast cloud hosting infrastructure.",
    descAr:
      "باقة متكاملة من الحلول البرمجية الجاهزة للإطلاق الفوري، أنظمة التجارة المتقدمة، وبنية تحتية سحابية موثوقة وسريعة.",
    href: "/marketplace",
    baseImage: "/explore-pencil/marketplace.jpg",
    hoverImage: "/explore-pencil/marketplace-hover.jpg",
  },
]

export function ExplorePencilSection() {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"
  const [activeId, setActiveId] = React.useState<string>("pencil-company")
  const [hoveredCardId, setHoveredCardId] = React.useState<string | null>(null)
  const isInteractingRef = React.useRef(false)

  // Auto-play infinite rotation loop across cards
  React.useEffect(() => {
    const timer = setInterval(() => {
      // Pause auto-rotation when user is hovering or interacting with cards
      if (isInteractingRef.current) return

      setActiveId((currentId) => {
        const currentIndex = CARDS.findIndex((c) => c.id === currentId)
        const nextIndex = (currentIndex + 1) % CARDS.length
        return CARDS[nextIndex].id
      })
    }, 3800) // 3.8 seconds per card

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="explore-pencil"
      className="relative w-full overflow-hidden border-t border-neutral-200/90 bg-[#FAFAFA] py-12 md:py-16"
    >
      <div className="container-custom">
        {/* Header: Title on start, Description on end (2 columns layout) */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          {/* Column 1: Title */}
          <div className="text-start">
            <h2
              className={cn(
                "text-3xl font-normal text-neutral-900 md:text-5xl lg:text-6xl",
                isRtl ? "tracking-normal" : "tracking-tight"
              )}
            >
              {isRtl ? (
                <>
                  استكشف عوالم <span className="font-light italic text-neutral-500">بنسل</span>
                </>
              ) : (
                <>
                  Explore <span className="font-light italic text-neutral-500">Pencil</span>
                </>
              )}
            </h2>
          </div>

          {/* Column 2: Single Description Block */}
          <div className="text-start lg:max-w-xl">
            <p className="text-base leading-relaxed text-neutral-500 md:text-lg">
              {isRtl
                ? "أربعة ركائز متكاملة تجمع بين الرؤية المؤسسية، الإبداع الرقمي، الذكاء الاصطناعي، والحلول الجاهزة للإطلاق."
                : "Four interconnected pillars uniting enterprise vision, bespoke craft, autonomous intelligence, and turnkey commerce."}
            </p>
          </div>
        </div>

        {/* Interactive Expandable Accordion Cards */}
        <div
          className="flex flex-col gap-4 md:gap-5 lg:gap-6 md:h-[390px] lg:h-[420px] md:flex-row"
          dir={isRtl ? "rtl" : "ltr"}
          onMouseEnter={() => {
            isInteractingRef.current = true
          }}
          onMouseLeave={() => {
            isInteractingRef.current = false
            setHoveredCardId(null)
          }}
        >
          {CARDS.map((card, index) => {
            const isHovered = hoveredCardId === card.id
            const isActive = activeId === card.id

            // Dual image display:
            // When the card is active (expanded) or hovered, show the wide hover image
            const showHoverImage = isActive || isHovered

            return (
              <div
                key={card.id}
                onMouseEnter={() => {
                  isInteractingRef.current = true
                  setHoveredCardId(card.id)
                  setActiveId(card.id)
                }}
                onMouseLeave={() => {
                  setHoveredCardId(null)
                }}
                onFocus={() => {
                  isInteractingRef.current = true
                  setActiveId(card.id)
                }}
                onBlur={() => {
                  isInteractingRef.current = false
                }}
                tabIndex={0}
                role="group"
                aria-expanded={isActive}
                className={cn(
                  "group relative min-h-[260px] cursor-pointer overflow-hidden rounded-[24px] md:min-h-0",
                  "border border-neutral-900/10 shadow-lg md:shadow-md",
                  "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  // Flex-grow behavior on desktop
                  isActive
                    ? "md:flex-[2.6] lg:flex-[2.8]"
                    : "md:flex-1 hover:md:flex-[1.15]"
                )}
              >
                {/* 1. Base Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.baseImage}
                    alt={isRtl ? card.badgeAr : card.badgeEn}
                    fill
                    unoptimized
                    priority
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out",
                      isHovered ? "scale-105" : "scale-100"
                    )}
                  />
                </div>

                {/* 2. Hover Image (Reveals smoothly on mouse touch) */}
                <div
                  className={cn(
                    "absolute inset-0 z-[1] transition-opacity duration-700 ease-out",
                    showHoverImage ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden={!showHoverImage}
                >
                  <Image
                    src={card.hoverImage}
                    alt={`${isRtl ? card.badgeAr : card.badgeEn} Hover`}
                    fill
                    unoptimized
                    priority
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out",
                      showHoverImage ? "scale-105" : "scale-100"
                    )}
                  />
                </div>

                {/* Card Inner Content */}
                <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 md:p-6">
                  {/* Top Bar: Clean Badge with Name only (no icon) + Action Arrow */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold tracking-wider text-white backdrop-blur-md">
                      {isRtl ? card.badgeAr : card.badgeEn}
                    </span>

                    <Link
                      href={card.href}
                      aria-label={isRtl ? card.badgeAr : card.badgeEn}
                      className={cn(
                        "flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full",
                        "border border-white/20 bg-white/10 text-white backdrop-blur-md",
                        "transition-all duration-300",
                        "group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:shadow-lg"
                      )}
                    >
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isRtl
                            ? "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 rotate-[-90deg]"
                            : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        )}
                      />
                    </Link>
                  </div>

                  {/* Bottom Information (Visible ONLY on active/hover) */}
                  <div
                    className={cn(
                      "mt-auto pt-3 transition-all duration-500 ease-out",
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    )}
                  >
                    <p className="max-w-md text-xs md:text-sm leading-relaxed text-white line-clamp-3 md:line-clamp-4">
                      {isRtl ? card.descAr : card.descEn}
                    </p>

                    <div className="mt-3">
                      <PencilButton
                        href={card.href}
                        variant="white"
                        size="sm"
                        iconColor="original"
                        hoverLabel={isRtl ? "اكتشف ←" : "Explore →"}
                        className="shadow-md"
                      >
                        {isRtl ? "اكتشف المزيد" : "Explore More"}
                      </PencilButton>
                    </div>
                  </div>
                </div>

                {/* Subtle border glow on active */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-[24px] border transition-opacity duration-500",
                    isActive ? "border-white/30 opacity-100" : "border-transparent opacity-0"
                  )}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
