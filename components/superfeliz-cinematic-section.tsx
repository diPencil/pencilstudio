"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Pencil } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-context"

const INJECTED_STYLES = `
  .feliz-paper {
    background-color: #F5F2EA;
    background-image: radial-gradient(rgba(11, 11, 11, 0.09) 1px, transparent 1.4px);
    background-size: 22px 22px;
  }
  .notebook-margin-ltr {
    background-color: #FFFDF6;
    background-image:
      linear-gradient(to right, transparent 0, transparent 42px, rgba(220, 38, 38, 0.4) 42px, rgba(220, 38, 38, 0.4) 44px, transparent 44px),
      repeating-linear-gradient(to bottom, transparent 0, transparent 27px, rgba(37, 99, 235, 0.16) 27px, rgba(37, 99, 235, 0.16) 28px);
  }
  .notebook-margin-rtl {
    background-color: #FFFDF6;
    background-image:
      linear-gradient(to left, transparent 0, transparent 42px, rgba(220, 38, 38, 0.4) 42px, rgba(220, 38, 38, 0.4) 44px, transparent 44px),
      repeating-linear-gradient(to bottom, transparent 0, transparent 27px, rgba(37, 99, 235, 0.16) 27px, rgba(37, 99, 235, 0.16) 28px);
  }
  .tape {
    background: rgba(253, 224, 71, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }
  .tape-blue {
    background: rgba(147, 197, 253, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }
`

const EASE = [0.21, 0.47, 0.32, 0.98] as const

export function SuperFelizCinematicSection() {
  const { t, locale } = useLanguage()
  const isRtl = locale === "ar"

  const agentTasks = [t("superfeliz.chat.t1"), t("superfeliz.chat.t2"), t("superfeliz.chat.t3")]
  const chips = [t("superfeliz.chat.chip1"), t("superfeliz.chat.chip2"), t("superfeliz.chat.chip3")]

  return (
    <section id="super-feliz" className="feliz-paper relative overflow-hidden border-y border-neutral-900/10 py-16 sm:py-20 lg:py-24">
      <style>{INJECTED_STYLES}</style>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="max-w-3xl text-start">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-4 py-1.5 text-[10px] font-bold text-white",
              isRtl ? "tracking-normal" : "uppercase tracking-[0.22em]"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t("superfeliz.badge")}
          </span>
          <h2 className={cn("mb-4 mt-5 text-neutral-900 text-4xl lg:text-6xl font-normal", isRtl ? "tracking-normal" : "leading-tight")}>
            {isRtl ? (
              <>
                تعرّف على <span className="font-light italic text-neutral-500">سوبر فيليز</span>
              </>
            ) : (
              <>
                Meet <span className="font-light italic text-neutral-500">SuperFeliz</span>
              </>
            )}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">{t("superfeliz.subtitle")}</p>
        </div>

        {/* Desk: messy brief -> Feliz plan */}
        <div className="relative mt-10 lg:mt-14">
          {/* Connector */}
          <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-0 w-28 -translate-x-1/2 -translate-y-1/2 border-t-2 border-dashed border-neutral-400" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-neutral-900/15 bg-white text-neutral-900 shadow-[0_12px_30px_-10px_rgba(11,11,11,0.4)]">
              {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </span>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-20">
            {/* 01: the messy brief */}
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
                {t("superfeliz.desk.step1")}
              </p>
              <motion.article
                initial={{ opacity: 0, y: 28, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: isRtl ? 1.5 : -1.5 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [...EASE] }}
                className={cn(
                  "relative h-full rounded-lg shadow-[0_24px_50px_-20px_rgba(11,11,11,0.35)]",
                  isRtl ? "notebook-margin-rtl" : "notebook-margin-ltr"
                )}
              >
                <span className="tape absolute -top-3 start-10 block h-7 w-24 -rotate-6" aria-hidden="true" />
                <span className="tape-blue absolute -top-3 end-12 block h-7 w-20 rotate-6" aria-hidden="true" />
                <div className="ms-6 p-6 sm:ms-8 sm:p-8">
                  <span className="inline-block rounded-full border border-neutral-900/15 bg-white px-3 py-1 text-[11px] font-bold text-neutral-700">
                    {t("superfeliz.desk.brief")}
                  </span>
                  <p className="mt-4 text-[15px] leading-[28px] text-neutral-800">{t("superfeliz.chat.user")}</p>
                  <div className="mt-5 inline-flex -rotate-2 items-center gap-2 rounded-[2px] bg-[#FFE58A] px-4 py-2.5 text-[13px] font-bold text-neutral-800 shadow-[0_8px_18px_-8px_rgba(0,0,0,0.4)]">
                    <Pencil size={13} />
                    {t("superfeliz.desk.briefNote")}
                  </div>
                </div>
              </motion.article>
            </div>

            {/* 02: the Feliz plan */}
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
                {t("superfeliz.desk.step2")}
              </p>
              <motion.article
                initial={{ opacity: 0, y: 28, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: isRtl ? -1 : 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.12, ease: [...EASE] }}
                className="relative h-full rounded-2xl border border-neutral-900/10 bg-white p-6 shadow-[0_24px_50px_-20px_rgba(11,11,11,0.3)] sm:p-8"
              >
                <motion.span
                  initial={{ scale: 2.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 8 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.7 }}
                  className="absolute -top-5 end-6 rounded-lg border-[3px] border-[#2563EB] bg-white/90 px-4 py-1.5 text-sm font-black uppercase tracking-[0.18em] text-[#2563EB]"
                >
                  {t("superfeliz.desk.stamp")} ✓
                </motion.span>

                <div className="flex items-center gap-3">
                  <span className="h-11 w-11 overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-50 p-1.5">
                    <Image
                      src="/macosdock/superfeliz.svg"
                      alt="SuperFeliz"
                      width={44}
                      height={44}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <div className="text-start">
                    <div className="text-sm font-black text-neutral-900">{t("superfeliz.desk.plan")}</div>
                    <div className="text-xs font-semibold text-neutral-500">{t("superfeliz.panel.badge")}</div>
                  </div>
                </div>

                <p className="mt-5 text-start text-[15px] font-bold leading-7 text-neutral-900">
                  {t("superfeliz.chat.agent")}
                </p>
                <ul className="mt-4 space-y-3">
                  {agentTasks.map((task, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: isRtl ? 14 : -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.14, ease: [...EASE] }}
                      className="flex items-start gap-2.5 rounded-xl border border-neutral-900/10 bg-neutral-50 px-3.5 py-3 text-start"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check size={12} strokeWidth={3.5} />
                      </span>
                      <span className="text-sm font-semibold leading-6 text-neutral-800">{task}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2.5 border-t border-dashed border-neutral-900/15 pt-4 text-start">
                  <span className="h-7 w-7 shrink-0 overflow-hidden rounded-lg border border-neutral-900/10 bg-neutral-50 p-1">
                    <Image
                      src="/macosdock/superfeliz.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">{t("superfeliz.chat.typing")}</span>
                  <span className="flex items-center gap-1">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ y: [0, -3, 0], opacity: [0.35, 1, 0.35] }}
                        transition={{ duration: 1.1, repeat: Infinity, delay: d * 0.18 }}
                        className="h-1.5 w-1.5 rounded-full bg-neutral-400"
                      />
                    ))}
                  </span>
                </div>
              </motion.article>
            </div>
          </div>
        </div>

        {/* Chips + CTAs */}
        <div className="mt-10 flex flex-col gap-5 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {chips.map((chip) => (
              <span
                key={chip}
                className="shrink-0 whitespace-nowrap rounded-full border border-neutral-900/15 bg-white px-4 py-2 text-xs font-bold text-neutral-700 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#contact"
              whileHover={{ x: isRtl ? -3 : 3 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-neutral-700"
            >
              <span>{t("superfeliz.cta.primary")}</span>
              {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ x: isRtl ? -3 : 3 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-900/20 bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition-colors hover:border-neutral-900"
            >
              <span>{t("superfeliz.cta.secondary")}</span>
              {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
