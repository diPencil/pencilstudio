"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Copy,
  Download,
  Mail,
  Paperclip,
  PencilLine,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  TECHNICAL_SUPPORT_AREAS,
  technicalText,
} from "@/lib/support/technical/pencil-technical-care";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { cn } from "@/lib/utils";

// ─── Four Technical Domain Clusters for Quick Selection ──────────────────────
export const TECHNICAL_AREA_CLUSTERS = [
  {
    id: "client-layer",
    title: { en: "Application & Interface", ar: "الواجهات والتطبيقات" },
    areaIds: ["frontend", "mobile", "admin", "performance"] as const,
  },
  {
    id: "backend-data",
    title: { en: "Backend & Data", ar: "الخدمات الخلفية والبيانات" },
    areaIds: ["backend", "database", "access"] as const,
  },
  {
    id: "infra-network",
    title: { en: "Infrastructure & Network", ar: "البنية التحتية والشبكات" },
    areaIds: ["hosting", "dns", "integration"] as const,
  },
  {
    id: "assets-general",
    title: { en: "Assets & General Triage", ar: "الأصول والفرز العام" },
    areaIds: ["creative", "other"] as const,
  },
] as const;

type PreferredChannel = "email" | "whatsapp" | "phone";

export function TechnicalRequest({
  rtl,
  area,
  onAreaChange,
}: {
  rtl: boolean;
  area: string;
  onAreaChange: (id: string) => void;
}) {
  const tx = (en: string, ar: string) => (rtl ? ar : en);
  const Next = rtl ? ArrowLeft : ArrowRight;
  const Back = rtl ? ArrowRight : ArrowLeft;

  const currentArea =
    TECHNICAL_SUPPORT_AREAS.find((item) => item.id === area) ||
    TECHNICAL_SUPPORT_AREAS[0];

  // ─── Step State (0: Behavior, 1: Diagnostics, 2: Review) ───────────────────
  const [step, setStep] = React.useState(0);
  const [selectorOpen, setSelectorOpen] = React.useState(false);

  // ─── Form Values ────────────────────────────────────────────────────────────
  const [values, setValues] = React.useState({
    system: "",
    expected: "",
    actual: "",
    impact: "",
    since: "",
    device: "",
    reproduce: "",
    changed: "",
    error: "",
    evidence: "",
    name: "",
    email: "",
  });

  const [preferredChannel, setPreferredChannel] =
    React.useState<PreferredChannel>("email");

  // Specific domain questions preserved per domain ID
  const [specific, setSpecific] = React.useState<Record<string, string>>({});

  // Files metadata (Max 5 files, only names are drafted)
  const [files, setFiles] = React.useState<File[]>([]);
  const [fileError, setFileError] = React.useState("");
  const [status, setStatus] = React.useState("");

  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const domainSelectorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        domainSelectorRef.current &&
        !domainSelectorRef.current.contains(event.target as Node)
      ) {
        setSelectorOpen(false);
      }
    }
    if (selectorOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectorOpen]);

  React.useEffect(() => {
    setStatus("");
  }, [rtl, area]);

  const update = (key: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setStatus("");
  };

  const go = (next: number) => {
    setStep(next);
    setStatus("");
    requestAnimationFrame(() => {
      headingRef.current?.focus({ preventScroll: true });
    });
  };

  // Channel labels
  const channelLabels: Record<PreferredChannel, { en: string; ar: string }> = {
    email: {
      en: "Email (help@dipencil.com)",
      ar: "البريد الإلكتروني (help@dipencil.com)",
    },
    whatsapp: {
      en: "WhatsApp Desk (+20 100 377 8273)",
      ar: "مكتب واتساب (+20 100 377 8273)",
    },
    phone: {
      en: "Phone Preference (Triage follow-up)",
      ar: "تفضيل مكالمة (متابعة الفرز الأولي)",
    },
  };

  // Impact presets
  const impactOptions = [
    { en: "Work is blocked", ar: "العمل متوقف" },
    { en: "One function or user group is affected", ar: "وظيفة أو فئة مستخدمين متأثرة" },
    { en: "Incorrect behaviour without an outage", ar: "سلوك غير صحيح دون توقف" },
    { en: "A question or planned change", ar: "سؤال أو تغيير مخطط" },
  ];

  // ─── Plaintext Structured Draft Generator ──────────────────────────────────
  const draft = [
    tx("PENCIL STUDIO / TECHNICAL SUPPORT BRIEF", "بينسل ستوديو / موجز الدعم التقني"),
    "==================================================",
    `${tx("Technical Domain: ", "المجال التقني: ")}${technicalText(currentArea.name, rtl)} [${currentArea.id}]`,
    `${tx("Affected URL / System: ", "الرابط أو النظام المتأثر: ")}${values.system.trim()}`,
    `${technicalText(currentArea.field, rtl)}: ${
      specific[area]?.trim() || tx("Not specified", "لم يُحدد")
    }`,
    `${tx("Expected Behaviour: ", "السلوك المتوقع: ")}${values.expected.trim()}`,
    `${tx("Actual Behaviour: ", "السلوك الفعلي: ")}${values.actual.trim()}`,
    ...(values.impact
      ? [`${tx("Reported Impact: ", "الأثر الميداني: ")}${values.impact}`]
      : []),
    `${tx("Preferred Channel: ", "قناة المتابعة المفضلة: ")}${technicalText(channelLabels[preferredChannel], rtl)}`,
    "",
    tx("--- DIAGNOSTIC CONTEXT & REPRODUCTION ---", "--- سياق التشخيص وإعادة الحدوث ---"),
    ...(values.since
      ? [`${tx("Started At: ", "بداية الحالة: ")}${values.since.trim()}`]
      : []),
    ...(values.device
      ? [`${tx("Environment / Device / OS: ", "البيئة / المتصفح / النظام: ")}${values.device.trim()}`]
      : []),
    ...(values.reproduce
      ? [
          "",
          tx("Steps to Reproduce:", "خطوات إعادة الحدوث:"),
          values.reproduce.trim(),
        ]
      : []),
    ...(values.changed
      ? [
          "",
          tx("Recent Changes / Releases:", "التغييرات أو الإصدارات الأخيرة:"),
          values.changed.trim(),
        ]
      : []),
    ...(values.error
      ? [
          "",
          tx("Redacted Error Log / Message:", "رسالة الخطأ أو السجل المنقح:"),
          values.error.trim(),
        ]
      : []),
    ...(values.evidence
      ? [
          "",
          tx("Evidence Reference URL:", "رابط توثيق الدليل أو التسجيل:"),
          values.evidence.trim(),
        ]
      : []),
    ...(files.length
      ? [
          "",
          tx("Files to Attach Manually:", "ملفات يجب إرفاقها يدويًا من جهازك:"),
          ...files.map((file, idx) => `  ${idx + 1}. ${file.name} (${Math.ceil(file.size / 1024)} KB)`),
        ]
      : []),
    "",
    tx("--- CONTACT DETAILS ---", "--- بيانات التواصل ---"),
    `${tx("Contact Name: ", "اسم المسؤول: ")}${values.name.trim()}`,
    `${tx("Work Email: ", "البريد الإلكتروني: ")}${values.email.trim()}`,
    "",
    "==================================================",
    tx(
      "Prepared locally on client device. No server ticket created. Please send via Email or WhatsApp.",
      "تم تجهيز المسودة محليًا على جهاز العميل. لم يتم فتح تذكرة عبر خادم. يُرجى الإرسال عبر البريد أو واتساب."
    ),
  ].join("\n");

  const download = () => {
    const url = URL.createObjectURL(
      new Blob(["\uFEFF" + draft], { type: "text/plain;charset=utf-8" })
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "pencil-technical-request.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus(
        tx(
          "Technical brief copied to clipboard. Ready to paste into your message.",
          "تم نسخ الموجز التقني إلى الحافظة. ألصقه في رسالتك."
        )
      );
    } catch {
      setStatus(
        tx(
          "Clipboard copy unavailable. Please use Save .TXT option below.",
          "تعذر النسخ التلقائي. يمكنك تنزيل ملف .TXT المرفق أدناه."
        )
      );
    }
  };

  const inputStyles =
    "mt-2 min-h-12 w-full rounded-xl border border-neutral-300/80 bg-neutral-50/50 px-4 py-3 text-base text-neutral-900 outline-none transition focus:border-[#2057ff] focus:bg-white focus:ring-2 focus:ring-[#2057ff]/20 font-sans";

  return (
    <div className="relative rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-neutral-300">
      {/* ─── Step Progress Header ────────────────────────────────────────── */}
      <div className="mb-6 flex items-center justify-between border-b border-neutral-200/80 pb-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#2057ff] animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2057ff]">
            {step === 0 && tx("STEP 01: CORE BEHAVIOUR", "المرحلة 01: وصف السلوك والمجال")}
            {step === 1 && tx("STEP 02: DIAGNOSTIC EVIDENCE", "المرحلة 02: أدلة التشخيص والبيئة")}
            {step === 2 && tx("STEP 03: REVIEW & TRANSMIT", "المرحلة 03: مراجعة المسودة والإرسال")}
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-neutral-500" dir="ltr">
          <span className="text-[#2057ff]">0{step + 1}</span>
          <span>/</span>
          <span>03</span>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mb-6 flex gap-2" aria-hidden="true">
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-300",
              idx <= step ? "bg-[#2057ff]" : "bg-neutral-200/80"
            )}
          />
        ))}
      </div>

      <h3
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl outline-none"
      >
        {step === 0 && tx("Describe the technical behaviour.", "صف السلوك التقني الذي تلاحظه.")}
        {step === 1 && tx("Provide diagnostic context.", "أضف ما يساعد على فحص وإعادة الحالة.")}
        {step === 2 && tx("Review your technical brief.", "راجع الموجز التقني قبل مشاركته.")}
      </h3>

      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">
        {step === 0 &&
          tx(
            "A formal diagnosis is not required. Name the affected system and describe the symptoms honestly.",
            "لا يلزم تشخيص تقني رسمي مسبق. اذكر النظام المتأثر وصف ما يحدث بوضوح."
          )}
        {step === 1 &&
          tx(
            "Help our engineering team isolate the layer. Redact sensitive credentials and passwords before submitting.",
            "ساعد فريق الهندسة في عزل الطبقة المسؤولة. أزل كلمات المرور والبيانات الحساسة قبل المتابعة."
          )}
        {step === 2 &&
          tx(
            "This technical brief is prepared locally in your browser. Send it via verified Email or WhatsApp.",
            "تم تجهيز هذا الموجز محليًا داخل متصفحك. أرسله مباشرة عبر البريد المعتمد أو واتساب."
          )}
      </p>

      {/* ─── Step 0 & Step 1 Form ────────────────────────────────────────── */}
      {step < 2 ? (
        <form
          key={step}
          onSubmit={(event) => {
            event.preventDefault();
            go(step + 1);
          }}
          className="mt-6 space-y-6"
        >
          {step === 0 && (
            <>
              {/* Technical Domain Selector Card with Popover Dropdown Menu */}
              <div className="relative" ref={domainSelectorRef}>
                <div className="rounded-2xl border border-blue-100 bg-[#f4f7ff]/70 p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                        {tx("SELECTED TECHNICAL DOMAIN", "المجال التقني المحدد")}
                      </span>
                      <p className="mt-0.5 text-base font-bold text-neutral-950">
                        {technicalText(currentArea.name, rtl)}
                      </p>
                    </div>
                    <button
                      type="button"
                      id="switch-domain-btn"
                      onClick={() => setSelectorOpen((prev) => !prev)}
                      aria-expanded={selectorOpen}
                      aria-haspopup="dialog"
                      aria-controls="domain-popover-panel"
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-[#2057FF] shadow-xs transition hover:bg-[#EEF3FF] hover:border-[#2057FF]/40 cursor-pointer shrink-0"
                    >
                      <SlidersHorizontal size={14} />
                      <span>{tx("Switch Domain (12)", "تغيير المجال (12)")}</span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          selectorOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                  <p className="mt-2.5 border-s-2 border-[#2057ff] ps-3.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                    {technicalText(currentArea.heading, rtl)}
                  </p>
                </div>

                {/* Popover Dropdown Menu (Exact layout & feel of Client Request Workbench) */}
                <AnimatePresence>
                  {selectorOpen && (
                    <motion.div
                      id="domain-popover-panel"
                      role="dialog"
                      aria-label={
                        rtl ? "قائمة اختيار المجال التقني" : "Select technical domain"
                      }
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      className="absolute inset-x-0 top-full z-40 mt-2 max-h-[460px] overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xl shadow-blue-950/15 backdrop-blur-xl sm:p-5"
                    >
                      {/* Header of Popover */}
                      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                        <div>
                          <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2057FF]">
                            {tx("ALL 12 TECHNICAL DOMAINS", "كافة المجالات التقنية (12)")}
                          </p>
                          <p className="text-xs text-neutral-500 font-medium mt-0.5">
                            {tx(
                              "Switching domains preserves whatever you have already typed",
                              "تغيير المجال لن يحذف أي تفاصيل كتبتها في مسودة الفحص"
                            )}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelectorOpen(false)}
                          aria-label={tx("Close", "إغلاق")}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition cursor-pointer"
                        >
                          <X size={15} />
                        </button>
                      </div>

                      {/* 4 Logical Clusters in Responsive Grid */}
                      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {TECHNICAL_AREA_CLUSTERS.map((cluster) => (
                          <div key={cluster.id} className="space-y-2">
                            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-1">
                              <span>{technicalText(cluster.title, rtl)}</span>
                            </div>
                            <div className="space-y-1">
                              {cluster.areaIds.map((areaId) => {
                                const item = TECHNICAL_SUPPORT_AREAS.find(
                                  (a) => a.id === areaId
                                )!;
                                if (!item) return null;
                                const isCurrent = area === areaId;
                                return (
                                  <button
                                    key={areaId}
                                    type="button"
                                    onClick={() => {
                                      onAreaChange(areaId);
                                      setSelectorOpen(false);
                                    }}
                                    className={cn(
                                      "flex w-full items-center justify-between gap-2 rounded-xl px-2.5 py-2 text-start transition cursor-pointer",
                                      isCurrent
                                        ? "bg-[#2057FF] text-white shadow-sm"
                                        : "hover:bg-neutral-100 text-neutral-700"
                                    )}
                                  >
                                    <div className="min-w-0 flex-1">
                                      <p
                                        className={cn(
                                          "text-xs font-bold truncate",
                                          isCurrent ? "text-white" : "text-neutral-900"
                                        )}
                                      >
                                        {technicalText(item.name, rtl)}
                                      </p>
                                      <p
                                        className={cn(
                                          "text-[10px] truncate",
                                          isCurrent ? "text-blue-100" : "text-neutral-400"
                                        )}
                                      >
                                        {technicalText(item.hint, rtl)}
                                      </p>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Affected URL or System Name */}
              <label
                htmlFor="technical-system"
                className="block text-sm font-bold text-neutral-800"
              >
                {tx("Affected URL or System Name *", "الرابط أو النظام المتأثر *")}
                <input
                  id="technical-system"
                  name="system"
                  required
                  maxLength={300}
                  placeholder={tx("e.g. https://portal.example.com/checkout or AWS ECS Cluster", "مثال: https://app.example.com أو خادم قاعدة البيانات")}
                  value={values.system}
                  onChange={(e) => update("system", e.target.value)}
                  className={inputStyles}
                />
              </label>

              {/* Area Specific Prompt Field */}
              <div>
                <label
                  htmlFor="technical-specific"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {technicalText(currentArea.field, rtl)}
                  <input
                    id="technical-specific"
                    aria-describedby="technical-specific-hint"
                    maxLength={300}
                    placeholder={technicalText(currentArea.hint, rtl)}
                    value={specific[area] || ""}
                    onChange={(e) => {
                      setSpecific((prev) => ({
                        ...prev,
                        [area]: e.target.value,
                      }));
                      setStatus("");
                    }}
                    className={inputStyles}
                  />
                </label>
                <span
                  id="technical-specific-hint"
                  className="mt-1.5 block text-xs leading-relaxed text-neutral-500"
                >
                  {technicalText(currentArea.hint, rtl)}
                </span>
              </div>

              {/* Expected vs Actual (2 Grouped Textareas) */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label
                  htmlFor="technical-expected"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {tx("Expected Behaviour *", "السلوك المتوقع *")}
                  <textarea
                    id="technical-expected"
                    name="expected"
                    required
                    minLength={3}
                    maxLength={1200}
                    rows={4}
                    placeholder={tx("What should happen when this operation is executed?", "ما النتيجة الطبيعية المتوقعة عند إتمام هذا الإجراء؟")}
                    value={values.expected}
                    onChange={(e) => update("expected", e.target.value)}
                    className={cn(inputStyles, "resize-y")}
                  />
                </label>

                <label
                  htmlFor="technical-actual"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {tx("Actual Behaviour *", "السلوك الفعلي *")}
                  <textarea
                    id="technical-actual"
                    name="actual"
                    required
                    minLength={3}
                    maxLength={1200}
                    rows={4}
                    placeholder={tx("What happens instead? (Error message, blank state, timeout)", "ما الذي يحدث بدلاً من ذلك؟ (رسالة خطأ، توقف، بطء)")}
                    value={values.actual}
                    onChange={(e) => update("actual", e.target.value)}
                    className={cn(inputStyles, "resize-y")}
                  />
                </label>
              </div>

              {/* Reported Impact Dropdown */}
              <label
                htmlFor="technical-impact"
                className="block text-sm font-bold text-neutral-800"
              >
                {tx("Reported Impact (Triage Guidance)", "الأثر الميداني على العمل (لتحديد أولوية الفرز)")}
                <select
                  id="technical-impact"
                  value={values.impact}
                  onChange={(e) => update("impact", e.target.value)}
                  className={inputStyles}
                >
                  <option value="">{tx("Not yet determined / Routine query", "لم يتحدد بعد / استفسار اعتيادي")}</option>
                  {impactOptions.map((opt) => (
                    <option key={opt.en} value={opt.en}>
                      {rtl ? opt.ar : opt.en}
                    </option>
                  ))}
                </select>
              </label>

              {/* Security & Safety Note for Area */}
              <div className="flex items-start gap-2.5 rounded-xl border border-blue-100 bg-[#f4f7ff] p-3.5 text-xs text-neutral-700">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#2057ff]" />
                <span>{technicalText(currentArea.safety, rtl)}</span>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              {/* Timing & Device / Environment */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label
                  htmlFor="technical-since"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {tx("When did it start? (Optional)", "متى بدأت الحالة؟ (اختياري)")}
                  <input
                    id="technical-since"
                    maxLength={200}
                    placeholder={tx("e.g. Today around 14:00 Cairo time, or after 1.4 deployment", "مثال: اليوم حوالي 2 ظهرًا، أو بعد إصدار النسخة 1.4")}
                    value={values.since}
                    onChange={(e) => update("since", e.target.value)}
                    className={inputStyles}
                  />
                </label>
                <label
                  htmlFor="technical-device"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {tx("Browser / Device / OS (Optional)", "المتصفح / الجهاز / النظام (اختياري)")}
                  <input
                    id="technical-device"
                    maxLength={200}
                    placeholder={tx("e.g. Chrome 124 on macOS 14.4 / iPhone 15 Safari", "مثال: كروم على ماك، أو سفاري على آيفون")}
                    value={values.device}
                    onChange={(e) => update("device", e.target.value)}
                    className={inputStyles}
                  />
                </label>
              </div>

              {/* Steps to Reproduce */}
              <label
                htmlFor="technical-reproduce"
                className="block text-sm font-bold text-neutral-800"
              >
                {tx("Steps to Reproduce (Optional)", "خطوات إعادة الحدوث (اختياري)")}
                <textarea
                  id="technical-reproduce"
                  maxLength={1800}
                  rows={4}
                  placeholder={tx(
                    "1. Log into admin dashboard as Store Manager\n2. Navigate to Orders -> Export CSV\n3. Click export button -> 504 Gateway Timeout appears",
                    "1. تسجيل الدخول كمسؤول متجر\n2. الانتقال إلى الطلبات ثم تصدير CSV\n3. النقر على زر التصدير فتظهر رسالة 504 Gateway Timeout"
                  )}
                  value={values.reproduce}
                  onChange={(e) => update("reproduce", e.target.value)}
                  className={cn(inputStyles, "resize-y")}
                />
              </label>

              {/* Changes before issue & Redacted Error */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label
                  htmlFor="technical-changed"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {tx("Changes before it appeared? (Optional)", "تغييرات سبقت الحالة؟ (اختياري)")}
                  <input
                    id="technical-changed"
                    maxLength={500}
                    placeholder={tx("e.g. DNS switch, environment variable update", "مثال: تغيير إعدادات DNS أو تحديث متغيرات بيئة")}
                    value={values.changed}
                    onChange={(e) => update("changed", e.target.value)}
                    className={inputStyles}
                  />
                </label>

                <label
                  htmlFor="technical-evidence"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {tx("Screenshot or Video URL (Optional)", "رابط لقطة شاشة أو فيديو (اختياري)")}
                  <input
                    id="technical-evidence"
                    maxLength={500}
                    placeholder="https://drive.google.com/file/..."
                    value={values.evidence}
                    onChange={(e) => update("evidence", e.target.value)}
                    className={inputStyles}
                  />
                </label>
              </div>

              {/* Redacted Error Log */}
              <label
                htmlFor="technical-error"
                className="block text-sm font-bold text-neutral-800"
              >
                {tx("Redacted Error Message or Log (Optional)", "رسالة خطأ أو سجل منقح (اختياري)")}
                <textarea
                  id="technical-error"
                  dir="ltr"
                  maxLength={1200}
                  rows={3}
                  placeholder={tx("e.g. Error: Connection refused at pg_connect() or HTTP 502", "مثال: Error: Connection refused at pg_connect()")}
                  value={values.error}
                  onChange={(e) => update("error", e.target.value)}
                  className={cn(inputStyles, "font-mono text-xs resize-y")}
                />
              </label>

              {/* File Metadata Picker (Max 5 files, Truthful local handling) */}
              <div className="rounded-2xl border border-neutral-200/90 bg-neutral-50/60 p-4 sm:p-5">
                <label
                  htmlFor="technical-files"
                  className="block text-sm font-bold text-neutral-800"
                >
                  <span className="flex items-center gap-2">
                    <Paperclip size={16} className="text-[#2057ff]" />
                    <span>{tx("Evidence Files to List in Brief (Max 5 files)", "ملفات الأدلة للإشارة إليها في الموجز (حد أقصى 5)")}</span>
                  </span>
                  <input
                    id="technical-files"
                    type="file"
                    accept="image/png,image/jpeg,image/webp,video/mp4,video/webm,text/plain,application/pdf"
                    multiple
                    aria-describedby="technical-files-note"
                    onChange={(event) => {
                      const chosen = Array.from(event.target.files || []);
                      if (chosen.length > 5) {
                        setFileError(
                          tx(
                            "Choose up to five files. Additional files can be sent directly in the conversation.",
                            "اختر حتى 5 ملفات فقط. يمكنك إرسال أي ملفات إضافية في المحادثة مباشرة."
                          )
                        );
                        event.target.value = "";
                        return;
                      }
                      setFiles(chosen);
                      setFileError("");
                      event.target.value = "";
                    }}
                    className={cn(
                      inputStyles,
                      "text-xs file:me-3 file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-1.5 file:text-xs file:font-bold file:text-[#2057ff]"
                    )}
                  />
                </label>

                <p
                  id="technical-files-note"
                  className="mt-2 text-xs leading-relaxed text-neutral-500"
                >
                  {tx(
                    "Transparent file handling: This form records file names into your text draft only. Files are not uploaded to any server. You will attach the physical files yourself when sending via Email or WhatsApp.",
                    "إيضاح هام: يدرج هذا النموذج أسماء الملفات فقط داخل مسودة النص، ولا يرفع أي ملفات لخادم. يُرجى إرفاق النسخ الأصلية بنفسك عند إرسال الرسالة عبر البريد أو واتساب."
                  )}
                </p>

                {fileError && (
                  <p role="alert" className="mt-2 text-xs font-bold text-red-600">
                    {fileError}
                  </p>
                )}

                {!!files.length && (
                  <ul className="mt-3 space-y-2">
                    {files.map((file, idx) => (
                      <li
                        key={file.name + idx}
                        className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200/90 bg-white px-3.5 py-2 text-xs"
                      >
                        <span className="font-mono text-neutral-800 break-all">
                          {file.name} ({Math.ceil(file.size / 1024)} KB)
                        </span>
                        <button
                          type="button"
                          aria-label={tx("Remove file ", "إزالة الملف ") + file.name}
                          onClick={() =>
                            setFiles((prev) => prev.filter((_, i) => i !== idx))
                          }
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900"
                        >
                          <X size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Contact Information & Preferred Channel */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label
                  htmlFor="technical-name"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {tx("Your Name *", "اسمك الكريم *")}
                  <input
                    id="technical-name"
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder={tx("e.g. Omar Tarek", "مثال: طارق محمود")}
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputStyles}
                  />
                </label>

                <label
                  htmlFor="technical-email"
                  className="block text-sm font-bold text-neutral-800"
                >
                  {tx("Official Work Email *", "البريد الإلكتروني المهني *")}
                  <input
                    id="technical-email"
                    name="email"
                    type="email"
                    dir="ltr"
                    autoComplete="email"
                    required
                    maxLength={150}
                    placeholder="engineer@company.com"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputStyles}
                  />
                </label>
              </div>

              {/* Preferred Channel */}
              <label
                htmlFor="technical-channel"
                className="block text-sm font-bold text-neutral-800"
              >
                {tx("Preferred Follow-up Channel", "قناة المتابعة المفضلة")}
                <select
                  id="technical-channel"
                  value={preferredChannel}
                  onChange={(e) =>
                    setPreferredChannel(e.target.value as PreferredChannel)
                  }
                  className={inputStyles}
                >
                  <option value="email">
                    {technicalText(channelLabels.email, rtl)}
                  </option>
                  <option value="whatsapp">
                    {technicalText(channelLabels.whatsapp, rtl)}
                  </option>
                  <option value="phone">
                    {technicalText(channelLabels.phone, rtl)}
                  </option>
                </select>
                <span className="mt-1.5 block text-[11px] text-neutral-500">
                  {tx(
                    "Phone indicates preference for phone triage follow-up during studio working hours.",
                    "تحديد الهاتف يعبر عن تفضيلك لمتابعة الاتصال هاتفيًا خلال ساعات العمل الرسمية."
                  )}
                </span>
              </label>
            </>
          )}

          {/* Wizard Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {step > 0 && (
              <button
                type="button"
                onClick={() => go(step - 1)}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-300 bg-white px-6 text-sm font-bold text-neutral-800 shadow-xs transition hover:border-[#2057ff] hover:text-[#2057ff]"
              >
                <Back size={16} className="me-2" />
                <span>{tx("Previous Step", "المرحلة السابقة")}</span>
              </button>
            )}
            <button
              type="submit"
              className="flex min-h-12 flex-1 items-center justify-center gap-2.5 rounded-full bg-[#2057ff] px-6 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
            >
              <span>
                {step === 0
                  ? tx("Proceed to Diagnostic Evidence", "الانتقال لأدلة التشخيص")
                  : tx("Review Technical Brief", "مراجعة الموجز التقني")}
              </span>
              <Next size={16} />
            </button>
          </div>
        </form>
      ) : (
        /* ─── Step 2: Review Screen (Truthful Local Draft) ───────────────── */
        <div className="mt-6 space-y-6">
          {/* Explicit Amber Truthfulness Banner */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5 text-sm text-neutral-800">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <span className="h-2 w-2 rounded-full bg-amber-600" />
              <span>
                {tx(
                  "Technical Brief Prepared Locally • Not Yet Sent",
                  "الموجز التقني جاهز محليًا • لم يُرسل بعد"
                )}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">
              {tx(
                "This technical brief is prepared directly on your device. It does not submit tickets to an automated queue. Click below to launch your email client or WhatsApp to transmit this brief to the engineering desk.",
                "تم تجهيز هذا الموجز مباشرة على جهازك، ولا يرسل تذاكر تلقائية لنظام خادم. يُرجى النقر أدناه لفتح الرسالة في بريدك أو تطبيق واتساب لإرسالها لمكتب المهندسين."
              )}
            </p>
          </div>

          {/* Formatted Plaintext Output */}
          <div className="relative">
            <span className="absolute top-3 end-3 rounded-md bg-white/80 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-neutral-500 shadow-xs">
              {tx("Raw Brief Preview", "معاينة الموجز")}
            </span>
            <pre className="max-h-80 overflow-y-auto whitespace-pre-wrap break-words rounded-2xl border border-blue-100 bg-[#f4f7ff] p-5 font-mono text-xs leading-relaxed text-neutral-800">
              {draft}
            </pre>
          </div>

          {!!files.length && (
            <div className="flex items-start gap-2.5 rounded-xl border border-blue-200/80 bg-blue-50/60 p-3.5 text-xs text-neutral-800">
              <Paperclip size={16} className="mt-0.5 shrink-0 text-[#2057ff]" />
              <span>
                {tx(
                  "Remember to attach your chosen evidence files directly in your email client or WhatsApp chat. Only file names are embedded in the draft.",
                  "تذكير: يرجى إرفاق ملفات الأدلة المختارة يدويًا في رسالة البريد أو محادثة واتساب؛ حيث تتضمن المسودة أسماء الملفات فقط."
                )}
              </span>
            </div>
          )}

          {/* Primary Action Buttons */}
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={
                "mailto:help@dipencil.com?subject=" +
                encodeURIComponent(
                  "Pencil Technical / " +
                    technicalText(currentArea.name, rtl) +
                    " [" +
                    values.system +
                    "]"
                ) +
                "&body=" +
                encodeURIComponent(draft)
              }
              className="flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-[#2057ff] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
            >
              <Mail size={18} />
              <span>{tx("Open in Email Client", "فتح في برنامج البريد")}</span>
            </a>

            <a
              href={
                "https://wa.me/201003778273?text=" +
                encodeURIComponent(draft)
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition-all hover:bg-emerald-700 hover:shadow-emerald-500/40"
            >
              <WhatsAppIcon size={18} />
              <span>{tx("Continue on WhatsApp", "المتابعة عبر واتساب")}</span>
            </a>
          </div>

          {/* Utility Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200/80 pt-4">
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={copy}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-neutral-800 shadow-xs transition hover:border-[#2057ff] hover:text-[#2057ff]"
              >
                <Copy size={14} />
                <span>{tx("Copy Brief", "نسخ النص")}</span>
              </button>
              <button
                type="button"
                onClick={download}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-neutral-800 shadow-xs transition hover:border-[#2057ff] hover:text-[#2057ff]"
              >
                <Download size={14} />
                <span>{tx("Save .TXT Copy", "تنزيل ملف .TXT")}</span>
              </button>
            </div>
            <button
              type="button"
              onClick={() => go(0)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 underline-offset-4 hover:text-[#2057ff] hover:underline"
            >
              <PencilLine size={14} />
              <span>{tx("Edit Details", "تعديل البيانات")}</span>
            </button>
          </div>

          {/* ARIA Live Status */}
          {status && (
            <p
              role="status"
              className="rounded-xl bg-blue-50 p-3 text-center text-xs font-bold text-[#2057ff]"
            >
              {status}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
