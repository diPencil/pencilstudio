"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, Layout, Zap, ArrowRight, ArrowLeft } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Reveal } from "./reveal"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"

export function IdeaToProductSection() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2" | "tab3">("tab1")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const tabsConfig = [
    {
      id: "tab1" as const,
      label: t("method.tab1.label"),
      badge: t("method.tab1.badge"),
      title: t("method.tab1.title"),
      description: t("method.tab1.desc"),
      cta: t("method.tab1.cta"),
      icon: Compass,
      lottieSrc: "https://lottie.host/4264c941-5022-4639-a2a3-86ad8fd46ed1/6Mv8mSvNCD.lottie",
    },
    {
      id: "tab2" as const,
      label: t("method.tab2.label"),
      badge: t("method.tab2.badge"),
      title: t("method.tab2.title"),
      description: t("method.tab2.desc"),
      cta: t("method.tab2.cta"),
      icon: Layout,
      lottieSrc: "https://lottie.host/6a508e03-4ffb-4bbd-bbef-9f07bb8763fc/eiBqNk5jQb.lottie",
    },
    {
      id: "tab3" as const,
      label: t("method.tab3.label"),
      badge: t("method.tab3.badge"),
      title: t("method.tab3.title"),
      description: t("method.tab3.desc"),
      cta: t("method.tab3.cta"),
      icon: Zap,
      lottieSrc: "https://lottie.host/5feea738-69c3-4a47-8b62-0e356c1ffed4/TlihmRQp5m.lottie",
    },
  ]

  const activeData = tabsConfig.find((tab) => tab.id === activeTab) || tabsConfig[0]

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-10 lg:pt-32 lg:pb-12" id="idea-to-product">
      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-start mb-16 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 mb-4 border border-neutral-200">
              {t("method.badge")}
            </span>
            <h2 className={cn("text-neutral-900 mb-4 text-4xl lg:text-6xl font-normal", locale === "ar" ? "tracking-normal" : "")}>
              {locale === "ar" ? (
                <>
                  من الفكرة إلى <span className="italic font-light text-neutral-500">المنتج الرقمي</span>
                </>
              ) : (
                <>
                  From Idea to <span className="italic font-light text-neutral-500">Digital Product</span>
                </>
              )}
            </h2>
            <p className={cn("text-lg text-neutral-600 leading-relaxed max-w-2xl", locale === "ar" ? "mt-4" : "")}>
              {t("method.desc")}
            </p>
          </div>
        </Reveal>
 
        <Reveal delay={0.1}>
          <div className="mb-12 flex gap-2 overflow-x-auto border-b border-neutral-200/80 scrollbar-none md:gap-4" dir={isRtl ? "rtl" : "ltr"}>
            {tabsConfig.map((tab) => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex cursor-pointer items-center gap-2 whitespace-nowrap border-b-2 px-2 pb-4 text-sm font-semibold outline-none transition-all",
                    isActive ? "border-neutral-900 text-neutral-900" : "border-transparent text-neutral-400 hover:text-neutral-600"
                  )}
                >
                  <tab.icon size={16} className={cn("opacity-70", isActive && "text-neutral-900")} />
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="relative min-h-[280px] lg:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12"
              dir={isRtl ? "rtl" : "ltr"}
            >
              <div className="lg:col-span-7 flex flex-col items-start text-start">
                <span className="mb-5 inline-block rounded-md border border-neutral-200/50 bg-neutral-100 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-neutral-700">
                  {activeData.badge}
                </span>

                <h3 className="mb-4 text-2xl font-bold leading-tight text-neutral-900 md:text-3xl lg:text-4xl">
                  {activeData.title}
                </h3>

                <p className="mb-8 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base">
                  {activeData.description}
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ x: isRtl ? -4 : 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-neutral-800"
                >
                  <span>{activeData.cta}</span>
                  {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </motion.a>
              </div>

              <div className="w-full lg:col-span-5 lg:-mt-10">
                <div className="flex w-full items-start justify-center overflow-visible lg:-mt-10">
                  {mounted ? (
                    <DotLottieReact
                      src={activeData.lottieSrc}
                      loop
                      autoplay
                      className="h-[300px] w-full max-w-[420px] sm:h-[420px] sm:max-w-[640px] lg:h-[460px] lg:max-w-[640px]"
                    />
                  ) : (
                    <div className="h-[300px] w-full max-w-[420px] sm:h-[420px] sm:max-w-[640px] lg:h-[460px] lg:max-w-[640px]" />
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
