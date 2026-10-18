"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { LanguageProvider, useLanguage } from "@/components/language-context";
import { services, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

const serviceVideos: Record<string, string> = {
  "brand-identity": "/signature-capabilities/brand-identity-creative-design.mp4",
  "websites-platforms": "/signature-capabilities/websites-digital-platforms.mp4",
  "mobile-apps-saas": "/signature-capabilities/mobile-apps-saas-products.mp4",
  "business-systems": "/signature-capabilities/business-systems-dashboards.mp4",
  "marketing-growth": "/signature-capabilities/marketing-growth-systems.mp4",
  "hosting-cloud": "/signature-capabilities/hosting-cloud-tech-support.mp4",
};

function ServiceCard({ service: s, isRtl }: { service: Service; isRtl: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = serviceVideos[s.slug];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <Link
      href={`/services/${s.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:border-neutral-900 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={`${videoSrc}#t=0.001`}
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
          />
        ) : (
          <Image
            src={s.heroImage}
            alt={isRtl ? s.nameAr : s.nameEn}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <span className="absolute start-4 top-4 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          {isRtl ? s.badgeAr : s.badgeEn}
        </span>
        <span
          className="absolute bottom-4 start-4 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-neutral-900 shadow-sm"
          dir="ltr"
        >
          {isRtl ? s.priceAr : s.priceEn}
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold leading-snug">{isRtl ? s.nameAr : s.nameEn}</h2>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500">
          {isRtl ? s.taglineAr : s.taglineEn}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold">
          {isRtl ? "افتح صفحة الخدمة" : "Open service page"}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

function ServicesGrid() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header solid />
      {/* Small page hero */}
      <section className="border-b border-neutral-200 bg-white pb-10 pt-32 md:pb-14 md:pt-40">
        <div className="container-custom">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
              {isRtl ? "خدماتنا" : "Our services"}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              {isRtl ? (
                <>
                  ست خدمات، <span className="font-light italic text-neutral-500">كل واحدة صفحة كاملة.</span>
                </>
              ) : (
                <>
                  Six services, <span className="font-light italic text-neutral-500">each with its own page.</span>
                </>
              )}
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
              {isRtl
                ? "انقر على أي خدمة وشاهد التفاصيل والصور وموضع الفيديو والأسعار والأسئلة الشائعة. كله بالعربية والإنجليزية."
                : "Open any service to see details, images, video slot, pricing and FAQs. Fully bilingual."}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[isRtl ? "6 خدمات" : "6 services", isRtl ? "عربي + إنجليزي" : "AR + EN", isRtl ? "يبدأ من $450" : "From $450"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-bold text-neutral-700"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-custom py-10 md:py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={0.04 * i}>
              <ServiceCard service={s} isRtl={isRtl} />
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <LanguageProvider>
      <ServicesGrid />
    </LanguageProvider>
  );
}
