"use client"

import { useEffect, useMemo, useState } from "react"
import { CalendarCheck, LayoutDashboard, MessageSquareText } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage, type TranslationKey } from "@/components/language-context"
import { Reveal } from "./reveal"
import { LazyDotLottie } from "@/components/lazy-dot-lottie"

type FeatureCard = {
  titleKey: TranslationKey
  descKey: TranslationKey
}

export function BusinessFeaturesSection() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cards = useMemo<FeatureCard[]>(
    () => [
      {
        titleKey: "business.features.card1.title",
        descKey: "business.features.card1.desc",
      },
      {
        titleKey: "business.features.card2.title",
        descKey: "business.features.card2.desc",
      },
      {
        titleKey: "business.features.card3.title",
        descKey: "business.features.card3.desc",
      },
    ],
    [],
  )

  const orderedCards = isRtl ? [...cards].reverse() : cards

  return (
    <section className="py-20 lg:py-28" id="business-features">
      <div className="container-custom">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <span className={cn("inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-[10px] font-semibold text-neutral-600 shadow-sm", locale === "ar" ? "tracking-normal" : "uppercase tracking-[0.2em]")}>
              {t("business.features.badge")}
            </span>
            <h2 className={cn("mt-4 text-neutral-900 mb-4 text-4xl lg:text-6xl font-normal", locale === "ar" ? "tracking-normal" : "tracking-tight")}>
              {locale === "ar" ? (
                <>
                  أنظمة مصممة <span className="italic font-light text-neutral-500">للعمل الحقيقي</span>
                </>
              ) : (
                <>
                  Systems Built <span className="italic font-light text-neutral-500">for Real Work</span>
                </>
              )}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-600">
              {t("business.features.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {orderedCards.map((card, index) => (
            <Reveal key={card.titleKey} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
                <div className="flex h-44 items-center justify-center overflow-visible px-4 pt-5 sm:h-52 sm:px-5">
                  {mounted ? (
                    <LazyDotLottie
                      src={
                        index === 0
                          ? "https://lottie.host/6796e80e-2342-495e-9859-9850af73ed40/KE2EjMkPj1.lottie"
                          : index === 1
                            ? "https://lottie.host/52422f70-e284-4e88-be51-c636ce21020c/2Us6wpGQW1.lottie"
                            : "https://lottie.host/0369bbda-180d-4ff6-b877-f9fb86ba7e9b/RxNTm0E4Y4.lottie"
                      }
                      loop
                      autoplay
                      className="h-full w-full max-w-[260px] sm:max-w-[300px]"
                    />
                  ) : null}
                </div>
                <div className={cn("px-5 pb-6 sm:px-6", isRtl ? "text-right" : "text-left")}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                      {index === 0 ? <MessageSquareText className="h-4 w-4" /> : index === 1 ? <LayoutDashboard className="h-4 w-4" /> : <CalendarCheck className="h-4 w-4" />}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-[1.375rem]">
                      {t(card.titleKey)}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-[0.95rem]">
                    {t(card.descKey)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
