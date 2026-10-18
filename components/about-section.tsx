"use client"

import Image from "next/image"
import { Reveal } from "./reveal"
import { useLanguage } from "@/components/language-context"

const chapters = [
  {
    yearEn: "2014, Cairo",
    yearAr: "2014، القاهرة",
    titleEn: "A sketch on a desk",
    titleAr: "اسكتش على مكتب",
    descEn: "We started as designers obsessed with one thing. Work that looks good and actually works.",
    descAr: "بدأنا ديزاينرز مهووسين بحاجة واحدة. شغل شكله حلو وشغال بجد.",
  },
  {
    yearEn: "2017, the Gulf and the region",
    yearAr: "2017، الخليج والمنطقة",
    titleEn: "Systems people live on",
    titleAr: "سيستمات ناس عايشة عليها",
    descEn: "Booking systems, real estate platforms, restaurant operations. The region trusted us with daily work systems, and we delivered.",
    descAr: "سيستمات حجز ومنصات عقارات وتشغيل مطاعم. المنطقة ائتمنتنا على سيستمات الشغل اليومي، وكنا قدها.",
  },
  {
    yearEn: "2021, Europe and mobile",
    yearAr: "2021، أوروبا والموبايل",
    titleEn: "Apps, SaaS and cloud",
    titleAr: "تطبيقات وسحابة",
    descEn: "iOS, Android, SaaS products and serious cloud operations. Same obsession, bigger stage.",
    descAr: "آيفون وأندرويد ومنتجات SaaS وتشغيل سحابي تقيل. نفس الهوس على مسرح أكبر.",
  },
  {
    yearEn: "2024, the AI era",
    yearAr: "2024، عصر الـ AI",
    titleEn: "Super Feliz is born",
    titleAr: "اتولد سوبر فيليز",
    descEn: "A decade of client work became an AI model that carries it. Plus our own cloud panel, hosting to inbox, all in house.",
    descAr: "عشر سنين شغل مع عملاء اتحولت لموديل AI شايل الخبرة دي. ومعاها البانل السحابية بتاعتنا، من الاستضافة للإنبوكس، كله من بيتنا.",
  },
]

const stripImages = [
  "/business-sectors/tourism-booking.jpg",
  "/business-sectors/real-estate.jpg",
  "/business-sectors/restaurant-pos.jpg",
  "/business-sectors/e-commerce.jpg",
  "/business-sectors/crm-automation.jpg",
  "/business-sectors/education-lms.jpg",
]

export function AboutSection() {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-neutral-950 py-20 text-white lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(700px 320px at 85% 5%, rgba(161,98,7,0.2), transparent 60%), radial-gradient(600px 300px at 10% 95%, rgba(255,255,255,0.06), transparent 60%)",
        }}
      />
      <div className="container-custom relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              {isRtl ? "من 2014" : "Since 2014"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.05]">
              {isRtl ? (
                <>
                  ستوديو من القاهرة{" "}
                  <span className="font-light italic text-white/60">كبر مع إنترنت المنطقة.</span>
                </>
              ) : (
                <>
                  A Cairo studio that{" "}
                  <span className="font-light italic text-white/60">grew up with the region&apos;s internet.</span>
                </>
              )}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
              {isRtl
                ? "مش شركة وليدة امبارح ولا تيم فريلانسرز متجمع. احنا قصة طويلة في الديجيتال: مصر والشرق الأوسط والخليج وأوروبا. نفس الاسم ونفس الهوس من 2014."
                : "Not an overnight agency. Not a thrown together freelance team. We are a long digital story: Egypt, the Middle East, the Gulf and Europe. Same name and same obsession since 2014."}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {chapters.map((c, i) => (
            <Reveal key={c.yearEn} delay={0.06 * i}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-white/25">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-500">
                  {isRtl ? c.yearAr : c.yearEn}
                </p>
                <h3 className="mt-3 text-lg font-bold">{isRtl ? c.titleAr : c.titleEn}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {isRtl ? c.descAr : c.descEn}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-white/10 py-8">
            {[
              { n: "10+", lEn: "years in the market", lAr: "سنين في السوق" },
              { n: "890+", lEn: "projects delivered", lAr: "مشروع اتسلّم" },
              { n: "4", lEn: "regions: EG, MEA, Gulf, EU", lAr: "مناطق: مصر والشرق الأوسط والخليج وأوروبا" },
              { n: "24h", lEn: "max first reply", lAr: "أقصى أول رد" },
            ].map((s) => (
              <div key={s.n} className="flex items-baseline gap-3">
                <span className="text-4xl font-black tracking-tight md:text-5xl">{s.n}</span>
                <span className="max-w-[180px] text-sm text-white/50">{isRtl ? s.lAr : s.lEn}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden" dir="ltr">
        <div className="gallery-marquee-ltr flex w-max gap-4 pe-4">
          {[...stripImages, ...stripImages].map((src, i) => (
            <span key={i} className="relative block h-44 w-72 shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-52 md:w-80">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="320px"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </span>
          ))}
        </div>
      </div>

      <div className="container-custom relative">
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-8 backdrop-blur-sm md:flex-row">
            <p className="text-center text-sm leading-relaxed text-white/70 md:text-start">
              {isRtl ? (
                <>
                  <span className="font-bold text-white">عايز تعرف أكتر؟</span> الأسئلة الشائعة فيها كل حاجة:
                  الأسعار والمواعيد والنسخة العربية.
                </>
              ) : (
                <>
                  <span className="font-bold text-white">Want the full picture?</span> The FAQs answer it all:
                  pricing, timelines, Arabic versions.
                </>
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/help/faqs"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
              >
                {isRtl ? "الأسئلة الشائعة" : "FAQs"}
              </a>
              <a
                href="/#contact"
                className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold transition hover:bg-white/15"
              >
                {isRtl ? "كلمنا" : "Talk to us"}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
