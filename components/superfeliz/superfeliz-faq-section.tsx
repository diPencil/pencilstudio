"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/shared/motion/reveal";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { PencilButton } from "@/components/ui/pencil-button";
import { ChevronDown, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { felizFaqs } from "@/lib/feliz/feliz";

export function SuperfelizFaqSection() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-neutral-200/80 bg-[#FAFAFA] py-20 md:py-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-aura-1 absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-[#2057FF]/4 blur-[160px]" />
        <div className="animate-aura-2 absolute bottom-10 right-1/4 h-[420px] w-[420px] rounded-full bg-emerald-500/4 blur-[160px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Sticky Header + WhatsApp Action Card (5 Cols)   */}
          {/* ============================================================ */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-mono font-bold tracking-wider text-[#2057FF]">
                  <span className="size-1.5 rounded-full bg-[#2057FF] animate-pulse" />
                  <span>{isRtl ? "الأسئلة الشائعة // وضوح كامل" : "EXECUTIVE FAQ // DIRECT CLARITY"}</span>
                </div>

                {/* Main Heading */}
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.14]">
                  {isRtl ? (
                    <>
                      قبل أن تسأل.{" "}
                      <span className="block font-light italic text-neutral-500">
                        إجابات صريحة ومباشرة.
                      </span>
                    </>
                  ) : (
                    <>
                      Before you ask.{" "}
                      <span className="block font-light italic text-neutral-500">
                        Clear answers to save your time.
                      </span>
                    </>
                  )}
                </h2>

                {/* Subtitle */}
                <p className="mt-4 text-xs sm:text-[13px] md:text-sm leading-[1.7] text-neutral-600">
                  {isRtl
                    ? "أكثر ما يسأل عنه رواد الأعمال والشركات حول منظومة فيليز. وسؤالك الخاص نرد عليه خلال دقائق عبر واتساب."
                    : "The most frequent questions about the Feliz AI family. Have a specific enterprise scenario? Get a direct response from our engineers via WhatsApp."}
                </p>

                {/* PENCIL WhatsApp Support Card */}
                <div className="mt-8 rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-[0_12px_30px_-15px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <span className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      {isRtl ? "الفريق متصل الآن" : "Team Online Now"}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {isRtl ? "رد فوري" : "Instant Reply"}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-medium">
                    {isRtl
                      ? "هل لديك فكرة أو استفسار خاص بنظام شركتك؟ تواصل مباشرة مع الفريق التنفيذي."
                      : "Have a specific workflow or proprietary tech stack you want to integrate with Feliz?"}
                  </p>

                  <div className="mt-5">
                    <PencilButton
                      href="https://wa.me/201003778273"
                      target="_blank"
                      rel="noreferrer"
                      variant="primary"
                      size="default"
                      fullWidth
                      icon={<WhatsAppIcon size={17} />}
                      hoverLabel={isRtl ? "محادثة فورية ←" : "Direct WhatsApp →"}
                    >
                      {isRtl ? "اسألنا مباشرة عبر واتساب" : "Ask on WhatsApp"}
                    </PencilButton>
                  </div>
                </div>

                {/* Back to Home Link */}
                <div className="mt-8">
                  <PencilButton
                    href="/"
                    variant="outline"
                    size="sm"
                    hoverLabel={isRtl ? "العودة للرئيسية ←" : "Back home →"}
                  >
                    <span className="inline-flex items-center gap-2">
                      <BackArrow size={14} />
                      <span>{isRtl ? "العودة للرئيسية" : "Back home"}</span>
                    </span>
                  </PencilButton>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Signature PENCIL FAQ Accordion (7 Cols)        */}
          {/* ============================================================ */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {felizFaqs.map((faq, i) => {
                const isOpen = openIndex === i;

                return (
                  <Reveal key={i} delay={0.05 * i}>
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                        isOpen
                          ? "border-[#2057FF]/40 shadow-lg shadow-[#2057FF]/5 ring-1 ring-[#2057FF]/20"
                          : "border-neutral-200/80 hover:border-neutral-300 shadow-2xs"
                      )}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="flex w-full cursor-pointer items-center gap-4 p-5 sm:p-6 text-start outline-none"
                        aria-expanded={isOpen}
                      >
                        {/* Step index badge */}
                        <span
                          className={cn(
                            "font-mono text-xs font-bold px-2.5 py-1 rounded-md shrink-0 transition-colors",
                            isOpen
                              ? "bg-[#2057FF] text-white"
                              : "bg-blue-50 text-[#2057FF]"
                          )}
                          dir="ltr"
                        >
                          0{i + 1}
                        </span>

                        {/* Question Text */}
                        <span className="flex-1 text-base sm:text-lg font-black tracking-tight text-neutral-950 leading-snug">
                          {isRtl ? faq.qAr : faq.qEn}
                        </span>

                        {/* Chevron Down Button */}
                        <span
                          className={cn(
                            "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                            isOpen
                              ? "rotate-180 border-[#2057FF] bg-[#2057FF] text-white"
                              : "border-neutral-200 bg-neutral-50 text-neutral-600 group-hover:bg-neutral-100"
                          )}
                        >
                          <ChevronDown size={16} />
                        </span>
                      </button>

                      {/* Expandable Answer */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                          >
                            <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-7">
                              <div className="pt-3 border-t border-neutral-100">
                                <p className="text-xs sm:text-[13px] md:text-sm leading-[1.8] text-neutral-600 font-medium">
                                  {isRtl ? faq.aAr : faq.aEn}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

