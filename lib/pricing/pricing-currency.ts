export type PricingCurrencyCode = "USD" | "SAR" | "EGP" | "EUR" | "GBP";

export interface CurrencyConfig {
  code: PricingCurrencyCode;
  nameEn: string;
  nameAr: string;
  symbol: string;
  rateVsUsd: number;
}

export const PRICING_CURRENCIES: Record<PricingCurrencyCode, CurrencyConfig> = {
  USD: {
    code: "USD",
    nameEn: "US Dollar",
    nameAr: "دولار أمريكي",
    symbol: "$",
    rateVsUsd: 1.0,
  },
  SAR: {
    code: "SAR",
    nameEn: "Saudi Riyal",
    nameAr: "ريال سعودي",
    symbol: "⃁",
    rateVsUsd: 3.75 * 1.03, // 3.8625
  },
  EGP: {
    code: "EGP",
    nameEn: "Egyptian Pound",
    nameAr: "جنيه مصري",
    symbol: "E£",
    rateVsUsd: 53.44 * 1.03, // 55.0432
  },
  EUR: {
    code: "EUR",
    nameEn: "Euro",
    nameAr: "يورو",
    symbol: "€",
    rateVsUsd: 0.906 * 1.03, // 0.9332
  },
  GBP: {
    code: "GBP",
    nameEn: "British Pound",
    nameAr: "جنيه إسترليني",
    symbol: "£",
    rateVsUsd: 0.7564 * 1.03, // 0.7791
  },
};

export const PRICING_CURRENCY_CODES: PricingCurrencyCode[] = ["USD", "SAR", "EGP", "EUR", "GBP"];

export function formatPrice(
  baseUsd: number | null,
  isMonthly: boolean | "year",
  currencyCode: PricingCurrencyCode,
  isRtl: boolean
): string {
  if (baseUsd === null) {
    return isRtl ? "بالاتفاق" : "custom";
  }

  const activeCurrency = PRICING_CURRENCIES[currencyCode] || PRICING_CURRENCIES.USD;
  const converted = baseUsd * activeCurrency.rateVsUsd;
  const prefix = isRtl ? "من " : "from ";
  const priceSuffix =
    isMonthly === "year"
      ? (isRtl ? "/سنة" : "/yr")
      : isMonthly
      ? (isRtl ? "/شهر" : "/mo")
      : "";

  let formattedVal = "";
  if (activeCurrency.code === "USD" || activeCurrency.code === "EUR" || activeCurrency.code === "GBP") {
    formattedVal = converted.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    formattedVal = converted.toLocaleString("en-US", {
      minimumFractionDigits: baseUsd < 50 ? 2 : 0,
      maximumFractionDigits: baseUsd < 50 ? 2 : 0,
    });
  }

  if (activeCurrency.code === "USD") {
    return `${prefix}$${formattedVal}${priceSuffix}`;
  }
  if (activeCurrency.code === "EUR") {
    return `${prefix}€${formattedVal}${priceSuffix}`;
  }
  if (activeCurrency.code === "GBP") {
    return `${prefix}£${formattedVal}${priceSuffix}`;
  }
  if (activeCurrency.code === "SAR") {
    return isRtl
      ? `${prefix}${formattedVal} ⃁${priceSuffix}`
      : `${prefix}⃁${formattedVal}${priceSuffix}`;
  }
  if (activeCurrency.code === "EGP") {
    return isRtl
      ? `${prefix}${formattedVal} ج.م${priceSuffix}`
      : `${prefix}E£${formattedVal}${priceSuffix}`;
  }

  return `${prefix}$${formattedVal}${priceSuffix}`;
}

