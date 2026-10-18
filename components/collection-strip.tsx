"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"


type Collection = {
  id: string
  name: string
  image: string
  count: string
  subtitle: string
  subtitleAr: string
}

const collections: Collection[] = [
  {
    id: "tourism-booking",
    name: "TOURISM & BOOKING",
    image: "/business-sectors/tourism-booking.jpg",
    count: "12 solutions",
    subtitle: "Plan, book, and manage trips with clarity.",
    subtitleAr: "نظّم الرحلات والحجوزات بوضوح.",
  },
  {
    id: "real-estate",
    name: "REAL ESTATE",
    image: "/business-sectors/real-estate.jpg",
    count: "9 solutions",
    subtitle: "Turn property interest into organized leads.",
    subtitleAr: "حوّل اهتمام العملاء إلى فرص منظمة.",
  },
  {
    id: "restaurants-pos",
    name: "RESTAURANTS & POS",
    image: "/business-sectors/restaurant-pos.jpg",
    count: "15 solutions",
    subtitle: "Connect menus, orders, and daily operations.",
    subtitleAr: "اربط القوائم والطلبات والعمليات اليومية.",
  },
  {
    id: "medical-clinics",
    name: "MEDICAL & CLINICS",
    image: "/business-sectors/medical-clinics.jpg",
    count: "8 solutions",
    subtitle: "Make appointments and patient flow easier.",
    subtitleAr: "اجعل الحجز وتجربة المريض أسهل.",
  },
  {
    id: "education-lms",
    name: "EDUCATION & LMS",
    image: "/business-sectors/education-lms.jpg",
    count: "11 solutions",
    subtitle: "Build learning journeys that stay organized.",
    subtitleAr: "ابنِ رحلات تعليمية منظمة وواضحة.",
  },
  {
    id: "corporate-websites",
    name: "CORPORATE WEBSITES",
    image: "/business-sectors/corporate-websites.jpg",
    count: "24 solutions",
    subtitle: "Present your company with structure and trust.",
    subtitleAr: "اعرض شركتك بثقة وهيكل واضح.",
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE",
    image: "/business-sectors/e-commerce.jpg",
    count: "30 solutions",
    subtitle: "Create shopping experiences that convert.",
    subtitleAr: "اصنع تجربة شراء واضحة ومؤثرة.",
  },
  {
    id: "crm-automation",
    name: "CRM & AUTOMATION",
    image: "/business-sectors/crm-automation.jpg",
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
              <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl">
                <motion.div
                  className="relative h-full w-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={collection.image || "/hero-section.jpg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/65 group-hover:via-black/25" />
                </motion.div>

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

                <motion.div
                  className={cn(
                    "absolute bottom-7 left-7 right-7 z-20 text-white",
                    locale === "ar" ? "text-right" : "text-left"
                  )}
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  initial={{ opacity: 0.92, y: 0 }}
                  whileHover={{ opacity: 1, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {collection.name}
                  </h3>
                  <p className="mt-2 max-w-[90%] text-sm leading-relaxed text-white/80 md:text-base">
                    {locale === "ar" ? collection.subtitleAr : collection.subtitle}
                  </p>
                </motion.div>
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
