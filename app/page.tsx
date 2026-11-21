import dynamic from "next/dynamic"
import { LanguageProvider } from "@/components/language-context"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/home/hero-section"

// Below-fold sections: code-split so initial bundle stays small.
// ssr: true keeps SEO, but JS is split into separate chunks loaded on demand.
const DynamicCapabilitiesSection = dynamic(
  () => import("@/components/home/dynamic-capabilities-section").then((m) => m.DynamicCapabilitiesSection),
  { ssr: true }
)
const SectorsStackShowcase = dynamic(
  () => import("@/components/sectors/sectors-stack-showcase").then((m) => m.SectorsStackShowcase),
  { ssr: true }
)
const PortfolioSection = dynamic(
  () => import("@/components/work/portfolio-section").then((m) => m.PortfolioSection),
  { ssr: true }
)
const IdeaToProductSection = dynamic(
  () => import("@/components/home/idea-to-product-section").then((m) => m.IdeaToProductSection),
  { ssr: true }
)
const TechnologyEcosystemSection = dynamic(
  () => import("@/components/home/technology-ecosystem-section").then((m) => m.TechnologyEcosystemSection),
  { ssr: true }
)
const BusinessFeaturesSection = dynamic(
  () => import("@/components/home/business-features-section").then((m) => m.BusinessFeaturesSection),
  { ssr: true }
)
const TestimonialsSection = dynamic(
  () => import("@/components/home/testimonials-section").then((m) => m.TestimonialsSection),
  { ssr: true }
)
const BrandsSection = dynamic(
  () => import("@/components/home/brands-section").then((m) => m.BrandsSection),
  { ssr: true }
)
const ExplorePencilSection = dynamic(
  () => import("@/components/home/explore-pencil-section").then((m) => m.ExplorePencilSection),
  { ssr: true }
)
const SuperFelizCinematicSection = dynamic(
  () => import("@/components/superfeliz/superfeliz-cinematic-section").then((m) => m.SuperFelizCinematicSection),
  { ssr: true }
)
const NewsletterSection = dynamic(
  () => import("@/components/home/newsletter-section").then((m) => m.NewsletterSection),
  { ssr: true }
)
const Footer = dynamic(() => import("@/components/layout/footer").then((m) => m.Footer), {
  ssr: true,
})

export default function HomePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <ExplorePencilSection />
        <BrandsSection />
        <DynamicCapabilitiesSection />
        <SectorsStackShowcase />
        <TechnologyEcosystemSection />
        <SuperFelizCinematicSection />
        <PortfolioSection />
        <IdeaToProductSection />
        <BusinessFeaturesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
