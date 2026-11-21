"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  CircleHelp,
  Database,
  FileOutput,
  Gauge,
  Globe,
  KeyRound,
  LayoutDashboard,
  Monitor,
  Network,
  Search,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Wrench,
} from "lucide-react";
import {
  TECHNICAL_INVESTIGATION,
  TECHNICAL_SUPPORT_AREAS,
  technicalText,
} from "@/lib/support/technical/pencil-technical-care";
import { cn } from "@/lib/utils";

// ─── 12 Distinct Engineering Domain Icons ─────────────────────────────────────
const AREA_ICONS = [
  Monitor, // frontend
  Braces, // backend
  Database, // database
  ServerCog, // hosting
  Globe, // dns
  Network, // integration
  LayoutDashboard, // admin
  Smartphone, // mobile
  Gauge, // performance
  KeyRound, // access
  FileOutput, // creative
  CircleHelp, // other
];

// ─── Section 03: Unified Technical Domain Explorer ───────────────────────────
export function TechnicalAreaWorkbench({
  rtl,
  area,
  onChange,
}: {
  rtl: boolean;
  area: string;
  onChange: (id: string) => void;
}) {
  const selectedIndex = TECHNICAL_SUPPORT_AREAS.findIndex(
    (item) => item.id === area
  );
  const current =
    TECHNICAL_SUPPORT_AREAS[selectedIndex !== -1 ? selectedIndex : 0];

  const handleApplyToWizard = () => {
    onChange(current.id);
    const element = document.getElementById("technical-workbench");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
      {/* 12-Domain Radio Matrix */}
      <div
        role="radiogroup"
        aria-label={rtl ? "المجالات التقنية المشمولة" : "Covered technical domains"}
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2"
      >
        {TECHNICAL_SUPPORT_AREAS.map((item, index) => {
          const Icon = AREA_ICONS[index] || Wrench;
          const isSelected = area === item.id;
          return (
            <button
              role="radio"
              key={item.id}
              id={"technical-area-" + item.id}
              aria-checked={isSelected}
              aria-controls="technical-area-guidance"
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onChange(item.id)}
              onKeyDown={(event) => {
                if (
                  ![
                    "ArrowUp",
                    "ArrowDown",
                    "ArrowLeft",
                    "ArrowRight",
                    "Home",
                    "End",
                  ].includes(event.key)
                )
                  return;
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? 0
                    : event.key === "End"
                    ? 11
                    : (index +
                        (event.key === "ArrowDown" ||
                        event.key === (rtl ? "ArrowLeft" : "ArrowRight")
                          ? 1
                          : -1) +
                        12) %
                      12;
                onChange(TECHNICAL_SUPPORT_AREAS[next].id);
                document
                  .getElementById(
                    "technical-area-" + TECHNICAL_SUPPORT_AREAS[next].id
                  )
                  ?.focus();
              }}
              className={cn(
                "flex min-h-[86px] flex-col justify-between rounded-2xl border p-4 text-start transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff]",
                isSelected
                  ? "border-[#2057ff] bg-[#2057ff] text-white shadow-md shadow-blue-500/20 -translate-y-0.5"
                  : "border-neutral-200/90 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50/80"
              )}
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={19}
                  className={isSelected ? "text-white" : "text-[#2057ff]"}
                />
                <span
                  className={cn(
                    "font-mono text-[10px]",
                    isSelected ? "text-blue-100" : "text-neutral-400"
                  )}
                  dir="ltr"
                >
                  0{index + 1}
                </span>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-bold leading-snug">
                {technicalText(item.name, rtl)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Synchronized Domain Detail & Diagnostic Guidance */}
      <div
        id="technical-area-guidance"
        role="region"
        aria-labelledby={"technical-area-" + current.id}
        tabIndex={0}
        className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-9 md:p-10 shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2057ff]">
                {String((selectedIndex !== -1 ? selectedIndex : 0) + 1).padStart(
                  2,
                  "0"
                )}{" "}
                / {technicalText(current.name, rtl)}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-[#f4f7ff] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#2057ff]">
                <span>{current.id}</span>
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              {technicalText(current.heading, rtl)}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              {technicalText(current.detail, rtl)}
            </p>

            {/* Diagnostic Checklist */}
            <div className="mt-6 border-t border-neutral-200/80 pt-6">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                {rtl ? "ما يفيد التحقيق في هذا المجال:" : "USEFUL INVESTIGATION CHECKS:"}
              </p>
              <ul className="mt-3 divide-y divide-neutral-100">
                {current.checks.map((check) => (
                  <li
                    key={check.en}
                    className="flex items-start gap-3 py-2.5 text-sm leading-6 text-neutral-700"
                  >
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-[#2057ff]"
                      strokeWidth={2.5}
                    />
                    <span>{technicalText(check, rtl)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety & Protocol Box */}
            <div className="mt-6 rounded-2xl border-s-4 border-[#2057ff] bg-neutral-50/80 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2057ff]">
                <ShieldCheck size={16} />
                <span>{rtl ? "ضوابط الأمان والبيانات" : "Security & Access Boundary"}</span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-700">
                {technicalText(current.safety, rtl)}
              </p>
            </div>

            {/* Quick Synchronize Button */}
            <div className="mt-8 pt-6 border-t border-neutral-200/80">
              <button
                type="button"
                onClick={handleApplyToWizard}
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#2057ff] px-6 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700"
              >
                <span>
                  {rtl
                    ? `تحديد مجال ${technicalText(current.name, rtl)} في أداة الطلب`
                    : `Use ${technicalText(current.name, rtl)} in Request Wizard`}
                </span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5"
                />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Section 04: Troubleshooting Lifecycle Flow ──────────────────────────────
export function TechnicalInvestigationTimeline({ rtl }: { rtl: boolean }) {
  const [selected, setSelected] = React.useState(0);
  const current =
    TECHNICAL_INVESTIGATION[selected] || TECHNICAL_INVESTIGATION[0];
  const Next = rtl ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-6">
      {/* 6-Stage Progress Tablist */}
      <div
        role="tablist"
        aria-label={rtl ? "مسار التحقيق التقني" : "Technical troubleshooting flow"}
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6"
      >
        {TECHNICAL_INVESTIGATION.map((item, index) => {
          const isSelected = selected === index;
          return (
            <button
              key={item.id}
              role="tab"
              id={"investigation-" + item.id}
              aria-selected={isSelected}
              aria-controls="investigation-panel"
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(index)}
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
                    ? 5
                    : (index +
                        (event.key === (rtl ? "ArrowLeft" : "ArrowRight")
                          ? 1
                          : -1) +
                        6) %
                      6;
                setSelected(next);
                document
                  .getElementById(
                    "investigation-" + TECHNICAL_INVESTIGATION[next].id
                  )
                  ?.focus();
              }}
              className={cn(
                "group relative flex flex-col justify-between rounded-2xl border p-4 text-start transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff]",
                isSelected
                  ? "border-[#2057ff] bg-[#2057ff] text-white shadow-md shadow-blue-500/20 -translate-y-0.5"
                  : "border-neutral-200/90 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50/80"
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "font-mono text-xs font-semibold",
                    isSelected ? "text-blue-100" : "text-[#2057ff]"
                  )}
                  dir="ltr"
                >
                  0{index + 1}
                </span>
                {index < 5 && (
                  <Next
                    size={13}
                    aria-hidden="true"
                    className={cn(
                      "transition-transform opacity-40 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5",
                      isSelected ? "text-white" : "text-neutral-400"
                    )}
                  />
                )}
              </div>
              <span className="mt-3 block text-sm font-bold">
                {technicalText(item.title, rtl)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Investigation Detail Panel */}
      <div
        id="investigation-panel"
        role="tabpanel"
        aria-labelledby={"investigation-" + current.id}
        tabIndex={0}
        className="relative overflow-hidden rounded-3xl border border-neutral-200/90 bg-white p-7 sm:p-9 md:p-10 shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-[#2057ff]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#f4f7ff] px-3 py-1 font-mono text-xs font-bold text-[#2057ff]">
                <span>
                  0{selected + 1} / 06 • {technicalText(current.title, rtl)}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                {technicalText(current.heading, rtl)}
              </h3>
            </div>
            <div>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
                {technicalText(current.detail, rtl)}
              </p>
              <div className="mt-6 flex items-start gap-3.5 rounded-2xl border border-blue-100 bg-[#f4f7ff] p-4 sm:p-5 text-sm font-bold text-neutral-900">
                <Search
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2057ff]"
                />
                <span className="leading-relaxed">
                  {technicalText(current.result, rtl)}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
