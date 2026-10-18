"use client";

import * as React from "react";
import { PencilCareAccessibility, useCareReducedMotion } from "@/components/pencil-care-accessibility";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Mail, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { PencilCTA, PencilSectionTitle, PENCIL } from "@/components/pencil-ui";
import { HelpHero } from "@/components/help-hero";
import { PencilContactFlow } from "@/components/pencil-contact-flow";
import { CONTACT_INTENTS } from "@/lib/pencil-contact-intents";
import { cn } from "@/lib/utils";

const scenes = [
  { image: "/help-editorial/pencil-home.png", en: "A business people can recognise.", ar: "نشاط يعرف الناس كيف يتعرفون إليه.", detailEn: "Brand identity, graphic design, campaigns and the content that makes the business legible.", detailAr: "هوية وتصميم جرافيكي وحملات ومحتوى يوضح ما يقدمه النشاط.", id: "creative", caption: "Pencil Studio / Website" },
  { image: "/help-editorial/pencil-solutions.png", en: "A product people can actually use.", ar: "منتج يستطيع الناس استخدامه فعلًا.", detailEn: "Websites, UI/UX, platforms and custom systems. Plan the task, the content and Arabic/RTL together.", detailAr: "مواقع وUI/UX ومنصات وأنظمة مخصصة. نخطط للمهمة والمحتوى وتجربة العربية وRTL معًا.", id: "digital", caption: "Pencil / Solutions interface" },
  { image: "/help-editorial/pencil-superfeliz.png", en: "A workflow with less repetitive work.", ar: "سير عمل يقل فيه التكرار.", detailEn: "AI, automation and SuperFeliz ideas grounded in a specific business task, with human review where it matters.", detailAr: "أفكار ذكاء اصطناعي وأتمتة وSuperFeliz مرتبطة بمهمة عمل محددة، ومراجعة بشرية حيث تلزم.", id: "ai", caption: "SuperFeliz / Pencil interface" },
  { image: "/help-editorial/pencil-cloud.png", en: "Work that keeps moving after launch.", ar: "عمل يستمر بعد الإطلاق.", detailEn: "Ongoing company design, technical maintenance, infrastructure, new features and improvements to existing Pencil work.", detailAr: "تصميم مستمر للشركات وصيانة تقنية وبنية تشغيلية ووظائف جديدة وتحسينات لأعمال Pencil القائمة.", id: "existing", caption: "Pencil / Cloud & Hosting interface" },
];

export function PencilContactEditorial() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const reduced = useCareReducedMotion();
  const tx = (en: string, ar: string) => rtl ? ar : en;
  const text = (value: { en: string; ar: string }) => rtl ? value.ar : value.en;
  const [selected, setSelected] = React.useState("new");
  const intent = CONTACT_INTENTS.find(item => item.id === selected)!;
  const [scene, setScene] = React.useState(0);
  const Next = rtl ? ArrowLeft : ArrowRight;
  const Prev = rtl ? ArrowRight : ArrowLeft;
  const choose = (id: string, scroll = false) => {
    setSelected(id);
    if (scroll) requestAnimationFrame(() => {
      document.getElementById("project-conversation")?.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" });
      document.getElementById("conversation-heading")?.focus({ preventScroll: true });
    });
  };
  return (
    <div data-pencil-care dir={rtl ? "rtl" : "ltr"} className={cn("pencil-help-page min-h-screen overflow-x-clip text-neutral-900", PENCIL.paper)}>
      <PencilCareAccessibility />
      <MotionConfig reducedMotion="user">
        <Header />

        <HelpHero
          size="xl"
          seed={0x3c4d5e6f}
          outline={!rtl}
          breadcrumb={[
            { label: rtl ? "الرئيسية" : "Home", href: "/" },
            { label: rtl ? "مركز المساعدة" : "Help Center", href: "/help" },
            { label: rtl ? "تواصل" : "Contact" },
          ]}
          badges={
            <>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pe-4 ps-4 text-[11px] font-bold backdrop-blur-md">
                {rtl ? "الحوار قبل الموجز" : "A conversation before a brief"}
              </span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-[11px] font-bold text-emerald-300" dir={rtl ? "rtl" : "ltr"}>
                {rtl ? "البريد الإلكتروني / واتساب" : "Email / WhatsApp"}
              </span>
            </>
          }
          titleA={rtl ? "ما الذي تريد إنشاءه أو تحسينه،" : "What are you trying to"}
          titleB={rtl ? "إصلاحه أو إطلاقه؟" : "create, improve, fix or launch?"}
          subtitle={tx("You do not need the right service name, a polished presentation or a finished brief. Tell us what is happening in your business. We can work out what the project needs to become.", "لا تحتاج إلى معرفة اسم الخدمة، أو تجهيز عرض متكامل، أو كتابة موجز نهائي. أخبرنا بما يحدث في نشاطك، لنحدد معًا ما يحتاج إليه المشروع.")}
          caption={
            <p className="text-xs font-semibold text-white/45">{tx("Pencil Studio · Digital products · SuperFeliz", "Pencil Studio · المنتجات الرقمية · SuperFeliz")}</p>
          }
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <a href="#project-conversation" className="group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">{tx("Start with your situation", "ابدأ بالموقف الذي تواجهه")}<Next size={17} className="transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" /></a>
            <span className="px-2 text-xs font-semibold text-white/55">{tx("An early idea is a valid starting point.", "الفكرة الأولية بداية تستحق الحوار.")}</span>
          </div>

        </HelpHero>

        <section className="container-custom pt-12 md:pt-16">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={tx("Before the form", "قبل النموذج")}
              title={<>{tx("Describe the change.", "صف التغيير الذي تريده.")} <span className="font-light italic text-neutral-500">{tx("We will discuss the shape.", "وسنناقش الشكل المناسب له.")}</span></>}
            />
            <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">{tx("“We need a website” can mean a new sales channel, a clearer company story or a system behind the scenes. “We need design” can mean a sharper identity or a team that keeps producing. The useful conversation starts with what is missing, not with a package name.", "قد يعني «نحتاج إلى موقع» قناة بيع جديدة، أو تعريفًا أوضح بالشركة، أو نظامًا يدير العمل خلف الواجهة. وقد يعني «نحتاج إلى تصميم» هوية أدق، أو فريقًا يواصل الإنتاج. يبدأ الحوار المفيد بما ينقص العمل، لا باسم الباقة.")}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className={cn(PENCIL.card, "mt-8 overflow-hidden")}>
              <div className="flex items-center justify-between gap-4 border-b border-neutral-200 p-5 md:px-7">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">{tx("A few directions this conversation could take", "اتجاهات يمكن أن يأخذها الحوار")}</p>
                <div className="flex gap-2">
                  <button aria-label={tx("Previous direction", "الاتجاه السابق")} title={tx("Previous direction", "الاتجاه السابق")} onClick={() => setScene((scene + scenes.length - 1) % scenes.length)} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:border-neutral-900"><Prev size={19} /></button>
                  <button aria-label={tx("Next direction", "الاتجاه التالي")} title={tx("Next direction", "الاتجاه التالي")} onClick={() => setScene((scene + 1) % scenes.length)} className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-700"><Next size={19} /></button>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={scene} initial={reduced ? false : { opacity: 0, x: rtl ? -18 : 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: .25 }} className="grid gap-0 lg:grid-cols-[1.2fr_.8fr]">
                  <figure className="border-b border-neutral-200 lg:border-b-0 lg:border-e">
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100"><Image src={scenes[scene].image} alt={scenes[scene].caption} fill sizes="(max-width:1024px) 100vw, 60vw" className="object-contain" /></div>
                    <figcaption className="flex justify-between gap-3 p-4 font-mono text-[11px] text-neutral-500"><span>{scenes[scene].caption}</span><span>{tx("Actual Pencil interface", "واجهة فعلية من Pencil")}</span></figcaption>
                  </figure>
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <p className="font-mono text-xs font-bold text-neutral-400">0{scene + 1} / 04</p>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">{rtl ? scenes[scene].ar : scenes[scene].en}</h3>
                    <p className="mt-4 leading-8 text-neutral-600">{rtl ? scenes[scene].detailAr : scenes[scene].detailEn}</p>
                    <button onClick={() => choose(scenes[scene].id, true)} className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 text-sm font-bold text-white transition hover:bg-neutral-700">{tx("This sounds like my project", "هذا قريب من مشروعي")}<Next size={18} className="transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" /></button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </section>

        <section id="project-conversation" className="container-custom scroll-mt-24 py-12 md:py-16">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={tx("Why are you writing?", "لماذا تكتب إلينا؟")}
              title={tx("Pick the closest starting point.", "اختر البداية الأقرب إليك.")}
            />
            <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{tx("This is a direction, not a commitment. Choose what feels closest; you can change it without losing what you have written.", "هذا اتجاه أولي، وليس التزامًا. اختر ما يبدو أقرب إلى طلبك؛ ويمكنك تغييره دون فقدان ما كتبته.")}</p>
          </Reveal>
          <div role="radiogroup" aria-label={tx("Reason for contacting Pencil", "سبب التواصل مع Pencil")} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CONTACT_INTENTS.map((item, index) => {
              const active = selected === item.id;
              return (
                <button
                  key={item.id}
                  role="radio"
                  aria-checked={active}
                  tabIndex={active ? 0 : -1}
                  onClick={() => choose(item.id)}
                  onKeyDown={event => {
                    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
                    event.preventDefault();
                    const next = event.key === "Home" ? 0 : event.key === "End" ? CONTACT_INTENTS.length - 1 : (index + (event.key === "ArrowDown" || event.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + CONTACT_INTENTS.length) % CONTACT_INTENTS.length;
                    choose(CONTACT_INTENTS[next].id);
                    (event.currentTarget.parentElement?.children[next] as HTMLButtonElement)?.focus();
                  }}
                  className={cn("min-h-44 rounded-3xl border p-6 text-start transition", active ? "border-neutral-900 bg-neutral-900 text-white shadow-xl" : "border-neutral-200 bg-white hover:border-neutral-900")}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs opacity-50">0{index + 1}</span>
                    <span className={cn("flex h-7 w-7 items-center justify-center rounded-full border", active ? "border-white bg-white text-neutral-900" : "border-neutral-300 text-transparent")}>{active && <Check size={15} />}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">{text(item.title)}</h3>
                  <p className={cn("mt-2 text-sm leading-6", active ? "text-white/70" : "text-neutral-600")}>{text(item.line)}</p>
                </button>
              );
            })}
          </div>
          <div className="mt-5 grid items-start gap-5 lg:grid-cols-[.8fr_1.2fr]">
            <div className="lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                <motion.div key={intent.id} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .2 }} className={cn(PENCIL.card, "overflow-hidden")}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100"><Image src={intent.image} alt={intent.id === "direction" || intent.id === "creative" || intent.id === "other" ? tx("Pencil Studio creative composition", "تكوين بصري من Pencil Studio") : tx("Pencil digital interface", "واجهة رقمية من Pencil")} fill sizes="(max-width:1024px) 100vw, 40vw" className="object-contain" /></div>
                  <div className="p-7 md:p-8">
                    <h3 className="text-2xl font-bold tracking-tight">{tx("How we would approach this", "كيف نتعامل مع هذا الطلب")}</h3>
                    <p className="mt-3 leading-8 text-neutral-600">{text(intent.approach)}</p>
                    <div className="mt-6 rounded-2xl bg-neutral-50 p-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{tx("Useful to bring", "ما يفيد إحضاره")}</p>
                      <p className="mt-2 text-sm leading-7 text-neutral-700">{text(intent.prepare)}</p>
                    </div>
                    <div className="mt-4 rounded-2xl bg-neutral-50 p-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{tx("What this helps us clarify", "ما الذي يساعدنا هذا على توضيحه")}</p>
                      <p className="mt-2 text-sm leading-7 text-neutral-700">{text(intent.outcome)}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <PencilContactFlow intent={intent} rtl={rtl} />
          </div>
        </section>

        <section className="container-custom py-6 md:py-8">
          <Reveal>
            <div className={cn(PENCIL.card, "grid gap-8 p-7 md:p-10 lg:grid-cols-[1fr_1fr]")}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white"><Sparkles size={22} /></span>
                <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">{tx("Not sure what to ask for?", "لم يتضح لك ما الذي تطلبه؟")}</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-600">{tx("That is useful context too. The point of the first conversation is to uncover the work, not to test how well you can write a brief.", "هذا جزء مهم من السياق أيضًا. هدف الحوار الأول هو اكتشاف العمل المطلوب، وليس اختبار قدرتك على كتابة موجز.")}</p>
                <button onClick={() => choose("direction", true)} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-neutral-900 px-6 text-sm font-bold text-white transition hover:bg-neutral-700">{tx("Help me define the project", "ساعدني على تحديد المشروع")}<Next size={18} /></button>
              </div>
              <div className="space-y-4">
                {[
                  [tx("“Our identity no longer reflects the company.”", "«هويتنا لم تعد تعبّر عن الشركة.»"), tx("We can discuss what changed, what still holds value and where the identity needs to work harder.", "نناقش ما تغير، وما لا يزال يحمل قيمة، وأين تحتاج الهوية إلى أداء أفضل.")],
                  [tx("“Our team is doing the same task in three tools.”", "«فريقنا يكرر المهمة نفسها في ثلاث أدوات.»"), tx("We can map the workflow before deciding whether an integration, automation or custom system is needed.", "نرسم سير العمل قبل تحديد الحاجة إلى تكامل أو أتمتة أو نظام مخصص.")],
                  [tx("“The product exists. The launch does not feel ready.”", "«المنتج موجود، لكننا لا نشعر بالجاهزية للإطلاق.»"), tx("We can discuss UX, content, technical readiness and handover as one launch problem.", "نناقش تجربة الاستخدام والمحتوى والجاهزية التقنية والتسليم باعتبارها أجزاء من إطلاق واحد.")],
                ].map(([title, body], index) => (
                  <div key={title} className="rounded-2xl bg-neutral-50 p-5">
                    <p className="font-mono text-[10px] font-bold text-neutral-400">0{index + 1}</p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="container-custom py-12 md:py-16">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={tx("Prefer a direct conversation?", "تفضل التواصل مباشرة؟")}
              title={tx("Choose your channel.", "اختر وسيلة التواصل.")}
            />
            <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{tx("Send a few lines, a public link or a document. For a current project, include its name so the conversation starts in the right context.", "أرسل بضع جمل أو رابطًا عامًا أو مستندًا. وفي المشاريع الحالية، اذكر اسم المشروع ليبدأ الحوار في سياقه الصحيح.")}</p>
          </Reveal>
          <div className="mt-8 grid gap-4">
            {[
              { icon: Mail, title: tx("Project context & questions", "سياق المشروع والأسئلة"), label: "help@dipencil.com", href: "mailto:help@dipencil.com", line: tx("For your idea, brief, references and project questions.", "لفكرتك وموجزك ومراجعك وأسئلتك عن المشروع.") },
              { icon: Mail, title: tx("Company & partnership enquiries", "استفسارات الشركات والشراكات"), label: "info@dipencil.com", href: "mailto:info@dipencil.com", line: tx("For business introductions and wider company conversations.", "للتعريف بالأعمال ومناقشة التعاون مع الشركة.") },
              { icon: Mail, title: tx("Services & production enquiries", "استفسارات الخدمات والتنفيذ"), label: "services@dipencil.com", href: "mailto:services@dipencil.com", line: tx("For discussing service requirements and the work you need delivered.", "لمناقشة متطلبات الخدمة والعمل الذي تحتاج إلى تنفيذه.") },
              { icon: MessageCircle, title: "WhatsApp", label: "+20 100 377 8273", href: "https://wa.me/201003778273", line: tx("A direct first message. You can add images or documents there.", "رسالة أولى مباشرة. ويمكنك إضافة الصور والمستندات في المحادثة.") },
              { icon: PhoneCall, title: tx("Call Pencil", "اتصل بـ Pencil"), label: "+20 100 377 8273", href: "tel:+201003778273", line: tx("Sunday - Thursday · 10am - 7pm, Cairo time.", "الأحد - الخميس · 10 صباحًا - 7 مساءً بتوقيت القاهرة.") },
            ].map(item => (
              <Reveal key={item.href}>
                <a href={item.href} target={item.href.startsWith("https") ? "_blank" : undefined} rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined} className={cn(PENCIL.card, PENCIL.cardHover, "group grid grid-cols-[44px_1fr_20px] items-start gap-4 p-6")}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 transition group-hover:bg-neutral-900 group-hover:text-white"><item.icon size={20} /></span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{item.title}</p>
                    <p dir="ltr" className="mt-2 break-words text-xl font-bold tracking-tight">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{item.line}</p>
                  </div>
                  <ArrowUpRight size={20} className="mt-1 text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900" />
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              [tx("First, understand.", "أولًا، نفهم."), tx("The task, the audience, what exists and what needs to change.", "المهمة والجمهور وما هو موجود وما الذي يجب تغييره.")],
              [tx("Then, shape the scope.", "ثم نحدد النطاق."), tx("Priorities, dependencies and which disciplines the work needs.", "الأولويات والاعتماديات والتخصصات التي يحتاج إليها العمل.")],
              [tx("Agree before building.", "نتفق قبل التنفيذ."), tx("Deliverables, responsibilities and commercial terms are discussed before work begins.", "نناقش المخرجات والمسؤوليات والشروط التجارية قبل بدء العمل.")],
            ].map(([title, body], index) => (
              <Reveal key={title} delay={0.04 * index}>
                <div className={cn(PENCIL.card, "h-full p-7")}>
                  <span className="font-mono text-xs font-bold text-neutral-300">0{index + 1}</span>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-custom pb-12 md:pb-16">
          <Reveal>
            <PencilCTA
              title={tx("Ready when you are.", "جاهزون عندما تكون مستعدًا.")}
              desc={tx("Send your project opening by email or WhatsApp. A real person reads it and replies within work hours.", "أرسل بداية مشروعك بالبريد أو واتساب. يقرؤها شخص حقيقي ويرد خلال ساعات العمل.")}
              actions={
                <>
                  <a href="mailto:help@dipencil.com" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200"><Mail size={17} />help@dipencil.com</a>
                  <a href="https://wa.me/201003778273" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"><MessageCircle size={17} />WhatsApp</a>
                </>
              }
            />
          </Reveal>
        </section>

        <Footer />
      </MotionConfig>
    </div>
  );
}
