"use client";

import * as React from "react";
import { PencilCareAccessibility, useCareReducedMotion } from "@/components/pencil-care-accessibility";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ClipboardList, FileCheck2, Flag, Lightbulb, Rocket, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { PencilCTA, PencilSectionTitle, PENCIL } from "@/components/pencil-ui";
import { HelpHero } from "@/components/help-hero";
import { local } from "@/components/studio-care-ui";
import { PENCIL_PLAYBOOKS } from "@/lib/pencil-playbooks";
import { PlaybookResources, PlaybookWorkbench, downloadPlaybook } from "@/components/pencil-playbook-workbench";
import { cn } from "@/lib/utils";

export function PencilGuidesEditorial() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const reduce = useCareReducedMotion();
  const brief = PENCIL_PLAYBOOKS.find(item => item.id === "brief")!;
  const [briefStep, setBriefStep] = React.useState(0);
  const currentStep = brief.steps[briefStep];
  const Next = rtl ? ArrowLeft : ArrowRight;
  const Previous = rtl ? ArrowRight : ArrowLeft;
  return (
    <div data-pencil-care dir={rtl ? "rtl" : "ltr"} className={cn("pencil-help-page min-h-screen overflow-x-clip text-neutral-900", PENCIL.paper)}>
      <PencilCareAccessibility />
      <MotionConfig reducedMotion="user">
        <Header />

        <HelpHero
          size="2xl"
          seed={0x9a8b7c6d}
          outline={!rtl}
          breadcrumb={[
            { label: rtl ? "الرئيسية" : "Home", href: "/" },
            { label: rtl ? "مركز المساعدة" : "Help Center", href: "/help" },
            { label: rtl ? "الأدلة" : "Guides" },
          ]}
          badges={
            <>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pe-4 ps-4 text-[11px] font-bold backdrop-blur-md">
                {rtl ? "دفاتر عمل Pencil" : "Pencil field guides"}
              </span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-[11px] font-bold text-emerald-300" dir={rtl ? "rtl" : "ltr"}>
                {rtl ? "12 دليلًا" : "12 guides"}
              </span>
            </>
          }
          titleA={rtl ? "دفاتر عمل Pencil." : "Pencil Playbooks."}
          titleB={rtl ? "فكرة أوضح، بداية أفضل." : "Clearer thinking. Better starts."}
          subtitle={rtl ? "أدلة عملية لتجهيز الموجز، وتنظيم المحتوى، واختيار المنتج، وتقديم ملاحظات مفيدة. قرارات أوضح قبل بدء التنفيذ." : "Practical tools for better briefs, product decisions, content and feedback. Prepare the work before production begins."}
          caption={
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[{ n: "01", en: "Prepare the material", ar: "جهز المادة" }, { n: "02", en: "Plan the experience", ar: "خطط للتجربة" }, { n: "03", en: "Keep production moving", ar: "حرك التنفيذ" }].map(item => (
                <span key={item.n} className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-bold text-white/60"><span className="me-1.5 font-mono text-[10px] opacity-60">{item.n}</span>{rtl ? item.ar : item.en}</span>
              ))}
            </div>
          }
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <a href="#featured-brief" className="group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">{rtl ? "ابدأ بالموجز" : "Start with the brief"}<Next size={17} className="transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" /></a>
            <a href="#playbook-collection" className="group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-white/10 px-6 text-sm font-bold text-white/65 transition hover:border-white/25 hover:text-white">{rtl ? "اختر دفتر العمل" : "Find your playbook"}<ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </div>

        </HelpHero>

        <section id="featured-brief" className="container-custom scroll-mt-24 pt-12 md:pt-16">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={rtl ? "الدليل الرئيسي" : "The featured guide"}
              title={local(brief.title, rtl)}
            />
            <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{local(brief.intro, rtl)}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className={cn(PENCIL.card, "mt-8 grid overflow-hidden lg:grid-cols-[.7fr_1.3fr]")}>
              <aside className="border-b border-neutral-200 bg-neutral-50/60 p-7 md:p-9 lg:border-b-0 lg:border-e">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white"><ClipboardList size={22} /></span>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{rtl ? "قبل كتابة السطر الأول" : "Before the first line"}</h3>
                <p className="mt-3 leading-8 text-neutral-600">{local(brief.before, rtl)}</p>
                <div className="mt-6 space-y-1">
                  {brief.steps.map((step, index) => (
                    <button key={step.title.en} aria-pressed={briefStep === index} onClick={() => setBriefStep(index)} className={cn("flex min-h-12 w-full items-center gap-3 rounded-full px-4 py-2.5 text-start text-sm font-bold transition", briefStep === index ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-white hover:text-neutral-900")}>
                      <span className="font-mono text-[10px] opacity-50">0{index + 1}</span>{local(step.title, rtl)}
                    </button>
                  ))}
                </div>
              </aside>
              <div className="flex min-h-[420px] flex-col justify-between p-7 md:p-10">
                <motion.div key={briefStep} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>
                  <span className="font-mono text-6xl font-bold text-neutral-200 md:text-7xl">0{briefStep + 1}</span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">{local(currentStep.title, rtl)}</h3>
                  <p className="mt-5 max-w-3xl text-lg leading-9 text-neutral-600">{local(currentStep.body, rtl)}</p>
                </motion.div>
                <div className="mt-10 flex items-center justify-between gap-3 border-t border-neutral-200 pt-5">
                  <p className="font-mono text-xs text-neutral-500">{briefStep + 1} / {brief.steps.length}</p>
                  <div className="flex gap-2">
                    <button aria-label={rtl ? "الخطوة السابقة" : "Previous step"} disabled={briefStep === 0} onClick={() => setBriefStep(value => value - 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:border-neutral-900 disabled:opacity-30"><Previous size={17} /></button>
                    <button aria-label={rtl ? "الخطوة التالية" : "Next step"} disabled={briefStep === brief.steps.length - 1} onClick={() => setBriefStep(value => value + 1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:bg-neutral-700 disabled:opacity-30"><Next size={17} /></button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className={cn(PENCIL.card, "mt-5 flex flex-wrap items-center justify-between gap-4 p-6 md:p-7")}>
              <p className="max-w-3xl text-sm font-bold leading-7">{local(brief.tip, rtl)}</p>
              <button onClick={() => downloadPlaybook(brief, rtl)} className="inline-flex min-h-12 items-center rounded-full bg-neutral-900 px-6 text-sm font-bold text-white transition hover:bg-neutral-700">{rtl ? "تنزيل قالب الموجز" : "Download the brief worksheet"}</button>
            </div>
          </Reveal>
        </section>

        <section id="playbook-collection" className="container-custom scroll-mt-24 py-12 md:py-16">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={rtl ? "مجموعات العمل" : "The working collections"}
              title={rtl ? <>اختر المرحلة. <span className="font-light italic text-neutral-500">افتح القرار التالي.</span></> : <>Choose the stage. <span className="font-light italic text-neutral-500">Open the next decision.</span></>}
            />
            <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "أحد عشر دليلًا إضافيًا للتجهيز والتخطيط والتعاون. اقرأ الخطوات كاملة هنا، وراجع جاهزية المواد قبل إرسالها إلى الفريق." : "Eleven more guides for preparation, planning and collaboration. Read the practical steps here and check material readiness before it reaches the team."}</p>
          </Reveal>
          <PlaybookWorkbench />
        </section>

        <section className="container-custom py-6 md:py-8">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={rtl ? "الملاحظات التي تحرك العمل" : "Feedback that moves the work"}
              title={rtl ? "غيّر السؤال، تتحسن المراجعة." : "Change the question. Improve the review."}
            />
            <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "الفرق بين ملاحظة مبهمة وملاحظة نافعة ليس طول الرسالة؛ بل وضوح الموضع والأثر والهدف." : "The difference between vague and useful feedback is not message length. It is a clear location, consequence and objective."}</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className={cn(PENCIL.card, "h-full p-7 md:p-9")}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? "يصعب التنفيذ" : "Hard to act on"}</p>
                <p className="mt-4 text-2xl font-light italic leading-snug text-neutral-500">{rtl ? "«التصميم يحتاج إلى إحساس أقوى.»" : "“The design needs to feel stronger.”"}</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className={cn(PENCIL.card, "h-full border-neutral-900 p-7 md:p-9")}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-900">{rtl ? "قرار يمكن العمل عليه" : "A decision the team can use"}</p>
                <p className="mt-4 text-xl font-bold leading-9 tracking-tight">{rtl ? "«في أول شاشة على الهاتف، يظهر الوصف قبل الخدمة نفسها. نحتاج إلى أن يفهم الزائر ما نقدمه قبل التمرير.»" : "“On the first mobile screen, the description appears before the service itself. Visitors need to understand the offer before they scroll.”"}</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.06}>
            <div className={cn(PENCIL.card, "mt-5 flex items-start gap-4 p-6 md:p-7")}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100"><Lightbulb size={19} /></span>
              <p className="text-sm leading-7 text-neutral-600">{rtl ? "اذكر أين ترى المشكلة ولماذا تؤثر في الهدف. امنح الفريق فرصة لحلها بدل فرض معالجة قبل فهم السبب." : "Name where you see the issue and why it affects the objective. Give the team room to solve it rather than prescribing a treatment before the cause is clear."}</p>
            </div>
          </Reveal>
        </section>

        <section className="container-custom py-12 md:py-16">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={rtl ? "الإطلاق والتسليم" : "Launch & handover"}
              title={rtl ? <>النشر خطوة. <span className="font-light italic text-neutral-500">الإطلاق عملية كاملة.</span></> : <>Publishing is a step. <span className="font-light italic text-neutral-500">Launch is an operation.</span></>}
            />
            <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "هذا ترتيب عمل، لا وعد بمدة ثابتة. تختلف التفاصيل حسب المنتج والتكاملات والفريق الذي سيديره." : "This is a working sequence, not a fixed-duration promise. Details depend on the product, integrations and the people who will operate it."}</p>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <figure className={cn(PENCIL.card, "relative min-h-[380px] overflow-hidden")}>
                <Image src="/help-editorial/pencil-cloud.png" alt={rtl ? "واجهة خدمات السحابة الفعلية في Pencil" : "The Pencil cloud services interface"} fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 45vw" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/75 p-5 text-sm font-bold text-white backdrop-blur-sm">{rtl ? "الصلاحيات والنطاقات والاستضافة جزء من تفكير التسليم." : "Access, domains and hosting belong in handover thinking."}</figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Flag, en: "Confirm the release boundary", ar: "تأكيد حدود الإطلاق", de: "Scope, content, account owners and final decision.", da: "النطاق والمحتوى ومالكو الحسابات والقرار النهائي." },
                { icon: ShieldCheck, en: "Verify critical journeys", ar: "التحقق من الرحلات الأساسية", de: "Forms, payments, access, language and devices, where relevant.", da: "النماذج والدفع والوصول واللغة والأجهزة حسب الحاجة." },
                { icon: Rocket, en: "Release and observe", ar: "النشر والمراقبة", de: "Live settings, backup, recovery and a named inspection owner.", da: "الإعدادات الحية والنسخ والتعافي ومسؤول فحص محدد." },
                { icon: FileCheck2, en: "Transfer the ability to operate", ar: "نقل القدرة على التشغيل", de: "Secure access, documentation, training and the support route.", da: "الوصول الآمن والمستندات والتدريب ومسار الدعم." },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.en} delay={0.04 * (index % 2)}>
                    <div className={cn(PENCIL.card, "h-full p-6")}>
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 text-white"><Icon size={20} /></span>
                      <p className="mt-5 font-mono text-[10px] font-bold text-neutral-400">0{index + 1}</p>
                      <p className="mt-2 text-lg font-bold tracking-tight">{rtl ? item.ar : item.en}</p>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">{rtl ? item.da : item.de}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container-custom py-6 md:py-8">
          <Reveal>
            <PencilSectionTitle
              isRtl={rtl}
              kicker={rtl ? "موارد تحتفظ بها" : "Take it into the project"}
              title={rtl ? "دفاتر صغيرة. قرارات أكثر وضوحًا." : "Small worksheets. Clearer decisions."}
            />
            <p className="mt-4 max-w-2xl leading-8 text-neutral-600">{rtl ? "ملفات نصية قابلة للتحرير تجمع الخطوات وقوائم التحقق. اختر لغة الصفحة التي تريد أن تحتفظ بها في ملفك." : "Editable text resources with steps and checklists, ready for your own notes and the next project conversation."}</p>
          </Reveal>
          <div className="mt-8"><PlaybookResources /></div>
        </section>

        <section className="container-custom pb-12 pt-6 md:pb-16">
          <Reveal>
            <PencilCTA
              title={rtl ? "جهزت السياق. لنرسم العمل معًا." : "You have the context. Let us shape the work."}
              desc={rtl ? "أرسل الموجز أو المواد كما أصبحت، حتى لو ظلت بعض الأسئلة مفتوحة. سنبدأ من القرار الذي يحتاج المشروع إلى حسمه." : "Send the brief or material as it stands, even if a few questions remain open. We will begin with the decision the project needs to resolve."}
              actions={
                <>
                  <Link href="/help/contact" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-neutral-900 transition hover:bg-neutral-200">{rtl ? "ابدأ مع Pencil" : "Start with Pencil"}<ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                  <Link href="/help/faqs" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10">{rtl ? "أسئلة قبل التعاون" : "Questions before we work"}</Link>
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
