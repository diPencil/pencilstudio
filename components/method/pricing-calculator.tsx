"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Calculator, TriangleAlert } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";
import type { MethodKey } from "@/lib/method-content";

const EGP_RATE = 50.5;

const PER_PAGE: Record<MethodKey, number> = { strategy: 60, design: 140, build: 220 };
const BASE: Record<MethodKey, number> = { strategy: 900, design: 1400, build: 2400 };

export function PricingCalculator({ methodKey }: { methodKey: MethodKey }) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [pages, setPages] = useState(10);
  const [currency, setCurrency] = useState<"USD" | "EGP">("USD");
  const [bilingual, setBilingual] = useState(true);
  const [cms, setCms] = useState(true);
  const [booking, setBooking] = useState(methodKey === "build");
  const [motionFx, setMotionFx] = useState(methodKey === "design");

  const calc = useMemo(() => {
    let pencil = BASE[methodKey] + pages * PER_PAGE[methodKey];
    if (bilingual) pencil += pages * PER_PAGE[methodKey] * 0.4;
    if (cms) pencil += 450;
    if (booking) pencil += methodKey === "build" ? 1600 : 700;
    if (motionFx) pencil += 500;
    pencil = Math.round(pencil / 50) * 50;
    return {
      pencil,
      freelancer: Math.round((pencil * 0.55) / 50) * 50,
      local: Math.round((pencil * 1.4) / 50) * 50,
      eu: Math.round((pencil * 2.9) / 50) * 50,
    };
  }, [pages, bilingual, cms, booking, motionFx, methodKey]);

  const fmt = (usd: number) => {
    if (currency === "USD") return `$${new Intl.NumberFormat("en-US").format(usd)}`;
    return `${new Intl.NumberFormat("en-US").format(Math.round(usd * EGP_RATE))} ${isRtl ? "ج.م" : "EGP"}`;
  };

  const max = calc.eu;
  const bar = (v: number) => `${Math.max(8, Math.round((v / max) * 100))}%`;

  const toggles = [
    { on: bilingual, set: setBilingual, en: "Bilingual AR + EN", ar: "عربي + إنجليزي" },
    { on: cms, set: setCms, en: "Editable CMS", ar: "لوحة تحكم" },
    { on: booking, set: setBooking, en: "Booking / payments", ar: "حجز / دفع" },
    { on: motionFx, set: setMotionFx, en: "Motion & polish", ar: "موشن ولمسات" },
  ];

  const rows = [
    {
      nameEn: "Freelancer",
      nameAr: "فريلانسر",
      value: calc.freelancer,
      noteEn: "Cheapest. No docs, disappears after invoice.",
      noteAr: "الأرخص. دون توثيق ويختفي بعد الفاتورة.",
      risky: true,
      us: false,
    },
    {
      nameEn: "PENCIL",
      nameAr: "PENCIL",
      value: calc.pencil,
      noteEn: "Fixed scope, tested, you own everything.",
      noteAr: "نطاق ثابت ومُختبَر وكل شيء ملكك.",
      risky: false,
      us: true,
    },
    {
      nameEn: "Local agency",
      nameAr: "وكالة محلية",
      value: calc.local,
      noteEn: "Bigger team, slower, same stack.",
      noteAr: "فريق أكبر وأبطأ ونفس التقنية.",
      risky: false,
      us: false,
    },
    {
      nameEn: "EU / Gulf agency",
      nameAr: "وكالة أوروبية/خليجية",
      value: calc.eu,
      noteEn: "Excellent. 3x price, timezone lag.",
      noteAr: "ممتازة. 3 أضعاف السعر وفارق توقيت.",
      risky: false,
      us: false,
    },
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white">
            <Calculator size={19} />
          </span>
          <div>
            <h3 className="text-lg font-bold md:text-xl">{isRtl ? "احسب مشروعك بنفسك" : "Price your project yourself"}</h3>
            <p className="text-xs text-neutral-500 md:text-sm">
              {isRtl ? "حرّك عدد الصفحات واختر الإضافات وقارن بالسوق." : "Move the page slider, pick add-ons, compare with the market."}
            </p>
          </div>
        </div>
        <div className="flex rounded-full border border-neutral-200 bg-neutral-50 p-1 text-xs font-bold">
          {(["USD", "EGP"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 transition",
                currency === c ? "bg-neutral-900 text-white" : "text-neutral-500 hover:text-neutral-900"
              )}
            >
              {c === "USD" ? "$ USD" : isRtl ? "ج.م EGP" : "EGP ج.م"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-2">
        {/* controls */}
        <div className="border-b border-neutral-100 p-6 md:p-8 lg:border-b-0 lg:border-e">
          <div className="flex items-end justify-between">
            <label className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
              {isRtl ? "عدد الصفحات / الشاشات" : "Pages / screens"}
            </label>
            <span className="rounded-full bg-neutral-900 px-3.5 py-1 text-sm font-bold text-white" dir="ltr">
              {pages}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={40}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="mt-4 w-full accent-neutral-900"
            aria-label={isRtl ? "عدد الصفحات" : "Page count"}
          />
          <div className="mt-1 flex justify-between text-[11px] font-bold text-neutral-400" dir="ltr">
            <span>1</span>
            <span>40</span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {toggles.map((tg) => (
              <button
                key={tg.en}
                onClick={() => tg.set(!tg.on)}
                aria-pressed={tg.on}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition",
                  tg.on
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-400"
                )}
              >
                <span>{isRtl ? tg.ar : tg.en}</span>
                <span className={cn("relative h-5 w-9 shrink-0 rounded-full transition", tg.on ? "bg-white/25" : "bg-neutral-200")}>
                  <span
                    className={cn(
                      "absolute top-0.5 h-4 w-4 rounded-full shadow transition-all",
                      tg.on ? "bg-white" : "bg-neutral-500",
                      tg.on
                        ? isRtl
                          ? "left-0.5"
                          : "right-0.5"
                        : isRtl
                          ? "right-0.5"
                          : "left-0.5"
                    )}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600">
            {isRtl ? (
              <>
                <span className="font-bold text-neutral-900">كيف حسبناها؟ </span>
                أساس {fmt(BASE[methodKey])} + {fmt(PER_PAGE[methodKey])} للصفحة
                {bilingual ? " + 40% للغة الثانية" : ""} + الإضافات بسعر ثابت. الأرقام استرشادية،
                العرض النهائي ثابت بعد مكالمة 20 دقيقة.
              </>
            ) : (
              <>
                <span className="font-bold text-neutral-900">How we math it: </span>
                {fmt(BASE[methodKey])} base + {fmt(PER_PAGE[methodKey])}/page
                {bilingual ? " + 40% second language" : ""} + fixed add-ons. Indicative,
                final quote is fixed after a 20-min call.
              </>
            )}
          </div>
        </div>

        {/* results */}
        <div className="bg-neutral-50 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            {isRtl ? "مقارنة السوق تتحدث لحظيا" : "Live market comparison"}
          </p>
          <div className="mt-4 space-y-3">
            {rows.map((r) => (
              <div
                key={r.nameEn}
                className={cn(
                  "rounded-2xl border p-4 transition",
                  r.us ? "border-neutral-900 bg-neutral-900 text-white shadow-lg" : "border-neutral-200 bg-white"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-sm font-bold">
                    {r.us && <BadgeCheck size={15} />}
                    {isRtl ? r.nameAr : r.nameEn}
                    {r.us && (
                      <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-neutral-900">
                        {isRtl ? "نحن" : "US"}
                      </span>
                    )}
                  </span>
                  <motion.span
                    key={r.value + currency}
                    initial={{ opacity: 0.4, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn("text-lg font-bold", r.us && "text-xl")}
                    dir="ltr"
                  >
                    {fmt(r.value)}
                  </motion.span>
                </div>
                <div className={cn("mt-2.5 h-2 overflow-hidden rounded-full", r.us ? "bg-white/15" : "bg-neutral-100")} dir="ltr">
                  <motion.div
                    className={cn("h-full rounded-full", r.us ? "bg-white" : r.risky ? "bg-amber-500" : "bg-neutral-400")}
                    animate={{ width: bar(r.value) }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  />
                </div>
                <p className={cn("mt-2 flex items-start gap-1.5 text-[11px] leading-relaxed", r.us ? "text-white/65" : "text-neutral-500")}>
                  {r.risky && <TriangleAlert size={12} className="mt-0.5 shrink-0 text-amber-500" />}
                  {isRtl ? r.noteAr : r.noteEn}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs font-semibold text-neutral-600" dir={isRtl ? "rtl" : "ltr"}>
            {isRtl ? (
              <>
                توفّر حوالي <span className="font-bold text-neutral-900" dir="ltr">{fmt(calc.eu - calc.pencil)}</span> مقابل
                الوكالة الأوروبية، دون التضحية بالملكية أو العربية.
              </>
            ) : (
              <>
                You save about <span className="font-bold text-neutral-900" dir="ltr">{fmt(calc.eu - calc.pencil)}</span> vs.
                the EU agency, without giving up ownership or Arabic.
              </>
            )}
          </p>
          <a
            href="mailto:info@dipencil.com"
            className="mt-4 block rounded-full bg-neutral-900 py-3.5 text-center text-sm font-bold text-white transition hover:bg-neutral-700"
          >
            {isRtl ? "ثبّت السعر واحجز مكالمة" : "Lock this estimate, book a call"}
          </a>
        </div>
      </div>
    </div>
  );
}
