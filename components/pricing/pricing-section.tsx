"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { AmbientBackdrop, SectionHeading } from "@/components/editorial"
import { PencilButton } from "@/components/ui/pencil-button"
import {
  PricingCurrencyCode,
  PRICING_CURRENCIES,
  PRICING_CURRENCY_CODES,
  formatPrice,
} from "@/lib/pricing/pricing-currency"

interface PricingSectionProps {
  selectedCurrency?: PricingCurrencyCode
  onSelectCurrency?: (curr: PricingCurrencyCode) => void
}

export function PricingSection({
  selectedCurrency: externalCurrency,
  onSelectCurrency,
}: PricingSectionProps) {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"
  const [internalCurrency, setInternalCurrency] = useState<PricingCurrencyCode>("USD")

  const activeCurrency = externalCurrency || internalCurrency
  const handleSelectCurrency = onSelectCurrency || setInternalCurrency

  const plans = [
    {
      nameEn: "Launch",
      nameAr: "الانطلاقة",
      baseUsd: 499.99,
      isMonthly: false,
      perEn: "one-time project",
      perAr: "مشروع لمرة واحدة",
      descEn: "Brand, website or store. Designed, built and launched properly.",
      descAr: "براند أو موقع أو متجر. تصميم وتنفيذ وإطلاق صح.",
      featuresEn: ["Brand or website, end to end", "Arabic + English versions", "SEO & speed foundations", "Launch + handover training"],
      featuresAr: ["براند أو موقع من الصفر للآخر", "نسخة عربية وإنجليزية", "أساسيات السرعة والسيو", "إطلاق وتدريب على الاستلام"],
      featured: false,
    },
    {
      nameEn: "Manage",
      nameAr: "الإدارة",
      baseUsd: 14.99,
      isMonthly: true,
      perEn: "monthly care plan",
      perAr: "باقة رعاية شهرية",
      descEn: "We run your company digitally. Hosting, updates, support, growth.",
      descAr: "بندير شركتك رقميا. استضافة وتحديثات ودعم ونمو.",
      featuresEn: ["Hosting, SSL & backups included", "Updates + priority support", "Panel access for your team", "Monthly growth report"],
      featuresAr: ["الاستضافة والشهادات والنسخ مشمولة", "تحديثات ودعم أولوية", "بانل لفريقك", "تقرير نمو شهري"],
      featured: true,
    },
    {
      nameEn: "Enterprise",
      nameAr: "المؤسسات",
      baseUsd: null,
      isMonthly: false,
      perEn: "annual partnership",
      perAr: "شراكة سنوية",
      descEn: "Systems, apps and AI for organizations operating at scale.",
      descAr: "سيستمات وتطبيقات وAI للمؤسسات اللي شغالة بحجم كبير.",
      featuresEn: ["Dedicated manager + SLA", "Custom systems & integrations", "Pro AI gateway seats", "Quarterly strategy reviews"],
      featuresAr: ["مدير مخصص واتفاقية خدمة", "سيستمات وتكاملات مخصوصة", "مقاعد بوابة البرو", "مراجعة استراتيجية ربع سنوية"],
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-[#FBFBFB] py-20 lg:py-28">
      <AmbientBackdrop />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            isRtl={isRtl}
            eyebrow={isRtl ? "الأسعار" : "Pricing"}
            title={
              isRtl ? (
                <>
                  رقم واضح <span className="italic font-light text-neutral-500">قبل ما نبدأ.</span>
                </>
              ) : (
                <>
                  A clear number <span className="italic font-light text-neutral-500">before we start.</span>
                </>
              )
            }
            description={
              isRtl
                ? "كل عرض سعر ثابت ومكتوب قبل الشغل. من مشروع واحد لحد إدارة شركتك كاملة. مفيش مفاجآت في النص."
                : "Every quote is fixed in writing before work begins. From a single project to running your whole company. No surprises midway."
            }
          />

          {/* Quick Currency Selector in Header */}
          <div className="relative inline-flex items-center gap-1.5 rounded-2xl border border-neutral-200/90 bg-neutral-50/80 p-1.5 shadow-2xs self-start md:self-end">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2">
              {isRtl ? "العملة:" : "Currency:"}
            </span>
            {PRICING_CURRENCY_CODES.map((currCode) => {
              const c = PRICING_CURRENCIES[currCode]
              const isSelected = activeCurrency === currCode
              return (
                <button
                  key={currCode}
                  type="button"
                  onClick={() => handleSelectCurrency(currCode)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1 text-xs font-mono font-bold transition-all cursor-pointer",
                    isSelected
                      ? "bg-[#2057FF] text-white shadow-xs"
                      : "text-neutral-700 hover:bg-white hover:text-neutral-950"
                  )}
                >
                  <span className={cn("text-[11px] font-bold", isSelected ? "text-blue-100" : "text-[#2057FF]")}>
                    {c.symbol}
                  </span>
                  <span>{c.code}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => {
            const formattedPrice = formatPrice(p.baseUsd, p.isMonthly, activeCurrency, isRtl)
            return (
              <motion.div
                key={p.nameEn}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="[perspective:1400px]"
              >
                <div
                  className={cn(
                    "flex h-full flex-col rounded-3xl border p-8 transition-colors duration-300",
                    p.featured
                      ? "border-neutral-900 bg-neutral-950 text-white shadow-2xl"
                      : "border-neutral-200 bg-white hover:border-blue-200 hover:shadow-[0_34px_60px_-30px_rgba(32,87,255,0.30)]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={cn("text-xl font-normal", p.featured ? "text-white" : "text-neutral-950")}>
                      {isRtl ? p.nameAr : p.nameEn}
                    </h3>
                    {p.featured && (
                      <span className="rounded-full bg-[#2057ff] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        {isRtl ? "الأكثر طلبًا" : "Most popular"}
                      </span>
                    )}
                  </div>

                  <p className="mt-4">
                    <span className={cn("text-4xl font-normal tracking-tight", p.featured ? "text-white" : "text-neutral-950")}>
                      {formattedPrice}
                    </span>
                    <span className={cn("mt-1 block text-sm", p.featured ? "text-white/50" : "text-neutral-500")}>
                      {isRtl ? p.perAr : p.perEn}
                    </span>
                  </p>

                  <p className={cn("mt-3 text-sm leading-relaxed", p.featured ? "text-white/70" : "text-neutral-600")}>
                    {isRtl ? p.descAr : p.descEn}
                  </p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {(isRtl ? p.featuresAr : p.featuresEn).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            p.featured ? "bg-[#2057ff]/20" : "bg-[#2057ff]/10"
                          )}
                        >
                          <Check size={12} strokeWidth={3} className={p.featured ? "text-[#6ea8ff]" : "text-[#2057ff]"} />
                        </span>
                        <span className={p.featured ? "text-white/80" : "text-neutral-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <PencilButton
                      href="/#contact"
                      variant="primary"
                      size="md"
                      fullWidth
                      hoverLabel={isRtl ? "اطلب الآن ←" : "Request now →"}
                    >
                      <span>{isRtl ? "اطلب عرضك" : "Get your quote"}</span>
                    </PencilButton>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-neutral-500">
          {isRtl ? (
            <>
              شغال في قطاع معين؟ أسعارنا بتتظبط على القطاع.{" "}
              <Link href="/#business-sectors" className="font-bold text-neutral-900 underline underline-offset-4">
                شوف القطاعات اللي بنفهم فيها
              </Link>
              . ولو محتاج تفاصيل أكتر،{" "}
              <Link href="/help/faqs" className="font-bold text-neutral-900 underline underline-offset-4">
                الأسئلة الشائعة
              </Link>{" "}
              فيها كل حاجة.
            </>
          ) : (
            <>
              In a specific sector? Pricing adapts to your industry.{" "}
              <Link href="/#business-sectors" className="font-bold text-neutral-900 underline underline-offset-4">
                See the sectors we know
              </Link>
              . And for details, the{" "}
              <Link href="/help/faqs" className="font-bold text-neutral-900 underline underline-offset-4">
                FAQs
              </Link>{" "}
              cover everything.
            </>
          )}
        </p>
      </div>
    </section>
  )
}
