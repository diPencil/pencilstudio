"use client"

import Link from "next/link"
import { Reveal } from "./reveal"
import { useLanguage } from "@/components/language-context"
import { Check, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function PricingSection() {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"

  const plans = [
    {
      nameEn: "Launch",
      nameAr: "الانطلاقة",
      priceEn: "from $3,500",
      priceAr: "من $3,500",
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
      priceEn: "from $490/mo",
      priceAr: "من $490/شهر",
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
      priceEn: "custom",
      priceAr: "بالاتفاق",
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
    <section id="pricing" className="scroll-mt-24 bg-neutral-50 py-20 lg:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
              {isRtl ? "الأسعار" : "Pricing"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              {isRtl ? (
                <>
                  رقم واضح <span className="font-light italic text-neutral-500">قبل ما نبدأ.</span>
                </>
              ) : (
                <>
                  A clear number <span className="font-light italic text-neutral-500">before we start.</span>
                </>
              )}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-neutral-600">
              {isRtl
                ? "كل عرض سعر ثابت ومكتوب قبل الشغل. من مشروع واحد لحد إدارة شركتك كاملة. مفيش مفاجآت في النص."
                : "Every quote is fixed in writing before work begins. From a single project to running your whole company. No surprises midway."}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.nameEn} delay={0.06 * i}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-8 transition",
                  p.featured
                    ? "border-neutral-900 bg-neutral-950 text-white shadow-2xl"
                    : "border-neutral-200 bg-white hover:border-neutral-900 hover:shadow-xl"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{isRtl ? p.nameAr : p.nameEn}</h3>
                  {p.featured && (
                    <span className="rounded-full bg-amber-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {isRtl ? "الأكثر طلبًا" : "Most popular"}
                    </span>
                  )}
                </div>
                <p className="mt-3">
                  <span className="text-4xl font-black tracking-tight">{isRtl ? p.priceAr : p.priceEn}</span>
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
                          p.featured ? "bg-amber-600/20" : "bg-green-100"
                        )}
                      >
                        <Check size={12} strokeWidth={3} className={p.featured ? "text-amber-500" : "text-green-600"} />
                      </span>
                      <span className={p.featured ? "text-white/80" : "text-neutral-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition",
                    p.featured
                      ? "bg-white text-neutral-900 hover:bg-neutral-200"
                      : "bg-neutral-900 text-white hover:bg-neutral-700"
                  )}
                >
                  {isRtl ? "اطلب عرضك" : "Get your quote"}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-neutral-500">
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
        </Reveal>
      </div>
    </section>
  )
}
