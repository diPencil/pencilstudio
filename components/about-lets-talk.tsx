"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Mail, Clock, Phone } from "lucide-react";

interface AboutLetsTalkProps {
  isRtl: boolean;
}

export function AboutLetsTalk({ isRtl }: AboutLetsTalkProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBFBFB] py-24 text-neutral-900 lg:py-32 select-none">
      
      {/* Background Architectural Dot Grid on Light Canvas */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-[#2057ff]/10 blur-[130px]" />
      </div>

      <div className="container-custom relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Bold Statement on crisp light canvas */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200">
              {isRtl ? "ابدأ خطوتك القادمة" : "Initiate Conversation"}
            </span>

            <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl font-normal leading-tight">
              {isRtl ? (
                <>
                  فلنتحدث معاً <span className="italic font-light text-neutral-500">عن مشروعك القادم</span>
                </>
              ) : (
                <>
                  Let&apos;s Build <span className="italic font-light text-neutral-500">Your Next Chapter</span>
                </>
              )}
            </h2>

            <p className="text-lg sm:text-xl text-neutral-600 font-normal max-w-xl leading-relaxed">
              {isRtl
                ? "عندك فكرة منصة، تطبيق، أو نظام تشغيل طموح؟ ابعت تفاصيل مشروعك وهنرجع لك برؤية حقيقية وخطوات واضحة بدل الكلام الإنشائي."
                : "Have an ambitious platform, mobile product, or business system in mind? Send us what you are building. We will reply with clear direction, not sales fluff."}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-emerald-600 font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {isRtl ? "متاحون لمشاريع جديدة — أول رد خلال 24 ساعة" : "CURRENTLY ONBOARDING SELECT CLIENTS — FIRST RESPONSE IN 24H"}
              </span>
            </div>
          </div>

          {/* Right Column: High-Grade Monolithic Dark Action Desk */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8 text-white shadow-2xl backdrop-blur-xl space-y-3">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase text-white/50 tracking-wider">
                  {isRtl ? "قنوات التواصل المباشرة" : "DIRECT STUDIO DESK"}
                </span>
                <span className="text-[11px] font-mono text-blue-400 font-bold">PCL-DIRECT</span>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href="https://wa.me/201003778273"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10"
              >
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {isRtl ? "محادثة واتساب فورية" : "WhatsApp Direct Line"}
                    </div>
                    <div className="text-xs font-mono text-white/50">+20 100 377 8273</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Direct Phone Line Action */}
              <a
                href="tel:+201003778273"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10"
              >
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                      {isRtl ? "اتصال هاتفي مباشر" : "Direct Phone Line"}
                    </div>
                    <div className="text-xs font-mono text-white/50">+20 100 377 8273</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Direct Email Action */}
              <a
                href="mailto:info@dipencil.com"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
              >
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {isRtl ? "مراسلة عبر الإيميل" : "Official Studio Email"}
                    </div>
                    <div className="text-xs font-mono text-white/50">info@dipencil.com</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Primary Contact Page Button */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#2057ff] py-4 px-6 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:bg-[#1848dc] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
              >
                <span>{isRtl ? "نموذج استشارة المشروع الكاملة" : "Book a Project Consultation"}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {isRtl ? "ساعات العمل: 9ص - 7م (GMT+2)" : "STUDIO HOURS: 9AM - 7PM (GMT+2)"}
                </span>
                <span>CAIRO HQ</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
