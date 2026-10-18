"use client"

import Link from "next/link"
import { Reveal } from "./reveal"
import { useLanguage } from "@/components/language-context"
import {
  Server,
  Globe2,
  Mail,
  ShieldCheck,
  Store,
  LayoutDashboard,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"

const PANEL_URL = "https://panel.dipencil.com/login"

const features = [
  {
    icon: Server,
    titleEn: "VPS & cloud servers",
    titleAr: "سيرفرات VPS وسحابة",
    descEn: "Fast, monitored servers sized for your traffic. Never a stranger's guess.",
    descAr: "سيرفرات سريعة ومتراقبة على قد الترافيك بتاعك. عمرها ما كانت تخمين حد غريب.",
  },
  {
    icon: Globe2,
    titleEn: "Domains & DNS",
    titleAr: "الدومينات والـ DNS",
    descEn: "Buy, renew and point domains without ever opening a DNS tutorial.",
    descAr: "اشتري وجدّد ووجّه الدومينات من غير ما تفتح شرح DNS خالص.",
  },
  {
    icon: Mail,
    titleEn: "Business email",
    titleAr: "إيميلات الشركة",
    descEn: "name@yourcompany.com everywhere, set up and secured for you.",
    descAr: "إيميل باسم شركتك في كل حتة، متظبط ومتأمن من عندنا.",
  },
  {
    icon: ShieldCheck,
    titleEn: "SSL, backups & monitoring",
    titleAr: "شهادات الأمان والنسخ الاحتياطي",
    descEn: "Certificates, daily backups and round the clock eyes on your uptime.",
    descAr: "شهادات أمان ونسخ يومية وعين سهرانة على موقعك ليل نهار.",
  },
  {
    icon: Store,
    titleEn: "Play Store & App Store",
    titleAr: "جوجل بلاي وآب ستور",
    descEn: "We publish and maintain your app listings, updates included.",
    descAr: "بنرفع تطبيقك على المتاجر وبنتابع التحديثات أول بأول.",
  },
  {
    icon: LayoutDashboard,
    titleEn: "One panel for everything",
    titleAr: "بانل واحدة لكل حاجة",
    descEn: "Invoices, tickets, services and servers. One login, zero chaos.",
    descAr: "الفواتير والتذاكر والخدمات والسيرفرات. دخول واحد من غير لخبطة.",
  },
]

export function CloudPanelSection() {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"

  return (
    <section id="cloud-hosting" className="scroll-mt-24 border-y border-neutral-200 bg-white py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                {isRtl ? "السحابة والبانل" : "Cloud Panel"}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.05]">
                {isRtl ? (
                  <>
                    استضافة ودومينات ومتاجر،{" "}
                    <span className="font-light italic text-neutral-500">من بانل واحدة.</span>
                  </>
                ) : (
                  <>
                    Hosting, domains and stores,{" "}
                    <span className="font-light italic text-neutral-500">run from one panel.</span>
                  </>
                )}
              </h2>
              <p className="mt-5 leading-relaxed text-neutral-600">
                {isRtl
                  ? "من غير وجع دماغ الـ cPanel. ومن غير رسالة الموقع واقع الساعة 2 بالليل. السيرفر والدومين والإيميل والنسخ الاحتياطي ورفع المتاجر، كله عندنا. ووراه فريق بني آدمين بيرد."
                  : "Skip the cPanel headaches. Skip the site is down message at 2am. Servers, domains, email, backups and store publishing live with us. And behind them stands a human team that answers."}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PANEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-700"
                >
                  {isRtl ? "افتح البانل بتاعتك" : "Open your panel"}
                  <ExternalLink size={15} />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-bold transition hover:border-neutral-900"
                >
                  {isRtl ? "اسأل عن باقة" : "Ask about a plan"}
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <p className="mt-5 text-sm text-neutral-500">
                {isRtl
                  ? "عميل عندنا؟ كل خدماتك وفواتيرك وتذاكرك جوه البانل."
                  : "Already a client? Your services, invoices and tickets are all inside the panel."}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.titleEn} delay={0.05 * i}>
                <div className="group h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-900 hover:bg-white hover:shadow-xl">
                  <f.icon size={22} strokeWidth={1.8} />
                  <h3 className="mt-4 font-bold">{isRtl ? f.titleAr : f.titleEn}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                    {isRtl ? f.descAr : f.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl bg-neutral-950 px-8 py-8 text-white md:flex-row">
            <p className="text-center text-sm leading-relaxed text-white/70 md:text-start">
              {isRtl ? (
                <>
                  <span className="font-bold text-white">خدمة شركة استضافة كاملة، من الـ VPS لحد الإنبوكس.</span>
                  <br />
                  والفرق إن لما حاجة تقع بتكلمنا إحنا. مش بتفتح تذكرة وتستنى.
                </>
              ) : (
                <>
                  <span className="font-bold text-white">Full hosting company service, from VPS to inbox.</span>
                  <br />
                  The difference is simple. When something breaks you call us. No ticket queue.
                </>
              )}
            </p>
            <Link
              href="/support/technical"
              className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"
            >
              {isRtl ? "شوف الدعم التقني" : "See tech support"}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

