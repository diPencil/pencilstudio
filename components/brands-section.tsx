"use client"

import * as React from "react"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"
import Image from "next/image"

const brandsLogos = [
  { src: "/brands/Altayarvip.png", alt: "Altayarvip" },
  { src: "/brands/Arkan Company.png", alt: "Arkan Company" },
  { src: "/brands/DirectTrip.png", alt: "DirectTrip" },
  { src: "/brands/Esay To Buy 24H.png", alt: "Esay To Buy 24H" },
  { src: "/brands/HainanSoliman.png", alt: "HainanSoliman" },
  { src: "/brands/Hijaby Store.png", alt: "Hijaby Store" },
  { src: "/brands/Horus IT Co..png", alt: "Horus IT Co." },
  { src: "/brands/KyrelloTours.png", alt: "KyrelloTours" },
  { src: "/brands/LAN WAVE IT.png", alt: "LAN WAVE IT" },
  { src: "/brands/MAWHBAH IT.png", alt: "MAWHBAH IT" },
  { src: "/brands/Magic Company.png", alt: "Magic Company" },
  { src: "/brands/MaximumPower.png", alt: "MaximumPower" },
  { src: "/brands/MobiLand.png", alt: "MobiLand" },
  { src: "/brands/MusicLAP.png", alt: "MusicLAP" },
  { src: "/brands/NEXRO.png", alt: "NEXRO" },
  { src: "/brands/Old Brand.png", alt: "Old Brand" },
  { src: "/brands/Optimus Design.png", alt: "Optimus Design" },
  { src: "/brands/PinChat.png", alt: "PinChat" },
  { src: "/brands/Platinum Safes.png", alt: "Platinum Safes" },
  { src: "/brands/STS Travel.png", alt: "STS Travel" },
  { src: "/brands/Safe Guard.png", alt: "Safe Guard" },
  { src: "/brands/Sataear Co..png", alt: "Sataear Co." },
  { src: "/brands/Sphinx Academy.png", alt: "Sphinx Academy" },
  { src: "/brands/SuperCard.png", alt: "SuperCard" },
  { src: "/brands/Swipebay.png", alt: "Swipebay" },
  { src: "/brands/Taxidia Hotels.png", alt: "Taxidia Hotels" },
  { src: "/brands/Tea50.png", alt: "Tea50" },
  { src: "/brands/TelliTravel.png", alt: "TelliTravel" },
  { src: "/brands/Trivaway.png", alt: "Trivaway" },
  { src: "/brands/UmrahEasy.png", alt: "UmrahEasy" },
  { src: "/brands/Withinsky Co..png", alt: "Withinsky Co." },
  { src: "/brands/Yaahala.png", alt: "Yaahala" },
  { src: "/brands/Yourcat Shop.png", alt: "Yourcat Shop" },
  { src: "/brands/ZAD SHOPPING.png", alt: "ZAD SHOPPING" },
  { src: "/brands/alazab.png", alt: "Alazab" },
  { src: "/brands/albkht.webp", alt: "Albkht" },
  { src: "/brands/aqarawii.png", alt: "Aqarawii" },
  { src: "/brands/cenosky.png", alt: "Cenosky" },
  { src: "/brands/coreschool.png", alt: "Coreschool" },
  { src: "/brands/directxml.png", alt: "Directxml" },
  { src: "/brands/gotravel.png", alt: "Gotravel" },
  { src: "/brands/legendary management.png", alt: "Legendary Management" },
  { src: "/brands/logoBRC1.png", alt: "LogoBRC1" },
  { src: "/brands/nexit.png", alt: "Nexit" },
  { src: "/brands/orderscanlogo.png", alt: "Orderscanlogo" },
  { src: "/brands/partmaster.png", alt: "Partmaster" },
  { src: "/brands/pencil.png", alt: "Pencil" },
  { src: "/brands/pinkway.png", alt: "Pinkway" },
  { src: "/brands/sabatours.png", alt: "Sabatours" },
  { src: "/brands/shopzawy.png", alt: "Shopzawy" },
  { src: "/brands/supportplus.png", alt: "Supportplus" },
  { src: "/brands/tripia.png", alt: "Tripia" },
  { src: "/brands/vivaegypt.png", alt: "Vivaegypt" },
  { src: "/brands/zatlogo.png", alt: "Zatlogo" },
]

export function BrandsSection() {
  const { t, locale } = useLanguage()

  const itemsPerRow = Math.ceil(brandsLogos.length / 3)
  const row1 = brandsLogos.slice(0, itemsPerRow)
  const row2 = brandsLogos.slice(itemsPerRow, itemsPerRow * 2)
  const row3 = brandsLogos.slice(itemsPerRow * 2)

  const SliderRow = ({
    items,
    direction,
    speed = "45s",
  }: {
    items: typeof brandsLogos
    direction: "ltr" | "rtl"
    speed?: string
  }) => {
    const doubledItems = [...items, ...items]
    return (
      <div
        className="relative flex w-full select-none overflow-hidden py-4 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
        }}
      >
        <div
          className={cn(
            "pointer-events-auto flex min-w-full shrink-0 items-center justify-around gap-14",
            direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl"
          )}
          style={{ animationDuration: speed }}
        >
          {doubledItems.map((logo, idx) => (
            <div
              key={idx}
              className="relative flex h-8 w-28 flex-shrink-0 items-center justify-center filter grayscale contrast-[0.8] opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="112px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="w-full overflow-x-clip border-t border-neutral-200 bg-white py-16 md:py-24" id="brands">
      <div className="container-custom text-center">
        <span className={cn("mb-4 inline-block rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-[10px] font-bold text-neutral-800", locale === "ar" ? "tracking-normal" : "uppercase tracking-wider")}>
          {t("brands.badge")}
        </span>
        <h2 className={cn("mb-4 text-neutral-900 text-4xl lg:text-6xl font-normal", locale === "ar" ? "tracking-normal" : "leading-tight")}>
          {locale === "ar" ? (
            <>
              بُنيت لعلامات <span className="font-light italic text-neutral-500">تتحرك للأمام</span>
            </>
          ) : (
            <>
              Built for brands <span className="font-light italic text-neutral-500">that move forward</span>
            </>
          )}
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-lg text-neutral-500">
          {t("brands.desc")}
        </p>

        <div className="mx-auto flex w-full flex-col gap-2 border-y border-neutral-200/80 bg-white py-6" dir="ltr">
          <SliderRow items={row1} direction={locale === "ar" ? "rtl" : "ltr"} speed="40s" />
          <SliderRow items={row2} direction={locale === "ar" ? "ltr" : "rtl"} speed="45s" />
          <SliderRow items={row3} direction={locale === "ar" ? "rtl" : "ltr"} speed="38s" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marqueeHorizontalLtr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes marqueeHorizontalRtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-ltr {
          animation: marqueeHorizontalLtr linear infinite;
        }
        .animate-marquee-rtl {
          animation: marqueeHorizontalRtl linear infinite;
        }
        .animate-marquee-ltr:hover,
        .animate-marquee-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
