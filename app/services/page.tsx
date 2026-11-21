"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/shared/motion/reveal";
import { LanguageProvider, useLanguage } from "@/components/language-context";
import { EditorialPageHero, StatStrip } from "@/components/editorial";
import { services, type Service } from "@/lib/services/services";
import { cn } from "@/lib/utils";

const serviceImages: Record<string, string> = {
  "brand-identity": "/services/hero-brand-identity-creative-design.jpg",
  "websites-platforms": "/services/hero-websites-digital-platforms.jpg",
  "mobile-apps-saas": "/services/hero-mobile-apps-saas-products.jpg",
  "business-systems": "/services/hero-business-systems-dashboards.jpg",
  "marketing-growth": "/services/hero-marketing-growth-systems.jpg",
  "hosting-cloud": "/services/hero-hosting-cloud-tech-support.jpg",
};

function ServiceCard({ service: s, isRtl }: { service: Service; isRtl: boolean }) {
  const imageSrc = serviceImages[s.slug] || s.heroImage;

  return (
    <Link
      href={`/services/${s.slug}`}
      className="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:border-neutral-900 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={imageSrc}
          alt={isRtl ? s.nameAr : s.nameEn}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <span className="absolute start-4 top-4 rounded-full border border-neutral-200/80 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-800 shadow-xs backdrop-blur-md">
          {isRtl ? s.badgeAr : s.badgeEn}
        </span>
        <span
          className="absolute bottom-4 start-4 rounded-full border border-neutral-200/60 bg-white px-3 py-1 text-[11px] font-bold text-neutral-900 shadow-md"
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
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header light />

      {/* Editorial Page Hero (matching /solutions and /sectors) */}
      <EditorialPageHero
        isRtl={isRtl}
        cards={[
          {
            letter: "B",
            label: isRtl ? "الهوية" : "BRAND",
            index: "01",
            src: "/about/identity.mp4",
          },
          {
            letter: "W",
            label: isRtl ? "المنصات" : "WEB PLATFORMS",
            index: "02",
            src: "/about/systems.mp4",
          },
          {
            letter: "A",
            label: isRtl ? "التطبيقات" : "APPS & SAAS",
            index: "03",
            src: "/about/scale.mp4",
          },
        ]}
        title={
          isRtl ? (
            <>
              <span className="text-[#2057ff]">خدمات</span> صُنعت لتصنع الفارق
              <span className="text-[#2057ff]">.</span>
            </>
          ) : (
            <>
              <span className="text-[#2057ff]">SERVICES</span> CRAFTED FOR SCALE
              <span className="text-[#2057ff]">.</span>
            </>
          )
        }
        subtitle={
          isRtl
            ? "ست تخصصات رقمية متكاملة تغطي دورة حياة مشروعك: من الهوية المؤسسية والمنصات السحابية، إلى التطبيقات الذكية والأتمتة والدعم المستمر."
            : "Six integrated disciplines covering your entire digital lifecycle: from brand identity and web platforms to apps, automation, and managed cloud."
        }
        leftMeta={isRtl ? ["الهوية والتصميم", "البرمجة والويب", "السحابة والذكاء"] : ["BRAND IDENTITY", "WEB & APPS", "CLOUD & AI"]}
        rightMeta={{
          brand: "PENCIL STUDIO",
          line: isRtl ? "الخدمات // 2026" : "SERVICES // 2026",
          accent: isRtl ? "تنفيذ بلا تنازل" : "UNCOMPROMISED CRAFT",
        }}
        ticker={{
          status: isRtl ? "ست ركائز خدمية تقود مسيرة نموك الرقمي" : "SIX CORE DISCIPLINES DRIVING DIGITAL GROWTH",
          locations: ["CAIRO", "DUBAI", "RIYADH", "BERLIN"],
        }}
      />

      <StatStrip
        items={[
          {
            value: isRtl ? "6 خدمات" : "6 Services",
            label: isRtl ? "تخصصات دقيقة ومستقلة" : "Deep Vertical Capabilities",
          },
          {
            value: isRtl ? "+10 سنوات" : "+10 Years",
            label: isRtl ? "خبرة في الأسواق الإقليمية" : "Regional Market Mastery",
          },
          {
            value: isRtl ? "100% مخصص" : "100% Bespoke",
            label: isRtl ? "تصميم وهندسة بلا قوالب" : "Zero Templates Or Shortcuts",
          },
          {
            value: isRtl ? "يبدأ من $450" : "From $450",
            label: isRtl ? "باقات واضحة وشفافة" : "Transparent Tiered Pricing",
          },
        ]}
      />

      <section className="container-custom py-14 md:py-20">
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
