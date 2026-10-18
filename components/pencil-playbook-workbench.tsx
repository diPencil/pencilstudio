"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCareReducedMotion } from "@/components/pencil-care-accessibility";
import { ArrowLeft, ArrowRight, Download, Lightbulb, RotateCcw } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/reveal";
import { PENCIL } from "@/components/pencil-ui";
import { PENCIL_PLAYBOOKS, PLAYBOOK_COLLECTIONS, type Playbook } from "@/lib/pencil-playbooks";
import { local } from "@/components/studio-care-ui";
import { cn } from "@/lib/utils";

export function downloadPlaybook(guide: Playbook, rtl: boolean) {
  const title = local(guide.title, rtl);
  const lines = [
    "PENCIL / PLAYBOOKS", title, "", local(guide.intro, rtl), "",
    rtl ? "قبل البداية" : "BEFORE YOU START", local(guide.before, rtl), "",
    ...guide.steps.flatMap((step, index) => [`${index + 1}. ${local(step.title, rtl)}`, local(step.body, rtl), ""]),
    rtl ? "قائمة التحقق" : "CHECKLIST",
    ...guide.checklist.map((item) => `[ ] ${local(item, rtl)}`), "",
    rtl ? "ملاحظة تنفيذ" : "PRODUCTION NOTE", local(guide.tip, rtl), "",
    rtl ? "ملاحظات مشروعك:" : "YOUR PROJECT NOTES:", "________________________________________", "",
    "https://dipencil.com/help/guides",
  ];
  const blob = new Blob(["\uFEFF", lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `pencil-${guide.id}-${rtl ? "ar" : "en"}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function PlaybookResources() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  return <div className="grid gap-5 md:grid-cols-3">{["brief", "content", "launch"].map((id, index) => {
    const guide = PENCIL_PLAYBOOKS.find((item) => item.id === id)!;
    return <Reveal key={id} delay={0.04 * index}><article className={cn(PENCIL.card, PENCIL.cardHover, "flex min-h-[295px] flex-col justify-between p-7")}><div><div className="flex justify-between font-mono text-[10px] font-bold text-neutral-400"><span>RESOURCE / 0{index + 1}</span><span>TXT · {rtl ? "AR" : "EN"}</span></div><h3 className="mt-8 text-2xl font-bold leading-tight tracking-tight">{local(guide.title, rtl)}</h3><p className="mt-3 text-sm leading-7 text-neutral-600">{rtl ? "الخطوات وقائمة التحقق ومساحة لملاحظات مشروعك، في ملف نصي قابل للتحرير." : "Steps, a checklist and room for your project notes in an editable text file."}</p></div><button onClick={() => downloadPlaybook(guide, rtl)} className="mt-7 inline-flex min-h-12 items-center justify-between gap-4 rounded-full border border-neutral-200 px-5 text-start text-sm font-bold transition hover:border-neutral-900">{rtl ? "تنزيل دفتر العمل" : "Download the worksheet"}<Download size={18} /></button></article></Reveal>;
  })}</div>;
}

export function PlaybookWorkbench() {
  const { locale } = useLanguage();
  const rtl = locale === "ar";
  const reduce = useCareReducedMotion();
  const [collection, setCollection] = React.useState("prepare");
  const [selected, setSelected] = React.useState("branding");
  const [checked, setChecked] = React.useState<Set<string>>(new Set());
  const reader = React.useRef<HTMLDivElement>(null);
  const rail = React.useRef<HTMLDivElement>(null);
  const guides = PENCIL_PLAYBOOKS.filter((item) => item.collection === collection && item.id !== "brief");
  const guide = PENCIL_PLAYBOOKS.find((item) => item.id === selected)!;
  const completed = guide.checklist.filter((_, index) => checked.has(`${guide.id}-${index}`)).length;
  const chooseCollection = (id: string) => {
    setCollection(id);
    setSelected(PENCIL_PLAYBOOKS.find((item) => item.collection === id && item.id !== "brief")!.id);
    rail.current?.scrollTo({ left: 0 });
  };
  const chooseGuide = (id: string) => {
    setSelected(id);
    reader.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };
  const moveRail = (next: boolean) => {
    const direction = (next ? 1 : -1) * (rtl ? -1 : 1);
    rail.current?.scrollBy({ left: direction * 350, behavior: reduce ? "auto" : "smooth" });
  };
  const Next = rtl ? ArrowLeft : ArrowRight;
  const Previous = rtl ? ArrowRight : ArrowLeft;
  return <>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-neutral-200 bg-white p-1.5">{PLAYBOOK_COLLECTIONS.map((item) => <button key={item.id} aria-pressed={collection === item.id} onClick={() => chooseCollection(item.id)} className={cn("min-h-11 shrink-0 rounded-full px-5 text-sm font-bold transition", collection === item.id ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-100")}>{rtl ? item.ar : item.en}</button>)}</div>
      <div className="flex gap-2">
        <button aria-label={rtl ? "السابق" : "Previous guides"} onClick={() => moveRail(false)} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"><Previous size={18} /></button>
        <button aria-label={rtl ? "التالي" : "Next guides"} onClick={() => moveRail(true)} className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"><Next size={18} /></button>
      </div>
    </div>
    <div ref={rail} aria-label={rtl ? "مجموعة الأدلة" : "Guide collection"} className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
      {guides.map((item, index) => (
        <button key={item.id} aria-pressed={selected === item.id} onClick={() => chooseGuide(item.id)} className={cn("group relative min-h-[310px] w-[300px] shrink-0 snap-start overflow-hidden rounded-3xl border text-start text-white transition md:w-[365px]", selected === item.id ? "border-neutral-900 shadow-xl" : "border-neutral-200")}>
          <Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="365px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
            <span className="rounded-full bg-white px-3 py-1 font-mono text-[10px] font-bold text-neutral-900">FIELD GUIDE / {String(index + 1).padStart(2, "0")}</span>
            <span className={cn("flex h-9 w-9 items-center justify-center rounded-full", selected === item.id ? "bg-white text-neutral-900" : "bg-white/15 text-white backdrop-blur-md")}><Next size={15} /></span>
          </div>
          <h3 className="absolute inset-x-0 bottom-0 p-6 text-2xl font-bold leading-tight tracking-tight">{local(item.title, rtl)}</h3>
        </button>
      ))}
    </div>
    <div ref={reader} id="playbook-reader" className={cn(PENCIL.card, "mt-6 scroll-mt-24 overflow-hidden")}>
      <AnimatePresence mode="wait"><motion.article key={guide.id} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <div className="grid lg:grid-cols-[1fr_.7fr]">
          <div className="p-7 md:p-10">
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? "دفتر العمل المفتوح" : "The open playbook"}</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight md:text-4xl">{local(guide.title, rtl)}</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">{local(guide.intro, rtl)}</p>
          </div>
          <div className="border-t border-neutral-200 bg-neutral-50 p-7 md:p-10 lg:border-s lg:border-t-0">
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-neutral-500"><Lightbulb size={15} />{rtl ? "قبل البداية" : "Before you start"}</p>
            <p className="mt-4 leading-8 text-neutral-700">{local(guide.before, rtl)}</p>
          </div>
        </div>
        <div className="grid border-t border-neutral-200 lg:grid-cols-[1fr_330px]">
          <div className="p-7 md:p-10">
            <ol>{guide.steps.map((step, index) => <li key={step.title.en} className="grid grid-cols-[36px_1fr] gap-4 border-b border-neutral-200 py-7 first:pt-0 last:border-0 last:pb-0 md:grid-cols-[60px_1fr]"><span className="font-mono text-3xl font-bold text-neutral-200">{String(index + 1).padStart(2, "0")}</span><div><h4 className="text-xl font-bold leading-8 tracking-tight">{local(step.title, rtl)}</h4><p className="mt-3 leading-8 text-neutral-600">{local(step.body, rtl)}</p></div></li>)}</ol>
            <div className="mt-9 flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white"><Lightbulb size={19} /></span>
              <div><p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">{rtl ? "ملاحظة من التنفيذ" : "From the production desk"}</p><p className="mt-2 text-sm leading-7 text-neutral-600">{local(guide.tip, rtl)}</p></div>
            </div>
          </div>
          <aside className="border-t border-neutral-200 bg-neutral-50/60 p-7 lg:border-s lg:border-t-0">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold tracking-tight">{rtl ? "قائمة الجاهزية" : "Readiness checklist"}</h4>
              <button aria-label={rtl ? "إعادة ضبط القائمة" : "Reset checklist"} onClick={() => setChecked(current => new Set([...current].filter(key => !key.startsWith(guide.id + "-"))))} className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-neutral-200"><RotateCcw size={16} /></button>
            </div>
            <p aria-live="polite" className="mt-3 text-xs text-neutral-500">{completed} / {guide.checklist.length} {rtl ? "جاهزة" : "ready"}</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-neutral-200"><span className="block h-full rounded-full bg-neutral-900 transition-[width]" style={{ width: `${completed / guide.checklist.length * 100}%` }} /></div>
            <div className="mt-6 space-y-1">{guide.checklist.map((item, index) => {
              const key = `${guide.id}-${index}`;
              return <label key={key} className="flex min-h-14 cursor-pointer items-start gap-3 rounded-2xl border border-transparent px-3 py-3.5 text-sm leading-6 transition hover:border-neutral-200 hover:bg-white"><input type="checkbox" checked={checked.has(key)} onChange={() => setChecked(current => { const next = new Set(current); if (next.has(key)) next.delete(key); else next.add(key); return next; })} className="mt-1 h-5 w-5 shrink-0 accent-neutral-900" /><span className={cn(checked.has(key) && "text-neutral-400 line-through")}>{local(item, rtl)}</span></label>;
            })}</div>
            <button onClick={() => downloadPlaybook(guide, rtl)} className="mt-6 flex min-h-12 w-full items-center justify-between gap-3 rounded-full bg-neutral-900 px-5 text-start text-sm font-bold text-white transition hover:bg-neutral-700">{rtl ? "احتفظ بدفتر العمل" : "Keep the worksheet"}<Download size={17} /></button>
          </aside>
        </div>
      </motion.article></AnimatePresence>
    </div>
  </>;
}
