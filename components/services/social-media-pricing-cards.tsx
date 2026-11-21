"use client";

import { useState, useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import { Sparkles, ArrowDownRight } from "lucide-react";
import { PencilButton } from "@/components/ui/pencil-button";
import { Reveal } from "@/components/shared/motion/reveal";
import { LazyDotLottie } from "@/components/shared/media/lazy-dot-lottie";
import { cn } from "@/lib/utils";

export type SocialCurrency = "USD" | "SAR" | "EGP" | "EUR" | "GBP";

const CURRENCY_META: Record<
  SocialCurrency,
  {
    rateVsUsd: number;
    labelEn: string;
    labelAr: string;
    symbolEn: string;
    symbolAr: string;
  }
> = {
  USD: { rateVsUsd: 1.0, labelEn: "USD · $", labelAr: "دولار · $", symbolEn: "$", symbolAr: "$" },
  SAR: { rateVsUsd: 3.75, labelEn: "SAR · ⃁", labelAr: "ريال · ⃁", symbolEn: "⃁", symbolAr: "⃁" },
  EGP: { rateVsUsd: 50.5, labelEn: "EGP · E£", labelAr: "جنيه · ج.م", symbolEn: "E£", symbolAr: "ج.م" },
  EUR: { rateVsUsd: 0.92, labelEn: "EUR · €", labelAr: "يورو · €", symbolEn: "€", symbolAr: "€" },
  GBP: { rateVsUsd: 0.79, labelEn: "GBP · £", labelAr: "إسترليني · £", symbolEn: "£", symbolAr: "£" },
};

const CURRENCY_CODES: SocialCurrency[] = ["USD", "SAR", "EGP", "EUR", "GBP"];

interface SocialCardData {
  id: string;
  badgeEn: string;
  badgeAr: string;
  postsCount: number;
  priceUsd: number;
  originalPriceUsd?: number;
  popular?: boolean;
  nameEn: string;
  nameAr: string;
  subtitleEn: string;
  subtitleAr: string;
  gradientClass: string;
  accentTextColor: string;
  shapeType: "circle" | "boxes" | "diamonds" | "rings";
  featuresEn: string[];
  featuresAr: string[];
}

const SOCIAL_PLANS: SocialCardData[] = [
  {
    id: "plan-8",
    badgeEn: "Starter",
    badgeAr: "الانطلاق",
    postsCount: 8,
    priceUsd: 390,
    originalPriceUsd: 500,
    nameEn: "8 Designs / mo",
    nameAr: "8 تصميمات / شهر",
    subtitleEn: "Essential monthly visual presence for lean brands and early-stage products.",
    subtitleAr: "حضور رقمي منظم للشركات والمنتجات الناشئة التي تبدأ أولى خطواتها.",
    // 1. RED (أحمر)
    gradientClass: "from-[#E53935] via-[#D32F2F] to-[#B71C1C]",
    accentTextColor: "text-[#D32F2F]",
    shapeType: "circle",
    featuresEn: [
      "8 Custom graphic designs per month",
      "Feed posts, stories & promotional banners",
      "Monthly brand color & font curation",
      "Ready formats for IG, FB, X & LinkedIn",
      "2 Revision rounds per weekly batch",
      "Export in high-res PNG + source files",
    ],
    featuresAr: [
      "8 تصميمات جرافيكية مخصصة شهرياً",
      "بوستات تغذية وبانرات ترويجية واستوريز",
      "توجه بصري وتنسيق ألوان دوري متناغم",
      "مقاسات مخصصة لإنستغرام، فيسبوك، إكس ولينكد إن",
      "جولتا تعديلات ومراجعة لكل دفعة أسبوعية",
      "تسليم بجودة فائقة PNG مع الملفات المفتوحة",
    ],
  },
  {
    id: "plan-12",
    badgeEn: "Growth",
    badgeAr: "النمو المستمر",
    postsCount: 12,
    priceUsd: 590,
    originalPriceUsd: 700,
    nameEn: "12 Designs / mo",
    nameAr: "12 تصميماً / شهر",
    subtitleEn: "Consistent 3-posts-per-week cadence engineered for audience engagement.",
    subtitleAr: "معدل نشر ثابت (3 تصاميم أسبوعياً) لتعزيز التفاعل وبناء جمهور دائم.",
    // 2. GREEN (أخضر)
    gradientClass: "from-[#16A34A] via-[#15803D] to-[#14532D]",
    accentTextColor: "text-[#16A34A]",
    shapeType: "boxes",
    featuresEn: [
      "12 Custom graphic designs per month",
      "Carousels, product highlights & infographics",
      "2 Animated story / reel motion covers",
      "Cohesive weekly visual narrative",
      "Multi-platform format optimization",
      "Weekly staging review & priority delivery",
    ],
    featuresAr: [
      "12 تصميماً جرافيكياً مخصصاً شهرياً",
      "تصميمات كاروسيل وسلايدات تفاعلية وإنفوجرافيك",
      "غلافان متحركان للريلز والستوريز مع الموشن",
      "سرد بصري متناسق ومرتب أسبوعاً بأسبوع",
      "مواءمة متكاملة لكافة المنصات الإعلانية",
      "مراجعة أسبوعية حية وجدولة تسليم سريعة",
    ],
  },
  {
    id: "plan-16",
    badgeEn: "Pro Brand",
    badgeAr: "الأكثر طلباً",
    postsCount: 16,
    priceUsd: 790,
    originalPriceUsd: 850,
    popular: true,
    nameEn: "16 Designs / mo",
    nameAr: "16 تصميماً / شهر",
    subtitleEn: "High-impact visual production tailored for competitive market leaders.",
    subtitleAr: "إنتاج بصري مكثف عالي الجودة للشركات ذات الحضور التنافسي القوي.",
    // 3. BLUE (أزرق)
    gradientClass: "from-[#2057FF] via-[#1D4ED8] to-[#1E3A8A]",
    accentTextColor: "text-[#2057FF]",
    shapeType: "diamonds",
    featuresEn: [
      "16 Custom graphic designs per month",
      "High-converting Paid Ad creative variants",
      "4 Motion graphic reels (9:16 vertical)",
      "Carousel storytelling decks & campaign assets",
      "1 Urgent same-day turnaround per month",
      "Dedicated senior designer on WhatsApp",
    ],
    featuresAr: [
      "16 تصميماً جرافيكياً مخصصاً شهرياً",
      "تصميمات إعلانية متعددة للـ Media Buying",
      "4 فيديوهات ريلز وموشن جرافيك رأسي (9:16)",
      "سلايدات كاروسيل مبيعات ومواد الحملات الترويجية",
      "طلب تصميم طارئ خلال نفس اليوم شهرياً",
      "مصمم أول مخصص وقناة تواصل مباشرة عبر واتساب",
    ],
  },
  {
    id: "plan-30",
    badgeEn: "Full Coverage",
    badgeAr: "تغطية كاملة (30 تصميماً)",
    postsCount: 30,
    priceUsd: 1390,
    originalPriceUsd: 1500,
    nameEn: "30 Designs / mo",
    nameAr: "30 تصميماً / شهر",
    subtitleEn: "Daily non-stop creative coverage (30 designs per month) for aggressive marketing campaigns.",
    subtitleAr: "تغطية يومية كاملة بمعدل 30 تصميماً شهرياً لإدارة حملات تسويقية متزامنة وعالية الكثافة.",
    // 4. BLACK (أسود)
    gradientClass: "from-[#222226] via-[#161618] to-[#0A0A0C]",
    accentTextColor: "text-neutral-950",
    shapeType: "rings",
    featuresEn: [
      "30 Custom graphic designs per month (Daily coverage)",
      "8 Motion reels & animated campaign videos",
      "Complete multi-channel advertising variations",
      "Landing page banners & email marketing graphics",
      "3 Urgent same-day turnaround requests",
      "Dedicated Art Director + weekly creative sync",
    ],
    featuresAr: [
      "30 تصميماً جرافيكياً مخصصاً شهرياً (تغطية يومية كاملة)",
      "8 فيديوهات ريلز وموشن جرافيك احترافي",
      "حزمة متكاملة لتصميمات الحملات الممولة في كل المنصات",
      "بانرات لصفحات الهبوط وتصميمات النشرات البريدية",
      "ما يصل إلى 3 تصميمات طارئة في نفس اليوم شهرياً",
      "آرت دايركتور مخصص مع اجتماعات إستراتيجية أسبوعية",
    ],
  },
];

interface AnimatedSocialPriceProps {
  usdPrice: number;
  rate: number;
  currency: SocialCurrency;
  isRtl: boolean;
  isOriginal?: boolean;
  className?: string;
}

function AnimatedSocialPrice({
  usdPrice,
  rate,
  currency,
  isRtl,
  isOriginal = false,
  className,
}: AnimatedSocialPriceProps) {
  const target = Math.round(usdPrice * rate);
  const [displayVal, setDisplayVal] = useState(target);
  const [isCounting, setIsCounting] = useState(false);
  const prevTargetRef = useRef(target);

  useEffect(() => {
    const start = prevTargetRef.current;
    const end = target;
    prevTargetRef.current = end;

    if (start === end) {
      setDisplayVal(end);
      return;
    }

    setIsCounting(true);
    const controls = animate(start, end, {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayVal(Math.round(latest));
      },
      onComplete: () => {
        setIsCounting(false);
      },
    });

    return () => controls.stop();
  }, [target]);

  const formattedNum = new Intl.NumberFormat("en-US").format(displayVal);

  let formatted = `$${formattedNum}`;
  if (currency === "USD") formatted = `$${formattedNum}`;
  else if (currency === "EUR") formatted = `€${formattedNum}`;
  else if (currency === "GBP") formatted = `£${formattedNum}`;
  else if (currency === "SAR") formatted = isRtl ? `${formattedNum} ⃁` : `⃁${formattedNum}`;
  else if (currency === "EGP") formatted = isRtl ? `${formattedNum} ج.م` : `E£${formattedNum}`;

  return (
    <motion.span
      className={className}
      animate={
        isCounting
          ? {
              scale: isOriginal ? [1, 1.02, 1] : [1, 1.06, 1],
            }
          : { scale: 1 }
      }
      transition={{ duration: 0.35, ease: "easeOut" }}
      dir="ltr"
    >
      {formatted}
    </motion.span>
  );
}

export function SocialMediaPricingCards({ isRtl }: { isRtl: boolean }) {
  const [currency, setCurrency] = useState<SocialCurrency>("USD");
  const [rates, setRates] = useState<Record<SocialCurrency, number>>({
    USD: 1.0,
    SAR: 3.75,
    EGP: 50.5,
    EUR: 0.92,
    GBP: 0.79,
  });

  // Fetch live exchange rates
  useEffect(() => {
    let active = true;
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (!active || data?.result !== "success" || !data?.rates) return;
        setRates({
          USD: 1.0,
          SAR: Number(data.rates.SAR) || 3.75,
          EGP: Number(data.rates.EGP) || 50.5,
          EUR: Number(data.rates.EUR) || 0.92,
          GBP: Number(data.rates.GBP) || 0.79,
        });
      })
      .catch(() => { });
    return () => {
      active = false;
    };
  }, []);

  const formatConverted = (usdPrice: number) => {
    const rate = rates[currency] || 1;
    const amount = Math.round(usdPrice * rate);
    const formattedNum = new Intl.NumberFormat("en-US").format(amount);

    if (currency === "USD") return `$${formattedNum}`;
    if (currency === "EUR") return `€${formattedNum}`;
    if (currency === "GBP") return `£${formattedNum}`;

    if (currency === "SAR") {
      return isRtl ? `${formattedNum} ⃁` : `⃁${formattedNum}`;
    }
    if (currency === "EGP") {
      return isRtl ? `${formattedNum} ج.م` : `E£${formattedNum}`;
    }

    return `$${formattedNum}`;
  };

  return (
    <section className="relative overflow-hidden border-t border-neutral-200/90 bg-[#F7F8FC] py-16 sm:py-20">
      <div className="container-custom">
        {/* ── HEADER: LEFT HEADLINE VS RIGHT ARROW + NARRATIVE + TIGHTLY ATTACHED CURRENCY BAR ── */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-4 text-start">
            {/* Left: Eyebrow + Big Headline */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/60 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#2057FF]">
                <Sparkles size={13} />
                <span>{isRtl ? "04.2 // اشتراكات سوشيال ميديا بخصومات حصرية" : "04.2 // DISCOUNTED SOCIAL MEDIA DESIGNS"}</span>
              </div>

              <h2 className="mt-4 text-3xl font-normal leading-[1.14] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl">
                {isRtl ? (
                  <>
                    <span className="inline-block align-middle me-2 sm:me-3 -mt-2 sm:-mt-3 shrink-0 h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20">
                      <LazyDotLottie
                        src="/lottie/sale-badge.lottie"
                        loop
                        autoplay
                        immediate
                        renderConfig={{ devicePixelRatio: 4, autoResize: true }}
                        className="h-full w-full pointer-events-none select-none inline-block align-middle"
                      />
                    </span>
                    <span>اشتراكات شهرية مخفّضة</span> <br />
                    <span>لتصاميم السوشيال ميديا،</span> <br />
                    <span className="font-light italic text-neutral-500">وفر حتى 22% مع تسليم أسبوعي منتظم.</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block align-middle me-2 sm:me-3 -mt-2 sm:-mt-3 shrink-0 h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20">
                      <LazyDotLottie
                        src="/lottie/sale-badge.lottie"
                        loop
                        autoplay
                        immediate
                        renderConfig={{ devicePixelRatio: 4, autoResize: true }}
                        className="h-full w-full pointer-events-none select-none inline-block align-middle"
                      />
                    </span>
                    <span>Discounted monthly</span> <br />
                    <span>social media designs,</span> <br />
                    <span className="font-light italic text-neutral-500">save up to 22% with staged weekly handoffs.</span>
                  </>
                )}
              </h2>
            </div>

            {/* Right: Blue Arrow Icon + Text Block + Currency Bar (Tightly Attached Directly Underneath) */}
            <div className="flex max-w-lg flex-col items-start lg:items-end gap-3 text-start">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-md shadow-blue-600/25">
                  <ArrowDownRight size={18} className="rtl:rotate-90" />
                </div>
                <div>
                  {/* Green Limited-Time Offer Announcement Pill */}
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#16A34A] px-3 py-0.5 text-[11px] font-extrabold text-white shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    <span>{isRtl ? "إعلان لفترة محدودة" : "Limited-Time Offer"}</span>
                  </div>

                  <p className="text-sm font-bold text-neutral-950">
                    {isRtl ? "باقات اشتراك بأسعار مخفّضة ومرونة كاملة" : "Discounted Retainers & Full Flexibility"}
                  </p>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-neutral-600">
                    {isRtl
                      ? "اشتراكات تصميم دورية بأسعار مخفضة وخصومات حصرية لعملائنا في كل الخدمات: 8، 12، 16، أو 30 (بدلاً من 24) تصميماً شهرياً مع تسليم أسبوعي منتظم، جودة إبداعية ثابتة، وبلا أي عقود احتكارية."
                      : "Special discounted monthly design retainers for our clients across all services: 8, 12, 16, or 30 (instead of 24) designs per month with direct savings, staged weekly handoffs, and zero lock-in contracts."}
                  </p>
                </div>
              </div>

              {/* Currency Selector Bar: Lowered slightly more as requested */}
              <div className="mt-[85px] sm:mt-[96px] inline-flex items-center gap-2 p-1.5 rounded-full bg-white border border-neutral-200/90 shadow-xs self-start lg:self-end">
                <span className="ps-3 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  {isRtl ? "العملة:" : "Currency:"}
                </span>
                <div className="inline-flex items-center gap-1 p-0.5 rounded-full bg-neutral-100">
                  {CURRENCY_CODES.map((c) => {
                    const isCur = currency === c;
                    return (
                      <button
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={cn(
                          "rounded-full px-3 py-1.5 text-xs font-bold transition-all select-none cursor-pointer",
                          isCur ? "bg-white text-neutral-950 shadow-xs" : "text-neutral-500 hover:text-neutral-900"
                        )}
                      >
                        <span dir="ltr">{isRtl ? CURRENCY_META[c].labelAr : CURRENCY_META[c].labelEn}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── 4 SQUISHY COLORFUL CARDS (8, 12, 16, 30 DESIGNS) WITH GENEROUS SPACING LIKE UPPER PRICING ── */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {SOCIAL_PLANS.map((plan, idx) => {
            const priceFormatted = formatConverted(plan.priceUsd);
            const discountPercent = plan.originalPriceUsd
              ? Math.round(((plan.originalPriceUsd - plan.priceUsd) / plan.originalPriceUsd) * 100)
              : 0;
            const waMessage = isRtl
              ? `مرحباً، أود الاستفسار عن تفاصيل باقة السوشيال ميديا المخفضة (${plan.nameAr} - ${priceFormatted}) وكيف سيكون نظام العمل والاشتراك.`
              : `Hello, I'd like to ask about the details of the discounted Social Media retainer (${plan.nameEn} - ${priceFormatted}), how the workflow works, and how to subscribe.`;
            const waLink = `https://wa.me/201003778273?text=${encodeURIComponent(waMessage)}`;

            return (
              <Reveal key={plan.id} delay={0.08 * (idx + 1)}>
                <div
                  className={cn(
                    "group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:p-7 text-white text-start shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br select-none",
                    plan.gradientClass
                  )}
                >
                  {/* ── ANIMATED DECORATIVE SQUISHY SHAPES (HOVER ANIMATION) ── */}
                  {plan.shapeType === "circle" && (
                    <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-black/15 blur-[1px] transition-transform duration-700 ease-out group-hover:scale-130 group-hover:rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2" />
                  )}

                  {plan.shapeType === "boxes" && (
                    <>
                      <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-3xl bg-black/15 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:rotate-12 group-hover:translate-x-3" />
                      <div className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-white/10 transition-transform duration-700 ease-out group-hover:scale-115 group-hover:-rotate-12" />
                    </>
                  )}

                  {plan.shapeType === "diamonds" && (
                    <>
                      <div className="pointer-events-none absolute -top-6 -right-6 h-36 w-36 rounded-2xl bg-black/20 rotate-45 transition-transform duration-700 ease-out group-hover:scale-130 group-hover:rotate-90 group-hover:translate-x-2" />
                      <div className="pointer-events-none absolute top-12 right-2 h-24 w-24 rounded-2xl bg-white/15 rotate-45 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-12" />
                    </>
                  )}

                  {plan.shapeType === "rings" && (
                    <>
                      <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full border-[10px] border-white/15 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:rotate-45" />
                      <div className="pointer-events-none absolute top-6 right-6 h-28 w-28 rounded-full bg-black/20 transition-transform duration-700 ease-out group-hover:scale-115" />
                    </>
                  )}

                  {/* ── CARD CONTENT ── */}
                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Top Badge & Discount Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-white uppercase shadow-inner">
                        {isRtl ? plan.badgeAr : plan.badgeEn}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {discountPercent > 0 && (
                          <span className="rounded-full bg-white/25 border border-white/30 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-xs">
                            {isRtl ? `خصم ${discountPercent}%` : `${discountPercent}% OFF`}
                          </span>
                        )}
                        {plan.popular && (
                          <span className={cn("rounded-full bg-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm", plan.accentTextColor)}>
                            {isRtl ? "الأكثر طلباً" : "Popular"}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price Header */}
                    <div className="mt-6 flex flex-col gap-1">
                      {/* Main Converted Price */}
                      <div dir="ltr">
                        <AnimatedSocialPrice
                          usdPrice={plan.priceUsd}
                          rate={rates[currency] || 1}
                          currency={currency}
                          isRtl={isRtl}
                          className="text-3xl sm:text-4xl font-black text-white tracking-tight"
                        />
                      </div>

                      {/* Strikethrough Original Price Underneath */}
                      {plan.originalPriceUsd && (
                        <div dir="ltr" className="-mt-0.5">
                          <AnimatedSocialPrice
                            usdPrice={plan.originalPriceUsd}
                            rate={rates[currency] || 1}
                            currency={currency}
                            isRtl={isRtl}
                            isOriginal
                            className="text-base sm:text-lg font-bold text-white/50 line-through decoration-white/70 decoration-2"
                          />
                        </div>
                      )}

                      <div className="mt-0.5 flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-white/90">
                        <span>{isRtl ? "اشتراك شهري مخفّض / شهر" : "Discounted monthly retainer / mo"}</span>
                      </div>
                    </div>

                    {/* Posts Count Callout Box */}
                    <div className="my-5 flex items-center justify-between rounded-2xl bg-white/15 backdrop-blur-md p-3.5 border border-white/20 transition-all duration-300 group-hover:bg-white/25">
                      <span className="text-xs font-semibold text-white/90">
                        {isRtl ? "عدد التصاميم:" : "Monthly output:"}
                      </span>
                      <span className="font-mono text-sm sm:text-base font-black text-white">
                        {plan.postsCount} {isRtl ? "تصاميم" : "Posts"}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xs leading-relaxed text-white/85 min-h-[36px] line-clamp-2">
                      {isRtl ? plan.subtitleAr : plan.subtitleEn}
                    </p>
                  </div>

                  {/* ── CARD BOTTOM ACTION: SIGNATURE PENCIL BUTTON ── */}
                  <div className="relative z-10 mt-6 pt-2">
                    <PencilButton
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      variant="white"
                      size="default"
                      fullWidth
                      icon={
                        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center pointer-events-none select-none">
                          <LazyDotLottie
                            src="/lottie/sale-badge.lottie"
                            loop
                            autoplay
                            immediate
                            renderConfig={{ devicePixelRatio: 6, autoResize: true }}
                            className="h-full w-full pointer-events-none select-none"
                          />
                        </span>
                      }
                      hoverLabel={isRtl ? "احصل على العرض ←" : "Get Offer →"}
                      className="font-bold shadow-md hover:shadow-xl"
                    >
                      {isRtl ? "احصل على العرض" : "Get Offer"}
                    </PencilButton>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── EXCLUSIVE PARTNER NOTE UNDER CARDS ── */}
        <Reveal delay={0.4}>
          <div className="mt-8 sm:mt-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/90 bg-neutral-50/80 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-neutral-600 shadow-2xs backdrop-blur-xs transition-all hover:border-neutral-300">
              <span className="flex h-2 w-2 rounded-full bg-[#2057FF] animate-pulse shrink-0" />
              <span>
                {isRtl
                  ? "اشتراكات خاصة وعروض حصرية فقط للشريك الخاص بنا في بنسل ستوديو"
                  : "Special retainers and exclusive offers reserved only for our partners at Pencil Studio."}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

