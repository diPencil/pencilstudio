"use client"

import * as React from "react"
import { useState, useEffect, useMemo } from "react"
import { useLanguage } from "@/components/language-context"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PencilButton } from "@/components/ui/pencil-button"

export type TechCategory = "all" | "frontend" | "backend" | "cloud" | "data"

export interface TechItem {
  name: string
  src: string
  category: TechCategory
  roleEn: string
  roleAr: string
  tagEn: string
  tagAr: string
}

interface OrbitDef {
  sizeRem: number
  duration: number
  reverse: boolean
  items: TechItem[]
}

const ORBITS: OrbitDef[] = [
  // Orbit 1 (Inner): Core modern frontend & backend runtime
  {
    sizeRem: 16,
    duration: 32,
    reverse: false,
    items: [
      {
        name: "Next.js",
        src: "/technologies/next-dot-js-svgrepo-com.svg",
        category: "frontend",
        roleEn: "React framework engineered for Edge SSR, dynamic routing, and instant hydration.",
        roleAr: "إطار عمل رياكت المتطور للريندر السريع والتطبيقات الحديثة بأعلى سرعة.",
        tagEn: "Core Framework",
        tagAr: "إطار العمل الأساسي",
      },
      {
        name: "React",
        src: "/technologies/react-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Declarative component-driven UI architecture with memoized state flows.",
        roleAr: "بناء واجهات مستخدم تفاعلية مقسمة لمكونات ذكية وعالية الكفاءة.",
        tagEn: "UI Library",
        tagAr: "مكتبة الواجهات",
      },
      {
        name: "TypeScript",
        src: "/technologies/typescript-icon-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Strict end-to-end static typing eliminating runtime bugs across the entire stack.",
        roleAr: "أمان نوعي شامل يمنع الأخطاء البرمجية قبل إطلاق النظام في الإنتاج.",
        tagEn: "Language",
        tagAr: "لغة التطوير",
      },
      {
        name: "Python",
        src: "/technologies/python-svgrepo-com.svg",
        category: "backend",
        roleEn: "Powering autonomous AI pipelines, predictive models, and high-performance microservices.",
        roleAr: "تشغيل مسارات الذكاء الاصطناعي ومعالجة البيانات والخدمات السحابية.",
        tagEn: "AI & Backend",
        tagAr: "ذكاء اصطناعي وخوادم",
      },
      {
        name: "Node.js",
        src: "/technologies/node-js-svgrepo-com.svg",
        category: "backend",
        roleEn: "Asynchronous non-blocking runtime handling massive concurrent connections.",
        roleAr: "خوادم فائقة السرعة للتعامل مع آلاف الاتصالات المتزامنة واللحظية.",
        tagEn: "Runtime",
        tagAr: "بيئة تشغيل خوادم",
      },
      {
        name: "Tailwind CSS",
        src: "/technologies/tailwind-css-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Zero-runtime atomic design tokens delivering micro-optimized stylesheet bundles.",
        roleAr: "تصميم عصري فائق الخفة بدون أي استهلاك زائد لذاكرة المتصفح.",
        tagEn: "Design System",
        tagAr: "نظام التصميم",
      },
    ],
  },
  // Orbit 2 (Middle): Cloud, database & fullstack frameworks
  {
    sizeRem: 26,
    duration: 44,
    reverse: true,
    items: [
      {
        name: "Docker",
        src: "/technologies/docker-svgrepo-com.svg",
        category: "cloud",
        roleEn: "Containerized reproducible builds ensuring zero environment drift in production.",
        roleAr: "حاويات برمجية معزولة تضمن تطابق بيئة العمل والسيرفر بنسبة 100%.",
        tagEn: "Containers",
        tagAr: "حاويات رقمية",
      },
      {
        name: "AWS",
        src: "/technologies/aws-ec2-svgrepo-com.svg",
        category: "cloud",
        roleEn: "Multi-zone cloud infrastructure engineered for 99.99% high availability.",
        roleAr: "سيرفرات سحابية موزعة دولياً تضمن استقرار وتشغيل دائم دون انقطاع.",
        tagEn: "Cloud Infra",
        tagAr: "بنية سحابية",
      },
      {
        name: "PostgreSQL",
        src: "/technologies/postgresql-logo-svgrepo-com.svg",
        category: "data",
        roleEn: "Enterprise ACID relational engine with JSONB indexes and resilient replication.",
        roleAr: "قاعدة بيانات علائقية متينة تدعم التعاملات المالية والبيانات الكبيرة بأعلى أمان.",
        tagEn: "Relational DB",
        tagAr: "قاعدة بيانات علائقية",
      },
      {
        name: "Vue.js",
        src: "/technologies/vue-js-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Progressive reactive frontend framework built for high-performance dashboards.",
        roleAr: "إطار عمل تقدمي مرن لبناء الواجهات السريعة ولوحات التحكم.",
        tagEn: "Frontend",
        tagAr: "واجهات تفاعلية",
      },
      {
        name: "NestJS",
        src: "/technologies/nestjs-svgrepo-com.svg",
        category: "backend",
        roleEn: "Enterprise-grade TypeScript architecture structured for scalable microservices.",
        roleAr: "معمارية مايكروسيرفس منظمة ومحصنة خصيصاً للمؤسسات الكبرى.",
        tagEn: "Enterprise Backend",
        tagAr: "خوادم مؤسسية",
      },
      {
        name: "JavaScript",
        src: "/technologies/javascript-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Modern ECMAScript standard driving interactive clients and server execution.",
        roleAr: "المعيار العالمي المشغل للواجهات التفاعلية والعمليات البرمجية.",
        tagEn: "Core Language",
        tagAr: "لغة أساسية",
      },
      {
        name: "Laravel",
        src: "/technologies/laravel-svgrepo-com.svg",
        category: "backend",
        roleEn: "Robust backend system with elegant queues, authentication, and database migrations.",
        roleAr: "إطار متكامل لبناء بوابات الشركات والأنظمة الإدارية الآمنة.",
        tagEn: "Full-Stack",
        tagAr: "نظام شامل",
      },
      {
        name: "MongoDB",
        src: "/technologies/mongo-svgrepo-com.svg",
        category: "data",
        roleEn: "High-throughput document store designed for unstructured dynamic schemas.",
        roleAr: "تخزين مستندي مرن للبيانات السريعة والتحليلات الحية المتغيرة.",
        tagEn: "NoSQL DB",
        tagAr: "قاعدة بيانات NoSQL",
      },
      {
        name: "FastAPI",
        src: "/technologies/fastapi-svgrepo-com.svg",
        category: "backend",
        roleEn: "High-speed ASGI Python API gateways with automated OpenAPI documentation.",
        roleAr: "بوابات برمجية فائقة السرعة مبنية على بايثون الحديث للذكاء الاصطناعي.",
        tagEn: "API Gateway",
        tagAr: "بوابات ربط سريعة",
      },
      {
        name: "Redis",
        src: "/technologies/redis-svgrepo-com.svg",
        category: "data",
        roleEn: "In-memory caching delivering sub-millisecond query responses and rate-limiting.",
        roleAr: "ذاكرة كاش فائقة السرعة تسلم الاستجابة بأقل من أجزاء من الثانية.",
        tagEn: "In-Memory Cache",
        tagAr: "كاش لحظي",
      },
    ],
  },
  // Orbit 3 (Outer): Specialized protocols, databases, styling & engines
  {
    sizeRem: 36,
    duration: 58,
    reverse: false,
    items: [
      {
        name: "GraphQL",
        src: "/technologies/graphql-svgrepo-com.svg",
        category: "backend",
        roleEn: "Declarative type-safe API queries fetching exact data payloads without over-fetching.",
        roleAr: "استعلام دقيق للبيانات يجلب فقط ما تحتاجه الواجهة دون أي هدر.",
        tagEn: "Query Language",
        tagAr: "لغة استعلام",
      },
      {
        name: "Django",
        src: "/technologies/django-svgrepo-com.svg",
        category: "backend",
        roleEn: "Secure, battery-included Python framework for mission-critical enterprise systems.",
        roleAr: "إطار عمل محمي ومجهز بأعلى معايير الأمان المؤسسية للشركات.",
        tagEn: "Backend",
        tagAr: "خوادم متينة",
      },
      {
        name: "Firebase",
        src: "/technologies/firebase-svgrepo-com.svg",
        category: "cloud",
        roleEn: "Real-time database sync, push notification streams, and serverless functions.",
        roleAr: "مزامنة لحظية وتكامل مباشر مع تطبيقات الموبايل والإشعارات.",
        tagEn: "Realtime Cloud",
        tagAr: "سحابة لحظية",
      },
      {
        name: "MySQL",
        src: "/technologies/mysql-svgrepo-com.svg",
        category: "data",
        roleEn: "Proven relational database engine powering high-volume online commerce.",
        roleAr: "محرك قواعد بيانات مجرب للمتاجر وأنظمة البيع الكبرى.",
        tagEn: "SQL Database",
        tagAr: "قاعدة بيانات SQL",
      },
      {
        name: "Angular",
        src: "/technologies/angular-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Structured TypeScript framework for large-scale enterprise single-page platforms.",
        roleAr: "منظومة متكاملة للتطبيقات المؤسسية الضخمة والشاشات المعقدة.",
        tagEn: "Enterprise Web",
        tagAr: "منصات شركات",
      },
      {
        name: "Git",
        src: "/technologies/git-svgrepo-com.svg",
        category: "cloud",
        roleEn: "Distributed version control with automated CI/CD deployment pipelines.",
        roleAr: "إدارة الإصدارات البرمجية وأتمتة النشر المستمر لكود آمن ومستقر.",
        tagEn: "Version Control",
        tagAr: "إدارة الأكواد",
      },
      {
        name: "REST API",
        src: "/technologies/rest-api-svgrepo-com.svg",
        category: "backend",
        roleEn: "Standardized web protocols connecting payment processors, ERPs, and cloud webhooks.",
        roleAr: "واجهات برمجية قياسية لربط بوابات الدفع وأنظمة الـ ERP والخدمات السحابية.",
        tagEn: "Web Protocol",
        tagAr: "بروتوكول ويب",
      },
      {
        name: "ASP.NET",
        src: "/technologies/aspnet-svgrepo-com.svg",
        category: "backend",
        roleEn: "High-performance Microsoft cloud backends for resilient enterprise operations.",
        roleAr: "خوادم مايكروسوفت المؤسسية فائقة السرعة والأمان للبيانات الحساسة.",
        tagEn: "Enterprise Backend",
        tagAr: "أنظمة مؤسسية",
      },
      {
        name: "Ruby on Rails",
        src: "/technologies/rails-svgrepo-com.svg",
        category: "backend",
        roleEn: "Convention-over-configuration rapid SaaS product development engine.",
        roleAr: "بناء تطبيقات الساس والمنصات بسرعة قياسية وموثوقية عالية.",
        tagEn: "SaaS Framework",
        tagAr: "إطار منصات SaaS",
      },
      {
        name: "PHP",
        src: "/technologies/php2-svgrepo-com.svg",
        category: "backend",
        roleEn: "Modern server-side language running scalable portals and commerce engines.",
        roleAr: "لغة خوادم الويب المجربة التي تشغل ملايين الأنظمة والمتاجر العالمية.",
        tagEn: "Server Language",
        tagAr: "لغة خوادم",
      },
      {
        name: "Redux",
        src: "/technologies/redux-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Predictable centralized state container for deterministic application flows.",
        roleAr: "إدارة دقيقة وموحدة لحالة التطبيقات الكبيرة والمعقدة.",
        tagEn: "State Container",
        tagAr: "إدارة البيانات",
      },
      {
        name: "Sass",
        src: "/technologies/sass-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Modular styling architecture enabling dynamic brand-wide color tokens.",
        roleAr: "هيكلة متقدمة للتصميم والألوان الموحدة على مستوى الهوية الكاملة.",
        tagEn: "Style Preprocessor",
        tagAr: "معالجة التصميم",
      },
      {
        name: "Bootstrap",
        src: "/technologies/bootstrap-svgrepo-com.svg",
        category: "frontend",
        roleEn: "Fast responsive grid layouts engineered for operational administration consoles.",
        roleAr: "شبكات تجاوب سريعة للوحات التحكم الإدارية والشاشات المختلفة.",
        tagEn: "Grid System",
        tagAr: "شبكات العرض",
      },
    ],
  },
]

const ALL_TECHS: TechItem[] = ORBITS.flatMap((o) => o.items)

export function TechnologyEcosystemSection() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"

  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null)
  const activeItems = ALL_TECHS

  // Active cycling index among activeItems
  const [cycleIndex, setCycleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  // Ensure cycle index wraps safely when category changes
  const currentTech = hoveredTech ?? (activeItems[cycleIndex % activeItems.length] || activeItems[0])

  // Typewriter effect: types out currentTech.role letter-by-letter
  useEffect(() => {
    // If user is actively hovering, display the text immediately without typing delay
    if (hoveredTech) {
      setDisplayedText(locale === "ar" ? hoveredTech.roleAr : hoveredTech.roleEn)
      setIsTypingComplete(true)
      return
    }

    setDisplayedText("")
    setIsTypingComplete(false)

    let charIndex = 0
    const fullText = locale === "ar" ? currentTech.roleAr : currentTech.roleEn

    const interval = setInterval(() => {
      charIndex++
      setDisplayedText(fullText.slice(0, charIndex))
      if (charIndex >= fullText.length) {
        clearInterval(interval)
        setIsTypingComplete(true)
      }
    }, 24)

    return () => clearInterval(interval)
  }, [currentTech.name, hoveredTech, locale])

  // Advance to next tech automatically after typing is complete
  useEffect(() => {
    if (hoveredTech || !isTypingComplete) return

    const timer = setTimeout(() => {
      setCycleIndex((prev) => (prev + 1) % activeItems.length)
    }, 3200) // 3.2 seconds reading time

    return () => clearTimeout(timer)
  }, [isTypingComplete, hoveredTech, activeItems.length])

  return (
    <section
      className="w-full bg-white border-t border-neutral-200 py-10 md:py-16 overflow-x-clip"
      id="technology-ecosystem"
    >
      <div
        className={cn(
          "container-custom relative flex flex-col lg:flex-row items-center justify-between min-h-[38rem] transition-all duration-300 overflow-visible"
        )}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Left side: Heading, Stack Inspector, and Filter HUD */}
        <div className="w-full lg:w-[54%] z-10 flex flex-col items-start text-start pt-2 md:pt-0">
          <h2 className={cn("text-neutral-900 mb-3 text-4xl lg:text-6xl font-normal", locale === "ar" ? "tracking-normal" : "leading-tight")}>
            {locale === "ar" ? (
              <>
                مبني بأدوات{" "}
                <br className="hidden sm:inline" />
                <span className="italic font-light text-neutral-500">مناسبة لكل مشروع</span>
              </>
            ) : (
              <>
                Built With <span className="italic font-light text-neutral-500">the</span>
                <br />
                <span className="italic font-light text-neutral-500">Right Stack</span>
              </>
            )}
          </h2>

          <p className={cn("text-neutral-600 mb-6 max-w-xl text-sm sm:text-base leading-relaxed")}>
            {t("eco.section_subtitle")}
          </p>

          {/* Live Stack Inspector HUD Box with Typewriter Effect */}
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 max-w-2xl w-full transition-all duration-300 relative overflow-hidden group/box shadow-xs">
            {/* Top row: Icon + Name + Category Tag + Streaming Status */}
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-12 h-12 rounded-xl bg-white p-2.5 shadow-xs border border-blue-200/90 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/box:scale-105">
                <Image
                  key={currentTech.name}
                  src={currentTech.src}
                  alt={currentTech.name}
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-sm font-bold text-neutral-900 tracking-wide">{currentTech.name}</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold border border-blue-200/60">
                    {locale === "ar" ? currentTech.tagAr : currentTech.tagEn}
                  </span>

                  {/* Streaming indicator */}
                  <span className="ms-auto inline-flex items-center gap-1.5 text-[9px] font-mono text-neutral-500 bg-white/80 px-2.5 py-0.5 rounded-full border border-blue-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{hoveredTech ? (locale === "ar" ? "فحص مباشر" : "HOVER") : (locale === "ar" ? "يكتب الآن" : "LIVE STREAM")}</span>
                  </span>
                </div>

                {/* Typewriter text output */}
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium min-h-[2.5rem]">
                  {displayedText}
                  <span className="inline-block w-1.5 h-3.5 bg-blue-600 ms-1 animate-pulse align-middle" />
                </p>
              </div>
            </div>
          </div>

          {/* Solutions Link CTA Button */}
          <div className="pt-6">
            <PencilButton
              href="/solutions"
              variant="primary"
              size="lg"
              hoverLabel={isRtl ? "استكشف الحلول ←" : "Explore Solutions →"}
              className="w-full sm:w-auto min-w-[240px]"
            >
              {isRtl ? "استكشف كافة الحلول" : "Explore All Solutions"}
            </PencilButton>
          </div>
        </div>

        {/* Right side: Orbit animation */}
        <div className={cn(
          "relative w-full lg:w-[48%] h-[26rem] md:h-[32rem] lg:h-full flex items-center overflow-visible pointer-events-none mt-10 lg:mt-0",
          isRtl ? "justify-center lg:justify-end" : "justify-center lg:justify-start"
        )}>
          <div className={cn(
            "relative w-[40rem] h-[40rem] md:w-[50rem] md:h-[50rem] flex items-center justify-center transition-transform duration-300 overflow-visible",
            isRtl ? "translate-x-0 lg:translate-x-6 xl:translate-x-8" : "translate-x-0 lg:-translate-x-6 xl:-translate-x-8"
          )}>
            {/* Center Circle: SuperFeliz */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl flex items-center justify-center border border-neutral-200/90 z-20 pointer-events-auto group">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
              <Image
                src="/macosdock/superfeliz.svg"
                alt="SuperFeliz"
                width={56}
                height={56}
                className="w-11 h-11 md:w-14 md:h-14 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>

            {/* Concentric Orbits */}
            {ORBITS.map((orbit, orbitIdx) => {
              const size = `${orbit.sizeRem}rem`
              const angleStep = (2 * Math.PI) / orbit.items.length
              const orbitAnimationClass = orbit.reverse ? "animate-orbit-ccw" : "animate-orbit-cw"
              const counterAnimationClass = orbit.reverse ? "animate-counter-cw" : "animate-counter-ccw"

              return (
                <div
                  key={orbitIdx}
                  className={cn(
                    "absolute rounded-full border border-dashed border-neutral-300/80 pointer-events-none",
                    orbitAnimationClass
                  )}
                  style={{
                    width: size,
                    height: size,
                    animationDuration: `${orbit.duration}s`,
                  }}
                >
                  {orbit.items.map((tech, techIdx) => {
                    const angle = techIdx * angleStep
                    const x = 50 + 50 * Math.cos(angle)
                    const y = 50 + 50 * Math.sin(angle)

                    const isHighlighted = currentTech.name === tech.name

                    return (
                      <div
                        key={tech.name}
                        className="absolute pointer-events-auto"
                        style={{
                          left: `${x.toFixed(4)}%`,
                          top: `${y.toFixed(4)}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {/* Counter-rotation keeps tech icon upright while revolving */}
                        <div
                          className={counterAnimationClass}
                          style={{
                            animationDuration: `${orbit.duration}s`,
                          }}
                        >
                          <div
                            title={`${tech.name} - ${tech.roleEn}`}
                            onMouseEnter={() => setHoveredTech(tech)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className={cn(
                              "group/tech relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-xs border border-neutral-200/90 hover:border-blue-500 hover:shadow-md hover:scale-125 z-10 flex items-center justify-center p-1.5 transition-all duration-300 cursor-pointer",
                              isHighlighted && "scale-125 border-blue-600 shadow-lg ring-4 ring-blue-500/30 z-30"
                            )}
                          >
                            <Image
                              src={tech.src}
                              alt={tech.name}
                              width={24}
                              height={24}
                              className="w-5 h-5 md:w-6 md:h-6 object-contain pointer-events-none select-none transition-transform duration-200 group-hover/tech:scale-110"
                            />

                            {/* Micro tooltip label */}
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-150 text-[10px] font-semibold text-neutral-800 bg-white px-2 py-0.5 rounded-full shadow-xs border border-neutral-200 whitespace-nowrap pointer-events-none z-30">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Orbit animations */}
      <style jsx>{`
        .animate-orbit-cw {
          animation-name: orbit-cw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-orbit-ccw {
          animation-name: orbit-ccw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-counter-cw {
          animation-name: orbit-cw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-counter-ccw {
          animation-name: orbit-ccw;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes orbit-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </section>
  )
}
