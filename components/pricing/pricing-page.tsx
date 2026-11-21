"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/components/language-context";
import { EditorialPageHero, StatStrip } from "@/components/editorial";
import { PricingSection } from "@/components/pricing/pricing-section";
import { PricingDepth } from "@/components/shared/sections/page-upgrades";
import { PricingCurrencyCode } from "@/lib/pricing/pricing-currency";

export function PricingPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [currency, setCurrency] = useState<PricingCurrencyCode>("USD");

  const metrics = [
    { value: isRtl ? "100% شفافية" : "100% Predictable", label: isRtl ? "نطاقات أسعار معلنة ومحددة" : "Transparent Pricing Tiers" },
    { value: isRtl ? "0 تكاليف خفية" : "Zero Hidden Fees", label: isRtl ? "وضوح تجاري كامل بلا مفاجآت" : "Clear Scopes Before Kickoff" },
    { value: isRtl ? "99.99% التزام" : "Guaranteed SLAs", label: isRtl ? "عقود تنفيذية وضمانات تسليم" : "Commercial Delivery Backing" },
    { value: isRtl ? "دفعات مرحلية" : "Milestone Terms", label: isRtl ? "مرونة وفق مراحل الإنجاز" : "Phased Project Investment" },
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header light />
      <EditorialPageHero
        isRtl={isRtl}
        cards={[
          { letter: "L", label: isRtl ? "الانطلاقة" : "LAUNCH", index: "01", src: "/pricing/launch.mp4" },
          { letter: "M", label: isRtl ? "الإدارة" : "MANAGE", index: "02", src: "/pricing/manage.mp4" },
          { letter: "E", label: isRtl ? "المؤسسات" : "ENTERPRISE", index: "03", src: "/pricing/enterprise.mp4" },
        ]}
        title={
          isRtl ? (
            <>
              <span className="text-[#2057ff]">تسعير</span> واضح بلا مفاجآت
              <span className="text-[#2057ff]">.</span>
            </>
          ) : (
            <>
              <span className="text-[#2057ff]">PRICING</span> BUILT TO BE CLEAR
              <span className="text-[#2057ff]">.</span>
            </>
          )
        }
        subtitle={
          isRtl
            ? "باقات معلنة ونطاقات واضحة قبل البدء، بعقود تنفيذية تضمن تسليم مخرجاتك في موعدها. شفافية تجارية كاملة بلا تكاليف خفية."
            : "Predictable tiers and clear scopes before kickoff. Full commercial transparency with guaranteed SLAs: a fixed number in writing, every time."
        }
        leftMeta={isRtl ? ["الشفافية", "نطاق ثابت", "ضمان"] : ["TRANSPARENT", "FIXED SCOPE", "GUARANTEED"]}
        rightMeta={{
          brand: "PENCIL STUDIO",
          line: isRtl ? "الأسعار // 2026" : "PRICING // 2026",
          accent: isRtl ? "بلا تكاليف خفية" : "ZERO HIDDEN FEES",
        }}
        ticker={{
          status: isRtl ? "باقات معلنة · بلا تكاليف خفية" : "TRANSPARENT TIERS · ZERO HIDDEN FEES",
          locations: ["CAIRO", "DUBAI", "RIYADH", "BERLIN"],
        }}
      />
      <StatStrip items={metrics} />
      <PricingSection selectedCurrency={currency} onSelectCurrency={setCurrency} />
      <PricingDepth selectedCurrency={currency} onSelectCurrency={setCurrency} />
      <Footer />
    </div>
  );
}
