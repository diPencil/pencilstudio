"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Download, Mail, MessageCircle, PencilLine } from "lucide-react";
import { PENCIL } from "@/components/pencil-ui";
import type { ContactIntent } from "@/lib/pencil-contact-intents";
import { cn } from "@/lib/utils";

export function PencilContactFlow({ intent, rtl }: { intent: ContactIntent; rtl: boolean }) {
  const tx = (en: string, ar: string) => rtl ? ar : en;
  const text = (value: { en: string; ar: string }) => rtl ? value.ar : value.en;
  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState({ context: "", link: "", timing: "", name: "", email: "", company: "" });
  const [copied, setCopied] = React.useState(false);
  const [copyError, setCopyError] = React.useState(false);
  const heading = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => { setStep(0); setCopied(false); }, [intent.id]);
  const update = (key: keyof typeof values, value: string) => {
    setValues(previous => ({ ...previous, [key]: value })); setCopied(false);
  };
  const advance = (next: number) => {
    setStep(next);
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  };
  const draft = [
    tx("Pencil project conversation", "بداية حوار مع Pencil"),
    text(intent.title), "",
    tx("Name: ", "الاسم: ") + values.name,
    tx("Email: ", "البريد: ") + values.email,
    ...(values.company ? [tx("Company: ", "الشركة: ") + values.company] : []),
    ...(values.link ? [tx("Reference: ", "المرجع: ") + values.link] : []),
    ...(values.timing ? [tx("Timing: ", "التوقيت: ") + values.timing] : []),
    "", text(intent.question), values.context,
  ].join("\n");
  const subject = "Pencil / " + text(intent.title);
  const download = () => {
    const url = URL.createObjectURL(new Blob(["\uFEFF" + draft], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "pencil-project-opening.txt"; document.body.appendChild(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };
  const input = "min-h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white";
  const Next = rtl ? ArrowLeft : ArrowRight;
  return (
    <div className={cn(PENCIL.card, "p-6 md:p-10")}>
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">{tx("Your project opening", "بداية مشروعك")}</p>
        <span className="rounded-full bg-neutral-100 px-3 py-1 font-mono text-xs text-neutral-600">0{step + 1} / 03</span>
      </div>
      <div className="mb-7 flex gap-1.5" aria-hidden="true">{[0, 1, 2].map(index => <span key={index} className={cn("h-1.5 flex-1 rounded-full", index <= step ? "bg-neutral-900" : "bg-neutral-200")} />)}</div>
      <h3 ref={heading} tabIndex={-1} className="text-2xl font-bold tracking-tight outline-none md:text-3xl">{step === 0 ? text(intent.question) : step === 1 ? tx("Who are we speaking with?", "مع من نتحدث؟") : tx("Ready for a real conversation.", "جاهز لبداية حوار حقيقي.")}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600">{step === 0 ? text(intent.prompt) : step === 1 ? tx("Just enough to introduce you. Your company and timing are optional.", "معلومات تكفي للتعريف بك. اسم الشركة والتوقيت اختياريان.") : tx("Your message is prepared, not sent. Choose email or WhatsApp below and send it there. Nothing is submitted to a server by this form.", "رسالتك جاهزة، ولم تُرسل بعد. اختر البريد أو واتساب أدناه وأرسلها من هناك. هذا النموذج لا يرسل بياناتك إلى خادم.")}</p>
      {step < 2 ? <form key={step} onSubmit={event => { event.preventDefault(); advance(step + 1); }} className="mt-7 space-y-5">
        {step === 0 ? <>
          <label className="block text-sm font-bold" htmlFor="pencil-context">{tx("Tell us the situation", "صف لنا الموقف")}<textarea id="pencil-context" name="context" required minLength={10} maxLength={4000} rows={6} value={values.context} onChange={event => update("context", event.target.value)} className={input + " mt-2 resize-y"} aria-describedby="pencil-context-note" /></label>
          <p id="pencil-context-note" className="text-xs leading-6 text-neutral-500">{tx("A rough description is welcome. Please leave out passwords, confidential records and private customer data.", "الوصف الأولي يكفي. لا تُدرج كلمات مرور أو سجلات سرية أو بيانات خاصة بالعملاء.")}</p>
          <label className="block text-sm font-bold" htmlFor="pencil-reference">{intent.id === "existing" ? tx("Project name or public link · optional", "اسم المشروع أو رابط عام · اختياري") : tx("Public link or reference · optional", "رابط عام أو مرجع · اختياري")}<input id="pencil-reference" maxLength={300} value={values.link} onChange={event => update("link", event.target.value)} className={input + " mt-2"} /></label>
        </> : <>
          <label className="block text-sm font-bold" htmlFor="pencil-name">{tx("Your name", "اسمك")}<input id="pencil-name" name="name" autoComplete="name" required minLength={2} maxLength={100} value={values.name} onChange={event => update("name", event.target.value)} className={input + " mt-2"} /></label>
          <label className="block text-sm font-bold" htmlFor="pencil-email">{tx("Email address", "البريد الإلكتروني")}<input id="pencil-email" name="email" type="email" dir="ltr" autoComplete="email" required maxLength={150} value={values.email} onChange={event => update("email", event.target.value)} className={input + " mt-2"} /></label>
          <label className="block text-sm font-bold" htmlFor="pencil-company">{tx("Company · optional", "الشركة · اختياري")}<input id="pencil-company" autoComplete="organization" maxLength={150} value={values.company} onChange={event => update("company", event.target.value)} className={input + " mt-2"} /></label>
          <label className="block text-sm font-bold" htmlFor="pencil-timing">{tx("When are you hoping to start? · optional", "متى تأمل أن تبدأ؟ · اختياري")}<select id="pencil-timing" value={values.timing} onChange={event => update("timing", event.target.value)} className={input + " mt-2"}><option value="">{tx("Still exploring", "ما زلت أستكشف")}</option>{[tx("As soon as we define the scope", "بعد تحديد النطاق"), tx("Within the next month", "خلال الشهر المقبل"), tx("There is a fixed launch date, mentioned in my context", "هناك موعد إطلاق محدد، ذكرته في الوصف"), tx("Planning ahead", "أخطط لمرحلة لاحقة")].map(item => <option key={item}>{item}</option>)}</select></label>
        </>}
        <div className="flex items-center gap-3 pt-3">{step > 0 && <button type="button" onClick={() => advance(step - 1)} className="min-h-12 rounded-full border border-neutral-300 px-5 text-sm font-bold transition hover:border-neutral-900">{tx("Back", "السابق")}</button>}<button type="submit" className="flex min-h-12 flex-1 items-center justify-center gap-3 rounded-full bg-neutral-900 px-5 text-sm font-bold text-white transition hover:bg-neutral-700">{step === 0 ? tx("Introduce yourself", "عرّف بنفسك") : tx("Review my message", "مراجعة رسالتي")}<Next size={18} /></button></div>
      </form> : <div className="mt-7 space-y-4">
        <div className="max-h-64 overflow-y-auto rounded-2xl border-s-4 border-neutral-900 bg-neutral-50 p-5"><pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7">{draft}</pre></div>
        <a href={`mailto:help@dipencil.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`} className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-neutral-900 px-5 text-sm font-bold text-white transition hover:bg-neutral-700"><Mail size={18} />{tx("Open in email", "فتح في البريد")}</a>
        <a href={`https://wa.me/201003778273?text=${encodeURIComponent(draft)}`} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-3 rounded-full border border-neutral-300 px-5 text-sm font-bold transition hover:border-neutral-900"><MessageCircle size={18} />{tx("Continue on WhatsApp", "متابعة عبر واتساب")}</a>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={async () => { try { await navigator.clipboard.writeText(draft); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }} className="flex min-h-11 items-center gap-2 rounded-full border border-neutral-300 px-4 text-xs font-bold transition hover:border-neutral-900">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? tx("Copied", "تم النسخ") : tx("Copy message", "نسخ الرسالة")}</button>
          <button type="button" onClick={download} className="flex min-h-11 items-center gap-2 rounded-full border border-neutral-300 px-4 text-xs font-bold transition hover:border-neutral-900"><Download size={16} />{tx("Save a copy", "تنزيل نسخة")}</button>
          <button type="button" onClick={() => advance(0)} className="flex min-h-11 items-center gap-2 rounded-full px-3 text-xs font-bold transition hover:bg-neutral-100"><PencilLine size={16} />{tx("Edit", "تعديل")}</button>
        </div>
        <p role="status" className="text-xs leading-6 text-neutral-500">{copyError ? tx("Copy was unavailable. Download a copy instead.", "تعذر النسخ. يمكنك تنزيل نسخة بدلًا منه.") : copied ? tx("Message copied. Paste it into your preferred conversation.", "نُسخت الرسالة. ألصقها في وسيلة التواصل التي تفضلها.") : tx("Have files? Attach them in your email or WhatsApp conversation after reviewing the message.", "لديك ملفات؟ أرفقها في البريد أو محادثة واتساب بعد مراجعة الرسالة.")}</p>
      </div>}
    </div>
  );
}
