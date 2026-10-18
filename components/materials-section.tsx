"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-context"

const materials = [
  {
    id: "pistachio",
    name: "Design",
    description: "Intuitive layout systems and clear visual hierarchies designed for scale.",
    image: "/hero-section.jpg",
    backgroundImage: "/hero-section.jpg",
    tint: "bg-green-50",
  },
  {
    id: "lunar",
    name: "Logic",
    description: "Intelligent databases, custom automation flows, and high scalability logic.",
    image: "/hero-section.jpg",
    backgroundImage: "/hero-section.jpg",
    tint: "bg-gray-100",
  },
  {
    id: "martian",
    name: "Deploy",
    description: "Zero-latency performance, secure edge server infrastructure, and support pipelines.",
    image: "/hero-section.jpg",
    backgroundImage: "/hero-section.jpg",
    tint: "bg-red-50",
  },
]

export function MaterialsSection() {
  const [activeMaterial, setActiveMaterial] = useState("pistachio")
  const { t, locale } = useLanguage()

  // Translate materials data
  const localizedMaterials = materials.map((m) => {
    let name = m.name
    let description = m.description
    if (m.id === "pistachio") {
      name = t("material.pistachio")
      description = t("material.pistachio.desc")
    } else if (m.id === "lunar") {
      name = t("material.lunar")
      description = t("material.lunar.desc")
    } else if (m.id === "martian") {
      name = t("material.martian")
      description = t("material.martian.desc")
    }
    return { ...m, name, description }
  })

  const activeMaterialData = localizedMaterials.find((m) => m.id === activeMaterial) || localizedMaterials[0]

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    if (locale === "ar") {
      return <span>{text}</span>
    }

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
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="materials">
      <div className="absolute inset-0 z-0">
        {localizedMaterials.map((material) => (
          <motion.div
            key={material.id}
            className="absolute inset-0"
            initial={{ opacity: material.id === activeMaterial ? 1 : 0 }}
            animate={{ opacity: material.id === activeMaterial ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={material.backgroundImage || "/hero-section.jpg"}
              alt={`${material.name} interior scene`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute top-[120px] left-0 right-0 z-10">
        <div className="container-custom text-white text-start">
          <Reveal>
            <div>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeMaterial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={locale === "ar" ? "font-normal mb-6 text-4xl lg:text-6xl tracking-normal" : "font-bold mb-6 text-7xl"}
                >
                  <AnimatedText text={activeMaterialData.name} delay={0.2} />
                </motion.h2>
              </AnimatePresence>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                {t("materials.description")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 start-8 z-10 max-w-md hidden">
        <Reveal delay={0.3}>
          <blockquote className="pl-0 py-4">
            <p className="text-xl text-white leading-relaxed italic lg:text-base font-medium">
              {t("materials.quote")}
            </p>
            <footer className="mt-4 text-sm text-white/70">- {t("materials.brand")}</footer>
          </blockquote>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {localizedMaterials.map((material) => (
                <motion.button
                  key={material.id}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md",
                    activeMaterial === material.id
                      ? "bg-white text-neutral-900"
                      : "bg-white/20 text-white hover:bg-white/30",
                  )}
                  onClick={() => setActiveMaterial(material.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {material.name}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
