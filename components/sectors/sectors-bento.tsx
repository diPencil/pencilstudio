"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import { useLanguage } from "@/components/language-context";
import { PencilSectionTitle } from "@/components/shared/ui/pencil-ui";
import { cn } from "@/lib/utils";
import {
  Workflow,
  Command,
  Zap,
  Store,
  Smartphone,
  Globe,
  ShieldCheck,
  TrendingUp,
  Receipt,
  CornerDownLeft,
  ArrowUpRight,
  Activity,
  Sparkles,
  FileCheck2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

function SuperFelizIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/macosdock/superfeliz.svg"
      alt="SuperFeliz"
      width={16}
      height={16}
      className={cn("h-4 w-4 shrink-0 object-contain drop-shadow-[0_2px_4px_rgba(32,87,255,0.3)]", className)}
    />
  );
}

/**
 * PencilBentoCard - Signature Pencil Studio Bento Card
 * Features the rotating electric blue moving border stroke on hover,
 * physical depth, inner radial glow, and refined typography.
 */
function PencilBentoCard({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl",
        dark
          ? "border-neutral-800 bg-gradient-to-b from-[#0c121e] via-[#070b13] to-[#04070d] text-white hover:border-[#2057ff]/40 hover:shadow-blue-600/20"
          : "border-neutral-200/90 bg-white text-neutral-900 hover:border-[#2057ff]/40 hover:bg-[#FCFDFF] hover:shadow-blue-500/10",
        className
      )}
    >
      {/* Subtle Ambient Radial Glow on Hover */}
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500",
          dark
            ? "bg-[#2057ff]/25 opacity-0 group-hover:opacity-100"
            : "bg-[#2057ff]/8 opacity-0 group-hover:opacity-100"
        )}
      />

      {children}
    </div>
  );
}

export function SectorsBento() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";
  const [syncActive, setSyncActive] = useState(true);

  // 1. Integration Card (Tall Left Card - 3 Rows)
  const IntegrationCard = (
    <PencilBentoCard>
      <div className="flex h-full flex-col justify-between p-6 sm:p-7">
        <div>
          {/* Top Header & Live Pulse */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2057ff]/15 to-[#00d2ff]/10 text-[#2057ff] border border-blue-500/20 shadow-sm">
              <Workflow className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-bold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{isRtl ? "مزامنة نشطة" : "CORE SYNC"}</span>
            </div>
          </div>

          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#2057ff]">
            {isRtl ? "الربط المركزي" : "VERTICAL ENGINE"}
          </span>
          <h3 className="mt-1.5 text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
            {isRtl ? "تكامل العمليات ونقاط البيع" : "Operations & POS Core"}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 font-normal">
            {isRtl
              ? "ربط فوري بين الكاشير وشاشات المطبخ وجداول الحجوزات ومتابعة الواتساب. لا وجود لإدخال بيانات يدوي يضيع وقت ذروة العمل."
              : "Direct real-time bridge between your POS, kitchen displays, booking schedules, and WhatsApp routing. Zero manual re-entry during rush hours."}
          </p>

          {/* Endpoints Matrix */}
          <div className="mt-6 space-y-2 border-t border-neutral-100 pt-5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
              {isRtl ? "المسارات المربوطة لحظياً" : "Live Operational Endpoints"}
            </div>
            {[
              {
                name: isRtl ? "نظام نقاط البيع والكاشير" : "POS / Cashier System",
                status: isRtl ? "نشط" : "Live",
                icon: Store,
                iconColor: "text-[#2057ff]",
              },
              {
                name: isRtl ? "واتساب كلاود بزنس" : "WhatsApp Cloud API",
                status: isRtl ? "توجيه ذكي" : "Auto-route",
                icon: FaWhatsapp,
                iconColor: "text-[#25D366]",
              },
              {
                name: isRtl ? "تطبيقات الويب والموبايل" : "Web & Mobile Clients",
                status: isRtl ? "متصل" : "Connected",
                icon: Smartphone,
                iconColor: "text-[#2057ff]",
              },
              {
                name: isRtl ? "وكيل Feliz للرد والفرز الذكي" : "SuperFeliz AI Agent Dispatch",
                status: isRtl ? "نشط 24/7" : "Active 24/7",
                icon: SuperFelizIcon,
                iconColor: "",
              },
              {
                name: isRtl ? "الفاتورة الإلكترونية والـ ERP" : "ETA E-Invoice & ERP Sync",
                status: isRtl ? "معتمد" : "Compliant",
                icon: FileCheck2,
                iconColor: "text-emerald-500",
              },
            ].map((ep) => {
              const Icon = ep.icon;
              return (
                <div
                  key={ep.name}
                  className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/70 px-3.5 py-2.5 text-xs font-semibold text-neutral-800 transition-colors group-hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={cn("h-4 w-4 shrink-0", ep.iconColor || "text-[#2057ff]")} />
                    <span>{ep.name}</span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {ep.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Toggle */}
        <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
            <ShieldCheck className="h-4 w-4 text-[#2057ff]" />
            <span>{isRtl ? "حماية تدفق البيانات 24/7" : "Automated Flow Guard"}</span>
          </div>
          <Switch
            checked={syncActive}
            onCheckedChange={setSyncActive}
            aria-label="Toggle sync"
            className="data-[state=checked]:bg-[#2057ff]"
          />
        </div>
      </div>
    </PencilBentoCard>
  );

  // 2. Trackers Card (Top-Middle)
  const TrackersCard = (
    <PencilBentoCard>
      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2057ff]">
              {isRtl ? "تعدد القنوات" : "OMNICHANNEL"}
            </span>
            <span className="rounded-full border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] font-bold text-neutral-700">
              {isRtl ? "4 منافذ نشطة" : "4 Channels"}
            </span>
          </div>
          <h4 className="mt-1.5 text-base font-bold text-neutral-950">
            {isRtl ? "مزامنة الفروع ومنافذ البيع" : "Multi-Branch Sync"}
          </h4>
          <p className="mt-1 text-xs text-neutral-500">
            {isRtl ? "مزامنة المخزون والأسعار والطلبات لحظياً" : "Unified orders & stock across touchpoints"}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-1.5">
          {[
            { label: isRtl ? "الفرع الرئيسي" : "Flagship Store", icon: Store, iconColor: "text-[#2057ff]" },
            { label: isRtl ? "المتجر الإلكتروني" : "Online Store", icon: Globe, iconColor: "text-[#2057ff]" },
            { label: isRtl ? "تطبيق الهاتف" : "Mobile App", icon: Smartphone, iconColor: "text-[#2057ff]" },
            { label: isRtl ? "طلبات الواتساب" : "WhatsApp Orders", icon: FaWhatsapp, iconColor: "text-[#25D366]" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-100 bg-neutral-50 px-2.5 py-1.5 text-[11px] font-semibold text-neutral-800 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50/30"
              >
                <Icon className={cn("h-3 w-3 shrink-0", item.iconColor || "text-[#2057ff]")} />
                <span className="truncate">{item.label}</span>
              </span>
            );
          })}
        </div>
      </div>
    </PencilBentoCard>
  );

  // 3. Statistic Card (Top-Right - High Contrast Dark Luxury)
  const StatisticCard = (
    <PencilBentoCard dark>
      <div className="relative flex h-full flex-col justify-between p-6">
        {/* Subtle Dotted Matrix Texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
            {isRtl ? "سرعة التنفيذ" : "PEAK LATENCY"}
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <Zap className="h-4 w-4" />
          </div>
        </div>

        <div className="relative z-10 my-auto py-2">
          <div className="flex items-baseline gap-1 text-5xl sm:text-6xl font-black tracking-tight text-white font-mono">
            <span>0.3</span>
            <span className="text-2xl text-[#3b82f6]">s</span>
          </div>
          <p className="mt-1 text-xs text-neutral-400 font-medium">
            {isRtl ? "متوسط سرعة تسجيل وطباعة الطلب وقت الذروة" : "Order processing under heavy peak shift load"}
          </p>
        </div>
      </div>
    </PencilBentoCard>
  );

  // 4. Focus Card (Middle-Middle)
  const FocusCard = (
    <PencilBentoCard>
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2057ff]">
              {isRtl ? "الاستجابة" : "RESPONSE SLA"}
            </span>
            <h4 className="mt-1 text-base font-bold text-neutral-950">
              {isRtl ? "منع هدر العملاء" : "Lead Retention"}
            </h4>
          </div>
          <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#2057ff]">
            {isRtl ? "التحويل" : "CONVERSION"}
          </span>
        </div>

        <div className="my-2 flex items-baseline gap-2">
          <span className="text-4xl font-black text-neutral-950 tracking-tight font-mono">&lt; 2m</span>
          <span className="text-xs font-semibold text-emerald-600 font-mono">+42% {isRtl ? "إتمام" : "closed"}</span>
        </div>

        <div className="flex items-center justify-between border-t border-neutral-100 pt-2 text-xs text-neutral-500 font-medium">
          <span>{isRtl ? "تحويل تلقائي لمسؤول المبيعات" : "Auto-route to sales rep"}</span>
          <Activity className="h-3.5 w-3.5 text-emerald-500" />
        </div>
      </div>
    </PencilBentoCard>
  );

  // 5. Productivity Card (Middle-Right)
  const ProductivityCard = (
    <PencilBentoCard>
      <div className="flex h-full flex-col justify-between p-6">
        <div className="flex items-center justify-between">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-[#2057ff]">
            <TrendingUp className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
            {isRtl ? "تقرير الإدارة" : "OWNER DIGEST"}
          </span>
        </div>

        <div className="mt-3">
          <h4 className="text-base font-bold text-neutral-950">
            {isRtl ? "تقارير تشغيل يفهمها المالك" : "Audited Owner Reports"}
          </h4>
          <p className="mt-1 text-xs text-neutral-600 leading-relaxed font-normal">
            {isRtl
              ? "صافي أرباح الفروع وهوامش الشيفتات ونواقص المخزون في ملخص مباشر على موبايلك بدون تعقيد شيتات إكسيل."
              : "Clear branch margins, shift profits, and critical inventory alerts delivered straight to your phone."}
          </p>
        </div>
      </div>
    </PencilBentoCard>
  );

  // 6. Shortcuts Card (Wide Bottom, 2 Columns - Dark Luxury)
  const ShortcutsCard = (
    <PencilBentoCard dark>
      <div className="flex h-full flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-[#3b82f6] border border-blue-500/20">
              <Receipt className="h-4 w-4" />
            </div>
            <h4 className="text-base font-bold text-white">
              {isRtl ? "أوامر التشغيل السريع لطاقم العمل" : "Rush-Hour POS & Counter Shortcuts"}
            </h4>
          </div>
          <p className="mt-1 text-xs text-neutral-400 font-normal">
            {isRtl
              ? "اختصارات سريعة مصممة لكاشير وموظفي الاستقبال لإصدار الفواتير والبحث بدون تضييع ثانية."
              : "Engineered keyboard shortcuts for counter staff to issue tickets and lookups at maximum speed."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 text-xs shrink-0 w-full sm:w-[320px]">
          <div className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/90 px-3 py-2.5 font-mono text-neutral-200 shadow-sm transition hover:border-blue-500/50">
            <Command className="h-3.5 w-3.5 text-[#3b82f6]" />
            <span className="font-bold">K</span>
            <span className="text-[10px] text-neutral-400">{isRtl ? "بحث سريع" : "Search"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/90 px-3 py-2.5 font-mono text-neutral-200 shadow-sm transition hover:border-blue-500/50">
            <CornerDownLeft className="h-3.5 w-3.5 text-[#3b82f6]" />
            <span className="font-bold">Enter</span>
            <span className="text-[10px] text-neutral-400">{isRtl ? "إصدار فوري" : "Ticket"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/90 px-3 py-2.5 font-mono text-neutral-200 shadow-sm transition hover:border-blue-500/50">
            <span className="font-bold text-[#3b82f6]">Tab</span>
            <span className="text-[10px] text-neutral-400">{isRtl ? "العميل التالي" : "Next"}</span>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/90 px-3 py-2.5 font-mono text-neutral-200 shadow-sm transition hover:border-blue-500/50">
            <span className="font-bold text-[#3b82f6]">Esc</span>
            <span className="text-[10px] text-neutral-400">{isRtl ? "مسح / إلغاء" : "Clear"}</span>
          </div>
        </div>
      </div>
    </PencilBentoCard>
  );

  return (
    <section className="border-y border-neutral-200 bg-[#FAFAFA] py-16 md:py-24">
      <div className="container-custom">
        <PencilSectionTitle
          isRtl={isRtl}
          kicker={isRtl ? "منظومة التشغيل اليومي" : "OPERATIONAL LOGIC"}
          title={
            isRtl ? (
              <>
                برمجيات تفهم <span className="font-light italic text-neutral-500">طبيعة قطاعك وسرعة يومك.</span>
              </>
            ) : (
              <>
                Software built around <span className="font-light italic text-neutral-500">your daily trade mechanics.</span>
              </>
            )
          }
        />
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          {isRtl
            ? "بدون تعقيد أو بطء. نربط مبيعاتك وتشغيلك اليومي في شاشات سريعة يفهمها طاقم العمل وتثق بها الإدارة."
            : "No lag, zero bloated workflows. We unify frontline sales and backstage operations into fast, dependable tools your team will actually use."}
        </p>

        <div className="mt-10 md:mt-12">
          <BentoGridShowcase
            integration={IntegrationCard}
            trackers={TrackersCard}
            statistic={StatisticCard}
            focus={FocusCard}
            productivity={ProductivityCard}
            shortcuts={ShortcutsCard}
          />
        </div>
      </div>
    </section>
  );
}
