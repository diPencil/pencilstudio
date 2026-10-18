"use client";

import * as React from "react";
import { PencilCareAccessibility } from "@/components/pencil-care-accessibility";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Compass, GitBranch, Headphones, Layers, Palette, PhoneCall, Rocket, Wrench } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";
import { StudioCareNav } from "@/components/studio-care-ui";
import { SupportContinuityReel, SupportServiceMap, SupportStageTimeline, useSupportReducedMotion } from "@/components/pencil-support-interactive";
import { SUPPORT_PATHWAYS } from "@/lib/pencil-support-operations";

const lanes = [
  { icon: Compass, en: "Strategy", ar: "التخطيط", lineEn: "Goals & priorities", lineAr: "الأهداف والأولويات" },
  { icon: Palette, en: "Creative", ar: "الإبداع", lineEn: "Identity & production", lineAr: "الهوية والإنتاج" },
  { icon: Code2, en: "Technology", ar: "التقنية", lineEn: "Products & connections", lineAr: "المنتجات والتكاملات" },
  { icon: Rocket, en: "Launch", ar: "الإطلاق", lineEn: "Release & handover", lineAr: "النشر والتسليم" },
  { icon: Layers, en: "Operation", ar: "التشغيل", lineEn: "Maintain & expand", lineAr: "الصيانة والتوسعة" },
];
const ongoing = [
  { id: "creative", en: "Creative continuity", ar: "استمرارية إبداعية", headingEn: "The brand needs production, not repeated reinvention.", headingAr: "العلامة تحتاج إلى إنتاج مستمر، لا إعادة اختراع متكررة.", lineEn: "Keep the approved visual language useful across campaign assets, presentations, content and new applications. A recurring design arrangement can define what comes in, who approves it and how priorities move.", lineAr: "نحافظ على فاعلية اللغة البصرية المعتمدة في مواد الحملات والعروض والمحتوى والتطبيقات الجديدة. يحدد ترتيب التصميم المتكرر نوع الطلبات ومن يعتمدها وكيف تتحرك الأولويات.", itemsEn: ["One consolidated creative brief per request", "Content and references ready for production", "Approval against the agreed brand direction"], itemsAr: ["موجز إبداعي مجمع لكل طلب", "محتوى ومراجع جاهزة للإنتاج", "اعتماد وفق اتجاه الهوية المتفق عليه"] },
  { id: "technical", en: "Technical continuity", ar: "استمرارية تقنية", headingEn: "Changes need a release plan, not only a fix.", headingAr: "التغييرات تحتاج إلى خطة إصدار، لا إصلاح فقط.", lineEn: "Maintenance and planned changes have different risks. Identify the affected environment, dependencies and verification steps, then agree what can be changed within the current arrangement and what needs a separate scope.", lineAr: "للصيانة والتغييرات المخططة مخاطر مختلفة. نحدد البيئة المتأثرة والاعتماديات وخطوات التحقق، ثم نتفق على ما يمكن تعديله ضمن الترتيب الحالي وما يحتاج إلى نطاق مستقل.", itemsEn: ["Impact and reproduction context for faults", "Access handled through an agreed secure channel", "Verification of affected journeys after a change"], itemsAr: ["تحديد الأثر وسياق إعادة حدوث الأعطال", "إدارة الصلاحيات عبر قناة آمنة متفق عليها", "التحقق من الرحلات المتأثرة بعد التغيير"] },
  { id: "connected", en: "A connected company team", ar: "فريق متصل بالشركة", headingEn: "Design and technology should share the same priorities.", headingAr: "التصميم والتقنية يحتاجان إلى أولويات مشتركة.", lineEn: "When a company needs both, separate lists can hide dependencies. Discuss the campaign, the landing page, the system change and the ongoing workload together so that production follows the business priority.", lineAr: "حين تحتاج الشركة إلى كليهما، قد تخفي قوائم الطلبات المنفصلة الاعتماديات. نناقش الحملة وصفحة الهبوط وتغيير النظام والعمل المستمر معًا، ليواكب الإنتاج أولوية العمل.", itemsEn: ["A named company-side request owner", "A shared view of priorities and dependencies", "Clear separation of recurring work and new phases"], itemsAr: ["مسؤول طلبات محدد من الشركة", "رؤية مشتركة للأولويات والاعتماديات", "فصل واضح بين العمل المتكرر والمراحل الجديدة"] },
];

function Heading({ number, label, title, description, dark = false }: { number: string; label: string; title: string; description?: string; dark?: boolean }) {
  return <div className="grid gap-6 lg:grid-cols-[.62fr_1fr]"><div><p className={`text-xs font-bold uppercase ${dark ? "text-[#61d095]" : "text-[#2057ff]"}`}>{number} / {label}</p><h2 className="mt-5 text-3xl font-bold md:text-4xl">{title}</h2></div>{description && <p className={`max-w-2xl text-base leading-8 lg:pt-8 ${dark ? "text-white/75" : "text-neutral-600"}`}>{description}</p>}</div>;
}

export function PencilSupportHub() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const reduce = useSupportReducedMotion();
  const tx = (en: string, ar: string) => rtl ? ar : en;
  const text = (value: { en: string; ar: string }) => rtl ? value.ar : value.en;
  const Next = rtl ? ArrowLeft : ArrowRight;
  const [companyMode, setCompanyMode] = React.useState(0);
  const mode = ongoing[companyMode];
  const [path, setPath] = React.useState("customer");
  return <MotionConfig reducedMotion="user"><div data-pencil-care dir={rtl ? "rtl" : "ltr"} className="pencil-support-page min-h-screen bg-neutral-950 text-white">
      <PencilCareAccessibility />
    <Header solid />
    <style>{`
      .pencil-support-page{width:100%;overflow-x:clip;letter-spacing:0}
      .pencil-support-page .container-custom{width:100%;min-width:0}
      .pencil-support-page .grid>*{min-width:0}
      .pencil-support-page h1,.pencil-support-page h2,.pencil-support-page h3,.pencil-support-page p{overflow-wrap:break-word;letter-spacing:0}
      .pencil-support-page:dir(rtl) h1,.pencil-support-page:dir(rtl) h2,.pencil-support-page:dir(rtl) h3{line-height:1.4}
      .pencil-support-page main [id]{scroll-margin-top:90px}
      .pencil-support-page main button:focus-visible,.pencil-support-page main a:focus-visible{outline:3px solid #8db4ff;outline-offset:4px}
      .pencil-support-page [role=tab]:focus-visible{outline-offset:-4px}
      .support-nav-offset{padding-top:64px}
      .support-connection{animation:supportConnection 5s ease-in-out infinite;transform-origin:left}
      @keyframes supportConnection{0%,100%{transform:scaleX(.35)}50%{transform:scaleX(1)}}
      @media(max-width:640px){
        .pencil-support-page .container-custom{padding-inline:24px}
        .support-nav-offset{padding-top:104px}
        .pencil-support-page header>div>div{height:104px;padding-top:48px}
        .pencil-support-page header>div>div>.absolute{top:24px}
        .pencil-support-page header button[aria-haspopup]{min-height:44px;min-width:44px}
        .pencil-support-page header>div{padding-inline:16px}
        .pencil-support-page header>div>div>.flex{gap:4px}
        .support-lanes{display:flex;overflow-x:auto}
        .support-lanes>div{min-width:150px}
      }
      @media(prefers-reduced-motion:reduce){.support-connection{animation:none}}
    `}</style>
    <main>
      <div className="support-nav-offset"><StudioCareNav family="support" /></div>
      <section className="relative isolate overflow-hidden bg-[#0c0c0c]">
        <Image src="/help-editorial/pencil-cloud.png" alt={tx("Pencil Cloud & Hosting interface", "واجهة Pencil Cloud & Hosting")} fill priority sizes="100vw" className="object-cover object-top opacity-35" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom relative py-12 md:py-16">
          <div className="flex items-center justify-between gap-4 border-b border-white/25 pb-5 text-xs font-bold uppercase"><span>Pencil / {tx("Support Center", "مركز الدعم")}</span><span className="font-mono text-[#61d095]">S / 00</span></div>
          <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="grid gap-8 py-8 md:py-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div><p className="text-xs font-bold uppercase text-[#61d095]">{tx("After the work starts. After it goes live.", "بعد بدء العمل. وبعد الإطلاق.")}</p><h1 className="mt-6 max-w-3xl text-[30px] font-black leading-tight md:text-5xl lg:text-6xl">{tx("What can Pencil", "ما الذي تستطيع Pencil")}<span className="block text-[#61d095]">{tx("keep supporting?", "مواصلة دعمه؟")}</span></h1></div>
            <div><p className="max-w-xl text-base leading-8 text-white/85 md:text-lg">{tx("The brand your team uses. The website customers visit. The system your company runs on. Pencil can stay involved through production, maintenance, improvement and the next phase—with responsibilities defined for the work.", "الهوية التي يستخدمها فريقك، والموقع الذي يزوره عملاؤك، والنظام الذي تعتمد عليه شركتك. تستطيع Pencil مواصلة العمل في الإنتاج والصيانة والتحسين والمرحلة التالية، بمسؤوليات محددة لكل عمل.")}</p><div className="mt-7 flex flex-wrap gap-x-7 gap-y-3"><a href="#support-ecosystem" className="inline-flex min-h-12 items-center gap-3 border-b border-[#61d095] text-sm font-bold">{tx("Explore support coverage", "استكشف مجالات الدعم")}<Next size={18} /></a><a href="#support-pathways" className="inline-flex min-h-12 items-center gap-3 text-sm font-bold">{tx("Find my next step", "حدد خطوتي التالية")}<ArrowUpRight size={18} /></a></div></div>
          </motion.div>
          <div className="support-lanes grid gap-x-5 gap-y-6 border-t border-white/25 pt-7 sm:grid-cols-3 lg:grid-cols-5">{lanes.map((lane, index) => <div key={lane.en} className="relative"><div className="flex items-center gap-3"><lane.icon size={18} className={index % 2 === 0 ? "text-[#61d095]" : "text-[#8db4ff]"} /><p className="text-sm font-bold">{rtl ? lane.ar : lane.en}</p></div><p className="mt-2 text-xs text-white/70">{rtl ? lane.lineAr : lane.lineEn}</p><div className="mt-5 h-px overflow-hidden bg-white/20"><div className="support-connection h-px w-full bg-[#61d095]" style={{ animationDelay: index * -.8 + "s" }} /></div></div>)}</div>
        </div>
      </section>

      <section id="support-ecosystem" className="container-custom py-20 md:py-28">
        <Heading dark number="01" label={tx("The support ecosystem", "منظومة الدعم")} title={tx("The visible work. The machinery behind it.", "العمل الظاهر. وما يجعله يعمل.")} description={tx("A campaign, a website and a connected system can depend on one another. Continuing support needs to understand the request, the original decisions and the parts of the business affected—not only the file or screen being changed.", "قد تعتمد الحملة والموقع والنظام المتصل بعضها على بعض. يحتاج الدعم المستمر إلى فهم الطلب والقرارات الأصلية والأجزاء المتأثرة من العمل، وليس الملف أو الشاشة المطلوب تعديلها فقط.")} />
        <div className="mt-12"><SupportServiceMap rtl={rtl} /></div>
      </section>

      <section className="bg-[#f7f7f5] py-20 text-neutral-950 md:py-28">
        <div className="container-custom"><Heading number="02" label={tx("Support by project stage", "الدعم حسب مرحلة المشروع")} title={tx("Different moments need different work.", "لكل مرحلة عمل مختلف.")} description={tx("An approval during production, a deployment before launch and a new feature after release are not the same request. Find your project's moment before choosing the next action.", "اعتماد أثناء التنفيذ ونشر قبل الإطلاق ووظيفة جديدة بعد الإصدار ليست طلبًا واحدًا. حدد مرحلة مشروعك قبل اختيار الإجراء التالي.")} /><div className="mt-12"><SupportStageTimeline rtl={rtl} /></div></div>
      </section>

      <section className="container-custom py-20 md:py-28">
        <Heading dark number="03" label={tx("Creative + technical continuity", "استمرارية إبداعية وتقنية")} title={tx("Keep the whole journey in view.", "نحافظ على رؤية الرحلة كاملة.")} description={tx("A new campaign may need a landing page. A new feature may need a different user journey. An AI idea may need a connection to an existing system. The useful support conversation follows those dependencies across disciplines.", "قد تحتاج الحملة الجديدة إلى صفحة هبوط، والوظيفة الجديدة إلى رحلة استخدام مختلفة، وفكرة الذكاء الاصطناعي إلى اتصال بنظام قائم. يتتبع حوار الدعم المفيد هذه الاعتماديات بين التخصصات.")} />
        <div className="mt-12"><SupportContinuityReel rtl={rtl} /></div>
      </section>

      <section className="bg-white py-20 text-neutral-950 md:py-28"><div className="container-custom">
        <Heading number="04" label={tx("Ongoing company support", "الدعم المستمر للشركات")} title={tx("Make continuing work a workable arrangement.", "نحو ترتيب واضح للعمل المستمر.")} description={tx("Companies need a way to request, approve and prioritise work—not just a contact at the end of a project. A recurring relationship can connect design production, technical upkeep and product development without blurring their scopes.", "تحتاج الشركات إلى طريقة لطلب العمل واعتماده وترتيب أولوياته، لا مجرد جهة اتصال عند نهاية المشروع. يمكن للعلاقة المتكررة أن تربط الإنتاج التصميمي بالصيانة التقنية وتطوير المنتج دون خلط نطاقاتها.")} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.8fr]">
          <div>
            <div aria-label={tx("Company support focus", "مجال الدعم المستمر للشركة")} className="flex flex-wrap gap-1 border-b border-neutral-300 pb-3">{ongoing.map((item, index) => <button key={item.id} aria-pressed={companyMode === index} onClick={() => setCompanyMode(index)} className={`min-h-12 px-4 py-3 text-sm font-bold transition ${companyMode === index ? "bg-neutral-950 text-white" : "bg-neutral-100 hover:bg-neutral-200"}`}>{rtl ? item.ar : item.en}</button>)}</div>
            <h3 className="mt-8 text-2xl font-bold md:text-3xl">{rtl ? mode.headingAr : mode.headingEn}</h3><p className="mt-5 text-base leading-8 text-neutral-600">{rtl ? mode.lineAr : mode.lineEn}</p>
            <ul className="mt-6 border-t border-neutral-300">{(rtl ? mode.itemsAr : mode.itemsEn).map((item, index) => <li key={item} className="flex gap-4 border-b border-neutral-300 py-4 text-sm leading-7"><span className="font-mono text-xs text-[#2057ff]">0{index + 1}</span>{item}</li>)}</ul>
            <Link href="/support/customer" className="mt-7 inline-flex min-h-12 items-center gap-5 border-b border-neutral-950 text-sm font-bold">{tx("Discuss your company support", "ناقش دعم شركتك")}<ArrowUpRight size={18} /></Link>
          </div>
          <div className="border-s-2 border-[#2057ff] bg-[#eef3ff] px-6 py-8 md:px-8"><p className="text-xs font-bold uppercase text-[#2057ff]">{tx("Agree the operating model", "نتفق على نموذج العمل")}</p>{[
            [tx("A clear owner", "مسؤول واضح"), tx("Who requests work, consolidates feedback and approves the result?", "من يطلب العمل ويجمع الملاحظات ويعتمد النتيجة؟")],
            [tx("Defined coverage", "تغطية محددة"), tx("What is included, what is excluded and what capacity is available?", "ما المشمول وما المستثنى وما الطاقة المتاحة للتنفيذ؟")],
            [tx("A shared priority", "أولوية مشتركة"), tx("Which request matters next, and what depends on it?", "أي طلب يأتي أولًا، وما الذي يعتمد عليه؟")],
            [tx("A review and release path", "مسار للمراجعة والإصدار"), tx("How are changes checked, approved and released?", "كيف تُفحص التغييرات وتُعتمد وتُنشر؟")],
          ].map(([title, body]) => <div key={title} className="border-b border-[#2057ff]/20 py-5 last:border-b-0"><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-7 text-neutral-600">{body}</p></div>)}</div>
        </div>
      </div></section>

      <section className="border-b border-white/20 bg-[#141414] py-20 md:py-28"><div className="container-custom grid gap-10 lg:grid-cols-[.65fr_1fr]">
        <div><GitBranch size={30} className="text-[#61d095]" /><p className="mt-6 text-xs font-bold uppercase text-[#61d095]">05 / {tx("Existing project expansion", "توسعة مشروع قائم")}</p><h2 className="mt-5 text-3xl font-bold md:text-4xl">{tx("The next phase does not need to forget the first.", "المرحلة التالية لا تبدأ بنسيان الأولى.")}</h2><p className="mt-6 text-base leading-8 text-white/75">{tx("A new language, branch, campaign, integration or operating rule changes the brief. Pencil can revisit what already exists, carry useful foundations forward and plan the addition as a deliberate phase.", "تغير اللغة أو الفرع أو الحملة أو التكامل أو قاعدة التشغيل الجديدة موجز العمل. تراجع Pencil ما هو موجود، وتنقل الأسس المفيدة إلى المرحلة التالية، وتخطط للإضافة كمرحلة مقصودة.")}</p><Link href="/support/callback" className="mt-7 inline-flex min-h-12 items-center gap-5 border-b border-[#61d095] text-sm font-bold">{tx("Discuss the next phase", "ناقش المرحلة التالية")}<ArrowUpRight size={18} /></Link></div>
        <div className="border-t border-white/25">{[
          [tx("Retain", "نحتفظ"), tx("The identity, components, content and business logic that still serve the project.", "بالهوية والمكونات والمحتوى ومنطق الأعمال الذي لا يزال يخدم المشروع.")],
          [tx("Review", "نراجع"), tx("Dependencies, data, permissions, Arabic/RTL behaviour and the people affected by the change.", "الاعتماديات والبيانات والصلاحيات وسلوك العربية وRTL والأشخاص المتأثرين بالتغيير.")],
          [tx("Scope", "نحدد النطاق"), tx("The new work, its approvals and commercial terms separately from routine maintenance.", "للعمل الجديد واعتماداته وشروطه التجارية، بصورة مستقلة عن الصيانة المعتادة.")],
          [tx("Verify", "نتحقق"), tx("The new journey and the existing journeys it touches before considering the phase complete.", "من الرحلة الجديدة والرحلات الحالية المتصلة بها قبل اعتبار المرحلة مكتملة.")],
        ].map(([title, body], index) => <div key={title} className="grid grid-cols-[28px_1fr] gap-5 border-b border-white/25 py-7 md:grid-cols-[28px_.35fr_1fr]"><span className="font-mono text-xs text-[#61d095]">0{index + 1}</span><h3 className="text-xl font-bold">{title}</h3><p className="col-start-2 text-sm leading-7 text-white/75 md:col-start-auto">{body}</p></div>)}</div>
      </div></section>

      <section id="support-pathways" className="container-custom py-20 md:py-28">
        <Heading dark number="06" label={tx("Choose the next step", "اختر الخطوة التالية")} title={tx("Start with what needs to happen.", "ابدأ بما يحتاج إلى إجراء.")} description={tx("You do not need the department name. Match the request to the situation. If a technical fault is already clear, report it; if the direction is still open, a conversation is more useful.", "لا تحتاج إلى معرفة اسم القسم. اربط الطلب بالموقف. إذا كان العطل التقني واضحًا، أبلغ عنه؛ وإذا كان الاتجاه لا يزال مفتوحًا، فالحوار أكثر فائدة.")} />
        <div className="mt-12 grid border-t border-white/25 lg:grid-cols-[.7fr_1fr]">
          <div aria-label={tx("Support pathway selection", "اختيار مسار الدعم")} className="border-b border-white/25 lg:border-b-0 lg:border-e">{SUPPORT_PATHWAYS.map((item, index) => {
            const Icon = [Headphones, Wrench, PhoneCall, Code2][index];
            return <button key={item.id} aria-pressed={path === item.id} onClick={() => setPath(item.id)} className={`flex min-h-24 w-full items-center gap-5 border-b border-white/20 px-5 py-5 text-start transition ${path === item.id ? "bg-[#61d095] text-neutral-950" : "hover:bg-white/5"}`}><Icon size={22} className="shrink-0" /><span><span className="block text-xs opacity-75">{text(item.title)}</span><span className="mt-2 block text-base font-bold">{text(item.question)}</span></span></button>;
          })}</div>
          {SUPPORT_PATHWAYS.filter(item => item.id === path).map(item => <div key={item.id} className="px-6 py-9 md:px-10"><p className="font-mono text-xs text-[#61d095]">{item.href}</p><h3 className="mt-5 text-3xl font-bold">{text(item.title)}</h3><p className="mt-6 text-base leading-8 text-white/75">{text(item.detail)}</p><div className="mt-7 border-s-2 border-[#f6c453] ps-5"><p className="text-xs font-bold uppercase text-[#f6c453]">{tx("Useful context", "السياق المفيد")}</p><p className="mt-3 text-sm leading-7 text-white/75">{text(item.bring)}</p></div><Link href={item.href} className="mt-8 inline-flex min-h-12 items-center gap-5 bg-white px-6 text-sm font-bold text-neutral-950 transition hover:bg-[#61d095]">{tx("Continue to", "انتقل إلى")} {text(item.title)}<Next size={18} className="shrink-0" /></Link></div>)}
        </div>
        <div className="mt-12 grid gap-6 border-t border-white/25 pt-7 md:grid-cols-[.7fr_1fr]"><p className="text-sm font-bold">{tx("Coverage should be clear before it is needed.", "يجب أن تتضح التغطية قبل الحاجة إليها.")}</p><p className="text-sm leading-7 text-white/65">{tx("Support availability, response arrangements, maintenance coverage and third-party responsibilities depend on your project or service agreement. New features and new phases may need separate approval and pricing. Do not share passwords or confidential customer information in an initial request.", "يعتمد توافر الدعم وترتيبات الاستجابة وتغطية الصيانة ومسؤوليات الجهات الخارجية على اتفاق مشروعك أو خدمتك. وقد تحتاج الوظائف والمراحل الجديدة إلى اعتماد وتسعير مستقلين. لا تشارك كلمات المرور أو معلومات العملاء السرية في الطلب الأولي.")}</p></div>
      </section>
    </main>
    <Footer />
  </div></MotionConfig>;
}
