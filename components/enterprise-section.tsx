"use client"

import Link from "next/link"
import { Reveal } from "./reveal"
import { useLanguage } from "@/components/language-context"
import { Building2, KeyRound, LineChart, Sparkles, ArrowUpRight } from "lucide-react"

export function EnterpriseSection() {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"

  const points = [
    {
      icon: Building2,
      titleEn: "We run it with you",
      titleAr: "بندير معاك",
      descEn: "Systems, websites, apps and infrastructure, operated day to day. Delivered and never forgotten.",
      descAr: "السيستمات والمواقع والتطبيقات والبنية التحتية شغالة معاك يوم بيوم. بتتسلم ومبتتنسيش.",
    },
    {
      icon: KeyRound,
      titleEn: "One door for everything",
      titleAr: "باب واحد لكل حاجة",
      descEn: "A dedicated manager, a priority line and fixed SLAs. You never chase us. We report to you.",
      descAr: "مدير مخصص وخط أولوية واتفاقية خدمة مكتوبة. انت مبتجريش ورانا. احنا اللي بنبلّغك.",
    },
    {
      icon: LineChart,
      titleEn: "Priced like a partner",
      titleAr: "تسعير الشريك",
      descEn: "Monthly retainers covering hosting, updates, support and growth. One number with no surprises.",
      descAr: "اشتراك شهري يغطي الاستضافة والتحديثات والدعم والنمو. رقم واحد من غير مفاجآت.",
    },
    {
      icon: Sparkles,
      titleEn: "Pro AI gateway",
      titleAr: "بوابة الـ AI البرو",
      descEn: "Your team gets our Pro AI workspace, shaped around your business and guarded for enterprise use.",
      descAr: "فريقك بيدخل مساحة الـ AI البرو بتاعتنا، متفصلة على شغلك ومحمية للاستخدام المؤسسي.",
    },
  ]

  return (
    <section id="enterprise" className="relative scroll-mt-24 overflow-hidden border-b border-neutral-200/80 bg-white py-20 text-neutral-900 lg:py-28">
      <div className="container-custom relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {isRtl ? "المؤسسات والشركات" : "Enterprise"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl md:leading-[1.05]">
              {isRtl ? (
                <>
                  للشركات اللي <span className="font-light italic text-neutral-500">مينفعش تقع.</span>
                </>
              ) : (
                <>
                  For companies that <span className="font-light italic text-neutral-500">can&apos;t afford downtime.</span>
                </>
              )}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-neutral-600">
              {isRtl
                ? "لو السيستم بتاعك بيوقف شغل ناس، يبقى محتاج حد شايله معاك. مش شركة بتنفذ وتمشي. من 2014 واحنا شايلين شركات في مصر والخليج وأوروبا."
                : "If your system going down stops people's work, you need someone carrying it with you. Not a vendor that ships and disappears. We have carried companies across Egypt, the Gulf and Europe since 2014."}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.titleEn} delay={0.05 * i}>
              <div className="h-full rounded-3xl border border-neutral-200/80 bg-neutral-50/70 p-6 shadow-sm transition hover:border-neutral-900 hover:bg-white hover:shadow-lg">
                <p.icon size={22} strokeWidth={1.8} className="text-amber-500" />
                <h3 className="mt-4 font-bold text-neutral-950">{isRtl ? p.titleAr : p.titleEn}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  {isRtl ? p.descAr : p.descEn}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/superfeliz"
                className="inline-flex items-center gap-2 rounded-full bg-[#2057ff] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/15 transition hover:bg-blue-700"
              >
                {isRtl ? "ادخل بوابة البرو" : "Enter the Pro gateway"}
                <ArrowUpRight size={15} />
              </Link>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-bold text-neutral-800 shadow-sm transition hover:bg-neutral-50 hover:border-neutral-400"
              >
                {isRtl ? "اطلب عرض سعر" : "Get a quote"}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {[
                { n: "99.9%", lEn: "uptime target", lAr: "مستهدف التشغيل" },
                { n: isRtl ? "نفس اليوم" : "Same-day", lEn: "critical response", lAr: "رد الحالات الحرجة" },
                { n: "2014", lEn: "carrying clients since", lAr: "شايلين عملاء من" },
              ].map((s) => (
                <div key={s.n} className="flex items-baseline gap-2">
                  <span className="text-xl font-black tracking-tight text-neutral-950">{s.n}</span>
                  <span className="text-neutral-500">{isRtl ? s.lAr : s.lEn}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
