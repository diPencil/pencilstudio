"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";
import { AboutHero } from "@/components/about-hero";
import { AboutStatementLanes } from "@/components/about-statement-lanes";
import { AboutCuratedGallery } from "@/components/about-curated-gallery";
import { AboutDecadeStory } from "@/components/about-decade-story";
import { AboutSuperFeliz } from "@/components/about-superfeliz";
import { AboutLetsTalk } from "@/components/about-lets-talk";

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
