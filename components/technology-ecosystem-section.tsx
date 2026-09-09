"use client"

import * as React from "react"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"
import { Figma, Layout, Server, Database } from "lucide-react"
import Image from "next/image"

// Import brand icons from react-icons
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaLinkedin, FaInstagram, FaGoogle, FaApple
} from "react-icons/fa"
import {
  SiNextdotjs, SiVercel, SiTypescript, SiFacebook
} from "react-icons/si"

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#000000" },
  { Icon: SiFacebook, color: "#1877F2" },
  { Icon: Figma, color: "#F24E1E" },
  { Icon: Layout, color: "#10B981" },
  { Icon: Server, color: "#3B82F6" },
  { Icon: Database, color: "#A855F7" },
]

export function TechnologyEcosystemSection() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"

  const orbitCount = 3
  const orbitGap = 8 // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount)

  return (
    <section
      className="w-full bg-white border-y border-neutral-200 py-8 md:py-14 overflow-x-clip"
      id="technology-ecosystem"
    >
      <div
        className={cn(
          "container-custom relative flex flex-col md:flex-row items-center justify-between min-h-[36rem] md:h-[30rem] transition-all duration-300 overflow-visible"
        )}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Left side: Heading and Text */}
        <div className="w-full md:w-1/2 z-10 flex flex-col items-start text-start pt-2 md:pt-0">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 mb-4 border border-neutral-200">
            {t("eco.badge")}
          </span>
          <h2 className={cn("text-neutral-900 mb-4 text-4xl lg:text-6xl font-normal", locale === "ar" ? "tracking-normal" : "leading-tight")}>
            {locale === "ar" ? (
              <>
                مبني بأدوات <span className="italic font-light text-neutral-500">مناسبة لكل مشروع</span>
              </>
            ) : (
              <>
                Built With <span className="italic font-light text-neutral-500">the Right Stack</span>
              </>
            )}
          </h2>
          <p className={cn("text-neutral-500 mb-6 max-w-lg", locale === "ar" ? "text-lg md:text-xl leading-9 mt-5" : "text-sm sm:text-base leading-relaxed")}>
            {t("eco.section_subtitle")}
          </p>
          
          {/* Subtle detail text block */}
          <div className="mb-6 p-4 rounded-xl bg-neutral-50 border border-neutral-100 max-w-md">
            <p className="text-xs text-neutral-600 leading-relaxed">
              {t("eco.desc")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              {t("eco.cta.project")}
            </a>
            <a 
              href="#solutions" 
              className="px-5 py-2.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-bold transition-colors cursor-pointer"
            >
              {t("eco.cta.services")}
            </a>
          </div>
        </div>

        {/* Right side: Orbit animation */}
        <div className={cn(
          "relative w-full md:w-1/2 h-[22rem] md:h-full flex items-center overflow-visible pointer-events-none",
          isRtl ? "justify-center md:justify-end" : "justify-center md:justify-start"
        )}>
          <div className={cn(
            "relative w-[40rem] h-[40rem] md:w-[50rem] md:h-[50rem] flex items-center justify-center transition-transform duration-300 overflow-visible",
            isRtl ? "-translate-x-0 md:-translate-x-[8%]" : "translate-x-0 md:translate-x-[8%]"
          )}>
            {/* Center Circle */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-neutral-50 shadow-lg flex items-center justify-center border border-neutral-200 overflow-hidden z-10 pointer-events-auto">
              <Image
                src="/macosdock/superfeliz.svg"
                alt="SuperFeliz"
                width={56}
                height={56}
                className="w-11 h-11 md:w-14 md:h-14 object-contain"
                priority
              />
            </div>

            {/* Generate Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${10 + orbitGap * (orbitIdx + 1)}rem` // equal spacing
              const angleStep = (2 * Math.PI) / iconsPerOrbit

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border-2 border-dotted border-neutral-300/80"
                  style={{
                    width: size,
                    height: size,
                    animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                  }}
                >
                  {iconConfigs
                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep
                      const x = 50 + 50 * Math.cos(angle)
                      const y = 50 + 50 * Math.sin(angle)

                      return (
                        <div
                          key={iconIdx}
                          className="absolute bg-white rounded-full p-2 shadow-md border border-neutral-100/50 flex items-center justify-center pointer-events-auto"
                          style={{
                            left: `${x.toFixed(4)}%`,
                            top: `${y.toFixed(4)}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <cfg.Icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: cfg.color }} />
                        </div>
                      )
                    })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
