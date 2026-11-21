"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Check, Copy, Download, Mail, PencilLine } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import type { ContactIntent } from "@/lib/help/contact/pencil-contact-intents";
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
    tx("Pencil project conversation", "بداية حوار مع بينسل"),
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
  const input =
    "min-h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50/70 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#2057FF] focus:bg-white focus:ring-2 focus:ring-[#2057FF]/15";
  const Next = rtl ? ArrowLeft : ArrowRight;
  const Back = rtl ? ArrowRight : ArrowLeft;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-xl shadow-blue-950/5">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-neutral-100 pb-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#2057FF]" />
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
            {tx("Your project opening", "بداية مشروعك")}
          </p>
        </div>
        <span className="rounded-full bg-[#EEF3FF] px-3 py-1 font-mono text-xs font-bold text-[#2057FF]">
          0{step + 1} / 03
        </span>
      </div>

      <div className="mb-7 flex gap-2" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-300",
              index <= step ? "bg-[#2057FF]" : "bg-neutral-200"
            )}
          />
        ))}
      </div>

      <h3
        ref={heading}
        tabIndex={-1}
        className="text-2xl font-bold tracking-tight text-neutral-950 outline-none md:text-3xl leading-snug"
      >
        {step === 0
          ? text(intent.question)
          : step === 1
          ? tx("Who are we speaking with?", "مع من نتحدث؟")
          : tx("Ready for a real conversation.", "جاهز لبداية حوار حقيقي.")}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        {step === 0
          ? text(intent.prompt)
          : step === 1
          ? tx(
              "Just enough to introduce you. Your company and timing are optional.",
              "معلومات تكفي للتعريف بك. اسم الشركة والتوقيت اختياريان."
            )
          : tx(
              "Your message is prepared, not sent. Choose email or WhatsApp below and send it there. Nothing is submitted to a server by this form.",
              "رسالتك جاهزة، ولم تُرسل بعد. اختر البريد أو واتساب أدناه وأرسلها من هناك. هذا النموذج لا يرسل بياناتك إلى خادم."
            )}
      </p>

      {step < 2 ? (
        <form
          key={step}
          onSubmit={(event) => {
            event.preventDefault();
            advance(step + 1);
          }}
          className="mt-7 space-y-5"
        >
          {step === 0 ? (
            <>
              <label className="block text-sm font-bold text-neutral-900" htmlFor="pencil-context">
                {tx("Tell us the situation", "صف لنا الموقف")}
                <textarea
                  id="pencil-context"
                  name="context"
                  required
                  minLength={10}
                  maxLength={4000}
                  rows={6}
                  value={values.context}
                  onChange={(event) => update("context", event.target.value)}
                  className={input + " mt-2 resize-y"}
                  aria-describedby="pencil-context-note"
                  placeholder={
                    rtl
                      ? "اشرح الفكرة، ما هو موجود اليوم، وما الذي تريد أن يتغير أو يتحقق..."
                      : "Describe the situation, what exists today, and what should change or become possible..."
                  }
                />
              </label>
              <p
                id="pencil-context-note"
                className="text-xs leading-6 text-neutral-400 font-medium"
              >
                {tx(
                  "A rough description is welcome. Please leave out passwords, confidential records and private customer data.",
                  "الوصف الأولي يكفي. لا تُدرج كلمات مرور أو سجلات سرية أو بيانات خاصة بالعملاء."
                )}
              </p>
              <label className="block text-sm font-bold text-neutral-900" htmlFor="pencil-reference">
                {intent.id === "existing"
                  ? tx("Project name or public link · optional", "اسم المشروع أو رابط عام · اختياري")
                  : tx("Public link or reference · optional", "رابط عام أو مرجع · اختياري")}
                <input
                  id="pencil-reference"
                  maxLength={300}
                  value={values.link}
                  onChange={(event) => update("link", event.target.value)}
                  className={input + " mt-2"}
                  placeholder={
                    intent.id === "existing"
                      ? rtl ? "مثال: موقع الشركة الحالي أو رابط المشروع" : "e.g. current company site or staging URL"
                      : "https://example.com"
                  }
                />
              </label>
            </>
          ) : (
            <>
              <label className="block text-sm font-bold text-neutral-900" htmlFor="pencil-name">
                {tx("Your name", "اسمك")}
                <input
                  id="pencil-name"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={values.name}
                  onChange={(event) => update("name", event.target.value)}
                  className={input + " mt-2"}
                  placeholder={rtl ? "الاسم الكريم" : "Your full name"}
                />
              </label>
              <label className="block text-sm font-bold text-neutral-900" htmlFor="pencil-email">
                {tx("Email address", "البريد الإلكتروني")}
                <input
                  id="pencil-email"
                  name="email"
                  type="email"
                  dir="ltr"
                  autoComplete="email"
                  required
                  maxLength={150}
                  value={values.email}
                  onChange={(event) => update("email", event.target.value)}
                  className={input + " mt-2 text-start"}
                  placeholder="name@company.com"
                />
              </label>
              <label className="block text-sm font-bold text-neutral-900" htmlFor="pencil-company">
                {tx("Company · optional", "الشركة · اختياري")}
                <input
                  id="pencil-company"
                  autoComplete="organization"
                  maxLength={150}
                  value={values.company}
                  onChange={(event) => update("company", event.target.value)}
                  className={input + " mt-2"}
                  placeholder={rtl ? "اسم النشاط أو المؤسسة" : "Company or brand name"}
                />
              </label>
              <label className="block text-sm font-bold text-neutral-900" htmlFor="pencil-timing">
                {tx("When are you hoping to start? · optional", "متى تأمل أن تبدأ؟ · اختياري")}
                <select
                  id="pencil-timing"
                  value={values.timing}
                  onChange={(event) => update("timing", event.target.value)}
                  className={input + " mt-2 cursor-pointer"}
                >
                  <option value="">{tx("Still exploring", "ما زلت أستكشف")}</option>
                  {[
                    tx("As soon as we define the scope", "بعد تحديد النطاق"),
                    tx("Within the next month", "خلال الشهر المقبل"),
                    tx("There is a fixed launch date, mentioned in my context", "هناك موعد إطلاق محدد، ذكرته في الوصف"),
                    tx("Planning ahead", "أخطط لمرحلة لاحقة"),
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </>
          )}

          <div className="flex items-center gap-3 pt-3">
            {step > 0 && (
              <button
                type="button"
                onClick={() => advance(step - 1)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 text-sm font-bold text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-950 cursor-pointer"
              >
                <Back size={16} />
                <span>{tx("Back", "السابق")}</span>
              </button>
            )}
            <button
              type="submit"
              className="flex min-h-12 flex-1 items-center justify-center gap-2.5 rounded-full bg-neutral-950 px-6 text-sm font-bold text-white transition hover:bg-[#2057FF] hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
            >
              <span>{step === 0 ? tx("Introduce yourself", "عرّف بنفسك") : tx("Review my message", "مراجعة رسالتي")}</span>
              <Next size={16} />
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-7 space-y-4">
          <div className="max-h-72 overflow-y-auto rounded-2xl border-s-4 border-[#2057FF] bg-neutral-50/90 p-5 shadow-inner">
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7 text-neutral-800">
              {draft}
            </pre>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={`mailto:help@dipencil.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}
              className="flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-[#2057FF] px-5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#1945cc] cursor-pointer"
            >
              <Mail size={18} />
              <span>{tx("Open in email", "فتح في البريد")}</span>
            </a>
            <a
              href={`https://wa.me/201003778273?text=${encodeURIComponent(draft)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-[#20ba59] cursor-pointer"
            >
              <WhatsAppIcon size={18} className="shrink-0" />
              <span>{tx("Continue on WhatsApp", "متابعة عبر واتساب")}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(draft);
                  setCopied(true);
                  setCopyError(false);
                } catch {
                  setCopyError(true);
                }
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-neutral-700 transition hover:border-[#2057FF] hover:text-[#2057FF] cursor-pointer"
            >
              {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
              <span>{copied ? tx("Copied to clipboard", "تم النسخ بنجاح") : tx("Copy message", "نسخ الرسالة")}</span>
            </button>
            <button
              type="button"
              onClick={download}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-neutral-700 transition hover:border-[#2057FF] hover:text-[#2057FF] cursor-pointer"
            >
              <Download size={15} />
              <span>{tx("Save a copy (.txt)", "تنزيل نسخة نصية")}</span>
            </button>
            <button
              type="button"
              onClick={() => advance(0)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-neutral-100 px-4 text-xs font-bold text-neutral-700 transition hover:bg-neutral-200 cursor-pointer"
            >
              <PencilLine size={15} />
              <span>{tx("Edit draft", "تعديل المسودة")}</span>
            </button>
          </div>

          <div className="rounded-xl border border-neutral-200/80 bg-neutral-50 px-4 py-3 text-xs leading-relaxed text-neutral-500">
            {copyError ? (
              <p className="text-amber-700 font-semibold">
                {tx("Copy was unavailable in this browser. Use the Download option instead.", "تعذر النسخ المباشر. يمكنك تنزيل نسخة نصية بدلًا منه.")}
              </p>
            ) : copied ? (
              <p className="text-emerald-700 font-semibold">
                {tx("Message copied! Paste it into your preferred conversation.", "نُسخت الرسالة بنجاح. يمكنك لصقها في وسيلة التواصل التي تفضلها.")}
              </p>
            ) : (
              <p>
                {tx(
                  "Have files or documents? You can attach them directly in your email client or WhatsApp chat after clicking.",
                  "لديك ملفات أو مستندات؟ يمكنك إرفاقها مباشرة داخل تطبيق البريد أو محادثة واتساب بعد الفتح."
                )}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
