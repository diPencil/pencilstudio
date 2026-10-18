"use client";

import * as React from "react";
import { PencilCareAccessibility } from "@/components/pencil-care-accessibility";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Braces, Database, GitBranch, Monitor, Network, Pause, Play, ServerCog } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";
import { StudioCareNav } from "@/components/studio-care-ui";
import { TechnicalAreaWorkbench, TechnicalInvestigationTimeline } from "@/components/pencil-technical-workbench";
import { TechnicalRequest } from "@/components/pencil-technical-request";
import { TECHNICAL_SUPPORT_AREAS, technicalText } from "@/lib/pencil-technical-care";

const layers = [
  { id: "frontend", icon: Monitor, en: "Interface", ar: "الواجهة", lineEn: "Pages, forms, states, Arabic/RTL", lineAr: "الصفحات والنماذج والحالات والعربية وRTL" },
  { id: "backend", icon: Braces, en: "Application", ar: "التطبيق", lineEn: "Business rules, roles, authentication", lineAr: "قواعد العمل والأدوار والمصادقة" },
  { id: "database", icon: Database, en: "Data", ar: "البيانات", lineEn: "Records, relationships, data flows", lineAr: "السجلات والعلاقات وتدفق البيانات" },
  { id: "integration", icon: Network, en: "Connections", ar: "الاتصالات", lineEn: "APIs, payments, messaging, tools", lineAr: "واجهات API والمدفوعات والرسائل والأدوات" },
  { id: "hosting", icon: ServerCog, en: "Environment", ar: "البيئة", lineEn: "Hosting, domains, deployment", lineAr: "الاستضافة والنطاقات والنشر" },
];
const screens = [
  { src: "/help-editorial/pencil-home.png", label: "Pencil Studio / Website" },
  { src: "/help-editorial/pencil-solutions.png", label: "Pencil / Solutions" },
  { src: "/help-editorial/pencil-cloud.png", label: "Pencil / Cloud & Hosting" },
  { src: "/help-editorial/pencil-superfeliz.png", label: "SuperFeliz / Pencil" },
];
function TechnicalHeading({ number, label, title, detail, dark = true }: { number: string; label: string; title: string; detail?: string; dark?: boolean }) {
  return <div className="grid gap-7 lg:grid-cols-[.8fr_1fr]"><div><p className={`text-xs font-bold uppercase ${dark ? "text-[#61d095]" : "text-[#2057ff]"}`}>{number} / {label}</p><h2 className="mt-5 text-3xl font-bold md:text-4xl">{title}</h2></div>{detail && <p className={`max-w-2xl text-base leading-8 lg:pt-7 ${dark ? "text-white/75" : "text-neutral-600"}`}>{detail}</p>}</div>;
}

export function PencilTechnicalCarePage() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const tx = (en: string, ar: string) => rtl ? ar : en;
  const [area, setArea] = React.useState("frontend");
  const [paused, setPaused] = React.useState(false);
  const current = TECHNICAL_SUPPORT_AREAS.find(item => item.id === area)!;
  const Next = rtl ? ArrowLeft : ArrowRight;
  return <MotionConfig reducedMotion="user"><div data-pencil-care dir={rtl ? "rtl" : "ltr"} className="pencil-technical-page min-h-screen bg-neutral-950 text-white">
      <PencilCareAccessibility />
    <Header solid />
    <style>{`
      .pencil-technical-page{width:100%;overflow-x:clip;letter-spacing:0}
      .pencil-technical-page .container-custom{width:100%;min-width:0}
      .pencil-technical-page .grid>*{min-width:0}
      .pencil-technical-page h1,.pencil-technical-page h2,.pencil-technical-page h3,.pencil-technical-page p{overflow-wrap:break-word;letter-spacing:0}
      .pencil-technical-page:dir(rtl) h1,.pencil-technical-page:dir(rtl) h2,.pencil-technical-page:dir(rtl) h3{line-height:1.4}
      .pencil-technical-page main [id]{scroll-margin-top:90px}
      .pencil-technical-page main a:focus-visible,.pencil-technical-page main button:focus-visible{outline:3px solid #8db4ff;outline-offset:4px}
      .pencil-technical-page [role=radio]:focus-visible,.pencil-technical-page [role=tab]:focus-visible{outline-offset:-4px}
      .technical-nav-offset{padding-top:64px}
      .technical-screen-track{animation:technicalScreens 40s linear infinite}
      .technical-screen-frame:hover .technical-screen-track,.technical-screen-frame:focus-within .technical-screen-track{animation-play-state:paused}
      .technical-trace{animation:technicalTrace 5s ease-in-out infinite;transform-origin:left}
      @keyframes technicalScreens{to{transform:translateX(-50%)}}
      @keyframes technicalTrace{0%,100%{transform:scaleX(.3)}50%{transform:scaleX(1)}}
      @media(max-width:640px){
        .pencil-technical-page .container-custom{padding-inline:24px}
        .technical-nav-offset{padding-top:104px}
        .pencil-technical-page header>div>div{height:104px;padding-top:48px}
        .pencil-technical-page header>div>div>.absolute{top:24px}
        .pencil-technical-page header button[aria-haspopup]{min-width:44px;min-height:44px}
        .pencil-technical-page header>div{padding-inline:16px}
        .pencil-technical-page header>div>div>.flex{gap:4px}
      }
      @media(prefers-reduced-motion:reduce){.technical-screen-track,.technical-trace{animation:none}.technical-screen-frame{overflow-x:auto}}
    `}</style>
    <main>
      <div className="technical-nav-offset"><StudioCareNav family="support" /></div>
      <section className="relative isolate overflow-hidden bg-[#101010]">
        <Image src="/signature-capabilities/Mobile-Apps-SaaS-Products.jpg" alt={tx("Pencil digital-product and application visual", "تكوين بصري لمنتجات Pencil الرقمية وتطبيقاتها")} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="container-custom relative py-10 md:py-16">
          <div className="flex items-center justify-between gap-4 border-b border-white/25 pb-5 text-xs font-bold uppercase"><span>Pencil / {tx("Technical Support", "الدعم التقني")}</span><span className="font-mono text-[#61d095]">S / 02</span></div>
          <div className="grid gap-8 py-10 md:py-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase text-[#61d095]">{tx("Build / run / maintain", "بناء / تشغيل / صيانة")}</p><h1 className="mt-6 max-w-4xl text-[32px] font-black leading-tight md:text-5xl lg:text-6xl">{tx("We know how it is built.", "نفهم كيف بُني المنتج.")}<span className="mt-3 block text-[#61d095]">{tx("And what keeps it working.", "وما الذي يبقيه يعمل.")}</span></h1></div>
            <div><p className="text-base leading-8 text-white/85 md:text-lg">{tx("A product is an interface, a set of rules, a data flow and an operating environment. Pencil connects those layers when designing, developing, deploying and investigating the work. The visible error is a starting point—not the whole diagnosis.", "المنتج واجهة وقواعد عمل وتدفق بيانات وبيئة تشغيل. تربط Pencil هذه الطبقات عند التصميم والتطوير والنشر والتحقيق في المشكلات. الخطأ الظاهر نقطة بداية، وليس التشخيص كاملًا.")}</p><div className="mt-7 flex flex-wrap gap-x-7 gap-y-3"><a href="#technical-problem" className="inline-flex min-h-12 items-center gap-4 border-b border-[#61d095] text-sm font-bold">{tx("Find the affected area", "حدد المجال المتأثر")}<Next size={18} /></a><a href="#technical-request" className="inline-flex min-h-12 items-center gap-3 text-sm font-bold">{tx("Prepare a support request", "جهّز طلب المساعدة")}<ArrowUpRight size={18} /></a></div></div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-6 font-mono text-xs text-white/75"><span>Websites / Systems</span><span>APIs / Data</span><span>Hosting / Release</span><span>Creative production</span></div>
        </div>
      </section>

      <section className="container-custom py-20 md:py-28">
        <TechnicalHeading number="01" label={tx("Technical depth", "عمق تقني")} title={tx("The layers have to work together.", "الطبقات تحتاج إلى العمل معًا.")} detail={tx("A form may fail because of a permission, a request or a data condition. A slow screen may depend on a service response. We follow the path between the layers instead of treating each symptom as a separate rebuild.", "قد يتعثر نموذج بسبب صلاحية أو طلب أو حالة بيانات، وقد يعتمد بطء الشاشة على استجابة خدمة. نتتبع المسار بين الطبقات بدل اعتبار كل عرض ظاهر سببًا لإعادة البناء.")} />
        <div className="mt-12 grid gap-12 lg:grid-cols-[.85fr_1fr]">
          <div aria-label={tx("Connected product layers", "طبقات المنتج المتصلة")}>{layers.map((layer, index) => <React.Fragment key={layer.id}><button onClick={() => setArea(layer.id)} aria-pressed={area === layer.id} aria-controls="technical-area-guidance" className={`flex min-h-20 w-full items-center gap-5 border-y border-white/20 px-5 py-4 text-start transition ${area === layer.id ? "bg-[#2057ff]" : "hover:bg-white/5"}`}><layer.icon size={24} className="shrink-0" /><span className="min-w-0 flex-1"><span className="block text-lg font-bold">{rtl ? layer.ar : layer.en}</span><span className="mt-1 block text-xs leading-6 text-white/75">{rtl ? layer.lineAr : layer.lineEn}</span></span><span className="font-mono text-xs opacity-60">0{index + 1}</span></button>{index < layers.length - 1 && <div className="flex justify-center py-3"><ArrowDown size={18} aria-hidden="true" className="text-[#61d095]" /></div>}</React.Fragment>)}</div>
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">{tx("A company needs more than a working screen.", "تحتاج الشركة إلى أكثر من شاشة تعمل.")}</h3><p className="mt-6 text-base leading-8 text-white/75">{tx("Custom systems need roles and dependable transactions. Websites need usable content and forms. Admin panels need clear publishing behaviour. Production environments need ownership and a release path. Pencil can coordinate those concerns within a defined project or maintenance arrangement.", "تحتاج الأنظمة المخصصة إلى أدوار وعمليات يمكن الاعتماد عليها، والمواقع إلى محتوى ونماذج قابلة للاستخدام، ولوحات الإدارة إلى سلوك نشر واضح، وبيئات الإنتاج إلى مسؤولية محددة ومسار إصدار. تنسق Pencil هذه المتطلبات ضمن مشروع أو ترتيب صيانة محدد.")}</p>
            <div className="mt-8 border-t border-white/25">{[
              [tx("Build", "نبني"), tx("Websites, web applications, custom systems, dashboards and connected product journeys.", "مواقع وتطبيقات ويب وأنظمة مخصصة ولوحات تحكم ورحلات منتجات متصلة.")],
              [tx("Run", "نشغّل"), tx("Deployment, hosting, domains, DNS, SSL, environment configuration and agreed maintenance.", "النشر والاستضافة والنطاقات وDNS وSSL وإعداد البيئة والصيانة المتفق عليها.")],
              [tx("Evolve", "نطوّر"), tx("CMS improvements, upgrades, new modules, integrations and expansion of existing Pencil work.", "تحسين CMS والترقيات والوحدات الجديدة والتكاملات وتوسعة أعمال Pencil القائمة.")],
            ].map(([title, line], index) => <div key={title} className="grid grid-cols-[80px_1fr] gap-5 border-b border-white/25 py-6"><p className={`text-lg font-bold ${index === 1 ? "text-[#f6c453]" : "text-[#61d095]"}`}>{title}</p><p className="text-sm leading-7 text-white/75">{line}</p></div>)}</div>
            <p className="mt-7 text-sm leading-7 text-white/65">{tx("Access, covered systems and provider responsibilities are established before intervention. We do not assume that every infrastructure or third-party service is under Pencil's control.", "تُحدد الصلاحيات والأنظمة المشمولة ومسؤوليات المزودين قبل التدخل. ولا نفترض أن كل بنية أو خدمة خارجية تقع تحت سيطرة Pencil.")}</p>
          </div>
        </div>
      </section>

      <section id="technical-problem" className="border-y border-white/20 bg-[#141414] py-20 md:py-28"><div className="container-custom">
        <TechnicalHeading number="02" label={tx("A starting point for investigation", "بداية التحقيق")} title={tx("Where is the problem happening?", "أين تظهر المشكلة؟")} detail={tx("You can describe the visible part without naming the cause. A login failure, an incorrect export and a deployment issue need different evidence. If the layer is unclear, choose Other and describe the task.", "يمكنك وصف الجزء الظاهر دون تحديد السبب. تحتاج مشكلة الدخول والتصدير غير الصحيح وتعثر النشر إلى أدلة مختلفة. إذا لم تتضح الطبقة، اختر «أخرى» وصف المهمة.")} /><div className="mt-12"><TechnicalAreaWorkbench rtl={rtl} area={area} onChange={setArea} /></div>
      </div></section>

      <section className="bg-[#f7f7f5] py-20 text-neutral-950 md:py-28"><div className="container-custom">
        <TechnicalHeading dark={false} number="03" label={tx("Troubleshooting with a method", "تحقيق بخطوات واضحة")} title={tx("Find the cause. Control the change. Check the result.", "نبحث السبب. نضبط التغيير. نتحقق من النتيجة.")} detail={tx("A useful fix connects the reported behaviour to an agreed intervention and a verification plan. We discuss changes to production, data and permissions before making them; the release is part of the work, not an afterthought.", "يربط الإصلاح المفيد السلوك المبلغ عنه بتدخل متفق عليه وخطة تحقق. نناقش تغييرات الإنتاج والبيانات والصلاحيات قبل تنفيذها؛ فالإصدار جزء من العمل، وليس خطوة مؤجلة.")} /><div className="mt-12"><TechnicalInvestigationTimeline rtl={rtl} /></div>
      </div></section>

      <section className="py-20 md:py-28"><div className="container-custom">
        <TechnicalHeading number="04" label={tx("Across the Pencil ecosystem", "عبر منظومة Pencil")} title={tx("The public experience and the operating work belong together.", "التجربة الظاهرة والعمل التشغيلي مترابطان.")} detail={tx("A content update can touch the CMS and the website. A system change can touch access and data. A connected AI workflow can touch integrations. Technical care keeps the surrounding product in view while addressing the specific request.", "قد يمس تحديث المحتوى CMS والموقع، وتغيير النظام الصلاحيات والبيانات، ومسار ذكاء اصطناعي متصل التكاملات. يحافظ الدعم التقني على رؤية المنتج المحيط أثناء معالجة الطلب المحدد.")} />
        <div className="mt-10 flex justify-end"><button onClick={() => setPaused(!paused)} aria-label={paused ? tx("Play screen strip", "تشغيل شريط الواجهات") : tx("Pause screen strip", "إيقاف شريط الواجهات")} title={paused ? tx("Play screen strip", "تشغيل شريط الواجهات") : tx("Pause screen strip", "إيقاف شريط الواجهات")} aria-pressed={paused} className="flex h-12 w-12 items-center justify-center border border-white/30">{paused ? <Play size={18} /> : <Pause size={18} />}</button></div>
      </div><div className="technical-screen-frame mt-5 overflow-hidden border-y border-white/20 py-7" dir="ltr"><div className="technical-screen-track flex w-max" style={{ animationPlayState: paused ? "paused" : undefined }}>{[...screens, ...screens].map((screen, index) => <figure key={screen.src + index} aria-hidden={index >= screens.length ? true : undefined} className="mx-3 w-[300px] shrink-0 md:w-[430px]"><div className="relative aspect-[16/10] bg-white"><Image src={screen.src} alt={index >= screens.length ? "" : screen.label} fill loading="eager" sizes="(max-width:768px) 300px, 430px" className="object-contain" /></div><figcaption className="mt-3 font-mono text-xs text-white/65">{screen.label}</figcaption></figure>)}</div></div></section>

      <section className="bg-[#e8f4ed] py-20 text-neutral-950 md:py-24"><div className="container-custom">
        <TechnicalHeading dark={false} number="05" label={tx("Evidence that moves the investigation", "أدلة تساعد التحقيق")} title={tx("Send the behaviour, not only your theory.", "أرسل السلوك، لا استنتاجك عنه فقط.")} detail={tx("You do not need a formal report. The most useful first message tells us where the issue happens, how to reach it and what changed. Redacted evidence is more useful than an unfiltered dump of private information.", "لا تحتاج إلى تقرير رسمي. توضح الرسالة الأولى المفيدة مكان المشكلة وكيفية الوصول إليها وما تغير. الأدلة المنقحة أنفع من إرسال معلومات خاصة كاملة.")} />
        <div className="mt-12 grid gap-x-10 border-t border-neutral-950/25 md:grid-cols-2">{[
          [tx("URL or system", "الرابط أو النظام"), tx("The affected page, project or environment.", "الصفحة أو المشروع أو البيئة المتأثرة.")],
          [tx("Expected vs actual", "المتوقع مقابل الفعلي"), tx("What the task should achieve and what happens instead.", "ما ينبغي أن تحققه المهمة وما يحدث بدلًا منه.")],
          [tx("Timing and changes", "التوقيت والتغييرات"), tx("When it started and any release, setting or content change before it.", "متى بدأت الحالة وأي إصدار أو إعداد أو محتوى تغير قبلها.")],
          [tx("Browser and device", "المتصفح والجهاز"), tx("Include language, mobile orientation or connection context where relevant.", "أضف اللغة أو اتجاه الهاتف أو سياق الاتصال عند الحاجة.")],
          [tx("Steps to reproduce", "خطوات إعادة الحدوث"), tx("A numbered sequence and whether it happens consistently.", "تسلسل مرقم وما إذا كانت الحالة تحدث باستمرار.")],
          [tx("Evidence and errors", "الأدلة والأخطاء"), tx("A redacted screenshot, video or error message. Do not include tokens or private records.", "لقطة أو فيديو أو رسالة خطأ منقحة، دون رموز وصول أو سجلات خاصة.")],
        ].map(([title, line], index) => <div key={title} className="grid grid-cols-[24px_1fr] gap-4 border-b border-neutral-950/25 py-6"><span className="font-mono text-xs text-[#2057ff]">0{index + 1}</span><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-7 text-neutral-600">{line}</p></div></div>)}</div>
      </div></section>

      <section className="container-custom grid gap-10 py-20 md:py-28 lg:grid-cols-[.7fr_1fr]"><div><GitBranch size={28} className="text-[#61d095]" /><p className="mt-6 text-xs font-bold uppercase text-[#61d095]">06 / {tx("Maintenance & expansion", "الصيانة والتوسعة")}</p><h2 className="mt-5 text-3xl font-bold md:text-4xl">{tx("Existing work deserves an informed next change.", "العمل القائم يستحق تغييرًا مبنيًا على فهم.")}</h2></div><div><p className="text-base leading-8 text-white/75">{tx("Debugging existing Pencil work begins with its original decisions and current dependencies. Upgrades, new modules and additional integrations may need a new phase. We review what can be retained, what needs changing and how to verify the existing journeys alongside the new work.", "يبدأ تشخيص أعمال Pencil القائمة بقراراتها الأصلية واعتمادياتها الحالية. قد تحتاج الترقيات والوحدات الجديدة والتكاملات الإضافية إلى مرحلة جديدة. نراجع ما يمكن الاحتفاظ به وما يحتاج إلى تغيير وكيف نتحقق من الرحلات الحالية إلى جانب العمل الجديد.")}</p><p className="mt-5 text-sm leading-7 text-white/65">{tx("Creative-production issues are part of this conversation where they concern source files, exports and digital delivery. Editable files and third-party licences remain subject to the agreed delivery scope.", "تدخل مشكلات الإنتاج الإبداعي في هذا الحوار عندما تتعلق بالمصادر والتصدير والتسليم الرقمي. وتظل الملفات القابلة للتعديل وتراخيص الجهات الخارجية خاضعة لنطاق التسليم المتفق عليه.")}</p><Link href="/support/callback" className="mt-7 inline-flex min-h-12 items-center gap-5 border-b border-[#61d095] text-sm font-bold">{tx("Discuss an upgrade or expansion", "ناقش ترقية أو توسعة")}<ArrowUpRight size={18} /></Link></div></section>

      <section id="technical-request" className="border-t border-white/20 bg-[#141414] py-20 md:py-28"><div className="container-custom grid items-start gap-10 lg:grid-cols-[.7fr_1fr]">
        <div className="lg:sticky lg:top-24"><p className="text-xs font-bold uppercase text-[#61d095]">07 / {tx("Request technical help", "طلب المساعدة التقنية")}</p><h2 className="mt-5 text-3xl font-bold md:text-4xl">{tx("Give us a useful starting point.", "امنحنا بداية مفيدة للفحص.")}</h2><p className="mt-6 text-base leading-8 text-white/75">{tx("Describe the affected work and the behaviour. Choose the closest area; you can change it without losing the common details. Investigation, response and maintenance coverage depend on the current agreement and the impact of the request.", "صف العمل المتأثر والسلوك الذي تلاحظه. اختر أقرب مجال؛ ويمكن تغييره دون فقدان التفاصيل المشتركة. يعتمد التحقيق والاستجابة وتغطية الصيانة على الاتفاق الحالي وأثر الطلب.")}</p>
          <div className="mt-7 border-t border-white/25 pt-6"><p className="text-xs font-bold uppercase text-[#61d095]">{technicalText(current.name, rtl)}</p><p className="mt-4 text-sm leading-7 text-white/75">{technicalText(current.hint, rtl)}</p><div className="technical-trace mt-6 h-px w-24 bg-[#61d095]" /></div>
          <div className="mt-8 border-t border-white/25"><a href="mailto:help@dipencil.com" className="flex min-h-16 items-center justify-between gap-3 border-b border-white/25 text-sm font-bold"><span dir="ltr">help@dipencil.com</span><ArrowUpRight size={17} /></a><Link href="/support/report" className="flex min-h-16 items-center justify-between gap-3 border-b border-white/25 py-4 text-sm font-bold">{tx("A specific fault? Report an issue.", "عطل محدد؟ أبلغ عن مشكلة.")}<Next size={17} className="shrink-0" /></Link><Link href="/support/customer" className="flex min-h-16 items-center justify-between gap-3 border-b border-white/25 py-4 text-sm font-bold">{tx("Project or service follow-up? Customer Support.", "متابعة مشروع أو خدمة؟ دعم العملاء.")}<Next size={17} className="shrink-0" /></Link></div>
        </div>
        <TechnicalRequest rtl={rtl} area={area} onAreaChange={setArea} />
      </div></section>
    </main><Footer />
  </div></MotionConfig>;
}
