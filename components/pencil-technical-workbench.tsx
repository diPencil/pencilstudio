"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Braces, Check, CircleHelp, Database, FileOutput, Gauge, Globe, KeyRound, LayoutDashboard, Monitor, Network, Search, ServerCog, Smartphone } from "lucide-react";
import { TECHNICAL_INVESTIGATION, TECHNICAL_SUPPORT_AREAS, technicalText } from "@/lib/pencil-technical-care";

const areaIcons = [Monitor, Braces, Database, ServerCog, Globe, Network, LayoutDashboard, Smartphone, Gauge, KeyRound, FileOutput, CircleHelp];
export function TechnicalAreaWorkbench({ rtl, area, onChange }: { rtl: boolean; area: string; onChange: (id: string) => void }) {
  const selected = TECHNICAL_SUPPORT_AREAS.findIndex(item => item.id === area);
  const current = TECHNICAL_SUPPORT_AREAS[selected];
  return <div className="grid gap-8 lg:grid-cols-[.8fr_1fr]">
    <div role="radiogroup" aria-label={rtl ? "موضع ظهور المشكلة" : "Where the problem happens"} className="grid grid-cols-2 content-start border-s border-t border-white/20">
      {TECHNICAL_SUPPORT_AREAS.map((item, index) => {
        const Icon = areaIcons[index];
        return <button role="radio" key={item.id} id={"technical-area-" + item.id} aria-checked={area === item.id} aria-controls="technical-area-guidance" tabIndex={area === item.id ? 0 : -1} onClick={() => onChange(item.id)} onKeyDown={event => {
          if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const next = event.key === "Home" ? 0 : event.key === "End" ? 11 : (index + (event.key === "ArrowDown" || event.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + 12) % 12;
          onChange(TECHNICAL_SUPPORT_AREAS[next].id);
          document.getElementById("technical-area-" + TECHNICAL_SUPPORT_AREAS[next].id)?.focus();
        }} className={`flex min-h-[92px] items-center gap-3 border-b border-e border-white/20 px-4 py-4 text-start transition ${area === item.id ? "bg-[#61d095] text-neutral-950" : "hover:bg-white/5"}`}><Icon size={20} className="shrink-0" /><span className="text-sm font-bold">{technicalText(item.name, rtl)}</span></button>;
      })}
    </div>
    <div id="technical-area-guidance" role="region" aria-labelledby={"technical-area-" + area} className="min-w-0 border-t border-white/25 pt-7">
      <AnimatePresence mode="wait"><motion.div key={area} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}>
        <p className="font-mono text-xs text-[#61d095]">{String(selected + 1).padStart(2, "0")} / {technicalText(current.name, rtl)}</p><h3 className="mt-5 text-2xl font-bold md:text-3xl">{technicalText(current.heading, rtl)}</h3><p className="mt-5 text-base leading-8 text-white/75">{technicalText(current.detail, rtl)}</p>
        <p className="mt-7 text-xs font-bold uppercase text-white/65">{rtl ? "ما يفيد التحقيق" : "Useful investigation context"}</p><ul className="mt-3 border-t border-white/20">{current.checks.map(item => <li key={item.en} className="flex items-start gap-3 border-b border-white/20 py-3 text-sm leading-7"><Check size={16} className="mt-1.5 shrink-0 text-[#61d095]" />{technicalText(item, rtl)}</li>)}</ul>
        <p className="mt-6 border-s-2 border-[#f6c453] ps-5 text-sm leading-7 text-white/70">{technicalText(current.safety, rtl)}</p><a href="#technical-request" className="mt-7 inline-flex min-h-12 items-center gap-4 border-b border-[#61d095] text-sm font-bold">{rtl ? "جهّز طلبًا لهذا المجال" : "Prepare a request for this area"}{rtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}</a>
      </motion.div></AnimatePresence>
    </div>
  </div>;
}

export function TechnicalInvestigationTimeline({ rtl }: { rtl: boolean }) {
  const [selected, setSelected] = React.useState(0);
  const current = TECHNICAL_INVESTIGATION[selected];
  const Next = rtl ? ArrowLeft : ArrowRight;
  return <div>
    <div role="tablist" aria-label={rtl ? "مسار التحقيق التقني" : "Technical troubleshooting flow"} className="flex overflow-x-auto border-y border-neutral-300">{TECHNICAL_INVESTIGATION.map((item, index) => <button key={item.id} role="tab" id={"investigation-" + item.id} aria-selected={selected === index} aria-controls="investigation-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? 5 : (index + (event.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + 6) % 6;
      setSelected(next); document.getElementById("investigation-" + TECHNICAL_INVESTIGATION[next].id)?.focus();
      document.getElementById("investigation-" + TECHNICAL_INVESTIGATION[next].id)?.scrollIntoView({ block: "nearest", inline: "nearest" });
    }} className={`min-h-[108px] min-w-[140px] flex-1 border-b-2 px-5 py-5 text-start transition ${selected === index ? "border-[#2057ff] bg-[#e8efff]" : "border-transparent hover:bg-neutral-100"}`}><span className="flex items-center justify-between gap-4 font-mono text-xs text-neutral-500"><span>0{index + 1}</span>{index < 5 && <Next size={14} aria-hidden="true" />}</span><span className="mt-4 block text-base font-bold">{technicalText(item.title, rtl)}</span></button>)}</div>
    <div role="tabpanel" id="investigation-panel" aria-labelledby={"investigation-" + current.id} tabIndex={0} className="pt-10 outline-offset-4"><AnimatePresence mode="wait"><motion.div key={current.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }} className="grid gap-8 lg:grid-cols-[.7fr_1fr]"><div><p dir="ltr" className="font-mono text-xs text-[#2057ff]">0{selected + 1} / 06</p><h3 className="mt-5 text-2xl font-bold md:text-3xl">{technicalText(current.heading, rtl)}</h3></div><div><p className="text-base leading-8 text-neutral-600">{technicalText(current.detail, rtl)}</p><div className="mt-6 flex items-start gap-3 border-t border-neutral-300 pt-5 text-sm font-bold"><Search size={18} className="shrink-0 text-[#2057ff]" />{technicalText(current.result, rtl)}</div></div></motion.div></AnimatePresence></div>
  </div>;
}
