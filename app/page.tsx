"use client"
import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { CollectionStrip } from "@/components/collection-strip"
import { MaterialsSection } from "@/components/materials-section"
import { IdeaToProductSection } from "@/components/idea-to-product-section"
import { TechnologyEcosystemSection } from "@/components/technology-ecosystem-section"
import { BusinessFeaturesSection } from "@/components/business-features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BrandsSection } from "@/components/brands-section"
import { SuperFelizCinematicSection } from "@/components/superfeliz-cinematic-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <FeaturedProducts />
        <CollectionStrip />
        <MaterialsSection />
        <IdeaToProductSection />
        <TechnologyEcosystemSection />
        <BusinessFeaturesSection />
        <TestimonialsSection />
        <BrandsSection />
        <SuperFelizCinematicSection />
        <NewsletterSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
