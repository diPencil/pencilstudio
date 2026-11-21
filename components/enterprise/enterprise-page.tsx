"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/components/language-context";
import { EditorialPageHero, StatStrip } from "@/components/editorial";
import { EnterpriseDigitalOpsSection } from "@/components/enterprise/enterprise-digital-ops-section";
import { EnterpriseSection } from "@/components/enterprise/enterprise-section";
import { EnterpriseGovernanceSection } from "@/components/enterprise/enterprise-governance-section";
import { PENCIL } from "@/components/shared/ui/pencil-ui";
import { cn } from "@/lib/utils";

export function EnterprisePage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={cn("min-h-screen text-neutral-900 selection:bg-[#2057ff] selection:text-white", PENCIL.paper)}>
      <Header light />

      {/* ============================================================ */}
      {/* 1. EDITORIAL HERO (Signature PENCIL Studio light stage)      */}
      {/* ============================================================ */}
      <EditorialPageHero
        isRtl={isRtl}
        cards={[
          {
            label: "SLA 99",
            index: "01",
            src: "/enterprise/sla99.mp4",
          },
          {
            label: "DEDICATED",
            index: "02",
            src: "/enterprise/edicated.mp4",
          },
          {
            label: isRtl ? "بوابة AI برو" : "SUPERFELIZ PRO",
            index: "03",
            src: "/solutions/feliz-ai.mp4",
          },
        ]}
        title={
          isRtl ? (
            <>
              <span className="text-[#2057ff]">أنظمة حرجة</span>
              <br />
              بلا توقف
              <span className="text-[#2057ff]">.</span>
            </>
          ) : (
            <>
              <span className="text-[#2057ff]">MISSION-CRITICAL</span>
              <br />
              ZERO DOWNTIME
              <span className="text-[#2057ff]">.</span>
            </>
          )
        }
        subtitle={
          isRtl
            ? "قيادة حساب مخصصة، اتفاقيات مستوى خدمة ملزمة قانونياً (SLA 99.99%)، وحماية بيانات متقدمة للمؤسسات الكبرى."
            : "Dedicated executive leadership, legally guaranteed 99.99% SLAs, and isolated enterprise architectures for market leaders."
        }
        leftMeta={isRtl ? ["SLA 99", "DEDICATED", "SUPERFELIZ PRO"] : ["SLA 99", "DEDICATED", "SUPERFELIZ PRO"]}
        rightMeta={{
          brand: "PENCIL STUDIO",
          line: isRtl ? "المؤسسات // 2026" : "ENTERPRISE // 2026",
          accent: "ZERO COMPROMISE",
        }}
        ticker={{
          status: isRtl ? "قيادة حساب مباشرة · رد طوارئ P1 في أقل من 15 دقيقة · عقود سرية وحماية ملكية فكرية" : "EXECUTIVE DIRECT LINE · P1 RESPONSE < 15 MIN · FULL IP & NDA PROTECTION",
          locations: ["CAIRO", "DUBAI", "RIYADH", "BERLIN"],
        }}
      />

      {/* ============================================================ */}
      {/* 2. STAT STRIP: ENTERPRISE COMMITMENTS                        */}
      {/* ============================================================ */}
      <StatStrip
        items={[
          {
            value: isRtl ? "99.99% استقرار" : "99.99% Uptime",
            label: isRtl ? "اتفاقيات تشغيل ملزمة وصفر أعطال" : "Legally Enforceable SLA",
          },
          {
            value: isRtl ? "< 15 دقيقة" : "< 15 Min",
            label: isRtl ? "استجابة مباشرة للحالات الحرجة P1" : "Critical P1 Incident Response",
          },
          {
            value: isRtl ? "فريق Pod مخصص" : "Dedicated Pod",
            label: isRtl ? "مدير حساب، Tech Lead وDevOps" : "Lead, DevOps & Product Team",
          },
          {
            value: isRtl ? "عقد شراكة ثابت" : "Zero Surprises",
            label: isRtl ? "اشتراك شهري شامل النمو والدعم" : "Predictable Operating Retainer",
          },
        ]}
      />

      {/* ============================================================ */}
      {/* 3. UNIFIED DIGITAL HQ: FULL COMPANY MANAGEMENT               */}
      {/*    "Everything your business needs under one roof"           */}
      {/* ============================================================ */}
      <EnterpriseDigitalOpsSection />

      {/* ============================================================ */}
      {/* 4. GOVERNANCE, SLA MATRIX & EXECUTIVE CONSULTATION BANNER   */}
      {/*    "Contractual accountability.. never vague promises"       */}
      {/* ============================================================ */}
      <EnterpriseGovernanceSection />

      {/* ============================================================ */}
      {/* 5. 4 PILLARS OF PARTNERSHIP                                  */}
      {/*    "For companies that, can't afford downtime"               */}
      {/* ============================================================ */}
      <EnterpriseSection />

      <Footer />
    </div>
  );
}
