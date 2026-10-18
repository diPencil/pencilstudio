"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";
import { CinematicPageHero } from "@/components/cinematic-page-hero";
import { PricingSpectrumMotionBg } from "@/components/page-motion-backgrounds";
import { PricingSection } from "@/components/pricing-section";
import { PricingDepth } from "@/components/page-upgrades";

export function PricingPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header />
      <CinematicPageHero
        isRtl={isRtl}
        badge={isRtl ? "الشفافية الكاملة" : "Transparent Pricing"}
        breadcrumb={[
          { label: isRtl ? "الرئيسية" : "Home", href: "/" },
          { label: isRtl ? "الأسعار والاستثمار" : "Pricing & Plans" },
        ]}
        titleSolid={isRtl ? "استثمار واضح ومباشر." : "Transparent Investment."}
        titleOutline={isRtl ? "قيمة حقيقية بلا تكاليف خفية." : "Real Value, Zero Hidden Fees."}
        subtitle={
          isRtl
            ? "نطاقات أسعار معلنة ومحددة بدقة قبل البدء، مع عقود تنفيذية واضحة تضمن تسليم مخرجاتك في موعدها."
            : "Predictable pricing tiers and clear scopes before kickoff. Full commercial transparency with guaranteed SLAs."
        }
        bgMotion={<PricingSpectrumMotionBg />}
        metrics={[
          {
            value: isRtl ? "100% شفافية" : "100% Predictable",
            label: isRtl ? "نطاقات أسعار معلنة ومحددة" : "Transparent Pricing Tiers",
          },
          {
            value: isRtl ? "0 تكاليف خفية" : "Zero Hidden Fees",
            label: isRtl ? "وضوح تجاري كامل بلا مفاجآت" : "Clear Scopes Before Kickoff",
          },
          {
            value: isRtl ? "99.99% التزام" : "Guaranteed SLAs",
            label: isRtl ? "عقود تنفيذية وضمانات تسليم" : "Commercial Delivery Backing",
          },
          {
            value: isRtl ? "دفعات مرحلية" : "Milestone Terms",
            label: isRtl ? "مرونة وفق مراحل الإنجاز" : "Phased Project Investment",
          },
        ]}
      />
      <PricingSection />
      <PricingDepth />
      <Footer />
    </div>
  );
}
