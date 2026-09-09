"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-context";
import { cn } from "@/lib/utils";

type Currency = "USD" | "EGP" | "SAR" | "GBP";

const FALLBACK_RATES: Record<Currency, number> = {
  USD: 1,
  EGP: 50.5,
  SAR: 3.75,
  GBP: 0.79,
};

const META: Record<Currency, { en: string; ar: string }> = {
  USD: { en: "$", ar: "$" },
  EGP: { en: "EGP", ar: "ج.م" },
  SAR: { en: "SAR", ar: "ر.س" },
  GBP: { en: "£", ar: "£" },
};

const CURRENCIES: Currency[] = ["USD", "EGP", "SAR", "GBP"];

export function CurrencyConverter({
  baseUsd,
  monthly,
}: {
  baseUsd: number;
  monthly: boolean;
}) {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [currency, setCurrency] = useState<Currency>("USD");
  const [rates, setRates] = useState<Record<Currency, number>>(FALLBACK_RATES);
  const [live, setLive] = useState(false);
  const [updatedLabel, setUpdatedLabel] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled || data?.result !== "success" || !data?.rates) return;
        setRates({
          USD: 1,
          EGP: Number(data.rates.EGP) || FALLBACK_RATES.EGP,
          SAR: Number(data.rates.SAR) || FALLBACK_RATES.SAR,
          GBP: Number(data.rates.GBP) || FALLBACK_RATES.GBP,
        });
        setLive(true);
        if (data.time_last_update_utc) {
          const d = new Date(data.time_last_update_utc);
          setUpdatedLabel(
            d.toLocaleDateString(isRtl ? "ar-EG" : "en-GB", {
              day: "numeric",
              month: "short",
            })
          );
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const converted = Math.round(baseUsd * rates[currency]);
  const grouped = new Intl.NumberFormat("en-US").format(converted);
  const sym = META[currency][isRtl ? "ar" : "en"];
  const rateLabel = String(Math.round(rates[currency] * 100) / 100);

  return (
    <div>
      <p className="mt-3 flex flex-wrap items-baseline gap-x-2" dir="ltr">
        <span className="text-4xl font-black">
          {sym} {grouped}
        </span>
        {monthly && (
          <span className="text-sm font-bold text-white/60">
            {isRtl ? "شهرياً" : "/mo"}
          </span>
        )}
      </p>
      <p className="mt-1 text-xs font-semibold text-white/50">
        {isRtl
          ? "يبدأ من كده. السعر النهائي بعد مكالمة التعارف."
          : "Starting from here. Final quote after the intro call."}
      </p>

      <div className="mt-5">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-white/45">
          {isRtl ? "اعرض السعر بـ" : "Show in"}
        </p>
        <div className="flex flex-wrap gap-2">
          {CURRENCIES.map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition",
                currency === c
                  ? "bg-white text-neutral-900"
                  : "border border-white/20 text-white/65 hover:bg-white/10 hover:text-white"
              )}
            >
              <span dir="ltr">
                {c} · {META[c].en === META[c].ar ? META[c].en : isRtl ? META[c].ar : META[c].en}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] text-white/50">
          <span
            className={cn(
              "inline-block h-1.5 w-1.5 shrink-0 rounded-full",
              live ? "bg-green-400" : "bg-amber-300"
            )}
          />
          {live ? (
            <span>
              {isRtl
                ? `سعر البنك اليوم: 1$ = ${rateLabel} ${sym}`
                : `Bank rate today: $1 = ${rateLabel} ${sym}`}
              {updatedLabel ? (isRtl ? ` (محدث ${updatedLabel})` : ` (updated ${updatedLabel})`) : ""}
            </span>
          ) : (
            <span>
              {isRtl
                ? "سعر استرشادي لحد ما يوصل سعر البنك"
                : "Indicative rate until the bank rate loads"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
