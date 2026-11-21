"use client"

import { useRef } from "react"
import Image, { type StaticImageData } from "next/image"
import tourismBookingImage from "@/public/business-sectors/tourism-booking.jpg"
import restaurantPosImage from "@/public/business-sectors/restaurant-pos.jpg"
import realEstateImage from "@/public/business-sectors/real-estate.jpg"
import ecommerceImage from "@/public/business-sectors/e-commerce.jpg"
import educationLmsImage from "@/public/business-sectors/education-lms.jpg"
import corporateWebsitesImage from "@/public/business-sectors/corporate-websites.jpg"
import medicalClinicsImage from "@/public/business-sectors/medical-clinics.jpg"
import crmAutomationImage from "@/public/business-sectors/crm-automation.jpg"
import { ViewportVideo } from "@/components/shared/media/viewport-video"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "@/components/shared/motion/reveal"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"


type Collection = {
  id: string
  name: string
  video: string
  image?: string | StaticImageData
  count: string
  subtitle: string
  subtitleAr: string
}

const collections: Collection[] = [
  {
    id: "restaurants-pos",
    name: "RESTAURANTS & POS",
    image: restaurantPosImage,
    video: "/business-sectors/restaurant-pos.mp4",
    count: "15 solutions",
    subtitle: "Connect menus, orders, and daily operations.",
    subtitleAr: "اربط القوائم والطلبات والعمليات اليومية.",
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE",
    image: ecommerceImage,
    video: "/business-sectors/e-commerce.mp4",
    count: "30 solutions",
    subtitle: "Create shopping experiences that convert.",
    subtitleAr: "اصنع تجربة شراء واضحة ومؤثرة.",
  },
  {
    id: "tourism-booking",
    name: "TOURISM & BOOKING",
    image: tourismBookingImage,
    video: "/business-sectors/tourism-booking.mp4",
    count: "12 solutions",
    subtitle: "Plan, book, and manage trips with clarity.",
    subtitleAr: "نظّم الرحلات والحجوزات بوضوح.",
  },
  {
    id: "real-estate",
    name: "REAL ESTATE",
    image: realEstateImage,
    video: "/business-sectors/real-estate.mp4",
    count: "9 solutions",
    subtitle: "Turn property interest into organized leads.",
    subtitleAr: "حوّل اهتمام العملاء إلى فرص منظمة.",
  },
  {
    id: "medical-clinics",
    name: "MEDICAL & CLINICS",
    image: medicalClinicsImage,
    video: "/business-sectors/medical-clinics.mp4",
    count: "8 solutions",
    subtitle: "Make appointments and patient flow easier.",
    subtitleAr: "اجعل الحجز وتجربة المريض أسهل.",
  },
  {
    id: "education-lms",
    name: "EDUCATION & LMS",
    image: educationLmsImage,
    video: "/business-sectors/education-lms.mp4",
    count: "11 solutions",
    subtitle: "Build learning journeys that stay organized.",
    subtitleAr: "ابنِ رحلات تعليمية منظمة وواضحة.",
  },
  {
    id: "corporate-websites",
    name: "CORPORATE WEBSITES",
    image: corporateWebsitesImage,
    video: "/business-sectors/corporate-websites.mp4",
    count: "24 solutions",
    subtitle: "Present your company with structure and trust.",
    subtitleAr: "اعرض شركتك بثقة وهيكل واضح.",
  },
  {
    id: "crm-automation",
    name: "CRM & AUTOMATION",
    image: crmAutomationImage,
    video: "/business-sectors/crm-automation.mp4",
    count: "14 solutions",
    subtitle: "Manage conversations, leads, and follow-ups.",
    subtitleAr: "نظّم المحادثات والعملاء والمتابعات.",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { t, locale } = useLanguage()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -100])
  const arX = useTransform(scrollYProgress, [0, 1], [0, 100])
  const x = locale === "ar" ? arX : rawX

  const itemWidth = 320
  const totalWidth = collections.length * (itemWidth + 32) - 32
  const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48)

  const localizedCollections = collections.map((col) => {
    const localizedName =
      col.id === "tourism-booking"
        ? t("collections.tourism")
        : col.id === "real-estate"
          ? t("collections.realestate")
          : col.id === "restaurants-pos"
            ? t("collections.restaurants")
            : col.id === "medical-clinics"
              ? t("collections.medical")
              : col.id === "education-lms"
                ? t("collections.education")
                : col.id === "corporate-websites"
                  ? t("collections.corporate")
                  : col.id === "ecommerce"
                    ? t("collections.ecommerce")
                    : col.id === "crm-automation"
                      ? t("collections.crm")
                      : col.name

    const localizedCount =
      col.id === "tourism-booking"
        ? `12 ${t("collections.pieces")}`
        : col.id === "real-estate"
          ? `9 ${t("collections.pieces")}`
          : col.id === "restaurants-pos"
            ? `15 ${t("collections.pieces")}`
            : col.id === "medical-clinics"
              ? `8 ${t("collections.pieces")}`
              : col.id === "education-lms"
                ? `11 ${t("collections.pieces")}`
                : col.id === "corporate-websites"
                  ? `24 ${t("collections.pieces")}`
                  : col.id === "ecommerce"
                    ? `30 ${t("collections.pieces")}`
                    : col.id === "crm-automation"
                      ? `14 ${t("collections.pieces")}`
                      : col.count

    return { ...col, name: localizedName, count: localizedCount }
  })

  return (
    <section id="business-sectors" ref={containerRef} className="overflow-hidden py-20 lg:py-32 scroll-mt-24">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className={cn("mb-4 text-neutral-900 text-4xl lg:text-6xl font-normal", locale === "ar" ? "tracking-normal" : "")}>
              {locale === "ar" ? (
                <>
                  القطاعات <span className="font-light italic text-neutral-500">التجارية</span>
                </>
              ) : (
                <>
                  Business <span className="font-light italic text-neutral-500">Sectors</span>
                </>
              )}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              {t("collections.description")}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: locale === "ar" ? 0 : -maxDrag,
            right: locale === "ar" ? maxDrag : 0,
          }}
          dragElastic={0.1}
        >
          {localizedCollections.map((collection) => (
            <motion.div
              key={collection.id}
              className="group w-80 flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-950">
                <div className="relative h-full w-full">
                  {collection.image ? (
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      sizes="320px"
                      loading="eager"
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-105 pointer-events-none"
                    />
                  ) : (
                    <ViewportVideo src={`${collection.video}#t=0.001`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 pointer-events-none" />
                  )}
                </div>

                <div className={cn("absolute top-5 rounded-full border border-white/20 bg-black/35 px-4 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md", locale === "ar" ? "right-5" : "left-5")}>
                  {locale === "ar" ? (
                    <>
                      <span dir="ltr" className="inline-block">{collection.count.split(" ")[0]}</span>{" "}
                      {collection.count.split(" ").slice(1).join(" ")}
                    </>
                  ) : (
                    <span dir="ltr" className="inline-block">
                      {collection.count}
                    </span>
                  )}
                </div>

                {/* Title badge & hover-only description board */}
                <div
                  className={cn(
                    "absolute bottom-6 left-6 right-6 z-20 flex flex-col items-start gap-2",
                    locale === "ar" ? "items-start text-right" : "items-start text-left"
                  )}
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  {/* Title Badge / Board */}
                  <h3
                    className={cn(
                      "inline-flex items-center rounded-full px-3.5 py-1 text-[15px] sm:text-[16px] font-bold tracking-tight text-white shadow-lg border border-white/20 transition-transform duration-300 group-hover:scale-105",
                      collection.id === "restaurants-pos"
                        ? "bg-red-600"
                        : collection.id === "ecommerce"
                          ? "bg-emerald-600"
                          : "bg-[#2057ff]"
                    )}
                  >
                    {collection.name}
                  </h3>

                  {/* Description Board - Only Visible on Hover in the Title's Board Color */}
                  <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-300 ease-out w-full pointer-events-none group-hover:pointer-events-auto">
                    <div className="overflow-hidden">
                      <div
                        className={cn(
                          "rounded-2xl p-3.5 text-white shadow-xl border border-white/20 backdrop-blur-md",
                          collection.id === "restaurants-pos"
                            ? "bg-red-600/95"
                            : collection.id === "ecommerce"
                              ? "bg-emerald-600/95"
                              : "bg-[#2057ff]/95"
                        )}
                      >
                        <p className="text-xs sm:text-sm leading-relaxed text-white font-medium">
                          {locale === "ar" ? collection.subtitleAr : collection.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-500">{t("collections.drag")}</p>
      </div>
    </section>
  )
}
