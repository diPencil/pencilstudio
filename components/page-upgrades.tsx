"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
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
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-context";
import { PencilSectionTitle, PencilCTA, PENCIL } from "@/components/pencil-ui";
import { cn } from "@/lib/utils";

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
              <Link href="/pricing" className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-neutral-700">{isRtl ? "شوف الأسعار" : "See pricing"}</Link>
              <Link href="/support/callback" className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-bold transition hover:border-neutral-900">{isRtl ? "اطلب مكالمة" : "Request a call"}</Link>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {stack.map((item, i) => (
            <Reveal key={item.titleEn} delay={0.05 * i}>
              <div className={cn("h-full p-6", i === 0 || i === 3 ? "rounded-3xl bg-neutral-950 text-white" : PENCIL.card)}>
                <item.icon size={23} className={i === 0 || i === 3 ? "text-amber-500" : "text-neutral-900"} />
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.05]">
              {isRtl ? <>كل حاجة من الدومين للـ VPS <span className="font-light italic text-white/55">في مكان واحد.</span></> : <>Everything from domain to VPS <span className="font-light italic text-white/55">in one place.</span></>}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/65">
              {isRtl
                ? "الصفحة دي مش Programs بعد الآن. دي بوابة السحابة والاستضافة: خدماتك، فواتيرك، تذاكرك، سيرفرك، إيميلاتك، ومتاجر تطبيقاتك. نفس منطق Hostinger، لكن مع فريق يعرف مشروعك من الداخل."
                : "This is your cloud and hosting gateway: services, invoices, tickets, servers, email and app stores. The Hostinger-style clarity, backed by a team that actually knows your product."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={panelUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-7 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">{isRtl ? "افتح البانل" : "Open panel"}</a>
              <Link href="/support/technical" className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-bold transition hover:bg-white/10">{isRtl ? "الدعم التقني" : "Technical support"}</Link>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item, i) => (
            <Reveal key={item.en} delay={0.04 * i}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                <item.icon size={21} className="text-amber-500" />
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
        {[{ icon: LockKeyhole, en: "SLA and access control", ar: "SLA وصلاحيات" }, { icon: DatabaseZap, en: "Integrations and data flows", ar: "تكاملات وتدفق بيانات" }, { icon: Sparkles, en: "SuperFeliz PRO gateway", ar: "بوابة SuperFeliz PRO" }].map((item, i) => (
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

export function PricingDepth() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const rows = [
    { serviceEn: "Website / platform", serviceAr: "موقع أو منصة", fromEn: "from $4,800", fromAr: "من $4,800", noteEn: "strategy, UX, UI, build, SEO basics", noteAr: "استراتيجية وتجربة وواجهة وتنفيذ وسيو أساسي" },
    { serviceEn: "Mobile app", serviceAr: "تطبيق موبايل", fromEn: "from $8,500", fromAr: "من $8,500", noteEn: "iOS, Android, APIs and store launch", noteAr: "آيفون وأندرويد وAPIs ورفع المتاجر" },
    { serviceEn: "Cloud management", serviceAr: "إدارة السحابة", fromEn: "from $450/mo", fromAr: "من $450/شهر", noteEn: "VPS, domains, email, backups, monitoring", noteAr: "VPS ودومينات وإيميلات ونسخ ومراقبة" },
    { serviceEn: "Company management", serviceAr: "إدارة رقمية للشركة", fromEn: "custom", fromAr: "بالاتفاق", noteEn: "monthly operating team, reports and SLA", noteAr: "فريق تشغيل شهري وتقارير واتفاقية خدمة" },
  ];
  return (
    <section className="border-t border-neutral-200 bg-white py-14 md:py-20">
      <div className="container-custom">
        <PencilSectionTitle
          isRtl={isRtl}
          kicker={isRtl ? "تفاصيل أكتر" : "More detail"}
          title={isRtl ? <>تسعير للخدمات، الاشتراكات، <span className="font-light italic text-neutral-500">وإدارة الشركات.</span></> : <>Pricing for services, subscriptions <span className="font-light italic text-neutral-500">and company management.</span></>}
        />
        <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200">
          {rows.map((row, i) => (
            <Reveal key={row.serviceEn} delay={0.04 * i}>
              <div className="grid gap-3 border-b border-neutral-200 bg-neutral-50 p-5 last:border-b-0 md:grid-cols-[1fr_0.45fr_1.25fr] md:items-center md:p-6">
                <p className="font-bold">{isRtl ? row.serviceAr : row.serviceEn}</p>
                <p className="font-black text-neutral-900" dir="ltr">{isRtl ? row.fromAr : row.fromEn}</p>
                <p className="text-sm text-neutral-600">{isRtl ? row.noteAr : row.noteEn}</p>
              </div>
            </Reveal>
          ))}
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
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.05]">
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
              <a href="https://wa.me/201003778273" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-7 py-3 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">WhatsApp</a>
              <Link href="/help" className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10">{isRtl ? "مركز المساعدة" : "Help Center"}</Link>
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

