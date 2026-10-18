"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Copy, Download, Mail, MessageCircle, Paperclip, PencilLine, X } from "lucide-react";
import { TECHNICAL_SUPPORT_AREAS, technicalText } from "@/lib/pencil-technical-care";

export function TechnicalRequest({ rtl, area, onAreaChange }: { rtl: boolean; area: string; onAreaChange: (id: string) => void }) {
  const tx = (en: string, ar: string) => rtl ? ar : en;
  const current = TECHNICAL_SUPPORT_AREAS.find(item => item.id === area)!;
  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState({ system: "", expected: "", actual: "", impact: "", since: "", device: "", reproduce: "", changed: "", error: "", evidence: "", name: "", email: "" });
  const [specific, setSpecific] = React.useState<Record<string, string>>({});
  const [files, setFiles] = React.useState<File[]>([]);
  const [fileError, setFileError] = React.useState("");
  const [status, setStatus] = React.useState("");
  const heading = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => { setStatus(""); }, [rtl, area]);
  const update = (key: keyof typeof values, value: string) => { setValues(previous => ({ ...previous, [key]: value })); setStatus(""); };
  const go = (next: number) => { setStep(next); setStatus(""); requestAnimationFrame(() => heading.current?.focus({ preventScroll: true })); };
  const draft = [
    tx("Pencil / Technical support", "Pencil / الدعم التقني"), technicalText(current.name, rtl), "",
    tx("Project / URL: ", "المشروع / الرابط: ") + values.system,
    technicalText(current.field, rtl) + ": " + (specific[area] || tx("Not specified", "لم يُحدد")),
    tx("Expected: ", "المتوقع: ") + values.expected,
    tx("Actual: ", "الفعلي: ") + values.actual,
    ...(values.impact ? [tx("Impact: ", "الأثر: ") + values.impact] : []),
    ...(values.since ? [tx("Started: ", "بدأت الحالة: ") + values.since] : []),
    ...(values.device ? [tx("Browser / device: ", "المتصفح / الجهاز: ") + values.device] : []),
    ...(values.reproduce ? ["", tx("Steps to reproduce:", "خطوات إعادة الحدوث:"), values.reproduce] : []),
    ...(values.changed ? ["", tx("Changes before the issue:", "تغييرات سبقت الحالة:"), values.changed] : []),
    ...(values.error ? ["", tx("Redacted error:", "رسالة خطأ منقحة:"), values.error] : []),
    ...(values.evidence ? ["", tx("Evidence reference:", "مرجع الدليل:"), values.evidence] : []),
    ...(files.length ? ["", tx("Files to attach separately:", "ملفات تُرفق بصورة مستقلة:"), ...files.map(file => file.name)] : []),
    "", tx("Name: ", "الاسم: ") + values.name, tx("Email: ", "البريد: ") + values.email,
  ].join("\n");
  const download = () => {
    const url = URL.createObjectURL(new Blob(["\uFEFF" + draft], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = "pencil-technical-request.txt";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 10000);
  };
  const input = "mt-2 min-h-12 w-full rounded-none border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-950 outline-none focus:border-[#2057ff] focus:ring-2 focus:ring-[#2057ff]/20";
  const Next = rtl ? ArrowLeft : ArrowRight;
  return <div className="bg-white p-6 text-neutral-950 md:p-9">
    <div className="mb-7 flex items-center justify-between gap-4 border-b border-neutral-300 pb-5"><p className="text-xs font-bold uppercase">{tx("Technical request", "طلب مساعدة تقنية")}</p><span dir="ltr" className="font-mono text-xs text-neutral-500">0{step + 1} / 03</span></div>
    <div className="mb-7 flex gap-2" aria-hidden="true">{[0, 1, 2].map(index => <span key={index} className={`h-1 flex-1 ${index <= step ? "bg-[#2057ff]" : "bg-neutral-200"}`} />)}</div>
    <h3 ref={heading} tabIndex={-1} className="text-2xl font-bold outline-none">{step === 0 ? tx("Describe the behaviour.", "صف السلوك الذي تلاحظه.") : step === 1 ? tx("Add what helps reproduce it.", "أضف ما يساعد على إعادة الحالة.") : tx("Review before you share.", "راجع الطلب قبل مشاركته.")}</h3>
    <p className="mt-4 text-sm leading-7 text-neutral-600">{step === 0 ? tx("A technical diagnosis is not required. The selected area is a starting point, not a confirmed cause.", "لا يلزم تشخيص تقني. المجال المختار نقطة بداية، وليس سببًا مؤكدًا للمشكلة.") : step === 1 ? tx("Add what you know. Missing details can be clarified; never include credentials or confidential records.", "أضف ما تعرفه. يمكن توضيح التفاصيل الناقصة لاحقًا؛ ولا تُدرج بيانات دخول أو سجلات سرية.") : tx("This is a prepared message, not a submitted ticket. Open it in email or WhatsApp and send it there. No information or files are uploaded by this form.", "هذه رسالة مجهزة، وليست تذكرة أُرسلت. افتحها في البريد أو واتساب وأرسلها من هناك. لا يرفع هذا النموذج معلومات أو ملفات.")}</p>
    {step < 2 ? <form key={step} onSubmit={event => { event.preventDefault(); go(step + 1); }} className="mt-7 space-y-5">
      {step === 0 ? <>
        <label htmlFor="technical-request-area" className="block text-sm font-bold">{tx("Where is the problem happening?", "أين تظهر المشكلة؟")}<select id="technical-request-area" value={area} onChange={event => onAreaChange(event.target.value)} className={input}>{TECHNICAL_SUPPORT_AREAS.map(item => <option key={item.id} value={item.id}>{technicalText(item.name, rtl)}</option>)}</select></label>
        <label htmlFor="technical-system" className="block text-sm font-bold">{tx("Affected URL or system", "الرابط أو النظام المتأثر")}<input id="technical-system" name="system" required maxLength={300} value={values.system} onChange={event => update("system", event.target.value)} className={input} /></label>
        <label htmlFor="technical-specific" className="block text-sm font-bold">{technicalText(current.field, rtl)}<input id="technical-specific" aria-describedby="technical-specific-hint" maxLength={300} value={specific[area] || ""} onChange={event => { setSpecific(previous => ({ ...previous, [area]: event.target.value })); setStatus(""); }} className={input} /></label>
        <p id="technical-specific-hint" className="text-xs leading-6 text-neutral-500">{technicalText(current.hint, rtl)}</p>
        <label htmlFor="technical-expected" className="block text-sm font-bold">{tx("What should happen?", "ما الذي ينبغي أن يحدث؟")}<textarea id="technical-expected" name="expected" required minLength={3} maxLength={1200} rows={3} value={values.expected} onChange={event => update("expected", event.target.value)} className={input + " resize-y"} /></label>
        <label htmlFor="technical-actual" className="block text-sm font-bold">{tx("What actually happens?", "ما الذي يحدث فعلًا؟")}<textarea id="technical-actual" name="actual" required minLength={3} maxLength={1200} rows={3} value={values.actual} onChange={event => update("actual", event.target.value)} className={input + " resize-y"} /></label>
        <label htmlFor="technical-impact" className="block text-sm font-bold">{tx("Current impact · optional", "الأثر الحالي · اختياري")}<select id="technical-impact" value={values.impact} onChange={event => update("impact", event.target.value)} className={input}><option value="">{tx("Not yet clear", "لم يتضح بعد")}</option>{[tx("Work is blocked", "العمل متوقف"), tx("One function or user group is affected", "وظيفة أو فئة مستخدمين متأثرة"), tx("Incorrect behaviour without an outage", "سلوك غير صحيح دون توقف"), tx("A question or planned change", "سؤال أو تغيير مخطط")].map(item => <option key={item}>{item}</option>)}</select></label>
        <p className="border-s-2 border-[#f6c453] ps-4 text-xs leading-6 text-neutral-600">{technicalText(current.safety, rtl)}</p>
      </> : <>
        <div className="grid gap-5 sm:grid-cols-2"><label htmlFor="technical-since" className="block text-sm font-bold">{tx("When did it start? · optional", "متى بدأت الحالة؟ · اختياري")}<input id="technical-since" maxLength={200} value={values.since} onChange={event => update("since", event.target.value)} className={input} /></label><label htmlFor="technical-device" className="block text-sm font-bold">{tx("Browser / device · optional", "المتصفح / الجهاز · اختياري")}<input id="technical-device" maxLength={200} value={values.device} onChange={event => update("device", event.target.value)} className={input} /></label></div>
        <label htmlFor="technical-reproduce" className="block text-sm font-bold">{tx("Steps to reproduce · optional", "خطوات إعادة الحدوث · اختياري")}<textarea id="technical-reproduce" maxLength={1800} rows={4} value={values.reproduce} onChange={event => update("reproduce", event.target.value)} className={input + " resize-y"} /></label>
        <label htmlFor="technical-changed" className="block text-sm font-bold">{tx("What changed before it appeared? · optional", "ما الذي تغير قبل ظهورها؟ · اختياري")}<input id="technical-changed" maxLength={500} value={values.changed} onChange={event => update("changed", event.target.value)} className={input} /></label>
        <label htmlFor="technical-error" className="block text-sm font-bold">{tx("Redacted error message · optional", "رسالة خطأ منقحة · اختياري")}<textarea id="technical-error" dir="auto" maxLength={1200} rows={3} value={values.error} onChange={event => update("error", event.target.value)} className={input + " resize-y"} /></label>
        <label htmlFor="technical-evidence" className="block text-sm font-bold">{tx("Screenshot or video reference · optional", "مرجع لقطة شاشة أو فيديو · اختياري")}<input id="technical-evidence" maxLength={500} value={values.evidence} onChange={event => update("evidence", event.target.value)} className={input} /></label>
        <label htmlFor="technical-files" className="block text-sm font-bold"><span className="flex items-center gap-2"><Paperclip size={16} />{tx("Files to send with your message · optional", "ملفات لإرفاقها برسالتك · اختياري")}</span><input id="technical-files" type="file" accept="image/png,image/jpeg,image/webp,video/mp4,video/webm,text/plain,application/pdf" multiple aria-describedby="technical-files-note" onChange={event => {
          const chosen = Array.from(event.target.files || []);
          if (chosen.length > 5) { setFileError(tx("Choose up to five files, or send additional files directly in the conversation.", "اختر حتى خمسة ملفات، أو أرسل الملفات الإضافية مباشرة في المحادثة.")); event.target.value = ""; return; }
          setFiles(chosen); setFileError(""); event.target.value = "";
        }} className={input + " text-sm file:me-3 file:border-0 file:bg-neutral-100 file:px-3 file:py-2 file:text-sm"} /></label>
        <p id="technical-files-note" className="text-xs leading-6 text-neutral-500">{tx("Only filenames are added to the draft. Files remain on your device; attach the originals yourself when sending via email or WhatsApp.", "تُضاف أسماء الملفات فقط إلى المسودة. تبقى الملفات على جهازك؛ أرفق النسخ الأصلية بنفسك عند الإرسال عبر البريد أو واتساب.")}</p>
        {fileError && <p role="alert" className="text-sm text-red-700">{fileError}</p>}
        {!!files.length && <ul className="space-y-2">{files.map((file, index) => <li key={file.name + index} className="flex min-w-0 items-center justify-between gap-3 border-b border-neutral-200 text-xs"><span className="min-w-0 break-all">{file.name}</span><button type="button" aria-label={tx("Remove file ", "إزالة الملف ") + file.name} title={tx("Remove file", "إزالة الملف")} onClick={() => setFiles(previous => previous.filter((_, i) => i !== index))} className="flex h-11 w-11 shrink-0 items-center justify-center"><X size={16} /></button></li>)}</ul>}
        <div className="grid gap-5 sm:grid-cols-2"><label htmlFor="technical-name" className="block text-sm font-bold">{tx("Your name", "اسمك")}<input id="technical-name" autoComplete="name" required minLength={2} maxLength={100} value={values.name} onChange={event => update("name", event.target.value)} className={input} /></label><label htmlFor="technical-email" className="block text-sm font-bold">{tx("Email", "البريد الإلكتروني")}<input id="technical-email" type="email" dir="ltr" autoComplete="email" required maxLength={150} value={values.email} onChange={event => update("email", event.target.value)} className={input} /></label></div>
      </>}
      <div className="flex gap-3 pt-3">{step > 0 && <button type="button" onClick={() => go(step - 1)} className="min-h-12 border border-neutral-300 px-5 text-sm font-bold">{tx("Back", "السابق")}</button>}<button type="submit" className="flex min-h-12 flex-1 items-center justify-center gap-3 bg-neutral-950 px-5 text-sm font-bold text-white hover:bg-[#2057ff]">{step === 0 ? tx("Add investigation details", "إضافة تفاصيل التحقيق") : tx("Review the request", "مراجعة الطلب")}<Next size={18} /></button></div>
    </form> : <div className="mt-7 space-y-5">
      <pre className="max-h-80 overflow-y-auto whitespace-pre-wrap break-words border-s-2 border-[#2057ff] bg-neutral-50 p-5 font-sans text-sm leading-7">{draft}</pre>
      {!!files.length && <p className="border-s-2 border-[#f6c453] ps-4 text-sm leading-7 text-neutral-600">{tx("Remember to attach the selected files in your email or WhatsApp conversation. The draft includes their names only.", "تذكر إرفاق الملفات المختارة في البريد أو محادثة واتساب. تتضمن المسودة أسماءها فقط.")}</p>}
      <a href={"mailto:help@dipencil.com?subject=" + encodeURIComponent("Pencil technical / " + technicalText(current.name, rtl)) + "&body=" + encodeURIComponent(draft)} className="flex min-h-13 items-center justify-center gap-3 bg-[#2057ff] px-5 py-4 text-sm font-bold text-white"><Mail size={18} />{tx("Open in email", "فتح في البريد")}</a>
      <a href={"https://wa.me/201003778273?text=" + encodeURIComponent(draft)} target="_blank" rel="noopener noreferrer" className="flex min-h-13 items-center justify-center gap-3 bg-[#61d095] px-5 py-4 text-sm font-bold"><MessageCircle size={18} />{tx("Continue on WhatsApp", "متابعة عبر واتساب")}</a>
      <div className="flex flex-wrap gap-3"><button type="button" onClick={async () => { try { await navigator.clipboard.writeText(draft); setStatus(tx("Copied. Paste into your conversation.", "تم النسخ. ألصقه في محادثتك.")); } catch { setStatus(tx("Copy is unavailable. Save a copy instead.", "تعذر النسخ. يمكنك تنزيل نسخة بدلًا منه.")); } }} className="flex min-h-11 items-center gap-2 border border-neutral-300 px-4 text-xs font-bold"><Copy size={16} />{tx("Copy", "نسخ")}</button><button type="button" onClick={download} className="flex min-h-11 items-center gap-2 border border-neutral-300 px-4 text-xs font-bold"><Download size={16} />{tx("Save a copy", "تنزيل نسخة")}</button><button type="button" onClick={() => go(0)} className="flex min-h-11 items-center gap-2 px-4 text-xs font-bold"><PencilLine size={16} />{tx("Edit", "تعديل")}</button></div>
      <p role="status" className="text-xs leading-6 text-neutral-500">{status}</p>
    </div>}
  </div>;
}
