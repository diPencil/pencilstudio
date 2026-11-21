"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Sparkles, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-context"

const INJECTED_STYLES = `
  .premium-depth-card {
      background:
          radial-gradient(circle at 70% 50%, rgba(37,99,235,0.22), transparent 40%),
          linear-gradient(180deg, #071326 0%, #0B1D3A 55%, #071326 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.8),
          0 20px 40px -20px rgba(0, 0, 0, 0.7),
          inset 0 1px 2px rgba(255, 255, 255, 0.16),
          inset 0 -2px 4px rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.06);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 20;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      box-shadow:
          0 18px 45px rgba(0, 0, 0, 0.28),
          inset 0 1px 1px rgba(255,255,255,0.18),
          inset 0 -1px 1px rgba(0,0,0,0.35);
      border: 1px solid rgba(255,255,255,0.14);
  }
`

export function SuperFelizCinematicSection() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="super-feliz"
      className="relative overflow-visible bg-[#071326] py-18 sm:py-20 lg:py-24"
    >
      <style>{INJECTED_STYLES}</style>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/86 backdrop-blur-md">
            {t("superfeliz.badge")}
          </span>
          <h2 className="mt-5 text-4xl font-normal leading-[0.96] text-white md:text-5xl lg:text-6xl">
            {t("superfeliz.title")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
            {t("superfeliz.subtitle")}
          </p>
        </div>

        <div className="mt-10 lg:mt-12">
          <div
            ref={cardRef}
            className="premium-depth-card overflow-visible rounded-[2rem] p-5 sm:p-6 lg:p-7"
          >
            <div className="card-sheen" aria-hidden="true" />

            <div className="relative overflow-visible rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5 lg:p-6">
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5 text-start">
                  <h3 className="text-3xl font-normal leading-[0.98] text-white md:text-4xl lg:text-5xl">
                    {t("superfeliz.cinematic1")}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/72 md:text-lg">
                    {t("superfeliz.cinematic2")}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white">
                        <Zap size={16} className="text-[color:var(--pencil-blue)]" />
                        <span className="text-sm font-semibold">{t("superfeliz.card.heading")}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/68">
                        {t("superfeliz.card.desc")}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white">
                        <Sparkles size={16} className="text-[color:var(--pencil-blue)]" />
                        <span className="text-sm font-semibold">{t("superfeliz.metric.label")}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/68">
                        {t("superfeliz.metric.value")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <motion.a
                      href="#contact"
                      whileHover={{ x: isRtl ? -3 : 3 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--pencil-ink)] transition-colors hover:bg-white/90"
                    >
                      <span>{t("superfeliz.cta.primary")}</span>
                      {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </motion.a>
                    <motion.a
                      href="#contact"
                      whileHover={{ x: isRtl ? -3 : 3 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white/88 backdrop-blur-sm transition-colors hover:bg-white/10"
                    >
                      <span>{t("superfeliz.cta.secondary")}</span>
                      {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </motion.a>
                  </div>
                </div>

                <div className="relative lg:col-span-7 overflow-visible">
                  <div className="relative mx-auto w-full max-w-[720px] overflow-visible">
                    <div className={cn("floating-ui-badge absolute left-3 top-3 z-20 hidden px-4 py-3 text-white lg:block", isRtl ? "text-right" : "text-left")}>
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/14 bg-[color:var(--pencil-blue-soft)]">
                          <Image src="/macosdock/superfeliz.svg" alt="SuperFeliz" width={24} height={24} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold leading-none">{t("superfeliz.task.one.title")}</div>
                          <div className="mt-1 text-xs text-white/70">{t("superfeliz.task.one.desc")}</div>
                        </div>
                      </div>
                    </div>

                    <div className={cn("floating-ui-badge absolute right-3 top-3 z-20 hidden px-4 py-3 text-white lg:block", isRtl ? "text-right" : "text-left")}>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                        {t("superfeliz.task.two.title")}
                      </div>
                      <div className="mt-1 text-sm font-semibold leading-none">{t("superfeliz.task.two.desc")}</div>
                    </div>

                    <div className="overflow-visible rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 sm:p-5 lg:p-6">
                      <div className="overflow-visible rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 sm:p-5 lg:p-6">
                        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
                          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 sm:p-5">
                            <div className="flex items-center justify-between text-white/80">
                              <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                                {t("superfeliz.panel.label")}
                              </span>
                              <span className="text-[10px] font-semibold text-white/55">
                                {t("superfeliz.panel.status")}
                              </span>
                            </div>

                            <div className="mt-5 rounded-[1.25rem] border border-white/12 bg-white/[0.07] p-4">
                              <div className="flex items-start gap-3">
                                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/12 bg-white/8">
                                  <Image
                                    src="/macosdock/superfeliz.svg"
                                    alt="SuperFeliz"
                                    fill
                                    sizes="56px"
                                    className="object-contain p-2"
                                    priority
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-sm font-semibold text-white">
                                    {t("superfeliz.mockup.title")}
                                  </div>
                                  <div className="mt-1 text-xs leading-5 text-white/65">
                                    {t("superfeliz.mockup.desc")}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 space-y-3">
                              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3">
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                                  {t("superfeliz.task.one.title")}
                                </div>
                                <div className="mt-1 text-sm text-white/80">{t("superfeliz.task.one.desc")}</div>
                              </div>
                              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3">
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                                  {t("superfeliz.task.two.title")}
                                </div>
                                <div className="mt-1 text-sm text-white/80">{t("superfeliz.task.two.desc")}</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex min-h-[340px] items-center justify-center overflow-visible rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 sm:min-h-[360px] lg:min-h-[380px]">
                            <div className="relative h-[250px] w-[250px] sm:h-[290px] sm:w-[290px] lg:h-[320px] lg:w-[320px]">
                              <div className="absolute inset-0 rounded-[2.2rem] border border-white/12 bg-white/[0.06] shadow-[0_25px_60px_-25px_rgba(0,0,0,0.75)]" />
                              <div className="absolute inset-4 rounded-[1.7rem] border border-white/12 bg-[#081A33]/96 p-4">
                                <div className="flex h-full flex-col items-center justify-between text-center text-white">
                                  <div className="w-full">
                                    <div className="mx-auto h-16 w-16 overflow-hidden rounded-2xl border border-white/12 bg-white/8 p-2">
                                      <Image
                                        src="/macosdock/superfeliz.svg"
                                        alt="SuperFeliz icon"
                                        width={64}
                                        height={64}
                                        className="h-full w-full object-contain"
                                      />
                                    </div>
                                    <div className="mt-4 text-sm font-semibold">
                                      {t("superfeliz.mockup.heading")}
                                    </div>
                                    <p className="mt-2 text-xs leading-5 text-white/60">
                                      {t("superfeliz.mockup.support")}
                                    </p>
                                  </div>

                                  <div className="w-full space-y-2.5">
                                    <div className="rounded-2xl border border-white/12 bg-white/[0.08] px-3.5 py-3 text-left text-white/86">
                                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                                        Feliz Oper V1.0 Beta
                                      </div>
                                      <div className="mt-1 text-sm">Daily operations and follow-up</div>
                                    </div>
                                    <div className="rounded-2xl border border-white/12 bg-white/[0.08] px-3.5 py-3 text-left text-white/86">
                                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                                        Feliz Tech V1.0 Beta
                                      </div>
                                      <div className="mt-1 text-sm">Support and workflow tools</div>
                                    </div>
                                    <div className="rounded-2xl border border-white/12 bg-white/[0.08] px-3.5 py-3 text-left text-white/86">
                                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                                        Feliz Gen V1.0 Beta
                                      </div>
                                      <div className="mt-1 text-sm">Ideas, notes, and next steps</div>
                                    </div>
                                    <div className="rounded-2xl border border-white/12 bg-white/[0.08] px-3.5 py-3 text-left text-white/86">
                                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                                        SuperFeliz V1.0 Beta
                                      </div>
                                      <div className="mt-1 text-sm">Business assistant workspace</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
