"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ClipboardCheck, Copy, Download, Mail, MessageCircle, PackageCheck, Search, UserRoundCheck, Users, Wrench } from "lucide-react";
import { CLIENT_MODELS, CLIENT_REQUESTS, CLIENT_WORKFLOW, clientText } from "@/lib/pencil-client-partnership";

export function ClientSupportModels({ rtl, selected, onSelect }: { rtl: boolean; selected: number; onSelect: (index: number) => void }) {
  const item = CLIENT_MODELS[selected];
  return <div>
    <div role="tablist" aria-label={rtl ? "نماذج التعاون المستمر" : "Continuing support models"} className="flex overflow-x-auto border-b border-neutral-300">
      {CLIENT_MODELS.map((model, index) => <button key={model.id} role="tab" id={"client-model-" + model.id} aria-selected={selected === index} aria-controls="client-model-panel" tabIndex={selected === index ? 0 : -1} onClick={() => onSelect(index)} onKeyDown={event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === "Home" ? 0 : event.key === "End" ? CLIENT_MODELS.length - 1 : (index + (event.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + CLIENT_MODELS.length) % CLIENT_MODELS.length;
        onSelect(next); document.getElementById("client-model-" + CLIENT_MODELS[next].id)?.focus();
        document.getElementById("client-model-" + CLIENT_MODELS[next].id)?.scrollIntoView({ block: "nearest", inline: "nearest" });
      }} className={`min-h-[96px] min-w-[180px] flex-1 border-b-2 px-5 py-5 text-start transition ${selected === index ? "border-[#2057ff] bg-[#eaf0ff]" : "border-transparent hover:bg-neutral-100"}`}><span className="block font-mono text-xs text-[#2057ff]">0{index + 1}</span><span className="mt-3 block text-sm font-bold">{clientText(model.title, rtl)}</span></button>)}
    </div>
    <div role="tabpanel" id="client-model-panel" aria-labelledby={"client-model-" + item.id} tabIndex={0} className="pt-10 outline-offset-4">
      <AnimatePresence mode="wait"><motion.article key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }} className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div><p className="text-xs font-bold uppercase text-[#2057ff]">{clientText(item.rhythm, rtl)}</p><h3 className="mt-5 text-2xl font-bold md:text-3xl">{clientText(item.heading, rtl)}</h3><p className="mt-5 text-base leading-8 text-neutral-600">{clientText(item.detail, rtl)}</p><ul className="mt-6 border-t border-neutral-300">{item.includes.map(task => <li key={task.en} className="flex gap-3 border-b border-neutral-300 py-3 text-sm leading-7"><Check size={16} className="mt-1.5 shrink-0 text-[#2057ff]" />{clientText(task, rtl)}</li>)}</ul><div className="mt-6 border-s-2 border-[#2057ff] ps-5"><p className="text-xs font-bold uppercase">{rtl ? "ما نتفق عليه أولًا" : "What we agree first"}</p><p className="mt-3 text-sm leading-7 text-neutral-600">{clientText(item.agreement, rtl)}</p></div></div>
        <figure className="flex min-w-0 flex-col"><div className="relative aspect-[16/11] overflow-hidden bg-neutral-100"><Image src={item.image} alt={item.image.includes("superfeliz") ? "SuperFeliz / Pencil" : item.image.includes("cloud") ? "Pencil Cloud & Hosting" : item.image.includes("solutions") ? "Pencil Solutions" : "Pencil Studio"} fill sizes="(max-width:1024px) 100vw, 50vw" className={item.image === "/hero-section.jpg" ? "object-cover" : "object-contain"} /></div><figcaption className="mt-3 flex justify-between gap-4 text-xs text-neutral-500"><span>Pencil / {clientText(item.title, rtl)}</span><span dir="ltr" className="font-mono">0{selected + 1} / 06</span></figcaption><div className="mt-8 border-t border-neutral-300 pt-6"><p className="text-sm font-bold">{rtl ? "الاختيار يتبع الحاجة الفعلية." : "The arrangement follows the actual need."}</p><p className="mt-3 text-sm leading-7 text-neutral-600">{rtl ? "يمكن أن يجمع التعاون أكثر من نموذج. المهم أن تتضح المهام المشمولة ومسؤوليات الفريق وما يحتاج إلى تكليف مستقل." : "A relationship can combine more than one model. The important part is knowing the included tasks, team responsibilities and what needs a separate commission."}</p></div></figure>
      </motion.article></AnimatePresence>
    </div>
  </div>;
}

export function ClientRequestWorkflow({ rtl }: { rtl: boolean }) {
  const [selected, setSelected] = React.useState(0);
  const stage = CLIENT_WORKFLOW[selected];
  const icons = [Users, Search, UserRoundCheck, Wrench, PackageCheck];
  const Next = rtl ? ArrowLeft : ArrowRight;
  return <div>
    <div role="tablist" aria-label={rtl ? "مسار طلب العميل" : "Client request workflow"} className="flex overflow-x-auto border-y border-white/25">
      {CLIENT_WORKFLOW.map((item, index) => {
        const Icon = icons[index];
        return <button role="tab" key={item.id} id={"client-workflow-" + item.id} aria-controls="client-workflow-panel" aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const next = event.key === "Home" ? 0 : event.key === "End" ? 4 : (index + (event.key === (rtl ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + 5) % 5;
          setSelected(next); document.getElementById("client-workflow-" + CLIENT_WORKFLOW[next].id)?.focus();
          document.getElementById("client-workflow-" + CLIENT_WORKFLOW[next].id)?.scrollIntoView({ block: "nearest", inline: "nearest" });
        }} className={`relative min-h-[136px] min-w-[160px] flex-1 px-5 py-6 text-start transition ${selected === index ? "bg-[#61d095] text-neutral-950" : "hover:bg-white/5"}`}><div className="flex items-center justify-between gap-4"><Icon size={23} />{index < 4 && <Next size={18} className="opacity-60" />}</div><p className="mt-5 text-sm font-bold">{clientText(item.title, rtl)}</p><div className="mt-3 h-1 overflow-hidden bg-current/15"><div className={`h-full bg-current ${index <= selected ? "w-full" : "w-0"}`} /></div></button>;
      })}
    </div>
    <div role="tabpanel" id="client-workflow-panel" aria-labelledby={"client-workflow-" + stage.id} tabIndex={0} className="pt-10 outline-offset-4"><AnimatePresence mode="wait"><motion.div key={stage.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .22 }} className="grid gap-8 lg:grid-cols-[.75fr_1fr]"><div><p dir="ltr" className="font-mono text-xs text-[#61d095]">0{selected + 1} / 05</p><h3 className="mt-5 text-2xl font-bold md:text-3xl">{clientText(stage.heading, rtl)}</h3></div><div><p className="text-base leading-8 text-white/75">{clientText(stage.detail, rtl)}</p><div className="mt-6 flex items-start gap-3 border-t border-white/25 pt-5 text-sm font-bold"><ClipboardCheck size={19} className="shrink-0 text-[#61d095]" />{clientText(stage.result, rtl)}</div></div></motion.div></AnimatePresence></div>
  </div>;
}

export function ClientRequestComposer({ rtl, model }: { rtl: boolean; model: number }) {
  const tx = (en: string, ar: string) => rtl ? ar : en;
  const [kind, setKind] = React.useState("followup");
  const [values, setValues] = React.useState({ name: "", email: "", project: "", context: "", deadline: "" });
  const [review, setReview] = React.useState(false);
  const [status, setStatus] = React.useState("");
  React.useEffect(() => { setStatus(""); }, [model, rtl]);
  const focus = React.useRef<HTMLHeadingElement>(null);
  const request = CLIENT_REQUESTS.find(item => item.id === kind)!;
  const update = (key: keyof typeof values, value: string) => { setValues(previous => ({ ...previous, [key]: value })); setStatus(""); };
  const message = [
    tx("Pencil / Client support request", "Pencil / طلب دعم عميل"),
    clientText(request.title, rtl), "",
    tx("Name: ", "الاسم: ") + values.name,
    tx("Email: ", "البريد: ") + values.email,
    tx("Company / project: ", "الشركة / المشروع: ") + values.project,
    tx("Support model to discuss: ", "نموذج التعاون المراد مناقشته: ") + clientText(CLIENT_MODELS[model].title, rtl),
    ...(values.deadline ? [tx("Deadline / impact: ", "الموعد / الأثر: ") + values.deadline] : []),
    "", values.context,
  ].join("\n");
  const download = () => {
    const url = URL.createObjectURL(new Blob(["\uFEFF" + message], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = "pencil-client-request.txt"; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };
  const input = "mt-2 min-h-12 w-full rounded-none border border-neutral-300 bg-white px-4 py-3 text-base outline-none focus:border-[#2057ff] focus:ring-2 focus:ring-[#2057ff]/20";
  return <div className="border border-neutral-300 bg-white p-6 md:p-9">
    <h3 ref={focus} tabIndex={-1} className="text-2xl font-bold outline-none">{review ? tx("Your request is ready to share.", "طلبك جاهز للمشاركة.") : tx("What needs our attention?", "ما الذي يحتاج إلى متابعتنا؟")}</h3>
    {!review ? <form className="mt-6 space-y-5" onSubmit={event => { event.preventDefault(); setReview(true); setStatus(""); requestAnimationFrame(() => focus.current?.focus({ preventScroll: true })); }}>
      <label className="block text-sm font-bold" htmlFor="client-request-kind">{tx("The request", "نوع الطلب")}<select id="client-request-kind" value={kind} onChange={event => { setKind(event.target.value); setStatus(""); }} className={input}>{CLIENT_REQUESTS.map(item => <option key={item.id} value={item.id}>{clientText(item.title, rtl)}</option>)}</select></label>
      <p id="client-request-hint" className="border-s-2 border-[#2057ff] ps-4 text-sm leading-7 text-neutral-600">{clientText(request.prompt, rtl)}</p>
      <label className="block text-sm font-bold" htmlFor="client-request-project">{tx("Company or Pencil project", "الشركة أو مشروع Pencil")}<input id="client-request-project" name="project" required maxLength={150} value={values.project} onChange={event => update("project", event.target.value)} className={input} /></label>
      <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-bold" htmlFor="client-request-name">{tx("Your name", "اسمك")}<input id="client-request-name" name="name" autoComplete="name" required minLength={2} maxLength={100} value={values.name} onChange={event => update("name", event.target.value)} className={input} /></label><label className="block text-sm font-bold" htmlFor="client-request-email">{tx("Email", "البريد الإلكتروني")}<input id="client-request-email" name="email" type="email" dir="ltr" autoComplete="email" required maxLength={150} value={values.email} onChange={event => update("email", event.target.value)} className={input} /></label></div>
      <label className="block text-sm font-bold" htmlFor="client-request-context">{tx("The context and requested action", "السياق والإجراء المطلوب")}<textarea id="client-request-context" name="context" required minLength={10} maxLength={4000} rows={5} aria-describedby="client-request-hint client-request-safety" value={values.context} onChange={event => update("context", event.target.value)} className={input + " resize-y"} /></label>
      <label className="block text-sm font-bold" htmlFor="client-request-deadline">{tx("Deadline or business impact · optional", "الموعد أو الأثر على العمل · اختياري")}<input id="client-request-deadline" maxLength={200} value={values.deadline} onChange={event => update("deadline", event.target.value)} className={input} /></label>
      <p id="client-request-safety" className="text-xs leading-6 text-neutral-500">{tx("Leave out passwords, access keys and confidential customer data. Add supporting files in your email or WhatsApp conversation.", "لا تُدرج كلمات مرور أو مفاتيح وصول أو بيانات عملاء سرية. أرفق الملفات الداعمة في البريد أو محادثة واتساب.")}</p>
      <button type="submit" className="flex min-h-13 w-full items-center justify-center gap-3 bg-neutral-950 px-5 py-4 text-sm font-bold text-white hover:bg-[#2057ff]"><Mail size={18} />{tx("Prepare my request", "تجهيز طلبي")}</button>
    </form> : <div className="mt-6 space-y-5">
      <p className="text-sm leading-7 text-neutral-600">{tx("Prepared, not sent. Choose email or WhatsApp and send the message there. This form does not submit your information to a server.", "الطلب جاهز، ولم يُرسل بعد. اختر البريد أو واتساب وأرسل الرسالة من هناك. هذا النموذج لا يرسل معلوماتك إلى خادم.")}</p>
      <pre className="max-h-72 overflow-y-auto whitespace-pre-wrap break-words border-s-2 border-[#2057ff] bg-neutral-50 p-5 font-sans text-sm leading-7">{message}</pre>
      <a href={"mailto:help@dipencil.com?subject=" + encodeURIComponent("Pencil / " + clientText(request.title, rtl)) + "&body=" + encodeURIComponent(message)} className="flex min-h-13 items-center justify-center gap-3 bg-[#2057ff] px-5 py-4 text-sm font-bold text-white"><Mail size={18} />{tx("Open in email", "فتح في البريد")}</a>
      <a href={"https://wa.me/201003778273?text=" + encodeURIComponent(message)} target="_blank" rel="noopener noreferrer" className="flex min-h-13 items-center justify-center gap-3 bg-[#61d095] px-5 py-4 text-sm font-bold"><MessageCircle size={18} />{tx("Continue on WhatsApp", "متابعة عبر واتساب")}</a>
      <div className="flex flex-wrap gap-3"><button type="button" onClick={async () => { try { await navigator.clipboard.writeText(message); setStatus(tx("Copied. Paste it into your conversation.", "تم النسخ. ألصقه في محادثتك.")); } catch { setStatus(tx("Copy is unavailable. You can download the request.", "تعذر النسخ. يمكنك تنزيل الطلب.")); } }} className="flex min-h-11 items-center gap-2 border border-neutral-300 px-4 text-xs font-bold"><Copy size={16} />{tx("Copy", "نسخ")}</button><button type="button" onClick={download} className="flex min-h-11 items-center gap-2 border border-neutral-300 px-4 text-xs font-bold"><Download size={16} />{tx("Save a copy", "تنزيل نسخة")}</button><button type="button" onClick={() => { setReview(false); setStatus(""); requestAnimationFrame(() => focus.current?.focus()); }} className="min-h-11 px-4 text-xs font-bold">{tx("Edit request", "تعديل الطلب")}</button></div><p role="status" className="text-xs leading-6 text-neutral-500">{status}</p>
    </div>}
  </div>;
}
