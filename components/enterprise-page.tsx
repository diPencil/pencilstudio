"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";
import { CinematicPageHero } from "@/components/cinematic-page-hero";
import { EnterpriseVaultMotionBg } from "@/components/page-motion-backgrounds";
import { EnterpriseSection } from "@/components/enterprise-section";
import { EnterpriseDepth } from "@/components/page-upgrades";

export function EnterprisePage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header />
      <CinematicPageHero
        isRtl={isRtl}
        badge={isRtl ? "المستوى المؤسسي" : "Enterprise Grade"}
        breadcrumb={[
          { label: isRtl ? "الرئيسية" : "Home", href: "/" },
          { label: isRtl ? "المؤسسات والشركات" : "Enterprise" },
        ]}
        titleSolid={isRtl ? "بنية مؤسسية موثوقة." : "Mission-Critical Systems."}
        titleOutline={isRtl ? "للشركات التي لا تقبل الأعطال." : "Engineered for Zero Downtime."}
        subtitle={
          isRtl
            ? "مدراء حسابات مخصصون، اتفاقيات مستوى خدمة صارمة (SLA 99.99%)، وحماية بيانات متقدمة للمؤسسات الكبرى."
            : "Dedicated account leadership, guaranteed 99.99% SLAs, and isolated enterprise architectures for market leaders."
        }
        bgMotion={<EnterpriseVaultMotionBg />}
        metrics={[
          {
            value: isRtl ? "99.99% استقرار" : "99.99% SLA",
            label: isRtl ? "اتفاقيات تشغيل صارمة وصفر أعطال" : "Zero Downtime Guarantee",
          },
          {
            value: isRtl ? "مدير مخصص" : "Dedicated Lead",
            label: isRtl ? "قيادة حساب مباشرة ودعم تنفيذي" : "Executive Direct Support",
          },
          {
            value: isRtl ? "أمان معزول" : "Isolated Arch",
            label: isRtl ? "حماية بيانات وبيئات سحابية خاصة" : "Enterprise Grade Security",
          },
          {
            value: isRtl ? "توسع فوري" : "Instant Scale",
            label: isRtl ? "بنية تخدم ملايين العمليات المتزامنة" : "High-Concurrency Engine",
          },
        ]}
      />
      <EnterpriseSection />
      <EnterpriseDepth />
      <Footer />
    </div>
  );
}
