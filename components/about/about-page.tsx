"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLanguage } from "@/components/language-context";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStatementLanes } from "@/components/about/about-statement-lanes";
import { AboutCuratedGallery } from "@/components/about/about-curated-gallery";
import { AboutDecadeStory } from "@/components/about/about-decade-story";
import { AboutSuperFeliz } from "@/components/about/about-superfeliz";
import { AboutLetsTalk } from "@/components/about/about-lets-talk";

export function AboutPage() {
  const { locale } = useLanguage();
  const isRtl = locale === "ar";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#FBFBFB] text-neutral-900 selection:bg-[#2057ff] selection:text-white">
      <Header light={true} />
      <AboutHero isRtl={isRtl} />
      <AboutStatementLanes isRtl={isRtl} />
      <AboutCuratedGallery isRtl={isRtl} />
      <AboutDecadeStory isRtl={isRtl} />
      <AboutSuperFeliz isRtl={isRtl} />
      <AboutLetsTalk isRtl={isRtl} />
      <Footer />
    </div>
  );
}
