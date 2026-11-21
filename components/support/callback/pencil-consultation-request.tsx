"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  Download,
  Mail,
  Phone,
  SlidersHorizontal,
  Video,
  X,
} from "lucide-react";
import {
  CALL_REQUESTS,
  CallRequest,
  callText,
} from "@/lib/support/callback/pencil-consultation";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { cn } from "@/lib/utils";

// ─── Categorized Consultation Clusters ───────────────────────────────────────
export const CONSULTATION_CLUSTERS = [
  {
    category: { en: "New Projects & Systems", ar: "المشاريع والأنظمة الجديدة" },
    ids: ["new", "website", "system"],
  },
  {
    category: { en: "Product Demos", ar: "عروض المنتجات والحلول" },
    ids: ["demo", "feliz"],
  },
  {
    category: { en: "AI & System Upgrades", ar: "الذكاء الاصطناعي وتطوير الأنظمة" },
    ids: ["ai", "expand"],
  },
  {
    category: { en: "Retainers & Ongoing Care", ar: "التعاقدات والدعم المستمر" },
    ids: ["subscription", "company", "review"],
  },
  {
    category: { en: "Partnerships & Open Discovery", ar: "الشراكات وتحديد الفكرة" },
    ids: ["partner", "direction"],
  },
];

type Preferences = {
  name: string;
  company: string;
  method: string;
  email: string;
  phone: string;
  language: string;
  date: string;
  period: string;
  timezone: string;
  attendees: string;
};

// Safe local midnight date helper avoiding UTC shift
function getLocalTodayDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function ConsultationRequest({
  rtl,
  request,
  onRequestChange,
}: {
  rtl: boolean;
  request: string;
  onRequestChange: (id: string) => void;
}) {
  const tx = (en: string, ar: string) => (rtl ? ar : en);

  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<string, Record<string, string>>>({});
  const [preferences, setPreferences] = React.useState<Preferences>({
    name: "",
    company: "",
    method: "phone",
    email: "",
    phone: "",
    language: "both",
    date: "",
    period: "flexible",
    timezone: "Africa/Cairo",
    attendees: "",
  });

  const [minDate, setMinDate] = React.useState("");
  const [statusMessage, setStatusMessage] = React.useState("");
  const [selectorOpen, setSelectorOpen] = React.useState(false);
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const topicSelectorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        topicSelectorRef.current &&
        !topicSelectorRef.current.contains(event.target as Node)
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

  // Compute local today on client mount
  React.useEffect(() => {
    setMinDate(getLocalTodayDate());
  }, []);

  const selectedRequest: CallRequest =
    CALL_REQUESTS.find((item) => item.id === request) || CALL_REQUESTS[0];
  const topicDetails = answers[request] || {};

  const updatePreference = (key: keyof Preferences, value: string) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const updateAnswer = (fieldId: string, val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [request]: {
        ...(prev[request] || {}),
        [fieldId]: val,
      },
    }));
  };

  const Next = rtl ? ArrowLeft : ArrowRight;
  const Back = rtl ? ArrowRight : ArrowLeft;

  const steps = [
    { en: "Consultation Topic", ar: "موضوع الاستشارة" },
    { en: "Conversation Details", ar: "تفاصيل الحوار" },
    { en: "Contact & Availability", ar: "التواصل والموعد" },
    { en: "Review & Dispatch", ar: "مراجعة الطلب" },
  ];

  const methods = [
    { id: "phone", icon: Phone, name: tx("Phone call", "مكالمة هاتفية") },
    { id: "whatsapp", icon: WhatsAppIcon, name: "WhatsApp" },
    { id: "video", icon: Video, name: tx("Video meeting", "اجتماع مرئي") },
    { id: "email", icon: Mail, name: tx("Email first", "البريد أولاً") },
  ];

  // Studio operating hours are Sun-Thu 10:00-19:00 Cairo time
  const timeWindows = [
    {
      id: "flexible",
      name: tx("Flexible, agree mutually upon coordination", "مرن، نحدد الموعد معاً بالتنسيق"),
    },
    {
      id: "morning",
      name: tx("Morning (10:00 to 12:00 Cairo time)", "صباحاً (10:00 إلى 12:00 بتوقيت القاهرة)"),
    },
    {
      id: "afternoon",
      name: tx("Afternoon (12:00 to 16:00 Cairo time)", "بعد الظهر (12:00 إلى 16:00 بتوقيت القاهرة)"),
    },
    {
      id: "evening",
      name: tx("Early evening (16:00 to 19:00 Cairo time)", "بداية المساء (16:00 إلى 19:00 بتوقيت القاهرة)"),
    },
  ];

  const commonTimezones = [
    "Africa/Cairo (UTC+2 / UTC+3)",
    "Asia/Riyadh (UTC+3)",
    "Asia/Dubai (UTC+4)",
    "Europe/London (UTC+0 / UTC+1)",
    "Asia/Kuwait (UTC+3)",
    "Asia/Qatar (UTC+3)",
  ];

  const goToStep = (next: number) => {
    setStep(next);
    setStatusMessage("");
    requestAnimationFrame(() => {
      headingRef.current?.focus({ preventScroll: true });
    });
  };

  // Compile full formatted plaintext brief
  const draft = [
    "==================================================",
    tx("PENCIL STUDIO • CONSULTATION & CALLBACK REQUEST", "استوديو بينسل • طلب استشارة أو مكالمة"),
    "==================================================",
    "",
    tx("--- CONSULTATION FOCUS ---", "--- موضوع الحوار ---"),
    `${tx("Topic: ", "نوع الاستشارة: ")}${callText(selectedRequest.name, rtl)}`,
    `${tx("Preparation Scope: ", "نطاق التحضير: ")}${callText(selectedRequest.prepare, rtl)}`,
    "",
    tx("--- CONTEXT & QUESTIONS ---", "--- السياق والأسئلة ---"),
    ...selectedRequest.fields.map(
      (field) =>
        `• ${callText(field.label, rtl)}:\n  ${topicDetails[field.id]?.trim() || tx("Not provided", "لم يحدد")}`
    ),
    "",
    tx("--- CONTACT & AVAILABILITY ---", "--- بيانات التواصل والموعد المفضل ---"),
    `${tx("Name: ", "الاسم: ")}${preferences.name.trim()}`,
    `${tx("Company / Organisation: ", "الشركة أو المؤسسة: ")}${preferences.company.trim() || tx("Not specified", "غير محدد")}`,
    `${tx("Preferred Channel: ", "طريقة التواصل المفضلة: ")}${methods.find((m) => m.id === preferences.method)?.name}`,
    `${tx("Work Email: ", "البريد الإلكتروني: ")}${preferences.email.trim() || tx("Not specified", "غير محدد")}`,
    `${tx("Phone / WhatsApp: ", "الهاتف أو واتساب: ")}${preferences.phone.trim() || tx("Not specified", "غير محدد")}`,
    `${tx("Preferred Language: ", "لغة الحوار: ")}${
      preferences.language === "ar"
        ? "العربية"
        : preferences.language === "en"
        ? "English"
        : "العربية / English"
    }`,
    `${tx("Preferred Day: ", "اليوم المفضل: ")}${preferences.date || tx("Flexible", "مرن")}`,
    `${tx("Preferred Time Window: ", "الفترة المفضلة: ")}${timeWindows.find((w) => w.id === preferences.period)?.name}`,
    `${tx("Client Timezone / City: ", "المنطقة الزمنية أو المدينة: ")}${preferences.timezone.trim()}`,
    ...(preferences.attendees.trim()
      ? [
          "",
          tx("Additional Attendees:", "مشاركون آخرون:"),
          `  ${preferences.attendees.trim()}`,
        ]
      : []),
    "",
    "==================================================",
    tx(
      "COORDINATION NOTE: These selections represent preferred availability, not a confirmed calendar booking. Please send this request via Email or WhatsApp to finalize your conversation slot.",
      "ملاحظة هامة: هذه البيانات تمثل الموعد المفضل للتنسيق، وليست حجزاً تقويمياً مؤكداً. يرجى إرسال هذا الطلب عبر البريد أو واتساب لتأكيد موعد الحوار مع الفريق."
    ),
    "==================================================",
  ].join("\n");

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setStatusMessage(
        tx(
          "Request copied to clipboard. Ready to paste into your message.",
          "تم نسخ ملخص الطلب إلى الحافظة، يمكنك لصقه وإرساله الآن."
        )
      );
    } catch {
      setStatusMessage(
        tx(
          "Automatic clipboard copy is unavailable. Please download the .txt file below.",
          "تعذر النسخ التلقائي، يمكنك تنزيل ملف .TXT المرفق أدناه."
        )
      );
    }
  };

  const downloadDraft = () => {
    const blob = new Blob(["\uFEFF" + draft], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pencil-consultation-${selectedRequest.id}-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const inputStyles =
    "mt-2 min-h-12 w-full rounded-xl border border-neutral-300/80 bg-neutral-50/50 px-4 py-3 text-base text-neutral-900 outline-none transition focus:border-[#2057ff] focus:bg-white focus:ring-2 focus:ring-[#2057ff]/20 font-sans";

  return (
    <div className="relative rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-neutral-300">
      {/* ─── Four-Step Progress Navigation ───────────────────────────────── */}
      <div className="mb-6 flex items-center justify-between border-b border-neutral-200/80 pb-5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 font-mono text-xs font-bold text-[#2057ff]">
            0{step + 1}
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
            / 04 • {rtl ? steps[step].ar : steps[step].en}
          </span>
        </div>

        {/* Quick Stepper Pills */}
        <div className="flex items-center gap-1.5" aria-label={tx("Wizard progress", "مراحل الطلب")}>
          {steps.map((st, idx) => (
            <button
              key={st.en}
              type="button"
              disabled={idx > step}
              onClick={() => goToStep(idx)}
              aria-label={rtl ? st.ar : st.en}
              aria-current={idx === step ? "step" : undefined}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                idx === step
                  ? "w-7 bg-[#2057ff]"
                  : idx < step
                  ? "w-2 bg-emerald-500 hover:opacity-80"
                  : "w-2 bg-neutral-200"
              )}
            />
          ))}
        </div>
      </div>

      {/* ─── Step Heading ────────────────────────────────────────────────── */}
      <div className="mb-8">
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 focus:outline-none"
        >
          {step === 0 && tx("Choose your consultation topic", "اختر موضوع الاستشارة أو العرض")}
          {step === 1 && tx("Give us the context to prepare for", "شاركنا السياق لنحضّر لحوار عملي ومباشر")}
          {step === 2 && tx("How and when do you prefer to connect?", "حدد تفضيلات التواصل والوقت الأنسب لك")}
          {step === 3 && tx("Review your consultation brief", "راجع ملخص الحوار قبل الإرسال")}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {step === 0 &&
            tx(
              "Select what best matches your situation. We adapt our discussion and preparation to your specific questions.",
              "اختر ما يناسب طبيعة احتياجك، لنجهز المحاور والنقاط العملية التي تخدم مشروعك مباشرة."
            )}
          {step === 1 &&
            tx(
              "You do not need a finished brief. Honest answers are enough to shape a useful first conversation.",
              "مش لازم تكون مجهز وثيقة متكاملة، إجابات أولية واضحة كافية جداً لنبدأ بداية صحيحة."
            )}
          {step === 2 &&
            tx(
              "Your selections represent preferred coordination times during Cairo studio hours, not instant calendar bookings.",
              "المواعيد المختارة هي أوقات مفضلة للتنسيق خلال ساعات عمل الاستوديو بالقاهرة، وليست حجزاً فورياً."
            )}
          {step === 3 &&
            tx(
              "This brief is prepared on your device. Choose email or WhatsApp to coordinate directly with the studio team.",
              "تم تجهيز ملخصك محلياً، اختر المتابعة عبر البريد أو واتساب للتنسيق مباشرة مع فريق الاستوديو."
            )}
        </p>
      </div>

      {/* ─── Wizard Forms ────────────────────────────────────────────────── */}
      {step < 3 ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Conditional contact validation
            if (step === 2) {
              if (["video", "email"].includes(preferences.method) && !preferences.email.trim()) {
                return;
              }
              if (["phone", "whatsapp"].includes(preferences.method) && !preferences.phone.trim()) {
                return;
              }
            }
            goToStep(step + 1);
          }}
          className="space-y-6"
        >
          {/* ─── STEP 01: Consultation Topic Selector ─────────────────────── */}
          {step === 0 && (
            <div className="space-y-5">
              {/* Active Selected Topic Hero Card with Dropdown Popover */}
              <div className="relative" ref={topicSelectorRef}>
                <div className="relative overflow-hidden rounded-2xl border-2 border-[#2057ff] bg-gradient-to-br from-blue-50/70 to-indigo-50/30 p-5 sm:p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#2057ff]">
                          {selectedRequest.id.toUpperCase()}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-neutral-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                          {tx("Active Selection", "الموضوع المحدد")}
                        </span>
                      </div>
                      <h4 className="mt-1 text-xl font-bold text-neutral-950">
                        {callText(selectedRequest.name, rtl)}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-neutral-600">
                        {callText(selectedRequest.line, rtl)}
                      </p>
                    </div>
                    <button
                      type="button"
                      id="browse-topics-btn"
                      onClick={() => setSelectorOpen((prev) => !prev)}
                      aria-expanded={selectorOpen}
                      aria-haspopup="dialog"
                      aria-controls="topic-popover-panel"
                      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-bold text-[#2057ff] shadow-xs transition hover:bg-[#EEF3FF] hover:border-[#2057ff]/40 cursor-pointer"
                    >
                      <SlidersHorizontal size={14} />
                      <span>{tx("Browse All 12 Topics", "استعراض الـ 12 موضوعاً")}</span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          selectorOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-blue-200/50 text-xs text-neutral-700">
                    <span className="font-bold text-[#2057ff]">
                      {tx("What Pencil prepares: ", "ما يجهزه فريق بينسل: ")}
                    </span>
                    <span>{callText(selectedRequest.prepare, rtl)}</span>
                  </div>
                </div>

                {/* Popover Dropdown Panel (Exact layout & feel of Client Request Workbench) */}
                <AnimatePresence>
                  {selectorOpen && (
                    <motion.div
                      id="topic-popover-panel"
                      role="dialog"
                      aria-label={
                        rtl ? "قائمة موضوعات الاستشارة" : "Select consultation topic"
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
                            {tx("ALL 12 CONSULTATION TOPICS", "كافة موضوعات الاستشارة (12)")}
                          </p>
                          <p className="text-xs text-neutral-500 font-medium mt-0.5">
                            {tx(
                              "Switching topics adapts your discussion scope without losing inputs",
                              "تغيير الموضوع يحدد محاور الحوار مباشرة دون فقدان البيانات"
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

                      {/* Categorized Consultation Clusters Grid */}
                      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {CONSULTATION_CLUSTERS.map((cluster) => (
                          <div key={cluster.category.en} className="space-y-2">
                            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-1">
                              <span>{rtl ? cluster.category.ar : cluster.category.en}</span>
                            </div>
                            <div className="space-y-1">
                              {cluster.ids.map((id) => {
                                const item = CALL_REQUESTS.find((r) => r.id === id);
                                if (!item) return null;
                                const isCurrent = item.id === request;
                                return (
                                  <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => {
                                      onRequestChange(item.id);
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
                                      <div className="flex items-center justify-between gap-1">
                                        <p
                                          className={cn(
                                            "text-xs font-bold truncate",
                                            isCurrent ? "text-white" : "text-neutral-900"
                                          )}
                                        >
                                          {callText(item.name, rtl)}
                                        </p>
                                        {isCurrent && <Check size={13} className="text-white shrink-0" />}
                                      </div>
                                      <p
                                        className={cn(
                                          "text-[10px] truncate",
                                          isCurrent ? "text-blue-100" : "text-neutral-400"
                                        )}
                                      >
                                        {callText(item.line, rtl)}
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

              {/* Categorized Quick Selector Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {CALL_REQUESTS.slice(0, 6).map((item) => {
                  const isCurrent = item.id === request;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onRequestChange(item.id)}
                      className={cn(
                        "flex flex-col justify-between text-start rounded-2xl border p-4 sm:p-5 transition-all duration-200",
                        isCurrent
                          ? "border-[#2057ff] bg-blue-50/40 shadow-xs ring-1 ring-[#2057ff]"
                          : "border-neutral-200/80 bg-neutral-50/40 hover:border-neutral-300 hover:bg-white"
                      )}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold text-neutral-400">
                            {item.id}
                          </span>
                          {isCurrent && <Check size={14} className="text-[#2057ff]" />}
                        </div>
                        <p className="mt-2 text-sm font-bold text-neutral-950">
                          {callText(item.name, rtl)}
                        </p>
                        <p className="mt-1 text-xs text-neutral-600 line-clamp-2">
                          {callText(item.line, rtl)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setSelectorOpen((prev) => !prev)}
                  className="text-xs font-bold text-[#2057ff] hover:underline cursor-pointer"
                >
                  {tx(
                    "Looking for retainers, partnerships, or scoping? Open full catalog →",
                    "تبحث عن تعاقد شهري، أو شراكة، أو تحديد فكرة؟ افتح القائمة الكاملة ←"
                  )}
                </button>
              </div>
            </div>
          )}

          {/* ─── STEP 02: Conversation Details ───────────────────────────── */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-blue-100 bg-[#f4f7ff] p-4 text-xs sm:text-sm text-neutral-800">
                <p className="font-bold text-neutral-950">
                  {callText(selectedRequest.name, rtl)}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  {callText(selectedRequest.prepare, rtl)}
                </p>
              </div>

              <div className="space-y-5">
                {selectedRequest.fields.map((field) => (
                  <label key={field.id} className="block text-sm font-bold text-neutral-800">
                    <span className="flex items-center justify-between">
                      <span>
                        {callText(field.label, rtl)}
                        {field.required && (
                          <span className="text-[#2057ff] ms-1">*</span>
                        )}
                      </span>
                    </span>
                    <textarea
                      required={field.required}
                      minLength={field.required ? 3 : undefined}
                      maxLength={1500}
                      rows={3}
                      placeholder={callText(field.hint, rtl)}
                      value={topicDetails[field.id] || ""}
                      onChange={(e) => updateAnswer(field.id, e.target.value)}
                      className={cn(inputStyles, "font-normal leading-relaxed")}
                    />
                    <span className="mt-1.5 block text-xs font-normal text-neutral-500">
                      {callText(field.hint, rtl)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ─── STEP 03: Contact & Availability Preferences ─────────────── */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Name & Company */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="callback-name" className="block text-sm font-bold text-neutral-800">
                  {tx("Your Name", "اسمك الكريم")} <span className="text-[#2057ff]">*</span>
                  <input
                    id="callback-name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder={tx("e.g. Mostafa Hassan", "مثال: مصطفى حسن")}
                    value={preferences.name}
                    onChange={(e) => updatePreference("name", e.target.value)}
                    className={inputStyles}
                  />
                </label>

                <label htmlFor="callback-company" className="block text-sm font-bold text-neutral-800">
                  {tx("Company or Organisation (Optional)", "الشركة أو المؤسسة (اختياري)")}
                  <input
                    id="callback-company"
                    maxLength={150}
                    autoComplete="organization"
                    placeholder={tx("e.g. Retail Horizon Ltd", "مثال: شركة الأفق للتجارة")}
                    value={preferences.company}
                    onChange={(e) => updatePreference("company", e.target.value)}
                    className={inputStyles}
                  />
                </label>
              </div>

              {/* Preferred Conversation Channel */}
              <fieldset>
                <legend className="text-sm font-bold text-neutral-800">
                  {tx("Preferred Channel", "طريقة التواصل المفضلة")} <span className="text-[#2057ff]">*</span>
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {methods.map((m) => {
                    const MethodIcon = m.icon;
                    const isActive = preferences.method === m.id;
                    return (
                      <label
                        key={m.id}
                        className={cn(
                          "flex cursor-pointer flex-col justify-between rounded-2xl border p-3.5 transition-all",
                          isActive
                            ? "border-[#2057ff] bg-blue-50/50 shadow-xs ring-1 ring-[#2057ff]"
                            : "border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300"
                        )}
                      >
                        <input
                          type="radio"
                          name="preferred-method"
                          value={m.id}
                          checked={isActive}
                          onChange={() => updatePreference("method", m.id)}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <MethodIcon
                            size={18}
                            className={isActive ? "text-[#2057ff]" : "text-neutral-500"}
                          />
                          {isActive && <Check size={14} className="text-[#2057ff]" />}
                        </div>
                        <span className="mt-3 block text-xs font-bold text-neutral-900">
                          {m.name}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Conditionally Validated Email & Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="callback-email" className="block text-sm font-bold text-neutral-800">
                  {tx("Work Email", "البريد الإلكتروني المهني")}
                  {["video", "email"].includes(preferences.method) && (
                    <span className="text-[#2057ff] ms-1">*</span>
                  )}
                  <input
                    id="callback-email"
                    type="email"
                    dir="ltr"
                    required={["video", "email"].includes(preferences.method)}
                    maxLength={200}
                    autoComplete="email"
                    placeholder="name@company.com"
                    value={preferences.email}
                    onChange={(e) => updatePreference("email", e.target.value)}
                    className={inputStyles}
                  />
                  <span className="mt-1 block text-[11px] text-neutral-500">
                    {["video", "email"].includes(preferences.method)
                      ? tx("Required for video invites and email coordination.", "مطلوب لإرسال دعوة الاجتماع والتنسيق عبر البريد.")
                      : tx("Optional for phone and WhatsApp follow-up.", "اختياري في حال اختيار الهاتف أو واتساب.")}
                  </span>
                </label>

                <label htmlFor="callback-phone" className="block text-sm font-bold text-neutral-800">
                  {tx("Phone / WhatsApp (with country code)", "الهاتف أو واتساب مع كود الدولة")}
                  {["phone", "whatsapp"].includes(preferences.method) && (
                    <span className="text-[#2057ff] ms-1">*</span>
                  )}
                  <input
                    id="callback-phone"
                    type="tel"
                    dir="ltr"
                    required={["phone", "whatsapp"].includes(preferences.method)}
                    pattern="[+0-9() .-]{7,30}"
                    maxLength={30}
                    autoComplete="tel"
                    placeholder="+20 100 ..."
                    value={preferences.phone}
                    onChange={(e) => updatePreference("phone", e.target.value)}
                    className={inputStyles}
                  />
                  <span className="mt-1 block text-[11px] text-neutral-500">
                    {["phone", "whatsapp"].includes(preferences.method)
                      ? tx("Required to reach you directly.", "مطلوب للتواصل معك مباشرة عبر المكالمة أو واتساب.")
                      : tx("Optional if coordinating via email.", "اختياري في حال التنسيق عبر البريد.")}
                  </span>
                </label>
              </div>

              {/* Preferred Date & Time Window */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="callback-date" className="block text-sm font-bold text-neutral-800">
                  {tx("Preferred Day (Optional)", "اليوم المفضل للتواصل (اختياري)")}
                  <input
                    id="callback-date"
                    type="date"
                    min={minDate}
                    value={preferences.date}
                    onChange={(e) => updatePreference("date", e.target.value)}
                    className={inputStyles}
                  />
                  <span className="mt-1 block text-[11px] text-neutral-500">
                    {tx(
                      "A date preference to guide coordination, not a booked appointment.",
                      "تاريخ استرشادي للتنسيق، ولا يمثل حجزاً تقويمياً فورياً."
                    )}
                  </span>
                </label>

                <label htmlFor="callback-period" className="block text-sm font-bold text-neutral-800">
                  {tx("Preferred Time Window", "الفترة الزمنية المفضلة")}
                  <select
                    id="callback-period"
                    value={preferences.period}
                    onChange={(e) => updatePreference("period", e.target.value)}
                    className={inputStyles}
                  >
                    {timeWindows.map((tw) => (
                      <option key={tw.id} value={tw.id}>
                        {tw.name}
                      </option>
                    ))}
                  </select>
                  <span className="mt-1 block text-[11px] text-neutral-500">
                    {tx(
                      "Pencil Studio hours: Sunday to Thursday, 10:00 AM to 7:00 PM Cairo time.",
                      "ساعات العمل الرسمية للاستوديو: من الأحد للخميس، 10 صباحاً حتى 7 مساءً بتوقيت القاهرة."
                    )}
                  </span>
                </label>
              </div>

              {/* Timezone & Language */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="callback-timezone" className="block text-sm font-bold text-neutral-800">
                  {tx("Your Timezone / City", "المنطقة الزمنية أو مدينتك")} <span className="text-[#2057ff]">*</span>
                  <input
                    id="callback-timezone"
                    required
                    maxLength={100}
                    placeholder="Africa/Cairo, Riyadh, Dubai, London..."
                    value={preferences.timezone}
                    onChange={(e) => updatePreference("timezone", e.target.value)}
                    className={inputStyles}
                  />
                  {/* Quick suggestion tags */}
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    {commonTimezones.slice(0, 3).map((tzOption) => (
                      <button
                        key={tzOption}
                        type="button"
                        onClick={() => updatePreference("timezone", tzOption)}
                        className="rounded-md border border-neutral-200 bg-neutral-100/60 px-2 py-0.5 text-[10px] font-bold text-neutral-600 hover:border-[#2057ff] hover:text-[#2057ff]"
                      >
                        {tzOption.split(" ")[0]}
                      </button>
                    ))}
                  </span>
                </label>

                <label htmlFor="callback-language" className="block text-sm font-bold text-neutral-800">
                  {tx("Conversation Language", "لغة الحوار")}
                  <select
                    id="callback-language"
                    value={preferences.language}
                    onChange={(e) => updatePreference("language", e.target.value)}
                    className={inputStyles}
                  >
                    <option value="both">{tx("Arabic or English (Flexible)", "العربية أو الإنجليزية (مرن)")}</option>
                    <option value="ar">{tx("Arabic", "العربية")}</option>
                    <option value="en">{tx("English", "الإنجليزية")}</option>
                  </select>
                </label>
              </div>

              {/* Attendees */}
              <label htmlFor="callback-attendees" className="block text-sm font-bold text-neutral-800">
                {tx("Other Attendees (Optional)", "مشاركون آخرون من فريقك (اختياري)")}
                <textarea
                  id="callback-attendees"
                  maxLength={500}
                  rows={2}
                  placeholder={tx("Mention roles: e.g. Co-founder, Operations lead, Tech partner", "اذكر الأدوار: مثل الشريك المؤسس، مسؤول التشغيل، أو الشريك التقني")}
                  value={preferences.attendees}
                  onChange={(e) => updatePreference("attendees", e.target.value)}
                  className={cn(inputStyles, "font-normal leading-relaxed")}
                />
              </label>

              {/* Explicit Scheduling Integrity Disclaimer */}
              <div className="rounded-2xl border border-amber-200/90 bg-amber-50/80 p-4 text-xs leading-relaxed text-amber-900">
                <span className="font-bold">
                  {tx("Coordination Transparency: ", "توضيح هام حول المواعيد: ")}
                </span>
                <span>
                  {tx(
                    "Your chosen day and time are coordination preferences only. No calendar appointment is automatically booked. The final time and video link will be confirmed mutually after receiving your request.",
                    "الموعد والوقت المحددان هنا يعبران عن تفضيلك فقط، ولا يعتبران حجزاً تلقائياً لموعد. سيتم تأكيد الموعد النهائي ورابط اللقاء بالتنسيق المباشر بعد وصول طلبك."
                  )}
                </span>
              </div>
            </div>
          )}

          {/* Navigation Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-200/80">
            {step > 0 && (
              <button
                type="button"
                onClick={() => goToStep(step - 1)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 text-sm font-bold text-neutral-800 shadow-xs transition hover:border-neutral-900"
              >
                <Back size={16} />
                <span>{tx("Back", "السابق")}</span>
              </button>
            )}

            <button
              type="submit"
              className="flex min-h-12 flex-1 items-center justify-center gap-2.5 rounded-full bg-[#2057ff] px-6 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
            >
              <span>
                {step === 0 && tx("Proceed to Conversation Details", "المتابعة لتفاصيل الحوار")}
                {step === 1 && tx("Proceed to Contact & Availability", "المتابعة لبيانات التواصل والموعد")}
                {step === 2 && tx("Review Consultation Brief", "مراجعة ملخص الاستشارة")}
              </span>
              <Next size={16} />
            </button>
          </div>
        </form>
      ) : (
        /* ─── STEP 04: Review & Dispatch Screen ──────────────────────────── */
        <div className="space-y-6">
          {/* Explicit Local Draft Warning Banner */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 sm:p-5 text-sm text-neutral-800">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <span className="h-2 w-2 rounded-full bg-amber-600" />
              <span>
                {tx(
                  "Consultation Brief Prepared Locally • Not Yet Sent",
                  "ملخص الاستشارة جاهز محلياً • لم يُرسل بعد"
                )}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">
              {tx(
                "This brief is compiled on your browser and has not been transmitted to a server. Choose Email or WhatsApp below to send this request to our team to confirm your consultation.",
                "تم تجهيز هذا الملخص في متصفحك ولم يُرسل إلى خادم بعد. اختر البريد أو واتساب بالأسفل لإرسال التفاصيل مباشرة إلى فريق الاستوديو وتنسيق الموعد المناسب."
              )}
            </p>
          </div>

          {/* Formatted Plaintext Output Preview */}
          <div className="relative">
            <span className="absolute top-3 end-3 rounded-md bg-white/80 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-neutral-500 shadow-xs">
              {tx("Brief Preview", "معاينة الملخص")}
            </span>
            <pre className="max-h-80 overflow-y-auto whitespace-pre-wrap break-words rounded-2xl border border-blue-100 bg-[#f4f7ff] p-5 font-mono text-xs leading-relaxed text-neutral-800">
              {draft}
            </pre>
          </div>

          {/* Primary Action Buttons */}
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={
                "mailto:help@dipencil.com?subject=" +
                encodeURIComponent(
                  "Pencil Consultation: " +
                    callText(selectedRequest.name, false) +
                    (preferences.company ? ` (${preferences.company})` : "")
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

          {/* Secondary Utilities */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200/80 pt-4">
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={copyDraft}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-neutral-800 shadow-xs transition hover:border-[#2057ff] hover:text-[#2057ff]"
              >
                <Copy size={14} />
                <span>{tx("Copy Brief", "نسخ الملخص")}</span>
              </button>
              <button
                type="button"
                onClick={downloadDraft}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-neutral-800 shadow-xs transition hover:border-[#2057ff] hover:text-[#2057ff]"
              >
                <Download size={14} />
                <span>{tx("Save .TXT Copy", "تنزيل ملف .TXT")}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => goToStep(1)}
              className="text-xs font-bold text-neutral-600 hover:text-[#2057ff] underline transition"
            >
              {tx("Edit Details or Answers", "تعديل التفاصيل أو الإجابات")}
            </button>
          </div>

          {/* Feedback Status Announcement */}
          {statusMessage && (
            <div
              role="status"
              className="rounded-xl border border-blue-200 bg-blue-50/80 px-4 py-2.5 text-xs font-bold text-[#2057ff]"
            >
              {statusMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
