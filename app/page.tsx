import dynamic from "next/dynamic"
import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

// Below-fold sections: code-split so initial bundle stays small.
// ssr: true keeps SEO, but JS is split into separate chunks loaded on demand.
const FeaturedProducts = dynamic(
  () => import("@/components/featured-products").then((m) => m.FeaturedProducts),
  { ssr: true }
)
const CollectionStrip = dynamic(
  () => import("@/components/collection-strip").then((m) => m.CollectionStrip),
  { ssr: true }
)
const PortfolioSection = dynamic(
  () => import("@/components/portfolio-section").then((m) => m.PortfolioSection),
  { ssr: true }
)
const IdeaToProductSection = dynamic(
  () => import("@/components/idea-to-product-section").then((m) => m.IdeaToProductSection),
  { ssr: true }
)
const TechnologyEcosystemSection = dynamic(
  () => import("@/components/technology-ecosystem-section").then((m) => m.TechnologyEcosystemSection),
  { ssr: true }
)
const BusinessFeaturesSection = dynamic(
  () => import("@/components/business-features-section").then((m) => m.BusinessFeaturesSection),
  { ssr: true }
)
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((m) => m.TestimonialsSection),
  { ssr: true }
)
const BrandsSection = dynamic(
  () => import("@/components/brands-section").then((m) => m.BrandsSection),
  { ssr: true }
)
const SuperFelizCinematicSection = dynamic(
  () => import("@/components/superfeliz-cinematic-section").then((m) => m.SuperFelizCinematicSection),
  { ssr: true }
)
const NewsletterSection = dynamic(
  () => import("@/components/newsletter-section").then((m) => m.NewsletterSection),
  { ssr: true }
)
const Footer = dynamic(() => import("@/components/footer").then((m) => m.Footer), {
  ssr: true,
})

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <FeaturedProducts />
        <CollectionStrip />
        <PortfolioSection />
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
