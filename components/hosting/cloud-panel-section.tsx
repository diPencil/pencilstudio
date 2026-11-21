"use client"

import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/shared/motion/reveal"
import { useLanguage } from "@/components/language-context"
import {
  Server,
  Globe2,
  Mail,
  ShieldCheck,
  Store,
  LayoutDashboard,
  ArrowUpRight,
  Headphones,
  CheckCircle2,
  Activity,
  Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { PencilButton } from "@/components/ui/pencil-button"

const PANEL_URL = "https://panel.dipencil.com/login"

interface ServiceCardData {
  id: string
  heroImage: string
  secondaryImage: string
  icon: any
  badgeEn: string
  badgeAr: string
  titleEn: string
  titleAr: string
  descEn: string
  descAr: string
  blueLabelEn: string
  blueLabelAr: string
  blueValueEn: string
  blueValueAr: string
  rightLabelEn: string
  rightLabelAr: string
  rightDescEn?: string
  rightDescAr?: string
  tldChips?: string[]
  badges?: { label: string; icon?: any }[]
}

const SERVICES_DATA: ServiceCardData[] = [
  {
    id: "01",
    heroImage: "/solutions/VPS-&-cloud-servers.jpg",
    secondaryImage: "/solutions/VPS-&-cloud-servers-2.jpg",
    icon: Server,
    badgeEn: "01 // High Performance Cloud",
    badgeAr: "01 // خوادم سحابية فائقة",
    titleEn: "VPS & cloud servers",
    titleAr: "سيرفرات VPS وسحابة",
    descEn: "Fast, monitored servers sized for your traffic. Never a stranger's guess.",
    descAr: "سيرفرات سريعة ومتراقبة على قد الترافيك بتاعك. عمرها ما كانت تخمين حد غريب.",
    blueLabelEn: "Virtualization Engine",
    blueLabelAr: "بيئة الخوادم الافتراضية",
    blueValueEn: "NVMe KVM",
    blueValueAr: "خوادم KVM فائقة",
    rightLabelEn: "Dedicated Sizing",
    rightLabelAr: "أداء مخصص بالكامل",
    rightDescEn: "Monitored servers with dedicated compute resources and zero noisy neighbors.",
    rightDescAr: "موارد مخصصة ومراقبة تضمن أداء مستقر ومستمر دون أي تأخير.",
  },
  {
    id: "02",
    heroImage: "/solutions/Domains-&-DNS.jpg",
    secondaryImage: "/solutions/Domains-&-DNS-2.jpg",
    icon: Globe2,
    badgeEn: "02 // Anycast DNS Network",
    badgeAr: "02 // شبكة Anycast عالمية",
    titleEn: "Domains & DNS",
    titleAr: "الدومينات والـ DNS",
    descEn: "Buy, renew and point domains without ever opening a DNS tutorial. Global Anycast DNS propagation in seconds.",
    descAr: "اشتري وجدّد ووجّه الدومينات من غير ما تفتح شرح DNS خالص. ربط فوري وشامل لأي سيرفر أو بريد إلكتروني.",
    blueLabelEn: "Propagation Speed",
    blueLabelAr: "سرعة انتشار الـ DNS",
    blueValueEn: "Near Instant",
    blueValueAr: "انتشار فوري بالثواني",
    rightLabelEn: "Global Anycast Network",
    rightLabelAr: "نظام Anycast موزع عالمياً",
    tldChips: [".com", ".sa", ".net", ".io", ".org"],
  },
  {
    id: "03",
    heroImage: "/solutions/Business-email.jpg",
    secondaryImage: "/solutions/Business-email-2.jpg",
    icon: Mail,
    badgeEn: "03 // Corporate Communication",
    badgeAr: "03 // بريد الشركات الاحترافي",
    titleEn: "Business email",
    titleAr: "إيميلات الشركة",
    descEn: "name@yourcompany.com everywhere, set up and secured for you.",
    descAr: "name@yourcompany.com everywhere، متظبط ومتأمن من عندنا ضد السبام.",
    blueLabelEn: "Security Protocol",
    blueLabelAr: "بروتوكول الأمان والفلترة",
    blueValueEn: "Anti-Spam & DKIM",
    blueValueAr: "حماية DKIM & SPF",
    rightLabelEn: "Official Inbox",
    rightLabelAr: "بريد رسمي معتمد",
    rightDescEn: "Enterprise webmail, IMAP/POP3, and automated SPF/DKIM records to protect your brand.",
    rightDescAr: "إعداد كامل للإنبوكس وتوافق تام مع كافة الأجهزة مع حماية شاملة من السبام.",
  },
  {
    id: "04",
    heroImage: "/solutions/SSL,-backups-&-monitoring.jpg",
    secondaryImage: "/solutions/SSL,-backups-&-monitoring-2.jpg",
    icon: ShieldCheck,
    badgeEn: "04 // Total Security & SLA",
    badgeAr: "04 // أمان وضمان تشغيل شامل",
    titleEn: "SSL, backups & monitoring",
    titleAr: "شهادات الأمان والنسخ الاحتياطي",
    descEn: "Automated SSL certificates, daily remote snapshots, and 24/7 uptime monitoring with zero ticket delays.",
    descAr: "شهادات أمان تلقائية، نسخ يومية سحابية، وعين سهرانة على موقعك وسيرفرك ليل نهار لضمان استقرار كامل.",
    blueLabelEn: "Uptime Commitment",
    blueLabelAr: "ضمان الاستقرار والتشغيل",
    blueValueEn: "99.99% SLA",
    blueValueAr: "99.99% SLA",
    rightLabelEn: "Live Health & Backups",
    rightLabelAr: "نسخ يومي ومراقبة حية",
    badges: [
      { label: "99.99% SLA", icon: Activity },
      { label: "Auto Daily Snapshots", icon: CheckCircle2 },
    ],
  },
  {
    id: "05",
    heroImage: "/solutions/Play-Store-&-App-Store.jpg",
    secondaryImage: "/solutions/Play-Store-&-App-Store-2.jpg",
    icon: Store,
    badgeEn: "05 // App Store Operations",
    badgeAr: "05 // إدارة حسابات المتاجر",
    titleEn: "Play Store & App Store",
    titleAr: "جوجل بلاي وآب ستور",
    descEn: "We publish and maintain your app listings, updates and approvals included.",
    descAr: "بنرفع تطبيقك على المتاجر وبنتابع التحديثات ومراجعات المنصات أول بأول.",
    blueLabelEn: "Publishing Pipeline",
    blueLabelAr: "مسار النشر والمراجعة",
    blueValueEn: "Full Publishing",
    blueValueAr: "نشر وإدارة كاملة",
    rightLabelEn: "Apple & Google Sync",
    rightLabelAr: "جاهزية المتجرين",
    rightDescEn: "Policy compliance, metadata optimization, and scheduled binary releases managed directly.",
    rightDescAr: "إدارة متكاملة لسياسات المتاجر، رفع التحديثات، ومتابعة القبول الرسمي دون تعقيدات.",
  },
  {
    id: "06",
    heroImage: "/solutions/One-panel-for-everything.jpg",
    secondaryImage: "/solutions/One-panel-for-everything-2.jpg",
    icon: LayoutDashboard,
    badgeEn: "06 // Unified Command Center",
    badgeAr: "06 // لوحة تحكم مركزية",
    titleEn: "One panel for everything",
    titleAr: "بانل واحدة لكل حاجة",
    descEn: "Invoices, tickets, services and servers. One login, zero chaos.",
    descAr: "الفواتير والتذاكر والخدمات والسيرفرات. دخول واحد من غير لخبطة.",
    blueLabelEn: "Centralized Portal",
    blueLabelAr: "بوابة التحكم المركزية",
    blueValueEn: "panel.dipencil.com",
    blueValueAr: "panel.dipencil.com",
    rightLabelEn: "Unified Access",
    rightLabelAr: "دخول مركزي موحد",
    rightDescEn: "Complete financial transparency, server management, and direct support in one interface.",
    rightDescAr: "فواتيرك، خدماتك، تذاكر الدعم وسيرفراتك في منصة واحدة سهلة الاستخدام بدون أي تشتت.",
  },
]

export function CloudPanelSection() {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"

  return (
    <section id="cloud-hosting" className="relative scroll-mt-24 overflow-hidden border-y border-neutral-200/80 bg-[#FAFAFC] py-20 lg:py-28">
      {/* Ambient Background Grid & Radial Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#2057ff0e_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#2057ff]/6 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#00d2ff]/5 blur-[120px]" />

      <div className="container-custom relative">
        {/* ============================================================ */}
        {/* TOP HEADER: 2-COLUMN SPLIT (Title on left, Description & CTA on right) */}
        {/* ============================================================ */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-start mb-12 lg:mb-16">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                {isRtl ? "السحابة والبانل" : "Cloud Panel"}
              </p>
              <h2 className={cn("mt-3 text-3xl font-normal text-neutral-900 md:text-5xl lg:text-6xl md:leading-[1.08]", isRtl ? "tracking-normal" : "tracking-tight")}>
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
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col justify-between h-full pt-1">
              <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
                {isRtl
                  ? "من غير وجع دماغ الـ cPanel. ومن غير رسالة الموقع واقع الساعة 2 بالليل. السيرفر والدومين والإيميل والنسخ الاحتياطي ورفع المتاجر، كله عندنا. ووراه فريق بني آدمين بيرد."
                  : "Skip the cPanel headaches. Skip the site is down message at 2am. Servers, domains, email, backups and store publishing live with us. And behind them stands a human team that answers."}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <PencilButton
                  href={PANEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  hoverLabel={isRtl ? "دخول البانل ←" : "Access panel →"}
                >
                  <span>{isRtl ? "افتح البانل بتاعتك" : "Open your panel"}</span>
                </PencilButton>

                <PencilButton
                  href="/#contact"
                  variant="outline"
                  size="md"
                  showPencilIcon={false}
                >
                  <span>{isRtl ? "اسأل عن باقة" : "Ask about a plan"}</span>
                </PencilButton>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-neutral-500">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>
                  {isRtl
                    ? "عميل عندنا؟ كل خدماتك وفواتيرك وتذاكرك جوه البانل."
                    : "Already a client? Your services, invoices and tickets are all inside the panel."}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* 6 REDESIGNED SERVICE CARDS (Stacked 1-col, Hero + 3-box row)  */}
        {/* ============================================================ */}
        <div className="flex flex-col gap-10 sm:gap-14">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={0.06 * idx} className="w-full">
                <div className="group flex w-full flex-col">
                  {/* Top Section (Hero Banner) - Full spacious height so the entire image and 3D graphics show clearly */}
                  <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden rounded-3xl border border-neutral-200/90 bg-neutral-950 shadow-sm transition-all duration-500 hover:border-[#2057ff]/40 hover:shadow-xl hover:shadow-blue-500/10">
                    <Image
                      src={service.heroImage}
                      alt={isRtl ? service.titleAr : service.titleEn}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      priority={idx < 2}
                    />

                    {/* Subtle soft blue gradient on text side, transparent across the graphic side */}
                    <div
                      className={cn(
                        "absolute inset-0 pointer-events-none",
                        isRtl
                          ? "bg-gradient-to-l from-[#0e2c82]/45 via-[#1848cc]/15 via-35% to-transparent"
                          : "bg-gradient-to-r from-[#0e2c82]/45 via-[#1848cc]/15 via-35% to-transparent"
                      )}
                    />

                    {/* Banner Content: Vertically centered on the text side, exactly matching the reference layout */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-7 sm:px-12 lg:px-16">
                      {/* Pill badge directly above title */}
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-md backdrop-blur-md mb-3.5 sm:mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2057FF]" />
                        {isRtl ? service.badgeAr : service.badgeEn}
                      </span>

                      {/* Main Title: Large, prominent hero typography (clean solid white, zero shadow) */}
                      <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight text-white leading-[1.08] max-w-2xl">
                        {isRtl ? service.titleAr : service.titleEn}
                      </h3>

                      {/* Description right below title */}
                      <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/95">
                        {isRtl ? service.descAr : service.descEn}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Section: 3-box horizontal row */}
                  <div className="mt-3.5 sm:mt-4 grid grid-cols-12 gap-3 sm:gap-4 items-stretch" dir="ltr">
                    {/* 1. Left: Small square/16:9 image */}
                    <div className="col-span-4 sm:col-span-3 lg:col-span-3 relative h-[100px] sm:h-[115px] lg:h-[125px] overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-100 shadow-sm">
                      <Image
                        src={service.secondaryImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 33vw, 25vw"
                      />
                    </div>

                    {/* 2. Center: Solid Blue Block */}
                    <div className="col-span-8 sm:col-span-4 lg:col-span-4 flex flex-col justify-between rounded-2xl bg-[#2057FF] p-4 sm:p-5 text-white shadow-md shadow-blue-600/15">
                      <span
                        className="text-[11px] sm:text-xs font-mono font-medium uppercase tracking-wider text-blue-100 truncate"
                        dir={isRtl ? "rtl" : "ltr"}
                      >
                        {isRtl ? service.blueLabelAr : service.blueLabelEn}
                      </span>
                      <div className="mt-2 flex items-center gap-2.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                          <Icon size={14} strokeWidth={2.5} />
                        </span>
                        <span
                          className="text-sm sm:text-base lg:text-lg font-black tracking-tight text-white truncate"
                          dir={isRtl ? "rtl" : "ltr"}
                        >
                          {isRtl ? service.blueValueAr : service.blueValueEn}
                        </span>
                      </div>
                    </div>

                    {/* 3. Right: Extra Info Block */}
                    <div
                      className="col-span-12 sm:col-span-5 lg:col-span-5 flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-4 sm:p-5 shadow-sm"
                      dir={isRtl ? "rtl" : "ltr"}
                    >
                      <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                        {isRtl ? service.rightLabelAr : service.rightLabelEn}
                      </span>

                      {service.tldChips ? (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {service.tldChips.map((tld) => (
                            <span
                              key={tld}
                              className="rounded-md border border-neutral-200/90 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] font-bold text-neutral-700"
                            >
                              {tld}
                            </span>
                          ))}
                        </div>
                      ) : service.badges ? (
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                            <Activity size={12} className="text-emerald-600" />
                            99.99% SLA
                          </span>
                          <span className="flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-[#2057FF]">
                            <CheckCircle2 size={12} />
                            Auto Snapshots
                          </span>
                        </div>
                      ) : (
                        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-600 line-clamp-2">
                          {isRtl ? service.rightDescAr : service.rightDescEn}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* ============================================================ */}
        {/* Bottom Banner: 24/7 Human Support Assurance (Signature Blue)  */}
        {/* ============================================================ */}
        <Reveal delay={0.2}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-r from-[#143eb8] via-[#2057ff] to-[#0f34a4] p-7 sm:p-9 shadow-2xl shadow-blue-600/25 text-white">
            {/* Ambient Lighting Accents */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#00d2ff]/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4 text-center md:text-start">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur-md text-white shadow-inner">
                  <Headphones size={24} />
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-100">
                      {isRtl ? "دعم تقني مباشر 24/7" : "24/7 DEDICATED SUPPORT"}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  </div>
                  <p className="mt-1 text-sm sm:text-base leading-relaxed text-blue-50/95">
                    {isRtl ? (
                      <>
                        <span className="font-bold text-white">خدمة شركة استضافة كاملة، من الـ VPS لحد الإنبوكس.</span>
                        {" "}والفرق إن لما حاجة تقع بتكلمنا إحنا، من غير تذاكر انتظار.
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-white">Full hosting company service, from VPS to inbox.</span>
                        {" "}When something breaks you reach our direct team, zero ticket queues.
                      </>
                    )}
                  </p>
                </div>
              </div>

              <PencilButton
                href="/support/technical"
                variant="primary"
                size="md"
                hoverLabel={isRtl ? "تواصل معنا ←" : "Contact support →"}
              >
                <span>{isRtl ? "تواصل مع الدعم التقني" : "See tech support"}</span>
              </PencilButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
