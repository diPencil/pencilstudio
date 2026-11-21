"use client";

import { useLanguage } from "@/components/language-context";
import { Reveal } from "@/components/shared/motion/reveal";
import { WhatsAppIcon } from "@/components/shared/ui/whatsapp-icon";
import Link from "next/link";
import { PhoneCall, Mail } from "lucide-react";

export function SuperfelizProCta() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <section id="pro" className="relative scroll-mt-24 container-custom py-16 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] bg-gradient-to-br from-[#143eb8] via-[#2057ff] to-[#0f34a4] px-6 py-14 text-center text-white shadow-2xl shadow-blue-500/20 sm:px-12 md:px-16 md:py-20">
          {/* Dot Matrix & Ambient Glows matching /solutions reference */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-900/40 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Top Eyebrow Tag */}
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white backdrop-blur-md">
              {isRtl ? "وصول احترافي // للشركات الشريكة" : "TAKE THE NEXT STEP // PRO ACCESS"}
            </span>

            {/* Main Headline */}
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.14]">
              {isRtl ? (
                <>
                  الباقة الاحترافية{" "}
                  <span className="block font-light italic text-neutral-400">
                    للشركات التي تبني معنا.
                  </span>
                </>
              ) : (
                <>
                  PRO for companies{" "}
                  <span className="block font-light italic text-neutral-400">
                    with us.
                  </span>
                </>
              )}
            </h2>

            {/* Description Paragraph */}
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/85">
              {isRtl
                ? "يُفتح جين وسوبر فيليز للشركات المشتركة مع بينسل أو المنفذة لخدمة لدينا. تحدث معنا ونفعّلهما لفريقك مباشرة مع أتمتة كاملة ودعم هندسي."
                : "Gen and SuperFeliz open for companies subscribed with Pencil or executing a service with us. Talk to us and we activate them for your team."}
            </p>

            {/* 3 Reference Action Buttons (White, Glass Email, Glass Direct Call) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              {/* 1. White Chat on WhatsApp button */}
              <a
                href="https://wa.me/201003778273"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-neutral-950 transition hover:bg-neutral-100 hover:scale-105 shadow-md shadow-black/10"
              >
                <WhatsAppIcon size={18} />
                <span>{isRtl ? "محادثة عبر واتساب" : "Chat on WhatsApp"}</span>
              </a>

              {/* 2. Semi-transparent Glass Email Studio button */}
              <a
                href="mailto:info@dipencil.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20 hover:scale-105 shadow-sm"
              >
                <Mail size={16} />
                <span>{isRtl ? "طلب تفعيل عبر الإيميل" : "Email Studio"}</span>
              </a>

              {/* 3. Semi-transparent Glass Direct Call button */}
              <Link
                href="/support/callback"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20 hover:scale-105 shadow-sm"
              >
                <PhoneCall size={16} />
                <span>{isRtl ? "حجز اتصال مباشر" : "Direct Call"}</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

