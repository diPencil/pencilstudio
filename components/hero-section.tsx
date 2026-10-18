"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, memo, useMemo } from "react"
import Image from "next/image"
import { Reveal } from "./reveal"
import { useLanguage } from "@/components/language-context"
import { MacOSDock } from "./ui/mac-os-dock"

import { useState, useEffect } from "react"


const AnimatedText = memo(function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
})

function TypewriterHeadline({ locale }: { locale: string }) {
  const phrases = useMemo(
    () =>
      locale === "ar"
        ? ["حِرفة رقمية", "حلول إبداعية", "نموّ العلامة"]
        : ["Digital Craft", "Creative Systems", "Brand Growth"],
    [locale]
  )

  const [currentIdx, setCurrentIdx] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    let timer: NodeJS.Timeout
    const currentPhrase = phrases[currentIdx]

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        }, 120) // Typing speed: smooth and premium
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 1000) // Pause after fully written: around 1 second
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1))
        }, 60) // Deleting speed: slightly faster than typing
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false)
          setCurrentIdx((prev) => (prev + 1) % phrases.length)
        }, 300) // Short pause before typing next phrase
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentIdx, phrases, mounted])

  if (!mounted) {
    return <span>{phrases[0]}</span>
  }

  // Use non-breaking space when empty to avoid layout shift/height collapse
  return <span>{displayText || "\u00A0"}</span>
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const { t, locale } = useLanguage()

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]) // Reduced hero image shrink from 15% to 5%
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const dockItems = useMemo(
    () => [
      { label: t("dock.homepage"), icon: "/macosdock/homepage.svg", href: "/" },
      { label: t("dock.solutions"), icon: "/macosdock/solutions.svg", href: "/solutions" },
      { label: t("dock.sectors"), icon: "/macosdock/business-sectors.svg", href: "/sectors" },
      { label: t("dock.cloudHosting"), icon: "/macosdock/cloud-hosting.svg", href: "/cloud-hosting" },
      { label: t("dock.enterprise"), icon: "/macosdock/enterprise.svg", href: "/enterprise" },
      { label: t("dock.feliz"), icon: "/macosdock/superfeliz.svg", href: "/superfeliz" },
      { label: t("dock.pricing"), icon: "/macosdock/pricing.svg", href: "/pricing" },
      { label: t("dock.about"), icon: "/macosdock/about.svg", href: "/about" },
      { label: t("dock.contact"), icon: "/macosdock/contact.svg", href: "/contact" },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale]
  )

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image with Cinematic Effects */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="/hero-section.jpg?v=pencil"
          alt="PENCIL Studio digital craft hero background"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center text-white">
          <Reveal>
            <h1 className="text-[3.1rem] md:text-[4.2rem] lg:text-[5.3rem] xl:text-[6.4rem] font-bold leading-none tracking-tight mb-4">
              <TypewriterHeadline locale={locale} />
              <br />
              <span className="text-[0.74em] italic font-light">
                {locale === "ar" ? <span>{t("hero.title2")}</span> : <AnimatedText text={t("hero.title2")} delay={1.1} />}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {t("hero.description")}
            </motion.p>
          </Reveal>
        </div>
      </motion.div>

      {/* Left Side Rail (Projects in LTR, Experience in RTL) */}
      <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center text-white pointer-events-none select-none">
        <div className="[writing-mode:vertical-lr] rotate-180 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase opacity-55">
          {locale === "ar" ? (
            <>
              <span className="text-sm font-extrabold tracking-tight">10+</span>
              <span>سنوات خبرة</span>
            </>
          ) : (
            <>
              <span className="text-sm font-extrabold tracking-tight">890+</span>
              <span>Projects Delivered</span>
            </>
          )}
        </div>
      </div>

      {/* Right Side Rail (Experience in LTR, Projects in RTL) */}
      <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center text-white pointer-events-none select-none">
        <div className="[writing-mode:vertical-lr] rotate-180 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase opacity-55">
          {locale === "ar" ? (
            <>
              <span className="text-sm font-extrabold tracking-tight">890+</span>
              <span>مشروع تم تنفيذه</span>
            </>
          ) : (
            <>
              <span className="text-sm font-extrabold tracking-tight">10+</span>
              <span>Years Experience</span>
            </>
          )}
        </div>
      </div>

      {/* MacOS Dock */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 z-20 flex justify-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <MacOSDock items={locale === "ar" ? [...dockItems].reverse() : dockItems} />
      </motion.div>
    </section>
  )
}


