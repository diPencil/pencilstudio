"use client"

import Image from "next/image"
import { Reveal } from "@/components/shared/motion/reveal"
import { useLanguage } from "@/components/language-context"
import { ArrowDownRight, Cpu, Globe, ShieldCheck, Workflow } from "lucide-react"
import { PencilButton } from "@/components/ui/pencil-button"
import { cn } from "@/lib/utils"

export function CloudInfrastructureSection() {
  const { locale } = useLanguage()
  const isRtl = locale === "ar"

  return (
    <section className="relative overflow-hidden border-b border-neutral-200/90 bg-[#FFFFFF] pt-20 sm:pt-28 pb-0">
      {/* Header: Left Headline vs Right Minimal Arrow & Note (Constrained in container) */}
      <div className="container-custom max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 sm:pb-16">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                {isRtl ? "المعايير الهندسية للبنية التحتية" : "INFRASTRUCTURE STANDARDS // 2026"}
              </span>
              <h2 className={cn("mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-900 leading-[1.14]", isRtl ? "tracking-normal" : "tracking-tight")}>
                {isRtl ? (
                  <>
                    بنية سحابية للضغط العالي،{" "}
                    <span className="font-light italic text-neutral-500">
                      وراحة بال تامة.
                    </span>
                  </>
                ) : (
                  <>
                    Heavy-duty cloud performance,{" "}
                    <span className="font-light italic text-neutral-500">
                      zero maintenance friction.
                    </span>
                  </>
                )}
              </h2>
            </div>

            <div className="flex items-start gap-3.5 max-w-xl pt-1">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2057FF] text-white shadow-sm mt-1">
                <ArrowDownRight size={17} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-neutral-950">
                  {isRtl
                    ? "بنية سحابية معزولة عتادياً بالكامل"
                    : "Hardware-Isolated Hypervisor Infrastructure"}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {isRtl
                    ? "لا نستخدم استضافات مشتركة مقيدة. كل مشروع يحصل على بنية سحابية معزولة عتادياً مع تخزين NVMe فائق السرعة وفريق هندسي يتابع الأداء استباقياً على مدار الساعة."
                    : "We don't use shared hosting or throttled budget setups. Every environment is isolated at the hypervisor level with pure NVMe Gen4 storage, backed by proactive engineers who monitor latency and traffic 24/7."}
                </p>

                {/* Action CTA + SLA Status */}
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <PencilButton
                    href="/#contact"
                    variant="primary"
                    size="md"
                    hoverLabel={isRtl ? "احجز تدقيق السيرفر ←" : "Claim free audit →"}
                  >
                    <span>{isRtl ? "اطلب تدقيق ونقل سيرفرك مجاناً" : "Claim Free Cloud Audit & Migration"}</span>
                  </PencilButton>

                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{isRtl ? "99.99% ضمان اتفاقية التشغيل" : "99.99% Uptime SLA Guaranteed"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Overlapping Showcase Area */}
      <div className="relative w-full">
        {/* 4 Cards Grid (Layered on top with z-20 inside container) */}
        <div className="container-custom max-w-7xl relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {/* ── CARD 1: AMD EPYC & NVMe Gen4 ── */}
            <Reveal delay={0.1}>
              <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl border border-neutral-100 bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-neutral-900/10 transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                    100% vCPU
                  </p>
                  <h3 className="mt-3 flex items-center gap-2 text-sm sm:text-base font-black text-neutral-950">
                    <Cpu size={16} className="text-[#2057FF] shrink-0" strokeWidth={2.2} />
                    <span>
                      {isRtl
                        ? "معالجات AMD EPYC وتخزين NVMe Gen4"
                        : "AMD EPYC™ & Pure NVMe Gen4"}
                    </span>
                  </h3>
                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                    {isRtl
                      ? "أنوية معالجة معزولة عتادياً بالكامل. لا مشاركة في الموارد ولا بطء وقت الذروة، مع استجابة لقواعد البيانات في أجزاء من الثانية."
                      : "Dedicated virtual cores with hardware-level isolation. Zero noisy-neighbor throttling, sub-millisecond database queries."}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ── CARD 2: Standout Royal Blue Card (Elevated UPWARDS matching Reference) ── */}
            <Reveal delay={0.15}>
              <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl bg-[#2057FF] text-white p-6 sm:p-7 flex flex-col justify-start shadow-2xl shadow-blue-600/40 lg:-translate-y-8 transition-transform duration-300 hover:lg:-translate-y-9 hover:-translate-y-1">
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight">
                    &lt; 18ms
                  </p>
                  <h3 className="mt-3 flex items-center gap-2 text-sm sm:text-base font-black text-white">
                    <Globe size={16} className="text-white shrink-0" strokeWidth={2.2} />
                    <span>
                      {isRtl
                        ? "مسارات شبكية منخفضة التأخير عالمياً"
                        : "Low-Latency Global Edge Routing"}
                    </span>
                  </h3>
                  <p className="mt-2 text-xs text-blue-100/90 leading-relaxed">
                    {isRtl
                      ? "عقد استراتيجية في الرياض، دبي، فرانكفورت والقاهرة. سرعة وصول أقل من 20 مللي ثانية في الخليج ومصر بتوجيه Anycast."
                      : "Strategic Tier-IV nodes in Riyadh, Dubai, Frankfurt, and Cairo. Sub-20ms latency across MENA and GCC with global Anycast BGP routing."}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ── CARD 3: 500+ Gbps Anti-DDoS & Daily Snapshots ── */}
            <Reveal delay={0.2}>
              <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl border border-neutral-100 bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-neutral-900/10 transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                    500+ Gbps
                  </p>
                  <h3 className="mt-3 flex items-center gap-2 text-sm sm:text-base font-black text-neutral-950">
                    <ShieldCheck size={16} className="text-[#2057FF] shrink-0" strokeWidth={2.2} />
                    <span>
                      {isRtl
                        ? "حماية DDoS حتى 500+ Gbps ونسخ آلي"
                        : "500+ Gbps DDoS & Daily Snapshots"}
                    </span>
                  </h3>
                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                    {isRtl
                      ? "فلاتر شبكية لحظية تصد الهجمات قبل وصولها لمنفذك. نسخ احتياطي يومي مشفر في موقع جغرافي منفصل مع استرجاع بضغطة زر."
                      : "Real-time edge scrubbing filters attacks before reaching your port. Daily automated offsite snapshots with zero-data-loss RPO."}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ── CARD 4: Zero-Downtime Concierge Migration ── */}
            <Reveal delay={0.25}>
              <div className="h-full min-h-[190px] sm:min-h-[210px] rounded-3xl border border-neutral-100 bg-white p-6 sm:p-7 flex flex-col justify-start shadow-xl shadow-neutral-900/10 transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <p className="font-mono text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                    0 Min
                  </p>
                  <h3 className="mt-3 flex items-center gap-2 text-sm sm:text-base font-black text-neutral-950">
                    <Workflow size={16} className="text-[#2057FF] shrink-0" strokeWidth={2.2} />
                    <span>
                      {isRtl
                        ? "نقل احترافي مجاني بدون ثانية توقف"
                        : "Zero-Downtime Concierge Migration"}
                    </span>
                  </h3>
                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                    {isRtl
                      ? "فريقنا الهندسي يتكفل بكل شيء: تدقيق بيئة التشغيل، مزامنة قواعد البيانات والملفات، وضبط الـ DNS دون توقف موقعك ثانية واحدة."
                      : "Our engineers handle the full migration: code audit, background database synchronization, and DNS cutover without downtime."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* FULL BLEED IMAGE: Edge-to-Edge 100vw, NO border, NO rounded curve, NO shadow! */}
        <Reveal delay={0.2}>
          <div className="relative z-10 -mt-24 sm:-mt-28 lg:-mt-32 w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[500px] overflow-hidden">
            <Image
              src="/solutions/Heavy-duty-cloud-performance.jpg"
              alt={isRtl ? "بنية سحابية للضغط العالي" : "Heavy-duty cloud performance"}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

