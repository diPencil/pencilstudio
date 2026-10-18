"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Code2, Layers, Palette, Pause, Play } from "lucide-react";
import { SUPPORT_SERVICES, SUPPORT_STAGES } from "@/lib/pencil-support-operations";

const groups = {
  creative: { en: "Creative", ar: "الإبداع", icon: Palette, color: "#f6c453" },
  technology: { en: "Technology", ar: "التقنية", icon: Code2, color: "#8db4ff" },
  operation: { en: "Operation", ar: "التشغيل", icon: Layers, color: "#61d095" },
};
const local = (value: { en: string; ar: string }, rtl: boolean) => rtl ? value.ar : value.en;

export function useSupportReducedMotion() {
  const preference = useReducedMotion();
  const [reduce, setReduce] = React.useState(false);
  // Keep server markup and the first client render identical.
  React.useEffect(() => { setReduce(Boolean(preference)); }, [preference]);
  return reduce;
}

export function SupportServiceMap({ rtl }: { rtl: boolean }) {
  const [selected, setSelected] = React.useState(0);
  const item = SUPPORT_SERVICES[selected];
  const reduce = useSupportReducedMotion();
  return <div className="grid border-y border-white/20 lg:grid-cols-[.38fr_.62fr]">
    <div role="tablist" aria-label={rtl ? "خدمات تدعمها Pencil" : "Services Pencil supports"} aria-orientation="vertical" className="border-b border-white/20 lg:border-b-0 lg:border-e">
      {SUPPORT_SERVICES.map((service, index) => {
        const GroupIcon = groups[service.group].icon;
        return <button key={service.id} role="tab" id={"support-service-" + service.id} aria-controls="support-service-panel" aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
          if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const next = event.key === "Home" ? 0 : event.key === "End" ? SUPPORT_SERVICES.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + SUPPORT_SERVICES.length) % SUPPORT_SERVICES.length;
          setSelected(next); document.getElementById("support-service-" + SUPPORT_SERVICES[next].id)?.focus();
        }} className={`flex min-h-[84px] w-full items-center gap-4 border-b border-white/15 px-5 py-4 text-start transition last:border-b-0 ${selected === index ? "bg-white text-neutral-950" : "hover:bg-white/5"}`}>
          <GroupIcon size={19} className="shrink-0" style={{ color: selected === index ? "#2057ff" : groups[service.group].color }} /><span className="flex-1"><span className="block text-xs font-medium opacity-70">{rtl ? groups[service.group].ar : groups[service.group].en}</span><span className="mt-1 block text-base font-bold">{local(service.name, rtl)}</span></span><span className="font-mono text-xs opacity-60">0{index + 1}</span>
        </button>;
      })}
    </div>
    <div id="support-service-panel" role="tabpanel" aria-labelledby={"support-service-" + item.id} tabIndex={0} className="min-w-0 p-6 outline-offset-[-3px] md:p-9">
      <AnimatePresence mode="wait"><motion.div key={item.id} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}>
        <div className="flex items-center gap-3"><span className="h-2 w-2" style={{ background: groups[item.group].color }} /><p className="text-xs font-bold uppercase" style={{ color: groups[item.group].color }}>{local(item.name, rtl)}</p></div>
        <h3 className="mt-5 max-w-2xl text-2xl font-bold md:text-3xl">{local(item.question, rtl)}</h3>
        <p className="mt-5 text-base leading-8 text-white/75">{local(item.detail, rtl)}</p>
        <figure className="mt-7"><div className="relative aspect-[16/8] overflow-hidden bg-white"><Image src={item.image} alt={local(item.name, rtl)} fill sizes="(max-width:1024px) 100vw, 60vw" className={item.image.startsWith("/help-editorial") ? "object-contain" : "object-cover"} /></div><figcaption className="mt-2 text-xs text-white/60">{item.image.startsWith("/help-editorial") ? rtl ? "واجهة فعلية من منظومة Pencil" : "Actual interface from the Pencil ecosystem" : rtl ? "تكوين بصري للخدمة من مواد مشروع Pencil" : "Service visual from Pencil project materials"}</figcaption></figure>
        <ul className="mt-6 border-t border-white/20">{item.tasks.map(task => <li key={task.en} className="flex items-start gap-3 border-b border-white/15 py-3 text-sm leading-7"><Check size={16} className="mt-1.5 shrink-0 text-[#61d095]" />{local(task, rtl)}</li>)}</ul>
        <p className="mt-6 text-sm leading-7 text-white/75"><strong className="text-white">{rtl ? "جهّز للطلب: " : "Bring to the request: "}</strong>{local(item.bring, rtl)}</p>
        <p className="mt-4 border-s-2 border-[#f6c453] ps-4 text-xs leading-6 text-white/65">{local(item.boundary, rtl)}</p>
        <Link href={item.href} className="mt-6 inline-flex min-h-12 items-center gap-5 border-b border-[#61d095] text-sm font-bold">{rtl ? "انتقل إلى مسار الدعم المناسب" : "Continue to the relevant support route"}<ArrowUpRight size={19} /></Link>
      </motion.div></AnimatePresence>
    </div>
  </div>;
}

export function SupportStageTimeline({ rtl }: { rtl: boolean }) {
  const [selected, setSelected] = React.useState(3);
  const reduce = useSupportReducedMotion();
  const stage = SUPPORT_STAGES[selected];
  return <div>
    <div role="tablist" aria-label={rtl ? "الدعم حسب مرحلة المشروع" : "Support by project stage"} className="flex overflow-x-auto border-b border-neutral-300 pb-0">
      {SUPPORT_STAGES.map((item, index) => <button role="tab" key={item.id} id={"support-stage-" + item.id} aria-selected={selected === index} aria-controls="support-stage-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === "Home" ? 0 : event.key === "End" ? 4 : (index + (event.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + 5) % 5;
        setSelected(next); document.getElementById("support-stage-" + SUPPORT_STAGES[next].id)?.focus();
        document.getElementById("support-stage-" + SUPPORT_STAGES[next].id)?.scrollIntoView({ block: "nearest", inline: "nearest" });
      }} className={`min-h-24 min-w-[145px] flex-1 border-b-2 px-5 py-4 text-start transition ${selected === index ? "border-[#2057ff] bg-[#e9efff]" : "border-transparent hover:bg-neutral-100"}`}><span className="block font-mono text-xs text-neutral-500">0{index + 1}</span><span className="mt-3 block font-bold">{local(item.title, rtl)}</span></button>)}
    </div>
    <div role="tabpanel" id="support-stage-panel" aria-labelledby={"support-stage-" + stage.id} tabIndex={0} className="pt-10">
      <AnimatePresence mode="wait"><motion.div key={stage.id} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }} className="grid gap-8 md:grid-cols-[.35fr_.65fr]">
        <div><p className="font-mono text-xs text-[#2057ff]">0{selected + 1} / {local(stage.title, rtl)}</p><h3 className="mt-5 text-3xl font-bold">{local(stage.question, rtl)}</h3></div><div><p className="text-lg leading-8 text-neutral-600">{local(stage.detail, rtl)}</p><ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">{stage.checks.map(check => <li key={check.en} className="flex items-center gap-2 text-sm font-bold"><Check size={15} className="text-[#2057ff]" />{local(check, rtl)}</li>)}</ul><Link href={stage.href} className="mt-7 inline-flex min-h-12 items-center gap-5 border-b border-neutral-950 text-sm font-bold">{rtl ? "المسار المناسب لهذه المرحلة" : "The next route for this stage"}<ArrowUpRight size={18} /></Link></div>
      </motion.div></AnimatePresence>
    </div>
  </div>;
}

const scenes = [
  { image: "/help-editorial/pencil-home.png", title: { en: "The public-facing experience", ar: "التجربة التي يراها الجمهور" }, line: { en: "A campaign lands on a website. The visual promise, the page content and the form need to agree. Creative support and technical support belong in the same conversation when the journey crosses both.", ar: "تنتهي رحلة الحملة عند الموقع. يجب أن ينسجم الوعد البصري مع محتوى الصفحة والنموذج. يجتمع الدعم الإبداعي والتقني في حوار واحد عندما تشمل الرحلة كليهما." }, caption: "Pencil Studio / Website", href: "/support/customer" },
  { image: "/help-editorial/pencil-solutions.png", title: { en: "The next product decision", ar: "القرار التالي في المنتج" }, line: { en: "A new feature is not only a development task. Review the flow, content, permissions and existing components before adding another screen. The next phase can use the foundations already built.", ar: "الوظيفة الجديدة ليست مهمة تطوير فقط. نراجع المسار والمحتوى والصلاحيات والمكونات الحالية قبل إضافة شاشة أخرى. تستطيع المرحلة التالية الاستفادة من الأسس المبنية." }, caption: "Pencil / Solutions interface", href: "/support/technical" },
  { image: "/help-editorial/pencil-cloud.png", title: { en: "The release behind the screen", ar: "الإصدار خلف الشاشة" }, line: { en: "Domains, environments and access can hold up a launch even when the interface is ready. Clarifying ownership and deployment requirements is operational work, not a last-minute extra.", ar: "قد تؤخر النطاقات والبيئات والصلاحيات الإطلاق رغم جاهزية الواجهة. توضيح الملكية ومتطلبات النشر عمل تشغيلي، وليس إضافة في اللحظة الأخيرة." }, caption: "Pencil / Cloud & Hosting interface", href: "/support/technical" },
  { image: "/help-editorial/pencil-superfeliz.png", title: { en: "The intelligence in the workflow", ar: "الذكاء داخل سير العمل" }, line: { en: "SuperFeliz discussions start with the task and the result people need. Ongoing work can revisit the workflow, prompts and review points as the use case becomes clearer.", ar: "تبدأ مناقشات SuperFeliz بالمهمة والنتيجة التي يحتاج إليها الناس. يمكن للعمل المستمر مراجعة المسار والتعليمات ونقاط المراجعة مع اتضاح حالة الاستخدام." }, caption: "SuperFeliz / Pencil interface", href: "/support/callback" },
];

export function SupportContinuityReel({ rtl }: { rtl: boolean }) {
  const [ref, api] = useEmblaCarousel({ loop: true, direction: rtl ? "rtl" : "ltr", align: "start" });
  const [selected, setSelected] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const reduce = useSupportReducedMotion();
  React.useEffect(() => {
    if (!api) return;
    const select = () => setSelected(api.selectedScrollSnap()); select();
    api.on("select", select); api.on("reInit", select);
    return () => { api.off("select", select); api.off("reInit", select); };
  }, [api]);
  React.useEffect(() => {
    if (!api || !playing || paused || reduce) return;
    const timer = setInterval(() => api.scrollNext(), 7000);
    return () => clearInterval(timer);
  }, [api, playing, paused, reduce]);
  const Next = rtl ? ArrowLeft : ArrowRight;
  const Prev = rtl ? ArrowRight : ArrowLeft;
  return <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false); }}>
    <div className="overflow-hidden" ref={ref} aria-roledescription="carousel" aria-label={rtl ? "استمرارية العمل داخل منظومة Pencil" : "Continuity across the Pencil ecosystem"}>
      <div className="flex touch-pan-y">{scenes.map((item, index) => <article key={item.caption} className="min-w-0 flex-[0_0_100%]" role="group" aria-roledescription="slide" aria-label={(index + 1) + " / 4"} aria-hidden={selected !== index} inert={selected !== index ? true : undefined}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><figure><div className="relative aspect-[16/10] bg-white"><Image src={item.image} alt={item.caption} fill sizes="(max-width:1024px) 100vw, 60vw" className="object-contain" /></div><figcaption className="mt-3 font-mono text-xs text-white/65">{item.caption} / {rtl ? "واجهة Pencil الفعلية" : "Actual Pencil interface"}</figcaption></figure><div className="flex flex-col justify-center lg:ps-5"><p className="font-mono text-xs text-[#61d095]">0{index + 1} / 04</p><h3 className="mt-5 text-3xl font-bold md:text-4xl">{local(item.title, rtl)}</h3><p className="mt-6 text-base leading-8 text-white/75">{local(item.line, rtl)}</p><Link href={item.href} className="mt-7 flex min-h-12 items-center justify-between border-b border-white/40 text-sm font-bold">{rtl ? "ناقش احتياجات الاستمرار" : "Discuss the continuing work"}<ArrowUpRight size={20} /></Link></div></div>
      </article>)}</div>
    </div>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-5">
      <div className="flex gap-2">{scenes.map((item, index) => <button key={item.caption} onClick={() => api?.scrollTo(index)} aria-label={(rtl ? "عرض المشهد " : "Show scene ") + (index + 1)} aria-pressed={index === selected} className="flex h-11 w-11 items-center justify-center"><span className={`h-1 w-7 ${index === selected ? "bg-[#61d095]" : "bg-white/35"}`} /></button>)}</div>
      <div className="flex gap-2">
        {!reduce && <button onClick={() => setPlaying(!playing)} aria-label={playing ? rtl ? "إيقاف العرض التلقائي" : "Pause automatic slides" : rtl ? "تشغيل العرض التلقائي" : "Play automatic slides"} title={playing ? rtl ? "إيقاف العرض التلقائي" : "Pause automatic slides" : rtl ? "تشغيل العرض التلقائي" : "Play automatic slides"} aria-pressed={playing} className="flex h-12 w-12 items-center justify-center border border-white/30">{playing ? <Pause size={18} /> : <Play size={18} />}</button>}
        <button onClick={() => api?.scrollPrev()} aria-label={rtl ? "المشهد السابق" : "Previous scene"} title={rtl ? "المشهد السابق" : "Previous scene"} className="flex h-12 w-12 items-center justify-center border border-white/30"><Prev size={20} /></button><button onClick={() => api?.scrollNext()} aria-label={rtl ? "المشهد التالي" : "Next scene"} title={rtl ? "المشهد التالي" : "Next scene"} className="flex h-12 w-12 items-center justify-center bg-[#61d095] text-neutral-950"><Next size={20} /></button>
      </div>
    </div>
  </div>;
}
