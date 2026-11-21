"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  Copy,
  Download,
  Mail,
  PackageCheck,
  Search,
  SlidersHorizontal,
  Sparkles,
  UserRoundCheck,
  Users,
  Wrench,
  X,
  AlertCircle,
  Repeat,
  FileCheck2,
  Pause,
  Play,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import {
  CLIENT_MODELS,
  CLIENT_REQUESTS,
  CLIENT_WORKFLOW,
  clientText,
} from "@/lib/support/customer/pencil-client-partnership";
import { cn } from "@/lib/utils";

// ─── Request Categories Grouping (12 Preserved Intents) ───────────────────────
export const CLIENT_REQUEST_CATEGORIES = [
  {
    id: "evolution",
    title: { en: "Product Evolution & Expansion", ar: "تطوير المنتج والتوسعة" },
    desc: {
      en: "Feature iterations, user journeys, additional phases, and reopened deliverables.",
      ar: "تحسينات التجربة، المراحل الإضافية، وتوسيع نطاق الأعمال المسلّمة.",
    },
    icon: Sparkles,
    intentIds: ["product", "phase", "reopen"] as const,
  },
  {
    id: "retainer",
    title: { en: "Retainers & Recurring Work", ar: "التعاقد المستمر والإنتاج الدوري" },
    desc: {
      en: "Monthly capacity, active project follow-up, and recurring creative production.",
      ar: "ساعات العمل المحجوزة، متابعة المشروعات النشطة، والإنتاج الإبداعي المستمر.",
    },
    icon: Repeat,
    intentIds: ["subscription", "followup", "creative"] as const,
  },
  {
    id: "commercial",
    title: { en: "Commercial & Administrative", ar: "المعاملات التجارية والإدارية" },
    desc: {
      en: "Stage approvals, brand source files, licenses, and cross-team coordination.",
      ar: "المراجعات، الاعتمادات الموثقة، طلبات الأصول، والتنسيق الإداري.",
    },
    icon: FileCheck2,
    intentIds: ["approval", "files", "coordination"] as const,
  },
  {
    id: "maintenance",
    title: { en: "Maintenance & Operations", ar: "الصيانة والتشغيل" },
    desc: {
      en: "Website updates, operational maintenance coordination, and time-sensitive tasks.",
      ar: "تحديثات المواقع، تنسيق الصيانة التشغيلية، والمهام ذات الأولوية.",
    },
    icon: Wrench,
    intentIds: ["website", "maintenance", "priority"] as const,
  },
] as const;

// ─── Engagement Models Interactive Tablist ───────────────────────────────────
export function ClientSupportModels({
  rtl,
  selected,
  onSelect,
}: {
  rtl: boolean;
  selected: number;
  onSelect: (index: number) => void;
}) {
  const item = CLIENT_MODELS[selected] || CLIENT_MODELS[0];

  return (
    <div className="space-y-8">
      {/* Tablist with arrow navigation */}
      <div
        role="tablist"
        aria-label={rtl ? "نماذج التعاون المستمر" : "Continuing support models"}
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6"
      >
        {CLIENT_MODELS.map((model, index) => {
          const isSelected = selected === index;
          return (
            <button
              key={model.id}
              role="tab"
              id={"client-model-" + model.id}
              aria-selected={isSelected}
              aria-controls="client-model-panel"
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onSelect(index)}
              onKeyDown={(event) => {
                if (
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
                )
                  return;
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                    ? CLIENT_MODELS.length - 1
                    : (index +
                        (event.key === (rtl ? "ArrowLeft" : "ArrowRight")
                          ? 1
                          : -1) +
                        CLIENT_MODELS.length) %
                      CLIENT_MODELS.length;
                onSelect(next);
                document
                  .getElementById("client-model-" + CLIENT_MODELS[next].id)
                  ?.focus();
              }}
              className={cn(
                "group relative flex flex-col justify-between rounded-2xl border p-4 text-start transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff]",
                isSelected
                  ? "border-[#2057ff] bg-[#2057ff] text-white shadow-md shadow-blue-500/20 -translate-y-0.5"
                  : "border-neutral-200/90 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50/80"
              )}
            >
              <span
                className={cn(
                  "font-mono text-xs font-semibold",
                  isSelected ? "text-blue-200" : "text-[#2057ff]"
                )}
              >
                0{index + 1}
              </span>
              <span className="mt-3 block text-sm font-bold leading-snug">
                {clientText(model.title, rtl)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Model Panel */}
      <div
        id="client-model-panel"
        role="tabpanel"
        aria-labelledby={"client-model-" + item.id}
        tabIndex={0}
        className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-9 md:p-11 shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff]"
      >
        <AnimatePresence mode="wait">
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#f4f7ff] px-3.5 py-1 text-xs font-bold text-[#2057ff]">
                <span>{clientText(item.rhythm, rtl)}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                {clientText(item.heading, rtl)}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {clientText(item.detail, rtl)}
              </p>

              <div className="mt-6 border-t border-neutral-200/80 pt-6">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                  {rtl ? "المهام والأنشطة المشمولة:" : "INCLUDED PRODUCTION & TASKS:"}
                </p>
                <ul className="mt-3 divide-y divide-neutral-100">
                  {item.includes.map((task) => (
                    <li
                      key={task.en}
                      className="flex items-start gap-3 py-2.5 text-sm leading-6 text-neutral-700"
                    >
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-[#2057ff]"
                        strokeWidth={2.5}
                      />
                      <span>{clientText(task, rtl)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border-s-4 border-[#2057ff] bg-neutral-50/80 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2057ff]">
                  {rtl ? "ما نتفق عليه أولًا" : "What we agree first"}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                  {clientText(item.agreement, rtl)}
                </p>
              </div>
            </div>

            <figure className="flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-950 shadow-md">
                {item.video ? (
                  <video
                    key={item.video}
                    src={item.video}
                    poster={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={clientText(item.title, rtl)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className={
                      item.image === "/hero-section.jpg"
                        ? "object-cover"
                        : "object-contain p-3"
                    }
                  />
                )}
                {item.video && (
                  <div className="absolute top-3 end-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/10 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2057ff] animate-pulse" />
                    <span>{rtl ? "معاينة مرئية حية" : "Live Production Reel"}</span>
                  </div>
                )}
              </div>
              <figcaption className="mt-3.5 flex items-center justify-between text-xs text-neutral-500">
                <span className="font-medium">
                  {item.video
                    ? rtl
                      ? "إنتاج مرئي حقيقي من نماذج استوديو بينسل"
                      : "Production footage from Pencil Studio models"
                    : `Pencil Studio / ${clientText(item.title, rtl)}`}
                </span>
                <div className="flex items-center gap-2">
                  {item.video && (
                    <span className="font-mono text-[10px] text-neutral-400">
                      1080p / 60fps
                    </span>
                  )}
                  <span
                    dir="ltr"
                    className="font-mono font-bold text-neutral-400"
                  >
                    0{selected + 1} / 06
                  </span>
                </div>
              </figcaption>

              <div className="mt-6 rounded-2xl border border-neutral-200/80 bg-neutral-50/60 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  {rtl ? "الترتيب يتبع طبيعة العمل" : "Flexible Arrangements"}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
                  {rtl
                    ? "يمكن أن يجمع التعاون أكثر من نموذج في آنٍ واحد. الأهم هو تحديد المهام المشمولة وطاقة العمل ومسؤوليات الاعتماد بوضوح."
                    : "Relationships can combine models. The vital part is agreeing on covered capacity, approval owners, and items requiring separate commissioning."}
                </p>
              </div>
            </figure>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── 5-Stage Client Request Workflow Component ───────────────────────────────
export function ClientRequestWorkflow({ rtl }: { rtl: boolean }) {
  const [selected, setSelected] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isManualPaused, setIsManualPaused] = React.useState(false);

  const stage = CLIENT_WORKFLOW[selected] || CLIENT_WORKFLOW[0];
  const icons = [Users, Search, UserRoundCheck, Wrench, PackageCheck];
  const Next = rtl ? ArrowLeft : ArrowRight;

  const isPaused = isManualPaused || isHovered;

  const STEP_DURATION = 5000; // 5000ms (5 seconds) per stage
  const elapsedRef = React.useRef(0);

  const handleSelect = (index: number) => {
    elapsedRef.current = 0;
    setProgress(0);
    setSelected(index);
  };

  // Reset elapsed timer on stage change
  React.useEffect(() => {
    elapsedRef.current = 0;
    setProgress(0);
  }, [selected]);

  React.useEffect(() => {
    if (isPaused) return;

    let lastTime = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const delta = now - lastTime;
      lastTime = now;

      elapsedRef.current += delta;
      const currentPct = (elapsedRef.current / STEP_DURATION) * 100;

      if (currentPct >= 100) {
        elapsedRef.current = 0;
        setProgress(0);
        setSelected((curr) => (curr + 1) % CLIENT_WORKFLOW.length);
      } else {
        setProgress(currentPct);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isPaused, selected]);

  return (
    <div
      className="space-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Lifecycle Status & Pause Control */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className={cn(
                "absolute inline-flex h-full w-full rounded-full opacity-75",
                isPaused ? "bg-amber-400" : "bg-[#2057ff] animate-ping"
              )}
            />
            <span
              className={cn(
                "relative inline-flex h-2 w-2 rounded-full",
                isPaused ? "bg-amber-500" : "bg-[#2057ff]"
              )}
            />
          </span>
          <span className="font-mono text-[11px] font-semibold text-neutral-600">
            {isPaused
              ? rtl
                ? "متوقف مؤقتاً للمعاينة (حرك الفأرة للمتابعة)"
                : "Paused for inspection (move cursor to resume)"
              : rtl
              ? "تتابع تفاعلي نشط • 5 مراحل"
              : "Active lifecycle playback • 5 stages"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsManualPaused(!isManualPaused)}
          className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/90 bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-700 hover:border-neutral-300 hover:text-neutral-950 transition cursor-pointer shadow-2xs"
          aria-label={
            isManualPaused
              ? rtl
                ? "تشغيل التتابع التلقائي"
                : "Resume auto playback"
              : rtl
              ? "إيقاف مؤقت للتتابع"
              : "Pause auto playback"
          }
        >
          {isManualPaused ? (
            <>
              <Play size={10} className="fill-current text-[#2057ff]" />
              <span>{rtl ? "تشغيل" : "Play"}</span>
            </>
          ) : (
            <>
              <Pause size={10} className="fill-current text-[#2057ff]" />
              <span>{rtl ? "إيقاف مؤقت" : "Pause"}</span>
            </>
          )}
        </button>
      </div>

      {/* 5-Step Progress Header */}
      <div
        role="tablist"
        aria-label={rtl ? "مسار طلب العميل" : "Client request workflow"}
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-5"
      >
        {CLIENT_WORKFLOW.map((item, index) => {
          const Icon = icons[index] || Users;
          const isSelected = selected === index;
          const isPast = index < selected;
          return (
            <button
              role="tab"
              key={item.id}
              id={"client-workflow-" + item.id}
              aria-controls="client-workflow-panel"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => handleSelect(index)}
              onKeyDown={(event) => {
                if (
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
                )
                  return;
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                    ? 4
                    : (index +
                        (event.key === (rtl ? "ArrowLeft" : "ArrowRight")
                          ? 1
                          : -1) +
                        5) %
                      5;
                handleSelect(next);
                document
                  .getElementById("client-workflow-" + CLIENT_WORKFLOW[next].id)
                  ?.focus();
              }}
              className={cn(
                "group relative flex flex-col justify-between rounded-2xl border p-4 text-start transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff] cursor-pointer",
                index === 4 && "col-span-2 sm:col-span-1",
                isSelected
                  ? "border-[#2057ff] bg-[#2057ff] text-white shadow-lg shadow-blue-500/25 -translate-y-1"
                  : isPast
                  ? "border-blue-200/60 bg-blue-50/30 text-neutral-900 hover:border-blue-300 hover:bg-blue-50/60"
                  : "border-neutral-200/90 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50/80"
              )}
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={20}
                  className={cn(
                    "transition-colors",
                    isSelected ? "text-white" : "text-[#2057ff]"
                  )}
                />
                {index < 4 && (
                  <Next
                    size={14}
                    className={cn(
                      "opacity-40 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5",
                      isSelected ? "text-white" : "text-neutral-400"
                    )}
                  />
                )}
              </div>
              <p className="mt-3 text-xs sm:text-sm font-bold truncate">
                {clientText(item.title, rtl)}
              </p>

              {/* Dynamic Animated Progress Bar */}
              <div
                className={cn(
                  "mt-3 h-1.5 w-full overflow-hidden rounded-full transition-colors",
                  isSelected ? "bg-white/30" : "bg-neutral-100"
                )}
              >
                <div
                  className={cn(
                    "h-full rounded-full",
                    isSelected
                      ? "bg-white"
                      : isPast
                      ? "w-full bg-[#2057ff]/40"
                      : "w-0 bg-transparent"
                  )}
                  style={
                    isSelected
                      ? {
                          width: `${Math.min(100, Math.max(0, progress))}%`,
                          transition: "none",
                        }
                      : { transition: "width 0.3s ease" }
                  }
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <div
        id="client-workflow-panel"
        role="tabpanel"
        aria-labelledby={"client-workflow-" + stage.id}
        tabIndex={0}
        className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-9 md:p-10 shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#f4f7ff] px-3 py-1 font-mono text-xs font-bold text-[#2057ff]">
                <span>
                  0{selected + 1} / 05 • {clientText(stage.title, rtl)}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                {clientText(stage.heading, rtl)}
              </h3>
            </div>
            <div>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
                {clientText(stage.detail, rtl)}
              </p>
              <div className="mt-6 flex items-start gap-3.5 rounded-2xl border border-blue-100 bg-[#f4f7ff] p-4 sm:p-5 text-sm font-bold text-neutral-900">
                <ClipboardCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2057ff]"
                />
                <span className="leading-relaxed">
                  {clientText(stage.result, rtl)}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Urgency & Contact Channel Types ─────────────────────────────────────────
type UrgencyLevel = "routine" | "planned" | "critical";
type ContactPreference = "email" | "whatsapp" | "phone";

// ─── Primary Form-First Client Request Composer ──────────────────────────────
export function ClientRequestComposer({
  rtl,
  model,
}: {
  rtl: boolean;
  model: number;
}) {
  const tx = (en: string, ar: string) => (rtl ? ar : en);

  // 12 Preserved Intents (Default: followup)
  const [kind, setKind] = React.useState("followup");
  const [selectorOpen, setSelectorOpen] = React.useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] =
    React.useState<string>("all");
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
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [selectorOpen]);

  // Form Fields (Preserved + Enhanced Urgency & Preference)
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    project: "",
    context: "",
    deadline: "",
  });
  const [urgency, setUrgency] = React.useState<UrgencyLevel>("routine");
  const [contactMethod, setContactMethod] =
    React.useState<ContactPreference>("email");

  // Review & Status State
  const [review, setReview] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const focusRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    setStatus("");
  }, [model, rtl]);

  // Active Request definition
  const request =
    CLIENT_REQUESTS.find((item) => item.id === kind) || CLIENT_REQUESTS[0];

  // Active Category definition
  const activeCategory =
    CLIENT_REQUEST_CATEGORIES.find((cat) =>
      cat.intentIds.some((id) => id === kind)
    ) || CLIENT_REQUEST_CATEGORIES[1];

  const update = (key: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setStatus("");
  };

  // Human-readable labels
  const urgencyLabels: Record<UrgencyLevel, { en: string; ar: string }> = {
    routine: {
      en: "Standard Rhythm (Regular business hours)",
      ar: "اعتيادي (ضمن ساعات العمل الرسمية)",
    },
    planned: {
      en: "Planned Milestone (Tied to upcoming release)",
      ar: "مجدول (مرتبط بموعد إطلاق أو حملة)",
    },
    critical: {
      en: "Time-Sensitive (Operational blocker)",
      ar: "أولوية عاجلة (تعثر تشغيلي أو تأثير مباشر)",
    },
  };

  const contactLabels: Record<ContactPreference, { en: string; ar: string }> = {
    email: { en: "Email (help@dipencil.com)", ar: "البريد الإلكتروني (help@dipencil.com)" },
    whatsapp: { en: "WhatsApp (+20 100 377 8273)", ar: "واتساب (+20 100 377 8273)" },
    phone: { en: "Direct Phone Call", ar: "مكالمة هاتفية مباشرة" },
  };

  // Structured Draft String
  const activeModel = CLIENT_MODELS[model] || CLIENT_MODELS[0];
  const message = [
    tx("PENCIL STUDIO / CLIENT SUPPORT REQUEST", "بينسل ستوديو / طلب دعم عميل"),
    "=========================================",
    `${tx("Request Intent: ", "نوع الطلب: ")}${clientText(request.title, rtl)}`,
    `${tx("Category: ", "التصنيف: ")}${clientText(activeCategory.title, rtl)}`,
    `${tx("Client / Project: ", "الشركة / المشروع: ")}${values.project.trim()}`,
    `${tx("Contact Name: ", "اسم العميل: ")}${values.name.trim()}`,
    `${tx("Email Address: ", "البريد الإلكتروني: ")}${values.email.trim()}`,
    `${tx("Engagement Model: ", "نموذج التعاون: ")}${clientText(activeModel.title, rtl)}`,
    `${tx("Reported Urgency: ", "الأولوية المحددة: ")}${clientText(urgencyLabels[urgency], rtl)}`,
    `${tx("Preferred Channel: ", "قناة التواصل المفضلة: ")}${clientText(contactLabels[contactMethod], rtl)}`,
    ...(values.deadline
      ? [`${tx("Target Timing / Impact: ", "الموعد أو الأثر: ")}${values.deadline.trim()}`]
      : []),
    "",
    tx("--- DETAILED CONTEXT & ACTION ---", "--- تفاصيل الطلب والإجراء المطلوب ---"),
    values.context.trim(),
    "",
    "=========================================",
    tx(
      "Prepared locally on client device. No server ticket created. Transmit via Email or WhatsApp.",
      "تم تجهيز المسودة محليًا على جهاز العميل. لم يتم فتح تذكرة عبر خادم. يُرجى الإرسال عبر البريد أو واتساب."
    ),
  ].join("\n");

  const download = () => {
    const url = URL.createObjectURL(
      new Blob(["\uFEFF" + message], { type: "text/plain;charset=utf-8" })
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "pencil-client-request.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setStatus(
        tx(
          "Draft copied to clipboard. Paste into your email or WhatsApp message.",
          "تم نسخ المسودة إلى الحافظة. ألصقها الآن في رسالة البريد أو واتساب."
        )
      );
    } catch {
      setStatus(
        tx(
          "Clipboard copy unavailable. Please use the Save .TXT option below.",
          "تعذر النسخ التلقائي. يمكنك تنزيل ملف .TXT المرفق أدناه."
        )
      );
    }
  };

  const inputStyles =
    "mt-2 min-h-12 w-full rounded-xl border border-neutral-300/80 bg-neutral-50/50 px-4 py-3 text-base text-neutral-900 outline-none transition focus:border-[#2057ff] focus:bg-white focus:ring-2 focus:ring-[#2057ff]/20";

  return (
    <div className="relative rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-300 hover:border-neutral-300">
      {/* Step Header */}
      <div className="mb-6 flex items-center justify-between border-b border-neutral-200/80 pb-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#2057ff] animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2057ff]">
            {review
              ? tx("STAGE 02: REVIEW & HANDOFF", "المرحلة 02: مراجعة المسودة وتأكيد الإرسال")
              : tx("STAGE 01: REQUEST COMPOSER", "المرحلة 01: تحرير طلب العميل")}
          </span>
        </div>
        <span
          dir="ltr"
          className="rounded-full border border-blue-100 bg-[#f4f7ff] px-3 py-1 font-mono text-xs font-bold text-[#2057ff]"
        >
          {review ? "02 / 02" : "01 / 02"}
        </span>
      </div>

      <h3
        ref={focusRef}
        tabIndex={-1}
        className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl outline-none"
      >
        {review
          ? tx("Your request is ready to send.", "مسودة طلبك جاهزة للإرسال.")
          : tx("What needs our attention?", "ما الذي يحتاج إلى متابعة فريقنا؟")}
      </h3>

      {!review ? (
        <form
          className="mt-6 space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            setReview(true);
            setStatus("");
            requestAnimationFrame(() =>
              focusRef.current?.focus({ preventScroll: true })
            );
          }}
        >
          {/* Selected Topic Bar with Change Topic Action & Popover Dropdown */}
          <div className="relative" ref={topicSelectorRef}>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-200/90 bg-neutral-50/80 px-4 py-3 transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 shrink-0">
                  {rtl ? "نوع الطلب:" : "Inquiry Topic:"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-white px-3 py-1 text-xs font-bold text-neutral-900 shadow-xs truncate">
                  {(() => {
                    const CatIcon = activeCategory.icon;
                    return (
                      <CatIcon size={14} className="text-[#2057FF] shrink-0" />
                    );
                  })()}
                  <span className="truncate">
                    {clientText(request.title, rtl)}
                  </span>
                </span>
                <span className="hidden sm:inline-block text-[11px] text-neutral-400 truncate">
                  • {clientText(activeCategory.title, rtl)}
                </span>
              </div>

              <button
                type="button"
                id="change-topic-btn"
                onClick={() => setSelectorOpen(!selectorOpen)}
                aria-expanded={selectorOpen}
                aria-haspopup="dialog"
                aria-controls="topic-popover-panel"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3.5 py-1.5 text-xs font-bold text-[#2057FF] transition hover:bg-[#EEF3FF] hover:border-[#2057FF]/40 cursor-pointer shadow-xs shrink-0"
              >
                <span>{tx("Change topic", "تغيير نوع الطلب")}</span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    selectorOpen && "rotate-180"
                  )}
                />
              </button>
            </div>

            {/* Accessible Popover Panel Exposing All 12 Categorized Intents */}
            <AnimatePresence>
              {selectorOpen && (
                <motion.div
                  id="topic-popover-panel"
                  role="dialog"
                  aria-label={
                    rtl ? "قائمة اختيار نوع الطلب" : "Select inquiry topic"
                  }
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-x-0 top-full z-40 mt-2 rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xl shadow-blue-950/15 backdrop-blur-xl sm:p-5"
                >
                  {/* Header of Popover */}
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2057FF]">
                        {tx("ALL 12 REQUEST TOPICS", "كافة موضوعات الدعم (12)")}
                      </p>
                      <p className="text-xs text-neutral-500 font-medium mt-0.5">
                        {tx(
                          "Switching topics preserves whatever you have already typed",
                          "تغيير الموضوع لن يحذف أي بيانات كتبتها في مسودة النموذج"
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

                  {/* 4 Logical Categories in Responsive Grid */}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {CLIENT_REQUEST_CATEGORIES.map((category) => {
                      const CatIcon = category.icon;
                      return (
                        <div key={category.id} className="space-y-2">
                          <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 px-1">
                            <CatIcon size={12} className="text-[#2057FF]" />
                            <span>{clientText(category.title, rtl)}</span>
                          </div>
                          <div className="space-y-1">
                            {category.intentIds.map((intentId) => {
                              const intent = CLIENT_REQUESTS.find(
                                (i) => i.id === intentId
                              )!;
                              const isCurrent = kind === intentId;
                              return (
                                <button
                                  key={intentId}
                                  type="button"
                                  onClick={() => {
                                    setKind(intentId);
                                    setSelectedCategoryFilter(category.id);
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
                                      {clientText(intent.title, rtl)}
                                    </p>
                                    <p
                                      className={cn(
                                        "text-[10px] leading-tight truncate mt-0.5",
                                        isCurrent
                                          ? "text-white/80"
                                          : "text-neutral-400"
                                      )}
                                    >
                                      {clientText(intent.prompt, rtl)}
                                    </p>
                                  </div>
                                  {isCurrent && (
                                    <Check
                                      size={14}
                                      className="shrink-0 text-white"
                                    />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Dynamic Prompt / Guidance Box */}
          <div className="rounded-2xl border border-blue-100 bg-[#f4f7ff]/70 p-4 sm:p-5">
            <p className="border-s-2 border-[#2057ff] ps-3.5 text-xs sm:text-sm leading-relaxed text-neutral-600">
              {clientText(request.prompt, rtl)}
            </p>
          </div>

          {/* Company / Project Name */}
          <label
            className="block text-sm font-bold text-neutral-800"
            htmlFor="client-request-project"
          >
            {tx("Company or Pencil Project Name *", "اسم الشركة أو مشروع بينسل *")}
            <input
              id="client-request-project"
              name="project"
              required
              maxLength={150}
              placeholder={tx("e.g. Acme Corp / Mobile App or Brand Refresh", "مثال: شركة النور / المتجر الإلكتروني أو الهوية")}
              value={values.project}
              onChange={(event) => update("project", event.target.value)}
              className={inputStyles}
            />
          </label>

          {/* Contact Details (2 Columns) */}
          <div className="grid gap-5 sm:grid-cols-2">
            <label
              className="block text-sm font-bold text-neutral-800"
              htmlFor="client-request-name"
            >
              {tx("Your Name *", "اسمك الكامل *")}
              <input
                id="client-request-name"
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                placeholder={tx("e.g. Sara Ahmed", "مثال: أحمد عبد الله")}
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                className={inputStyles}
              />
            </label>
            <label
              className="block text-sm font-bold text-neutral-800"
              htmlFor="client-request-email"
            >
              {tx("Official Work Email *", "البريد الإلكتروني المهني *")}
              <input
                id="client-request-email"
                name="email"
                type="email"
                dir="ltr"
                autoComplete="email"
                required
                maxLength={150}
                placeholder="name@company.com"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                className={inputStyles}
              />
            </label>
          </div>

          {/* Context and Description */}
          <label
            className="block text-sm font-bold text-neutral-800"
            htmlFor="client-request-context"
          >
            {tx("Detailed Context & Requested Action *", "السياق المفصل والإجراء المطلوب *")}
            <textarea
              id="client-request-context"
              name="context"
              required
              minLength={10}
              maxLength={4000}
              rows={5}
              placeholder={tx(
                "Describe what needs to change, which screen/asset is involved, and what decision or output you expect.",
                "صف ما الذي يحتاج إلى تعديل، ما الجزء أو الصفحة المعنية، وما القرار أو المخرج الذي تنتظره."
              )}
              value={values.context}
              onChange={(event) => update("context", event.target.value)}
              className={cn(inputStyles, "resize-y")}
            />
          </label>

          {/* Optional Urgency & Contact Preferences */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                className="block text-sm font-bold text-neutral-800"
                htmlFor="client-request-urgency"
              >
                {tx("Reported Urgency (Triage Guidance)", "مستوى الأولوية الميداني (لتحديد الترتيب)")}
              </label>
              <select
                id="client-request-urgency"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as UrgencyLevel)}
                className={inputStyles}
              >
                <option value="routine">
                  {clientText(urgencyLabels.routine, rtl)}
                </option>
                <option value="planned">
                  {clientText(urgencyLabels.planned, rtl)}
                </option>
                <option value="critical">
                  {clientText(urgencyLabels.critical, rtl)}
                </option>
              </select>
              <span className="mt-1.5 block text-[11px] leading-relaxed text-neutral-500">
                {tx(
                  "Assists initial triage. Contractual response times follow your active service agreement.",
                  "يساعد في فرز الطلبات؛ والالتزام الزمني الفعلي يخضع لاتفاقية التعاقد القائمة."
                )}
              </span>
            </div>

            <div>
              <label
                className="block text-sm font-bold text-neutral-800"
                htmlFor="client-request-channel"
              >
                {tx("Preferred Contact Channel", "قناة المتابعة المفضلة")}
              </label>
              <select
                id="client-request-channel"
                value={contactMethod}
                onChange={(e) =>
                  setContactMethod(e.target.value as ContactPreference)
                }
                className={inputStyles}
              >
                <option value="email">{clientText(contactLabels.email, rtl)}</option>
                <option value="whatsapp">{clientText(contactLabels.whatsapp, rtl)}</option>
                <option value="phone">{clientText(contactLabels.phone, rtl)}</option>
              </select>
              <span className="mt-1.5 block text-[11px] leading-relaxed text-neutral-500">
                {tx(
                  "Choose where our studio desk should prioritize sending updates.",
                  "القناة التي تفضل أن يبدأ مكتب الدعم بمخاطبتك عبرها."
                )}
              </span>
            </div>
          </div>

          {/* Optional Deadline */}
          <label
            className="block text-sm font-bold text-neutral-800"
            htmlFor="client-request-deadline"
          >
            {tx("Target Deadline or Business Impact (Optional)", "الموعد المستهدف أو الأثر على العمل (اختياري)")}
            <input
              id="client-request-deadline"
              maxLength={200}
              placeholder={tx("e.g. Needs approval before Board Meeting on Nov 5", "مثال: مطلوب اعتماده قبل اجتماع الإدارة في 5 نوفمبر")}
              value={values.deadline}
              onChange={(event) => update("deadline", event.target.value)}
              className={inputStyles}
            />
          </label>

          {/* Privacy Note */}
          <div className="flex items-start gap-2.5 rounded-xl border border-neutral-200/80 bg-neutral-50 p-3.5 text-xs text-neutral-600">
            <AlertCircle size={16} className="mt-0.5 shrink-0 text-neutral-500" />
            <span>
              {tx(
                "Please do not include passwords, API keys, or confidential financial credentials. Sensitive attachments can be transferred securely once the conversation begins.",
                "يُرجى عدم تضمين كلمات مرور أو مفاتيح برمجية أو بيانات بنكية سرية. يمكن إرفاق الوثائق الحساسة بأمان لاحقًا."
              )}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-[#2057ff] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
          >
            <Mail size={18} />
            <span>{tx("Prepare My Request Draft", "تجهيز مسودة الطلب")}</span>
          </button>
        </form>
      ) : (
        /* Review Screen (Truthful Client-Side Draft) */
        <div className="mt-6 space-y-6">
          {/* Truthfulness Notice Banner */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:p-5 text-sm text-neutral-800">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <span className="h-2 w-2 rounded-full bg-amber-600" />
              <span>
                {tx("Draft Prepared Locally • Not Yet Sent", "المسودة جاهزة محليًا • لم تُرسل بعد")}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700">
              {tx(
                "This form prepared your request directly in your browser. It does not submit tickets to an automated server queue. Please click below to send via your email client or WhatsApp to reach the studio desk.",
                "قام هذا النموذج بتجهيز بياناتك داخل المتصفح مباشرة، ولا يقوم بإرسال تذاكر تلقائية لخادم. يُرجى النقر أدناه لفتح الرسالة في بريدك أو واتساب لإرسالها لمكتب العمليات."
              )}
            </p>
          </div>

          {/* Structured Plaintext Preview */}
          <div className="relative">
            <span className="absolute top-3 end-3 rounded-md bg-white/80 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-neutral-500 shadow-xs">
              {tx("Draft Preview", "معاينة المسودة")}
            </span>
            <pre className="max-h-80 overflow-y-auto whitespace-pre-wrap break-words rounded-2xl border border-blue-100 bg-[#f4f7ff] p-5 font-mono text-xs leading-relaxed text-neutral-800">
              {message}
            </pre>
          </div>

          {/* Primary Transmission Buttons */}
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={
                "mailto:help@dipencil.com?subject=" +
                encodeURIComponent(
                  "Pencil / " +
                    clientText(request.title, rtl) +
                    " [" +
                    values.project +
                    "]"
                ) +
                "&body=" +
                encodeURIComponent(message)
              }
              className="flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-[#2057ff] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
            >
              <Mail size={18} />
              <span>{tx("Open in Email Client", "فتح في برنامج البريد")}</span>
            </a>
            <a
              href={
                "https://wa.me/201003778273?text=" +
                encodeURIComponent(message)
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition-all hover:bg-emerald-700 hover:shadow-emerald-500/40"
            >
              <WhatsAppIcon size={18} />
              <span>{tx("Continue on WhatsApp", "المتابعة عبر واتساب")}</span>
            </a>
          </div>

          {/* Secondary Utility Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200/80 pt-4">
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={copy}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-neutral-800 shadow-xs transition hover:border-[#2057ff] hover:text-[#2057ff]"
              >
                <Copy size={14} />
                <span>{tx("Copy Draft", "نسخ النص")}</span>
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
              onClick={() => {
                setReview(false);
                setStatus("");
                requestAnimationFrame(() => focusRef.current?.focus());
              }}
              className="text-xs font-bold text-neutral-600 underline-offset-4 hover:text-[#2057ff] hover:underline"
            >
              {tx("← Back to Edit Form", "← العودة لتعديل البيانات")}
            </button>
          </div>

          {/* Status Message (ARIA live region) */}
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
