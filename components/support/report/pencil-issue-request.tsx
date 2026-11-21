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
  FilePlus2,
  FileText,
  Mail,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  REPORT_SERVICES,
  ISSUE_SEVERITY,
  issueText,
} from "@/lib/support/report/pencil-issue-resolution";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import { cn } from "@/lib/utils";

const control =
  "mt-2 min-h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-950 transition-all focus:border-[#2057ff] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#2057ff]/10";

type ReportDetails = {
  project: string;
  location: string;
  expected: string;
  actual: string;
  started: string;
  frequency: string;
  device: string;
  impact: string;
  reproduce: string;
  changed: string;
  error: string;
  evidenceLink: string;
  name: string;
  email: string;
  phone: string;
  method: string;
};

const initial: ReportDetails = {
  project: "",
  location: "",
  expected: "",
  actual: "",
  started: "",
  frequency: "unknown",
  device: "",
  impact: "",
  reproduce: "",
  changed: "",
  error: "",
  evidenceLink: "",
  name: "",
  email: "",
  phone: "",
  method: "email",
};

// ─── Service Category Clusters for Compact Selection ────────────────────────
const SERVICE_CLUSTERS = [
  {
    id: "platforms",
    en: "Websites & Systems",
    ar: "المواقع والأنظمة",
    services: ["website", "system", "hosting", "interface"],
  },
  {
    id: "products",
    en: "Products, AI & Access",
    ar: "المنتجات والذكاء والوصول",
    services: ["feliz", "access", "performance", "integration"],
  },
  {
    id: "operations",
    en: "Creative, Retainers & Billing",
    ar: "التصميم والتعاقدات والفوترة",
    services: ["studio", "assets", "subscription", "billing", "other"],
  },
] as const;

export function IssueRequest({
  rtl,
  service,
  onServiceChange,
}: {
  rtl: boolean;
  service: string;
  onServiceChange: (id: string) => void;
}) {
  const tx = (en: string, ar: string) => (rtl ? ar : en);
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState<ReportDetails>(initial);
  const [specific, setSpecific] = React.useState<
    Record<string, { type: string; detail: string }>
  >({});
  const [severity, setSeverity] = React.useState("disrupted");
  const [files, setFiles] = React.useState<File[]>([]);
  const [fileError, setFileError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = React.useState(false);
  const [serviceSearch, setServiceSearch] = React.useState("");
  const serviceDropdownRef = React.useRef<HTMLDivElement>(null);

  const heading = React.useRef<HTMLHeadingElement>(null);
  const initialFocus = React.useRef(true);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const selected =
    REPORT_SERVICES.find((item) => item.id === service) || REPORT_SERVICES[0];
  const local = specific[service] || { type: "", detail: "" };

  const update = (key: keyof ReportDetails, value: string) =>
    setData((old) => ({ ...old, [key]: value }));

  const updateSpecific = (key: "type" | "detail", value: string) =>
    setSpecific((old) => ({
      ...old,
      [service]: {
        ...(old[service] || { type: "", detail: "" }),
        [key]: value,
      },
    }));

  const Next = rtl ? ArrowLeft : ArrowRight;
  const Back = rtl ? ArrowRight : ArrowLeft;

  const steps = [
    tx("Select service", "اختر الخدمة"),
    tx("Describe issue", "صف المشكلة"),
    tx("Add evidence", "أضف الأدلة"),
    tx("Review", "راجع البلاغ"),
    tx("Share report", "مشاركة البلاغ"),
  ];

  const frequencies = [
    { id: "unknown", label: tx("Not sure yet", "لم يتضح بعد") },
    { id: "always", label: tx("Every time", "في كل مرة") },
    { id: "sometimes", label: tx("Sometimes", "أحيانًا") },
    { id: "once", label: tx("Happened once", "حدثت مرة واحدة") },
    {
      id: "group",
      label: tx("Only certain users or conditions", "مع مستخدمين أو ظروف محددة"),
    },
  ];

  const contactMethods = [
    { id: "email", name: tx("Email", "البريد الإلكتروني") },
    { id: "whatsapp", name: "WhatsApp" },
    { id: "phone", name: tx("Phone call", "مكالمة هاتفية") },
  ];

  React.useEffect(() => {
    if (initialFocus.current) {
      initialFocus.current = false;
      return;
    }
    heading.current?.focus({ preventScroll: true });
    heading.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    setMessage("");
    setCopied(false);
  }, [step]);

  // Handle click outside to close service dropdown
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServiceDropdownOpen(false);
      }
    }
    if (isServiceDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServiceDropdownOpen]);

  // Handle ESC key for service dropdown
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isServiceDropdownOpen) {
        setIsServiceDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isServiceDropdownOpen]);

  const typeName = selected.types.find((item) => item.en === local.type);
  const severityItem =
    ISSUE_SEVERITY.find((item) => item.id === severity) || ISSUE_SEVERITY[1];
  const missing = tx("Not provided / unknown", "لم يحدد / غير معروف");

  // Filtered services for the modal search
  const filteredServices = React.useMemo(() => {
    if (!serviceSearch.trim()) return REPORT_SERVICES;
    const query = serviceSearch.toLowerCase();
    return REPORT_SERVICES.filter(
      (s) =>
        s.name.en.toLowerCase().includes(query) ||
        s.name.ar.includes(query) ||
        s.line.en.toLowerCase().includes(query) ||
        s.line.ar.includes(query)
    );
  }, [serviceSearch]);

  // Compiled plain-text report draft (zero em-dashes)
  const draft = [
    tx("Pencil Studio • Issue Report", "بينسل ستوديو • بلاغ مشكلة"),
    "",
    `${tx("Service", "الخدمة")}: ${issueText(selected.name, rtl)}`,
    `${tx("Issue type", "نوع المشكلة")}: ${
      typeName ? issueText(typeName, rtl) : missing
    }`,
    `${tx("Affected project / product", "المشروع / المنتج المتأثر")}: ${data.project.trim()}`,
    `${tx("URL / screen / file reference", "الرابط / الشاشة / مرجع الملف")}: ${
      data.location.trim() || missing
    }`,
    `${issueText(selected.question, rtl)}: ${local.detail.trim() || missing}`,
    "",
    `${tx("Expected behaviour", "السلوك المتوقع")}: ${data.expected.trim()}`,
    `${tx("Actual behaviour", "السلوك الفعلي")}: ${data.actual.trim()}`,
    `${tx("Started", "بداية الحالة")}: ${data.started.trim() || missing}`,
    `${tx("Frequency", "التكرار")}: ${
      frequencies.find((item) => item.id === data.frequency)?.label
    }`,
    ...(selected.device
      ? [
          `${tx("Device / browser / language", "الجهاز / المتصفح / اللغة")}: ${
            data.device.trim() || missing
          }`,
        ]
      : []),
    `${tx("Reported impact", "حجم التأثير المُبلغ")}: ${issueText(
      severityItem.name,
      rtl
    )}`,
    `${tx("Business impact details", "أثر المشكلة على العمل")}: ${
      data.impact.trim() || missing
    }`,
    "",
    `${tx("Steps to reproduce", "خطوات إعادة الحدوث")}: ${
      data.reproduce.trim() || missing
    }`,
    `${tx("Changes before it appeared", "تغييرات قبل ظهورها")}: ${
      data.changed.trim() || missing
    }`,
    `${tx("Redacted error message", "رسالة خطأ منقحة")}: ${
      data.error.trim() || missing
    }`,
    `${tx("Evidence reference", "مرجع الأدلة")}: ${
      data.evidenceLink.trim() || missing
    }`,
    `${tx("Files to attach manually", "ملفات يجب إرفاقها يدويًا")}: ${
      files.length
        ? files
            .map((file) => `${file.name} (${Math.ceil(file.size / 1024)} KB)`)
            .join(", ")
        : tx("None selected", "لم تُختر ملفات")
    }`,
    "",
    `${tx("Reporter Name", "اسم المُبلغ")}: ${data.name.trim()}`,
    `${tx("Preferred contact", "التواصل المفضل")}: ${
      contactMethods.find((item) => item.id === data.method)?.name
    }`,
    `${tx("Email", "البريد")}: ${data.email.trim() || missing}`,
    `${tx("Phone / WhatsApp", "الهاتف / واتساب")}: ${data.phone.trim() || missing}`,
    "",
    tx(
      "Prepared locally in browser. Not submitted to a ticket system. File contents are not transmitted; please attach original files manually in email or WhatsApp.",
      "أُعد البلاغ محلياً في المتصفح ولم يُقدم إلى نظام تذاكر. محتويات الملفات لم تُرفع؛ يرجى إرفاق النسخ الأصلية بشكل منفصل في البريد أو واتساب."
    ),
  ].join("\n");

  // Client-side file staging and deduplication logic
  const addFiles = (input: HTMLInputElement) => {
    const incoming = Array.from(input.files || []);
    input.value = ""; // Reset file input so reselecting works
    setFileError("");
    if (!incoming.length) return;

    const allowed = /\.(png|jpe?g|webp|pdf|mp4|webm|txt)$/i;
    if (incoming.some((file) => !allowed.test(file.name))) {
      setFileError(
        tx(
          "Allowed formats: PNG, JPG, WebP, PDF, MP4, WebM, or TXT. Previous selections preserved.",
          "الصيغ المسموحة: PNG أو JPG أو WebP أو PDF أو MP4 أو WebM أو TXT. تم الاحتفاظ بالاختيارات السابقة."
        )
      );
      return;
    }

    // Deduplication rule based on name, size, and lastModified
    const combined = [...files];
    for (const file of incoming) {
      const isDuplicate = combined.some(
        (old) =>
          old.name === file.name &&
          old.size === file.size &&
          old.lastModified === file.lastModified
      );
      if (!isDuplicate) {
        combined.push(file);
      }
    }

    if (combined.length > 5) {
      setFileError(
        tx(
          "Maximum 5 files allowed. Previous selections preserved.",
          "الحد الأقصى هو 5 ملفات. تم الاحتفاظ بالاختيارات السابقة."
        )
      );
      return;
    }

    if (combined.some((file) => file.size > 20 * 1024 * 1024)) {
      setFileError(
        tx(
          "Each file must be 20 MB or less. For larger evidence, share a secure cloud link.",
          "الحد الأقصى لكل ملف هو 20 ميغابايت. للأدلة الأكبر، شارك رابط تخزين سحابي آمن."
        )
      );
      return;
    }

    if (combined.reduce((sum, file) => sum + file.size, 0) > 40 * 1024 * 1024) {
      setFileError(
        tx(
          "Total files size exceeds 40 MB. For larger evidence, share a secure cloud link.",
          "إجمالي حجم الملفات يتجاوز 40 ميغابايت. للأدلة الأكبر، شارك رابط تخزين سحابي آمن."
        )
      );
      return;
    }

    setFiles(combined);
  };

  const removeFile = (index: number) => {
    setFiles((old) => old.filter((_, i) => i !== index));
    setFileError("");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setMessage(
        tx(
          "Report copied to clipboard. Paste it into email or WhatsApp and attach your staged files.",
          "نُسخ البلاغ إلى الحافظة. الصقه في البريد أو واتساب وأرفق ملفاتك الأصلية."
        )
      );
    } catch {
      setMessage(
        tx(
          "Clipboard copy unavailable. Select text manually or download TXT below.",
          "تعذر النسخ التلقائي. حدد النص يدوياً أو قم بتنزيل ملف TXT أدناه."
        )
      );
    }
  };

  const download = () => {
    const url = URL.createObjectURL(
      new Blob([draft], { type: "text/plain;charset=utf-8" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "pencil-issue-report.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const textField = (
    key: keyof ReportDetails,
    label: string,
    hint?: string,
    required = false,
    rows = 3
  ) => (
    <label className="block text-sm font-bold text-neutral-900">
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <textarea
        name={key}
        required={required}
        minLength={required ? 3 : undefined}
        maxLength={
          key === "expected" || key === "actual" || key === "reproduce"
            ? 1800
            : 1000
        }
        rows={rows}
        value={data[key]}
        onChange={(e) => update(key, e.target.value)}
        aria-describedby={hint ? `report-hint-${key}` : undefined}
        className={cn(control, "font-normal leading-relaxed")}
      />
      {hint && (
        <span
          id={`report-hint-${key}`}
          className="mt-1.5 block text-xs font-normal leading-5 text-neutral-500"
        >
          {hint}
        </span>
      )}
    </label>
  );

  return (
    <div className="relative rounded-3xl border border-neutral-200/90 bg-white shadow-xl shadow-neutral-900/5 transition-all">
      {/* ─── Wizard Step Navigation Strip ─────────────────────────────────── */}
      <nav
        aria-label={tx("Issue report steps", "خطوات بلاغ المشكلة")}
        className="grid grid-cols-2 border-b border-neutral-200 sm:grid-cols-5"
      >
        {steps.map((label, i) => {
          const isCurrent = i === step;
          const isCompleted = i < step;
          return (
            <div
              key={label}
              className={cn(
                "border-b border-e border-neutral-100 sm:border-b-0 transition-colors",
                isCurrent ? "bg-[#eef3ff]" : "bg-white hover:bg-neutral-50/60"
              )}
            >
              <button
                type="button"
                disabled={i > step}
                onClick={() => setStep(i)}
                aria-current={isCurrent ? "step" : undefined}
                className="flex min-h-[72px] w-full items-start gap-2.5 p-3.5 text-start text-xs font-bold disabled:cursor-default"
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all",
                    isCurrent
                      ? "bg-[#2057ff] text-white shadow-md shadow-blue-500/20"
                      : isCompleted
                      ? "bg-emerald-600 text-white"
                      : "border border-neutral-200 bg-neutral-100 text-neutral-500"
                  )}
                >
                  {isCompleted ? <Check size={13} strokeWidth={2.5} /> : i + 1}
                </span>
                <span
                  className={cn(
                    "leading-5",
                    isCurrent ? "text-[#2057ff]" : "text-neutral-700"
                  )}
                >
                  {label}
                </span>
              </button>
            </div>
          );
        })}
      </nav>

      {/* ─── Wizard Content Container ─────────────────────────────────────── */}
      <div className="p-6 sm:p-8 md:p-10">
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50/50 px-3 py-1 font-mono text-xs font-semibold text-[#2057ff]"
            dir="ltr"
          >
            0{step + 1} / 05
          </span>
          <span className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2057ff] animate-pulse" />
            {tx("Local staging • No server upload", "مسودة محلية • دون رفع إلى خادم")}
          </span>
        </div>

        <h3
          ref={heading}
          tabIndex={-1}
          className="mt-4 text-2xl font-black tracking-tight text-neutral-950 focus:outline-none md:text-3xl"
        >
          {[
            tx("Which service or product is affected?", "أي خدمة أو منتج تأثر بالمشكلة؟"),
            tx("What happened, and what was expected?", "ما الذي حدث، وما النتيجة المتوقعة؟"),
            tx("Add evidence, technical clues and contact details.", "أضف الأدلة والملاحظات التقنية وبيانات التواصل."),
            tx("Review the complete case brief.", "راجع ملخص الحالة وتأكد من التفاصيل."),
            tx("Ready to send through your preferred channel.", "جاهز للإرسال عبر قناة التواصل المناسبة."),
          ][step]}
        </h3>

        <form
          onInputCapture={(e) => {
            const field = e.target;
            if (
              field instanceof HTMLInputElement ||
              field instanceof HTMLTextAreaElement
            ) {
              field.setCustomValidity("");
            }
          }}
          onSubmit={(e) => {
            e.preventDefault();
            // Validate required fields
            for (const item of Array.from(e.currentTarget.elements)) {
              if (
                (item instanceof HTMLInputElement ||
                  item instanceof HTMLTextAreaElement) &&
                item.required &&
                !item.value.trim()
              ) {
                item.setCustomValidity(
                  tx(
                    "Please enter valid information, not spaces alone.",
                    "يرجى إدخال معلومات صحيحة، لا مسافات فقط."
                  )
                );
              }
            }
            if (e.currentTarget.reportValidity() && step < 4) {
              setStep(step + 1);
            }
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
            >
              {/* ─────────────────────────────────────────────────────────────
                  STEP 01: COMPACT CATEGORIZED SERVICE SELECTOR
              ───────────────────────────────────────────────────────────── */}
              {step === 0 && (
                <div className="mt-6 space-y-6">
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {tx(
                      "Select the service closest to where the disruption appeared. You do not need to name the technical cause. Common information is preserved when you switch services; each service retains its own context while this page is open.",
                      "اختر الخدمة الأقرب لموضع الخلل. لا تحتاج إلى تشخيص السبب التقني. يتم الاحتفاظ بالبيانات المشتركة عند تغيير الخدمة، ويحتفظ كل مجال بسياقه الخاص ما دامت الصفحة مفتوحة."
                    )}
                  </p>

                  {/* Active Selected Service Display Card with Popover Dropdown */}
                  <div ref={serviceDropdownRef} className="relative">
                    <div className="rounded-2xl border-2 border-[#2057ff] bg-blue-50/30 p-5 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="font-mono text-xs font-bold text-[#2057ff]">
                            #{selected.id} • {tx("SELECTED SERVICE", "الخدمة المحددة")}
                          </span>
                          <h4 className="mt-1 text-lg font-bold text-neutral-950">
                            {issueText(selected.name, rtl)}
                          </h4>
                          <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                            {issueText(selected.line, rtl)}
                          </p>
                        </div>

                        <button
                          type="button"
                          id="browse-services-btn"
                          onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                          aria-expanded={isServiceDropdownOpen}
                          aria-haspopup="dialog"
                          aria-controls="service-popover-panel"
                          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-neutral-950 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#2057ff] cursor-pointer"
                        >
                          <SlidersHorizontal size={13} className="opacity-75" />
                          <span>{tx("Browse All 13 Services", "استعراض كافة الخدمات (13)")}</span>
                          <ChevronDown
                            size={14}
                            className={cn(
                              "transition-transform duration-200",
                              isServiceDropdownOpen && "rotate-180"
                            )}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Accessible Popover Panel Exposing All 13 Categorized Services */}
                    <AnimatePresence>
                      {isServiceDropdownOpen && (
                        <motion.div
                          id="service-popover-panel"
                          role="dialog"
                          aria-label={
                            rtl ? "قائمة اختيار الخدمة المتأثرة" : "Select affected service"
                          }
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute inset-x-0 top-full z-40 mt-2 max-h-[75vh] overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xl shadow-blue-950/15 backdrop-blur-xl sm:p-5"
                        >
                          {/* Header of Popover */}
                          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                            <div>
                              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2057FF]">
                                {tx("ALL 13 REPORT SERVICES", "كافة خدمات الإبلاغ الـ 13")}
                              </p>
                              <p className="text-xs text-neutral-500 font-medium mt-0.5">
                                {tx(
                                  "Switching services preserves common case details",
                                  "تغيير الخدمة يحافظ على البيانات المشتركة للبلاغ"
                                )}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setIsServiceDropdownOpen(false)}
                              aria-label={tx("Close", "إغلاق")}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition cursor-pointer"
                            >
                              <X size={15} />
                            </button>
                          </div>

                          {/* Quick search input */}
                          <div className="relative mt-3 mb-3">
                            <Search
                              size={14}
                              className="absolute start-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                            />
                            <input
                              type="text"
                              value={serviceSearch}
                              onChange={(e) => setServiceSearch(e.target.value)}
                              placeholder={tx("Quick search 13 services...", "بحث سريع بين الخدمات الـ 13...")}
                              className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 ps-9 pe-8 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-[#2057ff] focus:bg-white focus:outline-none"
                            />
                            {serviceSearch && (
                              <button
                                type="button"
                                onClick={() => setServiceSearch("")}
                                className="absolute end-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5"
                                aria-label={tx("Clear search", "مسح البحث")}
                              >
                                <X size={13} />
                              </button>
                            )}
                          </div>

                          {/* Filtered Search Results or 3-Cluster Grid */}
                          {serviceSearch.trim() ? (
                            <div className="space-y-1.5 max-h-[48vh] overflow-y-auto pe-1">
                              {filteredServices.length === 0 ? (
                                <div className="py-8 text-center text-xs text-neutral-400">
                                  {tx("No services match your search.", "لا توجد خدمات مطابقة لبحثك.")}
                                </div>
                              ) : (
                                filteredServices.map((svc) => {
                                  const isCurrent = service === svc.id;
                                  return (
                                    <button
                                      key={svc.id}
                                      type="button"
                                      onClick={() => {
                                        onServiceChange(svc.id);
                                        setIsServiceDropdownOpen(false);
                                        setServiceSearch("");
                                      }}
                                      className={cn(
                                        "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start transition cursor-pointer",
                                        isCurrent
                                          ? "bg-[#2057FF] text-white shadow-sm"
                                          : "border border-neutral-100 bg-neutral-50/60 hover:bg-neutral-100/90 text-neutral-700"
                                      )}
                                    >
                                      <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2">
                                          <span
                                            className={cn(
                                              "font-mono text-[10px] font-bold uppercase",
                                              isCurrent ? "text-white/80" : "text-[#2057FF]"
                                            )}
                                          >
                                            #{svc.id}
                                          </span>
                                          <span
                                            className={cn(
                                              "text-xs font-bold truncate",
                                              isCurrent ? "text-white" : "text-neutral-900"
                                            )}
                                          >
                                            {issueText(svc.name, rtl)}
                                          </span>
                                        </div>
                                        <p
                                          className={cn(
                                            "text-[11px] truncate mt-0.5",
                                            isCurrent ? "text-white/80" : "text-neutral-500"
                                          )}
                                        >
                                          {issueText(svc.line, rtl)}
                                        </p>
                                      </div>
                                      {isCurrent && (
                                        <Check size={14} className="shrink-0 text-white" />
                                      )}
                                    </button>
                                  );
                                })
                              )}
                            </div>
                          ) : (
                            <div className="grid gap-4 sm:grid-cols-3 max-h-[52vh] overflow-y-auto pe-1">
                              {SERVICE_CLUSTERS.map((cluster) => (
                                <div key={cluster.id} className="space-y-2">
                                  <div className="px-1">
                                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                      {rtl ? cluster.ar : cluster.en}
                                    </p>
                                  </div>
                                  <div className="space-y-1.5">
                                    {cluster.services.map((sId) => {
                                      const svc = REPORT_SERVICES.find((item) => item.id === sId);
                                      if (!svc) return null;
                                      const isCurrent = service === svc.id;
                                      return (
                                        <button
                                          key={svc.id}
                                          type="button"
                                          onClick={() => {
                                            onServiceChange(svc.id);
                                            setIsServiceDropdownOpen(false);
                                          }}
                                          className={cn(
                                            "flex w-full items-center justify-between gap-2.5 rounded-xl px-2.5 py-2 text-start transition cursor-pointer",
                                            isCurrent
                                              ? "bg-[#2057FF] text-white shadow-sm"
                                              : "border border-neutral-100/90 bg-neutral-50/50 hover:bg-neutral-100 text-neutral-700"
                                          )}
                                        >
                                          <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-1.5">
                                              <span
                                                className={cn(
                                                  "font-mono text-[9px] font-bold uppercase",
                                                  isCurrent ? "text-white/80" : "text-[#2057FF]"
                                                )}
                                              >
                                                #{svc.id}
                                              </span>
                                              <p
                                                className={cn(
                                                  "text-xs font-bold truncate",
                                                  isCurrent ? "text-white" : "text-neutral-900"
                                                )}
                                              >
                                                {issueText(svc.name, rtl)}
                                              </p>
                                            </div>
                                            <p
                                              className={cn(
                                                "text-[10px] leading-tight truncate mt-0.5",
                                                isCurrent ? "text-white/80" : "text-neutral-400"
                                              )}
                                            >
                                              {issueText(svc.line, rtl)}
                                            </p>
                                          </div>
                                          {isCurrent && (
                                            <Check size={13} className="shrink-0 text-white" />
                                          )}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Clustered Quick Service Chips */}
                  <div className="space-y-4 pt-2">
                    {SERVICE_CLUSTERS.map((cluster) => (
                      <div
                        key={cluster.id}
                        className="rounded-2xl border border-neutral-200/90 bg-neutral-50/50 p-4"
                      >
                        <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-3">
                          {rtl ? cluster.ar : cluster.en}
                        </p>
                        <div className="grid gap-2.5 sm:grid-cols-2">
                          {cluster.services.map((sId) => {
                            const svc = REPORT_SERVICES.find(
                              (item) => item.id === sId
                            );
                            if (!svc) return null;
                            const isCurrent = service === svc.id;
                            return (
                              <button
                                key={svc.id}
                                type="button"
                                onClick={() => onServiceChange(svc.id)}
                                className={cn(
                                  "flex items-start gap-3 rounded-xl border p-3 text-start transition-all",
                                  isCurrent
                                    ? "border-[#2057ff] bg-white shadow-xs ring-1 ring-[#2057ff]"
                                    : "border-neutral-200/80 bg-white/70 hover:border-neutral-300 hover:bg-white"
                                )}
                              >
                                <span
                                  className={cn(
                                    "mt-0.5 flex h-4 w-4 shrink-0 rounded-full border transition-all items-center justify-center",
                                    isCurrent
                                      ? "border-[#2057ff] bg-[#2057ff]"
                                      : "border-neutral-300 bg-white"
                                  )}
                                >
                                  {isCurrent && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                  )}
                                </span>
                                <div className="min-w-0">
                                  <span className="block text-xs font-bold text-neutral-950 truncate">
                                    {issueText(svc.name, rtl)}
                                  </span>
                                  <span className="block text-[11px] text-neutral-500 truncate mt-0.5">
                                    {issueText(svc.line, rtl)}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  STEP 02: DESCRIBE THE ISSUE
              ───────────────────────────────────────────────────────────── */}
              {step === 1 && (
                <div className="mt-6 space-y-7">
                  {/* Selected service reminder */}
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-50/50 p-4 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2057ff]">
                        {tx("REPORTING SERVICE", "مجال الإبلاغ")}
                      </span>
                      <p className="text-sm font-bold text-neutral-950 mt-0.5">
                        {issueText(selected.name, rtl)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(0)}
                      className="text-xs font-bold text-[#2057ff] hover:underline"
                    >
                      {tx("Change", "تغيير")}
                    </button>
                  </div>

                  {/* Section A: Project & Issue Type */}
                  <div className="space-y-4 rounded-2xl border border-neutral-200/90 bg-white p-5">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {tx("1. PROJECT CONTEXT", "1. سياق المشروع")}
                    </p>

                    <label className="block text-sm font-bold text-neutral-900">
                      <span>{tx("Affected project or product *", "المشروع أو المنتج المتأثر *")}</span>
                      <input
                        name="project"
                        required
                        maxLength={200}
                        value={data.project}
                        onChange={(e) => update("project", e.target.value)}
                        placeholder={tx("e.g. Client portal, SuperFeliz suite, Marketing site", "مثال: بوابة العملاء، منتجات سوبر فيليز، موقع التسويق")}
                        className={control}
                      />
                    </label>

                    <label className="block text-sm font-bold text-neutral-900">
                      <span>{tx("Issue type *", "نوع المشكلة *")}</span>
                      <select
                        name="issueType"
                        required
                        value={local.type}
                        onChange={(e) => updateSpecific("type", e.target.value)}
                        className={control}
                      >
                        <option value="">
                          {tx("Choose what you are observing", "اختر ما تلاحظه في النظام")}
                        </option>
                        {selected.types.map((item) => (
                          <option key={item.en} value={item.en}>
                            {issueText(item, rtl)}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block text-sm font-bold text-neutral-900">
                      <span>{tx("URL, screen or file reference", "الرابط أو الشاشة أو مرجع الملف")}</span>
                      <input
                        name="location"
                        maxLength={500}
                        value={data.location}
                        onChange={(e) => update("location", e.target.value)}
                        placeholder="https://... or /dashboard/settings"
                        className={cn(control, "font-mono text-xs")}
                        dir="ltr"
                      />
                    </label>

                    <label className="block text-sm font-bold text-neutral-900">
                      <span>{issueText(selected.question, rtl)}</span>
                      <textarea
                        name="serviceContext"
                        rows={3}
                        maxLength={1200}
                        value={local.detail}
                        onChange={(e) => updateSpecific("detail", e.target.value)}
                        aria-describedby="report-service-hint"
                        className={cn(control, "font-normal leading-relaxed")}
                      />
                      <span
                        id="report-service-hint"
                        className="mt-1.5 block text-xs font-normal leading-5 text-neutral-500"
                      >
                        {issueText(selected.hint, rtl)}
                      </span>
                    </label>
                  </div>

                  {/* Section B: Expected vs. Actual Behaviour */}
                  <div className="space-y-4 rounded-2xl border border-neutral-200/90 bg-white p-5">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {tx("2. BEHAVIOUR & SYMPTOMS", "2. السلوك والأعراض")}
                    </p>

                    {textField(
                      "expected",
                      tx("What did you expect to happen? *", "ما السلوك المتوقع أن يحدث؟ *"),
                      tx(
                        "The action, transaction, or screen state that should complete normally.",
                        "الإجراء أو المعاملة أو حالة الشاشة التي يفترض أن تكتمل بشكل طبيعي."
                      ),
                      true
                    )}

                    {textField(
                      "actual",
                      tx("What actually happened? *", "ما الذي حدث فعلياً؟ *"),
                      tx(
                        "Describe the visible result, error, or stall. Focus on observations, not theories.",
                        "صف النتيجة الظاهرة أو التوقف أو رسالة الخطأ. ركز على ما حدث، لا على الافتراضات."
                      ),
                      true
                    )}

                    <div className="grid gap-4 sm:grid-cols-2 pt-2">
                      <label className="text-sm font-bold text-neutral-900">
                        <span>{tx("When did it start?", "متى بدأت الحالة؟")}</span>
                        <input
                          name="started"
                          maxLength={150}
                          value={data.started}
                          onChange={(e) => update("started", e.target.value)}
                          placeholder={tx("e.g. Today around 2:00 PM Cairo time", "مثال: اليوم حوالي الساعة 2:00 ظهراً بتوقيت القاهرة")}
                          className={control}
                        />
                      </label>

                      <label className="text-sm font-bold text-neutral-900">
                        <span>{tx("How often does it happen?", "كم مرة تحدث؟")}</span>
                        <select
                          name="frequency"
                          value={data.frequency}
                          onChange={(e) => update("frequency", e.target.value)}
                          className={control}
                        >
                          {frequencies.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    {selected.device && (
                      <label className="block text-sm font-bold text-neutral-900 pt-2">
                        <span>{tx("Device / browser / operating environment", "الجهاز / المتصفح / بيئة التشغيل")}</span>
                        <input
                          name="device"
                          maxLength={250}
                          value={data.device}
                          onChange={(e) => update("device", e.target.value)}
                          placeholder={tx("e.g. Chrome 124 on macOS, Safari on iPhone 15", "مثال: Chrome على macOS، أو Safari على iPhone 15")}
                          className={control}
                        />
                      </label>
                    )}
                  </div>

                  {/* Section C: Customer-Reported Severity & Impact */}
                  <div className="space-y-4 rounded-2xl border border-neutral-200/90 bg-white p-5">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {tx("3. OPERATIONAL IMPACT", "3. الأثر التشغيلي")}
                    </p>

                    <fieldset>
                      <legend className="text-sm font-bold text-neutral-900 mb-2">
                        {tx("Customer-reported impact level:", "مستوى التأثير من جانبك:")}
                      </legend>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {ISSUE_SEVERITY.map((item) => {
                          const isSelected = severity === item.id;
                          return (
                            <label
                              key={item.id}
                              className={cn(
                                "flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all",
                                isSelected
                                  ? "border-neutral-950 bg-neutral-50 shadow-xs ring-1 ring-neutral-950"
                                  : "border-neutral-200/80 bg-white hover:bg-neutral-50/50"
                              )}
                            >
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <input
                                    type="radio"
                                    name="severity"
                                    value={item.id}
                                    checked={isSelected}
                                    onChange={() => setSeverity(item.id)}
                                    className="h-4 w-4 accent-neutral-950"
                                  />
                                  <span
                                    className="h-2 w-2 rounded-full"
                                    style={{ backgroundColor: item.colour }}
                                  />
                                </div>
                                <span
                                  className="block text-xs font-bold"
                                  style={{ color: item.colour }}
                                >
                                  {issueText(item.name, rtl)}
                                </span>
                                <span className="mt-1 block text-[11px] leading-relaxed text-neutral-600">
                                  {issueText(item.line, rtl)}
                                </span>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    {textField(
                      "impact",
                      tx("Who is affected, and what operations cannot continue?", "من المتأثر، وما الأعمال التي تعطلت؟"),
                      tx(
                        "Specify affected user roles, active customers, transactions, or impending deadlines.",
                        "حدد أدوار المستخدمين، أو العملاء، أو المعاملات المالية، أو المواعيد النهائية المتأثرة."
                      )
                    )}

                    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 text-xs text-neutral-600 leading-relaxed">
                      {tx(
                        "Your selected impact level is included in the prepared report. Our team assesses it after you send the report through an available contact channel. It does not trigger an automated alert or bypass contractual coverage.",
                        "تحديد مستوى الأثر يدرج ضمن ملخص البلاغ المعد. ويقوم فريقنا بتقييمه بعد إرسالك البلاغ عبر إحدى قنوات التواصل المتاحة. ولا يعني ذلك إطلاق تنبيه آلي أو تجاوز نطاق التغطية التعاقدية."
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  STEP 03: EVIDENCE & CONTACT PREFERENCES
              ───────────────────────────────────────────────────────────── */}
              {step === 2 && (
                <div className="mt-6 space-y-7">
                  {/* Part A: Technical Clues & File Staging */}
                  <div className="space-y-4 rounded-2xl border border-neutral-200/90 bg-white p-5">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {tx("1. TECHNICAL CLUES & EVIDENCE", "1. الأدلة والملاحظات التقنية")}
                    </p>

                    <div className="rounded-xl border border-blue-500/15 bg-blue-50/40 p-4 text-xs text-neutral-700 leading-relaxed">
                      {issueText(selected.evidence, rtl)}
                    </div>

                    {textField(
                      "reproduce",
                      tx("Steps to reproduce", "خطوات إعادة الحدوث"),
                      tx(
                        "List numbered actions from starting screen to error (e.g. 1. Go to settings, 2. Click export).",
                        "رقم الخطوات بدءاً من الشاشة الأولى حتى ظهور المشكلة (مثال: 1. الذهاب للإعدادات، 2. الضغط على تصدير)."
                      ),
                      false,
                      4
                    )}

                    {textField(
                      "changed",
                      tx("Did anything change before it appeared?", "هل تغير شيء قبل ظهورها؟"),
                      tx(
                        "A recent release, setting change, content update, permission adjustment, or external tool update.",
                        "تحديث برمجيات، تعديل إعدادات، تغيير صلاحيات، أو تحديث في أداة خارجية."
                      )
                    )}

                    {textField(
                      "error",
                      tx("Redacted error message or status code", "رسالة الخطأ المنقحة أو كود الاستجابة"),
                      tx(
                        "Visible text or HTTP code. Remove passwords, tokens, API keys, and customer records.",
                        "النص الظاهر أو كود الخطأ. احذف كلمات المرور ورموز الدخول ومفاتيح API وسجلات العملاء."
                      )
                    )}

                    {/* Staged File Picker */}
                    <div className="pt-2">
                      <label className="block text-sm font-bold text-neutral-900 mb-1.5">
                        {tx("Staged screenshots or logs (Local staging only)", "اللقطات والملفات المرفقة (تجهيز محلي فقط)")}
                      </label>

                      {/* Amber transparency disclaimer */}
                      <div className="rounded-xl border border-amber-500/20 bg-amber-50/60 p-3.5 text-xs text-amber-900 leading-relaxed mb-3">
                        <strong className="block mb-0.5">
                          {tx("Evidence Staging Notice:", "تنبيه بخصوص إرفاق الملفات:")}
                        </strong>
                        {tx(
                          "Selected files remain on your device. Their names and sizes will be listed in your report, but you must attach the original files manually when sending your message.",
                          "الملفات المحددة هنا تبقى على جهازك. سيتم إدراج أسمائها وأحجامها في البلاغ فقط، ويجب عليك إرفاق الملفات الفعلية يدوياً عند إرسال الرسالة."
                        )}
                      </div>

                      <label
                        htmlFor="report-files"
                        className="group flex min-h-[100px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50/50 p-6 text-center transition hover:border-[#2057ff] hover:bg-blue-50/20"
                      >
                        <FilePlus2 size={24} className="text-[#2057ff] mb-2" />
                        <span className="text-xs font-bold text-neutral-900">
                          {tx("Click to select screenshots or log files", "اضغط لاختيار لقطات الشاشة أو ملفات السجل")}
                        </span>
                        <span className="text-[11px] text-neutral-500 mt-1">
                          PNG, JPG, WebP, PDF, MP4, WebM, TXT (Max 5 files, 20 MB each, 40 MB total)
                        </span>
                        <input
                          ref={fileInputRef}
                          id="report-files"
                          type="file"
                          multiple
                          accept=".png,.jpg,.jpeg,.webp,.pdf,.mp4,.webm,.txt"
                          onChange={(e) => addFiles(e.currentTarget)}
                          className="sr-only"
                        />
                      </label>

                      {fileError && (
                        <p role="alert" className="mt-2 text-xs font-bold text-[#a52b38]">
                          {fileError}
                        </p>
                      )}

                      {/* Staged Files List */}
                      {files.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {files.map((file, i) => (
                            <li
                              key={`${file.name}-${file.size}-${file.lastModified}`}
                              className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200/90 bg-neutral-50 p-3"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <FileText size={16} className="text-[#2057ff] shrink-0" />
                                <div className="min-w-0">
                                  <span className="block text-xs font-bold text-neutral-900 truncate" dir="auto">
                                    {file.name}
                                  </span>
                                  <span className="block font-mono text-[10px] text-neutral-500" dir="ltr">
                                    {file.size > 1024 * 1024
                                      ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
                                      : `${Math.ceil(file.size / 1024)} KB`}
                                  </span>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                title={tx("Remove file", "إزالة الملف")}
                                aria-label={`${tx("Remove", "إزالة")} ${file.name}`}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition hover:border-red-500 hover:text-red-600"
                              >
                                <X size={14} />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <label className="block text-sm font-bold text-neutral-900 pt-2">
                      <span>{tx("Evidence link or storage reference", "رابط الأدلة أو التخزين السحابي")}</span>
                      <input
                        name="evidenceLink"
                        maxLength={600}
                        value={data.evidenceLink}
                        onChange={(e) => update("evidenceLink", e.target.value)}
                        placeholder="https://drive.google.com/... or https://loom.com/..."
                        className={cn(control, "font-mono text-xs")}
                        dir="ltr"
                      />
                      <span className="mt-1.5 block text-xs font-normal leading-5 text-neutral-500">
                        {tx(
                          "Optional. Ensure appropriate permissions are configured without exposing private keys.",
                          "اختياري. تأكد من ضبط صلاحيات الوصول دون كشف أي بيانات حساسة."
                        )}
                      </span>
                    </label>
                  </div>

                  {/* Part B: Contact Information */}
                  <div className="space-y-4 rounded-2xl border border-neutral-200/90 bg-white p-5">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {tx("2. CONTACT & FOLLOW-UP", "2. بيانات التواصل والمتابعة")}
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="text-sm font-bold text-neutral-900">
                        <span>{tx("Your name *", "الاسم *")}</span>
                        <input
                          name="name"
                          autoComplete="name"
                          required
                          maxLength={100}
                          value={data.name}
                          onChange={(e) => update("name", e.target.value)}
                          className={control}
                        />
                      </label>

                      <label className="text-sm font-bold text-neutral-900">
                        <span>{tx("Preferred contact channel", "قناة التواصل المفضلة")}</span>
                        <select
                          name="method"
                          value={data.method}
                          onChange={(e) => update("method", e.target.value)}
                          className={control}
                        >
                          {contactMethods.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="text-sm font-bold text-neutral-900">
                        <span>
                          {tx("Email", "البريد الإلكتروني")}
                          {data.method === "email" ? " *" : ""}
                        </span>
                        <input
                          name="email"
                          type="email"
                          autoComplete="email"
                          dir="ltr"
                          required={data.method === "email"}
                          maxLength={200}
                          value={data.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={control}
                        />
                      </label>

                      <label className="text-sm font-bold text-neutral-900">
                        <span>
                          {tx("Phone / WhatsApp", "الهاتف / واتساب")}
                          {data.method !== "email" ? " *" : ""}
                        </span>
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          dir="ltr"
                          required={data.method !== "email"}
                          pattern="[+0-9() .-]{7,30}"
                          maxLength={30}
                          value={data.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+20 1..."
                          className={control}
                        />
                      </label>
                    </div>

                    <p className="text-xs text-neutral-500 leading-relaxed pt-2">
                      {tx(
                        "Remove passwords, credit card numbers, and API tokens before submitting. Drafts are held in local browser memory and are lost if you close the page.",
                        "احرص على تنقيح كلمات المرور وبيانات البطاقات ومفاتيح API. تحفظ المسودة في ذاكرة المتصفح فقط وتفقد عند إغلاق الصفحة."
                      )}
                    </p>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  STEP 04: REVIEW DRAFT
              ───────────────────────────────────────────────────────────── */}
              {step === 3 && (
                <div className="mt-6 space-y-6">
                  {/* Amber Local State Warning */}
                  <div className="rounded-2xl border border-amber-500/20 bg-amber-50/60 p-4">
                    <p className="text-xs font-bold text-amber-950">
                      {tx("Report prepared locally. It has not been sent or submitted to a ticket system.", "تم تجهيز البلاغ محلياً. لم يتم إرساله أو تقديمه إلى نظام تذاكر بعد.")}
                    </p>
                  </div>

                  {/* Summary Metric Cards */}
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    <div className="rounded-xl border border-neutral-200/90 bg-neutral-50 p-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        {tx("AFFECTED SERVICE", "الخدمة المتأثرة")}
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block truncate">
                        {issueText(selected.name, rtl)}
                      </span>
                    </div>

                    <div className="rounded-xl border border-neutral-200/90 bg-neutral-50 p-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        {tx("PROJECT / PRODUCT", "المشروع / المنتج")}
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block truncate">
                        {data.project || missing}
                      </span>
                    </div>

                    <div className="rounded-xl border border-neutral-200/90 bg-neutral-50 p-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        {tx("REPORTED IMPACT", "حجم التأثير")}
                      </span>
                      <span
                        className="text-xs font-bold block"
                        style={{ color: severityItem.colour }}
                      >
                        {issueText(severityItem.name, rtl)}
                      </span>
                    </div>

                    <div className="rounded-xl border border-neutral-200/90 bg-neutral-50 p-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        {tx("ISSUE TYPE", "نوع المشكلة")}
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block truncate">
                        {typeName ? issueText(typeName, rtl) : missing}
                      </span>
                    </div>

                    <div className="rounded-xl border border-neutral-200/90 bg-neutral-50 p-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        {tx("CONTACT CHANNEL", "قناة التواصل")}
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block truncate">
                        {contactMethods.find((item) => item.id === data.method)?.name}
                      </span>
                    </div>

                    <div className="rounded-xl border border-neutral-200/90 bg-neutral-50 p-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        {tx("EVIDENCE STAGED", "الأدلة المجهزة")}
                      </span>
                      <span className="text-xs font-bold text-neutral-900 block truncate">
                        {files.length
                          ? tx(`${files.length} file(s) to attach`, `${files.length} ملفات للإرفاق`)
                          : tx("No files staged", "لا توجد ملفات")}
                      </span>
                    </div>
                  </div>

                  {/* Formatted Plaintext Draft Preview */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                        {tx("Formatted Plaintext Brief", "نص البلاغ المنسق")}
                      </label>
                      <button
                        type="button"
                        onClick={copy}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2057ff] hover:underline"
                      >
                        <Copy size={13} />
                        <span>{copied ? tx("Copied", "تم النسخ") : tx("Copy text", "نسخ النص")}</span>
                      </button>
                    </div>
                    <textarea
                      readOnly
                      rows={11}
                      value={draft}
                      className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs leading-relaxed text-neutral-800 focus:outline-none"
                    />
                  </div>

                  {/* Jump back editing actions */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-neutral-900 underline hover:text-[#2057ff]"
                    >
                      {tx("Edit issue details & behaviour", "تعديل تفاصيل وسلوك المشكلة")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-bold text-neutral-900 underline hover:text-[#2057ff]"
                    >
                      {tx("Edit evidence & contact details", "تعديل الأدلة وبيانات التواصل")}
                    </button>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────────────────
                  STEP 05: SHARE REPORT (FINAL DISPATCH)
              ───────────────────────────────────────────────────────────── */}
              {step === 4 && (
                <div className="mt-6 space-y-6">
                  {/* Amber Delivery Disclaimer */}
                  <div className="rounded-2xl border border-amber-500/20 bg-amber-50/70 p-5">
                    <h4 className="text-base font-bold text-amber-950">
                      {tx("Prepared locally. Not yet sent.", "تم تجهيز البلاغ محلياً. لم يُرسل بعد.")}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-amber-900">
                      {tx(
                        "There is no connected ticket API on this page. Choose an available delivery channel below to send your report directly to our Cairo team. If you staged screenshots or logs, please attach the original files manually in your chosen application.",
                        "لا توجد واجهة تذاكر متصلة بهذه الصفحة. اختر إحدى قنوات التواصل المتاحة أدناه لإرسال بلاغك مباشرة إلى فريقنا في القاهرة. وإذا قمت بتجهيز لقطات أو ملفات، يرجى إرفاق النسخ الأصلية يدوياً في التطبيق المختار."
                      )}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={`mailto:help@dipencil.com?subject=${encodeURIComponent(
                        "Pencil Issue • " + selected.name.en + " • " + data.project.slice(0, 60)
                      )}&body=${encodeURIComponent(draft)}`}
                      className="group flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#2057ff] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
                    >
                      <Mail size={16} />
                      <span>{tx("Open in Email (help@dipencil.com)", "إرسال عبر البريد (help@dipencil.com)")}</span>
                    </a>

                    <a
                      href={`https://wa.me/201003778273?text=${encodeURIComponent(draft)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-900 shadow-xs transition hover:border-emerald-600 hover:text-emerald-700"
                    >
                      <WhatsAppIcon size={16} className="text-emerald-600" />
                      <span>{tx("Continue on WhatsApp", "المتابعة عبر واتساب")}</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <button
                      type="button"
                      onClick={copy}
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-bold text-neutral-800 transition hover:bg-white hover:border-neutral-300"
                    >
                      {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      <span>{copied ? tx("Copied to clipboard", "تم النسخ للحافظة") : tx("Copy report text", "نسخ نص البلاغ")}</span>
                    </button>

                    <button
                      type="button"
                      onClick={download}
                      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-bold text-neutral-800 transition hover:bg-white hover:border-neutral-300"
                    >
                      <Download size={14} />
                      <span>{tx("Download report as .txt", "تنزيل البلاغ كملف .txt")}</span>
                    </button>
                  </div>

                  {message && (
                    <p role="status" className="text-xs font-bold text-neutral-700">
                      {message}
                    </p>
                  )}

                  {/* Read-only Draft Review */}
                  <div className="pt-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                      {tx("Complete Dispatch Preview", "معاينة البلاغ النهائي")}
                    </label>
                    <textarea
                      readOnly
                      rows={10}
                      value={draft}
                      className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs leading-relaxed text-neutral-800 focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* ─── Wizard Footer Controls ───────────────────────────────────── */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6">
            <button
              type="button"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
              className="inline-flex min-h-11 items-center gap-2 text-xs font-bold text-neutral-600 transition hover:text-neutral-950 disabled:opacity-30 disabled:hover:text-neutral-600"
            >
              <Back size={15} />
              <span>{tx("Back", "السابق")}</span>
            </button>

            {step < 4 ? (
              <button
                type="submit"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-neutral-950 px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#2057ff] hover:shadow-blue-500/20"
              >
                <span>{step === 3 ? tx("Continue to Share", "المتابعة للإرسال") : tx("Continue", "التالي")}</span>
                <Next size={15} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(3)}
                className="text-xs font-bold text-neutral-700 underline hover:text-[#2057ff]"
              >
                {tx("Back to review", "العودة إلى المراجعة")}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
