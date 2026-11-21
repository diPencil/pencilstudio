"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  CloudCog,
  Code2,
  Compass,
  DatabaseZap,
  Globe2,
  Headphones,
  LineChart,
  LockKeyhole,
  Mail,
  MapPinned,
  Megaphone,
  MonitorSmartphone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/motion/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilSectionTitle, PencilCTA, PENCIL } from "@/components/shared/ui/pencil-ui";
import { SectionHeading } from "@/components/editorial";
import { cn } from "@/lib/utils";
import { PencilButton } from "@/components/ui/pencil-button";
import {
  PricingCurrencyCode,
  PRICING_CURRENCIES,
  PRICING_CURRENCY_CODES,
  formatPrice,
} from "@/lib/pricing/pricing-currency";

const panelUrl = "https://panel.dipencil.com/login";

export function SolutionsDepth() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const stack = [
    { icon: Sparkles, titleEn: "Brand that earns trust", titleAr: "براند يكسب ثقة", descEn: "Naming, identity, content voice, campaign visuals and UI direction that make your company feel established from day one.", descAr: "تسمية وهوية ونبرة محتوى وفيجوالز واتجاه واجهات يخلي شركتك باينة ناضجة من أول يوم." },
    { icon: MonitorSmartphone, titleEn: "Platforms people use", titleAr: "منصات الناس تستخدمها", descEn: "Corporate sites, SaaS dashboards, booking engines, mobile apps and internal systems built around real operations.", descAr: "مواقع شركات وداشبورد SaaS وحجوزات وتطبيقات وسيستمات داخلية مبنية على التشغيل الحقيقي." },
    { icon: LineChart, titleEn: "Growth you can read", titleAr: "نمو تقدر تقراه", descEn: "SEO, landing pages, tracking, funnels and reports that show where the client came from and what happened next.", descAr: "سيو وصفحات هبوط وتتبع وفانلز وتقارير تقول العميل جه منين وعمل إيه بعد كده." },
    { icon: CloudCog, titleEn: "Cloud that stays awake", titleAr: "سحابة صاحية", descEn: "VPS, domains, business email, backups, monitoring and app-store publishing handled by the same team.", descAr: "VPS ودومينات وإيميلات ونسخ ومراقبة ورفع متاجر من نفس الفريق اللي بيبني." },
  ];
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="container-custom grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <PencilSectionTitle
              isRtl={isRtl}
              kicker={isRtl ? "المنظومة" : "The operating system"}
              title={isRtl ? <>مش خدمة واحدة. <span className="font-light italic text-neutral-500">شركة رقمية كاملة.</span></> : <>Not one service. <span className="font-light italic text-neutral-500">A full digital company.</span></>}
            />
            <p className="mt-5 leading-relaxed text-neutral-600">
              {isRtl
                ? "إحنا بنقفل الدائرة: شكل يليق، منصة تشتغل، تسويق يجيب ناس، وتشغيل يحافظ على كل ده. العميل ميبقاش بين ديزاينر ومبرمج وهوستنج وماركتنج. يبقى عنده فريق واحد مسؤول."
                : "We close the loop: a sharper presence, a platform that runs, growth that brings people in, and operations that keep everything alive. Your client stops chasing designers, developers, hosting and marketing. One team owns the outcome."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PencilButton
                href="/pricing"
                variant="primary"
                size="md"
                hoverLabel={isRtl ? "عرض الباقات ←" : "View pricing →"}
              >
                <span>{isRtl ? "شوف الأسعار" : "See pricing"}</span>
              </PencilButton>
              <PencilButton
                href="/support/callback"
                variant="outline"
                size="md"
                showPencilIcon={false}
              >
                <span>{isRtl ? "اطلب مكالمة" : "Request a call"}</span>
              </PencilButton>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {stack.map((item, i) => (
            <Reveal key={item.titleEn} delay={0.05 * i}>
              <div className={cn("h-full p-6", i === 0 || i === 3 ? "rounded-3xl bg-neutral-950 text-white" : PENCIL.card)}>
                <item.icon size={23} className={i === 0 || i === 3 ? "text-[#8fb0ff]" : "text-neutral-900"} />
                <h3 className="mt-4 text-xl font-bold">{isRtl ? item.titleAr : item.titleEn}</h3>
                <p className={cn("mt-2 text-sm leading-relaxed", i === 0 || i === 3 ? "text-white/65" : "text-neutral-600")}>{isRtl ? item.descAr : item.descEn}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectorsDepth() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const plays = [
    { titleEn: "Tourism", titleAr: "السياحة", bodyEn: "Availability, trips, suppliers, payments and WhatsApp follow-up without losing the passenger.", bodyAr: "إتاحة ورحلات وموردين ومدفوعات ومتابعة واتساب من غير ما العميل يضيع." },
    { titleEn: "Real estate", titleAr: "العقارات", bodyEn: "Lead capture, unit matching, sales pipeline and owner reports that stop hot leads from going cold.", bodyAr: "تجميع ليدز وترشيح وحدات وبايبلاين مبيعات وتقارير ملاك تمنع العميل السخن يبرد." },
    { titleEn: "Restaurants", titleAr: "المطاعم", bodyEn: "Menu, QR, POS, kitchen flow, branches and delivery logic that works during rush hour.", bodyAr: "منيو وQR وكاشير ومطبخ وفروع ودليفري شغالين وقت الزحمة مش في الديمو بس." },
    { titleEn: "Education", titleAr: "التعليم", bodyEn: "Courses, subscriptions, student progress, teacher tools and dashboards parents can understand.", bodyAr: "كورسات واشتراكات وتقدم طلبة وأدوات مدرسين وداشبورد يفهمها ولي الأمر." },
  ];
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="container-custom py-14 md:py-20">
        <PencilSectionTitle
          isRtl={isRtl}
          kicker={isRtl ? "بنذاكر القطاع" : "We study the trade"}
          title={isRtl ? <>كل قطاع له <span className="font-light italic text-neutral-500">طريقة بيع وتشغيل.</span></> : <>Every sector has <span className="font-light italic text-neutral-500">its own sales and operations logic.</span></>}
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {plays.map((play, i) => (
            <Reveal key={play.titleEn} delay={0.05 * i}>
              <div className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-900 hover:bg-white hover:shadow-xl">
                <span className="font-mono text-xs font-black text-neutral-300">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-bold">{isRtl ? play.titleAr : play.titleEn}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{isRtl ? play.bodyAr : play.bodyEn}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CloudHostingDepth() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const items = [
    { icon: Server, en: "Managed VPS", ar: "VPS مُدار" },
    { icon: Globe2, en: "Domains & DNS", ar: "دومينات وDNS" },
    { icon: Mail, en: "Business email", ar: "إيميلات الشركة" },
    { icon: ShieldCheck, en: "SSL & backups", ar: "SSL ونسخ احتياطي" },
    { icon: Store, en: "Google Play & App Store", ar: "جوجل بلاي وآب ستور" },
    { icon: Headphones, en: "Tickets & support", ar: "تذاكر ودعم" },
  ];
  return (
    <section className="bg-neutral-950 py-14 text-white md:py-20">
      <div className="container-custom grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">{isRtl ? "زي شركات الهوستنج الكبيرة" : "Like a serious hosting company"}</p>
            <h2 className="mt-3 text-3xl font-normal tracking-tight md:text-5xl md:leading-[1.12] text-white">
              {isRtl ? <>كل حاجة من الدومين للـ VPS <span className="font-light italic text-neutral-400">في مكان واحد.</span></> : <>Everything from domain to VPS <span className="font-light italic text-neutral-400">in one place.</span></>}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/65">
              {isRtl
                ? "الصفحة دي مش Programs بعد الآن. دي بوابة السحابة والاستضافة: خدماتك، فواتيرك، تذاكرك، سيرفرك، إيميلاتك، ومتاجر تطبيقاتك. نفس منطق Hostinger، لكن مع فريق يعرف مشروعك من الداخل."
                : "This is your cloud and hosting gateway: services, invoices, tickets, servers, email and app stores. The Hostinger-style clarity, backed by a team that actually knows your product."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PencilButton
                href={panelUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                hoverLabel={isRtl ? "دخول البانل ←" : "Access panel →"}
              >
                <span>{isRtl ? "افتح البانل" : "Open panel"}</span>
              </PencilButton>
              <PencilButton
                href="/support/technical"
                variant="outline"
                size="md"
                showPencilIcon={false}
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <span>{isRtl ? "الدعم التقني" : "Technical support"}</span>
              </PencilButton>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item, i) => (
            <Reveal key={item.en} delay={0.04 * i}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <item.icon size={21} className="text-[#8fb0ff]" />
                <p className="mt-3 text-sm font-bold">{isRtl ? item.ar : item.en}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EnterpriseDepth() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  return (
    <section className="border-t border-neutral-200/80 bg-[#F8F9FA] py-14 text-neutral-900 md:py-20">
      <div className="container-custom grid gap-8 lg:grid-cols-3">
        {[{ icon: LockKeyhole, en: "SLA and access control", ar: "SLA وصلاحيات" }, { icon: DatabaseZap, en: "Integrations and data flows", ar: "تكاملات وتدفق بيانات" }, { icon: Sparkles, en: "SuperFeliz PRO gateway", ar: "بوابة سوبر فيليز PRO" }].map((item, i) => (
          <Reveal key={item.en} delay={0.05 * i}>
            <div className="h-full rounded-3xl border border-neutral-200/80 bg-white p-7 shadow-sm">
              <item.icon size={24} className="text-amber-500" />
              <h3 className="mt-5 text-xl font-bold text-neutral-950">{isRtl ? item.ar : item.en}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {isRtl
                  ? "بنشتغل مع الإدارة والفريق التقني والتشغيل كأننا جزء من الشركة: صلاحيات واضحة، حماية، تقارير، ومسار تصعيد لما الموضوع يبقى حساس."
                  : "We work with management, tech and operations like an extension of the company: clear permissions, security, reporting and escalation when things are sensitive."}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

interface PricingDepthProps {
  selectedCurrency?: PricingCurrencyCode;
  onSelectCurrency?: (curr: PricingCurrencyCode) => void;
}

export function PricingDepth({
  selectedCurrency: externalCurrency,
  onSelectCurrency,
}: PricingDepthProps = {}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [internalCurrency, setInternalCurrency] = useState<PricingCurrencyCode>("USD");

  const activeCurrencyCode = externalCurrency || internalCurrency;
  const activeCurrency = PRICING_CURRENCIES[activeCurrencyCode] || PRICING_CURRENCIES.USD;
  const handleSelectCurrency = onSelectCurrency || setInternalCurrency;

  const rows = [
    {
      id: "01",
      categoryEn: "Websites",
      categoryAr: "مواقع ويب",
      serviceEn: "Websites & landing pages",
      serviceAr: "المواقع الإلكترونية وصفحات الهبوط",
      baseUsd: 499.99,
      isMonthly: false,
      noteEn: "corporate sites, marketing landing pages, sub-second Next.js build, headless CMS, technical SEO",
      noteAr: "مواقع الشركات، صفحات هبوط تسويقية، برمجة Next.js سريعة، لوحة تحكم، وسيو تقني أساسي",
      href: "/services/websites-platforms",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "02",
      categoryEn: "E-Commerce & Portals",
      categoryAr: "متاجر وبوابات",
      serviceEn: "Digital platforms & E-commerce",
      serviceAr: "المنصات الرقمية والمتاجر الإلكترونية",
      baseUsd: 999.99,
      isMonthly: false,
      noteEn: "high-volume digital commerce, custom storefronts, payment gateways, inventory & order portal",
      noteAr: "منصات تجارة إلكترونية، متاجر مخصصة، بوابات دفع متعددة، وإدارة متطورة للمخزون والطلبات",
      href: "/services/websites-platforms",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "03",
      categoryEn: "Mobile Apps",
      categoryAr: "تطبيقات موبايل",
      serviceEn: "Mobile app (iOS & Android)",
      serviceAr: "تطبيقات الموبايل (iOS وأندرويد)",
      baseUsd: 749.99,
      isMonthly: false,
      noteEn: "iOS & Android, offline-first sync, payment gateways, role-based backend, store launch",
      noteAr: "آيفون وأندرويد، مزامنة دون إنترنت، بوابات دفع إلكتروني، باك إند بصلاحيات، ورفع المتاجر",
      href: "/services/mobile-apps-saas",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "04",
      categoryEn: "Desktop Apps",
      categoryAr: "برامج كمبيوتر",
      serviceEn: "Desktop software (Windows, macOS & Linux)",
      serviceAr: "برامج الكمبيوتر (Windows, macOS, Linux)",
      baseUsd: 699.99,
      isMonthly: false,
      noteEn: "native desktop performance, cross-platform build (Electron / Tauri), offline storage, auto-updates",
      noteAr: "أداء سطح مكتب فائق، تشغيل متوافق مع ويندوز وماك ولينكس، عمل دون إنترنت، وتحديثات تلقائية",
      href: "/services/mobile-apps-saas",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "05",
      categoryEn: "SaaS Platforms",
      categoryAr: "أنظمة SaaS",
      serviceEn: "SaaS product development",
      serviceAr: "برمجة وتطوير منتجات الـ SaaS",
      baseUsd: 499.99,
      isMonthly: false,
      noteEn: "multi-tenant architecture, recurring subscription billing, user auth & RBAC, admin dashboard",
      noteAr: "معمارية متعددة المستأجرين، فوترة الاشتراكات المتكررة، إدارة المستخدمين والصلاحيات، وداشبورد إداري",
      href: "/services/mobile-apps-saas",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "06",
      categoryEn: "Cloud & Hosting",
      categoryAr: "سحابة واستضافة",
      serviceEn: "Hostinger cloud & web hosting",
      serviceAr: "استضافة هوستنجر السحابية وإدارة المواقع",
      baseUsd: 2.99,
      isMonthly: true,
      noteEn: "ultra-fast NVMe cloud hosting powered by Hostinger, host up to 100 websites, cPanel, free lifetime SSL, automated daily backups & zero-downtime migration",
      noteAr: "استضافة سحابية فائقة السرعة NVMe على هوستنجر، تشغيل حتى 100 موقع، لوحة cPanel، شهادات SSL مجانية، ونقل مجاني لموقعك",
      href: "/cloud-hosting",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "07",
      categoryEn: "Domains & DNS",
      categoryAr: "دومينات وDNS",
      serviceEn: "Domain registration & DNS management",
      serviceAr: "حجز النطاقات وإدارة الـ DNS",
      baseUsd: 9.99,
      isMonthly: "year" as any,
      noteEn: "global & regional TLDs (.com, .sa, .net, .org, .eg), Anycast DNS routing, free WHOIS privacy, and automated DNS record management",
      noteAr: "حجز نطاقات دولية ومحلية (.com, .sa, .net, .org)، توجيه Anycast DNS سريع، خصوصية WHOIS مجانية، وحماية التجديد",
      href: "/cloud-hosting",
      ctaEn: "Claim Domain",
      ctaAr: "حجز دومين",
    },
    {
      id: "08",
      categoryEn: "Business Email",
      categoryAr: "إيميلات الشركات",
      serviceEn: "Corporate business email suites",
      serviceAr: "البريد الإلكتروني الرسمي للشركات",
      baseUsd: 1.99,
      isMonthly: true,
      noteEn: "branded mailboxes (name@yourcompany.com), strict SPF, DKIM & DMARC anti-spam protocols, Webmail and Outlook / Gmail mobile sync",
      noteAr: "صناديق بريد رسمية باسم شركتك، حماية SPF وDKIM وDMARC ضد وصول الرسائل للسبام، ومزامنة هواتف الفريق وOutlook وGmail",
      href: "/cloud-hosting",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "09",
      categoryEn: "Cloud VPS",
      categoryAr: "سيرفرات VPS",
      serviceEn: "Managed Cloud VPS (Linux & Windows RDP)",
      serviceAr: "سيرفرات VPS السحابية (لينكس ورسومي RDP)",
      baseUsd: 6.99,
      isMonthly: true,
      noteEn: "high-frequency AMD EPYC KVM virtualization, pure NVMe Gen4 disk, dedicated IPv4, full root access, Docker & microservices ready",
      noteAr: "أنوية معالجة KVM بمعالجات AMD EPYC، تخزين NVMe Gen4، وصول كامل للجذر (Root)، عنوان IPv4 مخصص، وجاهز للدوكر وقواعد البيانات",
      href: "/cloud-hosting",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "10",
      categoryEn: "Security & SSL",
      categoryAr: "أمان وتشفير SSL",
      serviceEn: "SSL security certificates & encryption",
      serviceAr: "شهادات أمان SSL وتشفير المواقع",
      baseUsd: 9.99,
      isMonthly: "year" as any,
      noteEn: "Wildcard & EV/OV SSL certificates, 256-bit bank-grade encryption, trust padlock, automated renewal, and multi-subdomain protection",
      noteAr: "شهادات SSL معتمدة وWildcard، تشفير بنكي 256-bit، قفل الأمان الأخضر، تجديد تلقائي، وتأمين كافة النطاقات الفرعية",
      href: "/cloud-hosting",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "11",
      categoryEn: "DevOps & Cloud Ops",
      categoryAr: "سحابة وDevOps",
      serviceEn: "Dedicated Cloud & DevOps Operations",
      serviceAr: "الإدارة السحابية المتقدمة وعمليات DevOps",
      baseUsd: 149.99,
      isMonthly: true,
      noteEn: "24/7 proactive cloud monitoring, automated security patching, multi-cloud disaster recovery, CI/CD pipeline automation & urgent DevOps response",
      noteAr: "مراقبة هندسية استباقية 24/7، سد الثغرات وتحديثات الأمان، نسخ احتياطي سحابي متعدد، أتمتة الـ CI/CD، وتدخل طوارئ سريع",
      href: "/cloud-hosting",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "12",
      categoryEn: "Tech Advisory",
      categoryAr: "استشارات تقنية",
      serviceEn: "IT Consulting & Advisory",
      serviceAr: "الاستشارات التقنية وهندسة النظم",
      baseUsd: null,
      isMonthly: false,
      noteEn: "CCTV & surveillance systems, enterprise networks & IT infrastructure, architecture audit, cloud infrastructure roadmap, tech stack selection, executive advisory",
      noteAr: "كاميرات المراقبة، شبكات الشركات والـ Network، البنية التحتية لتكنولوجيا المعلومات، تدقيق المعمارية، وخريطة طريق السحابة",
      href: "/support/callback",
      ctaEn: "Advisory",
      ctaAr: "استشارة",
    },
    {
      id: "13",
      categoryEn: "Creative Systems",
      categoryAr: "هوية وأنظمة بصرية",
      serviceEn: "Brand identity & creative systems",
      serviceAr: "الهوية المؤسسية والأنظمة البصرية",
      baseUsd: 499.99,
      isMonthly: false,
      noteEn: "positioning workshop, logo system, Arabic + Latin typography, brand book, social & print kit",
      noteAr: "ورشة تموضع، منظومة الشعار، خطوط عربية ولاتينية، كتيب الهوية، وقوالب السوشيال والطباعة",
      href: "/services/brand-identity",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "14",
      categoryEn: "Social & Creative",
      categoryAr: "سوشيال ميديا وتصميم",
      serviceEn: "Social media design packages",
      serviceAr: "باقات تصميم السوشيال ميديا",
      baseUsd: 299.99,
      isMonthly: false,
      noteEn: "monthly content calendar, branded post templates, motion reels, story kits, engagement graphics",
      noteAr: "خطة محتوى شهرية، قوالب بوستات بهويتك، ريلز وموشن جرافيك، قوالب ستوري، وتصاميم تفاعلية",
      href: "/#contact",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "15",
      categoryEn: "Enterprise Ops",
      categoryAr: "أنظمة أعمال وداشبورد",
      serviceEn: "Business systems & CRM",
      serviceAr: "أنظمة التشغيل والـ CRM والداشبورد",
      baseUsd: 599.99,
      isMonthly: false,
      noteEn: "custom CRM workflows, automated booking & leads, WhatsApp routing, role permissions, audit log",
      noteAr: "نظام CRM مخصص، مسارات حجز ومبيعات، ربط واتساب آلي، صلاحيات أدوار، وسجل رقابي",
      href: "/services/business-systems",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "16",
      categoryEn: "Growth & CRO",
      categoryAr: "نمو وتسويق رقمي",
      serviceEn: "Marketing & growth systems",
      serviceAr: "أنظمة التسويق والنمو وتتبع الأداء",
      baseUsd: 299.99,
      isMonthly: false,
      noteEn: "GA4 & pixel audit, high-ranking Arabic SEO pages, conversion rate CRO fixes, plain reporting",
      noteAr: "تدقيق تحليلات وبكسلات، صفحات سيو عربية متصدرة، تحسين معدل التحويل، وتقارير أداء مفهومة",
      href: "/services/marketing-growth",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "17",
      categoryEn: "AI Systems",
      categoryAr: "ذكاء اصطناعي",
      serviceEn: "SuperFeliz AI & autonomous agents",
      serviceAr: "بوابة سوبر فيليز والذكاء الاصطناعي",
      baseUsd: 999.99,
      isMonthly: false,
      noteEn: "enterprise knowledge base ingestion, customer support agent, workflow triage, secure API gateway",
      noteAr: "تدريب بيانات الشركة، وكلاء ذكاء اصطناعي لخدمة العملاء، فرز آلي للمهام، وبوابة API آمنة",
      href: "/superfeliz",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "18",
      categoryEn: "Turnkey Suites",
      categoryAr: "منظومات تجارية شاملة",
      serviceEn: "Four turnkey solution suites",
      serviceAr: "المنظومات التجارية الأربع المتكاملة",
      baseUsd: 4999,
      isMonthly: false,
      noteEn: "end-to-end commercial engines: Market Entry, Workflow Automation, Commerce Portals, or Total Overhaul",
      noteAr: "منظومات تجارية شاملة: انطلاقة البراند، أتمتة الأنظمة، بوابات التجارة، أو التطوير الشامل",
      href: "/solutions",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
    {
      id: "19",
      categoryEn: "Operating Retainer",
      categoryAr: "رعاية وتشغيل مستمر",
      serviceEn: "Company management & retainer",
      serviceAr: "الإدارة الرقمية الشاملة للشركة",
      baseUsd: null,
      isMonthly: true,
      noteEn: "dedicated multidisciplinary operating team, continuous releases, guaranteed SLA, executive war room",
      noteAr: "فريق تشغيل متكامل ومخصص لمؤسستك، تطوير شهري مستمر، اتفاقية تشغيل ملزمة، وغرفة طوارئ",
      href: "/enterprise",
      ctaEn: "Details",
      ctaAr: "التفاصيل",
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-neutral-200 bg-white py-20 lg:py-28">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            isRtl={isRtl}
            eyebrow={isRtl ? "جدول الخدمات والأسعار" : "Services & Pricing Matrix"}
            title={
              isRtl ? (
                <>
                  تسعير للخدمات والاشتراكات{" "}
                  <span className="italic font-light text-neutral-500">
                    وإدارة الشركات.
                  </span>
                </>
              ) : (
                <>
                  Pricing for services, subscriptions{" "}
                  <span className="italic font-light text-neutral-500">
                    and company management.
                  </span>
                </>
              )
            }
            description={
              isRtl
                ? "مصفوفة استثمار واضحة لكافة مخرجات استوديو بينسل: من المشاريع المستقلة حتى المنظومات المتكاملة والإدارة التشغيلية المستمرة."
                : "A transparent investment matrix for all Pencil Studio capabilities: from standalone launches to turnkey solution suites and full company management."
            }
          />

          {/* Quick Currency Selector in Section Header */}
          <div className="relative inline-flex items-center gap-1.5 rounded-2xl border border-neutral-200/90 bg-neutral-50/80 p-1.5 shadow-2xs self-start md:self-end">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 px-2">
              {isRtl ? "العملة:" : "Currency:"}
            </span>
            {PRICING_CURRENCY_CODES.map((currCode) => {
              const c = PRICING_CURRENCIES[currCode];
              const isSelected = activeCurrencyCode === currCode;
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
              );
            })}
          </div>
        </div>

        {/* Real Table Structure */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-neutral-200/90 bg-white shadow-sm">
          {/* Table Header (Desktop) */}
          <div className="hidden border-b border-neutral-200/90 bg-neutral-50/75 px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 md:grid md:grid-cols-[1.1fr_0.45fr_1.35fr_0.3fr] md:items-center md:gap-4">
            <div>
              <span>{isRtl ? "الخدمة / المنظومة" : "Service & Solution"}</span>
            </div>
            <div>
              <span>{isRtl ? "الاستثمار التقديري" : "Starting Investment"}</span>
            </div>
            <div>
              <span>{isRtl ? "نطاق المخرجات والتسليم" : "Scope & Deliverables"}</span>
            </div>
            <div className="text-end">
              <span>{isRtl ? "طلب / تفاصيل" : "Action"}</span>
            </div>
          </div>

          {/* Table Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.serviceEn}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative border-b border-neutral-200/80 p-5 transition-all duration-200 last:border-b-0 hover:bg-neutral-50/70 md:grid md:grid-cols-[1.1fr_0.45fr_1.35fr_0.3fr] md:items-center md:gap-4 md:px-6 md:py-5"
            >
              {/* Column 1: Number + Service Title + Category Badge */}
              <div className="flex items-start sm:items-center gap-3">
                <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-[#2057FF] transition-colors shrink-0 pt-0.5 sm:pt-0">
                  {row.id}
                </span>
                <div className="min-w-0">
                  <p className="text-base font-bold text-neutral-950 group-hover:text-[#2057FF] transition-colors">
                    {isRtl ? row.serviceAr : row.serviceEn}
                  </p>
                  <span className="mt-0.5 inline-block text-[11px] font-mono text-neutral-400 md:hidden">
                    {isRtl ? row.categoryAr : row.categoryEn}
                  </span>
                </div>
              </div>

              {/* Column 2: Dynamically Formatted Price Badge */}
              <div className="mt-3 md:mt-0">
                <span className="inline-flex items-center rounded-lg bg-blue-50/80 border border-blue-200/60 px-2.5 py-1 font-mono text-xs sm:text-sm font-extrabold text-[#2057FF] shadow-2xs">
                  {formatPrice(row.baseUsd, row.isMonthly, activeCurrencyCode, isRtl)}
                </span>
              </div>

              {/* Column 3: Deliverables Note */}
              <div className="mt-2 md:mt-0">
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-600">
                  {isRtl ? row.noteAr : row.noteEn}
                </p>
              </div>

              {/* Column 4: Quick Action Button */}
              <div className="mt-4 md:mt-0 flex items-center justify-start md:justify-end">
                <Link
                  href={row.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white px-3.5 py-1.5 text-xs font-bold text-neutral-700 shadow-2xs transition-all duration-200 hover:border-[#2057FF] hover:bg-[#2057FF] hover:text-white group/btn shrink-0"
                >
                  <span>{isRtl ? row.ctaAr : row.ctaEn}</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Table Footer Bar */}
          <div className="border-t border-neutral-200/90 bg-neutral-50/50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">
                {isRtl
                  ? `أسعار الصرف محدثة وتشمل هامش تسوية العملات 3% (${activeCurrency.nameAr})`
                  : `Currency rates include a 3% settlement buffer for ${activeCurrency.nameEn}`}
              </span>
            </div>
            <Link
              href="/#contact"
              className="font-bold text-[#2057FF] hover:underline underline-offset-4 flex items-center gap-1"
            >
              <span>{isRtl ? "اطلب دراسة وتدقيق مجاني لمشروعك" : "Claim custom project audit"}</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutDepth() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const values = [
    { icon: Compass, en: "We direct before we decorate", ar: "بنوجّه قبل ما نجمّل" },
    { icon: Code2, en: "We build what can be operated", ar: "بنبني اللي يتشغل" },
    { icon: Megaphone, en: "We write to sell, not to fill", ar: "بنكتب للبيع مش للحشو" },
    { icon: BadgeCheck, en: "We support after launch", ar: "بندعم بعد الإطلاق" },
  ];
  return (
    <section className="bg-neutral-50 py-14 text-neutral-900 md:py-20">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">{isRtl ? "الشخصية" : "The character"}</p>
              <h2 className="mt-3 text-3xl font-normal tracking-tight md:text-5xl md:leading-[1.12] text-neutral-900">
                {isRtl ? <>إحنا مش منفذين وبس. <span className="font-light italic text-neutral-500">إحنا شركاء قرار.</span></> : <>We are not only makers. <span className="font-light italic text-neutral-500">We are decision partners.</span></>}
              </h2>
              <p className="mt-5 leading-relaxed text-neutral-600">
                {isRtl
                  ? "من 2014 اتعلمنا إن أجمل واجهة في العالم مالهاش قيمة لو مش بتبيع أو بتشغل. عشان كده كل صفحة وكل سيستم وكل حملة بتتسأل نفس السؤال: هتعمل فرق في شغل العميل إزاي؟"
                  : "Since 2014 we learned that the most beautiful interface means little if it does not sell or operate. Every page, system and campaign gets the same question: how will this change the client's business?"}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item, i) => (
              <Reveal key={item.en} delay={0.05 * i}>
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <item.icon size={22} />
                  <p className="mt-4 font-bold">{isRtl ? item.ar : item.en}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactDepth() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  return (
    <section className="border-t border-neutral-200 bg-white py-14 md:py-20">
      <div className="container-custom">
        <PencilCTA
          title={isRtl ? <>ابدأ صح من أول رسالة.</> : <>Start strong from the first message.</>}
          desc={isRtl ? "ابعت هدفك، لينك لو موجود، ومعادك المتوقع. هنرجع لك بسؤالين مفيدين بدل رد محفوظ." : "Send your goal, any existing link and expected timing. We come back with useful questions, not a canned reply."}
          actions={
            <>
              <PencilButton
                href="https://wa.me/201003778273"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                hoverLabel={isRtl ? "محادثة فورية ←" : "Chat on WhatsApp →"}
              >
                <span>WhatsApp</span>
              </PencilButton>
              <PencilButton
                href="/help"
                variant="outline"
                size="md"
                showPencilIcon={false}
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <span>{isRtl ? "مركز المساعدة" : "Help Center"}</span>
              </PencilButton>
            </>
          }
        />
      </div>
    </section>
  );
}

export function SupportDepth() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const signals = [
    { en: "Critical outage", ar: "عطل حرج", detailEn: "Call immediately", detailAr: "اتصل فوراً" },
    { en: "Bug or slow page", ar: "باگ أو بطء", detailEn: "Send link + screenshot", detailAr: "ابعت لينك وسكرينشوت" },
    { en: "Billing or access", ar: "فاتورة أو صلاحية", detailEn: "Send invoice/account email", detailAr: "ابعت رقم الفاتورة أو الإيميل" },
  ];
  return (
    <section className="border-t border-neutral-200 bg-white py-14 md:py-20">
      <div className="container-custom grid gap-4 md:grid-cols-3">
        {signals.map((s, i) => (
          <Reveal key={s.en} delay={0.04 * i}>
            <div className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <p className="font-mono text-xs font-black text-neutral-300">0{i + 1}</p>
              <h3 className="mt-4 text-lg font-bold">{isRtl ? s.ar : s.en}</h3>
              <p className="mt-1 text-sm text-neutral-600">{isRtl ? s.detailAr : s.detailEn}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

